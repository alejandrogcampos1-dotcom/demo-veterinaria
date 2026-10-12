import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { negocio } from './src/data/negocio';

// Dominio final: el de negocio.ts o, si está vacío, el que asigna Vercel al publicar.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = negocio.seo.url || (vercel ? `https://${vercel}` : 'http://localhost:4321');

const fuente = (archivo: string) => `./node_modules/@fontsource-variable/${archivo}`;

export default defineConfig({
  site,
  build: {
    // El CSS va dentro del HTML: la página se pinta sin esperar otro archivo
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // Plus Jakarta Sans (títulos) e Inter (textos), de Google Fonts, servidas desde el propio sitio
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-titulos',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: [fuente('plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2')],
            weight: '200 800',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-textos',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: [fuente('inter/files/inter-latin-wght-normal.woff2')],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
