import { timeToMinutes } from './time.mjs';
import { parseTime } from './time-parse.mjs';

/**
 * Many recipes write their total time the way a cook says it: "About 35–55 min, plus 1 hr cooling".
 * `minutes` is the full elapsed time, using the top of a range and counting any stated wait
 * (chilling, rising, marinating, freezing), so "Under 30 min" never promises too much.
 * `label` is what a card prints: the leading time, then the wait ("15 min + 6 hr 20 min").
 * Returns null when there is no clear leading time.
 */
export function estimateTime(value) {
  const parsed = parseTime(value);
  return parsed ? { minutes: parsed.minutes, label: parsed.label } : null;
}

// Time bands for recipe cards and headers. The order runs light to dark (quick, hour, long),
// and the minutes are always shown in words too, so colour is never the only clue.
// `minutes` is the full elapsed time, waits included. `short` is what a card prints.
// `exact` says whether the recipe gave one plain time. `open` says the recipe adds a wait
// it does not number ("plus cooling"), so the real time runs past `minutes`.
export function timeBand(value) {
  const exact = value ? timeToMinutes(value) : 0;
  const parsed = exact ? null : parseTime(value);
  const minutes = exact || parsed?.minutes || 0;
  const short = exact ? formatMinutes(exact) : parsed?.label || '';
  if (!minutes)
    return {
      minutes: 0,
      band: 'none',
      label: 'Time not listed',
      level: 0,
      short,
      exact: false,
      open: false,
    };
  const base = { minutes, short, exact: !!exact, open: !!parsed?.open };
  // An unnumbered wait can't be promised a ceiling, so it never takes the quick band and its
  // label gives a floor. This keeps the band in step with the "Under 30 min" quick pick.
  if (base.open && minutes <= 60)
    return { ...base, band: 'hour', label: `At least ${formatMinutes(minutes)}`, level: 2 };
  if (minutes <= 30) return { ...base, band: 'quick', label: '30 min or less', level: 1 };
  if (minutes <= 60) return { ...base, band: 'hour', label: 'Up to an hour', level: 2 };
  return { ...base, band: 'long', label: 'Longer than an hour', level: 3 };
}

export function formatMinutes(minutes) {
  if (!minutes) return '';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m} min`;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}
