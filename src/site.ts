// Datos globales del sitio. Un enlace vacío no se muestra.
export const site = {
  name: 'Hedy Herrada',
  role: 'Product Designer · UX/UI',
  description:
    'Portafolio de Hedy Herrada, Product Designer especializada en productos de Data & Business Intelligence.',
  email: 'hedy.herrada@gmail.com', // reemplazar por un alias del dominio al publicarlo
  linkedin: '', // pegar la URL del perfil
  behance: 'https://www.behance.net/gallery/242380291/EAT-Japan-App-movil-Presentacion-UX', // reemplazar por la URL del perfil
  cv: '/cv/hedy-herrada-cv.pdf',
  cvLabel: 'Descargar CV (PDF, 225 KB)',
} as const;

export const nav = [
  // spy: sección del inicio que activa el enlace al hacer scroll
  { href: '/casos/', label: 'Proyectos', spy: 'casos' },
  { href: '/sobre-mi/', label: 'Sobre mí', spy: 'sobre' },
  { href: '/contacto/', label: 'Contacto', spy: 'contacto' },
] as const;
