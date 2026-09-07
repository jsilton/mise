import { defineCollection, z } from 'astro:content';
import { createFormulaSchema, formulaIngredients, formulaYield } from '../lib/recipe-formula.mjs';
import { techniques } from '../data/techniques';

const recipesCollection = defineCollection({
  type: 'content',
  schema: z
    .object({
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
      scaling: z
        .object({
          mode: z.literal('fixed'),
          reason: z.string().min(1),
        })
        .optional(),

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

      description: z.string().optional(),
      learning: z
        .object({
          focus: z.string().min(1),
          outcome: z.string().min(1),
          techniques: z
            .array(
              z
                .string()
                .refine((value) => techniques.some((t) => t.slug === value), 'Unknown technique')
            )
            .min(1),
          before: z.array(z.string().min(1)).min(1),
          checkpoints: z
            .array(
              z.object({
                step: z.number().int().positive(),
                cue: z.string().min(1),
                why: z.string().min(1),
              })
            )
            .min(1),
          troubleshooting: z
            .array(
              z.object({
                problem: z.string().min(1),
                cause: z.string().min(1),
                fix: z.string().min(1),
              })
            )
            .min(1),
          substitutions: z
            .array(
              z.object({ ingredient: z.string(), alternative: z.string(), effect: z.string() })
            )
            .optional(),
          storage: z.string().min(1),
          timing: z.string().min(1),
          sources: z.array(z.object({ title: z.string().min(1), url: z.string().url() })).min(1),
          // Source review never implies that the recipe has been cooked and tested.
          review: z
            .object({
              status: z.enum(['editorial-review', 'kitchen-tested']),
              date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
              testNotes: z.string().optional(),
            })
            .refine(
              (value) => value.status !== 'kitchen-tested' || !!value.testNotes?.trim(),
              'Kitchen-tested requires a documented test record'
            ),
        })
        .optional(),
      formula: createFormulaSchema(z).optional(),
      ingredients: z.array(z.string()).optional(),
    })
    .superRefine((data, ctx) => {
      if (!data.formula) return;
      if (
        JSON.stringify(data.ingredients) !== JSON.stringify(formulaIngredients(data.formula)) ||
        data.servings !== formulaYield(data.formula)
      )
        ctx.addIssue({
          code: 'custom',
          message: 'Generated formula fields are stale. Run npm run recipe:compile -- <slug>.',
        });
    }),
});

// Composed meals - curated combinations of recipes
const mealsCollection = defineCollection({
  type: 'content',
  schema: z
    .object({
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

      componentPreparation: z
        .record(
          z
            .object({
              state: z.enum(['from-scratch', 'prepared-ahead', 'reheat']),
              note: z.string().min(1),
            })
            .strict()
        )
        .optional(),

      // Curated workflow times: these are not automatically additive.
      // Computed/curated aggregates
      totalPrepTime: z.string().optional(), // Prep within the meal workflow
      totalCookTime: z.string().optional(), // Cooking within the meal workflow
      totalActiveTime: z.string().optional(), // Hands-on time estimate
      totalTime: z.string().optional(), // Elapsed time, including marinating/resting
      review: z
        .object({
          status: z.literal('editorial-review'),
          date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        })
        .optional(),
      overallDifficulty: z.enum(['easy', 'intermediate', 'medium', 'hard']).optional(),

      // Planning metadata
      cuisines: z.array(z.string()).optional(), // Primary cuisine(s)
      occasions: z.array(z.string()).optional(), // weeknight, entertaining, etc.
      seasons: z.array(z.string()).optional(),
      nutritionalDensity: z.enum(['light', 'moderate', 'hearty']).optional(),
      servings: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      if (!data.componentPreparation) return;
      const refs = [
        data.main,
        data.base,
        data.salad,
        data.sauce,
        data.dessert,
        ...(data.sides || []),
      ].filter(Boolean);
      for (const ref of refs)
        if (!data.componentPreparation[ref!])
          ctx.addIssue({ code: 'custom', message: `Missing preparation state for ${ref}` });
      for (const ref of Object.keys(data.componentPreparation))
        if (!refs.includes(ref))
          ctx.addIssue({
            code: 'custom',
            message: `Preparation state references an absent component: ${ref}`,
          });
    }),
});

export const collections = {
  recipes: recipesCollection,
  meals: mealsCollection,
};
