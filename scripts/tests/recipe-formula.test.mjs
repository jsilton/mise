import test from 'node:test';
import assert from 'node:assert/strict';
import { z } from 'astro/zod';
import {
  createFormulaSchema,
  formulaIngredients,
  formulaDirections,
  formulaShoppingList,
  formulaStepAmounts,
  formulaYield,
  formatFormulaIngredient,
  cookingName,
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
    // Cake and frosting each own a vanilla line, so each step says which amount it means.
    '1. **Mix:** Mix the butter and 1 tsp of the vanilla.\n2. **Frost:** Stir 2 tsp of the vanilla into the prepared frosting.'
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
  // A divided ingredient prints its real amount, and its last use takes the rest.
  const divided = formulaDirections(schema.parse(f));
  assert(divided.includes('Mix the water, 2 tbsp of the butter, and 1 tsp of the vanilla.'));
  assert(divided.includes('Stir the rest of the butter and 2 tsp of the vanilla into'));
  assert(formulaIngredients(f).includes('1/2 cup (1 stick) unsalted butter, divided'));
  assert(formulaShoppingList(f).includes('1/2 cup (1 stick) unsalted butter'));
  assert(!formulaShoppingList(f).some((s) => s.includes('water')));
  f.components[0].ingredients[0].uses = [
    { step: 'mix', share: '1/9' },
    { step: 'frost', share: '8/9' },
  ];
  // 1/9 of 1/2 cup is 2 2/3 tsp. No spoon measures a third of a teaspoon, so the step
  // names the share.
  assert(formulaDirections(schema.parse(f)).includes('1/9 of the butter'));
  f.components[0].ingredients[0].quantity = q('1/4', 'tsp');
  f.components[0].ingredients[0].equivalents = undefined;
  const exactDirections = formulaDirections(schema.parse(f));
  // A share with no kitchen measure stays a share, and nothing is rounded silently.
  assert(exactDirections.includes('1/9 of the butter'));
  assert(exactDirections.includes('the rest of the butter'));
  assert(!exactDirections.includes('0.11') && !exactDirections.includes('0.89'));
});

