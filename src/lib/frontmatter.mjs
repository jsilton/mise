import matter from 'gray-matter';

// Recipe metadata is data. gray-matter otherwise evaluates ---js/---javascript.
const rejectJavaScript = () => {
  throw new Error('JavaScript frontmatter is not allowed; use YAML or JSON');
};
const options = (value = {}) => ({
  ...value,
  engines: { ...value.engines, javascript: rejectJavaScript, js: rejectJavaScript },
});

export default function parseFrontmatter(input, value) {
  // Always pass options, including on repeated inputs, to avoid the default cache.
  return matter(input, options(value));
}
parseFrontmatter.stringify = (content, data, value) =>
  matter.stringify(content, data, options(value));
