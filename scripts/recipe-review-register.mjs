import fs from 'node:fs';
import matter from 'gray-matter';
const baseline = JSON.parse(fs.readFileSync('docs/recipe-review-baseline.json', 'utf8'));
const aliases = JSON.parse(fs.readFileSync('src/data/recipe-aliases.json', 'utf8'));
const originals = baseline.slugs.map((slug) => {
  const canonical = aliases[slug] || slug;
  const file = `src/content/recipes/${canonical}.md`;
  const data = fs.existsSync(file) ? matter(fs.readFileSync(file, 'utf8')).data : null;
  const hasRecord = fs.existsSync(`docs/reviews/${slug}.md`);
  const status =
    aliases[slug] && hasRecord
      ? 'consolidated'
      : data?.learning?.review && hasRecord
        ? data.learning.review.status
        : 'pending';
  return { slug, canonical, status, ...(hasRecord ? { record: `docs/reviews/${slug}.md` } : {}) };
});
// New recipes must remain visible without changing the immutable original baseline.
const originalSlugs = new Set(baseline.slugs);
const additionalRecords = fs
  .readdirSync('src/content/recipes')
  .filter((file) => file.endsWith('.md') && !originalSlugs.has(file.slice(0, -3)))
  .map((file) => {
    const slug = file.slice(0, -3);
    const data = matter(fs.readFileSync(`src/content/recipes/${file}`, 'utf8')).data;
    const hasRecord = fs.existsSync(`docs/reviews/${slug}.md`);
    return {
      slug,
      status: data.learning?.review && hasRecord ? data.learning.review.status : 'pending',
      ...(hasRecord ? { record: `docs/reviews/${slug}.md` } : {}),
    };
  });
const report = {
  originalRecipes: originals.length,
  individuallyReviewed: originals.filter((r) =>
    ['editorial-review', 'kitchen-tested'].includes(r.status)
  ).length,
  consolidatedAfterReview: originals.filter((r) => r.status === 'consolidated').length,
  pending: originals.filter((r) => r.status === 'pending').length,
  kitchenTested: originals.filter((r) => r.status === 'kitchen-tested').length,
  records: originals,
  additionalRecipes: additionalRecords.length,
  additionalIndividuallyReviewed: additionalRecords.filter((r) =>
    ['editorial-review', 'kitchen-tested'].includes(r.status)
  ).length,
  additionalPending: additionalRecords.filter((r) => r.status === 'pending').length,
  additionalRecords,
};
fs.writeFileSync('docs/recipe-review-register.json', JSON.stringify(report, null, 2) + '\n');
const summary = { ...report };
delete summary.records;
delete summary.additionalRecords;
console.log(summary);
