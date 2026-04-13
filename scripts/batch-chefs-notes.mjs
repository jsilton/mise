#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const recipesDir = path.join(projectRoot, 'src/content/recipes');
const dryRun = process.argv.includes('--dry-run');

// Patterns that indicate a skeletal Chef's Note
const skeletalPatterns = [
  /^This is a/i,
  /^A simple/i,
  /^A traditional/i,
  /^This recipe/i,
  /^A great/i,
  /^This dish/i,
  /^An easy/i,
  /^A quick/i,
];

function isSkeletalNote(note) {
  return skeletalPatterns.some((pattern) => pattern.test(note.trim()));
}

// Template-based Chef's Note generation
function generateChefsNote(recipe) {
  const {
    title,
    origin,
    cuisines = [],
    cookingMethods = [],
    role,
    vibe,
    difficulty,
    ingredients = [],
    prepTime,
    cookTime,
  } = recipe;

  // Extract key ingredients (first 3 main ingredients, skip section dividers)
  const keyIngredients = ingredients
    .filter((ing) => !ing.startsWith('---'))
    .slice(0, 3)
    .map((ing) => ing.split(',')[0].trim());

  let note = '';
  let originSentence = '';
  let practiceSentence = '';

  // === Build origin/context sentence based on origin + cuisine + vibe ===

  if (origin === 'China' || cuisines.includes('Chinese')) {
    if (cuisines.includes('Cantonese')) {
      originSentence = `A cornerstone of Cantonese home cooking, this dish teaches you efficiency—the wok technique and minimal ingredients that have fed families for generations.`;
    } else if (cuisines.includes('Sichuan')) {
      originSentence = `This Sichuan classic demonstrates how to layer flavor through spice blooming and fermented pastes. Every element has a job: heat, numbness, acid, and depth.`;
    } else {
      originSentence = `Chinese stir-fries and one-pan meals are built on the principle that high heat and proper technique matter more than ingredient lists.`;
    }
  } else if (origin === 'Japan' || cuisines.includes('Japanese')) {
    originSentence = `In Japanese cooking, simplicity is a discipline. This dish relies on the quality of what you start with, treated with respect rather than masked with sauce.`;
  } else if (origin === 'Thailand' || cuisines.includes('Thai')) {
    originSentence = `Thai home cooks balance four flavors in everything they make: spicy, sour, sweet, and salty. No one flavor should overpower the others.`;
  } else if (origin === 'Vietnam' || cuisines.includes('Vietnamese')) {
    originSentence = `Vietnamese cooking values contrast in every bite—crispy and soft, hot and cool, aromatic and sharp. It's built on fresh ingredients and quick cooking.`;
  } else if (origin === 'India' || cuisines.includes('Indian')) {
    originSentence = `This Indian dish shows how blooming spices in fat builds flavor from scratch. What looks like a simple process creates something that tastes like it took hours.`;
  } else if (origin === 'Mexico' || cuisines.includes('Mexican')) {
    originSentence = `Mexican cooking teaches you how to build layers of flavor using pantry staples—dried chiles, spices, fresh herbs, and acid from citrus or fermentation.`;
  } else if (origin === 'Italy' || cuisines.includes('Italian')) {
    originSentence = `Italian home cooking is a masterclass in restraint. A few quality ingredients, proper technique, and nothing wasted—the dish should taste like itself.`;
  } else if (origin === 'France' || cuisines.includes('French')) {
    originSentence = `French cooking teaches that technique is everything. Proper heat, patience, and attention to detail elevate simple ingredients into something memorable.`;
  } else if (origin === 'Middle East' || cuisines.includes('Middle Eastern')) {
    originSentence = `Middle Eastern cooking balances warm spices, fresh herbs, and the principle that acid and richness need each other to shine.`;
  } else if (origin === 'Greece' || cuisines.includes('Greek')) {
    originSentence = `Greek home cooking celebrates ingredients that are good enough to stand alone. Olive oil quality, lemon brightness, and proper seasoning do the heavy lifting.`;
  } else if (origin === 'Spain' || cuisines.includes('Spanish')) {
    originSentence = `Spanish cooking builds flavor through slow cooking, proper heat, and the principle that onions, garlic, and tomato are the foundation of nearly everything.`;
  } else if (origin === 'Korea' || cuisines.includes('Korean')) {
    originSentence = `Korean cooking balances heat, umami, and fermented intensity. Most dishes finish with fresh herbs and sesame to provide brightness and texture.`;
  } else if (cuisines.includes('American') || origin === 'United States') {
    originSentence = `American cooking at its best is built on good ingredients treated respectfully, with shortcuts that don't sacrifice quality.`;
  } else {
    originSentence = `This dish comes from a home cooking tradition where technique and respect for ingredients matter more than complexity.`;
  }

  // === Build practical insight based on vibe/difficulty/role ===

  if (role === 'dessert' || role === 'bake') {
    practiceSentence = `The key is not overbaking—pull it from the oven when it still looks slightly underdone, and residual heat will finish the job perfectly.`;
  } else if (vibe === 'quick' || (cookTime && parseInt(cookTime) < 20)) {
    practiceSentence = `The entire dish happens fast; stay alert and don't step away from the stove once you begin cooking.`;
  } else if (vibe === 'technical' || difficulty === 'advanced') {
    practiceSentence = `The technique matters here—understand why each step exists, and the rest becomes straightforward.`;
  } else if (vibe === 'comfort') {
    practiceSentence = `This is meant to be reliable and honest—quality ingredients cooked with care, nothing fancy, just right.`;
  } else if (cookingMethods.includes('braise') || cookingMethods.includes('slow-cook')) {
    practiceSentence = `The low, slow cooking is non-negotiable—rushing this won't give you the depth and tenderness that makes it worth eating.`;
  } else if (role === 'side' || role === 'base') {
    practiceSentence = `This plays a supporting role but shouldn't be overlooked—treat it with the same care you give the main dish.`;
  } else {
    practiceSentence = `Let the flavors do the talking; resist the urge to add more spice or salt until you've tasted it at the end.`;
  }

  note = `${originSentence} ${practiceSentence}`;
  return note;
}

