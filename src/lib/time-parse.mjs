// One reader for every way a recipe writes a time: "45 min", "1 hr 30 min", "15–20 min",
// "4 hr 30 min to 5 hr 30 min", "15 min, plus 6 hr chilling", "1 hr, plus overnight chilling".
// Cards, time bands, quick picks and JSON-LD all read times through parseTime, so they agree.

/** A stated "overnight" counts as 8 hours of waiting. */
export const OVERNIGHT_MINUTES = 8 * 60;

const Q = String.raw`(?:\d+(?:\.\d+)?(?:\s+\d+\/\d+)?|\d+\/\d+)`;
const U = String.raw`(?:days?|hours?|hrs?|h|minutes?|mins?)\b`;
const DUR = `${Q}\\s*${U}(?:\\s+${Q}\\s*${U})*`;
const SEP = String.raw`\s*(?:[–—-]|\bto\b)\s*`;
// A single time or a range. In "2–2 hr 30 min" the bare low number takes the unit that follows.
const RANGE = `(?:(${DUR}|${Q})${SEP})?(${DUR})`;
const PAIR_RE = new RegExp(`(${Q})\\s*(${U})`, 'gi');
const FRACTIONS = { '¼': '1/4', '½': '1/2', '¾': '3/4', '⅓': '1/3', '⅔': '2/3' };

const num = (s) =>
  s
    .trim()
    .split(/\s+/)
    .reduce((sum, p) => {
      const [a, b] = p.split('/');
      return sum + (b ? Number(a) / Number(b) : Number(a));
    }, 0);
const unitMinutes = (u) => (/^d/i.test(u) ? 1440 : /^h/i.test(u) ? 60 : 1);
const durMinutes = (text) =>
  [...text.matchAll(PAIR_RE)].reduce((sum, m) => sum + num(m[1]) * unitMinutes(m[2]), 0);

function rangeMinutes(m) {
  const max = durMinutes(m[2]);
  if (!m[1]) return { min: max, max };
  const firstUnit = m[2].match(new RegExp(U, 'i'))[0];
  const min = new RegExp(U, 'i').test(m[1]) ? durMinutes(m[1]) : num(m[1]) * unitMinutes(firstUnit);
  return { min: Math.min(min, max), max };
}

