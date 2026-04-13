import fs from 'fs';
import matter from 'gray-matter';

function extractDirectionsText(content) {
  const m = content.match(/## Directions\n+([\s\S]*?)(?:\n## |$)/);
  return m ? m[1] : '';
}

function hasTextureTopping(directions) {
  if (!directions || typeof directions !== 'string') return false;
  const lowerDirs = directions.toLowerCase();

  const toppingKeywords = [
    'crouton', 'breadcrumb', 'fried', 'toast', 'crispy', 'crunch',
    'seed', 'nut', 'flake', 'tortilla strip', 'papadum', 'cracker',
    'fried shallot', 'fried garlic', 'fried onion',
  ];

  return toppingKeywords.some(t => lowerDirs.includes(t));
}

const content = fs.readFileSync('src/content/recipes/chicken-and-wild-rice-soup.md', 'utf-8');
const { data, content: md } = matter(content);

const dirs = extractDirectionsText(md);
console.log('Directions text length:', dirs.length);
console.log('Has texture topping:', hasTextureTopping(dirs));
console.log('Directions content:');
console.log(dirs.substring(0, 200));
