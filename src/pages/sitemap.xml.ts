import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { techniques } from '../data/techniques';
export const GET: APIRoute = async ({ site }) => {
  const [recipes, meals] = await Promise.all([getCollection('recipes'), getCollection('meals')]);
  const base = import.meta.env.BASE_URL;
  const paths = [
    '',
    'learn/',
    'standards/',
    'style-guide/',
    'meals/',
    ...recipes.map((r) => `recipes/${r.slug}/`),
    ...meals.map((m) => `meals/${m.slug}/`),
    ...techniques.map((t) => `learn/${t.slug}/`),
  ];
  const escapeXml = (s: string) =>
    s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${escapeXml(new URL(base + p, site).href)}</loc></url>`).join('\n')}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
