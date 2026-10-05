// Slugs can contain hyphens: a shorter alias inside a canonical slug is not
// a reference to the alias. Keep punctuation, YAML lists and URL delimiters valid.
export function containsSlugToken(text, slug) {
  const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-zA-Z0-9_-])${escaped}(?![a-zA-Z0-9_-])`).test(text);
}

// A publisher's source URL can legitimately retain a recipe's former name.
// Exclude those URLs while still checking local slugs and same-host URLs.
export function containsRecipeSlugReference(text, slug, siteUrl) {
  const hostname = new URL(siteUrl).hostname;
  const localContent = text.replace(/https?:\/\/[^\s<>"')\]]+/g, (url) => {
    try {
      return new URL(url).hostname === hostname ? url : '';
    } catch {
      return url;
    }
  });
  return containsSlugToken(localContent, slug);
}
