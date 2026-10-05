import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import matter from 'gray-matter';
import { scaleIngredient, scaleIngredientParts } from '../../src/lib/quantities.mjs';
import {
  formulaEntries,
  formatFormulaIngredient,
  formulaShoppingList,
  formulaYield,
} from '../../src/lib/recipe-formula.mjs';

const load = (name) =>
  JSON.parse(fs.readFileSync(new URL(`./fixtures/${name}.json`, import.meta.url)));
const confirmed = load('scaling-confirmed');
const factors = [0.25, 0.5, 1, 1.5, 2, 3];
const number = /\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?/g;
const numeric = (text) =>
  text
    .trim()
    .split(/\s+/)
    .reduce((sum, value) => {
      const [numerator, denominator] = value.split('/').map(Number);
      return sum + numerator / (denominator || 1);
    }, 0);
const hash = (value) =>
  createHash('sha256')
    .update(typeof value === 'string' ? value : JSON.stringify(value))
    .digest('hex');

test('review fixture covers exactly 73 confirmed ingredient failures in 60 recipes', () => {
  assert.equal(confirmed.length, 73);
  assert.equal(new Set(confirmed.map((row) => row.slug)).size, 60);
  assert.equal(new Set(confirmed.map((row) => row.caseId)).size, 73);
});
for (const row of confirmed) {
  test(`${row.caseId}: ${row.slug} scales the reviewed regression quantity at all supported factors and 1.5x`, () => {
    const { data } = matter(
      fs.readFileSync(new URL(`../../src/content/recipes/${row.slug}.md`, import.meta.url), 'utf8')
    );
    for (const component of row.components || [row]) {
      if (
        row.slug === 'stuffed-shells-filled-with-spinach-and-ricotta' &&
        [61, 62].includes(row.caseId)
      ) {
        // Keep the original parser regression input and every numeric oracle below.
        // Its live source was separately replaced by an explicit structured formula.
        assert.equal(data.formula?.version, 1);
        assert.equal(data.scaling?.mode, 'fixed');
        const componentId = row.caseId === 61 ? 'filling' : 'sauce';
        const ingredientId = row.caseId === 61 ? 'mozzarella' : 'marinara';
        const replacement = data.formula.components
          .find((c) => c.id === componentId)
          .ingredients.find((i) => i.id === ingredientId);
        assert.equal(replacement.quantity.amount, row.caseId === 61 ? 8 : 4);
        assert.deepEqual(
          replacement.uses,
          row.caseId === 61
            ? [
                { step: 'filling', share: '2/3' },
                { step: 'arrange', share: '1/3' },
              ]
            : [
                { step: 'dishes', share: '1/4' },
                { step: 'arrange', share: '3/4' },
              ]
        );
        assert(!data.ingredients.includes(component.input));
      } else {
        assert.ok(
          data.ingredients.includes(component.input),
          'fixture must exercise the current authored ingredient'
        );
      }
      const authored = [...component.input.matchAll(number)].map((match) => match[0]);
      assert.deepEqual(
        authored,
        component.quantities.map((quantity) => quantity.amount)
      );
      for (const factor of factors) {
        const output = scaleIngredient(component.input, factor);
        if (factor === 1) assert.equal(output, component.input, 'reset restores exact source');
        const actual = [...output.matchAll(number)].map((match) => numeric(match[0]));
        const expected = component.quantities.map(
          ({ amount, scales }) => numeric(amount) * (scales ? factor : 1)
        );
        assert.equal(
          actual.length,
          expected.length,
          `${factor}x: quantity count changed: ${output}`
        );
        expected.forEach((value, index) => {
          // The existing display formatter rounds non-kitchen fractions to 2 decimals
          // (4 below 0.1). The oracle is independently specified source arithmetic.
          const tolerance = value < 0.1 ? 0.000051 : 0.005001;
          assert.ok(
            Math.abs(actual[index] - value) <= tolerance,
            `${factor}x quantity ${index}: expected ${value}, got ${actual[index]}: ${output}`
          );
        });
      }
    }
  });
}

test('six ambiguous count-leading equivalents retain their original quantities', () => {
  for (const { slug, input } of load('scaling-ambiguous')) {
    const { data } = matter(
      fs.readFileSync(new URL(`../../src/content/recipes/${slug}.md`, import.meta.url), 'utf8')
    );
    assert.ok(data.ingredients.includes(input), 'ambiguous source must remain unchanged');
    const parentheses = input.match(/\([^)]*\)/g) || [];
    for (const factor of factors) {
      const output = scaleIngredient(input, factor);
      parentheses.forEach((part) => assert.ok(output.includes(part), `${slug}: ${output}`));
    }
  }
});

test('fixed descriptions, compact package sizes, per-item sizes and non-quantity numbers stay fixed', () => {
  for (const [input, expected] of [
    ['4 skin-on salmon fillets, 6–8 oz each', '8 skin-on salmon fillets, 6–8 oz each'],
    ['1 whole fish, 1.5 lbs', '2 whole fish, 1.5 lbs'],
    ['1 whole turkey, 10–12 lb (4.5–5.4 kg)', '2 whole turkey, 10–12 lb (4.5–5.4 kg)'],
    [
      '2 packs (5g each) bonito, approx 1 cup total',
      '4 packs (5g each) bonito, approx 2 cups total',
    ],
    ['4 chicken breasts, about 6 oz (170 g) each', '8 chicken breasts, about 6 oz (170 g) each'],
    ['2 lbs beef, cut into 1.5-inch cubes', '4 lbs beef, cut into 1.5-inch cubes'],
    [
      'Neutral oil, enough for 1/2-inch depth in the frying pan',
      'Neutral oil, enough for 1/2-inch depth in the frying pan',
    ],
    ['1 barspoon (1/2 tsp) liqueur (40% ABV)', '2 barspoons (1 tsp) liqueur (40% ABV)'],
    ['1 cup sugar (for a 9-inch pan)', '2 cups sugar (for a 9-inch pan)'],
    ['1 lb shrimp (20–24 per pound)', '2 lb shrimp (20–24 per pound)'],
    [
      'Optional: 1 whole Scotch bonnet pepper; keep whole at any batch size',
      'Optional: 1 whole Scotch bonnet pepper; keep whole at any batch size',
    ],
    ['1/0 cup flour + 1 tsp salt', '1/0 cup flour + 1 tsp salt'],
  ])
    assert.equal(scaleIngredient(input, 2), expected);
});

