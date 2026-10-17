import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(170),
      origin: z.enum(['FollowUP', 'Independiente', 'Académico', 'Personal']),
      year: z.number().int(),
      format: z.enum(['completo', 'breve']),
      role: z.array(z.string()).min(1),
      tools: z.array(z.string()).default([]),
      tags: z.array(z.string()).max(3),
      cover: image().optional(),
      coverAlt: z.string().min(10).optional(),
      featured: z.boolean().default(false),
      order: z.number().int(),
      draft: z.boolean().default(true),
      // Obliga a confirmar: sin logo ni datos reales de clientes.
      revisadoConfidencialidad: z.literal(true),
    }),
});

export const collections = { cases };
