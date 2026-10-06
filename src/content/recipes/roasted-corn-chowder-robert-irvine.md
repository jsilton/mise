---
miseId: 0a8c67ca-c323-4a14-bd3d-91fad92c1b84
title: Roasted Corn Chowder with Lime Shrimp — Robert Irvine
difficulty: easy
cookingMethods:
  - roast
  - saute
  - simmer
occasions:
  - comfort-food
flavorProfile:
  - sweet
  - rich
  - smoky
cuisines:
  - American
role: main
vibe: comfort
prepTime: 20–30 min
cookTime: '55–80 min with marinating, roasting and pot work overlapped'
totalTime: 'About 75–120 min, including up to 1 hr refrigerated marinating'
servings: 8 portions
pairsWith:
  - garlic-bread
  - everyday-arugula-salad
ingredients:
  - '--- Robert Irvine’s roux-and-cream version ---'
  - '1 lime, juice and squeezed rind for shrimp marinade; marinade/rind discarded'
  - '1 lb raw baby shrimp, shelled, deveined and thawed under refrigeration if frozen'
  - '2 cups corn kernels, fresh or thawed frozen and drained; do not use canned corn'
  - '1/4 cup vegetable oil, one total, divided equally between corn roasting and the pot'
  - '1/2 cup raw bacon, chopped'
  - '1 red onion, diced'
  - '1/2 cup celery, finely diced'
  - '1 green bell pepper, diced'
  - '1 red bell pepper, diced'
  - '6 garlic cloves, minced'
  - 1/2 cup all-purpose flour
  - 2 cups heavy cream
  - 6 cups chicken stock
  - '1/2 lb Red Bliss potatoes, diced into similar small pieces'
  - 3 tbsp fresh lime juice
  - '2 tbsp fresh parsley leaves, chopped'
  - 1/4 tsp cayenne pepper
  - '1 bunch of scallions, chopped'
  - 'oyster crackers, as an accompaniment'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: 'Adapted from Robert Irvine, Food Network'
sourceUrl: >-
  https://www.foodnetwork.com/recipes/robert-irvine/roasted-corn-chowder-with-lime-cured-shrimp-recipe-1947204
equipment:
  - soup-pot
  - rimmed-baking-sheet
  - oven
  - food-thermometer
  - shallow-storage-containers
