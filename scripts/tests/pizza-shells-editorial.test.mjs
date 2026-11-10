import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';
import { z } from 'astro/zod';
import {
  createFormulaSchema,
  formulaIngredients,
  formulaDirections,
  formulaShoppingList,
  amount,
} from '../../src/lib/recipe-formula.mjs';
import { buildRecipeSchema } from '../../src/lib/recipe-schema.mjs';

const read = (slug, collection = 'recipes') =>
  matter(fs.readFileSync(`src/content/${collection}/${slug}.md`, 'utf8'));
const ingredient = (data, component, id) =>
  data.formula.components.find((c) => c.id === component).ingredients.find((i) => i.id === id);
const step = (data, id) => data.formula.steps.find((s) => s.id === id).text;
const slugs = ['pizza', 'homemade-pizza-night', 'stuffed-shells-filled-with-spinach-and-ricotta'];

test('three revised recipes have valid complete formulas and fresh generated views', () => {
  for (const slug of slugs) {
    const { data, content } = read(slug);
    createFormulaSchema(z).parse(data.formula);
    assert.deepEqual(data.ingredients, formulaIngredients(data.formula));
    assert.equal(
      content.match(/^## Directions\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m)[1].trim(),
      formulaDirections(data.formula).trim()
    );
    assert.equal(data.scaling.mode, 'fixed');
    assert.equal(data.learning.review.status, 'editorial-review');
    assert.equal(data.nutrition, undefined);
    for (const factor of [0.5, 1, 2])
      assert(formulaIngredients(data.formula, factor).length === data.ingredients.length);
  }
});

test('family pizza keeps the family list and carries measured portions in the Suggested Tweak', () => {
  const { data, content } = read('pizza');
  // The family original (045e5ba2) lists six ingredients with no amounts. The page keeps them.
  const ids = data.formula.components.flatMap((c) => c.ingredients.map((i) => i.id));
  assert.deepEqual(ids.sort(), [
    'mozzarella',
    'pepperoni',
    'pineapple',
    'pizza-sauce',
    'prepared-pizza-dough',
    'spinach',
  ]);
  assert.equal(ingredient(data, 'base', 'prepared-pizza-dough').quantity.amount, 2);
  for (const id of ['pizza-sauce', 'mozzarella', 'pepperoni', 'pineapple', 'spinach'])
    assert.equal(ingredient(data, 'base', id).quantity, undefined);
  // The October totals, halved per pizza, now live in the Suggested Tweak.
  const tweak = content.split(/^## Suggested Tweak\s*$/m)[1];
  assert(tweak, 'family pizza keeps a Suggested Tweak');
  for (const total of [
    /600 g\) pizza dough in two balls/,
    /1 cup thick pizza sauce/,
    /12 oz whole-milk low-moisture mozzarella/,
    /2 oz pepperoni/,
    /3\/4 cup fresh pineapple/,
    /1 1\/2 cups baby spinach/,
    /Split the toppings evenly between the pies/,
  ])
    assert.match(tweak, total);
  for (const [total, per] of [
    [600, 300],
    [12, 6],
    [60, 30],
    [120, 60],
    [40, 20],
  ])
    assert.equal(per * 2, total);
  assert(!content.includes('fresh-pasta-dough'));
  assert(!data.dietary.includes('vegetarian'));
  // Spinach still goes on at the end of the bake, after the main bake.
  assert.deepEqual(ingredient(data, 'base', 'spinach').uses, [{ step: 'bake', share: 1 }]);
  assert.match(step(data, 'bake'), /10 to 13 minutes/);
  assert.match(step(data, 'bake'), /1 to\s+2 minutes more/);
  // learning.timing was removed by the style guide. The plain times carry the schedule.
  assert.equal(data.learning.timing, undefined);
  assert.equal(data.totalTime, '50 min');
});

test('both pizza recipes heat to 500°F, assemble on a cool pan and never use parchment', () => {
  for (const slug of ['pizza', 'homemade-pizza-night']) {
    const { data, content } = read(slug);
    const heat = data.formula.steps.find((s) => s.id === 'oven' || s.id === 'heat').text;
    assert.match(heat, /500°F/);
    assert(!/parchment/i.test(content), `${slug} does not use parchment`);
    assert.match(step(data, 'bake'), /bottom is browned/);
  }
  // Family pizza: each round goes on its own pan and the pizzas bake one at a time.
  const pizza = read('pizza').data;
  assert.match(step(pizza, 'shape'), /its own lightly oiled pizza pan/);
  assert.match(step(pizza, 'bake'), /one pizza at a time/);
  // No-knead pizza: stretched onto a cool pan, two pans alternate, pans cool before reuse.
  const night = read('homemade-pizza-night').data;
  assert.match(step(night, 'shape'), /cool pan/);
  assert.match(step(night, 'bake'), /second pan while the first one bakes/);
  assert.match(step(night, 'finish'), /letting each pan cool before you stretch dough on it/);
  // The stone route is now a swap: a cold oven start is implied by the one-hour heat and a peel.
  const stone = night.learning.substitutions.find((s) => s.ingredient === 'Pizza stone');
  assert.match(stone.effect, /1 hour/);
  assert.match(stone.effect, /peel/);
});

test('no-knead formula uses weighed source amounts and a bounded fermentation', () => {
  const { data } = read('homemade-pizza-night');
  const amounts = Object.fromEntries(
    data.formula.components[0].ingredients
      .filter((i) => i.quantity)
      .map((i) => [i.id, amount(i.quantity.amount)])
  );
  assert.deepEqual(amounts, { flour: 500, water: 350, 'fine-sea-salt': 16, 'active-dry-yeast': 1 });
  assert.equal(amounts.water / amounts.flour, 0.7);
  assert.equal(
    Object.values(amounts).reduce((a, b) => a + b, 0),
    867
  );
  // Dusting flour and pan oil stay unmeasured handling lines.
  for (const id of ['portion-flour', 'pan-oil'])
    assert.equal(ingredient(data, 'dough', id).quantity, undefined);
  assert.match(step(data, 'ferment'), /room temperature/);
  assert.match(step(data, 'ferment'), /more than doubled, about 18 hours/);
  assert.match(step(data, 'portion'), /four pieces/);
  assert.match(step(data, 'portion'), /about 1 hour/);
  // The refrigerated dough branch now lives in storage.
  assert.match(data.learning.storage, /3 days in the fridge/);
  assert.match(data.learning.storage, /2 to 3 hours before\s+stretching/);
  // 14-inch route was removed by the rewrite (one route only). Four 10-inch rounds remain.
  assert.match(step(data, 'shape'), /10-inch round/);
  assert(!data.formula.steps.some((s) => /14-inch/.test(s.text)));
});

test('no-knead sauce and cheeses reconcile across four pizzas with deliberate sauce surplus', () => {
  const { data, content } = read('homemade-pizza-night');
  assert.equal(ingredient(data, 'assembly', 'mozzarella').quantity.amount, 12);
  assert.equal(ingredient(data, 'assembly', 'parmesan').quantity.amount, 1);
  assert.equal(4 * 3, 12);
  assert.equal(4 * 0.25, 1);
  // Cheese is portioned four ways and layered half, toppings, half plus Parmesan.
  assert.match(step(data, 'top'), /four portions/);
  assert.match(step(data, 'top'), /half of one portion's mozzarella/);
  assert.match(step(data, 'top'), /rest of its mozzarella and its Parmesan/);
  assert.match(step(data, 'sauce'), /makes more than the pizzas need/);
  assert.match(step(data, 'sauce'), /refrigerate the rest/);
  const prepared = data.learning.substitutions.find((s) => s.ingredient === 'Sauce');
  assert.match(prepared.effect, /3\/4 cup/);
  assert.equal(ingredient(data, 'sauce', 'garlic').quantity.amount, 3);
  // Topping examples are ready-to-eat or quick-cooking. No raw meat is suggested.
  const toppings = ingredient(data, 'assembly', 'prepared-toppings');
  assert.match(toppings.preparation, /pepperoni/);
  assert(!/sausage|bacon|chicken/i.test(toppings.preparation));
  assert(!content.includes('Simple Sauce Recipe'));
});

test('shells allocate the entire cheese and prepared sauce batches', () => {
  const { data, content } = read('stuffed-shells-filled-with-spinach-and-ricotta');
  for (const [id, total] of [
    ['mozzarella', 8],
    ['parmigiano', 2],
  ]) {
    const item = ingredient(data, 'filling', id);
    assert.equal(item.quantity.amount, total);
    assert.deepEqual(item.uses, [
      { step: 'filling', share: '2/3' },
      { step: 'cheese', share: '1/3' },
    ]);
    assert(Math.abs(item.uses.reduce((sum, u) => sum + total * amount(u.share), 0) - total) < 1e-9);
  }
  const sauce = ingredient(data, 'sauce', 'marinara');
  assert.equal(sauce.quantity.amount, 4);
  assert.deepEqual(sauce.uses, [
    { step: 'dishes', share: '1/4' },
    { step: 'top', share: '3/4' },
  ]);
  assert(Math.abs(sauce.uses.reduce((sum, u) => sum + amount(u.share), 0) - 1) < 1e-9);
  assert.equal(ingredient(data, 'pasta', 'jumbo-shells').quantity.amount, 24);
  assert.equal(ingredient(data, 'filling', 'ricotta').quantity.amount, 15);
  assert(!content.includes('roasted-tomato-basil-soup'));
  assert(!content.includes('15 oz minimum'));
  assert(!formulaShoppingList(data.formula).some((x) => x.startsWith('water,')));
});

test('shell method seasons up front, bakes in one layer to a bubbling cue and keeps cold assembly', () => {
  const { data, content } = read('stuffed-shells-filled-with-spinach-and-ricotta');
  // The filling is seasoned by measure (1/2 tsp kosher salt), so there is no tasting step
  // around the raw egg. The egg goes into the same fold.
  assert.equal(amount(ingredient(data, 'filling', 'filling-salt').quantity.amount), 0.5);
  assert.deepEqual(ingredient(data, 'filling', 'egg').uses, [{ step: 'filling', share: 1 }]);
  assert(!/\btaste\b/i.test(step(data, 'filling')));
  assert.match(step(data, 'fill'), /single\s+layer/);
  assert.match(step(data, 'setup'), /375°F/);
  // The 165°F probe was dropped by the style guide (casseroles use texture cues).
  assert(!content.includes('165°F'));
  assert.match(step(data, 'bake'), /25 minutes/);
  assert.match(step(data, 'bake'), /15 to 20 minutes/);
  assert.match(step(data, 'bake'), /sauce bubbles at the edges/);
  assert.match(
    data.learning.storage,
    /refrigerate covered and add 10 to 15 minutes to the covered bake/
  );
  const spinach = data.learning.substitutions.find((s) => s.ingredient === 'Fresh baby spinach');
  assert.match(spinach.alternative, /10 oz spinach/);
  assert.equal(ingredient(data, 'greens', 'baby-spinach').quantity.amount, 5);
  assert(!data.dietary.includes('vegetarian'));
});

test('meal declares every starting condition and preserves six full component servings', () => {
  const { data, content } = read('stuffed-shells-dinner', 'meals');
  const refs = [data.main, ...data.sides, data.salad];
  assert.deepEqual(Object.keys(data.componentPreparation).sort(), refs.sort());
  assert.equal(data.servings, '6');
  assert.match(data.componentPreparation[data.main].note, /4 measured cups/);
  assert.match(data.componentPreparation['garlic-bread'].note, /400 g.*softened butter/);
  assert.match(data.componentPreparation['arugula-feta-salad'].note, /already toasted/);
  assert.match(content, /twelve pieces/);
  assert.match(content, /95–110 minutes/);
  assert.match(content, /Raise the oven to 400°F/);
  assert.match(content, /minimum ten-minute rest overlaps/);
  assert.match(content, /165°F \/ 74°C/);
  assert(35 + 40 + 5 + 12 >= 90);
  assert(35 + 45 + 10 + 15 <= 110);
  for (const ref of refs) {
    assert.equal(read(ref).data.learning.review.status, 'editorial-review');
    assert(fs.existsSync(`docs/reviews/${ref}.md`));
  }
});

test('revised recipe times and cooked-topping constraints survive JSON-LD', () => {
  for (const [slug, expected] of [
    ['pizza', ['PT20M', 'PT30M', 'PT50M']],
    // "1 hr 45 min, plus 19 hr rising" is the full elapsed time: 105 + 1140 minutes.
    ['homemade-pizza-night', ['PT45M', 'PT1H', 'PT20H45M']],
    ['stuffed-shells-filled-with-spinach-and-ricotta', ['PT35M', 'PT45M', 'PT1H30M']],
  ]) {
    const { data, content } = read(slug);
    const schema = buildRecipeSchema(
      data,
      content,
      `https://jordansilton.com/mise/recipes/${slug}/`
    );
    assert.deepEqual([schema.prepTime, schema.cookTime, schema.totalTime], expected);
    if (slug === 'homemade-pizza-night') {
      assert.equal(data.totalTime, '1 hr 45 min, plus 19 hr rising');
      // Topping examples stay ready-to-eat or quick-cooking in the exported ingredients.
      const toppings = schema.recipeIngredient.find((line) => line.startsWith('pizza toppings'));
      assert.match(toppings, /pepperoni/);
      assert(!/sausage|bacon|chicken/i.test(toppings));
    }
  }
});
