import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  mergePaprika,
  miseUid,
  sourceDigest,
  readPaprika,
  writePaprika,
} from '../sync-paprika.mjs';
import { parseRecipeContent } from '../../src/lib/recipe-content.mjs';
import { comparePaprika } from '../verify-paprika-sync.mjs';

const recipe = (slug) => ({
  slug,
  url: `https://jordansilton.com/mise/recipes/${slug}/`,
  data: { title: slug, ingredients: ['1 cup rice'], categories: ['base'] },
  parsed: parseRecipeContent(
    "## Chef's Note\n\nRinse the rice.\n\n## Directions\n\n1. Cook rice.\n"
  ),
});
const original = {
  uid: 'ORIGINAL-IDENTITY',
  name: 'Old title',
  ingredients: 'old',
  directions: 'old',
  notes: 'outdated note',
  rating: 5,
  categories: ['Favorites'],
  photo: 'photo.jpg',
  photo_hash: 'original-photo-hash',
  image_url: '',
  photo_data: 'original-image-data',
  photos: [{ name: 'Second photo', data: 'second-image-data' }],
  hash: 'native-hash',
  created: '2020-01-01 12:00:00',
  other_native_field: 'keep',
};
const plan = {
  recipes: [{ uid: original.uid, paprikaName: original.name, slug: 'rice', action: 'shared' }],
};

test('sync replaces cooking content while retaining native identity, photos, ratings and categories', () => {
  const before = structuredClone(original);
  const [merged] = mergePaprika([original], [recipe('rice')], plan);
  assert.equal(merged.name, 'rice');
  assert.equal(merged.ingredients, '1 cup rice');
  assert.match(merged.directions, /Cook rice/);
  assert.doesNotMatch(merged.notes, /outdated note/);
  for (const key of [
    'uid',
    'photo',
    'photo_hash',
    'photo_data',
    'photos',
    'hash',
    'created',
    'rating',
    'other_native_field',
  ])
    assert.deepEqual(merged[key], original[key], key);
  assert.deepEqual(merged.categories, ['Favorites', 'base']);
  assert.deepEqual(original, before);
});

test('repeated runs give Mise-only recipes the same UID and keep distinct variants', () => {
  const recipes = [recipe('rice'), recipe('rice-variant')];
  const first = mergePaprika([original], recipes, plan);
  const second = mergePaprika([original], recipes, plan);
  assert.deepEqual(first, second);
  assert.equal(first.length, 2);
  assert.equal(first[1].uid, miseUid('rice-variant'));
  assert.notEqual(first[0].uid, first[1].uid);
});

test('incomplete source drafts are preserved byte-for-byte as records', () => {
  const draft = { ...original, directions: '' };
  const draftPlan = { recipes: [{ ...plan.recipes[0], action: 'draft' }] };
  const merged = mergePaprika([draft], [recipe('unrelated')], draftPlan);
  assert.deepEqual(merged[0], draft);
  assert.equal(merged.length, 2);
});

test('source drift, duplicates and missing canonical recipes stop an unreviewed merge', () => {
  assert.throws(
    () => mergePaprika([{ ...original, uid: 'UNKNOWN' }], [recipe('rice')], plan),
    /set mismatch/
  );
  assert.throws(
    () => mergePaprika([{ ...original, name: 'Changed' }], [recipe('rice')], plan),
    /source name changed/
  );
  const guardedPlan = { recipes: [{ ...plan.recipes[0], sourceDigest: sourceDigest(original) }] };
  assert.throws(
    () =>
      mergePaprika([{ ...original, notes: 'new personal note' }], [recipe('rice')], guardedPlan),
    /source content changed/
  );
  assert.throws(() => mergePaprika([original, original], [recipe('rice')], plan), /Duplicate/);
  assert.throws(() => mergePaprika([original], [recipe('different')], plan), /missing Mise recipe/);
});

test('native archive round-trip preserves full records and rejects corrupt files', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-sync-test-'));
  try {
    const file = path.join(dir, 'recipes.paprikarecipes');
    await writePaprika([original], file);
    assert.deepEqual(await readPaprika(file), [original]);
    await fs.writeFile(path.join(dir, 'corrupt.zip'), 'invalid zip');
    await assert.rejects(readPaprika(path.join(dir, 'corrupt.zip')));
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});

test('post-import comparison reports repeated category labels but rejects changed memberships', () => {
  const repeated = { ...original, categories: ['Favorites', 'Favorites'] };
  const result = comparePaprika([original], [repeated]);
  assert.equal(result.matched, true);
  assert.deepEqual(result.categoryLabelDuplicates, [
    { uid: original.uid, name: original.name, labels: ['Favorites'] },
  ]);
  assert.equal(comparePaprika([original], [{ ...original, categories: ['Other'] }]).matched, false);
  assert.equal(comparePaprika([original], [{ ...original, categories: [] }]).matched, false);
});

test('post-import verification rejects cooking, photo, rating and identity changes', () => {
  for (const field of [
    'description',
    'ingredients',
    'directions',
    'notes',
    'rating',
    'photo_data',
    'photo_hash',
  ]) {
    const actual = { ...original, [field]: 'changed' };
    assert.equal(comparePaprika([original], [actual]).matched, false, field);
  }
  assert.equal(comparePaprika([original], [{ ...original, photos: [] }]).matched, false);
  assert.equal(comparePaprika([original], [{ ...original, uid: 'NEW' }]).matched, false);
  assert.equal(comparePaprika([original], [original, original]).matched, false);
  assert.equal(comparePaprika([], []).matched, false);
});
