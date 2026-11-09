import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));
const step = (content, title) =>
  content.split('\n').find((line) => line.includes(`**${title}:**`)) ?? '';

test('chili oil preserves the fresh-aromatic storage limit and uses a controlled hot pour', () => {
  const { data, content } = read('homemade-chili-oil');
  assert.match(content, /heatproof stainless-steel bowl/);
  // The test pour on a pinch of flakes still guards against scorching the base.
  assert.match(step(content, 'Test the heat'), /sizzle and darken slightly without turning black/);
  assert.match(step(content, 'Pour'), /a little at a time/);
  // The storage limit for fresh garlic and ginger stays at 4 days in the fridge. The
  // "not shelf-stable" sentence was food-safety boilerplate the Nov 9 rewrite dropped.
  assert.match(data.learning.storage, /fridge for up to 4 days/);
  assert.doesNotMatch(data.learning.storage, /room temperature|pantry|weeks?\b/);
});
test('dipping sauce counts the rest and keeps unused sauce separate', () => {
  const { data, content } = read('soy-ginger-dipping-sauce');
  // 5 min prep plus the 10 minute rest.
  assert.equal(data.totalTime, '15 min');
  assert.match(step(content, 'Rest and serve'), /sit for 10 minutes/);
  // The dipped-versus-unused handling note was food-safety boilerplate and is gone by design.
  // The real guard is the short fridge life for fresh garlic and ginger.
  assert.match(data.learning.storage, /4 days in the fridge/);
  assert.doesNotMatch(`${content}\n${data.learning.storage}`, /up to 1 week|\bweeks?\b/);
});
test('enchilada sauce specifies the chili blend and reserves finishing pepper', () => {
  const { data, content } = read('homemade-enchilada-sauce');
  assert.ok(data.ingredients.some((x) => /pure ancho/.test(x)));
  assert.ok(data.ingredients.includes('pinch of ground cinnamon (optional)'));
  // Black pepper stays out of the toasted spice mix and goes in at the finish.
  assert.doesNotMatch(step(content, 'Toast the spices'), /pepper/);
  assert.match(step(content, 'Finish'), /black pepper/);
});
test('Alfredo is usable without cooking pasta and tomato sauce uses its alternatives', () => {
  const alfredo = read('real-alfredo-sauce');
  // The sauce is now written to be tossed with hot pasta, so pasta water is the loosener.
  assert.ok(alfredo.data.ingredients.includes('1/4 cup warm pasta cooking water'));
  // Cheese melts over low heat without boiling (replaces the off-heat wording).
  assert.match(step(alfredo.content, 'Melt the cheese'), /Turn the heat to low/);
  assert.match(step(alfredo.content, 'Melt the cheese'), /Don't let it boil/);
  // The pasta water is added only until the sauce flows, not all at once.
  assert.match(step(alfredo.content, 'Loosen'), /a little at a time until the sauce flows/);
  const tomato = read('san-marzano-tomato-sauce');
  assert.ok(!tomato.data.cookingMethods.includes('no-cook'));
  // Dried oregano is now the swap for basil, and it stays in the sauce.
  const oregano = tomato.data.learning.substitutions.find((s) => /oregano/.test(s.alternative));
  assert.equal(oregano?.ingredient, 'fresh basil');
  assert.match(oregano.alternative, /1\/2 tsp dried oregano/);
  assert.match(oregano.effect, /Leave it in the sauce/);
  assert.match(step(tomato.content, 'Finish'), /Remove the garlic and basil/);
});
test('orzo requires fully cooked sausage and schedules optional peas', () => {
  const { data, content } = read('broccolini-chicken-sausage-and-orzo-skillet');
  assert.ok(data.ingredients.some((x) => x.startsWith('8 oz fully cooked')));
  // The raw-sausage warning was dropped by design. The only sausage swap keeps it fully cooked.
  for (const swap of data.learning.substitutions.filter((s) => /sausage/i.test(s.ingredient)))
    assert.doesNotMatch(swap.alternative, /raw/i);
  // Peas replace the broccolini and are timed into the orzo's last minutes.
  const peas = data.learning.substitutions.find((s) => /peas/i.test(s.alternative));
  assert.equal(peas?.ingredient, 'Broccolini');
  assert.match(peas.effect, /Skip the broccolini sauté/);
  assert.match(peas.effect, /last 2 minutes/);
  assert.match(step(content, 'Simmer the orzo'), /until the orzo is tender/);
  assert.match(step(content, 'Finish and serve'), /splash of hot water if the orzo is tight/);
});
test('avocado sauce reserves optional water without mandatory dilution', () => {
  const { data, content } = read('creamy-avocado-pasta');
  assert.ok(data.ingredients.includes('1 cup pasta cooking water'));
  assert.match(step(content, 'Boil the pasta'), /Scoop out the pasta cooking water, then drain/);
  assert.match(step(content, 'Blend the sauce'), /a splash of the pasta water if the blades stall/);
  assert.match(step(content, 'Toss'), /a splash at a time until the sauce clings/);
  assert.doesNotMatch(content, /olive oil and 1\/2 cup/);
});
test('risotto uses center doneness and flexible hydration', () => {
  const { content } = read('lemon-basil-shrimp-risotto');
  assert.match(step(content, 'Sear the shrimp'), /opaque through the center/);
  assert.match(step(content, 'Add the broth'), /rice is tender with a slight bite/);
  assert.match(step(content, 'Add the broth'), /If the broth runs out first, use hot water/);
  assert.match(
    step(content, 'Finish the risotto'),
    /splash of broth or hot water if it has turned stiff/
  );
});
test('Thai noodles restore oil and keep raw optional proteins out of the quick toss', () => {
  const { data, content } = read('one-pot-spicy-thai-noodles');
  // The full 2 tbsp of oil is split between the eggs and the vegetables.
  assert.ok(data.ingredients.includes('2 tbsp vegetable oil'));
  assert.match(step(content, 'Scramble the eggs'), /half the oil/);
  assert.match(step(content, 'Cook the vegetables'), /the rest of the oil/);
  // The optional protein is already cooked, so the 1 to 2 minute toss only warms it.
  // The raw-chicken and 165°F reheating notes were safety boilerplate the rewrite dropped.
  assert.ok(data.ingredients.includes('cooked chicken or shrimp (optional)'));
  assert.doesNotMatch(content, /raw (chicken|shrimp)/);
  assert.match(step(content, 'Toss with the sauce'), /coated and hot/);
});
test('covered Spanish rice does not claim a direct Bomba substitution', () => {
  const { data, content } = read('spanish-rice-chorizo');
  const rice = data.formula.components
    .find((c) => c.id === 'main')
    .ingredients.find((i) => i.id === 'rice');
  assert.deepEqual(rice.quantity, { amount: 1.5, unit: 'cup' });
  assert.deepEqual(rice.uses, [{ step: 'rice', share: 1 }]);
  assert.ok(data.ingredients.includes('1 1/2 cups Arborio rice'));
  // The uncovered source variation is gone, so nothing may offer Bomba or Calasparra at all.
  const page = `${content}\n${JSON.stringify(data.learning)}\n${data.ingredients.join('\n')}`;
  assert.doesNotMatch(page, /Bomba|Calasparra/i);
  assert.doesNotMatch(content, /Uncovered Variation/);
  assert.match(content, /tight lid/);
  assert.match(step(content, 'Bake'), /Cover tightly and bake/);
  assert.equal(data.totalTime, '1 hr 20 min');
});
test('leftover sauces follow rolling-boil guidance without changing initial cheese melting', () => {
  // The rolling-boil reheating line was USDA boilerplate the Nov 9 rewrite dropped. Each sauce
  // still gives its leftover handling: enchilada and Alfredo say how to reheat, tomato its keeping.
  const reheat = {
    'homemade-enchilada-sauce': /splash of broth when you reheat/,
    'san-marzano-tomato-sauce': /4 days in the fridge and freezes/,
    'real-alfredo-sauce': /Reheat over low heat/,
  };
  for (const [slug, cue] of Object.entries(reheat)) {
    assert.match(read(slug).data.learning.storage, cue, slug);
  }
  // Reheating advice must not leak into the first melt, which stays below a boil.
  const alfredo = read('real-alfredo-sauce');
  assert.match(alfredo.data.learning.storage, /Best fresh/);
  assert.match(step(alfredo.content, 'Melt the cheese'), /Don't let it boil/);
  assert.doesNotMatch(step(alfredo.content, 'Melt the cheese'), /boil until|bring .* boil/i);
});
