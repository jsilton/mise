#!/usr/bin/env node

import fs from 'fs';
import { readdirSync } from 'fs';

// Intelligent tagging based on content analysis
const analyze = (content, title, ingredients, directions) => {
  const tags = {
    cookingMethods: new Set(),
    cuisines: [],
    dietary: new Set(),
    occasions: new Set(),
    flavorProfile: new Set(),
    difficulty: 'easy'
  };

  const text = (content + title + ingredients + directions).toLowerCase();

  // --- COOKING METHODS ---
  if (text.includes('oven') || text.includes('bake')) tags.cookingMethods.add('bake');
  if (text.includes('roast')) tags.cookingMethods.add('roast');
  if (text.includes('grill')) tags.cookingMethods.add('grill');
  if (text.includes('fry') || text.includes('deep fry')) tags.cookingMethods.add('fry');
  if (text.includes('sauté') || text.includes('sauté')) tags.cookingMethods.add('sauté');
  if (text.includes('simmer')) tags.cookingMethods.add('simmer');
  if (text.includes('boil')) tags.cookingMethods.add('boil');
  if (text.includes('steam')) tags.cookingMethods.add('steam');
  if (text.includes('poach')) tags.cookingMethods.add('poach');
  if (text.includes('braise')) tags.cookingMethods.add('braise');
  if (text.includes('slow cooker') || text.includes('crock pot')) tags.cookingMethods.add('slow-cook');
  if (text.includes('no-cook') || text.includes('no cook') || text.includes('assemble')) tags.cookingMethods.add('no-cook');
  if (text.includes('blend') || text.includes('food processor')) tags.cookingMethods.add('blend');
  if (text.includes('sous-vide') || text.includes('sous vide')) tags.cookingMethods.add('sous-vide');

  // --- DIETARY ---
  if (text.includes('vegetarian') || (!text.includes('chicken') && !text.includes('beef') && !text.includes('pork') && !text.includes('fish') && !text.includes('shrimp') && !text.includes('meat'))) {
    if (!text.includes('chicken') && !text.includes('beef') && !text.includes('pork') && !text.includes('fish') && !text.includes('shrimp')) {
      tags.dietary.add('vegetarian');
    }
  }
  if (text.includes('vegan')) tags.dietary.add('vegan');
  if (text.includes('gluten-free') || text.includes('gluten free')) tags.dietary.add('gluten-free');
  if (text.includes('dairy-free') || text.includes('dairy free')) tags.dietary.add('dairy-free');
  if (text.includes('nut-free') || text.includes('nut free')) tags.dietary.add('nut-free');
  if (text.includes('egg-free') || text.includes('egg free')) tags.dietary.add('egg-free');

  // --- FLAVOR PROFILE ---
  if (text.includes('spicy') || text.includes('chili') || text.includes('cayenne') || text.includes('jalapeño')) tags.flavorProfile.add('spicy');
  if (text.includes('sweet') || text.includes('sugar') || text.includes('honey') || text.includes('maple')) tags.flavorProfile.add('sweet');
  if (text.includes('savory') || text.includes('umami') || text.includes('soy sauce') || text.includes('miso')) tags.flavorProfile.add('savory');
  if (text.includes('acid') || text.includes('citrus') || text.includes('lemon') || text.includes('vinegar')) tags.flavorProfile.add('acidic');
  if (text.includes('umami') || text.includes('parmesan') || text.includes('tomato paste') || text.includes('soy')) tags.flavorProfile.add('umami');
  if (text.includes('cream') || text.includes('butter') || text.includes('rich')) tags.flavorProfile.add('rich');
  if (text.includes('fresh') && (text.includes('herb') || text.includes('basil') || text.includes('parsley'))) tags.flavorProfile.add('herbaceous');
  if (text.includes('smoke') || text.includes('smoked')) tags.flavorProfile.add('smoky');

  // --- OCCASIONS ---
  const totalTime = content.match(/totalTime:\s*'([^']+)'/)?.[1] || '';
  if (totalTime.includes('min') && parseInt(totalTime) <= 30) tags.occasions.add('weeknight');
  if (totalTime.includes('min') && parseInt(totalTime) <= 60) tags.occasions.add('weeknight');
  if (text.includes('holiday') || text.includes('thanksgiving') || text.includes('christmas')) tags.occasions.add('holiday');
  if (text.includes('comfort') || text.includes('soul food')) tags.occasions.add('comfort-food');
  if (text.includes('elegant') || text.includes('impress')) tags.occasions.add('entertaining');
  if (text.includes('kids') || text.includes('child')) tags.occasions.add('kids-approved');
  if (text.includes('make ahead') || text.includes('make-ahead')) tags.occasions.add('make-ahead');

  // --- DIFFICULTY (based on step count and technique keywords) ---
  const stepCount = (directions.match(/^\d+\./gm) || []).length;
  const hasTechnique = text.includes('temper') || text.includes('emulsif') || text.includes('sous-vide') || text.includes('braise');
  if (stepCount > 15 || hasTechnique) tags.difficulty = 'intermediate';
  if (stepCount > 20 || (hasTechnique && stepCount > 15)) tags.difficulty = 'advanced';

  return {
    ...tags,
    cookingMethods: Array.from(tags.cookingMethods),
    dietary: Array.from(tags.dietary),
    occasions: Array.from(tags.occasions),
    flavorProfile: Array.from(tags.flavorProfile)
  };
};

const files = readdirSync('src/content/recipes').filter(f => f.endsWith('.md')).map(f => `src/content/recipes/${f}`);
let updated = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if already has tags
  if (content.includes('cookingMethods:')) {
    return;
  }

  const titleMatch = content.match(/^title: (.+?)$/m);
  const ingredientsMatch = content.match(/ingredients:\n([\s\S]*?)\n(?=\w)/m);
  const directionsMatch = content.match(/## Directions\n\n([\s\S]*?)$/m);

  if (!titleMatch) return;

  const title = titleMatch[1];
  const ingredients = ingredientsMatch?.[1] || '';
  const directions = directionsMatch?.[1] || '';

  const tags = analyze(content, title, ingredients, directions);

  // Build frontmatter insertion
  const insertAfter = content.match(/^(---\ntitle: .+?)(\nrole:|$)/m);
  if (!insertAfter) return;

  // Insert tags before "role" or at end of frontmatter
  const roleIdx = content.indexOf('\nrole:');
  if (roleIdx === -1) return; // Can't find role

  const insertion = `
difficulty: ${tags.difficulty}
cookingMethods: [${tags.cookingMethods.join(', ')}]
dietary: [${tags.dietary.join(', ')}]
occasions: [${tags.occasions.join(', ')}]
flavorProfile: [${tags.flavorProfile.join(', ')}]`;

  content = content.slice(0, roleIdx) + insertion + content.slice(roleIdx);
  fs.writeFileSync(file, content);

  console.log(`✓ ${file} | Added tags (${tags.cookingMethods.length} methods, ${tags.dietary.length} dietary, ${tags.occasions.length} occasions, ${tags.difficulty})`);
  updated++;
});

console.log(`\n✅ Tagged ${updated} recipes. Manual review recommended for cuisines and fine-tuning.`);
