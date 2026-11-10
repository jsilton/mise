import { defineCollection, z } from 'astro:content';
import { createFormulaSchema, formulaIngredients, formulaYield } from '../lib/recipe-formula.mjs';
import { techniques } from '../data/techniques';
import {
  ADVANCE_PREP,
  COOKING_METHODS,
  CUISINES,
  DIETARY,
  DIFFICULTIES,
  FLAVOR_PROFILES,
  LEFTOVERS,
  MEAL_TEMPLATES,
  NUTRITIONAL_DENSITY,
  OCCASIONS,
  ROLES,
  SEASONS,
  VIBES,
  seasonsIssue,
} from '../lib/tag-vocabulary.mjs';

// Canonical tag values live in src/lib/tag-vocabulary.mjs. A value outside those lists,
// or a frontmatter key this schema does not name, fails the build.
const oneOf = (values: string[]) => z.enum(values as [string, ...string[]]);
const tagList = (values: string[]) => z.array(oneOf(values)).optional();
const seasonList = () =>
  tagList(SEASONS).superRefine((value, ctx) => {
    const issue = seasonsIssue(value);
    if (issue) ctx.addIssue({ code: 'custom', message: issue });
  });

const recipesCollection = defineCollection({
  type: 'content',
  schema: z
    .object({
      // Internal fields. They are named here so the strict schema accepts them, and the
      // transform below drops them so they never reach public content.
      miseId: z.string().optional(),
      kb: z
        .object({ disable: z.array(z.string()).nullish(), disableReason: z.string().optional() })
        .strict()
        .optional(), // validator rule opt-outs
      audience: z.union([z.string(), z.array(z.string())]).optional(), // validator hint
      aliases: z.array(z.string()).optional(), // old titles and slugs that link here
      title: z.string(),
      origin: z.string().optional(), // Source/attribution

      // What is this dish?
      role: oneOf(ROLES).optional(),

      // When should I cook it?
      vibe: oneOf(VIBES).optional(),
      difficulty: oneOf(DIFFICULTIES).optional(),

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
      cookingMethods: tagList(COOKING_METHODS),

      dietary: tagList(DIETARY),

      occasions: tagList(OCCASIONS),

      flavorProfile: tagList(FLAVOR_PROFILES),

      cuisines: tagList(CUISINES),

      // Planning metadata. No page reads seasons, leftovers, rating, isVariationOf, usesBase or
      // extractedFrom yet. They are kept for planning and exports.
      seasons: seasonList(),
      nutritionalDensity: oneOf(NUTRITIONAL_DENSITY).optional(), // meal weight
      leftovers: oneOf(LEFTOVERS).optional(), // reheating quality

      advancePrep: tagList(ADVANCE_PREP), // freeze-ahead drives the Freezer friendly quick pick

      equipment: z.array(z.string()).optional(), // Free-text array (kebab-case format) — grill, slow-cooker, instant-pot, stand-mixer, etc.

      // Pairing suggestions
      pairsWith: z.array(z.string()).optional(), // Suggested complementary dishes (must be valid recipe slugs)
      // One short line per pairing saying how it goes with this dish, keyed by the pairsWith slug.
      pairingNotes: z.record(z.string().min(1)).optional(),

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
          // Older teaching fields. Recipe pages no longer show them; they are kept optional
          // only so unreviewed files still load.
          focus: z.string().min(1).optional(),
          outcome: z.string().min(1).optional(),
          techniques: z
            .array(
              z
                .string()
                .refine((value) => techniques.some((t) => t.slug === value), 'Unknown technique')
            )
            .min(1),
          before: z.array(z.string().min(1)).optional(),
          checkpoints: z
            .array(
              z.object({
                step: z.number().int().positive(),
                cue: z.string().min(1),
                why: z.string().min(1),
              })
            )
            .optional(),
          troubleshooting: z
            .array(
              z.object({
                problem: z.string().min(1),
                cause: z.string().min(1),
                fix: z.string().min(1),
              })
            )
            .optional(),
          substitutions: z
            .array(
              z.object({ ingredient: z.string(), alternative: z.string(), effect: z.string() })
            )
            .optional(),
          storage: z.string().min(1).optional(),
          timing: z.string().min(1).optional(),
          sources: z
            .array(z.object({ title: z.string().min(1), url: z.string().url() }))
            .optional(),
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
    .strict()
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
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .transform(({ miseId, kb, audience, ...publicData }) => publicData),
});

// Composed meals - curated combinations of recipes
const mealsCollection = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),

      // Meal template type
      template: oneOf(MEAL_TEMPLATES).optional(),
      aliases: z.array(z.string()).optional(), // old slugs that redirect here

      // Component recipes (slugs)
      main: z.string().optional(), // Main dish recipe slug
      sides: z.array(z.string()).optional(), // Side dish recipe slugs
      base: z.string().optional(), // Starch/grain recipe slug
      salad: z.string().optional(), // Salad recipe slug
      sauce: z.string().optional(), // Sauce/condiment recipe slug
      dessert: z.string().optional(), // Optional dessert
      drink: z.string().optional(), // Drink recipe slug. No page shows it yet.

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
      overallDifficulty: oneOf(DIFFICULTIES).optional(),

      // Planning metadata
      cuisines: tagList(CUISINES), // Primary cuisine(s)
      occasions: tagList(OCCASIONS), // weeknight, entertaining, etc.
      seasons: seasonList(),
      nutritionalDensity: oneOf(NUTRITIONAL_DENSITY).optional(),
      servings: z.string().optional(),
    })
    .strict()
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
