---
miseId: f91c11d6-e9df-4a36-be37-f73b43ed23c6
title: Pasta alla Norma
role: main
vibe: comfort
difficulty: intermediate
origin: Italy
cuisines:
  - Italian
occasions:
  - entertaining
  - weekend-project
seasons:
  - summer
nutritionalDensity: moderate
leftovers: good
source: 'Adapted from Accademia Italiana della Cucina, Pasta alla Norma'
sourceUrl: 'https://www.accademiaitalianadellacucina.it/it/ricette/ricetta/pasta-alla-norma'
cookingMethods:
  - simmer
  - fry
  - boil
  - toss
flavorProfile:
  - acidic
  - rich
  - savory
prepTime: 20–30 min
cookTime: 1 hr 25 min–1 hr 45 min
totalTime: 1 hr 45 min–2 hr 15 min
equipment:
  - saucepan
  - food-mill
  - heavy-frying-pan
  - pasta-pot
  - slotted-spoon
  - large-serving-bowl
  - wide-saute-pan
pairsWith:
  - garlic-bread
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: sauce
      name: Fresh tomato sauce
      ingredients:
        - id: tomatoes
          key: ripe-sauce-tomatoes
          name: ripe sauce tomatoes
          quantity:
            amount: 1.5
            unit: kg
          preparation: halved
          uses:
            - step: tomatoes
              share: 1
        - id: onion
          key: white-onion
          name: medium white onion
          plural: medium white onions
          quantity:
            amount: 2
            unit: count
          preparation: peeled and quartered
          uses:
            - step: tomatoes
              share: 1
        - id: water
          key: water
          name: water
          allowance: a small splash as needed to start the tomato simmer
          role: cooking-water
          uses:
            - step: tomatoes
              share: 1
        - id: basil-start
          key: fresh-basil
          name: fresh basil leaves
          allowance: a few for the first tomato simmer
          uses:
            - step: tomatoes
              share: 1
        - id: garlic
          key: fresh-garlic
          name: garlic clove
          plural: garlic cloves
          quantity:
            amount: 2
            unit: count
          preparation: peeled and lightly crushed
          uses:
            - step: sauce
              share: 1
        - id: oil
          key: extra-virgin-olive-oil
          name: extra-virgin olive oil
          allowance: enough to gently fry the garlic
          uses:
            - step: sauce
              share: 1
        - id: basil-finish
          key: fresh-basil
          name: fresh basil sprig
          allowance: for the second tomato simmer
          uses:
            - step: sauce
              share: 1
        - id: salt
          key: salt
          name: salt
          allowance: to taste
          uses:
            - step: sauce
              share: 1
    - id: eggplant
      name: Fried eggplant
      ingredients:
        - id: eggplant
          key: medium-violet-eggplant
          name: medium violet eggplant
          plural: medium violet eggplants
          quantity:
            amount: 3
            unit: count
          preparation: trimmed; slice lengthwise 4 mm thick
          uses:
            - step: fry
              share: 1
        - id: oil
          key: extra-virgin-olive-oil
          name: extra-virgin olive oil
          allowance: for frying in batches
          uses:
            - step: fry
              share: 1
    - id: pasta
      name: Pasta and finish
      ingredients:
        - id: spaghetti
          key: dried-spaghetti
          name: dried spaghetti
          quantity:
            amount: 500
            unit: g
          uses:
            - step: pasta
              share: 1
        - id: water
          key: water
          name: water
          allowance: enough for the pasta to move freely
          role: cooking-water
          uses:
            - step: pasta
              share: 1
        - id: salt
          key: salt
          name: salt
          allowance: to salt the pasta cooking water
          uses:
            - step: pasta
              share: 1
        - id: ricotta
          key: ricotta-salata
          name: ricotta salata
          quantity:
            amount: 300
            unit: g
          preparation: grated
          uses:
            - step: finish
              share: 1
        - id: basil
          key: fresh-basil
          name: fresh basil leaves
          allowance: for serving
          role: garnish
          uses:
            - step: finish
              share: 1
        - id: pepper
          key: black-pepper
          name: freshly ground black pepper
          allowance: to taste
          uses:
            - step: finish
              share: 1
  steps:
    - id: prep
      title: Prepare for two cooking stages
      text: >-
        Wash the vegetables. Halve the tomatoes and quarter the peeled onions. Set out a food mill,
        a saucepan that holds the tomato load with stirring room, a separate deep-sided frying pan,
        a separate wide pan for the final toss, and a pasta pot. Have a paper-lined tray ready for
        the fried eggplant. With two burners, finish the frying before bringing the pasta water to a
        boil.
    - id: tomatoes
      title: Soften the fresh tomatoes
      text: >-
        Put {{ingredients}} in the saucepan. Cook over medium heat for about 40 minutes, stirring
        occasionally, until the tomatoes and onion are soft. Add only enough water to prevent
        catching before the tomatoes release their juices; keep the mixture at a steady simmer.
    - id: mill
      title: Pass the sauce through the mill
      text: >-
        Pass the softened tomato mixture through the food mill into a bowl, retaining the pulp and
        liquid. Remove the seeds and skins left in the mill.
    - id: sauce
      title: Finish the tomato sauce
      text: >-
        Use {{ingredients}} in the saucepan. Gently fry the garlic in the oil until pale golden,
        then add the milled tomato mixture and basil sprig. Simmer gently for about 20 minutes,
        until the sauce has body. Season to taste; the ricotta salata added later also brings salt.
        Keep the full sauce for dressing and topping the pasta.
    - id: fry
      title: Fry the eggplant in batches
      text: >-
        Use {{ingredients}}. Cut the eggplant lengthwise into 4 mm slices and dry the surfaces well.
        Heat the oil until a slice sizzles steadily, without smoke. Fry small uncrowded batches,
        turning until golden and tender throughout. Drain with a slotted spoon onto the lined tray.
        Let the oil recover between batches, keep room for displaced oil, and never leave the hot
        pan unattended. Move it safely off the burner when frying is finished.
    - id: pasta
      title: Cook the spaghetti
      text: >-
        Cook {{ingredients}}: bring the water to a boil, salt it, then add the spaghetti and cook
        until al dente according to the pasta’s package guidance. While it cooks, cut some of the
        fried eggplant into strips and put them in a wide pan with a few spoonfuls of the prepared
        tomato sauce.
    - id: finish
      title: Toss and serve
      text: >-
        Finish with {{ingredients}}. Drain the spaghetti and toss it over medium heat in the
        separate wide pan with the tomato sauce and eggplant strips for about 1 minute. Divide among
        plates and use the remaining tomato sauce, whole fried eggplant slices and all the grated
        ricotta salata to finish. Add basil and pepper to taste and serve promptly.
