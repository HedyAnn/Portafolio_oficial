// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tudominio.cl', // reemplazar al comprar el dominio
  trailingSlash: 'always',
  build: {
    // CSS en archivos propios: compatible con una CSP estricta (style-src 'self')
    inlineStylesheets: 'never',
  },
});