// Read all recipe files
const files = fs
  .readdirSync(recipesDir)
  .filter((file) => file.endsWith('.md'))
  .sort();

let skeletalCount = 0;
let updatedCount = 0;
const updates = [];

console.log(`\nScanning ${files.length} recipes for skeletal Chef's Notes...\n`);

files.forEach((file) => {
  const filePath = path.join(recipesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);

  // Extract Chef's Note from the body
  const chefNoteMatch = body.match(/## Chef's Note\n\n([\s\S]*?)(?=\n## |\n---|\Z)/);
  if (!chefNoteMatch) {
    return; // Skip if no Chef's Note found
  }

  const currentNote = chefNoteMatch[1].trim();

  if (isSkeletalNote(currentNote)) {
    skeletalCount++;

    const newNote = generateChefsNote(data);
    const oldBody = body.replace(
      /## Chef's Note\n\n[\s\S]*?(?=\n## |\n---|\Z)/,
      `## Chef's Note\n\n${newNote}`,
    );

    updates.push({
      file,
      filePath,
      oldNote: currentNote.substring(0, 100) + (currentNote.length > 100 ? '...' : ''),
      newNote: newNote.substring(0, 100) + (newNote.length > 100 ? '...' : ''),
      fullNewNote: newNote,
      fullOldNote: currentNote,
      newContent: matter.stringify(oldBody, data),
      data,
    });

    updatedCount++;
  }
});

// === DRY RUN: Show first 10 examples ===
if (dryRun) {
  console.log(`Found ${skeletalCount} recipes with skeletal Chef's Notes.\n`);
  console.log(`=== DRY RUN: First 10 Examples ===\n`);

  updates.slice(0, 10).forEach((update, idx) => {
    console.log(`${idx + 1}. ${update.file}`);
    console.log(`   Title: ${update.data.title}`);
    console.log(`   Origin: ${update.data.origin || 'Not specified'}`);
    console.log(`   Cuisines: ${Array.isArray(update.data.cuisines) ? update.data.cuisines.join(', ') : 'Not specified'}`);
    console.log(`   Vibe: ${update.data.vibe}`);
    console.log(`\n   OLD: "${update.oldNote}"`);
    console.log(`\n   NEW: "${update.newNote}"`);
    console.log('\n' + '='.repeat(80) + '\n');
  });

  if (updates.length > 10) {
    console.log(`\n... and ${updates.length - 10} more recipes waiting to be rewritten.\n`);
    console.log(`Run without --dry-run to apply all ${updates.length} changes.\n`);
  } else {
    console.log(`\nAll ${updates.length} recipes ready to rewrite.\n`);
  }

  console.log(`Command to apply changes:\n  npm run batch-chefs-notes\n`);
  process.exit(0);
}

// === APPLY UPDATES ===
console.log(`Rewriting ${updates.length} Chef's Notes...\n`);

let successCount = 0;
let errorCount = 0;

updates.forEach((update) => {
  try {
    fs.writeFileSync(update.filePath, update.newContent, 'utf-8');
    successCount++;
    console.log(`✓ ${update.file}`);
  } catch (err) {
    errorCount++;
    console.error(`✗ ${update.file}: ${err.message}`);
  }
});

console.log(`\n${'='.repeat(80)}`);
console.log(`\nResults:`);
console.log(`  Found: ${skeletalCount} skeletal Chef's Notes`);
console.log(`  Updated: ${successCount}`);
if (errorCount > 0) {
  console.log(`  Errors: ${errorCount}`);
}
console.log(`\nNext steps:`);
console.log(`  1. Review the changes: git diff src/content/recipes/`);
console.log(`  2. Run validation: npm run validate-recipes`);
console.log(`  3. Review quality: npm run chef-review`);
console.log(`  4. Commit: git add . && git commit -m "refactor: rewrite skeletal Chef's Notes"`);