formula:
  version: 1
  yield:
    amount: 8
    unit: portion
  components:
    - id: irvine
      name: Robert Irvine’s roux-and-cream version
      ingredients:
        - id: marinade-lime
          key: lime
          name: lime
          quantity:
            amount: 1
            unit: count
          uses:
            - step: marinate
              share: 1
          plural: limes
          preparation: juice and squeezed rind for shrimp marinade; marinade/rind discarded
        - id: shrimp
          key: raw-baby-shrimp
          name: raw baby shrimp
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: marinate
              share: 1
          preparation: 'shelled, deveined and thawed under refrigeration if frozen'
        - id: corn
          key: corn-kernels
          name: corn kernels
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: roast
              share: 1
          preparation: fresh or thawed frozen and drained; do not use canned corn
        - id: oil
          key: vegetable-oil
          name: vegetable oil
          quantity:
            amount: 1/4
            unit: cup
          preparation: 'one total, divided equally between corn roasting and the pot'
          uses:
            - step: roast
              share: 1/2
            - step: bacon
              share: 1/2
        - id: bacon
          key: raw-chopped-bacon
          name: raw bacon
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: bacon
              share: 1
          preparation: chopped
        - id: onion
          key: red-onion
          name: red onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: onion
              share: 1
          plural: red onions
          preparation: diced
        - id: celery
          key: celery
          name: celery
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: onion
              share: 1
          preparation: finely diced
        - id: green-pepper
          key: green-bell-pepper
          name: green bell pepper
          quantity:
            amount: 1
            unit: count
          uses:
            - step: peppers
              share: 1
          plural: green bell peppers
          preparation: diced
        - id: red-pepper
          key: red-bell-pepper
          name: red bell pepper
          quantity:
            amount: 1
            unit: count
          uses:
            - step: peppers
              share: 1
          plural: red bell peppers
          preparation: diced
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 6
            unit: count
          uses:
            - step: peppers
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: flour
          key: all-purpose-flour
          name: all-purpose flour
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: flour
              share: 1
        - id: cream
          key: heavy-cream
          name: heavy cream
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: stock
          key: chicken-stock
          name: chicken stock
          quantity:
            amount: 6
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: potatoes
          key: red-bliss-potatoes
          name: Red Bliss potatoes
          quantity:
            amount: 1/2
            unit: lb
          uses:
            - step: simmer
              share: 1
          preparation: diced into similar small pieces
        - id: lime-juice
          key: fresh-lime-juice
          name: fresh lime juice
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: shrimp
              share: 1
        - id: parsley
          key: fresh-parsley
          name: fresh parsley leaves
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: shrimp
              share: 1
          preparation: chopped
        - id: cayenne
          key: cayenne-pepper
          name: cayenne pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: shrimp
              share: 1
        - id: scallions
          key: scallions
          name: bunch of scallions
          quantity:
            amount: 1
            unit: count
          uses:
            - step: serve
              share: 1
          plural: bunches of scallions
          preparation: chopped
          role: garnish
        - id: crackers
          key: oyster-crackers
          name: oyster crackers
          allowance: as an accompaniment
          uses:
            - step: serve
              share: 1
          role: garnish
  steps:
    - id: marinate
      title: Chill the lime-marinated shrimp
      text: >-
        Use {{ingredients}}: squeeze the lime over the raw shrimp, add the squeezed rind, stir,
        cover and refrigerate at 40°F / 4°C or below while preparing the chowder, for no longer than
        1 hour. At large scales, start marinating close enough to the shrimp-cooking stage to keep
        within that hour; keep all waiting raw shrimp refrigerated.
    - id: roast
      title: Roast the corn with half the oil
      text: >-
        Preheat the oven to 375°F / 190°C. Coat {{ingredients}} on a rimmed baking sheet and spread
        in an uncrowded layer. Roast about 5–10 minutes until fragrant and lightly colored; do not
        require blackening. Keep the remaining half of the listed oil for the pot.
    - id: bacon
      title: Cook the bacon with the remaining oil
      text: >-
        Heat {{ingredients}} in a heavy-bottomed soup pot over low heat until the bacon is crisp,
        stirring. Keep all the bacon and fat in the pot.
    - id: onion
      title: Soften onion and celery
      text: 'Add {{ingredients}} and cook about 5 minutes without browning.'
    - id: peppers
      title: 'Add peppers, garlic and corn'
      text: >-
        Add {{ingredients}} and all the roasted corn. Cook another 5 minutes over low heat, stirring
        without letting the garlic burn.
    - id: flour
      title: Cook the flour gently
      text: >-
        Stir in {{ingredients}} and cook 6–8 minutes over low heat, stirring so the flour coats the
        vegetables and does not stick or scorch.
    - id: simmer
      title: Simmer the creamy base
      text: >-
        Use {{ingredients}}. Stir in the stock gradually to disperse the flour, then add all the
        cream and potatoes. Bring to a gentle simmer and cook about 20 minutes, stirring the bottom,
        until the potatoes are fork-tender. Avoid a hard boil or stuck roux; use a pot with ample
        working headroom.
    - id: shrimp
      title: Drain and heat the shrimp
      text: >-
        Remove shrimp from the marinade and discard the liquid and lime rind. Add all shrimp with
        {{ingredients}} to the gently simmering chowder. Start checking after 2–3 minutes and
        continue until the shrimp are firm, pearly and opaque throughout, with thick centers
        reaching 145°F / 63°C. Size and starting temperature change the cooking time; pink color
        alone is not the endpoint.
    - id: serve
      title: Garnish with scallions
      text: >-
        Spoon the chowder into bowls and add {{ingredients}}. Serve promptly; all the cream, oil,
        bacon and vegetables belong to this complete version.
