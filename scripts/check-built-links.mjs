import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Inspect quoted anchor hrefs in Astro's generated HTML, not arbitrary HTML,
// external sites, assets, or links added later by browser JavaScript.
export function checkBuiltLinks(directory, site = 'https://jordansilton.com/mise/') {
  const root = path.resolve(directory);
  const base = new URL(site.endsWith('/') ? site : `${site}/`);
  const files = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const file = path.join(dir, entry.name);
      return entry.isDirectory() ? files(file) : entry.name.endsWith('.html') ? [file] : [];
    });
  const pages = files(root).sort();
  const missing = [];
  let checked = 0;
  for (const file of pages) {
    const relative = path.relative(root, file).split(path.sep).join('/');
    const pageUrl = new URL(relative.replace(/index\.html$/, ''), base);
    const html = fs
      .readFileSync(file, 'utf8')
      .replace(/<!--[^]*?-->|<script\b[^>]*>[^]*?<\/script>|<style\b[^>]*>[^]*?<\/style>/gi, '');
    for (const match of html.matchAll(/<a\b[^>]*?\shref\s*=\s*(["'])(.*?)\1/gi)) {
      const href = match[2]
        .replace(/&amp;/g, '&')
        .replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, decimal) =>
          String.fromCodePoint(parseInt(hex || decimal, hex ? 16 : 10))
        );
      let target;
      try {
        target = new URL(href, pageUrl);
      } catch {
        missing.push({ page: relative, href, reason: 'Invalid URL' });
        continue;
      }
      if (target.origin !== base.origin || !target.pathname.startsWith(base.pathname)) continue;
      checked++;
      let decoded;
      try {
        decoded = decodeURIComponent(target.pathname.slice(base.pathname.length));
      } catch {
        missing.push({ page: relative, href, reason: 'Invalid URL encoding' });
        continue;
      }
      const destination = path.join(root, decoded);
      const candidates = [destination, path.join(destination, 'index.html'), `${destination}.html`];
      if (
        !candidates.some((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile())
      )
        missing.push({ page: relative, href, resolved: target.pathname });
    }
  }
  return { pages: pages.length, checked, missing };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const report = checkBuiltLinks(process.argv[2] || 'dist');
  console.log(
    `${report.pages} HTML pages, ${report.checked} internal anchors, ${report.missing.length} missing destinations`
  );
  for (const issue of report.missing)
    console.error(`${issue.page}: ${issue.href} -> ${issue.resolved || issue.reason}`);
  process.exitCode = report.missing.length || !report.pages ? 1 : 0;
}
