---
miseId: a8bd378a-c545-4ded-af3d-ef50e9ed124a
title: Ragù alla Bolognese
difficulty: intermediate
cookingMethods:
  - saute
  - simmer
occasions:
  - comfort-food
  - weekend-project
  - meal-prep
flavorProfile:
  - savory
  - umami
  - rich
cuisines:
  - Italian
role: base
vibe: comfort
prepTime: 20–30 min
cookTime: 2 hr 30 min–3 hr 30 min
totalTime: 3–4 hr
servings: 6 portions
pairsWith:
  - fresh-pasta-dough
  - fresh-egg-pasta
  - garlic-bread
ingredients:
  - '--- Ragù ---'
  - >-
    400 g coarsely ground beef, from chuck, shoulder or another collagen-rich
    cut
  - '150 g fresh pork belly, uncured and unsmoked; finely chop or coarsely grind'
  - '60 g onion, peeled weight; finely chop by knife'
  - '60 g carrot, peeled weight; finely chop by knife'
  - '60 g celery, trimmed weight; finely chop by knife'
  - 1/2 cup dry red or white wine
  - 200 g plain tomato passata
  - 1 tbsp double-concentrated tomato paste
  - 3 tbsp extra-virgin olive oil
  - 1 cup hot light low-salt meat or vegetable broth
  - 1/2 cup whole milk
  - >-
    additional hot light low-salt meat or vegetable broth, as needed to keep the
    simmer moist
  - 'salt, to taste'
  - 'freshly ground black pepper, to taste'
  - '--- To serve, if desired ---'
  - 'cooked egg tagliatelle, to serve, optional'
  - 'reserved hot pasta cooking water, as needed when tossing, optional'
  - 'freshly grated Parmigiano-Reggiano, to taste, optional'
origin: Italy
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: excellent
source: 'Adapted from Accademia Italiana della Cucina, 2023 Bologna recipe'
sourceUrl: >-
  https://www.accademiaitalianadellacucina.it/sites/default/files/Rag%C3%B9%20alla%20bolognese%20-%20ricetta%20aggiornata%2020%20aprile%202023.pdf
advancePrep:
  - make-ahead-sauce
