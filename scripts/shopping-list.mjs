#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const CALENDARS_DIR = path.join(projectRoot, 'src/content/calendars');
const MEALS_DIR = path.join(projectRoot, 'src/content/meals');
const RECIPES_DIR = path.join(projectRoot, 'src/content/recipes');

// Pantry staples to skip
const PANTRY_STAPLES = new Set([
  'salt',
  'pepper',
  'black pepper',
  'white pepper',
  'oil',
  'olive oil',
  'vegetable oil',
  'canola oil',
  'water',
  'flour',
  'all-purpose flour',
]);

// Category mapping for ingredients
const INGREDIENT_CATEGORIES = {
  'Produce': [
    'garlic', 'onion', 'carrot', 'celery', 'broccoli', 'spinach', 'kale',
    'lettuce', 'tomato', 'cucumber', 'bell pepper', 'potato', 'sweet potato',
    'zucchini', 'asparagus', 'mushroom', 'lemon', 'lime', 'orange', 'apple',
    'banana', 'ginger', 'cilantro', 'basil', 'parsley', 'mint', 'arugula',
    'cabbage', 'leek', 'scallion', 'green onion', 'jalapeño', 'avocado',
    'corn', 'peas', 'green beans', 'broccolini', 'cauliflower', 'eggplant',
    'fennel', 'shallot', 'radish', 'turnip', 'caraway', 'dill', 'thyme',
    'rosemary', 'sage', 'oregano', 'lavender', 'tarragon', 'chive',
    'bok choy', 'kombu', 'pandan', 'serrano chile', 'orange', 'cucumber',
    'english cucumber',
  ],
  'Meat & Seafood': [
    'chicken', 'beef', 'pork', 'lamb', 'turkey', 'duck', 'fish', 'salmon',
    'shrimp', 'crab', 'lobster', 'mussels', 'clams', 'squid', 'octopus',
    'steak', 'brisket', 'ribs', 'roast', 'ground beef', 'ground chicken',
    'ground pork', 'ground turkey', 'sausage', 'bacon', 'ham', 'prosciutto',
    'anchovy', 'tuna', 'cod', 'snapper', 'halibut', 'trout', 'sole', 'flounder',
  ],
  'Dairy': [
    'milk', 'cream', 'butter', 'cheese', 'cheddar', 'mozzarella', 'parmesan',
    'ricotta', 'feta', 'goat cheese', 'yogurt', 'sour cream', 'greek yogurt',
    'cottage cheese', 'mascarpone', 'cream cheese', 'brie', 'camembert',
    'provolone', 'gorgonzola', 'gruyere', 'fontina', 'manchego',
  ],
  'Pantry & Grains': [
    'rice', 'pasta', 'couscous', 'quinoa', 'bread', 'tortilla', 'noodle',
    'bean', 'lentil', 'chickpea', 'peanut', 'almond', 'walnut', 'pecan',
    'cashew', 'sesame', 'sunflower', 'nut', 'seed', 'grain', 'oat',
    'barley', 'wheat', 'rye', 'corn meal', 'polenta', 'flour', 'sugar',
    'honey', 'maple syrup', 'molasses', 'soy sauce', 'vinegar', 'balsamic',
    'worcestershire', 'hot sauce', 'mayonnaise', 'mustard', 'ketchup',
  ],
  'Spices & Seasonings': [
    'salt', 'pepper', 'cumin', 'coriander', 'turmeric', 'paprika', 'chili',
    'cinnamon', 'nutmeg', 'ginger', 'cardamom', 'clove', 'star anise',
    'fennel', 'caraway', 'mustard seed', 'cayenne', 'thyme', 'oregano',
    'basil', 'rosemary', 'sage', 'marjoram', 'tarragon', 'dill', 'chive',
  ],
};

