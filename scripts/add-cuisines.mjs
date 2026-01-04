#!/usr/bin/env node

import fs from 'fs';
import { readdirSync } from 'fs';

// Map of recipe keywords/origins to cuisines
const cuisineMap = {
  Italy: ['Italian'],
  China: ['Chinese'],
  Japan: ['Japanese'],
  Thailand: ['Thai'],
  Vietnam: ['Vietnamese'],
  Korea: ['Korean'],
  India: ['Indian'],
  Mexico: ['Mexican'],
  Greece: ['Greek'],
  Spain: ['Spanish'],
  France: ['French'],
  Lebanon: ['Middle Eastern', 'Lebanese'],
  'Middle East': ['Middle Eastern'],
  USA: ['American'],
  Israel: ['Israeli'],
  'United Kingdom': ['British'],
  Brazil: ['Brazilian'],
  Portugal: ['Portuguese'],
  Philippines: ['Filipino'],
  Caribbean: ['Caribbean'],
};

// Keyword-based cuisine detection
const detectCuisinesByTitle = (title) => {
  const titleLower = title.toLowerCase();
  const cuisines = new Set();

  if (titleLower.includes('phở') || titleLower.includes('pho') || titleLower.includes('banh mi')) cuisines.add('Vietnamese');
  if (titleLower.includes('pad thai') || titleLower.includes('pad kee mao') || titleLower.includes('curry')) cuisines.add('Thai');
  if (titleLower.includes('sushi') || titleLower.includes('miso') || titleLower.includes('ramen') || titleLower.includes('kare raisu')) cuisines.add('Japanese');
  if (titleLower.includes('bibimbap') || titleLower.includes('bulgogi') || titleLower.includes('kimchi') || titleLower.includes('kalbi')) cuisines.add('Korean');
  if (titleLower.includes('tikka') || titleLower.includes('samosa') || titleLower.includes('naan') || titleLower.includes('keema')) cuisines.add('Indian');
  if (titleLower.includes('taco') || titleLower.includes('enchilada') || titleLower.includes('tamale') || titleLower.includes('chili')) cuisines.add('Mexican');
  if (titleLower.includes('risotto') || titleLower.includes('carbonara') || titleLower.includes('pesto') || titleLower.includes('alfredo')) cuisines.add('Italian');
  if (titleLower.includes('wonton') || titleLower.includes('dim sum') || titleLower.includes('shumai') || titleLower.includes('chow fun')) cuisines.add('Chinese');
  if (titleLower.includes('tzatziki') || titleLower.includes('avgolemono') || titleLower.includes('souvlaki')) cuisines.add('Greek');
  if (titleLower.includes('toum') || titleLower.includes('hummus') || titleLower.includes('kabob')) cuisines.add('Lebanese');
  if (titleLower.includes('gazpacho') || titleLower.includes('paella')) cuisines.add('Spanish');
  if (titleLower.includes('roux') || titleLower.includes('coq au vin')) cuisines.add('French');

  return Array.from(cuisines);
};

const files = readdirSync('src/content/recipes').filter(f => f.endsWith('.md')).map(f => `src/content/recipes/${f}`);
let updated = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Check if cuisines field exists
  if (content.includes('cuisines:')) {
    return; // Already has cuisines
  }

  const titleMatch = content.match(/^title: (.+?)$/m);
  const originMatch = content.match(/^origin: (.+?)$/m);

  if (!titleMatch) return;

  const title = titleMatch[1];
  const origin = originMatch?.[1];

  let cuisines = detectCuisinesByTitle(title);

  // Add cuisine from origin if available
  if (origin && cuisineMap[origin]) {
    cuisines = [...new Set([...cuisines, ...cuisineMap[origin]])];
  }

  if (cuisines.length === 0) {
    // Fallback: check if origin provides a cuisine
    if (origin) {
      const originCuisine = origin.replace(/[^a-zA-Z\s]/g, '').trim();
      cuisines = [originCuisine];
    } else {
      cuisines = []; // No cuisine detected
    }
  }

  // Insert cuisines field after difficulty or after origin
  const insertAfter = content.match(/^(difficulty:.+?)(\nrole:|$)/m);
  if (!insertAfter) return;

  const roleIdx = content.indexOf('\nrole:');
  if (roleIdx === -1) return;

  const cuisineStr = cuisines.length > 0 ? `cuisines: [${cuisines.map(c => `${c}`).join(', ')}]` : `cuisines: []`;
  const insertion = `\n${cuisineStr}`;

  content = content.slice(0, roleIdx) + insertion + content.slice(roleIdx);
  fs.writeFileSync(file, content);

  console.log(`✓ ${file} | Added cuisines: ${cuisines.join(', ') || '(empty)'}`);
  updated++;
});

console.log(`\n✅ Added cuisines to ${updated} recipes.`);
