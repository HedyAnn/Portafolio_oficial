// Genera src/styles/tokens.css a partir de src/styles/tokens.json (fuente única del sistema de diseño).
import { readFileSync, writeFileSync } from 'node:fs';

const src = new URL('../src/styles/tokens.json', import.meta.url);
const out = new URL('../src/styles/tokens.css', import.meta.url);
const t = JSON.parse(readFileSync(src, 'utf8'));
const [first, ...rest] = t.color.themes.map((th) => th.id);

const themed = [...t.color.tokens, ...(t.shadow?.tokens ?? [])];
const val = (tok, theme) => (typeof tok.value === 'string' ? tok.value : tok.value[theme] ?? tok.value[first]);
const block = (theme) => themed.map((tok) => `  --${tok.name}: ${val(tok, theme)};`).join('\n');

const plain = ['spacing', 'radius', 'gradient', 'duration', 'easing']
  .flatMap((fam) => t[fam]?.tokens ?? [])
  .map((tok) => `  --${tok.name}: ${tok.value};`);
const fonts = Object.entries(t.type.families).map(([k, v]) => `  --font-${k}: ${v};`);

let css = `/* Generado desde tokens.json — no editar a mano. */\n\n`;
css += `:root,\n[data-scheme='${first}'] {\n  color-scheme: ${first === 'dark' ? 'dark' : 'light'};\n${block(first)}\n}\n\n`;
for (const th of rest) css += `[data-scheme='${th}'] {\n  color-scheme: ${th === 'dark' ? 'dark' : 'light'};\n${block(th)}\n}\n\n`;
css += `:root {\n${[...plain, ...fonts].join('\n')}\n}\n`;
writeFileSync(out, css);
console.log('tokens.css generado');
