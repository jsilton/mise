import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import matter from 'gray-matter';
import { cookingHash, assertOriginalPreservation } from '../lib/recipe-preservation.mjs';

const slug = 'tarragon-potatoes';
const recipe = { slug, ...matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8')) };

test('user-preserved original passes the note requirement without acquiring review or yield claims', () => {
  assert.equal(assertOriginalPreservation(recipe), true);
  assert.equal(recipe.data.learning, undefined);
  assert.equal(recipe.data.servings, undefined);
  assert.equal(recipe.content.includes("## Chef's Note"), false);
  const result = spawnSync(
    process.execPath,
    ['scripts/lint-recipe.mjs', `src/content/recipes/${slug}.md`],
    { encoding: 'utf8' }
  );
  assert.equal(result.status, 0, result.stdout + result.stderr);
});

test('preservation rejects cooking or metadata additions and is not a general note exemption', () => {
  assert.throws(
    () =>
      assertOriginalPreservation({ ...recipe, content: recipe.content + '\nServe with lemon.' }),
    /no longer matches/
  );
  assert.throws(
    () => assertOriginalPreservation({ ...recipe, data: { ...recipe.data, servings: '6' } }),
    /no longer matches/
  );
  assert.equal(assertOriginalPreservation({ ...recipe, slug: 'other-potatoes' }), false);
});

test('even a matching preservation hash cannot certify a reviewed or generated formula', () => {
  for (const added of [
    { learning: { review: { status: 'editorial-review' } } },
    { formula: { version: 1 } },
  ]) {
    const changed = { ...recipe, data: { ...recipe.data, ...added } };
    const manifest = {
      [slug]: {
        status: 'original-preserved-by-user',
        record: `docs/reviews/${slug}.md`,
        cookingSha256: cookingHash(changed),
      },
    };
    assert.throws(() => assertOriginalPreservation(changed, manifest), /no longer matches/);
  }
});

test('public text hash ignores private identity and source-property ordering, preserving export binding privacy', () => {
  const reordered = { ...recipe, data: Object.fromEntries(Object.entries(recipe.data).reverse()) };
  assert.equal(cookingHash(reordered), cookingHash(recipe));
  assert.equal(
    cookingHash({ ...recipe, data: { ...recipe.data, miseId: 'private-test-only' } }),
    cookingHash(recipe)
  );
});
