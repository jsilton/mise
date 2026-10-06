import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { containsRecipeSlugReference } from './lib/slug-reference.mjs';

const aliases = JSON.parse(fs.readFileSync('src/data/recipe-aliases.json', 'utf8'));
const retirements = JSON.parse(fs.readFileSync('src/data/recipe-retirements.json', 'utf8'));
const baseline = JSON.parse(fs.readFileSync('docs/recipe-review-baseline.json', 'utf8'));
const recipeDir = 'src/content/recipes';
const liveSlugs = new Set(
  fs
    .readdirSync(recipeDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.slice(0, -3))
);
for (const original of baseline.slugs) {
  assert(
    liveSlugs.has(original) || aliases[original] || retirements[original],
    `Original recipe disappeared without a documented alias or retirement: ${original}`
  );
}
function filesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(file) : entry.name.endsWith('.md') ? [file] : [];
  });
}
const content = filesIn('src/content').map((file) => [file, fs.readFileSync(file, 'utf8')]);
for (const [slug, decision] of Object.entries(retirements)) {
  assert.equal(decision.status, 'retired-by-user', `Unsupported retirement status: ${slug}`);
  assert.match(decision.date, /^\d{4}-\d{2}-\d{2}$/, `Missing retirement date: ${slug}`);
  assert.equal(decision.record, `docs/reviews/${slug}.md`);
  assert(fs.existsSync(decision.record), `Missing retirement decision record: ${slug}`);
  assert.match(decision.lastSourceSha256, /^[a-f0-9]{64}$/);
  assert(!liveSlugs.has(slug), `Retired recipe remains active: ${slug}`);
  assert(
    !aliases[slug] && !Object.values(aliases).includes(slug),
    `Retirement collides with an alias: ${slug}`
  );
  const html = fs.readFileSync(`dist/recipes/${slug}/index.html`, 'utf8');
  assert(html.includes('This recipe has been retired from the active collection.'));
  assert(html.includes('content="noindex, follow"'));
  assert(html.includes(`rel="canonical" href="https://jordansilton.com/mise/recipes/${slug}/"`));
  assert(html.includes('href="/mise/"'), `Retirement lacks a collection link: ${slug}`);
  assert(
    !html.includes('application/ld+json') && !html.includes('recipe-scaler'),
    `Retirement still presents a recipe: ${slug}`
  );
  for (const [file, text] of content)
    assert(
      !containsRecipeSlugReference(text, slug, 'https://jordansilton.com/mise/'),
      `Stale retired recipe reference in ${file}: ${slug}`
    );
  for (const file of [
    'dist/index.html',
    'dist/sitemap.xml',
    'exports/mise-recipes-schema.json',
    'public/recipes/all-recipes-combined.txt',
  ])
    assert(
      !containsRecipeSlugReference(
        fs.readFileSync(file, 'utf8'),
        slug,
        'https://jordansilton.com/mise/'
      ),
      `Retired recipe remains in ${file}: ${slug}`
    );
}
for (const [alias, target] of Object.entries(aliases)) {
  assert(!liveSlugs.has(alias), `Alias still appears as a duplicate recipe: ${alias}`);
  assert(liveSlugs.has(target), `Missing canonical recipe: ${target}`);
  assert(!aliases[target], `Avoid redirect chains: ${alias} -> ${target}`);
  assert(
    fs.existsSync(`docs/reviews/${alias}.md`),
    `Missing individual consolidation review: ${alias}`
  );
  const html = fs.readFileSync(`dist/recipes/${alias}/index.html`, 'utf8');
  assert(
    html.includes(`url=/mise/recipes/${target}/`),
    `Built redirect does not preserve the site base: ${alias}`
  );
  assert(
    html.includes(`rel="canonical" href="https://jordansilton.com/mise/recipes/${target}/"`),
    `Missing absolute canonical destination: ${alias}`
  );
  assert(
    html.includes('window.location.search') && html.includes('window.location.hash'),
    `Client redirect drops query or fragment: ${alias}`
  );
  for (const [file, text] of content)
    assert(
      !containsRecipeSlugReference(text, alias, 'https://jordansilton.com/mise/'),
      `Stale recipe/meal reference in ${file}: ${alias}`
    );
  const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
  assert(
    !sitemap.includes(`/recipes/${alias}/`),
    `Alias is included in the canonical sitemap: ${alias}`
  );
}
console.log(
  `${Object.keys(aliases).length} recipe aliases and ${Object.keys(retirements).length} deliberate retirements verified; all ${baseline.slugs.length} original recipes are accounted for.`
);
