import test from 'node:test';
import assert from 'node:assert/strict';
import { validateMealCoverage } from '../lib/meal-coverage.mjs';

test('meal consolidation preserves every original without duplicating live content', () => {
  assert.doesNotThrow(() =>
    validateMealCoverage(['dinner-a', 'dinner-b'], ['dinner-b'], { 'dinner-a': 'dinner-b' })
  );
  assert.throws(
    () => validateMealCoverage(['dinner-a', 'dinner-b'], ['dinner-b'], {}),
    /Original meal disappeared/
  );
  assert.throws(
    () =>
      validateMealCoverage(['dinner-a', 'dinner-b'], ['dinner-a', 'dinner-b'], {
        'dinner-a': 'dinner-b',
      }),
    /duplicate content/
  );
});

test('meal redirects cannot target missing meals, redirect chains or cycles', () => {
  assert.throws(
    () => validateMealCoverage(['dinner-a'], [], { 'dinner-a': 'missing' }),
    /Missing canonical meal/
  );
  assert.throws(
    () =>
      validateMealCoverage(['dinner-a', 'dinner-b', 'dinner-c'], ['dinner-c'], {
        'dinner-a': 'dinner-b',
        'dinner-b': 'dinner-c',
      }),
    /chain or cycle/
  );
  assert.throws(
    () =>
      validateMealCoverage(['dinner-a', 'dinner-b'], [], {
        'dinner-a': 'dinner-b',
        'dinner-b': 'dinner-a',
      }),
    /chain or cycle/
  );
});

test('meal aliases must describe real original slugs and local destinations', () => {
  assert.throws(
    () => validateMealCoverage(['dinner-b'], ['dinner-b'], { invented: 'dinner-b' }),
    /not an original/
  );
  assert.throws(
    () => validateMealCoverage(['dinner-a'], [], { 'dinner-a': '../other' }),
    /Invalid meal alias/
  );
  assert.throws(
    () => validateMealCoverage(['dinner-a'], [], { 'dinner-a': null }),
    /Invalid meal alias/
  );
});
