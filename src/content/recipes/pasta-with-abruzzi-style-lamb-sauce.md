---
miseId: 5871adde-f487-4fae-a999-b893501092b9
title: Pasta with Abruzzi-Style Lamb Sauce
difficulty: easy
cookingMethods:
  - simmer
  - boil
occasions:
  - comfort-food
flavorProfile:
  - rich
cuisines:
  - Italian
role: main
vibe: comfort
prepTime: 20 min
cookTime: 50 min
totalTime: 70 min
servings: 6 portions
pairsWith:
  - garlic-bread
  - creamy-polenta
  - patate-al-forno
ingredients:
  - '--- Main recipe ---'
  - 1 lb dry penne or rigatoni
  - 1 tbsp olive oil
  - >-
    3/4 lb boneless lamb leg or shoulder, finely diced; ground lamb is a
    separate texture option at the same measured amount
  - '2 oz pancetta, finely chopped; check whether the product requires cooking'
  - '1/4 cup yellow onion, diced'
  - '1 tbsp fresh rosemary, chopped'
  - 3/4 cup dry white wine
  - '1 can (28 oz) whole peeled tomatoes, crushed by hand; retain all the juices'
  - '1/3 cup Pecorino Romano, grated'
  - 'salt, to taste'
  - 'black pepper, to taste'
  - 'water, enough for the measured pasta according to its package'
  - 'salt, to taste for the pasta water'
  - 'water, a splash as needed if diced shoulder needs a longer simmer, optional'
  - 'additional grated Pecorino Romano, as desired for serving, optional'
  - 'additional black pepper, as desired for serving, optional'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from Foodandwine.com
sourceUrl: 'http://www.foodandwine.com/recipes/pasta-abruzzi-style-lamb-sauce'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: main
      name: Main recipe
      ingredients:
        - id: pasta
          key: penne-or-rigatoni
          name: dry penne or rigatoni
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: pasta
              share: 1
        - id: oil
          key: olive-oil
          name: olive oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: render
              share: 1
        - id: lamb
          key: boneless-lamb
          name: boneless lamb leg or shoulder
          quantity:
            amount: 3/4
            unit: lb
          uses:
            - step: brown
              share: 1
          preparation: >-
            finely diced; ground lamb is a separate texture option at the same
            measured amount
        - id: pancetta
          key: pancetta
          name: pancetta
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: render
              share: 1
          preparation: finely chopped; check whether the product requires cooking
        - id: onion
          key: yellow-onion
          name: yellow onion
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: render
              share: 1
          preparation: diced
        - id: rosemary
          key: rosemary
          name: fresh rosemary
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: brown
              share: 1
          preparation: chopped
        - id: wine
          key: dry-white-wine
          name: dry white wine
          quantity:
            amount: 3/4
            unit: cup
          uses:
            - step: deglaze
              share: 1
        - id: tomatoes
          key: whole-peeled-tomatoes
          name: whole peeled tomatoes
          quantity:
            amount: 1
            unit: can
          uses:
            - step: simmer
              share: 1
          packageSize:
            amount: 28
            unit: oz
          preparation: crushed by hand; retain all the juices
        - id: cheese
          key: pecorino-romano
          name: Pecorino Romano
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: combine
              share: 1
          preparation: grated
        - id: salt
          key: salt
          name: salt
          allowance: to taste
          uses:
            - step: brown
              share: 1
        - id: pepper
          key: black-pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: brown
              share: 1
        - id: pasta-water
          key: water
          name: water
          allowance: enough for the measured pasta according to its package
          uses:
            - step: pasta
              share: 1
          role: cooking-water
        - id: pasta-salt
          key: salt
          name: salt
          allowance: to taste for the pasta water
          uses:
            - step: pasta
              share: 1
        - id: simmer-water
          key: water
          name: water
          allowance: a splash as needed if diced shoulder needs a longer simmer
          uses:
            - step: simmer
              share: 1
          optional: true
          role: cooking-water
        - id: extra-cheese
          key: pecorino-romano
          name: additional grated Pecorino Romano
          allowance: as desired for serving
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
        - id: extra-pepper
          key: black-pepper
          name: additional black pepper
          allowance: as desired for serving
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
  steps:
    - id: render
      title: Render
      text: >-
        Use {{ingredients}} in a skillet with room for the full tomatoes, meat
        and pasta at the finish. Cook over moderate heat, stirring, until the
        onion is pale gold and the pancetta fat has rendered, about 8 minutes in
        the original batch. Keep all the oil and rendered fat; the pancetta can
        remain soft. Divide every supply proportionally among additional
        skillets or complete batches if needed.
    - id: brown
      title: Brown lamb
      text: >-
        Add {{ingredients}}. Stir and break up ground lamb if using it, cooking
        until browned without scorching the rosemary. Browning alone is not a
        cooked-center check; the meat finishes during simmering.
    - id: deglaze
      title: Deglaze
      text: >-
        Pour in {{ingredients}} and scrape up the pan juices. Simmer until most
        visible free wine has evaporated rather than trying to measure an exact
        75% reduction; use all the wine.
    - id: simmer
      title: Simmer sauce
      text: >-
        Use {{ingredients}} in this stage. Add all the crushed tomatoes and
        their juices. Simmer gently, stirring, for about 30–40 minutes, until
        the sauce thickens, the lamb is tender and fat begins to separate. Use
        the listed optional water only if diced shoulder is still firm and the
        sauce needs a longer simmer. Check ground lamb for 160°F / 71°C; diced
        whole-muscle lamb must reach at least 145°F / 63°C in representative
        thick pieces and then continue hot simmering for at least 3 minutes
        before serving. If the pancetta requires cooking, also check its
        thickest pieces for the whole-pork 145°F endpoint and allow those 3
        minutes of continued hot cooking. A color change or the recipe clock is
        not a temperature reading.
    - id: pasta
      title: Boil pasta
      text: >-
        While the sauce finishes, use {{ingredients}}. Follow the pasta package
        and cook until al dente. Time draining for the sauce to be ready rather
        than leaving cooked pasta waiting through an extended shoulder simmer.
    - id: combine
      title: Combine
      text: >-
        Take the sauce off the heat. Add the drained hot pasta and
        {{ingredients}}, tossing gently to coat with all the sauce and measured
        cheese.
    - id: serve
      title: Serve
      text: 'Serve promptly with {{ingredients}} as desired.'
