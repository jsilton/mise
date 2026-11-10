---
miseId: 003626a1-10df-4732-a4d8-11be0ad9e846
title: Spaghetti with Clams & Braised Greens
difficulty: intermediate
cookingMethods:
  - saute
  - boil
  - steam
  - blend
occasions:
  - comfort-food
  - date-night
  - entertaining
  - weekend-project
flavorProfile:
  - spicy
  - acidic
  - umami
  - rich
cuisines:
  - Italian
role: main
vibe: comfort
prepTime: 15 min
cookTime: 30 min
totalTime: 45 min
servings: 4 portions
seasons:
  - summer
  - fall
nutritionalDensity: moderate
leftovers: poor
pairsWith:
  - garlic-bread
pairingNotes:
  garlic-bread: For soaking up the red pepper broth.
ingredients:
  - '1/2 cup extra-virgin olive oil, divided'
  - '8 garlic cloves, crushed, divided'
  - '48 live littleneck clams, scrubbed'
  - 2 cups dry white wine
  - '2 jarred roasted red peppers, drained'
  - '1 lb Swiss chard or collard greens, stemmed and chopped'
  - 1 tsp red pepper flakes
  - 'kosher salt, to taste'
  - 'black pepper, to taste'
  - 1/2 lb spaghetti
  - '2 tbsp unsalted butter, cubed and chilled'
  - '1 tsp lemon zest, finely grated'
  - 1 tbsp fresh lemon juice
  - '1/2 cup Parmesan, freshly grated, plus more for serving'
source: Adapted from Food & Wine
sourceUrl: 'https://www.foodandwine.com/recipes/spaghetti-clams-and-braised-greens'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: main
      name: Main recipe
      ingredients:
        - id: oil
          key: olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: garlic1
              share: 1/2
            - step: garlic2
              share: 1/2
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 8
            unit: count
          uses:
            - step: garlic1
              share: 1/2
            - step: garlic2
              share: 1/2
          plural: garlic cloves
          preparation: crushed
        - id: clams
          key: littleneck-clams
          name: live littleneck clam
          quantity:
            amount: 48
            unit: count
          uses:
            - step: steam
              share: 1
          plural: live littleneck clams
          preparation: scrubbed
        - id: wine
          key: white-wine
          name: dry white wine
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: steam
              share: 1
        - id: peppers
          key: roasted-red-pepper
          name: jarred roasted red pepper
          quantity:
            amount: 2
            unit: count
          uses:
            - step: blend
              share: 1
          plural: jarred roasted red peppers
          preparation: drained
        - id: greens
          key: chard-or-collards
          name: Swiss chard or collard greens
          stepName: greens
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: greens
              share: 1
          preparation: stemmed and chopped
        - id: flakes
          key: red-pepper-flakes
          name: red pepper flakes
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: garlic2
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          uses:
            - step: season
              share: 1
          allowance: to taste
        - id: pepper
          key: black-pepper
          name: black pepper
          uses:
            - step: season
              share: 1
          allowance: to taste
        - id: spaghetti
          key: spaghetti
          name: spaghetti
          quantity:
            amount: 1/2
            unit: lb
          uses:
            - step: boil
              share: 1
        - id: butter
          key: unsalted-butter
          name: unsalted butter
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: finish
              share: 1
          preparation: cubed and chilled
        - id: zest
          key: lemon-zest
          name: lemon zest
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: finish
              share: 1
          preparation: finely grated
        - id: lemon
          key: lemon-juice
          name: fresh lemon juice
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: cheese
          key: parmesan
          name: Parmesan
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: finish
              share: 1
          preparation: 'freshly grated, plus more for serving'
  steps:
    - id: garlic1
      title: Start the clams
      text: >-
        Warm {{ingredients}} in a large lidded pot over medium-high heat until the garlic is
        fragrant, 30 to 45 seconds.
    - id: steam
      title: Steam the clams
      text: >-
        Add {{ingredients}} and bring to a boil. Cover and cook until the clams open, 5 to 7
        minutes. Move them to a bowl as they open and discard any that stay shut.
    - id: blend
      title: Make the pepper broth
      text: >-
        Strain the cooking liquid through a fine sieve into a blender. Add {{ingredients}} and blend
        until smooth, venting the lid. Rinse the grit out of the pot.
    - id: garlic2
      title: Bloom the garlic
      text: >-
        Warm {{ingredients}} in the clean pot over medium heat until the garlic is fragrant, 30 to
        45 seconds.
    - id: greens
      title: Braise the greens
      text: >-
        Add {{ingredients}} a handful at a time and cook, stirring, until wilted and tender, about 3
        minutes for chard and a few minutes longer for collards.
    - id: season
      title: Add the broth
      text: 'Pour in the pepper broth and bring to a simmer. Season with {{ingredients}}.'
    - id: boil
      title: Boil the pasta
      text: >-
        Meanwhile, cook {{ingredients}} in a large pot of salted boiling water until 2 minutes short
        of al dente. Scoop out some of the pasta water, then drain.
    - id: bind
      title: Finish the pasta
      text: >-
        Add the spaghetti to the greens and broth and toss over medium heat until al dente, 1 to 2
        minutes, adding a splash of the pasta water if it looks dry. Return the clams and their
        juices to warm through.
    - id: finish
      title: Butter and serve
      text: >-
        Off the heat, add {{ingredients}} and toss until the butter melts and the sauce turns
        glossy. Serve in shallow bowls with more Parmesan.
learning:
  techniques:
    - temperature
  substitutions:
    - ingredient: live littleneck clams
      alternative: Manila clams
      effect: 'They are smaller and sweeter, so use a few more. They open a minute or two sooner.'
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Raleigh chef Ashley Christensen gives spaghetti with clams a Southern turn with garlicky braised greens. The clam juices are blended with roasted red peppers into a silky broth that coats the pasta. Butter, lemon and Parmesan go in off the heat for a glossy finish.

## Directions

1. **Start the clams:** Warm 1/4 cup of the olive oil and 4 garlic cloves in a large lidded pot over medium-high heat until the garlic is fragrant, 30 to 45 seconds.
2. **Steam the clams:** Add the live littleneck clams and dry white wine and bring to a boil. Cover and cook until the clams open, 5 to 7 minutes. Move them to a bowl as they open and discard any that stay shut.
3. **Make the pepper broth:** Strain the cooking liquid through a fine sieve into a blender. Add the roasted red peppers and blend until smooth, venting the lid. Rinse the grit out of the pot.
4. **Bloom the garlic:** Warm the red pepper flakes, the rest of the olive oil, and the rest of the garlic in the clean pot over medium heat until the garlic is fragrant, 30 to 45 seconds.
5. **Braise the greens:** Add the greens a handful at a time and cook, stirring, until wilted and tender, about 3 minutes for chard and a few minutes longer for collards.
6. **Add the broth:** Pour in the pepper broth and bring to a simmer. Season with the salt and black pepper.
7. **Boil the pasta:** Meanwhile, cook the spaghetti in a large pot of salted boiling water until 2 minutes short of al dente. Scoop out some of the pasta water, then drain.
8. **Finish the pasta:** Add the spaghetti to the greens and broth and toss over medium heat until al dente, 1 to 2 minutes, adding a splash of the pasta water if it looks dry. Return the clams and their juices to warm through.
9. **Butter and serve:** Off the heat, add the butter, lemon zest, lemon juice, and Parmesan and toss until the butter melts and the sauce turns glossy. Serve in shallow bowls with more Parmesan.
