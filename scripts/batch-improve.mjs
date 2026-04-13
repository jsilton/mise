import fs from 'fs/promises';
/* eslint-disable no-console */
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');

// Cuisine to origin mapping
const CUISINE_TO_ORIGIN = {
  American: 'United States',
  Italian: 'Italy',
  Chinese: 'China',
  Japanese: 'Japan',
  Korean: 'Korea',
  Thai: 'Thailand',
  Vietnamese: 'Vietnam',
  Indian: 'India',
  Mexican: 'Mexico',
  French: 'France',
  Greek: 'Greece',
  Spanish: 'Spain',
  Turkish: 'Turkey',
  Lebanese: 'Lebanon',
  'Middle Eastern': 'Middle East',
  Israeli: 'Israel',
  Persian: 'Iran',
  Moroccan: 'Morocco',
  German: 'Germany',
  British: 'United Kingdom',
  Irish: 'Ireland',
  Portuguese: 'Portugal',
  Brazilian: 'Brazil',
  Argentine: 'Argentina',
  Peruvian: 'Peru',
  Filipino: 'Philippines',
  Indonesian: 'Indonesia',
  Malaysian: 'Malaysia',
  Singaporean: 'Singapore',
  Cantonese: 'China',
  Sichuan: 'China',
  'Southern': 'United States',
  'Caribbean': 'Caribbean',
  'Mediterranean': 'Mediterranean',
  'Middle Eastern': 'Middle East',
};

// Time format normalizations
const TIME_PATTERNS = [
  { regex: /(\d+)\s*mins?\b/gi, replace: '$1 min' },
  { regex: /(\d+)\s*hours?\b/gi, replace: '$1 hr' },
  { regex: /(\d+)\s*hrs?\b/gi, replace: '$1 hr' },
  { regex: /(\d+)\s*seconds?\b/gi, replace: '$1 sec' },
  { regex: /(\d+)\s*secs?\b/gi, replace: '$1 sec' },
  { regex: /(\d+)\s*minutes?\b/gi, replace: '$1 min' },
];

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

function normalizeTimeString(timeStr) {
  if (!timeStr || typeof timeStr !== 'string') return timeStr;
  let result = timeStr;
  for (const { regex, replace } of TIME_PATTERNS) {
    result = result.replace(regex, replace);
  }
  return result;
}

function inferOriginFromCuisines(cuisines) {
  if (!Array.isArray(cuisines) || cuisines.length === 0) return null;
  const primaryCuisine = cuisines[0];
  return CUISINE_TO_ORIGIN[primaryCuisine] || null;
}

function inferNutritionalDensityFromRole(role) {
  switch (role) {
    case 'dessert':
    case 'drink':
      return 'moderate';
    case 'base':
    case 'condiment':
      return 'light';
    case 'main':
    case 'side':
    default:
      return 'moderate';
  }
}

function inferLeftoversFromMethods(methods) {
  if (!Array.isArray(methods) || methods.length === 0) return 'good';

  const slowMethods = ['braise', 'slow-cook', 'stew', 'curry'];
  const hasSlowMethod = methods.some(m => slowMethods.includes(m));
  if (hasSlowMethod) return 'excellent';

  const bakeMethods = ['bake'];
  const hasBakeMethod = methods.some(m => bakeMethods.includes(m));
  if (hasBakeMethod) return 'good';

  const noMethods = ['assemble', 'no-cook'];
  const hasNoMethod = methods.some(m => noMethods.includes(m));
  if (hasNoMethod) return 'poor';

  return 'good';
}