learning:
  focus: Keep diced-lamb tenderness separate from the pasta clock
  outcome: >-
    A thick lamb-and-tomato sauce coating al-dente pasta, with all measured fat,
    wine and cheese retained.
  techniques:
    - temperature
  before:
    - >-
      Keep raw meat at 40°F / 4°C or below, refrigerator-thawing frozen
      supplies. Prepare serving herbs and vegetables with clean tools before
      handling raw meat; keep cooked food and its utensils separate.
    - >-
      Dice the lamb finely and chop the pancetta before heating. Read the
      pancetta label; curing alone does not establish that it is ready to eat.
      Use ground lamb only as the stated same-amount texture option.
    - >-
      Six portions is the original plan for this version; the sequential version
      was planned for four to six. Portion sizes have not been measured. Use
      enough skillet capacity for the complete sauce and pasta, dividing every
      supply proportionally for extra pans.
  checkpoints:
    - step: 4
      cue: >-
        Diced lamb is tender, sauce thickens and fat begins to separate; the
        applicable meat temperatures have been checked.
      why: >-
        Ground lamb and diced whole muscle use different targets. Shoulder can
        need longer than a thirty-minute tomato simmer.
    - step: 6
      cue: >-
        Pasta is coated with the full sauce and grated cheese after the heat is
        turned off.
      why: >-
        Off-heat tossing keeps the cheese finish separate from the longer meat
        simmer.
  troubleshooting:
    - problem: Diced shoulder is firm while the sauce is already thick
      cause: 'Cut, dice size and connective tissue vary.'
      fix: >-
        Add the listed splash of water as needed and continue a gentle simmer
        until tender. Delay the pasta so it can be drained just before tossing.
  timing: >-
    The current original-batch plan remains about 70 minutes, including 20
    minutes preparation and roughly 50 minutes cooking. Cook pasta during the
    final sauce simmer; shoulder tenderness or additional pan loads can extend
    elapsed time. The sequential variation’s source clocks are first checks, not
    a faster guarantee.
  storage: >-
    Divide leftovers into shallow containers and refrigerate within 2 hours, or
    1 hour above 90°F / 32°C, at 40°F / 4°C or below; use within 3–4 days or
    freeze promptly. Store sauce and pasta separately when making the sauce
    ahead. Reheat while stirring to 165°F / 74°C throughout, checking more than
    one place. USDA additionally recommends a rolling boil for reheated soup or
    sauce; reach it briefly rather than boiling for a prolonged time. For pasta
    already combined with cheese, reheat evenly to 165°F throughout; repeated
    heating softens pasta and changes cheese texture. No prolonged first-cook
    sauce boil is prescribed.
  sources:
    - title: Marcella Hazan — Abruzzi-style lamb sauce
      url: 'https://www.foodandwine.com/recipes/pasta-abruzzi-style-lamb-sauce'
    - title: FoodSafety.gov meat categories
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: USDA leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Marcella Hazan’s Abruzzi-style sauce combines lamb, pancetta, rosemary, white wine and Pecorino Romano. Finely diced lamb makes distinct pieces; the ground-lamb option gives a more even texture. Keep the full wine, olive oil and rendered pancetta fat, simmer diced shoulder until tender, and toss the measured cheese through off the heat.

