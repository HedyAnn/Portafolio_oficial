# Portafolio — Hedy Herrada

Sitio estático en Astro 7 + TypeScript con el sistema de diseño "Hedy Herrada" (tema Día por defecto, Noche opcional).

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala dependencias (Node 22) |
| `npm run dev` | Servidor local en http://localhost:4321 |
| `npm run check` | Revisa tipos y el esquema de los casos |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run tokens` | Regenera `src/styles/tokens.css` desde `tokens.json` |

## Dónde está cada cosa

- `src/styles/tokens.json`: tokens del sistema de diseño (fuente única). No editar `tokens.css` a mano.
- `src/content/cases/*.md`: un archivo por caso. El esquema está en `src/content.config.ts`.
- `src/site.ts`: correo, LinkedIn, Behance y CV.
- `src/components/home/HeroFlow.astro`: el diagrama de flujo del hero.
- `public/_headers`: cabeceras de seguridad (CSP estricta: sin estilos ni scripts en línea).

## Antes de publicar

- [ ] Completar `linkedin` y `behance` en `src/site.ts` y cambiar el correo por un alias del dominio.
- [ ] Reemplazar `public/cv/hedy-herrada-cv.pdf` por una versión sin número de teléfono.
- [ ] Escribir los casos y cambiar `draft: true` a `false`.
- [ ] Cambiar `site` en `astro.config.mjs` por el dominio real.
# Portafolio_oficial
