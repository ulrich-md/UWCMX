import type { ImageMetadata } from 'astro';

// Todas las fotos de src/assets/fotos y los banners de src/assets/avisos,
// para poder referirlas por nombre de archivo desde el contenido.
const fotos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/fotos/*.{jpg,jpeg,png,webp}', { eager: true });
const banners = import.meta.glob<{ default: ImageMetadata }>('/src/assets/avisos/*.{jpg,jpeg,png,webp}', { eager: true });

const RESPALDO = '/src/assets/fotos/banderas.jpg';

export function foto(nombre?: string): ImageMetadata {
  const encontrada = nombre ? fotos[`/src/assets/fotos/${nombre}`] : undefined;
  return (encontrada ?? fotos[RESPALDO]).default;
}

export function existeFoto(nombre: string): boolean {
  return `/src/assets/fotos/${nombre}` in fotos;
}

export function banner(nombre?: string): ImageMetadata | undefined {
  return nombre ? banners[`/src/assets/avisos/${nombre}`]?.default : undefined;
}
