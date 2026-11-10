# How a Mise recipe page reads

A Mise recipe reads like a good cookbook page. It tells the cook what to do, in the order they do it, and nothing else. This guide is the standard for every recipe file. `npm run check:copy` enforces the parts a script can check.

The model recipe is `src/content/recipes/pasta-with-abruzzi-style-lamb-sauce.md`.

## What the page shows

From the top: the title, three cards (total time with prep and cook, how many it serves, level), dietary tags, then the chef's note with no label. Then the ingredients, with any swap under the ingredient it replaces, the numbered steps and the source line. Last come Storing and Serve it with. A side, base or condiment page then has Goes with. It lists up to six dishes that name it under their own Serve it with, taken from those dishes by the page template.

The page shows nothing else. There is no "what you'll learn", no "before you start", no checkpoints or troubleshooting callouts and no timing paragraph. The `learning` fields that fed those (`focus`, `outcome`, `before`, `checkpoints`, `troubleshooting`, `timing`, `sources`) are gone from reviewed recipes.

## Voice

- Say what to do. "Simmer until the wine has almost cooked away, about 8 minutes."
- No hedging and no talk about decisions we made. Never "keep the full wine", "use all the listed oil", "this version", "the original batch", "the measured amount", "proportionally", "an allowance", "rather than trying to", "is not a guarantee", "a clock is not a temperature reading".
- No semicolons anywhere. Write two sentences.
- No dashes as punctuation. Ranges read "40 to 45 minutes" in prose. An en dash is fine only inside a number range such as "2–3 tbsp".
- US spelling: color, flavor, center, favorite.
- Short sentences, plain words, real verbs.

## Chef's note

Two or three sentences, under about 70 words, in the `## Chef's Note` section. Say what the dish is and where it comes from, then the one thing that makes it good. No safety advice, no quantities, no instructions that belong in the steps. A family recipe says who it comes from and when the family makes it.

## Ingredients

- Each line is amount, unit, ingredient and a short preparation: "3/4 lb boneless lamb shoulder, cut into 1/4-inch dice".
- Preparation is a few words (diced, softened, at room temperature). Nothing about reading labels, choosing products or checking anything.
- "or" in a line only for true equals: "rigatoni or penne".
- Lead with the authentic ingredient. When it is hard to find, add a swap in `learning.substitutions` with the supermarket alternative: `ingredient` names the ingredient as it appears in the list, `alternative` is a few words, and `effect` is one or two plain sentences about what changes.
- Optional ingredients end with "(optional)" or use the formula's `optional: true`.
- No marketing labels such as "(Hidden Veggie #1)" or "(for sustained energy)".
- Season properly. Keep the salt and seasoning amounts from the Nov 8 review.

## Steps

- Numbered, each opening with a bold title of two to four words: `1. **Brown the lamb:** ...`
- One step is one stage of cooking in one place: one pan, one bowl, one oven. Usually one to three sentences. If a step does two separate things, make it two steps.
- Write the best order and only that order. A variation that only reorders the method is folded in or dropped.
- Each cooking step gives the heat, a time and what to look for: "until the onion is soft and pale gold, about 6 minutes".
- Prep that the ingredient line already says (diced, chopped, softened) does not get its own step. A step mentions prep only when timing matters: "While the onion cooks, chop the parsley."
- No quantities in the steps, so the steps stay right at any batch size. Refer to ingredients by name and use "half the butter" or "the rest of the stock" when an ingredient is split. Oven temperatures, pan sizes and times stay.
- Give an internal temperature only when it is the real test of doneness: chicken and turkey 165°F, pork chops and tenderloin 145°F, burgers and meatloaf 160°F, bread and cakes where a thermometer is the best cue. One clause, no lecture. Braises and sauces use tenderness and texture cues instead.
- Food safety boilerplate does not appear: no fridge temperatures, no "use clean tools", no USDA reheating advice.

## Other sections

The body has only `## Chef's Note` and `## Directions`. Family recipes may also have `## Suggested Tweak`. Cooking notes, variations, timing, sources and "before buying" sections are folded into the ingredients, steps or swaps, or dropped.

A genuinely different way to make the dish (a slow cooker, a gluten-free flour) can be a swap whose `ingredient` names the method, such as "Slow cooker". It shows under "Other ways to make it". Keep these to two at most, in one or two sentences each.

## Times and yield

- `prepTime`, `cookTime` and `totalTime` are honest and plain: "20 min", "1 hr 25 min", "45 min, plus 4 hr chilling". No "about", no "plus any remaining preheating".
- `servings` is plain: "4", "12 biscuits", "1 loaf". Structured recipes set `formula.yield`.

## Storing

`learning.storage` is one or two sentences: how long it keeps, whether it freezes and how to reheat. Leave it out for food that is eaten right away, such as drinks.

## Serve it with

`pairsWith` lists two or three recipe slugs that make a real plate, and `pairingNotes` gives each one a line under ten words saying how it fits.

- A main with no starch gets a starch and a vegetable or salad.
- A pasta, rice, noodle or potato dish never gets another starch. It gets a salad, a green vegetable or bread.
- A soup gets bread, a salad or a sandwich.
- A side lists two or three mains it suits.
- Desserts, drinks, sauces and bases get pairings only when there is an obvious match.
- Match the cuisine when the site has a fitting recipe. Fewer good pairings beat three odd ones.

## Source

`source` names the publication or the person, never a web address: "Adapted from Food & Wine", "Adapted from The Woks of Life", "Family recipe", "From Grandmommy". `sourceUrl` uses https. The page links the name and underlines it.

## Family recipes

Family recipes keep the family's ingredients, amounts and method as written. Their wording can be cleaned up like any other recipe. Any change to an amount or the method, including fixes from the Nov 8 review, goes in `## Suggested Tweak` as a suggestion, not into the recipe. `tarragon-potatoes` is pinned as the preserved original and is not edited.

## Structured recipes

A recipe with `formula` is edited in the formula: ingredient `name`, `preparation` and `allowance` text, and each step's `title` and `text`. Run `npm run recipe:compile -- <slug>` to regenerate the ingredient list and Directions. Each step that uses ingredients contains `{{ingredients}}` once. The compiler writes the ingredient names without "the", so write the sentence around that: "Add {{ingredients}} and their juices." Steps can be split or merged by moving the `uses` entries.
