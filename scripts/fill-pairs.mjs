#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = 'src/content/recipes';
const DRY_RUN = process.argv.includes('--dry-run');

// Recipe roles and their natural pairings
const ROLE_PAIRINGS = {
  main: ['side', 'base', 'salad'],
  side: ['main'],
  base: ['main'],
  salad: ['main'],
  dessert: [],
  drink: [],
  condiment: ['main', 'side'],
};

// Cuisine affinity groups (recipes from same family pair well)
const CUISINE_FAMILIES = {
  'Chinese': ['Chinese', 'Asian'],
  'Japanese': ['Japanese', 'Asian'],
  'Korean': ['Korean', 'Asian'],
  'Thai': ['Thai', 'Asian'],
  'Vietnamese': ['Vietnamese', 'Asian'],
  'Indian': ['Indian'],
  'Mexican': ['Mexican', 'Latin'],
  'Italian': ['Italian'],
  'French': ['French'],
  'American': ['American'],
  'Mediterranean': ['Mediterranean', 'Italian', 'Greek'],
  'Middle Eastern': ['Middle Eastern'],
  'Caribbean': ['Caribbean'],
  'Filipino': ['Filipino', 'Asian'],
  'Jewish': ['Jewish'],
  'Brazilian': ['Brazilian', 'Latin'],
};

function getCuisineFamily(cuisines) {
  if (!Array.isArray(cuisines) || cuisines.length === 0) return [];
  return cuisines[0] || [];
}

function isCuisineCompatible(recipe1Cuisines, recipe2Cuisines) {
  if (!Array.isArray(recipe1Cuisines) || !Array.isArray(recipe2Cuisines)) return false;
  if (recipe1Cuisines.length === 0 || recipe2Cuisines.length === 0) return false;

  const family1 = recipe1Cuisines[0];
  const family2 = recipe2Cuisines[0];

  // Same cuisine
  if (family1 === family2) return true;

  // Check if cuisines are in same family
  const family1Group = CUISINE_FAMILIES[family1] || [family1];
  const family2Group = CUISINE_FAMILIES[family2] || [family2];

  return family1Group.some((c) => family2Group.includes(c));
}

function getRecipeIndex() {
  const files = fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith('.md'));
  const index = {};

  files.forEach((file) => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(RECIPES_DIR, file), 'utf8');
    const { data } = matter(content);

    index[slug] = {
      title: data.title || '',
      role: data.role || '',
      cuisines: Array.isArray(data.cuisines) ? data.cuisines : [],
      flavorProfile: Array.isArray(data.flavorProfile) ? data.flavorProfile : [],
      pairsWith: Array.isArray(data.pairsWith) ? data.pairsWith : [],
      vibe: data.vibe || '',
      difficulty: data.difficulty || '',
    };
  });

  return index;
}

function scorePairing(recipe1, recipe2, index) {
  if (!recipe2) return 0;

  let score = 0;

  // Drinks should pair with other drinks or compatible foods
  if (recipe1.role === 'drink') {
    // Drinks pair with mains and sides primarily
    if (['main', 'side'].includes(recipe2.role)) {
      score += 40;
    } else if (recipe2.role === 'drink') {
      // Other drinks are lower priority
      score += 10;
    } else {
      // Don't pair drinks with desserts/condiments
      return 0;
    }
  }

  // Desserts should pair with other desserts primarily
  if (recipe1.role === 'dessert') {
    if (recipe2.role === 'dessert') {
      score += 50;
    } else if (recipe2.role === 'drink') {
      score += 30; // Desserts + drinks is ok
    } else {
      return 0;
    }
  }

  // Main/side/base logic
  if (['main', 'side', 'base', 'salad'].includes(recipe1.role)) {
    const compatibleRoles = ROLE_PAIRINGS[recipe1.role] || [];
    if (compatibleRoles.includes(recipe2.role)) {
      score += 50;
    } else if (['main', 'side', 'base', 'salad'].includes(recipe2.role)) {
      // Any of these pairing together is acceptable
      score += 20;
    } else {
      return 0;
    }
  }

  // Cuisine affinity
  if (isCuisineCompatible(recipe1.cuisines, recipe2.cuisines)) {
    score += 30;
  }

  // Flavor profile overlap
  const flavorOverlap = recipe1.flavorProfile.filter((f) =>
    recipe2.flavorProfile.includes(f)
  ).length;
  if (flavorOverlap > 0) {
    score += flavorOverlap * 5;
  }

  // Avoid pairing a recipe with itself
  if (recipe1 === recipe2) {
    score = 0;
  }

  return score;
}

function findPairings(recipeSlug, index) {
  const recipe = index[recipeSlug];
  if (!recipe) return [];

  const candidates = Object.entries(index)
    .filter(([slug, _]) => slug !== recipeSlug)
    .map(([slug, candidate]) => ({
      slug,
      score: scorePairing(recipe, candidate, index),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4); // Get top 4

  return candidates.map(({ slug }) => slug);
}

function buildBidirectionalPairs(index) {
  const pairs = {};

  Object.keys(index).forEach((slug) => {
    pairs[slug] = findPairings(slug, index);
  });

  // Ensure bidirectionality: if A pairs with B, B should pair with A
  Object.keys(pairs).forEach((slugA) => {
    pairs[slugA].forEach((slugB) => {
      if (!pairs[slugB].includes(slugA) && pairs[slugB].length < 4) {
        pairs[slugB].push(slugA);
      }
    });
  });

  return pairs;
}

function updateRecipe(slug, newPairs) {
  const filePath = path.join(RECIPES_DIR, `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: body } = matter(content);

  data.pairsWith = newPairs;

  const frontmatter = matter.stringify(body, data);

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, frontmatter, 'utf8');
  }
}

function main() {
  console.log('🍽️  Building recipe index...');
  const index = getRecipeIndex();
  console.log(`Found ${Object.keys(index).length} recipes\n`);

  console.log('🔍 Finding recipes with empty pairsWith...');
  const emptyPairs = Object.entries(index)
    .filter(([_, recipe]) => recipe.pairsWith.length === 0)
    .map(([slug, _]) => slug);

  if (emptyPairs.length === 0) {
    console.log('✓ All recipes have pairsWith populated!');
    return;
  }

  console.log(`Found ${emptyPairs.length} recipes with empty pairsWith:\n`);

  console.log('🎯 Computing optimal pairings...');
  const allPairs = buildBidirectionalPairs(index);

  const updates = [];

  emptyPairs.forEach((slug) => {
    const newPairs = allPairs[slug] || [];
    const recipe = index[slug];

    updates.push({
      slug,
      title: recipe.title,
      role: recipe.role,
      cuisines: recipe.cuisines.join(', '),
      before: [],
      after: newPairs,
    });

    updateRecipe(slug, newPairs);
  });

  // Print results
  console.log(`\n${DRY_RUN ? '📋 DRY RUN: Would update' : '✓ Updated'} ${updates.length} recipes:\n`);

  updates.forEach(({ slug, title, role, cuisines, after }) => {
    console.log(`  ${slug}`);
    console.log(`    Title: ${title}`);
    console.log(`    Role: ${role} | Cuisine: ${cuisines || 'Mixed'}`);
    console.log(`    → pairsWith: ${after.join(', ') || '(none found)'}`);
    console.log();
  });

  console.log(`\n${DRY_RUN ? '📋 DRY RUN COMPLETE' : '✓ COMPLETE'}`);
  if (DRY_RUN) {
    console.log('Run without --dry-run to apply changes');
  }
}

main();
