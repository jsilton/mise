import path from 'path';
import {
  loadRecipes,
  createCombinedText,
  validateCombinedText,
  writeValidatedFile,
} from './lib/recipe-exports.mjs';

const RECIPES_DIR = path.resolve('src/content/recipes');
const OUTPUT_TXT_PATH = path.resolve('public/recipes/all-recipes-combined.txt');

async function run() {
  const recipes = await loadRecipes(RECIPES_DIR);
  console.log(`Aggregating ${recipes.length} recipes into one text file...`);

  // Build maps of titles and slugs to check for unlinked recipe mentions
  const titleToSlug = new Map();

  for (const { slug, data } of recipes) {
    titleToSlug.set(data.title.toLowerCase(), slug);
  }

  const aggregatedText = createCombinedText(recipes);
  const analysisReport = [];

  for (const { slug, data, body: content } of recipes) {
    const title = data.title;

    // Perform corpus analysis check
    const contentLower = content.toLowerCase();

    // Check 1: Non-standard temperature expressions (e.g., "degrees", "deg F", "Fahrenheit")
    const nonStdTempMatches = content.match(/\b\d+\s*(?:degrees|deg|fahrenheit)\b/i);
    if (nonStdTempMatches) {
      analysisReport.push({
        slug,
        title,
        type: 'non-standard-temp',
        detail: `Uses "${nonStdTempMatches[0]}". Standardize to "°F" or "°C".`,
      });
    }

    // Check 2: Unlinked recipe references
    // If the text contains another recipe's title but not as a markdown link
    for (const [otherTitle, otherSlug] of titleToSlug.entries()) {
      if (otherSlug === slug) continue;

      // Look for the other title in the text (e.g. "sushi rice")
      // Avoid short/generic words to prevent false positives (like "rice" or "oil" or "salt")
      if (
        otherTitle.length < 7 ||
        ['pancakes', 'waffles', 'potatoes', 'dressing', 'marinade', 'crostini'].includes(otherTitle)
      ) {
        continue;
      }

      // Check if text mentions the title but doesn't have the markdown link
      const titleRegex = new RegExp(
        `\\b${otherTitle.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`,
        'i'
      );
      if (titleRegex.test(contentLower)) {
        // Verify if the link already exists in the file
        const linkPattern = `/recipes/${otherSlug}`;
        if (!contentLower.includes(linkPattern)) {
          analysisReport.push({
            slug,
            title,
            type: 'unlinked-reference',
            detail: `Mentions "${otherTitle}" but doesn't link to [/mise/recipes/${otherSlug}].`,
          });
        }
      }
    }

    // Check 3: Manufacturer/product brands. Sauce categories such as sriracha
    // are ingredient names, not a manufacturer endorsement.
    if (data.ingredients) {
      const brandNames = [
        'kikkoman',
        'philadelphia',
        'nutella',
        'titos',
        'frenchs',
        'heinz',
        'cholula',
        'franks redhot',
      ];
      for (const brand of brandNames) {
        const brandRegex = new RegExp(`\\b${brand}\\b`, 'i');
        const match = data.ingredients.find((i) => brandRegex.test(i));
        if (match) {
          analysisReport.push({
            slug,
            title,
            type: 'brand-name',
            detail: `Ingredient list contains brand name: "${match}". Replace with generic description.`,
          });
        }
      }
    }
  }

  // Save the aggregated text file
  await writeValidatedFile(OUTPUT_TXT_PATH, aggregatedText, (value) =>
    validateCombinedText(value, recipes)
  );
  console.log(
    `Saved aggregated corpus to ${OUTPUT_TXT_PATH} (${(aggregatedText.length / 1024 / 1024).toFixed(2)} MB)`
  );

  // Print analysis findings
  console.log('\n' + '='.repeat(80));
  console.log('CORPUS ANALYSIS REPORT: STRUCTURAL & TEXTUAL ISSUES');
  console.log('='.repeat(80));
  console.log(`Total Issues Flagged: ${analysisReport.length}`);

  const types = [...new Set(analysisReport.map((r) => r.type))];
  for (const type of types) {
    const typeIssues = analysisReport.filter((r) => r.type === type);
    console.log(`\nCategory: ${type.toUpperCase()} (${typeIssues.length} issues)`);
    console.log('-'.repeat(40));
    // print top 10
    typeIssues.slice(0, 10).forEach((issue) => {
      console.log(`  • [${issue.slug}] ${issue.title}: ${issue.detail}`);
    });
    if (typeIssues.length > 10) {
      console.log(`  ... and ${typeIssues.length - 10} more`);
    }
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