equipment:
  - heavy-casserole-with-lid
  - wooden-spoon
  - kitchen-scale
  - food-thermometer
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: ragu
      name: Ragù
      ingredients:
        - id: beef
          key: coarsely-ground-beef-chuck
          name: coarsely ground beef
          quantity:
            amount: 400
            unit: g
          preparation: 'from chuck, shoulder or another collagen-rich cut'
          uses:
            - step: beef
              share: 1
        - id: pancetta
          key: fresh-pork-belly-unsmoked
          name: fresh pork belly
          quantity:
            amount: 150
            unit: g
          preparation: uncured and unsmoked; finely chop or coarsely grind
          uses:
            - step: render
              share: 1
        - id: onion
          key: yellow-onion
          name: onion
          quantity:
            amount: 60
            unit: g
          preparation: peeled weight; finely chop by knife
          uses:
            - step: soffritto
              share: 1
        - id: carrot
          key: carrot
          name: carrot
          quantity:
            amount: 60
            unit: g
          preparation: peeled weight; finely chop by knife
          uses:
            - step: soffritto
              share: 1
        - id: celery
          key: celery
          name: celery
          quantity:
            amount: 60
            unit: g
          preparation: trimmed weight; finely chop by knife
          uses:
            - step: soffritto
              share: 1
        - id: wine
          key: dry-wine
          name: dry red or white wine
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: wine
              share: 1
        - id: passata
          key: plain-tomato-passata
          name: plain tomato passata
          quantity:
            amount: 200
            unit: g
          uses:
            - step: tomato
              share: 1
        - id: paste
          key: double-concentrated-tomato-paste
          name: double-concentrated tomato paste
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: tomato
              share: 1
        - id: oil
          key: extra-virgin-olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: render
              share: 1
        - id: broth
          key: light-low-salt-broth
          name: hot light low-salt meat or vegetable broth
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: tomato
              share: 1
        - id: milk
          key: whole-milk
          name: whole milk
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: extra-broth
          key: light-low-salt-broth
          name: additional hot light low-salt meat or vegetable broth
          allowance: as needed to keep the simmer moist
          uses:
            - step: simmer
              share: 1
        - id: salt
          key: salt
          name: salt
          allowance: to taste
          uses:
            - step: season
              share: 1
        - id: pepper
          key: black-pepper
          name: freshly ground black pepper
          allowance: to taste
          uses:
            - step: season
              share: 1
    - id: serve
      name: 'To serve, if desired'
      ingredients:
        - id: tagliatelle
          key: cooked-egg-tagliatelle
          name: cooked egg tagliatelle
          allowance: to serve
          optional: true
          uses:
            - step: serve
              share: 1
        - id: water
          key: reserved-pasta-cooking-water
          name: reserved hot pasta cooking water
          allowance: as needed when tossing
          optional: true
          role: cooking-water
          uses:
            - step: serve
              share: 1
        - id: cheese
          key: parmigiano-reggiano
          name: freshly grated Parmigiano-Reggiano
          allowance: to taste
          optional: true
          role: garnish
          uses:
            - step: serve
              share: 1
  steps:
    - id: prep
      title: Prepare the ingredients
      text: >-
        Use a heavy casserole with a lid; the original batch calls for a 24–26
        cm pan. Weigh the vegetables after peeling or trimming, then finely chop
        them with a knife. Finely chop or coarsely grind {{name:ragu.pancetta}}.
        Have the listed broth hot before it is needed. For a larger or smaller
        batch, choose a pot that holds the full load comfortably and can
        maintain a gentle simmer; pan dimensions and cooking time do not
        multiply with ingredients.
    - id: render
      title: Render the pancetta
      text: >-
        Put {{ingredients}} in the casserole. Heat gently, stirring, until the
        pork releases fat. Keep the fat from smoking.
    - id: soffritto
      title: Soften the vegetables
      text: >-
        Add {{ingredients}}. Cook over low to medium-low heat, stirring often,
        until softened. Lower the heat if the onion starts catching or
        darkening; it must not burn.
    - id: beef
      title: Cook the beef
      text: >-
        Raise the heat to medium and add {{ingredients}}. Break up the meat and
        stir for about 10 minutes, until released moisture has reduced and the
        meat sizzles and begins to brown. Reduce the heat if the vegetables
        catch. Verify the ground meat reaches 160°F / 71°C with a food
        thermometer before tasting; color alone does not establish safety.
    - id: wine
      title: Reduce the wine
      text: >-
        Add {{ingredients}} and stir to loosen any browned residue. Let the wine
        reduce over medium heat until no separate wine liquid remains and the
        raw wine aroma has faded.
    - id: tomato
      title: Start the covered simmer
      text: >-
        Stir in {{ingredients}}, mixing thoroughly. Bring to a gentle simmer,
        then lower the heat and cover. Start counting the long simmer now.
    - id: simmer
      title: Simmer gently and add milk halfway
      text: >-
        Allow 2–3 hours total for the covered simmer, using {{ingredients}}
        during this stage. Add extra hot broth only when needed to prevent the
        ragù from drying or catching, and stir periodically along the bottom.
        Stir in all the listed milk halfway through the chosen simmering time;
        it belongs within the same 2–3-hour simmer. Continue gently until the
        meat is tender, the milk has cooked into the sauce and the ragù is
        glossy and coats the meat, without a separate pool of watery liquid. If
        the meat is tender but the sauce is loose, finish uncovered with gentle
        stirring until it coats; if the bottom starts catching, lower the heat
        and add a little hot broth. Judge tenderness and texture rather than
        forcing a particular color.
    - id: season
      title: Season the finished ragù
      text: >-
        Add {{ingredients}} to taste after reduction. Broth and cured pancetta,
        if used, affect the salt level, so adjust at the end. Divide into the
        desired sauce portions; the original formula serves six, without an
        established cup yield.
    - id: serve
      title: Serve with pasta if desired
      text: >-
        For a pasta serving, use {{ingredients}}. Toss the cooked tagliatelle
        with hot ragù, adding just enough reserved pasta water to loosen it so
        the sauce coats the ribbons. Add the grated cheese to taste. Pasta and
        cheese quantities depend on the meal being served; they are not part of
        the six-portion sauce yield.
