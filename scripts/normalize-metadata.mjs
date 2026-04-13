#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const recipesDir = path.join(__dirname, '../src/content/recipes');

// Normalization maps
const normalizations = {
  cookingMethods: {
    sauté: 'saute',
    'slow-cooker': 'slow-cook',
    rest: null, // remove
  },
  occasions: {
    'kids-approved': 'kid-friendly',
    'kids-friendly': 'kid-friendly',
    'leftover-friendly': 'meal-prep',
    'summer-cookout': 'bbq',
    'fall-harvest': null,
    fall: null,
    spring: null,
    summer: null,
    condiment: null,
    staple: 'everyday',
    'packed-lunch': 'lunch',
    elevated: 'date-night',
    indulgent: 'comfort-food',
    mediterranean: null,
    'post-workout': 'snack',
  },
  flavorProfile: {
    herbal: 'herbaceous',
    herby: 'herbaceous',
    'slightly sweet': 'sweet',
    'slightly-sweet': 'sweet',
    'mild-heat': 'mild',
    'spicy-optional': 'mild',
    funky: 'complex',
    subtle: 'mild',
    anise: 'aromatic',
    ginger: 'warm',
    floral: 'aromatic',
  },
  advancePrep: {
    'batch-cook-grains': 'cook-ahead',
    'batch-prep-toppings': 'components-ahead',
    'char-corn-ahead': 'components-ahead',
    'chill-overnight': 'chill-to-set',
    'components-ahead': 'components-ahead',
    'cook-ahead': 'cook-ahead',
    'crispy-chickpeas-ahead': 'components-ahead',
    'crispy-wontons-ahead': 'components-ahead',
    'dressing-ahead': 'dressing-ahead',
    'dressing-up-to-5-days': 'dressing-ahead',
    freeze: 'freeze-ahead',
    'freeze-ahead': 'freeze-ahead',
    'freezer-friendly': 'freeze-ahead',
    'freezes-well': 'freeze-ahead',
    'improves-overnight': 'make-ahead',
    'lentils-up-to-4-days': 'cook-ahead',
    'make-ahead': 'make-ahead',
    'make-ahead-crust': 'make-ahead',
    'make-ahead-full-dish': 'make-ahead',
    'make-ahead-full-salad': 'make-ahead',
    'make-ahead-sauce': 'make-ahead-sauce',
    'make-ahead-syrup': 'make-ahead-sauce',
    'make-broth-ahead': 'make-ahead-sauce',
    'make-dough-ahead': 'rest-dough',
    'make-dressing': 'dressing-ahead',
    'marinate-ahead': 'marinate-overnight',
    'marinate-proteins': 'marinate-overnight',
    'meal-prep-friendly': 'meal-prep-friendly',
    none: null,
    'prep-all-ingredients-before-cooking': 'prep-vegetables',
    'prep-components': 'components-ahead',
    'prep-ingredients-before-cooking': 'prep-vegetables',
    'prep-toppings': 'components-ahead',
    'quinoa-up-to-4-days': 'cook-ahead',
    'season-ahead': 'season-ahead',
    'shave-fennel-up-to-2-hours-in-ice-water': 'prep-vegetables',
    'shred-veg-up-to-1-day': 'prep-vegetables',
    'soak-30-min': 'overnight-soak',
    'spatchcock-ahead': 'components-ahead',
    'tahini-sauce-up-to-3-days': 'make-ahead-sauce',
    'use-day-old-rice': 'use-day-old-rice',
    'vegetables-ahead': 'prep-vegetables',
  },
  equipment: {
    'cast-iron skillet or cazuela': 'cast-iron-skillet',
    'fine-mesh strainer': 'fine-mesh-strainer',
    'large bowl': 'large-bowl',
    'large heavy-bottomed pot or dutch oven': 'dutch-oven',
    'large mixing bowl': 'mixing-bowl',
    'large pot': 'large-pot',
    'large skillet': 'large-skillet',
    'large skillet or dutch oven': 'large-skillet',
    'medium saucepan': 'medium-saucepan',
    'sheet pan': 'sheet-pan',
    'small bowl': 'small-bowl',
    'small bowls for sauce': 'small-bowl',
    'small jar for dressing': 'jar',
    'small jar or bowl for dressing': 'jar',
    'small skillet': 'skillet',
    'spice grinder': 'spice-grinder',
    'spider or slotted spoon': 'spider-strainer',
    'wok or large skillet': 'wok',
    'wok or shallow pan': 'wok',
    'dutch-oven-optional': 'dutch-oven',
  },
};

