import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';

// Narrow editorial regressions. Passing these checks does not kitchen-validate
// the recipes or resolve separate pressure-cooker, craft, formula or yield holds.
const read = (slug) =>
  fs.readFileSync(new URL(`../../src/content/recipes/${slug}.md`, import.meta.url), 'utf8');
// Each case: [slug, forbidden phrases, required phrases]. The November rewrite to
// docs/RECIPE_PAGE_STYLE.md removed food-safety boilerplate (fridge temperatures, 2-hour
// rules, USDA reheating, thermometer lectures, cooker-manual fill limits). Required phrases now
// pin the real safety point a cook needs, in the words the step or storage line uses today.
const cases = [
  [
    'homemade-chili-oil',
    // Fresh garlic and ginger in oil: short fridge life or freezer, never the counter.
    ['Store at room temperature for up to 1 month', 'Let cool completely'],
    [
      'in the fridge for up to 4 days',
      'freeze small portions',
      'heatproof stainless-steel bowl',
      'Pour the oil over the base a little at a time',
    ],
  ],
  [
    'oatmeal-risotto',
    // The overnight soak in water or broth goes in the fridge, not on the counter.
    ['let stand overnight', 'at room temperature'],
    ['water or chicken broth', 'Cover and refrigerate overnight'],
  ],
  [
    'onigiri-japanese-rice-balls',
    // Tuna-mayo rice balls get no room-temperature holding or counter thawing.
    [
      'room temperature for 4-5 hours',
      'room temperature for up to 5 hours',
      'thaw at room temperature',
    ],
    ['Best the day they are made', 'freeze for up to a month', 'microwave until warm'],
  ],
  [
    'elderberry-syrup',
    // No medicinal claims, berries are cooked, honey syrup is kept from infants.
    [
      'anti-inflammatory punch',
      'enzymes and beneficial compounds',
      'up to 2 months',
      'Standard Recommended dose',
      '**Stabilize:**',
    ],
    [
      'dried black elderberries',
      'simmer uncovered until the liquid has reduced',
      "don't give it to babies under 1 year old",
      'freeze it in small portions',
      'thaw what you need in the fridge',
    ],
  ],
  [
    'whiskey-sour',
    // The egg white is raw. The swap says so and offers pasteurized carton whites.
    ['safe when shaken properly', '1/2 oz egg white (optional but recommended)'],
    ['1/2 oz egg white, optional', 'pasteurized egg whites', 'avoids raw egg'],
  ],
  [
    'thai-basil-ginger-spritzer',
    // A wine drink must not be labeled non-alcoholic.
    ['non-alcoholic drink'],
    ['sparkling wine spritzer', '3 cups Prosecco or other sparkling wine'],
  ],
  [
    'garlic-paste-toum-the-washington-post',
    // Raw garlic in oil: 4 days in the fridge, then freeze.
    ['up to 3 weeks'],
    ['Keeps 4 days in the fridge', "Freeze what you won't use by then", 'whisk after thawing'],
  ],
  [
    'chicken-quesadillas-with-quick-pico',
    // Already-cooked chicken. The cut-tomato pico stays chilled and is not held for hours.
    ['stays fresh for up to 3 hours'],
    ['rotisserie chicken', 'chill the pico until serving', 'pico is best the day it is made'],
  ],
  [
    'sheet-pan-pesto-chicken-meal-prep-bowls',
    ['5 days', 'perfect Texture'],
    ['until the chicken reaches 165°F', 'Keeps 4 days in the fridge'],
  ],
  [
    'starbucks-egg-bites',
    ['up to 5 days'],
    ['bacon, cooked', 'Bake until the centers are set', 'Keeps 4 days in the fridge'],
  ],
  [
    'vegetable-minestrone',
    ['up to 5 days', 'Cool completely, then freeze', 'Reheat gently on the stovetop'],
    ['Keeps 4 days in the fridge', 'freezes for 3 months'],
  ],
  [
    'balsamic-peach-pork',
    ['135°F', 'Pork tenderloin is a fast protein'],
    ['the chops reach 145°F in the thickest part', 'Rest the chops for 5 minutes'],
  ],
  [
    'herb-marinated-pork-tenderloins',
    ['137°F', 'Keep the existing'],
    ['the thickest part of each tenderloin reaches 145°F', 'let it rest for 10 minutes'],
  ],
  [
    'spatchcocked-roast-chicken',
    ['160-165°F', 'breasts to reach 160°F', 'focus on the thighs', 'The moment the thighs hit'],
    ['the thickest part of the thigh reads 165°F', 'let it rest for 10 minutes'],
  ],
  [
    'sheet-pan-italian-sausage-dinner',
    // Pork sausage 160°F in the step. The raw chicken sausage swap keeps 165°F.
    ['Lighter option, same method'],
    ['reach 160°F in the center', 'raw chicken sausage', 'roast it to 165°F'],
  ],
  [
    'shrimp-wonton-soup',
    // Wontons use a texture cue (style guide): the filling must be cooked through, not
    // just floating.
    ['160°F / 71°C', 'until they float, ', 'until they float.'],
    ['until they float and the filling is firm and cooked through'],
  ],
  [
    'cu-chao-mian',
    // Noodles are loosened with tools in the hot wok, never by hand.
    ['Add the noodles and use your hands'],
    ['Add the noodles and toss gently with tongs or chopsticks'],
  ],
  [
    'honey-glazed-spareribs',
    // Natural release is still described. The boiled marinade is reduced before glazing.
    ['Perform a quick pressure release'],
    [
      'Let the pressure come down on its own until the float valve drops',
      'Then open the lid',
      'Boil over high heat',
    ],
  ],
  [
    'instant-pot-butternut-squash-soup',
    // The 60% fill line was cooker-manual boilerplate and was dropped by design. The
    // natural release and the deglaze before sealing remain.
    ['quick Release', 'Follow its minimum-liquid, maximum-fill and pressure-release'],
    [
      'scrape up any browned bits',
      'Let the pressure come down on its own until the float valve drops',
    ],
  ],
  [
    'instant-pot-potato-leek-soup',
    // The source's method (15-minute natural release, then the valve) is restored and
    // described in the step.
    ['then vent any remaining steam'],
    [
      'Let the pressure come down on its own for 15 minutes, then open the valve to release the rest',
      'Simply Happy Foodie',
    ],
  ],
  ['play-dough', ['Wintergreen', 'wintergreen'], ['1 tbsp vegetable oil']],
  [
    'tonkotsu-style-ramen',
    // No claim that a fat layer protects stored broth. Stored broth is boiled again.
    ['it protects the broth underneath', 'Reheat gently before serving'],
    [
      'The broth keeps 3 days in the fridge',
      'bring it back to a boil before serving',
      'Cook 7 minutes for jammy yolks',
    ],
  ],
  [
    'pho-bo-beef-pho',
    // The raw eye of round is named as raw and cooked by boiling broth poured over it.
    [
      'the hot broth will cook them in the bowl',
      'Top with sliced brisket and raw eye of round',
      'the raw beef will turn pink and cook instantly',
    ],
    [
      'eye of round, sliced paper-thin',
      'keeping the raw slices apart',
      'Bring the broth to a rolling boil',
      'Ladle the boiling broth over the beef',
    ],
  ],
  [
    'key-lime-pie',
    // The yolks are baked, not "cooked" by the lime.
    ['begin "cooking" instantly', 'Bake for 15 minutes until set'],
    ['Bake until the edges are set and the center still jiggles slightly'],
  ],
  [
    'japanese-beef-rice-bowl-gyudon',
    // The egg is poached with set whites and a soft yolk, not cooked by warm rice.
    ['so the warm rice cooks it slightly', 'A soft-boiled egg (6-7 minutes)'],
    ['until the whites are set and the yolks are still soft', 'just until no pink remains'],
  ],
  [
    'real-spaghetti-carbonara',
    // Ordinary eggs lead (Roman carbonara). The swap says the eggs are only lightly cooked
    // and offers pasteurized eggs. The sauce is tossed off the heat.
    ['4 large Eggs (2 whole, 2 yolks)', 'will finish cooking the eggs'],
    [
      '2 large eggs',
      '2 large egg yolks',
      'Pasteurized eggs',
      'only lightly cooks the eggs',
      'Take the skillet off the heat',
      'still off the heat',
    ],
  ],
  [
    'rice-bowl-station-buddha-bowls',
    ['Choose 1-2, raw or cooked'],
    ['Protein (choose one or two)'],
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
    ['2 large eggs', '2 large egg yolks']
  );
  assert.ok(data.ingredients.includes('4 oz guanciale, thickly diced'));
  assert.ok(
    data.ingredients.includes('1 cup Pecorino Romano, finely grated, plus more for serving')
  );
  // Pancetta and Parmigiano moved from "or" lines to swaps at the same amounts.
  const swaps = data.learning.substitutions.map((swap) => swap.alternative);
  for (const alternative of ['Pasteurized eggs', 'Pancetta', 'Parmigiano-Reggiano'])
    assert.ok(swaps.includes(alternative), `carbonara: missing ${alternative} swap`);
});

