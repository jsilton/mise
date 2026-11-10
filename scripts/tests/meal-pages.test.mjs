import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';
import { timeBand } from '../../src/lib/time-band.mjs';

const dir = 'src/content/meals';
const meals = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => ({ slug: f.slice(0, -3), raw: fs.readFileSync(`${dir}/${f}`, 'utf8') }))
  .map((m) => ({ ...m, ...matter(m.raw) }));
const recipe = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8')).data;

test('the meals folder holds only meal pages', () => {
  assert.deepEqual(
    fs.readdirSync(dir).filter((f) => !f.endsWith('.md')),
    []
  );
});

test('every meal is reviewed and shows servings and a readable elapsed time', () => {
  for (const { slug, data } of meals) {
    assert.equal(data.review?.status, 'editorial-review', `Unreviewed meal: ${slug}`);
    assert(fs.existsSync(`docs/meal-reviews/${slug}.md`), `Missing meal review record: ${slug}`);
    assert(data.servings, `Meal has no servings: ${slug}`);
    assert(timeBand(data.totalTime).minutes > 0, `Meal has no readable totalTime: ${slug}`);
    for (const key of ['totalPrepTime', 'totalCookTime', 'totalActiveTime', 'totalTime'])
      assert(!/^\d{3,} min$/.test(data[key] || ''), `${key} should use hours: ${slug}`);
  }
});

test('meal pages follow the page punctuation rules', () => {
  for (const { slug, raw } of meals) {
    assert(!raw.includes(';'), `Semicolon in meal: ${slug}`);
    assert(!/[a-z)*] - [A-Za-z]/.test(raw), `Hyphen used as a dash in meal: ${slug}`);
    assert(!/—| – /.test(raw), `Dash used as punctuation in meal: ${slug}`);
  }
});

test('meal time and servings fixes hold against their recipes', () => {
  const by = Object.fromEntries(meals.map((m) => [m.slug, m.data]));
  const ramen = by['tonkotsu-ramen-project'];
  assert.equal(ramen.servings, String(recipe('tonkotsu-style-ramen').servings));
  assert.equal(ramen.base, undefined);
  assert(timeBand(ramen.totalTime).minutes >= 9.5 * 60);
  const pizza = by['friday-pizza-night'];
  assert.equal(pizza.servings, '5');
  assert.match(pizza.totalTime, /19 hr rising/);
  assert.equal(pizza.base, undefined);
  assert.equal(by['sunday-roast-chicken-feast'].servings, '5');
  assert.equal(by['pad-thai-night'].servings, '6');
  assert.equal(by['quick-wonton-soup-supper'].main, 'quick-wonton-soup');
});
