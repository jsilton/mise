---
miseId: aa497c4f-8bbf-4c51-b13e-cfae7d00d412
title: Pork and Peaches
difficulty: easy
cookingMethods:
  - grill
occasions:
  - entertaining
  - date-night
seasons:
  - summer
nutritionalDensity: moderate
leftovers: good
equipment:
  - cast-iron-pan-or-griddle
  - meat-mallet
  - instant-read-thermometer
flavorProfile:
  - savory
  - sweet
  - herbaceous
  - rich
cuisines:
  - American
role: main
vibe: nutritious
prepTime: '20 min, plus 15 min marinating'
cookTime: 20 min
totalTime: 55 min
servings: 4 portions
pairsWith:
  - crispy-gold-potatoes-with-lemon-garlic-butter
  - grilled-corn-salad-with-feta
pairingNotes:
  crispy-gold-potatoes-with-lemon-garlic-butter: 'Crisp, smoky potatoes for the grilled pork.'
  grilled-corn-salad-with-feta: Summer corn from the same grill.
ingredients:
  - '--- Pork ---'
  - '2 lb boneless pork butt or shoulder, butterflied'
  - 'kosher salt, to taste'
  - 'black pepper, to taste'
  - '2 tbsp extra-virgin olive oil, for the griddle'
  - '--- Marinade ---'
  - '4–5 garlic cloves, minced'
  - '1 tbsp fresh rosemary, minced'
  - 3 tbsp extra-virgin olive oil
  - '--- Garlic-rosemary oil ---'
  - '4–5 garlic cloves, minced'
  - '1 tbsp fresh rosemary, minced'
  - 3 tbsp extra-virgin olive oil
  - '--- Peaches ---'
  - '6 ripe peaches, halved and pitted'
  - '4 tbsp unsalted butter, diced'
source: Adapted from NYT Cooking
sourceUrl: 'https://cooking.nytimes.com/recipes/12690-grilled-pork-and-peaches'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: pork
      name: Pork
      ingredients:
        - id: pork
          key: pork
          name: boneless pork butt or shoulder
          stepName: pork
          quantity:
            amount: 2
            unit: lb
          uses:
            - step: prep
              share: 1
          preparation: butterflied
        - id: salt
          key: salt
          name: kosher salt
          allowance: to taste
          uses:
            - step: season
              share: 1
        - id: pepper
          key: pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: season
              share: 1
        - id: pan-oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: heat
              share: 1
          preparation: for the griddle
    - id: marinade
      name: Marinade
      ingredients:
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 4
            max: 5
            unit: count
          uses:
            - step: marinate
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: rosemary
          key: rosemary
          name: fresh rosemary
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: marinate
              share: 1
          preparation: minced
        - id: oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: marinate
              share: 1
    - id: finish
      name: Garlic-rosemary oil
      ingredients:
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 4
            max: 5
            unit: count
          uses:
            - step: finish-oil
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: rosemary
          key: rosemary
          name: fresh rosemary
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: finish-oil
              share: 1
          preparation: minced
        - id: oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: finish-oil
              share: 1
    - id: fruit
      name: Peaches
      ingredients:
        - id: peaches
          key: peaches
          name: ripe peach
          quantity:
            amount: 6
            unit: count
          uses:
            - step: fruit
              share: 1
          plural: ripe peaches
          preparation: halved and pitted
        - id: butter
          key: butter
          name: unsalted butter
          quantity:
            amount: 4
            unit: tbsp
          uses:
            - step: fruit
              share: 1
          preparation: diced
  steps:
    - id: prep
      title: Pound the pork
      text: 'Pound the {{ingredients}} with a meat mallet to an even 3/4 inch thick.'
    - id: season
      title: Season the pork
      text: 'Season both sides of the pork generously with {{ingredients}}.'
    - id: marinate
      title: Marinate the pork
      text: >-
        Mix {{ingredients}} in a small bowl and rub it over both sides of the pork. Let it sit for
        15 minutes, or refrigerate it for up to 4 hours.
    - id: heat
      title: Heat the griddle
      text: >-
        Set a large cast-iron griddle on a grill over high heat until very hot. Turn a gas grill to
        medium, or let a charcoal fire burn down a little. Brush the griddle with {{ingredients}}
        and heat until it shimmers.
    - id: pork
      title: Sear the pork
      text: >-
        Scrape the garlic and rosemary off the pork, leaving a film of oil, so they don't burn. Lay
        the pork on the griddle and sear without moving it until a deep brown crust forms, 8 to 10
        minutes.
    - id: fruit
      title: Cook the peaches
      text: >-
        While the pork sears, add {{ingredients}} around it. Set the peaches cut side down and dot
        them with the butter. Cook until soft and browned, about 5 minutes, then move them to a
        platter. If they don't all fit, cook them in a second skillet.
    - id: finish-pork
      title: Finish the pork
      text: >-
        Flip the pork and cook until the center reaches 145°F, 5 to 7 minutes. Move it to a cutting
        board and let it rest for 5 minutes.
    - id: finish-oil
      title: Warm the garlic oil
      text: >-
        While the pork rests, warm {{ingredients}} in a small pan over low heat until the garlic is
        fragrant and pale gold, 2 to 3 minutes. Add a pinch of salt.
    - id: serve
      title: Slice and serve
      text: >-
        Slice the pork across the grain and spoon the warm garlic oil over it. Serve with the
        peaches and any juices from the board.
