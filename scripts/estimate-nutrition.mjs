#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { nutritionDatabase, findNutrition } from './nutrition-data.mjs';

const RECIPES_DIR = path.resolve('src/content/recipes');
const dryRun = process.argv.includes('--dry-run');
const verbose = process.argv.includes('--verbose');
const force = process.argv.includes('--force');

// Parse quantity strings like "1/2", "1 1/2", "2"
function parseQuantity(qtyStr) {
  if (!qtyStr) return 1;

  const trimmed = qtyStr.trim();
  const fractionRegex = /^(\d+)?\s*(\d+\/\d+)?/;
  const match = trimmed.match(fractionRegex);

  if (!match) return 1;

  let total = 0;

  // Whole number part
  if (match[1]) {
    total += parseInt(match[1], 10);
  }

  // Fraction part
  if (match[2]) {
    const [num, denom] = match[2].split('/').map(Number);
    total += num / denom;
  }

  return total || 1;
}

// Extract unit from ingredient string
function extractUnit(ingStr) {
  const lower = ingStr.toLowerCase();

  // Check for specific units
  if (lower.includes(' cup')) return 'cup';
  if (lower.includes(' tbsp') || lower.includes(' tablespoon')) return 'tbsp';
  if (lower.includes(' tsp') || lower.includes(' teaspoon')) return 'tsp';
  if (lower.includes(' oz') || lower.includes(' ounce')) return 'oz';
  if (lower.includes(' lb') || lower.includes(' pound')) return 'lb';
  if (lower.includes(' g ') || lower.includes(' gram')) return 'g';
  if (lower.match(/each\b|whole\b|\begg\b/i)) return 'each';
  if (lower.includes(' small')) return 'small';
  if (lower.includes(' medium')) return 'medium';
  if (lower.includes(' large')) return 'large';

  // Default based on common ingredient patterns
  if (lower.includes('pepper') || lower.includes('spice') || lower.includes('salt') || lower.includes('powder')) {
    return 'tsp';
  }

  return 'oz'; // Safe default
}

// Convert quantity to standard unit for nutrition lookup
function normalizeToBaseUnit(quantity, unit, basePath) {
  if (!unit || unit === basePath) return quantity;

  // These are rough conversions for consistency
  const conversions = {
    cup: { tbsp: 16, tsp: 48, oz: 8, g: 240 },
    tbsp: { tsp: 3, oz: 0.5, g: 15 },
    tsp: { oz: 0.167, g: 5 },
    oz: { lb: 0.0625, g: 28.35 },
    lb: { oz: 16, g: 453.6 },
    small: { medium: 0.67 },
    medium: { small: 1.5, large: 0.67 },
    large: { medium: 1.5 },
    each: { each: 1 },
  };

  if (unit === basePath) return quantity;
  if (!conversions[unit] || !conversions[unit][basePath]) return quantity;

  return quantity * conversions[unit][basePath];
}

// Map non-standard units to standard equivalents (in oz unless noted)
const UNIT_ALIASES = {
  can: { defaultOz: 14.5 },          // standard can ~14.5 oz
  slice: { defaultOz: 1 },           // ~1 oz per slice (bread, cheese)
  clove: { defaultOz: 0.2 },         // ~3g per clove
  head: { defaultOz: 24 },           // head of lettuce/cauliflower
  bunch: { defaultOz: 6 },           // bunch of herbs/greens
  sprig: { defaultOz: 0.1 },         // herb sprig
  stalk: { defaultOz: 2 },           // celery stalk
  piece: { defaultOz: 4 },           // generic piece
  fillet: { defaultOz: 6 },          // fish fillet
  breast: { defaultOz: 6 },          // chicken breast
  thigh: { defaultOz: 4 },           // chicken thigh
  link: { defaultOz: 2 },            // sausage link
  strip: { defaultOz: 1 },           // bacon strip
  ear: { defaultOz: 5 },             // ear of corn
  rib: { defaultOz: 1 },             // celery rib
  sheet: { defaultOz: 4 },           // puff pastry sheet
  stick: { defaultOz: 4 },           // butter stick (4 oz)
  pkg: { defaultOz: 8 },             // generic package
  package: { defaultOz: 8 },
  bag: { defaultOz: 10 },
  jar: { defaultOz: 12 },
  bottle: { defaultOz: 12 },
  rack: { defaultOz: 32 },           // rack of ribs
  block: { defaultOz: 8 },           // block of cheese/tofu
};

