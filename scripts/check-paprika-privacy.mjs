import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { readIdentities } from './lib/paprika-identities.mjs';
import { loadRecipes } from './lib/recipe-exports.mjs';

export async function checkPaprikaPrivacyFiles(
  files,
  registry = null,
  sourceIds = [],
  allowedSourceBindings = new Map()
) {
  const tokens = [
    ...sourceIds,
    ...(registry
      ? [...registry.recipes, ...registry.drafts].flatMap((entry) => [
          entry.miseId,
          entry.paprikaUid,
          ...(entry.additionalPaprikaUids || []),
        ])
      : []),
  ].filter(Boolean);
  const problems = [];
  for (const file of files) {
    if (/\.paprikarecipes?$|paprika-identities\.json$/.test(file))
      problems.push(`${file}: private Paprika artifact`);
    if (!/\.(?:html|json|js|txt|xml|css|svg|map|md)$/.test(file)) continue;
    let text = await fs.readFile(file, 'utf8');
    const sourceId = allowedSourceBindings.get(path.resolve(file));
    if (sourceId) text = text.replace(`miseId: ${sourceId}\n`, '');
    if (
      /\b(?:paprikaUid|paprikaAdditionalUids|miseId)\s*["']?\s*:/.test(text) ||
      /["']uid["']\s*:\s*["'][0-9a-z_-]{32,}["']/i.test(text) ||
      /\bUID\s+`[0-9a-z_-]{32,}`/i.test(text) ||
      tokens.some((token) => text.includes(token))
    )
      problems.push(`${file}: private recipe identity metadata`);
  }
  if (problems.length) throw new Error(problems.join('\n'));
}

export async function checkPaprikaPrivacy(
  directory,
  registry = null,
  sourceIds = [],
  allowedSourceBindings = new Map()
) {
  const files = [];
  async function visit(folder) {
    for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
      const file = path.join(folder, entry.name);
      if (entry.isDirectory()) await visit(file);
      else if (entry.isFile()) files.push(file);
    }
  }
  await visit(directory);
  await checkPaprikaPrivacyFiles(files, registry, sourceIds, allowedSourceBindings);
}

export async function checkPublicPaprikaEvidence(registry = null, sourceIds = []) {
  // The three tracked, incomplete recipe sources keep their existing stable
  // Mise bindings. No native Paprika UID is allowed in public evidence.
  const allowed = new Map();
  for (const slug of ['stuffed-shells-gemini', 'veggie-quesadillas', 'yinyins-wontons']) {
    const file = path.resolve(`docs/paprika-sync/drafts/${slug}.md`);
    const id = (await fs.readFile(file, 'utf8')).match(/^miseId: ([\w-]+)$/m)?.[1];
    if (id) allowed.set(file, id);
  }
  await checkPaprikaPrivacy('docs', registry, sourceIds, allowed);
  const trackedExports = execFileSync('git', ['ls-files', '-z', 'exports', 'public'], {
    encoding: 'utf8',
  })
    .split('\0')
    .filter(Boolean);
  await checkPaprikaPrivacyFiles(trackedExports, registry, sourceIds);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const registry = await readIdentities(undefined, true);
    const sourceIds = (await loadRecipes()).map((recipe) => recipe.data.miseId).filter(Boolean);
    await checkPaprikaPrivacy(process.argv[2] || 'dist', registry, sourceIds);
    await checkPublicPaprikaEvidence(registry, sourceIds);
    console.log('Published assets and public evidence contain no native Paprika IDs or archives.');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
