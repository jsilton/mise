#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RECIPES_DIR = path.join(__dirname, '../src/content/recipes');
const DRY_RUN = process.argv.includes('--dry-run');

// ============================================================================
// INFERENCE LOGIC
// ============================================================================

/**
 * Infer cuisines from origin field and recipe content
 */
function inferCuisines(data, content) {
  if (data.cuisines && data.cuisines.length > 0) {
    return data.cuisines;
  }

  const inferred = [];
  const origin = data.origin?.toLowerCase() || '';
  const title = data.title?.toLowerCase() || '';
  const fullContent = (content + title).toLowerCase();

  // Map origins to cuisines
  const originMap = {
    china: ['Chinese'],
    japan: ['Japanese'],
    korea: ['Korean'],
    thailand: ['Thai'],
    vietnam: ['Vietnamese'],
    india: ['Indian'],
    mexico: ['Mexican'],
    italy: ['Italian'],
    france: ['French'],
    greece: ['Greek'],
    spain: ['Spanish'],
    turkey: ['Middle Eastern'],
    lebanon: ['Middle Eastern'],
    israel: ['Middle Eastern'],
    ethiopia: ['Ethiopian'],
    brazil: ['Brazilian'],
    philippines: ['Filipino'],
    america: ['American'],
    'united states': ['American'],
    england: ['British'],
    sweden: ['Scandinavian'],
    norway: ['Scandinavian'],
    denmark: ['Scandinavian'],
    portugal: ['Portuguese'],
    australia: ['Australian'],
  };

  // Check origin
  for (const [key, cuisines] of Object.entries(originMap)) {
    if (origin.includes(key)) {
      inferred.push(...cuisines);
    }
  }

  // Keyword matching in title/content
  const keywordMap = {
    'thai|pad thai|tom yum|curry|pho': 'Thai',
    'sushi|sashimi|ramen|donburi|miso': 'Japanese',
    'taco|burrito|quesadilla|enchilada|salsa': 'Mexican',
    'pasta|risotto|pizza|lasagna|marinara': 'Italian',
    'baguette|croissant|coq au vin': 'French',
    'samosa|naan|tandoori|biryani|dal': 'Indian',
    'stir.?fry|wok|soy sauce': 'Chinese',
    'kimchi|bibimbap|bulgogi|gochujang': 'Korean',
    'spring roll|banh mi|pho|fish sauce': 'Vietnamese',
    'falafel|hummus|tahini|pita|kebab': 'Middle Eastern',
    'gyro|moussaka|tzatziki': 'Greek',
    'paella|tapas|churros': 'Spanish',
    'chaat|samosa': 'Indian',
  };

  for (const [keywords, cuisine] of Object.entries(keywordMap)) {
    const regex = new RegExp(keywords, 'i');
    if (regex.test(fullContent)) {
      if (!inferred.includes(cuisine)) {
        inferred.push(cuisine);
      }
    }
  }

  // Default to American if nothing else matches
  if (inferred.length === 0) {
    inferred.push('American');
  }

  return [...new Set(inferred)];
}

/**
 * Infer cooking methods from directions
 */
