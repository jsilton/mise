---
miseId: 58ed7acb-6c12-4cab-a507-1723b95526d0
title: Sichuan-Style Chicken & Chinese Eggplant
description: >-
  Silky Chinese eggplant and tender chicken with spicy fermented broad-bean paste and Chinkiang
  vinegar, cooked in one pan.
source: From Jordan Silton
role: main
vibe: comfort
difficulty: intermediate
prepTime: 25 min
cookTime: 30 min
totalTime: 55 min
cuisines:
  - Chinese
  - Sichuan
cookingMethods:
  - saute
  - steam
  - simmer
dietary:
  - dairy-free
occasions:
  - everyday
  - comfort-food
flavorProfile:
  - spicy
  - sweet
  - tangy
  - umami
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: good
advancePrep:
  - make-ahead-sauce
  - prep-vegetables
equipment:
  - 14-inch-wok-with-lid-or-wide-deep-skillet
  - instant-read-thermometer
pairsWith:
  - steamed-white-rice
  - smashed-cucumber-salad
scaling:
  mode: fixed
  reason: >-
    The eggplant and the chicken each cook in one load in a 14-inch wok. A bigger batch will not fit
    the pan.
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: eggplant
      name: Eggplant
      ingredients:
        - id: eggplant
          key: eggplant
          name: Chinese eggplant
          quantity:
            amount: 1.5
            unit: lb
          uses:
            - step: salt
              share: 1
          equivalents:
            - amount: 680
              unit: g
          preparation: trimmed and cut into batons 2 inches long and 1/2–3/4 inch thick
        - id: salt
          key: salt
          name: kosher salt
          quantity:
            amount: 3
            unit: g
          uses:
            - step: salt
              share: 1
          preparation: for salting the eggplant
        - id: oil
          key: neutral-oil
          name: neutral high-heat cooking oil
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: eggplant
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: steam
              share: 1
          role: cooking-water
    - id: chicken
      name: Chicken and marinade
      ingredients:
        - id: chicken
          key: chicken
          name: boneless skinless chicken thighs
          quantity:
            amount: 1.6
            unit: lb
          uses:
            - step: marinate
              share: 1
          equivalents:
            - amount: 725
              unit: g
          preparation: trimmed and cut across the grain into bite-sized strips about 1/2 inch thick
        - id: light-soy
          key: light-soy
          name: light soy sauce
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: marinate
              share: 1
        - id: wine
          key: wine
          name: Shaoxing wine
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: marinate
              share: 1
        - id: cornstarch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: marinate
              share: 1
        - id: sesame-oil
          key: sesame-oil
          name: toasted sesame oil
          quantity:
            amount: 3/4
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: pepper
          key: pepper
          name: ground white pepper
          quantity:
            amount: 1/3
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: oil
          key: neutral-oil
          name: neutral high-heat cooking oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: chicken
              share: 1
    - id: aromatics
      name: Aromatics
      ingredients:
        - id: oil
          key: neutral-oil
          name: neutral high-heat cooking oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: doubanjiang
              share: 1
        - id: scallions
          key: scallions
          name: medium scallion
          quantity:
            amount: 3
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: medium scallions
          preparation: 'thinly sliced, whites and greens kept apart'
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 6
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: finely minced
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: finely minced
        - id: flakes
          key: flakes
          name: crushed red pepper flakes
          quantity:
            amount: 1/4
            unit: tsp
            max: 1/2
          uses:
            - step: aromatics
              share: 1
          optional: true
        - id: doubanjiang
          key: doubanjiang
          name: Pixian doubanjiang (spicy broad-bean paste)
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: doubanjiang
              share: 1
          preparation: chopped if chunky
    - id: sauce
      name: Sauce
      ingredients:
        - id: black-vinegar
          key: chinkiang-vinegar
          name: Chinkiang black vinegar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: light-soy
          key: light-soy
          name: light soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: dark-soy
          key: dark-soy
          name: dark soy sauce
          quantity:
            amount: 1 1/2
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: sugar
          name: granulated sugar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: broth
          key: broth
          name: low-sodium chicken broth or water
          stepName: broth
          quantity:
            amount: 6
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: cornstarch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 1 1/2
            unit: tsp
          uses:
            - step: sauce
              share: 1
    - id: finish
      name: To finish and serve
      ingredients:
        - id: extra-vinegar
          key: chinkiang-vinegar
          name: Chinkiang black vinegar
          quantity:
            amount: 1 1/2
            unit: tsp
          preparation: for finishing
          optional: true
          uses:
            - step: finish
              share: 1
        - id: extra-soy
          key: light-soy
          name: light soy sauce
          quantity:
            amount: 1 1/2
            unit: tsp
          preparation: for finishing
          optional: true
          uses:
            - step: finish
              share: 1
        - id: rice
          key: rice
          name: cooked steamed rice
          quantity:
            amount: 3
            unit: cup
            max: 4
          uses:
            - step: serve
              share: 1
          preparation: for serving
  steps:
    - id: salt
      title: Salt the eggplant
      text: 'Toss {{ingredients}} in a colander and let it sit for 15 minutes.'
    - id: marinate
      title: Marinate the chicken
      text: >-
        While the eggplant sits, mix {{ingredients}} until evenly coated. Refrigerate for at least
        15 minutes.
    - id: sauce
      title: Mix the sauce
      text: 'Whisk {{ingredients}} in a bowl until the sugar dissolves.'
    - id: eggplant
      title: Brown the eggplant
      text: >-
        Rinse the eggplant briefly and pat it very dry. Heat {{ingredients}} in the wok over
        medium-high heat. Add all the eggplant and cook, turning now and then, until some sides are
        browned, 3 to 4 minutes.
    - id: steam
      title: Steam the eggplant
      text: >-
        Lower the heat to medium. Pour {{ingredients}} down the side of the wok and cover right
        away. Steam, turning once, until a knife slides easily through the centers and the flesh is
        silky, 4 to 6 minutes. If the pan dries before the eggplant is tender, add a little more
        water a tablespoon at a time. Uncover and cook until the water is gone, 2 to 4 minutes, then
        move the eggplant to a plate.
    - id: chicken
      title: Sear the chicken
      text: >-
        Once the wok is dry, turn the heat to medium-high. Add {{ingredients}}, then all the
        chicken, and leave it for 2 minutes. Stir and separate the strips.
    - id: chicken-through
      title: Cook the chicken through
      text: >-
        Cook, stirring every minute or so, until browned in spots and 165°F in the thickest strips,
        8 to 12 minutes. If the marinade catches, lower the heat and add a splash of water. Move the
        chicken and its juices to a second plate.
    - id: doubanjiang
      title: Fry the chili-bean paste
      text: >-
        Wipe out any scorched bits and lower the heat to medium. Add {{ingredients}} and stir until
        fragrant and the oil turns red, 20 to 30 seconds.
    - id: aromatics
      title: Add the aromatics
      text: >-
        Add {{ingredients}}, holding back the scallion greens for the end. Stir until fragrant, 20
        to 30 seconds.
    - id: finish
      title: Glaze and finish
      text: >-
        Whisk the sauce again and pour it in. Simmer, stirring, until glossy, 30 to 60 seconds.
        Return the chicken and its juices, then gently fold in the eggplant and heat through, 1 to 2
        minutes. Add a splash of water if the glaze is thick. Stir in {{ingredients}}.
    - id: serve
      title: Serve
      text: 'Turn off the heat and fold in the scallion greens. Serve right away with {{ingredients}}.'
