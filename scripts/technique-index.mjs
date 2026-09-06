import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const knowledge = path.join(root, 'src/knowledge');
const recipeDir = path.join(root, 'src/content/recipes');
const links = JSON.parse(fs.readFileSync(path.join(knowledge, 'technique-links.json'), 'utf8'));
const index = {};
for (const [technique, slugs] of Object.entries(links)) {
  const note = fs.readFileSync(path.join(knowledge, 'techniques', `${technique}.md`), 'utf8');
  const title = note.match(/^# (.+)$/m)?.[1] || technique;
  if (new Set(slugs).size !== slugs.length) throw new Error(`Duplicate example in ${technique}`);
  for (const slug of slugs) {
    const recipe = matter(fs.readFileSync(path.join(recipeDir, `${slug}.md`), 'utf8'));
    if (!recipe.data.learning?.review)
      throw new Error(`Example needs individual editorial review: ${slug}`);
  }
  index[technique] = { title, recipes: [...slugs].sort() };
}
fs.writeFileSync(
  path.join(knowledge, 'technique-index.json'),
  JSON.stringify(index, null, 2) + '\n'
);
let md =
  '# Technique Recipe Cross-Reference\n\nExplicitly selected examples from individually reviewed recipes. This is a partial index, not a census of every recipe that might use a technique. Empty lists mean examples have not yet been confirmed. The underlying legacy technique notes need their own scientific review; these links do not certify those notes.\n\nMaintain `technique-links.json` after considered recipe review. Never add matches from broad words such as “sauce” or “butter.” The public learning kitchen is defined separately in `src/data/techniques.ts`.\n\n';
for (const [slug, item] of Object.entries(index)) {
  md += `## ${item.title}\n\nTechnique: \`${slug}\`\n\n`;
  md += item.recipes.length
    ? item.recipes.map((recipe) => `- \`${recipe}\`\n`).join('')
    : 'No confirmed examples recorded yet.\n';
  md += '\n';
}
fs.writeFileSync(path.join(knowledge, 'technique-recipe-map.md'), md.trimEnd() + '\n');
console.log(
  `${Object.keys(index).length} techniques; ${new Set(Object.values(index).flatMap((item) => item.recipes)).size} explicitly reviewed recipe examples.`
);
