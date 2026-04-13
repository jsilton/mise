#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Deep Recipe Review Tool
 * Finds quality issues that the basic linter can't catch
 *
 * Analyses:
 * 1. Duplicate/Variation Detection
 * 2. Embedded Sub-Recipe Detection
 * 3. Orphaned Recipe Detection
 * 4. Relationship Inference
 * 5. Complexity/Difficulty Mismatch
 * 6. Missing Metadata Completeness
 *
 * Usage: node scripts/deep-review.mjs [--section=NAME]
 * Example: node scripts/deep-review.mjs --section=duplicates
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = './src/content/recipes';
const IGNORE_FILES = ['index.json', 'validation-report.json', 'batch-summary.json', '.DS_Store'];
const SECTION_ARG = process.argv.find(arg => arg.startsWith('--section='))?.split('=')[1];

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function section(title) {
  console.log('\n' + '='.repeat(70));
  log(title, 'cyan');
  console.log('='.repeat(70));
}

// ============================================================================
// LEVENSHTEIN DISTANCE (for string similarity)
// ============================================================================

function levenshteinDistance(a, b) {
  const matrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  return matrix[b.length][a.length];
}

function stringSimilarity(a, b) {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  const distance = levenshteinDistance(a.toLowerCase(), b.toLowerCase());
  return 1 - distance / maxLen;
}

// ============================================================================
// LOAD ALL RECIPES
// ============================================================================

function loadAllRecipes() {
  const files = fs
    .readdirSync(RECIPES_DIR)
    .filter(f => !IGNORE_FILES.includes(f) && f.endsWith('.md'));

  const recipes = new Map(); // slug -> { slug, data, body, file }

  files.forEach(file => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(RECIPES_DIR, file), 'utf-8');
    const parsed = matter(content);

    recipes.set(slug, {
      slug,
      data: parsed.data,
      body: parsed.content,
      file,
    });
  });

  return recipes;
}

// ============================================================================
// ANALYSIS FUNCTIONS
// ============================================================================

function analyzeDuplicates(recipes) {
  const results = {
    titleSimilarities: [],
    possibleVariations: [],
  };

  const slugArray = Array.from(recipes.keys());

  // Compare all pairs of recipes
  for (let i = 0; i < slugArray.length; i++) {
    for (let j = i + 1; j < slugArray.length; j++) {
      const slug1 = slugArray[i];
      const slug2 = slugArray[j];
      const recipe1 = recipes.get(slug1);
      const recipe2 = recipes.get(slug2);

      // Title similarity
      const title1 = recipe1.data.title || '';
      const title2 = recipe2.data.title || '';
      const similarity = stringSimilarity(title1, title2);

      if (similarity > 0.7) {
        results.titleSimilarities.push({
          recipe1: slug1,
          recipe2: slug2,
          title1,
          title2,
          similarity: (similarity * 100).toFixed(1),
        });
      }

      // Check for possible variations (same cookingMethods + cuisines + role)
      const methods1 = (recipe1.data.cookingMethods || []).sort().join(',');
      const methods2 = (recipe2.data.cookingMethods || []).sort().join(',');
      const cuisines1 = (recipe1.data.cuisines || []).sort().join(',');
      const cuisines2 = (recipe2.data.cuisines || []).sort().join(',');
      const role1 = recipe1.data.role || '';
      const role2 = recipe2.data.role || '';

      if (methods1 === methods2 && cuisines1 === cuisines2 && role1 === role2 && methods1) {
        results.possibleVariations.push({
          recipe1: slug1,
          recipe2: slug2,
          title1,
          title2,
          commonMethods: methods1,
          commonCuisines: cuisines1,
          role: role1,
        });
      }
    }
  }

  return results;
}

function analyzeEmbeddedSubRecipes(recipes) {
  const results = [];

  recipes.forEach((recipe, slug) => {
    const ingredients = recipe.data.ingredients || [];
    const sectionCount = ingredients.filter(ing => typeof ing === 'string' && ing.trim().startsWith('---')).length;
    const totalIngredients = ingredients.filter(ing => typeof ing === 'string' && !ing.trim().startsWith('---')).length;

    const issues = [];
    const suggestions = [];

    if (sectionCount >= 4) {
      issues.push(`Has ${sectionCount} ingredient sections (possible embedded complexity)`);
    }

    if (totalIngredients > 25) {
      issues.push(`${totalIngredients} ingredients (unusually long list)`);
    }

    // Check if section labels match existing recipes
    ingredients.forEach(ing => {
      if (typeof ing === 'string' && ing.trim().startsWith('---')) {
        const label = ing
          .trim()
          .replace(/^-+\s*/, '')
          .replace(/\s*-+$/, '')
          .toLowerCase();
        const normalized = label.replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');

        if (recipes.has(normalized)) {
          suggestions.push(`Section "${label}" matches recipe: ${normalized}`);
        }
      }
    });

    if (issues.length > 0 || suggestions.length > 0) {
      results.push({
        slug,
        title: recipe.data.title,
        sectionCount,
        totalIngredients,
        issues,
        suggestions,
      });
    }
  });

  return results.sort((a, b) => (b.sectionCount + b.totalIngredients) - (a.sectionCount + a.totalIngredients));
}

