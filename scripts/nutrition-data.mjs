/**
 * Comprehensive USDA-based nutrition lookup table
 * Maps ingredient keywords to per-unit nutrition values
 * Format: { calories, protein(g), carbs(g), fat(g), fiber(g), sugar(g), sodium(mg) }
 */

export const nutritionDatabase = {
  // PROTEINS - Poultry
  'chicken breast': { unit: 'oz', calories: 31, protein: 7, carbs: 0, fat: 0.5, fiber: 0, sugar: 0, sodium: 20 },
  'chicken thigh': { unit: 'oz', calories: 45, protein: 5.5, carbs: 0, fat: 2.5, fiber: 0, sugar: 0, sodium: 20 },
  'chicken ground': { unit: 'oz', calories: 35, protein: 6.5, carbs: 0, fat: 1, fiber: 0, sugar: 0, sodium: 75 },
  'rotisserie chicken': { unit: 'oz', calories: 43, protein: 7, carbs: 0, fat: 1.5, fiber: 0, sugar: 0, sodium: 92 },
  'turkey breast': { unit: 'oz', calories: 26, protein: 5, carbs: 0, fat: 0.5, fiber: 0, sugar: 0, sodium: 19 },
  'turkey ground': { unit: 'oz', calories: 38, protein: 5.5, carbs: 0, fat: 1.8, fiber: 0, sugar: 0, sodium: 95 },

  // PROTEINS - Beef
  'beef ground': { unit: 'oz', calories: 45, protein: 5.5, carbs: 0, fat: 2.3, fiber: 0, sugar: 0, sodium: 75 },
  'beef ground lean': { unit: 'oz', calories: 37, protein: 5.5, carbs: 0, fat: 1.6, fiber: 0, sugar: 0, sodium: 75 },
  'beef stew meat': { unit: 'oz', calories: 48, protein: 6, carbs: 0, fat: 2.5, fiber: 0, sugar: 0, sodium: 60 },
  'beef short ribs': { unit: 'oz', calories: 68, protein: 5, carbs: 0, fat: 5.5, fiber: 0, sugar: 0, sodium: 55 },
  'ribeye steak': { unit: 'oz', calories: 62, protein: 5, carbs: 0, fat: 4.7, fiber: 0, sugar: 0, sodium: 67 },
  'sirloin steak': { unit: 'oz', calories: 43, protein: 6.5, carbs: 0, fat: 1.8, fiber: 0, sugar: 0, sodium: 75 },
  'brisket': { unit: 'oz', calories: 55, protein: 6, carbs: 0, fat: 3.2, fiber: 0, sugar: 0, sodium: 65 },

  // PROTEINS - Pork
  'pork butt': { unit: 'oz', calories: 58, protein: 5.5, carbs: 0, fat: 3.8, fiber: 0, sugar: 0, sodium: 70 },
  'pork shoulder': { unit: 'oz', calories: 60, protein: 5.2, carbs: 0, fat: 4.2, fiber: 0, sugar: 0, sodium: 70 },
  'pork tenderloin': { unit: 'oz', calories: 36, protein: 6.2, carbs: 0, fat: 1.2, fiber: 0, sugar: 0, sodium: 53 },
  'pork loin': { unit: 'oz', calories: 40, protein: 6.5, carbs: 0, fat: 1.5, fiber: 0, sugar: 0, sodium: 50 },
  'pork ground': { unit: 'oz', calories: 57, protein: 5.2, carbs: 0, fat: 4, fiber: 0, sugar: 0, sodium: 75 },
  'bacon': { unit: 'oz', calories: 160, protein: 5.5, carbs: 0.3, fat: 14.3, fiber: 0, sugar: 0, sodium: 280 },
  'sausage': { unit: 'oz', calories: 95, protein: 5, carbs: 0.5, fat: 8, fiber: 0, sugar: 0, sodium: 200 },

  // PROTEINS - Fish & Seafood
  'salmon': { unit: 'oz', calories: 52, protein: 6, carbs: 0, fat: 3, fiber: 0, sugar: 0, sodium: 50 },
  'shrimp': { unit: 'oz', calories: 30, protein: 6.5, carbs: 0.3, fat: 0.3, fiber: 0, sugar: 0, sodium: 111 },
  'cod': { unit: 'oz', calories: 23, protein: 5, carbs: 0, fat: 0.2, fiber: 0, sugar: 0, sodium: 54 },
  'tuna': { unit: 'oz', calories: 40, protein: 8.5, carbs: 0, fat: 0.3, fiber: 0, sugar: 0, sodium: 40 },
  'mussels': { unit: 'oz', calories: 28, protein: 4, carbs: 1.2, fat: 0.7, fiber: 0, sugar: 0, sodium: 286 },
  'scallops': { unit: 'oz', calories: 25, protein: 4.7, carbs: 0.5, fat: 0.3, fiber: 0, sugar: 0, sodium: 115 },

  // PROTEINS - Tofu & Legumes
  'tofu': { unit: 'oz', calories: 22, protein: 2.8, carbs: 1.2, fat: 1.4, fiber: 0.6, sugar: 0.1, sodium: 10 },
  'firm tofu': { unit: 'oz', calories: 22, protein: 2.8, carbs: 1.2, fat: 1.4, fiber: 0.6, sugar: 0.1, sodium: 10 },
  'tempeh': { unit: 'oz', calories: 54, protein: 5.3, carbs: 3, fat: 3.2, fiber: 1.6, sugar: 0, sodium: 10 },
  'edamame': { unit: 'cup', calories: 189, protein: 18.5, carbs: 8, fat: 8.5, fiber: 7.6, sugar: 1.5, sodium: 154 },
  'chickpeas': { unit: 'cup', calories: 269, protein: 14.5, carbs: 45, fat: 4.2, fiber: 12, sugar: 8, sodium: 191 },
  'black beans': { unit: 'cup', calories: 227, protein: 15.2, carbs: 41, fat: 0.9, fiber: 10, sugar: 0.5, sodium: 1946 },
  'lentils': { unit: 'cup', calories: 230, protein: 18, carbs: 40, fat: 0.8, fiber: 15.6, sugar: 1.8, sodium: 4 },

  // EGGS
  'egg': { unit: 'large', calories: 70, protein: 6, carbs: 0.4, fat: 5, fiber: 0, sugar: 0.3, sodium: 70 },
  'egg white': { unit: 'large', calories: 17, protein: 3.6, carbs: 0.3, fat: 0.1, fiber: 0, sugar: 0.2, sodium: 55 },
  'egg yolk': { unit: 'large', calories: 55, protein: 2.7, carbs: 0.3, fat: 4.5, fiber: 0, sugar: 0.1, sodium: 8 },

  // DAIRY - Butter & Fat
  'butter': { unit: 'tbsp', calories: 100, protein: 0.1, carbs: 0, fat: 11.5, fiber: 0, sugar: 0, sodium: 82 },
  'cream': { unit: 'tbsp', calories: 50, protein: 0.3, carbs: 0.4, fat: 5.2, fiber: 0, sugar: 0.3, sodium: 6 },
  'heavy cream': { unit: 'tbsp', calories: 50, protein: 0.3, carbs: 0.4, fat: 5.2, fiber: 0, sugar: 0.3, sodium: 6 },
  'sour cream': { unit: 'tbsp', calories: 26, protein: 0.4, carbs: 0.5, fat: 2.6, fiber: 0, sugar: 0.3, sodium: 16 },
  'cream cheese': { unit: 'oz', calories: 99, protein: 2.2, carbs: 1.5, fat: 10, fiber: 0, sugar: 0.8, sodium: 111 },

  // DAIRY - Milk & Yogurt
  'whole milk': { unit: 'cup', calories: 149, protein: 7.7, carbs: 11.7, fat: 7.9, fiber: 0, sugar: 12.3, sodium: 98 },
  'skim milk': { unit: 'cup', calories: 86, protein: 8.3, carbs: 12, fat: 0.4, fiber: 0, sugar: 12, sodium: 103 },
  '2% milk': { unit: 'cup', calories: 122, protein: 8.1, carbs: 11.9, fat: 4.9, fiber: 0, sugar: 12, sodium: 100 },
  'yogurt': { unit: 'cup', calories: 137, protein: 24, carbs: 5, fat: 0.4, fiber: 0, sugar: 4, sodium: 150 },
  'greek yogurt': { unit: 'cup', calories: 130, protein: 23, carbs: 9, fat: 0, fiber: 0, sugar: 6, sodium: 75 },

  // DAIRY - Cheese
  'cheddar cheese': { unit: 'oz', calories: 113, protein: 7, carbs: 0.4, fat: 9.4, fiber: 0, sugar: 0.2, sodium: 176 },
  'parmesan cheese': { unit: 'oz', calories: 110, protein: 10, carbs: 1, fat: 7.3, fiber: 0, sugar: 0.2, sodium: 390 },
  'mozzarella cheese': { unit: 'oz', calories: 85, protein: 6.3, carbs: 0.6, fat: 6.3, fiber: 0, sugar: 0.2, sodium: 178 },
  'feta cheese': { unit: 'oz', calories: 75, protein: 4, carbs: 1.2, fat: 6, fiber: 0, sugar: 0.5, sodium: 316 },
  'brie cheese': { unit: 'oz', calories: 95, protein: 4.9, carbs: 0.1, fat: 7.9, fiber: 0, sugar: 0, sodium: 178 },
  'goat cheese': { unit: 'oz', calories: 76, protein: 5.3, carbs: 0.3, fat: 6, fiber: 0, sugar: 0, sodium: 98 },
  'ricotta cheese': { unit: 'cup', calories: 428, protein: 28, carbs: 7.3, fat: 32, fiber: 0, sugar: 0.3, sodium: 207 },

  // VEGETABLES - Leafy Greens
  'spinach': { unit: 'cup', calories: 7, protein: 0.9, carbs: 1.1, fat: 0.1, fiber: 0.7, sugar: 0.1, sodium: 24 },
  'kale': { unit: 'cup', calories: 34, protein: 2.2, carbs: 7.2, fat: 0.6, fiber: 1.3, sugar: 0.2, sodium: 29 },
  'arugula': { unit: 'cup', calories: 5, protein: 0.5, carbs: 0.7, fat: 0.2, fiber: 0.4, sugar: 0.1, sodium: 10 },
  'lettuce': { unit: 'cup', calories: 5, protein: 0.5, carbs: 0.9, fat: 0.1, fiber: 0.5, sugar: 0.1, sodium: 2 },
  'bok choy': { unit: 'cup', calories: 9, protein: 1.1, carbs: 1.5, fat: 0.1, fiber: 0.7, sugar: 0.4, sodium: 46 },

  // VEGETABLES - Cruciferous
  'broccoli': { unit: 'cup', calories: 31, protein: 3.3, carbs: 6.2, fat: 0.4, fiber: 2.4, sugar: 1.2, sodium: 64 },
  'cauliflower': { unit: 'cup', calories: 25, protein: 2, carbs: 5.2, fat: 0.2, fiber: 2.2, sugar: 1.2, sodium: 32 },
  'cabbage': { unit: 'cup', calories: 22, protein: 1, carbs: 5.2, fat: 0.1, fiber: 1.1, sugar: 2.9, sodium: 16 },
  'brussels sprouts': { unit: 'cup', calories: 38, protein: 3, carbs: 8, fat: 0.3, fiber: 2, sugar: 2, sodium: 57 },

  // VEGETABLES - Root & Starchy
  'potato': { unit: 'medium', calories: 103, protein: 2.1, carbs: 23.4, fat: 0.1, fiber: 2.1, sugar: 1, sodium: 4 },
  'sweet potato': { unit: 'medium', calories: 103, protein: 2.3, carbs: 23.6, fat: 0.1, fiber: 3.9, sugar: 5, sodium: 55 },
  'carrot': { unit: 'medium', calories: 25, protein: 0.6, carbs: 5.8, fat: 0.1, fiber: 1.7, sugar: 2.9, sodium: 42 },
  'beet': { unit: 'medium', calories: 37, protein: 1.3, carbs: 8.2, fat: 0.1, fiber: 1.9, sugar: 6.2, sodium: 65 },
  'parsnip': { unit: 'cup', calories: 66, protein: 1.2, carbs: 15.2, fat: 0.2, fiber: 3.3, sugar: 4.8, sodium: 12 },

  // VEGETABLES - Peppers & Alliums
  'onion': { unit: 'medium', calories: 44, protein: 1.2, carbs: 10.2, fat: 0.1, fiber: 1.5, sugar: 4.7, sodium: 2 },
  'garlic': { unit: 'clove', calories: 4, protein: 0.2, carbs: 1, fat: 0, fiber: 0.1, sugar: 0, sodium: 2 },
  'bell pepper': { unit: 'medium', calories: 30, protein: 0.9, carbs: 7.2, fat: 0.3, fiber: 1.5, sugar: 4.2, sodium: 2 },
  'jalapeno': { unit: 'medium', calories: 3, protein: 0.1, carbs: 0.7, fat: 0, fiber: 0.2, sugar: 0.4, sodium: 3 },
  'leek': { unit: 'cup', calories: 54, protein: 1.3, carbs: 12.6, fat: 0.3, fiber: 1.6, sugar: 2.2, sodium: 25 },

  // VEGETABLES - Fruiting
  'tomato': { unit: 'medium', calories: 22, protein: 1.1, carbs: 4.8, fat: 0.2, fiber: 1.5, sugar: 3, sodium: 6 },
  'cucumber': { unit: 'medium', calories: 45, protein: 2, carbs: 10.9, fat: 0.2, fiber: 1.4, sugar: 5, sodium: 2 },
  'zucchini': { unit: 'cup', calories: 21, protein: 1.5, carbs: 3.5, fat: 0.4, fiber: 1, sugar: 1.5, sodium: 9 },
  'eggplant': { unit: 'cup', calories: 21, protein: 0.8, carbs: 4.8, fat: 0.2, fiber: 2.4, sugar: 2.6, sodium: 1 },
  'mushroom': { unit: 'cup', calories: 8, protein: 1.1, carbs: 1.1, fat: 0.1, fiber: 0.2, sugar: 0.3, sodium: 2 },

  // VEGETABLES - Other
  'asparagus': { unit: 'cup', calories: 27, protein: 3, carbs: 5, fat: 0.1, fiber: 2.6, sugar: 1.9, sodium: 2 },
  'green beans': { unit: 'cup', calories: 31, protein: 2, carbs: 7, fat: 0.1, fiber: 1.6, sugar: 3.3, sodium: 2 },
  'corn': { unit: 'cup', calories: 132, protein: 5, carbs: 29, fat: 1.7, fiber: 3.6, sugar: 6.3, sodium: 24 },
  'peas': { unit: 'cup', calories: 117, protein: 8, carbs: 21, fat: 0.4, fiber: 7, sugar: 7, sodium: 5 },

  // FRUITS
  'apple': { unit: 'medium', calories: 95, protein: 0.5, carbs: 25.1, fat: 0.3, fiber: 4.4, sugar: 18.9, sodium: 2 },
  'banana': { unit: 'medium', calories: 106, protein: 1.3, carbs: 27.2, fat: 0.3, fiber: 3.1, sugar: 14.4, sodium: 1 },
  'orange': { unit: 'medium', calories: 62, protein: 1.2, carbs: 15.4, fat: 0.3, fiber: 3.1, sugar: 12.2, sodium: 0 },
  'lemon': { unit: 'medium', calories: 17, protein: 0.6, carbs: 5.4, fat: 0.2, fiber: 1.6, sugar: 1.5, sodium: 1 },
  'lime': { unit: 'medium', calories: 20, protein: 0.7, carbs: 7, fat: 0.2, fiber: 1.9, sugar: 1.1, sodium: 1 },
  'strawberry': { unit: 'cup', calories: 49, protein: 1, carbs: 11.7, fat: 0.5, fiber: 3, sugar: 7.4, sodium: 2 },
  'blueberry': { unit: 'cup', calories: 85, protein: 1.1, carbs: 21.5, fat: 0.5, fiber: 3.6, sugar: 14.7, sodium: 1 },
  'raspberry': { unit: 'cup', calories: 65, protein: 1.5, carbs: 14.7, fat: 0.8, fiber: 8, sugar: 5.4, sodium: 1 },
  'blackberry': { unit: 'cup', calories: 62, protein: 2, carbs: 14.3, fat: 0.6, fiber: 7.6, sugar: 4.9, sodium: 2 },
  'avocado': { unit: 'oz', calories: 45, protein: 0.6, carbs: 2.1, fat: 4.3, fiber: 1.8, sugar: 0.1, sodium: 5 },

  // GRAINS - Rice
  'white rice': { unit: 'cup', calories: 206, protein: 4.3, carbs: 45.8, fat: 0.2, fiber: 0.6, sugar: 0, sodium: 2 },
  'brown rice': { unit: 'cup', calories: 216, protein: 5, carbs: 45, fat: 1.8, fiber: 3.5, sugar: 0.7, sodium: 10 },
  'basmati rice': { unit: 'cup', calories: 206, protein: 4.3, carbs: 45, fat: 0.2, fiber: 0.7, sugar: 0, sodium: 2 },
  'jasmine rice': { unit: 'cup', calories: 206, protein: 4.3, carbs: 46, fat: 0.2, fiber: 0, sugar: 0, sodium: 2 },

  // GRAINS - Pasta & Noodles
  'pasta': { unit: 'oz', calories: 99, protein: 3.3, carbs: 20, fat: 0.9, fiber: 1.2, sugar: 0.2, sodium: 5 },
  'rice noodles': { unit: 'oz', calories: 99, protein: 1.5, carbs: 22, fat: 0.1, fiber: 0.5, sugar: 0.1, sodium: 115 },
  'egg noodles': { unit: 'oz', calories: 106, protein: 3.8, carbs: 19.8, fat: 1.6, fiber: 0.8, sugar: 0.4, sodium: 107 },
  'ramen noodles': { unit: 'oz', calories: 110, protein: 3, carbs: 20, fat: 3.5, fiber: 0.6, sugar: 0, sodium: 958 },

  // GRAINS - Other
  'oats': { unit: 'cup', calories: 300, protein: 10.7, carbs: 54.8, fat: 5, fiber: 8, sugar: 0, sodium: 2 },
  'quinoa': { unit: 'cup', calories: 222, protein: 8, carbs: 39.4, fat: 3.9, fiber: 5.2, sugar: 1.6, sodium: 13 },
  'couscous': { unit: 'cup', calories: 176, protein: 6, carbs: 36.5, fat: 0.3, fiber: 2.2, sugar: 0, sodium: 8 },
  'polenta': { unit: 'cup', calories: 168, protein: 2, carbs: 36, fat: 0.6, fiber: 1, sugar: 0, sodium: 2 },
  'barley': { unit: 'cup', calories: 193, protein: 3.6, carbs: 44.3, fat: 0.6, fiber: 3.8, sugar: 0.2, sodium: 6 },
  'farro': { unit: 'cup', calories: 174, protein: 5.7, carbs: 34.6, fat: 1, fiber: 4.8, sugar: 0, sodium: 3 },

  // GRAINS - Bread & Baked
  'bread': { unit: 'slice', calories: 82, protein: 2.7, carbs: 14.1, fat: 1.1, fiber: 2.2, sugar: 0.8, sodium: 154 },
  'whole wheat bread': { unit: 'slice', calories: 80, protein: 4, carbs: 14, fat: 1.5, fiber: 2.7, sugar: 0.5, sodium: 148 },
  'tortilla': { unit: 'medium', calories: 57, protein: 1.6, carbs: 10.3, fat: 1.3, fiber: 1.6, sugar: 0.1, sodium: 137 },
  'naan': { unit: 'oz', calories: 97, protein: 3, carbs: 16.2, fat: 2.6, fiber: 0.6, sugar: 0.3, sodium: 375 },
  'pita bread': { unit: 'oz', calories: 83, protein: 2.8, carbs: 16.1, fat: 0.7, fiber: 1.3, sugar: 0.3, sodium: 149 },
  'cracker': { unit: 'oz', calories: 113, protein: 2.2, carbs: 16.5, fat: 4.5, fiber: 1, sugar: 0.2, sodium: 203 },

  // GRAINS - Flour & Baking
  'all-purpose flour': { unit: 'cup', calories: 455, protein: 12.9, carbs: 95.4, fat: 1.2, fiber: 3.4, sugar: 0.1, sodium: 3 },
  'whole wheat flour': { unit: 'cup', calories: 407, protein: 16.4, carbs: 87.1, fat: 2.2, fiber: 14.6, sugar: 0.6, sodium: 3 },
  'oat flour': { unit: 'cup', calories: 400, protein: 14.7, carbs: 66, fat: 9, fiber: 10.6, sugar: 0.3, sodium: 2 },
  'cornmeal': { unit: 'cup', calories: 506, protein: 12.2, carbs: 107.2, fat: 4.4, fiber: 8.6, sugar: 0.5, sodium: 11 },
  'baking soda': { unit: 'tsp', calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 1259 },
  'baking powder': { unit: 'tsp', calories: 2, protein: 0, carbs: 0.5, fat: 0, fiber: 0, sugar: 0, sodium: 488 },
  'cornstarch': { unit: 'tbsp', calories: 30, protein: 0, carbs: 7.2, fat: 0, fiber: 0, sugar: 0, sodium: 0 },
  'cocoa powder': { unit: 'tbsp', calories: 12, protein: 1.2, carbs: 3, fat: 0.7, fiber: 1.8, sugar: 0, sodium: 4 },
  'vanilla extract': { unit: 'tsp', calories: 12, protein: 0, carbs: 0.5, fat: 0, fiber: 0, sugar: 0.5, sodium: 1 },
  'chocolate chips': { unit: 'tbsp', calories: 65, protein: 0.9, carbs: 7.4, fat: 3.6, fiber: 1.3, sugar: 6.8, sodium: 4 },
  'sugar': { unit: 'tsp', calories: 16, protein: 0, carbs: 4.2, fat: 0, fiber: 0, sugar: 4.2, sodium: 0 },
  'brown sugar': { unit: 'tsp', calories: 17, protein: 0, carbs: 4.5, fat: 0, fiber: 0, sugar: 4.5, sodium: 2 },
  'honey': { unit: 'tbsp', calories: 60, protein: 0.1, carbs: 17.3, fat: 0, fiber: 0.1, sugar: 16.5, sodium: 1 },
  'maple syrup': { unit: 'tbsp', calories: 52, protein: 0, carbs: 13.4, fat: 0, fiber: 0, sugar: 12.4, sodium: 2 },

  // FATS & OILS
  'olive oil': { unit: 'tbsp', calories: 119, protein: 0, carbs: 0, fat: 13.5, fiber: 0, sugar: 0, sodium: 0 },
  'vegetable oil': { unit: 'tbsp', calories: 119, protein: 0, carbs: 0, fat: 13.6, fiber: 0, sugar: 0, sodium: 0 },
  'sesame oil': { unit: 'tbsp', calories: 120, protein: 0, carbs: 0, fat: 13.6, fiber: 0, sugar: 0, sodium: 0 },
  'coconut oil': { unit: 'tbsp', calories: 117, protein: 0, carbs: 0, fat: 13.5, fiber: 0, sugar: 0, sodium: 0 },
  'avocado oil': { unit: 'tbsp', calories: 120, protein: 0, carbs: 0.2, fat: 13.5, fiber: 0, sugar: 0, sodium: 0 },

  // NUTS & SEEDS
  'almonds': { unit: 'oz', calories: 164, protein: 6, carbs: 6.1, fat: 14.4, fiber: 3.5, sugar: 1.2, sodium: 0.3 },
  'peanuts': { unit: 'oz', calories: 161, protein: 7.3, carbs: 5.7, fat: 14, fiber: 2.5, sugar: 1, sodium: 0.2 },
  'cashews': { unit: 'oz', calories: 155, protein: 5.2, carbs: 8.6, fat: 12.3, fiber: 0.9, sugar: 5.9, sodium: 3.1 },
  'walnuts': { unit: 'oz', calories: 183, protein: 4.3, carbs: 3.9, fat: 18.5, fiber: 1.9, sugar: 0.7, sodium: 2 },
  'pecans': { unit: 'oz', calories: 196, protein: 2.6, carbs: 3.9, fat: 20.4, fiber: 2.7, sugar: 1.1, sodium: 0 },
  'sesame seeds': { unit: 'tbsp', calories: 52, protein: 1.6, carbs: 2.1, fat: 4.7, fiber: 1.1, sugar: 0, sodium: 3 },
  'sunflower seeds': { unit: 'tbsp', calories: 49, protein: 1.9, carbs: 1.9, fat: 4.3, fiber: 1.4, sugar: 0.5, sodium: 2 },
  'pumpkin seeds': { unit: 'tbsp', calories: 46, protein: 2, carbs: 1.8, fat: 4.1, fiber: 0.8, sugar: 0, sodium: 2 },
  'pine nuts': { unit: 'oz', calories: 188, protein: 3.9, carbs: 3.7, fat: 19.2, fiber: 1, sugar: 1.1, sodium: 1 },

  // SAUCES & CONDIMENTS
  'soy sauce': { unit: 'tbsp', calories: 11, protein: 1.5, carbs: 1, fat: 0, fiber: 0, sugar: 0.1, sodium: 1000 },
  'fish sauce': { unit: 'tbsp', calories: 13, protein: 2.1, carbs: 0.5, fat: 0, fiber: 0, sugar: 0, sodium: 3260 },
  'oyster sauce': { unit: 'tbsp', calories: 9, protein: 0.2, carbs: 2, fat: 0, fiber: 0, sugar: 1.5, sodium: 500 },
  'hoisin sauce': { unit: 'tbsp', calories: 35, protein: 0.5, carbs: 7, fat: 0, fiber: 0, sugar: 4, sodium: 258 },
  'sriracha': { unit: 'tbsp', calories: 15, protein: 0.5, carbs: 2.5, fat: 0.5, fiber: 0, sugar: 1.5, sodium: 390 },
  'hot sauce': { unit: 'tbsp', calories: 3, protein: 0.1, carbs: 0.6, fat: 0, fiber: 0, sugar: 0.3, sodium: 107 },
  'worcestershire sauce': { unit: 'tbsp', calories: 11, protein: 0.2, carbs: 2.4, fat: 0, fiber: 0, sugar: 0.3, sodium: 200 },
  'vinegar': { unit: 'tbsp', calories: 3, protein: 0, carbs: 0.1, fat: 0, fiber: 0, sugar: 0, sodium: 127 },
  'balsamic vinegar': { unit: 'tbsp', calories: 14, protein: 0.2, carbs: 2.6, fat: 0, fiber: 0, sugar: 2.5, sodium: 5 },
  'tomato sauce': { unit: 'cup', calories: 37, protein: 2, carbs: 8, fat: 0.2, fiber: 2, sugar: 4, sodium: 970 },
  'tomato paste': { unit: 'tbsp', calories: 13, protein: 0.6, carbs: 2.8, fat: 0, fiber: 0.5, sugar: 1.6, sodium: 339 },
  'ketchup': { unit: 'tbsp', calories: 17, protein: 0, carbs: 4, fat: 0, fiber: 0, sugar: 4, sodium: 190 },
  'mustard': { unit: 'tbsp', calories: 3, protein: 0.2, carbs: 0.2, fat: 0.2, fiber: 0, sugar: 0, sodium: 195 },
  'mayo': { unit: 'tbsp', calories: 90, protein: 0.1, carbs: 0.1, fat: 10, fiber: 0, sugar: 0, sodium: 84 },
  'peanut butter': { unit: 'tbsp', calories: 96, protein: 3.6, carbs: 3.5, fat: 8.9, fiber: 1.5, sugar: 1.5, sodium: 75 },
  'tahini': { unit: 'tbsp', calories: 89, protein: 2.6, carbs: 3.2, fat: 8.1, fiber: 1.7, sugar: 0.5, sodium: 8 },

  // CANNED GOODS
  'canned tomatoes': { unit: 'cup', calories: 32, protein: 1.5, carbs: 7, fat: 0.3, fiber: 1.5, sugar: 4, sodium: 391 },
  'coconut milk': { unit: 'cup', calories: 445, protein: 4.6, carbs: 6.3, fat: 43, fiber: 2.3, sugar: 1.3, sodium: 42 },
  'canned beans': { unit: 'cup', calories: 134, protein: 9, carbs: 24, fat: 0.4, fiber: 7, sugar: 1, sodium: 400 },
  'canned chickpeas': { unit: 'cup', calories: 269, protein: 12.3, carbs: 44.7, fat: 4.3, fiber: 11.6, sugar: 8.4, sodium: 865 },
  'chicken broth': { unit: 'cup', calories: 15, protein: 1.5, carbs: 0.5, fat: 0.5, fiber: 0, sugar: 0, sodium: 870 },
  'beef broth': { unit: 'cup', calories: 15, protein: 3, carbs: 0, fat: 0.5, fiber: 0, sugar: 0, sodium: 890 },
  'vegetable broth': { unit: 'cup', calories: 15, protein: 1, carbs: 2, fat: 0.5, fiber: 0, sugar: 0, sugar: 0, sodium: 860 },

  // SPICES & SEASONINGS (per tsp unless noted)
  'salt': { unit: 'tsp', calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 2325 },
  'black pepper': { unit: 'tsp', calories: 5, protein: 0.2, carbs: 1.3, fat: 0.1, fiber: 0.6, sugar: 0, sodium: 1 },
  'garlic powder': { unit: 'tsp', calories: 9, protein: 0.5, carbs: 2, fat: 0, fiber: 0.3, sugar: 0, sodium: 2 },
  'onion powder': { unit: 'tsp', calories: 7, protein: 0.2, carbs: 1.7, fat: 0, fiber: 0.2, sugar: 0, sodium: 3 },
  'paprika': { unit: 'tsp', calories: 6, protein: 0.3, carbs: 1.2, fat: 0.3, fiber: 0.3, sugar: 0.8, sodium: 2 },
  'cumin': { unit: 'tsp', calories: 8, protein: 0.4, carbs: 0.9, fat: 0.5, fiber: 0.2, sugar: 0, sodium: 10 },
  'coriander': { unit: 'tsp', calories: 5, protein: 0.2, carbs: 1, fat: 0.3, fiber: 0.8, sugar: 0, sodium: 2 },
  'chili powder': { unit: 'tsp', calories: 8, protein: 0.3, carbs: 1.4, fat: 0.4, fiber: 0.9, sugar: 0.1, sodium: 75 },
  'oregano': { unit: 'tsp', calories: 5, protein: 0.2, carbs: 1, fat: 0.1, fiber: 0.6, sugar: 0, sodium: 1 },
  'basil': { unit: 'tsp', calories: 1, protein: 0.1, carbs: 0.2, fat: 0, fiber: 0.1, sugar: 0, sodium: 0 },
  'thyme': { unit: 'tsp', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1, fiber: 0.4, sugar: 0, sodium: 1 },
  'rosemary': { unit: 'tsp', calories: 4, protein: 0.1, carbs: 0.8, fat: 0.2, fiber: 0.5, sugar: 0, sodium: 2 },
  'ginger': { unit: 'tbsp', calories: 5, protein: 0.1, carbs: 1.2, fat: 0.1, fiber: 0.2, sugar: 0.1, sodium: 2 },
  'turmeric': { unit: 'tsp', calories: 7, protein: 0.2, carbs: 1.4, fat: 0.3, fiber: 0.5, sugar: 0, sodium: 2 },

  // GENERIC FALLBACKS
  'meat': { unit: 'oz', calories: 45, protein: 6, carbs: 0, fat: 2.5, fiber: 0, sugar: 0, sodium: 70 },
  'fish': { unit: 'oz', calories: 35, protein: 6.5, carbs: 0, fat: 1, fiber: 0, sugar: 0, sodium: 60 },
  'vegetable': { unit: 'cup', calories: 30, protein: 1.5, carbs: 6, fat: 0.2, fiber: 2, sugar: 2, sodium: 30 },
  'fruit': { unit: 'medium', calories: 60, protein: 0.5, carbs: 15, fat: 0.3, fiber: 2.5, sugar: 10, sodium: 2 },
  'oil': { unit: 'tbsp', calories: 119, protein: 0, carbs: 0, fat: 13.5, fiber: 0, sugar: 0, sodium: 0 },
  'cheese': { unit: 'oz', calories: 100, protein: 7, carbs: 0.5, fat: 8, fiber: 0, sugar: 0.2, sodium: 200 },
};

