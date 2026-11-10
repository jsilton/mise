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

test('gluten-free lint allows naturally gluten-free and labeled gluten-free flours', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mise-lint-gluten-'));
  try {
    for (const [ingredient, gluten] of [
      ['1 1/2 cups almond flour', false],
      ['1/4 cup coconut flour', false],
      ['1 cup rice flour', false],
      ['2 tbsp tapioca flour', false],
      ['1 cup cassava flour', false],
      ['1 cup chickpea flour', false],
      ['1 cup buckwheat flour', false],
      ['1 cup gluten-free oat flour', false],
      ['1 cup gluten-free flour', false],
      ['2 cups gluten-free all-purpose flour', false],
      ['1 1/4 cups gluten-free 1-to-1 baking flour with xanthan gum', false],
      ['--- Cupcakes ---', false],
      ['1 cup oat flour', true],
      ['2 cups all-purpose flour', true],
      ['1 cup almond flour and 1 cup all-purpose flour', true],
      ['1 cup almond flour, 2 tbsp flour for dusting', true],
    ]) {
      const file = path.join(dir, 'loaf.md');
      fs.writeFileSync(
        file,
        `---\ntitle: Loaf\ndietary: [gluten-free]\ningredients:\n  - "${ingredient}"\n---\n\n## Chef's Note\n\nBake the loaf until the center is set and the top is golden.\n\n## Directions\n\n1. Mix the batter.\n2. Bake until set.\n`
      );
      const result = spawnSync(process.execPath, ['scripts/lint-recipe.mjs', file], {
        encoding: 'utf8',
      });
      assert.equal(
        result.status,
        gluten ? 1 : 0,
        ingredient + '\n' + result.stdout + result.stderr
      );
      assert.equal(
        result.stdout.includes('Tagged gluten-free but ingredients contain'),
        gluten,
        ingredient
      );
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('dietary lint does not read butternut as butter or pepitas as pita', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mise-lint-words-'));
  try {
    for (const [ingredient, flagged] of [
      ['2 cups butternut squash, cubed', false],
      ['1/4 cup toasted pepitas', false],
      ['2 tbsp butter', true],
      ['4 pita breads', true],
      ['2 cups butternut squash, roasted in 2 tbsp butter', true],
      ['1/4 cup pepitas, with warm pita for serving', true],
    ]) {
      const file = path.join(dir, 'salad.md');
      fs.writeFileSync(
        file,
        `---\ntitle: Salad\ndietary: [vegan, gluten-free]\ningredients:\n  - "${ingredient}"\n---\n\n## Chef's Note\n\nRoast the squash until the edges brown and the centers are tender.\n\n## Directions\n\n1. Roast the squash.\n2. Toss and serve.\n`
      );
      const result = spawnSync(process.execPath, ['scripts/lint-recipe.mjs', file], {
        encoding: 'utf8',
      });
      assert.equal(result.status, flagged ? 1 : 0, ingredient + result.stdout + result.stderr);
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
