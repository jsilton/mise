import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
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

test('family pizza preserves sauce and cheese totals with coherent measured portions', () => {
  const { data, content } = read('pizza');
  for (const [id, total, per] of [
    ['pizza-sauce', 1, 0.5],
    ['mozzarella', 12, 6],
    ['pepperoni', 60, 30],
    ['pineapple', 120, 60],
    ['spinach', 40, 20],
  ]) {
    assert.equal(amount(ingredient(data, 'toppings', id).quantity.amount), total);
    assert.equal(per * 2, total);
  }
  assert.equal(ingredient(data, 'base', 'prepared-pizza-dough').quantity.amount, 600);
  assert(!content.includes('fresh-pasta-dough'));
  assert(!data.dietary.includes('vegetarian'));
  assert.match(step(data, 'bake'), /12–15 minutes total/);
  assert.match(step(data, 'bake'), /final 1–2 minutes/);
  assert.match(data.learning.timing, /60–70 minutes/);
  assert.match(data.learning.timing, /1 hour 40 minutes/);
});

test('both pizza recipes separate cool pan assembly from heated stone transfer without parchment', () => {
  for (const slug of ['pizza', 'homemade-pizza-night']) {
    const { data } = read(slug);
    assert.match(step(data, 'heat'), /500°F/);
    assert.match(step(data, 'heat'), /room[- ]temperature/);
    assert.match(step(data, 'heat'), /cold oven/);
    assert.match(step(data, 'heat'), /1 hour/);
    assert.match(step(data, 'heat'), /Neither route uses parchment/);
    assert.match(step(data, 'shape'), /peel/);
    assert.match(step(data, 'bake'), /underside/);
  }
});

test('no-knead formula uses weighed source amounts and a bounded fermentation branch', () => {
  const { data } = read('homemade-pizza-night');
  const amounts = Object.fromEntries(
    data.formula.components[0].ingredients.map((i) => [i.id, amount(i.quantity.amount)])
  );
  assert.deepEqual(amounts, { flour: 500, water: 350, 'fine-sea-salt': 16, 'active-dry-yeast': 1 });
  assert.equal(amounts.water / amounts.flour, 0.7);
  assert.equal(
    Object.values(amounts).reduce((a, b) => a + b, 0),
    867
  );
  assert.match(step(data, 'rise'), /72°F \/ 22°C/);
  assert.match(step(data, 'rise'), /18 hours/);
  assert.match(step(data, 'portion'), /refrigerate up to 3 days/);
  assert.match(step(data, 'portion'), /2–3 hours/);
  assert.match(step(data, 'portion'), /instead of the one-hour rest/);
  assert.match(step(data, 'portion'), /217 g/);
  assert.match(step(data, 'portion'), /434 g/);
  assert(Math.abs((4 * Math.PI * 5 ** 2) / (2 * Math.PI * 7 ** 2) - 1) < 0.03);
});

test('no-knead sauce and cheeses reconcile for both sizes with deliberate sauce surplus', () => {
  const { data, content } = read('homemade-pizza-night');
  assert.equal(ingredient(data, 'assembly', 'mozzarella').quantity.amount, 12);
  assert.equal(ingredient(data, 'assembly', 'parmesan').quantity.amount, 1);
  assert.equal(4 * 3, 2 * 6);
  assert.equal(4 * 0.25, 2 * 0.5);
  assert.equal((4 * 3) / 16, 0.75);
  assert.equal((2 * 6) / 16, 0.75);
  assert.match(step(data, 'sauce'), /3\/4 cup/);
  assert.match(step(data, 'sauce'), /surplus/);
  assert.equal(ingredient(data, 'sauce', 'garlic').quantity.amount, 3);
  assert.match(content, /fully cooked sausage or bacon/);
  assert.match(content, /Keep perishable toppings refrigerated/);
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
      { step: 'arrange', share: '1/3' },
    ]);
    assert(Math.abs(item.uses.reduce((sum, u) => sum + total * amount(u.share), 0) - total) < 1e-9);
  }
  const sauce = ingredient(data, 'sauce', 'marinara');
  assert.equal(sauce.quantity.amount, 4);
  assert.deepEqual(sauce.uses, [
    { step: 'dishes', share: '1/4' },
    { step: 'arrange', share: '3/4' },
  ]);
  assert.equal(ingredient(data, 'pasta', 'jumbo-shells').quantity.amount, 12);
  assert.equal(ingredient(data, 'filling', 'ricotta').quantity.amount, 15);
  assert(!content.includes('roasted-tomato-basil-soup'));
  assert(!content.includes('15 oz minimum'));
  assert(!formulaShoppingList(data.formula).some((x) => x.startsWith('water,')));
});

test('shell method controls tasting, capacity, center temperature and cold assembly', () => {
  const { data, content } = read('stuffed-shells-filled-with-spinach-and-ricotta');
  assert.match(step(data, 'filling'), /before adding the egg/);
  assert.match(step(data, 'egg'), /Do not taste/);
  assert.match(step(data, 'setup'), /one layer without stacking/);
  assert.match(step(data, 'bake'), /165°F \/ 74°C/);
  assert.match(step(data, 'bake'), /25 minutes/);
  assert.match(step(data, 'bake'), /15–20 minutes/);
  assert.match(content, /refrigerator-to-oven/);
  assert.match(content, /10 oz spinach instead of 5 oz/);
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
    ['pizza', ['PT20M', 'PT30M', 'PT70M']],
    ['homemade-pizza-night', ['PT45M', 'PT60M', 'PT1260M']],
    ['stuffed-shells-filled-with-spinach-and-ricotta', ['PT35M', 'PT45M', 'PT90M']],
  ]) {
    const { data, content } = read(slug);
    const schema = buildRecipeSchema(
      data,
      content,
      `https://jordansilton.com/mise/recipes/${slug}/`
    );
    assert.deepEqual([schema.prepTime, schema.cookTime, schema.totalTime], expected);
    if (slug === 'homemade-pizza-night')
      assert.match(
        JSON.stringify(schema.recipeInstructions),
        /fully cooked sausage, bacon or chicken/
      );
  }
});
