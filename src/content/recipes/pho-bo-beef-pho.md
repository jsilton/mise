---
miseId: 35709b6b-c399-4edf-8eee-48b08b4f64f0
title: Pho Bo (Beef Pho)
difficulty: intermediate
cookingMethods:
  - simmer
  - boil
  - no-cook
dietary:
  - dairy-free
occasions:
  - comfort-food
  - entertaining
flavorProfile:
  - savory
  - herbaceous
  - umami
  - spicy
cuisines:
  - Vietnamese
role: main
vibe: comfort
seasons:
  - fall
  - winter
nutritionalDensity: hearty
leftovers: good
advancePrep:
  - make-ahead
  - components-ahead
equipment:
  - stockpot
  - sheet-pan
  - fine-mesh-strainer
prepTime: 30 min
cookTime: About 4 hr 30 min
totalTime: 'About 5 hr, plus any additional brisket chilling'
servings: 6 portions
pairsWith:
  - quick-pickled-carrots-and-daikon
  - vietnamese-spring-rolls
  - smashed-cucumber-salad
ingredients:
  - '--- Main recipe ---'
  - '3 lb beef marrow bones, cut into 3-inch pieces'
  - 2 lb whole beef brisket
  - >-
    cold water, enough to cover the bones and brisket for the initial discarded
    parboil
  - '2 large yellow onions, unpeeled, washed and halved'
  - '1 4-inch piece of fresh ginger, washed and halved lengthwise'
  - 4 whole star anise
  - '1 3-inch cinnamon stick, Vietnamese cinnamon preferred'
  - 6 whole cloves
  - 1 tbsp coriander seeds
  - 1 cardamom pod
  - 6 quarts cold water
  - 3 tbsp fish sauce
  - 'additional fish sauce, to taste after the broth is cooked, optional'
  - 1 tbsp sugar
  - 1 tbsp kosher salt
  - 1 lb dried medium-width rice noodles (banh pho)
  - >-
    water, as required by the rice-noodle package for soaking and cooking; drain
    before serving
  - '1/2 lb eye of round, sliced paper-thin against the grain'
  - 'bean sprouts, as desired for serving; thoroughly cooked for the main route'
  - 'fresh Thai basil, as desired for serving'
  - 'fresh cilantro, as desired for serving'
  - 'lime wedges, as desired for serving'
  - 'thinly sliced jalapeños, as desired for serving'
  - 'hoisin sauce, as desired for serving'
  - 'Sriracha, as desired for serving'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: main
      name: Main recipe
      ingredients:
        - id: bones
          key: beef-marrow-bones
          name: beef marrow bones
          quantity:
            amount: 3
            unit: lb
          uses:
            - step: parboil
              share: 1
          preparation: cut into 3-inch pieces
        - id: brisket
          key: beef-brisket
          name: whole beef brisket
          quantity:
            amount: 2
            unit: lb
          uses:
            - step: parboil
              share: 1
        - id: parboil-water
          key: water
          name: cold water
          allowance: >-
            enough to cover the bones and brisket for the initial discarded
            parboil
          uses:
            - step: parboil
              share: 1
          role: cooking-water
        - id: onions
          key: yellow-onion
          name: large yellow onion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: char
              share: 1
          plural: large yellow onions
          preparation: 'unpeeled, washed and halved'
        - id: ginger
          key: ginger
          name: 4-inch piece of fresh ginger
          quantity:
            amount: 1
            unit: count
          uses:
            - step: char
              share: 1
          plural: 4-inch pieces of fresh ginger
          preparation: washed and halved lengthwise
        - id: star-anise
          key: star-anise
          name: whole star anise
          quantity:
            amount: 4
            unit: count
          uses:
            - step: toast
              share: 1
          plural: whole star anise
        - id: cinnamon
          key: cinnamon-stick
          name: 3-inch cinnamon stick
          quantity:
            amount: 1
            unit: count
          uses:
            - step: toast
              share: 1
          plural: 3-inch cinnamon sticks
          preparation: Vietnamese cinnamon preferred
        - id: cloves
          key: cloves
          name: whole clove
          quantity:
            amount: 6
            unit: count
          uses:
            - step: toast
              share: 1
          plural: whole cloves
        - id: coriander
          key: coriander-seeds
          name: coriander seeds
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: toast
              share: 1
        - id: cardamom
          key: cardamom-pod
          name: cardamom pod
          quantity:
            amount: 1
            unit: count
          uses:
            - step: toast
              share: 1
          plural: cardamom pods
        - id: water
          key: water
          name: cold water
          quantity:
            amount: 6
            unit: quart
          uses:
            - step: broth
              share: 1
          role: cooking-water
        - id: fish-sauce
          key: fish-sauce
          name: fish sauce
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: extra-fish-sauce
          key: fish-sauce
          name: additional fish sauce
          allowance: to taste after the broth is cooked
          uses:
            - step: season
              share: 1
          optional: true
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: noodles
          key: banh-pho
          name: dried medium-width rice noodles (banh pho)
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: noodles
              share: 1
        - id: noodle-water
          key: water
          name: water
          allowance: >-
            as required by the rice-noodle package for soaking and cooking;
            drain before serving
          uses:
            - step: noodles
              share: 1
          role: cooking-water
        - id: eye
          key: beef-eye-round
          name: eye of round
          quantity:
            amount: 1/2
            unit: lb
          uses:
            - step: meats
              share: 1
          preparation: sliced paper-thin against the grain
        - id: sprouts
          key: bean-sprouts
          name: bean sprouts
          allowance: as desired for serving; thoroughly cooked for the main route
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: basil
          key: thai-basil
          name: fresh Thai basil
          allowance: as desired for serving
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          allowance: as desired for serving
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: lime
          key: lime
          name: lime wedges
          allowance: as desired for serving
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: jalapeno
          key: jalapeno
          name: thinly sliced jalapeños
          allowance: as desired for serving
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: hoisin
          key: hoisin
          name: hoisin sauce
          allowance: as desired for serving
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: sriracha
          key: sriracha
          name: Sriracha
          allowance: as desired for serving
          uses:
            - step: serve
              share: 1
          role: garnish
  steps:
    - id: parboil
      title: Parboil
      text: >-
        Place {{ingredients}} in a stockpot large enough for the full load.
        Bring to a vigorous boil for 10 minutes, then drain. Rinse the parboiled
        bones and brisket under cold water and scrub the pot clean. Contain
        splashes and clean the sink, tools and nearby surfaces before preparing
        ready-to-eat food. Return the bones and brisket promptly to the cooking
        process; this parboil is not a completed meat-cooking or storage step.
    - id: char
      title: Char aromatics
      text: >-
        While the bones parboil, arrange {{ingredients}} on a broiler-safe sheet
        pan. Expose the cut faces to the broiler, turning as needed, and broil
        on high until charred in patches and softened. The original 12–15
        minutes is a planning range; watch closely and follow the broiler’s
        actual rack and vessel guidance. Do not use parchment unless its
        instructions permit broiling.
    - id: toast
      title: Toast spices
      text: >-
        Toast {{ingredients}} in a dry skillet over medium heat for about 2–3
        minutes, stirring, until fragrant without scorching. Enclose all the
        spices in a sachet or cheesecloth bundle.
    - id: broth
      title: Build broth
      text: >-
        Return the cleaned bones and brisket to the clean pot. Add
        {{ingredients}}, all the charred aromatics and the complete spice
        bundle. Bring to a boil, then reduce to a gentle simmer. Skim foam
        during the first 30 minutes. Use enough pot capacity for the water and
        solids plus headroom; divide all supplies proportionally among
        additional pots or complete batches if necessary.
    - id: brisket
      title: Cook and chill brisket
      text: >-
        Begin checking the brisket after about 1½–2 hours of broth simmering. It
        should offer little resistance to a chopstick or skewer and reach at
        least 145°F / 63°C in the thickest part; allow a 3-minute rest before
        cooling. Transfer with clean utensils to a clean heatproof vessel in an
        ice-water bath, keeping bath water off the meat. Divide the cooked
        brisket into smaller portions if needed for prompt cooling, refrigerate
        within 2 hours (1 hour above 90°F / 32°C), and chill at 40°F / 4°C or
        below until cold through and firm enough to slice. The original
        10-minute ice bath is a first check, not proof that a whole brisket is
        chilled. Continue the bones to about 4 hours total broth simmering,
        counting from step 4, rather than a fixed two additional hours.
    - id: season
      title: Strain and season
      text: >-
        Strain the broth through a cheesecloth-lined fine-mesh strainer; discard
        the spent bones, aromatics and spice bundle. Stir in {{ingredients}},
        starting with all the measured fish sauce, sugar and salt and using the
        separate additional fish-sauce allowance only if wanted. Taste after the
        broth and meat have cooked.
    - id: noodles
      title: Prepare noodles
      text: >-
        Use {{ingredients}}. Follow the actual noodle package for soaking and
        boiling, cooking until tender but intact. The original 20–25-minute warm
        soak followed by 30–60 seconds boiling is a first-check route only for a
        product that calls for it. Drain just before assembly; package type can
        require a different clock.
    - id: meats
      title: Prepare meats
      text: >-
        Slice the cold brisket across the grain. Reheat it in simmering broth to
        165°F / 74°C throughout. For {{ingredients}}, cook the slices in
        simmering broth before assembly, checking representative pieces with a
        suitable thin-tip thermometer for at least 145°F / 63°C, then allow a
        3-minute rest before serving. Color change or brief contact with hot
        broth alone does not establish doneness; if the thin slices cannot be
        reliably measured, do not assume this endpoint has been verified. Use
        clean serving utensils for both meats.
    - id: serve
      title: Assemble
      text: >-
        Prepare {{ingredients}} for serving. Cook the sprouts thoroughly in a
        portion of the broth before dividing the drained noodles, reheated
        brisket and cooked, rested eye of round among deep bowls. Add the cooked
        sprouts and ladle in hot broth without filling the bowls to the brim;
        promptly cool any unused broth. Serve the remaining garnishes and sauces
        separately. Simply ladling hot broth over raw sprouts does not establish
        thorough cooking.
