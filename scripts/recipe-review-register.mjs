import fs from 'node:fs';
import matter from 'gray-matter';
const baseline = JSON.parse(fs.readFileSync('docs/recipe-review-baseline.json', 'utf8'));
const aliases = JSON.parse(fs.readFileSync('src/data/recipe-aliases.json', 'utf8'));
const retirements = JSON.parse(fs.readFileSync('src/data/recipe-retirements.json', 'utf8'));
const originals = baseline.slugs.map((slug) => {
  const canonical = aliases[slug] || slug;
  const file = `src/content/recipes/${canonical}.md`;
  const data = fs.existsSync(file) ? matter(fs.readFileSync(file, 'utf8')).data : null;
  const hasRecord = fs.existsSync(`docs/reviews/${slug}.md`);
  const status =
    retirements[slug] && hasRecord
      ? 'retired-by-user'
      : aliases[slug] && hasRecord
        ? 'consolidated'
        : data?.learning?.review && hasRecord
          ? data.learning.review.status
          : 'pending';
  return {
    slug,
    ...(retirements[slug] ? { retirementDate: retirements[slug].date } : { canonical }),
    status,
    ...(hasRecord ? { record: `docs/reviews/${slug}.md` } : {}),
  };
});
// New recipes must remain visible without changing the immutable original baseline.
const originalSlugs = new Set(baseline.slugs);
const activeAdditionalSlugs = fs
  .readdirSync('src/content/recipes')
  .filter((file) => file.endsWith('.md') && !originalSlugs.has(file.slice(0, -3)))
  .map((file) => file.slice(0, -3));
const additionalRecords = [
  ...new Set([
    ...activeAdditionalSlugs,
    ...Object.keys(retirements).filter((slug) => !originalSlugs.has(slug)),
  ]),
]
  .sort()
  .map((slug) => {
    const data = retirements[slug]
      ? null
      : matter(fs.readFileSync(`src/content/recipes/${slug}.md`, 'utf8')).data;
    const hasRecord = fs.existsSync(`docs/reviews/${slug}.md`);
    return {
      slug,
      status:
        retirements[slug] && hasRecord
          ? 'retired-by-user'
          : data?.learning?.review && hasRecord
            ? data.learning.review.status
            : 'pending',
      ...(retirements[slug] ? { retirementDate: retirements[slug].date } : {}),
      ...(hasRecord ? { record: `docs/reviews/${slug}.md` } : {}),
    };
  });
const report = {
  originalRecipes: originals.length,
  individuallyReviewed: originals.filter((r) =>
    ['editorial-review', 'kitchen-tested'].includes(r.status)
  ).length,
  consolidatedAfterReview: originals.filter((r) => r.status === 'consolidated').length,
  retiredByUser: originals.filter((r) => r.status === 'retired-by-user').length,
  pending: originals.filter((r) => r.status === 'pending').length,
  kitchenTested: originals.filter((r) => r.status === 'kitchen-tested').length,
  records: originals,
  additionalRecipes: additionalRecords.length,
  activeAdditionalRecipes: activeAdditionalSlugs.length,
  additionalRetiredByUser: additionalRecords.filter((r) => r.status === 'retired-by-user').length,
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
