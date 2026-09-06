import fs from 'node:fs';
import assert from 'node:assert/strict';
import matter from 'gray-matter';
import path from 'node:path';
import { validateMealCoverage } from './lib/meal-coverage.mjs';

const baseline = JSON.parse(fs.readFileSync('docs/meal-review-baseline.json', 'utf8'));
const aliases = JSON.parse(fs.readFileSync('src/data/meal-aliases.json', 'utf8'));
const fields = ['main', 'base', 'salad', 'sauce', 'dessert'];
const recipeFiles = fs.readdirSync('src/content/recipes').filter((f) => f.endsWith('.md'));
const recipes = new Map(
  recipeFiles.map((f) => [
    f.slice(0, -3),
    matter(fs.readFileSync(`src/content/recipes/${f}`, 'utf8')).data,
  ])
);
const mealFiles = fs.readdirSync('src/content/meals').filter((f) => f.endsWith('.md'));
const meals = new Map(
  mealFiles.map((f) => [
    f.slice(0, -3),
    matter(fs.readFileSync(`src/content/meals/${f}`, 'utf8')).data,
  ])
);
validateMealCoverage(baseline.slugs, meals.keys(), aliases);

const records = [];
for (const [slug, meal] of meals) {
  if (!meal.review) {
    records.push({ slug, status: 'pending' });
    continue;
  }
  assert.equal(meal.review.status, 'editorial-review', `Unsupported meal review claim: ${slug}`);
  assert(fs.existsSync(`docs/meal-reviews/${slug}.md`), `Missing individual meal record: ${slug}`);
  assert(meal.main, `Reviewed meal needs a main component: ${slug}`);
  assert(meal.totalTime, `Reviewed meal must expose elapsed time: ${slug}`);
  const direct = [...fields.map((f) => meal[f]).filter(Boolean), ...(meal.sides || [])];
  assert.equal(new Set(direct).size, direct.length, `Repeated direct meal component: ${slug}`);
  const visited = new Set();
  function inspect(id, chain = []) {
    assert(!chain.includes(id), `Component cycle: ${[...chain, id].join(' -> ')}`);
    if (visited.has(id)) return;
    const recipe = recipes.get(id);
    assert(recipe, `Missing component ${id} in ${slug}`);
    assert(
      ['editorial-review', 'kitchen-tested'].includes(recipe.learning?.review?.status),
      `Unreviewed component ${id} in reviewed meal ${slug}`
    );
    assert(fs.existsSync(`docs/reviews/${id}.md`), `Missing individual recipe review: ${id}`);
    visited.add(id);
    for (const child of recipe.usesBase || []) inspect(child, [...chain, id]);
  }
  direct.forEach((id) => inspect(id));
  const html = fs.readFileSync(`dist/meals/${slug}/index.html`, 'utf8');
  assert(
    html.includes('data-meal-review') && html.includes(meal.review.date),
    `Missing rendered review status: ${slug}`
  );
  assert(html.includes('Elapsed:'), `Missing rendered elapsed time: ${slug}`);
  records.push({
    slug,
    status: meal.review.status,
    record: `docs/meal-reviews/${slug}.md`,
    components: [...visited],
  });
}
function contentFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? contentFiles(file) : entry.name.endsWith('.md') ? [file] : [];
  });
}
const content = contentFiles('src/content').map((file) => [file, fs.readFileSync(file, 'utf8')]);
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const index = fs.readFileSync('dist/meals/index.html', 'utf8');
for (const [alias, target] of Object.entries(aliases)) {
  const record = `docs/meal-reviews/${alias}.md`;
  assert(fs.existsSync(record), `Missing meal consolidation record: ${alias}`);
  assert(
    records.some((r) => r.slug === target && r.status === 'editorial-review'),
    `Meal consolidation needs a reviewed canonical plan: ${alias}`
  );
  const html = fs.readFileSync(`dist/meals/${alias}/index.html`, 'utf8');
  assert(html.includes(`url=/mise/meals/${target}/`), `Meal redirect loses site base: ${alias}`);
  assert(
    html.includes(`rel="canonical" href="https://jordansilton.com/mise/meals/${target}/"`),
    `Meal redirect lacks absolute canonical URL: ${alias}`
  );
  assert(
    html.includes('window.location.search') && html.includes('window.location.hash'),
    `Meal redirect loses query or fragment: ${alias}`
  );
  assert(
    html.includes('name="robots" content="noindex"'),
    `Meal redirect must be noindex: ${alias}`
  );
  assert(!sitemap.includes(`/meals/${alias}/`), `Consolidated meal is in sitemap: ${alias}`);
  assert(!index.includes(`/meals/${alias}`), `Consolidated meal remains in discovery: ${alias}`);
  for (const [file, text] of content)
    assert(!text.includes(alias), `Stale meal reference in ${file}: ${alias}`);
  records.push({ slug: alias, canonical: target, status: 'consolidated', record });
}
records.sort((a, b) => a.slug.localeCompare(b.slug));
const report = {
  originalMeals: baseline.slugs.length,
  currentMeals: meals.size,
  individuallyReviewed: records.filter((r) => r.status === 'editorial-review').length,
  consolidatedAfterReview: records.filter((r) => r.status === 'consolidated').length,
  pending: records.filter((r) => r.status === 'pending').length,
  kitchenTested: 0,
  records,
};
fs.writeFileSync('docs/meal-review-register.json', JSON.stringify(report, null, 2) + '\n');
console.log(
  `${report.individuallyReviewed} reviewed meals, ${report.consolidatedAfterReview} considered consolidations, ${report.pending} pending; all ${report.originalMeals} originals accounted for.`
);
