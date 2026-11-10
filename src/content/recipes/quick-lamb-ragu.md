---
miseId: 126f8d98-efc8-411f-869b-e83780dd9764
title: Lamb Ragù
difficulty: intermediate
cookingMethods:
  - fry
  - saute
  - simmer
  - boil
  - braise
occasions:
  - comfort-food
  - weekend-project
  - entertaining
flavorProfile:
  - savory
  - acidic
  - umami
  - rich
  - herbaceous
cuisines:
  - Italian
advancePrep:
  - freeze-ahead
role: main
vibe: nutritious
prepTime: 10 min
cookTime: 50 min
totalTime: 1 hr
servings: 4 portions
seasons:
  - fall
  - winter
nutritionalDensity: hearty
leftovers: excellent
pairsWith:
  - garlic-bread
  - broccoli-all-agro
pairingNotes:
  garlic-bread: For the sauce left in the bowl.
  broccoli-all-agro: Lemony broccoli cuts the rich lamb.
ingredients:
  - '--- Ragù ---'
  - 2 tbsp extra-virgin olive oil
  - 1 lb ground lamb
  - '1 medium yellow onion, finely chopped'
  - '4 garlic cloves, minced'
  - 1/4 tsp red pepper flakes
  - 2 anchovy fillets
  - 2 tbsp tomato paste
  - 1 can (28 oz) crushed tomatoes
  - 1/2 cup water
  - 'kosher salt, to taste'
  - 'black pepper, to taste'
  - 2 tbsp balsamic vinegar
  - 'fresh oregano or marjoram leaves, a small handful'
  - '--- Pasta ---'
  - 12 oz penne or shells
  - 'Parmesan or Pecorino Romano, grated, for serving'
  - 'extra-virgin olive oil, for serving'
source: Adapted from NYT Cooking
sourceUrl: 'https://cooking.nytimes.com/recipes/1020022-quick-lamb-ragu'
rating: 5
equipment:
  - heavy-pot
  - pasta-pot
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: ragu
      name: Ragù
      ingredients:
        - id: oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: heat
              share: 1
        - id: lamb
          key: lamb
          name: ground lamb
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: lamb
              share: 1
        - id: onion
          key: onion
          name: medium yellow onion
          quantity:
            amount: 1
            unit: count
          plural: medium yellow onions
          preparation: finely chopped
          uses:
            - step: base
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 4
            unit: count
          plural: garlic cloves
          preparation: minced
          uses:
            - step: aromatics
              share: 1
        - id: flakes
          key: flakes
          name: red pepper flakes
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: aromatics
              share: 1
        - id: anchovy
          key: anchovy
          name: anchovy fillet
          quantity:
            amount: 2
            unit: count
          plural: anchovy fillets
          uses:
            - step: aromatics
              share: 1
        - id: paste
          key: paste
          name: tomato paste
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: paste
              share: 1
        - id: tomatoes
          key: tomatoes
          name: crushed tomatoes
          quantity:
            amount: 1
            unit: can
          packageSize:
            amount: 28
            unit: oz
          uses:
            - step: simmer
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 1/2
            unit: cup
          role: cooking-water
          uses:
            - step: simmer
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          allowance: to taste
          uses:
            - step: simmer
              share: 1
        - id: pepper
          key: pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: simmer
              share: 1
        - id: balsamic
          key: balsamic
          name: balsamic vinegar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: herbs
          key: herbs
          name: fresh oregano or marjoram leaves
          stepName: oregano
          allowance: a small handful
          uses:
            - step: finish
              share: 1
    - id: pasta
      name: Pasta
      ingredients:
        - id: pasta
          key: pasta
          name: penne or shells
          stepName: pasta
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: pasta
              share: 1
        - id: cheese
          key: cheese
          name: Parmesan or Pecorino Romano
          stepName: cheese
          allowance: 'grated, for serving'
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: drizzle-oil
          key: drizzle-oil
          name: extra-virgin olive oil
          allowance: for serving
          role: garnish
          uses:
            - step: serve
              share: 1
  steps:
    - id: heat
      title: Heat the oil
      text: 'Heat {{ingredients}} in a large heavy pot over medium-high heat until it shimmers.'
    - id: lamb
      title: Brown the lamb
      text: >-
        Add {{ingredients}} in a broad layer and cook undisturbed until browned underneath, 2 to 3
        minutes. Break it up and cook until well browned and crisp in spots, 6 to 8 minutes more.
        Lift the lamb into a bowl with a slotted spoon and leave the fat in the pot.
    - id: base
      title: Soften the onion
      text: >-
        Turn the heat to medium. Add {{ingredients}} to the fat and cook, scraping up the browned
        bits, until soft and golden, 5 to 8 minutes.
    - id: aromatics
      title: Melt the anchovies
      text: >-
        Add {{ingredients}} and cook, stirring, until the anchovies melt into the oil and the garlic
        is fragrant, about 2 minutes.
    - id: paste
      title: Toast the tomato paste
      text: >-
        Stir in {{ingredients}} and cook, stirring, until it turns brick red and smells roasted,
        about 3 minutes.
    - id: simmer
      title: Simmer the sauce
      text: >-
        Return the lamb and its juices and stir in {{ingredients}}, scraping the bottom of the pot.
        Bring to a boil, then lower the heat and simmer gently, stirring now and then, until the
        sauce is thick and meaty, 25 to 30 minutes.
    - id: pasta
      title: Boil the pasta
      text: >-
        When the sauce has about 15 minutes left, bring a large pot of well-salted water to a boil.
        Add {{ingredients}} and cook until just short of al dente, then drain.
    - id: finish
      title: Finish the sauce
      text: >-
        Stir {{ingredients}} into the sauce. Add the pasta and toss over low heat until it is coated
        and al dente, about 1 minute. Taste and add more salt if it needs it.
    - id: serve
      title: Serve
      text: 'Spoon into bowls and finish with {{ingredients}}.'