test('cold broth handling preserves dispersed fat without requiring a separate oil cap', () => {
  const recipe = read('tonkotsu-style-ramen');
  const { data } = matter(recipe);
  // The broth keeps its emulsified fat: only the gray foam is skimmed.
  assert.ok(recipe.includes('Skim off the gray foam for the first 20 minutes, but leave the fat'));
  assert.ok(!/skim (off |away )?(all )?the fat/i.test(recipe));
  // Storage relies on the fridge and a boil, never a fat cap. The October "a solid fat layer
  // does not replace refrigeration" line was a lecture and is gone by design.
  assert.ok(!/fat (cap|layer)/i.test(recipe));
  assert.match(data.learning.storage, /keeps 3 days in the fridge/);
  assert.match(data.learning.storage, /back to a boil/);
});

test('pressure release correction does not silently reduce potato leek soup richness', () => {
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
  assert.equal(ingredients.find((i) => i.id === 'dairy').name, 'half-and-half');
  // Heavy cream moved from the ingredient line to a swap.
  assert.ok(
    data.learning.substitutions.some(
      (swap) => swap.ingredient === 'half-and-half' && swap.alternative === 'Heavy cream'
    )
  );
});

test('filled wonton endpoint remains distinct from sweet custard and plain pork sausage', () => {
  // Wontons: cooked-through filling, not floating alone (texture cue per the style guide).
  assert.match(
    read('shrimp-wonton-soup'),
    /until they float and the filling is firm and cooked through/
  );
  // Key lime custard: baked until set at the edges with a slight jiggle, no meat endpoint.
  assert.match(
    read('key-lime-pie'),
    /Bake until the edges are set and the center still jiggles slightly/
  );
  assert.ok(!read('key-lime-pie').includes('165°F'));
  // Pork sausage 160°F, chicken sausage swap 165°F.
  const sausage = read('sheet-pan-italian-sausage-dinner');
  assert.match(sausage, /reach 160°F in the center/);
  assert.match(sausage, /Raw chicken sausage[\s\S]*?Roast it to 165°F/);
});