function analyzeOrphaned(recipes) {
  const results = {
    orphanedRecipes: [],
    deadLinks: [],
    neverPairedBases: [],
  };

  const allReferencedSlugs = new Set();

  // Build graph of all pairsWith references
  recipes.forEach(recipe => {
    if (recipe.data.pairsWith && Array.isArray(recipe.data.pairsWith)) {
      recipe.data.pairsWith.forEach(slug => {
        allReferencedSlugs.add(slug);

        // Check if the referenced recipe exists
        if (!recipes.has(slug)) {
          results.deadLinks.push({
            from: recipe.slug,
            title: recipe.data.title,
            deadLink: slug,
          });
        }
      });
    }
  });

  // Find orphaned recipes (never referenced by others)
  recipes.forEach((recipe, slug) => {
    if (!allReferencedSlugs.has(slug) && recipe.data.role === 'main') {
      results.orphanedRecipes.push({
        slug,
        title: recipe.data.title,
      });
    }
  });

  // Find base/condiment/sauce recipes that are never paired
  recipes.forEach((recipe, slug) => {
    const isBase = ['base', 'condiment', 'sauce'].includes(recipe.data.role);
    if (isBase && !allReferencedSlugs.has(slug)) {
      results.neverPairedBases.push({
        slug,
        title: recipe.data.title,
        role: recipe.data.role,
      });
    }
  });

  return results;
}

function analyzeRelationships(recipes) {
  const results = [];
  const slugArray = Array.from(recipes.keys());

  for (let i = 0; i < slugArray.length; i++) {
    for (let j = i + 1; j < slugArray.length; j++) {
      const slug1 = slugArray[i];
      const slug2 = slugArray[j];
      const recipe1 = recipes.get(slug1);
      const recipe2 = recipes.get(slug2);

      const suggestions = [];

      // Check name similarity for variations
      const title1 = recipe1.data.title || '';
      const title2 = recipe2.data.title || '';
      const titleSim = stringSimilarity(title1, title2);

      if (titleSim > 0.6 && titleSim <= 0.7) {
        suggestions.push(`Similar names (${(titleSim * 100).toFixed(0)}%): might be variations`);
      }

      // Check for shared ingredients
      const ingredients1 = (recipe1.data.ingredients || [])
        .filter(i => typeof i === 'string' && !i.includes('---'))
        .map(i => i.toLowerCase().replace(/[^a-z0-9]/g, ''));
      const ingredients2 = (recipe2.data.ingredients || [])
        .filter(i => typeof i === 'string' && !i.includes('---'))
        .map(i => i.toLowerCase().replace(/[^a-z0-9]/g, ''));

      const shared = ingredients1.filter(ing => ingredients2.some(ing2 => ing.includes(ing2) || ing2.includes(ing)));

      if (shared.length >= 3 && recipe1.data.cuisines === recipe2.data.cuisines) {
        suggestions.push(`${shared.length} shared ingredients and same cuisine family`);
      }

      if (suggestions.length > 0) {
        results.push({
          recipe1: { slug: slug1, title: title1 },
          recipe2: { slug: slug2, title: title2 },
          suggestions,
        });
      }
    }
  }

  return results;
}

function analyzeComplexityMismatch(recipes) {
  const results = [];

  recipes.forEach((recipe, slug) => {
    const difficulty = recipe.data.difficulty;
    const vibe = recipe.data.vibe;
    const totalTime = recipe.data.totalTime;
    const ingredients = (recipe.data.ingredients || []).filter(i => typeof i === 'string' && !i.includes('---'));
    const directionSteps = recipe.body.match(/^\d+\.\s+\*\*/gm) || [];

    const issues = [];

    // Parse totalTime to minutes
    let totalMinutes = 0;
    if (totalTime) {
      const match = totalTime.match(/(\d+)/);
      if (match) totalMinutes = parseInt(match[1], 10);
    }

    // Difficulty mismatches
    if (difficulty === 'easy' && ingredients.length > 15) {
      issues.push(`Marked easy but has ${ingredients.length} ingredients`);
    }
    if (difficulty === 'easy' && totalMinutes > 45) {
      issues.push(`Marked easy but totalTime is ${totalMinutes} min`);
    }

    if (difficulty === 'advanced' && ingredients.length < 10) {
      issues.push(`Marked advanced but only ${ingredients.length} ingredients`);
    }
    if (difficulty === 'advanced' && totalMinutes < 30) {
      issues.push(`Marked advanced but totalTime is ${totalMinutes} min`);
    }

    // Vibe mismatches
    if (vibe === 'quick' && totalMinutes > 40) {
      issues.push(`Marked quick but totalTime is ${totalMinutes} min`);
    }

    if (issues.length > 0) {
      results.push({
        slug,
        title: recipe.data.title,
        difficulty,
        vibe,
        totalTime,
        ingredients: ingredients.length,
        directionSteps: directionSteps.length,
        issues,
      });
    }
  });

  return results;
}

