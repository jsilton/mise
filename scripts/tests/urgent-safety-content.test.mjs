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
    ['water or chicken stock or broth', 'refrigerate overnight at 40°F'],
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
      '**Freeze in small portions:**',
      'Cool promptly in small, clean freezer-safe containers',
      'Thaw only a portion needed in the refrigerator',
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
    ['cold sparkling wine', '3 cups Prosecco'],
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
    ['shallow containers', '3–4 days', '165°F', 'rolling boil'],
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
      'Raw pork or beef sausage links need a measured 160°F / 71°C center',
      'raw chicken or turkey sausage needs 165°F / 74°C',
      'check representative raw-contact potatoes for 165°F',
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
    [
      'Loosen noodles on a clean board or in a bowl before they reach the hot wok',
      'cooking chopsticks or tongs in the pan',
      'then lift and fold with chopsticks or tongs',
    ],
  ],
  [
    'honey-glazed-spareribs',
    ['Perform a quick pressure release'],
    [
      'release fully naturally',
      'red float is completely down',
      'Then press START/CANCEL to turn off',
      'Do not force the lid or release steam manually',
    ],
  ],
  [
    'instant-pot-butternut-squash-soup',
    ['quick Release', 'Follow its minimum-liquid, maximum-fill and pressure-release'],
    [
      'at or below 60%',
      'Release fully naturally',
      'automatic Keep Warm setting',
      'red float is completely down',
      'Then press START/CANCEL to turn off',
      'Do not force the lid or release steam manually',
    ],
  ],
  [
    'instant-pot-potato-leek-soup',
    ['then vent any remaining steam', 'naturally for 15 minutes'],
    [
      'release fully naturally',
      'red float is completely down',
      'Then press START/CANCEL to turn off',
      'adapted the soup from her grandfather’s recipe',
    ],
  ],
  ['play-dough', ['Wintergreen', 'wintergreen'], ['1 tbsp vegetable oil']],
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
      'Keep the pork skillet off the heat',
      'then add all the warm egg-and-cheese mixture. Toss immediately',
      'Do not put the egg sauce back over high direct heat to hold it',
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
    const proof = (parsed.content + '\n' + JSON.stringify(parsed.data)).toLowerCase();
    for (const phrase of required)
      assert.ok(proof.includes(phrase.toLowerCase()), `${slug}: missing ${phrase}`);
  });
}

test('carbonara retains its two whole eggs plus two yolks and existing richness', () => {
  const { data } = matter(read('real-spaghetti-carbonara'));
  assert.deepEqual(
    data.ingredients.filter(
      (ingredient) => !/^---.*---$/.test(ingredient) && /egg/i.test(ingredient)
    ),
    ['2 large pasteurized whole eggs', '2 large pasteurized egg yolks']
  );
  assert.ok(
    data.ingredients.includes(
      '4 oz guanciale or pancetta, thickly diced; check the product cooking instructions'
    )
  );
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
  const ingredients = data.formula.components.flatMap((c) => c.ingredients);
  for (const [id, amount, unit] of [
    ['butter', 3, 'tbsp'],
    ['oil', 2, 'tbsp'],
    ['flour', 2, 'tbsp'],
    ['dairy', '3/4', 'cup'],
  ]) {
    assert.deepEqual(ingredients.find((i) => i.id === id).quantity, { amount, unit });
  }
  assert.match(ingredients.find((i) => i.id === 'dairy').preparation, /heavy cream or milk/);
});

test('filled wonton endpoint remains distinct from sweet custard and plain pork sausage', () => {
  assert.match(read('shrimp-wonton-soup'), /filling and continue until they reach 165°F/);
  assert.match(read('key-lime-pie'), /center reaches 160°F/);
  assert.match(
    read('sheet-pan-italian-sausage-dinner'),
    /Raw pork or beef sausage links need a measured 160°F \/ 71°C center/
  );
  assert.ok(!read('key-lime-pie').includes('165°F'));
});

test('pho stages distinguish chilled leftover reheating from intact-cut beef cooking', () => {
  const source = read('pho-bo-beef-pho');
  const { data, content } = matter(source);
  const meats = data.formula.steps.find((step) => step.id === 'meats');
  // Cold brisket reheating remains separate from raw eye-of-round cooking.
  assert.match(
    meats.text,
    /Slice the cold brisket[\s\S]*?Reheat it in simmering broth to 165°F \/ 74°C throughout/
  );
  assert.match(
    content,
    /^\d+\. \*\*Prepare meats:\*\* Slice the cold brisket across the grain\. Reheat it in simmering broth to 165°F \/ 74°C throughout\./m
  );
  assert.match(source, /eye of round[\s\S]*?145°F \/ 63°C, then allow a 3-minute rest/);
  assert.ok(source.includes('if the thin slices cannot be reliably measured'));
});
