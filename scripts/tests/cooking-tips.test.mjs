import test from 'node:test';
import assert from 'node:assert/strict';
import { cookingTipSuggestions } from '../lib/cooking-tips.mjs';

const rules = (data, directions) =>
  cookingTipSuggestions(data, `## Directions\n\n${directions}`).map((s) => s.ruleId);

test('spices dumped into liquid get the blooming hint; spices cooked in fat do not', () => {
  const data = {
    title: 'Chickpea curry',
    cookingMethods: ['saute', 'simmer'],
    ingredients: ['1 tbsp curry powder', '1 can chickpeas', '2 cups broth'],
  };
  assert.deepEqual(
    rules(data, '1. **Simmer:** Add broth, chickpeas and curry powder; simmer 20 minutes.'),
    ['kb.spice-blooming-recommended']
  );
  assert.deepEqual(
    rules(
      data,
      '1. **Bloom:** Heat the oil and stir in the curry powder for 30 seconds until fragrant.\n2. Add broth and chickpeas; simmer 20 minutes.'
    ),
    []
  );
  assert.deepEqual(
    rules(
      { ...data, cookingMethods: ['slow-cook', 'simmer'] },
      '1. Load everything into the slow cooker. Cook on LOW 6 hours.'
    ),
    []
  );
});

test('pasta water is suggested only for drained pasta finished in a butter or cheese sauce', () => {
  const data = {
    title: 'Cacio e pepe',
    role: 'main',
    ingredients: ['1 lb spaghetti', '2 oz pecorino', '1 tbsp butter'],
  };
  assert.deepEqual(
    rules(data, '1. Boil the spaghetti and drain. 2. Toss with butter and pecorino.'),
    ['kb.missing-pasta-water-emulsion']
  );
  assert.deepEqual(
    rules(
      data,
      '1. Boil the spaghetti; reserve 1 cup cooking water, then drain. 2. Toss with butter and pecorino.'
    ),
    []
  );
  assert.deepEqual(
    rules(
      {
        ...data,
        title: 'Chicken lettuce wraps',
        ingredients: ['8 oz rice noodles', '2 tbsp soy sauce', '1 tbsp butter'],
      },
      '1. Drain the noodles.'
    ),
    []
  );
  assert.deepEqual(
    rules({ ...data, title: 'Pasta e fagioli soup' }, '1. Boil the spaghetti and drain.'),
    []
  );
});

test('pan crowding is flagged only when a pound or more of meat is browned in one go', () => {
  const data = {
    title: 'Beef and broccoli',
    cookingMethods: ['stir-fry'],
    ingredients: ['1.5 lb beef flank, sliced', '1 head broccoli'],
  };
  assert.deepEqual(rules(data, '1. Stir-fry the beef over high heat until browned.'), [
    'kb.pan-crowding-risk',
  ]);
  assert.deepEqual(rules(data, '1. Stir-fry the beef in two batches until browned.'), []);
  assert.deepEqual(rules({ ...data, title: 'Beef noodle soup' }, '1. Brown the beef.'), []);
});

test('soft herbs only cooked for a long time are flagged; herbs added at the end are not', () => {
  const data = { title: 'Braised beans', ingredients: ['1 bunch fresh basil', '2 cans beans'] };
  assert.deepEqual(rules(data, '1. Add the beans and basil and simmer for 2 hours.'), [
    'kb.delicate-herb-oxidation',
  ]);
  assert.deepEqual(
    rules(data, '1. Simmer the beans for 2 hours. 2. Tear the basil over the top to serve.'),
    []
  );
});

test('baking soda without powder or an acid is flagged', () => {
  const data = {
    title: 'Plain cookies',
    cookingMethods: ['bake'],
    ingredients: ['2 cups flour', '1 tsp baking soda', '1 cup white sugar'],
  };
  assert.deepEqual(rules(data, '1. Mix and bake.'), ['kb.missing-acid-for-leavening']);
  assert.deepEqual(
    rules({ ...data, ingredients: [...data.ingredients, '3 ripe bananas'] }, '1. Mix and bake.'),
    []
  );
  assert.deepEqual(
    rules(
      { ...data, ingredients: [...data.ingredients, '1 tsp baking powder'] },
      '1. Mix and bake.'
    ),
    []
  );
});

test('hot liquid on yeast is flagged, a warm proofing oven is not', () => {
  const data = { title: 'Rolls', ingredients: ['1 packet yeast', '1 cup water'] };
  assert.deepEqual(rules(data, '1. Heat the water to 140°F and stir in the yeast.'), [
    'kb.yeast-temperature-warning',
  ]);
  assert.deepEqual(
    rules(data, '1. Warm the water to 110°F. 2. Proof in a 150°F oven that has been turned off.'),
    []
  );
});

test('only long-simmered acids in reactive pans are flagged', () => {
  const data = {
    title: 'Skillet sauce',
    equipment: ['cast-iron-skillet'],
    ingredients: ['1 can tomatoes', '1 lemon'],
  };
  assert.deepEqual(rules(data, '1. Simmer the tomatoes for 30 minutes until thick.'), [
    'kb.acid-metal-reactivity',
  ]);
  assert.deepEqual(
    rules({ ...data, ingredients: ['1 lemon'] }, '1. Squeeze the lemon over the fish to serve.'),
    []
  );
});
