import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import matter from 'gray-matter';
import { timeToMinutes } from '../src/lib/time.mjs';

export function reviewRecipe({ slug, data, content }, knownSlugs) {
  const issues = [];
  const add = (code, severity, message) => issues.push({ code, severity, message });
  const directions = content.match(/^## Directions\s*\n([\s\S]*?)(?=^## |(?![\s\S]))/m)?.[1] || '';
  const steps = [...directions.matchAll(/^\d+\.\s+/gm)];
  if (!steps.length) add('missing-method', 'error', 'No numbered directions found.');
  if (!data.ingredients?.length) add('missing-ingredients', 'error', 'Ingredients are missing.');
  for (const field of ['prepTime', 'cookTime', 'totalTime', 'servings'])
    if (!data[field]) add('missing-' + field, 'review', `${field} needs a useful value.`);
  const prep = timeToMinutes(data.prepTime),
    cook = timeToMinutes(data.cookTime),
    total = timeToMinutes(data.totalTime);
  if (prep !== null && cook !== null && total !== null && total < prep + cook)
    add(
      'time-conflict',
      'review',
      `Total (${total} min) is less than prep + cook (${prep + cook} min); confirm any overlap explicitly.`
    );
  for (const ref of [
    ...(data.pairsWith || []),
    ...(data.usesBase || []),
    ...(data.isVariationOf ? [data.isVariationOf] : []),
  ])
    if (!knownSlugs.has(ref)) add('broken-reference', 'error', `Unknown recipe: ${ref}`);
  for (const link of content.matchAll(/\]\((?:\/mise)?\/recipes\/([^\s)#/]+)\/?(?:#[^)]*)?\)/g))
    if (!knownSlugs.has(link[1]))
      add('broken-body-link', 'error', `Unknown recipe in body: ${link[1]}`);
  const learning = data.learning;
  if (!learning)
    add(
      'teaching-review-needed',
      'review',
      'Add individually reviewed outcomes, preparation, step cues and reasons, troubleshooting, substitutions, storage, timing, and sources.'
    );
  else {
    for (const field of ['focus', 'outcome', 'storage', 'timing'])
      if (!learning[field]?.trim())
        add('incomplete-learning', 'error', `Learning field ${field} is empty.`);
    for (const field of ['before', 'checkpoints', 'troubleshooting', 'techniques', 'sources'])
      if (!learning[field]?.length)
        add('incomplete-learning', 'error', `Learning field ${field} needs entries.`);
    for (const point of learning.checkpoints || [])
      if (!Number.isInteger(point.step) || point.step < 1 || point.step > steps.length)
        add(
          'invalid-checkpoint',
          'error',
          `Checkpoint points to step ${point.step}; method has ${steps.length} steps.`
        );
    if (!['editorial-review', 'kitchen-tested'].includes(learning.review?.status))
      add('missing-review-status', 'error', 'A supported review status is required.');
    if (learning.review?.status === 'kitchen-tested' && !learning.review.testNotes?.trim())
      add(
        'unsupported-testing-claim',
        'error',
        'Kitchen-tested requires a documented kitchen test.'
      );
    for (const source of learning.sources || []) {
      try {
        const url = new URL(source.url);
        if (!['https:', 'http:'].includes(url.protocol)) throw new Error();
      } catch {
        add('invalid-source', 'error', 'Source needs a valid HTTP(S) URL.');
      }
    }
  }
  // Triage signals, never a food safety certification or a culinary score.
  const rawPoultry = (data.ingredients || []).some(
    (ingredient) =>
      /\b(?:chicken|turkey|duck)\s+(?:breasts?|thighs?|wings?|drumsticks?|legs?|cutlets?|tenderloins?)\b|\b(?:ground|whole|young) (?:chicken|turkey|duck)\b/i.test(
        ingredient
      ) && !/\b(?:rotisserie|cooked|leftover|canned)\b/i.test(ingredient)
  );
  if (rawPoultry && !/165\s*°?\s*f|74\s*°?\s*c|pasteuri[sz]/i.test(directions))
    add(
      'poultry-endpoint-review',
      'priority',
      'Review raw-poultry endpoint; no 165°F / 74°C or documented pasteurization guidance found in directions.'
    );
  const promisesCarryover = directions
    .split(/(?<=[.!?])\s+/)
    .some(
      (sentence) =>
        !/\b(?:do not|don't|never)\s+(?:assume|rely)\b|\b(?:cannot|can't|not guaranteed|unreliable)\b/i.test(
          sentence
        ) &&
        /\b(?:carryover(?:\s+(?:cooking|heat))?\s+will\s+(?:bring|take|raise)|will\s+(?:carry(?:\s+over)?|rise))[^.!?\n]{0,60}\b165\s*°?\s*f\b/i.test(
          sentence
        )
    );
  if (rawPoultry && promisesCarryover)
    add(
      'poultry-carryover-review',
      'priority',
      'Review the promised temperature rise after removal from heat. Confirm a measured endpoint or documented process; mentioning 165°F does not establish that it was reached.'
    );
  if (
    /seal(?:s|ing)? in (?:the )?juices|locks? in (?:the )?(?:moisture|juices)/i.test(content) &&
    !/does(?: not|n't)|not seal|not lock/i.test(content)
  )
    add('science-claim-review', 'priority', 'Review the claim that searing seals in juices.');
  if (data.nutrition)
    add(
      'nutrition-verification',
      'review',
      'Legacy nutrition is withheld from the page pending ingredient-weight and yield verification.'
    );
  if (['no-cook-playdough', 'play-dough'].includes(slug))
    add(
      'non-food-content',
      'review',
      'Craft recipe: excluded from food discovery, source retained for editorial decision.'
    );
  return {
    slug,
    title: data.title,
    status: learning?.review?.status || 'collection',
    stepCount: steps.length,
    issues,
  };
}
export function runEditorialAudit() {
  const dir = path.resolve('src/content/recipes');
  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort();
  const knownSlugs = new Set(files.map((f) => f.slice(0, -3)));
  const recipes = files.map((file) => {
    const parsed = matter(readFileSync(path.join(dir, file), 'utf8'));
    return reviewRecipe({ slug: file.slice(0, -3), ...parsed }, knownSlugs);
  });
  const all = recipes.flatMap((r) => r.issues);
  const report = {
    summary: {
      recipes: recipes.length,
      editoriallyReviewed: recipes.filter((r) => r.status === 'editorial-review').length,
      kitchenTested: recipes.filter((r) => r.status === 'kitchen-tested').length,
      errors: all.filter((i) => i.severity === 'error').length,
      priorityReviews: all.filter((i) => i.severity === 'priority').length,
      reviewItems: all.filter((i) => i.severity === 'review').length,
    },
    limitations:
      'Automated triage only. Does not establish culinary quality, food safety, source validity, or kitchen testing.',
    recipes,
  };
  mkdirSync('docs', { recursive: true });
  writeFileSync('docs/recipe-editorial-audit.json', JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report.summary, null, 2));
  console.log('Full queue: docs/recipe-editorial-audit.json');
  for (const r of recipes)
    for (const i of r.issues.filter((i) => i.severity === 'error'))
      console.error(`${r.slug}: ${i.message}`);
  return report;
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const report = runEditorialAudit();
  process.exitCode = report.summary.errors ? 1 : 0;
}
