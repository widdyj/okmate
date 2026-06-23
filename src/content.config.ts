import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = [
  'points-miles',
  'personal-finance',
  'deals',
  'general-tips',
] as const;

export const CATEGORY_LABELS: Record<(typeof CATEGORIES)[number], string> = {
  'points-miles': 'Points & Miles',
  'personal-finance': 'Personal Finance',
  deals: 'Deals',
  'general-tips': 'General Tips',
};

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    categories: z.enum(CATEGORIES),
    image: z.string().optional(),
  }),
});

export const collections = { posts };
