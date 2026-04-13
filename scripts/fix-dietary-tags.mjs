#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

// Comprehensive ingredient lists for dietary restrictions
const MEAT_INGREDIENTS = new Set([
  'beef',
  'pork',
  'chicken',
  'turkey',
  'lamb',
  'bacon',
  'ham',
  'sausage',
  'prosciutto',
  'pancetta',
  'duck',
  'veal',
  'venison',
  'brisket',
  'steak',
  'ground beef',
  'ground pork',
  'ground lamb',
  'ground chicken',
  'ground turkey',
]);

const FISH_SEAFOOD_INGREDIENTS = new Set([
  'anchovy',
  'anchovies',
  'fish',
  'shrimp',
  'salmon',
  'tuna',
  'crab',
  'lobster',
  'cod',
  'halibut',
  'snapper',
  'mackerel',
  'sardine',
  'sardines',
  'clam',
  'clams',
  'mussel',
  'mussels',
  'oyster',
  'oysters',
  'scallop',
  'scallops',
  'squid',
  'octopus',
  'prawns',
  'prawn',
]);

const DAIRY_INGREDIENTS = new Set([
  'egg',
  'eggs',
  'butter',
  'cream',
  'milk',
  'cheese',
  'cheddar',
  'parmesan',
  'mozzarella',
  'ricotta',
  'feta',
  'goat cheese',
  'brie',
  'yogurt',
  'greek yogurt',
  'sour cream',
  'buttermilk',
  'ghee',
  'whey',
  'casein',
  'mascarpone',
  'cream cheese',
]);

const OTHER_ANIMAL_INGREDIENTS = new Set([
  'honey',
  'gelatin',
]);

const GLUTEN_INGREDIENTS = new Set([
  'flour',
  'bread',
  'breadcrumbs',
  'panko',
  'croutons',
  'pasta',
  'noodles',
  'soy sauce',
  'wheat',
  'barley',
  'rye',
  'tortilla',
  'bran',
  'bulgur',
  'couscous',
  'orzo',
  'matzo',
  'tempeh',
]);

// Exceptions: items that contain ingredient words but are fine
const EXCEPTIONS = {
  vegetarian: new Set([
    'vegetable stock',
    'chicken stock',
    'beef stock',
    'fish stock',
    'seafood stock',
    'mushroom stock',
    'vegetable broth',
    'chicken broth',
    'beef broth',
  ]),
  vegan: new Set([
    'vegetable stock',
    'mushroom stock',
    'vegetable broth',
  ]),
  glutenFree: new Set([
    'tamari',
    'gf flour',
    'gluten-free flour',
    'rice noodles',
    'glass noodles',
    'sweet potato noodles',
    'gf pasta',
    'gluten-free pasta',
    'rice pasta',
    'corn tortilla',
  ]),
};

/**
 * Extract normalized ingredient keywords from ingredient string
 */
function extractIngredientKeywords(ingredient) {
  // Normalize: lowercase, remove quantities and units
  const normalized = ingredient
    .toLowerCase()
    .replace(/^\d+[\s/]*\d*\s*[a-z]*\s*/, '') // remove quantities like "2 lbs", "1/2 cup"
    .replace(/\([^)]*\)/g, '') // remove parentheticals
    .trim();
  return normalized;
}

/**
 * Check if ingredient violates vegetarian/vegan/gluten-free requirements
 */
