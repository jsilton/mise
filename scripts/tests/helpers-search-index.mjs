// Builds the same search records the home page ships, from the recipe files on disk.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { buildSearchItem } from '../../src/lib/recipe-search.mjs';
import { parseRecipeContent, recipeDescription } from '../../src/lib/recipe-content.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, '../../src/content/recipes');

// The lesson list lives in a TypeScript file, which the test runner's Node cannot import.
// Read the three fields search needs straight from its text.
const quoted = (block, key) =>
  [
    ...(block.match(new RegExp(`^    ${key}: \\[([\\s\\S]*?)\\]`, 'm'))?.[1] || '').matchAll(
      /'([^']+)'/g
    ),
  ].map((m) => m[1]);
export const lessons = fs
  .readFileSync(path.join(here, '../../src/data/techniques.ts'), 'utf8')
  .split(/^  \{$/m)
  .slice(1)
  .map((block) => ({
    slug: block.match(/^    slug: '([^']+)'/m)[1],
    methods: quoted(block, 'methods'),
    recipes: quoted(block, 'recipes'),
  }));

// Mirrors getTechniquesForRecipe in src/data/techniques.ts.
export function lessonSlugsFor(recipe) {
  const explicit = recipe.data.learning?.techniques;
  if (explicit) return explicit.filter((slug) => lessons.some((t) => t.slug === slug));
  return lessons
    .filter(
      (t) =>
        t.recipes.includes(recipe.slug) ||
        t.methods.some((m) => recipe.data.cookingMethods?.includes(m))
    )
    .slice(0, 3)
    .map((t) => t.slug);
}
const HIDDEN = ['no-cook-playdough', 'play-dough'];

export function loadRecipes() {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), 'utf8'));
      return { slug: f.replace(/\.md$/, ''), data, body: content };
    })
    .filter((r) => !HIDDEN.includes(r.slug));
}

export function loadSearchItems(recipes = loadRecipes()) {
  return recipes.map((recipe) =>
    buildSearchItem(recipe, {
      lessons: lessonSlugsFor(recipe),
      description: recipeDescription(recipe.data, parseRecipeContent(recipe.body || '')),
    })
  );
}
