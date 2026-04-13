import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

/* eslint-disable no-console */

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

// Parse quantities from ingredient strings
function parseQuantity(ingredient) {
  const patterns = [
    /^([\d.\/\s]+)\s*(lbs?|oz|cups?|tbsp|tsp|g|ml|kg|grams?|ounces?|pounds?|tablespoons?|teaspoons?)/i,
  ];

  for (const pattern of patterns) {
    const match = ingredient.match(pattern);
    if (match) {
      const quantStr = match[1].trim();
      const unit = match[2].toLowerCase();

      // Parse fractions and decimals
      if (quantStr.includes('/')) {
        const parts = quantStr.split('/');
        if (parts.length === 2) {
          const num = parseFloat(parts[0]);
          const denom = parseFloat(parts[1]);
          if (!isNaN(num) && !isNaN(denom) && denom !== 0) {
            return { value: num / denom, unit, original: quantStr };
          }
        }
      }

      const value = parseFloat(quantStr);
      if (!isNaN(value)) {
        return { value, unit, original: quantStr };
      }
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

  // already in grams/ml
  if (/^g(rams?)?$/.test(normalized)) return value;
  if (/^ml$/.test(normalized)) return value;
  if (/^kg$/.test(normalized)) return value * 1000;

  return null;
}

// Parse time strings like "20 min", "1 hr", etc.
function parseTime(timeStr) {
  if (!timeStr) return 0;
  let totalMinutes = 0;

  const hourMatch = timeStr.match(/(\d+)\s*(?:hour|hr)/i);
  const minMatch = timeStr.match(/(\d+)\s*(?:min|minute)/i);

  if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60;
  if (minMatch) totalMinutes += parseInt(minMatch[1]);

  return totalMinutes;
}

// Check for brightness/acid in directions
function hasBrightness(directions) {
  const brightnessTerms = [
    'lemon',
    'lime',
    'vinegar',
    'acid',
    'yogurt',
    'sour cream',
    'crema',
    'squeeze',
    'pickle',
    'fermented',
    'tartness',
    'bright',
    'fresh',
    'citrus',
  ];
  const dirText = directions.toLowerCase();
  return brightnessTerms.some((term) => dirText.includes(term));
}

// Check for specific techniques in directions
function checkTechnique(directions, techniques) {
  const dirText = directions.toLowerCase();
  return techniques.every((term) => dirText.includes(term.toLowerCase()));
}

async function runQA() {
  const issues = {
    ratioSanity: [],
    timeHonesty: [],
    techniqueConsistency: [],
    duplicates: [],
    contentQuality: [],
    metadataConsistency: [],
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
      let sauceAmount = 0;

      for (const ingredient of ingredients) {
        const ing = ingredient.toLowerCase();

        // Skip section dividers
        if (ing.startsWith('---')) continue;

        // Detect protein quantity
        if (/chicken|beef|pork|fish|shrimp|tofu|turkey/.test(ing)) {
          const quantity = parseQuantity(ingredient);
          if (quantity) {
            hasProtein = true;
            const grams = normalizeToGrams(quantity);
            if (grams) proteinAmount += grams;
          }
        }

        // Detect pasta quantity
        if (/pasta|noodle/.test(ing)) {
          const quantity = parseQuantity(ingredient);
          if (quantity) {
            const grams = normalizeToGrams(quantity);
            if (grams) pastaAmount += grams;
          }
        }

        // Detect sauce/liquid quantity
        if (
          /stock|broth|water|sauce|cream|milk|oil|wine|juice|yogurt|tomato|coconut/.test(
            ing
          )
        ) {
          const quantity = parseQuantity(ingredient);
          if (quantity && /^(cup|ml|oz|tbsp)/.test(quantity.unit)) {
            const normalized = normalizeToGrams(quantity);
            if (normalized) totalLiquid += normalized;
          }
        }
      }

      // Soup/stew check: less than 1 cup (240ml) liquid
      if (role === 'main' && /soup|stew|curry|chili|braise/.test(title.toLowerCase())) {
        if (totalLiquid > 0 && totalLiquid < 240) {
          issues.ratioSanity.push({
            severity: 'warning',
            recipe: title,
            file,
            message: `Soup/stew likely underfilled (only ${totalLiquid.toFixed(0)}ml liquid detected). Check for missing liquid ingredients.`,
          });
        }
      }

      // Protein check: less than 8 oz (227g) for main serving 4+
      if (role === 'main' && hasProtein && servingCount >= 4) {
        if (proteinAmount > 0 && proteinAmount < 227) {
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
      const { title, prepTime, cookTime, totalTime, vibe, advancePrep, markdown, file } =
        recipe;

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

      // Marinate/chill in advance prep but not in total time
      if (advancePrep && Array.isArray(advancePrep)) {
        const advanceStr = advancePrep.join(' ').toLowerCase();
        const hasMarinate =
          advanceStr.includes('marinate') || advanceStr.includes('chill') || advanceStr.includes('overnight');
        const markdownLower = markdown.toLowerCase();

        if (hasMarinate && (markdownLower.includes('marinate') || markdownLower.includes('chill'))) {
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
                message: `Directions mention ${hasHours[1]} hour(s) of marinating/chilling, but totalTime (${totalMin}min) doesn't reflect this. Either include marinating in totalTime or clarify it's separate.`,
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

      // Sear requires temperature
      if (methods.includes('sear')) {
        if (!dirLower.match(/\d+\s*°?[fc]/i)) {
          issues.techniqueConsistency.push({
            severity: 'warning',
            recipe: title,
            file,
            message: 'cookingMethods includes "sear" but no temperature (e.g., 450°F) found in directions.',
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
              message: 'cookingMethods includes "sear" with protein, but no mention of drying/patting dry. Surface drying is key for good sear.',
            });
          }
        }
      }

      // Braise requires low temp (275-325°F) or "low"
      if (methods.includes('braise')) {
        const hasLowHeat = dirLower.includes(' low') || dirLower.match(/[23]\d{2}\s*°?[fc]/i);
        if (!hasLowHeat) {
          issues.techniqueConsistency.push({
            severity: 'warning',
            recipe: title,
            file,
            message: 'cookingMethods includes "braise" but no low temperature (e.g., 300°F) or "low heat" found in directions.',
          });
        }
      }

      // Stir-fry requires high heat mention
      if (methods.includes('stir-fry') || methods.includes('stir fry')) {
        if (!dirLower.includes('high') && !dirLower.includes('smoking') && !dirLower.match(/450|400/i)) {
          issues.techniqueConsistency.push({
            severity: 'warning',
            recipe: title,
            file,
            message: 'cookingMethods includes "stir-fry" but no mention of "high heat" or high temperature in directions.',
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
            message: 'cookingMethods includes "roast" or "bake" but no oven temperature found in directions.',
          });
        }
      }
    }

    // ─── 4. DUPLICATE/NEAR-DUPLICATE DETECTION ───
    console.log('Detecting duplicates...');

    const titleDistance = new Map();
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

        if (distance < 5 && distance > 0) {
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
    for (const [hash, recipeGroup] of ingredientHashes) {
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
      const { title, markdown, file } = recipe;

      // Extract Chef's Note section
      const chefNoteMatch = markdown.match(/##\s+Chef['']s\s+Note\s*\n([\s\S]*?)(?=\n##|\Z)/i);
      const chefNote = chefNoteMatch ? chefNoteMatch[1].trim() : '';

      // Chef's Note length
      if (chefNote.length < 100) {
        issues.contentQuality.push({
          severity: 'warning',
          recipe: title,
          file,
          message: `Chef's Note is only ${chefNote.length} characters (should be ~150-200). Too brief to explain technique or context.`,
        });
      }

      // Extract directions
      const directionsMatch = markdown.match(
        /##\s+Directions?\s*\n([\s\S]*?)(?=\n##|\Z)/i
      );
      const directions = directionsMatch ? directionsMatch[1].trim() : '';

      // Check for bold headers in directions
      const boldSteps = directions.match(/\*\*[^*]+\*\*/g) || [];
      const numberSteps = directions.match(/^\d+\./gm) || [];

      if (numberSteps.length < 3) {
        issues.contentQuality.push({
          severity: 'warning',
          recipe: title,
          file,
          message: `Directions have only ${numberSteps.length} steps (should be 3+). May be too simplified.`,
        });
      }

      if (boldSteps.length !== numberSteps.length) {
        issues.contentQuality.push({
          severity: 'info',
          recipe: title,
          file,
          message: `Directions have ${numberSteps.length} numbered steps but only ${boldSteps.length} bold headers. Each step should have a bold header.`,
        });
      }

      // Check for vague cooking instructions
      const vagueInstructions = [
        'cook until done',
        'season to taste',
        'cook until soft',
        'until finished',
      ];
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
      const { title, vibe, cookTime, origin, cuisines, dietary, ingredients, cookingMethods, equipment, file, role } =
        recipe;

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
      if (dietary && dietary.includes('vegetarian')) {
        const hasProtein = ingredients.some((i) =>
          /chicken|beef|pork|fish|shrimp|turkey|duck|lamb|bacon|ham|sausage/.test(i.toLowerCase())
        );
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
            message: 'cookingMethods includes "grill" but equipment does not. Add grill to equipment list.',
          });
        }
      }

      // Vegan/GF but mentions dairy/gluten
      if (dietary) {
        const isVegan = dietary.includes('vegan');
        const isGF = dietary.includes('gluten-free');

        if (isVegan) {
          const hasDairy = ingredients.some((i) =>
            /cheese|milk|cream|butter|yogurt|egg/.test(i.toLowerCase())
          );
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
            /bread|flour|pasta|wheat|barley|rye/.test(i.toLowerCase())
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

    console.log(
      `\n\nFull report saved to public/culinary-qa-report.json\n`
    );

    process.exit(errors.length > 0 ? 1 : 0);
  } catch (error) {
    console.error('Fatal error during QA:', error);
    process.exit(1);
  }
}

runQA();