function inferCookingMethods(data, content) {
  if (data.cookingMethods && data.cookingMethods.length > 0) {
    return data.cookingMethods;
  }

  const inferred = [];
  const fullContent = content.toLowerCase();

  const methodMap = {
    bake: ['bake', 'oven', 'baked'],
    roast: ['roast', 'roasted'],
    grill: ['grill', 'grilled', 'bbq', 'barbecue'],
    sear: ['sear', 'seared'],
    sauté: ['sauté', 'saute', 'sautéed', 'pan.*fry', 'pan-fry'],
    braise: ['braise', 'braised', 'low and slow'],
    steam: ['steam', 'steamed'],
    boil: ['boil', 'boiling', 'boiled'],
    fry: ['deep.?fry', 'frying', 'fried'],
    'slow-cook': ['slow.?cook', 'slow cooker', 'crockpot'],
    smoke: ['smoke', 'smoked', 'smoking'],
    broil: ['broil', 'broiled'],
    blend: ['blend', 'blended', 'food processor', 'blender'],
    'no-cook': [],
  };

  for (const [method, keywords] of Object.entries(methodMap)) {
    if (keywords.length === 0) continue;
    const regex = new RegExp(keywords.join('|'), 'i');
    if (regex.test(fullContent)) {
      inferred.push(method);
    }
  }

  // Check for no-cook
  if (
    inferred.length === 0 ||
    (fullContent.includes('no cook') ||
      fullContent.includes('no-cook') ||
      fullContent.includes('assemble') ||
      fullContent.includes('toast'))
  ) {
    if (fullContent.includes('toast')) {
      inferred.push('toast');
    } else if (inferred.length === 0) {
      inferred.push('no-cook');
    }
  }

  return [...new Set(inferred)];
}

/**
 * Infer occasions from recipe metadata and role
 */
function inferOccasions(data) {
  if (data.occasions && data.occasions.length > 0) {
    return data.occasions;
  }

  const inferred = [];

  // Based on vibe
  if (data.vibe === 'quick') {
    inferred.push('weeknight', 'quick-lunch');
  } else if (data.vibe === 'comfort') {
    inferred.push('weeknight', 'comfort-food');
  } else if (data.vibe === 'technical' || data.vibe === 'holiday') {
    inferred.push('weekend-project');
  } else if (data.vibe === 'nutritious') {
    inferred.push('weeknight', 'meal-prep');
  }

  // Based on role
  if (data.role === 'dessert') {
    inferred.push('dessert-night');
  } else if (data.role === 'main' && !inferred.includes('weeknight')) {
    inferred.push('weeknight');
  }

  // Based on difficulty
  if (data.difficulty === 'advanced' || data.difficulty === 'hard') {
    if (!inferred.includes('weekend-project')) {
      inferred.push('weekend-project');
    }
  }

  // Based on servings
  if (data.servings) {
    const servings = parseInt(data.servings);
    if (servings > 6) {
      inferred.push('entertaining');
    }
  }

  // Based on total time
  if (data.totalTime) {
    const timeStr = data.totalTime.toLowerCase();
    if (timeStr.includes('min')) {
      const match = timeStr.match(/(\d+)/);
      if (match) {
        const mins = parseInt(match[1]);
        if (mins <= 30) {
          inferred.push('quick-lunch');
        } else if (mins <= 45) {
          inferred.push('weeknight');
        }
      }
    }
  }

  // Default fallbacks
  if (inferred.length === 0) {
    inferred.push('weeknight');
  }

  return [...new Set(inferred)];
}

/**
 * Infer advance prep from directions
 */
