import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import matter from 'gray-matter';
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
    const sourceHash = createHash('sha256')
      .update(fs.readFileSync(`src/content/recipes/${slug}.md`))
      .digest('hex');
    assert.equal(record.acceptedSourceSha256, sourceHash, slug);
  }
});
test('both sprout sides require measured thorough heating rather than a timer alone', () => {
  for (const slug of slugs.slice(0, 2)) {
    const { content } = read(slug);
    assert.match(content, /above 165°F \/ 74°C/);
    assert.match(content, /Check the sprouts themselves with a food thermometer/);
    assert.match(content, /lightly cooked sprouts/);
  }
  assert.match(read('seasoned-bean-sprouts').content, /Open the lid if needed/);
});
test('spinach restores the separate blanching salt and avoids forceful drying', () => {
  const { data, content } = read('simply-seasoned-korean-spinach-salad');
  assert.ok(data.ingredients.includes('1 tsp fine sea salt, for blanching water'));
  assert.match(content, /squeeze gently/);
  assert.match(content, /Start checking at 30 seconds/);
});
test('warm vegetable salad separates oils and adds dressing in stages', () => {
  const { data, content } = read('warm-roasted-veggie-salad-with-maple-dijon-vinaigrette');
  assert.ok(data.ingredients.includes('2 tbsp extra-virgin olive oil, for roasting'));
  assert.ok(data.ingredients.includes('1/3 cup extra-virgin olive oil, for dressing'));
  assert.match(content, /sweet potato is fork-tender/);
  assert.match(content, /Add about half the dressing/);
  assert.match(content, /toss with tongs/);
});
