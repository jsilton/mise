import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildAgentSearchRecord,
  createAgentIndex,
  parseAgentQuery,
  searchAgentIndex,
  renderMarkdown,
} from '../../src/lib/agent-search.mjs';

const recipe = (slug, data, body = '## Directions\n\n1. Cook it.\n') => ({
  slug,
  data: { role: 'main', ingredients: ['1 thing'], ...data },
  body,
});

const RECIPES = [
  recipe('chicken-broccoli-stir-fry', {
    title: 'Chicken and Broccoli Stir-Fry',
    totalTime: '25 min',
    occasions: ['weeknight', 'kid-friendly'],
    ingredients: ['1 lb chicken thighs', '1 head broccoli', '2 tbsp soy sauce'],
  }),
  recipe('lemon-rice', {
    title: 'Lemon Rice',
    role: 'side',
    totalTime: '20 min',
    dietary: ['vegan'],
    ingredients: ['1 cup basmati rice', '1 lemon', '1 tsp mustard seeds'],
  }),
  recipe('chicken-pot-pie', {
    title: 'Chicken Pot Pie',
    totalTime: '1 hr 30 min',
    ingredients: ['2 cups chicken', '1 cup peas', '1 pie crust', '1 cup mushrooms'],
  }),
  recipe('overnight-oats', {
    title: 'Overnight Oats',
    totalTime: '10 min, plus chilling',
    dietary: ['vegetarian'],
    occasions: ['breakfast'],
    ingredients: ['1 cup oats', '1 cup milk'],
  }),
  recipe('mushroom-pasta', {
    title: 'Mushroom Pasta',
    totalTime: '25 min',
    dietary: ['vegetarian'],
    occasions: ['weeknight', 'kid-friendly'],
    ingredients: ['8 oz pasta', '8 oz mushrooms', '1/2 cup parmesan'],
  }),
  recipe('tomato-pasta', {
    title: 'Fresh Tomato Pasta',
    totalTime: '20 min',
    dietary: ['vegetarian'],
    occasions: ['weeknight', 'kid-friendly'],
    ingredients: ['8 oz pasta', '4 tomatoes', '[basil oil](/mise/recipes/basil-oil/)'],
    pairsWith: ['lemon-rice'],
  }),
  recipe('thai-salad', {
    title: 'Thai Salad',
    role: 'side',
    totalTime: '15 min',
    ingredients: ['1 head cabbage', '2 tbsp fish sauce', '1 lime'],
  }),
  recipe('seared-salmon', {
    title: 'Seared Salmon',
    totalTime: '20 min',
    ingredients: ['2 salmon fillets', '1 lemon'],
  }),
];

const records = RECIPES.map(buildAgentSearchRecord);
const index = createAgentIndex(records);
const titles = (q, params) => searchAgentIndex(index, q, params).results.map((r) => r.title);

test('a whole question becomes filters, preferences and words', () => {
  const parsed = parseAgentQuery('vegetarian dinner under 30 minutes the kids will eat');
  assert.equal(parsed.filters.maxMinutes, 30);
  assert.deepEqual(parsed.filters.diets, ['vegetarian']);
  assert.equal(parsed.filters.role, 'main');
  assert.ok(parsed.preferences.some((p) => p.key === 'kids'));
  assert.deepEqual(parsed.words, []);
});

test('times are read the ways people write them', () => {
  assert.equal(parseAgentQuery('in half an hour').filters.maxMinutes, 30);
  assert.equal(parseAgentQuery('less than an hour').filters.maxMinutes, 60);
  assert.equal(parseAgentQuery('30-minute pasta').filters.maxMinutes, 30);
  assert.equal(parseAgentQuery('soup in 45 min or less').filters.maxMinutes, 45);
  assert.equal(parseAgentQuery('chicken', { max_minutes: '20' }).filters.maxMinutes, 20);
});

