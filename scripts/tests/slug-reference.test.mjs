import test from 'node:test';
import assert from 'node:assert/strict';
import { containsSlugToken } from '../lib/slug-reference.mjs';

test('aliases match complete YAML and link slugs without rejecting longer canonical names', () => {
  const alias = 'shrimp-with-snow-peas';
  for (const text of [
    'pairsWith: [shrimp-with-snow-peas]',
    "main: 'shrimp-with-snow-peas'",
    '[Dinner](/mise/recipes/shrimp-with-snow-peas/?scale=2#directions)',
    '[Dinner](../recipes/shrimp-with-snow-peas)',
  ])
    assert.equal(containsSlugToken(text, alias), true, text);
  for (const text of [
    'stir-fried-shrimp-with-snow-peas-and-ginger',
    '[Source](https://example.com/recipes/7036-stir-fried-shrimp-with-snow-peas-and-ginger)',
    'shrimp-with-snow-peas-and-noodles',
  ])
    assert.equal(containsSlugToken(text, alias), false, text);
});
