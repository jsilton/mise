---
kb:
  disable:
    - kb.low-temp-poultry
  disableReason: >-
    The 145°F endpoint applies only to shrimp and squid added after fresh sausage is fully cooked.
    Pork/beef chorizo must reach 160°F, and poultry chorizo must reach 165°F before the seafood
    stage. No low-temperature poultry process is prescribed.
miseId: 4275bc37-db6c-4ca9-9a54-cf514c1869f0
title: Seafood-Chorizo Tacos
difficulty: easy
cookingMethods:
  - fry
  - saute
  - no-cook
occasions:
  - weeknight
flavorProfile:
  - spicy
  - sweet
  - acidic
  - rich
cuisines:
  - Mexican
role: main
vibe: quick
prepTime: 10 min
cookTime: 15 min
totalTime: 25 min
servings: 4 portions
pairsWith:
  - mexican-street-corn-salad
  - quick-seasoned-black-beans
pairingNotes:
  mexican-street-corn-salad: 'Creamy, tangy corn beside the spicy tacos.'
  quick-seasoned-black-beans: Simple beans to round out taco night.
ingredients:
  - 2 tbsp extra-virgin olive oil
  - '1/2 lb fresh Mexican chorizo, casings removed'
  - 'salt, a pinch'
  - 'black pepper, a pinch'
  - '1 small red onion, minced'
  - 'ground cumin, a pinch'
  - '1 garlic clove, minced'
  - '1/2 lb raw medium shrimp, peeled, deveined and chopped'
  - '1/2 lb cleaned small squid, cut into thin rings'
  - 2 tbsp Mexican lager
  - 2 tbsp fresh lime juice
  - 'salt, to taste'
  - 'black pepper, to taste'
  - 'corn tortillas, for serving'
  - 'avocado, for serving, sliced'
  - 'fresh cilantro, for serving'
  - 'sour cream, for serving'
  - 'lime wedges, for serving'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: poor
source: Adapted from Food & Wine
sourceUrl: 'https://www.foodandwine.com/recipes/seafood-chorizo-tacos'
learning:
  techniques:
    - gentle-proteins
    - temperature
  substitutions:
    - ingredient: cleaned small squid
      alternative: More shrimp
      effect: Use 1 lb shrimp in all. The filling is milder and a little sweeter.
  review:
    status: editorial-review
    date: '2026-11-09'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: tacos
      name: Filling and serving
      ingredients:
        - id: olive-oil
          key: olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: render
              share: 1
        - id: chorizo
          key: chorizo
          name: fresh Mexican chorizo
          quantity:
            amount: 1/2
            unit: lb
          preparation: casings removed
          uses:
            - step: render
              share: 1
        - id: initial-salt
          key: initial-salt
          name: salt
          allowance: a pinch
          uses:
            - step: render
              share: 1
        - id: initial-pepper
          key: initial-pepper
          name: black pepper
          allowance: a pinch
          uses:
            - step: render
              share: 1
        - id: onion
          key: onion
          name: small red onion
          quantity:
            amount: 1
            unit: count
          preparation: minced
          uses:
            - step: aromatics
              share: 1
          plural: small red onions
        - id: cumin
          key: cumin
          name: ground cumin
          allowance: a pinch
          uses:
            - step: aromatics
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          preparation: minced
          uses:
            - step: garlic
              share: 1
          plural: garlic cloves
        - id: shrimp
          key: shrimp
          name: raw medium shrimp
          quantity:
            amount: 1/2
            unit: lb
          preparation: 'peeled, deveined and chopped'
          uses:
            - step: seafood
              share: 1
        - id: squid
          key: squid
          name: cleaned small squid
          quantity:
            amount: 1/2
            unit: lb
          preparation: cut into thin rings
          uses:
            - step: seafood
              share: 1
        - id: lager
          key: lager
          name: Mexican lager
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: seafood
              share: 1
        - id: lime-juice
          key: lime-juice
          name: fresh lime juice
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: finish-salt
          key: finish-salt
          name: salt
          allowance: to taste
          uses:
            - step: finish
              share: 1
        - id: finish-pepper
          key: finish-pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: finish
              share: 1
        - id: tortillas
          key: tortillas
          name: corn tortillas
          allowance: for serving
          uses:
            - step: tortillas
              share: 1
        - id: avocado
          key: avocado
          name: avocado
          allowance: for serving
          preparation: sliced
          uses:
            - step: assemble
              share: 1
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          allowance: for serving
          uses:
            - step: assemble
              share: 1
        - id: sour-cream
          key: sour-cream
          name: sour cream
          allowance: for serving
          uses:
            - step: assemble
              share: 1
        - id: lime-wedges
          key: lime-wedges
          name: lime wedges
          allowance: for serving
          uses:
            - step: assemble
              share: 1
  steps:
    - id: render
      title: Brown the chorizo
      text: >-
        Add {{ingredients}} to a large skillet over medium-high heat. Cook, breaking up the chorizo,
        until it is browned and crisp at the edges with no pink left, about 4 minutes.
    - id: aromatics
      title: Soften the onion
      text: 'Add {{ingredients}} and cook until the onion softens, about 2 minutes.'
    - id: garlic
      title: Add the garlic
      text: 'Stir in the {{ingredients}} and cook until fragrant, about 30 seconds.'
    - id: seafood
      title: Cook the seafood
      text: >-
        Add {{ingredients}} and toss over medium-high heat until the shrimp are pink and opaque and
        the squid turns white and firm, about 3 minutes.
    - id: finish
      title: Finish the filling
      text: 'Stir in {{ingredients}} and take the skillet off the heat.'
    - id: tortillas
      title: Char the tortillas
      text: >-
        Char {{ingredients}} over a gas flame or in a dry skillet until spotted and pliable, about
        30 seconds per side.
    - id: assemble
      title: Fill and serve
      text: 'Spoon the filling into the tortillas. Serve with {{ingredients}} at the table.'
---

## Chef's Note

These tacos pair spicy Mexican chorizo with shrimp and squid. The chorizo renders first, and its brick-red fat seasons the seafood in the few minutes it takes to cook. A splash of lager and a squeeze of lime finish the filling.

## Directions

1. **Brown the chorizo:** Add the olive oil, Mexican chorizo, salt, and pepper to a large skillet over medium-high heat. Cook, breaking up the chorizo, until it is browned and crisp at the edges with no pink left, about 4 minutes.
2. **Soften the onion:** Add the red onion and cumin and cook until the onion softens, about 2 minutes.
3. **Add the garlic:** Stir in the garlic and cook until fragrant, about 30 seconds.
4. **Cook the seafood:** Add the shrimp, cleaned small squid, and Mexican lager and toss over medium-high heat until the shrimp are pink and opaque and the squid turns white and firm, about 3 minutes.
5. **Finish the filling:** Stir in the lime juice, salt, and pepper and take the skillet off the heat.
6. **Char the tortillas:** Char the corn tortillas over a gas flame or in a dry skillet until spotted and pliable, about 30 seconds per side.
7. **Fill and serve:** Spoon the filling into the tortillas. Serve with the avocado, cilantro, sour cream, and lime wedges at the table.
