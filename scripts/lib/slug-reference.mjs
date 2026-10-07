// Slugs can contain hyphens: a shorter alias inside a canonical slug is not
// a reference to the alias. Keep punctuation, YAML lists and URL delimiters valid.
export function containsSlugToken(text, slug) {
  const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-zA-Z0-9_-])${escaped}(?![a-zA-Z0-9_-])`).test(text);
}

// A publisher's source URL or a meal URL can legitimately share a recipe slug.
// Check the recipe namespace in URLs, and keep bare tokens for YAML references.
export function containsRecipeSlugReference(text, slug, siteUrl) {
  const hostname = new URL(siteUrl).hostname;
  const localContent = text.replace(
    /https?:\/\/[^\s<>"')\]]+|\/\/[^\s<>"')\]]+|(?:\.{1,2}\/|\/)[^\s<>"')\]]+|(?<![a-zA-Z0-9_-])(?:recipes|meals)\/[^\s<>"')\]]+/g,
    (url) => {
      try {
        const parsed = new URL(url, siteUrl);
        if (parsed.hostname !== hostname) return '';
        const recipe = parsed.pathname.match(/(?:^|\/)recipes\/([^/]+)(?:\/|$)/);
        return recipe ? decodeURIComponent(recipe[1]) : '';
      } catch {
        return url;
      }
    }
  );
  return containsSlugToken(localContent, slug);
}
