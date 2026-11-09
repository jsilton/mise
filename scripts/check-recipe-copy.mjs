#!/usr/bin/env node
// Checks recipe copy against docs/RECIPE_PAGE_STYLE.md.
// Usage: node scripts/check-recipe-copy.mjs [slug ...]   (no slugs checks every recipe)
// Exit code 1 when any recipe has an error. Warnings never fail the run.
import { readFileSync, readdirSync } from 'node:fs';
import matter from 'gray-matter';

const DIR = new URL('../src/content/recipes/', import.meta.url);
const allFiles = readdirSync(DIR).filter((f) => f.endsWith('.md'));
const allSlugs = new Set(allFiles.map((f) => f.replace(/\.md$/, '')));

// Pinned originals are checked by their own preservation record.
const PRESERVED = new Set(['tarragon-potatoes']);
const FAMILY = new Set([
  'nanas-biscuits',
  'grandmommys-pound-cake',
  'grandmommys-turkey-dressing',
  'grandmommys-pecan-pie',
  'corn-bread-dressing',
  'mommas-healthy-meatloaf',
  'parishs-blueberry-crisp',
  'jeris-lentil-soup',
  'chinese-chicken',
  'granola',
  'strawberry-congealed-salad',
  'chicken-fingers',
  'noodle-pudding',
  'thai-chicken-curry',
  'lavender-london-fog-cocktail',
  'peruvian-style-beef-empanadas',
  'crustless-spinach-quiche',
  'nana-ruths-applesauce',
  'gwock-family-macaroni-and-cheese',
  'spiced-butternut-squash-puree',
]);
const OLD_LEARNING = [
  'focus',
  'outcome',
  'before',
  'checkpoints',
  'troubleshooting',
  'timing',
  'sources',
];
const SECTIONS = new Set(["chef's note", 'directions']);

const BANNED = [
  /\boriginal[- ]batch\b/i,
  /\boriginal[- ]size\b/i,
  /\boriginal quantities\b/i,
  /\bthe listed\b/i,
  /\blisted (amount|quantity|range|count)\b/i,
  /\bmeasured (amount|quantity|cheese|pasta|oil)\b/i,
  /\bproportional(ly)?\b/i,
  /\ballowance\b/i,
  /\bplanning count\b/i,
  /\bplans? (about|for)\b/i,
  /\brather than trying\b/i,
  /\bis not a (cooked|doneness|temperature)/i,
  /\bclock is not\b/i,
  /\bnot a temperature reading\b/i,
  /\bguarantee/i,
  /\brepresentative\b/i,
  /\bkeep the full\b/i,
  /\buse all the\b/i,
  /\bthis version\b/i,
  /\bsequential version\b/i,
  /\bseparate (texture )?option\b/i,
  /\bseparate route\b/i,
  /\bapplicable\b/i,
  /\bhas not been (measured|tested)\b/i,
  /\bfirst checks?\b/i,
  /\buse judgment\b/i,
  /\bdo not add a (second|fresh)\b/i,
  /\bverify\b/i,
  /\bcurrent (batch|plan)\b/i,
  /\bUSDA\b/,
  /\b40°F\b/,
  /\bclean (tools|utensils)\b/i,
  /\brecipe clock\b/i,
  /\bif needed, divide\b/i,
  /\bdivide every\b/i,
  /\bextra (pan )?loads?\b/i,
  /\bworking fill\b/i,
];
const BRITISH =
  /\b(colour|flavour|centre|favourite|caramelis(e|ed|ing)|honour|savoury|yoghurt|aubergine|courgette|coriander leaves)\b/i;
const DOMAIN = /\b[a-z0-9-]+\.(com|net|org|co|blog)\b/i;
const QTY_IN_STEP =
  /\b\d+(?:\s+\d+\/\d+|\/\d+|\.\d+)?\s*(cups?|tbsp|tsp|tablespoons?|teaspoons?|oz|ounces?|lbs?|pounds?|grams?|g|ml)\b/i;

function sections(body) {
  const out = [];
  let current = null;
  for (const line of body.split('\n')) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h) {
      current = { name: h[1].trim(), lines: [] };
      out.push(current);
    } else if (current) current.lines.push(line);
  }
  return out.map((s) => ({ name: s.name, text: s.lines.join('\n').trim() }));
}

