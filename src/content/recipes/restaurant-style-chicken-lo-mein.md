---
miseId: 62d807bf-73d2-4863-9f96-50c7842d0ed6
title: Restaurant-Style Chicken Lo Mein
role: main
vibe: quick
difficulty: easy
prepTime: 20 min
cookTime: 15 min
totalTime: 35 min
servings: 6 portions
cookingMethods:
  - stir-fry
categories:
  - Chinese
  - Dinner
source: Adapted from The Woks of Life
ingredients:
  - '--- Chicken ---'
  - '8 oz (225 g) boneless skinless chicken thighs, cut into thin strips'
  - 2 tsp cornstarch
  - 2 tsp water
  - 2 tsp vegetable oil for the chicken
  - 2 tbsp vegetable oil for searing
  - '--- Noodles and vegetables ---'
  - 1 lb (450 g) fresh lo mein egg noodles
  - 2 tbsp vegetable oil for the vegetables
  - '1 garlic clove, minced'
  - '4 cups cabbage, shredded'
  - '2 medium carrots, julienned'
  - 1 tbsp Shaoxing wine
  - 1 tbsp soy sauce
  - 4 tsp dark soy sauce
  - 1 tsp sesame oil
  - 1/8 tsp salt
  - 1/8 tsp sugar
  - '2 cups mung bean sprouts, rinsed and drained'
  - '2 scallions, julienned'
sourceUrl: 'https://thewoksoflife.com/chicken-lo-mein/'
cuisines:
  - Chinese
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: chicken
      name: Chicken
      ingredients:
        - id: chicken
          key: chicken-thighs
          name: boneless skinless chicken thighs
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: coat
              share: 1
          equivalents:
            - amount: 225
              unit: g
          preparation: cut into thin strips
        - id: starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: coat
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: coat
              share: 1
          role: cooking-water
        - id: coating-oil
          key: oil
          name: vegetable oil for the chicken
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: coat
              share: 1
        - id: sear-oil
          key: oil
          name: vegetable oil for searing
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sear
              share: 1
    - id: noodles
      name: Noodles and vegetables
      ingredients:
        - id: noodles
          key: fresh-lo-mein-egg-noodles
          name: fresh lo mein egg noodles
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: noodles
              share: 1
          equivalents:
            - amount: 450
              unit: g
        - id: veg-oil
          key: oil
          name: vegetable oil for the vegetables
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: vegetables
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: cabbage
          key: cabbage
          name: cabbage
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: veg2
              share: 1
          preparation: shredded
        - id: carrot
          key: carrot
          name: medium carrot
          quantity:
            amount: 2
            unit: count
          uses:
            - step: veg2
              share: 1
          plural: medium carrots
          preparation: julienned
        - id: wine
          key: shaoxing-wine-or-dry-sherry
          name: Shaoxing wine
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: toss
              share: 1
        - id: soy
          key: soy-sauce
          name: soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: dark-soy
          key: dark-soy-sauce
          name: dark soy sauce
          quantity:
            amount: 4
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sesame
          key: sesame-oil
          name: sesame oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: salt
          key: salt
          name: salt
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sprouts
          key: mung-bean-sprouts
          name: mung bean sprouts
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: finish
              share: 1
          preparation: rinsed and drained
        - id: scallion
          key: scallion
          name: scallion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: finish
              share: 1
          plural: scallions
          preparation: julienned
  steps:
    - id: coat
      title: Coat the chicken
      text: >-
        Toss {{ingredients}} in a bowl until the chicken is evenly coated. Let it sit while you cook
        the noodles.
    - id: noodles
      title: Boil the noodles
      text: >-
        Bring a large pot of water to a boil. Cook {{ingredients}} until just al dente, 2 to 3
        minutes. Rinse briefly under warm water and drain well.
    - id: sear
      title: Sear the chicken
      text: >-
        Heat the {{ingredients}} in a wok over high heat until shimmering. Spread the chicken in one
        layer and sear, turning once, until browned and cooked through, about 3 minutes. Move it to
        a plate.
    - id: vegetables
      title: Cook the garlic
      text: 'Add the {{ingredients}} to the hot wok and stir until fragrant, about 10 seconds.'
    - id: veg2
      title: Stir-fry the vegetables
      text: 'Add {{ingredients}} and stir-fry over high heat until just wilted, about 1 minute.'
    - id: toss
      title: Add the noodles
      text: >-
        Pour {{ingredients}} around the edge of the wok. Add the noodles and chicken and toss from
        the bottom for 30 seconds, adding a splash of water if the noodles clump. Cover for 1
        minute.
    - id: sauce
      title: Season the noodles
      text: 'Uncover and add {{ingredients}}. Toss until the noodles are evenly brown, about 30 seconds.'
    - id: finish
      title: Finish and serve
      text: 'Add {{ingredients}} and toss until the sprouts are just tender, 1 to 2 minutes. Serve hot.'
learning:
  techniques:
    - stir-frying
    - starch
    - temperature
  substitutions:
    - ingredient: Fresh lo mein egg noodles
      alternative: Dried lo mein noodles or spaghetti
      effect: Boil until al dente by the package time. They are a little firmer and less springy.
    - ingredient: Shaoxing wine
      alternative: Dry sherry
      effect: 'Close in flavor, a little sweeter and less savory.'
    - ingredient: Dark soy sauce
      alternative: Regular soy sauce plus a pinch of sugar
      effect: Use half as much. The noodles come out paler and a little saltier.
  storage: Keeps 3 days in the fridge. Reheat in a hot skillet with a splash of water.
  review:
    status: editorial-review
    date: '2026-11-09'
pairsWith:
  - smashed-cucumber-salad
  - steamed-bok-choy-with-oyster-sauce
pairingNotes:
  smashed-cucumber-salad: 'Cold, garlicky crunch beside hot noodles.'
  steamed-bok-choy-with-oyster-sauce: A quick green vegetable for the table.
---

## Chef's Note

This is the Cantonese takeout classic, made the way The Woks of Life makes it at home. A little cornstarch keeps the chicken silky, and dark soy sauce gives the noodles their deep brown color and gentle sweetness. Have everything cut and lined up before the wok gets hot, because the cooking takes only a few minutes.

## Directions

1. **Coat the chicken:** Toss boneless skinless chicken thighs, cornstarch, water, and vegetable oil for the chicken in a bowl until the chicken is evenly coated. Let it sit while you cook the noodles.
2. **Boil the noodles:** Bring a large pot of water to a boil. Cook fresh lo mein egg noodles until just al dente, 2 to 3 minutes. Rinse briefly under warm water and drain well.
3. **Sear the chicken:** Heat the vegetable oil for searing in a wok over high heat until shimmering. Spread the chicken in one layer and sear, turning once, until browned and cooked through, about 3 minutes. Move it to a plate.
4. **Cook the garlic:** Add the vegetable oil for the vegetables and garlic clove to the hot wok and stir until fragrant, about 10 seconds.
5. **Stir-fry the vegetables:** Add cabbage and medium carrots and stir-fry over high heat until just wilted, about 1 minute.
6. **Add the noodles:** Pour Shaoxing wine around the edge of the wok. Add the noodles and chicken and toss from the bottom for 30 seconds, adding a splash of water if the noodles clump. Cover for 1 minute.
7. **Season the noodles:** Uncover and add soy sauce, dark soy sauce, sesame oil, salt, and sugar. Toss until the noodles are evenly brown, about 30 seconds.
8. **Finish and serve:** Add mung bean sprouts and scallions and toss until the sprouts are just tender, 1 to 2 minutes. Serve hot.
