import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = [
  'points-miles',
  'financial-hacks',
  'deals',
  'expat-tips',
] as const;

export const CATEGORY_LABELS: Record<(typeof CATEGORIES)[number], string> = {
  'points-miles': 'Points & Miles',
  'financial-hacks': 'Financial Hacks',
  deals: 'Deals',
  'expat-tips': 'Expat Tips',
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
