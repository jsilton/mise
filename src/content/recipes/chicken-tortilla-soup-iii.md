---
miseId: c8960f8f-60b2-4ed1-9e6b-feca0f76b28b
title: Chicken Tortilla Soup III
role: main
vibe: comfort
difficulty: easy
prepTime: 15 min
cookTime: 25 min
totalTime: 40 min
servings: 8 portions
cookingMethods:
  - simmer
categories:
  - Mexican
source: Allrecipes.com
ingredients:
  - '--- Soup ---'
  - '3 garlic cloves, minced'
  - '1 onion, peeled and chopped'
  - 3 tbsp margarine
  - 2 tbsp all-purpose flour
  - 3 cans (14 oz) chicken broth
  - 4 cups half-and-half
  - 1 can (10 3/4 oz) condensed cream of chicken soup
  - 1 cup fresh salsa
  - 1 can (15 oz) creamed corn
  - >-
    6 boneless chicken breast halves, fully cooked, skinned and shredded or cut
    into spoon-sized pieces
  - 2 tsp ground cumin
  - 1 package (1.27 oz) dry fajita seasoning
  - '3 tbsp fresh cilantro, washed and chopped'
  - '--- Bowls ---'
  - 16 oz tortilla chips
  - '8 oz Monterey Jack cheese, shredded'
sourceUrl: 'http://allrecipes.com/recipe/15553/chicken-tortilla-soup-iii/'
cuisines:
  - Mexican
formula:
  version: 1
  yield:
    amount: 8
    unit: portion
  components:
    - id: soup
      name: Soup
      ingredients:
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
        - id: onion
          key: onion
          name: onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: onions
          preparation: peeled and chopped
        - id: margarine
          key: margarine
          name: margarine
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
        - id: flour
          key: flour
          name: all-purpose flour
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: flour
              share: 1
        - id: broth
          key: broth
          name: chicken broth
          quantity:
            amount: 3
            unit: can
          uses:
            - step: liquid
              share: 1
          plural: cans of chicken broth
          packageSize:
            amount: 14
            unit: oz
        - id: dairy
          key: dairy
          name: half-and-half
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: liquid
              share: 1
        - id: condensed
          key: condensed
          name: condensed cream of chicken soup
          quantity:
            amount: 1
            unit: can
          uses:
            - step: soup
              share: 1
          plural: cans of condensed cream of chicken soup
          packageSize:
            amount: 10.75
            unit: oz
        - id: salsa
          key: salsa
          name: fresh salsa
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: soup
              share: 1
        - id: corn
          key: corn
          name: creamed corn
          quantity:
            amount: 1
            unit: can
          uses:
            - step: soup
              share: 1
          plural: cans of creamed corn
          packageSize:
            amount: 15
            unit: oz
        - id: chicken
          key: chicken
          name: boneless chicken breast half
          quantity:
            amount: 6
            unit: count
          uses:
            - step: soup
              share: 1
          plural: boneless chicken breast halves
          preparation: 'fully cooked, skinned and shredded or cut into spoon-sized pieces'
        - id: cumin
          key: cumin
          name: ground cumin
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: soup
              share: 1
        - id: fajita
          key: fajita
          name: dry fajita seasoning
          quantity:
            amount: 1
            unit: package
          uses:
            - step: soup
              share: 1
          plural: packages of dry fajita seasoning
          packageSize:
            amount: 1.27
            unit: oz
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: soup
              share: 2/3
            - step: serve
              share: 1/3
          preparation: washed and chopped
    - id: bowls
      name: Bowls
      ingredients:
        - id: chips
          key: chips
          name: tortilla chips
          quantity:
            amount: 16
            unit: oz
          uses:
            - step: serve
              share: 1
        - id: cheese
          key: cheese
          name: Monterey Jack cheese
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: serve
              share: 1
          preparation: shredded
  steps:
    - id: aromatics
      title: Soften aromatics
      text: >-
        In a large pot over medium heat, sauté {{ingredients}} for about 5
        minutes, until the onion softens. Choose a pot with room for all the
        liquid, chicken and corn, plus stirring headroom.
    - id: flour
      title: Cook flour
      text: 'Stir in {{ingredients}} and cook, stirring, for 1 minute.'
    - id: liquid
      title: Add liquid
      text: >-
        Gradually stir in {{ingredients}} until the flour disperses. Bring to a
        boil while stirring along the bottom, then reduce heat to low.
    - id: soup
      title: Heat soup
      text: >-
        Add {{ingredients}}. Heat gently for about 15 minutes, stirring
        regularly, until the finished soup reaches 165°F / 74°C throughout.
        Check after stirring so a hot edge does not stand in for the whole pot;
        cold cooked chicken may take longer.
    - id: serve
      title: Build bowls
      text: >-
        Divide all {{ingredients}} among the listed portions. Crumble some of
        the chips into the bowls and add half the cheese; ladle in the hot soup.
        Finish with the remaining chips and cheese and all the reserved
        cilantro. At the original eight-portion batch, each bowl gets 1 oz
        cheese total, half below and half above; use proportional shares for
        other batches.
