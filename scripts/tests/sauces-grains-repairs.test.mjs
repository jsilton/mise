import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('chili oil preserves the fresh-aromatic storage limit and uses a controlled hot pour', () => {
  const { content } = read('homemade-chili-oil');
  assert.match(content, /dry stainless-steel bowl/);
  assert.match(content, /small increments/);
  assert.match(content, /Use within 4 days/);
  assert.match(content, /does not make this fresh-garlic-and-ginger oil shelf-stable/);
});
test('dipping sauce counts the rest and keeps unused sauce separate', () => {
  const { data, content } = read('soy-ginger-dipping-sauce');
  assert.equal(data.totalTime, '15 min');
  assert.match(content, /unused batch separate/);
  assert.doesNotMatch(content, /up to 1 week/);
});
test('enchilada sauce specifies the chili blend and reserves finishing pepper', () => {
  const { data, content } = read('homemade-enchilada-sauce');
  assert.ok(data.ingredients.some((x) => /American-style chili powder/.test(x)));
  assert.match(content, /reserve black pepper for the finish/);
  assert.match(content, /optional cinnamon/);
});
test('Alfredo is usable without cooking pasta and tomato sauce uses its alternatives', () => {
  const alfredo = read('real-alfredo-sauce');
  assert.ok(alfredo.data.ingredients.some((x) => x.includes('or warm water')));
  assert.match(alfredo.content, /Take the pan off the heat/);
  assert.match(alfredo.content, /You may not need all/);
  const tomato = read('san-marzano-tomato-sauce');
  assert.ok(!tomato.data.cookingMethods.includes('no-cook'));
  assert.match(tomato.content, /measured dried oregano/);
  assert.match(tomato.content, /leave sliced garlic and dried oregano/);
});
test('orzo requires fully cooked sausage and schedules optional peas', () => {
  const { data, content } = read('broccolini-chicken-sausage-and-orzo-skillet');
  assert.ok(data.ingredients.some((x) => x.startsWith('8 oz fully cooked')));
  assert.match(content, /Raw chicken sausage is not a direct substitute/);
  assert.match(content, /frozen peas instead, skip this step/);
  assert.match(content, /pasta is firm, add a little hot water/);
});
test('avocado sauce reserves optional water without mandatory dilution', () => {
  const { data, content } = read('creamy-avocado-pasta');
  assert.ok(
    data.ingredients.includes(
      '1 cup pasta cooking water, reserved before draining; use only as needed'
    )
  );
  assert.match(content, /Reserve the listed pasta-water amount before draining/);
  assert.match(content, /a little of the shared reserved water/);
  assert.match(content, /Add more of the same reserve a little at a time/);
  assert.match(content, /You may not need it all/);
  assert.doesNotMatch(content, /olive oil and 1\/2 cup/);
});
test('risotto uses center doneness and flexible hydration', () => {
  const { content } = read('lemon-basil-shrimp-risotto');
  assert.match(content, /opaque through the center/);
  assert.match(content, /until the thickest flesh is firm, pearly and opaque through the center/);
  assert.match(content, /center is tender with a slight bite/);
  assert.match(content, /continue with a little hot water/);
});
test('Thai noodles restore oil and keep raw optional proteins out of the quick toss', () => {
  const { data, content } = read('one-pot-spicy-thai-noodles');
  assert.ok(data.ingredients.includes('2 tbsp olive oil, divided'));
  assert.ok(data.ingredients.some((x) => x.startsWith('Fully cooked chicken or shrimp')));
  assert.match(content, /refrigerated leftover protein, heat it to 165°F/);
  assert.match(content, /raw chicken, cook it separately to 165°F/);
});
test('covered Spanish rice does not claim a direct Bomba substitution', () => {
  const { data, content } = read('spanish-rice-chorizo');
  const rice = data.formula.components
    .find((c) => c.id === 'main')
    .ingredients.find((i) => i.id === 'rice');
  assert.deepEqual(rice.quantity, { amount: 1.5, unit: 'cup' });
  assert.deepEqual(rice.uses, [{ step: 'rice', share: 1 }]);
  assert.ok(data.ingredients.includes('1 1/2 cups Arborio rice'));
  const coveredDirections = content.split('## Source-Rich Uncovered Variation')[0];
  assert.match(coveredDirections, /Do not replace Arborio directly with Bomba or Calasparra/);
  assert.match(coveredDirections, /or use the source variant’s uncovered method here/);
  assert.match(content, /tight-fitting lid/);
  assert.match(content, /Allow about 80 minutes/);
});
test('leftover sauces follow rolling-boil guidance without changing initial cheese melting', () => {
  for (const slug of [
    'homemade-enchilada-sauce',
    'san-marzano-tomato-sauce',
    'real-alfredo-sauce',
  ]) {
    assert.match(read(slug).content, /rolling boil/, slug);
  }
  assert.match(read('real-alfredo-sauce').content, /For the initial preparation/);
});
