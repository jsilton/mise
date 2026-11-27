// Writes the agent search index. The site build calls this (see astro.config.mjs) to publish
// agent-search/index.json beside the pages, and `pnpm run agent-search:worker` writes the copy
// the Worker in worker/agent-search bundles to answer /.well-known/search.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadRecipes } from './lib/recipe-exports.mjs';
import { buildAgentSearchRecord } from '../src/lib/agent-search.mjs';

export const AGENT_INDEX_PATH = 'dist/agent-search/index.json';
// The same recipes the home page search leaves out: play dough is a kids' craft, not food.
export const HIDDEN_FROM_SEARCH = ['no-cook-playdough', 'play-dough'];

export function agentIndexRecords(recipes) {
  return recipes
    .filter((recipe) => !HIDDEN_FROM_SEARCH.includes(recipe.slug))
    .map(buildAgentSearchRecord);
}

export async function exportAgentIndex(outputPath = path.resolve(AGENT_INDEX_PATH), recipes = null) {
  recipes ||= await loadRecipes();
  const records = agentIndexRecords(recipes);
  if (!records.length) throw new Error('agent search index is empty');
  for (const r of records)
    if (!r.title || !r.url.startsWith('https://jordansilton.com/mise/recipes/'))
      throw new Error(`${r.slug}: agent search record has no title or canonical URL`);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(records));
  return records.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  exportAgentIndex(process.argv[2])
    .then((count) => console.log(`Wrote ${count} recipes to the agent search index.`))
    .catch((error) => {
      console.error('Agent index failed:', error.message);
      process.exitCode = 1;
    });
}
