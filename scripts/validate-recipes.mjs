import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');
const allowedRoles = new Set(['main','side','dessert','base','drink','condiment']);
const allowedVibes = new Set(['nutritious','comfort','technical','holiday','quick']);

async function listMdFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await listMdFiles(res));
    else if (entry.isFile() && res.endsWith('.md')) files.push(res);
  }
  return files;
}

function extractInternalLinks(body) {
  const re = /\(\/silton-mise\/recipes\/([^)\/\s)]+)\)/g;
  const links = [];
  let m;
  while ((m = re.exec(body)) !== null) links.push(m[1]);
  return links;
}

// Normalize a string for lookup (title -> slug etc.)
function normalizeKey(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
} 

(async function main(){
  const files = await listMdFiles(RECIPES_DIR);
  const report = {
    total: files.length,
    missing: {
      title: [], role: [], vibe: [], ingredients: [], prepTime: [], cookTime: [], totalTime: [], servings: [], image: [], chefNote: [], directions: [], directionsFormatting: []
    },
    invalidValues: { role: [], vibe: [] },
    brokenInternalLinks: [],
    brokenWikiLinks: [],
  };

  // Build maps: slug -> meta (title, aliases), and title/alias -> slug
  const slugToMeta = new Map();
  const linkTargetMap = new Map(); // key -> canonical slug (keys are slug, alias, normalized title)

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(file, '.md');

    // Collect meta
    const title = data.title || slug;
    const aliases = Array.isArray(data.aliases) ? data.aliases : (data.aliases ? [data.aliases] : []);
    slugToMeta.set(slug, { title, aliases, file });

    // keys
    linkTargetMap.set(slug, slug);
    linkTargetMap.set(normalizeKey(title), slug);
    for (const a of aliases) linkTargetMap.set(a, slug);
  }

  // Helper: resolve a wiki-link or /recipes/slug link
  function resolveLinkToken(token) {
    // tokens may be slug, title, or 'Title | Custom text'
    const raw = token.split('|')[0].trim();
    const slugCandidate = raw.replace(/\s+/g, '-').toLowerCase();
    if (linkTargetMap.has(raw)) return linkTargetMap.get(raw);
    if (linkTargetMap.has(slugCandidate)) return linkTargetMap.get(slugCandidate);
    const norm = normalizeKey(raw);
    if (linkTargetMap.has(norm)) return linkTargetMap.get(norm);
    return null;
  }

  // Now validate each file contents
  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(file, '.md');

    // frontmatter existence
    if (!data.title) report.missing.title.push(slug);
    if (!data.role) report.missing.role.push(slug);
    if (!data.vibe) report.missing.vibe.push(slug);
    if (!data.ingredients) report.missing.ingredients.push(slug);
    if (!data.prepTime) report.missing.prepTime.push(slug);
    if (!data.cookTime && !data.totalTime) report.missing.cookTime.push(slug);
    if (!data.totalTime && !data.cookTime) report.missing.totalTime.push(slug);
    if (!data.servings) report.missing.servings.push(slug);
    if (!data.image) report.missing.image.push(slug);

    // value checks
    if (data.role && !allowedRoles.has(String(data.role))) report.invalidValues.role.push({slug, value: data.role});
    if (data.vibe && !allowedVibes.has(String(data.vibe))) report.invalidValues.vibe.push({slug, value: data.vibe});

    // sections
    if (!/##\s*Chef's Note/i.test(content)) report.missing.chefNote.push(slug);
    if (!/##\s*Directions/i.test(content)) report.missing.directions.push(slug);

    // directions formatting (numbered steps with bold header)
    const directionsMatch = content.match(/##\s*Directions[\s\S]*?(?=^##\s|\z)/im);
    if (directionsMatch) {
      if (!/\d+\.\s+\*\*/.test(directionsMatch[0])) report.missing.directionsFormatting = report.missing.directionsFormatting || [], report.missing.directionsFormatting && report.missing.directionsFormatting.push(slug);
    } else {
      report.missing.directionsFormatting = report.missing.directionsFormatting || [];
      report.missing.directionsFormatting.push(slug);
    }

    // internal links check: /silton-mise/recipes/slug
    const links = extractInternalLinks(content);
    for (const link of links) {
      if (!linkTargetMap.has(link)) {
        report.brokenInternalLinks.push({from: slug, to: link});
      }
    }

    // wiki-links check: [[...]]
    const wikiRe = /\[\[([^\]]+)\]\]/g;
    let m;
    while ((m = wikiRe.exec(content)) !== null) {
      const token = m[1].trim();
      const resolved = resolveLinkToken(token);
      if (!resolved) report.brokenWikiLinks.push({from: slug, token});
    }
  }

  // Reduce large arrays to samples
  const sample = (arr, n=20) => arr.slice(0,n);
  // write a small index file to public/recipes/index.json for optional client or tooling use
  const indexArray = [];
  for (const [slug, meta] of slugToMeta.entries()) {
    indexArray.push({ slug, title: meta.title, aliases: meta.aliases || [] });
  }
  await fs.mkdir(path.resolve('public','recipes'), { recursive: true }).catch(()=>{});
  await fs.writeFile(path.resolve('public','recipes','index.json'), JSON.stringify(indexArray, null, 2));

  const output = {
    totalRecipes: report.total,
    missingCounts: Object.fromEntries(Object.entries(report.missing).map(([k,v])=>[k, v.length])),
    invalidValuesCount: {role: report.invalidValues.role.length, vibe: report.invalidValues.vibe.length},
    samples: {
      missingTitle: sample(report.missing.title),
      missingChefNote: sample(report.missing.chefNote),
      missingDirections: sample(report.missing.directions),
      missingDirectionsFormatting: sample(report.missing.directionsFormatting || []),
      missingImage: sample(report.missing.image),
      invalidRoles: sample(report.invalidValues.role),
      invalidVibes: sample(report.invalidValues.vibe),
      brokenInternalLinks: sample(report.brokenInternalLinks, 50),
      brokenWikiLinks: sample(report.brokenWikiLinks || [], 50)
    }
  };

  console.log(JSON.stringify(output, null, 2));
  // exit non-zero only on critical failures: missing Chef's Note, missing Directions formatting, invalid enums, or broken links
  const criticalMissing = (report.missing.chefNote && report.missing.chefNote.length>0) || (report.missing.directions && report.missing.directions.length>0) || (report.missing.directionsFormatting && report.missing.directionsFormatting.length>0);
  const issuesFound = criticalMissing || output.invalidValuesCount.role>0 || output.invalidValuesCount.vibe>0 || output.samples.brokenInternalLinks.length>0 || output.samples.brokenWikiLinks.length>0;

  if (output.missingCounts.image > 0) {
    console.warn(`Warning: ${output.missingCounts.image} recipes missing an 'image' frontmatter. This is recommended for social sharing, but not critical.`);
  }

  process.exit(issuesFound ? 2 : 0);
})();