function analyzeMetadataCompleteness(recipes) {
  const results = [];

  recipes.forEach((recipe, slug) => {
    let score = 0;
    const maxScore = 100;
    const missing = [];

    // Check each field
    if (recipe.data.role) score += 5;
    else missing.push('role');

    if (recipe.data.vibe) score += 5;
    else missing.push('vibe');

    if (recipe.data.difficulty) score += 5;
    else missing.push('difficulty');

    if (recipe.data.cuisines && recipe.data.cuisines.length > 0) score += 10;
    else missing.push('cuisines');

    if (recipe.data.cookingMethods && recipe.data.cookingMethods.length > 0) score += 10;
    else missing.push('cookingMethods');

    if (recipe.data.dietary && recipe.data.dietary.length > 0) score += 10;
    else missing.push('dietary');

    if (recipe.data.occasions && recipe.data.occasions.length > 0) score += 5;
    else missing.push('occasions');

    if (recipe.data.flavorProfile && recipe.data.flavorProfile.length > 0) score += 5;
    else missing.push('flavorProfile');

    if (recipe.data.seasons && recipe.data.seasons.length > 0) score += 5;
    else missing.push('seasons');

    if (recipe.data.nutritionalDensity) score += 5;
    else missing.push('nutritionalDensity');

    if (recipe.data.leftovers) score += 5;
    else missing.push('leftovers');

    if (recipe.data.pairsWith && recipe.data.pairsWith.length >= 2) score += 10;
    else missing.push('pairsWith (2+)');

    if (recipe.data.nutrition && Object.keys(recipe.data.nutrition).length > 0) score += 10;
    else missing.push('nutrition');

    if (recipe.data.advancePrep && recipe.data.advancePrep.length > 0) score += 5;
    else missing.push('advancePrep');

    if (recipe.data.equipment && recipe.data.equipment.length > 0) score += 5;
    else missing.push('equipment');

    results.push({
      slug,
      title: recipe.data.title,
      score,
      missing,
      percentComplete: ((score / maxScore) * 100).toFixed(0),
    });
  });

  return results.sort((a, b) => a.score - b.score);
}

// ============================================================================
// REPORT GENERATION
// ============================================================================

function formatReport(recipes, allResults) {
  const report = {
    timestamp: new Date().toISOString(),
    recipeCount: recipes.size,
    analyses: allResults,
  };

  return report;
}