## Directions

1. **Render:** Use olive oil, pancetta, and yellow onion in a skillet with room for the full tomatoes, meat and pasta at the finish. Cook over moderate heat, stirring, until the onion is pale gold and the pancetta fat has rendered, about 8 minutes in the original batch. Keep all the oil and rendered fat; the pancetta can remain soft. Divide every supply proportionally among additional skillets or complete batches if needed.
2. **Brown lamb:** Add boneless lamb leg or shoulder, fresh rosemary, salt, and black pepper. Stir and break up ground lamb if using it, cooking until browned without scorching the rosemary. Browning alone is not a cooked-center check; the meat finishes during simmering.
3. **Deglaze:** Pour in dry white wine and scrape up the pan juices. Simmer until most visible free wine has evaporated rather than trying to measure an exact 75% reduction; use all the wine.
4. **Simmer sauce:** Use whole peeled tomatoes and water (if using) in this stage. Add all the crushed tomatoes and their juices. Simmer gently, stirring, for about 30–40 minutes, until the sauce thickens, the lamb is tender and fat begins to separate. Use the listed optional water only if diced shoulder is still firm and the sauce needs a longer simmer. Check ground lamb for 160°F / 71°C; diced whole-muscle lamb must reach at least 145°F / 63°C in representative thick pieces and then continue hot simmering for at least 3 minutes before serving. If the pancetta requires cooking, also check its thickest pieces for the whole-pork 145°F endpoint and allow those 3 minutes of continued hot cooking. A color change or the recipe clock is not a temperature reading.
5. **Boil pasta:** While the sauce finishes, use dry penne or rigatoni, water, and salt. Follow the pasta package and cook until al dente. Time draining for the sauce to be ready rather than leaving cooked pasta waiting through an extended shoulder simmer.
6. **Combine:** Take the sauce off the heat. Add the drained hot pasta and Pecorino Romano, tossing gently to coat with all the sauce and measured cheese.
7. **Serve:** Serve promptly with additional grated Pecorino Romano (if using) and additional black pepper (if using) as desired.

## Sequential onion-and-pancetta variation

For the sequential version, use the same full sauce quantities, with the lamb in very fine dice. Cook all the olive oil and onion first over moderately high heat, stirring until the onion is pale gold. Add all the pancetta and rosemary and render the fat while leaving the pancetta soft; add the lamb, brown for about 5 minutes, and season with salt and pepper. Add all the wine and simmer until the visible free wine has evaporated, about 10 minutes. Add the entire can of tomatoes and juices and begin checking after about 15 minutes for fat separation and tender lamb. Continue cooking as needed to complete step 4’s applicable meat checks and tenderness; use the genuine water allowance if needed. Drain the al-dente pasta into a warmed bowl, then toss with the full sauce and the measured Pecorino, passing the extra cheese separately.

For the original pasta-water proportions, replace the unmeasured pasta-water and pasta-salt allowances with 4 quarts water and 1½ tbsp coarse salt in the original batch; scale both together with the measured pasta. This is a separate cooking-water option, not extra salt on top of the main allowance and not an equal spoon-volume substitution of fine salt. Penne or maccheroncini is also a pasta choice for this version; use the full measured dry-pasta amount.
