import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildSearchItem,
  createSearchIndex,
  lessonForQuery,
  queryTokens,
  searchRecipes,
  tokenize,
  withinOneEdit,
  wordForms,
} from '../../src/lib/recipe-search.mjs';
import { QUICK_PICKS, COURSES } from '../../src/lib/quick-picks.mjs';
import { timeBand } from '../../src/lib/time-band.mjs';
import { lessons, loadRecipes, loadSearchItems } from './helpers-search-index.mjs';

// A small made-up collection for the matching rules.
const recipe = (slug, title, ingredients, data = {}) => ({
  slug,
  data: { title, ingredients, ...data },
});
const small = createSearchIndex(
  [
    recipe('dal-tadka', 'Dal Tadka', ['1 cup mung dal', '1/2 tsp fine salt'], {
      dietary: ['vegetarian', 'nut-free', 'vegan-option'],
      cuisines: ['Indian'],
      role: 'main',
    }),
    recipe('roast-chicken', 'Roast Chicken', ['1 whole chicken', '2 tsp kosher salt'], {
      cookingMethods: ['roast'],
      role: 'main',
    }),
    recipe('tomato-soup', 'Tomato Soup', ['2 lb tomatoes', '1 tsp salt', '2 large eggs'], {
      dietary: ['vegetarian', 'gluten-free'],
      role: 'main',
    }),
    recipe('egg-salad', 'Egg Salad', ['6 large eggs', '1 tsp salt', '1/4 cup walnuts']),
    recipe('green-salad', 'Green Salad', ['1 head lettuce', '1 tomato, diced', 'pinch salt'], {
      role: 'side',
    }),
    recipe('chicken-pieces', 'Braised Thighs', ['2 lb chicken pieces', '1 tsp salt']),
  ].map((r) => buildSearchItem(r, r.slug === 'roast-chicken' ? { lessons: ['browning'] } : {}))
);
const slugs = (q, index = small) => searchRecipes(q, index).map((r) => r.slug);

test('tokenize lowercases, strips accents and keeps free-from words whole', () => {
  assert.deepEqual(tokenize('Phở Gà (Chicken Pho)'), ['pho', 'ga', 'chicken', 'pho']);
  assert.deepEqual(tokenize('Gluten-Free flour'), ['gluten_free', 'flour']);
  assert.deepEqual(tokenize('gluten free'), ['gluten_free']);
});

test('filler words drop out of the query', () => {
  assert.deepEqual(queryTokens('What can I make with chicken and spinach'), ['chicken', 'spinach']);
  // Filler words alone and single letters are not a search.
  assert.deepEqual(queryTokens('the'), []);
  assert.deepEqual(queryTokens('a'), []);
  assert.deepEqual(queryTokens('c'), []);
  assert.deepEqual(slugs('a'), []);
  assert.deepEqual(slugs('what can I make'), []);
});

test('simple plurals and one-letter typos', () => {
  assert.ok(wordForms('eggs').includes('egg'));
  assert.ok(wordForms('tomatoes').includes('tomato'));
  assert.ok(wordForms('berries').includes('berry'));
  assert.ok(wordForms('leaves').includes('leaf'));
  assert.ok(wordForms('knives').includes('knife'));
  assert.ok(withinOneEdit('chiken', 'chicken'));
  assert.ok(withinOneEdit('chikcen', 'chicken'));
  assert.ok(!withinOneEdit('browning', 'brownie'));
});

test('a short word matches whole words only, never the inside of another word', () => {
  assert.deepEqual(slugs('dal'), ['dal-tadka']);
  assert.deepEqual(slugs('alt'), []);
  // "pie" must not find "chicken pieces".
  assert.deepEqual(slugs('pie'), []);
});

test('a longer word matches word prefixes', () => {
  assert.deepEqual(slugs('chick'), ['roast-chicken', 'chicken-pieces']);
  assert.deepEqual(slugs('toma'), ['tomato-soup', 'green-salad']);
});

test('every word must match', () => {
  assert.deepEqual(slugs('tomato egg'), ['tomato-soup']);
  assert.deepEqual(slugs('chicken dal'), []);
});

