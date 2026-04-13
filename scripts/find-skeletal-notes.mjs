import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const recipesDir = path.join(__dirname, "../src/content/recipes");

const genericPhrases = [
  /^this is a classic/i,
  /^a simple/i,
  /^a traditional/i,
  /^this recipe is/i,
  /^this is a/i,
  /^a quick/i,
  /^an easy/i,
  /^this dish/i,
  /^here's a/i,
  /^try this/i,
  /^a great/i,
  /^perfect for/i,
];

function extractChefNote(fileContent) {
  const match = fileContent.match(/##\s+Chef's Note\s*\n([\s\S]*?)(?=\n##|\Z)/);
  return match ? match[1].trim() : null;
}

function analyzeNote(note) {
  if (\!note) return { length: 0, isGeneric: true, reason: "Missing Chef's Note section" };
  const length = note.length;
  const firstSentence = note.split(".")[0];
  if (length < 150) return { length, isGeneric: true, reason: `Very short (${length} chars)` };
  for (const phrase of genericPhrases) {
    if (phrase.test(firstSentence)) {
      return { length, isGeneric: true, reason: `Generic opening: "${firstSentence.substring(0, 60)}..."` };
    }
  }
  const hasCulturalMarkers = /\b(Chinese|Japanese|Italian|Mexican|Indian|Thai|Vietnamese|Korean|French|Greek|Middle Eastern|Cantonese|Sichuan|Mediterranean|Caribbean|Filipino|Brazilian|American|Southern|Jewish|Asian|African|European)\b/i.test(note) || /\b(home cooks?|tradition|classic|origins?|culture|heritage|technique|grandmother|abuela|nonna)\b/i.test(note) || /\b(indigenous|regional|local|authentic|ancestral)\b/i.test(note);
  if (\!hasCulturalMarkers && length < 250) return { length, isGeneric: true, reason: "Lacks cultural/regional context and is relatively short" };
  return { length, isGeneric: false, reason: null };
}

function main() {
  const files = fs.readdirSync(recipesDir).filter(f => f.endsWith(".md"));
  const skeletalRecipes = [];
  for (const file of files) {
    const filePath = path.join(recipesDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const note = extractChefNote(content);
    const analysis = analyzeNote(note);
    if (analysis.isGeneric) {
      const slug = file.replace(/\.md$/, "");
      const firstHundred = note ? note.substring(0, 100).replace(/\n/g, " ") : "";
      skeletalRecipes.push({ slug, length: analysis.length, preview: firstHundred + (note && note.length > 100 ? "..." : ""), reason: analysis.reason });
    }
  }
  skeletalRecipes.sort((a, b) => a.length - b.length);
  console.log(JSON.stringify(skeletalRecipes, null, 2));
}

main();