learning:
  focus: Coordinate broth extraction with two distinct meat preparations
  outcome: >-
    A fragrant strained broth, tender sliced brisket and eye of round cooked
    before bowl assembly.
  techniques:
    - temperature
  before:
    - >-
      Keep raw meat at 40°F / 4°C or below, refrigerator-thawing frozen
      supplies. Prepare serving herbs and vegetables with clean tools before
      handling raw meat; keep cooked food and its utensils separate.
    - >-
      Wash the serving herbs and vegetables; keep their platter away from the
      raw beef. Use enough stockpot and broiler capacity, dividing the entire
      formula proportionally when extra loads are needed.
    - >-
      The six portions are the original serving plan. Six quarts is starting
      broth water, separate from discarded parboil/noodle water; finished
      volume, portion size and chilling time have not been measured.
  checkpoints:
    - step: 5
      cue: >-
        A skewer enters the brisket with little resistance; its center has
        reached the whole-cut endpoint before cooling.
      why: >-
        Tenderness and temperature answer different questions. A fixed simmer or
        ten-minute ice bath does not establish safe cooking and cold-through
        slicing.
    - step: 8
      cue: >-
        Brisket reheats to 165°F throughout; representative eye-of-round slices
        reach 145°F followed by their 3-minute rest.
      why: >-
        The two meats start in different states. Keep the established checks
        even when the slices change color quickly.
  troubleshooting:
    - problem: Brisket is too warm or soft to slice thinly
      cause: Whole-piece size and chilling conditions vary.
      fix: >-
        Keep it refrigerated until cold through and firm; allow additional
        elapsed time. Slice across the grain, then reheat the slices as
        directed.
  timing: >-
    Plan about 5 hours for the original batch, with roughly 30 minutes
    preparation and about 4 hours broth simmering plus parboiling, heating and
    finishing. Char and toast while parboiling; chill the fully cooked brisket
    while the bones continue. Additional chilling, noodle-package cooking or
    extra pot/broiler loads extends the schedule. The clock is a planning
    estimate, not an observed cook.
  storage: >-
    Divide leftovers into shallow containers and refrigerate within 2 hours, or
    1 hour above 90°F / 32°C, at 40°F / 4°C or below; use within 3–4 days or
    freeze promptly. Store broth, meats and drained noodles separately when
    practical so the noodles do not keep absorbing broth. Reheat while stirring
    to 165°F / 74°C throughout, checking more than one place. USDA additionally
    recommends a rolling boil for reheated soup or sauce; reach it briefly
    rather than boiling for a prolonged time. Reheat the stored meat to 165°F
    throughout; further cooking can firm the thin beef and soften noodles.
  sources:
    - title: FoodSafety.gov whole-cut and leftover endpoints
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: USDA leftovers and cooling
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: FDA produce and raw sprouts
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Charred onion and ginger, toasted spices and a gentle bone simmer give this beef pho its aromatic broth. Keep the brisket tenderness, its cooling for slicing, and the eye-of-round cooking as separate decisions. Both meats are cooked before bowl assembly; a ladle of hot broth is not a reliable substitute for checking thin beef.