test('plurals match both ways', () => {
  assert.deepEqual(slugs('eggs'), ['egg-salad', 'tomato-soup']);
  assert.deepEqual(slugs('egg'), ['egg-salad', 'tomato-soup']);
  assert.deepEqual(slugs('tomatoes'), ['tomato-soup', 'green-salad']);
});

test('title hits rank above tag hits above ingredient hits above body hits', () => {
  const results = searchRecipes('salad', small);
  assert.deepEqual(
    results.map((r) => r.slug),
    ['egg-salad', 'green-salad']
  );
  assert.equal(searchRecipes('egg', small)[0].matchType, 'title');
  assert.equal(searchRecipes('egg', small)[1].matchType, 'ingredients');
  assert.equal(searchRecipes('vegetarian', small)[0].matchType, 'tags');
  assert.equal(searchRecipes('browning', small)[0].matchType, 'body');
  // "roast" is a title word in one recipe and a method tag in the same one.
  assert.equal(searchRecipes('roast', small)[0].matchType, 'title');
});

test('tags are searchable and free-from tags do not leak', () => {
  assert.deepEqual(slugs('vegetarian'), ['dal-tadka', 'tomato-soup']);
  assert.deepEqual(slugs('indian'), ['dal-tadka']);
  assert.deepEqual(slugs('gluten free'), ['tomato-soup']);
  assert.deepEqual(slugs('gluten-free'), ['tomato-soup']);
  // "nut" does not find recipes tagged nut-free, and "vegan-option" is not vegan.
  assert.deepEqual(slugs('nut'), []);
  assert.deepEqual(slugs('vegan'), []);
  assert.deepEqual(slugs('sides'), ['green-salad']);
});

test('typos are forgiven only for 5+ letter words and only when nothing else matches', () => {
  assert.deepEqual(slugs('chiken'), ['roast-chicken', 'chicken-pieces']);
  assert.deepEqual(slugs('tomatoe soup'), ['tomato-soup']);
  // Four letters: no typo allowance.
  assert.deepEqual(slugs('sald'), []);
  // "salad" matches exactly, so the typo pass never runs and adds nothing.
  assert.deepEqual(slugs('salad'), ['egg-salad', 'green-salad']);
});

test('a technique word names its lesson', () => {
  assert.equal(lessonForQuery('browning', lessons)?.slug, 'browning');
  assert.equal(lessonForQuery('stir frying', lessons)?.slug, 'stir-frying');
  assert.equal(lessonForQuery('brownies', lessons), null);
  assert.equal(lessonForQuery('chicken', lessons), null);
});

// The real collection: the searches from the Nov 2026 review.
const recipes = loadRecipes();
const items = loadSearchItems(recipes);
const index = createSearchIndex(items);
const bySlug = new Map(recipes.map((r) => [r.slug, r]));
const titles = (q, n = 12) =>
  searchRecipes(q, index)
    .slice(0, n)
    .map((r) => r.title);
const text = (slug) => JSON.stringify(items.find((i) => i.slug === slug)).toLowerCase();

test('short words no longer flood: dal, rice, pie', () => {
  const dal = searchRecipes('dal', index);
  assert.equal(dal[0].slug, 'dal-tadka');
  assert.ok(dal.length <= 10, `dal returned ${dal.length}`);
  for (const r of dal) assert.match(text(r.slug), /\bdals?\b/);

  const rice = searchRecipes('rice', index);
  assert.ok(rice.length > 20 && rice.length < 150, `rice returned ${rice.length}`);
  for (const r of rice) assert.match(text(r.slug), /\brice/);

  const pie = searchRecipes('pie', index);
  assert.ok(pie.length >= 8 && pie.length < 40, `pie returned ${pie.length}`);
  for (const r of pie) assert.match(text(r.slug), /\bpies?\b/);
});

test('recipes named for the word come first', () => {
  for (const [q, re] of [
    ['rice', /\brice\b/i],
    ['pie', /\bpies?\b/i],
    ['egg', /\beggs?/i],
  ]) {
    const top = titles(q, 8);
    for (const t of top) assert.match(t, re, `"${q}" ranked "${t}" in the first 8`);
  }
});

