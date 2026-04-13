import { defineCollection, z } from 'astro:content';

const recipesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    origin: z.string().optional(), // Source/attribution

    // What is this dish?
    role: z.enum(['main', 'side', 'base', 'dessert', 'drink', 'condiment']).optional(),

    // When should I cook it?
    vibe: z.enum(['quick', 'nutritious', 'comfort', 'technical', 'holiday']).optional(),
    difficulty: z.enum(['easy', 'intermediate', 'medium', 'hard']).optional(),

    // Time constraints
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    totalTime: z.string().optional(),
    servings: z.string().optional(),

    // Classification arrays
    // Canonical cookingMethods: assemble, bake, blend, boil, braise, broil, char, fry, griddle, grill, infuse, marinate, mix, no-cook, pan-fry, poach, raw, roast, saute, sear, shape, simmer, slow-cook, smoke, steam, stir-fry, toast, toss
    cookingMethods: z.array(z.string()).optional(),

    // Canonical dietary: dairy-free, dairy-free-option, egg-free, gluten-free, gluten-free-option, keto, low-carb, nut-free, pescatarian, vegan, vegan-option, vegetarian, vegetarian-option
    dietary: z.array(z.string()).optional(),

    // Canonical occasions: appetizer, bbq, breakfast, comfort-food, date-night, entertaining, everyday, family-meal, game-day, grilling, holiday, kid-friendly, light-and-fresh, lunch, make-ahead, meal-prep, picnic, potluck, quick-lunch, snack, special-occasion, sunday-dinner, weekend-brunch, weekend-dinner, weekend-project, weeknight
    occasions: z.array(z.string()).optional(),

    // Canonical flavorProfile: acidic, aromatic, bitter, bright, briny, buttery, caramelized, clean, complex, creamy, crispy, earthy, fresh, herbaceous, mild, neutral, nutty, peppery, rich, salty, savory, smoky, spicy, sweet, tangy, umami, warm, zesty
    flavorProfile: z.array(z.string()).optional(),

    // Canonical cuisines: American, Argentine, Asian, Belgian, Cantonese, Caribbean, Chinese, Eastern European, Ethiopian, French, German, Greek, Hawaiian, Indian, Israeli, Italian, Japanese, Jewish, Korean, Lebanese, Mediterranean, Mexican, Middle Eastern, Scandinavian, Sichuan, South American, Southeast Asian, Southern, Spanish, Swiss, Thai, Vietnamese
    cuisines: z.array(z.string()).optional(),

    // Planning metadata
    // Canonical seasons: fall, spring, summer, winter, year-round
    seasons: z.array(z.string()).optional(),
    nutritionalDensity: z.enum(['light', 'moderate', 'hearty']).optional(), // meal weight
    leftovers: z.enum(['poor', 'good', 'excellent']).optional(), // reheating quality

    // Canonical advancePrep: brine-overnight, chill-dough, chill-to-set, components-ahead, cook-ahead, dressing-ahead, freeze-ahead, make-ahead, make-ahead-sauce, marinate-overnight, meal-prep-friendly, overnight-soak, prep-vegetables, rest-dough, rise-dough, season-ahead, use-day-old-rice
    advancePrep: z.array(z.string()).optional(),

    equipment: z.array(z.string()).optional(), // Free-text array (kebab-case format) — grill, slow-cooker, instant-pot, stand-mixer, etc.

    // Pairing suggestions
    pairsWith: z.array(z.string()).optional(), // Suggested complementary dishes (must be valid recipe slugs)

    // Relationship fields
    isVariationOf: z.string().optional(), // Slug of the canonical version if this is a variant
    usesBase: z.array(z.string()).optional(), // Slugs of base/component recipes this builds on
    extractedFrom: z.string().optional(), // Slug if this was pulled out of another recipe
    source: z.string().optional(), // Attribution (cookbook, website, family member)
    sourceUrl: z.string().url().optional(), // Link to original source

    // Nutrition (estimated per serving)
    nutrition: z
      .object({
        calories: z.number(),
        protein: z.number(),
        carbs: z.number(),
        fat: z.number(),
        fiber: z.number(),
        sugar: z.number(),
        sodium: z.number(),
      })
      .optional(),

    // Export/reference fields
    categories: z.array(z.string()).optional(), // General categories for export (Paprika, etc.)
    rating: z.number().min(1).max(5).optional(), // Family rating (1-5 stars)
    notes: z.string().optional(), // Additional notes beyond Chef's Note

    ingredients: z.array(z.string()).optional(),
  }),
});

// Composed meals - curated combinations of recipes
const mealsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),

    // Meal template type
    template: z
      .enum(['plate', 'bowl', 'pasta-night', 'soup-and-side', 'one-pot', 'grazing'])
      .optional(),

    // Component recipes (slugs)
    main: z.string().optional(), // Main dish recipe slug
    sides: z.array(z.string()).optional(), // Side dish recipe slugs
    base: z.string().optional(), // Starch/grain recipe slug
    salad: z.string().optional(), // Salad recipe slug
    sauce: z.string().optional(), // Sauce/condiment recipe slug
    dessert: z.string().optional(), // Optional dessert
    // Note: drink pairings planned for future expansion

    // Computed/curated aggregates
    totalPrepTime: z.string().optional(), // Sum of all prep times
    totalCookTime: z.string().optional(), // Longest cook time (parallel cooking)
    totalActiveTime: z.string().optional(), // Hands-on time estimate
    overallDifficulty: z.enum(['easy', 'intermediate', 'medium', 'hard']).optional(),

    // Planning metadata
    cuisines: z.array(z.string()).optional(), // Primary cuisine(s)
    occasions: z.array(z.string()).optional(), // weeknight, entertaining, etc.
    seasons: z.array(z.string()).optional(),
    nutritionalDensity: z.enum(['light', 'moderate', 'hearty']).optional(),
    servings: z.string().optional(),

    // Day-of-week suitability
    bestFor: z.array(z.string()).optional(), // sunday, monday, weekend-project, etc.
  }),
});

// Meal history - track what was made and feedback
const mealHistoryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // What was made
    meal: z.string().optional(), // Meal slug if from curated meal
    recipes: z.array(z.string()).optional(), // Recipe slugs if ad-hoc combination

    // When
    date: z.string(), // ISO date string (YYYY-MM-DD)
    dayOfWeek: z.string().optional(),

    // Feedback
    rating: z.number().min(1).max(5).optional(), // Overall meal rating
    recipeRatings: z
      .array(
        z.object({
          recipe: z.string(),
          rating: z.number().min(1).max(5),
          notes: z.string().optional(),
        })
      )
      .optional(),

    // Notes
    notes: z.string().optional(), // General meal notes
    wouldMakeAgain: z.boolean().optional(),
    modifications: z.array(z.string()).optional(), // What was changed

    // Context
    occasion: z.string().optional(), // weeknight, date-night, etc.
    guests: z.number().optional(), // How many people
  }),
});

// Weekly calendar plans
const calendarsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    weekStart: z.coerce.date().optional(), // ISO date YYYY-MM-DD
    weekEnd: z.coerce.date().optional(), // ISO date YYYY-MM-DD
    isPlaceholder: z.boolean().optional(), // True if week plan is TBD
  }),
});

export const collections = {
  recipes: recipesCollection,
  meals: mealsCollection,
  'meal-history': mealHistoryCollection,
  calendars: calendarsCollection,
};
