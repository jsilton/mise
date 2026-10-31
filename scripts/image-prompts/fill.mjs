#!/usr/bin/env node
// Fills one image prompt template for every recipe (or a few), ready to paste into an image AI.
//
//   node scripts/image-prompts/fill.mjs --template photo                 # all recipes, Markdown to stdout
//   node scripts/image-prompts/fill.mjs --template overhead --only dal-tadka,stevens-margs
//   node scripts/image-prompts/fill.mjs --template painted --format json --out prompts.json
//   node scripts/image-prompts/fill.mjs --template photo --batch batch-01   # slugs listed in batches/batch-01.txt
//
// Templates: photo, overhead, closeup, painted (see templates.mjs).
// Each variable is worked out from the recipe's own data. A hand-tuned brief in briefs.json,
// keyed by recipe slug, wins over the worked-out value, field by field.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { templates, fixed } from './templates.mjs';
import { timeBand } from '../../src/lib/time-band.mjs';
import { splitLeadingQuantity } from '../../src/lib/ingredient-quantity.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const RECIPES = path.join(here, '../../src/content/recipes');
const BRIEFS = path.join(here, 'briefs.json');

const BACKGROUND = {
  quick: 'pale sky blue (#D4E9F2)',
  hour: 'butter yellow (#F9D27E)',
  long: 'soft peach (#FFB07E)',
  none: 'butter yellow (#F9D27E)',
};

// Ingredients that never make a good hero or prop.
const PANTRY =
  /\b(salt|pepper|water|ice|oil|sugar|flour|cornstarch|baking (soda|powder)|stock|broth|vinegar|yeast|cooking spray|vanilla|extract|eggs?|egg (yolks?|whites?)|butter|milk|buttermilk|breadcrumbs|panko|molasses|honey|maple syrup|agave|mayonnaise|cornmeal|cocoa|gelatin|xanthan)\b/i;
const GARNISH_WORDS =
  /\b(garnish|for serving|to serve|cilantro|parsley|basil|mint|chives|scallions?|green onions?|sesame seeds|dill|lime wedges?|lemon wedges?|flaky salt)\b/i;
const BOWL_WORDS =
  /\b(soup|stew|curry|dal|chili|chowder|ramen|pho|congee|porridge|risotto|bowl|bisque|gumbo)\b/i;

export function ingredientName(line) {
  const [, rest] = splitLeadingQuantity(String(line));
  return rest
    .replace(/\([^)]*\)/g, '')
    .split(/[,;]/)[0]
    .replace(
      /\b(about|plus more|to taste|optional|divided|finely|thinly|roughly|freshly|chopped|minced|sliced|diced|trimmed|peeled|grated)\b/gi,
      ''
    )
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function lowerFirst(s) {
  return s ? s[0].toLowerCase() + s.slice(1) : s;
}

function firstSentence(s) {
  return String(s || '')
    .replace(/\s+/g, ' ')
    .split(/(?<=\.)\s/)[0]
    .replace(/\.$/, '')
    .trim();
}

function list(items) {
  const xs = items.filter(Boolean);
  if (xs.length <= 1) return xs[0] || '';
  return `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`;
}

