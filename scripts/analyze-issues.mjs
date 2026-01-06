import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = './src/content/recipes';
const IGNORE_FILES = ['index.json', 'validation-report.json', 'batch-summary.json', '.DS_Store'];

// Helper to normalize strings for comparison
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

const analyze = () => {
  const files = fs.readdirSync(RECIPES_DIR).filter(f => !IGNORE_FILES.includes(f) && f.endsWith('.md'));
  
  const report = {
    weirdIngredients: [],
    linkedIngredients: [],
    longbSlugs: [],
    duplicateTitles: [],
    missingPairs: [],
    stats: { total: files.length }
  };

  const titles = new Map(); // normalized_title -> [slugs]

  files.forEach(file => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(RECIPES_DIR, file), 'utf-8');
    const parsed = matter(content);
    const data = parsed.data;

    // 1. Long Slugs
    if (slug.length > 50) {
      report.longbSlugs.push({ slug, length: slug.length });
    }

    // 2. Duplicate Titles
    if (data.title) {
      const normTitle = normalize(data.title);
      if (!titles.has(normTitle)) {
        titles.set(normTitle, []);
      }
      titles.get(normTitle).push(slug);
    }

    // 3. Ingredient Issues
    if (data.ingredients && Array.isArray(data.ingredients)) {
      data.ingredients.forEach(ing => {
        if (typeof ing !== 'string') return;
        
        // Detect "--- The Components ---" style
        if (ing.trim().startsWith('---') || ing.includes('Click for Recipes') || ing.includes('---')) {
          report.weirdIngredients.push({ slug, ingredient: ing });
        }
        
        // Detect Markdown links
        if (ing.includes('](') || (ing.includes('[') && ing.includes(']'))) {
          report.linkedIngredients.push({ slug, ingredient: ing });
        }
      });
    }

    // 4. Missing Pairs
    if (!data.pairsWith || data.pairsWith.length === 0) {
        // Only flag if it's a MAIN dish, as sides/condiments don't always need pairings
        if (data.role === 'main') {
            report.missingPairs.push(slug);
        }
    }
  });

  // Process duplicates
  titles.forEach((slugs, title) => {
    if (slugs.length > 1) {
      report.duplicateTitles.push({ title, slugs });
    }
  });

  console.log(JSON.stringify(report, null, 2));
};

analyze();