learning:
  focus: Build a full roux-and-cream chowder before gently cooking lime-marinated shrimp.
  outcome: >-
    Creamy chowder with roasted corn, tender potatoes, peppers and bacon, finished with fully cooked
    lime shrimp and scallions.
  techniques:
    - browning
    - gentle-proteins
    - temperature
  before:
    - >-
      Use raw peeled and deveined shrimp, thawed under refrigeration if frozen. Keep them at 40°F /
      4°C or below until cooking; lime contact is flavoring, not a cooking endpoint.
    - >-
      Prepare the vegetables before marinating. Limit lime marinating to no more than 1 hour under
      refrigeration; at larger scales, start each portion close enough to cooking to stay within
      that hour. Keep any waiting unmarinated shrimp refrigerated until its turn.
    - >-
      The listed oil is one total divided equally between roasting and the soup pot. Keep all the
      flour, cream, bacon, peppers, celery and other vegetables for this complete version.
    - >-
      Use prepared, ready-to-use chicken stock within its own storage period; dilute concentrates
      according to their label before measuring. Choose a pot with room above all liquids and
      vegetables to stir and simmer, and enough sheet-pan area for an uncrowded corn layer.
  checkpoints:
    - step: 2
      cue: Corn is fragrant and lightly colored without blackening.
      why: >-
        An uncrowded layer lets moisture escape; the short source roasting time is a guide for
        checking, not a requirement to char the kernels.
    - step: 6
      cue: Flour coats the vegetables and cooks gently without sticking.
      why: The full flour thickens the cream-and-stock base; excess heat can scorch the roux.
    - step: 7
      cue: A fork passes easily through the potatoes and the bottom remains clear.
      why: 'Cook the potatoes before adding shrimp, then give the shrimp only the time they need.'
    - step: 8
      cue: 'Shrimp are firm, pearly and opaque throughout, with thick centers at 145°F / 63°C.'
      why: Heat cooks the raw shrimp. Lime contact and pink color alone do not establish this endpoint.
  troubleshooting:
    - problem: Potatoes are firm when the shrimp are ready.
      cause: Shrimp were added before potatoes softened.
      fix: >-
        Finish potatoes first. If it already happened, remove the cooked shrimp, simmer the base
        until tender and return them only briefly for serving.
    - problem: Shrimp become rubbery.
      cause: The cooked shrimp remained boiling while the base finished.
      fix: >-
        Add raw shrimp only at the end, check their centers and stop when cooked. Longer cooking
        cannot undo rubbery texture.
    - problem: The base sticks or tastes scorched.
      cause: 'Heat was too high, especially with the flour/cream version.'
      fix: Use a gentle simmer and stir the pot bottom. Blackened flavors cannot be blended away.
  substitutions:
    - ingredient: Fresh corn kernels
      alternative: 'The same listed measured volume of thawed, drained frozen kernels'
      effect: >-
        Keep the full corn amount and dry the kernels before roasting. The source excludes canned
        corn.
  timing: >-
    Plan about 75–120 minutes elapsed and 45–60 minutes active work, starting with thawed shrimp.
    Begin roasting and the pot stages during the refrigerated marinating period, and start the
    shrimp close enough to their cooking stage to stay within 1 hour. Pot heat-up, potato size and
    extra roasting or pot batches can extend the plan. Ingredient amounts scale together; vessel
    capacity, heat and cook times do not multiply.
  storage: >-
    Divide leftover chowder into shallow containers and refrigerate at 40°F / 4°C or below within 2
    hours, or 1 hour above 90°F / 32°C. Use within 3–4 days or freeze for longer storage, allowing
    for changes in cream and potato texture. Thaw in the refrigerator. Reheat leftovers to 165°F /
    74°C throughout, stirring; bring leftover soup to a rolling boil, then reduce the heat or serve
    promptly rather than holding the shrimp at a hard boil. Keep waiting raw shrimp refrigerated and
    separate raw-contact utensils from finished chowder. Lime marinade is flavoring, not a
    replacement for cooking or cold storage. Follow any earlier storage deadline from the prepared
    stock; cooking or reheating does not restart that clock.
  sources:
    - title: 'Robert Irvine — Roasted Corn Chowder with Lime Cured Shrimp, Food Network'
      url: >-
        https://www.foodnetwork.com/recipes/robert-irvine/roasted-corn-chowder-with-lime-cured-shrimp-recipe-1947204
    - title: FDA — Selecting and Serving Fresh and Frozen Seafood Safely
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely
    - title: USDA FSIS — Leftovers and Food Safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Robert Irvine’s corn chowder cooks bacon, celery, peppers and roasted corn into a full flour-and-cream base. The oil is divided between roasting and the pot. Keep lime-marinated shrimp cold, add them only after the potatoes are tender, and heat them completely before finishing with scallions and oyster crackers.

