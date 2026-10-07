---
miseId: 0ac68da4-5c8b-48cd-9262-e199c6a51424
title: Paella Valenciana
origin: 'Valencia, Spain'
role: main
vibe: technical
difficulty: intermediate
prepTime: 25–35 min
cookTime: 'About 75–115 min, including a 5 min rest'
totalTime: About 1¾–2½ hr
cookingMethods:
  - saute
  - simmer
occasions:
  - entertaining
  - family-meal
  - weekend-project
flavorProfile:
  - savory
  - rich
  - aromatic
cuisines:
  - Spanish
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: good
equipment:
  - 42-45-cm-paella-pan
  - matched-gas-ring-or-even-wide-heat-source
  - food-thermometer
  - kettle
pairsWith:
  - everyday-arugula-salad
source: >-
  Adapted from Turisme Comunitat Valenciana’s Paella Valenciana, with documented ingredient-state
  and cooking guidance
sourceUrl: >-
  https://multimedia.comunitatvalenciana.com/02DE7ACEB70B406FB083C79314A85B50/doc/7791B45ACAB1455ABAB179442017C123/Paella_Valenciana_EN.pdf
scaling:
  mode: fixed
  reason: >-
    One four-portion batch uses a level 42–45 cm pan with even heat. Make additional complete pans
    for more diners; piling twice the rice into this pan changes its depth and evaporation.
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: paella
      name: Paella Valenciana
      ingredients:
        - id: oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 120
            unit: ml
          uses:
            - step: brown
              share: 1
        - id: chicken
          key: chicken
          name: bone-in chicken pieces
          quantity:
            amount: 480
            unit: g
          preparation: >-
            thigh or leg pieces, cut through the joints into small serving pieces; thawed and patted
            dry
          uses:
            - step: brown
              share: 1
        - id: rabbit
          key: rabbit
          name: bone-in rabbit pieces
          quantity:
            amount: 320
            unit: g
          preparation: cut into small serving pieces; thawed and patted dry
          uses:
            - step: brown
              share: 1
        - id: green-beans
          key: green-beans
          name: flat green beans
          quantity:
            amount: 200
            unit: g
          preparation: trimmed and cut into short lengths
          uses:
            - step: beans
              share: 1
        - id: tomatoes
          key: tomatoes
          name: ripe tomato
          plural: ripe tomatoes
          quantity:
            amount: 2
            unit: count
          preparation: 'grated on the coarse side of a grater, skins discarded'
          uses:
            - step: sofrito
              share: 1
        - id: paprika
          key: paprika
          name: sweet paprika
          quantity:
            amount: 3/4
            unit: tsp
          uses:
            - step: sofrito
              share: 1
        - id: garrofo
          key: garrofo
          name: shelled garrofó beans
          quantity:
            amount: 150
            unit: g
          preparation: 'fresh or frozen, thawed; not dried beans'
          uses:
            - step: broth
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 2.6
            unit: l
          preparation: >-
            add 1.2 L first to mark the rice-cooking level, then the remaining 1.4 L for the meat
            broth
          role: cooking-water
          uses:
            - step: broth
              share: 1
        - id: saffron
          key: saffron
          name: saffron strand
          plural: saffron strands
          quantity:
            amount: 32
            unit: count
          preparation: crushed
          uses:
            - step: saffron
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          allowance: to taste; the regional source suggests about 28 g for this four-person batch
          uses:
            - step: broth
              share: 1
        - id: rice
          key: rice
          name: Spanish round white rice of the Senia/Bahía type
          quantity:
            amount: 400
            unit: g
          preparation: dry; use the stated variety for this liquid level and cooking schedule
          uses:
            - step: rice
              share: 1
        - id: hot-water
          key: hot-water
          name: additional boiling water
          allowance: as needed to restore the marked broth level or finish hard rice
          role: cooking-water
          uses:
            - step: rice
              share: 1
  steps:
    - id: prepare
      title: Set up the pan and ingredients
      text: >-
        Use a level 42–45 cm traditional shallow paella pan over a matched gas ring or another heat
        source that heats the whole rice bed evenly. Follow the burner’s indoor/outdoor rating. This
        is one four-portion pan: a small stove burner under this wide pan leaves the edges
        undercooked. Prepare the meat, beans and grated tomatoes before starting. Have a heatproof
        way to mark the liquid level, a kettle and a food thermometer ready. Keep the raw meat
        separate from the vegetables and finished food.
    - id: brown
      title: Brown the chicken and rabbit
      text: >-
        Start with {{ingredients}}. Warm the oil over medium heat, then add the chicken and rabbit
        in a loose single layer. Turn as each surface browns, letting the meat color without
        scorching the pan; allow roughly 20–30 minutes. Use batches if necessary, retaining all the
        meat and oil. Browning is the start of cooking, not the final meat endpoint.
    - id: beans
      title: Cook the green beans
      text: >-
        Add {{ingredients}} and turn them in the oil for about 3–5 minutes, until their color
        brightens and they begin to soften. Move the meat and beans toward the perimeter to leave
        room for the tomato in the middle.
    - id: sofrito
      title: Reduce the tomato without burning the paprika
      text: >-
        Use {{ingredients}} for the sofrito. Lower the heat. Stir the paprika into the oil briefly,
        then immediately add the tomatoes. Cook the tomato until its loose water has evaporated and
        the mixture is thick, roughly 5–10 minutes. Stir this mixture as needed; if the paprika
        catches before the tomato is added, its bitterness will carry into the rice.
    - id: broth
      title: 'Mark the broth level, then simmer the meat'
      text: >-
        Use {{ingredients}} in stages. For this four-portion pan, add the garrofó, then pour in 1.2
        L of the water first and mark that liquid level on a clean metal utensil held consistently
        in the pan. Add the remaining 1.4 L. Add the salt gradually; it will become more
        concentrated as the broth reduces. Simmer uncovered until the broth returns to the mark, the
        beans are tender and the meat is cooked through, allowing roughly 25–45 minutes. Probe
        several thick chicken pieces away from bone for at least 165°F and rabbit pieces for at
        least 160°F. If the broth reaches the mark first, replenish with boiling water and continue
        until those endpoints are met. If the meat finishes first, continue reducing to the mark.
        Taste a cooled spoonful: the broth should be well seasoned, without a harsh salt taste.
    - id: saffron
      title: Add the saffron
      text: >-
        Put {{ingredients}} in a small heatproof cup and dissolve it in a few spoonfuls of hot broth
        taken from the pan. Return the whole infusion to the pan; it adds no extra unmeasured
        liquid. Bring the broth back to a lively, even boil.
    - id: rice
      title: 'Spread the rice, then leave it still'
      text: >-
        Have {{ingredients}} ready. Scatter the rice evenly into the boiling broth and spread it
        once so no mound remains. Cook uncovered at a lively boil for about 5 minutes, at medium
        heat for about 5 minutes, then at low heat for about 5–8 minutes. Keep the heat even across
        the pan and do not stir after distributing the rice. Start tasting a few grains from both
        center and edge around 15 minutes: they should be tender with a slight firmness and no
        chalky core, while the pan has no loose broth. If the liquid disappears while the grains
        remain hard, add a little of the boiling water over the dry areas and continue gently; do
        not fry hard rice to make a crust. These are checkpoints, not a guaranteed finish time.
    - id: rest
      title: Rest briefly and serve from the pan
      text: >-
        Take the pan off the heat when the rice is cooked and the broth has been absorbed. A faint
        toasted smell and gentle crackle can signal socarrat underneath; an acrid smell or dark
        smoke means remove the pan immediately. A crust is optional, not a reason to burn otherwise
        finished rice. Rest away from the heat for about 5 minutes, then serve, sharing both meat
        and rice among the four portions. Keep the rice layer undisturbed until serving.
