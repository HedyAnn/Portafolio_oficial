// Datos globales del sitio. Un enlace vacío no se muestra.

// Antepone la ruta base del sitio (por ejemplo /portafolio/ en GitHub Pages).
export const withBase = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
export const site = {
  name: 'Hedy Herrada',
  email: 'hedy.herrada@gmail.com', // reemplazar por un alias del dominio al publicarlo
  linkedin: 'https://www.linkedin.com/in/hedy-herrada-75365b147/',
  behance: 'https://www.behance.net/hedyherrada',
  // Los CV (ES y EN) se definen por idioma en src/i18n.ts (cvUrl)
} as const;

// Textos, navegación y rutas por idioma: ver src/i18n.ts