learning:
  techniques:
    - stir-frying
    - starch
    - temperature
  substitutions:
    - ingredient: Pixian doubanjiang (spicy broad-bean paste)
      alternative: 1 tbsp sweet miso plus 1 1/2 tbsp sambal oelek
      effect: >-
        Whisk the miso into the sauce and fry the sambal after the aromatics for 15 seconds. Use 1
        1/2 tbsp light soy in the sauce and skip the finishing soy. It is sweeter and smoother.
    - ingredient: Chinkiang black vinegar
      alternative: '2 tbsp unseasoned rice vinegar, 1 1/2 tsp balsamic and 1/2 tsp Worcestershire'
      effect: >-
        Whisk all three into the sauce in place of both black vinegar amounts. The tang is a little
        sweeter.
    - ingredient: medium scallions
      alternative: '1 medium shallot or 1/4 medium yellow onion, thinly sliced'
      effect: >-
        Soften it in the oil before the chili-bean paste goes in, 2 to 3 minutes for shallot or 3 to
        4 for onion. Keep the garlic. There are no greens to fold in at the end.
  storage: >-
    Keeps 4 days in the fridge. Reheat gently with a splash of water. The eggplant softens more as
    it sits.
  review:
    status: editorial-review
    date: '2026-11-09'
ingredients:
  - '--- Eggplant ---'
  - >-
    1 1/2 lb (680 g) Chinese eggplant, trimmed and cut into batons 2 inches long and 1/2–3/4 inch
    thick
  - '3 g kosher salt, for salting the eggplant'
  - 3 tbsp neutral high-heat cooking oil
  - 3 tbsp water
  - '--- Chicken and marinade ---'
  - >-
    1.6 lb (725 g) boneless skinless chicken thighs, trimmed and cut across the grain into
    bite-sized strips about 1/2 inch thick
  - 1 1/2 tbsp light soy sauce
  - 1 1/2 tbsp Shaoxing wine
  - 1 1/2 tbsp cornstarch
  - 3/4 tsp toasted sesame oil
  - 1/3 tsp ground white pepper
  - 1 tbsp neutral high-heat cooking oil
  - '--- Aromatics ---'
  - 1 tbsp neutral high-heat cooking oil
  - '3 medium scallions, thinly sliced, whites and greens kept apart'
  - '6 garlic cloves, finely minced'
  - '1 1/2 tbsp fresh ginger, finely minced'
  - '1/4–1/2 tsp crushed red pepper flakes, optional'
  - '1 1/2 tbsp Pixian doubanjiang (spicy broad-bean paste), chopped if chunky'
  - '--- Sauce ---'
  - 2 tbsp Chinkiang black vinegar
  - 1 tbsp light soy sauce
  - 1 1/2 tsp dark soy sauce
  - 1 tbsp granulated sugar
  - 6 tbsp low-sodium chicken broth or water
  - 1 1/2 tsp cornstarch
  - '--- To finish and serve ---'
  - '1 1/2 tsp Chinkiang black vinegar, for finishing, optional'
  - '1 1/2 tsp light soy sauce, for finishing, optional'
  - '3–4 cups cooked steamed rice, for serving'
