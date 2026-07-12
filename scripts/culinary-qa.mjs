import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RECIPES_DIR = path.resolve(__dirname, '../src/content/recipes');

// Levenshtein distance for duplicate detection
function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = Array(len2 + 1)
    .fill(null)
    .map(() => Array(len1 + 1).fill(0));

  for (let i = 0; i <= len1; i++) matrix[0][i] = i;
  for (let j = 0; j <= len2; j++) matrix[j][0] = j;

  for (let j = 1; j <= len2; j++) {
    for (let i = 1; i <= len1; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  return matrix[len2][len1];
}

// Helper to parse values (mixed numbers, fractions, floats) from string
function parseValueFromString(quantStr) {
  quantStr = quantStr.trim().replace(/-/g, ' ').replace(/\s+/g, ' ');

  // Check for mixed numbers like "1 3/4"
  const mixedMatch = quantStr.match(/^(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
  if (mixedMatch) {
    const whole = parseInt(mixedMatch[1]);
    const num = parseInt(mixedMatch[2]);
    const denom = parseInt(mixedMatch[3]);
    if (denom !== 0) {
      return whole + num / denom;
    }
  }

  // Parse fractions
  if (quantStr.includes('/')) {
    const parts = quantStr.split('/');
    if (parts.length === 2) {
      const num = parseFloat(parts[0]);
      const denom = parseFloat(parts[1]);
      if (!isNaN(num) && !isNaN(denom) && denom !== 0) {
        return num / denom;
      }
    }
  }

  const value = parseFloat(quantStr);
  return isNaN(value) ? null : value;
}

// Parse quantities from ingredient strings
function parseQuantity(ingredient) {
  const patterns = [
    /^([\d.\/\s\-]+)\s*(lbs?|oz|cups?|tbsp|tsp|g|ml|kg|grams?|ounces?|pounds?|tablespoons?|teaspoons?|quarts?|qts?|liters?|l|gallons?|gals?)/i,
  ];

  for (const pattern of patterns) {
    const match = ingredient.match(pattern);
    if (match) {
      const value = parseValueFromString(match[1]);
      if (value !== null) {
        return { value, unit: match[2].toLowerCase(), original: match[1].trim() };
      }
    }
  }

  // Fallback: check inside parentheses for quantity/unit, e.g. "1 can (13.5 oz) coconut milk"
  const parenMatch = ingredient.match(
    /\(([\d.\/\s\-]+)\s*(lbs?|oz|cups?|tbsp|tsp|g|ml|kg|grams?|ounces?|pounds?|tablespoons?|teaspoons?|quarts?|qts?|liters?|l|gallons?|gals?)[^)]*\)/i
  );
  if (parenMatch) {
    let value = parseValueFromString(parenMatch[1]);
    if (value !== null) {
      const unit = parenMatch[2].toLowerCase();
      // Check if this is "each" / per item, and if so, multiply by leading quantity
      if (/\beach\b/i.test(parenMatch[0])) {
        const leadingMatch = ingredient.match(/^([\d.\/\s\-]+)/);
        if (leadingMatch) {
          const leadingVal = parseValueFromString(leadingMatch[1]);
          if (leadingVal !== null) {
            value = value * leadingVal;
          }
        }
      }
      return { value, unit, original: parenMatch[1].trim() };
    }
  }

  return null;
}

// Normalize units to grams/ml for comparison
function normalizeToGrams(quantity) {
  if (!quantity) return null;
  const { value, unit } = quantity;
  const normalized = unit.toLowerCase();

  // oz to grams
  if (/^oz(es)?$/.test(normalized)) return value * 28.35;
  if (/^lbs?$/.test(normalized)) return value * 453.6;

  // cups to ml (approximate)
  if (/^cups?$/.test(normalized)) return value * 240;
  if (/^tbsp(s)?$/.test(normalized)) return value * 15;
  if (/^tsps?$/.test(normalized)) return value * 5;

  // large volume units
  if (/^quarts?|qts?$/.test(normalized)) return value * 946.35;
  if (/^liters?|l$/.test(normalized)) return value * 1000;
  if (/^gallons?|gals?$/.test(normalized)) return value * 3785.41;

  // already in grams/ml
  if (/^g(rams?)?$/.test(normalized)) return value;
  if (/^ml$/.test(normalized)) return value;
  if (/^kg$/.test(normalized)) return value * 1000;

  return null;
}

// Parse and sum quantities if separated by '+' or 'and'
function parseTotalQuantity(ingredient) {
  const parts = ingredient.split(/\s*(?:\+|\band\b)\s*/i);
  let totalGrams = 0;
  let hasMatch = false;

  for (const part of parts) {
    const qty = parseQuantity(part);
    if (qty) {
      const grams = normalizeToGrams(qty);
      if (grams) {
        totalGrams += grams;
        hasMatch = true;
      }
    }
  }
  return hasMatch ? totalGrams : null;
}

// Parse time strings like "20 min", "1.5 hr", etc.
function parseTime(timeStr) {
  if (!timeStr) return 0;
  let totalMinutes = 0;

  const hourMatch = timeStr.match(/([\d.]+)\s*(?:hour|hr)/i);
  const minMatch = timeStr.match(/([\d.]+)\s*(?:min|minute)/i);

  if (hourMatch) totalMinutes += parseFloat(hourMatch[1]) * 60;
  if (minMatch) totalMinutes += parseFloat(minMatch[1]);

  return totalMinutes;
}

async function runQA() {
  const issues = {
    ratioSanity: [],
    timeHonesty: [],
    techniqueConsistency: [],
    duplicates: [],
    contentQuality: [],
    metadataConsistency: [],
    pairsWithValidation: [],
  };

  let recipeCount = 0;
  const recipes = [];
  const recipeMap = new Map();

  try {
    const files = await fs.readdir(RECIPES_DIR);
    const mdFiles = files.filter((f) => f.endsWith('.md'));

    // First pass: load all recipes
    for (const file of mdFiles) {
      const filePath = path.join(RECIPES_DIR, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const { data, content: markdown } = matter(content);

      const slug = file.replace(/\.md$/, '');
      recipes.push({
        file,
        slug,
        ...data,
        markdown,
        filePath,
      });
      recipeMap.set(slug, data);
      recipeCount++;
    }

    // ─── 1. RATIO SANITY CHECKS ───
    console.log('\nRunning ratio sanity checks...');

    for (const recipe of recipes) {
      const { title, ingredients, servings, role, file } = recipe;

      if (!ingredients || !Array.isArray(ingredients)) continue;

      const servingCount = parseInt(servings) || 4;
      let totalLiquid = 0;
      let hasProtein = false;
      let proteinAmount = 0;
      let pastaAmount = 0;
      const sauceAmount = 0;

      for (const ingredient of ingredients) {
        const ing = ingredient.toLowerCase();

        // Skip section dividers
        if (ing.startsWith('---')) continue;

        // Detect protein quantity
        const ingWithoutParens = ing.replace(/\([^)]*\)/g, '');
        const isProteinExclusion =
          /(broth|stock|oil|drippings|sauce|extract|gravy|base|seasoning|salt|pepper|powder)/.test(
            ing
          ) || /\b(chicken|pork|beef|duck|turkey)[-\s]+fat\b/.test(ing);
        const isProtein =
          /chicken|beef|pork|fish|shrimp|tofu|turkey/.test(ingWithoutParens) && !isProteinExclusion;

        if (isProtein) {
          const grams = parseTotalQuantity(ingredient);
          if (grams) {
            if (!/optional/i.test(ingredient)) {
              hasProtein = true;
            }
            proteinAmount += grams;
          }
        }

        // Detect pasta quantity
        if (/pasta|noodle/.test(ing)) {
          const grams = parseTotalQuantity(ingredient);
          if (grams) {
            pastaAmount += grams;
          }
        }

        // Detect sauce/liquid quantity
        if (/stock|broth|water|sauce|cream|milk|oil|wine|juice|yogurt|tomato|coconut/.test(ing)) {
          const quantity = parseQuantity(ingredient);
          if (quantity && /^(cup|ml|oz|tbsp|quart|qt|liter|l|gallon|gal|tsp)/.test(quantity.unit)) {
            const grams = parseTotalQuantity(ingredient);
            if (grams) totalLiquid += grams;
          }
        }
      }

      // Soup/stew check: less than 1 cup (240ml) liquid
      if (role === 'main' && /soup|stew|curry|chili|braise/.test(title.toLowerCase())) {
        const isDryDish =
          /dry curry|dry-style|dry stir|aloo gobi|fried rice|stir-fry|stir fry/i.test(
            recipe.markdown
          ) || title.toLowerCase().includes('dry');
        const isNotSoupOrStew =
          /slider|burger|sandwich|taco|dog|pizza|flatbread|wing|salad|roll|bun/i.test(
            title.toLowerCase()
          );
        const hasLinkedBroth = ingredients.some((ing) =>
          /\[[^\]]*\b(?:broth|stock|soup)\b[^\]]*\]/i.test(ing)
        );
        if (
          !isDryDish &&
          !isNotSoupOrStew &&
          !hasLinkedBroth &&
          totalLiquid > 0 &&
          totalLiquid < 240
        ) {
          issues.ratioSanity.push({
            severity: 'warning',
            recipe: title,
            file,
            message: `Soup/stew likely underfilled (only ${totalLiquid.toFixed(0)}ml liquid detected). Check for missing liquid ingredients.`,
          });
        }
      }

      // Protein check: less than 8 oz (227g) for main serving 4+ (lower threshold to 4 oz/113g for soup/pasta/noodle/rice/curry)
      if (role === 'main' && hasProtein && servingCount >= 4) {
        const isStarchOrSoup =
          /pasta|noodle|mian|rice|chow fun|lo mein|spaghetti|macaroni|ramen|pad thai|fried rice|soup|stew|curry|chili|broth|braise/i.test(
            title
          ) || pastaAmount > 0;
        const threshold = isStarchOrSoup ? 113 : 227;
        if (proteinAmount > 0 && Math.round(proteinAmount) < threshold) {
          issues.ratioSanity.push({
            severity: 'warning',
            recipe: title,
            file,
            message: `Main dish servings ${servingCount} but only ${proteinAmount.toFixed(0)}g protein detected. Likely underfilled.`,
          });
        }
      }

      // Pasta ratio: sauce should be 60-75% of pasta weight
      if (pastaAmount > 0 && sauceAmount > 0) {
        const ratio = sauceAmount / pastaAmount;
        if (ratio < 0.4) {
          issues.ratioSanity.push({
            severity: 'info',
            recipe: title,
            file,
            message: `Sauce-to-pasta ratio is ${ratio.toFixed(2)} (${sauceAmount.toFixed(0)}g sauce / ${pastaAmount.toFixed(0)}g pasta). Consider increasing sauce.`,
          });
        }
      }
    }

    // ─── 2. TIME HONESTY CHECKS ───
    console.log('Running time honesty checks...');

    for (const recipe of recipes) {
      const { title, prepTime, cookTime, totalTime, vibe, advancePrep, markdown, file } = recipe;

      const prepMin = parseTime(prepTime);
      const cookMin = parseTime(cookTime);
      const totalMin = parseTime(totalTime);
      const calculatedTotal = prepMin + cookMin;

      // Check math — skip if advancePrep exists (explains passive time like marinades, chilling)
      const hasAdvancePrep = advancePrep && advancePrep.length > 0;
      if (totalMin > 0 && Math.abs(calculatedTotal - totalMin) > 10 && !hasAdvancePrep) {
        issues.timeHonesty.push({
          severity: 'warning',
          recipe: title,
          file,
          message: `Time math doesn't add up: prepTime (${prepMin}min) + cookTime (${cookMin}min) = ${calculatedTotal}min, but totalTime says ${totalMin}min. Difference: ${Math.abs(calculatedTotal - totalMin)}min. Add advancePrep to explain passive time.`,
        });
      }

      // Quick vibe check
      if (vibe === 'quick' && totalMin > 45) {
        issues.timeHonesty.push({
          severity: 'warning',
          recipe: title,
          file,
          message: `Tagged vibe:quick but totalTime is ${totalMin}min (>45 min threshold). Either adjust vibe or re-evaluate prep/cook times.`,
        });
      }

      // Marinate/chill mentioned in directions but not explained by advancePrep or totalTime
      const hasMarinateMetadata =
        advancePrep && Array.isArray(advancePrep) && advancePrep.length > 0;
      if (!hasMarinateMetadata) {
        const markdownLower = markdown.toLowerCase();
        const hasMarinateWord =
          markdownLower.includes('marinate') || markdownLower.includes('chill');
        if (hasMarinateWord) {
          // Check if substantial time is mentioned in directions
          const hasHours = markdownLower.match(/(\d+)\s*(?:hour|hr)/);
          if (hasHours && !totalTime.toLowerCase().includes('overnight')) {
            // Warn if directions mention hours but totalTime doesn't account for it
            const marineMin = parseInt(hasHours[1]) * 60;
            if (marineMin > totalMin) {
              issues.timeHonesty.push({
                severity: 'warning',
                recipe: title,
                file,
                message: `Directions mention ${hasHours[1]} hour(s) of marinating/chilling, but no advancePrep metadata is defined and totalTime (${totalMin}min) doesn't reflect this. Add advancePrep to explain passive time.`,
              });
            }
          }
        }
      }
    }

    // ─── 3. TECHNIQUE CONSISTENCY CHECKS ───
    console.log('Running technique consistency checks...');

    for (const recipe of recipes) {
      const { title, cookingMethods, markdown, file } = recipe;

      if (!cookingMethods || !Array.isArray(cookingMethods)) continue;

      const methods = cookingMethods.map((m) => m.toLowerCase());
      const dirLower = markdown.toLowerCase();

      // Sear requires temperature or heat level description
      if (methods.includes('sear')) {
        const hasSearTempOrHeat =
          dirLower.match(/\d+\s*°?[fc]/i) ||
          /high heat|medium-high|medium high|smoking hot|very hot/i.test(dirLower);
        if (!hasSearTempOrHeat) {
          issues.techniqueConsistency.push({
            severity: 'warning',
            recipe: title,
            file,
            message:
              'cookingMethods includes "sear" but no temperature (e.g., 450°F) or high heat (e.g., "high heat") found in directions.',
          });
        }
      }

      // Sear usually requires pat dry
      if (methods.includes('sear')) {
        if (
          !dirLower.includes('dry') &&
          !dirLower.includes('pat') &&
          !dirLower.includes('paper towel') &&
          !dirLower.includes('surface dry')
        ) {
          // Only warn if there's a protein
          if (/(chicken|beef|pork|fish|shrimp|turkey|steak)/.test(markdown)) {
            issues.techniqueConsistency.push({
              severity: 'info',
              recipe: title,
              file,
              message:
                'cookingMethods includes "sear" with protein, but no mention of drying/patting dry. Surface drying is key for good sear.',
            });
          }
        }
      }

      // Braise requires low temp (275-325°F) or "low"
      if (methods.includes('braise')) {
        const hasLowHeat =
          dirLower.match(/\b(?:low|simmer|slow cooker|slow-cooker)\b/i) ||
          dirLower.match(/[23]\d{2}\s*°?[fc]/i);
        if (!hasLowHeat) {
          issues.techniqueConsistency.push({
            severity: 'warning',
            recipe: title,
            file,
            message:
              'cookingMethods includes "braise" but no low temperature (e.g., 300°F) or "low heat" found in directions.',
          });
        }
      }

      // Stir-fry requires high heat mention
      if (methods.includes('stir-fry') || methods.includes('stir fry')) {
        if (
          !dirLower.includes('high') &&
          !dirLower.includes('smoking') &&
          !dirLower.match(/450|400/i)
        ) {
          issues.techniqueConsistency.push({
            severity: 'warning',
            recipe: title,
            file,
            message:
              'cookingMethods includes "stir-fry" but no mention of "high heat" or high temperature in directions.',
          });
        }
      }

      // Roast/bake requires temperature
      if (methods.includes('roast') || methods.includes('bake')) {
        if (!dirLower.match(/\d+\s*°?[fc]/i)) {
          issues.techniqueConsistency.push({
            severity: 'warning',
            recipe: title,
            file,
            message:
              'cookingMethods includes "roast" or "bake" but no oven temperature found in directions.',
          });
        }
      }
    }

    // ─── 4. DUPLICATE/NEAR-DUPLICATE DETECTION ───
    console.log('Detecting duplicates...');

    const ingredientHashes = new Map();

    for (let i = 0; i < recipes.length; i++) {
      const recipe1 = recipes[i];
      const hash1 = JSON.stringify(
        (recipe1.ingredients || [])
          .map((i) => i.toLowerCase())
          .sort()
          .join('|')
      );

      if (!ingredientHashes.has(hash1)) {
        ingredientHashes.set(hash1, []);
      }
      ingredientHashes.get(hash1).push(recipe1);

      for (let j = i + 1; j < recipes.length; j++) {
        const recipe2 = recipes[j];
        const distance = levenshteinDistance(
          recipe1.title.toLowerCase(),
          recipe2.title.toLowerCase()
        );

        if (distance < 3 && distance > 0) {
          issues.duplicates.push({
            severity: 'warning',
            recipe: `${recipe1.title} <-> ${recipe2.title}`,
            file: `${recipe1.file}, ${recipe2.file}`,
            message: `Very similar titles (distance: ${distance}). Verify these aren't duplicates.`,
          });
        }
      }
    }

    // Check for identical ingredient lists
    for (const recipeGroup of ingredientHashes.values()) {
      if (recipeGroup.length > 1) {
        issues.duplicates.push({
          severity: 'warning',
          recipe: recipeGroup.map((r) => r.title).join(' / '),
          file: recipeGroup.map((r) => r.file).join(', '),
          message: `Identical ingredient lists detected. These may be duplicates or variations.`,
        });
      }
    }

    // ─── 5. CONTENT QUALITY CHECKS ───
    console.log('Checking content quality...');

    for (const recipe of recipes) {
      const { title, markdown, role, file } = recipe;

      // Extract Chef's Note section
      const chefNoteMatch = markdown.match(/##\s+Chef['']s\s+Note\s*\n([\s\S]*?)(?=\n##|$)/i);
      const chefNote = chefNoteMatch ? chefNoteMatch[1].trim() : '';

      // Chef's Note length (only required for mains)
      if (role === 'main' && chefNote.length < 100) {
        issues.contentQuality.push({
          severity: 'warning',
          recipe: title,
          file,
          message: `Chef's Note is only ${chefNote.length} characters (should be ~150-200). Too brief to explain technique or context.`,
        });
      }

      // Extract directions
      const directionsMatch = markdown.match(/##\s+Directions?\s*\n([\s\S]*?)(?=\n##|$)/i);
      const directions = directionsMatch ? directionsMatch[1].trim() : '';

      // Check for bold headers in directions
      const boldSteps = directions.match(/\*\*[^*]+\*\*/g) || [];
      const numberSteps = directions.match(/^\d+\./gm) || [];

      if (role === 'main' && numberSteps.length < 3) {
        issues.contentQuality.push({
          severity: 'warning',
          recipe: title,
          file,
          message: `Directions have only ${numberSteps.length} steps (should be 3+). May be too simplified.`,
        });
      }

      // Check if each numbered step starts with a bold header
      const steps = directions.split(/^\d+\.\s+/gm);
      const actualSteps = steps.slice(1).filter(Boolean);
      let missingHeader = false;
      for (const step of actualSteps) {
        if (!step.trim().startsWith('**')) {
          missingHeader = true;
          break;
        }
      }

      if (missingHeader && numberSteps.length > 0) {
        issues.contentQuality.push({
          severity: 'info',
          recipe: title,
          file,
          message: `Some numbered steps in directions are missing a starting bold header (e.g., 1. **The Header:** step details).`,
        });
      }

      // Check for vague cooking instructions
      const vagueInstructions = ['cook until done', 'until finished'];
      for (const vague of vagueInstructions) {
        if (directions.toLowerCase().includes(vague)) {
          // Only flag if it's the only guidance in that step
          const lines = directions.split('\n');
          for (const line of lines) {
            if (line.toLowerCase().includes(vague) && line.length < 60) {
              issues.contentQuality.push({
                severity: 'warning',
                recipe: title,
                file,
                message: `Found vague instruction: "${vague}". Provide temperature, time, or visual cues instead.`,
              });
              break;
            }
          }
        }
      }
    }

    // ─── 6. METADATA CONSISTENCY CHECKS ───
    console.log('Checking metadata consistency...');

    for (const recipe of recipes) {
      const {
        title,
        vibe,
        cookTime,
        origin,
        cuisines,
        dietary,
        ingredients,
        cookingMethods,
        equipment,
        file,
      } = recipe;

      const cookMin = parseTime(cookTime);

      // Quick vibe with long cook time
      if (vibe === 'quick' && cookMin > 30) {
        issues.metadataConsistency.push({
          severity: 'warning',
          recipe: title,
          file,
          message: `vibe:quick but cookTime is ${cookMin}min (>30 min). Consider changing vibe to "nutritious" or "comfort".`,
        });
      }

      // Origin without matching cuisine
      if (origin && (!cuisines || cuisines.length === 0)) {
        issues.metadataConsistency.push({
          severity: 'info',
          recipe: title,
          file,
          message: `Has origin: "${origin}" but no cuisines tag. Add matching cuisine for filtering.`,
        });
      }

      // Vegetarian dietary but has meat
      if (dietary && dietary.includes('vegetarian') && ingredients && Array.isArray(ingredients)) {
        const hasProtein = ingredients.some((i) => {
          const lower = i.toLowerCase();
          // Exclude stock/broth references which may mention meat names as qualifiers
          // e.g. "Vegetable Stock or Water (can use chicken stock for non-vegetarian)"
          if (
            /\bchicken\s+stock\b|\bchicken\s+broth\b|\bbeef\s+stock\b|\bbeef\s+broth\b/i.test(lower)
          ) {
            return false;
          }
          // Use word boundaries to prevent "ham" matching "graham", etc.
          return /\bchicken\b|\bbeef\b|\bpork\b|\bfish\b|\bshrimp\b|\bturkey\b|\bduck\b|\blamb\b|\bbacon\b|\bham\b|\bsausage\b/.test(
            lower
          );
        });
        if (hasProtein) {
          issues.metadataConsistency.push({
            severity: 'error',
            recipe: title,
            file,
            message: 'dietary includes "vegetarian" but ingredients contain meat.',
          });
        }
      }

      // Grill in cookingMethods but no grill in equipment
      if (cookingMethods && cookingMethods.includes('grill') && equipment) {
        if (!equipment.some((e) => /grill/.test(e.toLowerCase()))) {
          issues.metadataConsistency.push({
            severity: 'info',
            recipe: title,
            file,
            message:
              'cookingMethods includes "grill" but equipment does not. Add grill to equipment list.',
          });
        }
      }

      // Vegan/GF but mentions dairy/gluten
      if (dietary && ingredients && Array.isArray(ingredients)) {
        const isVegan = dietary.includes('vegan');
        const isGF = dietary.includes('gluten-free');

        if (isVegan) {
          // Non-dairy milks (coconut, oat, almond, soy) should not trigger dairy flag
          const NON_DAIRY_MILK_PATTERN = /\b(coconut|oat|almond|soy|rice|hemp|cashew)\s+milk\b/i;
          const hasDairy = ingredients.some((i) => {
            const lower = i.toLowerCase();
            // Skip non-dairy milks
            if (NON_DAIRY_MILK_PATTERN.test(lower)) return false;
            return /\bcheese\b|\bmilk\b|\bcream\b|\bbutter\b|\byogurt\b|\begg\b/.test(lower);
          });
          if (hasDairy) {
            issues.metadataConsistency.push({
              severity: 'error',
              recipe: title,
              file,
              message: 'dietary includes "vegan" but ingredients contain dairy or eggs.',
            });
          }
        }

        if (isGF) {
          const hasGluten = ingredients.some((i) =>
            /\bbread\b|\bflour\b|\bpasta\b|\bwheat\b|\bbarley\b|\brye\b/.test(i.toLowerCase())
          );
          if (hasGluten) {
            issues.metadataConsistency.push({
              severity: 'error',
              recipe: title,
              file,
              message:
                'dietary includes "gluten-free" but ingredients contain gluten. Mark as "contains gluten" or remove tag.',
            });
          }
        }
      }
    }

    // ─── 7. PAIRSWITH VALIDATION CHECKS ───
    console.log('Checking pairsWith references...');

    // Build set of valid recipe slugs
    const validSlugs = new Set(recipes.map((r) => r.slug));

    // Track which base/condiment recipes are referenced
    const referencedBaseRecipes = new Set();

    for (const recipe of recipes) {
      const { title, pairsWith, file } = recipe;

      if (!pairsWith || !Array.isArray(pairsWith) || pairsWith.length === 0) continue;

      for (const pairedSlug of pairsWith) {
        // Check if paired recipe exists
        if (!validSlugs.has(pairedSlug)) {
          issues.pairsWithValidation.push({
            severity: 'error',
            recipe: title,
            file,
            message: `pairsWith references "${pairedSlug}" but no recipe with that slug exists.`,
          });
        } else {
          // Track that this base/condiment recipe is referenced
          const pairedRecipe = recipes.find((r) => r.slug === pairedSlug);
          if (pairedRecipe && (pairedRecipe.role === 'base' || pairedRecipe.role === 'condiment')) {
            referencedBaseRecipes.add(pairedSlug);
          }
        }
      }
    }

    // Check for orphaned base/condiment recipes
    for (const recipe of recipes) {
      const { title, slug, role, file } = recipe;

      // Exclude non-food playdough items
      if (slug.includes('playdough') || slug.includes('play-dough')) {
        continue;
      }

      if ((role === 'base' || role === 'condiment') && !referencedBaseRecipes.has(slug)) {
        issues.pairsWithValidation.push({
          severity: 'warning',
          recipe: title,
          file,
          message: `Orphaned ${role} recipe — not referenced by any other recipe's pairsWith.`,
        });
      }
    }

    // ─── GENERATE REPORT ───
    const report = {
      timestamp: new Date().toISOString(),
      recipesScanned: recipeCount,
      summary: {
        ratioSanity: issues.ratioSanity.length,
        timeHonesty: issues.timeHonesty.length,
        techniqueConsistency: issues.techniqueConsistency.length,
        duplicates: issues.duplicates.length,
        contentQuality: issues.contentQuality.length,
        metadataConsistency: issues.metadataConsistency.length,
        pairsWithValidation: issues.pairsWithValidation.length,
        totalIssues: Object.values(issues).reduce((sum, arr) => sum + arr.length, 0),
      },
      issues,
    };

    // Print summary to stdout
    console.log('\n' + '='.repeat(70));
    console.log('CULINARY QA REPORT');
    console.log('='.repeat(70));
    console.log(`\nScanned ${recipeCount} recipes at ${new Date().toLocaleString()}\n`);

    // Summary counts
    console.log('ISSUE SUMMARY:');
    console.log(`  Ratio Sanity:           ${issues.ratioSanity.length}`);
    console.log(`  Time Honesty:           ${issues.timeHonesty.length}`);
    console.log(`  Technique Consistency:  ${issues.techniqueConsistency.length}`);
    console.log(`  Duplicates:             ${issues.duplicates.length}`);
    console.log(`  Content Quality:        ${issues.contentQuality.length}`);
    console.log(`  Metadata Consistency:   ${issues.metadataConsistency.length}`);
    console.log(`  PairsWith Validation:   ${issues.pairsWithValidation.length}`);
    console.log(`  ${'─'.repeat(45)}`);
    console.log(`  TOTAL:                  ${report.summary.totalIssues}`);

    // Print errors first (high priority)
    const errors = Object.values(issues)
      .flat()
      .filter((i) => i.severity === 'error');
    if (errors.length > 0) {
      console.log('\n' + '='.repeat(70));
      console.log('ERRORS (Critical):');
      console.log('='.repeat(70));
      for (const issue of errors) {
        console.log(`\n[${issue.file}]`);
        console.log(`${issue.recipe}`);
        console.log(`→ ${issue.message}`);
      }
    }

    // Print warnings
    const warnings = Object.values(issues)
      .flat()
      .filter((i) => i.severity === 'warning');
    if (warnings.length > 0) {
      console.log('\n' + '='.repeat(70));
      console.log(`WARNINGS (${warnings.length}):`);
      console.log('='.repeat(70));
      // Group by category
      const byCategory = {
        ratioSanity: warnings.filter((w) => issues.ratioSanity.includes(w)),
        timeHonesty: warnings.filter((w) => issues.timeHonesty.includes(w)),
        techniqueConsistency: warnings.filter((w) => issues.techniqueConsistency.includes(w)),
        duplicates: warnings.filter((w) => issues.duplicates.includes(w)),
        contentQuality: warnings.filter((w) => issues.contentQuality.includes(w)),
        metadataConsistency: warnings.filter((w) => issues.metadataConsistency.includes(w)),
        pairsWithValidation: warnings.filter((w) => issues.pairsWithValidation.includes(w)),
      };

      for (const [category, categoryWarnings] of Object.entries(byCategory)) {
        if (categoryWarnings.length === 0) continue;
        const categoryName = category.replace(/([A-Z])/g, ' $1').trim();
        console.log(`\n${categoryName} (${categoryWarnings.length}):`);
        for (const warning of categoryWarnings.slice(0, 5)) {
          // Limit to first 5 per category
          console.log(`  • ${warning.recipe}`);
          console.log(`    ${warning.message}`);
        }
        if (categoryWarnings.length > 5) {
          console.log(`  ... and ${categoryWarnings.length - 5} more`);
        }
      }
    }

    // Save JSON report
    const reportPath = path.resolve(__dirname, '../public/culinary-qa-report.json');
    await fs.mkdir(path.dirname(reportPath), { recursive: true });
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

    console.log(`\n\nFull report saved to public/culinary-qa-report.json\n`);

    process.exit(errors.length > 0 ? 1 : 0);
  } catch (error) {
    console.error('Fatal error during QA:', error);
    process.exit(1);
  }
}

runQA();
