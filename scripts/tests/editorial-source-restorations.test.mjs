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
  formulaEntries,
  amount,
} from '../../src/lib/recipe-formula.mjs';

const read = (slug) => {
  const raw = fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8');
  return { raw, ...matter(raw) };
};
const revised = [
  'best-cinnamon-roll-recipe-cinnabon-copycat',
  'best-homemade-brownies',
  'cantonese-shrimp-and-pork-wontons',
  'brown-butter-chocolate-souffle',
  'pumpkin-cheesecake-cookies',
  'double-chocolate-layer-cake',
  'tonkotsu-style-ramen',
];
const structured = [
  'brown-butter-chocolate-souffle',
  'pumpkin-cheesecake-cookies',
  'double-chocolate-layer-cake',
];

test('source-restored formulas compile to the checked-in cooking representation', () => {
  for (const slug of structured) {
    const { data, content } = read(slug);
    const formula = createFormulaSchema(z).parse(data.formula);
    assert.deepEqual(data.ingredients, formulaIngredients(formula), slug);
    const directions = content.match(/^## Directions\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m);
    assert.ok(directions, slug);
    assert.equal(directions[1].trim(), formulaDirections(formula).trim(), slug);
    for (const ingredient of formulaEntries(formula).filter((entry) => !entry.divider)) {
      assert.equal(
        ingredient.uses.reduce((sum, use) => sum + amount(use.share), 0),
        1,
        ingredient.id
      );
    }
  }
});

test('fixed geometry and bowl allocations cannot be changed by ingredient-only scaling', () => {
  for (const slug of revised.filter((slug) => slug !== 'cantonese-shrimp-and-pork-wontons')) {
    const { data } = read(slug);
    assert.equal(data.scaling?.mode, 'fixed', slug);
    assert.ok(data.scaling.reason.length > 50, slug);
  }
  assert.equal(read('cantonese-shrimp-and-pork-wontons').data.scaling, undefined);
});

test('cookie dough contains its restored leavener and distinct seasoning allocation', () => {
  const { data, content } = read('pumpkin-cheesecake-cookies');
  const entries = formulaEntries(data.formula).filter((entry) => !entry.divider);
  const soda = entries.find((entry) => entry.name === 'baking soda');
  assert.ok(soda);
  assert.equal(amount(soda.quantity.amount), 0.5);
  assert.equal(soda.quantity.unit, 'tsp');
  assert.equal(entries.filter((entry) => /cinnamon/.test(entry.name)).length, 2);
  assert.equal(entries.filter((entry) => /ginger/.test(entry.name)).length, 2);
  assert.ok(entries.some((entry) => /nutmeg/.test(entry.name)));
  assert.ok(entries.some((entry) => /salt/.test(entry.name)));
  assert.match(content, /baking soda/);
  assert.match(content, /Refrigerate|refrigerat/);
  assert.equal(data.sourceUrl, 'https://chelsweets.com/pumpkin-cheesecake-cookies/');
});

test('souffle shops for six whole eggs and keeps coating sugar distinct from meringue sugar', () => {
  const { data, content } = read('brown-butter-chocolate-souffle');
  const entries = formulaEntries(data.formula).filter((entry) => !entry.divider);
  const eggs = entries.filter((entry) => /egg/.test(entry.name));
  assert.equal(eggs.length, 1);
  assert.equal(amount(eggs[0].quantity.amount), 6);
  const shopping = formulaShoppingList(data.formula);
  assert.equal(shopping.filter((line) => /egg/.test(line)).length, 1);
  assert.ok(shopping.some((line) => /^6 .*egg/.test(line)));
  assert.equal(entries.filter((entry) => /granulated sugar/.test(entry.name)).length, 2);
  assert.match(content, /375°F/);
  assert.match(content, /peaks hold but bend at the tips/);
  assert.doesNotMatch(content, /475°F/);
  // The 160°F probe check was dropped by the style guide. A soufflé is judged by its rise
  // and wobble, so that cue must be in the bake step.
  assert.match(content, /Bake until risen, with a just-set top and a gentle wobble in the center, 35 to 40 minutes/);
});

test('cake vanilla is quantified and exact pan depth accompanies spreadable ganache', () => {
  const { data, content } = read('double-chocolate-layer-cake');
  const vanilla = formulaEntries(data.formula).find((entry) => /vanilla/.test(entry.name || ''));
  assert.equal(amount(vanilla.quantity.amount), 0.75);
  assert.equal(vanilla.quantity.unit, 'tsp');
  assert.match(content, /10-inch round cake pans, each 2 inches deep/);
  assert.match(content, /spreadable/);
  assert.doesNotMatch(content, /aromatic compounds that water can't extract|without doming/);
});

test('cinnamon filling is prepared and its twelve-strip geometry is explicit', () => {
  const { data, content } = read('best-cinnamon-roll-recipe-cinnabon-copycat');
  assert.ok(data.ingredients.includes('12 tbsp salted butter, cool room temperature'));
  assert.ok(data.ingredients.some((line) => line.startsWith('3/4 cup light brown sugar')));
  assert.ok(data.ingredients.includes('2 tbsp ground cinnamon'));
  assert.ok(data.ingredients.includes('2 tsp vanilla powder (optional)'));
  assert.match(
    content,
    /mix the filling butter, brown sugar, cinnamon and vanilla powder, if using, into a soft, spreadable paste/
  );
  assert.match(content, /roll the dough into a 15-by-21-inch rectangle with a long side facing you/);
  assert.match(content, /cut across the long side into 12 strips, each about 1 3\/4 inches wide/);
  assert.equal(21 / 1.75, 12);
  assert.equal(data.sourceUrl, 'https://cambreabakes.com/the-best-cinnamon-rolls/');
});

test('brownie planning time includes mandatory cooling without changing the pan', () => {
  const { data, content } = read('best-homemade-brownies');
  // Style guide format: active time, plus the mandatory 2 hr cool.
  assert.equal(data.prepTime, '10 min');
  assert.equal(data.cookTime, '45 min');
  assert.equal(10 + 45, 55);
  assert.equal(data.totalTime, '55 min, plus 2 hr cooling');
  assert.match(content, /8-inch square pan/);
  assert.match(content, /at least 2 hours/);
  assert.equal(data.sourceUrl, 'https://www.loveandlemons.com/brownies-recipe/');
});

test('wonton cooking and cold work cannot disappear behind raw assembly', () => {
  const { data, content } = read('cantonese-shrimp-and-pork-wontons');
  assert.ok(data.cookingMethods.includes('boil'));
  assert.ok(!data.cookingMethods.includes('no-cook'));
  // The refrigeration note and the 165°F probe were food-safety text the style guide drops.
  // The wontons must still be boiled to a real doneness cue, not served on floating alone,
  // and the filling is cooked and tasted before raw assembly.
  assert.match(content, /cook until the wontons float and the filling is firm and cooked through, 4 to 5 minutes/);
  assert.ok(content.indexOf('**Taste the filling:**') < content.indexOf('**Wrap the wontons:**'));
  assert.ok(content.indexOf('**Wrap the wontons:**') < content.indexOf('**Boil the wontons:**'));
  // The wrapper line now names a package size instead of warning that counts vary.
  assert.ok(data.ingredients.includes('2 packages (1 lb each) thin square wonton wrappers'));
});

test('ramen tare and finished-bowl arithmetic agree without an invented double batch', () => {
  const { data, content } = read('tonkotsu-style-ramen');
  assert.ok(data.ingredients.includes('1/2 cup soy sauce'));
  assert.ok(data.ingredients.includes('3 tbsp white miso'));
  assert.ok(data.ingredients.includes('1 tbsp mirin'));
  assert.ok(data.ingredients.includes('1 tsp toasted sesame oil'));
  // Steps carry no quantities now. The tare (about 12 tbsp in all) is divided among the four
  // bowls with a little held back for tasting, which still rules out an invented double batch.
  assert.match(content, /Divide most of the tare among the bowls, holding a little back/);
  assert.match(content, /Warm four bowls/);
  assert.equal(data.servings, '4');
  assert.match(data.scaling.reason, /six cups of broth and four bowls/);
  assert.match(content, /rolling boil/);
  assert.doesNotMatch(content, /Add 2-3 tbsp of tare|Simmer Undisturbed/);
});

test('revised recipes do not advertise stale nutrition or invented kitchen testing', () => {
  for (const slug of revised) {
    const { data } = read(slug);
    assert.equal(data.nutrition, undefined, slug);
    assert.notEqual(data.learning?.review?.status, 'kitchen-tested', slug);
  }
});
