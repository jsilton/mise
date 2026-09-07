import test from 'node:test';
import assert from 'node:assert/strict';
import { scaleIngredient, formatYield } from '../../src/lib/quantities.mjs';
import { timeToMinutes, timeToISO } from '../../src/lib/time.mjs';
import { reviewRecipe } from '../recipe-editorial.mjs';

test('ingredient scaling handles fractions, decimals, unicode and ranges', () => {
  assert.equal(scaleIngredient('1/2 tsp salt', 2), '1 tsp salt');
  assert.equal(scaleIngredient('1.5 lbs broccoli', 2), '3 lbs broccoli');
  assert.equal(scaleIngredient('1 1/2 cups flour', 0.5), '3/4 cup flour');
  assert.equal(scaleIngredient('1½ cups milk', 2), '3 cups milk');
  assert.equal(scaleIngredient('1–2 tsp lemon', 2), '2–4 tsp lemon');
  assert.equal(scaleIngredient('1/8 tsp pepper', 0.5), '0.0625 tsp pepper');
});
test('equivalent weights scale but package sizes and cuts do not', () => {
  assert.equal(scaleIngredient('8 oz (225 g) pasta', 2), '16 oz (450 g) pasta');
  assert.equal(
    scaleIngredient('225 g (about 1 1/2 cups) pearl couscous', 0.5),
    '112 1/2 g (about 3/4 cup) pearl couscous'
  );
  assert.equal(
    scaleIngredient('1 1/2 cups (about 225 g) pearl couscous', 2),
    '3 cups (about 450 g) pearl couscous'
  );
  assert.equal(scaleIngredient('2 (14 oz) cans tomatoes', 2), '4 (14 oz) cans tomatoes');
  assert.equal(
    scaleIngredient('2 lbs beef, cut into 1.5-inch cubes', 2),
    '4 lbs beef, cut into 1.5-inch cubes'
  );
  assert.equal(
    scaleIngredient('2 tsp kosher salt or 1 tsp fine salt', 2),
    '4 tsp kosher salt or 2 tsp fine salt'
  );
});
test('litre equivalents scale together while bottle sizes stay fixed', () => {
  assert.equal(scaleIngredient('10 cups (2.4 L) cold water', 0.5), '5 cups (1.2 L) cold water');
  assert.equal(scaleIngredient('2 L (2000 ml) water', 0.5), '1 L (1000 ml) water');
  assert.equal(scaleIngredient('2 litres (2000 ml) water', 2), '4 litres (4000 ml) water');
  assert.equal(scaleIngredient('2 (1 L) bottles stock', 0.5), '1 (1 L) bottle stock');
});
test('additional measured amounts scale with their equivalent volumes', () => {
  assert.equal(
    scaleIngredient('1/2 cup (120 ml) milk, plus up to 1/4 cup (60 ml) more if needed', 0.5),
    '1/4 cup (60 ml) milk, plus up to 1/8 cup (30 ml) more if needed'
  );
  assert.equal(
    scaleIngredient('1/2 tsp pepper flakes, plus up to 1/2 tsp more', 0.5),
    '1/4 tsp pepper flakes, plus up to 1/4 tsp more'
  );
  assert.equal(
    scaleIngredient('1 tbsp juice, plus 1 tsp to taste', 2),
    '2 tbsp juice, plus 2 tsp to taste'
  );
  assert.equal(
    scaleIngredient('2 (14 oz) cans tomatoes, plus a 1-inch piece ginger', 0.5),
    '1 (14 oz) can tomatoes, plus a 1-inch piece ginger'
  );
});
test('unquantified amounts and exact original formatting survive reset', () => {
  assert.equal(scaleIngredient('Salt, to taste', 2), 'Salt, to taste');
  assert.equal(scaleIngredient('1½ cups milk', 1), '1½ cups milk');
  assert.equal(scaleIngredient('1/0 cup flour', 2), '1/0 cup flour');
  assert.equal(scaleIngredient('1 cup stock', NaN), '1 cup stock');
});
test('yield scaling handles portions and ranges without changing pan dimensions', () => {
  assert.equal(formatYield('4', 2), 'Serves 8');
  assert.equal(formatYield('6 side portions', 0.5), '3 side portions');
  assert.equal(formatYield('4–6 servings', 2), '8–12 servings');
  assert.equal(
    formatYield('1 (9-inch) cake', 2),
    'Original yield: 1 (9-inch) cake · 2× ingredients'
  );
  assert.equal(
    formatYield('5 (about 24 meatballs)', 2),
    'Original yield: 5 (about 24 meatballs) · 2× ingredients'
  );
});
test('roll yields scale both roll and cut-piece counts without scaling dimensions', () => {
  assert.equal(formatYield('4 rolls (32 pieces)', 0.5), '2 rolls (16 pieces)');
  assert.equal(formatYield('4 rolls (32 pieces)', 2), '8 rolls (64 pieces)');
  assert.equal(formatYield('2 rolls (16 pieces)', 0.5), '1 roll (8 pieces)');
  assert.equal(
    formatYield('1 roll (8 pieces)', 0.5),
    'Original yield: 1 roll (8 pieces) · 0.5× ingredients'
  );
  assert.equal(
    formatYield('4 rolls (19 cm each)', 2),
    'Original yield: 4 rolls (19 cm each) · 2× ingredients'
  );
  assert.equal(formatYield('4 rolls (32 pieces)', NaN), 'Original yield: 4 rolls (32 pieces)');
});
test('duration parsing handles hours and declines ambiguous timing', () => {
  assert.equal(timeToMinutes('1 hr 30 min'), 90);
  assert.equal(timeToMinutes('3.5 hr'), 210);
  assert.equal(timeToMinutes('15–20 min'), null);
  assert.equal(timeToMinutes('20 min + overnight'), null);
  assert.equal(timeToISO('3.5 hr'), 'PT210M');
  assert.equal(timeToISO('overnight'), undefined);
});
const base = {
  slug: 'sample',
  data: {
    title: 'Sample',
    ingredients: ['1 cup rice'],
    prepTime: '5 min',
    cookTime: '15 min',
    totalTime: '20 min',
    servings: '2',
  },
  content:
    "## Chef's Note\nA useful method.\n\n## Directions\n\n1. **Prep:** Rinse.\n2. **Cook:** Simmer.\n3. **Rest:** Cover.\n\n## Serving\nEnjoy.",
};
test('audit reads all directions and catches invalid step references', () => {
  const learning = {
    focus: 'Starch',
    outcome: 'Tender',
    storage: 'Chill',
    timing: '20 min',
    before: ['Rinse'],
    techniques: ['starch'],
    checkpoints: [{ step: 4 }],
    troubleshooting: [{ problem: 'Dry' }],
    sources: [{ url: 'https://example.org' }],
    review: { status: 'editorial-review' },
  };
  const result = reviewRecipe({ ...base, data: { ...base.data, learning } }, new Set(['sample']));
  assert.equal(result.stepCount, 3);
  assert.ok(result.issues.some((i) => i.code === 'invalid-checkpoint'));
});
test('kitchen-tested claims require evidence and links must resolve', () => {
  const result = reviewRecipe(
    {
      ...base,
      data: {
        ...base.data,
        pairsWith: ['missing'],
        learning: { review: { status: 'kitchen-tested' } },
      },
    },
    new Set(['sample'])
  );
  assert.ok(result.issues.some((i) => i.code === 'unsupported-testing-claim'));
  assert.ok(result.issues.some((i) => i.code === 'broken-reference'));
});
test('poultry checks flag missing endpoints without calling recipes unsafe', () => {
  const result = reviewRecipe(
    { ...base, data: { ...base.data, ingredients: ['2 chicken breasts'] } },
    new Set(['sample'])
  );
  assert.ok(
    result.issues.some((i) => i.code === 'poultry-endpoint-review' && i.severity === 'priority')
  );
  const complete = reviewRecipe(
    {
      ...base,
      data: { ...base.data, ingredients: ['2 chicken breasts'] },
      content: base.content.replace('Simmer.', 'Cook to 165°F.'),
    },
    new Set(['sample'])
  );
  assert.ok(!complete.issues.some((i) => i.code === 'poultry-endpoint-review'));
});

