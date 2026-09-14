import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    day: z.number().int().positive(),
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { journal };
