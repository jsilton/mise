import test from 'node:test';
import assert from 'node:assert/strict';
import { extractRecipeTargets } from '../lib/recipe-link-targets.mjs';

test('recipe links resolve with the site base, trailing slash, query and fragment', () => {
  const text =
    '[A](/mise/recipes/pita#oven) [B](/recipes/rice/?batch=2#directions) [C](/mise/recipes/sauce)';
  assert.deepEqual(extractRecipeTargets(text), ['pita', 'rice', 'sauce']);
});

test('unknown recipe paths remain checkable while other destinations are excluded', () => {
  const text =
    '[Missing](/mise/recipes/missing#step) [Wrong path](/recipes/pita/extra) [Lesson](/mise/learn/starch) [Source](https://example.com/recipes/pita)';
  const targets = extractRecipeTargets(text);
  const known = new Set(['pita']);
  assert.deepEqual(
    targets.filter((target) => !known.has(target)),
    ['missing', 'pita/extra']
  );
});
