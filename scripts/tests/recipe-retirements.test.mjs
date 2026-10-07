import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const retirements = read('src/data/recipe-retirements.json');
const aliases = read('src/data/recipe-aliases.json');

test('user retirements preserve explicit dispositions without active recipes or replacement aliases', () => {
  assert.deepEqual(Object.keys(retirements).sort(), [
    'baked-chicken-and-broccoli',
    'peking-duck-an-easy-home-version',
    'weeknight-paella',
  ]);
  for (const [slug, decision] of Object.entries(retirements)) {
    assert.equal(decision.status, 'retired-by-user');
    assert.match(decision.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(decision.lastSourceSha256, /^[a-f0-9]{64}$/);
    assert.match(decision.lastSourceCommit, /^[a-f0-9]{40}$/);
    assert.equal(fs.existsSync(`src/content/recipes/${slug}.md`), false);
    assert.equal(aliases[slug], undefined);
    assert.equal(Object.values(aliases).includes(slug), false);
    assert(fs.existsSync(`src/pages/recipes/${slug}.astro`));
    assert.equal(decision.record, `docs/reviews/${slug}.md`);
    const review = read(`docs/reviews/${slug}.json`);
    assert.equal(review.retirement.completeEditorialReviewGranted, false);
    assert.equal(review.retirement.lastSourceSha256, decision.lastSourceSha256);
    assert(fs.existsSync(decision.record));
  }
});

test('retirements remain separately accounted for in original and additional registers', () => {
  const register = read('docs/recipe-review-register.json');
  const original = register.records.find((r) => r.slug === 'peking-duck-an-easy-home-version');
  const paella = register.records.find((r) => r.slug === 'weeknight-paella');
  const preserved = register.records.find((r) => r.slug === 'tarragon-potatoes');
  const additional = register.additionalRecords.find(
    (r) => r.slug === 'baked-chicken-and-broccoli'
  );
  assert.equal(original.status, 'retired-by-user');
  assert.equal(paella.status, 'retired-by-user');
  assert.equal(additional.status, 'retired-by-user');
  assert.equal(original.canonical, undefined);
  assert.equal(paella.canonical, undefined);
  assert.equal(preserved.status, 'original-preserved-by-user');
  assert.equal(register.retiredByUser, 2);
  assert.equal(register.additionalRetiredByUser, 1);
  assert.equal(register.originalsPreservedByUser, 1);
  assert.equal(register.additionalPreservedByUser, 0);
  assert.equal(
    register.originalRecipes,
    register.individuallyReviewed +
      register.consolidatedAfterReview +
      register.retiredByUser +
      register.originalsPreservedByUser +
      register.pending
  );
  assert.equal(
    register.additionalRecipes,
    register.additionalIndividuallyReviewed +
      register.additionalRetiredByUser +
      register.additionalPreservedByUser +
      register.additionalPending
  );
  assert.equal(
    register.activeAdditionalRecipes,
    register.additionalRecipes - register.additionalRetiredByUser
  );
});