function inferAdvancePrep(content) {
  const inferred = [];
  const fullContent = content.toLowerCase();

  const prepMap = {
    'marinate-overnight': [
      'marinate.*overnight',
      'overnight.*marinate',
      'marinate.*at least 8 hours',
      'marinate.*overnight',
    ],
    'make-ahead-sauce': ['make.*sauce.*ahead', 'sauce.*can be made ahead'],
    'make-ahead': ['make ahead', 'can be made ahead', 'prepare.*ahead'],
    'freeze-ahead': ['freeze', 'freezer', 'can be frozen'],
    'components-ahead': [
      'prep.*ahead',
      'prepare.*component',
      'can prep ahead',
      'prep.*in advance',
    ],
    'refrigerate-overnight': ['refrigerate overnight', 'rest overnight', 'chill overnight'],
  };

  for (const [prep, keywords] of Object.entries(prepMap)) {
    const regex = new RegExp(keywords.join('|'), 'i');
    if (regex.test(fullContent)) {
      inferred.push(prep);
    }
  }

  return [...new Set(inferred)];
}

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  console.log(`Reading recipes from ${RECIPES_DIR}`);
  console.log(`Dry run: ${DRY_RUN ? 'YES' : 'NO'}\n`);

  const files = fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith('.md'));
  console.log(`Found ${files.length} recipe files\n`);

  let totalChanged = 0;
  const changes = [];
  const errors = [];

  for (const file of files) {
    const filePath = path.join(RECIPES_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    let data, content;
    try {
      const parsed = matter(fileContent);
      data = parsed.data;
      content = parsed.content;
    } catch (err) {
      errors.push({ file, error: err.message });
      continue;
    }

    const updates = {};
    let hasChanges = false;

    // 1. Infer cuisines
    if (!data.cuisines || data.cuisines.length === 0) {
      const inferred = inferCuisines(data, content);
      if (inferred.length > 0) {
        updates.cuisines = inferred;
        hasChanges = true;
      }
    }

    // 2. Infer cookingMethods
    if (!data.cookingMethods || data.cookingMethods.length === 0) {
      const inferred = inferCookingMethods(data, content);
      if (inferred.length > 0) {
        updates.cookingMethods = inferred;
        hasChanges = true;
      }
    }

    // 3. Infer occasions
    if (!data.occasions || data.occasions.length === 0) {
      const inferred = inferOccasions(data);
      if (inferred.length > 0) {
        updates.occasions = inferred;
        hasChanges = true;
      }
    }

    // 4. Infer advancePrep
    if (!data.advancePrep || data.advancePrep.length === 0) {
      const inferred = inferAdvancePrep(content);
      if (inferred.length > 0) {
        updates.advancePrep = inferred;
        hasChanges = true;
      }
    }

    if (hasChanges) {
      totalChanged++;
      const updatedData = { ...data, ...updates };

      const changeRecord = {
        file,
        title: data.title,
        updates,
      };
      changes.push(changeRecord);

      if (!DRY_RUN) {
        const newContent = matter.stringify(content, updatedData);
        fs.writeFileSync(filePath, newContent, 'utf-8');
      }
    }
  }

  // ============================================================================
  // REPORT
  // ============================================================================

  console.log('='.repeat(80));
  console.log(`BATCH METADATA COMPLETION REPORT`);
  console.log('='.repeat(80));
  console.log(`Total recipes: ${files.length}`);
  console.log(`Updated: ${totalChanged}`);
  console.log(`Parse errors: ${errors.length}`);
  console.log(`Status: ${DRY_RUN ? 'DRY RUN (no changes written)' : 'CHANGES APPLIED'}`);
  console.log('='.repeat(80));
  console.log();

  if (changes.length > 0) {
    console.log('CHANGES BY RECIPE:');
    console.log('-'.repeat(80));

    for (const change of changes) {
      console.log(`\n${change.file}`);
      console.log(`  Title: ${change.title}`);

      for (const [field, values] of Object.entries(change.updates)) {
        if (Array.isArray(values)) {
          console.log(`  + ${field}: [${values.join(', ')}]`);
        } else {
          console.log(`  + ${field}: ${values}`);
        }
      }
    }

    console.log('\n' + '='.repeat(80));
    console.log(`Summary by field:`);
    console.log('-'.repeat(80));

    const fieldCounts = {};
    for (const change of changes) {
      for (const field of Object.keys(change.updates)) {
        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      }
    }

    for (const [field, count] of Object.entries(fieldCounts)) {
      console.log(`  ${field}: ${count} recipes`);
    }
  } else {
    console.log('No metadata gaps found. All recipes are complete!');
  }

  console.log();

  if (errors.length > 0) {
    console.log('='.repeat(80));
    console.log('PARSE ERRORS (files skipped):');
    console.log('='.repeat(80));
    for (const err of errors) {
      console.log(`\n${err.file}:`);
      console.log(`  ${err.error}`);
    }
    console.log();
  }

  if (DRY_RUN && changes.length > 0) {
    console.log('To apply changes, run: npm run batch-metadata-complete');
  }

  process.exit(0);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