ingredients:
  - '--- Paella Valenciana ---'
  - 120 ml extra-virgin olive oil
  - >-
    480 g bone-in chicken pieces, thigh or leg pieces, cut through the joints into small serving
    pieces; thawed and patted dry
  - '320 g bone-in rabbit pieces, cut into small serving pieces; thawed and patted dry'
  - '200 g flat green beans, trimmed and cut into short lengths'
  - '2 ripe tomatoes, grated on the coarse side of a grater, skins discarded'
  - 3/4 tsp sweet paprika
  - '150 g shelled garrofó beans, fresh or frozen, thawed; not dried beans'
  - >-
    2.6 L water, add 1.2 L first to mark the rice-cooking level, then the remaining 1.4 L for the
    meat broth
  - '32 saffron strands, crushed'
  - 'kosher salt, to taste; the regional source suggests about 28 g for this four-person batch'
  - >-
    400 g Spanish round white rice of the Senia/Bahía type, dry; use the stated variety for this
    liquid level and cooking schedule
  - 'additional boiling water, as needed to restore the marked broth level or finish hard rice'
servings: 4 portions
learning:
  focus: 'Build a meat-and-bean broth in the pan, then cook a thin, even rice layer without stirring.'
  outcome: 'Tender chicken and rabbit with dry, separate rice that carries the broth’s flavor.'
  techniques:
    - starch
    - temperature
  before:
    - >-
      Use thawed, small bone-in meat pieces and fresh or frozen shelled garrofó, not uncooked dried
      beans.
    - >-
      The main route uses Senia/Bahía-type round white rice. Bomba and Albufera behave differently;
      do not assume that a rice substitution shares this liquid level and finish time.
    - >-
      Use the specified wide pan and an evenly matched heat source. Keep this recipe to one pan’s
      four portions.
    - >-
      Measure the two stages of water separately: the first establishes the broth level needed when
      rice goes in; the second boils away while the meat cooks.
  checkpoints:
    - step: 4
      cue: 'The tomato is thick and no longer watery; the paprika smells sweet, not burnt.'
      why: The sofrito concentrates before water is added.
    - step: 5
      cue: >-
        Broth is back at the mark, beans are tender, chicken is at least 165°F and rabbit is at
        least 160°F.
      why: >-
        Evaporation and meat doneness are separate requirements; satisfy both before adding the
        rice.
    - step: 7
      cue: 'Center and edge grains have no chalky core, and no broth pools in the pan.'
      why: A finished dry surface alone cannot establish an evenly cooked rice bed.
  troubleshooting:
    - problem: The center rice cooks while the perimeter stays hard.
      cause: The heat source is too narrow or uneven for the pan.
      fix: >-
        Use a matched wide heat source and keep the pan level. Move heat toward the undercooked area
        without stirring; add only enough boiling water there to finish the grains.
    - problem: The broth reaches the mark before the meat is cooked.
      cause: Evaporation is faster than the meat’s cooking rate.
      fix: >-
        Add boiling water to restore liquid and keep simmering until the measured meat endpoints are
        reached; then return to the mark before adding rice.
    - problem: The rice is hard after the pan looks dry.
      cause: The heat was too fierce or this rice needs more liquid.
      fix: >-
        Add small amounts of boiling water across the hard areas and lower the heat. Finish the rice
        before attempting any toasted underside.
  substitutions:
    - ingredient: Fresh or frozen garrofó
      alternative: 'The same 150 g of fully cooked, drained large white butter beans'
      effect: >-
        A disclosed availability adaptation with softer beans. Establish the broth mark and reduce
        to it without the cooked beans, then add them with the rice. Their displacement raises the
        observed liquid level; do not reduce back to the former mark after adding them. Do not
        substitute dry uncooked beans.
  storage: >-
    Divide leftovers into shallow containers and refrigerate at 40°F or below within 2 hours, or
    within 1 hour above 90°F. Use within 3–4 days of cooking, or freeze promptly. Reheat to 165°F
    throughout, adding a little water to keep the rice from drying. Reheated rice will be softer and
    will not retain the first serving’s crisp underside.
  timing: >-
    Allow about 25–35 minutes to prepare ingredients and set up, then 75–115 minutes to brown,
    reduce the sofrito, simmer the meat broth, cook the rice and rest for 5 minutes. The active work
    is mainly preparation and browning; stay nearby during rice cooking to control the heat. Broth
    reduction depends on wind, pan and heat, so the level mark and meat/rice endpoints govern the
    clock. More complete pans require more equipment or sequential batches.
  sources:
    - title: 'Turisme Comunitat Valenciana — Paella Valenciana, complete four-person formula'
      url: >-
        https://multimedia.comunitatvalenciana.com/02DE7ACEB70B406FB083C79314A85B50/doc/7791B45ACAB1455ABAB179442017C123/Paella_Valenciana_EN.pdf
    - title: València Turisme — measured garrofó and chicken/rabbit tradition
      url: 'https://turisme.dival.es/receta/paella-valenciana/'
    - title: DOP Arròs de València — rice varieties and behavior
      url: 'https://www.arrozdevalencia.org/sobre-nosotros/'
    - title: 'La Fallera — complete paella method, rice endpoints and hot-liquid rescue'
      url: 'https://www.lafallera.es/recetas/paella-valenciana/'
    - title: USDA FSIS — Rabbit from Farm to Table
      url: >-
        https://www.govinfo.gov/content/pkg/GOVPUB-A110-PURL-gpo5193/pdf/GOVPUB-A110-PURL-gpo5193.pdf
    - title: FDA — Safe Food Handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Valencian paella builds its broth from chicken, rabbit and beans in the same broad pan that cooks the rice. Browning and reducing the tomato happen first; after the rice is spread, leave it still. The shallow layer and even heat matter more than chasing a dark crust. Use the stated rice variety and watch the grains as closely as the liquid.

