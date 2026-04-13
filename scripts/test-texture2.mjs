import fs from 'fs';
import matter from 'gray-matter';

function extractDirectionsText(content) {
  const m = content.match(/## Directions\n+([\s\S]*?)(?:\n## |$)/);
  return m ? m[1] : '';
}

const content = fs.readFileSync('src/content/recipes/chicken-and-wild-rice-soup.md', 'utf-8');
const { data, content: md } = matter(content);

const dirs = extractDirectionsText(md);
const lowerDirs = dirs.toLowerCase();

const toppingKeywords = [
  'crouton', 'breadcrumb', 'fried', 'toast', 'crispy', 'crunch',
  'seed', 'nut', 'flake', 'tortilla strip', 'papadum', 'cracker',
  'fried shallot', 'fried garlic', 'fried onion',
];

console.log('Checking keywords:');
toppingKeywords.forEach(t => {
  if (lowerDirs.includes(t)) {
    console.log(`  YES: "${t}"`);
  }
});
