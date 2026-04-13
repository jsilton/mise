#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const recipesDir = path.join(projectRoot, 'src', 'content', 'recipes');

// Ensure recipes directory exists
if (!fs.existsSync(recipesDir)) {
  fs.mkdirSync(recipesDir, { recursive: true });
}

// Get recipe name from CLI argument
const recipeName = process.argv[2];

if (!recipeName) {
  console.error('Usage: npm run new-recipe -- "Recipe Name"');
  console.error('Example: npm run new-recipe -- "Chicken Tikka Masala"');
  process.exit(1);
}

// Convert recipe name to kebab-case
function toKebabCase(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

const slug = toKebabCase(recipeName);
const filename = `${slug}.md`;
const filepath = path.join(recipesDir, filename);

// Check if file already exists
if (fs.existsSync(filepath)) {
  console.error(`Recipe file already exists: ${filepath}`);
  process.exit(1);
}

// Generate the recipe template
const recipeTemplate = `---
title: '${recipeName}'
origin: '' # TODO: Country/region of origin
difficulty: easy # easy | intermediate | medium | hard
role: main # main | side | base | dessert | drink | condiment
vibe: quick # quick | nutritious | comfort | technical | holiday

# Time estimates (be honest about real active cooking time)
prepTime: '15 min' # TODO: Actual prep time
cookTime: '20 min' # TODO: Actual cook time
totalTime: '35 min' # TODO: Total including resting
servings: '4' # TODO: Actual servings

# Classification - fill in what applies
cuisines: [] # e.g., [Chinese, Cantonese], [Italian], [Thai]
cookingMethods: [] # e.g., [roast, sear, braise], [simmer], [grill]
dietary: [] # e.g., [gluten-free, dairy-free, vegetarian]
occasions: [] # e.g., [weeknight, meal-prep, entertaining]
flavorProfile: [] # e.g., [sweet, savory, umami, spicy]

# Planning metadata
seasons: [year-round] # [spring], [summer], [fall], [winter], or [year-round]
nutritionalDensity: moderate # light | moderate | hearty
leftovers: good # poor | good | excellent
advancePrep: [] # e.g., [marinate-overnight, make-ahead-sauce]
equipment: [] # e.g., [slow-cooker, grill, instant-pot, stand-mixer]

# Pairings - reference recipe slugs that work well alongside this dish
# Think about flavor balance: acid cutting richness, texture contrast, etc.
pairsWith: [] # e.g., [basmati-rice, everyday-arugula-salad]

ingredients:
  - '2 units' # TODO: Add real ingredients with quantities and prep notes
  - '--- Sauce Section ---' # Use triple dashes to create section dividers
  - '1 unit Something' # TODO: Add sauce ingredients
---

## Chef's Note

TODO: 2-3 sentences covering:
- Sentence 1-2: Cultural/historical origin and why this dish matters
- Sentence 3: One practical insight (key ingredient, technique tip, or common mistake to avoid)

Reference: See CHEFS_NOTE_GUIDELINES.md for examples.
Avoid buzzwords and self-promotion. Respect the culinary tradition.

## Directions

1. **Step Name:** TODO: Detailed instructions with specific temperatures and visual cues.
   - Include what "done" looks like (color, texture, temperature if applicable)
   - Flag non-negotiable techniques vs. acceptable shortcuts

2. **Another Step:** TODO: Continue with bold headers for each major step.
   - Use visual cues instead of vague timing
   - Example: "until golden brown," "until sauce coats the back of a spoon"

3. **Finishing Touch:** TODO: How the dish comes together.
   - This is where brightness/acid/salt/finishing elements go
   - Example: "Taste and adjust for salt and acid (lime, vinegar, or yogurt)"

`;

// Write the file
try {
  fs.writeFileSync(filepath, recipeTemplate, 'utf-8');
  console.log(`\n✓ Recipe created: ${filepath}`);
  console.log(`\nNext steps:`);
  console.log(`1. Fill in the TODO sections in the frontmatter`);
  console.log(`2. Write the Chef's Note (see CHEFS_NOTE_GUIDELINES.md for format)`);
  console.log(`3. Complete the Directions with bold step headers`);
  console.log(`4. Run: npm run validate-recipes`);
  console.log(`5. Run: npm run lint-recipe -- ${filepath}`);
  console.log(`\nQuick start hints:`);
  console.log(`- Match 'origin' to a specific country, not a region`);
  console.log(`- Set accurate 'prepTime', 'cookTime', 'totalTime' (include resting)`);
  console.log(`- Use 'cuisines' array for cultural tags (atomic, not hyphenated)`);
  console.log(`- 'pairsWith' must reference existing recipe slugs`);
  console.log(`- 'difficulty' maps to complexity: easy=straightforward, intermediate=some technique, medium/hard=advanced`);
  process.exit(0);
} catch (error) {
  console.error(`Error creating recipe: ${error.message}`);
  process.exit(1);
}
