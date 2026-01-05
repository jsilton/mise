const fs = require('fs');

const batch1Italian = [
  'anelletti-al-forno',
  'baked-chicken-parmesan', 
  'butternut-squash-fettuccine-alfredo',
  'chicken-piccata-unfried',
  'chicken-milanese',
  'spaghetti-carbonara'
];

batch1Italian.forEach(slug => {
  const content = fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8');
  const title = content.match(/title:\s*["']?([^"'\n]+)/)?.[1] || slug;
  const noteMatch = content.match(/## Chef's Note\n\n([^\n]+(?:\n(?!##)[^\n]+)*)/);
  
  console.log(`\n=== ${title} (${slug}) ===`);
  if (noteMatch) {
    console.log(noteMatch[1].substring(0, 300).replace(/\n/g, ' '));
  } else {
    console.log('NO CHEF NOTE FOUND');
  }
});
