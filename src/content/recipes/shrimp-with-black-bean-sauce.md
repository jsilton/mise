---
miseId: 1e732dec-2ad3-4a1b-bff8-32a40e1034c7
title: Shrimp with Black Bean Sauce
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
  - boil
  - steam
occasions:
  - weeknight
  - quick-lunch
flavorProfile:
  - sweet
  - savory
  - umami
cuisines:
  - Chinese
role: main
vibe: quick
prepTime: About 20 min active preparation
cookTime: About 10–15 min after blanching water is hot
totalTime: About 30–40 min; water heating may add time
servings: 2 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
equipment:
  - wok
pairsWith:
  - basmati-rice
  - lo-mein
ingredients:
  - '--- Shrimp and pork ---'
  - '12 oz shrimp, raw, peeled and deveined, 21/25 size'
  - 4 oz ground pork
  - 'water, enough to cover pork for blanching'
  - 2 tbsp vegetable oil
  - '1 garlic clove, minced'
  - '1/4 tsp fresh ginger, minced'
  - '1 1/2 tbsp fermented black beans (douchi), quickly rinsed, drained and mashed slightly'
  - '1/4 cup green bell pepper, finely diced'
  - 1 tbsp Shaoxing wine
  - '--- Stock mixture ---'
  - '1 1/2 cups chicken stock, hot'
  - 1 tbsp oyster sauce
  - 1 tsp dark soy sauce
  - 1/2 tsp toasted sesame oil
  - 1/4 tsp sugar
  - 1/8 tsp white pepper
  - '--- Slurry ---'
  - 2 1/2 tbsp cornstarch
  - 2 tbsp cold water
  - 'additional water or chicken stock, a little at a time only if needed to loosen sauce, optional'
  - '--- Egg and scallion ---'
  - '1 large egg, beaten'
  - '1 scallion, washed and chopped'
origin: China
source: Adapted from thewoksoflife.com
sourceUrl: 'https://thewoksoflife.com/shrimp-black-bean-sauce/'
formula:
  version: 1
  yield:
    amount: 2
    unit: portion
  components:
    - id: base
      name: Shrimp and pork
      ingredients:
        - id: shrimp
          key: shrimp
          name: shrimp
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: sear
              share: 1
          preparation: 'raw, peeled and deveined, 21/25 size'
        - id: pork
          key: pork
          name: ground pork
          quantity:
            amount: 4
            unit: oz
          uses:
            - step: blanch
              share: 1
        - id: blanch-water
          key: blanch-water
          name: water
          allowance: enough to cover pork for blanching
          uses:
            - step: blanch
              share: 1
          role: cooking-water
        - id: oil
          key: oil
          name: vegetable oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sear
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          uses:
            - step: sear
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: sear
              share: 1
          preparation: minced
        - id: beans
          key: beans
          name: fermented black beans (douchi)
          quantity:
            amount: 3/2
            unit: tbsp
          uses:
            - step: sear
              share: 1
          preparation: 'quickly rinsed, drained and mashed slightly'
        - id: pepper
          key: pepper
          name: green bell pepper
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: sear
              share: 1
          preparation: finely diced
        - id: wine
          key: wine
          name: Shaoxing wine
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sear
              share: 1
    - id: sauce
      name: Stock mixture
      ingredients:
        - id: stock
          key: stock
          name: chicken stock
          quantity:
            amount: 3/2
            unit: cup
          uses:
            - step: prep
              share: 1
          preparation: hot
        - id: oyster
          key: oyster
          name: oyster sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: prep
              share: 1
        - id: dark
          key: dark
          name: dark soy sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: prep
              share: 1
        - id: sesame
          key: sesame
          name: toasted sesame oil
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: prep
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: prep
              share: 1
        - id: white-pepper
          key: white-pepper
          name: white pepper
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: prep
              share: 1
    - id: slurry
      name: Slurry
      ingredients:
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 5/2
            unit: tbsp
          uses:
            - step: bind
              share: 1
        - id: water
          key: water
          name: cold water
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: bind
              share: 1
          role: cooking-water
        - id: extra
          key: extra
          name: additional water or chicken stock
          allowance: a little at a time only if needed to loosen sauce
          uses:
            - step: bind
              share: 1
          optional: true
    - id: finish
      name: Egg and scallion
      ingredients:
        - id: egg
          key: egg
          name: large egg
          quantity:
            amount: 1
            unit: count
          uses:
            - step: egg
              share: 1
          plural: large eggs
          preparation: beaten
        - id: scallion
          key: scallion
          name: scallion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: serve
              share: 1
          plural: scallions
          preparation: washed and chopped
  steps:
    - id: prep
      title: Prepare
      text: 'Rinse the black beans and mash slightly. Whisk {{ingredients}}. Have all aromatics chopped and shrimp prepared before pan cooking. In a separate bowl, stir the measured slurry cornstarch and cold water until smooth; keep it separate from the stock mixture.'
    - id: blanch
      title: Blanch pork
      text: 'Prepare {{ingredients}}. Bring enough water to cover the pork to a boil, then add the pork, breaking up clumps, and blanch for about 1 minute. Drain and set aside for immediate further cooking; this blanch is not the final doneness check. Empty and dry the wok before adding oil.'
    - id: sear
      title: Cook aromatics and start shrimp
      text: 'Use {{ingredients}}: heat the oil over medium-high heat, then sauté garlic, ginger, peppers, black beans and the blanched pork for about 30 seconds. Add shrimp and Shaoxing wine and stir-fry about 30 seconds. Continue immediately into the sauce stage; these brief stages do not establish doneness.'
    - id: simmer
      title: Heat stock mixture
      text: 'Pour in all the stock mixture and bring to a rapid boil, then reduce to a simmer.'
    - id: bind
      title: Thicken gradually
      text: 'Use {{ingredients}}. Re-stir the prepared slurry, then add it gradually while stirring the simmering sauce. Stop when the sauce coats a spoon; you may not need all the slurry. Thin with a little water or stock if needed. Keep unused raw-contact slurry separate from ready-to-eat food and discard it after cooking.'
    - id: egg
      title: Set egg ribbons
      text: 'Keep the sauce at a gentle simmer. Pour {{ingredients}} across the surface and let the ribbons begin to set before folding gently. Continue cooking until the pork and egg sauce reach 160°F / 71°C and the thickest shrimp have pearly, opaque flesh. Ten seconds alone is not a doneness test.'
    - id: serve
      title: Serve
      text: 'Garnish with {{ingredients}} and serve immediately over separately prepared steamed jasmine rice if wanted.'
