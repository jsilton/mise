---
miseId: 0cb6021f-a4c7-4054-8c21-fe7e79287732
title: Baja Fish Tacos
description: 'Beer-battered fried cod in warm corn tortillas with shredded cabbage, lime crema and cilantro.'
origin: Mexico
role: main
vibe: comfort
difficulty: intermediate
prepTime: 20 min
cookTime: 35 min
totalTime: 55 min
cuisines:
  - Mexican
cookingMethods:
  - fry
  - assemble
dietary:
  - pescatarian
  - nut-free
occasions:
  - weeknight
  - kid-friendly
  - family-meal
  - entertaining
flavorProfile:
  - crispy
  - fresh
  - bright
  - creamy
  - tangy
seasons:
  - spring
  - summer
nutritionalDensity: moderate
leftovers: poor
advancePrep:
  - make-ahead-sauce
  - prep-vegetables
equipment:
  - dutch-oven
  - deep-fry-thermometer
  - wire-rack
  - rimmed-baking-sheet
pairsWith:
  - pickled-red-onions
  - classic-guacamole
  - mexican-red-rice
pairingNotes:
  pickled-red-onions: 'A sharp, pink topping for the fried fish.'
  classic-guacamole: Creamy avocado to spoon into the tacos.
  mexican-red-rice: The taqueria side that fills out the plate.
servings: 6 portions
ingredients:
  - '--- Lime crema ---'
  - 1/3 cup Mexican crema
  - 1/3 cup mayonnaise
  - 1 tbsp fresh lime juice
  - 1/4 tsp kosher salt
  - '--- Beer-battered fish ---'
  - '1 1/2 lb skinless cod fillets, cut into 1-by-4-inch strips'
  - 3/4 tsp kosher salt
  - '6 cups neutral oil, for frying'
  - 1 cup all-purpose flour
  - 1/4 cup cornstarch
  - 1 tsp baking powder
  - 1 tsp kosher salt
  - 1 tsp dried Mexican oregano
  - 1 tsp yellow mustard
  - '1 cup Mexican lager, cold'
  - '--- To serve ---'
  - 12 corn tortillas
  - '3 cups green cabbage, very thinly shredded'
  - '1/4 cup fresh cilantro, chopped'
  - '2 limes, cut into wedges'
  - 'Mexican hot sauce, for serving'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: crema
      name: Lime crema
      ingredients:
        - id: crema
          key: mexican-crema
          name: Mexican crema
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: crema
              share: 1
        - id: mayo
          key: mayonnaise
          name: mayonnaise
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: crema
              share: 1
        - id: lime-juice
          key: lime-juice
          name: fresh lime juice
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: crema
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: crema
              share: 1
    - id: fish
      name: Beer-battered fish
      ingredients:
        - id: cod
          key: cod
          name: skinless cod fillets
          quantity:
            amount: 1 1/2
            unit: lb
          preparation: cut into 1-by-4-inch strips
          uses:
            - step: fry
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 3/4
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: oil
          key: neutral-oil
          name: neutral oil
          quantity:
            amount: 6
            unit: cup
          preparation: for frying
          uses:
            - step: heat
              share: 1
        - id: flour
          key: all-purpose-flour
          name: all-purpose flour
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: batter
              share: 1
        - id: cornstarch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: batter
              share: 1
        - id: baking-powder
          key: baking-powder
          name: baking powder
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: batter
              share: 1
        - id: batter-salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: batter
              share: 1
        - id: oregano
          key: mexican-oregano
          name: dried Mexican oregano
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: batter
              share: 1
        - id: mustard
          key: yellow-mustard
          name: yellow mustard
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: batter
              share: 1
        - id: lager
          key: mexican-lager
          name: Mexican lager
          quantity:
            amount: 1
            unit: cup
          preparation: cold
          uses:
            - step: batter
              share: 1
    - id: serve
      name: To serve
      ingredients:
        - id: tortillas
          key: corn-tortillas
          name: corn tortilla
          plural: corn tortillas
          quantity:
            amount: 12
            unit: count
          uses:
            - step: warm
              share: 1
        - id: cabbage
          key: green-cabbage
          name: green cabbage
          quantity:
            amount: 3
            unit: cup
          preparation: very thinly shredded
          uses:
            - step: build
              share: 1
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          quantity:
            amount: 1/4
            unit: cup
          preparation: chopped
          uses:
            - step: build
              share: 1
        - id: limes
          key: lime
          name: lime
          plural: limes
          quantity:
            amount: 2
            unit: count
          preparation: cut into wedges
          uses:
            - step: serve
              share: 1
        - id: hot-sauce
          key: mexican-hot-sauce
          name: Mexican hot sauce
          allowance: for serving
          uses:
            - step: serve
              share: 1
  steps:
    - id: crema
      title: Mix the crema
      text: 'Whisk {{ingredients}} in a small bowl until smooth. Refrigerate until serving.'
    - id: season
      title: Season the fish
      text: 'Pat the fish dry with paper towels and season it all over with {{ingredients}}.'
    - id: heat
      title: Heat the oil
      text: >-
        Pour {{ingredients}} into a 5 1/2-quart Dutch oven. It should be 1 inch deep. Heat over
        medium-high heat to 375°F. Set a wire rack over a rimmed baking sheet.
    - id: batter
      title: Whisk the batter
      text: >-
        When the oil is almost hot, whisk {{ingredients}} in a medium bowl just until a few small
        lumps remain. The batter should be as thin as pancake batter.
    - id: fry
      title: Fry the fish
      text: >-
        Working with 5 pieces at a time, dip {{ingredients}} in the batter and let the extra drip
        off. Lower each piece into the oil. Fry, turning once, until deep golden and crisp, 3 to 4
        minutes. Drain on the rack and let the oil return to 375°F between batches.
    - id: warm
      title: Warm the tortillas
      text: >-
        Heat a dry skillet over medium-high heat. Warm {{ingredients}} two at a time until soft with
        a few toasted spots, about 30 seconds per side. Stack them in a clean towel to stay warm.
    - id: build
      title: Build the tacos
      text: 'Put the fish in the warm tortillas. Top with a spoonful of crema, then {{ingredients}}.'
    - id: serve
      title: Serve
      text: 'Serve right away with {{ingredients}} at the table.'
