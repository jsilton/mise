#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { readdirSync } from 'fs';

const renameMap = {
  'Arroz Rojo (Mexican Red Rice)': { title: 'Arroz Rojo', origin: 'Mexico' },
  "Bernard's Style Roast Pork (Char Siu)": { title: 'Char Siu', origin: 'China' },
  'Best Cinnamon Roll Recipe (Cinnabon Copycat)': { title: 'Cinnamon Rolls' },
  "Boston Style Peking Ravioli (Bernard's Clone)": { title: 'Peking Ravioli', origin: 'China' },
  'Cantonese Shumai (Siu Mai)': { title: 'Shumai', origin: 'China' },
  'Chana Begoon (Chickpea and Eggplant Curry)': { title: 'Chana Begoon', origin: 'India' },
  'Char Siu (Chinese BBQ Pork)': { title: 'Char Siu', origin: 'China' },
  'Chicken Pho (Phở Gà)': { title: 'Phở Gà', origin: 'Vietnam' },
  'Chicken Tinga (Smoky Shredded Chicken)': { title: 'Chicken Tinga', origin: 'Mexico' },
  'Chipotle Pork & Sweet Corn "Tamale" Bowls': { title: 'Pork and Corn Bowls', origin: 'Mexico' },
  'Classic Martini (Chilled)': { title: 'Martini', origin: 'USA' },
  'Dashi (Japanese Sea Stock)': { title: 'Dashi', origin: 'Japan' },
  'Drunken Noodles (Pad Kee Mao)': { title: 'Pad Kee Mao', origin: 'Thailand' },
  'Easy Baked Turkey Meatballs': { title: 'Turkey Meatballs' },
  'Easy Breakfast Yogurt Popsicles': { title: 'Yogurt Popsicles' },
  'Easy Chia Pudding': { title: 'Chia Pudding' },
  'Easy Overnight Oats': { title: 'Overnight Oats' },
  'Easy Pan-Seared Chicken Breasts': { title: 'Pan-Seared Chicken Breasts' },
  'Easy Spinach Gnocchi (Gnudi)': { title: 'Spinach Gnocchi', origin: 'Italy' },
  'Easy Wonton Soup': { title: 'Wonton Soup', origin: 'China' },
  'Egg Roll in a Bowl (Crack Slaw)': { title: 'Egg Roll in a Bowl' },
  'Enchiladas Suizas (Green Chile Chicken)': { title: 'Enchiladas Suizas', origin: 'Mexico' },
  'Garlic Paste (Toum)': { title: 'Toum', origin: 'Lebanon' },
  'Garlic-Sesame Spinach (Sigeumchi Namul)': { title: 'Sigeumchi Namul', origin: 'Korea' },
  'Greek Lemon Chicken Soup (Avgolemono)': { title: 'Avgolemono', origin: 'Greece' },
  'Har Gow (Dim Sum Shrimp Dumplings)': { title: 'Har Gow (Shrimp Dumplings)', origin: 'China' },
  'Honey Sesame Chicken (Pan-Seared)': { title: 'Honey Sesame Chicken' },
  'Japanese Chicken Curry (Kare Raisu)': { title: 'Kare Raisu', origin: 'Japan' },
  'Kalbi (Grilled Korean-Style Short Ribs)': { title: 'Kalbi', origin: 'Korea' },
  'Korean Mung Bean Sprouts Salad (Sukju Namul)': { title: 'Sukju Namul', origin: 'Korea' },
  'Korean Pickled Cucumbers (Oi Muchim)': { title: 'Oi Muchim', origin: 'Korea' },
  'Lamb Keema Matar (Spiced Mince with Peas)': { title: 'Lamb Keema Matar', origin: 'India' },
  'Mexican Street Corn Salad (Esquites)': { title: 'Esquites', origin: 'Mexico' },
  'Pad See Ew (Thai Stir-Fried Noodles)': { title: 'Pad See Ew', origin: 'Thailand' },
  'Quick & Easy Caprese Pasta': { title: 'Caprese Pasta' },
  'Quick & Easy Drop Biscuits': { title: 'Drop Biscuits' },
  'Quick Honey Garlic Shrimp & Broccoli': { title: 'Honey Garlic Shrimp and Broccoli' },
  'Quick Lamb Ragù': { title: 'Lamb Ragù', origin: 'Italy' },
  'Quick Pickled Carrots and Daikon (Do Chua)': { title: 'Do Chua', origin: 'Vietnam' },
  'Quick Pickled Red Onions': { title: 'Pickled Red Onions' },
  'Quick Seasoned Black Beans': { title: 'Seasoned Black Beans' },
  'Roasted Green Bean "Fries"': { title: 'Green Bean Fries' },
  'Shanghai Fried Noodles (Cu Chao Mian)': { title: 'Cu Chao Mian', origin: 'China' },
  'Spiced Butternut Squash Purée (The Thanksgiving Side)': { title: 'Butternut Squash Purée', origin: 'USA' },
  'The Best Belgian Waffles': { title: 'Belgian Waffles', origin: 'Belgium' },
  'The Best Chocolate Chip Cookies': { title: 'Chocolate Chip Cookies' },
  'The Best Chocolate Chip Cookies (Science-Backed)': { title: 'Chocolate Chip Cookies' },
  'The Chocolate Mug Cake': { title: 'Chocolate Mug Cake' },
  'The Easiest Spinach Lasagna': { title: 'Spinach Lasagna', origin: 'Italy' },
  'The Frittata': { title: 'Frittata', origin: 'Italy' },
  'The Kitchen Standard Apple Pie': { title: 'Apple Pie', origin: 'USA' },
  'The Kitchen Standard Chicken Pot Pie': { title: 'Chicken Pot Pie', origin: 'USA' },
  'The New England Express': { title: 'New England Express', origin: 'USA' },
  'Thinly Sliced Marinated Ribeye (Bulgogi)': { title: 'Bulgogi', origin: 'Korea' },
  'Turkey and Sweet Potato Chili (Kid-Approved)': { title: 'Turkey and Sweet Potato Chili' },
  'Ultimate Crock-Pot Sipping Chocolate': { title: 'Hot Chocolate' },
  'Ultimate Tahini Sauce': { title: 'Tahini Sauce' },
};

const files = readdirSync('src/content/recipes').filter(f => f.endsWith('.md')).map(f => `src/content/recipes/${f}`);
let updated = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let match = content.match(/^title: (.+?)$/m);
  if (!match) return;

  const oldTitle = match[1];
  const update = renameMap[oldTitle];
  if (!update) return;

  const { title: newTitle, origin } = update;

  // Replace title
  content = content.replace(/^title: .+$/m, `title: ${newTitle}`);

  // Add origin if provided and not already present
  if (origin && !content.includes('origin:')) {
    content = content.replace(/^(title: .+?)$/m, `$1\norigin: ${origin}`);
  }

  fs.writeFileSync(file, content);
  console.log(`✓ ${file} | ${oldTitle} → ${newTitle}${origin ? ` (origin: ${origin})` : ''}`);
  updated++;
});

console.log(`\n✅ Updated ${updated} recipes.`);