export function derive(slug, data) {
  const lines = (data.ingredients || []).filter((l) => !/^\s*-{2,}/.test(String(l)));
  const names = [...new Set(lines.map(ingredientName).filter(Boolean))];
  const heroes = names.filter((n) => !PANTRY.test(n) && !GARNISH_WORDS.test(n)).slice(0, 3);
  const garnish = names.filter((n) => GARNISH_WORDS.test(n)).slice(0, 3);
  const methods = (data.cookingMethods || []).join(' ').toLowerCase();
  const role = data.role || '';
  const title = String(data.title || slug).trim();
  const cuisine = (data.cuisines || [])[0]?.replace(/[-\s]inspired$/i, '');

  let vessel = 'a white ceramic plate with a thin slate blue rim';
  if (role === 'drink') vessel = 'a clear glass that suits the drink';
  else if (role === 'dessert') vessel = 'a simple white plate';
  else if (role === 'sauce' || role === 'condiment') vessel = 'a small white bowl';
  else if (BOWL_WORDS.test(`${title} ${slug}`))
    vessel = 'a wide white bowl with a thin slate blue rim';

  let texture = 'an appetizing, natural texture';
  if (role === 'dessert' && /bake/.test(methods)) texture = 'a golden, tender crumb';
  else if (role === 'drink') texture = 'condensation on the cold glass';
  else if (/roast|sear|fry|grill|char|broil|griddle/.test(methods))
    texture = 'browned, lightly crisp edges';
  else if (/braise|simmer|slow cook|pressure/.test(methods))
    texture = 'a tender, just-cooked finish';
  else if (/bake/.test(methods)) texture = 'a golden crust';
  else if (/raw|toss|no cook|assemble/.test(methods)) texture = 'fresh, crisp ingredients';

  // No steam: it reads as drawn on, so hot food is shown just served and glossy instead.
  let moment = 'just served, fresh and glossy';
  if (role === 'drink') moment = 'cold, with light glowing through the drink';
  else if (role === 'dessert') moment = 'a clean cut showing the inside';

  return {
    dish: title,
    finished_look:
      lowerFirst(firstSentence(data.description || data.learning?.outcome)) ||
      `${title}, ready to eat`,
    hero: list(heroes) || title,
    texture,
    colours: 'natural, true to the real ingredients',
    vessel,
    garnish: list(garnish) || 'nothing extra',
    props: heroes[0] ? `a small bowl of ${heroes[0]}` : 'none',
    raw_ingredients: list(names.filter((n) => !PANTRY.test(n)).slice(0, 5)),
    setting: cuisine ? `${cuisine} home cooking, simple and everyday` : 'everyday home cooking',
    moment,
    background: BACKGROUND[timeBand(data.totalTime).band],
  };
}

export function fill(templateKey, vars) {
  const t = templates[templateKey];
  if (!t)
    throw new Error(`Unknown template "${templateKey}". Use: ${Object.keys(templates).join(', ')}`);
  const props_line =
    !vars.props || vars.props === 'none'
      ? 'No props.'
      : `At most one small prop, near the edge of the frame and well away from the dish: ${vars.props}.`;
  const garnish_line =
    !vars.garnish || vars.garnish === 'nothing extra'
      ? 'No garnish.'
      : `Garnish, and nothing else on the food: ${vars.garnish}.`;
  const all = { ...fixed, props_line, garnish_line, ...vars };
  return t.text
    .join(' ')
    .replace(/\{(\w+)\}/g, (_, k) => {
      if (!(k in all)) throw new Error(`Template ${templateKey} uses {${k}}, which has no value`);
      return all[k];
    })
    .replace(/\.\./g, '.')
    .replace(/\s+/g, ' ')
    .trim();
}

function args(argv) {
  const out = { template: 'photo', format: 'md' };
  for (let i = 0; i < argv.length; i++) {
    const [k, v] = [argv[i], argv[i + 1]];
    if (k === '--template') ((out.template = v), i++);
    else if (k === '--only') ((out.only = v.split(',')), i++);
    else if (k === '--format') ((out.format = v), i++);
    else if (k === '--out') ((out.out = v), i++);
    else if (k === '--batch') ((out.batch = v), i++);
  }
  return out;
}

// A batch is a plain list of recipe slugs, one per line, in batches/<name>.txt.
function batchSlugs(name) {
  const file = path.join(here, 'batches', `${name}.txt`);
  return fs
    .readFileSync(file, 'utf8')
    .split('\n')
    .map((l) => l.replace(/#.*/, '').trim())
    .filter(Boolean);
}

function main() {
  const opt = args(process.argv.slice(2));
  const briefs = fs.existsSync(BRIEFS) ? JSON.parse(fs.readFileSync(BRIEFS, 'utf8')) : {};
  if (opt.batch) opt.only = batchSlugs(opt.batch);
  const all = fs
    .readdirSync(RECIPES)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.slice(0, -3))
    .sort();
  const slugs = opt.only || all;
  const rows = slugs.map((slug) => {
    const { data } = matter(fs.readFileSync(path.join(RECIPES, `${slug}.md`), 'utf8'));
    const vars = { ...derive(slug, data), ...(briefs[slug] || {}) };
    return {
      slug,
      title: data.title,
      tuned: Boolean(briefs[slug]),
      prompt: fill(opt.template, vars),
    };
  });
  const text =
    opt.format === 'json'
      ? JSON.stringify(rows, null, 2)
      : `# ${templates[opt.template].name} prompts\n\n` +
        rows.map((r) => `## ${r.title}\n\n\`\`\`\n${r.prompt}\n\`\`\`\n`).join('\n');
  if (opt.out) fs.writeFileSync(opt.out, text);
  else process.stdout.write(text + '\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
