// Side-by-side check of the agent search endpoint against the site's search box.
// Prints each question's top five from both, so a change to either ranking can be judged on
// the same realistic questions. Run: node scripts/agent-search-compare.mjs
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  buildAgentSearchRecord,
  createAgentIndex,
  searchAgentIndex,
  describeFilters,
} from '../src/lib/agent-search.mjs';
import { buildSearchItem, createSearchIndex, searchRecipes } from '../src/lib/recipe-search.mjs';

// Questions a person types in the box, then questions an agent passes on from its user.
export const COMPARISON_QUERIES = [
  'chicken thighs',
  'dal',
  'salmon',
  'pasta with sausage',
  'sweet potato',
  'gluten free dessert',
  'instant pot',
  'vegetarian dinner under 30 minutes the kids will eat',
  'what can I make with chicken, broccoli and rice',
  'quick weeknight pasta without mushrooms',
  'a make-ahead side dish for Thanksgiving',
  'dairy-free dessert for a party',
  'something cozy with lentils',
  'easy fish recipe in 20 minutes',
  'what should I serve with grilled steak',
  'a cocktail with mezcal',
  'how do I keep turkey from drying out',
  'Indian dish with chickpeas and spinach',
  'a breakfast I can freeze',
  'healthy lunch with tofu',
];

// The site search record needs the card description. The agent record already reads it the
// same way, so both searches see the same text.
function siteItems(recipes, records) {
  return recipes.map((recipe, i) =>
    buildSearchItem(recipe, {
      lessons: recipe.data.learning?.techniques || [],
      description: records[i].description,
    })
  );
}

export function compareQueries(recipes, queries = COMPARISON_QUERIES, top = 5) {
  const records = recipes.map(buildAgentSearchRecord);
  const agentIndex = createAgentIndex(records);
  const siteIndex = createSearchIndex(siteItems(recipes, records));
  return queries.map((q) => {
    const agent = searchAgentIndex(agentIndex, q, { limit: top });
    const site = searchRecipes(q, siteIndex);
    return {
      query: q,
      filters: describeFilters(agent),
      preferences: agent.preferences,
      site: { total: site.length, top: site.slice(0, top).map((r) => r.title) },
      agent: { total: agent.total, top: agent.results.map((r) => r.title) },
    };
  });
}

export function formatComparison(rows) {
  return rows
    .map((row) => {
      const lines = [`## ${row.query}`];
      const understood = [...row.filters, ...row.preferences.map((p) => `prefers ${p}`)];
      if (understood.length) lines.push(`Agent search read: ${understood.join(', ')}`);
      lines.push(`Site search (${row.site.total} hits): ${row.site.top.join(' | ') || 'nothing'}`);
      lines.push(`Agent search (${row.agent.total} hits): ${row.agent.top.join(' | ') || 'nothing'}`);
      return lines.join('\n');
    })
    .join('\n\n');
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const { loadRecipes } = await import('./tests/helpers-search-index.mjs');
  console.log(formatComparison(compareQueries(loadRecipes())));
}
