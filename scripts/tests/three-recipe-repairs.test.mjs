import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';

const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('shrimp sauce lists its aromatics and slurry and finishes pork and egg safely', () => {
  const { data, content } = read('shrimp-with-black-bean-sauce');
  assert.equal(data.formula?.version, 1);
  for (const [componentId, ingredientId, quantity, preparation, uses] of [
    ['base', 'oil', { amount: 2, unit: 'tbsp' }, undefined, [{ step: 'sear', share: 1 }]],
    ['base', 'garlic', { amount: 1, unit: 'count' }, 'minced', [{ step: 'sear', share: 1 }]],
    ['base', 'ginger', { amount: '1/4', unit: 'tsp' }, 'minced', [{ step: 'sear', share: 1 }]],
    ['slurry', 'water', { amount: 2, unit: 'tbsp' }, undefined, [{ step: 'bind', share: 1 }]],
    ['slurry', 'starch', { amount: '5/2', unit: 'tbsp' }, undefined, [{ step: 'bind', share: 1 }]],
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
    '2 tbsp cold water',
    '2 1/2 tbsp cornstarch',
  ])
    assert.ok(data.ingredients.includes(ingredient), ingredient);
  assert.match(content, /immediate further cooking/);
  assert.match(content, /blanched pork/);
  assert.match(content, /160°F \/ 71°C/);
  assert.match(content, /pearly, opaque/);
  assert.match(content, /you may not need all the slurry/);
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
  ]);
  assert.equal(
    oil.reduce((total, [, amount]) => total + amount, 0),
    5
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
  assert.match(content, /Kale stays for the serving bowls/);
  assert.match(content, /Portion all mixture/);
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
    [{ step: 'serve', share: 1 }]
  );
  assert.match(content, /Make and taste this ready-to-eat dressing before handling raw chicken/);
  assert.match(content, /165°F \/\s*74°C on a food thermometer/);
  assert.match(content, /until tender inside/);
  assert.equal(
    data.sourceUrl,
    'https://www.thepalatablelife.com/herby-chicken-meatball-bowl/#recipe'
  );
});

test('tofu separates coating from slurry and reuses the frying oil', () => {
  const { data, content } = read('general-tsos-tofu');
  for (const ingredient of [
    '3 tbsp Cornstarch (the crunch Guard)',
    '1 1/2 tbsp Cornstarch, for the slurry',
    '1 tbsp Cold Water, for the slurry',
    '1/2 tsp Toasted Sesame Oil',
    '1/2 tbsp Shaoxing Wine, optional',
  ])
    assert.ok(data.ingredients.includes(ingredient), ingredient);
  assert.ok(data.ingredients.some((line) => line.startsWith('1/3 cup Peanut Oil')));
  assert.match(content, /oil left from frying the tofu/);
  assert.match(content, /30-60 seconds after each slurry addition/);
  assert.match(content, /broccoli is tender-crisp/);
  assert.equal(data.sourceUrl, 'https://thewoksoflife.com/general-tsos-tofu/');
});
