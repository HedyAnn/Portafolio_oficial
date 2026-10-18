import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const schema = ({ image }: SchemaContext) =>
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
      // Segunda captura, opcional, bajo la portada
      cover2: image().optional(),
      coverAlt2: z.string().min(10).optional(),
      featured: z.boolean().default(false),
      order: z.number().int(),
      draft: z.boolean().default(true),
      // Obliga a confirmar: sin logo ni datos reales de clientes.
      revisadoConfidencialidad: z.literal(true),
    });

// Español en cases/, inglés en cases-en/ con el mismo nombre de archivo
const cases = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/cases' }), schema });
const casesEn = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/cases-en' }), schema });

export const collections = { cases, casesEn };
