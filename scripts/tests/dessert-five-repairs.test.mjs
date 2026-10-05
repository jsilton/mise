import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from 'gray-matter';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('key lime counts its chill and retains the measured egg endpoint with prompt refrigeration', () => {
  const { data, content } = read('key-lime-pie');
  assert.equal(data.totalTime, 'At least 8 hr 45 min, plus cooling');
  assert.match(content, /160°F \/ 71°C/);
  assert.match(content, /within 2 hours of baking/);
  assert.match(content, /at least 8 hours/);
  assert.doesNotMatch(content, /mandatory for the acidity to mellow/);
});
test('chocolate pudding uses a texture endpoint and retains its surface cover', () => {
  const { content } = read('chocolate-pie');
  assert.match(content, /baked, cooled crust and chopped chocolate ready/);
  assert.match(content, /continue if still thin/);
  assert.match(content, /keeping the wrap against the surface/);
  assert.doesNotMatch(content, /uncovered after the first hour/);
});
test('vanilla ice cream allocates salt and includes cold custard plus machine time', () => {
  const { data, content } = read('old-fashioned-vanilla-ice-cream');
  assert.equal(data.totalTime, 'At least 6 hr 15 min, plus churning and machine preparation');
  assert.match(content, /milk and the pinch of salt/);
  assert.match(content, /reaches 165°F/);
  assert.match(content, /shallow container and refrigerate promptly/);
  assert.match(content, /until thoroughly cold/);
  assert.match(content, /chilled heavy cream/);
});
test('peach ice cream allocates all sugar and salt and keeps fruit chilled', () => {
  const { data, content } = read('custard-peach-ice-cream');
  assert.equal(data.totalTime, 'About 9-11 hr, plus machine preparation');
  assert.match(content, /cream, milk, salt, and 1\/2 cup sugar/);
  assert.match(content, /yolks with 1\/4 cup sugar/);
  assert.match(content, /Refrigerate both until needed/);
  assert.match(content, /170-175°F/);
  assert.match(content, /respecting its fill limit/);
  assert.match(content, /4-6 hours/);
});
test('strawberry cake distinguishes berry juice from uncooked crumb and counts both baking stages', () => {
  const { data, content } = read('strawberry-summer-cake');
  assert.equal(data.cookTime, '60-70 min');
  assert.equal(data.totalTime, '75-85 min plus cooling');
  assert.match(content, /deep-dish pie pan/);
  assert.match(content, /Bake for another 50-60 minutes/);
  assert.match(content, /cake crumb is free of wet batter/);
  assert.match(content, /strawberry juice on the tester is expected/);
});
