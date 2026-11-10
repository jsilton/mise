import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import matter from '../../src/lib/frontmatter.mjs';
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
const retirements = JSON.parse(
  fs.readFileSync(new URL('../../src/data/recipe-retirements.json', import.meta.url))
);
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
    const sourcePath = new URL(`../../src/content/recipes/${row.slug}.md`, import.meta.url);
    const data = retirements[row.slug] ? null : matter(fs.readFileSync(sourcePath, 'utf8')).data;
    for (const component of row.components || [row]) {
      if (retirements[row.slug]) {
        // The recipe was deliberately retired; every historic parser input and
        // numeric oracle still runs below. Only its active-source check changes.
        assert.equal(retirements[row.slug].status, 'retired-by-user');
        assert.equal(fs.existsSync(sourcePath), false);
        assert.ok(fs.existsSync(retirements[row.slug].record));
      } else if (
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
                { step: 'cheese', share: '1/3' },
              ]
            : [
                { step: 'dishes', share: '1/4' },
                { step: 'top', share: '3/4' },
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
        // their authored replacements. Broccolini is now measured by weight alone,
        // so no fixed bunch count sits beside a scaling weight.
        assert.equal(data.formula?.version, 1);
        const asparagus = row.caseId === 55;
        const ingredient = data.formula.components
          .find((c) => c.id === (asparagus ? 'finish' : 'roast'))
          .ingredients.find((i) => i.id === (asparagus ? 'garnish' : 'broccolini'));
        assert.deepEqual(ingredient.quantity, {
          amount: asparagus ? 1 : 12,
          unit: asparagus ? 'tbsp' : 'oz',
        });
        assert.deepEqual(ingredient.uses, [{ step: asparagus ? 'serve' : 'toss', share: 1 }]);
        if (asparagus) {
          assert.equal(ingredient.optional, true);
          assert.equal(ingredient.name, 'grated Parmesan or lemon zest');
        } else {
          assert.equal(ingredient.preparation, 'trimmed, thick stems split lengthwise');
        }
        assert.ok(data.ingredients.includes(formatFormulaIngredient(ingredient)));
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [(asparagus ? 1 : 12) * factor],
            'the only quantity on the line scales'
          );
        }
      } else if (
        (row.slug === 'chinese-steamed-fish' && row.caseId === 16) ||
        (row.slug === 'gefilte-fish-terrine' && row.caseId === 35)
      ) {
        // Keep all original parser inputs and numeric oracles below unchanged.
        // Ginger piece count scales while its two-inch size stays fixed.
        // The zest of two lemons is now measured as 2 tbsp, apart from the juice.
        assert.equal(data.formula?.version, 1);
        const ginger = row.caseId === 16;
        const ingredients = data.formula.components.find(
          (c) => c.id === (ginger ? 'fish' : 'terrine')
        ).ingredients;
        const ingredient = ingredients.find((i) => i.id === (ginger ? 'ginger' : 'zest'));
        assert.deepEqual(ingredient.quantity, {
          amount: ginger ? 1 : 2,
          unit: ginger ? 'piece' : 'tbsp',
        });
        if (ginger) assert.match(ingredient.preparation, /^2 inches long/);
        else {
          assert.equal(ingredient.name, 'lemon zest');
          assert.deepEqual(ingredients.find((i) => i.id === 'juice').quantity, {
            amount: 1,
            unit: 'tsp',
          });
        }
        assert.deepEqual(
          ingredient.uses,
          ginger
            ? [
                { step: 'season', share: '1/2' },
                { step: 'aromatics', share: '1/2' },
              ]
            : [{ step: 'bind', share: 1 }]
        );
        assert.ok(data.ingredients.includes(formatFormulaIngredient(ingredient)));
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
        // The family original counts three bananas with no gram equivalent.
        assert.equal(data.formula?.version, 1);
        const ingredient = data.formula.components
          .find((c) => c.id === 'batter')
          .ingredients.find((i) => i.id === 'bananas');
        assert.deepEqual(ingredient.quantity, { amount: 3, unit: 'count' });
        assert.equal(ingredient.equivalents, undefined);
        assert.equal(ingredient.preparation, 'mashed');
        assert.deepEqual(ingredient.uses, [{ step: 'banana', share: 1 }]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(ingredient)));
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [3 * factor]
          );
        }
        assert.equal(formatFormulaIngredient(ingredient, 1), formatFormulaIngredient(ingredient));
      } else if (
        (row.slug === 'chicken-quesadillas-with-quick-pico' && row.caseId === 12) ||
        (row.slug === 'herby-chicken-meatball-bowl' && row.caseId === 37)
      ) {
        // The live formula measures the juice and zest by volume; keep every
        // parser fixture input and its independent numeric oracle below unchanged.
        assert.equal(data.formula?.version, 1);
        const quesadilla = row.caseId === 12;
        const replacement = data.formula.components
          .find((c) => c.id === (quesadilla ? 'pico' : 'meat'))
          .ingredients.find((i) => i.id === (quesadilla ? 'lime' : 'zest'));
        assert.deepEqual(replacement.quantity, {
          amount: quesadilla ? 2 : 1,
          unit: 'tbsp',
        });
        assert.equal(replacement.name, quesadilla ? 'fresh lime juice' : 'lemon zest');
        assert.deepEqual(replacement.uses, [{ step: quesadilla ? 'pico' : 'mix', share: 1 }]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(replacement)));
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(replacement, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [(quesadilla ? 2 : 1) * factor],
            'no fixed fruit count sits beside the scaled measure'
          );
        }
        assert.equal(formatFormulaIngredient(replacement, 1), formatFormulaIngredient(replacement));
      } else if (row.slug === 'warm-spiced-butternut-squash-soup' && row.caseId === 77) {
        // The live formula names a counted stick with a fixed per-stick length,
        // and lists the star anise and cloves of the compound input separately.
        // Preserve the original parser input and its independent numeric oracle below.
        assert.equal(data.formula?.version, 1);
        const soup = data.formula.components.find((c) => c.id === 'soup');
        const ingredient = soup.ingredients.find((i) => i.id === 'cinnamon');
        assert.deepEqual(ingredient.quantity, { amount: 1, unit: 'count' });
        assert.equal(ingredient.name, 'cinnamon stick');
        assert.equal(ingredient.plural, 'cinnamon sticks');
        assert.equal(ingredient.preparation, '3 inches long');
        assert.deepEqual(ingredient.uses, [{ step: 'stock', share: 1 }]);
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [factor, 3]
          );
        }
        assert.equal(formatFormulaIngredient(ingredient, 1), formatFormulaIngredient(ingredient));
        for (const [id, amount] of [
          ['anise', 1],
          ['cloves', 3],
        ]) {
          const spice = soup.ingredients.find((i) => i.id === id);
          assert.deepEqual(spice.quantity, { amount, unit: 'count' });
          assert.deepEqual(spice.uses, [{ step: 'stock', share: 1 }]);
          assert.ok(data.ingredients.includes(formatFormulaIngredient(spice)));
          for (const factor of factors)
            assert.equal(
              numeric(formatFormulaIngredient(spice, factor).match(number)[0]),
              amount * factor
            );
        }
      } else if (
        row.slug === 'one-pan-lemon-herb-chicken-thighs' &&
        [43, 44, 45].includes(row.caseId)
      ) {
        // Keep all three original parser inputs and numeric oracles below.
        // The live formula counts small thighs with a 2 1/2 lb equivalent that
        // scales with the count (Nov 10 fix), and uses both juice and zest from
        // the same counted lemons.
        assert.equal(data.formula?.version, 1);
        const chicken = row.caseId === 43;
        const ingredient = data.formula.components
          .find((c) => c.id === 'pan')
          .ingredients.find((i) => i.id === (chicken ? 'chicken' : 'lemon'));
        assert.deepEqual(ingredient.quantity, { amount: chicken ? 8 : 2, unit: 'count' });
        assert.equal(ingredient.name, chicken ? 'small bone-in, skin-on chicken thigh' : 'lemon');
        assert.equal(ingredient.preparation, chicken ? undefined : 'zested and juiced');
        assert.deepEqual(ingredient.uses, [{ step: chicken ? 'sear' : 'lemon', share: 1 }]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(ingredient)));
        if (!chicken) {
          const lemon = data.formula.steps.find((s) => s.id === 'lemon');
          assert.match(lemon.text, /the juice of the \{\{ingredients\}\}/);
          assert.match(lemon.text, /stir in the zest/);
        }
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(ingredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            chicken ? [8 * factor, 2.5 * factor] : [2 * factor]
          );
          if (factor === 1) assert.equal(scaled, formatFormulaIngredient(ingredient));
        }
      } else if (row.slug === 'chewy-chocolate-meringues' && row.caseId === 7) {
        // Retain the original parser input and all numeric oracles below.
        // The plain page measures whites by volume with a scaling egg count
        // (pasteurized-egg safety copy was dropped at Jordan's request).
        const liveIngredient = '1 cup egg whites (about 8 large eggs)';
        assert.ok(data.ingredients.includes(liveIngredient));
        assert.ok(data.ingredients.includes('2 cups granulated sugar'));
        assert.ok(data.ingredients.includes('1 cup dark chocolate chips'));
        for (const factor of factors) {
          const scaled = scaleIngredient(liveIngredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [factor, 8 * factor]
          );
          if (factor === 1) assert.equal(scaled, liveIngredient);
        }
      } else if (row.slug === 'misir-wot' && row.caseId === 39) {
        // Keep the original total-volume parser input and its numeric oracles below.
        // The plain page drops the original-batch volume note and counts onions only.
        const liveIngredient = '2 large red onions, finely diced';
        assert.ok(data.ingredients.includes(liveIngredient));
        for (const factor of factors) {
          const scaled = scaleIngredient(liveIngredient, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [2 * factor]
          );
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
          assert.deepEqual(ingredient.uses, [{ step: 'soffritto', share: 1 }]);
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
        // The live formula lists the four ounces for the pastry and the eight for
        // the filling as separate lines, still twelve ounces in all.
        assert.equal(data.formula?.version, 1);
        const goats = ['pastry', 'filling'].map((id) =>
          data.formula.components.find((c) => c.id === id).ingredients.find((i) => i.id === 'goat')
        );
        assert.deepEqual(
          goats.map((g) => g.quantity),
          [
            { amount: 4, unit: 'oz' },
            { amount: 8, unit: 'oz' },
          ]
        );
        assert.deepEqual(
          goats.map((g) => g.uses),
          [[{ step: 'fat', share: 1 }], [{ step: 'filling', share: 1 }]]
        );
        for (const goat of goats)
          assert.ok(data.ingredients.includes(formatFormulaIngredient(goat)));
        for (const factor of factors) {
          assert.deepEqual(
            goats.map((goat) => numeric(formatFormulaIngredient(goat, factor).match(number)[0])),
            [4 * factor, 8 * factor]
          );
        }
        assert.ok(!data.ingredients.includes(component.input));
      } else if (row.slug === 'elote-style-corn-on-the-cob' && row.caseId === 29) {
        // Retain the original compound parser input and every numeric oracle below.
        // Crema leads the live formula; the sour cream thinned with 1 tbsp milk
        // is now its swap rather than an ingredient line.
        assert.equal(data.formula?.version, 1);
        const ingredient = data.formula.components
          .find((c) => c.id === 'main')
          .ingredients.find((i) => i.id === 'cream');
        assert.equal(ingredient.name, 'Mexican crema');
        assert.deepEqual(ingredient.quantity, { amount: 3, unit: 'tbsp' });
        assert.deepEqual(ingredient.uses, [{ step: 'sauce', share: 1 }]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(ingredient)));
        for (const factor of factors) {
          const output = formatFormulaIngredient(ingredient, factor);
          assert.equal(numeric(output.match(number)[0]), 3 * factor);
          if (factor === 1) assert.equal(output, formatFormulaIngredient(ingredient));
        }
        const swap = data.learning.substitutions.find((x) => x.ingredient === 'Mexican crema');
        assert.equal(swap.alternative, 'Sour cream thinned with 1 tbsp milk');
        assert.ok(!data.ingredients.includes(component.input));
      } else if (row.slug === 'noodle-pudding' && row.caseId === 42) {
        // Keep the original total/allocation parser input and numeric oracles below.
        // The family original restores 12 oz (3 sticks): half in the pudding, half
        // for the pan and topping. The 8 oz split now lives in the Suggested Tweak.
        assert.equal(data.formula?.version, 1);
        const butter = data.formula.components
          .find((c) => c.id === 'pudding')
          .ingredients.find((i) => i.id === 'butter');
        assert.deepEqual(butter.quantity, { amount: 12, unit: 'oz' });
        assert.deepEqual(butter.equivalents, [{ amount: 3, unit: 'stick' }]);
        assert.deepEqual(butter.uses, [
          { step: 'mix', share: '1/2' },
          { step: 'pan', share: '1/2' },
        ]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(butter)));
        assert.match(fs.readFileSync(sourcePath, 'utf8'), /Use 8 oz butter instead of 12 oz/);
        for (const factor of factors) {
          const output = formatFormulaIngredient(butter, factor);
          assert.deepEqual(
            [...output.matchAll(number)].map((m) => numeric(m[0])),
            [12 * factor, 3 * factor]
          );
          assert.deepEqual(
            butter.uses.map(({ share }) => numeric(share) * 12 * factor),
            [6 * factor, 6 * factor]
          );
          if (factor === 1) assert.equal(output, formatFormulaIngredient(butter));
        }
        assert.ok(!data.ingredients.includes(component.input));
      } else if (
        (row.slug === 'pho-bo-beef-pho' && row.caseId === 50) ||
        (row.slug === 'quick-wonton-soup' && row.caseId === 52)
      ) {
        // Keep both original parser inputs and every numeric oracle below.
        // Live ginger counts scale while each piece's inch length stays fixed.
        assert.equal(data.formula?.version, 1);
        const pho = row.caseId === 50;
        const ginger = data.formula.components
          .find((component) => component.id === 'main')
          .ingredients.find((ingredient) => ingredient.id === 'ginger');
        assert.deepEqual(ginger.quantity, { amount: 1, unit: pho ? 'count' : 'piece' });
        assert.equal(ginger.name, pho ? '4-inch piece of fresh ginger' : 'fresh ginger');
        if (pho) assert.equal(ginger.plural, '4-inch pieces of fresh ginger');
        assert.equal(ginger.preparation, pho ? 'halved lengthwise' : '1 inch long, smashed');
        assert.deepEqual(ginger.uses, [{ step: pho ? 'char' : 'infuse', share: 1 }]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(ginger)));
        for (const factor of factors) {
          const output = formatFormulaIngredient(ginger, factor);
          assert.deepEqual(
            [...output.matchAll(number)].map((match) => numeric(match[0])),
            [factor, pho ? 4 : 1]
          );
          if (factor === 1) assert.equal(output, formatFormulaIngredient(ginger));
        }
        assert.ok(!data.ingredients.includes(component.input));
      } else if (row.slug === 'vanilla-earl-grey-overnight-oats' && row.caseId === 76) {
        // Keep the original compound parser input and every numeric oracle below.
        // Infusion water and discarded tea now have separate measured entries.
        assert.equal(data.formula?.version, 1);
        const base = data.formula.components.find((component) => component.id === 'base');
        for (const [id, unit, name] of [
          ['water', 'cup', 'boiling water'],
          ['tea', 'count', 'Earl Grey tea bag'],
        ]) {
          const ingredient = base.ingredients.find((entry) => entry.id === id);
          assert.equal(ingredient.name, name);
          assert.deepEqual(ingredient.quantity, { amount: 1, unit });
          assert.deepEqual(ingredient.uses, [{ step: 'steep', share: 1 }]);
          if (id === 'tea') assert.equal(ingredient.role, 'discarded');
          assert.ok(data.ingredients.includes(formatFormulaIngredient(ingredient)));
          for (const factor of factors) {
            const output = formatFormulaIngredient(ingredient, factor);
            assert.deepEqual(
              [...output.matchAll(number)].map((match) => numeric(match[0])),
              [factor]
            );
            if (factor === 1) assert.equal(output, formatFormulaIngredient(ingredient));
          }
        }
        assert.match(
          data.formula.steps.find((step) => step.id === 'steep').text,
          /squeeze out the tea bag and discard it/
        );
        assert.ok(!data.ingredients.includes(component.input));
      } else if (row.slug === 'cranberry-crunch' && row.caseId === 20) {
        // Keep the original compound parser input and every numeric oracle below.
        // The family original is restored: two cups, one bag, and both scale.
        const current = '2 cups cranberries (1 bag)';
        assert.ok(data.ingredients.includes(current));
        assert.ok(!data.ingredients.includes(component.input));
        for (const factor of factors) {
          const scaled = scaleIngredient(current, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [2 * factor, factor]
          );
          if (factor === 1) assert.equal(scaled, current);
        }
      } else if (row.slug === 'super-lemony-olive-oil-cake' && row.caseId === 63) {
        // Preserve the original compound parser input and all numeric oracles below.
        // The authored formula counts whole lemons and uses all their zest and juice.
        assert.equal(data.formula?.version, 1);
        const lemon = data.formula.components
          .find((c) => c.id === 'cake')
          .ingredients.find((i) => i.id === 'lemon');
        assert.equal(lemon.name, 'large lemon');
        assert.equal(lemon.plural, 'large lemons');
        assert.deepEqual(lemon.quantity, { amount: 2, unit: 'count' });
        assert.deepEqual(lemon.uses, [{ step: 'flavor', share: 1 }]);
        assert.equal(lemon.preparation, 'zested and juiced');
        assert.match(
          data.formula.steps.find((step) => step.id === 'flavor').text,
          /using all the lemon zest and juice/
        );
        assert.ok(data.ingredients.includes(formatFormulaIngredient(lemon)));
        for (const factor of factors) {
          assert.equal(
            numeric(formatFormulaIngredient(lemon, factor).match(number)[0]),
            2 * factor
          );
        }
      } else if (row.slug === 'vieux-carre' && row.caseId === 67) {
        // Preserve the original barspoon parser input and all numeric oracles below.
        // The separately reviewed live formula specifies the teaspoon measure.
        assert.equal(data.formula?.version, 1);
        const liqueur = data.formula.components
          .find((c) => c.id === 'drink')
          .ingredients.find((i) => i.id === 'liqueur');
        // The brand now names the liqueur (no ABV), and the step's barspoon
        // caveat was dropped as hedging: the teaspoon measure itself replaces it.
        assert.equal(liqueur.name, 'Bénédictine');
        assert.deepEqual(liqueur.quantity, { amount: '1/2', unit: 'tsp' });
        assert.deepEqual(liqueur.uses, [{ step: 'mix', share: 1 }]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(liqueur)));
        assert.ok(!data.ingredients.some((line) => /barspoon/i.test(line)));
        for (const factor of factors) {
          assert.deepEqual(
            [...formatFormulaIngredient(liqueur, factor).matchAll(number)].map((m) =>
              numeric(m[0])
            ),
            [0.5 * factor],
            'liqueur teaspoons scale'
          );
        }
        assert.equal(formatFormulaIngredient(liqueur, 1), formatFormulaIngredient(liqueur));
      } else if (
        (row.slug === 'crispy-oven-zucchini-fries' && row.caseId === 22) ||
        (row.slug === 'roasted-sweet-potatoes' && row.caseId === 57)
      ) {
        // Keep both historical parser inputs and their numeric oracles below.
        // The plain page drops "original batch" scoping, so the medium count is
        // an equivalent of the weight and scales with it; cut sizes stay fixed.
        const zucchini = row.caseId === 22;
        const live = zucchini
          ? '2 lb zucchini (about 4 medium), cut into 1/2-inch sticks'
          : '2 lb sweet potatoes (about 3 medium), peeled and cut into 3/4-inch wedges';
        assert.ok(data.ingredients.includes(live), 'current measured weight and count remain');
        for (const factor of factors) {
          const scaled = scaleIngredient(live, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            zucchini ? [2 * factor, 4 * factor, 0.5] : [2 * factor, 3 * factor, 0.75],
            'weight and its count scale; cut size stays fixed'
          );
          if (factor === 1) assert.equal(scaled, live, 'reset restores the exact live ingredient');
        }
      } else if (row.slug === 'sausage-and-white-bean-skillet' && row.caseId === 58) {
        // Keep the historical juice-leading parser input and numeric oracle below.
        // Its live formula now counts the lemon and explicitly uses only its juice.
        assert.equal(data.formula?.version, 1);
        const lemon = data.formula.components
          .find((c) => c.id === 'dish')
          .ingredients.find((i) => i.id === 'lemon');
        assert.equal(lemon.name, 'lemon');
        assert.deepEqual(lemon.quantity, { amount: '1/2', unit: 'count' });
        assert.equal(lemon.preparation, 'juiced');
        assert.deepEqual(lemon.uses, [{ step: 'finish', share: 1 }]);
        assert.ok(data.ingredients.includes(formatFormulaIngredient(lemon)));
        for (const factor of factors) {
          const scaled = formatFormulaIngredient(lemon, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [0.5 * factor],
            'lemon count scales without a juice-volume conversion'
          );
          assert.match(scaled, /juiced/);
        }
        assert.equal(formatFormulaIngredient(lemon, 1), formatFormulaIngredient(lemon));
      } else if (row.slug === 'red-zone-margarita' && row.caseId === 54) {
        // Preserve the historical lime input and every numeric oracle below.
        // The plain page measures in cups (same 10 fl oz lime, 5 fl oz Cointreau)
        // and the lime count scales with the juice.
        assert.ok(!data.ingredients.includes(component.input));
        const liveRows = [
          {
            input: '1 1/4 cups fresh lime juice (8 to 10 limes)',
            amounts: [1.25, 8, 10],
            scales: [true, true, true],
            qualifier: /limes\)$/,
          },
          {
            input: '1/2 cup plus 2 tbsp Cointreau',
            amounts: [0.5, 2],
            scales: [true, true],
            qualifier: / plus \d/,
          },
        ];
        for (const live of liveRows) {
          assert.ok(
            data.ingredients.includes(live.input),
            'current authored batch measure remains'
          );
          for (const factor of factors) {
            const output = scaleIngredient(live.input, factor);
            const actual = [...output.matchAll(number)].map((m) => numeric(m[0]));
            const expected = live.amounts.map(
              (amount, index) => amount * (live.scales[index] ? factor : 1)
            );
            assert.equal(actual.length, expected.length);
            expected.forEach((value, index) => {
              assert.ok(
                Math.abs(actual[index] - value) <= 0.005001,
                factor +
                  'x live quantity ' +
                  index +
                  ': expected ' +
                  value +
                  ', got ' +
                  actual[index] +
                  ': ' +
                  output
              );
            });
            assert.match(output, live.qualifier);
            if (factor === 1)
              assert.equal(output, live.input, 'reset restores exact live ingredient');
          }
        }
      } else if (row.slug === 'honey-glazed-spareribs' && row.caseId === 38) {
        // Preserve the original compound parser fixture and every numeric oracle below.
        // The live formula scales rib weight; no fixed rack count sits beside it.
        const pork = data.formula.components
          .flatMap((c) => c.ingredients)
          .find((i) => i.id === 'pork');
        assert.deepEqual(pork.quantity, { amount: 4, unit: 'lb' });
        assert.equal(pork.preparation, 'cut into 3-rib sections');
        assert.ok(data.ingredients.includes(formatFormulaIngredient(pork)));
        for (const factor of factors) {
          assert.deepEqual(
            [...formatFormulaIngredient(pork, factor).matchAll(number)].map((m) => numeric(m[0])),
            [4 * factor, 3],
            'weight scales; section size stays fixed'
          );
        }
      } else if (row.slug === 'dan-dan-noodles' && row.caseId === 27) {
        // Keep the historical bok-choy input and every numeric oracle below.
        // Its current wording changed during the complete source reformulation.
        const review = JSON.parse(fs.readFileSync('docs/reviews/dan-dan-noodles.json', 'utf8'));
        assert.ok(review.exactBefore.frontmatter.ingredients.includes(component.input));
        const ingredients = data.formula.components.flatMap((c) => c.ingredients);
        const bokChoy = ingredients.find((i) => i.id === 'bok-choy');
        assert.deepEqual(bokChoy.quantity, { amount: 4, unit: 'count' });
        assert.equal(bokChoy.optional, true);
        assert.deepEqual(bokChoy.uses, [{ step: 'greens', share: 1 }]);
        const oil = ingredients.find((i) => i.id === 'oil');
        assert.deepEqual(oil.quantity, { amount: 3, unit: 'tsp' });
        assert.deepEqual(oil.uses, [
          { step: 'brown', share: '1/3' },
          { step: 'yacai', share: '2/3' },
        ]);
        for (const factor of factors) {
          assert.equal(
            numeric(formatFormulaIngredient(bokChoy, factor).match(number)[0]),
            4 * factor
          );
          assert.equal(numeric(formatFormulaIngredient(oil, factor).match(number)[0]), 3 * factor);
        }
      } else if (row.slug === 'vegetable-minestrone' && [64, 65, 66].includes(row.caseId)) {
        // The user chose a complete new primary-source formula; retain old parser oracles.
        const ingredients = data.formula.components.flatMap((c) => c.ingredients);
        const ingredient = ingredients.find(
          (i) => i.id === { 64: 'rosemary', 65: 'small-pasta', 66: 'fresh-herbs' }[row.caseId]
        );
        assert.equal(data.formula.version, 1);
        assert.ok(!data.ingredients.includes(component.input));
        if (row.caseId === 66) {
          assert.ok(ingredient.allowance && !ingredient.quantity);
        } else {
          // The plain page converted the 100 g pasta to US weight, 3 1/2 oz.
          const amount = row.caseId === 64 ? 1 : '3 1/2';
          assert.deepEqual(ingredient.quantity, {
            amount,
            unit: row.caseId === 64 ? 'tbsp' : 'oz',
          });
          for (const factor of factors)
            assert.equal(
              numeric(formatFormulaIngredient(ingredient, factor).match(number)[0]),
              numeric(String(amount)) * factor
            );
        }
      } else if (row.slug === 'dashi-japanese-sea-stock' && row.caseId === 28) {
        // Keep the historical katsuobushi parser input and every numeric oracle below.
        // The reviewed live line triples the bonito to 30 g, six 5 g packs.
        const live =
          '30 g katsuobushi (dried bonito flakes), 6 packs (5 g each), about 3 cups total';
        assert.ok(data.ingredients.includes(live), 'current authored bonito line remains');
        assert.ok(!data.ingredients.includes(component.input));
        for (const factor of factors) {
          const scaled = scaleIngredient(live, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [30 * factor, 6 * factor, 5, 3 * factor],
            'weight, pack count and cup estimate scale while pack size stays fixed'
          );
          if (factor === 1) assert.equal(scaled, live, 'reset restores the exact live ingredient');
        }
      } else if (row.slug === 'falafel' && row.caseId === 32) {
        // Keep the historical salt parser input and every numeric oracle below.
        // The reviewed 9 g base salt is now written in US measure, 1 1/2 tsp,
        // with an unmeasured "to taste" in place of the 3 g tasting allowance.
        const live = '1 1/2 tsp fine salt, plus more to taste';
        assert.ok(data.ingredients.includes(live), 'current authored salt line remains');
        assert.ok(!data.ingredients.includes(component.input));
        for (const factor of factors) {
          const scaled = scaleIngredient(live, factor);
          assert.deepEqual(
            [...scaled.matchAll(number)].map((m) => numeric(m[0])),
            [1.5 * factor],
            'the teaspoon measure scales'
          );
          if (factor === 1) assert.equal(scaled, live, 'reset restores the exact live ingredient');
        }
      } else if (row.slug === 'chinese-garlic-sauce-base' && row.caseId === 15) {
        // Keep the historic target-volume parser input and its oracle below.
        // The plain page drops the 240 ml top-up line: thickness is now the cue,
        // with an unmeasured splash of hot water named only in the step.
        assert.ok(!data.ingredients.some((line) => /hot water|240 ml/i.test(line)));
        assert.ok(data.ingredients.includes('1/2 cup unsalted vegetable broth'));
        assert.match(fs.readFileSync(sourcePath, 'utf8'), /whisk in a splash of hot water/);
      } else if (row.slug === 'onigiri-japanese-rice-balls' && [47, 48, 49].includes(row.caseId)) {
        // Keep the historic filling parser inputs and their oracles below.
        // The plain page makes tuna mayo the one filling: umeboshi and salmon
        // became swaps with the same amounts, and sesame salt is now a garnish.
        const swaps = data.learning.substitutions;
        assert.ok(!data.ingredients.some((line) => line.startsWith('Filling')));
        if (row.caseId === 47) {
          const swap = swaps.find((s) => s.alternative === 'Umeboshi');
          assert.match(swap.effect, /one pitted umeboshi.*into each ball/);
          assert.match(data.servings, /^4 rice balls/);
        } else if (row.caseId === 48) {
          const swap = swaps.find((s) => s.alternative === 'Flaked cooked salmon');
          assert.match(swap.effect, /1\/4 cup flaked salmon mixed with 1\/2 tsp soy sauce/);
        } else {
          assert.ok(data.ingredients.includes('toasted sesame seeds (optional)'));
        }
      } else if (component.live) {
        // The November plain-page rewrite reworded or split this line (US units,
        // no original-batch notes). The historic parser input keeps its oracle
        // below; each current line must be live and pass its own oracle too.
        for (const live of component.live) {
          assert.ok(
            data.ingredients.includes(live.input),
            `current authored ingredient must be live: ${live.input}`
          );
          assertScales(live);
        }
      } else {
        assert.ok(
          data.ingredients.includes(component.input),
          'fixture must exercise the current authored ingredient'
        );
      }
      assertScales(component);
    }
  });
}

