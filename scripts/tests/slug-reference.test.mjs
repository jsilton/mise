import test from 'node:test';
import assert from 'node:assert/strict';
import { containsSlugToken, containsRecipeSlugReference } from '../lib/slug-reference.mjs';

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

test('external recipe provenance may retain an alias while stale local references still fail', () => {
  const slug = 'chinese-spicy-garlic-eggplant';
  const site = 'https://jordansilton.com/mise/';
  assert.equal(
    containsRecipeSlugReference(
      `sourceUrl: 'https://christieathome.com/blog/${slug}/#recipe'`,
      slug,
      site
    ),
    false
  );
  for (const text of [
    `pairsWith: [${slug}]`,
    `[Recipe](/mise/recipes/${slug}/)`,
    `[Recipe](https://jordansilton.com/mise/recipes/${slug}/)`,
    `[Source](https://example.com/${slug})\n[Recipe](/recipes/${slug})`,
  ])
    assert.equal(containsRecipeSlugReference(text, slug, site), true, text);
});

test('a same-slug meal URL is not a reference to the retired recipe', () => {
  const slug = 'weeknight-paella';
  const site = 'https://jordansilton.com/mise/';
  for (const text of [
    `<loc>https://jordansilton.com/mise/meals/${slug}/</loc>`,
    `[Dinner](/mise/meals/${slug}/?scale=2#strategy)`,
    `[Dinner](/meals/${slug})`,
    `[Dinner](../meals/${slug})`,
    `[Dinner](meals/${slug})`,
    `[Dinner](//jordansilton.com/mise/meals/${slug}/)`,
    `[Dinner](/mise/meals/another-meal/?recipe=${slug}#${slug})`,
  ])
    assert.equal(containsRecipeSlugReference(text, slug, site), false, text);
});

test('meal URLs cannot hide bare slugs or actual recipe URLs', () => {
  const slug = 'weeknight-paella';
  const site = 'https://jordansilton.com/mise/';
  const meal = `<loc>https://jordansilton.com/mise/meals/${slug}/</loc>`;
  for (const reference of [
    `main: '${slug}'`,
    `pairsWith: [${slug}]`,
    `<loc>https://jordansilton.com/mise/recipes/${slug}/</loc>`,
    `[Recipe](/recipes/${slug}?scale=2#directions)`,
    `[Recipe](../recipes/${slug})`,
    `[Recipe](recipes/${slug})`,
    `[Recipe](/mise/meals/../recipes/${slug}/)`,
    `[Recipe](/mise/recipes/%77eeknight-paella/)`,
  ])
    assert.equal(containsRecipeSlugReference(`${meal}\n${reference}`, slug, site), true, reference);
  assert.equal(
    containsRecipeSlugReference(
      `${meal}\n[Source](https://example.com/recipes/${slug}/)`,
      slug,
      site
    ),
    false
  );
});
