/** Production site on GitHub Pages (project site). */
export const SITE_URL = "https://calmwalija.github.io/portfolio"

/**
 * Prefix for absolute-from-root asset paths in static HTML.
 * CI sets NEXT_PUBLIC_BASE_PATH=/portfolio to match next.config basePath.
 */
export function withBasePath(path: string): string {
  const base =
    process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || ""
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalized}`
}
