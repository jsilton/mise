---
miseId: 327867c0-122d-4576-babe-980b173d44cc
title: Mongolian Chicken
role: main
vibe: quick
difficulty: easy
prepTime: About 25 min
cookTime: About 10 min; longer for extra frying loads
totalTime: About 35 min; longer for extra frying loads
servings: 4 portions
cookingMethods:
  - fry
  - stir-fry
categories: []
source: thewoksoflife.com
ingredients:
  - '--- Chicken and frying ---'
  - >-
    12 oz boneless skinless chicken breast or thighs, raw, fully thawed if frozen; pat dry and slice
    ¼ inch / 6 mm thick
  - 1 tbsp vegetable oil for coating the chicken
  - >-
    1/4 cup cornstarch for dredging, use this supply for any second dredge; discard the unused
    raw-contact starch
  - >-
    1/3 cup (80 ml) vegetable oil for frying, retain part for aromatics after frying; drain the
    excess
  - >-
    3 scallions, cut diagonally into 1–2-inch lengths (about 5 cm at the long end); keep white and
    green parts separate
  - '--- Sauce and slurry ---'
  - '1 tsp ginger, julienned or minced'
  - '5 dried red chili peppers, optional'
  - '2 garlic cloves, chopped'
  - 2 1/2 tbsp soy sauce
  - 2 tbsp brown sugar
  - 1/4 cup hot water or low-sodium chicken stock
  - '2 tbsp cornstarch for the slurry, prepare the full slurry; use only as much as the sauce needs'
  - 2 tbsp water for the slurry
sourceUrl: 'https://thewoksoflife.com/mongolian-chicken/'
cuisines:
  - Chinese
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: chicken
      name: Chicken and frying
      ingredients:
        - id: chicken
          key: chicken-breast-or-thighs
          name: boneless skinless chicken breast or thighs
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: coat
              share: 1
          preparation: 'raw, fully thawed if frozen; pat dry and slice ¼ inch / 6 mm thick'
        - id: coat-oil
          key: vegetable-oil
          name: vegetable oil for coating the chicken
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: coat
              share: 1
        - id: dredge
          key: cornstarch
          name: cornstarch for dredging
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: coat
              share: 1
          preparation: use this supply for any second dredge; discard the unused raw-contact starch
        - id: fry-oil
          key: vegetable-oil
          name: vegetable oil for frying
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: fry
              share: 1
          equivalents:
            - amount: 80
              unit: ml
          preparation: retain part for aromatics after frying; drain the excess
        - id: scallions
          key: scallion
          name: scallion
          quantity:
            amount: 3
            unit: count
          uses:
            - step: scallions
              share: 1
          plural: scallions
          preparation: >-
            cut diagonally into 1–2-inch lengths (about 5 cm at the long end); keep white and green
            parts separate
    - id: sauce
      name: Sauce and slurry
      ingredients:
        - id: ginger
          key: ginger
          name: ginger
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: ginger
              share: 1
          preparation: julienned or minced
        - id: chili
          key: dried-red-chili
          name: dried red chili pepper
          quantity:
            amount: 5
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: dried red chili peppers
          optional: true
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: chopped
        - id: soy
          key: soy-sauce
          name: soy sauce
          quantity:
            amount: 2 1/2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: brown-sugar
          name: brown sugar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: liquid
          key: water-or-low-sodium-chicken-stock
          name: hot water or low-sodium chicken stock
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: starch
          key: cornstarch
          name: cornstarch for the slurry
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: slurry
              share: 1
          preparation: prepare the full slurry; use only as much as the sauce needs
        - id: water
          key: water
          name: water for the slurry
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: slurry
              share: 1
          role: cooking-water
  steps:
    - id: scallions
      title: Separate the scallions
      text: >-
        Prepare {{ingredients}}, keeping all white parts in one bowl and all green parts in another.
        Both portions will be used; their natural size varies.
    - id: slurry
      title: Prepare the slurry
      text: >-
        Mix {{ingredients}} in a bowl and set beside the stove. Stir again immediately before using
        it; settled starch will otherwise thicken unevenly.
    - id: coat
      title: Lightly coat the chicken
      text: >-
        Have {{ingredients}} ready. Mix the chicken with the coating oil, then dredge in the listed
        cornstarch, shaking off excess so each piece is lightly coated. If the coating becomes damp
        before frying, use the same measured dredging supply for a second light coating. Discard
        unused dredging starch after the chicken has gone into the pan; it has touched raw chicken.
    - id: fry
      title: Fry in manageable loads
      text: >-
        Heat {{ingredients}} in a wok over high heat until hot, without letting it smoke. Add the
        coated chicken in a single layer; fry in loads if necessary. Start checking the first side
        at about 1 minute and the second at about 30 seconds, turning as needed until the coating is
        browned and crisp and the thickest pieces reach 165°F / 74°C. Use a thin-tip thermometer
        from the side. Transfer fully cooked chicken to a clean paper-towel-lined plate. Reuse the
        frying oil for subsequent loads; the times are first checks, not doneness guarantees.
    - id: ginger
      title: Use the retained frying oil
      text: >-
        Drain excess frying oil, retaining the corresponding scaled share for the aromatics: the
        original batch leaves 1 tablespoon from its measured ⅓ cup. This is retained frying oil, not
        another oil addition. Set the wok over medium-high heat, add {{ingredients}} and stir about
        20 seconds until fragrant.
    - id: aromatics
      title: 'Add garlic, chilies and scallion whites'
      text: >-
        Add {{ingredients}} and all the reserved scallion whites. Stir-fry for about 15 seconds,
        keeping the garlic moving.
    - id: sauce
      title: Dissolve the sugar
      text: >-
        Add {{ingredients}}, bring to a simmer and stir until the sugar dissolves. Simmer for about
        2 minutes, watching that the small amount of liquid does not reduce to a scorched film.
    - id: finish
      title: Thicken and coat
      text: >-
        Stir the prepared slurry again and add it slowly, letting each addition thicken before
        adding more. Stop when the sauce coats the back of a spoon; the full prepared slurry may not
        be needed. Add all the cooked chicken and reserved scallion greens, then toss for about 10
        seconds until the sauce clings. If there is still excess thin sauce, add a little more of
        the remaining prepared slurry and stir until thickened. Check chicken for 165°F / 74°C
        before serving. Discard unused slurry and serve immediately.
