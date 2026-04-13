#!/usr/bin/env node
/**
 * batch-guard.mjs — Safety wrapper for batch recipe operations.
 *
 * Prevents the specific damage patterns that batch scripts caused:
 *   1. Saves a git stash before running
 *   2. Runs the batch script
 *   3. Shows a summary of what changed (files, line counts, content samples)
 *   4. Runs lint-recipe.mjs on all changed files
 *   5. If lint fails: auto-reverts and shows what went wrong
 *   6. If lint passes: prompts to keep or revert
 *
 * Usage:
 *   node scripts/batch-guard.mjs "node scripts/batch-technique.mjs"
 *   node scripts/batch-guard.mjs "node scripts/batch-chefs-notes.mjs" --auto-accept
 *
 * The --auto-accept flag skips the interactive prompt (for CI).
 * Always run with --dry-run on the inner script first.
 */

import { execSync } from 'child_process';
import fs from 'fs';

const args = process.argv.slice(2);
const autoAccept = args.includes('--auto-accept');
const command = args.filter(a => a !== '--auto-accept')[0];

if (!command) {
  console.log('Usage: node scripts/batch-guard.mjs "<command>" [--auto-accept]');
  console.log('Example: node scripts/batch-guard.mjs "node scripts/batch-technique.mjs"');
  process.exit(1);
}

function run(cmd, opts = {}) {
  return execSync(cmd, { encoding: 'utf8', stdio: opts.stdio || 'pipe', ...opts });
}

function countLines(diff) {
  const added = (diff.match(/^\+[^+]/gm) || []).length;
  const removed = (diff.match(/^-[^-]/gm) || []).length;
  return { added, removed };
}

// ─── Step 1: Ensure clean working tree ───────────────────────────────────────

console.log('🔒 Batch Guard: Checking working tree...');

const status = run('git status --porcelain').trim();
if (status) {
  console.log('⚠️  Working tree has uncommitted changes. Stashing...');
  run('git stash push -m "batch-guard: pre-batch stash"');
  console.log('   Stashed. Will restore after batch operation.');
}

// ─── Step 2: Run the batch script ────────────────────────────────────────────

console.log(`\n🚀 Running: ${command}\n`);

try {
  execSync(command, { stdio: 'inherit' });
} catch (err) {
  console.log(`\n❌ Batch script failed with exit code ${err.status}`);
  if (status) {
    console.log('   Restoring stash...');
    run('git stash pop');
  }
  process.exit(1);
}

// ─── Step 3: Summarize changes ───────────────────────────────────────────────

console.log('\n📊 Change Summary:');

const changedFiles = run('git diff --name-only')
  .trim()
  .split('\n')
  .filter(f => f.startsWith('src/content/recipes/') && f.endsWith('.md'));

if (changedFiles.length === 0) {
  console.log('   No recipe files changed.');
  if (status) run('git stash pop');
  process.exit(0);
}

console.log(`   ${changedFiles.length} recipe file(s) modified\n`);

const diff = run('git diff --stat');
console.log(diff);

// Show samples of actual content changes
const fullDiff = run('git diff -- src/content/recipes/');
const { added, removed } = countLines(fullDiff);
console.log(`   Total: +${added} lines added, -${removed} lines removed\n`);

// Show first 3 changed files as samples
const sampleFiles = changedFiles.slice(0, 3);
for (const f of sampleFiles) {
  const fileDiff = run(`git diff -- "${f}"`);
  const addedLines = fileDiff.match(/^\+[^+].*/gm) || [];
  if (addedLines.length > 0) {
    console.log(`   Sample from ${f}:`);
    for (const line of addedLines.slice(0, 3)) {
      console.log(`     ${line.slice(0, 100)}`);
    }
    console.log('');
  }
}

// ─── Step 4: Lint all changed files ──────────────────────────────────────────

console.log('🔍 Running quality checks on changed files...\n');

let lintPassed = true;
try {
  execSync(`node scripts/lint-recipe.mjs ${changedFiles.join(' ')}`, { stdio: 'inherit' });
} catch {
  lintPassed = false;
}

// ─── Step 5: Decide fate ─────────────────────────────────────────────────────

if (!lintPassed) {
  console.log('\n🚫 Quality checks FAILED. Reverting all changes...');
  run('git checkout -- src/content/recipes/');
  console.log('   All recipe changes reverted.');
  if (status) {
    console.log('   Restoring stash...');
    run('git stash pop');
  }
  console.log('\n   Fix the batch script and try again.');
  process.exit(1);
}

console.log('\n✅ Quality checks passed.');

if (autoAccept) {
  console.log('   --auto-accept: keeping changes.');
} else {
  console.log('   Changes are in your working tree. Review with `git diff`.');
  console.log('   To revert: `git checkout -- src/content/recipes/`');
}

if (status) {
  console.log('   Restoring stash...');
  run('git stash pop');
}

process.exit(0);
