import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { randomUUID } from 'crypto';
import zlib from 'zlib';

/* eslint-disable no-console */

const RECIPES_DIR = path.resolve('src/content/recipes');
const EXPORTS_DIR = path.resolve('exports');

function parseTime(timeStr) {
  if (!timeStr) return 0;
  let minutes = 0;
  const hourMatch = timeStr.match(/(\d+)\s*hr/i);
  const minMatch = timeStr.match(/(\d+)\s*min/i);

  if (hourMatch) minutes += parseInt(hourMatch[1]) * 60;
  if (minMatch) minutes += parseInt(minMatch[1]);

  return minutes;
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
    steps.push(stepText);
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
  if (
    !nutrition ||
    (typeof nutrition !== 'object' && !nutrition.calories)
  ) {
    return '';
  }

  const parts = [];
  if (nutrition.calories) parts.push(`Calories: ${nutrition.calories}`);
  if (nutrition.protein) parts.push(`Protein: ${nutrition.protein}g`);
  if (nutrition.carbs) parts.push(`Carbs: ${nutrition.carbs}g`);
  if (nutrition.fat) parts.push(`Fat: ${nutrition.fat}g`);
  if (nutrition.fiber) parts.push(`Fiber: ${nutrition.fiber}g`);
  if (nutrition.sugar) parts.push(`Sugar: ${nutrition.sugar}g`);
  if (nutrition.sodium) parts.push(`Sodium: ${nutrition.sodium}mg`);

  return parts.join(' | ');
}

async function createPaprikaRecipe(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const { data, content: body } = matter(content);

  const slug = path.basename(filePath, '.md');
  const chefNote = extractChefNote(body);
  const directions = extractDirections(body);

  const categories = [data.role || 'main', data.vibe || 'comfort'];
  if (Array.isArray(data.cuisines)) {
    categories.push(...data.cuisines);
  }

  const recipe = {
    uid: randomUUID(),
    name: data.title || 'Untitled',
    ingredients: Array.isArray(data.ingredients)
      ? data.ingredients
          .map((ing) => {
            if (ing.startsWith('---')) {
              return ing.replace(/^---\s*/, '').replace(/\s*---$/, '');
            }
            return ing;
          })
          .join('\n')
      : '',
    directions: directions.join('\n'),
    servings: data.servings || '4',
    prep_time: parseTime(data.prepTime) || 0,
    cook_time: parseTime(data.cookTime) || 0,
    total_time: parseTime(data.totalTime) || 0,
    source: 'Mise Kitchen Standard',
    source_url: `https://jordansilton.com/mise/recipes/${slug}`,
    categories: categories,
    difficulty: data.difficulty || 'easy',
    nutritional_info: buildNutritionInfo(data.nutrition),
    notes: chefNote,
    rating: 0,
    created: new Date().toISOString(),
    photo: '',
    photo_hash: '',
    image_url: '',
  };

  return recipe;
}

async function main() {
  try {
    console.log('📦 Exporting recipes to Paprika format...');

    // Ensure exports directory exists
    await fs.mkdir(EXPORTS_DIR, { recursive: true });

    // Get all recipe files
    const recipeFiles = await listRecipeFiles(RECIPES_DIR);
    console.log(`📖 Found ${recipeFiles.length} recipes`);

    const tempDir = path.join(EXPORTS_DIR, '.paprika-temp-' + Date.now());
    await fs.mkdir(tempDir, { recursive: true });

    let count = 0;

    // Process each recipe
    for (const filePath of recipeFiles) {
      try {
        const recipe = await createPaprikaRecipe(filePath);
        const jsonStr = JSON.stringify(recipe, null, 2);

        // Gzip the JSON synchronously
        const gzipped = zlib.gzipSync(Buffer.from(jsonStr, 'utf-8'));

        // Write to temporary directory with .paprikarecipe extension
        const filename = `${recipe.uid}.paprikarecipe`;
        const tempFilePath = path.join(tempDir, filename);
        fsSync.writeFileSync(tempFilePath, gzipped);

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

    // Create the .paprikarecipes zip file using ditto (macOS)
    const outputPath = path.join(EXPORTS_DIR, 'mise-recipes.paprikarecipes');

    try {
      // Use ditto to create ZIP archive (macOS native)
      const { execSync } = await import('child_process');
      execSync(
        `ditto -c -k --sequesterRsrc --keepParent "${tempDir}" "${outputPath}"`,
        { stdio: 'pipe', encoding: 'utf-8' }
      );

      console.log(
        `\n✅ Paprika export complete: ${outputPath}`
      );
      console.log(`   Total recipes: ${count}`);

      // Cleanup temp directory
      execSync(`rm -rf "${tempDir}"`, { stdio: 'pipe' });
    } catch (zipErr) {
      console.error('Error creating archive:', zipErr.message);
      console.log(`   (Temporary files remain in: ${tempDir})`);
      console.log(
        '   You can manually create the archive or use the generated .paprikarecipe files.'
      );
    }
  } catch (error) {
    console.error('Export failed:', error.message);
    process.exit(1);
  }
}

main();
