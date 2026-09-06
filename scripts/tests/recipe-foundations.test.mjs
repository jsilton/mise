import test from 'node:test';
import assert from 'node:assert/strict';
import { scaleIngredient, formatYield } from '../../src/lib/quantities.mjs';
import { timeToMinutes, timeToISO } from '../../src/lib/time.mjs';
import { reviewRecipe } from '../recipe-editorial.mjs';

test('ingredient scaling handles fractions, decimals, unicode and ranges', () => {
  assert.equal(scaleIngredient('1/2 tsp salt', 2), '1 tsp salt');
  assert.equal(scaleIngredient('1.5 lbs broccoli', 2), '3 lbs broccoli');
  assert.equal(scaleIngredient('1 1/2 cups flour', 0.5), '3/4 cups flour');
  assert.equal(scaleIngredient('1½ cups milk', 2), '3 cups milk');
  assert.equal(scaleIngredient('1–2 tsp lemon', 2), '2–4 tsp lemon');
  assert.equal(scaleIngredient('1/8 tsp pepper', 0.5), '0.0625 tsp pepper');
});
test('equivalent weights scale but package sizes and cuts do not', () => {
  assert.equal(scaleIngredient('8 oz (225 g) pasta', 2), '16 oz (450 g) pasta');
  assert.equal(
    scaleIngredient('225 g (about 1 1/2 cups) pearl couscous', 0.5),
    '112 1/2 g (about 3/4 cups) pearl couscous'
  );
  assert.equal(
    scaleIngredient('1 1/2 cups (about 225 g) pearl couscous', 2),
    '3 cups (about 450 g) pearl couscous'
  );
  assert.equal(scaleIngredient('2 (14 oz) cans tomatoes', 2), '4 (14 oz) cans tomatoes');
  assert.equal(
    scaleIngredient('2 lbs beef, cut into 1.5-inch cubes', 2),
    '4 lbs beef, cut into 1.5-inch cubes'
  );
  assert.equal(
    scaleIngredient('2 tsp kosher salt or 1 tsp fine salt', 2),
    '4 tsp kosher salt or 2 tsp fine salt'
  );
});
test('litre equivalents scale together while bottle sizes stay fixed', () => {
  assert.equal(scaleIngredient('10 cups (2.4 L) cold water', 0.5), '5 cups (1.2 L) cold water');
  assert.equal(scaleIngredient('2 L (2000 ml) water', 0.5), '1 L (1000 ml) water');
  assert.equal(scaleIngredient('2 litres (2000 ml) water', 2), '4 litres (4000 ml) water');
  assert.equal(scaleIngredient('2 (1 L) bottles stock', 0.5), '1 (1 L) bottles stock');
});
test('unquantified amounts and exact original formatting survive reset', () => {
  assert.equal(scaleIngredient('Salt, to taste', 2), 'Salt, to taste');
  assert.equal(scaleIngredient('1½ cups milk', 1), '1½ cups milk');
  assert.equal(scaleIngredient('1/0 cup flour', 2), '1/0 cup flour');
  assert.equal(scaleIngredient('1 cup stock', NaN), '1 cup stock');
});
test('yield scaling handles portions and ranges without changing pan dimensions', () => {
  assert.equal(formatYield('4', 2), 'Serves 8');
  assert.equal(formatYield('6 side portions', 0.5), '3 side portions');
  assert.equal(formatYield('4–6 servings', 2), '8–12 servings');
  assert.equal(
    formatYield('1 (9-inch) cake', 2),
    'Original yield: 1 (9-inch) cake · 2× ingredients'
  );
  assert.equal(
    formatYield('5 (about 24 meatballs)', 2),
    'Original yield: 5 (about 24 meatballs) · 2× ingredients'
  );
});
test('duration parsing handles hours and declines ambiguous timing', () => {
  assert.equal(timeToMinutes('1 hr 30 min'), 90);
  assert.equal(timeToMinutes('3.5 hr'), 210);
  assert.equal(timeToMinutes('15–20 min'), null);
  assert.equal(timeToMinutes('20 min + overnight'), null);
  assert.equal(timeToISO('3.5 hr'), 'PT210M');
  assert.equal(timeToISO('overnight'), undefined);
});
const base = {
  slug: 'sample',
  data: {
    title: 'Sample',
    ingredients: ['1 cup rice'],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: '2',
  },
  content:
    "## Chef's Note\nA useful method.\n\n## Directions\n\n1. **Prep:** Rinse.\n2. **Cook:** Simmer.\n3. **Rest:** Cover.\n\n## Serving\nEnjoy.",
};
test('audit reads all directions and catches invalid step references', () => {
  const learning = {
    focus: 'Starch',
    outcome: 'Tender',
    storage: 'Chill',
    timing: '20 min',
    before: ['Rinse'],
    techniques: ['starch'],
    checkpoints: [{ step: 4 }],
    troubleshooting: [{ problem: 'Dry' }],
    sources: [{ url: 'https://example.org' }],
    review: { status: 'editorial-review' },
  };
  const result = reviewRecipe({ ...base, data: { ...base.data, learning } }, new Set(['sample']));
  assert.equal(result.stepCount, 3);
  assert.ok(result.issues.some((i) => i.code === 'invalid-checkpoint'));
});
test('kitchen-tested claims require evidence and links must resolve', () => {
  const result = reviewRecipe(
    {
      ...base,
      data: {
        ...base.data,
        pairsWith: ['missing'],
        learning: { review: { status: 'kitchen-tested' } },
      },
    },
    new Set(['sample'])
  );
  assert.ok(result.issues.some((i) => i.code === 'unsupported-testing-claim'));
  assert.ok(result.issues.some((i) => i.code === 'broken-reference'));
});
test('poultry checks flag missing endpoints without calling recipes unsafe', () => {
  const result = reviewRecipe(
    { ...base, data: { ...base.data, ingredients: ['2 chicken breasts'] } },
    new Set(['sample'])
  );
  assert.ok(
    result.issues.some((i) => i.code === 'poultry-endpoint-review' && i.severity === 'priority')
  );
  const complete = reviewRecipe(
    {
      ...base,
      data: { ...base.data, ingredients: ['2 chicken breasts'] },
      content: base.content.replace('Simmer.', 'Cook to 165°F.'),
    },
    new Set(['sample'])
  );
  assert.ok(!complete.issues.some((i) => i.code === 'poultry-endpoint-review'));
});

