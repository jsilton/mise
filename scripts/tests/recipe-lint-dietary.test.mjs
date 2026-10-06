import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

test('vegetarian lint distinguishes celery ribs from meat ribs, including a mixed line', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mise-lint-dietary-'));
  try {
    for (const [ingredient, meat] of [
      ['2 celery ribs, thinly sliced', false],
      ['1 lb short ribs', true],
      ['2 celery ribs and 1 lb short ribs', true],
    ]) {
      const file = path.join(dir, 'soup.md');
      fs.writeFileSync(
        file,
        `---\ntitle: Soup\ndietary: [vegan]\ningredients:\n  - ${ingredient}\n---\n\n## Chef's Note\n\nCook the vegetables until they soften before adding the broth.\n\n## Directions\n\n1. Prepare the ingredients.\n2. Cook until tender.\n`
      );
      const result = spawnSync(process.execPath, ['scripts/lint-recipe.mjs', file], {
        encoding: 'utf8',
      });
      assert.equal(result.status, meat ? 1 : 0, result.stdout + result.stderr);
      assert.equal(result.stdout.includes('ingredients contain "ribs"'), meat);
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
