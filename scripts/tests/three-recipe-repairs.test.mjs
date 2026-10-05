import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';

const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('shrimp sauce lists its aromatics and slurry and finishes pork and egg safely', () => {
  const { data, content } = read('shrimp-with-black-bean-sauce');
  for (const ingredient of [
    '2 tbsp Vegetable Oil',
    '1 clove Garlic, minced',
    '1/4 tsp Fresh Ginger, minced',
    '2 tbsp Cold Water, for the slurry',
    '2 1/2 tbsp Cornstarch, for the slurry',
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
  assert.ok(data.ingredients.includes('4 tbsp Olive Oil, divided'));
  for (const name of [
    'Salt',
    'Garlic Powder',
    'Italian Seasoning',
    'Ground Cinnamon',
    'Ground Cumin',
  ]) {
    assert.ok(
      data.ingredients.some((line) => line.includes(name)),
      name
    );
  }
  assert.match(content, /Keep the kale for the serving bowls/);
  assert.match(content, /Portion all the mixture/);
  assert.doesNotMatch(content, /Form into 12/);
  assert.match(content, /165°F \/ 74°C on a food thermometer/);
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