function printReport(title, section, items) {
  log(title, 'blue');

  if (!items || items.length === 0) {
    log('  (none found)', 'green');
    return 0;
  }

  if (Array.isArray(items)) {
    items.forEach(item => {
      if (typeof item === 'string') {
        log(`  • ${item}`);
      } else if (typeof item === 'object') {
        log(`  • ${JSON.stringify(item)}`);
      }
    });
  }

  return items.length;
}

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  const recipes = loadAllRecipes();
  const allResults = {};

  log(`\nDeep Recipe Review — analyzing ${recipes.size} recipes\n`, 'cyan');

  // 1. Duplicates
  if (!SECTION_ARG || SECTION_ARG === 'duplicates') {
    section('1. DUPLICATE/VARIATION DETECTION');
    const dups = analyzeDuplicates(recipes);

    if (dups.titleSimilarities.length > 0) {
      log('Title Similarities (>70%):', 'blue');
      dups.titleSimilarities.forEach(d => {
        log(`  ${d.recipe1} ↔ ${d.recipe2}`, 'yellow');
        log(`    "${d.title1}" vs "${d.title2}" (${d.similarity}%)`, 'gray');
      });
      log('');
    }

    if (dups.possibleVariations.length > 0) {
      log('Possible Variations (same methods + cuisines + role):', 'blue');
      dups.possibleVariations.forEach(v => {
        log(`  ${v.recipe1} ↔ ${v.recipe2}`, 'yellow');
        log(`    "${v.title1}" vs "${v.title2}"`, 'gray');
      });
    }

    allResults.duplicates = dups;
  }

  // 2. Embedded Sub-Recipes
  if (!SECTION_ARG || SECTION_ARG === 'embedded') {
    section('2. EMBEDDED SUB-RECIPE DETECTION');
    const embedded = analyzeEmbeddedSubRecipes(recipes);

    if (embedded.length > 0) {
      embedded.forEach(e => {
        log(`${e.slug}`, 'yellow');
        log(`  "${e.title}" — ${e.sectionCount} sections, ${e.totalIngredients} ingredients`, 'gray');
        e.issues.forEach(i => log(`  ✗ ${i}`, 'red'));
        e.suggestions.forEach(s => log(`  ✓ ${s}`, 'green'));
      });
    } else {
      log('(no complex embedded recipes found)', 'green');
    }

    allResults.embedded = embedded;
  }

  // 3. Orphaned
  if (!SECTION_ARG || SECTION_ARG === 'orphaned') {
    section('3. ORPHANED RECIPE DETECTION');
    const orphaned = analyzeOrphaned(recipes);

    if (orphaned.deadLinks.length > 0) {
      log('Dead pairsWith Links:', 'blue');
      orphaned.deadLinks.forEach(d => {
        log(`  ${d.from} → ${d.deadLink}`, 'red');
      });
      log('');
    }

    if (orphaned.orphanedRecipes.length > 0) {
      log(`Main recipes never referenced (${orphaned.orphanedRecipes.length}):`, 'blue');
      orphaned.orphanedRecipes.forEach(o => {
        log(`  ${o.slug} — "${o.title}"`, 'yellow');
      });
      log('');
    }

    if (orphaned.neverPairedBases.length > 0) {
      log(`Base/Condiment/Sauce recipes never paired (${orphaned.neverPairedBases.length}):`, 'blue');
      orphaned.neverPairedBases.forEach(b => {
        log(`  ${b.slug} (${b.role}) — "${b.title}"`, 'yellow');
      });
    }

    allResults.orphaned = orphaned;
  }

  // 4. Relationships
  if (!SECTION_ARG || SECTION_ARG === 'relationships') {
    section('4. RELATIONSHIP INFERENCE');
    const relationships = analyzeRelationships(recipes);

    if (relationships.length > 0) {
      log(`Suggested relationships (${relationships.length}):`, 'blue');
      relationships.forEach(r => {
        log(`  ${r.recipe1.slug} ↔ ${r.recipe2.slug}`, 'yellow');
        r.suggestions.forEach(s => log(`    • ${s}`, 'gray'));
      });
    } else {
      log('(no suggested relationships found)', 'green');
    }

    allResults.relationships = relationships;
  }

  // 5. Complexity Mismatch
  if (!SECTION_ARG || SECTION_ARG === 'complexity') {
    section('5. COMPLEXITY/DIFFICULTY MISMATCH');
    const mismatches = analyzeComplexityMismatch(recipes);

    if (mismatches.length > 0) {
      log(`Recipes with mismatched difficulty (${mismatches.length}):`, 'blue');
      mismatches.forEach(m => {
        log(`  ${m.slug} — ${m.difficulty} / ${m.vibe}`, 'yellow');
        log(`    "${m.title}" (${m.totalTime}, ${m.ingredients} ingredients, ${m.directionSteps} steps)`, 'gray');
        m.issues.forEach(i => log(`    ✗ ${i}`, 'red'));
      });
    } else {
      log('(no mismatches found)', 'green');
    }

    allResults.complexity = mismatches;
  }

  // 6. Metadata Completeness
  if (!SECTION_ARG || SECTION_ARG === 'metadata') {
    section('6. METADATA COMPLETENESS SCORING');
    const metadata = analyzeMetadataCompleteness(recipes);

    // Show lowest scoring
    const lowest = metadata.slice(0, 20);
    log(`Lowest scoring recipes (bottom 20):`, 'blue');
    lowest.forEach(m => {
      const color = m.score < 40 ? 'red' : m.score < 60 ? 'yellow' : 'yellow';
      log(`  ${m.slug} — ${m.score}/100 (${m.percentComplete}%)`, color);
      if (m.missing.length > 0) {
        log(`    Missing: ${m.missing.join(', ')}`, 'gray');
      }
    });

    // Summary stats
    const avgScore = (metadata.reduce((sum, m) => sum + m.score, 0) / metadata.length).toFixed(0);
    const completeCount = metadata.filter(m => m.score >= 80).length;
    log(`\n  Average score: ${avgScore}/100`, 'blue');
    log(`  Complete (80+): ${completeCount}/${metadata.length}`, 'green');

    allResults.metadata = metadata;
  }

  // Write JSON report
  const report = formatReport(recipes, allResults);
  const reportPath = './public/deep-review-report.json';
  const reportDir = path.dirname(reportPath);

  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  log(`\n✓ Report written to ${reportPath}\n`, 'green');
}

main().catch(err => {
  log(`\nError: ${err.message}`, 'red');
  process.exit(1);
});
