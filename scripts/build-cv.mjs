// Genera los CV en PDF desde cv-source/ con el Chrome (o Edge) instalado en el equipo.
// Uso: npm run cv
import { chromium } from 'playwright-core';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const jobs = [
  { src: 'cv-source/cv-es.html', out: 'public/cv/hedy-herrada-cv.pdf' },
  { src: 'cv-source/cv-en.html', out: 'public/cv/hedy-herrada-cv-en.pdf' },
];

async function launch() {
  for (const channel of ['chrome', 'msedge']) {
    try { return await chromium.launch({ channel }); } catch { /* prueba el siguiente */ }
  }
  throw new Error('No se encontró Chrome ni Edge instalados.');
}

const browser = await launch();
const page = await browser.newPage();
for (const { src, out } of jobs) {
  await page.goto(pathToFileURL(path.join(root, src)).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(root, out), format: 'Letter', preferCSSPageSize: true, printBackground: true });
  console.log(`✓ ${out}`);
}
await browser.close();
