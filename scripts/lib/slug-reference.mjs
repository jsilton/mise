// Slugs can contain hyphens: a shorter alias inside a canonical slug is not
// a reference to the alias. Keep punctuation, YAML lists and URL delimiters valid.
export function containsSlugToken(text, slug) {
  const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-zA-Z0-9_-])${escaped}(?![a-zA-Z0-9_-])`).test(text);
}
