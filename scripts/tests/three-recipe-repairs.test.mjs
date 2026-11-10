import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';

const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('shrimp sauce lists its aromatics and slurry and finishes pork and egg safely', () => {
  const { data, content } = read('shrimp-with-black-bean-sauce');
  assert.equal(data.formula?.version, 1);
  for (const [componentId, ingredientId, quantity, preparation, uses] of [
    ['base', 'oil', { amount: 2, unit: 'tbsp' }, undefined, [{ step: 'sear', share: 1 }]],
    ['base', 'garlic', { amount: 1, unit: 'count' }, 'minced', [{ step: 'sear', share: 1 }]],
    ['base', 'ginger', { amount: '1/4', unit: 'tsp' }, 'minced', [{ step: 'sear', share: 1 }]],
    ['slurry', 'water', { amount: 3, unit: 'tbsp' }, undefined, [{ step: 'bind', share: 1 }]],
    ['slurry', 'starch', { amount: 2, unit: 'tbsp' }, undefined, [{ step: 'bind', share: 1 }]],
  ]) {
    const ingredient = data.formula.components
      .find((component) => component.id === componentId)
      .ingredients.find((item) => item.id === ingredientId);
    assert.deepEqual(ingredient.quantity, quantity, ingredientId);
    assert.equal(ingredient.preparation, preparation, ingredientId);
    assert.deepEqual(ingredient.uses, uses, ingredientId);
  }
  for (const ingredient of [
    '2 tbsp vegetable oil',
    '1 garlic clove, minced',
    '1/4 tsp fresh ginger, minced',
    '3 tbsp cold water',
    '2 tbsp cornstarch',
  ])
    assert.ok(data.ingredients.includes(ingredient), ingredient);
  const steps = data.formula.steps.map((s) => s.id);
  // The blanched pork goes straight into the wok and finishes cooking in the sauce.
  assert.ok(steps.indexOf('blanch') < steps.indexOf('sear'));
  assert.match(content, /then the blanched pork/);
  // The 160°F line was safety boilerplate the Nov 9 rewrite dropped. The egg still sets in a
  // simmering sauce and the shrimp finish on a visual doneness cue.
  assert.match(content, /Drizzle the beaten large egg across the surface and let it set/);
  assert.match(content, /Simmer until the shrimp are opaque all the way through/);
  // The slurry is mixed on its own and added only as needed.
  assert.match(content, /Stir cornstarch and cold water together until smooth/);
  assert.match(
    content,
    /a little at a time until the sauce coats a spoon\. You may not need all of it/
  );
  assert.equal(data.sourceUrl, 'https://thewoksoflife.com/shrimp-black-bean-sauce/');
});

