import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'astro/zod';
import {
  createFormulaSchema,
  formulaIngredients,
  formulaYield,
  formulaDirections,
} from '../src/lib/recipe-formula.mjs';
const args = process.argv.slice(2);
const check = args.includes('--check');
const slugs = args.filter((s) => s !== '--check');
const dir = 'src/content/recipes';
const files = slugs.length
  ? slugs.map((s) => {
      if (!/^[a-z0-9-]+$/.test(s)) throw new Error('Use recipe slugs');
      return s + '.md';
    })
  : fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
let count = 0;
let failed = false;
for (const file of files) {
  const filename = path.join(dir, file);
  const raw = fs.readFileSync(filename, 'utf8');
  const parsed = matter(raw);
  if (!parsed.data.formula) continue;
  count++;
  try {
    const formula = createFormulaSchema(z).parse(parsed.data.formula);
    const ingredients = formulaIngredients(formula);
    const servings = formulaYield(formula);
    const directions = formulaDirections(formula);
    const section = /^## Directions\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m;
    const current = parsed.content.match(section);
    if (!current) throw new Error('Missing Directions section');
    if (check) {
      if (
        JSON.stringify(parsed.data.ingredients) !== JSON.stringify(ingredients) ||
        parsed.data.servings !== servings ||
        current[1].trim() !== directions.trim()
      )
        throw new Error(
          'Generated fields/directions are stale; run npm run recipe:compile -- ' +
            file.slice(0, -3)
        );
    } else {
      parsed.data.ingredients = ingredients;
      parsed.data.servings = servings;
      const content = parsed.content.replace(section, () => `## Directions\n\n${directions}\n\n`);
      fs.writeFileSync(filename, matter.stringify(content, parsed.data, { lineWidth: 100 }));
    }
  } catch (error) {
    failed = true;
    console.error(file + ': ' + error.message);
  }
}
console.log(`${count} structured recipes ${check ? 'checked' : 'compiled'}.`);
process.exitCode = failed ? 1 : 0;
