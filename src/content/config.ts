import { defineCollection, z } from 'astro:content';

const recipesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['speed', 'fuel', 'comfort', 'project']).optional(), // Optional for now until migration is complete
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    totalTime: z.string().optional(),
    servings: z.string().optional(),
    ingredients: z.array(z.string()).optional(),
  }),
});

export const collections = {
  recipes: recipesCollection,
};