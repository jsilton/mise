import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TECH_DIR = path.join(__dirname, "../src/knowledge/techniques");
const RECIPE_DIR = path.join(__dirname, "../src/content/recipes");
const OUT_JSON = path.join(__dirname, "../src/knowledge/technique-index.json");
const OUT_MD = path.join(__dirname, "../src/knowledge/technique-recipe-map.md");

function parseFrontmatter(content) {
  const parts = content.split("---");
  if (parts.length < 3) return {};
  const fm = {};
  const lines = parts[1].split("\n");
  for (const line of lines) {
    if (!line.trim()) continue;
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) {
      let v = m[2].trim();
      if (v.startsWith("[") && v.endsWith("]")) {
        v = v.slice(1, -1).split(",").map(x => x.trim().replace(/['"]/g, "")).filter(Boolean);
      }
      fm[m[1]] = v;
    }
  }
  return fm;
}

function getTitle(c) {
  const m = c.match(/^# (.+)$/m);
  return m ? m[1] : null;
}

function slug(f) { return path.basename(f, ".md"); }

const techs = {};
for (const f of fs.readdirSync(TECH_DIR).filter(x => x.endsWith(".md"))) {
  const s = slug(f);
  const c = fs.readFileSync(path.join(TECH_DIR, f), "utf8");
  const t = getTitle(c);
  const kw = new Set();
  s.split("-").forEach(w => kw.add(w.toLowerCase()));
  ["wok", "brine", "braise", "sear", "velvet", "emulsif", "pasta", "sushi", "dam", "butter", "finish", "sauce"].forEach(k => {
    if (c.toLowerCase().includes(k)) kw.add(k);
  });
  techs[s] = { title: t || s, keywords: Array.from(kw) };
}

console.log("Found", Object.keys(techs).length, "techniques");

const recipes = {};
for (const f of fs.readdirSync(RECIPE_DIR).filter(x => x.endsWith(".md"))) {
  const s = slug(f);
  const c = fs.readFileSync(path.join(RECIPE_DIR, f), "utf8");
  const fm = parseFrontmatter(c);
  const parts = c.split("---");
  const dir = parts[2] ? parts[2].toLowerCase() : "";
  recipes[s] = { title: fm.title || s, cookingMethods: fm.cookingMethods || [], directions: dir };
}

console.log("Found", Object.keys(recipes).length, "recipes");

function matches(r, t) {
  const kw = techs[t].keywords;
  const methods = Array.isArray(r.cookingMethods) ? r.cookingMethods : [];
  for (const m of methods) {
    if (kw.some(k => m.toLowerCase().includes(k))) return true;
  }
  for (const k of kw) {
    if (r.directions.includes(k)) return true;
  }
  return false;
}

const idx = {};
for (const t of Object.keys(techs)) {
  const recs = [];
  for (const r of Object.keys(recipes)) {
    if (matches(recipes[r], t)) recs.push(r);
  }
  idx[t] = { title: techs[t].title, recipes: recs.sort() };
}

fs.writeFileSync(OUT_JSON, JSON.stringify(idx, null, 2));
console.log("✓ Written", OUT_JSON);

const stats = [];
for (const [k, v] of Object.entries(idx)) {
  stats.push({ tech: v.title, slug: k, count: v.recipes.length });
}
stats.sort((a, b) => b.count - a.count);

let md = "# Technique Recipe Cross-Reference\n\nMaps which recipes demonstrate each culinary technique.\n\n## Overview\n\n";
const total = new Set(Object.values(idx).flatMap(d => d.recipes)).size;
md += "Total Recipes: " + total + "\nTotal Techniques: " + Object.keys(idx).length + "\n\n";

const under = stats.filter(s => s.count < 5);
if (under.length > 0) {
  md += "### Underrepresented Techniques (< 5 recipes)\n\n";
  for (const u of under) {
    md += "- **" + u.tech + "** (" + u.slug + "): " + u.count + " recipe" + (u.count !== 1 ? "s" : "") + "\n";
  }
  md += "\n";
}

md += "## Summary\n\n| Technique | Slug | Recipe Count |\n|-----------|------|-------------|\n";
for (const s of stats) {
  md += "| " + s.tech + " | `" + s.slug + "` | " + s.count + " |\n";
}

md += "\n## Recipes by Technique\n\n";
for (const s of stats) {
  md += "### " + idx[s.slug].title + "\n**Slug:** `" + s.slug + "`\n\n";
  if (idx[s.slug].recipes.length === 0) {
    md += "*No recipes match this technique yet.*\n";
  } else {
    md += "Recipes:\n\n";
    for (const r of idx[s.slug].recipes) md += "- `" + r + "`\n";
  }
  md += "\n";
}

fs.writeFileSync(OUT_MD, md);
console.log("✓ Written", OUT_MD);

console.log("\n=== Statistics ===\n");
console.log("Recipes per technique:\n");
for (const s of stats) {
  const b = "█".repeat(Math.ceil(s.count / 5));
  console.log("  " + s.tech.padEnd(30) + " " + b + " " + s.count);
}

console.log("");
console.log("Total unique recipes: " + total);
console.log("Coverage: " + (total / Object.keys(recipes).length * 100).toFixed(1) + "% of recipes");

if (under.length > 0) {
  console.log("");
  console.log("⚠  " + under.length + " underrepresented techniques (< 5 recipes):");
  for (const u of under) console.log("    - " + u.tech + " (" + u.count + ")");
}

console.log("\n=== Index Complete ===");
