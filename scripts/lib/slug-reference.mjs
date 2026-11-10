// Slugs can contain hyphens: a shorter alias inside a canonical slug is not
// a reference to the alias. Keep punctuation, YAML lists and URL delimiters valid.
export function containsSlugToken(text, slug) {
  const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-zA-Z0-9_-])${escaped}(?![a-zA-Z0-9_-])`).test(text);
}

const urlPattern =
  /https?:\/\/[^\s<>"')\]]+|\/\/[^\s<>"')\]]+|(?:\.{1,2}\/|\/)[^\s<>"')\]]+|(?<![a-zA-Z0-9_-])(?:recipes|meals)\/[^\s<>"')\]]+/g;
// The recipe slug a URL points to on this site, '' for any other URL.
function localRecipeSlug(url, siteUrl, hostname) {
  try {
    const parsed = new URL(url, siteUrl);
    if (parsed.hostname !== hostname) return '';
    const recipe = parsed.pathname.match(/(?:^|\/)recipes\/([^/]+)(?:\/|$)/);
    return recipe ? decodeURIComponent(recipe[1]) : '';
  } catch {
    return url;
  }
}

// A publisher's source URL or a meal URL can legitimately share a recipe slug.
// Check the recipe namespace in URLs, and keep bare tokens for YAML references.
export function containsRecipeSlugReference(text, slug, siteUrl) {
  const hostname = new URL(siteUrl).hostname;
  const localContent = text.replace(urlPattern, (url) => localRecipeSlug(url, siteUrl, hostname));
  if (slug.includes('-')) return containsSlugToken(localContent, slug);
  // A one-word slug such as "guacamole" is also an ordinary word in prose. Count it only
  // where a slug is a reference: a local recipe URL, a YAML list item, a meal or relation
  // field, or a key in a notes map.
  const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const urls = [];
  const prose = text.replace(urlPattern, (url) => {
    urls.push(localRecipeSlug(url, siteUrl, hostname));
    return '';
  });
  if (urls.includes(slug)) return true;
  const q = `['"]?${escaped}['"]?`;
  return [
    `^\\s*-\\s+${q}\\s*(?:#.*)?$`,
    `^\\s*(?:main|base|salad|sauce|dessert|drink|isVariationOf|extractedFrom):\\s*${q}\\s*(?:#.*)?$`,
    `^\\s+${q}:(?:\\s|$)`,
    `^\\s+${q},?\\s*(?:#.*)?$`,
    `^\\s*[A-Za-z]+:\\s*\\[[^\\]\\n]*(?<![a-zA-Z0-9_-])${escaped}(?![a-zA-Z0-9_-])`,
  ].some((pattern) => new RegExp(pattern, 'm').test(prose));
}