test('"without", "no" and allergies leave out ingredients, and diet phrases become diet filters', () => {
  assert.deepEqual(parseAgentQuery('pasta without mushrooms').filters.exclude, ['mushrooms']);
  assert.deepEqual(parseAgentQuery('cookies with no nuts').filters.exclude, ['nuts']);
  assert.deepEqual(parseAgentQuery('no shellfish or dairy').filters.exclude, ['shellfish', 'dairy']);
  assert.deepEqual(parseAgentQuery('allergic to peanuts').filters.exclude, ['peanuts']);
  assert.deepEqual(parseAgentQuery('gluten free dessert').filters.diets, ['gluten-free']);
});

test('lists, slashes and other ways of saying no all leave each item out', () => {
  const ex = (q) => parseAgentQuery(q).filters.exclude;
  assert.deepEqual(ex('cookies without dairy, eggs or nuts'), ['dairy', 'eggs', 'nuts']);
  assert.deepEqual(ex('allergic to dairy, eggs, peanuts, tree nuts, soy and sesame. what is for dinner'), [
    'dairy',
    'eggs',
    'peanuts',
    'tree nuts',
    'soy',
    'sesame',
  ]);
  assert.deepEqual(ex('dairy/egg free cake'), ['dairy', 'egg']);
  for (const q of ['excluding nuts', 'I do not want nuts in my cookies', 'allergic to any kind of nuts', 'cookies w/out nuts'])
    assert.deepEqual(ex(q), ['nuts'], q);
  assert.deepEqual(ex('dessert free from dairy'), ['dairy']);
  assert.deepEqual(parseAgentQuery("I can't have gluten").filters.diets, ['gluten-free']);
  assert.deepEqual(parseAgentQuery('chicken', { diet: 'gluten free' }).filters.diets, ['gluten-free']);
});

test('a list stops at a new "no", colons and "both" are skipped, and group names chain', () => {
  const ex = (q) => parseAgentQuery(q).filters.exclude;
  assert.deepEqual(ex('free of eggs; no dairy, muffins').slice(0, 2), ['eggs', 'dairy']);
  assert.deepEqual(ex('please exclude: dairy, eggs. dinner'), ['dairy', 'eggs']);
  assert.deepEqual(ex('allergic to both nuts and dairy'), ['nuts', 'dairy']);
  assert.deepEqual(ex('alergic to nuts'), ['nuts']);
  const chained = searchAgentIndex(index, 'pasta with no dairy eggs nuts');
  assert.deepEqual(chained.filters.exclude, ['dairy', 'eggs', 'nuts']);
});

test('the last item after a bare comma is left out only if recipes cook with it', () => {
  assert.deepEqual(searchAgentIndex(index, 'no mushrooms, pasta').filters.exclude, ['mushrooms']);
  assert.deepEqual(searchAgentIndex(index, 'no salmon, lemon').filters.exclude, ['salmon', 'lemon']);
});

test('a dish no fitting recipe is gets a plain "none fit", not other dishes', () => {
  const dishes = createAgentIndex(
    [
      ...['Pesto Pasta', 'Pasta Bake', 'Pasta Salad'].map((title, i) =>
        recipe(`pasta-${i}`, { title, ingredients: ['8 oz pasta', '1/2 cup parmesan'] })
      ),
      recipe('vegan-bowl', { title: 'Vegan Bowl', dietary: ['vegan'], ingredients: ['1 cup rice'] }),
    ].map(buildAgentSearchRecord)
  );
  const result = searchAgentIndex(dishes, 'vegan pasta');
  assert.equal(result.results.length, 0);
  assert.equal(result.noneFit, true);
  assert.match(renderMarkdown(result), /No recipe that fits the filters mentions pasta/);
});

test('a pairing question keeps its exclusion out of the dish it pairs with', () => {
  const parsed = parseAgentQuery('what goes with salmon, no dairy');
  assert.equal(parsed.pairFor, 'salmon');
  assert.deepEqual(parsed.filters.exclude, ['dairy']);
});