function checkDietaryViolations(ingredients, dietaryTags) {
  const violations = [];

  // Check each dietary tag
  if (dietaryTags.includes('vegetarian')) {
    for (const ing of ingredients) {
      const normalized = extractIngredientKeywords(ing);

      // Skip exceptions
      let isException = false;
      for (const exc of EXCEPTIONS.vegetarian) {
        if (normalized.includes(exc)) {
          isException = true;
          break;
        }
      }
      if (isException) continue;

      // Check for meat/fish
      for (const meat of MEAT_INGREDIENTS) {
        if (normalized.includes(meat)) {
          violations.push({
            tag: 'vegetarian',
            ingredient: ing,
            reason: `contains "${meat}"`,
          });
          break;
        }
      }
      for (const fish of FISH_SEAFOOD_INGREDIENTS) {
        if (normalized.includes(fish)) {
          violations.push({
            tag: 'vegetarian',
            ingredient: ing,
            reason: `contains "${fish}"`,
          });
          break;
        }
      }
    }
  }

  if (dietaryTags.includes('vegan')) {
    for (const ing of ingredients) {
      const normalized = extractIngredientKeywords(ing);

      // Skip exceptions
      let isException = false;
      for (const exc of EXCEPTIONS.vegan) {
        if (normalized.includes(exc)) {
          isException = true;
          break;
        }
      }
      if (isException) continue;

      // Check for meat/fish
      for (const meat of MEAT_INGREDIENTS) {
        if (normalized.includes(meat)) {
          violations.push({
            tag: 'vegan',
            ingredient: ing,
            reason: `contains "${meat}"`,
          });
          break;
        }
      }
      for (const fish of FISH_SEAFOOD_INGREDIENTS) {
        if (normalized.includes(fish)) {
          violations.push({
            tag: 'vegan',
            ingredient: ing,
            reason: `contains "${fish}"`,
          });
          break;
        }
      }
      for (const dairy of DAIRY_INGREDIENTS) {
        if (normalized.includes(dairy)) {
          violations.push({
            tag: 'vegan',
            ingredient: ing,
            reason: `contains "${dairy}"`,
          });
          break;
        }
      }
      for (const animal of OTHER_ANIMAL_INGREDIENTS) {
        if (normalized.includes(animal)) {
          violations.push({
            tag: 'vegan',
            ingredient: ing,
            reason: `contains "${animal}"`,
          });
          break;
        }
      }
    }
  }

  if (dietaryTags.includes('gluten-free')) {
    for (const ing of ingredients) {
      const normalized = extractIngredientKeywords(ing);

      // Skip exceptions
      let isException = false;
      for (const exc of EXCEPTIONS.glutenFree) {
        if (normalized.includes(exc)) {
          isException = true;
          break;
        }
      }
      if (isException) continue;

      // Check for gluten
      for (const gluten of GLUTEN_INGREDIENTS) {
        if (normalized.includes(gluten)) {
          violations.push({
            tag: 'gluten-free',
            ingredient: ing,
            reason: `contains "${gluten}"`,
          });
          break;
        }
      }
    }
  }

  return violations;
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

async function main() {
  const files = await listMdFiles(RECIPES_DIR);
  const report = {
    total: files.length,
    fixed: 0,
    violations: [],
  };

  console.log(`Processing ${files.length} recipes...`);
  console.log(isDryRun ? '(DRY RUN - no changes will be made)\n' : '\n');

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);

    const slug = path.basename(file, '.md');
    const dietary = Array.isArray(data.dietary) ? data.dietary : [];
    const ingredients = Array.isArray(data.ingredients) ? data.ingredients : [];

    if (dietary.length === 0) continue; // Skip recipes with no dietary tags

    const violations = checkDietaryViolations(ingredients, dietary);
    if (violations.length === 0) continue; // No violations

    // Group violations by tag
    const violationsByTag = {};
    for (const v of violations) {
      if (!violationsByTag[v.tag]) {
        violationsByTag[v.tag] = [];
      }
      violationsByTag[v.tag].push(v);
    }

    // Log violations
    console.log(`${slug}:`);
    for (const tag of Object.keys(violationsByTag)) {
      console.log(`  ${tag}: ${violationsByTag[tag].length} violation(s)`);
      for (const v of violationsByTag[tag].slice(0, 3)) {
        console.log(`    - "${v.ingredient}" (${v.reason})`);
      }
      if (violationsByTag[tag].length > 3) {
        console.log(`    ... and ${violationsByTag[tag].length - 3} more`);
      }
    }

    // Track in report
    report.violations.push({
      slug,
      violations: violationsByTag,
    });

    // Fix: remove problematic tags
    if (!isDryRun) {
      const newDietary = dietary.filter(
        (tag) => !violationsByTag[tag],
      );
      data.dietary = newDietary;

      // Reconstruct file with updated frontmatter
      const newContent = matter.stringify(content, data);
      await fs.writeFile(file, newContent, 'utf8');
      report.fixed++;
      console.log(`  FIXED: removed ${Object.keys(violationsByTag).join(', ')}\n`);
    } else {
      console.log(
        `  WOULD FIX: remove ${Object.keys(violationsByTag).join(', ')}\n`,
      );
    }
  }

  // Summary
  console.log('\n========== SUMMARY ==========');
  console.log(`Total recipes: ${report.total}`);
  console.log(`Recipes with violations: ${report.violations.length}`);
  console.log(`${isDryRun ? 'Would fix' : 'Fixed'}: ${report.fixed}`);

  if (report.violations.length > 0) {
    console.log('\nViolations by tag:');
    const tagCounts = {};
    for (const rec of report.violations) {
      for (const tag of Object.keys(rec.violations)) {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      }
    }
    for (const [tag, count] of Object.entries(tagCounts)) {
      console.log(`  ${tag}: ${count} recipes`);
    }
  }

  if (isDryRun) {
    console.log('\nRun without --dry-run to apply fixes.');
  }
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
