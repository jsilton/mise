---
miseId: 527a354a-db9b-4af1-a7df-60b6a636da86
title: Slow Cooker Korean Beef
difficulty: easy
cookingMethods:
  - slow-cook
occasions:
  - comfort-food
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Korean
role: main
vibe: comfort
prepTime: 15 min
cookTime: 7 hr 30 min to 8 hr 30 min
totalTime: 7 hr 45 min to 8 hr 45 min
servings: 6 portions
pairsWith:
  - steamed-white-rice
  - garlic-sesame-spinach
  - korean-pickled-cucumbers
pairingNotes:
  steamed-white-rice: Catches the glossy soy-ginger sauce.
  garlic-sesame-spinach: A Korean green side with sesame and garlic.
  korean-pickled-cucumbers: 'Sour crunch against the sweet, rich beef.'
ingredients:
  - '--- Beef ---'
  - '3 lb boneless beef chuck roast, cut into 1-inch cubes'
  - '1 yellow onion, thinly sliced'
  - '--- Soy-ginger sauce ---'
  - 1 cup beef broth
  - 1/2 cup low-sodium soy sauce
  - '1/3 cup light brown sugar, packed'
  - '4 garlic cloves, minced'
  - 1 tbsp toasted sesame oil
  - 1 tbsp rice wine vinegar
  - '1 tbsp fresh ginger, grated'
  - 1–2 tbsp gochujang
  - '1/2 Asian pear, peeled, cored and finely grated'
  - 1/2 tsp white pepper
  - '--- Cornstarch slurry ---'
  - 2 tbsp cornstarch
  - '1/4 cup water, cold'
  - '--- To finish ---'
  - '2 scallions, thinly sliced'
  - '1 tsp sesame seeds, optional'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: excellent
source: Adapted from Damn Delicious
sourceUrl: 'https://damndelicious.net/2015/02/21/slow-cooker-korean-beef/'
rating: 5
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: beef
      name: Beef
      ingredients:
        - id: beef
          key: beef
          name: boneless beef chuck roast
          quantity:
            amount: 3
            unit: lb
          uses:
            - step: cook
              share: 1
          preparation: cut into 1-inch cubes
        - id: onion
          key: yellow-onion
          name: yellow onion
          quantity:
            amount: 1
            unit: count
          plural: yellow onions
          preparation: thinly sliced
          uses:
            - step: cook
              share: 1
    - id: sauce
      name: Soy-ginger sauce
      ingredients:
        - id: broth
          key: broth
          name: beef broth
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: soy
          key: soy
          name: low-sodium soy sauce
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: sugar
          name: light brown sugar
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: sauce
              share: 1
          preparation: packed
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 4
            unit: count
          uses:
            - step: sauce
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: oil
          key: oil
          name: toasted sesame oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: vinegar
          key: vinegar
          name: rice wine vinegar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
          preparation: grated
        - id: gochujang
          key: gochujang
          name: gochujang
          quantity:
            amount: 1
            max: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: pear
          key: asian-pear
          name: Asian pear
          quantity:
            amount: 1/2
            unit: count
          plural: Asian pears
          preparation: 'peeled, cored and finely grated'
          uses:
            - step: sauce
              share: 1
        - id: pepper
          key: pepper
          name: white pepper
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: sauce
              share: 1
    - id: slurry
      name: Cornstarch slurry
      ingredients:
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: slurry
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: slurry
              share: 1
          preparation: cold
    - id: serve
      name: To finish
      ingredients:
        - id: scallions
          key: scallions
          name: scallion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: serve
              share: 1
          plural: scallions
          preparation: thinly sliced
        - id: sesame
          key: sesame
          name: sesame seeds
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: serve
              share: 1
          optional: true
  steps:
    - id: sauce
      title: Mix the sauce
      text: 'Whisk {{ingredients}} in a bowl until the sugar and gochujang dissolve.'
    - id: cook
      title: Slow-cook the beef
      text: >-
        Put {{ingredients}} in a 6-quart slow cooker and pour the sauce over. Cover and cook on low
        for 7 to 8 hours or on high for 3 to 4 hours, until the beef falls apart when pressed with a
        fork.
    - id: slurry
      title: Thicken the sauce
      text: >-
        Whisk {{ingredients}} until smooth and stir it into the cooker. Cover, turn the cooker to
        high and cook until the sauce is glossy and thick enough to coat the beef, about 30 minutes.
    - id: serve
      title: Serve
      text: 'Taste the sauce for salt and heat. Serve the beef over rice, topped with {{ingredients}}.'
equipment:
  - slow-cooker
  - mixing-bowl
learning:
  techniques:
    - braising
    - starch
  substitutions:
    - ingredient: Asian pear
      alternative: 'Half a Fuji or Gala apple, grated'
      effect: Similar fruity sweetness with a slightly tarter edge.
    - ingredient: gochujang
      alternative: 1 to 2 tsp Sriracha
      effect: 'Brings heat and garlic but none of the fermented depth, so the sauce tastes sharper.'
  storage: Keeps 4 days in the fridge and freezes for 3 months. Reheat on the stove with a splash of water.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

A slow-cooker take on Korean braised beef, close in spirit to galbi jjim. Gochujang brings fermented heat, and grated Asian pear adds the fruity sweetness Korean marinades rely on. Chuck needs the long, gentle cook to turn spoon-tender in the soy-ginger sauce.

## Directions

1. **Mix the sauce:** Whisk beef broth, low-sodium soy sauce, light brown sugar, garlic cloves, toasted sesame oil, rice wine vinegar, fresh ginger, gochujang, Asian pear, and white pepper in a bowl until the sugar and gochujang dissolve.
2. **Slow-cook the beef:** Put boneless beef chuck roast and yellow onion in a 6-quart slow cooker and pour the sauce over. Cover and cook on low for 7 to 8 hours or on high for 3 to 4 hours, until the beef falls apart when pressed with a fork.
3. **Thicken the sauce:** Whisk cornstarch and water until smooth and stir it into the cooker. Cover, turn the cooker to high and cook until the sauce is glossy and thick enough to coat the beef, about 30 minutes.
4. **Serve:** Taste the sauce for salt and heat. Serve the beef over rice, topped with scallions and sesame seeds (if using).
