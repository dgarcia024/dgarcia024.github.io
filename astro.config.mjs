// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
   i18n: {
      defaultLocale: 'es',
      locales: ['es','en'],
      routing: {
         prefixDefaultLocale: false,
      }
   },
   server: {
      port: 3000
   },
   vite: {
      plugins: [tailwindcss()]
   },
   integrations: [icon()]
});