test('cooked rice does not hide a separate raw poultry ingredient from review', () => {
  const inspect = (ingredients) =>
    reviewRecipe({ ...base, data: { ...base.data, ingredients } }, new Set(['sample'])).issues.some(
      (issue) => issue.code === 'poultry-endpoint-review'
    );
  assert.equal(inspect(['1 lb ground turkey', '3 cups cooked rice']), true);
  assert.equal(inspect(['1 whole chicken', '2 cups cooked barley']), true);
  assert.equal(inspect(['2 cooked chicken breasts', '3 cups rice']), false);
});

test('promised poultry carryover remains a review item even when 165°F appears', () => {
  for (const [ingredient, instruction] of [
    ['2 chicken breasts', 'Pull at 160°F (it will carry to 165°F).'],
    ['2 chicken thighs', 'Carryover cooking will bring temp to 165°F.'],
    ['1 (14–16 lb) Young Turkey, thawed', 'Carryover heat will take it to the safe 165°F.'],
  ]) {
    const result = reviewRecipe(
      {
        ...base,
        data: { ...base.data, ingredients: [ingredient] },
        content: base.content.replace('Simmer.', instruction),
      },
      new Set(['sample'])
    );
    assert.ok(
      result.issues.some(
        (issue) => issue.code === 'poultry-carryover-review' && issue.severity === 'priority'
      ),
      instruction
    );
  }
});

