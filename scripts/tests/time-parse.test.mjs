import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
import { parseTime, elapsedMinutes, timeToISODuration } from '../../src/lib/time-parse.mjs';
import { timeBand } from '../../src/lib/time-band.mjs';
import { quickPicksFor } from '../../src/lib/quick-picks.mjs';
import { buildRecipeSchema } from '../../src/lib/recipe-schema.mjs';

const recipes = fs
  .readdirSync('src/content/recipes')
  .filter((file) => file.endsWith('.md'))
  .map((file) => ({
    slug: file.slice(0, -3),
    ...matter(fs.readFileSync(`src/content/recipes/${file}`, 'utf8')),
  }));

test('every written form of a time gives its full elapsed minutes', () => {
  const cases = [
    ['45 min', 45],
    ['45 minutes', 45],
    ['2 hr', 120],
    ['3.5 hr', 210],
    ['1 hr 30 min', 90],
    ['15–20 min', 20],
    ['15-20 min', 20],
    ['2–2 hr 30 min', 150],
    ['1 1/2–2 1/4 hr', 135],
    ['About 1¾–2¾ hr', 165],
    ['8 to 9 hr', 540],
    ['1 hr 45 min to 2 hr 15 min', 135],
    ['6 to 8 hr on low', 480],
    ['6 to 8 hr on low, plus 30 min to finish', 510],
    ['2–3 1/2 hr from scratch', 210],
    ['at least 30 min', 30],
    ['55 min, plus 1 hr cooling', 115],
    ['20 min, plus 1 hr 30 min chilling', 110],
    ['1 hr 45 min, plus 19 hr rising', 1245],
    ['1 hr 15 min, plus 4 hr chilling and 4 hr freezing', 555],
    ['50 min, plus 1–4 hr brining', 290],
    ['40 min, plus overnight soaking', 520],
    ['20 min + overnight', 500],
    ['1 hr, plus 1 day resting', 1500],
    ['30 min, plus 2 days curing', 2910],
    ['20 min, plus cooling', 20],
    ['1 hr 30 min, including 1 hr marinating', 90],
  ];
  for (const [text, minutes] of cases) assert.equal(elapsedMinutes(text), minutes, text);
});

test('a range keeps both ends, and a wait is kept apart from the leading time', () => {
  const brine = parseTime('50 min, plus 1–4 hr brining');
  assert.deepEqual(
    [brine.activeMax, brine.waitMin, brine.waitMax, brine.minMinutes, brine.minutes],
    [50, 60, 240, 110, 290]
  );
  const slow = parseTime('4 hr 30 min to 6 hr 30 min');
  assert.deepEqual([slow.activeMin, slow.activeMax, slow.waitMax], [270, 390, 0]);
});

test('an unclear time is not guessed', () => {
  for (const text of ['', undefined, null, 'Overnight', 'Varies with the batch', '0 min', 12]) {
    assert.equal(parseTime(text), null, String(text));
  }
  // A per-sheet time is not a total.
  assert.equal(parseTime('8 to 10 min per sheet'), null);
  assert.equal(timeToISODuration('overnight'), undefined);
});

test('JSON-LD durations are ISO 8601 and cover the full elapsed time (S046)', () => {
  assert.equal(timeToISODuration('55 min, plus 1 hr cooling'), 'PT1H55M');
  assert.equal(timeToISODuration('4 hr 30 min to 5 hr 30 min'), 'PT5H30M');
  assert.equal(timeToISODuration('1 hr 10 min, plus overnight chilling'), 'PT9H10M');
  assert.equal(timeToISODuration('20 min'), 'PT20M');
  assert.equal(timeToISODuration('6 to 8 hr on low', { ranges: false }), undefined);
  assert.equal(timeToISODuration('20 min, plus 1 hr soaking', { ranges: false }), 'PT1H20M');
  assert.equal(timeToISODuration('2 hr'), 'PT2H');
  assert.equal(timeToISODuration('1 hr 15 min, plus cooling'), undefined);
  assert.equal(timeToISODuration('at least 30 min'), undefined);
  const schema = buildRecipeSchema(
    {
      title: 'Slow pot',
      prepTime: '20 min, plus 1 hr soaking',
      cookTime: '6 to 8 hr on low',
      totalTime: '7 hr 20 min to 9 hr 20 min',
    },
    '## Directions\n\n1. **Cook:** Simmer.',
    'https://jordansilton.com/mise/recipes/slow-pot/'
  );
  assert.deepEqual(
    [schema.prepTime, schema.cookTime, schema.totalTime],
    ['PT1H20M', undefined, 'PT9H20M']
  );
});

test('every recipe totalTime parses and bands, and reaches JSON-LD unless its wait has no number', () => {
  const unparsed = [];
  for (const { slug, data, content } of recipes) {
    if (!data.totalTime) continue;
    const band = timeBand(data.totalTime);
    const schema = buildRecipeSchema(
      data,
      content,
      `https://jordansilton.com/mise/recipes/${slug}/`
    );
    if (band.band === 'none') {
      unparsed.push(`${slug}: ${data.totalTime}`);
      continue;
    }
    if (band.open) {
      assert.ok(!('totalTime' in schema), slug);
      continue;
    }
    const iso = (schema.totalTime || '').match(/^PT(?:(\d+)H)?(?:(\d+)M)?$/);
    assert.ok(iso && Number(iso[2] || 0) < 60, `${slug}: ${schema.totalTime}`);
    assert.equal(Number(iso[1] || 0) * 60 + Number(iso[2] || 0), band.minutes, slug);
  }
  assert.deepEqual(unparsed, []);
});

test('Under 30 min holds no recipe with a stated or unnumbered wait past 30 minutes', () => {
  const byslug = Object.fromEntries(recipes.map((r) => [r.slug, r.data]));
  for (const slug of [
    'old-fashioned-vanilla-ice-cream',
    'chocolate-pie',
    'overnight-oats',
    'easy-breakfast-yogurt-popsicles',
    'perfect-cranberry-sauce',
    'korean-style-tacos-with-kogi-bbq-sauce',
  ]) {
    assert.ok(byslug[slug], slug);
    assert.ok(!quickPicksFor(byslug[slug]).includes('under30'), slug);
    assert.equal(timeBand(byslug[slug].totalTime).band, 'long', slug);
  }
  for (const { slug, data } of recipes) {
    if (!quickPicksFor(data).includes('under30')) continue;
    const time = timeBand(data.totalTime);
    assert.ok(time.minutes <= 30 && !time.open, `${slug}: ${data.totalTime}`);
    assert.doesNotMatch(String(data.totalTime), /overnight/i, slug);
  }
  // The band and the pick agree in both directions.
  for (const { slug, data } of recipes) {
    if (timeBand(data.totalTime).band === 'quick')
      assert.ok(quickPicksFor(data).includes('under30'), `${slug}: ${data.totalTime}`);
  }
  assert.ok(quickPicksFor({ totalTime: '10 min, plus 20 min chilling' }).includes('under30'));
  assert.ok(
    !quickPicksFor({ totalTime: '25 min, with grains and proteins cooked ahead' }).includes(
      'under30'
    )
  );
  assert.ok(!quickPicksFor({ totalTime: '20 min, plus cooling' }).includes('under30'));
});
