---
miseId: 5a1ad320-79ad-47a2-b445-9109aba89765
title: Lamb Keema Matar
difficulty: easy
cookingMethods:
  - sear
  - saute
  - simmer
occasions:
  - comfort-food
  - weeknight
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
  - umami
  - rich
cuisines:
  - Indian
role: main
vibe: quick
prepTime: 10 min
cookTime: 'About 20–30 min, depending on browning and simmering'
totalTime: 'About 30–40 min, plus separately prepared rice or naan'
servings: 4 portions
pairsWith:
  - basmati-rice
  - cucumber-raita
  - naan
ingredients:
  - '--- Lamb and peas ---'
  - '1 lb ground lamb, raw, fresh or fully thawed'
  - 1 cup frozen peas
  - '1 large yellow onion, peeled and finely diced'
  - '1 tbsp fresh ginger, grated'
  - '1 tbsp fresh garlic, minced'
  - 1 tsp cumin seeds
  - 1 tsp turmeric
  - 1 tsp garam masala
  - 1 tsp Kashmiri chili powder
  - 1 tbsp tomato paste
  - '1/4 cup water, approximately, to keep the mixture saucy'
  - '1/2 lemon, washed and juiced'
  - 'fresh cilantro, as wanted for finishing, washed and chopped'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
equipment:
  - large-skillet-with-lid
  - food-thermometer
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: pan
      name: Lamb and peas
      ingredients:
        - id: lamb
          key: lamb
          name: ground lamb
          quantity:
            amount: 1
            unit: lb
          preparation: 'raw, fresh or fully thawed'
          uses:
            - step: brown
              share: 1
        - id: peas
          key: peas
          name: frozen peas
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: onion
          key: onion
          name: large yellow onion
          plural: large yellow onions
          quantity:
            amount: 1
            unit: count
          preparation: peeled and finely diced
          uses:
            - step: aromatics
              share: 1
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          preparation: grated
          uses:
            - step: aromatics
              share: 1
        - id: garlic
          key: garlic
          name: fresh garlic
          quantity:
            amount: 1
            unit: tbsp
          preparation: minced
          uses:
            - step: aromatics
              share: 1
        - id: cumin
          key: cumin
          name: cumin seeds
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: bloom
              share: 1
        - id: turmeric
          key: turmeric
          name: turmeric
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: bloom
              share: 1
        - id: garam
          key: garam
          name: garam masala
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: finish
              share: 1
        - id: chili
          key: chili
          name: Kashmiri chili powder
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: bloom
              share: 1
        - id: paste
          key: paste
          name: tomato paste
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: bloom
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 1/4
            unit: cup
          preparation: 'approximately, to keep the mixture saucy'
          role: cooking-water
          uses:
            - step: simmer
              share: 1
        - id: lemon
          key: lemon
          name: lemon
          plural: lemons
          quantity:
            amount: 1/2
            unit: count
          preparation: washed and juiced
          uses:
            - step: finish
              share: 1
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          allowance: as wanted for finishing
          preparation: washed and chopped
          role: garnish
          uses:
            - step: finish
              share: 1
  steps:
    - id: brown
      title: Brown the lamb
      text: >-
        Heat a large skillet and use {{ingredients}}, breaking it into small pieces as its fat
        renders. Cook until browned, adjusting heat to avoid blackened patches. Keep the full
        rendered fat in the pan. Use a vessel with room to stir the listed batch; for more meat use
        extra pans or loads and divide every ingredient proportionally.
    - id: aromatics
      title: Soften the onion
      text: >-
        Have {{ingredients}} ready. Add the diced onion to the lamb pan and cook about 5 minutes as
        a first check until it softens, stirring and lowering heat if it catches. Stir in all the
        ginger and garlic and sauté 30–45 seconds until fragrant without scorching.
    - id: bloom
      title: Add spices and tomato paste
      text: >-
        Stir in {{ingredients}} and cook about 1 minute, stirring constantly, until fragrant without
        burning. The garam masala remains for the finish.
    - id: simmer
      title: Cook the peas and finish the lamb
      text: >-
        Add {{ingredients}}, cover and simmer gently, beginning checks around 5 minutes. Stir to
        distribute heat and continue until peas are hot and tender, following any package cooking
        directions, and the ground-lamb mixture reaches 160°F in several places with a food
        thermometer. A brown exterior and the covered clock do not establish the meat endpoint.
    - id: finish
      title: Finish the seasoning
      text: >-
        Once the lamb is fully cooked, stir in {{ingredients}}, using all the juice from the
        measured lemon, and taste.
    - id: serve
      title: Serve
      text: >-
        Serve with separately prepared warm [Naan](/mise/recipes/naan) or [Basmati
        Rice](/mise/recipes/basmati-rice). Those components have their own amounts and preparation
        clocks; four portions is the original planning yield.
