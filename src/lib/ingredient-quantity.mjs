// Splits the amount off the front of an ingredient line, so the page can set it in bold:
// "1 cup (2 sticks) unsalted butter, softened" → ["1 cup (2 sticks)", " unsalted butter, softened"].
// A line with no leading amount ("Sea salt, to taste") comes back as ["", line].

const NUMBER = String.raw`(?:\d+(?:[.,]\d+)?(?:\s+\d+\/\d+)?|\d+\/\d+|[½¼¾⅓⅔⅛⅜⅝⅞])(?:\s*[½¼¾⅓⅔⅛⅜⅝⅞])?`;
const RANGE = String.raw`${NUMBER}(?:\s*(?:[–-]|to|or)\s*${NUMBER})?`;
const UNIT = String.raw`(?:cups?|c\.|tablespoons?|tbsps?|tbs|tbsp\.|teaspoons?|tsps?|tsp\.|pounds?|lbs?\.?|ounces?|oz\.?|fl\.?\s*oz\.?|grams?|g|kilograms?|kg|milligrams?|mg|millilit(?:er|re)s?|ml|lit(?:er|re)s?|l|quarts?|qts?|pints?|pts?|gallons?|gal|cloves?|cans?|tins?|jars?|sticks?|pinch(?:es)?|dash(?:es)?|handfuls?|sprigs?|slices?|bunch(?:es)?|heads?|packages?|pkgs?|packets?|stalks?|ribs?|leaves|inch(?:es)?|in\.|cm|large|medium|small|whole|knobs?|drops?|scoops?|shots?|bottles?|envelopes?|sheets?|bags?|boxes?|containers?)`;
const SIZE = String.raw`(?:\s*\((?:[^()]{0,30})\))`;
const LEAD = new RegExp(
  String.raw`^(\s*(?:about\s+|approx\.?\s+)?${RANGE}(?:\s*${SIZE})?(?:\s*-?\s*${UNIT}\b\.?)?(?:${SIZE})?)(?=[\s,]|$)`,
  'i'
);

export function splitLeadingQuantity(text) {
  const line = String(text ?? '');
  const match = line.match(LEAD);
  if (!match || !match[1].trim()) return ['', line];
  return [match[1], line.slice(match[1].length)];
}
