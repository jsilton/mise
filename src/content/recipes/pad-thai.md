---
miseId: 40012e06-96a2-4ceb-906e-7c8d1c569cf1
title: Pad Thai
difficulty: intermediate
cookingMethods:
  - fry
  - saute
  - boil
occasions:
  - comfort-food
flavorProfile:
  - spicy
  - sweet
  - acidic
cuisines:
  - Thai
role: main
vibe: comfort
prepTime: 40 min
cookTime: 20 min
totalTime: 1 hr
servings: 3 portions
pairsWith:
  - thai-mango-salad
  - steamed-bok-choy-with-oyster-sauce
pairingNotes:
  thai-mango-salad: 'A sour, crunchy salad beside the sweet noodles.'
  steamed-bok-choy-with-oyster-sauce: A quick green vegetable to round out the plate.
ingredients:
  - '--- Noodles and sauce ---'
  - 8 oz dried medium Thai rice sticks (sen lek)
  - 3 tbsp tamarind paste
  - '3 tbsp palm sugar, finely chopped'
  - 2 1/2 tbsp fish sauce
  - '--- Stir-fry ---'
  - 2 tbsp vegetable oil
  - '1/3 cup extra-firm tofu, patted dry, cut into thin matchsticks'
  - '1 shallot, minced'
  - '3 garlic cloves, minced'
  - '1 tbsp preserved sweet radish (chai poh), finely chopped'
  - '1 tbsp small dried shrimp, chopped'
  - 1/2 tsp ground dried chili
  - 1 large egg
  - '1/4 lb shrimp, peeled and deveined'
  - 1 1/3 cups fresh bean sprouts
  - '1 1/2 cups Chinese chives, cut into 1-inch pieces'
  - '--- To serve ---'
  - '1/2 cup roasted peanuts, crushed'
  - '1/2 lime, cut into wedges'
origin: Thailand
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from ThaiTable
sourceUrl: 'https://www.thaitable.com/recipes/pad-thai'
formula:
  version: 1
  yield:
    amount: 3
    unit: portion
  components:
    - id: noodles
      name: Noodles and sauce
      ingredients:
        - id: noodles
          key: thai-rice-sticks
          name: dried medium Thai rice sticks (sen lek)
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: soak
              share: 1
        - id: tamarind
          key: tamarind-pulp
          name: tamarind paste
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: palm-sugar
          name: palm sugar
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: sauce
              share: 1
          preparation: finely chopped
        - id: fish-sauce
          key: fish-sauce
          name: fish sauce
          quantity:
            amount: 2 1/2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
    - id: stir-fry
      name: Stir-fry
      ingredients:
        - id: oil
          key: cooking-oil
          name: vegetable oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: heat
              share: 1
        - id: tofu
          key: extra-firm-tofu
          name: extra-firm tofu
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: tofu
              share: 1
          preparation: 'patted dry, cut into thin matchsticks'
        - id: shallot
          key: shallot
          name: shallot
          quantity:
            amount: 1
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: shallots
          preparation: minced
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: radish
          key: preserved-sweet-radish
          name: preserved sweet radish (chai poh)
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: finely chopped
        - id: dried-shrimp
          key: dried-shrimp
          name: small dried shrimp
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: chopped
        - id: chili
          key: ground-dried-chili
          name: ground dried chili
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: aromatics
              share: 1
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
        - id: shrimp
          key: shrimp
          name: shrimp
          quantity:
            amount: 1/4
            unit: lb
          uses:
            - step: shrimp
              share: 1
          preparation: peeled and deveined
        - id: sprouts
          key: bean-sprouts
          name: fresh bean sprouts
          quantity:
            amount: 1 1/3
            unit: cup
          uses:
            - step: sprouts
              share: 1
        - id: chives
          key: chinese-chives-or-green-onions
          name: Chinese chives
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: sprouts
              share: 1
          preparation: cut into 1-inch pieces
    - id: garnish
      name: To serve
      ingredients:
        - id: peanuts
          key: peanuts
          name: roasted peanuts
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: serve
              share: 1
          preparation: crushed
        - id: lime
          key: lime
          name: lime
          quantity:
            amount: 1/2
            unit: count
          uses:
            - step: serve
              share: 1
          plural: limes
          preparation: cut into wedges
  steps:
    - id: soak
      title: Soak the noodles
      text: >-
        Cover {{ingredients}} with room-temperature water. Soak until they bend easily but are still
        firm in the center, 30 to 40 minutes, then drain. Prepare everything else while they soak.
    - id: sauce
      title: Mix the sauce
      text: >-
        Stir {{ingredients}} together until the sugar dissolves. Taste it. It should be sour, salty
        and sweet at once and a little strong on its own.
    - id: heat
      title: Heat the wok
      text: >-
        Heat half the {{ingredients}} in a wok or large skillet over medium-high heat until it
        shimmers.
    - id: tofu
      title: Fry the tofu
      text: >-
        Add {{ingredients}} and fry, turning, until golden and firm, about 3 minutes. Move it to a
        plate.
    - id: aromatics
      title: Fry the aromatics
      text: >-
        Add the rest of the oil, then {{ingredients}}. Stir until fragrant, about 30 seconds,
        keeping the garlic moving so it doesn't scorch.
    - id: noodles
      title: Toss the noodles
      text: >-
        Turn the heat to high. Add the drained noodles and the sauce and toss until the noodles
        drink up the sauce and turn soft and chewy, 2 to 3 minutes. If they are still firm and the
        pan is dry, sprinkle in a spoonful of water and keep tossing.
    - id: egg
      title: Scramble the egg
      text: >-
        Push the noodles to one side. Crack the {{ingredients}} into the space, scramble until just
        set, then fold it through the noodles.
    - id: shrimp
      title: Cook the shrimp
      text: >-
        Add {{ingredients}} and the fried tofu. Toss until the shrimp are pink and opaque all the
        way through, about 2 minutes.
    - id: sprouts
      title: Add the sprouts
      text: >-
        Add {{ingredients}} and toss until the sprouts are hot and the chives just wilt, about 1
        minute. There should be no pool of sauce in the pan.
    - id: serve
      title: Serve
      text: >-
        Pile the noodles onto plates and top with {{ingredients}}. Squeeze the lime over at the
        table.