learning:
  techniques:
    - temperature
    - seasoning
  substitutions:
    - ingredient: Stovetop
      alternative: Cook it indoors
      effect: >-
        Heat the griddle across two burners over medium-high heat and turn on a strong vent fan.
        Everything else stays the same.
  storage: >-
    Leftover pork keeps 4 days in the fridge. Reheat it gently in a skillet. The peaches are best
    the day they're cooked.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

A summer dinner from NYT Cooking. Pork shoulder pounded thin cooks as fast as a chop but stays far juicier, and peach halves browned in butter right next to it turn soft and jammy. A garlic and rosemary oil spooned over at the end gives it a fresh hit of flavor.

## Directions

1. **Pound the pork:** Pound the pork with a meat mallet to an even 3/4 inch thick.
2. **Season the pork:** Season both sides of the pork generously with the salt and pepper.
3. **Marinate the pork:** Mix 4–5 garlic cloves, 1 tbsp of the rosemary, and 3 tbsp of the olive oil in a small bowl and rub it over both sides of the pork. Let it sit for 15 minutes, or refrigerate it for up to 4 hours.
4. **Heat the griddle:** Set a large cast-iron griddle on a grill over high heat until very hot. Turn a gas grill to medium, or let a charcoal fire burn down a little. Brush the griddle with 2 tbsp of the olive oil and heat until it shimmers.
5. **Sear the pork:** Scrape the garlic and rosemary off the pork, leaving a film of oil, so they don't burn. Lay the pork on the griddle and sear without moving it until a deep brown crust forms, 8 to 10 minutes.
6. **Cook the peaches:** While the pork sears, add the peaches and butter around it. Set the peaches cut side down and dot them with the butter. Cook until soft and browned, about 5 minutes, then move them to a platter. If they don't all fit, cook them in a second skillet.
7. **Finish the pork:** Flip the pork and cook until the center reaches 145°F, 5 to 7 minutes. Move it to a cutting board and let it rest for 5 minutes.
8. **Warm the garlic oil:** While the pork rests, warm 4–5 garlic cloves, 1 tbsp of the rosemary, and 3 tbsp of the olive oil in a small pan over low heat until the garlic is fragrant and pale gold, 2 to 3 minutes. Add a pinch of salt.
9. **Slice and serve:** Slice the pork across the grain and spoon the warm garlic oil over it. Serve with the peaches and any juices from the board.
