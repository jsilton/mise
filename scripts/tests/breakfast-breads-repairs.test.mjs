import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));
test('family banana bread restores softened-butter creaming and saved pan dimensions', () => {
  const { data, content } = read('banana-nut-bread');
  assert.ok(data.ingredients.some((x) => x.includes('Butter, softened')));
  assert.equal(data.source, 'Adapted from Hamilton Family');
  assert.match(content, /Beat the softened butter and sugar/);
  assert.match(content, /eggs one at a time/);
  assert.match(content, /9x5x3-inch/);
  assert.match(content, /cool fully before slicing/);
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
  assert.equal(data.ingredients.length, 9);
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
  assert.match(content, /1 tbsp of blueberries/);
});
test('anadama retains its source formula, cooling-before-yeast and loaf geometry', () => {
  const { data, content } = read('anadama-bread');
  assert.equal(data.ingredients.length, 8);
  assert.match(content, /Let cool until lukewarm/);
  assert.match(content, /9x5 pan/);
  assert.match(content, /375°F/);
});
