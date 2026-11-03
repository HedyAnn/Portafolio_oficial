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
      // Texto opcional para la ficha "Contexto"; si falta, se usa origen y año
      contexto: z.string().optional(),
      // Bajada bajo el título del caso; si falta, se usa el resumen
      lead: z.string().optional(),
      // Proyecto al que pertenece (se muestra en la tarjeta como "Proyecto: …")
      proyecto: z.string().optional(),
      // Texto de la línea superior de la tarjeta; si falta, se usa origen y año
      meta: z.string().optional(),
      // Muestra el aviso de imágenes referenciales (recreaciones con datos ficticios)
      imagenesReferenciales: z.boolean().default(false),
      // Posición en el inicio (1 = tarjeta grande); sin valor, el caso queda en "ver todos"
      homeOrder: z.number().int().optional(),
      cover: image().optional(),
      coverAlt: z.string().min(10).optional(),
      // Capturas adicionales, opcionales, bajo la portada
      cover2: image().optional(),
      coverAlt2: z.string().min(10).optional(),
      cover3: image().optional(),
      coverAlt3: z.string().min(10).optional(),
      // Link opcional al proyecto publicado afuera (por ejemplo, Behance)
      behance: z.string().url().optional(),
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
