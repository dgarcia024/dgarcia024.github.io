// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'
import { loadEnv } from 'vite';

import sitemap from '@astrojs/sitemap';

// URL pública del sitio. Se puede sobreescribir sin tocar el código definiendo
// SITE_URL en el entorno o en un archivo .env (ver .env.example).
const { SITE_URL = 'https://dgarcia024.github.io/' } = loadEnv(
	process.env.NODE_ENV ?? 'development',
	process.cwd(),
	'SITE_URL'
);

// https://astro.build/config
export default defineConfig({
   site: SITE_URL,

   devToolbar: { enabled: false },
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
   integrations: [icon(), sitemap()]
});
