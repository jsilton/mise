import test from 'node:test';
import assert from 'node:assert/strict';
import { z } from 'astro/zod';
import {
  createFormulaSchema,
  formulaIngredients,
  formulaDirections,
  formulaShoppingList,
  formulaYield,
} from '../../src/lib/recipe-formula.mjs';
const q = (amount, unit) => ({ amount, unit });
const example = () => ({
  version: 1,
  yield: q(1, 'loaf'),
  components: [
    {
      id: 'cake',
      name: 'Cake',
      ingredients: [
        {
          id: 'butter',
          key: 'butter',
          name: 'unsalted butter',
          quantity: q('1/2', 'cup'),
          equivalents: [q(1, 'stick')],
          uses: [{ step: 'mix', share: 1 }],
        },
        {
          id: 'vanilla',
          key: 'vanilla',
          name: 'vanilla extract',
          quantity: q(1, 'tsp'),
          uses: [{ step: 'mix', share: 1 }],
        },
      ],
    },
    {
      id: 'frosting',
      name: 'Frosting',
      ingredients: [
        {
          id: 'vanilla',
          key: 'vanilla',
          name: 'vanilla extract',
          quantity: q(2, 'tsp'),
          uses: [{ step: 'frost', share: 1 }],
        },
      ],
    },
  ],
  steps: [
    { id: 'mix', title: 'Mix', text: 'Mix {{ingredients}}.' },
    { id: 'frost', title: 'Frost', text: 'Stir {{ingredients}} into the prepared frosting.' },
  ],
});
const schema = createFormulaSchema(z);
test('components own ingredients; shopping combines compatible amounts without changing originals', () => {
  const f = schema.parse(example());
  assert.deepEqual(formulaShoppingList(f), [
    '1/2 cup (1 stick) unsalted butter',
    '3 tsp vanilla extract',
  ]);
  assert(formulaIngredients(f, 2).includes('1 cup (2 sticks) unsalted butter'));
  assert.equal(formulaYield(f, 3), '3 loaves');
  assert.equal(formulaYield(f), '1 loaf');
  assert.equal(
    formulaDirections(f),
    '1. **Mix:** Mix unsalted butter and vanilla extract.\n2. **Frost:** Stir vanilla extract into the prepared frosting.'
  );
  assert.equal(f.components[0].ingredients[1].quantity.amount, 1);
});
test('package count scales while the size of each package stays fixed', () => {
  const f = example();
  f.components[0].ingredients[0] = {
    id: 'tomatoes',
    key: 'tomatoes',
    name: 'tomatoes',
    quantity: q(2, 'can'),
    packageSize: q(14, 'oz'),
    uses: [{ step: 'mix', share: 1 }],
  };
  assert(formulaIngredients(schema.parse(f), 2).includes('4 cans (14 oz) tomatoes'));
});
test('fractions, ranges, equivalents and counted nouns are explicit', () => {
  const f = example();
  f.components[0].ingredients[0] = {
    id: 'eggs',
    key: 'eggs',
    name: 'large egg',
    plural: 'large eggs',
    quantity: { ...q(1, 'count'), max: 2 },
    uses: [{ step: 'mix', share: 1 }],
  };
  assert(formulaIngredients(schema.parse(f), 2).includes('2–4 large eggs'));
  assert(formulaIngredients(f, 0.5).includes('1/2–1 large egg'));
});
test('missing references, duplicate ids, unassigned ingredients and allocation errors fail authoring', () => {
  for (const mutate of [
    (f) => (f.components[0].ingredients[0].uses = []),
    (f) => (f.components[0].ingredients[0].uses[0].step = 'missing'),
    (f) => (f.components[0].ingredients[0].uses[0].share = '1/2'),
    (f) => f.components[0].ingredients.push(structuredClone(f.components[0].ingredients[0])),
    (f) => (f.steps[0].text = 'Mix well.'),
    (f) => (f.steps[0].text = 'Mix {{ingredients}} and {{name:cake.missing}}.'),
    (f) => (f.steps[0].text = 'Mix {{ingredients}} and {{ingredients}}.'),
    (f) => (f.components[0].ingredients[0].quantity.amount = '1/0'),
    (f) => (f.components[0].ingredients[0].quantity.unit = 'cups'),
  ]) {
    const f = example();
    mutate(f);
    assert.equal(schema.safeParse(f).success, false);
  }
});
test('split allocations generate portions; allowances and cooking water have explicit destinations', () => {
  const f = example();
  f.components[0].ingredients[0].uses = [
    { step: 'mix', share: '1/4' },
    { step: 'frost', share: '3/4' },
  ];
  f.components[0].ingredients.push({
    id: 'water',
    key: 'water',
    name: 'water',
    allowance: 'enough to cover',
    role: 'cooking-water',
    uses: [{ step: 'mix', share: 1 }],
  });
  assert(formulaDirections(schema.parse(f)).includes('1/4 of the unsalted butter'));
  assert(!formulaShoppingList(f).some((s) => s.includes('water')));
});

test('compiler detects stale generated ingredients and directions before publishing', async () => {
  const { mkdtempSync, mkdirSync, writeFileSync, rmSync } = await import('node:fs');
  const { tmpdir } = await import('node:os');
  const { join } = await import('node:path');
  const { spawnSync } = await import('node:child_process');
  const { default: matter } = await import('gray-matter');
  const dir = mkdtempSync(join(tmpdir(), 'mise-formula-'));
  try {
    mkdirSync(join(dir, 'src/content/recipes'), { recursive: true });
    const formula = example();
    const data = {
      title: 'Compiler fixture',
      formula,
      ingredients: formulaIngredients(formula),
      servings: formulaYield(formula),
    };
    const file = join(dir, 'src/content/recipes/example.md');
    const compiler = new URL('../compile-recipe-formulas.mjs', import.meta.url).pathname;
    const run = () =>
      spawnSync(process.execPath, [compiler, '--check'], { cwd: dir, encoding: 'utf8' });
    writeFileSync(
      file,
      matter.stringify('## Directions\n\n' + formulaDirections(formula) + '\n', data)
    );
    assert.equal(run().status, 0);
    writeFileSync(file, matter.stringify('## Directions\n\n1. **Mix:** Stale method.\n', data));
    assert.equal(run().status, 1);
    data.ingredients = ['Incorrect ingredient'];
    writeFileSync(
      file,
      matter.stringify('## Directions\n\n' + formulaDirections(formula) + '\n', data)
    );
    assert.equal(run().status, 1);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
