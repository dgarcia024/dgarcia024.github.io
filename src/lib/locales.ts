/**
 * Configuración de idiomas y secciones del sitio.
 *
 * El sitio usa el parámetro resto `[...lang]`:
 *   - `lang: undefined` → ruta sin prefijo  (es)  →  /
 *   - `lang: 'en'`      → ruta con prefijo (en)  →  /en/
 *
 * El contenido vive en una sola página por idioma: la navegación entre
 * secciones usa anclas (#projects) y no recarga el documento.
 */

export const DEFAULT_LOCALE = "es";
export const LOCALES = ["es", "en"] as const;

export const SECTIONS = [
	"home",
	"experience",
	"projects",
	"skills",
	"contact",
] as const;

export type Section = (typeof SECTIONS)[number];

/** Rutas estáticas para las páginas con parámetro resto `[...lang]`. */
export function localeStaticPaths() {
	return [{ params: { lang: undefined } }, { params: { lang: "en" } }];
}

/** Prefijo de URL según el locale: "/en" para inglés, "" para español. */
export function localePrefix(locale?: string) {
	return locale === "en" ? "/en" : "";
}
