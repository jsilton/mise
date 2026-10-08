import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
import { z } from 'astro/zod';
import {
  createFormulaSchema,
  formulaDirections,
  formulaIngredients,
} from '../../src/lib/recipe-formula.mjs';
const raw = fs.readFileSync(
  'src/content/recipes/sichuan-style-chicken-and-chinese-eggplant.md',
  'utf8'
);
const { data, content } = matter(raw);
test('chicken and eggplant preserves Chinese base, pantry options and one-load cooking', () => {
  const formula = createFormulaSchema(z).parse(data.formula);
  assert.deepEqual(data.ingredients, formulaIngredients(formula));
  assert.ok(content.includes(formulaDirections(formula)));
  const component = (id) => formula.components.find((c) => c.id === id);
  const quantity = (c, id) => component(c).ingredients.find((i) => i.id === id).quantity.amount;
  assert.equal(quantity('eggplant', 'eggplant'), 1.5);
  assert.equal(quantity('chicken', 'chicken'), 1.6);
  assert.equal(quantity('chicken', 'cornstarch'), '1 1/2');
  assert.equal(quantity('sauce', 'cornstarch'), '1 1/2');
  assert.equal(quantity('aromatics', 'doubanjiang'), '1 1/2');
  assert.equal(quantity('aromatics', 'scallions'), 3);
  assert.equal(quantity('aromatics', 'garlic'), 6);
  assert.equal(quantity('sauce', 'black-vinegar'), 2);
  assert.equal(quantity('sauce', 'light-soy'), 1);
  assert.equal(quantity('finish', 'extra-soy'), '1 1/2');
  assert.equal(quantity('finish', 'extra-vinegar'), '1 1/2');
  assert.equal(quantity('sauce', 'dark-soy'), '1 1/2');
  assert.equal(quantity('sauce', 'sugar'), 1);
  assert.equal(quantity('sauce', 'broth'), 6);
  const substitutions = JSON.stringify(data.learning.substitutions);
  for (const exact of [
    '1 tbsp sweet miso',
    '1 1/2 tbsp sambal',
    '2 tbsp unseasoned rice vinegar',
    '1 1/2 tsp balsamic',
    '1/2 tsp Worcestershire',
    'Keep the garlic',
  ])
    assert.ok(substitutions.includes(exact));
  assert.equal(
    component('eggplant').ingredients.some((i) => i.id === 'cornstarch'),
    false
  );
  const directions = formulaDirections(formula);
  assert.match(directions, /all the dried eggplant at once/);
  assert.match(directions, /all the chicken at once/);
  assert.match(directions, /165°F \/ 74°C/);
  assert.equal(data.scaling.mode, 'fixed');
  assert.equal(data.learning.review.status, 'editorial-review');
  assert.doesNotMatch(raw, /Sentinel_|chatgpt\.com|paprikaUid/);
});
