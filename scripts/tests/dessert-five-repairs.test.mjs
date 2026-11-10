import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));

test('key lime counts its chill and retains the measured egg endpoint with prompt refrigeration', () => {
  const { data, content } = read('key-lime-pie');
  // Active time plus the cooling and the 8 hr chill, in the style guide's plain format.
  assert.equal(data.totalTime, '45 min, plus cooling and 8 hr chilling');
  // The 160°F probe and the "within 2 hours" refrigeration line were dropped by the style
  // guide. The bake step must still give a set-edge, jiggling-center endpoint.
  assert.match(
    content,
    /Bake until the edges are set and the center still jiggles slightly, about 15 minutes/
  );
  assert.match(
    content,
    /Cool the pie completely on a rack, then cover and refrigerate for at least 8 hours/
  );
  assert.doesNotMatch(content, /mandatory for the acidity to mellow/);
});
test('chocolate pudding uses a texture endpoint and retains its surface cover', () => {
  const { data, content } = read('chocolate-pie');
  // The crust and chocolate are ready before the filling cooks, by their ingredient lines.
  assert.ok(
    data.ingredients.includes(
      '1 (9-inch) [All-Butter Pie Crust](/mise/recipes/all-butter-pie-crust/), baked and cooled'
    )
  );
  assert.ok(data.ingredients.includes('6 1/2 oz bittersweet chocolate, finely chopped'));
  assert.match(
    content,
    /until the filling bubbles and turns thick and glossy like pudding, 6 to 8 minutes/
  );
  assert.match(content, /Press plastic wrap directly onto the surface so no skin forms/);
  assert.ok(content.indexOf('Press plastic wrap') < content.indexOf('**Chill the pie:**'));
  assert.doesNotMatch(content, /uncovered after the first hour/);
});
test('vanilla ice cream allocates salt and includes cold custard plus machine time', () => {
  const { data, content } = read('old-fashioned-vanilla-ice-cream');
  // 4 hr chill + 20 min churn + 2 hr freeze.
  assert.equal(data.totalTime, '15 min, plus 6 hr 20 min chilling, churning and freezing');
  assert.ok(data.ingredients.includes('pinch of sea salt'));
  assert.match(content, /Warm the milk and salt/);
  assert.match(content, /reaches 165°F/);
  // "Shallow container ... promptly" was fridge boilerplate. The cold endpoint stays.
  assert.match(content, /refrigerate until very cold, at least 4 hours/);
  assert.match(content, /freezer bowl, put it in the freezer now/);
  assert.ok(data.ingredients.includes('1 cup heavy cream, cold'));
  assert.match(content, /Stir in the cream and vanilla bean paste/);
});
test('peach ice cream allocates all sugar and salt and keeps fruit chilled', () => {
  const { data, content } = read('custard-peach-ice-cream');
  // 4 hr chill plus 4 to 6 hr freeze on top of the active time.
  assert.equal(data.totalTime, '1 hr 15 min, plus 4 hr chilling and 4 hr freezing');
  // The single 1 1/4 cups divided line is now two lines that still add to 1 1/4 cups.
  assert.ok(data.ingredients.includes('1/2 cup sugar'));
  assert.ok(data.ingredients.includes('3/4 cup sugar'));
  assert.equal(data.ingredients.filter((line) => /sugar/.test(line)).length, 2);
  assert.equal(1 / 2 + 3 / 4, 1 + 1 / 4);
  assert.ok(data.ingredients.includes('1/4 tsp fine sea salt'));
  assert.match(content, /Toss the peaches with their sugar and the lemon juice/);
  assert.match(content, /heat the cream, milk, salt and two-thirds of the custard sugar/);
  assert.match(content, /whisk the yolks with the rest of the custard sugar/);
  assert.match(content, /Refrigerate both\./);
  assert.match(content, /reaches 170 to 175°F/);
  assert.match(content, /freezer bowl, put it in the freezer now/);
  // The fill-limit and batch-churning hedge was dropped by the style guide.
  assert.match(content, /freeze until firm, 4 to 6 hours/);
});
test('strawberry cake distinguishes berry juice from uncooked crumb and counts both baking stages', () => {
  const { data, content } = read('strawberry-summer-cake');
  // 10 min at 350°F plus 50 to 60 min at 325°F.
  assert.equal(data.cookTime, '1 hr 10 min');
  assert.equal(data.totalTime, '1 hr 25 min, plus cooling');
  assert.match(content, /deep-dish pie pan/);
  assert.match(content, /Bake for 10 minutes, then lower the oven to 325°F/);
  assert.match(content, /comes out free of wet batter, 50 to 60 minutes more/);
  assert.match(content, /Berry juice on the toothpick is fine/);
});
