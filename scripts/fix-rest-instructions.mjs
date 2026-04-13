import fs from 'fs/promises';
/* eslint-disable no-console */
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');

// Protein keywords to extract from ingredients
const PROTEIN_KEYWORDS = [
  'chicken',
  'beef',
  'pork',
  'lamb',
  'fish',
  'shrimp',
  'salmon',
  'turkey',
  'steak',
  'brisket',
  'duck',
];

// Recipe categories that should NOT have rest instructions
const NON_PROTEIN_ROLES = ['side', 'dessert', 'drink', 'condiment', 'base'];
const NON_PROTEIN_TITLES = [
  'soup',
  'salad',
  'bar',
  'cookie',
  'oatmeal',
  'bread',
  'muffin',
  'smoothie',
  'dip',
  'sauce',
  'dressing',
  'hummus',
  'guacamole',
  'rice',
  'quinoa',
  'couscous',
  'polenta',
];

// Broken rest instruction patterns
const BROKEN_PATTERNS = [
  /\*\*Rest:\*\*\s+Let\s+(Unsalted\s+Butt)\s+rest/i,
  /\*\*Rest:\*\*\s+Let\s+(?:the\s+)?lbs\s+/i,
  /\*\*Rest:\*\*\s+Let\s+(?:the\s+)?oz\s+/i,
  /\*\*Rest:\*\*\s+Let\s+(?:the\s+)?cups\s+/i,
  /\*\*Rest:\*\*\s+Let\s+(?:the\s+)?tbsp\s+/i,
  /\*\*Rest:\*\*\s+Let\s+(?:the\s+)?tsp\s+/i,
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
 * Check if recipe is a non-protein recipe (dessert, soup, etc)
 */
function isNonProteinRecipe(data, title) {
  // Check role
  if (data.role && NON_PROTEIN_ROLES.includes(data.role)) {
    return true;
  }

  // Check title for non-protein keywords
  const lowerTitle = title.toLowerCase();
  if (NON_PROTEIN_TITLES.some(keyword => lowerTitle.includes(keyword))) {
    return true;
  }

  return false;
}

/**
 * Check if content has a broken rest instruction
 */
function hasBrokenRestInstruction(content) {
  return BROKEN_PATTERNS.some(pattern => pattern.test(content));
}

/**
 * Extract protein name from ingredient list
 */
function extractProteinFromIngredients(ingredients) {
  if (!Array.isArray(ingredients)) return null;

  for (const ingredient of ingredients) {
    const lowerIngredient = ingredient.toLowerCase();
    for (const protein of PROTEIN_KEYWORDS) {
      if (lowerIngredient.includes(protein)) {
        // Extract the protein with optional descriptor
        // e.g., "2 lbs Boneless, Skinless Chicken Thighs" -> "chicken thighs"
        const match = ingredient.match(
          new RegExp(`([a-z\\s,]*?${protein}[a-z\\s]*)`, 'i')
        );
        if (match) {
          let result = match[0]
            .split(',')[0] // Remove qualifiers after commas
            .toLowerCase()
            .trim();

          // Remove leading units (lbs, oz, tbsp, tsp, cups) and quantities
          // Match: optional digits, optional spaces/dots, unit, optional spaces
          result = result.replace(/^\d*[\s.]*(?:lbs?|oz|tbsp|tsp|cups?|g)[\s.]*/, '').trim();

          return result;
        }
      }
    }
  }

  return null;
}

/**
 * Extract rest time from broken instruction
 */
function extractRestTime(restInstruction) {
  const match = restInstruction.match(/rest for (\d+) minutes/i);
  return match ? match[1] : '5';
}

/**
 * Remove the entire rest step (either numbered or standalone)
 */
function removeRestStep(content) {
  // First try removing numbered step: `\d+.\s**Rest:**...`
  let updated = content.replace(/\n\d+\.\s+\*\*Rest:\*\*[^\n]*\n?/m, '\n');

  // If that didn't work, try removing standalone: `**Rest:**...` at the end
  if (updated === content) {
    updated = content.replace(/\n\*\*Rest:\*\*\s+Let\s+(?:the\s+)?(?:Unsalted\s+Butt|lbs|oz|cups|tbsp|tsp)[^\n]*\n?/im, '\n');
  }

  return updated;
}

/**
 * Replace broken rest instruction with corrected one
 */
function fixBrokenRestInstruction(content, proteinName, restTime) {
  const correctedStep = `**Rest:** Let the ${proteinName} rest for ${restTime} minutes before slicing — the juices redistribute and every slice stays moist.`;

  // Replace numbered step first
  let updated = content.replace(
    /\d+\.\s+\*\*Rest:\*\*\s+Let\s+(?:the\s+)?(?:Unsalted\s+Butt|lbs|oz|cups|tbsp|tsp)[^\n.]*\.?/im,
    correctedStep + '.'
  );

  // If that didn't work, replace standalone
  if (updated === content) {
    updated = content.replace(
      /\*\*Rest:\*\*\s+Let\s+(?:the\s+)?(?:Unsalted\s+Butt|lbs|oz|cups|tbsp|tsp)[^\n.]*\.?/im,
      correctedStep + '.'
    );
  }

  return updated;
}

(async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const verbose = args.includes('--verbose');

  const files = await listMdFiles(RECIPES_DIR);
  console.log(`Found ${files.length} recipes.\n`);

  const stats = {
    removedFromNonProtein: 0,
    fixedGarbledText: 0,
    totalProcessed: 0,
  };

  const updates = [];

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(file, '.md');

    if (!hasBrokenRestInstruction(content)) {
      continue;
    }

    stats.totalProcessed++;
    let updatedContent = content;
    let changeType = null;

    // Check if this is a non-protein recipe (should remove rest entirely)
    if (isNonProteinRecipe(data, data.title || '')) {
      updatedContent = removeRestStep(content);
      stats.removedFromNonProtein++;
      changeType = 'removed-from-non-protein';
    } else {
      // This is a meat recipe - try to fix the garbled text
      const proteinName = extractProteinFromIngredients(data.ingredients);
      if (proteinName) {
        const restTime = extractRestTime(content);
        updatedContent = fixBrokenRestInstruction(content, proteinName, restTime);
        stats.fixedGarbledText++;
        changeType = 'fixed-garbled-text';
      } else {
        // Protein recipe but we can't extract protein - remove the broken instruction
        updatedContent = removeRestStep(content);
        stats.removedFromNonProtein++;
        changeType = 'removed-unable-to-extract';
      }
    }

    // Write file if changed
    if (updatedContent !== content && !dryRun) {
      const newRaw = matter.stringify(updatedContent, data);
      await fs.writeFile(file, newRaw, 'utf8');
    }

    if (changeType) {
      updates.push({ slug, changeType });
      if (verbose) {
        console.log(`[${slug}] ${changeType}`);
      }
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(70));
  console.log('FIX REST INSTRUCTIONS REPORT');
  console.log('='.repeat(70));
  console.log(`Total recipes scanned:        ${files.length}`);
  console.log(`Broken rest instructions:     ${stats.totalProcessed}`);
  console.log(`Dry run:                      ${dryRun ? 'YES (no files written)' : 'NO (files updated)'}`);
  console.log();
  console.log('FIXES APPLIED:');
  console.log(`  Removed from non-protein:    ${stats.removedFromNonProtein}`);
  console.log(`  Fixed garbled text:          ${stats.fixedGarbledText}`);

  if (updates.length > 0 && updates.length <= 50) {
    console.log();
    console.log('RECIPES MODIFIED:');
    for (const { slug, changeType } of updates) {
      console.log(`  ${slug}: ${changeType}`);
    }
  } else if (updates.length > 50) {
    console.log();
    console.log(`RECIPES MODIFIED (first 50 of ${updates.length}):`);
    for (const { slug, changeType } of updates.slice(0, 50)) {
      console.log(`  ${slug}: ${changeType}`);
    }
  }

  console.log('\n' + '='.repeat(70));

  process.exit(0);
})();