// Extract parenthetical oz from strings like "1 can (28 oz)" or "1 can (14.5-oz)"
function extractParenOz(str) {
  const match = str.match(/\((\d+(?:\.\d+)?)\s*-?\s*oz\)/i);
  return match ? parseFloat(match[1]) : null;
}

// Estimate nutrition for a single ingredient
function estimateIngredientNutrition(ingredientStr) {
  // Skip section dividers
  if (/^-{3}\s+.+\s+-{3}$/.test(ingredientStr)) {
    return null;
  }

  // Skip "to taste", "as needed", garnish-only items
  const lower = ingredientStr.toLowerCase();
  if (lower.includes('to taste') || lower.includes('as needed') || lower.includes('for garnish') || lower.includes('for serving')) {
    return null;
  }

  // Extended unit list including aliases
  const allUnits = [
    'cup', 'tbsp', 'tablespoon', 'tsp', 'teaspoon', 'oz', 'ounce', 'lb', 'pound', 'g', 'gram',
    'small', 'medium', 'large', 'each', 'whole',
    'can', 'slice', 'clove', 'head', 'bunch', 'sprig', 'stalk', 'piece',
    'fillet', 'breast', 'thigh', 'link', 'strip', 'ear', 'rib', 'sheet',
    'stick', 'pkg', 'package', 'bag', 'jar', 'bottle', 'rack', 'block',
  ].join('|');

  const unitRegex = new RegExp(
    `^([\\d\\s/]*)\\s*(${allUnits})s?\\b\\s+(.+)$`, 'i'
  );

  const ingredientMatch = ingredientStr.match(unitRegex);

  if (!ingredientMatch) {
    // Try: "Unsalted Butter" (no quantity/unit) or "2 Eggs"
    // First try with just a number: "2 Eggs", "3 Carrots"
    const numOnlyMatch = ingredientStr.match(/^([\d\s/]+)\s+(.+)$/);
    if (numOnlyMatch) {
      const qty = parseQuantity(numOnlyMatch[1]);
      const cleanName = numOnlyMatch[2].split('(')[0].split(',')[0].trim();
      const data = findNutrition(cleanName);
      if (data) {
        return { quantity: qty, unit: data.unit, ingredient: cleanName, data };
      }
    }

    // No quantity at all: "Unsalted Butter", "Salt and Pepper"
    const nameOnly = ingredientStr.split('(')[0].split(',')[0].trim();
    const data = findNutrition(nameOnly);
    if (data) {
      return { quantity: 1, unit: data.unit, ingredient: nameOnly, data };
    }
    return null;
  }

  const [, qtyPart, rawUnit, name] = ingredientMatch;
  const quantity = parseQuantity(qtyPart);
  const unitKey = rawUnit.toLowerCase().replace(/s$/, '');
  const cleanName = name.split('(')[0].split(',')[0].trim();

  const nutritionData = findNutrition(cleanName);
  if (!nutritionData) {
    return null;
  }

  // Normalize tablespoon/teaspoon aliases
  const normalizedUnit = unitKey === 'tablespoon' ? 'tbsp'
    : unitKey === 'teaspoon' ? 'tsp'
    : unitKey === 'ounce' ? 'oz'
    : unitKey === 'pound' ? 'lb'
    : unitKey === 'gram' ? 'g'
    : unitKey;

  // Convert to the base unit that nutrition data uses
  const baseUnit = nutritionData.unit;
  let adjustedQuantity = quantity;

  // Handle alias units (can, slice, clove, etc.) — convert to oz first
  if (UNIT_ALIASES[normalizedUnit]) {
    const parenOz = extractParenOz(ingredientStr);
    const ozPerUnit = parenOz || UNIT_ALIASES[normalizedUnit].defaultOz;
    const totalOz = quantity * ozPerUnit;
    // Now convert from oz to the nutrition data's base unit
    if (baseUnit === 'oz') {
      adjustedQuantity = totalOz;
    } else if (baseUnit === 'tbsp') {
      adjustedQuantity = totalOz * 2; // ~2 tbsp per oz for liquids
    } else if (baseUnit === 'cup') {
      adjustedQuantity = totalOz / 8;
    } else if (baseUnit === 'lb') {
      adjustedQuantity = totalOz / 16;
    } else if (baseUnit === 'each' || baseUnit === 'slice') {
      adjustedQuantity = quantity; // keep original count
    } else {
      adjustedQuantity = totalOz; // fallback: treat as oz
    }
  } else if (normalizedUnit !== baseUnit) {
    adjustedQuantity = normalizeToBaseUnit(quantity, normalizedUnit, baseUnit);
  }

  return {
    quantity: adjustedQuantity,
    unit: baseUnit,
    ingredient: cleanName,
    data: nutritionData,
  };
}