servings: 4 portions
pairingNotes:
  steamed-white-rice: Plain rice to catch the spicy glaze.
  smashed-cucumber-salad: 'Cool, garlicky crunch against the chili heat.'
---

## Chef's Note

This is Jordan's Sichuan-style chicken and eggplant: silky Chinese eggplant and chicken thighs in a glaze of spicy Pixian broad-bean paste and Chinkiang black vinegar, with the sweet, sour and hot balance of Sichuan home cooking. A short covered steam turns the eggplant creamy without soaking it in oil.

## Directions

1. **Salt the eggplant:** Toss the Chinese eggplant and salt in a colander and let it sit for 15 minutes.
2. **Marinate the chicken:** While the eggplant sits, mix the chicken thighs, Shaoxing wine, sesame oil, white pepper, 1 1/2 tbsp of the light soy sauce, and 1 1/2 tbsp of the cornstarch until evenly coated. Refrigerate for at least 15 minutes.
3. **Mix the sauce:** Whisk the dark soy sauce, sugar, broth, 2 tbsp of the Chinkiang black vinegar, 1 tbsp of the light soy sauce, and 1 1/2 tsp of the cornstarch in a bowl until the sugar dissolves.
4. **Brown the eggplant:** Rinse the eggplant briefly and pat it very dry. Heat 3 tbsp of the neutral high-heat cooking oil in the wok over medium-high heat. Add all the eggplant and cook, turning now and then, until some sides are browned, 3 to 4 minutes.
5. **Steam the eggplant:** Lower the heat to medium. Pour the water down the side of the wok and cover right away. Steam, turning once, until a knife slides easily through the centers and the flesh is silky, 4 to 6 minutes. If the pan dries before the eggplant is tender, add a little more water a tablespoon at a time. Uncover and cook until the water is gone, 2 to 4 minutes, then move the eggplant to a plate.
6. **Sear the chicken:** Once the wok is dry, turn the heat to medium-high. Add 1 tbsp of the neutral high-heat cooking oil, then all the chicken, and leave it for 2 minutes. Stir and separate the strips.
7. **Cook the chicken through:** Cook, stirring every minute or so, until browned in spots and 165°F in the thickest strips, 8 to 12 minutes. If the marinade catches, lower the heat and add a splash of water. Move the chicken and its juices to a second plate.
8. **Fry the chili-bean paste:** Wipe out any scorched bits and lower the heat to medium. Add the Pixian doubanjiang and 1 tbsp of the neutral high-heat cooking oil and stir until fragrant and the oil turns red, 20 to 30 seconds.
9. **Add the aromatics:** Add the scallions, garlic, ginger, and crushed red pepper flakes (if using), holding back the scallion greens for the end. Stir until fragrant, 20 to 30 seconds.
10. **Glaze and finish:** Whisk the sauce again and pour it in. Simmer, stirring, until glossy, 30 to 60 seconds. Return the chicken and its juices, then gently fold in the eggplant and heat through, 1 to 2 minutes. Add a splash of water if the glaze is thick. Stir in 1 1/2 tsp of the Chinkiang black vinegar (if using) and 1 1/2 tsp of the light soy sauce (if using).
11. **Serve:** Turn off the heat and fold in the scallion greens. Serve right away with the steamed rice.
