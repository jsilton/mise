import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';

// Narrow editorial regressions. Passing these checks does not kitchen-validate
// the recipes or resolve separate pressure-cooker, craft, formula or yield holds.
const read = (slug) =>
  fs.readFileSync(new URL(`../../src/content/recipes/${slug}.md`, import.meta.url), 'utf8');
const cases = [
  [
    'homemade-chili-oil',
    ['Store at room temperature for up to 1 month', 'Let cool completely'],
    ['40°F', 'within 2 hours', 'Use within 4 days', 'freeze small portions'],
  ],
  [
    'oatmeal-risotto',
    ['let stand overnight', 'at room temperature'],
    ['water/broth', 'refrigerate overnight at 40°F'],
  ],
  [
    'onigiri-japanese-rice-balls',
    [
      'room temperature for 4-5 hours',
      'room temperature for up to 5 hours',
      'thaw at room temperature',
    ],
    ['preparation and service together', 'ice pack', 'thaw in the refrigerator'],
  ],
  [
    'elderberry-syrup',
    [
      'anti-inflammatory punch',
      'enzymes and beneficial compounds',
      'up to 2 months',
      'Standard Recommended dose',
      '**Stabilize:**',
    ],
    [
      'under 12 months',
      'food-grade dried ripe elderberries',
      '**Freeze for storage:**',
      'no established standard medicinal dose',
    ],
  ],
  [
    'whiskey-sour',
    ['safe when shaken properly', '1/2 oz egg white (optional but recommended)'],
    ['1/2 oz pasteurized egg white', 'shaking, lemon juice and whiskey do not'],
  ],
  [
    'thai-basil-ginger-spritzer',
    ['non-alcoholic drink'],
    ['sparkling-wine drink', '3 cups Prosecco'],
  ],
  [
    'garlic-paste-toum-the-washington-post',
    ['up to 3 weeks'],
    ['40°F', 'within 4 days', 'emulsion may separate', 'lemon juice alone'],
  ],
  [
    'chicken-quesadillas-with-quick-pico',
    ['stays fresh for up to 3 hours'],
    ['refrigerate until serving', 'preparation and serving time together', '1 hour above 90°F'],
  ],
  [
    'sheet-pan-pesto-chicken-meal-prep-bowls',
    ['5 days', 'perfect Texture'],
    ['shallow containers', '3–4 days', 'reheat to 165°F'],
  ],
  [
    'starbucks-egg-bites',
    ['up to 5 days'],
    ['shallow containers within 2 hours', '3–4 days', '165°F / 74°C'],
  ],
  [
    'vegetable-minestrone',
    ['up to 5 days', 'Cool completely, then freeze', 'Reheat gently on the stovetop'],
    ['shallow containers', '3–4 days', '165°F / 74°C', 'rolling boil'],
  ],
  [
    'balsamic-peach-pork',
    ['135°F', 'Pork tenderloin is a fast protein'],
    ['pork chops to at least 145°F', 'away from the bone', 'rest for 5 minutes'],
  ],
  [
    'herb-marinated-pork-tenderloins',
    ['137°F', 'Keep the existing'],
    [
      'every tenderloin reaches at least 145°F',
      '**Rest for 10 minutes**',
      'before removing it from the oven',
    ],
  ],
  [
    'spatchcocked-roast-chicken',
    ['160-165°F', 'breasts to reach 160°F', 'focus on the thighs', 'The moment the thighs hit'],
    ['each breast', 'innermost thighs and wings', '165°F / 74°C before removal'],
  ],
  [
    'sheet-pan-italian-sausage-dinner',
    ['Lighter option, same method'],
    [
      '160°F internal',
      'raw chicken sausage',
      '165°F center endpoint',
      'package reheating instructions',
    ],
  ],
  [
    'shrimp-wonton-soup',
    ['160°F / 71°C'],
    [
      'thin-tip thermometer inserted into the center of the filling',
      '165°F / 74°C',
      'floating alone does not establish doneness',
    ],
  ],
  [
    'cu-chao-mian',
    ['Add the noodles and use your hands'],
    ['before they enter the wok', 'chopsticks or tongs', 'keep hands out of the hot oil'],
  ],
  [
    'honey-glazed-spareribs',
    ['Perform a quick pressure release'],
    ['release fully naturally', 'no remaining pressure'],
  ],
  [
    'instant-pot-butternut-squash-soup',
    ['quick Release', 'Follow its minimum-liquid, maximum-fill and pressure-release'],
    [
      'soup fill limit',
      'full natural pressure release',
      'Turn Keep Warm off',
      'no pressure remains',
    ],
  ],
  [
    'instant-pot-potato-leek-soup',
    ['then vent any remaining steam', 'naturally for 15 minutes'],
    ['release fully naturally', 'pressure indicator has dropped', "my Grandpa's recipe"],
  ],
  ['play-dough', ['Wintergreen', 'wintergreen'], ['1 tbsp Vegetable Oil']],
  [
    'tonkotsu-style-ramen',
    ['it protects the broth underneath', 'Reheat gently before serving'],
    ['shallow containers', 'Use within 3 days', '165°F / 74°C', 'fat layer does not replace'],
  ],
  [
    'pho-bo-beef-pho',
    [
      'the hot broth will cook them in the bowl',
      'Top with sliced brisket and raw eye of round',
      'the raw beef will turn pink and cook instantly',
    ],
    ['brisket', '165°F / 74°C', '145°F / 63°C', '3-minute rest', 'cooked, rested eye of round'],
  ],
  [
    'key-lime-pie',
    ['begin "cooking" instantly', 'Bake for 15 minutes until set'],
    ['acidity does not replace cooking the eggs', '160°F / 71°C', 'slight central wobble'],
  ],
  [
    'japanese-beef-rice-bowl-gyudon',
    ['so the warm rice cooks it slightly', 'A soft-boiled egg (6-7 minutes)'],
    [
      'pasteurized shell eggs soft-boiled or poached',
      'pasteurized shell egg',
      'cook both the yolk and white until firm',
    ],
  ],
  [
    'real-spaghetti-carbonara',
    ['4 large Eggs (2 whole, 2 yolks)', 'will finish cooking the eggs'],
    [
      '2 large pasteurized whole eggs',
      '2 large pasteurized egg yolks',
      'appearance alone does not verify',
      'working quickly off-heat',
    ],
  ],
  [
    'rice-bowl-station-buddha-bowls',
    ['Choose 1-2, raw or cooked'],
    ['Choose 1-2, cooked and ready to eat'],
  ],
];

