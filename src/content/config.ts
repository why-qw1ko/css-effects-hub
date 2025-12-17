import { defineCollection, z } from 'astro:content';

// 定义 effects 集合
export const collections = {
  effects: defineCollection({
    // 对于内容集合，不需要 type 或 content 属性
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

