import test from 'node:test';
import assert from 'node:assert/strict';
import {
  findUnmentionedIngredients,
  isIngredientHeadingLine,
} from '../lib/ingredient-mentions.mjs';

test('directions that name an ingredient by group, plural or another form count as using it', () => {
  const ingredients = [
    '3 oz (85 g) Parmigiano-Reggiano, finely grated from a block',
    '2 lemons, juiced (about 1/3 cup total)',
    '8 oz (225 g) dried spaghetti or rigatoni',
    '1 tbsp Neutral Oil (avocado or grapeseed)',
    '1 tsp ground cumin',
    '3 tbsp Heavy Cream or Crème Fraîche (for richness)',
    '2 cups Fresh Cranberries',
  ];
  const directions = `## Directions
1. Heat the oil and toast the spices for 30 seconds.
2. Boil the pasta, then toss with the cheese, the lemon juice and the dairy.
3. Fold in the cranberries.`;
  assert.deepEqual(findUnmentionedIngredients(ingredients, directions), []);
});

test('an ingredient the directions never use is still reported', () => {
  const ingredients = [
    '2 cups all-purpose flour',
    '1 lb shrimp, peeled',
    '1 tsp baking soda',
    '2 eggs',
  ];
  const directions = '## Directions\n1. Whisk the eggs and baking soda.\n2. Bake until set.';
  assert.deepEqual(findUnmentionedIngredients(ingredients, directions), [
    '2 cups all-purpose flour',
    '1 lb shrimp, peeled',
  ]);
});

test('optional, serving and divider lines are not reported', () => {
  const ingredients = [
    '--- To serve ---',
    '1 bay leaf, optional',
    'Extra-virgin olive oil, for drizzling at serving',
    '2 tbsp chopped cilantro or microgreens, optional',
  ];
  assert.deepEqual(findUnmentionedIngredients(ingredients, '## Directions\n1. Simmer.'), []);
});

test('colon-ended section labels are headings, real ingredient lines are not', () => {
  for (const line of ['For the filling:', 'For the crust:', 'to serve:', 'Sauce:'])
    assert.equal(isIngredientHeadingLine(line), true, line);
  for (const line of [
    '--- Filling ---',
    '1 cup heavy cream',
    'Salt and pepper',
    '2 tbsp ratio 1:1 sugar syrup',
    'Juice of 1 lime:',
  ])
    assert.equal(isIngredientHeadingLine(line), false, line);
});

test('a doubled consonant before -ing still matches the plain verb', () => {
  const ingredients = ['8 Whole Cloves (for studding)'];
  const directions = `## Directions
1. Stud the orange wedges with the garnish cloves.`;
  assert.deepEqual(findUnmentionedIngredients(ingredients, directions), []);
});
