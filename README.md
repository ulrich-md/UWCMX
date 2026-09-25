# Sitio web de UWC México (prototipo)

Propuesta de un sitio nuevo para [uwcmexico.org](https://uwcmexico.org), hecho desde cero con [Astro](https://astro.build). Es rápido, accesible y fácil de mantener.

| Página de inicio (móvil, Lighthouse) | Sitio actual | Prototipo |
|---|---|---|
| Rendimiento | 25 | **99** |
| Aparece el contenido principal (LCP) | 35.4 s | **1.8 s** |
| Peso de la página | 6.5 MB | **137 KB** |
| Accesibilidad / Buenas prácticas / SEO | 76 / 75 / 85 | **100 / 100 / 100** |

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Inicio: presentación, "¿qué te trae?", qué es UWC, cifras, etapas, testimonio, donar, avisos, transparencia |
| `/aplica/` | Requisitos, perfil, etapas, becas y costos, familias, otras vías (GSP), preguntas frecuentes |
| `/avisos/` | Avisos del proceso de selección (las antiguas "NOTAS"), agrupados por generación |
| `/apoya/` | Formas de donar, donativos desde EE. UU., afiliación y cuotas |
| `/descubre/` | Misión, modelo educativo y los 18 colegios |
| `/comunidad/` | Testimonios, red de graduados y afiliados |
| `/nosotros/` | Historia, documentos de transparencia y contacto |

Las URLs importantes del sitio anterior (por ejemplo `/requisitos/` o `/como-donar/`) redirigen a las nuevas, así que no se pierde el posicionamiento en Google. Las redirecciones están en `astro.config.mjs`.

## Cómo editar el contenido

No hace falta saber programar. Todo el contenido está en archivos de texto:

| Quiero… | Archivo |
|---|---|
| Cambiar el estado de la convocatoria (abierta, en proceso o cerrada) y la etapa actual | `src/data/sitio.json` → `convocatoria` |
| Publicar un aviso nuevo | Crear un archivo `.md` en `src/content/avisos/` (copia uno existente) |
| Cambiar fechas o descripción de las etapas | `src/data/sitio.json` → `etapas` |
| Actualizar cifras, afiliados, correos o redes | `src/data/sitio.json` |
| Editar las preguntas frecuentes | `src/data/preguntas.json` |
| Agregar un documento (informe, política) | `src/data/documentos.json` |
| Agregar un testimonio | `src/data/testimonios.json` |

Al cambiar `convocatoria.estado`, se actualizan solos la barra de aviso superior, la línea de tiempo ("Estamos aquí") y los botones de la página "Aplica".

> **Siguiente paso recomendado:** conectar un editor visual ([Sanity](https://www.sanity.io), con plan gratuito) para que el comité edite todo desde el navegador, con su cuenta de Google y sin tocar archivos.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera el sitio en dist/
```

## Publicación

Es un sitio estático, así que se puede publicar gratis en Vercel, Netlify o Cloudflare Pages conectando este repositorio. Cada cambio publicado en GitHub actualiza el sitio en un par de minutos. Para el dominio solo cambian los registros DNS del sitio web; **el correo de Google Workspace no se toca**.

## Diseño

- **Marca UWC International:** azul `#004A97`, verde `#009482`, tipografías Source Serif 4 (títulos) y Source Sans 3 (texto), servidas desde el propio sitio.
- **Acento:** rosa mexicano `#C8006A` para las acciones de donar.
- Los colores y medidas están en `src/styles/global.css`. Todas las combinaciones de texto cumplen un contraste WCAG AA de al menos 4.5:1.
- Las imágenes se convierten a WebP y se generan en varios tamaños automáticamente.
- Las animaciones se desactivan si la persona tiene activado "reducir movimiento".

## Pendientes antes de publicar

- [ ] Confirmar las cifras con el comité: 444 aspirantes, afiliados 114 / 130, costo promedio de 40,000 USD.
- [ ] Confirmar que hay consentimiento para usar las fotos de becarios y graduados.
- [ ] Mover los PDFs (informes, políticas) al nuevo sitio. Hoy apuntan al sitio anterior.
- [ ] Publicar las listas de resultados por matrícula, no con nombres completos de menores.
- [ ] Definir el formulario de "Actualiza tus datos" para graduados (hoy abre un correo).
- [ ] Conectar el editor visual (Sanity) y publicar en Vercel, Netlify o Cloudflare.
