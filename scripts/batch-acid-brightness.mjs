import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const recipesDir = path.join(__dirname, '../src/content/recipes');
const dryRun = process.argv.includes('--dry-run');

const acidKeywords = [
  'lemon', 'lime', 'vinegar', 'wine', 'yogurt', 'tomato',
  'tamarind', 'citrus', 'sour cream', 'creme fraiche',
  'verjuice', 'pomegranate', 'pickle', 'worcestershire',
];

const brightnessActions = [
  'squeeze', 'finish with', 'drizzle', 'zest', 'splash',
  'add brightness', 'lime juice', 'lemon juice', 'top with',
];

const cuisineAcidMap = {
  Mexican: { acid: 'lime juice', ingredient: '1-2 Limes, juiced', suggestion: 'lime juice and cilantro' },
  Italian: { acid: 'lemon juice', ingredient: '1-2 Lemons, juiced', suggestion: 'fresh lemon juice' },
  Indian: { acid: 'yogurt', ingredient: '1/4 cup Plain Yogurt', suggestion: 'dollop of plain yogurt or fresh cilantro' },
  Korean: { acid: 'rice vinegar', ingredient: '1-2 tbsp Rice Vinegar', suggestion: 'rice vinegar and sesame oil' },
  Chinese: { acid: 'black vinegar', ingredient: '1 tbsp Black Vinegar', suggestion: 'black vinegar or rice vinegar' },
  Vietnamese: { acid: 'fish sauce', ingredient: '1 tbsp Fish Sauce', suggestion: 'fresh lime and cilantro' },
  Thai: { acid: 'lime juice', ingredient: '1-2 Limes, juiced', suggestion: 'lime juice and fresh cilantro' },
  'Middle Eastern': { acid: 'lemon juice', ingredient: '1-2 Lemons, juiced', suggestion: 'fresh lemon juice and herbs' },
  Japanese: { acid: 'rice vinegar', ingredient: '1 tbsp Rice Vinegar', suggestion: 'rice vinegar or pickled ginger' },
  Greek: { acid: 'lemon juice', ingredient: '1-2 Lemons, juiced', suggestion: 'fresh lemon juice' },
  Spanish: { acid: 'sherry vinegar', ingredient: '1 tbsp Sherry Vinegar', suggestion: 'sherry vinegar' },
  French: { acid: 'wine', ingredient: '1/4 cup White Wine', suggestion: 'fresh lemon or a splash of wine' },
};

function hasAcidInContent(text) {
  return acidKeywords.some(k => text.toLowerCase().includes(k));
}

function hasBrightnessAction(dirs) {
  if (!dirs || typeof dirs !== 'string') return false;
  return brightnessActions.some(a => dirs.toLowerCase().includes(a));
}

function isRichSavoryRecipe(recipe) {
  const d = recipe.data;
  const isBraised = d.cookingMethods && d.cookingMethods.some(m => ['braise','stew','slow-cook','simmer'].includes(m.toLowerCase()));
  const flavor = (d.flavorProfile || []).map(f => f.toLowerCase());
  const hasUmamiOrSavory = flavor.some(f => ['umami','savory','meaty'].includes(f));
  const isSweetish = flavor.some(f => ['sweet','dessert'].includes(f));
  const isMainRole = d.role === 'main';
  const isRichMain = isMainRole && hasUmamiOrSavory && d.cookingMethods && d.cookingMethods.length > 0;
  return (isBraised || isRichMain) && !isSweetish;
}

function getMostLikelyAcid(cuisines) {
  if (!cuisines || cuisines.length === 0) return { acid: 'lemon juice', ingredient: '1 Lemon, juiced', suggestion: 'fresh lemon juice' };
  for (const c of cuisines) {
    const norm = Object.keys(cuisineAcidMap).find(k => k.toLowerCase() === c.toLowerCase());
    if (norm) return cuisineAcidMap[norm];
  }
  return { acid: 'lemon juice', ingredient: '1 Lemon, juiced', suggestion: 'fresh lemon juice' };
}

function extractDirectionsText(content) {
  const m = content.match(/## Directions\n\n([\s\S]*?)(?:\n## |$)/);
  return m ? m[1] : '';
}

function analyzeRecipe(filePath, filename) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: md } = matter(content);
    if (!isRichSavoryRecipe({ data, content: md })) return null;
    const ings = (data.ingredients || []).join(' ');
    const hasAcid = hasAcidInContent(ings);
    const dirs = extractDirectionsText(md);
    const hasBright = hasBrightnessAction(dirs);
    if (hasAcid && hasBright) return null;
    if (!hasAcid && !hasBright) {
      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        cuisines: data.cuisines || [],
        flavorProfile: data.flavorProfile || [],
        cookingMethods: data.cookingMethods || [],
        acidSuggestion: getMostLikelyAcid(data.cuisines),
        fullPath: filePath,
        directionsText: dirs,
      };
    }
    return null;
  } catch (e) {
    return null;
  }
}

function updateRecipeFile(filePath, acid) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: md } = matter(content);
  if (!data.ingredients) data.ingredients = [];
  const hasIt = data.ingredients.some(i => i.toLowerCase().includes(acid.acid.toLowerCase()));
  if (!hasIt) {
    data.ingredients.push(`--- ${acid.acid.charAt(0).toUpperCase() + acid.acid.slice(1).toLowerCase()} ---`);
    data.ingredients.push(acid.ingredient);
  }
  const dirs = extractDirectionsText(md);
  const steps = dirs.split(/\n(?=\d+\.)/);
  if (steps.length > 0) {
    steps[steps.length - 1] = `${steps[steps.length - 1].trimRight()}\n   **Brightness:** Finish with ${acid.suggestion}.`;
  }
  const newDirs = steps.join('\n');
  const newMd = md.replace(/## Directions\n\n([\s\S]*?)(?=\n## |$)/, `## Directions\n\n${newDirs}`);
  const out = matter.stringify(newMd, data);
  if (!dryRun) fs.writeFileSync(filePath, out);
  return true;
}

console.log(`Batch Acid/Brightness Detector ${dryRun ? '(DRY RUN)' : ''}\n`);
const files = fs.readdirSync(recipesDir).filter(f => f.endsWith('.md'));
const results = [];
for (const filename of files) {
  const a = analyzeRecipe(`${recipesDir}/${filename}`, filename);
  if (a) results.push(a);
}

if (results.length === 0) {
  console.log('✓ No recipes found needing acid/brightness improvement.\n');
  process.exit(0);
}

console.log(`Found ${results.length} recipe(s) needing acid/brightness finishing:\n`);
results.forEach((r, i) => {
  console.log(`${i+1}. ${r.slug}`);
  console.log(`   Title: ${r.title}`);
  console.log(`   Cuisines: ${r.cuisines.join(', ') || 'N/A'}`);
  console.log(`   Flavor: ${r.flavorProfile.join(', ')}`);
  console.log(`   Methods: ${r.cookingMethods.join(', ')}`);
  console.log(`   Suggested Acid: ${r.acidSuggestion.acid} (${r.acidSuggestion.suggestion})`);
  console.log('');
});

if (!dryRun) {
  let cnt = 0;
  results.forEach(r => {
    try {
      updateRecipeFile(r.fullPath, r.acidSuggestion);
      console.log(`✓ Updated: ${r.slug}`);
      cnt++;
    } catch (e) {
      console.error(`✗ Failed ${r.slug}:`, e.message);
    }
  });
  console.log(`\n✓ Updated ${cnt}/${results.length} recipes.`);
} else {
  console.log('(No updates applied - use without --dry-run to commit changes)\n');
}