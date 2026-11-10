import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';
import { formatFormulaIngredient } from '../../src/lib/recipe-formula.mjs';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));
const minutes = (value) => {
  const hr = /(\d+)\s*hr/.exec(value);
  const min = /(\d+)\s*min/.exec(value);
  return (hr ? Number(hr[1]) * 60 : 0) + (min ? Number(min[1]) : 0);
};
const assertTimesAddUp = (data) =>
  assert.equal(minutes(data.totalTime), minutes(data.prepTime) + minutes(data.cookTime));

test('pressure soup supplies celery and discloses pressure overhead without undoing natural release', () => {
  const { data, content } = read('instant-pot-butternut-squash-soup');
  assert.ok(data.ingredients.includes('1 celery stalk, cut into 1-inch pieces'));
  // learning.timing is gone by design. The cook time itself now has to cover the
  // 12-minute pressure cook plus buildup and the 15 to 30 minute natural release.
  assert.equal(data.learning?.timing, undefined);
  assert.ok(minutes(data.cookTime) >= 12 + 30, `cookTime ${data.cookTime} omits pressure overhead`);
  assertTimesAddUp(data);
  assert.ok(!data.cookingMethods.includes('grill'));
  assert.match(content, /cook at high pressure for 12\s+minutes/i);
  assert.match(
    content,
    /Let the pressure come down on its own until the float valve drops, 15 to 30 minutes/
  );
  assert.doesNotMatch(content, /quick release|release the rest by hand/i);
  assert.match(content, /Turn off the sauté setting/);
});
test('classic wontons inventory bowl seasonings and optional garnish independently of the filling', () => {
  const { data, content } = read('classic-wonton-soup');
  assert.ok(data.ingredients.includes('1/4 tsp kosher salt, plus more for the broth'));
  assert.ok(data.ingredients.includes('pinch of ground white pepper, plus more for the bowls'));
  assert.ok(data.ingredients.includes('chili oil, for serving (optional)'));
  assert.ok(data.ingredients.includes('1 tsp Shaoxing wine'));
  // The broth is its own linked recipe, so the times cover only filling, folding and boiling.
  assert.ok(
    data.ingredients.includes(
      '4 cups [Cantonese Wonton Broth](/mise/recipes/cantonese-wonton-broth)'
    )
  );
  assert.equal(data.totalTime, '55 min');
  assertTimesAddUp(data);
  // The 165°F thermometer check was dropped by the style guide (pork filling is not on its
  // internal-temperature list). Floating must still be paired with a firm, cooked filling.
  assert.match(content, /until they float and the filling is firm and cooked through/);
  assert.match(content, /stems are tender-crisp/);
  assert.match(content, /small spoonful of filling/);
  assert.doesNotMatch(content, /Place 1 tsp filling/);
});
test('hot and sour inventories saute oil and excludes separate stock and pork preparation', () => {
  const { data, content } = read('hot-and-sour-soup');
  assert.equal(data.formula?.version, 1);
  const soup = data.formula.components.find((component) => component.id === 'soup');
  const oil = soup.ingredients.find((ingredient) => ingredient.id === 'oil');
  assert.equal(oil.name, 'canola oil');
  assert.deepEqual(oil.quantity, { amount: 2, unit: 'tbsp' });
  assert.deepEqual(oil.uses, [{ step: 'infuse', share: 1 }]);
  assert.ok(data.ingredients.includes(formatFormulaIngredient(oil)));
  const factors = [0.25, 0.5, 1, 1.5, 2, 3, 1];
  const oilAmounts = ['1/2', '1', '2', '3', '4', '6', '2'];
  factors.forEach((factor, index) => {
    // A scaled 1/2 tbsp prints as the teaspoons a cook can measure.
    assert.equal(
      formatFormulaIngredient(oil, factor),
      factor === 0.25 ? '1 1/2 tsp canola oil' : `${oilAmounts[index]} tbsp canola oil`
    );
  });
  assert.equal(data.cookTime, '25 min');
  assert.equal(data.totalTime, '55 min');
  assertTimesAddUp(data);
  // Stock comes from its own linked recipe and the pork is bought cooked, so neither is
  // made in this recipe's steps.
  assert.ok(data.ingredients.includes('1/4 lb char siu (Chinese barbecue pork), shredded'));
  assert.match(content, /\[unsalted chicken stock\]\(\/mise\/recipes\/homemade-chicken-stock\)/);
  assert.doesNotMatch(content, /cook the pork|roast the pork/i);
  assert.match(data.formula.steps.find((step) => step.id === 'infuse').text, /over medium heat/);
  // The 165°F egg check was dropped by design. The egg cue is now the set ribbons.
  assert.match(content, /Let it sit for 1 minute so the ribbons set/);
  const slurryWater = soup.ingredients.find((ingredient) => ingredient.id === 'slurry-water');
  assert.equal(slurryWater.name, 'cold water');
  assert.deepEqual(slurryWater.quantity, { amount: '1/4', unit: 'cup' });
  assert.deepEqual(slurryWater.uses, [{ step: 'thicken', share: 1 }]);
  assert.ok(data.ingredients.includes(formatFormulaIngredient(slurryWater)));
});
test('mushroom soup uses observable browning and model-specific hot-blender limits', () => {
  const { data, content } = read('cream-of-mushroom-soup');
  assert.equal(data.totalTime, '45 min');
  assertTimesAddUp(data);
  // learning.timing is gone by design.
  assert.equal(data.learning?.timing, undefined);
  assert.match(content, /liquid has cooked off and they are deep golden/);
  assert.match(content, /Take the pot off the heat/);
  assert.match(content, /in small batches in a countertop blender with the lid vented/);
  assert.ok(data.ingredients.includes('24 oz cremini mushrooms, sliced'));
  assert.ok(data.ingredients.includes('2 tbsp all-purpose flour'));
  assert.match(content, /Stir in the flour and thyme and cook/);
  assert.ok(data.ingredients.includes('1 tbsp dry sherry'));
  assert.match(content, /Stir in the cream and sherry/);
});
test('Jeri lentils count the final half hour and retain the documented LOW route and adaptation', () => {
  const { data, content } = read('jeris-lentil-soup');
  assert.equal(data.cookTime, '5 hr 40 min');
  assert.equal(data.totalTime, '6 hr');
  assertTimesAddUp(data);
  const [recipe, tweak = ''] = content.split(/^## Suggested Tweak$/m);
  assert.match(
    recipe,
    /cook on LOW until the lentils are tender all the way through, about 5 hours/
  );
  assert.match(
    recipe,
    /Stir in the wine, parsley and pepper\. Cover and cook on LOW for 30 minutes more/
  );
  assert.doesNotMatch(content, /on high for 3 hours/i);
  // Family original: dried parsley and no vinegar. October's vinegar finish lives in the tweak.
  assert.ok(data.ingredients.includes('3 tbsp dried parsley'));
  assert.ok(!data.ingredients.some((x) => /vinegar|lemon/i.test(x)));
  assert.match(tweak, /1 tbsp sherry vinegar or fresh lemon juice/);
  assert.match(content, /Pat Miller and Sean Kilpatrick/);
});
