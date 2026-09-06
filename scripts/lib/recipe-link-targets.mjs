// Validate recipe destinations independently from their query and fragment.
// Anchor existence is checked against rendered pages by the full link scan.
export function extractRecipeTargets(body) {
  return [...body.matchAll(/\]\((\/(?:mise\/)?recipes\/[^\s)]+)\)/g)].map((match) => {
    const url = new URL(match[1], 'https://mise.invalid');
    return url.pathname.replace(/^\/(?:mise\/)?recipes\//, '').replace(/\/$/, '');
  });
}
