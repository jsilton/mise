// Return null for ranges or conditional times rather than inventing precision.
export function timeToMinutes(value) {
  if (!value || !/^(?:\d+(?:\.\d+)?\s*(?:hours?|hrs?|minutes?|mins?)\s*)+$/i.test(value.trim()))
    return null;
  let minutes = 0;
  for (const match of value.matchAll(/(\d+(?:\.\d+)?)\s*(hours?|hrs?|minutes?|mins?)/gi)) {
    minutes += Number(match[1]) * (/^h/i.test(match[2]) ? 60 : 1);
  }
  return minutes;
}
export function timeToISO(value) {
  const minutes = timeToMinutes(value);
  return minutes === null || minutes === 0 ? undefined : `PT${minutes}M`;
}