test('meatball bowl accounts for oil, keeps kale out of meatballs, and uses all filling', () => {
  const { data, content } = read('herby-chicken-meatball-bowl');
  for (const ingredient of data.formula.components
    .flatMap((c) => c.ingredients)
    .filter((i) => i.name === 'olive oil'))
    assert.equal(ingredient.quantity.unit, 'tbsp');
  const oil = data.formula.components.flatMap((c) =>
    c.ingredients
      .filter((i) => i.name === 'olive oil')
      .map((i) => [c.id, i.quantity.amount, i.uses])
  );
  assert.deepEqual(oil, [
    ['chickpeas', 1, [{ step: 'chickpeas', share: 1 }]],
    ['potato', 1, [{ step: 'potato', share: 1 }]],
    ['meat', 2, [{ step: 'cook', share: 1 }]],
    ['dressing', 1, [{ step: 'dressing', share: 1 }]],
    ['bowl', 1, [{ step: 'kale', share: 1 }]],
  ]);
  assert.equal(
    oil.reduce((total, [, amount]) => total + amount, 0),
    6
  );
  for (const name of [
    'Salt',
    'Garlic Powder',
    'Italian Seasoning',
    'Ground Cinnamon',
    'Ground Cumin',
  ]) {
    assert.ok(
      data.ingredients.some((line) => line.toLowerCase().includes(name.toLowerCase())),
      name
    );
  }
  const steps = data.formula.steps;
  const stepText = (id) => steps.find((s) => s.id === id).text;
  // Kale goes only into the serving bowls, massaged with oil, lemon and salt first (Nov 10 fix R069).
  assert.doesNotMatch(stepText('mix'), /kale/i);
  assert.match(content, /rub fresh kale, olive oil, fresh lemon juice, and salt together/);
  assert.match(content, /Divide the kale among four bowls/);
  // The whole mixture is shaped, with no fixed count.
  assert.match(content, /Shape it into small logs about 2 inches long/);
  assert.doesNotMatch(content, /Form into 12/);
  assert.equal(
    data.formula.components
      .find((c) => c.id === 'meat')
      .ingredients.some((i) => /kale/i.test(i.name)),
    false
  );
  assert.deepEqual(
    data.formula.components.find((c) => c.id === 'bowl').ingredients.find((i) => i.id === 'kale')
      .uses,
    [{ step: 'kale', share: 1 }]
  );
  // The dressing is still made before the raw chicken is handled (the explicit warning was
  // safety boilerplate the rewrite dropped, the order carries it).
  const ids = steps.map((s) => s.id);
  assert.ok(ids.indexOf('dressing') < ids.indexOf('mix'));
  assert.match(content, /golden on all sides and 165°F in the center/);
  assert.match(content, /until tender inside/);
  assert.equal(data.sourceUrl, 'https://www.thepalatablelife.com/herby-chicken-meatball-bowl/');
});

test('tofu separates coating from slurry and reuses the frying oil', () => {
  const { data, content } = read('general-tsos-tofu');
  for (const ingredient of [
    '3 tbsp cornstarch',
    '1 tbsp cornstarch',
    '1 tbsp cold water',
    '1/2 tsp toasted sesame oil',
    '1 1/2 tsp Shaoxing wine, optional',
    '1/4 tsp salt',
  ])
    assert.ok(data.ingredients.includes(ingredient), ingredient);
  assert.ok(data.ingredients.some((line) => line.startsWith('1/3 cup peanut oil')));
  assert.equal(data.formula.version, 1);
  const slurry = data.formula.components.find((c) => c.id === 'slurry');
  assert.deepEqual(
    slurry.ingredients.map((i) => ({
      id: i.id,
      name: i.name,
      quantity: i.quantity,
      uses: i.uses,
    })),
    [
      {
        id: 'starch',
        name: 'cornstarch',
        quantity: { amount: 1, unit: 'tbsp' },
        uses: [{ step: 'thicken', share: 1 }],
      },
      {
        id: 'water',
        name: 'cold water',
        quantity: { amount: 1, unit: 'tbsp' },
        uses: [{ step: 'thicken', share: 1 }],
      },
    ]
  );
  const coatingStarch = data.formula.components
    .find((c) => c.id === 'tofu')
    .ingredients.find((i) => i.id === 'coating-starch');
  assert.equal(coatingStarch.name, 'cornstarch');
  assert.deepEqual(coatingStarch.quantity, { amount: 3, unit: 'tbsp' });
  assert.deepEqual(coatingStarch.uses, [{ step: 'coat', share: 1 }]);
  // The aromatics cook in a spoonful of the frying oil, not a new dose of oil.
  assert.match(content, /Pour off all but a spoonful of the oil/);
  assert.equal(
    data.formula.components
      .find((c) => c.id === 'sauce')
      .ingredients.some((i) => /oil/.test(i.name) && i.id !== 'sesame-oil'),
    false
  );
  assert.match(content, /Simmer until the sauce is glossy and coats a spoon, 30 to 60 seconds/);
  assert.match(content, /until the broccoli is bright green and tender-crisp/);
  assert.equal(data.sourceUrl, 'https://thewoksoflife.com/general-tsos-tofu/');
});
