import { defineCollection, z } from 'astro:content';

// 定义 effects 集合的 schema
export const collections = {
  effects: defineCollection({
    content: true,
    schema: z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      category: z.string(),
      difficulty: z.enum(['easy', 'medium', 'hard']),
      tags: z.array(z.string()),
      demoComponent: z.string().optional(),
      author: z.string().optional(),
      createdAt: z.string().optional(),
      likes: z.number().optional(),
    }),
  }),
};
