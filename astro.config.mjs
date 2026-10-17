// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // En GitHub Pages el flujo de despliegue define SITE_URL y BASE_PATH; en local se usan estos valores.
  site: process.env.SITE_URL || 'https://tudominio.cl',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: {
    // CSS en archivos propios: compatible con una CSP estricta (style-src 'self')
    inlineStylesheets: 'never',
  },
});
