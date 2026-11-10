import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import matter from '../../src/lib/frontmatter.mjs';
import { containsRecipeSlugReference } from '../lib/slug-reference.mjs';

const aliases = JSON.parse(fs.readFileSync('src/data/recipe-aliases.json', 'utf8'));
const site = 'https://jordansilton.com/mise/';
const read = (slug) => matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8'));
// The duplicate pages merged on 2026-11-10 and the page each one now lands on.
const merged = {
  'simply-seasoned-korean-spinach-salad': 'garlic-sesame-spinach',
  guacamole: 'classic-guacamole',
  'quick-honey-garlic-shrimp-and-broccoli': 'honey-garlic-butter-shrimp-and-broccoli',
  'french-toast': 'classic-french-toast',
  'key-lime-pie-with-lime-zest': 'key-lime-pie',
  'cantonese-fish': 'chinese-steamed-fish',
  'roasted-corn-chowder-robert-irvine': 'roasted-corn-chowder-with-lime-cured-shrimp',
  'fresh-pasta-dough': 'fresh-egg-pasta',
  'quick-pickled-cucumber-salad': 'korean-pickled-cucumbers',
};
const filesIn = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(file) : entry.name.endsWith('.md') ? [file] : [];
  });

test('each merged duplicate is an alias with a redirect page, a record and no live source', () => {
  for (const [alias, target] of Object.entries(merged)) {
    assert.equal(aliases[alias], target, alias);
    assert.equal(fs.existsSync(`src/content/recipes/${alias}.md`), false, alias);
    assert.ok(fs.existsSync(`src/content/recipes/${target}.md`), target);
    assert.equal(aliases[target], undefined, `redirect chain: ${alias}`);
    const page = fs.readFileSync(`src/pages/recipes/${alias}.astro`, 'utf8');
    assert.ok(page.includes(`<RecipeRedirect targetSlug={aliases['${alias}']} />`), alias);
    assert.match(
      fs.readFileSync(`docs/reviews/${alias}.md`, 'utf8'),
      /## Consolidation, 2026-11-10/
    );
  }
});

test('no recipe or meal still names a merged duplicate', () => {
  for (const file of filesIn('src/content')) {
    const text = fs.readFileSync(file, 'utf8');
    for (const alias of Object.keys(merged))
      assert.equal(containsRecipeSlugReference(text, alias, site), false, `${file}: ${alias}`);
  }
  const meal = (slug) => matter(fs.readFileSync(`src/content/meals/${slug}.md`, 'utf8')).data;
  for (const slug of ['bibimbap-night', 'korean-bbq-night'])
    assert.ok(meal(slug).sides.includes('garlic-sesame-spinach'), slug);
  for (const slug of ['carnitas-bowl-night', 'enchilada-night', 'sheet-pan-fajita-night'])
    assert.equal(meal(slug).sauce, 'classic-guacamole', slug);
});

test('the kept pages carry the useful detail from the pages they replaced', () => {
  const swap = (slug, ingredient, alternative) =>
    read(slug).data.learning.substitutions.some(
      (s) => s.ingredient === ingredient && s.alternative === alternative
    );
  assert.ok(
    read('garlic-sesame-spinach').data.ingredients.includes('2 tsp scallion, finely chopped')
  );
  assert.ok(swap('classic-guacamole', 'Jalapeño', 'Half the jalapeño'));
  assert.ok(
    swap(
      'honey-garlic-butter-shrimp-and-broccoli',
      'Microwave broccoli',
      'Steam it instead of cooking it in the pan'
    )
  );
  assert.ok(swap('classic-french-toast', 'Maple syrup', 'Honey, warmed until runny'));
  const pie = read('key-lime-pie');
  assert.ok(pie.data.ingredients.includes('4 tsp lime zest'));
  assert.match(pie.content, /Slowly whisk in the lime juice and zest\./);
  const fish = read('chinese-steamed-fish');
  assert.equal(fish.data.title, 'Cantonese Steamed Fish');
  assert.ok(swap('chinese-steamed-fish', 'Light soy sauce', 'All-purpose soy sauce'));
  assert.ok(swap('fresh-egg-pasta', 'Stand mixer', 'Knead with the dough hook'));
  assert.ok(swap('korean-pickled-cucumbers', 'Gochugaru', '1/2 tsp gochugaru'));
});

test(
  'a merged duplicate keeps its old URL as a redirect to the kept page in the built site',
  { skip: !fs.existsSync('dist/recipes') && 'run pnpm run build first' },
  () => {
    const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
    for (const [alias, target] of Object.entries(merged)) {
      const html = fs.readFileSync(`dist/recipes/${alias}/index.html`, 'utf8');
      assert.ok(html.includes(`url=/mise/recipes/${target}/`), alias);
      assert.ok(html.includes(`rel="canonical" href="${site}recipes/${target}/"`), alias);
      assert.ok(html.includes('window.location.search') && html.includes('window.location.hash'));
      assert.ok(!html.includes('application/ld+json'), `${alias} still presents a recipe`);
      assert.ok(fs.existsSync(`dist/recipes/${target}/index.html`), target);
      assert.ok(!sitemap.includes(`/recipes/${alias}/`), `${alias} is in the sitemap`);
      assert.ok(sitemap.includes(`/recipes/${target}/`), `${target} is not in the sitemap`);
    }
  }
);