// Cuisine fusion split map
const cuisineFusions = {
  'Chinese-American': ['Chinese', 'American'],
  'Italian-American': ['Italian', 'American'],
};

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

let stats = {
  filesProcessed: 0,
  filesModified: 0,
  normalizations: {
    cookingMethods: 0,
    occasions: 0,
    flavorProfile: 0,
    advancePrep: 0,
    equipment: 0,
    cuisines: 0,
  },
  details: {},
};

// Helper function to normalize arrays
function normalizeArray(arr, field) {
  if (!arr || !Array.isArray(arr)) return [];

  let normalized = [];
  let removedCount = 0;
  let transformedCount = 0;

  for (const item of arr) {
    if (normalizations[field] && normalizations[field][item] === null) {
      // Mark for removal
      removedCount++;
      continue;
    }

    const mapped = normalizations[field]?.[item];
    if (mapped) {
      normalized.push(mapped);
      transformedCount++;
    } else {
      normalized.push(item);
    }
  }

  // Deduplicate
  normalized = [...new Set(normalized)];

  if (removedCount > 0 || transformedCount > 0) {
    stats.normalizations[field]++;
    if (!stats.details[field]) stats.details[field] = [];
    stats.details[field].push({ removed: removedCount, transformed: transformedCount });
  }

  return normalized;
}

// Special handling for cuisines (handle fusion splits)
function normalizeCuisines(arr) {
  if (!arr || !Array.isArray(arr)) return [];

  let normalized = [];

  for (const item of arr) {
    if (cuisineFusions[item]) {
      normalized.push(...cuisineFusions[item]);
      stats.normalizations.cuisines++;
    } else if (item === 'Asian-Fusion') {
      // Remove Asian-Fusion if more specific cuisines exist, or just remove it
      if (normalized.length === 0) {
        normalized.push('Asian');
      }
      stats.normalizations.cuisines++;
    } else if (item === 'Middle-Eastern') {
      normalized.push('Middle Eastern');
      stats.normalizations.cuisines++;
    } else if (item === 'Southeast-Asian') {
      normalized.push('Southeast Asian');
      stats.normalizations.cuisines++;
    } else if (item === 'Eastern-European') {
      normalized.push('Eastern European');
      stats.normalizations.cuisines++;
    } else {
      normalized.push(item);
    }
  }

  // Deduplicate
  normalized = [...new Set(normalized)];

  return normalized;
}

// Special handling for equipment
function normalizeEquipment(arr) {
  if (!arr || !Array.isArray(arr)) return [];

  let normalized = [];
  let transformedCount = 0;

  for (const item of arr) {
    const mapped = normalizations.equipment[item];
    if (mapped) {
      normalized.push(mapped);
      transformedCount++;
    } else {
      normalized.push(item);
    }
  }

  // Deduplicate
  normalized = [...new Set(normalized)];

  if (transformedCount > 0) {
    stats.normalizations.equipment++;
  }

  return normalized;
}

// Handle seasons migration from occasions
function migrateSeasons(occasions, seasons) {
  let seasonsMigrated = seasons || [];
  const seasonKeywords = ['fall', 'spring', 'summer', 'winter'];

  for (const keyword of seasonKeywords) {
    if (occasions && occasions.includes(keyword) && !seasonsMigrated.includes(keyword)) {
      seasonsMigrated.push(keyword);
    }
  }

  return [...new Set(seasonsMigrated)];
}