test('measured endpoints and explicit cautions do not promise poultry carryover', () => {
  for (const instruction of [
    'Cook each breast to 165°F, measured at its center.',
    'Do not assume carryover heat will take it to 165°F. Measure each center before removal.',
  ]) {
    const result = reviewRecipe(
      {
        ...base,
        data: { ...base.data, ingredients: ['2 chicken breasts'] },
        content: base.content.replace('Simmer.', instruction),
      },
      new Set(['sample'])
    );
    assert.ok(!result.issues.some((issue) => issue.code === 'poultry-carryover-review'));
  }
});

test('scaled quantity labels agree without rewriting ingredient names or package sizes', () => {
  assert.equal(scaleIngredient('2 cloves garlic, minced', 0.5), '1 clove garlic, minced');
  assert.equal(scaleIngredient('1 small garlic clove, minced', 2), '2 small garlic cloves, minced');
  assert.equal(
    scaleIngredient('2 cups flour, plus 1 cup for dusting', 0.5),
    '1 cup flour, plus 1/2 cup for dusting'
  );
  assert.equal(scaleIngredient('1/2 cup flour', 3), '1 1/2 cups flour');
  assert.equal(scaleIngredient('1–2 cloves garlic', 0.5), '1/2–1 clove garlic');
  assert.equal(scaleIngredient('2 CUPS flour', 0.5), '1 CUP flour');
  assert.equal(scaleIngredient('2 (14 oz) cans tomatoes', 0.5), '1 (14 oz) can tomatoes');
  assert.equal(scaleIngredient('1 tsp ground cloves', 2), '2 tsp ground cloves');
  assert.equal(scaleIngredient('2 cups chopped eggs', 0.5), '1 cup chopped eggs');
  assert.equal(scaleIngredient('2 large eggs, beaten', 0.5), '1 large egg, beaten');
  assert.equal(scaleIngredient('2 large egg whites, beaten', 0.5), '1 large egg white, beaten');
  assert.equal(
    scaleIngredient('1 egg yolk, plus 1 egg white', 2),
    '2 egg yolks, plus 2 egg whites'
  );
  assert.equal(scaleIngredient('1 cup stock or 1 cup water', 2), '2 cups stock or 2 cups water');
  assert.equal(scaleIngredient('2 cloves garlic, minced', 1), '2 cloves garlic, minced');
});

