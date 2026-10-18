// Idiomas del sitio: español en la raíz, inglés bajo /en/.
// Cada ruta en español tiene su equivalente en inglés (ver `routes`).
import { withBase } from './site';

export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];

// Clave de página → ruta (sin base) en cada idioma
export const routes = {
  home: { es: '/', en: '/en/' },
  projects: { es: '/casos/', en: '/en/projects/' },
  about: { es: '/sobre-mi/', en: '/en/about/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
} as const;
export type RouteKey = keyof typeof routes;

export const url = (key: RouteKey, lang: Lang) => withBase(routes[key][lang]);
export const caseUrl = (id: string, lang: Lang) => withBase(`${routes.projects[lang]}${id}/`);

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const stripBase = (pathname: string) => (base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname);

export function getLang(u: URL): Lang {
  return stripBase(u.pathname).startsWith('/en/') ? 'en' : 'es';
}

// Ruta equivalente en el otro idioma (para el selector y los hreflang)
export function translatePath(u: URL, to: Lang): string {
  const path = stripBase(u.pathname);
  const from: Lang = getLang(u);
  if (from === to) return withBase(path);
  for (const key of Object.keys(routes) as RouteKey[]) {
    const src = routes[key][from];
    if (key === 'home') { if (path === src) return url('home', to); continue; }
    if (path.startsWith(src)) return withBase(routes[key][to] + path.slice(src.length));
  }
  return url('home', to);
}

export const ui = {
  es: {
    htmlLang: 'es',
    ogLocale: 'es_CL',
    role: 'Product Designer · UX/UI',
    description: 'Portafolio de Hedy Herrada, Product Designer UX/UI. Investigación, flujos, prototipos y sistemas de diseño.',
    skip: 'Saltar al contenido',
    navLabel: 'Principal',
    nav: { projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto' },
    home: 'inicio',
    contact: 'Contactar',
    themeToDark: 'Cambiar a tema oscuro',
    themeToLight: 'Cambiar a tema claro',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    email: 'Escribirme un correo',
    cv: 'Descargar CV',
    cvLong: 'Descargar CV (PDF, 225 KB)',
    switchTo: 'Read in English',
    switchShort: 'EN',
    footerLabel: 'Pie de página',
    location: 'Santiago, Chile',
    footerNote: 'Pantallas de proyectos con datos ficticios.',
    linkedin: 'Ver LinkedIn',
    origin: { FollowUP: 'SaaS de analítica retail', Independiente: 'Independiente', Académico: 'Académico', Personal: 'Personal' },
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    role: 'Product Designer · UX/UI',
    description: 'Portfolio of Hedy Herrada, UX/UI Product Designer. Research, flows, prototypes and design systems.',
    skip: 'Skip to content',
    navLabel: 'Main',
    nav: { projects: 'Projects', about: 'About', contact: 'Contact' },
    home: 'home',
    contact: 'Get in touch',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    email: 'Send me an email',
    cv: 'Download CV',
    cvLong: 'Download CV (PDF, 225 KB)',
    switchTo: 'Ver en español',
    switchShort: 'ES',
    footerLabel: 'Footer',
    location: 'Santiago, Chile',
    footerNote: 'Project screens use fictional data.',
    linkedin: 'View LinkedIn',
    origin: { FollowUP: 'Retail analytics SaaS', Independiente: 'Freelance', Académico: 'Academic', Personal: 'Personal' },
  },
} as const;

export const navFor = (lang: Lang) => [
  { href: url('projects', lang), label: ui[lang].nav.projects, spy: 'casos' },
  { href: url('about', lang), label: ui[lang].nav.about, spy: 'sobre' },
  { href: url('contact', lang), label: ui[lang].nav.contact, spy: 'contacto' },
];