// Parse YAML frontmatter from markdown
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const yaml = match[1];
  const data = {};

  // Simple YAML parsing for our use case
  const lines = yaml.split('\n');
  let currentKey = null;
  let currentArray = [];

  lines.forEach((line) => {
    if (!line.trim()) return;

    // Handle array items
    if (line.match(/^\s*-\s/)) {
      const value = line.replace(/^\s*-\s/, '').trim();
      if (value.startsWith('[')) {
        // Inline array like [main, side]
        const arrayStr = value.slice(1, -1);
        currentArray = arrayStr.split(',').map(s => s.trim());
      } else {
        currentArray.push(value);
      }
    } else if (line.includes(':')) {
      // Save previous array if exists
      if (currentArray.length > 0 && currentKey) {
        data[currentKey] = currentArray;
        currentArray = [];
      }

      const [key, ...valueParts] = line.split(':');
      currentKey = key.trim();
      const value = valueParts.join(':').trim();

      // Handle inline array
      if (value.startsWith('[')) {
        const arrayStr = value.slice(1, -1);
        data[currentKey] = arrayStr.split(',').map(s => s.trim());
      } else if (value) {
        // Remove quotes if present
        data[currentKey] = value.replace(/^['"]|['"]$/g, '');
      }
    }
  });

  if (currentArray.length > 0 && currentKey) {
    data[currentKey] = currentArray;
  }

  return data;
}

// Extract ingredients array from frontmatter
function getIngredients(frontmatter) {
  if (!frontmatter.ingredients) return [];
  return Array.isArray(frontmatter.ingredients) ? frontmatter.ingredients : [];
}

// Extract meal recipe references
function getMealRecipes(frontmatter) {
  const recipes = [];
  const fields = ['main', 'base', 'sides', 'salad', 'sauce', 'protein', 'vegetable'];

  fields.forEach(field => {
    if (frontmatter[field]) {
      if (Array.isArray(frontmatter[field])) {
        recipes.push(...frontmatter[field]);
      } else {
        recipes.push(frontmatter[field]);
      }
    }
  });

  return recipes;
}

// Extract meal references from calendar
function getMealsFromCalendar(calendarContent) {
  const meals = [];
  // Match [[meal-slug]] format
  const mealRegex = /\[\[([a-z0-9-]+)\]\]/g;
  let match;

  while ((match = mealRegex.exec(calendarContent)) !== null) {
    meals.push(match[1]);
  }

  return meals;
}

// Parse ingredient string and extract quantity, unit, and name
function parseIngredient(ingredientStr) {
  ingredientStr = ingredientStr.trim();

  // Remove surrounding quotes if present (from YAML parsing)
  ingredientStr = ingredientStr.replace(/^['"]|['"]$/g, '').trim();

  // Skip section dividers
  if (ingredientStr.startsWith('---')) {
    return null;
  }

  // Skip empty lines
  if (!ingredientStr) {
    return null;
  }

  // Skip markdown links and frontmatter references
  if (ingredientStr.startsWith('[') || ingredientStr.startsWith('!')) {
    return null;
  }

  // Remove parenthetical notes
  let cleanStr = ingredientStr.replace(/\s*\([^)]*\)\s*/g, ' ').trim();

  // Remove any remaining brackets (markdown artifacts)
  cleanStr = cleanStr.replace(/[\[\]]/g, '').trim();

  // Skip if it looks like a reference (all caps, camel case recipe names, etc)
  if (cleanStr.match(/^[A-Z][a-z]+(?:[A-Z][a-z]+)*\s*$/) && !cleanStr.includes(' ')) {
    return null;
  }

  // Try to extract quantity and unit
  // Patterns: "2 cups", "1/2 tbsp", "1 1/2 tsp", "2-3 cloves"
  const quantityMatch = cleanStr.match(/^([\d\s/.-]+)\s*([a-z]*)/i);

  if (quantityMatch) {
    const quantityStr = quantityMatch[1].trim();
    const unit = quantityMatch[2].trim();
    const name = cleanStr.substring(quantityMatch[0].length).trim();

    return {
      original: ingredientStr,
      quantity: quantityStr,
      unit: unit,
      name: name.toLowerCase(),
      fullName: `${quantityStr}${unit ? ' ' + unit : ''} ${name}`.trim(),
    };
  }

  // No quantity found, just the ingredient name
  return {
    original: ingredientStr,
    quantity: null,
    unit: null,
    name: cleanStr.toLowerCase(),
    fullName: cleanStr,
  };
}

// Check if ingredient should be skipped
function shouldSkipIngredient(parsed) {
  if (!parsed) return true;
  if (!parsed.name) return true;

  // Skip section headers/dividers (anything that starts with ---)
  if (parsed.fullName.trim().startsWith('---')) {
    return true;
  }

  // Skip lines that are clearly section headers (The X, For Serving, etc)
  // These are instruction lines, not ingredients
  if (parsed.fullName.match(/^(The\s+|For\s+|In\s+|With\s+|Topping\s+)[A-Z]/)) {
    return true;
  }

  // Skip common instruction/description lines
  if (parsed.fullName.match(/^(Cooked|Sliced|Shredded|Roasted|Caramelized|Fresh|Seasoned|Pickled)\s+[A-Z]/)) {
    // But keep ones that look like actual ingredients (e.g., "Fresh Basil" is ok)
    // Only skip if it looks like a reference to a made component
    if (parsed.fullName.match(/^(Cooked|Seasoned|Roasted|Caramelized|Pickled)\s+([A-Z][a-z]+\s+)?[A-Z][a-z]+\s*$/) &&
        !parsed.fullName.includes('inch') && !parsed.fullName.includes('oz') &&
        !parsed.fullName.includes('cup') && !parsed.fullName.includes('tbsp')) {
      // Skip references to components made elsewhere
      return true;
    }
  }

  // Check against pantry staples
  for (const staple of PANTRY_STAPLES) {
    if (parsed.name.includes(staple)) {
      return true;
    }
  }

  return false;
}

// Categorize ingredient
function categorizeIngredient(parsed) {
  const name = parsed.name.toLowerCase();

  for (const [category, keywords] of Object.entries(INGREDIENT_CATEGORIES)) {
    for (const keyword of keywords) {
      if (name.includes(keyword)) {
        return category;
      }
    }
  }

  return 'Other';
}

// Read and parse a file
function readAndParseFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);

    if (match) {
      const frontmatterStr = match[1];
      const body = match[2];
      const frontmatter = parseFrontmatter(content);
      return { frontmatter, body, content };
    }

    return { frontmatter: {}, body: '', content };
  } catch (error) {
    console.error(`Error reading ${filePath}: ${error.message}`);
    return { frontmatter: {}, body: '', content: '' };
  }
}

