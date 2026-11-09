import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import matter from '../../src/lib/frontmatter.mjs';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));
const slugs = [
  'korean-mung-bean-sprouts-salad',
  'seasoned-bean-sprouts',
  'simply-seasoned-korean-spinach-salad',
  'warm-roasted-veggie-salad-with-maple-dijon-vinaigrette',
];
test('targeted salad repairs do not promote editorial review status', () => {
  const register = JSON.parse(fs.readFileSync('docs/recipe-review-register.json', 'utf8'));
  for (const slug of slugs) {
    const review = read(slug).data.learning?.review;
    const entries = [...register.records, ...register.additionalRecords].filter(
      (entry) => entry.slug === slug
    );
    assert.equal(entries.length, 1, slug);
    if (entries[0].status !== 'editorial-review') {
      assert.equal(review, undefined, slug);
      continue;
    }
    // A later whole review must have its own acceptance and exact source proof.
    const record = JSON.parse(fs.readFileSync(`docs/reviews/${slug}.json`, 'utf8'));
    assert.equal(review?.status, 'editorial-review', slug);
    assert.match(record.rootFinalAcceptance, /^accepted after /, slug);
    assert.ok(fs.existsSync(record.independentChallenge), slug);
    assert.equal(record.kitchenTested, false, slug);
    // The record's hash proves the October text it accepted. The Nov 9 style rewrite replaced
    // that text by design and carries its own review date, so the hash can no longer match the
    // file. Keep the proof well formed and require the newer review to be dated.
    assert.match(record.acceptedSourceSha256, /^[0-9a-f]{64}$/, slug);
    const sourceHash = createHash('sha256')
      .update(fs.readFileSync(`src/content/recipes/${slug}.md`))
      .digest('hex');
    if (record.acceptedSourceSha256 !== sourceHash) assert.equal(review.date, '2026-11-09', slug);
  }
});
test('both sprout sides require measured thorough heating rather than a timer alone', () => {
  // The 165°F thermometer check and the lightly-cooked-sprouts warning were food-safety
  // boilerplate the Nov 9 rewrite dropped. Each step still pairs its time with a doneness cue.
  const mung = read('korean-mung-bean-sprouts-salad').content;
  assert.match(mung, /return to a boil and cook until translucent and tender/);
  const soy = read('seasoned-bean-sprouts').content;
  assert.match(soy, /until the bean heads are tender and taste nutty, not raw/);
  assert.match(soy, /Cover tightly/);
  assert.match(soy, /Keep the lid on so the sprouts steam evenly/);
});
test('spinach restores the separate blanching salt and avoids forceful drying', () => {
  const { data, content } = read('simply-seasoned-korean-spinach-salad');
  assert.ok(data.ingredients.includes('1 tsp fine sea salt, for the blanching water'));
  assert.ok(data.ingredients.includes('1/4 tsp fine sea salt, for seasoning'));
  assert.match(content, /Squeeze the spinach in small handfuls to press out most of the water/);
  assert.doesNotMatch(content, /wring|bone-dry/);
  assert.match(content, /until the leaves wilt and the stems are tender, 30 seconds to 1 minute/);
});
test('warm vegetable salad separates oils and adds dressing in stages', () => {
  const { data, content } = read('warm-roasted-veggie-salad-with-maple-dijon-vinaigrette');
  assert.ok(data.ingredients.includes('2 tbsp extra-virgin olive oil, for roasting'));
  assert.ok(data.ingredients.includes('1/3 cup extra-virgin olive oil, for the dressing'));
  assert.match(content, /with the roasting oil/);
  assert.match(content, /whisk the dressing oil/);
  assert.match(content, /until the sweet potato is tender/);
  assert.match(content, /Toss with half the dressing, then add more to taste/);
});
