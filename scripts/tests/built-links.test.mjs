import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { checkBuiltLinks } from '../check-built-links.mjs';

test('rendered meal links are resolved from the actual nested page URL', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'mise-links-'));
  try {
    fs.mkdirSync(path.join(root, 'meals/dinner'), { recursive: true });
    fs.mkdirSync(path.join(root, 'recipes/rice'), { recursive: true });
    fs.writeFileSync(path.join(root, 'recipes/rice/index.html'), '<h1>Rice</h1>');
    const page = path.join(root, 'meals/dinner/index.html');
    fs.writeFileSync(page, '<a href="../recipes/rice">Rice</a>');
    assert.deepEqual(checkBuiltLinks(root).missing, [
      {
        page: 'meals/dinner/index.html',
        href: '../recipes/rice',
        resolved: '/mise/meals/recipes/rice',
      },
    ]);
    fs.writeFileSync(
      page,
      '<a href="/mise/recipes/rice/?batch=2&amp;view=shopping#ingredients">Rice</a>'
    );
    assert.equal(checkBuiltLinks(root).missing.length, 0);
    fs.writeFileSync(page, '<a href="../../recipes/rice">Rice</a>');
    assert.equal(checkBuiltLinks(root).missing.length, 0);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('the built link check ignores external links and script and comment text', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'mise-links-'));
  try {
    fs.writeFileSync(
      path.join(root, 'index.html'),
      `
      <a href="https://example.com/missing">Source</a><a href="mailto:cook@example.com">Email</a>
      <script>const sample = '<a href="/mise/missing">Example</a>';</script>
      <!-- <a href="/mise/missing">Comment</a> -->
      <a href="/mise/missing?query=1#step">Missing</a>`
    );
    const report = checkBuiltLinks(root);
    assert.equal(report.checked, 1);
    assert.equal(report.missing.length, 1);
    assert.equal(report.missing[0].resolved, '/mise/missing');
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
