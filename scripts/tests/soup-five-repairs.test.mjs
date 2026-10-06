import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
import { formatFormulaIngredient } from '../../src/lib/recipe-formula.mjs';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('pressure soup supplies celery and discloses pressure overhead without undoing natural release', () => {
  const { data, content } = read('instant-pot-butternut-squash-soup');
  assert.ok(data.ingredients.includes('1 stalk Celery, cut into 1-inch pieces'));
  assert.match(data.totalTime, /plus pressure build and full natural release/);
  assert.ok(!data.cookingMethods.includes('grill'));
  assert.match(content, /release fully naturally/);
  assert.match(content, /cooker off/);
});
test('classic wontons inventory bowl seasonings and optional garnish independently of the filling', () => {
  const { data, content } = read('classic-wonton-soup');
  assert.ok(data.ingredients.some((x) => /Salt and Ground White Pepper.*for the broth/.test(x)));
  assert.ok(data.ingredients.some((x) => /Chili Oil, optional/.test(x)));
  assert.ok(data.ingredients.includes('1 tsp Shaoxing Wine, for the filling'));
  assert.match(data.totalTime, /prepared broth and wrappers/);
  assert.match(content, /floating alone is not a doneness test/);
  assert.match(content, /165°F \/ 74°C/);
  assert.match(content, /stems are tender-crisp/);
  assert.match(content, /Divide all the filling/);
  assert.doesNotMatch(content, /Place 1 tsp filling/);
});
test('hot and sour inventories saute oil and excludes separate stock and pork preparation', () => {
  const { data, content } = read('hot-and-sour-soup');
  assert.equal(data.formula?.version, 1);
  const soup = data.formula.components.find((component) => component.id === 'soup');
  const oil = soup.ingredients.find((ingredient) => ingredient.id === 'oil');
  assert.equal(oil.name, 'Canola oil');
  assert.deepEqual(oil.quantity, { amount: 2, unit: 'tbsp' });
  assert.deepEqual(oil.uses, [{ step: 'infuse', share: 1 }]);
  assert.ok(data.ingredients.includes(formatFormulaIngredient(oil)));
  const factors = [0.25, 0.5, 1, 1.5, 2, 3, 1];
  const oilAmounts = ['1/2', '1', '2', '3', '4', '6', '2'];
  factors.forEach((factor, index) => {
    assert.equal(formatFormulaIngredient(oil, factor), `${oilAmounts[index]} tbsp Canola oil`);
  });
  assert.equal(data.cookTime, 'About 20–30 min cooking');
  assert.equal(data.totalTime, 'About 55–65 min with prepared stock and cooked pork');
  assert.match(content, /fully cooked char siu/i);
  assert.match(
    data.formula.steps.find((step) => step.id === 'infuse').text,
    /heat the oil over medium heat/
  );
  assert.match(content, /until fully set and the soup measures at least 165°F/);
  const slurryWater = soup.ingredients.find((ingredient) => ingredient.id === 'slurry-water');
  assert.equal(slurryWater.name, 'Water for the cornstarch slurry');
  assert.deepEqual(slurryWater.quantity, { amount: 0.25, unit: 'cup' });
  assert.deepEqual(slurryWater.uses, [{ step: 'thicken', share: 1 }]);
  assert.ok(data.ingredients.includes(formatFormulaIngredient(slurryWater)));
});
test('mushroom soup uses observable browning and model-specific hot-blender limits', () => {
  const { data, content } = read('cream-of-mushroom-soup');
  assert.equal(
    data.totalTime,
    'About 40–50 min (blender cooling or extra browning batches add time)'
  );
  assert.match(data.learning.timing, /cooling\/reheating add time/);
  assert.match(content, /liquid has evaporated/);
  assert.match(content, /Take the pot off the heat/);
  assert.match(content, /Never blend hot soup in a sealed personal-blender cup/);
  assert.ok(data.ingredients.includes('16 oz Cremini Mushrooms, sliced'));
  assert.ok(data.ingredients.includes('1 tbsp Dry Sherry (The Finishing Touch)'));
});
test('Jeri lentils count the final half hour and retain the documented LOW route and adaptation', () => {
  const { data, content } = read('jeris-lentil-soup');
  assert.equal(data.cookTime, '5 hr 40 min');
  assert.equal(data.totalTime, '5 hr 55 min');
  assert.match(content, /final 30-minute cook/);
  assert.doesNotMatch(content, /on high for 3 hours/);
  assert.match(content, /centers are still hard/);
  assert.ok(data.ingredients.includes('3 tbsp Fresh Parsley, chopped'));
  assert.ok(data.ingredients.includes('1 tbsp Sherry Vinegar or Fresh Lemon Juice'));
  assert.match(content, /Pat Miller and Sean Kilpatrick/);
});