// Main function
async function generateShoppingList(calendarName) {
  const calendarFileName = calendarName.endsWith('.md') ? calendarName : `${calendarName}.md`;
  const calendarPath = path.join(CALENDARS_DIR, calendarFileName);

  // Read calendar
  console.log(`Reading calendar: ${calendarPath}`);
  if (!fs.existsSync(calendarPath)) {
    console.error(`Calendar file not found: ${calendarPath}`);
    process.exit(1);
  }

  const calendarContent = fs.readFileSync(calendarPath, 'utf-8');
  const calendarData = readAndParseFile(calendarPath);

  // Get meal names
  const mealSlugs = getMealsFromCalendar(calendarContent);
  console.log(`Found ${mealSlugs.length} meals: ${mealSlugs.join(', ')}`);

  // Collect all ingredients
  const ingredientsByCategory = {};
  const processedIngredients = new Map(); // For combining duplicates

  // For each meal
  for (const mealSlug of mealSlugs) {
    const mealPath = path.join(MEALS_DIR, `${mealSlug}.md`);

    if (!fs.existsSync(mealPath)) {
      console.warn(`Meal file not found: ${mealPath}`);
      continue;
    }

    console.log(`Processing meal: ${mealSlug}`);
    const mealData = readAndParseFile(mealPath);
    const recipeSlugs = getMealRecipes(mealData.frontmatter);

    // For each recipe in the meal
    for (const recipeSlug of recipeSlugs) {
      const recipePath = path.join(RECIPES_DIR, `${recipeSlug}.md`);

      if (!fs.existsSync(recipePath)) {
        console.warn(`Recipe file not found: ${recipePath}`);
        continue;
      }

      console.log(`  Processing recipe: ${recipeSlug}`);
      const recipeData = readAndParseFile(recipePath);
      const ingredients = getIngredients(recipeData.frontmatter);

      // Process each ingredient
      for (const ingredientStr of ingredients) {
        const parsed = parseIngredient(ingredientStr);

        if (shouldSkipIngredient(parsed)) {
          continue;
        }

        const category = categorizeIngredient(parsed);

        if (!ingredientsByCategory[category]) {
          ingredientsByCategory[category] = [];
        }

        // For now, just add to list without combining duplicates
        // (combining would require complex parsing of quantities)
        ingredientsByCategory[category].push(parsed);
      }
    }
  }

  // Format output
  let output = '';
  output += `# Shopping List: ${calendarData.frontmatter.title || calendarFileName}\n`;
  output += `**Week: ${calendarData.frontmatter.weekStart} to ${calendarData.frontmatter.weekEnd}**\n\n`;

  const categoryOrder = [
    'Produce',
    'Meat & Seafood',
    'Dairy',
    'Pantry & Grains',
    'Spices & Seasonings',
    'Other',
  ];

  // Output by category
  for (const category of categoryOrder) {
    if (!ingredientsByCategory[category] || ingredientsByCategory[category].length === 0) {
      continue;
    }

    output += `## ${category}\n`;

    // Deduplicate within category (same name and unit, combine quantities)
    const grouped = new Map();

    for (const ingredient of ingredientsByCategory[category]) {
      const key = `${ingredient.name}|${ingredient.unit || ''}`;

      if (grouped.has(key)) {
        const existing = grouped.get(key);
        // Try to combine quantities if both are numbers
        if (
          ingredient.quantity &&
          existing.quantity &&
          !ingredient.quantity.includes('-') &&
          !existing.quantity.includes('-')
        ) {
          try {
            const qty1 = eval(existing.quantity.replace(/\s+/g, '+'));
            const qty2 = eval(ingredient.quantity.replace(/\s+/g, '+'));
            existing.quantity = (qty1 + qty2).toString();
            existing.fullName = `${existing.quantity}${existing.unit ? ' ' + existing.unit : ''} ${ingredient.name}`;
          } catch (e) {
            // If parsing fails, just keep the original
            existing.isDuplicate = true;
          }
        } else {
          existing.isDuplicate = true;
        }
      } else {
        grouped.set(key, { ...ingredient });
      }
    }

    // Sort by name and output
    const sorted = Array.from(grouped.values()).sort((a, b) => a.name.localeCompare(b.name));

    for (const ingredient of sorted) {
      output += `- ${ingredient.fullName}`;
      if (ingredient.isDuplicate) {
        output += ' *[appears multiple times]*';
      }
      output += '\n';
    }

    output += '\n';
  }

  // Write to file
  const outputFileName = `shopping-list-${calendarName}.md`;
  const outputPath = path.join(projectRoot, outputFileName);

  fs.writeFileSync(outputPath, output);
  console.log(`\nShopping list saved to: ${outputPath}`);

  // Also print to stdout
  console.log('\n' + '='.repeat(60));
  console.log(output);
  console.log('='.repeat(60));
}

// Get calendar name from command line
const calendarName = process.argv[2];

if (!calendarName) {
  console.error('Usage: node scripts/shopping-list.mjs <calendar-name>');
  console.error('Example: node scripts/shopping-list.mjs week-of-april-13-2026');
  process.exit(1);
}

generateShoppingList(calendarName).catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
