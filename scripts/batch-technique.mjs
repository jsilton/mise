import fs from 'fs/promises';
/* eslint-disable no-console */
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');

// Cooking method to temperature mapping
const METHOD_TEMPERATURES = {
  sear: { temp: 'high heat', fahrenheit: '400-450°F', note: 'for searing' },
  sauté: { temp: 'medium heat', fahrenheit: '325-350°F', note: 'for sautéing' },
  fry: { temp: 'medium-high heat', fahrenheit: '350-375°F', note: 'for frying' },
  'pan-fry': { temp: 'medium-high heat', fahrenheit: '350-375°F', note: 'for pan-frying' },
  caramelize: { temp: 'medium-high heat', fahrenheit: '350-375°F', note: 'for caramelizing' },
  brown: { temp: 'high heat', fahrenheit: '400-450°F', note: 'to brown' },
};

// Cooking method to visual cue mapping
const METHOD_VISUAL_CUES = {
  sear: 'until golden brown and starting to crisp at the edges',
  fry: 'until golden brown and crispy',
  'pan-fry': 'until golden brown and crispy',
  sauté: 'until golden brown and softened',
  brown: 'until deeply browned',
  caramelize: 'until caramelized and golden brown',
  boil: 'until fully cooked through',
  bake: 'until golden brown and cooked through',
  roast: 'until golden brown and cooked through',
  braise: 'until a fork slides in with no resistance',
  simmer: 'until sauce coats the back of a spoon',
  stew: 'until meat is fork-tender',
  poach: 'until cooked through',
  steam: 'until tender',
};