function assertScales({ input, quantities }) {
  const authored = [...input.matchAll(number)].map((match) => match[0]);
  assert.deepEqual(
    authored,
    quantities.map((quantity) => quantity.amount)
  );
  for (const factor of factors) {
    const output = scaleIngredient(input, factor);
    if (factor === 1) assert.equal(output, input, 'reset restores exact source');
    const actual = [...output.matchAll(number)].map((match) => numeric(match[0]));
    const expected = quantities.map(
      ({ amount, scales }) => numeric(amount) * (scales ? factor : 1)
    );
    assert.equal(actual.length, expected.length, `${factor}x: quantity count changed: ${output}`);
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

test('six ambiguous count-leading equivalents retain their original quantities', () => {
  for (const { slug, input, live } of load('scaling-ambiguous')) {
    const { data } = matter(
      fs.readFileSync(new URL(`../../src/content/recipes/${slug}.md`, import.meta.url), 'utf8')
    );
    // The November rewrite lowercased these lines and dropped most metric or
    // original-batch equivalents. The live line must keep the original count;
    // the historic input still exercises the parser below.
    assert.ok(data.ingredients.includes(live), `${slug}: current ingredient remains: ${live}`);
    const lead = (text) => numeric(text.match(number)[0]);
    assert.equal(lead(live), lead(input), `${slug}: original count remains`);
    for (const line of [input, live]) {
      const parentheses = line.match(/\([^)]*\)/g) || [];
      for (const factor of factors) {
        const output = scaleIngredient(line, factor);
        if (factor === 1) assert.equal(output, line, 'reset restores the exact ingredient');
        assert.ok(Math.abs(lead(output) - lead(line) * factor) <= 0.005001, `${slug}: ${output}`);
        // An equivalent after a count may be per item, so it stays as written.
        parentheses.forEach((part) => assert.ok(output.includes(part), `${slug}: ${output}`));
      }
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
    const preservedFormula = data.formula;
    if (row.slug === 'chocolate-chip-cookie-cake') {
      // Retain every measured ingredient/shopping/yield hash below. The plain page
      // dropped the unmeasured pan-greasing component; greasing is now named in
      // the prep step, so only the two measured components remain.
      assert.equal(
        data.formula.components.find((c) => c.id === 'pan'),
        undefined
      );
      assert.match(
        data.formula.steps.find((s) => s.id === 'prep').text,
        /grease the pan and the paper with butter or baking spray/
      );
      assert.deepEqual(
        data.formula.components.map((c) => c.id),
        ['dough', 'topping']
      );
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