equipment:
  - large-pot
  - food-thermometer
learning:
  focus: Heat a rich cooked-chicken soup evenly and allocate bowl toppings
  outcome: >-
    Creamy soup heated evenly through its cooked chicken, with chips and cheese
    layered in each bowl.
  techniques:
    - temperature
  before:
    - >-
      Start with fully cooked chicken; cooking it from raw is separate
      preparation and is not included in this soup clock. Keep prepared chicken
      and dairy refrigerated until needed.
    - >-
      Package sizes stay fixed when can or packet counts scale. A larger batch
      needs enough pot headroom and more heating time; do not multiply the
      temperature or brief flour-cooking time.
  checkpoints:
    - step: 2
      cue: Flour is dispersed through the fat and vegetables before liquid enters.
      why: Gradual liquid addition helps avoid flour lumps.
    - step: 4
      cue: Stirred soup and its chicken pieces reach 165°F / 74°C throughout.
      why: >-
        Stirring heats the thick soup and chicken pieces more evenly than
        relying on bubbles at one edge.
    - step: 5
      cue: 'All chips, cheese and reserved cilantro are distributed among bowls.'
      why: Each bowl receives half its cheese below the soup and half above it.
  troubleshooting:
    - problem: Soup catches on the pot bottom
      cause: Rich soup heated too hard or was stirred only at the surface.
      fix: >-
        Reduce heat and stir along the bottom; check the 165°F endpoint after
        stirring.
  substitutions:
    - ingredient: Margarine
      alternative: >-
        Use the same listed amount of butter instead of margarine in the first
        step.
      effect: Use either fat in the aromatics stage; do not add both.
  storage: >-
    Divide leftover soup into shallow containers and refrigerate within 2 hours,
    or 1 hour above 90°F / 32°C, at 40°F / 4°C or below. Use within 3–4 days.
    Reheat the portion being served, stirring, to 165°F / 74°C throughout and
    bring soup to a rolling boil.
  timing: >-
    Plan about 40 minutes with already cooked chicken: around 15 minutes
    preparation and roughly 25 minutes heating, including the 5-minute sauté,
    1-minute flour cook, bringing liquids to heat and about 15 minutes final
    heating. Stirring and assembly are active; cold ingredients, larger pots or
    more batches can extend elapsed time.
  sources:
    - title: Allrecipes.com
      url: 'http://allrecipes.com/recipe/15553/chicken-tortilla-soup-iii/'
    - title: USDA leftover soup handling
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: FDA produce preparation
      url: >-
        https://www.fda.gov/consumers/consumer-updates/7-tips-cleaning-fruits-vegetables
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

This creamy tortilla soup starts with fully cooked chicken and keeps all the half-and-half, condensed soup and creamed corn. Stir along the pot bottom as it heats. Divide the chips and cheese between the bottom and top of each bowl so they keep some crunch rather than soaking in the whole batch.

## Directions

1. **Soften aromatics:** In a large pot over medium heat, sauté garlic cloves, onion, and margarine for about 5 minutes, until the onion softens. Choose a pot with room for all the liquid, chicken and corn, plus stirring headroom.
2. **Cook flour:** Stir in all-purpose flour and cook, stirring, for 1 minute.
3. **Add liquid:** Gradually stir in chicken broth and half-and-half until the flour disperses. Bring to a boil while stirring along the bottom, then reduce heat to low.
4. **Heat soup:** Add condensed cream of chicken soup, fresh salsa, creamed corn, boneless chicken breast halves, ground cumin, dry fajita seasoning, and 2/3 of the fresh cilantro. Heat gently for about 15 minutes, stirring regularly, until the finished soup reaches 165°F / 74°C throughout. Check after stirring so a hot edge does not stand in for the whole pot; cold cooked chicken may take longer.
5. **Build bowls:** Divide all 1/3 of the fresh cilantro, tortilla chips, and Monterey Jack cheese among the listed portions. Crumble some of the chips into the bowls and add half the cheese; ladle in the hot soup. Finish with the remaining chips and cheese and all the reserved cilantro. At the original eight-portion batch, each bowl gets 1 oz cheese total, half below and half above; use proportional shares for other batches.