// Protein types for resting instructions
const PROTEINS_NEEDING_REST = [
  'beef',
  'pork',
  'lamb',
  'chicken',
  'turkey',
  'duck',
  'fish',
  'salmon',
  'steak',
  'roast',
  'brisket',
  'shoulder',
  'ribs',
  'chops',
  'breast',
  'thighs',
  'tenderloin',
  'butt',
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

/**
 * Check if a step already has a temperature mention
 */
function hasTemperature(stepText) {
  return /(\d+[-–]\d+)?°[CF]|high heat|medium heat|low heat|medium-high|medium-low/.test(
    stepText
  );
}

/**
 * Check if a step has cooking method keywords
 */
function getCookingMethod(stepText) {
  const lower = stepText.toLowerCase();
  for (const method of Object.keys(METHOD_TEMPERATURES)) {
    if (lower.includes(method)) {
      return method;
    }
  }
  return null;
}

/**
 * Add temperature to a step if it has a cooking method but no temp
 */
function addTemperatureToStep(stepText) {
  const method = getCookingMethod(stepText);
  if (!method) return null; // No cooking method found

  if (hasTemperature(stepText)) return null; // Already has temperature

  const { temp, fahrenheit } = METHOD_TEMPERATURES[method];
  const insertPhrase = `${temp} (${fahrenheit})`;

  // Find the cooking method word and insert temp after it
  const regex = new RegExp(`\\b${method}\\b`, 'i');
  const match = stepText.match(regex);

  if (match) {
    const endPos = match.index + match[0].length;
    return stepText.slice(0, endPos) + ' ' + insertPhrase + stepText.slice(endPos);
  }

  return null;
}

/**
 * Check if a step needs a visual cue
 */
function needsVisualCue(stepText) {
  const vaguePhrases = [
    'cook until done',
    'cook through',
    'until cooked',
    'cook until tender',
    'until tender',
    'until soft',
    'cook on',
    'just cooked',
    'fully cooked',
    'cooked through',
    'cook until',
    'until cooked through',
  ];

  const lower = stepText.toLowerCase();
  return vaguePhrases.some(phrase => lower.includes(phrase)) && !hasGoodVisualCue(stepText);
}

/**
 * Check if step already has a good visual cue
 */
function hasGoodVisualCue(stepText) {
  const goodCues = [
    'golden brown',
    'crispy',
    'fork',
    'temperature',
    '°F',
    '°C',
    'coats the back',
    'thickened',
    'reduced',
    'bubbly',
    'charred',
    'blistered',
    'wilted',
    'translucent',
    'opaque',
    'color',
    'internal temp',
  ];

  return goodCues.some(cue => stepText.toLowerCase().includes(cue));
}

/**
 * Add visual cue to a step
 */
function addVisualCueToStep(stepText) {
  if (!needsVisualCue(stepText)) return null;

  // Determine which method is being used to pick appropriate cue
  let method = null;
  for (const m of Object.keys(METHOD_VISUAL_CUES)) {
    if (stepText.toLowerCase().includes(m)) {
      method = m;
      break;
    }
  }

  if (!method) return null;

  const cue = METHOD_VISUAL_CUES[method];
  if (!cue) return null;

  // Replace vague phrases with specific cue
  let updated = stepText.replace(
    /cook until done|cook through|until cooked|cook until tender|until tender|until soft|cook until|until cooked through/i,
    `cook ${cue}`
  );

  // Handle "just cook on" or similar
  if (updated === stepText) {
    updated = stepText.replace(/cook on/i, `cook ${cue} on`);
  }

  return updated !== stepText ? updated : null;
}

/**
 * Check if recipe needs a rest instruction for meat
 */
function needsRestInstruction(data, content) {
  // Check if it's a main protein dish
  if (data.role !== 'main') return false;

  // Check if it has searing/roasting methods
  const methods = Array.isArray(data.cookingMethods) ? data.cookingMethods : [];
  const needsRestMethods = ['sear', 'roast', 'grill', 'bake', 'braise', 'fry'];
  const hasRestMethod = methods.some(m => needsRestMethods.includes(m.toLowerCase()));

  if (!hasRestMethod) return false;

  // Check if recipe has protein-related ingredients
  const ingredientsText = Array.isArray(data.ingredients) ? data.ingredients.join(' ') : '';
  const hasProtein = PROTEINS_NEEDING_REST.some(p => ingredientsText.toLowerCase().includes(p));

  if (!hasProtein) return false;

  // Check if rest instruction already exists
  if (/rest|resting|let.*rest/i.test(content)) return false;

  return true;
}

/**
 * Determine rest time based on cooking method and protein size
 */
function getRestTime(data) {
  const methods = Array.isArray(data.cookingMethods) ? data.cookingMethods : [];
  const ingredients = Array.isArray(data.ingredients) ? data.ingredients.join(' ').toLowerCase() : '';

  // Large roasts: 10 min
  if (
    methods.some(m => m === 'roast') &&
    (ingredients.includes('roast') ||
      ingredients.includes('brisket') ||
      ingredients.includes('whole') ||
      ingredients.includes('butt'))
  ) {
    return '10';
  }

  // Braised items: 5 min
  if (methods.some(m => m === 'braise')) {
    return '5';
  }

  // Default for seared/fried: 5 min
  return '5';
}

/**
 * Extract protein name from ingredient list or method
 */
function getProteinName(data) {
  const ingredients = Array.isArray(data.ingredients) ? data.ingredients : [];
  for (const ingredient of ingredients) {
    for (const protein of PROTEINS_NEEDING_REST) {
      if (ingredient.toLowerCase().includes(protein)) {
        // Extract just the protein word with optional descriptor
        const match = ingredient.match(
          new RegExp(`(\\w+\\s+)?${protein}(s)?`, 'i')
        );
        if (match) {
          return match[0].replace(/,.*/, '').trim();
        }
      }
    }
  }
  return 'meat';
}

/**
 * Add rest instruction to end of directions
 */
function addRestInstruction(content, data) {
  const restTime = getRestTime(data);
  const proteinName = getProteinName(data);

  const restStep = `**Rest:** Let ${proteinName} rest for ${restTime} minutes before slicing or serving — the juices redistribute and every piece stays moist.`;

  return content + '\n' + restStep;
}

(async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const verbose = args.includes('--verbose');
  const limit = args.includes('--limit')
    ? parseInt(args[args.indexOf('--limit') + 1], 10)
    : dryRun
      ? 10
      : Infinity;

  const files = await listMdFiles(RECIPES_DIR);
  console.log(`Found ${files.length} recipes.\n`);

  const stats = {
    temperaturesAdded: 0,
    visualCuesAdded: 0,
    restInstructionsAdded: 0,
    recipesProcessed: 0,
  };

  const updates = [];
  let processedCount = 0;

  for (const file of files) {
    if (processedCount >= limit) break;

    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(file, '.md');

    let changed = false;
    let changeLog = [];
    let updatedContent = content;

    // 1. & 2. Add temperatures and visual cues to directions
    const directionMatch = updatedContent.match(/^## Directions\s*\n([\s\S]*?)(?=\n##|\n*$)/im);
    if (directionMatch) {
      const directionsSection = directionMatch[1];
      let modified = false;
      const steps = directionsSection.split('\n').map(line => {
        // Check if this is a numbered step with a header
        if (line.match(/^\d+\.\s+\*\*/)) {
          let updatedLine = line;

          // Try to add temperature
          const withTemp = addTemperatureToStep(updatedLine);
          if (withTemp) {
            updatedLine = withTemp;
            stats.temperaturesAdded++;
            modified = true;
            changeLog.push('temperature added');
          }

          // Try to add visual cue
          const withCue = addVisualCueToStep(updatedLine);
          if (withCue) {
            updatedLine = withCue;
            stats.visualCuesAdded++;
            modified = true;
            if (!changeLog.includes('visual cue improved')) {
              changeLog.push('visual cue improved');
            }
          }

          return updatedLine;
        }
        return line;
      });

      if (modified) {
        const newDirectionsSection = steps.join('\n');
        updatedContent = updatedContent.replace(directionMatch[0], `## Directions\n${newDirectionsSection}`);
        changed = true;
      }
    }

    // 3. Add rest instruction for meat
    if (needsRestInstruction(data, updatedContent)) {
      updatedContent = addRestInstruction(updatedContent, data);
      stats.restInstructionsAdded++;
      changed = true;
      changeLog.push('rest instruction added');
    }

    // Write file if changed
    if (changed) {
      stats.recipesProcessed++;
      if (changeLog.length > 0) {
        updates.push({ slug, changes: changeLog });
      }
      if (!dryRun) {
        const newRaw = matter.stringify(updatedContent, data);
        await fs.writeFile(file, newRaw, 'utf8');
      }
      if (verbose) {
        console.log(`[${slug}] ${changeLog.join(', ')}`);
      }
    }

    processedCount++;
  }

  // Print summary
  console.log('\n' + '='.repeat(70));
  console.log('BATCH TECHNIQUE IMPROVEMENTS');
  console.log('='.repeat(70));
  console.log(`Total recipes scanned: ${processedCount}/${files.length}`);
  console.log(`Dry run: ${dryRun ? 'YES (no files written)' : 'NO (files updated)'}`);
  console.log();
  console.log('IMPROVEMENTS APPLIED:');
  console.log(`  Temperatures added:          ${stats.temperaturesAdded}`);
  console.log(`  Visual cues improved:        ${stats.visualCuesAdded}`);
  console.log(`  Rest instructions added:     ${stats.restInstructionsAdded}`);
  console.log(`  Total recipes modified:      ${stats.recipesProcessed}`);

  if (updates.length > 0 && updates.length <= 20) {
    console.log();
    console.log('RECIPES MODIFIED:');
    for (const { slug, changes } of updates) {
      console.log(`  ${slug}: ${changes.join(', ')}`);
    }
  } else if (updates.length > 20) {
    console.log();
    console.log(`RECIPES MODIFIED (first 20 of ${updates.length}):`);
    for (const { slug, changes } of updates.slice(0, 20)) {
      console.log(`  ${slug}: ${changes.join(', ')}`);
    }
  }

  console.log('\n' + '='.repeat(70));

  // Exit with code 0 for success
  process.exit(0);
})();
