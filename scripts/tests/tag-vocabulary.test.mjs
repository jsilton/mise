import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import matter from '../../src/lib/frontmatter.mjs';
import {
  CUISINES,
  CUISINE_GROUPS,
  DIET_OPTION_KEY,
  MEAL_KEYS,
  RECIPE_KEYS,
  cuisineFilterOptions,
  cuisineGroups,
  currentFilterValue,
  dietaryFilterKeys,
  dietaryFilterOptions,
  seasonsIssue,
  tagIssues,
} from '../../src/lib/tag-vocabulary.mjs';
import { QUICK_PICKS, countPicks, quickPicksFor } from '../../src/lib/quick-picks.mjs';

const load = (dir) =>
  fs
    .readdirSync(`src/content/${dir}`)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.slice(0, -3),
      data: matter(fs.readFileSync(`src/content/${dir}/${file}`, 'utf8')).data,
    }));
const recipes = load('recipes');
const meals = load('meals');

test('every recipe and meal uses only canonical tag values and known keys', () => {
  const problems = [
    ...recipes.flatMap(({ slug, data }) => tagIssues(data, 'recipe').map((i) => `${slug}: ${i}`)),
    ...meals.flatMap(({ slug, data }) => tagIssues(data, 'meal').map((i) => `meals/${slug}: ${i}`)),
  ];
  assert.deepEqual(problems, []);
});

test('split cuisine names, stray values and old keys are rejected', () => {
  const issues = tagIssues({
    cuisines: ['Tex-Mex', 'Greek-inspired', 'Chinese-American-inspired', 'Mexican'],
    cookingMethods: ['pressure-cook'],
    advancePrep: ['marinate'],
    flavorProfile: ['toasted'],
    occasions: ['dinner-party'],
    dietary: 'vegetarian',
    difficulty: 'advanced',
    role: 'breakfast',
    season: ['spring'],
    makeAhead: true,
    healthyness: 'hearty',
  });
  for (const part of [
    'cuisines: "Tex-Mex"',
    'cuisines: "Greek-inspired"',
    'cuisines: "Chinese-American-inspired"',
    'cookingMethods: "pressure-cook"',
    'advancePrep: "marinate"',
    'flavorProfile: "toasted"',
    'occasions: "dinner-party"',
    'dietary must be a list',
    'difficulty: "advanced"',
    'role: "breakfast"',
    'season is a retired key',
    'makeAhead is a retired key',
    'healthyness is not a key',
  ])
    assert.ok(
      issues.some((issue) => issue.includes(part)),
      `expected an issue for ${part}`
    );
  assert.equal(issues.length, 13);
  assert.deepEqual(
    tagIssues({ cuisines: ['Mexican', 'American'], seasons: ['fall', 'winter'] }),
    []
  );
  assert.ok(tagIssues({ occasions: ['family'] }, 'meal')[0].includes('"family"'));
});

test('year-round stands alone and four seasons are written as year-round', () => {
  assert.ok(seasonsIssue(['spring', 'summer', 'year-round']));
  assert.ok(seasonsIssue(['spring', 'summer', 'fall', 'winter']));
  assert.equal(seasonsIssue(['year-round']), null);
  assert.equal(seasonsIssue(['spring', 'summer', 'fall']), null);
  assert.equal(seasonsIssue(undefined), null);
});

test('the key lists match the content schema', () => {
  const config = fs.readFileSync('src/content/config.ts', 'utf8');
  const [recipeSchema, mealSchema] = config.split('const mealsCollection');
  for (const key of RECIPE_KEYS)
    assert.match(recipeSchema, new RegExp(`\\n      ${key}: `), `recipe schema names ${key}`);
  for (const key of MEAL_KEYS)
    assert.match(mealSchema, new RegExp(`\\n      ${key}: `), `meal schema names ${key}`);
  assert.equal((config.match(/\.strict\(\)\n    \.superRefine/g) || []).length, 2);
});

test('every canonical cuisine belongs to exactly one filter group', () => {
  const members = CUISINE_GROUPS.flatMap((group) => group.members);
  assert.deepEqual([...members].sort(), [...CUISINES].sort());
  assert.equal(new Set(members).size, members.length);
  assert.deepEqual(cuisineGroups(['Sichuan', 'Chinese']), ['Chinese']);
  assert.deepEqual(cuisineGroups(['Mexican', 'American']), ['Mexican', 'American']);
  assert.deepEqual(cuisineGroups(['North African']), ['Middle Eastern']);
  assert.deepEqual(cuisineGroups(undefined), []);
});