function check(slug) {
  const errors = [];
  const warnings = [];
  const raw = readFileSync(new URL(`${slug}.md`, DIR), 'utf8');
  const { data, content } = matter(raw);
  if (PRESERVED.has(slug)) return { errors, warnings };
  const secs = sections(content);
  const copy = [];
  const push = (where, text) => text && copy.push([where, String(text)]);

  for (const s of secs) {
    const key = s.name.toLowerCase().replace('’', "'");
    const allowed = SECTIONS.has(key) || (FAMILY.has(slug) && key === 'suggested tweak');
    if (!allowed) errors.push(`extra section "## ${s.name}"`);
    push(s.name, s.text);
  }
  const note = secs.find((s) => /^chef['’]s note$/i.test(s.name));
  if (!note) errors.push("missing ## Chef's Note");
  else {
    const words = note.text.split(/\s+/).filter(Boolean).length;
    if (words > 85) warnings.push(`chef's note is ${words} words`);
  }
  const dir = secs.find((s) => /^directions$/i.test(s.name));
  if (!dir) errors.push('missing ## Directions');
  else {
    const steps = dir.text.split(/\n(?=\d+\.\s)/).filter((x) => /^\d+\./.test(x.trim()));
    steps.forEach((step, i) => {
      if (!/^\d+\.\s+\*\*[^*]+:\*\*/.test(step.trim()))
        warnings.push(`step ${i + 1} has no bold title`);
      const words = step.split(/\s+/).length;
      if (words > 80) warnings.push(`step ${i + 1} is ${words} words`);
      if (!data.formula && QTY_IN_STEP.test(step.replace(/\d+\s*(?:-|to)?\s*inch/gi, '')))
        warnings.push(`step ${i + 1} has a quantity: "${step.match(QTY_IN_STEP)[0]}"`);
    });
  }
  for (const line of data.ingredients || []) push('ingredients', line);
  const learning = data.learning || {};
  for (const key of OLD_LEARNING)
    if (learning[key] !== undefined) errors.push(`learning.${key} should be removed`);
  for (const sub of learning.substitutions || []) {
    push('swap', sub.ingredient);
    push('swap', sub.alternative);
    push('swap', sub.effect);
  }
  push('storage', learning.storage);
  for (const [k, v] of Object.entries(data.pairingNotes || {})) {
    push('pairing', v);
    if (v.length > 90) warnings.push(`pairing note for ${k} is long`);
  }
  push('source', data.source);
  for (const t of ['prepTime', 'cookTime', 'totalTime', 'servings']) {
    push(t, data[t]);
    if (data[t] && /\b(about|any remaining|planning|approximately)\b/i.test(data[t]))
      errors.push(`${t} hedges: "${data[t]}"`);
  }
  if (data.formula)
    for (const step of data.formula.steps || []) {
      push('formula step', step.text);
      push('formula step', step.title);
    }

  for (const [where, text] of copy) {
    if (text.includes(';')) errors.push(`semicolon in ${where}: "${excerpt(text, ';')}"`);
    if (text.includes('—')) errors.push(`em dash in ${where}: "${excerpt(text, '—')}"`);
    const en = text.match(/(.{0,12})–(.{0,12})/);
    if (en && !/\d\s*–\s*\d/.test(en[0])) errors.push(`dash in ${where}: "${en[0]}"`);
    for (const re of BANNED) {
      const m = text.match(re);
      if (m) errors.push(`hedging in ${where}: "${excerpt(text, m[0])}"`);
    }
    const b = text.match(BRITISH);
    if (b) errors.push(`British spelling in ${where}: "${b[0]}"`);
  }
  if (data.source && DOMAIN.test(data.source))
    errors.push(`source names a web address: "${data.source}"`);
  if (data.sourceUrl && data.sourceUrl.startsWith('http:')) errors.push('sourceUrl is not https');

  const pairs = data.pairsWith || [];
  for (const p of pairs) if (!allSlugs.has(p)) errors.push(`pairsWith ${p} is not a recipe`);
  if (pairs.length > 4) warnings.push(`${pairs.length} pairings`);
  const notes = data.pairingNotes || {};
  for (const p of pairs) if (!notes[p]) errors.push(`pairing ${p} has no note`);
  for (const k of Object.keys(notes))
    if (!pairs.includes(k)) errors.push(`pairing note ${k} is not in pairsWith`);
  return { errors, warnings };
}

function excerpt(text, needle) {
  const i = text.indexOf(needle);
  return text.slice(Math.max(0, i - 30), i + needle.length + 30).replace(/\s+/g, ' ');
}

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const quiet = process.argv.includes('--quiet');
const slugs = args.length
  ? args.map((a) => a.replace(/^.*\//, '').replace(/\.md$/, ''))
  : [...allSlugs];
let failed = 0;
let warned = 0;
for (const slug of slugs) {
  if (!allSlugs.has(slug)) {
    console.log(`${slug}: no such recipe`);
    failed++;
    continue;
  }
  const { errors, warnings } = check(slug);
  if (errors.length) failed++;
  if (warnings.length) warned++;
  if (errors.length || (!quiet && warnings.length)) {
    console.log(`\n${slug}`);
    for (const e of errors) console.log(`  error: ${e}`);
    if (!quiet) for (const w of warnings) console.log(`  warn:  ${w}`);
  }
}
console.log(`\n${slugs.length} checked, ${failed} with errors, ${warned} with warnings.`);
process.exit(failed ? 1 : 0);