test('limit words are not searched for', () => {
  const parsed = parseAgentQuery('chicken in less than 30 minutes');
  assert.equal(parsed.filters.maxMinutes, 30);
  assert.deepEqual(parsed.words, ['chicken']);
});

test('a stray word is set aside when the filters can still answer', () => {
  const result = searchAgentIndex(index, 'vegetarian pasta for zzgrandma');
  assert.deepEqual(result.unmatched, ['zzgrandma']);
  assert.ok(result.results.length > 0);
  const aside = searchAgentIndex(index, 'vegetarian pie crust');
  assert.ok(aside.setAside.length > 0 && aside.results.length > 0, 'a word only one recipe uses is noise');
  assert.equal(searchAgentIndex(index, 'gluten free dessert for zoe').nothingMatched, false);
});

test('times that are not a limit are not read as one', () => {
  assert.equal(parseAgentQuery('at least 20 minutes chicken').filters.maxMinutes, 0);
  assert.equal(parseAgentQuery('marinate for 2 hours, ready in 45').filters.maxMinutes, 45);
  assert.equal(parseAgentQuery('about 20 minutes').filters.maxMinutes, 25);
  assert.equal(parseAgentQuery('an hour and a half').filters.maxMinutes, 90);
  assert.equal(parseAgentQuery('1 1/2 hours').filters.maxMinutes, 90);
});

test('adjectives that are also ingredients stay searchable', () => {
  assert.ok(parseAgentQuery('fresh pasta').words.includes('fresh'));
  assert.ok(parseAgentQuery('breakfast tacos').words.includes('breakfast'));
});

test('a title match ranks above an ingredient match', () => {
  assert.deepEqual(titles('lemon'), ['Lemon Rice', 'Seared Salmon']);
  assert.deepEqual(titles('chicken').slice(0, 2).sort(), ['Chicken Pot Pie', 'Chicken and Broccoli Stir-Fry']);
});

test('more matched words rank higher, and weak matches far below the best are dropped', () => {
  const top = titles('chicken broccoli rice');
  assert.equal(top[0], 'Chicken and Broccoli Stir-Fry');
  assert.ok(!top.includes('Overnight Oats'));
});

test('a group exclusion covers its ingredients, including linked sub-recipes', () => {
  assert.ok(!titles('salad without seafood').includes('Thai Salad'), 'fish sauce is seafood');
  assert.ok(!titles('pasta with no dairy').includes('Mushroom Pasta'), 'parmesan is dairy');
  const md = renderMarkdown(searchAgentIndex(index, 'pasta without peanuts'));
  assert.match(md, /No recipe lists peanuts/);
  assert.match(md, /allerg/i);
});

test('"what goes with" returns the listed pairings in both directions', () => {
  const result = searchAgentIndex(index, 'what goes with lemon rice');
  assert.deepEqual(result.results.map((r) => r.title), ['Fresh Tomato Pasta']);
});

test('the ingredient count filter skips salt, oil and water', () => {
  assert.equal(parseAgentQuery('dinner with 5 ingredients').filters.maxIngredients, 5);
  assert.ok(titles('pasta with 3 ingredients').includes('Mushroom Pasta'));
});

test('a question with no word any recipe uses returns nothing', () => {
  const result = searchAgentIndex(index, 'zzqx');
  assert.equal(result.nothingMatched, true);
  assert.equal(result.results.length, 0);
});

test('the query is escaped in Markdown so it cannot add links or headings', () => {
  const md = renderMarkdown(searchAgentIndex(index, 'salmon [click](https://evil.test) # hi'));
  assert.ok(!md.includes('[click](https://evil.test)'));
});

test('the time filter leaves out longer recipes and waits it cannot number', () => {
  const result = searchAgentIndex(index, 'vegetarian under 30 minutes');
  const found = result.results.map((r) => r.title);
  assert.ok(!found.includes('Overnight Oats'), 'an unnumbered chilling wait cannot be promised');
  assert.ok(!titles('chicken under 1 hour').includes('Chicken Pot Pie'));
});