(async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const verbose = args.includes('--verbose');

  const files = await listMdFiles(RECIPES_DIR);
  console.log(`Found ${files.length} recipes.\n`);

  const stats = {
    originsFixed: 0,
    seasonsFixed: 0,
    densitiesFixed: 0,
    leftoversFixed: 0,
    timesNormalized: 0,
    equipmentFixed: 0,
    pairsWithEmpty: [],
    missingChefNote: [],
    missingDirections: [],
    shortChefNotes: [],
  };

  const updates = [];

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(file, '.md');

    let changed = false;
    let changeLog = [];

    // 1. Fix missing origin
    if ((!data.origin || data.origin === '') && data.cuisines && data.cuisines.length > 0) {
      const inferred = inferOriginFromCuisines(data.cuisines);
      if (inferred) {
        data.origin = inferred;
        stats.originsFixed++;
        changed = true;
        changeLog.push(`origin: "${inferred}"`);
        if (verbose) console.log(`  [${slug}] Fixed origin to "${inferred}"`);
      }
    }

    // 2. Fill empty seasons
    if (!data.seasons || (Array.isArray(data.seasons) && data.seasons.length === 0)) {
      data.seasons = ['year-round'];
      stats.seasonsFixed++;
      changed = true;
      changeLog.push(`seasons: [year-round]`);
      if (verbose) console.log(`  [${slug}] Filled seasons with [year-round]`);
    }

    // 3. Fill empty nutritionalDensity
    if (!data.nutritionalDensity || data.nutritionalDensity === '') {
      const inferred = inferNutritionalDensityFromRole(data.role);
      data.nutritionalDensity = inferred;
      stats.densitiesFixed++;
      changed = true;
      changeLog.push(`nutritionalDensity: "${inferred}"`);
      if (verbose) console.log(`  [${slug}] Inferred nutritionalDensity: ${inferred}`);
    }

    // 4. Fill empty leftovers
    if (!data.leftovers || data.leftovers === '') {
      const inferred = inferLeftoversFromMethods(data.cookingMethods);
      data.leftovers = inferred;
      stats.leftoversFixed++;
      changed = true;
      changeLog.push(`leftovers: "${inferred}"`);
      if (verbose) console.log(`  [${slug}] Inferred leftovers: ${inferred}`);
    }

    // 5. Ensure equipment field exists
    if (!('equipment' in data)) {
      data.equipment = [];
      stats.equipmentFixed++;
      changed = true;
      changeLog.push(`equipment: []`);
      if (verbose) console.log(`  [${slug}] Added empty equipment field`);
    }

    // 6. Normalize time strings
    if (data.prepTime && typeof data.prepTime === 'string') {
      const normalized = normalizeTimeString(data.prepTime);
      if (normalized !== data.prepTime) {
        data.prepTime = normalized;
        stats.timesNormalized++;
        changed = true;
        changeLog.push(`prepTime: "${normalized}"`);
        if (verbose) console.log(`  [${slug}] Normalized prepTime: "${normalized}"`);
      }
    }
    if (data.cookTime && typeof data.cookTime === 'string') {
      const normalized = normalizeTimeString(data.cookTime);
      if (normalized !== data.cookTime) {
        data.cookTime = normalized;
        stats.timesNormalized++;
        changed = true;
        changeLog.push(`cookTime: "${normalized}"`);
        if (verbose) console.log(`  [${slug}] Normalized cookTime: "${normalized}"`);
      }
    }
    if (data.totalTime && typeof data.totalTime === 'string') {
      const normalized = normalizeTimeString(data.totalTime);
      if (normalized !== data.totalTime) {
        data.totalTime = normalized;
        stats.timesNormalized++;
        changed = true;
        changeLog.push(`totalTime: "${normalized}"`);
        if (verbose) console.log(`  [${slug}] Normalized totalTime: "${normalized}"`);
      }
    }

    // Report: empty pairsWith
    if (!data.pairsWith || (Array.isArray(data.pairsWith) && data.pairsWith.length === 0)) {
      stats.pairsWithEmpty.push(slug);
    }

    // Report: missing Chef's Note
    if (!/##\s*Chef's Note/i.test(content)) {
      stats.missingChefNote.push(slug);
    }

    // Report: missing Directions
    if (!/##\s*Directions/i.test(content)) {
      stats.missingDirections.push(slug);
    }

    // Report: short Chef's Notes
    const chefNoteMatch = content.match(/##\s*Chef's Note\s*\n([\s\S]*?)(?=\n##|\n*$)/i);
    if (chefNoteMatch) {
      const chefNoteBody = chefNoteMatch[1].trim();
      if (chefNoteBody.length < 150) {
        stats.shortChefNotes.push({ slug, length: chefNoteBody.length });
      }
    }

    // Write file if changed
    if (changed) {
      if (changeLog.length > 0) {
        updates.push({ slug, changes: changeLog });
      }
      if (!dryRun) {
        const newRaw = matter.stringify(content, data);
        await fs.writeFile(file, newRaw, 'utf8');
      }
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(70));
  console.log('BATCH IMPROVE SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total recipes scanned: ${files.length}`);
  console.log(`Dry run: ${dryRun ? 'YES (no files written)' : 'NO (files updated)'}`);
  console.log();
  console.log('FIXES APPLIED:');
  console.log(`  Origins filled:           ${stats.originsFixed}`);
  console.log(`  Seasons filled:           ${stats.seasonsFixed}`);
  console.log(`  Nutritional densities:    ${stats.densitiesFixed}`);
  console.log(`  Leftovers inferred:       ${stats.leftoversFixed}`);
  console.log(`  Time formats normalized:  ${stats.timesNormalized}`);
  console.log(`  Equipment fields added:   ${stats.equipmentFixed}`);
  console.log();
  console.log('ITEMS NEEDING MANUAL REVIEW:');
  console.log(`  Empty pairsWith:          ${stats.pairsWithEmpty.length} recipes`);
  console.log(`  Missing Chef's Note:      ${stats.missingChefNote.length} recipes`);
  console.log(`  Missing Directions:       ${stats.missingDirections.length} recipes`);
  console.log(`  Short Chef's Notes:       ${stats.shortChefNotes.length} recipes (<150 chars)`);

  if (verbose && updates.length > 0) {
    console.log();
    console.log('FILES MODIFIED:');
    for (const { slug, changes } of updates) {
      console.log(`\n  ${slug}:`);
      for (const change of changes) {
        console.log(`    - ${change}`);
      }
    }
  } else if (!dryRun && updates.length > 0) {
    console.log(`\nUse --verbose for details on ${updates.length} recipes that were modified.`);
  }

  if (stats.pairsWithEmpty.length > 0 && stats.pairsWithEmpty.length <= 20) {
    console.log();
    console.log('Recipes with empty pairsWith:');
    for (const slug of stats.pairsWithEmpty) {
      console.log(`  - ${slug}`);
    }
  } else if (stats.pairsWithEmpty.length > 20) {
    console.log();
    console.log(`Recipes with empty pairsWith (first 20 of ${stats.pairsWithEmpty.length}):`);
    for (const slug of stats.pairsWithEmpty.slice(0, 20)) {
      console.log(`  - ${slug}`);
    }
  }

  if (stats.shortChefNotes.length > 0 && stats.shortChefNotes.length <= 20) {
    console.log();
    console.log("Recipes with short Chef's Notes (<150 chars):");
    for (const { slug, length } of stats.shortChefNotes) {
      console.log(`  - ${slug} (${length} chars)`);
    }
  } else if (stats.shortChefNotes.length > 20) {
    console.log();
    console.log(`Recipes with short Chef's Notes (first 20 of ${stats.shortChefNotes.length}):`);
    for (const { slug, length } of stats.shortChefNotes.slice(0, 20)) {
      console.log(`  - ${slug} (${length} chars)`);
    }
  }

  console.log('\n' + '='.repeat(70));

  // Exit with code 0 for success
  process.exit(0);
})();
