import { timeToMinutes } from './time.mjs';

// Fractions like "1 1/2" or "1.5".
const num = (s) =>
  s
    .trim()
    .split(/\s+/)
    .reduce(
      (sum, p) =>
        sum + (p.includes('/') ? Number(p.split('/')[0]) / Number(p.split('/')[1]) : Number(p)),
      0
    );

/**
 * Many recipes write their total time the way a cook says it: "About 35–55 min, plus cooling".
 * Read the leading time for sorting and colour, using the top of a range so "Under 30 min"
 * never promises too much. Returns null when there is no clear leading time.
 */
export function estimateTime(value) {
  if (!value) return null;
  const atLeast = /^\s*at least\b/i.test(String(value));
  const head = String(value)
    .replace(/^\s*(?:about|at least)\s+/i, '')
    .split(
      /[,;(]|\s+(?:plus|with|including|includes|for|depending|until|through|to a|from|longer|slower)\b/i
    )[0]
    .trim();
  if (!head || head.length > 24 || !/^\d/.test(head)) return null;
  const unitRe = /(hours?|hrs?|hr|h|minutes?|mins?|min)\b/i;
  if (!unitRe.test(head)) return null;
  const parts = head.split(/\s*[–-]\s*/);
  const last = parts[parts.length - 1];
  // "2–2 hr 30 min": the upper bound is the last part. "1 1/2–2 hr": a bare number takes the next unit.
  let minutes = 0;
  const re = /(\d+(?:\.\d+)?(?:\s+\d+\/\d+)?|\d+\/\d+)\s*(hours?|hrs?|hr|h|minutes?|mins?|min)\b/gi;
  for (const m of last.matchAll(re)) minutes += num(m[1]) * (/^h/i.test(m[2]) ? 60 : 1);
  if (!minutes) {
    const n = last.match(/^\d+(?:\.\d+)?/);
    const unit = head.match(unitRe);
    if (n && unit) minutes = Number(n[0]) * (/^h/i.test(unit[1]) ? 60 : 1);
  }
  if (!minutes) return null;
  const label = head
    .replace(/\bhours?\b|\bhrs?\b/gi, 'hr')
    .replace(/\bminutes?\b|\bmins\b/gi, 'min')
    .replace(/-/g, '–');
  return { minutes: Math.round(minutes), label: atLeast ? `${label}+` : label };
}

// Time bands for recipe cards and headers. The order runs light to dark (quick, hour, long),
// and the minutes are always shown in words too, so colour is never the only clue.
// `short` is what a card prints; `exact` says whether the recipe gave one plain time.
export function timeBand(value) {
  const exact = value ? timeToMinutes(value) : 0;
  const estimate = exact ? null : estimateTime(value);
  const minutes = exact || estimate?.minutes || 0;
  const short = exact ? formatMinutes(exact) : estimate?.label || '';
  if (!minutes)
    return { minutes: 0, band: 'none', label: 'Time not listed', level: 0, short, exact: false };
  const base = { minutes, short, exact: !!exact };
  if (minutes <= 30) return { ...base, band: 'quick', label: '30 min or less', level: 1 };
  if (minutes <= 60) return { ...base, band: 'hour', label: 'Up to an hour', level: 2 };
  return { ...base, band: 'long', label: 'Longer than an hour', level: 3 };
}

export function formatMinutes(minutes) {
  if (!minutes) return '';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m} min`;
  return m ? `${h} h ${m} min` : `${h} h`;
}