test('excluded ingredients and diets are hard filters', () => {
  assert.deepEqual(titles('weeknight pasta without mushrooms'), ['Fresh Tomato Pasta']);
  assert.deepEqual(titles('vegan rice'), ['Lemon Rice']);
});

test('fish finds fish by name, not every recipe with fish sauce', () => {
  assert.deepEqual(titles('fish'), ['Seared Salmon']);
  assert.deepEqual(titles('fish sauce'), ['Thai Salad']);
});

test('preferences lift matching recipes without hiding the rest', () => {
  const found = titles('pasta for the kids');
  assert.equal(found.length, 2);
  assert.ok(found.indexOf('Fresh Tomato Pasta') >= 0 && found.indexOf('Mushroom Pasta') >= 0);
});

test('a word no recipe uses is reported and left out', () => {
  const result = searchAgentIndex(index, 'salmon for thanksgivingx');
  assert.deepEqual(result.unmatched, ['thanksgivingx']);
  assert.equal(result.results[0].title, 'Seared Salmon');
});

test('records carry only public fields and absolute links', () => {
  const record = buildAgentSearchRecord(
    recipe('secret', {
      title: 'Secret',
      miseId: 'abc-123',
      kb: { disable: ['x'] },
      audience: 'family',
      ingredients: ['[stock](/mise/recipes/stock/)'],
    })
  );
  const json = JSON.stringify(record);
  for (const key of ['miseId', 'abc-123', '"kb"', 'audience']) assert.ok(!json.includes(key), key);
  assert.equal(record.ingredients[0], '[stock](https://jordansilton.com/mise/recipes/stock/)');
  assert.equal(record.ingredientNames[0], 'stock');
  assert.equal(record.url, 'https://jordansilton.com/mise/recipes/secret/');
});

test('Directions steps and the Chef’s Note description are read from the Markdown', () => {
  const record = buildAgentSearchRecord(
    recipe(
      'dal',
      { title: 'Dal' },
      "## Chef's Note\n\nSoft lentils. A sizzling tadka. More words here.\n\n## Directions\n\n1. **Simmer:** Cook the [dal](https://x.test/).\n2. Finish it.\n"
    )
  );
  assert.equal(record.description, 'Soft lentils. A sizzling tadka.');
  assert.deepEqual(record.steps, ['Simmer: Cook the dal.', 'Finish it.']);
});

test('Markdown output links each recipe and lists its pairings', () => {
  const md = renderMarkdown(searchAgentIndex(index, 'tomato pasta'));
  assert.match(md, /\[Fresh Tomato Pasta\]\(https:\/\/jordansilton\.com\/mise\/recipes\/tomato-pasta\/\)/);
  assert.match(md, /\*\*Serve with:\*\* \[Lemon Rice\]/);
});

test('the Worker answers only /.well-known/search and validates its input', async () => {
  {
    const { createHandler } = await import('../../worker/agent-search/handler.mjs');
    const handleRequest = createHandler(records);
    const get = (path) => handleRequest(new Request(`https://search.test${path}`));
    assert.equal((await get('/elsewhere')).status, 404);
    const usage = await get('/.well-known/search');
    assert.equal(usage.status, 200);
    assert.match(await usage.text(), /GET \/\.well-known\/search\?q=/);
    assert.equal((await get(`/.well-known/search?q=${'a'.repeat(400)}`)).status, 400);
    const md = await get('/.well-known/search?q=salmon');
    assert.match(md.headers.get('content-type'), /text\/markdown/);
    assert.equal(md.headers.get('access-control-allow-origin'), '*');
    assert.match(await md.text(), /Seared Salmon/);
    const json = await (await get('/.well-known/search?q=salmon&format=json&limit=1')).json();
    assert.equal(json.results.length, 1);
    assert.equal(json.results[0].steps, undefined);
    assert.equal(
      (await handleRequest(new Request('https://search.test/.well-known/search', { method: 'POST' })))
        .status,
      405
    );
    assert.equal((await get('/mise/.well-known/search?q=salmon')).status, 200);
  }
});
