# Sitio web de UWC México (prototipo)

Propuesta de un sitio nuevo para [uwcmexico.org](https://uwcmexico.org), hecho desde cero con [Astro](https://astro.build).

- **Diseño:** inspirado en [uwccostarica.org](https://uwccostarica.org) y [uwc.org](https://www.uwc.org), con la marca UWC International.
- **Contenido:** incluye todo lo del sitio anterior, reorganizado.
- **Desempeño:** es rápido, accesible y fácil de mantener.

## Estructura

| Ruta | Contenido |
|---|---|
| `/` | Portada con foto y parallax. Debajo, los **avisos más recientes del proceso** (lo primero que ve un aspirante). Luego qué es UWC, las etapas, cifras, carrusel de los 18 colegios, testimonio y donativos. |
| `/aplica/` | Estado de la convocatoria, avisos, requisitos, etapas, becas, páginas para aspirantes y familias, y preguntas frecuentes. |
| `/avisos/` | Todos los avisos ("NOTAS"), agrupados por generación. La generación actual aparece abierta y las anteriores archivadas. |
| `/descubre/`, `/comunidad/`, `/apoya/`, `/nosotros/` | Portada de cada sección, con tarjetas a sus páginas. |
| `/<sección>/<página>/` | Páginas de contenido migradas del sitio anterior, con menú lateral de la sección. |

El menú principal se genera solo: cada página nueva que se agregue en `src/content/paginas/<sección>/` aparece en el menú desplegable, en el pie y en la portada de su sección.

**Redirecciones:** cada página y aviso guarda en `urlAnterior` su dirección en el sitio viejo, y `astro.config.mjs` crea las redirecciones automáticamente para no perder posicionamiento en Google.

## Cómo editar el contenido

| Quiero… | Archivo |
|---|---|
| Cambiar el estado de la convocatoria (`abierta`, `en-proceso`, `cerrada`) y la etapa actual | `src/data/sitio.json` → `convocatoria` |
| Publicar un aviso nuevo | Crear un `.md` en `src/content/avisos/` (copia uno existente). El banner va en `src/assets/avisos/`. |
| Editar o crear una página | `src/content/paginas/<sección>/<página>.md` |
| Cambiar requisitos, etapas, cifras, afiliados, correos o redes | `src/data/sitio.json` |
| Preguntas frecuentes | `src/data/preguntas.json` |
| Testimonios | `src/data/testimonios.json` |
| Colegios | `src/data/colegios.json`. La foto de cada uno es `src/assets/fotos/colegio-<slug>.jpg`. |
| Fotos | `src/assets/fotos/`. El inventario con textos alternativos y fuentes está en `src/data/fotos.json`. |

Al cambiar `convocatoria.estado` y `etapaActual`, se actualizan solos la línea de tiempo ("En curso"), el aviso de la portada y los botones de "Aplica".

> **Siguiente paso recomendado:** conectar un editor visual (por ejemplo [Sanity](https://www.sanity.io), con plan gratuito). Así el comité puede editar desde el navegador con su cuenta de Google, sin tocar archivos.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera el sitio en dist/
```

## Publicación

Es un sitio estático. Se puede publicar gratis en Vercel, Netlify o Cloudflare Pages conectando este repositorio. Para usar el dominio solo cambian los registros DNS del sitio web; **el correo de Google Workspace no se toca**.

## Diseño

- **Marca UWC:** azul `#004A97` y verde `#009482`, degradado azul → verde como en uwccostarica.org, tipografía Source Sans 3 y Source Serif 4 para citas.
- **Donativos:** los botones de donar usan naranja `#C2410C`.
- **Fotografía a sangre:** con **parallax** hecho en CSS (animaciones ligadas al scroll, sin JavaScript). Se desactiva si la persona pidió "reducir movimiento".
- **Imágenes:** se convierten a WebP en varios tamaños automáticamente.
- **Contraste:** todos los textos cumplen al menos WCAG AA (4.5:1).

## Pendientes antes de publicar

- [ ] Confirmar permisos de uso de fotos. `src/data/fotos.json` indica la fuente de cada una; algunas de colegios vienen de sus sitios oficiales.
- [ ] Confirmar cifras: 444 aspirantes, 114 / 130 afiliados, 40,000 USD de costo promedio.
- [ ] Mover los PDFs (informes, políticas, formularios) al nuevo sitio. Hoy enlazan al sitio anterior.
- [ ] Publicar las listas de resultados por matrícula, sin nombres completos de menores.
- [ ] Conectar el editor visual y publicar.