async function processRecipes() {
  const files = fs.readdirSync(recipesDir).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(recipesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: body } = matter(content);

    let modified = false;
    let originalData = JSON.stringify(data);

    // Normalize cookingMethods
    if (data.cookingMethods && Array.isArray(data.cookingMethods)) {
      const normalized = normalizeArray(data.cookingMethods, 'cookingMethods');
      if (normalized.length !== data.cookingMethods.length || JSON.stringify(normalized) !== JSON.stringify(data.cookingMethods)) {
        if (normalized.length > 0) {
          data.cookingMethods = normalized;
        } else {
          delete data.cookingMethods;
        }
        modified = true;
      }
    }

    // Normalize occasions
    if (data.occasions && Array.isArray(data.occasions)) {
      const normalized = normalizeArray(data.occasions, 'occasions');
      if (normalized.length !== data.occasions.length || JSON.stringify(normalized) !== JSON.stringify(data.occasions)) {
        if (normalized.length > 0) {
          data.occasions = normalized;
        } else {
          delete data.occasions;
        }
        modified = true;
      }
    }

    // Migrate seasons from occasions (before filtering occasions)
    if (data.occasions && Array.isArray(data.occasions)) {
      const migrated = migrateSeasons(data.occasions, data.seasons);
      if (migrated.length > (data.seasons?.length || 0)) {
        data.seasons = migrated;
        modified = true;
      }
    }

    // Remove season keywords from occasions
    if (data.occasions && Array.isArray(data.occasions)) {
      const filtered = data.occasions.filter(o => !['fall', 'spring', 'summer', 'winter'].includes(o));
      if (filtered.length !== data.occasions.length) {
        if (filtered.length > 0) {
          data.occasions = filtered;
        } else {
          delete data.occasions;
        }
        modified = true;
      }
    }

    // Normalize flavorProfile
    if (data.flavorProfile && Array.isArray(data.flavorProfile)) {
      const normalized = normalizeArray(data.flavorProfile, 'flavorProfile');
      if (normalized.length !== data.flavorProfile.length || JSON.stringify(normalized) !== JSON.stringify(data.flavorProfile)) {
        if (normalized.length > 0) {
          data.flavorProfile = normalized;
        } else {
          delete data.flavorProfile;
        }
        modified = true;
      }
    }

    // Normalize advancePrep
    if (data.advancePrep && Array.isArray(data.advancePrep)) {
      const normalized = normalizeArray(data.advancePrep, 'advancePrep');
      if (normalized.length !== data.advancePrep.length || JSON.stringify(normalized) !== JSON.stringify(data.advancePrep)) {
        if (normalized.length > 0) {
          data.advancePrep = normalized;
        } else {
          delete data.advancePrep;
        }
        modified = true;
      }
    }

    // Normalize equipment
    if (data.equipment && Array.isArray(data.equipment)) {
      const normalized = normalizeEquipment(data.equipment);
      if (normalized.length !== data.equipment.length || JSON.stringify(normalized) !== JSON.stringify(data.equipment)) {
        if (normalized.length > 0) {
          data.equipment = normalized;
        } else {
          delete data.equipment;
        }
        modified = true;
      }
    }

    // Normalize cuisines
    if (data.cuisines && Array.isArray(data.cuisines)) {
      const normalized = normalizeCuisines(data.cuisines);
      if (normalized.length !== data.cuisines.length || JSON.stringify(normalized) !== JSON.stringify(data.cuisines)) {
        if (normalized.length > 0) {
          data.cuisines = normalized;
        } else {
          delete data.cuisines;
        }
        modified = true;
      }
    }

    // Remove any remaining empty arrays (shouldn't happen but safety check)
    for (const key of Object.keys(data)) {
      if (Array.isArray(data[key]) && data[key].length === 0) {
        delete data[key];
        modified = true;
      }
    }

    stats.filesProcessed++;

    if (modified) {
      stats.filesModified++;
      if (!dryRun) {
        const updatedContent = matter.stringify(body, data);
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
      }
      if (dryRun) {
        console.log(`[DRY-RUN] ${file}`);
        const newData = JSON.stringify(data);
        if (originalData !== newData) {
          console.log(`  Changes detected`);
        }
      }
    }
  }
}

async function main() {
  console.log(`Normalizing ${dryRun ? '[DRY-RUN] ' : ''}recipes in ${recipesDir}`);
  console.log('---');

  await processRecipes();

  console.log('---');
  console.log(`Files processed: ${stats.filesProcessed}`);
  console.log(`Files modified: ${stats.filesModified}`);
  console.log('');
  console.log('Normalizations applied:');
  console.log(`  cookingMethods: ${stats.normalizations.cookingMethods}`);
  console.log(`  occasions: ${stats.normalizations.occasions}`);
  console.log(`  flavorProfile: ${stats.normalizations.flavorProfile}`);
  console.log(`  advancePrep: ${stats.normalizations.advancePrep}`);
  console.log(`  equipment: ${stats.normalizations.equipment}`);
  console.log(`  cuisines: ${stats.normalizations.cuisines}`);

  if (dryRun) {
    console.log('\nRun without --dry-run to apply changes.');
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