learning:
  focus: Control gradual slurry thickening without shortening pork and egg cooking
  outcome: Cooked shrimp in a dark spoon-coating gravy with set egg ribbons.
  techniques:
    - starch
    - gentle-proteins
  before:
    - 'Use raw, peeled, deveined shrimp. Thaw frozen shrimp in the refrigerator, or sealed in a bag in cold water and cook promptly. Keep raw-contact dishes and utensils away from cooked food.'
    - Keep stock mixture and measured slurry in separate bowls; re-stir slurry immediately before use.
    - Scale all sauce amounts together; use adequate pan working space or complete separate loads. Beat a fractional egg before measuring its portion.
  checkpoints:
    - step: 2
      cue: Pork is broken into small crumbles and moves directly to further cooking.
      why: The one-minute blanch is not a final safety endpoint.
    - step: 5
      cue: Hot sauce coats a spoon before the entire slurry is necessarily added.
      why: The measured maximum slurry may thicken more than wanted.
    - step: 6
      cue: 'The pork and egg sauce has reached 160°F, and the shrimp centers are pearly and opaque.'
      why: Ten seconds or pink outer shrimp alone cannot replace these checks.
  troubleshooting:
    - problem: Sauce gets too thick
      cause: The full slurry was added faster than its effect could be judged.
      fix: Add the listed optional water or stock a little at a time; next time stop adding slurry at spoon-coating consistency.
  substitutions:
    - ingredient: Fermented black beans
      alternative: 'Use whole douchi as listed, rather than a measured-equal jarred black-bean sauce'
      effect: 'Jarred sauce changes salt, liquid and aromatics; no equal-volume replacement is established.'
  timing: 'About 20 min active preparation; About 10–15 min after blanching water is hot; About 30–40 min; water heating may add time. Planning ranges assume peeled, thawed shrimp and prepared ingredients; additional loads or side dishes add time.'
  storage: 'Refrigerate promptly in shallow covered containers at 40°F or below, within 2 hours (1 hour above 90°F). Use within 3–4 days. Reheat while stirring gently for even heating and check 165°F / 74°C throughout. USDA additionally recommends bringing leftover sauces and gravies to a rolling boil; stir so heat reaches the whole gravy and stop after that brief boil rather than reducing it for a long time. Prolonged boiling can concentrate the gravy and firm the shrimp and egg ribbons. These are handling recommendations, not a promise of unchanged texture.'
  sources:
    - title: Adapted from thewoksoflife.com
      url: 'https://thewoksoflife.com/shrimp-black-bean-sauce/'
    - title: FDA — Selecting and serving seafood safely
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely'
    - title: FoodSafety.gov — Safe minimum cooking temperatures
      url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures'
    - title: USDA — Handling leftovers safely
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Fermented black beans season this dark gravy, which also contains ground pork and egg ribbons. Blanching the pork is a preliminary preparation step; it still cooks in the sauce. Re-stir the measured slurry and add it gradually, then let egg ribbons set before folding gently.

## Directions

1. **Prepare:** Rinse the black beans and mash slightly. Whisk chicken stock, oyster sauce, dark soy sauce, toasted sesame oil, sugar, and white pepper. Have all aromatics chopped and shrimp prepared before pan cooking. In a separate bowl, stir the measured slurry cornstarch and cold water until smooth; keep it separate from the stock mixture.
2. **Blanch pork:** Prepare ground pork and water. Bring enough water to cover the pork to a boil, then add the pork, breaking up clumps, and blanch for about 1 minute. Drain and set aside for immediate further cooking; this blanch is not the final doneness check. Empty and dry the wok before adding oil.
3. **Cook aromatics and start shrimp:** Use shrimp, vegetable oil, garlic clove, fresh ginger, fermented black beans (douchi), green bell pepper, and Shaoxing wine: heat the oil over medium-high heat, then sauté garlic, ginger, peppers, black beans and the blanched pork for about 30 seconds. Add shrimp and Shaoxing wine and stir-fry about 30 seconds. Continue immediately into the sauce stage; these brief stages do not establish doneness.
4. **Heat stock mixture:** Pour in all the stock mixture and bring to a rapid boil, then reduce to a simmer.
5. **Thicken gradually:** Use cornstarch, cold water, and additional water or chicken stock (if using). Re-stir the prepared slurry, then add it gradually while stirring the simmering sauce. Stop when the sauce coats a spoon; you may not need all the slurry. Thin with a little water or stock if needed. Keep unused raw-contact slurry separate from ready-to-eat food and discard it after cooking.
6. **Set egg ribbons:** Keep the sauce at a gentle simmer. Pour large egg across the surface and let the ribbons begin to set before folding gently. Continue cooking until the pork and egg sauce reach 160°F / 71°C and the thickest shrimp have pearly, opaque flesh. Ten seconds alone is not a doneness test.
7. **Serve:** Garnish with scallion and serve immediately over separately prepared steamed jasmine rice if wanted.
