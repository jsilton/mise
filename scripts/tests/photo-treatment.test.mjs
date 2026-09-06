import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { photoOutputSize, photoStudySvg, photoFilterDefs } from '../../src/lib/photo-treatment.mjs';

test('photo output keeps aspect ratio within a 1600-pixel bound without enlarging small photos', () => {
  assert.deepEqual(photoOutputSize(4000, 3000), { width: 1600, height: 1200 });
  assert.deepEqual(photoOutputSize(600, 800), { width: 600, height: 800 });
  assert.deepEqual(photoOutputSize(1200, 4800), { width: 400, height: 1600 });
  for (const [w, h] of [
    [0, 10],
    [10, Infinity],
    [-5, 3],
    [NaN, 100],
  ])
    assert.throws(() => photoOutputSize(w, h));
});
test('photo export rejects remote URLs, active SVG input, and injected markup', () => {
  for (const data of [
    'https://example.com/photo.png',
    'data:image/svg+xml;base64,PHN2Zz4=',
    'data:image/png;base64,ABC"/><script/>',
  ])
    assert.throws(() => photoStudySvg(data, 800, 600));
  const local = 'data:image/png;base64,aGVsbG8=';
  assert.throws(() => photoStudySvg(local, 1601, 600));
  assert.throws(() => photoStudySvg(local, 800, 600, 'red"/><script/>'));
  const svg = photoStudySvg(local, 800, 600, '#f4f6f0');
  assert(svg.includes('width="800" height="600"') && svg.includes('fill="#f4f6f0"'));
  assert(
    fs.readFileSync('public/brand/mise-photo-treatment.svg', 'utf8').includes(photoFilterDefs),
    'Download and app must use the same filter and edge treatment'
  );
});