learning:
  focus: Build a tender meat ragù through gentle simmering and controlled reduction.
  outcome: >-
    Tender meat in a glossy sauce that coats it, with softened vegetables and no
    separate pool of watery liquid.
  techniques:
    - browning
    - braising
    - seasoning
    - temperature
  before:
    - >-
      For the original batch, choose a heavy 24–26 cm casserole with a lid. Use
      a larger or smaller suitable pot for a changed batch; keep a gentle simmer
      and judge moisture rather than multiplying cooking time.
    - >-
      Weigh vegetables after peeling and trimming; finely chop by knife. Choose
      coarsely ground chuck, shoulder or another collagen-rich beef cut and
      unsmoked pork belly.
    - >-
      Have the measured initial broth and additional broth hot. Select dry red
      or white wine; the main method includes whole milk halfway through the
      long simmer.
    - >-
      Keep raw-meat equipment separate from food ready to eat. Have a food
      thermometer ready and do not taste until the ground meat reaches 160°F /
      71°C.
  checkpoints:
    - step: 3
      cue: Vegetables are soft without scorched onion or acrid aromas.
      why: >-
        Gentle softening builds the base without bitterness that a long simmer
        cannot remove.
    - step: 4
      cue: >-
        Released meat moisture has reduced and the meat sizzles; the ground meat
        reaches 160°F / 71°C before tasting.
      why: >-
        The sizzle marks the change from a wet pan to browning; the thermometer
        establishes safety separately from color.
    - step: 5
      cue: No separate wine liquid remains and its raw aroma has faded.
      why: >-
        Reducing the wine before adding the tomato keeps that stage distinct
        from the long simmer.
    - step: 7
      cue: >-
        Milk goes in halfway through the same 2–3-hour covered simmer; the
        finished meat is tender and coated by glossy ragù.
      why: >-
        The milk is a stage within the slow cook. Tenderness and texture
        determine readiness more reliably than a fixed color or the shortest
        time.
  troubleshooting:
    - problem: The meat cooks in pooled liquid and does not sizzle.
      cause: >-
        The pan has cooled under the meat load or the released moisture has not
        reduced.
      fix: >-
        Keep stirring over medium heat until the excess liquid reduces; avoid
        raising the heat enough to scorch the vegetables. For a larger batch,
        use an appropriately sized pot.
    - problem: The sauce catches before the meat is tender.
      cause: The simmer is too vigorous or evaporation has left too little moisture.
      fix: >-
        Lower the heat, add a little hot broth and stir along the bottom. Keep
        the lid on for the long gentle simmer. Do not scrape black burnt residue
        into the ragù.
    - problem: The finished ragù has a separate pool of watery liquid.
      cause: The meat has softened before the liquid has reduced enough.
      fix: >-
        Finish gently uncovered, stirring, until the sauce coats the meat. Do
        not add flour to force the texture.
    - problem: The ragù is too salty after reduction.
      cause: Salted broth or cured pancetta became concentrated.
      fix: >-
        Stop adding salt. Use low-salt broth from the start and season at the
        end; do not promise that a garnish will remove dissolved salt.
  substitutions:
    - ingredient: Fresh unsmoked pork belly
      alternative: Use the same listed weight of unsmoked cured pancetta.
      effect: >-
        The Academy permits cured pancetta; it adds salt, so choose low-salt
        broth and season the finished ragù cautiously. Smoked bacon or pancetta
        changes the intended flavor.
    - ingredient: Dry red wine
      alternative: Use dry white wine in the same listed amount.
      effect: >-
        Both are specified by the Academy; the wine flavor changes while the
        reduction stage stays the same.
    - ingredient: Whole milk
      alternative: >-
        Omit the milk for the Academy’s milk-free option; add no compensating
        milk substitute.
      effect: >-
        Skip the halfway milk addition, keep the same gentle simmer and add hot
        broth only as moisture requires. The sauce loses the milk’s
        contribution; no dairy-free claim applies if cheese is served.
    - ingredient: Light meat broth
      alternative: >-
        Use light low-salt vegetable broth in the same measured initial amount,
        with additional hot broth as needed.
      effect: >-
        The Academy allows either broth; the background flavor changes. Check
        ingredients if dietary or allergen restrictions matter.
  timing: >-
    Plan 20–30 minutes preparation and 2½–3½ hours cooking, about 3–4 hours
    total with 45–60 minutes active work. The covered ragù simmer alone takes
    2–3 hours; milk enters halfway within that interval. Chop and measure before
    rendering, heat broth alongside the earlier stages, and stir/check moisture
    during the simmer. Final uncovered reduction or unusually slow meat
    tenderness can extend cooking. Pasta cooking, fresh-pasta preparation,
    cooling and later reheating are additional service or storage work.
  storage: >-
    Divide cooked ragù into shallow containers and refrigerate promptly at 40°F
    / 4°C or below within 2 hours of cooking, or within 1 hour above 90°F /
    32°C; do not leave the whole pot on the counter to cool fully. Use
    refrigerated meat sauce within 3–4 days or freeze portions for longer
    storage. Thaw in the refrigerator. Reheat leftovers to 165°F / 74°C
    throughout, stirring and checking with a thermometer, and bring the sauce to
    a boil; add a little broth or water if needed during reheating. Cooling and
    reheating do not extend the original refrigerator storage interval.
  sources:
    - title: >-
        Accademia Italiana della Cucina — Ragù alla bolognese, Italian 2023
        recipe
      url: >-
        https://www.accademiaitalianadellacucina.it/sites/default/files/Rag%C3%B9%20alla%20bolognese%20-%20ricetta%20aggiornata%2020%20aprile%202023.pdf
    - title: >-
        Accademia Italiana della Cucina — Ragù alla bolognese, English 2023
        recipe
      url: >-
        https://accademia1953.it/sites/default/files/Rag%C3%B9%20alla%20bolognese%20-%20updated%20recipe_20%20April%202023.pdf
    - title: FDA — Safe Food Handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: FoodSafety.gov — Safe Minimum Internal Temperatures
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: FoodSafety.gov — Cold Food Storage Chart
      url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts'
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Bologna’s ragù is a slowly cooked meat sauce with finely chopped vegetables and restrained tomato. This version follows the Accademia Italiana della Cucina’s 2023 recipe, using beef, unsmoked pancetta and whole milk. Keep the simmer gentle and judge the finished sauce by tender meat and a glossy coating.

