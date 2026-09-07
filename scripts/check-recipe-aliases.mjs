import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { containsSlugToken } from './lib/slug-reference.mjs';

const aliases = JSON.parse(fs.readFileSync('src/data/recipe-aliases.json', 'utf8'));
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
    liveSlugs.has(original) || aliases[original],
    `Original recipe disappeared without a documented alias: ${original}`
  );
}
function filesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(file) : entry.name.endsWith('.md') ? [file] : [];
  });
}
const content = filesIn('src/content').map((file) => [file, fs.readFileSync(file, 'utf8')]);
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
    assert(!containsSlugToken(text, alias), `Stale recipe/meal reference in ${file}: ${alias}`);
  const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
  assert(
    !sitemap.includes(`/recipes/${alias}/`),
    `Alias is included in the canonical sitemap: ${alias}`
  );
}
console.log(
  `${Object.keys(aliases).length} recipe aliases verified; all ${baseline.slugs.length} original recipes are accounted for.`
);
