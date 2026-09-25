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
    // Nombre de archivo dentro de src/assets/avisos/ (banner del aviso).
    imagen: z.string().optional(),
    enlace: z.object({ texto: z.string(), url: z.string().url() }).optional(),
    urlAnterior: z.string().optional(),
  }),
});

// Páginas de contenido: src/content/paginas/<seccion>/<slug>.md
// Se publican en /<seccion>/<slug>/
const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    titulo: z.string(),
    seccion: z.enum(['descubre', 'aplica', 'comunidad', 'apoya', 'nosotros']),
    orden: z.number().default(50),
    resumen: z.string(),
    // Nombre de archivo dentro de src/assets/fotos/ para la cabecera.
    imagen: z.string().optional(),
    urlAnterior: z.string().optional(),
  }),
});

export const collections = { avisos, paginas };
