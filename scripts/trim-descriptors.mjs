#!/usr/bin/env node

import fs from 'fs';
import { readdirSync } from 'fs';

// Map of titles to trim: keep only when essential, move cooking methods to Chef's Note
const trimMap = {
  'Authentic Tzatziki Sauce': { title: 'Tzatziki Sauce' },
  'Best Homemade Brownies': { title: 'Brownies' },
  'Best Slow Cooker Pulled Pork': { title: 'Pulled Pork' },
  'Baked Chicken Parmesan': { title: 'Chicken Parmesan' },
  'Baked Chicken and Broccoli': { title: 'Chicken and Broccoli' },
  'Baked Cod with Lemon Panko': { title: 'Cod with Lemon Panko' },
  'Baked Macaroni and Pimento Cheese': { title: 'Macaroni and Pimento Cheese' },
  'Baked Spanish Rice with Chorizo and Chickpeas': { title: 'Spanish Rice with Chorizo and Chickpeas' },
  'Beef Tenderloin Dogs with Zesty Corn Relish': { title: 'Beef Hot Dogs with Corn Relish' },
  'Blueberry Baked Oatmeal': { title: 'Blueberry Oatmeal' },
  'Brownie Baked Oatmeal': { title: 'Brownie Oatmeal' },
  'Buttermilk Baked Chicken': { title: 'Buttermilk Chicken' },
  'Cantonese Steamed Fish': { title: 'Cantonese Fish', origin: 'China' },
  'Chinese Spicy Garlic Eggplant': { title: 'Spicy Garlic Eggplant', origin: 'China' },
  'Chinese Steamed Fish': { title: 'Steamed Fish', origin: 'China' },
  'Cinnamon Sweet Potatoes': { title: 'Sweet Potatoes with Cinnamon' },
  'Classic Beef Stew': { title: 'Beef Stew' },
  'Creamy Avocado Pasta': { title: 'Avocado Pasta' },
  'Creamy Garlicky Shrimp Fettuccine': { title: 'Garlicky Shrimp Fettuccine' },
  'Creamy Spinach Lemon Chicken': { title: 'Spinach Lemon Chicken' },
  'Creamy Sun-Dried Tomato Chicken Pasta': { title: 'Sun-Dried Tomato Chicken Pasta' },
  'Creamy Whole-Wheat Mac and Cheese': { title: 'Whole-Wheat Mac and Cheese' },
  'Crispy Sheet Pan Gnocchi & Veggies': { title: 'Sheet Pan Gnocchi & Veggies' },
  'Crispy Smashed Potatoes': { title: 'Smashed Potatoes' },
  'Crispy Szechuan Eggplant & Tofu': { title: 'Szechuan Eggplant & Tofu', origin: 'China' },
  'Favorite Cream Cheese Frosting': { title: 'Cream Cheese Frosting' },
  'Fresh Egg Pasta': { title: 'Egg Pasta' },
  'Fresh Melon Daiquiri': { title: 'Melon Daiquiri' },
  'Fresh Pasta Dough': { title: 'Pasta Dough' },
  'Fresh Peach Ice Cream': { title: 'Peach Ice Cream' },
  'Fresh Strawberry Vinaigrette': { title: 'Strawberry Vinaigrette' },
  'Fresh Wonton Wrappers': { title: 'Wonton Wrappers' },
  'Garlic Butter-Roasted Salmon with Potatoes & Asparagus': { title: 'Garlic Butter Salmon with Potatoes and Asparagus', origin: 'USA' },
  'Garlic Roasted Potatoes': { title: 'Garlic Potatoes' },
  'Grilled Cheese & Tomato Soup': { title: 'Grilled Cheese and Tomato Soup' },
  'Grilled Chicken with Herbed Corn Salsa': { title: 'Chicken with Herbed Corn Salsa' },
  'Grilled Pork & Peaches': { title: 'Pork and Peaches' },
  'Grilled-Pork Banh Mi': { title: 'Banh Mi', origin: 'Vietnam' },
  'Harvest Sheet Pan Gnocchi with Crispy Kale': { title: 'Harvest Sheet Pan Gnocchi with Kale' },
  'Healthy Apple Muffins': { title: 'Apple Muffins' },
  'Healthy Banana Bread': { title: 'Banana Bread' },
  'Healthy Carrot Cake Muffins': { title: 'Carrot Cake Muffins' },
  'Herb-Marinated Pork Tenderloin': { title: 'Herb Pork Tenderloin' },
  'Homemade Enchilada Sauce': { title: 'Enchilada Sauce' },
  'Homemade Naan': { title: 'Naan', origin: 'India' },
  'Homemade Rice Pilaf': { title: 'Rice Pilaf' },
  'Homemade Sugar-Free Ketchup': { title: 'Ketchup' },
  'Hot and Sour Soup': { title: 'Hot and Sour Soup', origin: 'China' },
  'Juicy Turkey Burgers': { title: 'Turkey Burgers' },
  'Loaded Baked Omelet Muffins': { title: 'Omelet Muffins' },
  'Middle Eastern-Style Grilled Chicken Kabobs': { title: 'Chicken Kabobs', origin: 'Middle East' },
  "Momma's Healthy Meatloaf": { title: 'Meatloaf' },
  "Moms Famous Chocolate Cake": { title: 'Chocolate Cake' },
  'My Favorite Challah': { title: 'Challah', origin: 'Israel' },
  'My Favorite Cornbread': { title: 'Cornbread' },
  'One Pot Spicy Thai Noodles': { title: 'Spicy Thai Noodles', origin: 'Thailand' },
  'One-Pan Citrus Beet Roasted Chicken': { title: 'Citrus Beet Chicken' },
  'Perfect Cranberry Sauce': { title: 'Cranberry Sauce' },
  'Perfect Mashed Potatoes': { title: 'Mashed Potatoes' },
  'Real Alfredo Sauce': { title: 'Alfredo Sauce', origin: 'Italy' },
  'Real Banana Pudding': { title: 'Banana Pudding' },
  'Real Garlic Bread': { title: 'Garlic Bread' },
  'Real Spaghetti Carbonara': { title: 'Spaghetti Carbonara', origin: 'Italy' },
  'Rich Coconut Rice': { title: 'Coconut Rice' },
  'Roasted Asparagus': { title: 'Asparagus' },
  'Roasted Butternut Squash Mac & Cheese': { title: 'Butternut Squash Mac and Cheese' },
  'Roasted Corn Chowder with Lime Shrimp': { title: 'Corn Chowder with Lime Shrimp' },
  'Roasted Fall Harvest Salad': { title: 'Fall Harvest Salad' },
  'Roasted Root Vegetables': { title: 'Root Vegetables' },
  'Roasted Sunchokes with Brown Butter Vinaigrette': { title: 'Sunchokes with Brown Butter Vinaigrette' },
  'Roasted Tomato Basil Soup': { title: 'Tomato Basil Soup' },
  'Rosemary Pork Tenderloin': { title: 'Pork Tenderloin' },
  'Silky Zucchini Soup': { title: 'Zucchini Soup' },
  'Simple Roast Turkey': { title: 'Roast Turkey' },
  'Slow Cooker Creamy Tortellini Soup': { title: 'Tortellini Soup' },
  'Smoky Spanish Rice & Chickpeas': { title: 'Spanish Rice and Chickpeas' },
  'Spicy Peach & Avocado Salad': { title: 'Peach and Avocado Salad' },
  'Spicy Thai Red Curry Beef': { title: 'Thai Red Curry Beef', origin: 'Thailand' },
  'Steamed Bok Choy with Oyster Sauce': { title: 'Bok Choy with Oyster Sauce' },
  'Steamed Broccoli with Garlic': { title: 'Broccoli with Garlic' },
  'Steamed Mussels with Chorizo Broth': { title: 'Mussels with Chorizo Broth' },
  'Steamed Noodles with Green Beans': { title: 'Noodles with Green Beans' },
  'Sweet & Spicy Spareribs': { title: 'Sweet and Spicy Spareribs' },
  'Sweet & White Potato Gratin': { title: 'Sweet and White Potato Gratin' },
  'Sweet Potato Fries': { title: 'Sweet Potato Fries' },
  'Sweet Potato Latkes': { title: 'Potato Latkes' },
  'Sweet Spinach Muffins': { title: 'Spinach Muffins' },
  'Vietnamese Grilled Chicken': { title: 'Chicken', origin: 'Vietnam' },
  'Warm Roasted Veggie Salad': { title: 'Veggie Salad' },
};

const files = readdirSync('src/content/recipes').filter(f => f.endsWith('.md')).map(f => `src/content/recipes/${f}`);
let updated = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let match = content.match(/^title: (.+?)$/m);
  if (!match) return;

  const oldTitle = match[1];
  const update = trimMap[oldTitle];
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

console.log(`\n✅ Updated ${updated} more recipes (descriptive adjectives trimmed).`);
