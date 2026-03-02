import fs from 'fs/promises';
/* eslint-disable no-console */
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');
const OUTPUT_DIR = path.resolve('public', 'recipes');

// ─── Field weights for frontmatter completeness ───
const FRONTMATTER_FIELDS = {
  // Core fields (high importance)
  title: 3,
  role: 3,
  vibe: 3,
  ingredients: 3,
  servings: 2,
  // Time fields
  prepTime: 2,
  cookTime: 2,
  totalTime: 2,
  // Classification
  cuisines: 2,
  occasions: 2,
  cookingMethods: 2,
  flavorProfile: 2,
  dietary: 1,
  seasons: 2,
  // Planning
  difficulty: 1,
  nutritionalDensity: 2,
  leftovers: 2,
  advancePrep: 1,
  equipment: 1,
  // Pairing
  pairsWith: 2,
  // Meta
  origin: 1,
};

const MAX_FRONTMATTER_WEIGHT = Object.values(FRONTMATTER_FIELDS).reduce((a, b) => a + b, 0);

// ─── Technique & quality keywords ───
const TECHNIQUE_WORDS = [
  'sear', 'bloom', 'deglaze', 'rest', 'temper', 'emulsif', 'reduce',
  'caramelize', 'render', 'braise', 'blanch', 'fold', 'cure', 'brine',
  'ferment', 'proof', 'knead', 'velvet', 'marinate', 'dry-brine',
  'toast', 'char', 'smoke', 'poach', 'confit', 'mount', 'baste',
];

const VISUAL_CUE_WORDS = [
  'golden', 'translucent', 'opaque', 'bubbly', 'browned', 'charred',
  'glossy', 'crispy', 'tender', 'fork-tender', 'jiggly', 'set',
  'caramelized', 'smoking', 'sizzling', 'fragrant', 'wilted',
  'al dente', 'just pink', 'clear juices', 'internal temp',
];

const PREP_NOTE_WORDS = [
  'minced', 'diced', 'chopped', 'sliced', 'julienned', 'grated',
  'zested', 'crushed', 'ground', 'torn', 'halved', 'quartered',
  'thinly sliced', 'roughly chopped', 'finely diced', 'cut into',
  'peeled', 'seeded', 'deveined', 'trimmed', 'cubed', 'shredded',
];

// ─── Helpers ───
async function listMdFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listMdFiles(res)));
    else if (entry.isFile() && res.endsWith('.md')) files.push(res);
  }
  return files;
}

function countMatches(text, words) {
  const lower = text.toLowerCase();
  return words.filter((w) => lower.includes(w.toLowerCase())).length;
}

// ─── Scoring Functions ───

function scoreFrontmatter(data) {
  let earned = 0;
  const missing = [];

  for (const [field, weight] of Object.entries(FRONTMATTER_FIELDS)) {
    const val = data[field];
    const populated =
      val !== undefined &&
      val !== null &&
      val !== '' &&
      !(Array.isArray(val) && val.length === 0);

    if (populated) {
      earned += weight;
    } else {
      missing.push(field);
    }
  }

  return {
    score: Math.round((earned / MAX_FRONTMATTER_WEIGHT) * 100),
    missing,
  };
}