test('counted produce scales its label without changing compound ingredients', () => {
  assert.equal(
    scaleIngredient('1 lemon, finely grated zest only', 2),
    '2 lemons, finely grated zest only'
  );
  assert.equal(scaleIngredient('1 small onion, finely diced', 2), '2 small onions, finely diced');
  assert.equal(scaleIngredient('2 limes, juiced', 0.5), '1 lime, juiced');
  assert.equal(scaleIngredient('1 tsp lemon zest', 2), '2 tsp lemon zest');
  assert.equal(scaleIngredient('1 lemon zest portion', 2), '2 lemon zest portion');
});

test('counted produce with modifiers and irregular plurals preserves ingredient distinctions', () => {
  assert.equal(scaleIngredient('2 Roma tomatoes, seeded', 0.5), '1 Roma tomato, seeded');
  assert.equal(
    scaleIngredient('1 large ripe but firm mango, peeled', 2),
    '2 large ripe but firm mangoes, peeled'
  );
  assert.equal(scaleIngredient('1 red bell pepper, sliced', 2), '2 red bell peppers, sliced');
  assert.equal(scaleIngredient('1/2 medium red onion, diced', 2), '1 medium red onion, diced');
  assert.equal(scaleIngredient('3 ripe Hass avocados', 0.5), '1 1/2 ripe Hass avocados');
  assert.equal(scaleIngredient('2 large CARROTS, sliced', 0.5), '1 large CARROT, sliced');
  assert.equal(scaleIngredient('1 cup Roma tomatoes, chopped', 2), '2 cups Roma tomatoes, chopped');
  assert.equal(scaleIngredient('1 tsp red onion powder', 2), '2 tsp red onion powder');
  assert.equal(scaleIngredient('1 red pepper flake portion', 2), '2 red pepper flake portion');
  assert.equal(scaleIngredient('2 (14 oz) cans tomatoes', 0.5), '1 (14 oz) can tomatoes');
});

test('plus-sign ingredient amounts scale without changing counted package sizes', () => {
  assert.equal(
    scaleIngredient('1 cup + 2 tbsp Granulated Sugar', 0.5),
    '1/2 cup + 1 tbsp Granulated Sugar'
  );
  assert.equal(
    scaleIngredient('1 cup + 2 tbsp Granulated Sugar', 2),
    '2 cups + 4 tbsp Granulated Sugar'
  );
  assert.equal(
    scaleIngredient('1/2 lb Ground Beef + 1/2 lb Ground Pork', 2),
    '1 lb Ground Beef + 1 lb Ground Pork'
  );
  assert.equal(
    scaleIngredient('1/3 cup Sugar + 1/2 tsp Cinnamon + 1/4 tsp Ginger', 3),
    '1 cup Sugar + 1 1/2 tsp Cinnamon + 3/4 tsp Ginger'
  );
  assert.equal(
    scaleIngredient('2 tbsp Mirin (or 1.5 tbsp honey + 0.5 tbsp soy sauce)', 2),
    '4 tbsp Mirin (or 3 tbsp honey + 1 tbsp soy sauce)'
  );
  assert.equal(
    scaleIngredient('2 cans (14 oz + 2 oz bonus) tomatoes', 2),
    '4 cans (14 oz + 2 oz bonus) tomatoes'
  );
  assert.equal(
    scaleIngredient('2 (14 oz + 2 oz bonus) cans tomatoes', 0.5),
    '1 (14 oz + 2 oz bonus) can tomatoes'
  );
  assert.equal(
    scaleIngredient('1/2 tsp cinnamon + Pinch of Nutmeg', 2),
    '1 tsp cinnamon + Pinch of Nutmeg'
  );
  assert.equal(
    scaleIngredient('1 cup sugar + a 2-inch cinnamon stick', 2),
    '2 cups sugar + a 2-inch cinnamon stick'
  );
});

