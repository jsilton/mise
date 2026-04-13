#!/usr/bin/env node

import { findNutrition } from './nutrition-data.mjs';

// Test ingredient parsing
const testIngredients = [
  '2 cups basmati rice',
  '1/2 lb chicken breast',
  '3 cloves garlic',
  '1 tbsp olive oil',
  '2 cups canned tomatoes',
  '1 tsp salt',
  '--- Sauce ---',
  '1 cup heavy cream',
];

console.log('Testing ingredient nutrition lookup:\n');

testIngredients.forEach((ing) => {
  const nutrition = findNutrition(ing);
  if (nutrition) {
    console.log(`✅ "${ing}"`);
    console.log(`   Calories: ${nutrition.calories}, Protein: ${nutrition.protein}g (${nutrition.unit})`);
  } else {
    console.log(`❌ "${ing}" - no match`);
  }
});