test('"chicken spinach" finds the recipes that use both', () => {
  const both = recipes.filter((r) => {
    const names = (r.data.ingredients || []).join(' ').toLowerCase();
    return /\bchicken\b/.test(names) && /\bspinach\b/.test(names);
  });
  assert.ok(both.length >= 10);
  const hits = new Set(slugs('chicken spinach', index));
  for (const r of both) assert.ok(hits.has(r.slug), `${r.slug} has both and was not found`);
  assert.ok(
    searchRecipes('chicken spinach', index).some((r) => r.title === 'Spinach Lemon Chicken')
  );
  assert.ok(hits.size <= both.length + 10, `chicken spinach returned ${hits.size}`);
  assert.deepEqual(slugs('what can I make with chicken and spinach', index), [...hits]);
});

test('tag words match what the chips and buttons show', () => {
  const pickCount = (key) => {
    const pick = QUICK_PICKS.find((p) => p.key === key);
    return recipes.filter((r) => pick.test(r.data, timeBand(r.data.totalTime).minutes)).length;
  };
  const tagHits = (q) => searchRecipes(q, index).filter((r) => r.matchType !== 'body');
  assert.ok(tagHits('vegetarian').length >= pickCount('veg'));
  assert.ok(tagHits('kid friendly').length >= pickCount('kids'));
  assert.ok(tagHits('weeknight').length >= pickCount('weeknight'));
  const desserts = recipes.filter((r) => r.data.role === 'dessert').length;
  assert.ok(COURSES.some((c) => c.key === 'dessert'));
  assert.ok(tagHits('dessert').length >= desserts);
  assert.ok(searchRecipes('breakfast', index).length >= 10);
  assert.ok(searchRecipes('freezer', index).length >= 2);
  const italian = recipes.filter((r) => (r.data.cuisines || []).includes('Italian')).length;
  assert.ok(searchRecipes('italian', index).length >= italian);
  const glutenFree = recipes.filter((r) => (r.data.dietary || []).includes('gluten-free')).length;
  assert.ok(searchRecipes('gluten free', index).length >= glutenFree);
});

test('the placeholder words work: "browning" finds browning recipes, not brownies', () => {
  const results = searchRecipes('browning', index);
  assert.ok(results.length > 0);
  for (const r of results.slice(0, 24)) assert.doesNotMatch(r.title, /brownie/i);
  assert.equal(titles('dal', 1)[0], 'Dal Tadka');
  for (const t of titles('tacos', 5)) assert.match(t, /taco/i);
  for (const t of titles('chicken', 12)) assert.match(t, /chicken/i);
});

test('search stays fast on the full collection', () => {
  const queries = ['dal', 'rice', 'chicken spinach', 'vegetarian', 'chiken', 'zzzzzz'];
  // Run everything once first, so a cold runner is not timing the compiler.
  for (const q of queries) searchRecipes(q, index);
  const start = performance.now();
  for (const q of queries) searchRecipes(q, index);
  const each = (performance.now() - start) / queries.length;
  assert.ok(each < 200, `average ${each.toFixed(1)} ms per search`);
});

// Review fixes, Nov 2026.
const extra = createSearchIndex(
  [
    recipe('corn-salad', 'Corn Salad', ['4 ears corn', '1 tsp salt']),
    recipe('gravy', 'Pan Gravy', ['2 tbsp cornstarch', '2 cups stock']),
    recipe('cornbread', 'Cornbread', ['1 cup cornmeal']),
    recipe('pot-roast', 'Pot Roast', ['3 lb chuck roast', '1 lb potatoes']),
    recipe('mash', 'Potato Mash', ['2 lb potatoes', '2 bay leaves']),
    recipe('chicken-pasta', 'Chicken Pasta', ['1 lb chicken', '8 oz pasta', '1 bay leaf']),
    recipe('chicken-curry', 'Chicken Curry', ['1 lb chicken', '2 tbsp tomato paste'], {
      dietary: ['dairy-free', 'gluten-free', 'nut-free'],
    }),
    recipe('spritz', 'Citrus Spritz', ['1 orange'], {
      dietary: ['vegetarian', 'vegan'],
      role: 'drink',
    }),
    recipe('ribs', 'Pressure-Cooker Ribs', ['2 racks ribs', '1 cup barbecue sauce']),
    recipe('sliders', 'BBQ Sliders', ['12 slider buns']),
  ].map((r) => buildSearchItem(r))
);

