// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uwcmexico.org',
  trailingSlash: 'always',
  // Redirecciones de las URLs del sitio anterior para no perder posicionamiento en Google.
  redirects: {
    '/como-ir-a-un-uwc': '/aplica/',
    '/requisitos': '/aplica/#requisitos',
    '/proceso-de-seleccion': '/aplica/#proceso',
    '/perfil-del-candidato': '/aplica/#perfil',
    '/aportaciones-familiares': '/aplica/#costos',
    '/proceso-actual': '/avisos/',
    '/faqs': '/aplica/#preguntas',
    '/como-donar': '/apoya/',
    '/por-que-donar': '/apoya/',
    '/donar-con-paypal': '/apoya/#donar',
    '/afiliate': '/apoya/#afiliate',
    '/mision-y-valores': '/descubre/',
    '/educacion-uwc': '/descubre/#educacion',
    '/colegios-del-mundo-unido': '/descubre/#colegios',
    '/uwc-de-mexico': '/nosotros/',
    '/historia-uwc-mexico': '/nosotros/#historia',
    '/estados-financieros-2': '/nosotros/#transparencia',
    '/contacto': '/nosotros/#contacto',
    '/red-de-graduados': '/comunidad/',
    '/afiliados': '/comunidad/#afiliados',
  },
});