learning:
  techniques:
    - temperature
    - starch
  substitutions:
    - ingredient: Mexican crema
      alternative: Sour cream thinned with 1 tbsp milk
      effect: A little tangier and thicker. It works the same in the sauce.
    - ingredient: Mexican lager
      alternative: Cold seltzer
      effect: 'The same light, crisp batter without the beer flavor.'
    - ingredient: Skinless cod fillets
      alternative: 'Halibut, mahi-mahi or pollock'
      effect: Any firm white fish fries well. Thin fillets cook about 1 minute faster.
    - ingredient: Dried Mexican oregano
      alternative: Regular dried oregano
      effect: Sweeter and less citrusy. Use the same amount.
  storage: >-
    Fried fish is best right away. Leftover pieces keep 1 day in the fridge and crisp up on a rack
    in a 425°F oven in about 8 minutes. The crema keeps 4 days.
  review:
    status: editorial-review
    date: '2026-11-10'
---

## Chef's Note

Fish tacos come from Baja California, where stands in Ensenada and San Felipe fry battered fish and tuck it into corn tortillas with cabbage, crema and lime. Cold lager and a little cornstarch make a thin batter that fries up light and crisp. Mix the batter right before frying so it keeps its bubbles.

## Directions

1. **Mix the crema:** Whisk Mexican crema, mayonnaise, fresh lime juice, and kosher salt in a small bowl until smooth. Refrigerate until serving.
2. **Season the fish:** Pat the fish dry with paper towels and season it all over with kosher salt.
3. **Heat the oil:** Pour neutral oil into a 5 1/2-quart Dutch oven. It should be 1 inch deep. Heat over medium-high heat to 375°F. Set a wire rack over a rimmed baking sheet.
4. **Whisk the batter:** When the oil is almost hot, whisk all-purpose flour, cornstarch, baking powder, kosher salt, dried Mexican oregano, yellow mustard, and Mexican lager in a medium bowl just until a few small lumps remain. The batter should be as thin as pancake batter.
5. **Fry the fish:** Working with 5 pieces at a time, dip skinless cod fillets in the batter and let the extra drip off. Lower each piece into the oil. Fry, turning once, until deep golden and crisp, 3 to 4 minutes. Drain on the rack and let the oil return to 375°F between batches.
6. **Warm the tortillas:** Heat a dry skillet over medium-high heat. Warm corn tortillas two at a time until soft with a few toasted spots, about 30 seconds per side. Stack them in a clean towel to stay warm.
7. **Build the tacos:** Put the fish in the warm tortillas. Top with a spoonful of crema, then green cabbage and fresh cilantro.
8. **Serve:** Serve right away with limes and Mexican hot sauce at the table.

