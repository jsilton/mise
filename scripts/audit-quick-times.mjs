#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RECIPES_DIR = path.join(__dirname, '../src/content/recipes');
const DRY_RUN = process.argv.includes('--dry-run');

const timeRegex = /(\d+)\s*(?:min|mins|minutes|hours?|h)/i;

function parseTime(timeStr) {
  if (!timeStr) return 0;

  let totalMinutes = 0;
  const parts = timeStr.match(/(\d+)\s*(min|mins|h|hour|hours)/gi) || [];

  parts.forEach((part) => {
    const match = part.match(/(\d+)\s*(min|mins|h|hour|hours)/i);
    if (match) {
      const value = parseInt(match[1], 10);
      const unit = match[2].toLowerCase();
      if (unit.startsWith('h')) {
        totalMinutes += value * 60;
      } else {
        totalMinutes += value;
      }
    }
  });

  return totalMinutes;
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatterStr = match[1];
  const frontmatter = {};

  // Simple YAML parsing for our needs
  frontmatterStr.split('\n').forEach((line) => {
    if (!line.trim()) return;

    // Handle key: value pairs
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();

    if (key && value) {
      // Remove quotes
      const cleanValue = value.replace(/^['"]|['"]$/g, '');
      frontmatter[key.trim()] = cleanValue;
    }
  });

  return frontmatter;
}

function extractDirections(content) {
  const match = content.match(/## Directions\n([\s\S]*?)(?=\n##|$)/);
  return match ? match[1] : '';
}

function checkForImpliedTime(directions) {
  const timeIndicators = [
    { pattern: /marinate\s+(?:for\s+)?(\d+)\s*(?:min|hour|h)/gi, label: 'marinate' },
    { pattern: /chill\s+(?:for\s+)?(\d+)\s*(?:min|hour|h)/gi, label: 'chill' },
    { pattern: /rest\s+(?:for\s+)?(\d+)\s*(?:min|hour|h)/gi, label: 'rest' },
    { pattern: /let\s+(?:it\s+)?rise\s+(?:for\s+)?(\d+)\s*(?:min|hour|h)/gi, label: 'rise' },
    { pattern: /refrigerate\s+(?:for\s+)?(\d+)\s*(?:min|hour|h)/gi, label: 'refrigerate' },
    { pattern: /freeze\s+(?:for\s+)?(\d+)\s*(?:min|hour|h)/gi, label: 'freeze' },
    { pattern: /proof\s+(?:for\s+)?(\d+)\s*(?:min|hour|h)/gi, label: 'proof' },
  ];

  const found = [];
  timeIndicators.forEach(({ pattern, label }) => {
    let match;
    while ((match = pattern.exec(directions)) !== null) {
      found.push({ label, time: match[1] });
    }
  });

  return found;
}

async function auditRecipes() {
  const files = fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith('.md'));

  const flagged = [];
  const fixed = [];

  files.forEach((file) => {
    const filePath = path.join(RECIPES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = extractFrontmatter(content);

    if (!frontmatter || frontmatter.vibe !== 'quick') {
      return;
    }

    const slug = file.replace('.md', '');
    const title = frontmatter.title || slug;
    const prepTime = parseTime(frontmatter.prepTime);
    const cookTime = parseTime(frontmatter.cookTime);
    const claimedTotal = parseTime(frontmatter.totalTime);
    const calculatedTotal = prepTime + cookTime;

    const directions = extractDirections(content);
    const impliedTimes = checkForImpliedTime(directions);

    const issues = [];
    let actions = [];

    // Check 1: totalTime exceeds 45 minutes
    if (claimedTotal > 45) {
      issues.push(`totalTime (${claimedTotal}min) exceeds 45min threshold for quick vibe`);
    }

    // Check 2: prepTime + cookTime doesn't match totalTime (±5 min tolerance)
    if (Math.abs(calculatedTotal - claimedTotal) > 5) {
      issues.push(
        `prepTime (${prepTime}min) + cookTime (${cookTime}min) = ${calculatedTotal}min, but totalTime claims ${claimedTotal}min`
      );
    }

    // Check 3: Implied time in directions
    if (impliedTimes.length > 0) {
      const timeList = impliedTimes.map((t) => `${t.label} ${t.time}min`).join(', ');
      issues.push(`Directions mention passive time: ${timeList}`);
    }

    if (issues.length === 0) {
      return; // No issues, skip
    }

    // Determine if we should auto-fix
    if (claimedTotal > 45 && calculatedTotal > 45 && impliedTimes.length === 0) {
      // Safe to change vibe: time math is consistent, but total is over 45min
      actions.push({
        type: 'change-vibe',
        from: 'quick',
        to: 'comfort',
        reason: `${claimedTotal}min total exceeds quick threshold`,
      });
    }

    if (Math.abs(calculatedTotal - claimedTotal) > 5 && impliedTimes.length === 0) {
      // Safe to fix totalTime math
      actions.push({
        type: 'fix-total-time',
        from: claimedTotal,
        to: calculatedTotal,
        reason: `prepTime + cookTime = ${calculatedTotal}min`,
      });
    }

    flagged.push({
      slug,
      title,
      times: {
        prepTime: `${prepTime}min`,
        cookTime: `${cookTime}min`,
        claimedTotal: `${claimedTotal}min`,
        calculatedTotal: `${calculatedTotal}min`,
      },
      issues,
      impliedTimes: impliedTimes.length > 0 ? impliedTimes : null,
      actions,
    });
  });

  // Apply fixes if not dry-run
  if (!DRY_RUN && flagged.length > 0) {
    flagged.forEach(({ slug, actions: itemActions }) => {
      if (itemActions.length === 0) return;

      const filePath = path.join(RECIPES_DIR, `${slug}.md`);
      let content = fs.readFileSync(filePath, 'utf-8');

      itemActions.forEach((action) => {
        if (action.type === 'change-vibe') {
          content = content.replace(/^vibe:\s*quick\s*$/m, `vibe: ${action.to}`);
          fixed.push({ slug, action: `Changed vibe from quick to ${action.to}` });
        } else if (action.type === 'fix-total-time') {
          const newTotal = `${action.to} min`;
          // Match totalTime line and replace carefully
          content = content.replace(/^totalTime:\s*['"]?[^'\n]+['"]?\s*$/m, `totalTime: '${newTotal}'`);
          fixed.push({ slug, action: `Fixed totalTime to ${action.to}min` });
        }
      });

      fs.writeFileSync(filePath, content, 'utf-8');
    });
  }

  return { flagged, fixed };
}

async function main() {
  console.log('Auditing quick recipes for time estimate accuracy...\n');
  if (DRY_RUN) {
    console.log('Running in DRY_RUN mode (no changes will be made)\n');
  }

  const { flagged, fixed } = await auditRecipes();

  if (flagged.length === 0) {
    console.log('✓ All quick recipes have honest time estimates!');
    process.exit(0);
  }

  console.log(`Found ${flagged.length} recipe(s) with time estimate issues:\n`);

  flagged.forEach((item) => {
    console.log(`📋 ${item.title} (${item.slug})`);
    console.log(`   Prep: ${item.times.prepTime}, Cook: ${item.times.cookTime}`);
    console.log(`   Claimed Total: ${item.times.claimedTotal} | Calculated: ${item.times.calculatedTotal}`);

    if (item.issues.length > 0) {
      console.log('   Issues:');
      item.issues.forEach((issue) => {
        console.log(`   - ${issue}`);
      });
    }

    if (item.impliedTimes) {
      console.log('   Passive time in directions:');
      item.impliedTimes.forEach((t) => {
        console.log(`     - ${t.label}: ${t.time}min`);
      });
    }

    if (item.actions.length > 0) {
      console.log('   Actions:');
      item.actions.forEach((action) => {
        if (action.type === 'change-vibe') {
          console.log(`   → Change vibe from ${action.from} to ${action.to} (${action.reason})`);
        } else if (action.type === 'fix-total-time') {
          console.log(`   → Fix totalTime: ${action.from}min → ${action.to}min (${action.reason})`);
        }
      });
    } else {
      console.log('   ⚠ Requires manual review (has implied time or complex issues)');
    }

    console.log();
  });

  if (!DRY_RUN && fixed.length > 0) {
    console.log(`\n✓ Applied ${fixed.length} auto-fixes:\n`);
    fixed.forEach(({ slug, action }) => {
      console.log(`  ${slug}: ${action}`);
    });
  } else if (DRY_RUN) {
    console.log(`\n(DRY_RUN) Would apply ${flagged.filter((f) => f.actions.length > 0).length} auto-fixes`);
  }

  process.exit(flagged.length > 0 ? 1 : 0);
}

main();