test('cooked rice does not hide a separate raw poultry ingredient from review', () => {
  const inspect = (ingredients) =>
    reviewRecipe({ ...base, data: { ...base.data, ingredients } }, new Set(['sample'])).issues.some(
      (issue) => issue.code === 'poultry-endpoint-review'
    );
  assert.equal(inspect(['1 lb ground turkey', '3 cups cooked rice']), true);
  assert.equal(inspect(['1 whole chicken', '2 cups cooked barley']), true);
  assert.equal(inspect(['2 cooked chicken breasts', '3 cups rice']), false);
});

test('promised poultry carryover remains a review item even when 165°F appears', () => {
  for (const [ingredient, instruction] of [
    ['2 chicken breasts', 'Pull at 160°F (it will carry to 165°F).'],
    ['2 chicken thighs', 'Carryover cooking will bring temp to 165°F.'],
    ['1 (14–16 lb) Young Turkey, thawed', 'Carryover heat will take it to the safe 165°F.'],
  ]) {
    const result = reviewRecipe(
      {
        ...base,
        data: { ...base.data, ingredients: [ingredient] },
        content: base.content.replace('Simmer.', instruction),
      },
      new Set(['sample'])
    );
    assert.ok(
      result.issues.some(
        (issue) => issue.code === 'poultry-carryover-review' && issue.severity === 'priority'
      ),
      instruction
    );
  }
});

test('measured endpoints and explicit cautions do not promise poultry carryover', () => {
  for (const instruction of [
    'Cook each breast to 165°F, measured at its center.',
    'Do not assume carryover heat will take it to 165°F. Measure each center before removal.',
  ]) {
    const result = reviewRecipe(
      {
        ...base,
        data: { ...base.data, ingredients: ['2 chicken breasts'] },
        content: base.content.replace('Simmer.', instruction),
      },
      new Set(['sample'])
    );
    assert.ok(!result.issues.some((issue) => issue.code === 'poultry-carryover-review'));
  }
});