learning:
  focus: Keep the dredge light and thicken the glaze only as much as it needs
  outcome: >-
    Thin, fully cooked chicken pieces have a crisp coating beneath a clinging soy-brown-sugar glaze,
    with no pool of stiff sauce.
  techniques:
    - browning
    - starch
    - temperature
  before:
    - >-
      Pat chicken dry and keep the slices about ¼ inch / 6 mm thick at every batch size. Thin slices
      brown quickly; a thicker center needs longer to reach 165°F / 74°C.
    - >-
      Set out separate dredging and slurry starch. The listed dredging supply includes any
      second coat; prepare the full listed slurry starch and water separately, then add only as
      much slurry as the sauce needs.
    - >-
      Have the scallion whites and greens separated before frying. Keep chicken in a single layer
      and use more loads when needed; pan geometry and frying time do not multiply with ingredient
      quantities.
  checkpoints:
    - step: 3
      cue: 'A thin, even starch coat remains after loose powder is shaken off.'
      why: A heavy layer can stay chalky or form a thick shell rather than a light crust.
    - step: 4
      cue: 'The coating is browned and crisp, and the thickest chicken pieces measure 165°F / 74°C.'
      why: >-
        The short frying times depend on thin slices; the final ten-second toss will not reliably
        finish partly cooked chicken.
    - step: 8
      cue: The glaze coats the chicken with almost no free liquid and no stiff gel.
      why: >-
        The entire slurry is a prepared supply, not a required dose; its needed amount depends on
        how much sauce liquid remains.
  troubleshooting:
    - problem: The crust darkens before the chicken reaches 165°F
      cause: Slices are too thick or the oil is too hot.
      fix: >-
        Lower the heat and continue cooking to the measured endpoint. Keep remaining slices at the
        specified thickness and fry them in manageable loads.
    - problem: The sauce becomes pasty
      cause: Too much of the prepared slurry was used or the sauce reduced too far.
      fix: >-
        Stop adding slurry when the sauce coats a spoon. Stir while adding and watch the small sauce
        volume closely; do not automatically pour in the full slurry.
  storage: >-
    Refrigerate in shallow containers within 2 hours, or 1 hour above 90°F / 32°C; keep at 40°F /
    4°C or colder and use within 3–4 days. Reheat leftovers to 165°F / 74°C throughout, turning and
    stirring for even heating. The crust softens under sauce during storage. USDA additionally
    recommends a rolling boil when reheating leftover sauces: stir for even heat and keep it brief,
    since prolonged boiling concentrates this glaze and softens the coating.
  timing: >-
    For the original batch, plan about 25 minutes of slicing, measuring and coating and about 10
    minutes of frying and sauce work, about 35 minutes overall. Additional frying loads extend
    elapsed time. Slice thickness, pan heat and the measured chicken endpoint govern cooking; do not
    multiply the short frying checks or the ten-second final toss by the serving factor.
  sources:
    - title: The Woks of Life — Mongolian chicken
      url: 'https://thewoksoflife.com/mongolian-chicken/'
    - title: FoodSafety.gov — Safe minimum internal temperatures
      url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures'
    - title: FDA — Safe food handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: USDA FSIS — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