test('pho stages distinguish cooked brisket from raw eye of round', () => {
  const source = read('pho-bo-beef-pho');
  const { data, content } = matter(source);
  // The eye of round enters the step through {{ingredients}}, so find the step by id.
  const slice = data.formula.steps.find((step) => step.id === 'slice');
  assert.ok(slice, 'pho: no step slices the brisket and sets out the raw eye of round');
  // The simmered brisket is sliced cold. The raw slices are kept apart from it.
  assert.match(slice.text, /slice the cold brisket[\s\S]*?keeping the raw slices apart/i);
  assert.match(
    content,
    /^\d+\. \*\*Slice the beef:\*\* While the noodles soak, slice the cold brisket thinly across the grain\./m
  );
  // The raw beef is cooked by broth at a rolling boil, poured over at assembly.
  assert.match(
    content,
    /Top the noodles with the brisket and the raw eye of round\. Ladle the boiling broth over the beef/
  );
  // The brisket is simmered until tender before it is pulled.
  assert.match(content, /when a chopstick slides through the brisket easily, lift it out/);
});

test('buddha bowl proteins are all cooked and ready to eat', () => {
  const { data } = matter(read('rice-bowl-station-buddha-bowls'));
  const start = data.ingredients.findIndex((line) => /^---.*Protein/.test(line));
  assert.ok(start >= 0);
  const next = data.ingredients.findIndex((line, i) => i > start && /^---.*---$/.test(line));
  const proteins = data.ingredients.slice(start + 1, next);
  assert.ok(proteins.length >= 4);
  for (const protein of proteins)
    assert.match(protein, /roasted|baked|boiled|grilled|rotisserie|cooked/, protein);
});
