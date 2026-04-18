#!/usr/bin/env node
/**
 * lint-recipe.mjs — Culinary quality gate for individual recipes.
 *
 * Catches the specific problems that batch scripts introduced:
 *   - Template/generic Chef's Notes
 *   - Broken rest instructions on non-protein recipes
 *   - Dietary tag contradictions
 *   - Time math dishonesty
 *   - Vibe mismatches
 *   - Missing required content sections
 *
 * Usage:
 *   node scripts/lint-recipe.mjs src/content/recipes/chimichurri.md
 *   node scripts/lint-recipe.mjs src/content/recipes/*.md   (multiple files)
 *   node scripts/lint-recipe.mjs --staged                   (git staged recipes)
 *
 * Exit code 1 if any errors found (blocks commit).
 * Warnings print but don't block.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { execSync } from 'child_process';

// ─── Configuration ───────────────────────────────────────────────────────────

const TEMPLATE_PHRASES = [
  'masterclass in restraint',
  'at its best is built on good ingredients',
  'simplicity is a discipline',
  'Let the flavors do the talking',
  'treat it with the same care you give the main dish',
  'The technique matters here—understand why each step exists',
  'teaches that technique is everything',
];

const NON_PROTEIN_INDICATORS = [
  'soup',
  'stew',
  'chowder',
  'bisque',
  'smoothie',
  'drink',
  'syrup',
  'bread',
  'muffin',
  'cake',
  'cookie',
  'pie',
  'crisp',
  'pudding',
  'bar',
  'brownie',
  'pancake',
  'waffle',
  'oatmeal',
  'risotto',
  'salad',
  'slaw',
  'dressing',
  'vinaigrette',
  'sauce',
  'condiment',
  'rice',
  'beans',
  'hummus',
  'dip',
  'guacamole',
  'salsa',
];

const STIR_FRY_INDICATORS = [
  'stir-fry',
  'stir fry',
  'pad thai',
  'pad kee mao',
  'lo mein',
  'fried rice',
  'noodles',
  'wok',
];

const MEAT_INGREDIENTS = [
  'chicken',
  'beef',
  'pork',
  'lamb',
  'turkey',
  'duck',
  'veal',
  'bacon',
  'sausage',
  ' ham',
  'prosciutto',
  'pancetta',
  'salami',
  'brisket',
  'ribs',
  'steak',
  'ground meat',
  'meatball',
];
// " ham" with leading space avoids matching "graham", "hamantaschen", etc.

const DAIRY_INGREDIENTS = [
  'butter',
  'cream',
  'milk',
  'cheese',
  'yogurt',
  'sour cream',
  'ghee',
  'mascarpone',
  'ricotta',
  'mozzarella',
  'parmesan',
  'cheddar',
  'gruyère',
  'gruyere',
  'brie',
  'goat cheese',
  'cream cheese',
  'half-and-half',
  'whipped cream',
  'custard',
];

const GLUTEN_INGREDIENTS = [
  'flour',
  'bread',
  'pasta',
  'noodle',
  'spaghetti',
  'fettuccine',
  'penne',
  'orzo',
  'couscous',
  'breadcrumb',
  'panko',
  'tortilla',
  'pita',
  'naan',
  'baguette',
  'ciabatta',
  'sourdough',
  'cracker',
  'soy sauce',
  'teriyaki',
  'hoisin',
  'wonton',
  'dumpling',
  'pie crust',
  'biscuit',
  'cake',
  'muffin',
  'waffle',
  'pancake',
];

const VALID_VIBES = ['quick', 'nutritious', 'comfort', 'technical', 'holiday'];

// ─── Parse time strings ──────────────────────────────────────────────────────

function parseMinutes(timeStr) {
  if (!timeStr) return 0;
  const str = String(timeStr).toLowerCase().trim();
  let total = 0;
  const hrMatch = str.match(/(\d+)\s*(?:hr|hour)/);
  const minMatch = str.match(/(\d+)\s*min/);
  if (hrMatch) total += parseInt(hrMatch[1]) * 60;
  if (minMatch) total += parseInt(minMatch[1]);
  // Handle bare numbers (assume minutes)
  if (!hrMatch && !minMatch) {
    const num = parseInt(str);
    if (!isNaN(num)) total = num;
  }
  return total;
}

// ─── Lint a single recipe ────────────────────────────────────────────────────

function lintRecipe(filePath) {
  const errors = [];
  const warnings = [];
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: body } = matter(content);
  const slug = path.basename(filePath, '.md');
  const titleLower = (data.title || slug).toLowerCase();
  const ingredientsLower = (data.ingredients || []).map((i) => i.toLowerCase()).join(' ');

  // ── Template Chef's Notes ──────────────────────────────────────────────

  const noteMatch = body.match(/## Chef's Note\s*\n\n?([\s\S]*?)(?=\n## |\n---|\n$)/);
  const noteText = noteMatch ? noteMatch[1].trim() : '';

  if (!noteText || noteText.length < 20) {
    errors.push("Chef's Note is missing or too short (< 20 chars)");
  }

  for (const phrase of TEMPLATE_PHRASES) {
    if (noteText.includes(phrase)) {
      errors.push(`Chef's Note contains template text: "${phrase}"`);
      break;
    }
  }

  // ── Directions quality ─────────────────────────────────────────────────

  const dirMatch = body.match(/## Directions\s*\n\n([\s\S]*?)$/);
  if (!dirMatch) {
    errors.push('Missing ## Directions section or no blank line after header');
  } else {
    const steps = (dirMatch[1].match(/^\d+\.\s/gm) || []).length;
    if (steps < 2) {
      errors.push(`Only ${steps} direction step(s) — recipes need at least 2`);
    }
  }

  // ── Broken rest instructions ───────────────────────────────────────────

  const restMatch = body.match(/\*\*Rest:\*\*.*?rest for.*?(?:slicing|serving)/i);
  if (restMatch) {
    const restText = restMatch[0].toLowerCase();

    // Check for garbled protein names
    const garbagePatterns = [
      /let the (?:chicken (?:bone )?broth|fish sauce|pork bones|sodium|cup |large |lb |tbsp |oz )/,
      /let in \w+ rest/,
      /let the .*(?:broth|sauce|stock|butter|oil|water|vinegar) rest/,
    ];
    for (const pattern of garbagePatterns) {
      if (pattern.test(restText)) {
        errors.push(`Broken rest instruction (garbled text): "${restMatch[0].slice(0, 80)}..."`);
        break;
      }
    }

    // Check for rest on non-protein recipes
    const isNonProtein = NON_PROTEIN_INDICATORS.some((ind) => titleLower.includes(ind));
    const isStirFry = STIR_FRY_INDICATORS.some((ind) => titleLower.includes(ind));
    if (isNonProtein && !restText.includes('quiche') && !restText.includes('lasagna')) {
      errors.push('Rest instruction on a non-protein recipe (soup, baked good, condiment, etc.)');
    }
    if (isStirFry) {
      warnings.push('Rest instruction on a stir-fry — stir-fries are served immediately');
    }
  }

  // ── Dietary tag contradictions ─────────────────────────────────────────

  const dietary = (data.dietary || []).map((d) => d.toLowerCase());

  // Build a clean ingredient text that ignores optional/substitution notes
  // e.g., "Vegetable or Chicken Broth (optional)" shouldn't flag vegetarian
  const ingredientLines = (data.ingredients || []).map((i) => i.toLowerCase());

  if (dietary.includes('vegetarian') || dietary.includes('vegan')) {
    for (const meat of MEAT_INGREDIENTS) {
      const found = ingredientLines.find((line) => {
        // Skip lines where the meat word is inside optional/substitution context
        if (line.includes('optional') || line.includes('can use') || line.includes('or ')) {
          // Only skip if the meat is in the optional part, not the main ingredient
          if (
            line.includes(meat) &&
            (line.includes(`can use ${meat}`) || line.includes(`or ${meat}`))
          )
            return false;
        }
        // Skip brand names containing meat words (e.g., "Beefeater" gin)
        if (meat === 'beef' && line.includes('beefeater')) return false;
        return line.includes(meat);
      });
      if (found) {
        errors.push(
          `Tagged ${dietary.includes('vegan') ? 'vegan' : 'vegetarian'} but ingredients contain "${meat}" in: "${found.slice(0, 60)}"`
        );
        break;
      }
    }
  }

  if (dietary.includes('vegan')) {
    // Plant-based "milks" and "creams" are vegan but contain the substrings
    // "milk"/"cream" — strip them before checking.
    const NON_DAIRY_MILKS = [
      'coconut milk',
      'almond milk',
      'oat milk',
      'soy milk',
      'rice milk',
      'cashew milk',
      'hemp milk',
      'macadamia milk',
    ];
    for (const dairy of DAIRY_INGREDIENTS) {
      const found = ingredientLines.find((line) => {
        let checkLine = line;
        if (dairy === 'milk') {
          for (const nd of NON_DAIRY_MILKS) checkLine = checkLine.split(nd).join('');
        }
        if (dairy === 'cream') {
          checkLine = checkLine.split('cream of coconut').join('').split('coconut cream').join('');
        }
        return checkLine.includes(dairy);
      });
      if (found) {
        errors.push(`Tagged vegan but ingredients contain "${dairy}" in: "${found.slice(0, 60)}"`);
        break;
      }
    }
  }

  if (dietary.includes('gluten-free')) {
    for (const gluten of GLUTEN_INGREDIENTS) {
      const found = ingredientLines.find((line) => line.includes(gluten));
      if (found) {
        errors.push(
          `Tagged gluten-free but ingredients contain "${gluten}" in: "${found.slice(0, 60)}"`
        );
        break;
      }
    }
  }

  // ── Time honesty ───────────────────────────────────────────────────────

  const prep = parseMinutes(data.prepTime);
  const cook = parseMinutes(data.cookTime);
  const total = parseMinutes(data.totalTime);

  if (total > 0 && prep + cook > 0) {
    const computed = prep + cook;
    const hasAdvancePrep = data.advancePrep && data.advancePrep.length > 0;
    // Allow 15 min grace for passive steps, but flag >2x discrepancy
    // Suppress if advancePrep exists — it explains the gap (marinades, chilling, etc.)
    if (total > computed * 2 && total - computed > 60 && !hasAdvancePrep) {
      warnings.push(
        `Time gap: prep(${prep}m) + cook(${cook}m) = ${computed}m, but total = ${total}m. ` +
          `Add advancePrep field to explain (e.g., marinate-overnight, chill-to-set, freeze).`
      );
    }
  }

  // ── Vibe consistency ───────────────────────────────────────────────────

  if (data.vibe && !VALID_VIBES.includes(data.vibe)) {
    errors.push(`Invalid vibe: "${data.vibe}" — must be one of: ${VALID_VIBES.join(', ')}`);
  }

  if (data.vibe === 'quick') {
    if (total > 45) {
      errors.push(`vibe:quick but totalTime is ${total} min (> 45 min). Change vibe or fix time.`);
    } else if (cook > 30) {
      warnings.push(`vibe:quick but cookTime is ${cook} min (> 30 min). Borderline — verify.`);
    }
  }

  // ── Metadata completeness ──────────────────────────────────────────────

  if (!data.cuisines || data.cuisines.length === 0) {
    warnings.push('Missing cuisines tag');
  }

  if (!data.pairsWith || data.pairsWith.length === 0) {
    warnings.push('Missing pairsWith suggestions');
  }

  if (!data.role) {
    warnings.push('Missing role (main, side, base, dessert, drink, condiment)');
  }

  // ── Duplicate section headers ──────────────────────────────────────────

  const dirHeaders = (body.match(/^## Directions/gm) || []).length;
  if (dirHeaders > 1) {
    errors.push('Duplicate ## Directions headers found');
  }

  const noteHeaders = (body.match(/^## Chef's Note/gm) || []).length;
  if (noteHeaders > 1) {
    errors.push("Duplicate ## Chef's Note headers found");
  }

  return { slug, errors, warnings };
}

// ─── Main ────────────────────────────────────────────────────────────────────

let files = process.argv.slice(2);

// Handle --staged flag
if (files.includes('--staged')) {
  try {
    const staged = execSync('git diff --cached --name-only --diff-filter=ACM', {
      encoding: 'utf8',
    });
    files = staged
      .split('\n')
      .filter((f) => f.startsWith('src/content/recipes/') && f.endsWith('.md'));
  } catch {
    files = [];
  }
}

if (files.length === 0) {
  console.log('No recipe files to lint.');
  process.exit(0);
}

let totalErrors = 0;
let totalWarnings = 0;

for (const file of files) {
  if (!file.endsWith('.md')) continue;
  if (!fs.existsSync(file)) continue;

  const { slug, errors, warnings } = lintRecipe(file);

  if (errors.length > 0 || warnings.length > 0) {
    console.log(`\n📋 ${slug}`);
    for (const e of errors) {
      console.log(`  ❌ ERROR: ${e}`);
    }
    for (const w of warnings) {
      console.log(`  ⚠️  WARN: ${w}`);
    }
  }

  totalErrors += errors.length;
  totalWarnings += warnings.length;
}

if (totalErrors > 0 || totalWarnings > 0) {
  console.log(`\n${'─'.repeat(60)}`);
  console.log(
    `${totalErrors} error(s), ${totalWarnings} warning(s) across ${files.length} file(s)`
  );
}

if (totalErrors > 0) {
  console.log('\n🚫 Commit blocked — fix errors above before committing.');
  process.exit(1);
} else if (totalWarnings > 0) {
  console.log('\n✅ Commit allowed (warnings only — review above).');
  process.exit(0);
} else {
  console.log(`\n✅ ${files.length} recipe(s) passed quality checks.`);
  process.exit(0);
}