learning:
  techniques:
    - browning
    - seasoning
    - starch
    - temperature
  substitutions:
    - ingredient: fresh oregano or marjoram leaves
      alternative: Dried oregano
      effect: Use 1/2 tsp and add it with the tomatoes so it softens in the sauce.
  storage: >-
    The sauce keeps 4 days in the fridge and freezes for 3 months. Store it apart from the pasta and
    reheat gently with a splash of water.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

A weeknight ragù from NYT Cooking. Ground lamb browns hard on its own first, then onion, garlic, anchovy and tomato paste build a deep base in its fat. The anchovies melt away and leave only savoriness behind. A splash of balsamic and fresh oregano at the end brighten the rich sauce.

## Directions

1. **Heat the oil:** Heat 2 tbsp of the olive oil in a large heavy pot over medium-high heat until it shimmers.
2. **Brown the lamb:** Add the ground lamb in a broad layer and cook undisturbed until browned underneath, 2 to 3 minutes. Break it up and cook until well browned and crisp in spots, 6 to 8 minutes more. Lift the lamb into a bowl with a slotted spoon and leave the fat in the pot.
3. **Soften the onion:** Turn the heat to medium. Add the yellow onion to the fat and cook, scraping up the browned bits, until soft and golden, 5 to 8 minutes.
4. **Melt the anchovies:** Add the garlic, red pepper flakes, and anchovy fillets and cook, stirring, until the anchovies melt into the oil and the garlic is fragrant, about 2 minutes.
5. **Toast the tomato paste:** Stir in the tomato paste and cook, stirring, until it turns brick red and smells roasted, about 3 minutes.
6. **Simmer the sauce:** Return the lamb and its juices and stir in the crushed tomatoes, water, salt, and pepper, scraping the bottom of the pot. Bring to a boil, then lower the heat and simmer gently, stirring now and then, until the sauce is thick and meaty, 25 to 30 minutes.
7. **Boil the pasta:** When the sauce has about 15 minutes left, bring a large pot of well-salted water to a boil. Add the pasta and cook until just short of al dente, then drain.
8. **Finish the sauce:** Stir the balsamic vinegar and oregano into the sauce. Add the pasta and toss over low heat until it is coated and al dente, about 1 minute. Taste and add more salt if it needs it.
9. **Serve:** Spoon into bowls and finish with the cheese and olive oil.
