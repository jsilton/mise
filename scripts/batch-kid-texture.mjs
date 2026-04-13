import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const recipesDir = path.join(__dirname, '../src/content/recipes');
const dryRun = process.argv.includes('--dry-run');

// Spicy ingredients to detect
const spicyIngredients = [
  'sriracha', 'chili flakes', 'cayenne', 'hot sauce', 'jalapeño',
  'habanero', 'gochugaru', 'thai chili', 'thai chilies', 'red chili',
  'dried chili', 'chili powder', 'ghost pepper', 'scotch bonnet',
];

// Texture contrast toppings by cuisine
const textureToppingMap = {
  Indian: 'crispy fried shallots or papadums',
  Thai: 'crushed peanuts and fried garlic',
  Mexican: 'tortilla strips',
  Italian: 'garlic croutons',
  Japanese: 'tempura flakes',
  Chinese: 'crispy fried shallots or chow mein noodles',
  Vietnamese: 'crispy fried shallots and peanuts',
  Korean: 'crispy fried garlic or sesame seeds',
  'Middle Eastern': 'toasted bread or croutons',
  Greek: 'garlic croutons',
  Spanish: 'crispy bread cubes or croutons',
  French: 'croutons or breadcrumbs',
};

function hasSpicyIngredient(ingredients) {
  if (!ingredients || !Array.isArray(ingredients)) return false;
  const ingText = ingredients.join(' ').toLowerCase();
  return spicyIngredients.some(spice => ingText.includes(spice));
}

function isWeeknight(recipe) {
  const data = recipe.data;
  const occasions = data.occasions || [];
  const vibe = data.vibe || '';

  const hasWeeknight = occasions.some(o =>
    ['weeknight', 'quick', 'comfort'].includes(o.toLowerCase())
  );
  const hasQuickVibe = ['quick', 'comfort'].includes(vibe.toLowerCase());

  return hasWeeknight || hasQuickVibe;
}

function needsKidNote(chefNote) {
  if (!chefNote) return true;
  const lowerNote = chefNote.toLowerCase();
  return !lowerNote.includes('kids') &&
         !lowerNote.includes('family') &&
         !lowerNote.includes('child') &&
         !lowerNote.includes('children');
}

function isSoupOrStew(recipe) {
  const data = recipe.data;
  const title = (data.title || '').toLowerCase();
  const methods = (data.cookingMethods || []).map(m => m.toLowerCase());
  const flavors = (data.flavorProfile || []).map(f => f.toLowerCase());

  const titleMatch = title.includes('soup') ||
                     title.includes('stew') ||
                     title.includes('chowder');

  const methodMatch = methods.some(m =>
    ['braise', 'stew', 'slow-cook', 'simmer'].includes(m)
  );

  const creamy = flavors.includes('creamy');

  return titleMatch || (methodMatch && creamy);
}

function hasTextureTopping(directions) {
  if (!directions || typeof directions !== 'string') return false;
  const lowerDirs = directions.toLowerCase();

  // Look for texture toppings mentioned in finishing/topping context
  // These are more specific patterns that appear in final steps
  const toppingPatterns = [
    /\b(crouton|breadcrumb|fried shallot|fried garlic|fried onion|papadum|tortilla strip|crispy|toasted|crushed|roasted)\b/,
    /top with/i,
    /scatter.*with/i,
    /finish with.*crunch/i,
  ];

  return toppingPatterns.some(p => p.test(lowerDirs));
}

function getTextureSuggestion(cuisines) {
  if (!cuisines || cuisines.length === 0) {
    return 'toasted bread or croutons';
  }

  for (const c of cuisines) {
    const norm = Object.keys(textureToppingMap).find(k =>
      k.toLowerCase() === c.toLowerCase()
    );
    if (norm) return textureToppingMap[norm];
  }

  return 'toasted bread or croutons';
}

