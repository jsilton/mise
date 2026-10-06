import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));
test('family banana bread restores softened-butter creaming and saved pan dimensions', () => {
  const { data, content } = read('banana-nut-bread');
  const batter = data.formula.components.find((c) => c.id === 'batter');
  const butter = batter.ingredients.find((i) => i.id === 'butter');
  assert.deepEqual(butter.quantity, { amount: '1/2', unit: 'cup' });
  assert.equal(butter.name, 'unsalted butter');
  assert.match(butter.preparation, /softened, not melted/);
  assert.deepEqual(butter.uses, [{ step: 'cream', share: 1 }]);
  assert.equal(data.source, 'Adapted from Hamilton Family');
  assert.match(content, /Beat the unsalted butter and granulated sugar until lighter and fluffy/);
  const creamIndex = data.formula.steps.findIndex((s) => s.id === 'cream');
  const eggsIndex = data.formula.steps.findIndex((s) => s.id === 'eggs');
  assert.ok(creamIndex >= 0 && eggsIndex >= 0);
  assert.ok(creamIndex < eggsIndex);
  assert.match(content, /eggs one at a time/);
  assert.match(content, /9-by-5-by-3-inch/);
  assert.match(content, /Cool completely on the rack before slicing/);
  assert.match(content, /listed vanilla and seed alternative are Mise adaptations/);
  assert.doesNotMatch(content, /\*\*Melt:/);
});
test('almond loaf restores excess-water handling and complete cooling without invented pan geometry', () => {
  const { data, content } = read('almond-zucchini-bread');
  assert.match(data.source, /Gina Matsoukas/);
  assert.match(content, /damp shreds/);
  assert.match(content, /Cool fully on the rack before slicing/);
  assert.match(content, /do not state the loaf-pan dimensions/);
  assert.doesNotMatch(content, /bone-dry|absolutely dry|9x5|8x4/);
  assert.ok(data.ingredients.includes('1 1/2 tsp Baking Soda'));
});
test('waffles preserve formula and budget machine-dependent batches', () => {
  const { data, content } = read('buttermilk-waffles');
  assert.deepEqual(data.ingredients.slice(0, 9), [
    '2 cups All-Purpose Flour',
    '2 tbsp Sugar',
    '2 tsp Baking Powder',
    '1 tsp Baking Soda',
    '1/2 tsp Sea Salt',
    '2 cups Whole Buttermilk',
    '1/3 cup Unsalted Butter, melted',
    '2 large Eggs',
    '1 tsp Vanilla Extract',
  ]);
  assert.equal(data.ingredients.length, 11);
  assert.match(data.ingredients[9], /Butter or neutral oil for lightly greasing the waffle iron/);
  assert.match(data.ingredients[10], /Salted butter, maple syrup, and fresh berries for serving/);
  assert.equal(data.cookTime, '25-40 min');
  assert.equal(data.totalTime, '45-60 min');
  assert.deepEqual(data.cookingMethods, ['griddle']);
  assert.match(content, /rest for 10 minutes/);
  assert.match(content, /Repeat with the remaining batter/);
  assert.match(content, /middle is cooked through/);
  assert.match(content, /225°F/);
});
test('blueberry pancakes preserve saved honey, exact berry allocation and rating', () => {
  const { data, content } = read('blueberry-pancakes');
  assert.ok(data.ingredients.includes('2 tbsp Honey'));
  assert.ok(data.ingredients.includes('3/4 cup Fresh Blueberries'));
  assert.equal(data.rating, 5);
  assert.match(content, /1 tbsp blueberries onto each wet surface/);
  assert.match(content, /the original 3\/4 cup supplies twelve tablespoon portions/);
});
test('anadama retains its source formula, cooling-before-yeast and loaf geometry', () => {
  const { data, content } = read('anadama-bread');
  assert.deepEqual(data.ingredients.slice(0, 8), [
    '1/2 cup Water',
    '1/4 cup Yellow Cornmeal',
    '2 tbsp Unsalted Butter',
    '1/2 cup Molasses (The signature flavor)',
    '1 pkg (.25 oz) Active Dry Yeast',
    '1/2 cup Warm Water (110°F)',
    '3 cups All-Purpose Flour',
    '1 tsp Kosher Salt',
  ]);
  assert.equal(data.ingredients.filter((line) => /^\d/.test(line)).length, 8);
  assert.deepEqual(data.ingredients.slice(8), [
    '--- For handling ---',
    'Oil, for coating the rising bowl',
    'Butter, for greasing the loaf pan',
    'All-purpose flour, for dusting',
  ]);
  assert.match(content, /Let the mixture cool until lukewarm/);
  assert.match(content, /9 x 5-inch loaf pan/);
  assert.match(content, /375°F/);
});
