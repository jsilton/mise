import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { gzipSync } from 'node:zlib';
import { loadRecipes, createPaprikaRecipe } from '../lib/recipe-exports.mjs';
import { exportJsonLd } from '../export-jsonld.mjs';
import { exportText } from '../export-text.mjs';
import { exportPaprika, validatePaprikaArchive } from '../export-paprika.mjs';

test('both exporters and combined text round-trip validated source content', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-export-'));
  try {
    const recipes = (await loadRecipes()).slice(0, 2);
    assert.equal(await exportJsonLd(path.join(dir, 'recipes.json'), recipes), 2);
    assert.equal(await exportText(path.join(dir, 'recipes.txt'), recipes), 2);
    const archive = path.join(dir, 'recipes.paprikarecipes');
    assert.equal(await exportPaprika(archive, recipes), 2);
    assert.ok((await fs.stat(archive)).size > 0);
    assert.equal(await validatePaprikaArchive(archive, recipes), 2);
    assert.deepEqual((await fs.readdir(dir)).sort(), [
      'recipes.json',
      'recipes.paprikarecipes',
      'recipes.txt',
    ]);
    await assert.rejects(exportJsonLd(path.join(dir, 'empty.json'), []), /empty/);
    await assert.rejects(exportText(path.join(dir, 'empty.txt'), []), /empty/);
    await assert.rejects(exportPaprika(path.join(dir, 'empty.paprikarecipes'), []), /empty/);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});

test('packaging failures reject and leave the prior artifact intact', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-failed-'));
  try {
    const recipes = (await loadRecipes()).slice(0, 1);
    const output = path.join(dir, 'recipes.paprikarecipes');
    await fs.writeFile(output, 'prior artifact');
    await assert.rejects(
      exportPaprika(output, recipes, () => {
        throw new Error('zip unavailable');
      }),
      /zip unavailable/
    );
    assert.equal(await fs.readFile(output, 'utf8'), 'prior artifact');
    assert.deepEqual(await fs.readdir(dir), ['recipes.paprikarecipes']);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});

test('valid ZIP containers with missing recipes or empty directions still fail validation', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-bad-archive-'));
  try {
    const recipes = (await loadRecipes()).slice(0, 2);
    const output = path.join(dir, 'bad.zip');
    const first = createPaprikaRecipe(recipes[0]);
    first.directions = '';
    const file = `${recipes[0].slug}.paprikarecipe`;
    await fs.writeFile(path.join(dir, file), gzipSync(JSON.stringify(first)));
    execFileSync('zip', ['-q', output, file], { cwd: dir });
    await assert.rejects(validatePaprikaArchive(output, recipes), /set mismatch/);
    await assert.rejects(validatePaprikaArchive(output, recipes.slice(0, 1)), /incomplete recipe/);
    await fs.writeFile(output, '');
    await assert.rejects(validatePaprikaArchive(output, recipes), /empty/);
    await fs.writeFile(output, 'not a ZIP');
    await assert.rejects(validatePaprikaArchive(output, recipes));
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});