## Directions

1. **Parboil:** Place beef marrow bones, whole beef brisket, and cold water in a stockpot large enough for the full load. Bring to a vigorous boil for 10 minutes, then drain. Rinse the parboiled bones and brisket under cold water and scrub the pot clean. Contain splashes and clean the sink, tools and nearby surfaces before preparing ready-to-eat food. Return the bones and brisket promptly to the cooking process; this parboil is not a completed meat-cooking or storage step.
2. **Char aromatics:** While the bones parboil, arrange large yellow onions and 4-inch piece of fresh ginger on a broiler-safe sheet pan. Expose the cut faces to the broiler, turning as needed, and broil on high until charred in patches and softened. The original 12–15 minutes is a planning range; watch closely and follow the broiler’s actual rack and vessel guidance. Do not use parchment unless its instructions permit broiling.
3. **Toast spices:** Toast whole star anise, 3-inch cinnamon stick, whole cloves, coriander seeds, and cardamom pod in a dry skillet over medium heat for about 2–3 minutes, stirring, until fragrant without scorching. Enclose all the spices in a sachet or cheesecloth bundle.
4. **Build broth:** Return the cleaned bones and brisket to the clean pot. Add cold water, all the charred aromatics and the complete spice bundle. Bring to a boil, then reduce to a gentle simmer. Skim foam during the first 30 minutes. Use enough pot capacity for the water and solids plus headroom; divide all supplies proportionally among additional pots or complete batches if necessary.
5. **Cook and chill brisket:** Begin checking the brisket after about 1½–2 hours of broth simmering. It should offer little resistance to a chopstick or skewer and reach at least 145°F / 63°C in the thickest part; allow a 3-minute rest before cooling. Transfer with clean utensils to a clean heatproof vessel in an ice-water bath, keeping bath water off the meat. Divide the cooked brisket into smaller portions if needed for prompt cooling, refrigerate within 2 hours (1 hour above 90°F / 32°C), and chill at 40°F / 4°C or below until cold through and firm enough to slice. The original 10-minute ice bath is a first check, not proof that a whole brisket is chilled. Continue the bones to about 4 hours total broth simmering, counting from step 4, rather than a fixed two additional hours.
6. **Strain and season:** Strain the broth through a cheesecloth-lined fine-mesh strainer; discard the spent bones, aromatics and spice bundle. Stir in fish sauce, additional fish sauce (if using), sugar, and kosher salt, starting with all the measured fish sauce, sugar and salt and using the separate additional fish-sauce allowance only if wanted. Taste after the broth and meat have cooked.
7. **Prepare noodles:** Use dried medium-width rice noodles (banh pho) and water. Follow the actual noodle package for soaking and boiling, cooking until tender but intact. The original 20–25-minute warm soak followed by 30–60 seconds boiling is a first-check route only for a product that calls for it. Drain just before assembly; package type can require a different clock.
8. **Prepare meats:** Slice the cold brisket across the grain. Reheat it in simmering broth to 165°F / 74°C throughout. For eye of round, cook the slices in simmering broth before assembly, checking representative pieces with a suitable thin-tip thermometer for at least 145°F / 63°C, then allow a 3-minute rest before serving. Color change or brief contact with hot broth alone does not establish doneness; if the thin slices cannot be reliably measured, do not assume this endpoint has been verified. Use clean serving utensils for both meats.
9. **Assemble:** Prepare bean sprouts, fresh Thai basil, fresh cilantro, lime wedges, thinly sliced jalapeños, hoisin sauce, and Sriracha for serving. Cook the sprouts thoroughly in a portion of the broth before dividing the drained noodles, reheated brisket and cooked, rested eye of round among deep bowls. Add the cooked sprouts and ladle in hot broth without filling the bowls to the brim; promptly cool any unused broth. Serve the remaining garnishes and sauces separately. Simply ladling hot broth over raw sprouts does not establish thorough cooking.

## Serving option

The raw bean-sprout garnish remains an option with a food-safety limitation: raw or lightly cooked sprouts can contain harmful bacteria, and FDA advises children, pregnant people, older adults and people with weakened immune systems to avoid them. Washing or briefly warming them in a bowl does not establish safety; use thoroughly cooked sprouts for those diners.
