import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('meal bodies follow the recipe page voice rules', () => {
  const run = spawnSync('node', ['scripts/check-recipe-copy.mjs', '--meals'], { encoding: 'utf8' });
  assert.equal(run.status, 0, run.stdout);
  assert.match(run.stdout, /\d+ meals checked, 0 with errors\./);
});
