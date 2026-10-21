# Portafolio — Daniel García

Sitio web personal construido con [Astro](https://astro.build), Tailwind CSS v4 e
internacionalización (es/en) con enrutado por prefijo de idioma.

Tema visual **neon cyberpunk**: fondo oscuro con grilla, acentos cian/magenta,
resplandores y un navbar flotante tipo "glass dock".

## 🚀 Stack

| Herramienta | Versión | Uso |
| :--- | :--- | :--- |
| [Astro](https://astro.build) | 7.3 | Generador de sitio estático (SSG) |
| [Tailwind CSS](https://tailwindcss.com) | 4.3 | Utilidades + sistema de diseño en CSS |
| [astro-icon](https://github.com/natemoo-re/astro-icon) | 1.2 | Iconos (set de [MDI](https://pictogrammers.com/library/mdi/)) |
| [@astrojs/sitemap](https://docs.astro.build/en/integrations/sitemap/) | 3.7 | Sitemap XML |
| [sharp](https://sharp.pixelplumbing.com) | 0.35 | Optimización de imágenes |
| [Prettier](https://prettier.io) | 3.9 | Formato (`.prettierrc` + plugins de Astro y Tailwind) |
| TypeScript | 6.0 | Type-checking estricto |

## 📁 Estructura

```text
src/
├── assets/              # avatar.png
├── components/
│   ├── App.astro        # compone todas las secciones de la página
│   ├── Header.astro     # handle @dgarcia + selector de idioma
│   ├── Navbar.astro     # dock flotante (glass, blur, iconos MDI)
│   ├── ParticlesBackground.astro
│   └── sections/
│       ├── Section.astro    # wrapper reutilizable (título, divider, slot)
│       ├── Home.astro       # hero
│       ├── Experience.astro
│       ├── Projects.astro
│       ├── Skills.astro
│       └── Contact.astro
├── i18n/
│   ├── index.ts         # getI18N({ currentLocale })
│   ├── es.ts            # textos + metadatos SEO por página
│   └── en.ts
├── layouts/Layout.astro # shell HTML, head SEO, JSON-LD, Navbar y Header
├── lib/locales.ts       # idiomas y secciones
├── pages/
│   ├── 404.astro
│   └── [...lang]/       # ruta con prefijo de idioma
│       └── index.astro  # /  y  /en/
└── styles/global.css    # @theme (tokens) + capa base + utilidades
```

## 🌍 Rutas

El sitio usa el parámetro resto `[...lang]` y **todo el contenido vive en una sola
página por idioma**:

| Español | Inglés |
| :--- | :--- |
| `/` | `/en/` |

Dentro de la página, la navegación entre secciones usa **anclas** (`#projects`,
`#skills`…), por lo que **no hay recarga del documento**: es un salto dentro del
HTML. Un *scroll-spy* marca en el navbar la sección que está en pantalla.

El idioma por defecto (`es`) **no lleva prefijo**; el resto sí. Está configurado en
`astro.config.mjs` con `prefixDefaultLocale: false`.

Para añadir una sección nueva:

1. Crea el componente en `src/components/sections/` y añádelo en `App.astro`
2. Añade su entrada en `SECTIONS` (`src/lib/locales.ts`) y en `items` (`Navbar.astro`)
3. Añade sus textos en `src/i18n/es.ts` y `src/i18n/en.ts`
4. Dale un `id` a su `<section>` para que el ancla funcione

## 🎨 Sistema de diseño

Todos los tokens viven en `src/styles/global.css` dentro de `@theme static`. Cada token
genera una utilidad de Tailwind **y** una CSS variable en `:root`:

| Token | Utilidad | CSS variable |
| :--- | :--- | :--- |
| `--color-primary` | `text-primary`, `bg-primary/10` | `--color-primary` |
| `--color-secondary` | `text-secondary` | `--color-secondary` |
| `--color-accent` | `text-accent` | `--color-accent` |
| `--color-void` / `--color-surface` | `bg-void`, `bg-surface/60` | idem |
| `--color-fg` / `--color-fg-muted` | `text-fg`, `text-fg-muted` | idem |
| `--color-border-weak` | `border-border-weak` | idem |
| `--text-display` | `text-display` | `--text-display` |
| `--shadow-glow` / `--shadow-nav` | `shadow-glow`, `shadow-nav` | idem |

Además, utilidades propias: `text-gradient`, `animate-rise`, `animate-nav-label`.

> Los `@keyframes` deben vivir **fuera** de `@theme` si no están referenciados por un
> token `--animate-*`: dentro de `@theme` Tailwind los elimina.

Para leer un color desde JavaScript (p. ej. el canvas de partículas):

```js
const styles = getComputedStyle(document.documentElement);
const cyan = styles.getPropertyValue("--color-primary").trim();
```

## 📐 Sistema de layout

Inspirado en [opencode.ai](https://opencode.ai/): una **columna central de 67.5rem
(1080px)** con reglas verticales quearitma todo el contenido.

```css
.container {
	max-width: 67.5rem;
	margin: 0 auto;
	border: 1px solid var(--color-border-weak);
	border-top: none;
}

@media (max-width: 65rem) {
	.container {
		border: none;
	}
}
```

- El `Layout.astro` envuelve header y secciones en un único `.container`, de modo que
  las reglas verticales recorren toda la página.
- Cada sección se inserta **80px** (`md:px-20`) respecto a la regla y tiene
  **64px** (`py-16`) de padding vertical, más un borde superior que la separa de la
  anterior.
- Los títulos usan `text-wrap: balance` (reparten las líneas) y los párrafos
  `text-wrap: pretty` con `max-width: 82%` y `line-height: 2` (medida de lectura).
- `h1` a 38px en escritorio y 22px por debajo de 60rem.

## 🧩 Chrome de la interfaz

Dos elementos fijos viven en el `Layout.astro` (no en las secciones), por lo que están
presentes en todas las páginas:

- **`Navbar.astro`** — dock flotante (`fixed bottom-6`, translúcido con
  `backdrop-blur`, bordes redondeados) con los iconos MDI de cada sección. Entra desde
  fuera de pantalla al cargar (`animate-nav-in`) y la etiqueta del icono activo se
  despliega con animación al lado del icono. Un *scroll-spy* marca la sección visible.
- **`Header.astro`** — handle `@dgarcia` con punto neón y selector de idioma, que
  mantiene la sección actual al cambiar de locale.

## 🔍 SEO

Como todo el contenido está en una sola página por idioma:

- Un único `<h1>` (el nombre) y un `<h2>` por sección → jerarquía válida
- El HTML es estático: los crawlers ven todo el contenido sin ejecutar JS
- `canonical`, `hreflang` (es/en/x-default) y `og:` por idioma
- **JSON-LD `schema.org/Person`** en el `<head>`: nombre, puesto, descripción, `sameAs`
  (redes) y `knowsAbout` (tecnologías) → habilita *rich results* en Google
- Sitemap con una URL por idioma

## 🧞 Comandos

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:3000` |
| `pnpm build` | Genera el sitio estático en `./dist/` |
| `pnpm preview` | Sirve el build localmente |
| `pnpm check` | Type-checking con `@astrojs/check` |

> En desarrollo también puedes usar `astro dev --background`, y gestionarlo con
> `astro dev status`, `astro dev logs` y `astro dev stop`.

## 🚀 Despliegue

El sitio es estático: `pnpm build` genera `dist/`, que se puede publicar en GitHub Pages,
Netlify, Vercel, Cloudflare Pages, etc.

La URL pública se define con la variable `SITE_URL` (ver `.env.example`):

```bash
SITE_URL=https://tu-dominio.com pnpm build
```

Si no se define, se usa el valor por defecto de `astro.config.mjs`. Esta URL es la que
se usa en `canonical`, `hreflang`, `og:url` y el sitemap.

## 📝 Pendiente

### Contenido (placeholders)

Marcados con `TODO` en `src/i18n/`:

- `experience.items[]` — empresas, cargos y periodos reales
- `projects.items[]` — nombres, descripciones, stack y URLs reales
- `skills.groups[]` — el stack real
- `contact.email` y `contact.links[]` — correo y perfiles reales

### Assets

- `src/assets/avatar.png` tiene **fondo blanco**: sobre el tema oscuro abre un círculo
  blanco muy llamativo. Lo ideal es un PNG con fondo transparente (o con el estilo
  neón que se prefiera).

### Infraestructura

- No hay todavía **CI/CD**: falta un workflow de GitHub Pages (o el despliegue en el
  hosting que se elija) que ejecute `pnpm build` y publique `dist/`.
- Falta un archivo `LICENSE` en la raíz.

## 📄 Licencia

Pendiente de definir.
