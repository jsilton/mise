import fs from 'fs/promises';
/* eslint-disable no-console */
import path from 'path';
import matter from 'gray-matter';

/**
 * Auto-fix: Add bold step headers to recipe directions.
 *
 * Transforms lines like:
 *   1. Add the bourbon...
 * Into:
 *   1. **Add:** Add the bourbon...
 *
 * Picks the first verb or key phrase as the header word.
 * Skips recipes that already have bold headers in most steps.
 */

const RECIPES_DIR = path.resolve('src/content/recipes');

// Common cooking verbs to use as step headers
const VERB_MAP = {
  // Cooking actions
  add: 'Add',
  pour: 'Pour',
  whisk: 'Whisk',
  stir: 'Stir',
  mix: 'Mix',
  combine: 'Combine',
  blend: 'Blend',
  fold: 'Fold',
  toss: 'Toss',
  // Heat actions
  heat: 'Heat',
  preheat: 'Preheat',
  boil: 'Boil',
  simmer: 'Simmer',
  sear: 'Sear',
  sauté: 'Sauté',
  saute: 'Sauté',
  fry: 'Fry',
  roast: 'Roast',
  bake: 'Bake',
  broil: 'Broil',
  grill: 'Grill',
  toast: 'Toast',
  char: 'Char',
  brown: 'Brown',
  braise: 'Braise',
  steam: 'Steam',
  poach: 'Poach',
  blanch: 'Blanch',
  // Prep actions
  chop: 'Chop',
  dice: 'Dice',
  slice: 'Slice',
  mince: 'Mince',
  grate: 'Grate',
  peel: 'Peel',
  trim: 'Trim',
  cut: 'Cut',
  drain: 'Drain',
  rinse: 'Rinse',
  wash: 'Wash',
  dry: 'Dry',
  pat: 'Pat Dry',
  season: 'Season',
  marinate: 'Marinate',
  coat: 'Coat',
  dredge: 'Dredge',
  bread: 'Bread',
  stuff: 'Stuff',
  fill: 'Fill',
  roll: 'Roll',
  wrap: 'Wrap',
  shape: 'Shape',
  flatten: 'Flatten',
  pound: 'Pound',
  // Assembly/finishing
  place: 'Place',
  arrange: 'Arrange',
  layer: 'Layer',
  spread: 'Spread',
  top: 'Top',
  garnish: 'Garnish',
  drizzle: 'Drizzle',
  sprinkle: 'Sprinkle',
  serve: 'Serve',
  plate: 'Plate',
  transfer: 'Transfer',
  remove: 'Remove',
  set: 'Set',
  let: 'Rest',
  rest: 'Rest',
  cool: 'Cool',
  chill: 'Chill',
  refrigerate: 'Chill',
  freeze: 'Freeze',
  cover: 'Cover',
  // Measurement/prep
  measure: 'Measure',
  weigh: 'Weigh',
  prep: 'Prep',
  prepare: 'Prep',
  assemble: 'Assemble',
  build: 'Build',
  make: 'Make',
  create: 'Make',
  // Techniques
  knead: 'Knead',
  proof: 'Proof',
  rise: 'Rise',
  ferment: 'Ferment',
  reduce: 'Reduce',
  deglaze: 'Deglaze',
  temper: 'Temper',
  strain: 'Strain',
  skim: 'Skim',
  render: 'Render',
  caramelize: 'Caramelize',
  melt: 'Melt',
  dissolve: 'Dissolve',
  bloom: 'Bloom',
  infuse: 'Infuse',
  smoke: 'Smoke',
  cure: 'Cure',
  brine: 'Brine',
  glaze: 'Glaze',
  baste: 'Baste',
  flip: 'Flip',
  turn: 'Turn',
  rotate: 'Rotate',
  // Special
  bring: 'Bring',
  return: 'Return',
  repeat: 'Repeat',
  continue: 'Continue',
  finish: 'Finish',
  taste: 'Taste',
  adjust: 'Adjust',
  check: 'Check',
  test: 'Test',
  divide: 'Divide',
  portion: 'Portion',
  scoop: 'Scoop',
  ladle: 'Ladle',
  squeeze: 'Squeeze',
  press: 'Press',
  brush: 'Brush',
  rub: 'Rub',
  score: 'Score',
  // Context starters
  in: 'Prep',
  using: 'Prep',
  with: 'Prep',
  on: 'Prep',
  while: 'Meanwhile',
  meanwhile: 'Meanwhile',
  once: 'Finish',
  when: 'Finish',
  after: 'Finish',
  if: 'Adjust',
  for: 'Prep',
};

function getHeaderWord(stepText) {
  // Remove leading whitespace
  const trimmed = stepText.trim();
  // Get the first word (lowercase)
  const firstWord = trimmed
    .split(/[\s,]+/)[0]
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  if (VERB_MAP[firstWord]) {
    return VERB_MAP[firstWord];
  }

  // Fallback: capitalize the first word
  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
}

async function listMdFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listMdFiles(res)));
    else if (entry.isFile() && res.endsWith('.md')) files.push(res);
  }
  return files;
}

(async function main() {
  const files = await listMdFiles(RECIPES_DIR);
  let fixed = 0;
  let skipped = 0;

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const slug = path.basename(file, '.md');

    // Find Directions section
    const directionsMatch = raw.match(/(## Directions\s*\n)([\s\S]*?)(?=\n## |\n*$)/i);
    if (!directionsMatch) {
      continue;
    }

    const directionsContent = directionsMatch[2];

    // Check if already has bold headers in majority of steps
    const allSteps = directionsContent.match(/^\d+\.\s+/gm);
    const boldSteps = directionsContent.match(/^\d+\.\s+\*\*/gm);

    if (!allSteps || allSteps.length === 0) continue;

    const boldRatio = (boldSteps ? boldSteps.length : 0) / allSteps.length;
    if (boldRatio >= 0.5) {
      // Already has bold headers on most steps
      skipped++;
      continue;
    }

    // Transform each numbered step
    let newDirections = directionsContent;

    // Match numbered steps: "1. Text here" or "1.  Text here"
    newDirections = newDirections.replace(/^(\d+)\.\s+(?!\*\*)(.+)/gm, (match, num, text) => {
      const header = getHeaderWord(text);
      return `${num}. **${header}:** ${text.trim()}`;
    });

    if (newDirections === directionsContent) {
      continue;
    }

    // Replace in the full file
    const newRaw = raw.replace(directionsContent, newDirections);
    await fs.writeFile(file, newRaw);
    fixed++;
  }

  console.log(`Fixed bold step headers: ${fixed} recipes`);
  console.log(`Already had headers: ${skipped} recipes`);
})();