test('a word the collection knows is never read as a prefix', () => {
  // "corn" is an ingredient, so it does not complete to cornstarch, cornmeal or Cornbread.
  assert.deepEqual(slugs('corn', extra), ['corn-salad']);
  assert.deepEqual(slugs('pot', extra), ['pot-roast']);
  // A word nothing is called still completes while typing.
  assert.deepEqual(slugs('cornst', extra), ['gravy']);
  assert.deepEqual(slugs('pota', extra), ['mash', 'pot-roast']);
  assert.deepEqual(slugs('chick', extra), ['chicken-curry', 'chicken-pasta']);
});

test('the typo pass loosens only the misspelled word', () => {
  // "pasta" must not turn into "paste" because "chiken" needed help.
  assert.deepEqual(slugs('chiken pasta', extra), ['chicken-pasta']);
});

test('leaf and leaves find the same recipes', () => {
  assert.deepEqual(slugs('bay leaves', extra), slugs('bay leaf', extra));
  assert.equal(slugs('bay leaf', extra).length, 2);
});

test('"gluten" and "dairy" alone find the free-from tags, short words do not', () => {
  assert.deepEqual(slugs('gluten', extra), ['chicken-curry']);
  assert.deepEqual(slugs('dairy', extra), ['chicken-curry']);
  assert.deepEqual(slugs('nut', extra), []);
});

test('drinks are not vegetarian or vegan hits, the same as the Vegetarian chip', () => {
  assert.deepEqual(slugs('vegetarian', extra), []);
  assert.deepEqual(slugs('vegan', extra), []);
});

test('instant pot and pressure cooker, bbq and barbecue find the same recipes', () => {
  assert.deepEqual(slugs('instant pot', extra), ['ribs']);
  assert.deepEqual(slugs('instant pot ribs', extra), ['ribs']);
  assert.deepEqual(slugs('pressure cooker', extra), ['ribs']);
  assert.deepEqual(slugs('bbq', extra), ['sliders', 'ribs']);
  assert.deepEqual(slugs('barbecue', extra), slugs('bbq', extra));
});

test('review probes on the real collection: corn, pot, pea, egg', () => {
  for (const [q, re] of [
    ['corn', /\bcorn\b/],
    ['pot', /\bpots?\b/],
    ['pea', /\bpeas?\b/],
    ['cream', /\bcreams?\b/],
  ]) {
    const results = searchRecipes(q, index);
    assert.ok(results.length > 0, q);
    for (const r of results) assert.match(text(r.slug), re, `"${q}" found ${r.slug}`);
  }
  assert.deepEqual(slugs('pea', index), slugs('peas', index));
  assert.deepEqual(slugs('egg', index), slugs('eggs', index));
  for (const r of searchRecipes('egg', index).slice(0, 12))
    assert.doesNotMatch(r.title, /eggplant/i);
  assert.deepEqual(new Set(slugs('bay leaves', index)), new Set(slugs('bay leaf', index)));
  assert.ok(slugs('gluten', index).length >= slugs('gluten free', index).length);
  assert.ok(slugs('dairy', index).length > 20);
  const pressure = titles('instant pot', 50).filter((t) => /pressure-cooker/i.test(t));
  assert.ok(pressure.length >= 3);
  assert.deepEqual(new Set(slugs('bbq', index)), new Set(slugs('barbecue', index)));
  assert.equal(searchRecipes('a', index).length, 0);
});

test('a vegetarian search agrees with the Vegetarian chip on drinks', () => {
  for (const r of searchRecipes('vegetarian', index).filter((x) => x.matchType === 'tags'))
    assert.notEqual(bySlug.get(r.slug).data.role, 'drink', r.slug);
});
