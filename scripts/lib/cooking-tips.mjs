// Cooking-technique hints from the Omnivore's Codex. Each rule reads the
// sentences of the directions that actually involve the ingredient, so a hint
// appears only when the recipe really skips the technique, not when it uses
// different words for it or the technique does not apply.

import { normalizeText } from './ingredient-mentions.mjs';

function directionsOf(content) {
  const match = String(content || '').match(/##\s*Directions([\s\S]*?)(?=\n##\s|$)/i);
  return match ? normalizeText(match[1]).replace(/\s+/g, ' ') : '';
}

function sentencesOf(directions) {
  return directions.split(/(?<=[.!?])\s+|\s+(?=\d+\.\s)/).filter(Boolean);
}

function stepsOf(directions) {
  return directions.split(/\s+(?=\d+\.\s)/).filter(Boolean);
}

function ingredientLines(data) {
  return Array.isArray(data.ingredients)
    ? data.ingredients.map((line) => normalizeText(line)).filter((line) => !line.startsWith('---'))
    : [];
}

function methodsOf(data) {
  return Array.isArray(data.cookingMethods) ? data.cookingMethods.map((m) => normalizeText(m)) : [];
}

function isSoup(data) {
  return /\b(soup|stew|chowder|broth|pho|ramen|chili|minestrone|bisque)\b/.test(
    normalizeText(data.title || '')
  );
}

function hint(ruleId, title, suggestion) {
  return { ruleId, title, severity: 'hint', suggestion };
}

// Long-cooked acids only: lemon or lime squeezed in at the end does not react.
function acidInReactivePan(data, directions) {
  const equipment = Array.isArray(data.equipment) ? data.equipment : [];
  if (!equipment.some((e) => ['cast-iron-skillet', 'cast-iron', 'aluminum-pot'].includes(e)))
    return null;
  const acids = /\b(tomato(es)?|wine|vinegar|tamarind)\b/;
  if (!ingredientLines(data).some((line) => acids.test(line))) return null;
  const longCook = /\b(simmer|braise|reduce|stew|cook (down|until thick))/;
  if (!sentencesOf(directions).some((s) => acids.test(s) && longCook.test(s))) return null;
  return hint(
    'kb.acid-metal-reactivity',
    'Acidic ingredient cooked in reactive pan',
    "This recipe simmers an acidic ingredient in a reactive pan (cast iron/aluminum). Consider stainless steel or enameled cast iron to avoid metallic flavors and stripping the pan's seasoning."
  );
}

// Boiled-and-drained pasta finished in a fat or cheese sauce on the stove.
function pastaWater(data, directions) {
  if (!['main', 'side'].includes(data.role) || isSoup(data)) return null;
  const lines = ingredientLines(data).join(' ');
  const shapes =
    /\b(spaghetti|linguine|fettuccine|penne|rigatoni|orecchiette|bucatini|pappardelle|tagliatelle|cavatappi|strozzapreti|fusilli|farfalle|ziti|macaroni|tortellini|gnocchi|dried pasta|fresh pasta|pasta)\b/;
  if (!shapes.test(lines)) return null;
  if (!/\b(butter|cheese|parmesan|parmigiano|pecorino|ricotta|cream|olive oil)\b/.test(lines))
    return null;
  if (!/\bdrain/.test(directions)) return null;
  // Tomato and soy sauces don't rely on starch to hold together.
  if (
    /\b(crushed tomato|whole peeled tomato|tomato sauce|tomato puree|passata|marinara|soy sauce|fish sauce)/.test(
      lines
    )
  )
    return null;
  if (/\b(bake|oven|casserole|broil)\b/.test(directions)) return null;
  if (
    /\b(chill|cold|room temperature|salad)\b/.test(
      normalizeText(data.title || '') + ' ' + directions.slice(0, 400)
    )
  )
    return null;
  if (
    /\b(pasta water|cooking water|starchy water|reserve|reserved|splash of water)\b/.test(
      directions
    )
  )
    return null;
  return hint(
    'kb.missing-pasta-water-emulsion',
    'Pasta cooking water not reserved',
    "This pasta is drained and finished in a fat or cheese sauce but the directions don't reserve any cooking water. A splash of starchy pasta water helps the sauce emulsify and stay smooth."
  );
}

// A pound or more of meat browned in one go, with no batches or spacing.
function panCrowding(data, directions) {
  if (isSoup(data)) return null;
  if (!methodsOf(data).some((m) => ['stir fry', 'saute', 'sear', 'fry', 'pan fry'].includes(m)))
    return null;
  const meats = ['chicken', 'beef', 'pork', 'turkey', 'lamb', 'shrimp'];
  const large = meats.filter((name) =>
    ingredientLines(data).some((line) => {
      if (!new RegExp(`\\b${name}\\b`).test(line)) return false;
      if (/\b(steak|whole|roast|chops?|ground|stock|broth|bouillon)\b/.test(line)) return false;
      const match = line.match(/^(\d+(?:\.\d+)?)(?:\s+\d+\/\d+)?\s*(?:lbs?|pounds?)\b/);
      return match && parseFloat(match[1]) >= 1;
    })
  );
  if (!large.length) return null;
  const browning = /\b(sear|brown|stir fry|pan fry|fry|saute)/;
  // Meat that finishes in liquid, or where the recipe says a crust isn't needed.
  const notBrowning = /\b(broth|simmer|in (the )?sauce|not required)\b/;
  const meatBrowned = stepsOf(directions).some(
    (step) =>
      browning.test(step) &&
      large.some((name) => new RegExp(`\\b${name}\\b`).test(step)) &&
      !notBrowning.test(step)
  );
  if (!meatBrowned) return null;
  const spacing =
    /\b(batch|batches|in two|in 2|half (of )?the|halves|single layer|one layer|without crowding|do not crowd|don't crowd|uncrowded|in parts|portions|loads)\b/;
  if (spacing.test(directions)) return null;
  return hint(
    'kb.pan-crowding-risk',
    'Pan-crowding risk during searing/stir-frying',
    'This recipe browns a pound or more of meat but never splits it up. A crowded pan steams the meat instead of browning it, so consider cooking it in batches.'
  );
}

// Fresh soft herbs that only ever go into a long, hot cook.
function delicateHerbs(data, directions) {
  const herbs = ['basil', 'cilantro', 'parsley', 'chives', 'mint', 'tarragon', 'dill'];
  const fresh = herbs.filter((herb) =>
    ingredientLines(data).some(
      (line) =>
        new RegExp(`\\b${herb}\\b`).test(line) &&
        !/\b(dried|dry|pickles?|extract|tea|liqueur)\b/.test(line)
    )
  );
  if (!fresh.length) return null;
  const longCook =
    /\b(simmer|braise|boil|roast|bake|stew|slow cook|cook (on|for) (low|high)|\d+ (to \d+ )?(hours|minutes))\b/;
  const late =
    /\b(serve|serving|garnish|finish|top|scatter|sprinkle|fold|toss|off the heat|just before|at the end|last|raw|fresh|stir in)\b/;
  const intentional =
    /\b(mix|combine|knead|form|shape|stuff|marinade|marinate|dough|batter|blend|puree|stock|broth)\b/;
  const cookedOnly = fresh.filter((herb) => {
    const said = sentencesOf(directions).filter((s) => new RegExp(`\\b${herb}\\b`).test(s));
    return (
      said.length > 0 &&
      said.every((s) => longCook.test(s) && !late.test(s) && !intentional.test(s))
    );
  });
  if (!cookedOnly.length) return null;
  return hint(
    'kb.delicate-herb-oxidation',
    'Delicate herbs added too early',
    `The ${cookedOnly.join(' and ')} only goes into a long, hot cook. Soft herbs lose flavor and darken with heat, so consider keeping some back to add at the end or as a raw garnish.`
  );
}

// Ground spices dropped straight into liquid with no fat, rub or toasting step.
function spiceBlooming(data, directions) {
  const methods = methodsOf(data);
  if (!methods.some((m) => ['simmer', 'boil', 'braise'].includes(m))) return null;
  // Dump-and-go slow-cooker recipes skip the stovetop on purpose.
  if (methods.includes('slow cook') || /\bslow cooker\b/.test(directions)) return null;
  const spices = [
    'curry powder',
    'garam masala',
    'turmeric',
    'chili powder',
    'chile powder',
    'cumin',
    'coriander',
    'paprika',
    'cayenne',
  ];
  const used = spices.filter((spice) =>
    ingredientLines(data).some((line) => line.includes(spice) && !/\bseeds?\b/.test(line))
  );
  if (!used.length) return null;
  const inFat =
    /\b(oil|butter|ghee|fat|drippings|roux|saute|bloom|toast|fragrant|aromatic|\d+ seconds|(1|one|a) minute|cook(ing)? while stirring|rub|marinade|marinate|coat|season (the )?\w+|spice (mix|blend|paste)|dry ingredients|mix|whisk|dressing|glaze|custard|cheese|off (the )?heat)\b/;
  const named = stepsOf(directions).filter(
    (s) =>
      used.some((spice) => s.includes(spice)) ||
      /\b(spices|spice mix|spice blend|seasonings?)\b/.test(s)
  );
  if (!named.length || named.some((s) => inFat.test(s))) return null;
  return hint(
    'kb.spice-blooming-recommended',
    'Bloom spices in fat for maximum flavor',
    'The ground spices go straight into the liquid. Cooking them in the hot oil or butter for 30 to 60 seconds first, until fragrant, brings out much more of their flavor.'
  );
}

// Baking soda with nothing acidic to react with.
function leavening(data) {
  if (!methodsOf(data).includes('bake')) return null;
  const lines = ingredientLines(data).join(' ');
  if (!/\b(baking soda|sodium bicarbonate)\b/.test(lines)) return null;
  // Baking powder carries its own acid.
  if (/\bbaking powder\b/.test(lines)) return null;
  const acids =
    /\b(buttermilk|lemons?|limes?|vinegar|yogurt|sour cream|cream cheese|molasses|brown sugar|cocoa|chocolate|applesauce|apples?|cream of tartar|oranges?|bananas?|pumpkin|honey|maple|coffee|berries|blueberries|raspberries|cranberries|cherries|zucchini|kefir|sourdough|dates|figs)\b/;
  if (acids.test(lines)) return null;
  return hint(
    'kb.missing-acid-for-leavening',
    'Missing acid to activate baking soda',
    'This bake uses baking soda without baking powder or an acidic ingredient. Baking soda needs acid (buttermilk, yogurt, brown sugar, honey, cocoa and so on) to rise and to avoid a soapy taste.'
  );
}

// Hot liquid poured onto yeast, not an oven or proofing temperature.
function yeastTemperature(data, directions) {
  if (!ingredientLines(data).some((line) => /\byeast\b/.test(line))) return null;
  for (const s of sentencesOf(directions)) {
    if (
      !/\b(water|milk|liquid)\b/.test(s) ||
      /\b(oven|preheat|proof(ing)? box|bake|internal)\b/.test(s)
    )
      continue;
    for (const match of s.matchAll(/\b(\d{2,3})\s*(?:°\s*)?(?:f|degrees)\b/g)) {
      const value = parseInt(match[1], 10);
      if (value >= 120 && value <= 160)
        return hint(
          'kb.yeast-temperature-warning',
          'Water temperature too high for yeast',
          `Directions mention liquid at ${match[0]}. Liquid above 120°F (49°C) can kill yeast, so aim for 100°F to 115°F (38°C to 46°C).`
        );
    }
  }
  return null;
}

const RULES = [
  acidInReactivePan,
  pastaWater,
  panCrowding,
  delicateHerbs,
  spiceBlooming,
  leavening,
  yeastTemperature,
];

export function cookingTipSuggestions(data, content) {
  if (!data || !Array.isArray(data.ingredients)) return [];
  const directions = directionsOf(content);
  if (!directions) return [];
  return RULES.map((rule) => rule(data, directions)).filter(Boolean);
}