## Directions

1. **Prepare the ingredients:** Use a heavy casserole with a lid; the original batch calls for a 24–26 cm pan. Weigh the vegetables after peeling or trimming, then finely chop them with a knife. Finely chop or coarsely grind fresh pork belly. Have the listed broth hot before it is needed. For a larger or smaller batch, choose a pot that holds the full load comfortably and can maintain a gentle simmer; pan dimensions and cooking time do not multiply with ingredients.
2. **Render the pancetta:** Put fresh pork belly and extra-virgin olive oil in the casserole. Heat gently, stirring, until the pork releases fat. Keep the fat from smoking.
3. **Soften the vegetables:** Add onion, carrot, and celery. Cook over low to medium-low heat, stirring often, until softened. Lower the heat if the onion starts catching or darkening; it must not burn.
4. **Cook the beef:** Raise the heat to medium and add coarsely ground beef. Break up the meat and stir for about 10 minutes, until released moisture has reduced and the meat sizzles and begins to brown. Reduce the heat if the vegetables catch. Verify the ground meat reaches 160°F / 71°C with a food thermometer before tasting; color alone does not establish safety.
5. **Reduce the wine:** Add dry red or white wine and stir to loosen any browned residue. Let the wine reduce over medium heat until no separate wine liquid remains and the raw wine aroma has faded.
6. **Start the covered simmer:** Stir in plain tomato passata, double-concentrated tomato paste, and hot light low-salt meat or vegetable broth, mixing thoroughly. Bring to a gentle simmer, then lower the heat and cover. Start counting the long simmer now.
7. **Simmer gently and add milk halfway:** Allow 2–3 hours total for the covered simmer, using whole milk and additional hot light low-salt meat or vegetable broth during this stage. Add extra hot broth only when needed to prevent the ragù from drying or catching, and stir periodically along the bottom. Stir in all the listed milk halfway through the chosen simmering time; it belongs within the same 2–3-hour simmer. Continue gently until the meat is tender, the milk has cooked into the sauce and the ragù is glossy and coats the meat, without a separate pool of watery liquid. If the meat is tender but the sauce is loose, finish uncovered with gentle stirring until it coats; if the bottom starts catching, lower the heat and add a little hot broth. Judge tenderness and texture rather than forcing a particular color.
8. **Season the finished ragù:** Add salt and freshly ground black pepper to taste after reduction. Broth and cured pancetta, if used, affect the salt level, so adjust at the end. Divide into the desired sauce portions; the original formula serves six, without an established cup yield.
9. **Serve with pasta if desired:** For a pasta serving, use cooked egg tagliatelle (if using), reserved hot pasta cooking water (if using), and freshly grated Parmigiano-Reggiano (if using). Toss the cooked tagliatelle with hot ragù, adding just enough reserved pasta water to loosen it so the sauce coats the ribbons. Add the grated cheese to taste. Pasta and cheese quantities depend on the meal being served; they are not part of the six-portion sauce yield.

## Cooking Notes

Weigh onion, carrot and celery after peeling or trimming, and use coarsely ground beef from a collagen-rich cut. Fresh pancetta means uncured, unsmoked pork belly; unsmoked cured pancetta is an allowed alternative and brings additional salt.

The yield is six sauce portions, not six cups. The original batch uses a 24–26 cm covered casserole. Different pot widths, meat cuts and batch sizes change evaporation and the time needed for tenderness; add hot broth as required and follow the texture cues.

For make-ahead service, divide the sauce into shallow containers and refrigerate promptly within two hours, or one hour above 90°F / 32°C. Keep at 40°F / 4°C or below and use within 3–4 days. Reheat to 165°F / 74°C throughout and bring the sauce to a boil, stirring so it heats evenly.
