import fs from 'fs/promises';

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
  return /(\d+[-–]\d+)?°[CF]|high heat|medium heat|low heat|medium-high|medium-low/.test(stepText);
}

/**
 * Check if a step has cooking method keywords (word-boundary safe)
 */
function getCookingMethod(stepText) {
  // Only check the body text, not the bold header label, to prevent
  // injecting temperatures into header words like "Brown the Butter"
  const bodyText = extractStepBody(stepText);
  const lower = bodyText.toLowerCase();
  for (const method of Object.keys(METHOD_TEMPERATURES)) {
    // Use word boundaries to avoid false positives:
    // "brown" should not match "brownie", "sear" should not match "search"
    const wordBoundaryRegex = new RegExp(`\\b${method}\\b`, 'i');
    if (wordBoundaryRegex.test(lower)) {
      return method;
    }
  }
  return null;
}

/**
 * Extract the body text of a step (everything after the bold ** header **)
 * e.g. "1. **The Sear:** Heat oil..." → "Heat oil..."
 */
function extractStepBody(stepText) {
  // Match numbered step with bold header: "1.  **Header:** body text"
  const headerMatch = stepText.match(/^\d+\.\s+\*\*[^*]+\*\*:?\s*(.*)/s);
  if (headerMatch) {
    return headerMatch[1];
  }
  return stepText;
}

/**
 * Add temperature to a step if it has a cooking method but no temp
 * Temperature is only inserted into the body text, never the header.
 */
function addTemperatureToStep(stepText) {
  const method = getCookingMethod(stepText);
  if (!method) return null; // No cooking method found

  if (hasTemperature(stepText)) return null; // Already has temperature

  const { temp, fahrenheit } = METHOD_TEMPERATURES[method];
  const insertPhrase = `${temp} (${fahrenheit})`;

  // Split the line into header and body to only modify the body
  const headerMatch = stepText.match(/^(\d+\.\s+\*\*[^*]+\*\*:?\s*)(.*)/s);
  if (headerMatch) {
    const header = headerMatch[1];
    const body = headerMatch[2];

    // Find the cooking method word in the body only
    const regex = new RegExp(`\\b${method}\\b`, 'i');
    const match = body.match(regex);
    if (match) {
      const endPos = match.index + match[0].length;
      const newBody = body.slice(0, endPos) + ' ' + insertPhrase + body.slice(endPos);
      return header + newBody;
    }
    return null;
  }

  // Fallback for lines without bold header
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
  return vaguePhrases.some((phrase) => lower.includes(phrase)) && !hasGoodVisualCue(stepText);
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

  return goodCues.some((cue) => stepText.toLowerCase().includes(cue));
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
    const changeLog = [];
    let updatedContent = content;

    // 1. & 2. Add temperatures and visual cues to directions
    const directionMatch = updatedContent.match(/^## Directions\s*\n([\s\S]*?)(?=\n##|\n*$)/im);
    if (directionMatch) {
      const directionsSection = directionMatch[1];
      let modified = false;
      const steps = directionsSection.split('\n').map((line) => {
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
        updatedContent = updatedContent.replace(
          directionMatch[0],
          `## Directions\n${newDirectionsSection}`
        );
        changed = true;
      }
    }

    // Resting requirements need recipe-specific review. Do not infer them from
    // ingredient substrings (for example, "butt" also matches "butter").

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