learning:
  focus: Render lamb fat and finish ground meat by temperature
  outcome: 'Saucy browned lamb with tender peas, fragrant spices and a lemon-cilantro finish.'
  techniques:
    - temperature
    - seasoning
  before:
    - >-
      Have all spices measured and vegetables prepared before browning. Garam masala and lemon
      belong to the finished cooked mixture; cumin, turmeric and chili cook with the tomato paste.
    - >-
      Use enough skillet room for the full listed batch and stir the covered mixture before checking
      its temperature. Have the cumin, turmeric, chili and tomato paste ready for their short
      fragrant cooking stage.
  checkpoints:
    - step: 2
      cue: Onion softens in the retained lamb fat without blackened garlic.
      why: >-
        The onion stage needs its own time; the short garlic-ginger stage comes after onion
        softening.
    - step: 4
      cue: Peas are hot and tender and the stirred ground-lamb mixture reaches 160°F.
      why: >-
        Ground meat needs a different endpoint from whole lamb cuts; browned pieces alone are not
        the temperature check.
  troubleshooting:
    - problem: The mixture catches before the peas are tender.
      cause: Heat is too fierce or a wide pan has evaporated the small water supply rapidly.
      fix: >-
        Lower the heat, stir through the bottom and keep covered while continuing to the stated
        endpoints. A burnt base will make the whole mixture bitter.
  substitutions:
    - ingredient: Kashmiri chili powder
      alternative: Reduce or omit the chili for a milder serving
      effect: >-
        Keep all remaining spices, lamb fat, peas and the lemon-cilantro finish; the dish loses some
        chili color and warmth. No equal-spoon replacement with a different hot chili blend is
        assumed.
  timing: >-
    Allow about 30–40 minutes for the original batch: about 10 minutes preparation and roughly 20–30
    minutes browning, onion softening, the short aromatic/spice stages, water heat-up and covered
    pea cooking. Most cooking is attended; extra pans, loads or evaporation corrections extend time.
    Rice or naan preparation is separate.
  storage: >-
    Refrigerate cooked leftovers promptly in shallow containers within 2 hours, or 1 hour above
    90°F, at 40°F or below. Use within 3–4 days and reheat to 165°F throughout. Stir when reheating
    the saucy mixture. FDA recommends a boil for reheated sauces and USDA additionally recommends a
    rolling boil; keep that stage brief rather than reducing the small water supply through
    prolonged boiling.
  sources:
    - title: Mise — Lamb Keema Matar
      url: >-
        https://github.com/jsilton/mise/blob/e70d098f3313e29087470fda5e9f65e7336b4bc4/src/content/recipes/lamb-keema-matar.md
    - title: FDA — Safe food handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: USDA — Cooked leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Keema matar pairs spiced ground lamb with sweet peas. Brown the lamb in its own rendered fat, soften the onion in that same pan and add the garam masala near the finish. The small water supply keeps the mixture saucy; lemon and cilantro finish it without discarding the lamb’s richness.
For kids, serve the heat on the side or reduce or omit the spicy elements.

## Directions

1. **Brown the lamb:** Heat a large skillet and use ground lamb, breaking it into small pieces as its fat renders. Cook until browned, adjusting heat to avoid blackened patches. Keep the full rendered fat in the pan. Use a vessel with room to stir the listed batch; for more meat use extra pans or loads and divide every ingredient proportionally.
2. **Soften the onion:** Have large yellow onion, fresh ginger, and fresh garlic ready. Add the diced onion to the lamb pan and cook about 5 minutes as a first check until it softens, stirring and lowering heat if it catches. Stir in all the ginger and garlic and sauté 30–45 seconds until fragrant without scorching.
3. **Add spices and tomato paste:** Stir in cumin seeds, turmeric, Kashmiri chili powder, and tomato paste and cook about 1 minute, stirring constantly, until fragrant without burning. The garam masala remains for the finish.
4. **Cook the peas and finish the lamb:** Add frozen peas and water, cover and simmer gently, beginning checks around 5 minutes. Stir to distribute heat and continue until peas are hot and tender, following any package cooking directions, and the ground-lamb mixture reaches 160°F in several places with a food thermometer. A brown exterior and the covered clock do not establish the meat endpoint.
5. **Finish the seasoning:** Once the lamb is fully cooked, stir in garam masala, lemon, and fresh cilantro, using all the juice from the measured lemon, and taste.
6. **Serve:** Serve with separately prepared warm [Naan](/mise/recipes/naan) or [Basmati Rice](/mise/recipes/basmati-rice). Those components have their own amounts and preparation clocks; four portions is the original planning yield.
