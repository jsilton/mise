import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('pie keeps both blind bake stages hot and chills the egg custard promptly', () => {
  const { data, content } = read('apple-cider-cream-pie');
  const shell = data.formula.steps.find((step) => step.id === 'shell');
  assert.match(shell.text, /Heat the oven to 425°F/);
  assert.match(shell.text, /about 15 minutes until barely set/);
  assert.match(shell.text, /about 15 minutes more at 425°F until set but not browned/);
  assert.match(content, /[Rr]educe the oven to 350°F/);
  assert.match(content, /refrigerate within 2 hours/);
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
  assert.match(oats.content, /^1\. \*\*Whisk:\*\*.*maple syrup.*until the cheese is dispersed/m);
  assert.doesNotMatch(oats.content, /yogurt, honey/);
  const shortcake = read('strawberry-rhubarb-shortcake-with-whipped-mascarpone');
  assert.equal(
    shortcake.data.totalTime,
    'About 90 min, plus any remaining preheating or fruit cooling'
  );
  assert.match(shortcake.content, /6-by-9-inch rectangle/);
  assert.match(shortcake.content, /25–30 minutes/);
});
test('muffins prepare the oven before mixing and retain the stated alternatives', () => {
  const { data, content } = read('vegetable-muffin');
  const prepare = data.formula.steps.findIndex((step) => step.id === 'prepare');
  const puree = data.formula.steps.findIndex((step) => step.id === 'puree');
  assert.ok(prepare >= 0 && puree > prepare);
  assert.match(data.formula.steps[prepare].text, /Preheat the oven to 350°F before mixing/);
  assert.ok(
    content.indexOf('**Prepare:**') >= 0 &&
      content.indexOf('**Puree:**') > content.indexOf('**Prepare:**')
  );
  assert.match(content, /banana or (?:unsweetened )?applesauce/);
  assert.match(content, /spinach or kale/);
  assert.match(content, /no more than (?:3\/4|¾) full/);
  assert.doesNotMatch(content, /freeze perfectly/);
});
test('soup and gratin restore source amounts and allocate the listed ingredients', () => {
  const soup = read('fennel-and-carrot-soup');
  assert.ok(soup.data.ingredients.includes('2 Carrots, peeled and chopped'));
  assert.match(soup.content, /two-thirds of the butter/);
  assert.match(soup.content, /remaining one-third/);
  assert.match(soup.content, /approved for hot liquids/);
  const gratin = read('sweet-and-white-potato-gratin');
  for (const line of ['1 tsp Fresh Rosemary, chopped', '2 tsp Salt', '1 tsp Black Pepper'])
    assert.ok(gratin.data.ingredients.includes(line));
  assert.doesNotMatch(gratin.content, /heat 1 tbsp butter|Lightly butter/);
  assert.match(gratin.content, /one-sixth of each dish’s allocated cream/);
  assert.match(gratin.content, /Divide all measured ingredients among the dishes/);
  assert.match(gratin.content, /Use all the cream; do not leave a fixed-volume remainder behind/);
  assert.equal(gratin.data.totalTime, '95 min');
});
test('salad lists toppings and soup keeps its safer release instructions', () => {
  const salad = read('roasted-fall-harvest-salad');
  assert.ok(salad.data.ingredients.includes('1/4 cup Toasted Pepitas'));
  assert.ok(salad.data.ingredients.some((x) => x.startsWith('200 g Honeynut')));
  assert.equal(salad.data.servings, '4');
  assert.match(salad.content, /The original batch plans four side portions/);
  assert.match(salad.content, /follow the listed portion count when scaling/);
  const soup = read('instant-pot-potato-leek-soup');
  assert.ok(soup.data.ingredients.some((x) => x.includes('white and pale green')));
  assert.match(soup.content, /release fully naturally/);
  assert.match(soup.content, /head submerged/);
  assert.doesNotMatch(soup.content, /5-7 minutes cook until golden brown/);
  assert.equal(read('crispy-smashed-potatoes').data.totalTime, '75 min');
});
test('enchiladas make the sauce before allocation and heat filling through', () => {
  const { data, content } = read('chicken-and-white-bean-enchiladas-with-creamy-green-chile-sauce');
  assert.ok(data.ingredients.includes('1 tsp ground cumin'));
  assert.ok(data.ingredients.includes('8 flour tortillas (8-inch)'));
  assert.ok(
    data.formula.steps.findIndex((step) => step.id === 'sauce') <
      data.formula.steps.findIndex((step) => step.id === 'fill')
  );
  assert.deepEqual(
    data.formula.components.find((c) => c.id === 'rolls').ingredients.find((i) => i.id === 'cumin')
      .uses,
    [{ step: 'fill', share: 1 }]
  );
  assert.match(content, /165°F \/ 74°C/);
});
test('japchae accounts for its oil and scallions, lamb sauce lists cooking oil', () => {
  const { data, content } = read('japchae-korean-glass-noodle-stir-fry');
  assert.ok(data.ingredients.includes('1 tsp Cornstarch'));
  assert.match(content, /remaining 2 tsp sesame oil/);
  assert.match(content, /Scallions: Cook/);
  assert.match(content, /145°F \/ 63°C/);
  assert.match(content, /rest at least 3 minutes/);
  assert.match(content, /reheat to 165°F/);
  const lamb = read('pasta-with-abruzzi-style-lamb-sauce');
  const oil = lamb.data.formula.components
    .find((component) => component.id === 'main')
    .ingredients.find((ingredient) => ingredient.id === 'oil');
  assert.equal(oil.name, 'olive oil');
  assert.deepEqual(oil.quantity, { amount: 1, unit: 'tbsp' });
  assert.deepEqual(oil.uses, [{ step: 'render', share: 1 }]);
  assert.ok(lamb.data.ingredients.includes('1 tbsp olive oil'));
});