test('compound scopes preserve package sizes and scale each equivalent exactly once', () => {
  for (const [input, expected] of [
    ['1 cup stock + 2 (14 oz) cans tomatoes', '2 cups stock + 4 (14 oz) cans tomatoes'],
    ['1 can tomatoes + 1 cup (240 ml) water', '2 cans tomatoes + 2 cups (480 ml) water'],
    [
      '1 cup (240 ml) stock, plus 1/2 cup (120 ml) water',
      '2 cups (480 ml) stock, plus 1 cup (240 ml) water',
    ],
    ['2 chipotles (plus 1 tsp sauce)', '4 chipotles (plus 2 tsp sauce)'],
    ['1 cup kimchi (plus 2 tbsp kimchi juice)', '2 cups kimchi (plus 4 tbsp kimchi juice)'],
    [
      '1 tsp seasoning (or 1 bay leaf + 1 tsp oregano)',
      '2 tsp seasoning (or 2 bay leaves + 2 tsp oregano)',
    ],
    ['1 can (14 oz + 2 oz bonus) tomatoes', '2 cans (14 oz + 2 oz bonus) tomatoes'],
  ])
    assert.equal(scaleIngredient(input, 2), expected);
});

test('linked ingredients retain all text parts and scale trailing equivalents on repeat and reset', () => {
  const parts = ['3-4 cups ', 'Roasted Tomato Basil Sauce', ' (1 full jar, 32 oz each)'];
  for (const factor of [2, 0.5, 3, 1, 0.25, 1.5, 1]) {
    const actual = scaleIngredientParts(parts, factor);
    assert.equal(actual.length, parts.length);
    assert.equal(actual[1], parts[1]);
    assert.equal(actual.join(''), scaleIngredient(parts.join(''), factor));
    assert.ok(actual[2].includes('32 oz each'));
    if (factor === 1) assert.deepEqual(actual, parts);
  }
  assert.deepEqual(scaleIngredientParts(parts, 2), [
    '6–8 cups ',
    'Roasted Tomato Basil Sauce',
    ' (2 full jars, 32 oz each)',
  ]);
});

test('all 13 fixed-batch and four structured recipes preserve their scaling modes and formula behavior', () => {
  const preserved = load('scaling-preserved');
  assert.equal(preserved.filter((row) => row.kind === 'fixed').length, 13);
  assert.equal(preserved.filter((row) => row.kind === 'formula').length, 4);
  for (const row of preserved) {
    const source = fs.readFileSync(
      new URL(`../../src/content/recipes/${row.slug}.md`, import.meta.url),
      'utf8'
    );
    const { data } = matter(source);
    if (row.kind === 'fixed')
      assert.equal(data.scaling?.mode, 'fixed', `${row.slug}: fixed mode changed`);
    else assert.ok(data.formula, `${row.slug}: structured formula removed`);
    for (const { factor, hash: expected } of row.expected || []) {
      assert.equal(
        hash({
          ingredients: formulaEntries(data.formula).map((entry) =>
            formatFormulaIngredient(entry, factor)
          ),
          shopping: formulaShoppingList(data.formula, factor),
          yield: formulaYield(data.formula, factor),
        }),
        expected,
        `${row.slug}: ${factor}x formula behavior changed`
      );
    }
  }
});

// These separately quantified lines are the reviewed companion safety candidate.
// They replace the legacy Carbonara allocation when the two candidates integrate.
test('separate pasteurized Carbonara quantities remain compatible with the safety candidate', () => {
  for (const [input, half, twice] of [
    [
      '2 large pasteurized whole eggs',
      '1 large pasteurized whole egg',
      '4 large pasteurized whole eggs',
    ],
    [
      '2 large pasteurized egg yolks',
      '1 large pasteurized egg yolk',
      '4 large pasteurized egg yolks',
    ],
  ]) {
    assert.equal(scaleIngredient(input, 0.5), half);
    assert.equal(scaleIngredient(input, 2), twice);
    assert.equal(scaleIngredient(input, 1), input);
  }
});

test('nested alternatives and compound equivalents are complete; unmarked allocations stay explicit', () => {
  assert.equal(
    scaleIngredient('1 tbsp paste (or 1 cup (240 ml) stock)', 2),
    '2 tbsp paste (or 2 cups (480 ml) stock)'
  );
  assert.equal(scaleIngredient('1 lb flour (2 cups + 1 tbsp)', 2), '2 lb flour (4 cups + 2 tbsp)');
  assert.equal(
    scaleIngredient('2 cups flour (1 cup for dough, 1 cup for dusting)', 2),
    '4 cups flour (1 cup for dough, 1 cup for dusting)'
  );
  assert.equal(
    scaleIngredient('2 cups flour (divided: 1 cup for dough, 1 cup for dusting)', 2),
    '4 cups flour (divided: 2 cups for dough, 2 cups for dusting)'
  );
});
