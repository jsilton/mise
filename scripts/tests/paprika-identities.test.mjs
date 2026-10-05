import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  applyIdentities,
  assertPinnedRecipes,
  validateIdentities,
  readIdentities,
  registerIdentity,
  writeIdentities,
} from '../lib/paprika-identities.mjs';
import { createPaprikaRecipe } from '../lib/recipe-exports.mjs';
import { parseRecipeContent } from '../../src/lib/recipe-content.mjs';
import { mergePaprika } from '../sync-paprika.mjs';
import { withMiseId } from '../pin-paprika-ids.mjs';
import { checkPaprikaPrivacy } from '../check-paprika-privacy.mjs';

const registry = {
  version: 1,
  recipes: [
    {
      miseId: 'MISE-STABLE',
      paprikaUid: 'PAPRIKA-STABLE',
      additionalPaprikaUids: ['PAPRIKA-EXTRA'],
    },
  ],
  drafts: [{ miseId: 'MISE-DRAFT', paprikaUid: 'PAPRIKA-DRAFT' }],
};
const recipe = {
  slug: 'renamed-rice',
  url: 'https://jordansilton.com/mise/recipes/renamed-rice/',
  data: { miseId: 'MISE-STABLE', title: 'New rice title', ingredients: ['1 cup rice'] },
  parsed: parseRecipeContent('## Directions\n\n1. Cook rice.\n'),
};

test('private identity binding survives title and file renames and preserves additional IDs', () => {
  const [pinned] = applyIdentities([recipe], registry);
  assertPinnedRecipes([pinned]);
  assert.equal(createPaprikaRecipe(pinned).uid, 'PAPRIKA-STABLE');
  assert.deepEqual(pinned.data.paprikaAdditionalUids, ['PAPRIKA-EXTRA']);
  const originals = [
    { uid: 'PAPRIKA-STABLE', name: 'Old rice', rating: 5 },
    { uid: 'PAPRIKA-EXTRA', name: 'Other saved rice', rating: 0 },
  ];
  const plan = {
    recipes: originals.map((r) => ({
      uid: r.uid,
      paprikaName: r.name,
      slug: 'old-rice-filename',
      action: 'shared',
    })),
  };
  const merged = mergePaprika(originals, [pinned], plan);
  assert.deepEqual(
    merged.map((r) => r.uid),
    ['PAPRIKA-STABLE', 'PAPRIKA-EXTRA']
  );
  assert.ok(merged.every((r) => r.name === 'New rice title'));
});

test('Mise-only recipes reuse pinned IDs rather than deriving new IDs from renamed files', () => {
  const [pinned] = applyIdentities([recipe], registry);
  const entries = mergePaprika([{ uid: 'DRAFT', name: 'Saved draft' }], [pinned], {
    recipes: [{ uid: 'DRAFT', paprikaName: 'Saved draft', action: 'draft' }],
  });
  assert.equal(entries[1].uid, 'PAPRIKA-STABLE');
});

test('missing private mappings and duplicate identity assignments fail closed', async () => {
  assert.throws(() => createPaprikaRecipe(recipe), /restore the registry/);
  assert.throws(() => assertPinnedRecipes([recipe]), /missing pinned/);
  assert.throws(() => applyIdentities([recipe, recipe], registry), /duplicate stable/);
  assert.throws(
    () =>
      validateIdentities({
        ...registry,
        recipes: [...registry.recipes, { miseId: 'OTHER', paprikaUid: 'PAPRIKA-EXTRA' }],
      }),
    /duplicate pinned/
  );
  await assert.rejects(
    readIdentities(path.join(os.tmpdir(), 'missing-paprika-identity-registry.json')),
    /Restore/
  );
});

test('stable source IDs are added without changing recipe bodies or replacing existing IDs', () => {
  const text = '---\ntitle: Rice\ningredients: [rice]\n---\n\n## Directions\n\n1. Cook.\n';
  const pinned = withMiseId(text, 'KEEP-ME');
  assert.equal(pinned, text.replace('---\n', '---\nmiseId: KEEP-ME\n'));
  assert.equal(withMiseId(pinned, 'KEEP-ME'), pinned);
  assert.throws(() => withMiseId(pinned, 'REPLACEMENT'), /Cannot replace/);
});

test('new identity registration is persistent, private and repeatable', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-identity-'));
  try {
    const file = path.join(dir, 'private.json');
    await writeIdentities(structuredClone(registry), file);
    const first = await registerIdentity('NEW-MISE-ID', file);
    assert.equal(await registerIdentity('NEW-MISE-ID', file), first);
    assert.equal((await readIdentities(file)).recipes.length, 2);
    assert.equal((await fs.stat(file)).mode & 0o777, 0o600);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});

test('publication checks reject private IDs, identity fields and native archives', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-private-build-'));
  try {
    const file = path.join(dir, 'index.html');
    await fs.writeFile(file, '<h1>Rice</h1>');
    await checkPaprikaPrivacy(dir, registry);
    await fs.writeFile(file, 'PAPRIKA-STABLE');
    await assert.rejects(checkPaprikaPrivacy(dir, registry), /private recipe identity/);
    await assert.rejects(
      checkPaprikaPrivacy(dir, null, ['PAPRIKA-STABLE']),
      /private recipe identity/
    );
    await fs.writeFile(file, '{"miseId":"unlisted-id"}');
    await assert.rejects(checkPaprikaPrivacy(dir), /private recipe identity/);
    await fs.writeFile(file, 'Rice');
    await fs.writeFile(path.join(dir, 'recipes.paprikarecipes'), 'private');
    await assert.rejects(checkPaprikaPrivacy(dir), /private Paprika artifact/);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});