learning:
  focus: 'Coordinate fresh tomato reduction, batch-fried eggplant and pasta service.'
  outcome: >-
    Al dente spaghetti with reduced tomato sauce, tender golden eggplant and the full salty-ricotta
    finish.
  techniques:
    - browning
    - starch
    - seasoning
  before:
    - >-
      Choose ripe seasonal sauce tomatoes, violet eggplants and fresh basil; the counted eggplant
      and onion sizes vary, so no inferred gram equivalents are supplied.
    - >-
      Use a food mill to separate cooked pulp from skins and seeds. Prepare a deep-sided frying pan,
      slotted spoon and draining tray before heating oil.
    - >-
      With two burners, fry the eggplant while the second tomato simmer runs, then use the freed
      burner for pasta. Additional frying batches extend service time.
  checkpoints:
    - step: 4
      cue: The milled sauce has body after its second simmer and the garlic has not burned.
      why: Fresh tomatoes release variable water; sauce readiness matters as well as the written time.
    - step: 5
      cue: The eggplant is golden and tender throughout; the oil gives a steady sizzle without smoke.
      why: >-
        Small batches allow cooking and browning without overcrowding or unsafe displacement of hot
        oil.
    - step: 7
      cue: 'Pasta stays al dente and each plate gets tomato sauce, fried eggplant and ricotta salata.'
      why: >-
        The separate garnish is part of the dish’s identity; the whole batch needs a complete
        allocation.
  troubleshooting:
    - problem: Eggplant is pale and oily.
      cause: The pan is crowded or the oil cooled under the load.
      fix: >-
        Use smaller batches and let the oil recover. Drain each batch before adding it to the pasta;
        do not keep adding cold slices to a crowded pan.
    - problem: Tomato sauce is watery at service.
      cause: The fresh tomato load was especially juicy or the pot reduced slowly.
      fix: >-
        Continue the second simmer until the sauce has body, stirring to prevent catching. Keep the
        pasta uncooked until the sauce and eggplant are ready.
  substitutions:
    - ingredient: Spaghetti
      alternative: Use the same listed weight of dried rigatoni.
      effect: >-
        The Academy lists maccheroni/rigatoni as an accepted modern option; cooking time and the way
        sauce sits in the shape differ.
  timing: >-
    Plan 20–30 minutes preparation and roughly 85–105 minutes cooking, about 1 hour 45 minutes to 2
    hours 15 minutes total, with 55–75 minutes active work. The fresh tomato stages take about 40
    then 20 minutes, with milling between. Frying can overlap the second simmer, but three medium
    eggplants need multiple loads; small pans or one burner extend the schedule. On two burners,
    finish frying before boiling pasta water. Include heating that water, the package cooking time
    and the final one-minute toss.
  storage: >-
    Divide leftovers into shallow containers and refrigerate at 40°F / 4°C or below within 2 hours
    of cooking or serving, or within 1 hour above 90°F / 32°C. Use refrigerated leftovers within 3–4
    days. Reheat only the portion needed to 165°F / 74°C throughout; bring a separately reheated
    tomato sauce to a boil. Cool and refrigerate promptly after cooking rather than waiting for a
    large pan to cool completely. Store sauce and fried eggplant separately from uncooked pasta for
    make-ahead service; fried eggplant softens during storage. Cook pasta fresh when practical.
  sources:
    - title: 'Accademia Italiana della Cucina — Pasta alla Norma, complete current recipe'
      url: 'https://www.accademiaitalianadellacucina.it/it/ricette/ricetta/pasta-alla-norma'
    - title: USDA FSIS — Deep Fat Frying and Food Safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/deep-fat-frying
    - title: FDA — Safe Food Handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: USDA FSIS — Leftovers and Food Safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
