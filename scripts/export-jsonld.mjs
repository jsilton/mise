import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

/* eslint-disable no-console */

const RECIPES_DIR = path.resolve('src/content/recipes');
const EXPORTS_DIR = path.resolve('exports');

function parseTime(timeStr) {
  if (!timeStr) return 'PT0M';

  let hours = 0;
  let minutes = 0;
  const hourMatch = timeStr.match(/(\d+)\s*hr/i);
  const minMatch = timeStr.match(/(\d+)\s*min/i);

  if (hourMatch) hours = parseInt(hourMatch[1]);
  if (minMatch) minutes = parseInt(minMatch[1]);

  let duration = 'PT';
  if (hours > 0) duration += `${hours}H`;
  if (minutes > 0) duration += `${minutes}M`;

  return duration === 'PT' ? 'PT0M' : duration;
}

function extractChefNote(content) {
  const match = content.match(/^## Chef's Note\n\n([\s\S]*?)(?=\n## |\n$)/m);
  return match ? match[1].trim() : '';
}

function extractDirections(content) {
  const match = content.match(/^## Directions\n\n([\s\S]*?)(?=\n## |\n$)/m);
  if (!match) return [];

  const directionsText = match[1].trim();
  const steps = [];

  // Split by numbered steps
  const stepRegex = /^\d+\.\s+\*\*([^*]+)\*\*:\s*(.+?)(?=^\d+\.|$)/gm;
  let m;

  while ((m = stepRegex.exec(directionsText)) !== null) {
    const stepText = `${m[1]}: ${m[2]}`.replace(/\*\*(.+?)\*\*/g, '$1').trim();
    steps.push({
      '@type': 'HowToStep',
      text: stepText,
    });
  }

  return steps;
}

async function listRecipeFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listRecipeFiles(res)));
    } else if (entry.isFile() && res.endsWith('.md')) {
      files.push(res);
    }
  }
  return files;
}

function buildNutritionInfo(nutrition) {
  if (!nutrition || typeof nutrition !== 'object') {
    return null;
  }

  const info = { '@type': 'NutritionInformation' };

  if (nutrition.calories) {
    info.calories = `${nutrition.calories} calories`;
  }
  if (nutrition.protein) {
    info.proteinContent = `${nutrition.protein} g`;
  }
  if (nutrition.carbs) {
    info.carbohydrateContent = `${nutrition.carbs} g`;
  }
  if (nutrition.fat) {
    info.fatContent = `${nutrition.fat} g`;
  }
  if (nutrition.fiber) {
    info.fiberContent = `${nutrition.fiber} g`;
  }
  if (nutrition.sugar) {
    info.sugarContent = `${nutrition.sugar} g`;
  }
  if (nutrition.sodium) {
    info.sodiumContent = `${nutrition.sodium} mg`;
  }

  // Return null if no nutrition data
  if (Object.keys(info).length === 1) {
    return null;
  }

  return info;
}

async function createRecipeJsonLd(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const { data, content: body } = matter(content);

  const slug = path.basename(filePath, '.md');
  const chefNote = extractChefNote(body);
  const directions = extractDirections(body);

  const keywords = [];
  if (Array.isArray(data.dietary)) {
    keywords.push(...data.dietary);
  }
  if (Array.isArray(data.occasions)) {
    keywords.push(...data.occasions);
  }
  if (Array.isArray(data.flavorProfile)) {
    keywords.push(...data.flavorProfile);
  }

  const recipe = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: data.title || 'Untitled',
    author: {
      '@type': 'Person',
      name: 'Jordan Silton',
    },
    datePublished: new Date().toISOString().split('T')[0],
    description: chefNote,
    prepTime: parseTime(data.prepTime),
    cookTime: parseTime(data.cookTime),
    totalTime: parseTime(data.totalTime),
    recipeYield: data.servings || '4',
    recipeCategory: data.role || 'main',
    recipeCuisine: Array.isArray(data.cuisines)
      ? data.cuisines.join(', ')
      : 'international',
    recipeIngredient: Array.isArray(data.ingredients) ? data.ingredients : [],
    recipeInstructions: directions.length > 0 ? directions : [],
  };

  // Add nutrition if available
  const nutrition = buildNutritionInfo(data.nutrition);
  if (nutrition) {
    recipe.nutrition = nutrition;
  }

  // Add keywords if available
  if (keywords.length > 0) {
    recipe.keywords = keywords.join(', ');
  }

  // Add URL
  recipe.url = `https://jordansilton.com/mise/recipes/${slug}`;

  return recipe;
}

async function main() {
  try {
    console.log('📦 Exporting recipes to JSON-LD (Schema.org) format...');

    // Ensure exports directory exists
    await fs.mkdir(EXPORTS_DIR, { recursive: true });

    // Get all recipe files
    const recipeFiles = await listRecipeFiles(RECIPES_DIR);
    console.log(`📖 Found ${recipeFiles.length} recipes`);

    const recipes = [];
    let count = 0;

    // Process each recipe
    for (const filePath of recipeFiles) {
      try {
        const recipe = await createRecipeJsonLd(filePath);
        recipes.push(recipe);

        count++;
        if (count % 50 === 0) {
          console.log(`  ✓ Processed ${count} recipes...`);
        }
      } catch (err) {
        const recipeName = path.basename(filePath);
        console.warn(`  ⚠ Failed to process ${recipeName}:`, err.message);
      }
    }

    console.log(`  ✓ Processed all ${count} recipes`);

    // Write the JSON-LD file
    const outputPath = path.join(EXPORTS_DIR, 'mise-recipes-schema.json');

    const output = {
      '@context': 'https://schema.org',
      '@type': 'Collection',
      name: 'Mise Kitchen Standard - Recipes',
      description: 'A comprehensive culinary knowledge base and collection of recipes from the Mise Kitchen Standard',
      url: 'https://jordansilton.com/mise/',
      recipes: recipes,
    };

    await fs.writeFile(outputPath, JSON.stringify(output, null, 2));

    console.log(
      `\n✅ JSON-LD export complete: ${outputPath}`
    );
    console.log(
      `   Total recipes: ${recipes.length}`
    );
  } catch (error) {
    console.error('Export failed:', error.message);
    process.exit(1);
  }
}

main();
