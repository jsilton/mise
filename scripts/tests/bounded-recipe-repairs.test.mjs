import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('pie keeps both blind bake stages hot and chills the egg custard promptly', () => {
  const { data, content } = read('apple-cider-cream-pie');
  const shell = data.formula.steps.find((step) => step.id === 'shell');
  assert.match(shell.text, /Heat the oven to 425°F/);
  assert.match(shell.text, /until the edge is just set, about 15 minutes/);
  // The second stage stays at 425°F: the oven only drops to 350°F after the shell is done.
  assert.match(shell.text, /dry but not browned,\s+about 15 minutes more/);
  assert.ok(shell.text.indexOf('15 minutes more') < shell.text.indexOf('lower the oven to 350°F'));
  assert.match(content, /lower the oven to 350°F/);
  // The custard pie goes from a 1-hour rack cool straight into the fridge.
  const chill = data.formula.steps.find((step) => step.id === 'chill');
  assert.match(chill.text, /rack for 1 hour, then refrigerate until cold and fully set/);
  assert.match(data.learning.storage, /fridge/);
  assert.doesNotMatch(content, /intensifying its flavor tenfold/);
});
test('oats use their listed sweetener and shortcakes define six-square geometry', () => {
  const oats = read('strawberry-cheesecake-overnight-oatmeal');
  // The main maple syrup is whisked with the cream-cheese mixture.
  const oatBase = oats.data.formula.components.find((component) => component.id === 'base');
  const maple = oatBase.ingredients.find((ingredient) => ingredient.id === 'maple');
  assert.equal(maple.name, 'maple syrup');
  assert.deepEqual(maple.quantity, { amount: 1, unit: 'tbsp' });
  assert.deepEqual(maple.uses, [{ step: 'cream', share: 1 }]);
  assert.ok(oats.data.ingredients.includes('1 tbsp maple syrup'));
  assert.ok(!oatBase.ingredients.some((ingredient) => /honey/i.test(ingredient.name)));
  assert.match(
    oats.content,
    /^1\. \*\*Make the cheesecake base:\*\*.*cream cheese.*maple syrup.*until completely smooth/m
  );
  assert.doesNotMatch(oats.content, /yogurt, honey/);
  const shortcake = read('strawberry-rhubarb-shortcake-with-whipped-mascarpone');
  // Times are plain now (style guide), with no "about" or preheating hedge.
  assert.equal(shortcake.data.totalTime, '1 hr 30 min');
  assert.equal(shortcake.data.servings, '6 shortcakes');
  assert.match(
    shortcake.content,
    /6-by-9-inch rectangle about 1 inch thick and cut six 3-inch squares/
  );
  assert.equal(6 * 9, 6 * 3 * 3);
  assert.match(shortcake.content, /Raise the oven to 425°F/);
  assert.match(shortcake.content, /browned underneath, 15 to 18 minutes/);
});
test('muffins prepare the oven before mixing and retain the stated alternatives', () => {
  const { data, content } = read('vegetable-muffin');
  const prepare = data.formula.steps.findIndex((step) => step.id === 'prepare');
  const puree = data.formula.steps.findIndex((step) => step.id === 'puree');
  assert.ok(prepare >= 0 && puree > prepare);
  assert.match(data.formula.steps[prepare].text, /Heat the oven to 350°F/);
  assert.ok(
    content.indexOf('**Heat the oven:**') >= 0 &&
      content.indexOf('**Blend the wet mix:**') > content.indexOf('**Heat the oven:**')
  );
  // The banana/applesauce and spinach/kale alternatives are now swaps.
  const swaps = data.learning.substitutions;
  assert.ok(swaps.some((s) => s.ingredient === 'ripe banana' && /applesauce/i.test(s.alternative)));
  assert.ok(swaps.some((s) => s.ingredient === 'baby spinach' && /kale/i.test(s.alternative)));
  assert.match(content, /three-quarters full/);
  assert.doesNotMatch(content, /freeze perfectly/);
});
test('soup and gratin restore source amounts and allocate the listed ingredients', () => {
  const soup = read('fennel-and-carrot-soup');
  assert.ok(soup.data.ingredients.includes('2 carrots, peeled and chopped'));
  assert.ok(soup.data.ingredients.includes('6 tbsp unsalted butter, divided'));
  assert.match(soup.content, /two-thirds of the butter/);
  assert.match(soup.content, /rest of the butter/);
  // Hot blending keeps its practical cue (half-full, vented lid) without appliance boilerplate.
  assert.match(soup.content, /filled no more than halfway, with the lid vented/);
  // Family gratin: Kaitlin Gwock's original amounts and allocations (045e5ba2).
  const gratin = read('sweet-and-white-potato-gratin');
  for (const line of ['1 tsp fresh rosemary, chopped', '2 tsp salt', '1 tsp black pepper'])
    assert.ok(gratin.data.ingredients.includes(line));
  assert.doesNotMatch(gratin.content, /heat 1 tbsp butter|Lightly butter/);
  // 1/2 cup of 3 cups is a sixth, 3/4 cup is a quarter, as on the family card.
  assert.match(gratin.content, /Pour a sixth of the cream into the bottom/);
  assert.match(gratin.content, /Drizzle with a quarter of the cream/);
  assert.match(gratin.content, /all the remaining cheese/);
  assert.match(gratin.content, /bake until the cheese is bubbly, 15 minutes/);
  assert.match(
    gratin.content,
    /lower the oven to 400°F and bake until the top is golden and bubbly, 45 minutes/
  );
  // The October "use all the cream" change now lives in the Suggested Tweak.
  const tweak = gratin.content.split(/^## Suggested Tweak\s*$/m)[1];
  assert.match(tweak, /last of the cream over the top layer/);
  assert.equal(gratin.data.totalTime, '1 hr 30 min');
});
test('salad lists toppings and soup keeps a controlled pressure release', () => {
  const salad = read('roasted-fall-harvest-salad');
  assert.ok(salad.data.ingredients.includes('1/4 cup toasted pepitas'));
  assert.ok(salad.data.ingredients.some((x) => x.includes('(200 g) honeynut')));
  assert.equal(salad.data.servings, '4');
  // "original batch" scaling wording was removed by the style guide. Toppings are still used.
  assert.doesNotMatch(salad.content, /original batch/);
  assert.match(salad.content, /Top with the squash, chickpeas, pepitas and raisins/);
  const soup = read('instant-pot-potato-leek-soup');
  assert.ok(soup.data.ingredients.some((x) => x.includes('white and pale green')));
  // Back to the source's method: 15 minutes of natural release before venting the rest.
  assert.match(soup.content, /pressure come down on its own for 15 minutes, then open the valve/);
  assert.match(soup.content, /immersion blender until smooth/);
  assert.match(soup.content, /soft and translucent but not browned, 5 to 7 minutes/);
  assert.doesNotMatch(soup.content, /5-7 minutes cook until golden brown/);
  assert.equal(read('crispy-smashed-potatoes').data.totalTime, '75 min');
});
test('enchiladas make the sauce before allocation and heat filling through', () => {
  const { data, content } = read('chicken-and-white-bean-enchiladas-with-creamy-green-chile-sauce');
  assert.ok(data.ingredients.includes('1 tsp ground cumin'));
  assert.ok(data.ingredients.includes('8 flour tortillas, 8-inch'));
  assert.ok(
    data.formula.steps.findIndex((step) => step.id === 'sauce') <
      data.formula.steps.findIndex((step) => step.id === 'fill')
  );
  assert.deepEqual(
    data.formula.components.find((c) => c.id === 'rolls').ingredients.find((i) => i.id === 'cumin')
      .uses,
    [{ step: 'fill', share: 1 }]
  );
  // The chicken is already cooked, so the 165°F probe gave way to a bubbling cue.
  assert.match(
    data.ingredients.find((x) => x.includes('chicken')),
    /cooked chicken/
  );
  assert.match(content, /Bake until the sauce bubbles at the edges/);
});
test('japchae accounts for its oil and scallions, lamb sauce lists cooking oil', () => {
  const { data, content } = read('japchae-korean-glass-noodle-stir-fry');
  const ingredients = data.formula.components.flatMap((component) => component.ingredients);
  const ingredient = (id) => ingredients.find((entry) => entry.id === id);
  const step = (id) => data.formula.steps.find((entry) => entry.id === id).text;
  assert.deepEqual(ingredient('cornstarch').quantity, { amount: 1, unit: 'tsp' });
  assert.deepEqual(ingredient('cornstarch').uses, [{ step: 'marinate', share: 1 }]);
  // Nov 8 approved: 1 tbsp sesame oil in the sauce (3/4 of 4 tsp).
  assert.deepEqual(ingredient('sesame').quantity, { amount: 4, unit: 'tsp' });
  assert.deepEqual(ingredient('sesame').uses, [
    { step: 'marinate', share: '1/4' },
    { step: 'sauce', share: '3/4' },
  ]);
  // Nov 10 approved: 5 tbsp soy sauce, 1 tbsp for the beef and 4 tbsp in the sauce.
  assert.match(
    content,
    /^5\. \*\*Mix the sauce:\*\*.*4\/5 of the soy sauce, 3\/4 of the toasted sesame oil/m
  );
  // Nov 8 approved: 1/2 tsp garlic in the marinade, the rest (2 1/2 tsp) in the sauce.
  assert.deepEqual(ingredient('garlic').quantity, { amount: '1/2', unit: 'tsp' });
  assert.deepEqual(ingredient('garlic').uses, [{ step: 'marinate', share: 1 }]);
  assert.deepEqual(ingredient('garlic-sauce').quantity, { amount: '2 1/2', unit: 'tsp' });
  assert.deepEqual(ingredient('garlic-sauce').uses, [{ step: 'sauce', share: 1 }]);
  // Nov 8 approved: red bell pepper, no vinegar.
  assert.ok(ingredient('bell-pepper').name === 'red bell pepper');
  assert.ok(!ingredients.some((entry) => /vinegar|zucchini/i.test(entry.name)));
  // One divided oil line: a third sears the beef, the rest films the vegetable loads.
  assert.deepEqual(ingredient('oil').quantity, { amount: 3, unit: 'tbsp' });
  assert.ok(data.ingredients.includes('3 tbsp neutral oil, divided'));
  assert.match(step('beef'), /Heat a third of the \{\{ingredients\}\}/);
  assert.match(step('vegetables'), /thin film\s+of the remaining oil/);
  assert.deepEqual(ingredient('scallions').quantity, { amount: 3, unit: 'count' });
  assert.deepEqual(ingredient('scallions').uses, [{ step: 'vegetables', share: 1 }]);
  assert.match(step('vegetables'), /scallions and\s+spinach take about 1 minute each/);
  // Thin-sliced beef uses a visual cue now. The 145°F probe and reheating line were dropped.
  assert.match(step('beef'), /no pink remains/);
  assert.match(step('beef'), /Move it to a plate/);
  assert.match(step('combine'), /noodles, vegetables and beef with its juices/);
  assert.match(data.learning.storage, /3 days in the fridge/);
  const lamb = read('pasta-with-abruzzi-style-lamb-sauce');
  const oil = lamb.data.formula.components
    .find((component) => component.id === 'main')
    .ingredients.find((ingredient) => ingredient.id === 'oil');
  assert.equal(oil.name, 'olive oil');
  assert.deepEqual(oil.quantity, { amount: 1, unit: 'tbsp' });
  // The oil now goes in with the onion, the first step, before the pancetta renders.
  assert.deepEqual(oil.uses, [{ step: 'onion', share: 1 }]);
  assert.ok(lamb.data.ingredients.includes('1 tbsp olive oil'));
});
