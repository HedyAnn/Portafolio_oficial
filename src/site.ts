// Datos globales del sitio. Un enlace vacío no se muestra.

// Antepone la ruta base del sitio (por ejemplo /portafolio/ en GitHub Pages).
export const withBase = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
export const site = {
  name: 'Hedy Herrada',
  email: 'hedy.herrada@gmail.com', // reemplazar por un alias del dominio al publicarlo
  linkedin: 'https://www.linkedin.com/in/hedy-herrada-75365b147/',
  behance: 'https://www.behance.net/gallery/242380291/EAT-Japan-App-movil-Presentacion-UX', // reemplazar por la URL del perfil
  cv: withBase('/cv/hedy-herrada-cv.pdf'),
} as const;

// Textos, navegación y rutas por idioma: ver src/i18n.ts
