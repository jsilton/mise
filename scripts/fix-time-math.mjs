#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RECIPE_DIR = path.join(__dirname, '../src/content/recipes');
const DRY_RUN = process.argv.includes('--dry-run');

// Parse time strings like "30 min", "1 hr", "1 hr 30 min", "2.5 hr" into minutes
function parseTime(timeStr) {
  if (!timeStr || typeof timeStr !== 'string') return null;

  const trimmed = timeStr.trim();
  if (trimmed === '0 min' || trimmed === '0') return 0;

  let totalMinutes = 0;

  // Match hours (e.g., "1 hr", "2.5 hr")
  const hourMatch = trimmed.match(/(\d+(?:\.\d+)?)\s*hr/i);
  if (hourMatch) {
    totalMinutes += parseFloat(hourMatch[1]) * 60;
  }

  // Match minutes (e.g., "30 min")
  const minMatch = trimmed.match(/(\d+)\s*min/i);
  if (minMatch) {
    totalMinutes += parseInt(minMatch[1], 10);
  }

  // If string matches pure number (like "240"), treat as minutes
  if (!hourMatch && !minMatch) {
    const numMatch = trimmed.match(/^(\d+)$/);
    if (numMatch) {
      totalMinutes = parseInt(numMatch[1], 10);
    }
  }

  return totalMinutes > 0 ? totalMinutes : null;
}

// Check if directions mention passive time
function hasPassiveTime(content) {
  const passiveKeywords = [
    'marinate',
    'chill',
    'rest',
    'freeze',
    'rise',
    'proof',
    'refrigerate',
    'overnight',
    'soak',
    'cool',
    'set',
    'temper',
  ];
  const lowerContent = content.toLowerCase();
  return passiveKeywords.some((keyword) => lowerContent.includes(keyword));
}