// Calculate total nutrition for a recipe
function calculateRecipeNutrition(ingredients, servings) {
  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    return null;
  }

  const servingCount = parseInt(servings, 10) || 1;

  let totals = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    sodium: 0,
  };

  let successCount = 0;

  for (const ingredient of ingredients) {
    const estimated = estimateIngredientNutrition(ingredient);
    if (!estimated) continue;

    successCount++;
    const { data, quantity } = estimated;

    totals.calories += data.calories * quantity;
    totals.protein += data.protein * quantity;
    totals.carbs += data.carbs * quantity;
    totals.fat += data.fat * quantity;
    totals.fiber += data.fiber * quantity;
    totals.sugar += data.sugar * quantity;
    totals.sodium += data.sodium * quantity;
  }

  // If we couldn't match any ingredients, return null
  if (successCount === 0) {
    return null;
  }

  // Per-serving calculations
  const perServing = {
    calories: Math.round(totals.calories / servingCount / 5) * 5, // Round to nearest 5
    protein: Math.round((totals.protein / servingCount) * 2) / 2, // Round to nearest 0.5g
    carbs: Math.round((totals.carbs / servingCount) * 2) / 2,
    fat: Math.round((totals.fat / servingCount) * 2) / 2,
    fiber: Math.round((totals.fiber / servingCount) * 2) / 2,
    sugar: Math.round((totals.sugar / servingCount) * 2) / 2,
    sodium: Math.round((totals.sodium / servingCount) / 10) * 10, // Round to nearest 10mg
  };

  return perServing;
}

// Process all recipes
async function processRecipes() {
  const files = await fs.readdir(RECIPES_DIR);
  const mdFiles = files.filter((f) => f.endsWith('.md'));

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  console.log(`Found ${mdFiles.length} recipe files\n`);

  for (const file of mdFiles) {
    const filePath = path.join(RECIPES_DIR, file);
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const { data, content: body } = matter(content);

      // Skip if already has nutrition (unless --force)
      if (data.nutrition && !force) {
        if (verbose) {
          console.log(`⏭️  ${file} - already has nutrition (use --force to recalculate)`);
        }
        skipped++;
        continue;
      }

      // Skip if missing required data
      if (!data.ingredients || !data.servings) {
        if (verbose) {
          console.log(`⚠️  ${file} - missing ingredients or servings`);
        }
        skipped++;
        continue;
      }

      // Calculate nutrition
      const nutrition = calculateRecipeNutrition(data.ingredients, data.servings);

      if (!nutrition) {
        if (verbose) {
          console.log(`⚠️  ${file} - couldn't estimate (no matching ingredients)`);
        }
        skipped++;
        continue;
      }

      // Add nutrition to data
      data.nutrition = nutrition;

      // Prepare updated content
      const updatedContent = matter.stringify(body, data);

      if (dryRun) {
        console.log(`📊 ${file}`);
        console.log(`   Calories: ${nutrition.calories}, Protein: ${nutrition.protein}g, Carbs: ${nutrition.carbs}g, Fat: ${nutrition.fat}g`);
      } else {
        await fs.writeFile(filePath, updatedContent);
        console.log(`✅ ${file}`);
      }

      updated++;
    } catch (error) {
      console.error(`❌ ${file}: ${error.message}`);
      errors++;
    }
  }

  console.log(`\n${dryRun ? 'Preview' : 'Results'}:`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Errors: ${errors}`);

  if (dryRun) {
    console.log('\nRun without --dry-run to commit changes');
  }
}

processRecipes().catch(console.error);
