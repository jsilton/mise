const fs = require('fs');
const path = require('path');

// Read all recipe files
const recipesDir = './src/content/recipes';
const files = fs.readdirSync(recipesDir).filter(f => f.endsWith('.md'));

// Track recipes by category for organized processing
const recipesByCategory = {
  'Italian-American': [],
  'Chinese': [],
  'Mexican': [],
  'Thai': [],
  'Korean': [],
  'Japanese': [],
  'Indian': [],
  'Mediterranean': [],
  'Middle Eastern': [],
  'French': [],
  'Jewish': [],
  'Southern': [],
  'Desserts': [],
  'Breakfast': [],
  'Cocktails': [],
  'Other': []
};

const completed = new Set([
  'classic-manhattan.md',
  'old-fashioned.md',
  'sazerac.md',
  'boulevardier.md',
  'whiskey-sour.md',
  'shruffs-end.md',
  'chicken-marsala.md',
  'brisket-with-carrots-and-onions.md',
  'pad-thai.md',
  'bibimbap.md',
  'pizza.md',
  'best-chocolate-chip-cookies.md'
]);

// Parse frontmatter to categorize
files.forEach(file => {
  if (completed.has(file)) return;
  
  const content = fs.readFileSync(path.join(recipesDir, file), 'utf8');
  const match = content.match(/---\n([\s\S]*?)\n---/);
  
  if (!match) {
    recipesByCategory['Other'].push(file);
    return;
  }
  
  const yaml = match[1];
  
  // Extract cuisines
  const cuisineMatch = yaml.match(/cuisines:\s*\[(.*?)\]/);
  if (cuisineMatch) {
    const cuisines = cuisineMatch[1].split(',').map(c => c.trim().replace(/['"]/g, ''));
    const cuisine = cuisines[0];
    
    if (cuisine === 'Italian' || cuisine === 'Italian-American') {
      recipesByCategory['Italian-American'].push(file);
    } else if (cuisine === 'Chinese') {
      recipesByCategory['Chinese'].push(file);
    } else if (cuisine === 'Mexican') {
      recipesByCategory['Mexican'].push(file);
    } else if (cuisine === 'Thai') {
      recipesByCategory['Thai'].push(file);
    } else if (cuisine === 'Korean') {
      recipesByCategory['Korean'].push(file);
    } else if (cuisine === 'Japanese') {
      recipesByCategory['Japanese'].push(file);
    } else if (cuisine === 'Indian') {
      recipesByCategory['Indian'].push(file);
    } else if (cuisine === 'Mediterranean' || cuisine === 'Greek' || cuisine === 'Lebanese') {
      recipesByCategory['Mediterranean'].push(file);
    } else if (cuisine === 'Middle Eastern') {
      recipesByCategory['Middle Eastern'].push(file);
    } else if (cuisine === 'French') {
      recipesByCategory['French'].push(file);
    } else if (cuisine === 'Jewish') {
      recipesByCategory['Jewish'].push(file);
    } else if (cuisine === 'Southern') {
      recipesByCategory['Southern'].push(file);
    } else {
      recipesByCategory['Other'].push(file);
    }
  }
  
  // Check for desserts, breakfast, cocktails
  const title = yaml.match(/title:\s*["']?([^"'\n]+)["']?/)?.[1] || '';
  const lower = title.toLowerCase();
  
  if (lower.includes('cookie') || lower.includes('cake') || lower.includes('pie') || 
      lower.includes('brownie') || lower.includes('dessert') || lower.includes('ice cream')) {
    const idx = recipesByCategory['Other'].indexOf(file);
    if (idx > -1) recipesByCategory['Other'].splice(idx, 1);
    recipesByCategory['Desserts'].push(file);
  } else if (lower.includes('muffin') || lower.includes('pancake') || lower.includes('waffle') || 
             lower.includes('breakfast') || lower.includes('oatmeal')) {
    const idx = recipesByCategory['Other'].indexOf(file);
    if (idx > -1) recipesByCategory['Other'].splice(idx, 1);
    recipesByCategory['Breakfast'].push(file);
  } else if (lower.includes('cocktail') || lower.includes('margarita') || lower.includes('martini') ||
             lower.includes('mojito') || content.match(/servings:\s*["']1 cocktail["']/)) {
    const idx = recipesByCategory['Other'].indexOf(file);
    if (idx > -1) recipesByCategory['Other'].splice(idx, 1);
    recipesByCategory['Cocktails'].push(file);
  }
});

// Output summary
console.log('# Recipe Chef\'s Notes Rewrite Plan\n');
console.log(`Completed: ${completed.size} recipes\n`);
console.log(`Remaining: ${files.length - completed.size} recipes\n`);

Object.entries(recipesByCategory).forEach(([category, recipes]) => {
  if (recipes.length > 0) {
    console.log(`## ${category}: ${recipes.length} recipes`);
    recipes.slice(0, 10).forEach(r => console.log(`   - ${r}`));
    if (recipes.length > 10) console.log(`   ... and ${recipes.length - 10} more`);
    console.log();
  }
});

// Output batches for processing
console.log('\n# Suggested Processing Order\n');
const order = [
  'Italian-American',
  'Chinese', 
  'Mexican',
  'Thai',
  'Korean',
  'Japanese',
  'Jewish',
  'Desserts',
  'Breakfast',
  'Cocktails',
  'French',
  'Indian',
  'Mediterranean',
  'Middle Eastern',
  'Southern',
  'Other'
];

order.forEach(category => {
  const count = recipesByCategory[category].length;
  if (count > 0) {
    console.log(`${category}: ${count} recipes (${Math.ceil(count / 6)} batches of 6)`);
  }
});
