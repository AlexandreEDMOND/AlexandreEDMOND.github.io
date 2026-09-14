import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    day: z.number().int().positive(),
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { journal };