test('compiler detects stale generated ingredients and directions before publishing', async () => {
  const { mkdtempSync, mkdirSync, writeFileSync, rmSync } = await import('node:fs');
  const { tmpdir } = await import('node:os');
  const { join } = await import('node:path');
  const { spawnSync } = await import('node:child_process');
  const { default: matter } = await import('../../src/lib/frontmatter.mjs');
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

test('steps use short cooking names, one article and amounts that cannot attach to a neighbor', () => {
  for (const [name, expected] of [
    ['large eggs', 'eggs'],
    ['garlic cloves', 'garlic'],
    ['extra-virgin olive oil', 'olive oil'],
    ['kosher salt', 'salt'],
    ['fresh thyme sprigs', 'thyme'],
    ['slices of bacon', 'bacon'],
    ['dashes of Angostura bitters', 'Angostura bitters'],
    ['large head of romaine', 'romaine'],
    ['bittersweet chocolate (70% cacao)', 'bittersweet chocolate'],
    ['boneless, skinless chicken thighs', 'chicken thighs'],
    ['whole milk', 'whole milk'],
    ['ground pork', 'ground pork'],
    ['frozen or fresh peas', 'frozen or fresh peas'],
    [
      '[Pickled Red Onions](/mise/recipes/pickled-red-onions)',
      '[Pickled Red Onions](/mise/recipes/pickled-red-onions)',
    ],
  ])
    assert.equal(cookingName(name), expected);
  const f = example();
  f.components[0].ingredients = [
    {
      id: 'oil',
      key: 'oil',
      name: 'vegetable oil',
      quantity: q(4, 'tbsp'),
      uses: [
        { step: 'mix', share: '1/2' },
        { step: 'frost', share: '1/2' },
      ],
    },
    {
      id: 'eggs',
      key: 'eggs',
      name: 'large egg',
      plural: 'large eggs',
      quantity: q(2, 'count'),
      uses: [{ step: 'mix', share: 1 }],
    },
    {
      id: 'sesame',
      key: 'sesame-oil',
      name: 'toasted sesame oil',
      quantity: q(1, 'tsp'),
      optional: true,
      uses: [{ step: 'frost', share: 1 }],
    },
    {
      id: 'lettuce',
      key: 'lettuce',
      name: 'large head of romaine',
      plural: 'large heads of romaine',
      stepName: 'romaine leaves',
      quantity: q(1, 'count'),
      uses: [{ step: 'frost', share: 1 }],
    },
  ];
  f.components.pop();
  f.steps[0].text = 'Add {{ingredients}} to the empty side.';
  f.steps[1].text = 'Toss {{ingredients}}. Use the {{name:cake.oil}} sparingly.';
  const parsed = schema.parse(f);
  // "Add 1/2 of the vegetable oil and large eggs" read as half the eggs. The amount now sits
  // last, and "the oil" stays "the vegetable oil" because the recipe also has sesame oil.
  assert.equal(
    formulaDirections(parsed),
    '1. **Mix:** Add the eggs and 2 tbsp of the vegetable oil to the empty side.\n' +
      '2. **Frost:** Toss the sesame oil (if using), romaine leaves, and the rest of the vegetable oil. Use the vegetable oil sparingly.'
  );
  assert.deepEqual(formulaStepAmounts(parsed), [['2 tbsp of the vegetable oil'], []]);
  assert.deepEqual(formulaStepAmounts(parsed, 0.25), [['1 1/2 tsp of the vegetable oil'], []]);
  assert.deepEqual(formulaStepAmounts(parsed, 3), [['6 tbsp of the vegetable oil'], []]);
});
test('words the author wrote before the list decide its article and keep amounts out', () => {
  const f = example();
  f.components[0].ingredients[0].uses = [
    { step: 'mix', share: '1/4' },
    { step: 'frost', share: '3/4' },
  ];
  f.components[1].ingredients = [];
  f.components.pop();
  const directions = (mix, frost) => {
    f.steps[0].text = mix;
    f.steps[1].text = frost;
    return formulaDirections(schema.parse(f));
  };
  const butterOnly = (text) => {
    f.components[0].ingredients[1].uses = [{ step: 'mix', share: 1 }];
    return directions('Mix {{ingredients}}.', text).split('\n')[1];
  };
  assert.equal(
    butterOnly('Dot with the rest of the {{ingredients}}.'),
    '2. **Frost:** Dot with the rest of the butter.'
  );
  assert.equal(
    butterOnly('Add a splash of {{ingredients}}.'),
    '2. **Frost:** Add a splash of butter.'
  );
  assert.equal(
    butterOnly('Brush on the softened {{ingredients}}.'),
    '2. **Frost:** Brush on the softened butter.'
  );
  assert.equal(
    butterOnly('Melt the {{ingredients}}.'),
    '2. **Frost:** Melt the rest of the butter.'
  );
  assert.equal(
    butterOnly('Stir well. {{ingredients}} goes in last.'),
    '2. **Frost:** Stir well. The rest of the butter goes in last.'
  );
  assert.doesNotMatch(
    directions('Mix {{ingredients}}.', 'Add {{ingredients}}.'),
    /the the|\d\/\d of the/
  );
});
test('scaled formula amounts are kitchen measures, never decimals', () => {
  const f = example();
  const butter = f.components[0].ingredients[0];
  butter.quantity = q('1/4', 'cup');
  butter.equivalents = undefined;
  const line = (factor) => formulaIngredients(schema.parse(f), factor)[1];
  assert.equal(line(1), '1/4 cup unsalted butter');
  assert.equal(line(0.25), '1 tbsp unsalted butter');
  assert.equal(line(0.5), '2 tbsp unsalted butter');
  assert.equal(line(1.5), '6 tbsp unsalted butter');
  assert.equal(line(3), '3/4 cup unsalted butter');
  butter.quantity = q('1/3', 'cup');
  assert.equal(line(0.25), '1 tbsp plus 1 tsp unsalted butter');
  butter.quantity = q('1/4', 'tsp');
  assert.equal(line(0.25), 'a pinch of unsalted butter');
  assert.equal(line(0.5), '1/8 tsp unsalted butter');
  butter.quantity = q(113, 'g');
  assert.equal(line(0.25), '28 g unsalted butter');
  butter.quantity = q(1, 'lb');
  assert.equal(line(0.25), '1/4 lb unsalted butter');
  butter.quantity = { ...q(1, 'tbsp'), max: 2 };
  assert.equal(line(0.25), '3/4–1 1/2 tsp unsalted butter');
  f.components[0].ingredients[0] = {
    id: 'eggs',
    key: 'eggs',
    name: 'large egg',
    plural: 'large eggs',
    quantity: q(3, 'count'),
    uses: [{ step: 'mix', share: 1 }],
  };
  assert.equal(line(1), '3 large eggs');
  assert.equal(line(0.5), '1 1/2 large eggs (beat the last egg and use half)');
  assert.equal(line(0.25), '1 large egg (rounded up)');
  assert.equal(line(2), '6 large eggs');
  for (const factor of [0.25, 0.5, 1.5, 2, 3])
    for (const text of formulaIngredients(schema.parse(example()), factor))
      assert.doesNotMatch(text, /\d\.\d/);
});

test('stepText: preserved keeps a family recipe in its first compiled wording', () => {
  const plain = example();
  const kept = { ...example(), stepText: 'preserved' };
  const schema = createFormulaSchema(z);
  assert.equal(schema.safeParse(kept).success, true);
  assert.equal(schema.safeParse({ ...example(), stepText: 'loose' }).success, false);
  const lines = formulaIngredients(kept).join('\n');
  const steps = formulaDirections(kept);
  assert.doesNotMatch(lines, /, divided/);
  assert.doesNotMatch(steps, /\d+ (?:tbsp|tsp|cups?|oz|g) of the /);
  assert.notEqual(steps, formulaDirections(plain));
  const amounts = formulaStepAmounts(kept, 2);
  assert.equal(Object.values(amounts).flat().length, 0);
});

// A formula with one counted ingredient, given the uses and step texts under test.
const counted = (ingredients, steps) => ({
  version: 1,
  yield: q(4, 'portion'),
  components: [{ id: 'main', name: 'Main', ingredients }],
  steps: steps.map(([id, text]) => ({ id, title: id, text })),
});
const count = (id, name, plural, quantity, uses, extra = {}) => ({
  id,
  key: id,
  name,
  plural,
  quantity,
  uses: uses.map(([step, share]) => ({ step, share })),
  ...extra,
});
test('a counted ingredient split across steps keeps the thing it counts at every scale', () => {
  const schema = createFormulaSchema(z);
  const garlic = schema.parse(
    counted(
      [
        count('garlic', 'garlic clove', 'garlic cloves', q(6, 'count'), [
          ['marinate', '2/3'],
          ['base', '1/3'],
        ]),
      ],
      [
        ['marinate', 'Toss {{ingredients}} in a bowl.'],
        ['base', 'Add {{ingredients}} to the pot.'],
      ]
    )
  );
  const steps = formulaDirections(garlic);
  assert.match(steps, /Toss 4 garlic cloves in a bowl\./);
  assert.match(steps, /Add the rest of the garlic to the pot\./);
  assert.doesNotMatch(steps, /\d of the garlic/);
  assert.deepEqual(formulaStepAmounts(garlic, 1)[0], ['4 garlic cloves']);
  assert.deepEqual(formulaStepAmounts(garlic, 0.25)[0], ['1 garlic clove']);
  assert.deepEqual(formulaStepAmounts(garlic, 0.5)[0], ['2 garlic cloves']);
  assert.deepEqual(formulaStepAmounts(garlic, 3)[0], ['12 garlic cloves']);
});
test('two counted lines with one name print the number and the noun, never a bare number', () => {
  const schema = createFormulaSchema(z);
  const f = schema.parse(
    counted(
      [
        count('pico', 'jalapeño', 'jalapeños', q(1, 'count'), [['pico', 1]]),
        count('filling', 'jalapeño', 'jalapeños', q(1, 'count'), [['fill', 1]]),
        count('shake', 'dash of orange bitters', 'dashes of orange bitters', q(4, 'count'), [
          ['pico', 1],
        ]),
        count('top', 'dash of orange bitters', 'dashes of orange bitters', q(3, 'count'), [
          ['fill', 1],
        ]),
        count('herb', 'fresh thyme sprig', 'fresh thyme sprigs', q('4', 'count'), [['pico', 1]], {
          quantity: { amount: 4, max: 5, unit: 'count' },
        }),
        count('herb2', 'fresh thyme sprig', 'fresh thyme sprigs', q(8, 'count'), [['fill', 1]]),
        count('half', 'lemon', 'lemons', q('1/2', 'count'), [['pico', 1]]),
        count('half2', 'lemon', 'lemons', q('1/2', 'count'), [['fill', 1]]),
      ],
      [
        ['pico', 'Stir {{ingredients}} together.'],
        ['fill', 'Add {{ingredients}}.'],
      ]
    )
  );
  const steps = formulaDirections(f);
  assert.match(
    steps,
    /Stir 1 jalapeño, 4 dashes of orange bitters, 4–5 fresh thyme sprigs, and 1\/2 lemon together\./
  );
  assert.match(
    steps,
    /Add 1 jalapeño, 3 dashes of orange bitters, 8 fresh thyme sprigs, and 1\/2 lemon\./
  );
  assert.doesNotMatch(steps, /\d of the /);
  // A quarter batch reads as a quarter of one pepper, not a quarter of all of it.
  assert.deepEqual(formulaStepAmounts(f, 0.25)[0], [
    '1/4 jalapeño',
    '1 dash of orange bitters',
    '1–1 1/4 fresh thyme sprigs',
    '1/8 lemon',
  ]);
  assert.deepEqual(formulaStepAmounts(f, 2)[1], [
    '2 jalapeños',
    '6 dashes of orange bitters',
    '16 fresh thyme sprigs',
    '1 lemon',
  ]);
});
test('"enough" and its kin before the list keep the bare name', () => {
  const schema = createFormulaSchema(z);
  const water = (text) =>
    formulaDirections(
      schema.parse(
        counted(
          [
            {
              id: 'water',
              key: 'water',
              name: 'water',
              allowance: 'for boiling',
              uses: [{ step: 'boil', share: 1 }],
            },
          ],
          [['boil', text]]
        )
      )
    );
  assert.match(
    water('Fill a pan with enough {{ingredients}} to cover the eggs.'),
    /with enough water to cover/
  );
  assert.match(water('Add extra {{ingredients}} if the pan dries.'), /Add extra water if/);
  assert.match(water('Skim off any {{ingredients}} left on top.'), /Skim off any water left/);
  assert.doesNotMatch(water('Fill a pan with enough {{ingredients}}.'), /enough the/);
});
test('a use marked lead prints ahead of the whole ingredients', () => {
  const schema = createFormulaSchema(z);
  const f = counted(
    [
      {
        id: 'oil',
        key: 'oil',
        name: 'vegetable oil',
        quantity: q(4, 'tbsp'),
        uses: [
          { step: 'sear', share: '1/2' },
          { step: 'veg', share: '1/4', lead: true },
          { step: 'egg', share: '1/4', lead: true },
        ],
      },
      count('garlic', 'garlic clove', 'garlic cloves', q(3, 'count'), [['veg', 1]]),
      count('egg', 'large egg', 'large eggs', q(2, 'count'), [['egg', 1]]),
    ],
    [
      ['sear', 'Heat {{ingredients}} in a wok.'],
      ['veg', 'Add {{ingredients}} to the wok.'],
      ['egg', 'Add {{ingredients}} to the empty side.'],
    ]
  );
  const steps = formulaDirections(schema.parse(f));
  assert.match(steps, /Add 1 tbsp of the oil and the garlic to the wok\./);
  assert.match(steps, /Add the rest of the oil and the eggs to the empty side\./);
  assert.deepEqual(formulaStepAmounts(schema.parse(f), 2)[1], ['2 tbsp of the oil']);
});
test('scaled spoons and ounces skip 3/8, 5/8 and 7/8, and a pound of a solid reads in pounds', () => {
  const line = (name, quantity, factor) =>
    formatFormulaIngredient(
      { name, plural: name, quantity, uses: [{ step: 'a', share: 1 }] },
      factor
    );
  assert.equal(line('salt', q('3/4', 'tsp'), 0.5), 'scant 1/2 tsp salt');
  assert.equal(line('salt', q('1 1/4', 'tsp'), 0.5), 'heaping 1/2 tsp salt');
  assert.equal(line('salt', q('1 3/4', 'tsp'), 0.5), 'scant 1 tsp salt');
  assert.equal(line('soy sauce', q('7 1/2', 'tsp'), 0.25), '2 tsp soy sauce');
  assert.equal(line('salt', q('2/3', 'tsp'), 1), '2/3 tsp salt');
  assert.equal(line('lime juice', q('3/4', 'oz'), 0.5), 'scant 1/2 oz lime juice');
  assert.equal(line('gin', q(2, 'oz'), 8), '16 oz gin');
  assert.equal(line('low-moisture mozzarella', q(8, 'oz'), 2), '1 lb low-moisture mozzarella');
  assert.equal(line('low-moisture mozzarella', q(8, 'oz'), 3), '1 1/2 lb low-moisture mozzarella');
  assert.equal(line('low-moisture mozzarella', q(16, 'oz'), 1), '16 oz low-moisture mozzarella');
  assert.equal(line('ground pork', q(9, 'oz'), 2), '18 oz ground pork');
});
