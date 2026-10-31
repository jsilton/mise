import test from 'node:test';
import assert from 'node:assert/strict';
import { stepForFix, ingredientForSwap, placeSwaps } from '../../src/lib/recipe-placement.mjs';

const steps = [
  { text: 'Soften the dal: simmer the lentils with water and turmeric until a lentil crushes.' },
  { text: 'Cook the onion in ghee until light gold.' },
  { text: 'Temper the spices: add garlic and cumin seeds until the garlic is pale gold.' },
  { text: 'Combine and balance with lemon juice.' },
];

test('a fix lands under the step that shares its words', () => {
  const fix = {
    problem: 'Lentils are firm and the pan is drying',
    cause: 'The dal needs more water.',
    fix: 'Add hot water and keep simmering.',
  };
  assert.equal(stepForFix(fix, steps), 1);
  assert.equal(
    stepForFix(
      { problem: 'Tadka tastes bitter', cause: 'Garlic scorched.', fix: 'Start again.' },
      steps
    ),
    3
  );
});

test('a fix with no shared words falls to the last step', () => {
  assert.equal(stepForFix({ problem: 'Xyzzy', cause: 'Qwerty', fix: 'Plugh' }, steps), 4);
  assert.equal(stepForFix({ problem: 'Anything', cause: '', fix: '' }, []), 0);
});

test('a swap finds the ingredient it replaces', () => {
  const ingredients = [
    '--- For the dal ---',
    '1 cup (200 g) split mung dal',
    '3 tbsp ghee or neutral oil',
    '1/4 tsp asafoetida (hing), optional',
    '1 tbsp lemon juice',
  ];
  const isDivider = (line) => line.startsWith('---');
  assert.equal(ingredientForSwap('Ghee', ingredients, isDivider), 2);
  assert.equal(ingredientForSwap('Asafoetida', ingredients, isDivider), 3);
  assert.equal(ingredientForSwap('Lemon juice', ingredients, isDivider), 4);
  assert.equal(ingredientForSwap('Separate the vegetables first', ingredients, isDivider), -1);
  const { byIngredient, unplaced } = placeSwaps(
    [
      { ingredient: 'Ghee', alternative: 'Oil', effect: 'Vegan.' },
      { ingredient: 'Tempered sauce route', alternative: 'x', effect: 'y' },
    ],
    ingredients,
    isDivider
  );
  assert.deepEqual([...byIngredient.keys()], [2]);
  assert.equal(unplaced.length, 1);
});
