import { test } from 'node:test';
import assert from 'node:assert/strict';
import { timeBand, estimateTime } from '../../src/lib/time-band.mjs';

test('a plain total time is exact', () => {
  assert.deepEqual(
    [timeBand('45 minutes').minutes, timeBand('45 minutes').short, timeBand('45 minutes').exact],
    [45, '45 min', true]
  );
});

test('a cook-written total time is read from its leading time, using the top of a range', () => {
  const cases = [
    ['35–55 min, depending on basket capacity', 55, '35–55 min'],
    ['About 4 hr', 240, '4 hr'],
    ['About 1 1/2–2 hr, plus extra frosting chilling if needed', 120, '1 1/2–2 hr'],
    ['1 hr 40 min–2 hr 5 min', 125, '1 hr 40 min–2 hr 5 min'],
    ['2–2 hr 30 min', 150, '2–2 hr 30 min'],
    ['About 45 min (includes 10 min pan cooling)', 45, '45 min'],
    ['About 1 hr 15 min with the 30-minute marinade', 75, '1 hr 15 min'],
    ['15-20 min', 20, '15–20 min'],
    ['14–20 hours', 1200, '14–20 hr'],
  ];
  for (const [text, minutes, label] of cases) {
    assert.deepEqual(estimateTime(text), { minutes, label }, text);
  }
});

test('an unclear time stays unlisted rather than guessed', () => {
  for (const text of ['', 'Overnight', 'Varies with the batch', undefined]) {
    assert.equal(timeBand(text).band, 'none', String(text));
  }
});

test('a range is banded by its upper bound, so a quick pick never over-promises', () => {
  assert.equal(timeBand('20–35 min').band, 'hour');
  assert.equal(timeBand('About 25–30 min, plus oven heating if needed').band, 'quick');
});