function formatWait(minutes) {
  if (minutes >= 2880 && minutes % 1440 === 0) return `${minutes / 1440} days`;
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  if (!h) return `${m} min`;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

function waitLabel(wait, overnights) {
  const parts = [];
  if (wait.max) {
    const wholeHours = wait.min % 60 === 0 && wait.max % 60 === 0 && wait.max < 2880;
    const wholeDays = wait.min % 1440 === 0 && wait.max % 1440 === 0;
    if (wait.min === wait.max) parts.push(formatWait(wait.max));
    else if (wholeDays) parts.push(`${wait.min / 1440}–${wait.max / 1440} days`);
    else if (wholeHours) parts.push(`${wait.min / 60}–${wait.max / 60} hr`);
    else parts.push(`${formatWait(wait.min)}–${formatWait(wait.max)}`);
  }
  if (overnights) parts.push('overnight');
  return parts.join(' + ');
}

/**
 * Read a recipe time. Returns null when there is no clear leading time ("Overnight",
 * "Varies with the batch", "10 min per sheet").
 *
 * - activeMin, activeMax: the leading (hands-on and cooking) time, in minutes
 * - waitMin, waitMax: numbered and overnight time stated after "plus" (chilling, rising, marinating)
 * - minutes: the full elapsed time, top of any range, wait included
 * - minMinutes: the same from the bottom of any range
 * - open: the full time is longer than `minutes` by an amount the recipe does not number
 *   ("plus cooling", "at least 30 min")
 * - activeLabel, waitLabel: short text for each part. label joins them for a card.
 */
export function parseTime(value) {
  if (value === undefined || value === null) return null;
  let text = String(value).trim();
  for (const [glyph, plain] of Object.entries(FRACTIONS)) {
    text = text.replace(new RegExp(`(\\d)?${glyph}`, 'g'), (_, d) => (d ? `${d} ${plain}` : plain));
  }
  if (!text || /\bper\b/i.test(text)) return null;
  const atLeast = /^at least\b/i.test(text);
  text = text.replace(/^(?:about|at least)\s+/i, '');

  // The leading time ends at the first comma, bracket or qualifying word.
  const cut = text.search(
    /[,;(+]|\s+(?:plus|with|including|includes|for|depending|until|through|to a|from|on|longer|slower)\b/i
  );
  const head = (cut === -1 ? text : text.slice(0, cut)).trim();
  const tail = cut === -1 ? '' : text.slice(cut);
  const headMatch = head.match(new RegExp(`^${RANGE}$`, 'i'));
  if (!headMatch) return null;
  const active = rangeMinutes(headMatch);
  if (!active.max) return null;

  // Only a "plus" clause adds time. "including chilling" and "with the marinade" are already counted.
  const plus = tail.match(/(?:\bplus\b|\+)(.*)$/is);
  let wait = { min: 0, max: 0, overnights: 0 };
  let open = atLeast;
  if (plus) {
    const clause = plus[1].split(/[,;]?\s*\b(?:including|includes)\b/i)[0];
    // "4 hr or overnight" is one wait written two ways. Count the longer one.
    for (const option of clause.split(/\s+or\s+/i)) {
      const found = { min: 0, max: 0, overnights: (option.match(/\bovernight\b/gi) || []).length };
      for (const m of option.matchAll(new RegExp(RANGE, 'gi'))) {
        const r = rangeMinutes(m);
        found.min += r.min;
        found.max += r.max;
      }
      found.min += found.overnights * OVERNIGHT_MINUTES;
      found.max += found.overnights * OVERNIGHT_MINUTES;
      if (found.max > wait.max) wait = found;
    }
    // Open when the clause has no number, says "at least", or names a wait before its first
    // number ("cooling and 8 hr chilling": the cooling is not counted).
    const lead = clause.split(new RegExp(`${Q}|\\bovernight\\b`, 'i'))[0];
    if (!wait.max || /\bat least\b/i.test(clause) || /[a-z]{3}/i.test(lead)) open = true;
  } else if (/\b(?:ahead|in advance)\b/i.test(tail)) {
    // "with grains and proteins cooked ahead": work that is not in the stated time.
    open = true;
  }
  const overnights = wait.overnights;

  const activeLabel = head
    .replace(/\s+to\s+/gi, '–')
    .replace(/\bhours?\b|\bhrs?\b/gi, 'hr')
    .replace(/\bminutes?\b|\bmins\b/gi, 'min')
    .replace(/\s*[—-]\s*/g, '–');
  const waitText = wait.max
    ? waitLabel(
        {
          min: wait.min - overnights * OVERNIGHT_MINUTES,
          max: wait.max - overnights * OVERNIGHT_MINUTES,
        },
        overnights
      )
    : '';
  return {
    activeMin: Math.round(active.min),
    activeMax: Math.round(active.max),
    waitMin: Math.round(wait.min),
    waitMax: Math.round(wait.max),
    minutes: Math.round(active.max + wait.max),
    minMinutes: Math.round(active.min + wait.min),
    open,
    activeLabel,
    waitLabel: waitText,
    label: `${waitText ? `${activeLabel} + ${waitText}` : activeLabel}${open ? '+' : ''}`,
  };
}

/** Full elapsed minutes (top of a range, waits included), or null when the time is unclear. */
export function elapsedMinutes(value) {
  return parseTime(value)?.minutes ?? null;
}

/**
 * ISO 8601 duration of the full elapsed time for JSON-LD, or undefined when the time is unclear.
 * Written in hours and minutes ("PT20H45M"). A range gives its upper bound. Pass
 * { ranges: false } to leave a range out instead. A time with an unnumbered wait ("plus cooling")
 * is left out, because the stated minutes are known to be short of the full time.
 */
export function timeToISODuration(value, { ranges = true } = {}) {
  const parsed = parseTime(value);
  if (!parsed?.minutes || parsed.open) return undefined;
  if (!ranges && parsed.minMinutes !== parsed.minutes) return undefined;
  const h = Math.floor(parsed.minutes / 60);
  const m = parsed.minutes % 60;
  return `PT${h ? `${h}H` : ''}${m ? `${m}M` : ''}`;
}
