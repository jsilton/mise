import fs from 'fs';
import path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const recipesDir = path.join(process.cwd(), 'src/content/recipes');

function fixBoldHeaders() {
  let fixedCount = 0;
  const fixes = [];

  const files = fs.readdirSync(recipesDir).filter(f => f.endsWith('.md'));

  for (const filename of files) {
    const filepath = path.join(recipesDir, filename);
    let content = fs.readFileSync(filepath, 'utf8');

    const directionsMatch = content.match(/^## Directions\n([\s\S]*?)(?:^## |\Z)/m);
    if (directionsMatch === null) continue;

    const directionsIndex = content.indexOf('## Directions\n');
    const directionsEnd = content.indexOf('\n## ', directionsIndex + 1);
    const endIndex = directionsEnd === -1 ? content.length : directionsEnd;
    
    let directionsText = content.slice(directionsIndex, endIndex);
    const originalDirections = directionsText;
    
    const lines = directionsText.split('\n');
    let modified = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      const numberMatch = line.match(/^(\d+\.\s+)(.+)$/);
      if (numberMatch) {
        const number = numberMatch[1];
        const rest = numberMatch[2];
        
        if (rest.startsWith('**')) continue;
        
        const words = rest.split(/\s+/);
        let boldPart = words[0];
        
        if (boldPart.endsWith(':')) {
          boldPart = boldPart.slice(0, -1);
          lines[i] = number + '**' + boldPart + ':** ' + words.slice(1).join(' ');
        } else {
          let wordCount = 1;
          while (wordCount < 4 && wordCount < words.length && boldPart.length < 30) {
            boldPart += ' ' + words[wordCount];
            wordCount++;
          }
          const remainingWords = words.slice(wordCount).join(' ');
          lines[i] = number + '**' + boldPart + ':** ' + remainingWords;
        }
        
        modified = true;
      }
    }
    
    if (modified) {
      directionsText = lines.join('\n');
      content = content.slice(0, directionsIndex) + directionsText + content.slice(endIndex);
      fixedCount++;
      
      const originalLine = originalDirections.split('\n').find(l => {
        return l.match(/^\d+\.\s+/) && l.match(/^\d+\.\s+\*\*/) === null;
      });
      const fixedLine = directionsText.split('\n').find(l => l.match(/^\d+\.\s+\*\*/));
      
      fixes.push({
        file: filename,
        original: originalLine ? originalLine.substring(0, 75) : '',
        fixed: fixedLine ? fixedLine.substring(0, 75) : ''
      });
      
      if (DRY_RUN === false) {
        fs.writeFileSync(filepath, content, 'utf8');
      }
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('BOLD HEADERS FIX REPORT' + (DRY_RUN ? ' (DRY RUN)' : ''));
  console.log('='.repeat(70) + '\n');
  console.log('Recipes fixed: ' + fixedCount);
  
  if (fixes.length > 0) {
    console.log('\nFixed recipes:');
    fixes.forEach(fix => {
      console.log('\n  File: ' + fix.file);
      console.log('  Before: ' + fix.original);
      console.log('  After:  ' + fix.fixed);
    });
  }
  
  if (DRY_RUN) {
    console.log('\nRun without --dry-run to apply changes.');
  } else {
    console.log('\nChanges applied successfully.');
  }
  
  console.log('\n' + '='.repeat(70) + '\n');
}

fixBoldHeaders();