test('the cuisine filter shows about twenty groups and Mexican finds the chili', () => {
  const options = cuisineFilterOptions(recipes);
  assert.ok(options.length <= 20, `${options.length} cuisine options`);
  for (const slug of ['chili', 'tacos', 'white-chicken-chili', 'crispy-black-bean-tacos']) {
    const recipe = recipes.find((r) => r.slug === slug);
    assert.ok(cuisineGroups(recipe.data.cuisines).includes('Mexican'), slug);
  }
  const mongolian = recipes.find((r) => r.slug === 'mongolian-beef');
  assert.ok(cuisineGroups(mongolian.data.cuisines).includes('Chinese'));
});

test('the dietary filter counts vegan as vegetarian and folds the option tags', () => {
  assert.deepEqual(dietaryFilterKeys(['vegan']).sort(), [
    'dairy-free',
    'egg-free',
    'vegan',
    'vegetarian',
  ]);
  assert.deepEqual(dietaryFilterKeys(['vegetarian-option', 'gluten-free-option']), [
    DIET_OPTION_KEY,
  ]);
  assert.deepEqual(dietaryFilterKeys(undefined), []);
  const options = dietaryFilterOptions(recipes);
  assert.ok(options.includes('vegetarian') && options.includes(DIET_OPTION_KEY));
  assert.ok(options.every((option) => !option.endsWith('-option')));
  // The dropdown and the Vegetarian quick pick agree, drinks aside.
  const { picks } = countPicks(recipes);
  const dropdown = recipes.filter(
    ({ data }) => data.role !== 'drink' && dietaryFilterKeys(data.dietary).includes('vegetarian')
  ).length;
  assert.equal(picks.veg, dropdown);
});

test('Breakfast and Freezer friendly quick picks find their recipes', () => {
  const keys = QUICK_PICKS.map((pick) => pick.key);
  assert.ok(keys.includes('breakfast') && keys.includes('freezer'));
  const picksOf = (slug) => quickPicksFor(recipes.find((r) => r.slug === slug).data);
  for (const slug of ['overnight-oats', 'steel-cut-oatmeal', 'frozen-blueberry-muffins', 'granola'])
    assert.ok(picksOf(slug).includes('breakfast'), slug);
  for (const slug of ['overnight-oats', 'avocado-toast', 'steel-cut-oatmeal'])
    assert.ok(!picksOf(slug).includes('weeknight'), `${slug} is not a weeknight dinner`);
  for (const slug of ['chili', 'pulled-pork', 'pressure-cooker-bolognase'])
    assert.ok(picksOf(slug).includes('freezer'), slug);
  const { picks } = countPicks(recipes);
  assert.ok(picks.breakfast >= 75, `${picks.breakfast} breakfast recipes`);
  assert.ok(picks.freezer >= 150, `${picks.freezer} freezer recipes`);
});

test('the Advanced difficulty option matches the schema value', () => {
  const panel = fs.readFileSync('src/components/FilterPanel.astro', 'utf8');
  assert.ok(panel.includes('<option value="hard">Advanced</option>'));
  assert.ok(!panel.includes('value="advanced"'));
  assert.ok(recipes.some(({ data }) => data.difficulty === 'hard'));
});

test('an empty tag line is an issue, a missing one is not', () => {
  assert.deepEqual(tagIssues({ title: 'Soup' }, 'recipe'), []);
  for (const field of ['dietary', 'cuisines', 'difficulty', 'role'])
    assert.ok(
      tagIssues({ [field]: null }, 'recipe').some((issue) => issue.startsWith(`${field} is empty`)),
      field
    );
});

test('old filter links land on the current values', () => {
  assert.equal(currentFilterValue('difficulty', 'advanced'), 'hard');
  assert.equal(currentFilterValue('dietary', 'vegetarian-option'), DIET_OPTION_KEY);
  assert.equal(currentFilterValue('dietary', 'vegan'), 'vegan');
  const options = cuisineFilterOptions(recipes).map((option) => option.key);
  for (const old of ['Cantonese', 'Sichuan', 'Tex-Mex', 'Korean-inspired', 'Italian'])
    assert.ok(options.includes(currentFilterValue('cuisine', old)), old);
  assert.equal(currentFilterValue('cuisine', 'Sichuan'), currentFilterValue('cuisine', 'Chinese'));
});

test('Southern recipes show under American too', () => {
  assert.ok(cuisineGroups(['Southern']).includes('American'));
  assert.ok(cuisineGroups(['Southern']).includes('Southern'));
});