ingredients:
  - '--- Fresh tomato sauce ---'
  - '1 1/2 kg ripe sauce tomatoes, halved'
  - '2 medium white onions, peeled and quartered'
  - 'water, a small splash as needed to start the tomato simmer'
  - 'fresh basil leaves, a few for the first tomato simmer'
  - '2 garlic cloves, peeled and lightly crushed'
  - 'extra-virgin olive oil, enough to gently fry the garlic'
  - 'fresh basil sprig, for the second tomato simmer'
  - 'salt, to taste'
  - '--- Fried eggplant ---'
  - '3 medium violet eggplants, trimmed; slice lengthwise 4 mm thick'
  - 'extra-virgin olive oil, for frying in batches'
  - '--- Pasta and finish ---'
  - 500 g dried spaghetti
  - 'water, enough for the pasta to move freely'
  - 'salt, to salt the pasta cooking water'
  - '300 g ricotta salata, grated'
  - 'fresh basil leaves, for serving'
  - 'freshly ground black pepper, to taste'
servings: 6 portions
---

## Chef's Note

Pasta alla Norma pairs Catania’s tomato-and-basil pasta with fried eggplant and ricotta salata. Fresh tomatoes are cooked and milled before a second simmer, while thin eggplant slices fry in batches. Have both ready before cooking the spaghetti so the pasta reaches the table al dente.

## Directions

1. **Prepare for two cooking stages:** Wash the vegetables. Halve the tomatoes and quarter the peeled onions. Set out a food mill, a saucepan that holds the tomato load with stirring room, a separate deep-sided frying pan, a separate wide pan for the final toss, and a pasta pot. Have a paper-lined tray ready for the fried eggplant. With two burners, finish the frying before bringing the pasta water to a boil.
2. **Soften the fresh tomatoes:** Put ripe sauce tomatoes, medium white onions, water, and fresh basil leaves in the saucepan. Cook over medium heat for about 40 minutes, stirring occasionally, until the tomatoes and onion are soft. Add only enough water to prevent catching before the tomatoes release their juices; keep the mixture at a steady simmer.
3. **Pass the sauce through the mill:** Pass the softened tomato mixture through the food mill into a bowl, retaining the pulp and liquid. Remove the seeds and skins left in the mill.
4. **Finish the tomato sauce:** Use garlic cloves, extra-virgin olive oil, fresh basil sprig, and salt in the saucepan. Gently fry the garlic in the oil until pale golden, then add the milled tomato mixture and basil sprig. Simmer gently for about 20 minutes, until the sauce has body. Season to taste; the ricotta salata added later also brings salt. Keep the full sauce for dressing and topping the pasta.
5. **Fry the eggplant in batches:** Use medium violet eggplants and extra-virgin olive oil. Cut the eggplant lengthwise into 4 mm slices and dry the surfaces well. Heat the oil until a slice sizzles steadily, without smoke. Fry small uncrowded batches, turning until golden and tender throughout. Drain with a slotted spoon onto the lined tray. Let the oil recover between batches, keep room for displaced oil, and never leave the hot pan unattended. Move it safely off the burner when frying is finished.
6. **Cook the spaghetti:** Cook dried spaghetti, water, and salt: bring the water to a boil, salt it, then add the spaghetti and cook until al dente according to the pasta’s package guidance. While it cooks, cut some of the fried eggplant into strips and put them in a wide pan with a few spoonfuls of the prepared tomato sauce.
7. **Toss and serve:** Finish with ricotta salata, fresh basil leaves, and freshly ground black pepper. Drain the spaghetti and toss it over medium heat in the separate wide pan with the tomato sauce and eggplant strips for about 1 minute. Divide among plates and use the remaining tomato sauce, whole fried eggplant slices and all the grated ricotta salata to finish. Add basil and pepper to taste and serve promptly.

## Cooking Notes

Ricotta salata is the firm salted grating cheese; fresh ricotta gives a different finish. Use the full listed cheese amount, and season the tomato sauce with its saltiness in mind. The 4 mm eggplant thickness stays the same as the batch changes.

On two burners, finish frying before bringing the pasta water to a boil. Three medium eggplants require several frying batches; a smaller pan needs more time.
