# Nutrition Estimation System

This document describes the automated nutrition estimation system for Mise recipes.

## Overview

The nutrition estimation system:
1. Reads all recipe ingredients
2. Parses quantities and units
3. Matches ingredients to a USDA-based database with 200+ common foods
4. Calculates per-serving nutrition (calories, protein, carbs, fat, fiber, sugar, sodium)
5. Adds nutrition data to recipe frontmatter
6. Displays nutrition on recipe pages

## Usage

### Dry Run (Preview)

Preview changes without modifying files:

```bash
npm run estimate-nutrition:dry
```

With verbose output showing all processing:

```bash
npm run estimate-nutrition:verbose
```

### Actual Run

Apply nutrition estimation to all recipes:

```bash
npm run estimate-nutrition
```

## How It Works

### Ingredient Matching

The script parses ingredient strings and extracts:
- Quantity (e.g., "2 1/2")
- Unit (cup, tbsp, tsp, oz, lb, g, each, etc.)
- Ingredient name (matched to nutrition database)

Examples:
- "2 cups basmati rice" → 2 cups of basmati rice
- "1/2 lb chicken breast" → 0.5 lbs of chicken breast
- "3 cloves garlic" → 3 cloves of garlic
- "1 tbsp olive oil" → 1 tbsp of olive oil

### Unit Conversion

Quantities are converted to the base unit stored in the nutrition database (oz, cup, tbsp, tsp, etc.) using standard cooking conversions:
- 1 cup = 16 tbsp = 48 tsp = 8 oz
- 1 tbsp = 3 tsp = 0.5 oz = 15g
- 1 oz = 28.35g
- 1 lb = 16 oz

### Nutrition Values

Nutrition values are per-serving and calculated as:
1. Total nutrition = sum of (ingredient nutrition × quantity) for all ingredients
2. Per-serving = total nutrition ÷ servings count

Rounding:
- Calories: nearest 5
- Protein/Carbs/Fat/Fiber/Sugar: nearest 0.5g
- Sodium: nearest 10mg

### Skipped Items

The script skips:
- Section dividers (--- Sauce ---)
- "To taste" ingredients
- Recipes without ingredients or servings metadata
- Ingredients that don't match the database (reported in verbose mode)

## Nutrition Database

Located in `scripts/nutrition-data.mjs`, the database includes:

**Proteins** (200+ items):
- Poultry: chicken breast/thigh, turkey, duck
- Beef: ground, steak, stew, short ribs
- Pork: butt, shoulder, tenderloin, sausage, bacon
- Fish & Seafood: salmon, shrimp, cod, tuna, mussels, scallops
- Plant-based: tofu, tempeh, edamame, legumes, nuts, seeds

**Dairy** (25+ items):
- Butter, cream, milk varieties, yogurt
- Cheese: cheddar, parmesan, mozzarella, feta, brie, goat, ricotta

**Vegetables** (30+ items):
- Leafy greens: spinach, kale, arugula, lettuce, bok choy
- Cruciferous: broccoli, cauliflower, cabbage, brussels sprouts
- Root vegetables: potato, sweet potato, carrot, beet, parsnip
- Peppers & alliums: onion, garlic, bell pepper, jalapeño
- Other: tomato, cucumber, zucchini, mushroom, corn, peas

**Fruits** (10+ items):
- Common: apple, banana, orange, lemon, lime, avocado
- Berries: strawberry, blueberry, raspberry, blackberry

**Grains** (20+ items):
- Rice: white, brown, basmati, jasmine
- Noodles: pasta, rice noodles, egg noodles
- Other: oats, quinoa, couscous, polenta, barley, farro
- Bread: whole wheat, tortilla, naan, pita

**Baking & Seasonings** (30+ items):
- Flour, cornmeal, baking soda, baking powder, sugar, honey
- Cocoa, chocolate chips, vanilla extract
- Spices: salt, pepper, garlic powder, cumin, coriander, chili powder, etc.

**Fats & Oils** (5 items):
- Olive oil, vegetable oil, sesame oil, coconut oil, avocado oil

**Sauces & Condiments** (15+ items):
- Soy sauce, fish sauce, oyster sauce, hoisin, sriracha
- Vinegar varieties, tomato sauce, ketchup, mustard, mayo

**Canned Goods** (6 items):
- Tomatoes, coconut milk, beans, broth/stock

## Updating the Database

To add new ingredients or update values:

1. Open `scripts/nutrition-data.mjs`
2. Add or modify entries in `nutritionDatabase` object
3. Format: `'ingredient-name': { unit: 'cup|tbsp|tsp|oz|lb|each', calories: N, protein: N, ... }`
4. Use accurate USDA Nutrition Facts values
5. Run `npm run estimate-nutrition:verbose` to test

## Field Descriptions

Per-serving nutrition fields:

- **Calories**: Total energy (kcal)
- **Protein**: Grams of protein
- **Carbs**: Grams of carbohydrates
- **Fat**: Grams of total fat
- **Fiber**: Grams of dietary fiber
- **Sugar**: Grams of total sugars
- **Sodium**: Milligrams of sodium

## Recipe Page Display

When recipes have nutrition data, the recipe page displays a "Nutrition (Estimated)" table below the "Pairs Well With" section.

The display includes:
- A clean table with nutrient names and values
- Proper formatting and unit display
- Dark mode support
- Disclaimer: "Estimated values based on standard ingredient data. Actual nutrition may vary."

## Limitations & Accuracy

This estimation is algorithmic and approximate:

1. **Cooking Loss**: Doesn't account for moisture loss during cooking
2. **Added Ingredients**: Assumes specified ingredients only (no "oil for cooking" additions)
3. **Preparation Method**: Doesn't adjust for boiling away liquids, etc.
4. **Variations**: Individual ingredient variations (e.g., different brands of olive oil)
5. **Recipe Modifications**: Assumes recipe is made exactly as written

For medical/dietary needs, verify with professional nutrition analysis.

## Testing

To test the ingredient matching logic:

```bash
node scripts/test-nutrition.mjs
```

This runs test cases against sample ingredients and shows matches/misses.

## Troubleshooting

### "Couldn't estimate (no matching ingredients)"

This means no ingredients matched the database. Common reasons:
- Unusual ingredient names not in database
- Ingredients listed in non-standard format
- Very regional/specialty items

Solutions:
- Add ingredient to `scripts/nutrition-data.mjs`
- Verify ingredient name matches database keys
- Check ingredient format (see examples above)

### "Missing ingredients or servings"

Recipe needs:
- `ingredients` array in frontmatter
- `servings` field (as string, e.g., "4")

### Low/High Values

If a recipe's estimated nutrition seems off:
1. Check ingredient parsing (run verbose mode)
2. Verify ingredient names in database
3. Consider recipe proportions (very rich ingredients inflate values)
4. Remember this is algorithmic estimation, not lab analysis