## Directions

1. **Chill the lime-marinated shrimp:** Use lime and raw baby shrimp: squeeze the lime over the raw shrimp, add the squeezed rind, stir, cover and refrigerate at 40°F / 4°C or below while preparing the chowder, for no longer than 1 hour. At large scales, start marinating close enough to the shrimp-cooking stage to keep within that hour; keep all waiting raw shrimp refrigerated.
2. **Roast the corn with half the oil:** Preheat the oven to 375°F / 190°C. Coat corn kernels and 1/2 of the vegetable oil on a rimmed baking sheet and spread in an uncrowded layer. Roast about 5–10 minutes until fragrant and lightly colored; do not require blackening. Keep the remaining half of the listed oil for the pot.
3. **Cook the bacon with the remaining oil:** Heat 1/2 of the vegetable oil and raw bacon in a heavy-bottomed soup pot over low heat until the bacon is crisp, stirring. Keep all the bacon and fat in the pot.
4. **Soften onion and celery:** Add red onion and celery and cook about 5 minutes without browning.
5. **Add peppers, garlic and corn:** Add green bell pepper, red bell pepper, and garlic cloves and all the roasted corn. Cook another 5 minutes over low heat, stirring without letting the garlic burn.
6. **Cook the flour gently:** Stir in all-purpose flour and cook 6–8 minutes over low heat, stirring so the flour coats the vegetables and does not stick or scorch.
7. **Simmer the creamy base:** Use heavy cream, chicken stock, and Red Bliss potatoes. Stir in the stock gradually to disperse the flour, then add all the cream and potatoes. Bring to a gentle simmer and cook about 20 minutes, stirring the bottom, until the potatoes are fork-tender. Avoid a hard boil or stuck roux; use a pot with ample working headroom.
8. **Drain and heat the shrimp:** Remove shrimp from the marinade and discard the liquid and lime rind. Add all shrimp with fresh lime juice, fresh parsley leaves, and cayenne pepper to the gently simmering chowder. Start checking after 2–3 minutes and continue until the shrimp are firm, pearly and opaque throughout, with thick centers reaching 145°F / 63°C. Size and starting temperature change the cooking time; pink color alone is not the endpoint.
9. **Garnish with scallions:** Spoon the chowder into bowls and add bunch of scallions and oyster crackers. Serve promptly; all the cream, oil, bacon and vegetables belong to this complete version.

## Cooking Notes

This recipe uses Robert Irvine’s full roux-and-cream formula. The [bacon-and-paprika chowder](/mise/recipes/roasted-corn-chowder-with-lime-cured-shrimp) has a different corn, cream and oil balance. Choose either complete recipe rather than combining their quantities.
