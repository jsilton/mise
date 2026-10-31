// Quick picks: the everyday questions a cook asks ("something quick", "the kids will eat it").
// They combine, so "Weeknight" plus "Vegetarian" narrows to both.
import { timeBand } from './time-band.mjs';

const has = (list, ...keys) => keys.some((k) => (list || []).includes(k));

export const QUICK_PICKS = [
  { key: 'under30', label: 'Under 30 min', test: (d, m) => m > 0 && m <= 30 },
  { key: 'weeknight', label: 'Weeknight', test: (d) => has(d.occasions, 'weeknight') },
  {
    key: 'veg',
    label: 'Vegetarian',
    test: (d) => d.role !== 'drink' && has(d.dietary, 'vegetarian', 'vegan'),
  },
  { key: 'kids', label: 'Kid friendly', test: (d) => has(d.occasions, 'kid-friendly') },
  {
    key: 'ahead',
    label: 'Make ahead',
    test: (d) => has(d.occasions, 'meal-prep', 'make-ahead'),
  },
  {
    key: 'comfort',
    label: 'Comfort',
    test: (d) => d.vibe === 'comfort' || has(d.occasions, 'comfort-food'),
  },
  {
    key: 'light',
    label: 'Light & fresh',
    test: (d) => d.vibe === 'nutritious' || has(d.occasions, 'light-and-fresh'),
  },
  {
    key: 'crowd',
    label: 'For a crowd',
    test: (d) => has(d.occasions, 'entertaining', 'potluck', 'game-day'),
  },
  { key: 'learn', label: 'Learn a technique', test: (d) => d.vibe === 'technical' },
];

export const COURSES = [
  { key: 'main', label: 'Mains' },
  { key: 'side', label: 'Sides' },
  { key: 'dessert', label: 'Desserts' },
  { key: 'base', label: 'Basics' },
  { key: 'condiment', label: 'Sauces' },
  { key: 'drink', label: 'Drinks' },
];

/** The quick-pick keys a recipe belongs to. */
export function quickPicksFor(data) {
  const minutes = timeBand(data.totalTime).minutes;
  return QUICK_PICKS.filter((p) => p.test(data, minutes)).map((p) => p.key);
}

/** How many recipes fall under each quick pick, course and cuisine. */
export function countPicks(recipes) {
  const picks = Object.fromEntries(QUICK_PICKS.map((p) => [p.key, 0]));
  const courses = Object.fromEntries(COURSES.map((c) => [c.key, 0]));
  const cuisines = {};
  for (const { data } of recipes) {
    for (const k of quickPicksFor(data)) picks[k]++;
    if (data.role in courses) courses[data.role]++;
    for (const c of data.cuisines || []) cuisines[c] = (cuisines[c] || 0) + 1;
  }
  const topCuisines = Object.entries(cuisines)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 16);
  return { picks, courses, topCuisines };
}
