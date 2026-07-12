import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');
const OUTPUT_TXT_PATH = path.resolve('public/recipes/all-recipes-combined.txt');

// Helper to list all markdown files recursively
async function listMdFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMdFiles(res)));
    } else if (entry.isFile() && res.endsWith('.md')) {
      files.push(res);
    }
  }
  return files;
}

// Normalize strings to generate slug candidates
function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

async function run() {
  const files = await listMdFiles(RECIPES_DIR);
  console.log(`Aggregating ${files.length} recipes into one text file...`);

  // Build maps of titles and slugs to check for unlinked recipe mentions
  const slugToTitle = new Map();
  const titleToSlug = new Map();

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data } = matter(raw);
    const slug = path.basename(file, '.md');
    const title = data.title || slug;

    slugToTitle.set(slug, title);
    titleToSlug.set(title.toLowerCase(), slug);
  }

  let aggregatedText = '';
  const analysisReport = [];

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(file, '.md');
    const title = data.title || slug;

    // Append to the huge consolidated text file
    aggregatedText += `======================================================================\n`;
    aggregatedText += `RECIPE: ${title} (${slug}.md)\n`;
    aggregatedText += `CUISINES: ${data.cuisines ? data.cuisines.join(', ') : 'None'}\n`;
    aggregatedText += `INGREDIENTS:\n`;
    if (data.ingredients) {
      data.ingredients.forEach((i) => (aggregatedText += `  - ${i}\n`));
    }
    aggregatedText += `CONTENT:\n${content}\n\n`;

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

    // Check 3: Brand names in ingredients (violates clean style)
    if (data.ingredients) {
      const brandNames = [
        'kikkoman',
        'sriracha',
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
  await fs.mkdir(path.dirname(OUTPUT_TXT_PATH), { recursive: true }).catch(() => {});
  await fs.writeFile(OUTPUT_TXT_PATH, aggregatedText, 'utf8');
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

run().catch(console.error);
