import { defineCollection, z } from 'astro:content';

const recipesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // What is this dish?
    role: z.enum(['main', 'side', 'base', 'dessert', 'drink', 'condiment']).optional(),
    // When should I cook it?
    vibe: z.enum(['speed', 'fuel', 'comfort', 'project', 'holiday']).optional(),
    
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