learning:
  techniques:
    - starch
    - stir-frying
    - seasoning
  substitutions:
    - ingredient: Tamarind paste
      alternative: Tamarind concentrate
      effect: >-
        The thick jarred concentrate is much stronger. Start with half as much, thin it with water
        and taste the sauce.
    - ingredient: Palm sugar
      alternative: Light brown sugar
      effect: 'A little less caramel depth, but it dissolves faster.'
    - ingredient: Preserved sweet radish (chai poh)
      alternative: Leave it out
      effect: >-
        You lose a little sweet, salty crunch. Taste the finished noodles and add a splash more fish
        sauce if they need it.
    - ingredient: Small dried shrimp
      alternative: Leave them out
      effect: Add 1 tsp more fish sauce to the sauce to make up some of the savory depth.
    - ingredient: Chinese chives
      alternative: Green onions
      effect: Sharper and more oniony. Slice the white parts thin so they soften in time.
  storage: >-
    Best eaten right away. Leftovers keep 2 days in the fridge and reheat in a skillet with a splash
    of water.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Pad Thai is Thailand's best-known noodle dish, chewy rice sticks tossed with a sour, salty and sweet sauce of tamarind, fish sauce and palm sugar. Preserved radish and dried shrimp give it the savory depth that most takeout versions miss. Have everything chopped and lined up before the wok gets hot, because it cooks in minutes.

## Directions

1. **Soak the noodles:** Cover dried medium Thai rice sticks (sen lek) with room-temperature water. Soak until they bend easily but are still firm in the center, 30 to 40 minutes, then drain. Prepare everything else while they soak.
2. **Mix the sauce:** Stir tamarind paste, palm sugar, and fish sauce together until the sugar dissolves. Taste it. It should be sour, salty and sweet at once and a little strong on its own.
3. **Heat the wok:** Heat half the vegetable oil in a wok or large skillet over medium-high heat until it shimmers.
4. **Fry the tofu:** Add extra-firm tofu and fry, turning, until golden and firm, about 3 minutes. Move it to a plate.
5. **Fry the aromatics:** Add the rest of the oil, then shallot, garlic cloves, preserved sweet radish (chai poh), small dried shrimp, and ground dried chili. Stir until fragrant, about 30 seconds, keeping the garlic moving so it doesn't scorch.
6. **Toss the noodles:** Turn the heat to high. Add the drained noodles and the sauce and toss until the noodles drink up the sauce and turn soft and chewy, 2 to 3 minutes. If they are still firm and the pan is dry, sprinkle in a spoonful of water and keep tossing.
7. **Scramble the egg:** Push the noodles to one side. Crack the large egg into the space, scramble until just set, then fold it through the noodles.
8. **Cook the shrimp:** Add shrimp and the fried tofu. Toss until the shrimp are pink and opaque all the way through, about 2 minutes.
9. **Add the sprouts:** Add fresh bean sprouts and Chinese chives and toss until the sprouts are hot and the chives just wilt, about 1 minute. There should be no pool of sauce in the pan.
10. **Serve:** Pile the noodles onto plates and top with roasted peanuts and lime. Squeeze the lime over at the table.
