import { timeToMinutes } from './time.mjs';

// Time bands for recipe cards and headers. The order runs light to dark (quick, hour, long),
// and the minutes are always shown in words too, so colour is never the only clue.
export function timeBand(value) {
  const minutes = value ? timeToMinutes(value) : 0;
  if (!minutes) return { minutes: 0, band: 'none', label: 'Time not listed', level: 0 };
  if (minutes <= 30) return { minutes, band: 'quick', label: '30 min or less', level: 1 };
  if (minutes <= 60) return { minutes, band: 'hour', label: 'Up to an hour', level: 2 };
  return { minutes, band: 'long', label: 'Longer than an hour', level: 3 };
}

export function formatMinutes(minutes) {
  if (!minutes) return '';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m} min`;
  return m ? `${h} h ${m} min` : `${h} h`;
}
