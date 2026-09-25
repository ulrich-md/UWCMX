import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Avisos del proceso de selección (las antiguas "NOTAS").
// Cada aviso es un archivo .md en src/content/avisos/.
const avisos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/avisos' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    generacion: z.string(),
    etapa: z.string().optional(),
    resumen: z.string(),
    enlace: z
      .object({ texto: z.string(), url: z.string().url() })
      .optional(),
  }),
});

export const collections = { avisos };
