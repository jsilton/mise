import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));
test('family banana bread restores softened-butter creaming and saved pan dimensions', () => {
  const { data, content } = read('banana-nut-bread');
  const [recipe, tweak = ''] = content.split(/^## Suggested Tweak$/m);
  const batter = data.formula.components.find((c) => c.id === 'batter');
  const butter = batter.ingredients.find((i) => i.id === 'butter');
  // Family original (045e5ba2): 1/2 cup butter or margarine, creamed with the sugar.
  assert.deepEqual(butter.quantity, { amount: '1/2', unit: 'cup' });
  assert.equal(butter.name, 'butter or margarine');
  assert.match(butter.preparation, /softened/);
  assert.deepEqual(butter.uses, [{ step: 'cream', share: 1 }]);
  assert.equal(data.source, 'From the Hamilton family');
  assert.match(
    recipe,
    /Beat butter or margarine and sugar with a mixer on medium-high until thoroughly creamed, light and fluffy/
  );
  const creamIndex = data.formula.steps.findIndex((s) => s.id === 'cream');
  const eggsIndex = data.formula.steps.findIndex((s) => s.id === 'eggs');
  assert.ok(creamIndex >= 0 && eggsIndex >= 0);
  assert.ok(creamIndex < eggsIndex);
  assert.match(recipe, /eggs one at a time/);
  assert.match(recipe, /9-by-5-by-3-inch loaf pan/);
  assert.match(recipe, /350°F/);
  assert.match(recipe, /55 to 60 minutes/);
  assert.match(recipe, /Let the loaf cool completely before slicing/);
  // October's vanilla and longer bake are Mise changes, so they belong in the tweak only.
  assert.ok(!data.ingredients.some((line) => /vanilla/i.test(line)));
  assert.match(tweak, /Add 1 tsp vanilla extract/);
  assert.match(tweak, /allow up to 65/);
  assert.match(tweak, /Cool the loaf in the pan for 10 minutes, then turn it out onto a rack/);
  assert.doesNotMatch(content, /\*\*Melt:/);
});
test('almond loaf restores excess-water handling and complete cooling without invented pan geometry', () => {
  const { data, content } = read('almond-zucchini-bread');
  // Source names the publication. The author is credited in the chef's note.
  assert.equal(data.source, 'Adapted from Running to the Kitchen');
  assert.match(content, /Gina Matsoukas/);
  assert.ok(data.ingredients.includes('1 cup grated zucchini, squeezed dry in a towel'));
  assert.match(content, /Cool completely on a rack before slicing, about 1 hour/);
  // learning.before is gone by design. The pan stays an unsized parchment-lined loaf pan.
  assert.equal(data.learning?.before, undefined);
  assert.match(content, /Line a loaf pan with parchment/);
  assert.match(content, /35 to 40 minutes/);
  assert.match(content, /a toothpick in the center comes out clean/);
  assert.match(content, /If the top darkens before the center sets, tent it loosely with foil/);
  assert.doesNotMatch(content, /bone-dry|absolutely dry|9x5|8x4|9-by-5|8-by-4/);
  assert.ok(data.ingredients.includes('3/4 tsp baking soda'));
  assert.ok(data.ingredients.includes('2 tsp apple cider vinegar or fresh lemon juice'));
});
test('waffles preserve formula and budget machine-dependent batches', () => {
  const { data, content } = read('buttermilk-waffles');
  assert.deepEqual(data.ingredients.slice(0, 9), [
    '2 cups all-purpose flour',
    '2 tbsp sugar',
    '2 tsp baking powder',
    '1 tsp baking soda',
    '1/2 tsp fine sea salt',
    '2 cups whole buttermilk',
    '1/3 cup unsalted butter, melted and cooled',
    '2 large eggs',
    '1 tsp vanilla extract',
  ]);
  assert.equal(data.ingredients.length, 11);
  assert.match(data.ingredients[9], /butter or neutral oil, for the waffle iron/);
  assert.match(data.ingredients[10], /salted butter, maple syrup and fresh berries, for serving/);
  // Plain times now. The cook time still budgets several waffles of 4 to 6 minutes each.
  assert.equal(data.cookTime, '30 min');
  assert.equal(data.totalTime, '50 min');
  assert.deepEqual(data.cookingMethods, ['griddle']);
  assert.match(content, /rest for 10 minutes/);
  assert.match(content, /while you cook the rest/);
  assert.match(
    content,
    /Cook until the steam slows, the waffle is deep golden and it lifts out easily, 4 to 6 minutes/
  );
  assert.match(content, /225°F/);
});
test('blueberry pancakes preserve saved honey, exact berry allocation and rating', () => {
  const { data, content } = read('blueberry-pancakes');
  assert.ok(data.ingredients.includes('2 tbsp honey'));
  assert.ok(data.ingredients.includes('3/4 cup fresh blueberries'));
  assert.equal(data.rating, 5);
  // Steps carry no quantities now. 3/4 cup is 12 tbsp, one spoonful for each of 12 pancakes.
  assert.equal(data.servings, '12 pancakes');
  assert.equal((3 / 4) * 16, 12);
  assert.match(
    content,
    /with a quarter-cup measure and scatter a spoonful of blueberries over each/
  );
});
test('anadama retains its source formula, cooling-before-yeast and loaf geometry', () => {
  const { data, content } = read('anadama-bread');
  assert.deepEqual(data.ingredients.slice(0, 8), [
    '1/2 cup water, for the porridge',
    '1/4 cup yellow cornmeal',
    '2 tbsp unsalted butter',
    '1/2 cup molasses',
    '1 packet (1/4 oz) active dry yeast',
    '1/2 cup warm water (110°F), for the yeast',
    '3 cups all-purpose flour, plus more for dusting',
    '1 1/2 tsp kosher salt',
  ]);
  assert.equal(data.ingredients.filter((line) => /^\d/.test(line)).length, 8);
  // The "For handling" heading is gone. The dusting flour is folded into the flour line.
  assert.deepEqual(data.ingredients.slice(8), ['oil, for the bowl', 'butter, for the pan']);
  assert.match(content, /let cool until lukewarm/);
  assert.ok(
    content.indexOf('until lukewarm') < content.indexOf('Stir the cooled porridge into the yeast')
  );
  assert.match(content, /9x5-inch loaf pan/);
  assert.match(content, /375°F/);
});
