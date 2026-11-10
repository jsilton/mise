import { test } from 'node:test';
import assert from 'node:assert/strict';
import { timeBand, estimateTime } from '../../src/lib/time-band.mjs';

test('a plain total time is exact', () => {
  assert.deepEqual(
    [timeBand('45 minutes').minutes, timeBand('45 minutes').short, timeBand('45 minutes').exact],
    [45, '45 min', true]
  );
});

test('a cook-written total time uses the top of a range and marks an unnumbered wait', () => {
  const cases = [
    ['35–55 min, depending on basket capacity', 55, '35–55 min'],
    ['About 4 hr', 240, '4 hr'],
    ['About 1 1/2–2 hr, plus extra frosting chilling if needed', 120, '1 1/2–2 hr+'],
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
  assert.equal(timeBand('About 25–30 min').band, 'quick');
  assert.equal(timeBand('About 25–30 min, plus oven heating if needed').band, 'hour');
});

test('a "plus" wait counts toward the band, the sort and the card (S114, S019)', () => {
  const cases = [
    [
      '15 min, plus 6 hr 20 min chilling, churning and freezing',
      395,
      '15 min + 6 hr 20 min',
      'long',
    ],
    [
      '40 min, plus 6 hr 30 min chilling, churning and freezing',
      430,
      '40 min + 6 hr 30 min',
      'long',
    ],
    ['25 min, plus 1 hr pickling', 85, '25 min + 1 hr', 'long'],
    ['5 min, plus 4 hr chilling', 245, '5 min + 4 hr', 'long'],
    ['10 min, plus 20 min chilling', 30, '10 min + 20 min', 'quick'],
    ['15 min, plus 20 min chilling', 35, '15 min + 20 min', 'hour'],
    ['1 hr 15 min, plus 4 hr chilling and 4 hr freezing', 555, '1 hr 15 min + 8 hr', 'long'],
    ['45 min, plus cooling and 8 hr chilling', 525, '45 min + 8 hr+', 'long'],
    ['50 min, plus 1–4 hr brining', 290, '50 min + 1–4 hr', 'long'],
    ['1 hr 10 min, plus overnight chilling', 550, '1 hr 10 min + overnight', 'long'],
    ['4 hr, plus soaking and overnight chilling', 720, '4 hr + overnight+', 'long'],
    ['30 min, plus 2 days curing', 2910, '30 min + 2 days', 'long'],
  ];
  for (const [text, minutes, short, band] of cases) {
    const t = timeBand(text);
    assert.deepEqual([t.minutes, t.short, t.band, t.exact], [minutes, short, band, false], text);
  }
});

test('a range written with "to" is listed and banded by its upper bound (S004)', () => {
  const cases = [
    ['6 hr 40 min to 8 hr 40 min', 520, '6 hr 40 min–8 hr 40 min'],
    ['1 hr 30 min to 3 hr 30 min', 210, '1 hr 30 min–3 hr 30 min'],
    ['9 hr 30 min to 13 hr 30 min', 810, '9 hr 30 min–13 hr 30 min'],
    ['8 to 9 hr', 540, '8–9 hr'],
    ['20 to 40 min', 40, '20–40 min'],
  ];
  for (const [text, minutes, short] of cases) {
    const t = timeBand(text);
    assert.deepEqual([t.minutes, t.short], [minutes, short], text);
    assert.notEqual(t.band, 'none', text);
  }
  assert.equal(timeBand('20 to 40 min').band, 'hour');
});

test('time already counted in the total is not added twice', () => {
  assert.equal(timeBand('1 hr, including chilling').minutes, 60);
  assert.equal(timeBand('About 12–14 hr, including overnight refrigeration').minutes, 840);
  assert.equal(timeBand('About 1 hr 15 min with the 30-minute marinade').minutes, 75);
});

test('an unnumbered wait is marked open so the card and quick pick do not over-promise', () => {
  const t = timeBand('20 min, plus cooling');
  assert.deepEqual([t.minutes, t.short, t.open], [20, '20 min+', true]);
  assert.equal(timeBand('20 min, plus 10 min cooling').open, false);
  assert.equal(timeBand('20 min').open, false);
  assert.equal(timeBand('at least 30 min').open, true);
});

test('an unnumbered wait never takes the quick band, and its label gives a floor', () => {
  const t = timeBand('10 min, plus cooling');
  assert.deepEqual([t.band, t.label, t.level], ['hour', 'At least 10 min', 2]);
  assert.equal(timeBand('45 min, plus cooling').label, 'At least 45 min');
  assert.equal(timeBand('1 hr 15 min, plus cooling').band, 'long');
  assert.equal(timeBand('25 min, with grains and proteins cooked ahead').band, 'hour');
  assert.equal(timeBand('About 40–50 min, with prepared chili oil').open, false);
});

test('plain and cook-written times use the same unit words on a card', () => {
  assert.equal(timeBand('70 min').short, '1 hr 10 min');
  assert.equal(timeBand('2 hours').short, '2 hr');
  assert.equal(timeBand('1 hr 10 min, plus 1 hr cooling').short, '1 hr 10 min + 1 hr');
});

test('"or overnight" counts the longer wait once, and "at least" inside a wait is open', () => {
  const either = timeBand('30 min, plus 4 hr or overnight chilling');
  assert.deepEqual([either.minutes, either.short, either.open], [510, '30 min + overnight', false]);
  assert.equal(timeBand('30 min, plus 12 hr or overnight chilling').minutes, 750);
  const floor = timeBand('30 min, plus at least 2 hr chilling');
  assert.deepEqual([floor.minutes, floor.short, floor.open], [150, '30 min + 2 hr+', true]);
  assert.equal(timeBand('30 min, plus 1–2 days curing').short, '30 min + 1–2 days');
});
