import { getCollection } from 'astro:content';

export type Seccion = 'descubre' | 'aplica' | 'comunidad' | 'apoya' | 'nosotros';

interface EnlaceFijo {
  texto: string;
  href: string;
  orden: number;
}

// Datos de cada sección del menú principal.
export const SECCIONES: Record<Seccion, { titulo: string; descripcion: string; foto: string; extra: EnlaceFijo[] }> = {
  descubre: {
    titulo: 'Descubre UWC',
    descripcion: 'Qué son los Colegios del Mundo Unido, su misión y cómo es la vida en ellos.',
    foto: 'hero-adriatico.jpg',
    extra: [],
  },
  aplica: {
    titulo: 'Aplica',
    descripcion: 'Requisitos, etapas, becas y todo lo que necesitas para participar en el proceso de selección.',
    foto: 'seccion-mexicanos-bandera.jpg',
    extra: [
      { texto: 'Avisos del proceso', href: '/avisos/', orden: 1 },
      { texto: 'Preguntas frecuentes', href: '/aplica/preguntas-frecuentes/', orden: 99 },
    ],
  },
  comunidad: {
    titulo: 'Comunidad',
    descripcion: 'Graduados, becarios y afiliados que mantienen viva la red UWC en México.',
    foto: 'seccion-comunidad-voluntarios.jpg',
    extra: [],
  },
  apoya: {
    titulo: 'Apoya',
    descripcion: 'Dona o afíliate: tu aportación se convierte en becas para jóvenes mexicanos.',
    foto: 'hero-graduacion-robert-bosch.jpg',
    extra: [],
  },
  nosotros: {
    titulo: 'Nosotros',
    descripcion: 'Quiénes somos, cómo nos organizamos, nuestras políticas y cómo contactarnos.',
    foto: 'galeria-bandera-uwc-mar.jpg',
    extra: [],
  },
};

export const ORDEN_SECCIONES: Seccion[] = ['descubre', 'aplica', 'comunidad', 'apoya', 'nosotros'];

export interface EnlaceMenu {
  texto: string;
  href: string;
}

/** Enlaces de una sección: páginas de contenido + enlaces fijos, en orden. */
export async function enlacesDeSeccion(seccion: Seccion): Promise<EnlaceMenu[]> {
  const paginas = (await getCollection('paginas')).filter((p) => p.data.seccion === seccion);
  const lista = [
    ...paginas.map((p) => ({ texto: p.data.titulo, href: `/${p.id}/`, orden: p.data.orden })),
    ...SECCIONES[seccion].extra,
  ].sort((a, b) => a.orden - b.orden);
  return lista.map(({ texto, href }) => ({ texto, href }));
}

export async function menuCompleto() {
  return Promise.all(
    ORDEN_SECCIONES.map(async (s) => ({
      seccion: s,
      titulo: SECCIONES[s].titulo,
      href: `/${s}/`,
      enlaces: await enlacesDeSeccion(s),
    })),
  );
}