function scoreChefNote(content) {
  const match = content.match(/##\s*Chef's Note\s*\n([\s\S]*?)(?=\n##\s|\n*$)/i);
  const details = {};

  if (!match) {
    return { score: 0, details: { exists: false } };
  }

  const noteText = match[1].trim();
  const charCount = noteText.length;
  details.exists = true;
  details.charCount = charCount;

  let points = 0;
  const max = 25;

  // Exists
  points += 5;

  // Length tiers
  if (charCount >= 100) points += 4;
  if (charCount >= 200) points += 3;
  if (charCount >= 350) points += 3;

  // Mentions technique or "why"
  const techniqueCount = countMatches(noteText, TECHNIQUE_WORDS);
  details.techniqueRefs = techniqueCount;
  if (techniqueCount >= 1) points += 3;
  if (techniqueCount >= 2) points += 2;

  // Has practical tips (look for "you", imperative verbs, "tip", "key")
  const practicalWords = ['you', 'tip', 'key', 'critical', 'important', 'don\'t', 'make sure', 'the trick'];
  const practicalCount = countMatches(noteText, practicalWords);
  details.practicalTips = practicalCount > 0;
  if (practicalCount >= 1) points += 3;
  if (practicalCount >= 2) points += 2;

  return { score: Math.min(Math.round((points / max) * 100), 100), details };
}

function scoreDirections(content) {
  const match = content.match(/##\s*Directions\s*\n([\s\S]*?)(?=\n##\s|\n*$)/i);
  const details = {};

  if (!match) {
    return { score: 0, details: { exists: false } };
  }

  const dirText = match[1].trim();
  details.exists = true;

  let points = 0;
  const max = 30;

  // Exists
  points += 5;

  // Count numbered steps
  const stepMatches = dirText.match(/^\d+\.\s+/gm);
  const stepCount = stepMatches ? stepMatches.length : 0;
  details.stepCount = stepCount;
  if (stepCount >= 3) points += 3;
  if (stepCount >= 5) points += 3;
  if (stepCount >= 7) points += 2;

  // Bold step headers (e.g., "1. **Sear:**")
  const boldHeaders = dirText.match(/\d+\.\s+\*\*/g);
  details.hasBoldHeaders = boldHeaders && boldHeaders.length > 0;
  if (details.hasBoldHeaders) points += 4;

  // Temperature references
  const tempMatch = dirText.match(/\d+°[FC]/g);
  details.hasTemperatures = tempMatch && tempMatch.length > 0;
  details.temperatureCount = tempMatch ? tempMatch.length : 0;
  if (details.hasTemperatures) points += 3;

  // Time references
  const timeMatch = dirText.match(/\d+\s*(min|hour|minute|second|hr)/gi);
  details.hasTimes = timeMatch && timeMatch.length > 0;
  details.timeCount = timeMatch ? timeMatch.length : 0;
  if (details.hasTimes) points += 3;

  // Visual cues
  const visualCount = countMatches(dirText, VISUAL_CUE_WORDS);
  details.visualCueCount = visualCount;
  if (visualCount >= 1) points += 2;
  if (visualCount >= 3) points += 2;

  // Technique references in directions
  const techCount = countMatches(dirText, TECHNIQUE_WORDS);
  details.techniqueCount = techCount;
  if (techCount >= 1) points += 2;
  if (techCount >= 3) points += 1;

  return { score: Math.min(Math.round((points / max) * 100), 100), details };
}

function scoreIngredients(data) {
  const details = {};
  const ingredients = data.ingredients;

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    return { score: 0, details: { exists: false } };
  }

  details.exists = true;
  details.count = ingredients.length;

  let points = 0;
  const max = 20;

  // Has ingredients
  points += 4;

  // Count
  if (ingredients.length >= 3) points += 2;
  if (ingredients.length >= 5) points += 2;
  if (ingredients.length >= 8) points += 2;

  // Quantity specificity — check how many have leading quantities
  const withQuantity = ingredients.filter((i) => /^\d|^[½¼¾⅓⅔⅛]/.test(String(i).trim()));
  details.withQuantity = withQuantity.length;
  const quantityRatio = withQuantity.length / ingredients.length;
  if (quantityRatio >= 0.5) points += 2;
  if (quantityRatio >= 0.8) points += 3;

  // Prep notes (minced, diced, etc.)
  const withPrepNotes = ingredients.filter((i) => {
    const lower = String(i).toLowerCase();
    return PREP_NOTE_WORDS.some((p) => lower.includes(p));
  });
  details.withPrepNotes = withPrepNotes.length;
  if (withPrepNotes.length >= 1) points += 2;
  if (withPrepNotes.length >= 3) points += 3;

  return { score: Math.min(Math.round((points / max) * 100), 100), details };
}

function scoreMetadata(data) {
  const details = {};
  let points = 0;
  const max = 20;

  const checks = [
    { field: 'cuisines', weight: 3 },
    { field: 'occasions', weight: 3 },
    { field: 'seasons', weight: 2 },
    { field: 'flavorProfile', weight: 3 },
    { field: 'cookingMethods', weight: 2 },
    { field: 'nutritionalDensity', weight: 2 },
    { field: 'leftovers', weight: 2 },
    { field: 'difficulty', weight: 1 },
    { field: 'pairsWith', weight: 2 },
  ];

  const populated = [];
  const missing = [];

  for (const { field, weight } of checks) {
    const val = data[field];
    const has =
      val !== undefined &&
      val !== null &&
      val !== '' &&
      !(Array.isArray(val) && val.length === 0);
    if (has) {
      points += weight;
      populated.push(field);
    } else {
      missing.push(field);
    }
  }

  details.populated = populated;
  details.missing = missing;

  return { score: Math.min(Math.round((points / max) * 100), 100), details };
}

// ─── Overall Score & Tier ───
function computeOverall(scores) {
  // Weighted average
  const weights = {
    frontmatter: 0.20,
    chefNote: 0.22,
    directions: 0.28,
    ingredients: 0.15,
    metadata: 0.15,
  };

  let total = 0;
  for (const [key, weight] of Object.entries(weights)) {
    total += (scores[key]?.score || 0) * weight;
  }

  return Math.round(total);
}

function assignTier(overallScore) {
  if (overallScore >= 80) return 'exemplary';
  if (overallScore >= 60) return 'solid';
  if (overallScore >= 40) return 'needs-work';
  return 'skeletal';
}

function getTopFixes(recipe) {
  const fixes = [];
  const s = recipe.scores;

  // Chef's Note issues
  if (!s.chefNote.details.exists) {
    fixes.push({ priority: 'high', area: 'chefNote', fix: 'Add a Chef\'s Note section' });
  } else if (s.chefNote.score < 50) {
    fixes.push({
      priority: 'medium',
      area: 'chefNote',
      fix: 'Expand Chef\'s Note: explain the "why", add technique references and practical tips',
    });
  }

  // Directions issues
  if (!s.directions.details.exists) {
    fixes.push({ priority: 'high', area: 'directions', fix: 'Add Directions section' });
  } else {
    if (!s.directions.details.hasBoldHeaders) {
      fixes.push({
        priority: 'medium',
        area: 'directions',
        fix: 'Add bold step headers (e.g., "1. **Sear:**")',
      });
    }
    if (s.directions.details.stepCount < 3) {
      fixes.push({ priority: 'medium', area: 'directions', fix: 'Expand directions — too few steps' });
    }
    if (!s.directions.details.hasTemperatures && recipe.data.cookTime) {
      fixes.push({ priority: 'low', area: 'directions', fix: 'Add specific temperatures' });
    }
    if (s.directions.details.visualCueCount === 0) {
      fixes.push({ priority: 'low', area: 'directions', fix: 'Add visual cues (golden, bubbly, fragrant)' });
    }
  }

  // Frontmatter gaps
  const criticalMissing = s.frontmatter.missing.filter((f) =>
    ['role', 'vibe', 'cuisines', 'ingredients', 'servings'].includes(f)
  );
  if (criticalMissing.length > 0) {
    fixes.push({
      priority: 'high',
      area: 'frontmatter',
      fix: `Add missing core fields: ${criticalMissing.join(', ')}`,
    });
  }

  const planningMissing = s.frontmatter.missing.filter((f) =>
    ['seasons', 'nutritionalDensity', 'leftovers', 'occasions', 'flavorProfile'].includes(f)
  );
  if (planningMissing.length > 0) {
    fixes.push({
      priority: 'low',
      area: 'frontmatter',
      fix: `Add planning metadata: ${planningMissing.join(', ')}`,
    });
  }

  // Ingredients
  if (s.ingredients.score < 50 && s.ingredients.details.exists) {
    fixes.push({
      priority: 'medium',
      area: 'ingredients',
      fix: 'Improve ingredient specificity: add quantities and prep notes',
    });
  }

  // pairsWith
  if (!recipe.data.pairsWith || recipe.data.pairsWith.length === 0) {
    fixes.push({ priority: 'low', area: 'pairsWith', fix: 'Add pairsWith suggestions' });
  }

  // Sort: high > medium > low
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  fixes.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return fixes.slice(0, 5); // Top 5 fixes
}

// ─── Main ───
(async function main() {
  const files = await listMdFiles(RECIPES_DIR);
  console.log(`Reviewing ${files.length} recipes for culinary quality...\n`);

  // Build slug set for pairsWith validation
  const allSlugs = new Set();
  for (const file of files) {
    allSlugs.add(path.basename(file, '.md'));
  }

  const recipes = [];

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(file, '.md');
    const lineCount = raw.split('\n').length;

    const scores = {
      frontmatter: scoreFrontmatter(data),
      chefNote: scoreChefNote(content),
      directions: scoreDirections(content),
      ingredients: scoreIngredients(data),
      metadata: scoreMetadata(data),
    };

    const overall = computeOverall(scores);
    const tier = assignTier(overall);

    const recipe = {
      slug,
      title: data.title || slug,
      lineCount,
      overall,
      tier,
      scores,
      data, // keep for fix generation
    };

    recipe.topFixes = getTopFixes(recipe);

    // Remove raw data from output to keep report clean
    delete recipe.data;

    recipes.push(recipe);
  }

  // Sort by overall score ascending (worst first)
  recipes.sort((a, b) => a.overall - b.overall);

  // Tier counts
  const tiers = { exemplary: [], solid: [], 'needs-work': [], skeletal: [] };
  for (const r of recipes) {
    tiers[r.tier].push(r.slug);
  }

  // Category distribution
  const tierCounts = {
    exemplary: tiers.exemplary.length,
    solid: tiers.solid.length,
    'needs-work': tiers['needs-work'].length,
    skeletal: tiers.skeletal.length,
  };

  // Average scores per dimension
  const avgScores = {
    frontmatter: 0,
    chefNote: 0,
    directions: 0,
    ingredients: 0,
    metadata: 0,
    overall: 0,
  };
  for (const r of recipes) {
    avgScores.frontmatter += r.scores.frontmatter.score;
    avgScores.chefNote += r.scores.chefNote.score;
    avgScores.directions += r.scores.directions.score;
    avgScores.ingredients += r.scores.ingredients.score;
    avgScores.metadata += r.scores.metadata.score;
    avgScores.overall += r.overall;
  }
  for (const key of Object.keys(avgScores)) {
    avgScores[key] = Math.round(avgScores[key] / recipes.length);
  }

  // Most common missing fields
  const fieldMissCounts = {};
  for (const r of recipes) {
    for (const field of r.scores.frontmatter.missing) {
      fieldMissCounts[field] = (fieldMissCounts[field] || 0) + 1;
    }
  }
  const topMissingFields = Object.entries(fieldMissCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([field, count]) => ({ field, count, pct: Math.round((count / recipes.length) * 100) + '%' }));

  // Most common fix recommendations
  const fixCounts = {};
  for (const r of recipes) {
    for (const fix of r.topFixes) {
      const key = `${fix.area}:${fix.fix}`;
      fixCounts[key] = (fixCounts[key] || 0) + 1;
    }
  }
  const topFixes = Object.entries(fixCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([fix, count]) => ({ fix, count }));

  // Build report
  const report = {
    generatedAt: new Date().toISOString(),
    totalRecipes: recipes.length,
    tierCounts,
    averageScores: avgScores,
    topMissingFields,
    topFixes,
    // Full recipe list (sorted worst-first for easy batch improvement)
    recipes: recipes.map((r) => ({
      slug: r.slug,
      title: r.title,
      lineCount: r.lineCount,
      overall: r.overall,
      tier: r.tier,
      scores: {
        frontmatter: r.scores.frontmatter.score,
        chefNote: r.scores.chefNote.score,
        directions: r.scores.directions.score,
        ingredients: r.scores.ingredients.score,
        metadata: r.scores.metadata.score,
      },
      topFixes: r.topFixes,
    })),
  };

  // Write report
  await fs.mkdir(OUTPUT_DIR, { recursive: true }).catch(() => {});
  const reportPath = path.join(OUTPUT_DIR, 'chef-review-report.json');
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

  // Console summary
  console.log('═'.repeat(60));
  console.log('  CHEF REVIEW — Culinary Quality Report');
  console.log('═'.repeat(60));
  console.log(`  Total recipes: ${report.totalRecipes}`);
  console.log('');
  console.log('  Tier Distribution:');
  console.log(`    Exemplary  (80-100): ${tierCounts.exemplary}`);
  console.log(`    Solid      (60-79):  ${tierCounts.solid}`);
  console.log(`    Needs Work (40-59):  ${tierCounts['needs-work']}`);
  console.log(`    Skeletal   (0-39):   ${tierCounts.skeletal}`);
  console.log('');
  console.log('  Average Scores:');
  console.log(`    Overall:      ${avgScores.overall}/100`);
  console.log(`    Frontmatter:  ${avgScores.frontmatter}/100`);
  console.log(`    Chef's Note:  ${avgScores.chefNote}/100`);
  console.log(`    Directions:   ${avgScores.directions}/100`);
  console.log(`    Ingredients:  ${avgScores.ingredients}/100`);
  console.log(`    Metadata:     ${avgScores.metadata}/100`);
  console.log('');
  console.log('  Top Missing Fields:');
  for (const { field, count, pct } of topMissingFields.slice(0, 5)) {
    console.log(`    ${field}: ${count} recipes (${pct})`);
  }
  console.log('');
  console.log('  Bottom 10 (worst quality):');
  for (const r of recipes.slice(0, 10)) {
    console.log(`    ${r.overall}/100  ${r.slug}`);
    if (r.topFixes.length > 0) {
      console.log(`             → ${r.topFixes[0].fix}`);
    }
  }
  console.log('');
  console.log(`  Full report: ${reportPath}`);
  console.log('═'.repeat(60));
})();