// Extract frontmatter from markdown
function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const yamlStr = match[1];
  const result = {};

  // Parse YAML-like frontmatter
  const lines = yamlStr.split('\n');
  let currentKey = null;
  let currentValue = '';

  for (const line of lines) {
    if (line.match(/^\s*#/)) continue; // skip comments

    if (line.match(/^[a-z]/i) && line.includes(':')) {
      // Save previous key if any
      if (currentKey) {
        result[currentKey] = parseYamlValue(currentValue.trim());
      }

      const [key, ...valueParts] = line.split(':');
      currentKey = key.trim();
      currentValue = valueParts.join(':').trim();
    } else if (currentKey && line.match(/^\s+/)) {
      // Continuation of previous value
      currentValue += '\n' + line;
    }
  }

  // Save last key
  if (currentKey) {
    result[currentKey] = parseYamlValue(currentValue.trim());
  }

  return result;
}

// Parse YAML values
function parseYamlValue(val) {
  if (!val) return null;
  if (val.startsWith('[') && val.endsWith(']')) {
    return val.slice(1, -1).split(',').map((s) => s.trim());
  }
  if (val === 'true') return true;
  if (val === 'false') return false;
  return val;
}

// Get recipe slug from filename
function getSlug(filename) {
  return filename.replace(/\.md$/, '');
}

// Analyze a recipe file
function analyzeRecipe(filePath, content) {
  const slug = getSlug(path.basename(filePath));
  const frontmatter = extractFrontmatter(content);

  if (!frontmatter) {
    return {
      slug,
      error: 'Could not parse frontmatter',
    };
  }

  const prepTime = parseTime(frontmatter.prepTime);
  const cookTime = parseTime(frontmatter.cookTime);
  const totalTime = parseTime(frontmatter.totalTime);
  const advancePrep = frontmatter.advancePrep || [];
  const hasPassive = hasPassiveTime(content);

  // Missing times
  if (prepTime === null || prepTime === undefined) {
    return {
      slug,
      status: 'skip',
      reason: 'Missing or invalid prepTime',
    };
  }

  if (cookTime === null || cookTime === undefined) {
    return {
      slug,
      status: 'skip',
      reason: 'Missing or invalid cookTime',
    };
  }

  if (totalTime === null || totalTime === undefined) {
    return {
      slug,
      status: 'skip',
      reason: 'Missing or invalid totalTime',
    };
  }

  const expected = prepTime + cookTime;
  const diff = totalTime - expected;

  // No mismatch
  if (Math.abs(diff) <= 10) {
    return {
      slug,
      status: 'ok',
      prepTime,
      cookTime,
      totalTime,
      expected,
      diff,
    };
  }

  // totalTime > expected: check for passive time
  if (diff > 10) {
    if (hasPassive || (Array.isArray(advancePrep) && advancePrep.length > 0)) {
      return {
        slug,
        status: 'skip',
        reason: 'Legitimate passive time (marinate/chill/rest/etc)',
        prepTime,
        cookTime,
        totalTime,
        expected,
        diff,
        hasPassiveKeywords: hasPassive,
        hasAdvancePrep: Array.isArray(advancePrep) && advancePrep.length > 0,
      };
    }

    // totalTime > expected but no passive time indicators
    return {
      slug,
      status: 'warn',
      reason: 'totalTime > prepTime+cookTime but no passive time mentioned',
      prepTime,
      cookTime,
      totalTime,
      expected,
      diff,
      action: 'review',
    };
  }

  // totalTime < expected: always fix
  if (diff < -10) {
    return {
      slug,
      status: 'fix',
      reason: 'totalTime is less than prepTime+cookTime (data entry error)',
      prepTime,
      cookTime,
      totalTime,
      expected,
      diff,
      newTotalTime: expected,
    };
  }

  return {
    slug,
    status: 'ok',
    prepTime,
    cookTime,
    totalTime,
    expected,
    diff,
  };
}

// Convert minutes back to time string
function minutesToTimeString(minutes) {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (mins === 0) {
    return hours === 1 ? '1 hr' : `${hours} hr`;
  }

  return `${hours} hr ${mins} min`;
}

// Update totalTime in the frontmatter
function updateTotalTime(content, newMinutes) {
  const newTimeStr = minutesToTimeString(newMinutes);
  return content.replace(
    /^(totalTime:\s*)['"]?[^'"]*['"]?$/m,
    `$1'${newTimeStr}'`
  );
}

// Main
async function main() {
  console.log(`\n=== Mise Recipe Time Math Audit ===`);
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'EXECUTE'}`);
  console.log(`Recipe directory: ${RECIPE_DIR}\n`);

  const files = fs.readdirSync(RECIPE_DIR).filter((f) => f.endsWith('.md'));
  console.log(`Found ${files.length} recipes\n`);

  const results = {
    ok: [],
    skip: [],
    fix: [],
    warn: [],
    error: [],
  };

  // Analyze all recipes
  for (const file of files) {
    const filePath = path.join(RECIPE_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const analysis = analyzeRecipe(filePath, content);

    const status = analysis.status || 'error';
    results[status].push(analysis);
  }

  // Report findings
  console.log(`\n=== SUMMARY ===`);
  console.log(`✓ OK (match or <10 min diff):        ${results.ok.length}`);
  console.log(`⊘ SKIP (legitimate passive time):   ${results.skip.length}`);
  console.log(`⚠ WARN (review manually):           ${results.warn.length}`);
  console.log(`✎ FIX (safe to auto-fix):           ${results.fix.length}`);
  console.log(`✗ ERROR (unparseable):              ${results.error.length}`);

  // Show fixes
  if (results.fix.length > 0) {
    console.log(`\n=== FIXES TO APPLY (${DRY_RUN ? 'dry-run' : 'applying'}) ===\n`);

    let filesFixed = 0;

    for (const analysis of results.fix) {
      const filePath = path.join(RECIPE_DIR, `${analysis.slug}.md`);
      const content = fs.readFileSync(filePath, 'utf-8');
      const newContent = updateTotalTime(content, analysis.newTotalTime);

      console.log(`${analysis.slug}`);
      console.log(
        `  OLD: prepTime=${analysis.prepTime}m + cookTime=${analysis.cookTime}m = ${analysis.prepTime + analysis.cookTime}m (but totalTime was ${analysis.totalTime}m)`
      );
      console.log(`  NEW: totalTime='${minutesToTimeString(analysis.newTotalTime)}'`);
      console.log(`  Reason: ${analysis.reason}`);

      if (!DRY_RUN) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        filesFixed++;
      }
      console.log();
    }

    if (!DRY_RUN) {
      console.log(`✓ Fixed ${filesFixed} recipes\n`);
    } else {
      console.log(`[DRY RUN] Would fix ${results.fix.length} recipes\n`);
    }
  }

  // Show skips (passive time)
  if (results.skip.length > 0 && results.skip.some((r) => !r.error)) {
    console.log(`\n=== SKIPPED (Legitimate Passive Time) ===\n`);
    const passive = results.skip.filter((r) => !r.error).slice(0, 10);
    for (const analysis of passive) {
      console.log(`${analysis.slug}`);
      console.log(`  ${analysis.reason}`);
      if (analysis.prepTime !== undefined) {
        console.log(
          `  Times: prepTime=${analysis.prepTime}m, cookTime=${analysis.cookTime}m, totalTime=${analysis.totalTime}m (diff: +${analysis.diff}m)`
        );
      }
      console.log();
    }
    if (results.skip.length > 10) {
      console.log(`... and ${results.skip.length - 10} more\n`);
    }
  }

  // Show warnings
  if (results.warn.length > 0) {
    console.log(`\n=== WARNINGS (Review Manually) ===\n`);
    for (const analysis of results.warn) {
      console.log(`${analysis.slug}`);
      console.log(`  ${analysis.reason}`);
      console.log(
        `  Times: prepTime=${analysis.prepTime}m, cookTime=${analysis.cookTime}m, totalTime=${analysis.totalTime}m`
      );
      console.log(`  Expected total: ${analysis.expected}m (diff: ${analysis.diff > 0 ? '+' : ''}${analysis.diff}m)`);
      console.log();
    }
  }

  // Show errors
  if (results.error.length > 0) {
    console.log(`\n=== ERRORS ===\n`);
    const errors = results.error.slice(0, 10);
    for (const analysis of errors) {
      console.log(`${analysis.slug}: ${analysis.error}`);
    }
    if (results.error.length > 10) {
      console.log(`... and ${results.error.length - 10} more`);
    }
    console.log();
  }

  // Final instructions
  console.log(`\n=== NEXT STEPS ===`);
  if (DRY_RUN) {
    console.log(`Run without --dry-run to apply fixes:`);
    console.log(`  npm run fix-time-math`);
  } else {
    console.log(`✓ Time math fixes applied`);
    console.log(`  Run: npm run validate-recipes`);
    console.log(`  Then commit changes`);
  }
  console.log();
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
