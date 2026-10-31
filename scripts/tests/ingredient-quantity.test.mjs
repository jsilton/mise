import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitLeadingQuantity } from '../../src/lib/ingredient-quantity.mjs';

test('the amount at the front of an ingredient line is split off', () => {
  const cases = [
    ['1 cup (2 sticks) unsalted butter, softened', '1 cup (2 sticks)'],
    ['2 lb sunchokes (Jerusalem artichokes), scrubbed', '2 lb'],
    ['1/2 tsp Sea Salt', '1/2 tsp'],
    ['1 1/2 cups whole milk', '1 1/2 cups'],
    ['3 large Eggs, room temperature', '3 large'],
    ['18 Graham Crackers, crushed', '18'],
    ['2–3 tbsp olive oil', '2–3 tbsp'],
    ['½ cup sugar', '½ cup'],
    ['12 oz tomatillo salsa or enchilada sauce', '12 oz'],
    ['1 (14-ounce) can coconut milk', '1 (14-ounce) can'],
    ['4 garlic cloves, minced', '4'],
  ];
  for (const [line, qty] of cases) {
    const [lead, rest] = splitLeadingQuantity(line);
    assert.equal(lead, qty, line);
    assert.equal(lead + rest, line, 'nothing is lost');
  }
});

test('a line without an amount is left alone', () => {
  for (const line of [
    'Sea salt, to taste',
    'Red Pepper Flakes',
    'water, enough to boil the pasta',
    '',
  ]) {
    assert.deepEqual(splitLeadingQuantity(line), ['', line]);
  }
});

test('a number that is part of a name is not mistaken for an amount', () => {
  assert.deepEqual(splitLeadingQuantity('7Up, chilled'), ['', '7Up, chilled']);
});
