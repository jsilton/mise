import test from 'node:test';
import assert from 'node:assert/strict';
import { reversePairings } from '../../src/lib/pairings.mjs';

const recipe = (slug, data) => ({ slug, data: { title: slug, ...data } });
const salad = recipe('salad', { role: 'side', cuisines: ['Italian'], pairsWith: ['cutlet'] });
const all = [
  salad,
  recipe('cutlet', { role: 'main', cuisines: ['Italian'], pairsWith: ['salad'] }),
  recipe('zuppa', {
    role: 'main',
    cuisines: ['Italian'],
    pairsWith: ['salad'],
    pairingNotes: { salad: 'Greens beside the soup.' },
  }),
  recipe('burger', { role: 'main', cuisines: ['American'], pairsWith: ['salad'] }),
  recipe('curry', { role: 'main', cuisines: ['Thai'], pairsWith: ['rice'] }),
];

test('a side lists the dishes that name it, same cuisine first', () => {
  assert.deepEqual(reversePairings(salad, all), [
    { slug: 'zuppa', title: 'zuppa', note: 'Greens beside the soup.' },
    { slug: 'burger', title: 'burger', note: '' },
  ]);
});

test('a dish the side already lists is not repeated', () => {
  assert.ok(!reversePairings(salad, all).some((entry) => entry.slug === 'cutlet'));
});

test('mains get no reverse list and the list is capped', () => {
  assert.deepEqual(reversePairings(all[1], all), []);
  assert.equal(reversePairings(salad, all, 1).length, 1);
});