This Chinese American takeout-style chicken uses a light cornstarch coat and a sweet soy glaze. Fry the thin pieces until cooked, then add slurry gradually so the sauce clings without becoming a heavy gel.

## Directions

1. **Separate the scallions:** Prepare scallions, keeping all white parts in one bowl and all green parts in another. Both portions will be used; their natural size varies.
2. **Prepare the slurry:** Mix cornstarch for the slurry and water for the slurry in a bowl and set beside the stove. Stir again immediately before using it; settled starch will otherwise thicken unevenly.
3. **Lightly coat the chicken:** Have boneless skinless chicken breast or thighs, vegetable oil for coating the chicken, and cornstarch for dredging ready. Mix the chicken with the coating oil, then dredge in the listed cornstarch, shaking off excess so each piece is lightly coated. If the coating becomes damp before frying, use the same measured dredging supply for a second light coating. Discard unused dredging starch after the chicken has gone into the pan; it has touched raw chicken.
4. **Fry in manageable loads:** Heat vegetable oil for frying in a wok over high heat until hot, without letting it smoke. Add the coated chicken in a single layer; fry in loads if necessary. Start checking the first side at about 1 minute and the second at about 30 seconds, turning as needed until the coating is browned and crisp and the thickest pieces reach 165°F / 74°C. Use a thin-tip thermometer from the side. Transfer fully cooked chicken to a clean paper-towel-lined plate. Reuse the frying oil for subsequent loads; the times are first checks, not doneness guarantees.
5. **Use the retained frying oil:** Drain excess frying oil, retaining the corresponding scaled share for the aromatics: the original batch leaves 1 tablespoon from its measured ⅓ cup. This is retained frying oil, not another oil addition. Set the wok over medium-high heat, add ginger and stir about 20 seconds until fragrant.
6. **Add garlic, chilies and scallion whites:** Add dried red chili peppers (if using) and garlic cloves and all the reserved scallion whites. Stir-fry for about 15 seconds, keeping the garlic moving.
7. **Dissolve the sugar:** Add soy sauce, brown sugar, and hot water or low-sodium chicken stock, bring to a simmer and stir until the sugar dissolves. Simmer for about 2 minutes, watching that the small amount of liquid does not reduce to a scorched film.
8. **Thicken and coat:** Stir the prepared slurry again and add it slowly, letting each addition thicken before adding more. Stop when the sauce coats the back of a spoon; the full prepared slurry may not be needed. Add all the cooked chicken and reserved scallion greens, then toss for about 10 seconds until the sauce clings. If there is still excess thin sauce, add a little more of the remaining prepared slurry and stir until thickened. Check chicken for 165°F / 74°C before serving. Discard unused slurry and serve immediately.
