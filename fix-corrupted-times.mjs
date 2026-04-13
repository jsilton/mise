import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RECIPES_DIR = path.join(__dirname, 'src/content/recipes');

const files = fs.readdirSync(RECIPES_DIR).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(RECIPES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const fixed = content.replace(/totalTime:\s*'([^']+)':\s*'[^']*'/g, "totalTime: '$1'");
  
  if (fixed \!== content) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    console.log(`Fixed ${file}`);
  }
});