function extractChefNote(content) {
  const m = content.match(/## Chef's Note\n+([\s\S]*?)(?:\n## |$)/);
  return m ? m[1] : null;
}

function extractDirectionsText(content) {
  const m = content.match(/## Directions\n+([\s\S]*?)(?:\n## |$)/);
  return m ? m[1] : '';
}

function extractDirectionsLines(directionsText) {
  if (!directionsText) return [];
  return directionsText.split('\n').filter(line => line.trim());
}

function analyzeRecipe(filePath, filename) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: md } = matter(content);

    const result = {
      slug: filename.replace('.md', ''),
      title: data.title,
      fullPath: filePath,
      needsKidNote: false,
      needsTextureNote: false,
      cuisines: data.cuisines || [],
    };

    // Check for kid-friendly spicy flag
    if (isWeeknight({ data, content: md })) {
      if (hasSpicyIngredient(data.ingredients || [])) {
        const chefNote = extractChefNote(md);
        if (needsKidNote(chefNote)) {
          result.needsKidNote = true;
        }
      }
    }

    // Check for texture contrast flag
    if (isSoupOrStew({ data, content: md })) {
      const dirs = extractDirectionsText(md);
      if (!hasTextureTopping(dirs)) {
        result.needsTextureNote = true;
        result.textureSuggestion = getTextureSuggestion(data.cuisines);
      }
    }

    if (result.needsKidNote || result.needsTextureNote) {
      return result;
    }
    return null;
  } catch (e) {
    console.error(`Error analyzing ${filename}:`, e.message);
    return null;
  }
}

function updateRecipeFile(filePath, updates) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: md } = matter(content);
  let newMd = md;

  // Part 1: Add kid-friendly note
  if (updates.needsKidNote) {
    const chefNoteMatch = newMd.match(/## Chef's Note\n+([\s\S]*?)(?:\n## |$)/);
    if (chefNoteMatch) {
      const chefNoteContent = chefNoteMatch[1];
      const kidNote = '\nFor kids, serve the heat on the side or reduce/omit the spicy elements.';
      const updatedChefNote = chefNoteContent.trimRight() + kidNote;
      newMd = newMd.replace(
        /## Chef's Note\n+([\s\S]*?)(?=\n## |$)/,
        `## Chef's Note\n${updatedChefNote}\n`
      );
    }
  }

  // Part 2: Add texture contrast note to final direction
  if (updates.needsTextureNote) {
    const dirsMatch = newMd.match(/## Directions\n+([\s\S]*?)(?:\n## |$)/);
    if (dirsMatch) {
      const dirsContent = dirsMatch[1];
      const lines = dirsContent.split('\n');

      // Find the last numbered step
      let lastStepIndex = -1;
      for (let i = lines.length - 1; i >= 0; i--) {
        if (/^\d+\./.test(lines[i])) {
          lastStepIndex = i;
          break;
        }
      }

      if (lastStepIndex >= 0) {
        const textureNote = `\n   **Texture Contrast:** Top with ${updates.textureSuggestion}.`;
        lines[lastStepIndex] = lines[lastStepIndex].trimRight() + textureNote;
        const updatedDirs = lines.join('\n');
        newMd = newMd.replace(
          /## Directions\n+([\s\S]*?)(?:\n## |$)/,
          `## Directions\n${updatedDirs}`
        );
      }
    }
  }

  const out = matter.stringify(newMd, data);
  if (!dryRun) fs.writeFileSync(filePath, out);
  return true;
}

console.log(`Batch Kid-Friendly & Texture Contrast Enhancer ${dryRun ? '(DRY RUN)' : ''}\n`);
const files = fs.readdirSync(recipesDir).filter(f => f.endsWith('.md'));
const results = [];

for (const filename of files) {
  const a = analyzeRecipe(`${recipesDir}/${filename}`, filename);
  if (a) results.push(a);
}

if (results.length === 0) {
  console.log('✓ No recipes found needing kid-friendly or texture contrast improvements.\n');
  process.exit(0);
}

console.log(`Found ${results.length} recipe(s) needing improvements:\n`);
results.forEach((r, i) => {
  console.log(`${i+1}. ${r.slug}`);
  console.log(`   Title: ${r.title}`);
  if (r.needsKidNote) {
    console.log(`   ➜ Add kid-friendly spice note to Chef's Note`);
  }
  if (r.needsTextureNote) {
    console.log(`   ➜ Add texture contrast note: ${r.textureSuggestion}`);
  }
  console.log('');
});

if (!dryRun) {
  let cnt = 0;
  results.forEach(r => {
    try {
      updateRecipeFile(r.fullPath, {
        needsKidNote: r.needsKidNote,
        needsTextureNote: r.needsTextureNote,
        textureSuggestion: r.textureSuggestion,
      });
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