for (const [slug, forbidden, required] of cases) {
  test(`${slug}: targeted unsafe copy removed and companions present`, () => {
    const source = read(slug);
    const parsed = matter(source);
    assert.ok(parsed.data.title && Array.isArray(parsed.data.ingredients));
    for (const phrase of forbidden)
      assert.ok(!source.includes(phrase), `${slug}: retained ${phrase}`);
    for (const phrase of required) assert.ok(source.includes(phrase), `${slug}: missing ${phrase}`);
  });
}

test('carbonara retains its two whole eggs plus two yolks and existing richness', () => {
  const { data } = matter(read('real-spaghetti-carbonara'));
  assert.deepEqual(
    data.ingredients.filter((ingredient) => /egg/i.test(ingredient)),
    ['2 large pasteurized whole eggs', '2 large pasteurized egg yolks']
  );
  assert.ok(data.ingredients.includes('4 oz Guanciale or Pancetta (thickly diced)'));
  assert.ok(data.ingredients.includes('1 cup Pecorino Romano or Parmesan, freshly grated'));
});

test('cold broth handling preserves dispersed fat without requiring a separate oil cap', () => {
  const recipe = read('tonkotsu-style-ramen');
  assert.ok(recipe.includes("Keep the broth's dispersed fat for richness"));
  assert.ok(recipe.includes('do not skim away all the fat'));
  assert.ok(
    recipe.includes('Skim a little excess free surface oil only if the broth still feels greasy')
  );
  assert.ok(recipe.includes('A solid fat layer does not replace rapid cooling or refrigeration'));
});

test('pressure release correction does not silently reduce grandfather soup richness', () => {
  const { data } = matter(read('instant-pot-potato-leek-soup'));
  for (const item of [
    '3 tbsp Unsalted Butter',
    '2 tbsp Extra-Virgin Olive Oil',
    '2 tbsp All-Purpose Flour',
    '3/4 cup Half-and-Half (or Heavy Cream)',
  ]) {
    assert.ok(data.ingredients.includes(item));
  }
});

test('filled wonton endpoint remains distinct from sweet custard and plain pork sausage', () => {
  assert.match(read('shrimp-wonton-soup'), /filling and continue until they reach 165°F/);
  assert.match(read('key-lime-pie'), /center reaches 160°F/);
  assert.match(read('sheet-pan-italian-sausage-dinner'), /\(160°F internal\)/);
  assert.ok(!read('key-lime-pie').includes('165°F'));
});

test('pho stages distinguish chilled leftover reheating from intact-cut beef cooking', () => {
  const source = read('pho-bo-beef-pho');
  assert.match(source, /brisket[\s\S]*?reheat it in simmering broth to 165°F/);
  assert.match(source, /eye of round[\s\S]*?145°F \/ 63°C, then allow a 3-minute rest/);
  assert.ok(source.includes('if the thin slices cannot be reliably measured'));
});
