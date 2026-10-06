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
      } else if (row.slug === 'slow-cooker-vegetarian-lentil-tortilla-soup' && row.caseId === 60) {
        // Keep the original compound parser input and all numeric oracles below.
        // The reviewed formula now names both fixed-size cans separately.
        assert.equal(data.formula?.version, 1);
        for (const id of ['black', 'pinto']) {
          const ingredient = data.formula.components
            .flatMap((c) => c.ingredients)
            .find((i) => i.id === id);
          assert.deepEqual(ingredient.quantity, { amount: 1, unit: 'can' });
          assert.deepEqual(ingredient.packageSize, { amount: 15, unit: 'oz' });
          assert.deepEqual(ingredient.uses, [{ step: 'combine', share: 1 }]);
          for (const factor of factors) {
            const scaled = formatFormulaIngredient(ingredient, factor);
            const numbers = [...scaled.matchAll(number)].map((m) => numeric(m[0]));
            assert.deepEqual(numbers, [factor, 15], 'can count scales; package ounces stay fixed');
          }
        }
      } else if (row.slug === 'yellow-cake-with-chocolate-frosting' && row.caseId === 78) {
        // Preserve the compound parser regression while checking its authored split.
        assert.equal(data.formula?.version, 1);
        const cake = data.formula.components.find((c) => c.id === 'cake');
        for (const [id, amount] of [
          ['eggs', 3],
          ['yolks', 2],
        ]) {
          const ingredient = cake.ingredients.find((i) => i.id === id);
          assert.equal(ingredient.quantity.amount, amount);
          assert.deepEqual(ingredient.uses, [{ step: 'eggs', share: 1 }]);
          for (const factor of factors) {
            const scaled = formatFormulaIngredient(ingredient, factor);
            assert.equal(numeric(scaled.match(number)[0]), amount * factor);
          }
        }
      } else if (
        (row.slug === 'roasted-asparagus' && row.caseId === 55) ||
        (row.slug === 'roasted-broccolini-with-lemon' && row.caseId === 56)
      ) {
        // Retain the old parser inputs and numeric oracles below, while checking
        // their independently reviewed authored replacements. Bunch weight is
        // descriptive original-batch context, not a universal weight conversion.
        assert.equal(data.formula?.version, 1);
        const asparagus = row.caseId === 55;
        const ingredient = data.formula.components
          .find((c) => c.id === (asparagus ? 'finish' : 'roast'))
          .ingredients.find((i) => i.id === (asparagus ? 'garnish' : 'broccolini'));
        assert.deepEqual(ingredient.quantity, {
          amount: asparagus ? 1 : 2,
          unit: asparagus ? 'tbsp' : 'count',
        });
        assert.deepEqual(ingredient.uses, [{ step: asparagus ? 'finish' : 'toss', share: 1 }]);
        if (asparagus) {
          assert.equal(ingredient.optional, true);
          assert.equal(ingredient.name, 'grated Parmesan or finely grated lemon zest');
        } else {
          assert.match(ingredient.preparation, /12 oz total in the original two-bunch batch/);
        }
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.equal(numeric(scaled.match(number)[0]), (asparagus ? 1 : 2) * factor);
          if (!asparagus) {
            assert.match(scaled, /12 oz total in the original two-bunch batch/);
          }
        }
      } else if (
        (row.slug === 'chinese-steamed-fish' && row.caseId === 16) ||
        (row.slug === 'gefilte-fish-terrine' && row.caseId === 35)
      ) {
        // Keep all original parser inputs and numeric oracles below unchanged.
        // Ginger piece count scales while its original two-inch size stays fixed.
        // Lemon zest count scales independently from the separately measured juice.
        assert.equal(data.formula?.version, 1);
        const ginger = row.caseId === 16;
        const ingredient = data.formula.components
          .find((c) => c.id === (ginger ? 'fish' : 'terrine'))
          .ingredients.find((i) => i.id === (ginger ? 'ginger' : 'lemons'));
        assert.deepEqual(ingredient.quantity, { amount: ginger ? 1 : 2, unit: 'count' });
        assert.match(
          ingredient.preparation,
          ginger ? /original 2-inch piece/ : /zest only; measured juice separate/
        );
        assert.deepEqual(
          ingredient.uses,
          ginger
            ? [
                { step: 'fish', share: '1/2' },
                { step: 'aromatics', share: '1/2' },
              ]
            : [{ step: 'bind', share: 1 }]
        );
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            ginger ? [factor, 2] : [2 * factor]
          );
        }
        assert.equal(formatFormulaIngredient(ingredient, 1), formatFormulaIngredient(ingredient));
      } else if (row.slug === 'banana-nut-bread' && row.caseId === 2) {
        // Retain the original parser input and every numeric oracle below.
        // The formula keeps both the three-banana count and approximate total grams.
        assert.equal(data.formula?.version, 1);
        const ingredient = data.formula.components
          .find((c) => c.id === 'batter')
          .ingredients.find((i) => i.id === 'bananas');
        assert.deepEqual(ingredient.quantity, { amount: 3, unit: 'count' });
        assert.deepEqual(ingredient.equivalents, [{ amount: 375, unit: 'g' }]);
        assert.match(ingredient.preparation, /gram equivalent is an approximate total/);
        assert.deepEqual(ingredient.uses, [{ step: 'banana', share: 1 }]);
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [3 * factor, 375 * factor]
          );
        }
        assert.equal(formatFormulaIngredient(ingredient, 1), formatFormulaIngredient(ingredient));
      } else if (
        (row.slug === 'chicken-quesadillas-with-quick-pico' && row.caseId === 12) ||
        (row.slug === 'herby-chicken-meatball-bowl' && row.caseId === 37)
      ) {
        // The live formula replaces the juice/zest wording; keep every parser
        // fixture input and its independent numeric oracle below unchanged.
        assert.equal(data.formula?.version, 1);
        const quesadilla = row.caseId === 12;
        const replacement = data.formula.components
          .find((c) => c.id === (quesadilla ? 'pico' : 'meat'))
          .ingredients.find((i) => i.id === (quesadilla ? 'lime' : 'zest'));
        assert.deepEqual(replacement.quantity, { amount: 1, unit: 'count' });
        assert.equal(replacement.name, quesadilla ? 'lime' : 'lemon');
        assert.match(replacement.preparation, quesadilla ? /juice only/ : /zest only/);
        assert.deepEqual(replacement.uses, [{ step: quesadilla ? 'pico' : 'mix', share: 1 }]);
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(replacement, factor);
          assert.equal(numeric(scaled.match(number)[0]), factor);
          assert.match(scaled, quesadilla ? /juice only/ : /zest only/);
        }
        assert.equal(formatFormulaIngredient(replacement, 1), formatFormulaIngredient(replacement));
      } else if (row.slug === 'warm-spiced-butternut-squash-soup' && row.caseId === 77) {
        // The live formula names a counted stick with fixed original geometry.
        // Preserve the original parser input and its independent numeric oracle below.
        assert.equal(data.formula?.version, 1);
        const ingredient = data.formula.components
          .find((c) => c.id === 'soup')
          .ingredients.find((i) => i.id === 'cinnamon');
        assert.deepEqual(ingredient.quantity, { amount: 1, unit: 'count' });
        assert.equal(ingredient.name, 'cinnamon stick');
        assert.equal(ingredient.plural, 'cinnamon sticks');
        assert.equal(
          ingredient.preparation,
          '3-inch piece per original stick; size stays fixed when count scales'
        );
        assert.deepEqual(ingredient.uses, [{ step: 'stock', share: 1 }]);
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [factor, 3]
          );
        }
        assert.equal(formatFormulaIngredient(ingredient, 1), formatFormulaIngredient(ingredient));
      } else if (
        row.slug === 'one-pan-lemon-herb-chicken-thighs' &&
        [43, 44, 45].includes(row.caseId)
      ) {
        // Keep all three original parser inputs and numeric oracles below.
        // The live formula counts thighs with original-batch weight context,
        // and uses both juice and zest from the same counted lemons.
        assert.equal(data.formula?.version, 1);
        const chicken = row.caseId === 43;
        const ingredient = data.formula.components
          .find((c) => c.id === 'pan')
          .ingredients.find((i) => i.id === (chicken ? 'chicken' : 'lemon'));
        assert.deepEqual(ingredient.quantity, { amount: chicken ? 8 : 2, unit: 'count' });
        assert.equal(ingredient.name, chicken ? 'bone-in skin-on chicken thigh' : 'lemon');
        assert.equal(
          ingredient.preparation,
          chicken
            ? 'raw, fresh or fully thawed; original eight-thigh batch is about 2.5–3 lb total'
            : 'washed, zested and juiced; reserve all juice and zest from these same lemons'
        );
        assert.deepEqual(ingredient.uses, [{ step: chicken ? 'sear' : 'deglaze', share: 1 }]);
        if (!chicken) {
          const deglaze = data.formula.steps.find((s) => s.id === 'deglaze');
          assert.match(deglaze.text, /all the juice from the measured lemons/);
          assert.match(deglaze.text, /all the reserved zest/);
        }
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            chicken ? [8 * factor, 2.5, 3] : [2 * factor]
          );
          if (factor === 1) assert.equal(scaled, formatFormulaIngredient(ingredient));
        }
      } else if (row.slug === 'chewy-chocolate-meringues' && row.caseId === 7) {
        // Retain the original parser input and all numeric oracles below.
        // The current recipe measures pasteurized whites by volume without
        // claiming an undocumented equivalent count of whole eggs.
        const liveIngredient = '1 cup Pasteurized Egg Whites, suitable for whipping';
        assert.ok(data.ingredients.includes(liveIngredient));
        assert.ok(data.ingredients.includes('2 cups Granulated Sugar'));
        assert.ok(data.ingredients.includes('1 cup Dark Chocolate Chips'));
        for (const factor of factors) {
          const scaled = scaleIngredient(liveIngredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [factor]
          );
          assert.match(scaled, /Pasteurized Egg Whites, suitable for whipping/);
          if (factor === 1) assert.equal(scaled, liveIngredient);
        }
      } else if (row.slug === 'misir-wot' && row.caseId === 39) {
        // Keep the original total-volume parser input and its numeric oracles below.
        // The current recipe states the onion volume as original-batch context.
        const liveIngredient =
          '2 large Red Onions, finely diced (about 3 cups for the original batch)';
        assert.ok(data.ingredients.includes(liveIngredient));
        for (const factor of factors) {
          const scaled = scaleIngredient(liveIngredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [2 * factor, 3]
          );
          assert.match(scaled, /cups for the original batch/);
          if (factor === 1) assert.equal(scaled, liveIngredient);
        }
      } else if (row.slug === 'anelletti-al-forno' && row.caseId === 70) {
        // Keep the original compound parser input and every numeric oracle below.
        // The source-rich live formula has separate counted vegetables.
        assert.equal(data.formula?.version, 1);
        const ragu = data.formula.components.find((c) => c.id === 'ragu');
        for (const [id, amount] of [
          ['carrot', 1],
          ['celery', 1],
          ['onion', '1/2'],
        ]) {
          const ingredient = ragu.ingredients.find((i) => i.id === id);
          assert.deepEqual(ingredient.quantity, { amount, unit: 'count' });
          assert.deepEqual(ingredient.uses, [{ step: 'ragu', share: 1 }]);
          assert.ok(data.ingredients.includes(formatFormulaIngredient(ingredient)));
          for (const factor of factors) {
            const scaled = formatFormulaIngredient(ingredient, factor);
            assert.deepEqual(
              [...scaled.matchAll(number)].map((m) => numeric(m[0])),
              [numeric(String(amount)) * factor]
            );
            if (factor === 1) assert.equal(scaled, formatFormulaIngredient(ingredient));
          }
        }
        assert.ok(!data.ingredients.includes(component.input));
      } else if (row.slug === 'tomato-and-goat-cheese-tart' && row.caseId === 75) {
        // Keep the original total/allocated parser input and all oracles below.
        // The live authored formula preserves twelve ounces split four/eight.
        assert.equal(data.formula?.version, 1);
        const goat = data.formula.components
          .find((c) => c.id === 'tart')
          .ingredients.find((i) => i.id === 'goat');
        assert.deepEqual(goat.quantity, { amount: 12, unit: 'oz' });
        assert.deepEqual(goat.uses, [
          { step: 'dough', share: '1/3' },
          { step: 'filling', share: '2/3' },
        ]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(goat)));
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(goat, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [12 * factor]
          );
          assert.deepEqual(
            goat.uses.map(({ share }) => numeric(share) * 12 * factor),
            [4 * factor, 8 * factor]
          );
          if (factor === 1) assert.equal(scaled, formatFormulaIngredient(goat));
        }
        assert.ok(!data.ingredients.includes(component.input));
      } else if (row.slug === 'elote-style-corn-on-the-cob' && row.caseId === 29) {
        // Retain the original compound parser input and every numeric oracle below.
        // The live formula separates the full crema/sour-cream measure from
        // the optional milk used only for the sour-cream route.
        assert.equal(data.formula?.version, 1);
        const sauce = data.formula.components.find((c) => c.id === 'sauce');
        for (const [id, amount] of [
          ['cream', 3],
          ['milk', 1],
        ]) {
          const ingredient = sauce.ingredients.find((i) => i.id === id);
          assert.deepEqual(ingredient.quantity, { amount, unit: 'tbsp' });
          assert.deepEqual(ingredient.uses, [{ step: 'sauce', share: 1 }]);
          if (id === 'milk') {
            assert.equal(ingredient.optional, true);
            assert.equal(ingredient.preparation, 'only for the sour-cream alternative');
          } else assert.equal(ingredient.name, 'Mexican crema or sour cream');
          assert.ok(data.ingredients.includes(formatFormulaIngredient(ingredient)));
          for (const factor of factors) {
            const output = formatFormulaIngredient(ingredient, factor);
            assert.equal(numeric(output.match(number)[0]), amount * factor);
            if (factor === 1) assert.equal(output, formatFormulaIngredient(ingredient));
          }
        }
        assert.ok(!data.ingredients.includes(component.input));
      } else if (row.slug === 'noodle-pudding' && row.caseId === 42) {
        // Keep the original total/allocation parser input and numeric oracles below.
        // The published eight-ounce butter total remains six in custard,
        // two in the topping, now represented by explicit authored shares.
        assert.equal(data.formula?.version, 1);
        const butter = data.formula.components
          .find((c) => c.id === 'custard')
          .ingredients.find((i) => i.id === 'butter');
        assert.deepEqual(butter.quantity, { amount: 8, unit: 'oz' });
        assert.deepEqual(butter.uses, [
          { step: 'custard', share: '3/4' },
          { step: 'topping', share: '1/4' },
        ]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(butter)));
        for (const factor of factors) {
          const output = formatFormulaIngredient(butter, factor);
          assert.equal(numeric(output.match(number)[0]), 8 * factor);
          assert.deepEqual(
            butter.uses.map(({ share }) => numeric(share) * 8 * factor),
            [6 * factor, 2 * factor]
          );
          if (factor === 1) assert.equal(output, formatFormulaIngredient(butter));
        }
        assert.ok(!data.ingredients.includes(component.input));
      } else if (row.slug === 'cranberry-crunch' && row.caseId === 20) {
        // Keep the original compound parser input and every numeric oracle below.
        // Two cups of fruit do not establish one unspecified package's contents.
        const current = '2 cups Fresh Cranberries';
        assert.ok(data.ingredients.includes(current));
        assert.ok(!data.ingredients.includes(component.input));
        for (const factor of factors) {
          assert.equal(numeric(scaleIngredient(current, factor).match(number)[0]), 2 * factor);
        }
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
    if (slug === 'garlicky-lemon-kale-with-carrots') {
      // Preserve both original ambiguous parser inputs below. The live ingredient
      // now explicitly limits its cup/tablespoon estimate to the original batch.
      const live = input.startsWith('1 large bunch')
        ? '1 large bunch Kale (stems removed; about 8 cups chopped for the original batch)'
        : '1/2 Lemon, juiced (about 2 tbsp juice for the original batch)';
      assert.ok(data.ingredients.includes(live), 'original count and equivalent remain present');
      const sourceQuantities = [...input.matchAll(number)].map((match) => numeric(match[0]));
      assert.deepEqual(
        [...live.matchAll(number)].map((match) => numeric(match[0])),
        sourceQuantities
      );
      for (const factor of factors) {
        const scaled = scaleIngredient(live, factor);
        if (factor === 1) assert.equal(scaled, live, 'reset restores the current exact ingredient');
        const actual = [...scaled.matchAll(number)].map((match) => numeric(match[0]));
        assert.equal(actual.length, 2);
        assert.ok(Math.abs(actual[0] - sourceQuantities[0] * factor) <= 0.005001);
        assert.equal(actual[1], sourceQuantities[1], 'original-batch equivalent stays fixed');
      }
    } else {
      assert.ok(data.ingredients.includes(input), 'ambiguous source must remain unchanged');
    }
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
    let preservedFormula = data.formula;
    if (row.slug === 'chocolate-chip-cookie-cake') {
      // Retain every old measured ingredient/shopping/yield hash below.
      // The only extra component is a genuine unmeasured pan-greasing supply.
      const pan = data.formula.components.find((c) => c.id === 'pan');
      assert.equal(pan.name, 'Pan preparation');
      assert.equal(pan.ingredients.length, 1);
      const grease = pan.ingredients[0];
      assert.equal(grease.name, 'butter or baking spray');
      assert.equal(grease.allowance, 'enough to grease the pan and parchment');
      assert.equal(grease.quantity, undefined);
      assert.deepEqual(grease.uses, [{ step: 'prep', share: 1 }]);
      assert.ok(data.formula.steps.find((s) => s.id === 'prep').text.includes('{{ingredients}}'));
      assert.ok(data.ingredients.includes(formatFormulaIngredient(grease)));
      for (const factor of factors) {
        assert.equal(formatFormulaIngredient(grease, factor), formatFormulaIngredient(grease));
      }
      preservedFormula = {
        ...data.formula,
        components: data.formula.components.filter((c) => c.id !== 'pan'),
      };
      assert.equal(preservedFormula.components.length, 2);
    }
    for (const { factor, hash: expected } of row.expected || []) {
      assert.equal(
        hash({
          ingredients: formulaEntries(preservedFormula).map((entry) =>
            formatFormulaIngredient(entry, factor)
          ),
          shopping: formulaShoppingList(preservedFormula, factor),
          yield: formulaYield(preservedFormula, factor),
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
