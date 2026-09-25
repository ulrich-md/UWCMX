// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

// Redirecciones del sitio anterior (uwcmexico.org en WordPress) al nuevo.
// Se generan solas a partir del campo `urlAnterior` de cada página y aviso,
// más algunas fijas para URLs que no tienen equivalente directo.
function archivosMd(dir) {
  return readdirSync(dir).flatMap((nombre) => {
    const ruta = join(dir, nombre);
    return statSync(ruta).isDirectory() ? archivosMd(ruta) : ruta.endsWith('.md') ? [ruta] : [];
  });
}

function redireccionesDesde(base, prefijo) {
  const mapa = {};
  for (const archivo of archivosMd(base)) {
    const anterior = readFileSync(archivo, 'utf8').match(/^urlAnterior:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1]?.trim();
    if (!anterior) continue;
    const id = relative(base, archivo).replace(/\.md$/, '').split('\\').join('/');
    const origen = anterior.replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '');
    // Nunca redirigir una ruta que existe en el sitio nuevo.
    const reservada = /^\/(descubre|aplica|avisos|comunidad|apoya|nosotros)(\/|$)/.test(origen);
    if (origen && origen !== '/' && !reservada) mapa[origen] = `${prefijo}${id}/`;
  }
  return mapa;
}

const fijas = {
  '/como-ir-a-un-uwc': '/aplica/',
  '/requisitos': '/aplica/#requisitos',
  '/proceso-actual': '/avisos/',
  '/faqs': '/aplica/preguntas-frecuentes/',
  '/que-es-uwc': '/descubre/',
  '/uwc-de-mexico': '/nosotros/',
  '/donativos': '/apoya/',
  '/documentos-importantes': '/nosotros/politicas/',
  '/estados-financieros-2': '/apoya/estados-financieros/',
  '/donar-con-paypal': '/apoya/como-donar/',
  '/colegiaturas-completas2': '/aplica/colegiaturas-completas/',
  '/organizacion': '/nosotros/organizacion/',
};

export default defineConfig({
  site: 'https://uwcmexico.org',
  trailingSlash: 'always',
  redirects: {
    ...redireccionesDesde('./src/content/avisos', '/avisos/'),
    ...redireccionesDesde('./src/content/paginas', '/'),
    ...fijas,
  },
});