export function findNutrition(ingredient) {
  const lower = ingredient.toLowerCase().trim();

  // Direct exact match
  if (nutritionDatabase[lower]) {
    return nutritionDatabase[lower];
  }

  // Keyword matching - search for longest matching substring
  let bestMatch = null;
  let bestLength = 0;

  for (const key in nutritionDatabase) {
    if (lower.includes(key) && key.length > bestLength) {
      bestMatch = nutritionDatabase[key];
      bestLength = key.length;
    }
  }

  if (bestMatch) {
    return bestMatch;
  }

  // Fallback - try to guess based on common patterns
  if (lower.includes('protein') || lower.includes('chicken') || lower.includes('beef') || lower.includes('fish')) {
    return nutritionDatabase['meat'];
  }
  if (lower.includes('oil') || lower.includes('butter') || lower.includes('fat')) {
    return nutritionDatabase['oil'];
  }
  if (lower.includes('cheese')) {
    return nutritionDatabase['cheese'];
  }
  if (
    lower.includes('tomato') ||
    lower.includes('lettuce') ||
    lower.includes('carrot') ||
    lower.includes('onion') ||
    lower.includes('pepper') ||
    lower.includes('broccoli')
  ) {
    return nutritionDatabase['vegetable'];
  }
  if (lower.includes('apple') || lower.includes('orange') || lower.includes('banana') || lower.includes('berry')) {
    return nutritionDatabase['fruit'];
  }

  return null;
}

export default nutritionDatabase;
