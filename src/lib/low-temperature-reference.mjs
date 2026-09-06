// Editorial triage only: distinguish an explicit cooked-food holding instruction
// from low-temperature cooking. Explicit sliced-pork endpoints are handled
// separately from poultry alternatives. Unrecognized wording remains flagged.
export function hasLowTemperatureReference(content, words) {
  let text = String(content || '')
    .toLowerCase()
    .replace(/\s*°\s*/g, '°');
  // An explicit ice bath for cooling brine or stock is not a poultry cooking
  // temperature. Remove only that phrase; other water-bath references still flag.
  text = text.replace(
    /\b(?:cool|chill)\s+(?:the\s+)?(?:brine concentrate|brine|saucepan|stock|broth)\s+in\s+an?\s+ice[- ]water bath\b/g,
    ''
  );
  const hasFinishedEndpoint = /\b165°f\b|\b74°c\b/.test(text);
  if (hasFinishedEndpoint) {
    text = text.replace(
      /\b(?:keep|hold)\s+(?:hot food|cooked (?:meat|chicken|turkey)|hot filling)\s+at\s+(?:least\s+)?140°f(?:\s*\/\s*60°c)?(?:\s+or\s+(?:above|warmer|higher))?/g,
      ''
    );
  }
  if (hasFinishedEndpoint) {
    text = text.replace(/[^.!?\n]+[.!?]?/g, (sentence) => {
      if (!/\bat least\s+3\s+minutes\s+before serving\b/.test(sentence)) return sentence;
      return sentence.replace(
        /\bsliced pork\s+reaches?\s+(?:at least\s+)?145°f(?:\s*\/\s*63°c)?/g,
        ''
      );
    });
  }
  return words.some((word) => {
    const normalized = String(word)
      .toLowerCase()
      .replace(/\s*°\s*/g, '°');
    // Match complete temperatures: 65°C must not match an oven set to 165°C.
    if (/^\d+°[fc]$/.test(normalized)) {
      return new RegExp(`(?<![\\d.])${normalized}\\b`).test(text);
    }
    return text.includes(normalized);
  });
}