test('a plus does not partially scale an unsupported parenthetical count alternative', () => {
  assert.equal(
    scaleIngredient('1 tsp seasoning (or 1 bay leaf + 1 tsp oregano)', 2),
    '2 tsp seasoning (or 1 bay leaf + 1 tsp oregano)'
  );
});

test('worded leading ranges scale both bounds without changing purpose or package text', () => {
  assert.equal(
    scaleIngredient('3 to 4 tbsp curry paste, to taste', 2),
    '6–8 tbsp curry paste, to taste'
  );
  assert.equal(scaleIngredient('8 to 8 1/2 cups flour', 0.5), '4–4 1/4 cups flour');
  assert.equal(
    scaleIngredient('1/4 to 1/2 cup water (to thin)', 0.5),
    '1/8–1/4 cup water (to thin)'
  );
  assert.equal(scaleIngredient('½ to ¾ tsp pepper', 2), '1–1 1/2 tsp pepper');
  assert.equal(scaleIngredient('1 TO 2 cups water', 2), '2–4 cups water');
  assert.equal(
    scaleIngredient('2 (14 oz) cans tomatoes, to drain', 2),
    '4 (14 oz) cans tomatoes, to drain'
  );
  assert.equal(scaleIngredient('1 cup ready-to-eat noodles', 2), '2 cups ready-to-eat noodles');
  assert.equal(scaleIngredient('3 to 4 tbsp curry paste', 1), '3 to 4 tbsp curry paste');
});

test('equivalent measured ranges scale while counted sizes stay fixed', () => {
  const stock = '1 1/2–2 1/2 cups (360–600 ml) stock';
  assert.equal(scaleIngredient(stock, 0.5), '3/4–1 1/4 cups (180–300 ml) stock');
  assert.equal(scaleIngredient(stock, 2), '3–5 cups (720–1200 ml) stock');
  assert.equal(
    scaleIngredient('1–2 cups (about 240 to 480 ml) water', 2),
    '2–4 cups (about 480–960 ml) water'
  );
  assert.equal(scaleIngredient('2 packages (400–500 g) tofu', 2), '4 packages (400–500 g) tofu');
  assert.equal(scaleIngredient('1 squash (about 3–4 lbs)', 2), '2 squash (about 3–4 lbs)');
  assert.equal(
    scaleIngredient('1 lb shrimp (20–24 per pound)', 2),
    '2 lb shrimp (20–24 per pound)'
  );
});

test('yield nouns follow scaled counts, including irregular plurals and modifiers', () => {
  for (const [input, factor, expected] of [
    ['1 loaf', 1, '1 loaf'],
    ['1 loaf', 2, '2 loaves'],
    ['1 loaf', 3, '3 loaves'],
    ['2 loaves', 0.5, '1 loaf'],
    ['1 loaf', 0.5, '1/2 loaf'],
    ['1–2 loaves', 0.5, '1/2–1 loaf'],
    ['1–2 loaves', 2, '2–4 loaves'],
    ['1 cocktail', 3, '3 cocktails'],
    ['2 side portions', 0.5, '1 side portion'],
    ['1 large batch', 2, '2 large batches'],
    ['1 large bundt cake', 2, '2 large bundt cakes'],
    ['2 cups drained onions, approximately', 0.5, '1 cup drained onions, approximately'],
    ['1 LOAF', 2, '2 LOAVES'],
    ['2 Loaves', 0.5, '1 Loaf'],
    ['1 ml sauce', 2, '2 ml sauce'],
    ['2 with rice or bread', 0.5, '1 with rice or bread'],
    ['1 shumai', 3, '3 shumai'],
  ])
    assert.equal(formatYield(input, factor), expected);
});