## Directions

1. **Set up the pan and ingredients:** Use a level 42–45 cm traditional shallow paella pan over a matched gas ring or another heat source that heats the whole rice bed evenly. Follow the burner’s indoor/outdoor rating. This is one four-portion pan: a small stove burner under this wide pan leaves the edges undercooked. Prepare the meat, beans and grated tomatoes before starting. Have a heatproof way to mark the liquid level, a kettle and a food thermometer ready. Keep the raw meat separate from the vegetables and finished food.
2. **Brown the chicken and rabbit:** Start with extra-virgin olive oil, bone-in chicken pieces, and bone-in rabbit pieces. Warm the oil over medium heat, then add the chicken and rabbit in a loose single layer. Turn as each surface browns, letting the meat color without scorching the pan; allow roughly 20–30 minutes. Use batches if necessary, retaining all the meat and oil. Browning is the start of cooking, not the final meat endpoint.
3. **Cook the green beans:** Add flat green beans and turn them in the oil for about 3–5 minutes, until their color brightens and they begin to soften. Move the meat and beans toward the perimeter to leave room for the tomato in the middle.
4. **Reduce the tomato without burning the paprika:** Use ripe tomatoes and sweet paprika for the sofrito. Lower the heat. Stir the paprika into the oil briefly, then immediately add the tomatoes. Cook the tomato until its loose water has evaporated and the mixture is thick, roughly 5–10 minutes. Stir this mixture as needed; if the paprika catches before the tomato is added, its bitterness will carry into the rice.
5. **Mark the broth level, then simmer the meat:** Use shelled garrofó beans, water, and kosher salt in stages. For this four-portion pan, add the garrofó, then pour in 1.2 L of the water first and mark that liquid level on a clean metal utensil held consistently in the pan. Add the remaining 1.4 L. Add the salt gradually; it will become more concentrated as the broth reduces. Simmer uncovered until the broth returns to the mark, the beans are tender and the meat is cooked through, allowing roughly 25–45 minutes. Probe several thick chicken pieces away from bone for at least 165°F and rabbit pieces for at least 160°F. If the broth reaches the mark first, replenish with boiling water and continue until those endpoints are met. If the meat finishes first, continue reducing to the mark. Taste a cooled spoonful: the broth should be well seasoned, without a harsh salt taste.
6. **Add the saffron:** Put saffron strands in a small heatproof cup and dissolve it in a few spoonfuls of hot broth taken from the pan. Return the whole infusion to the pan; it adds no extra unmeasured liquid. Bring the broth back to a lively, even boil.
7. **Spread the rice, then leave it still:** Have Spanish round white rice of the Senia/Bahía type and additional boiling water ready. Scatter the rice evenly into the boiling broth and spread it once so no mound remains. Cook uncovered at a lively boil for about 5 minutes, at medium heat for about 5 minutes, then at low heat for about 5–8 minutes. Keep the heat even across the pan and do not stir after distributing the rice. Start tasting a few grains from both center and edge around 15 minutes: they should be tender with a slight firmness and no chalky core, while the pan has no loose broth. If the liquid disappears while the grains remain hard, add a little of the boiling water over the dry areas and continue gently; do not fry hard rice to make a crust. These are checkpoints, not a guaranteed finish time.
8. **Rest briefly and serve from the pan:** Take the pan off the heat when the rice is cooked and the broth has been absorbed. A faint toasted smell and gentle crackle can signal socarrat underneath; an acrid smell or dark smoke means remove the pan immediately. A crust is optional, not a reason to burn otherwise finished rice. Rest away from the heat for about 5 minutes, then serve, sharing both meat and rice among the four portions. Keep the rice layer undisturbed until serving.
