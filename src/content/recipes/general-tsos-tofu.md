---
miseId: 0f72ea29-7fcd-487b-a44d-99841aaaf100
title: General Tso's Tofu
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
  - boil
dietary:
  - vegetarian
occasions:
  - weeknight
  - quick-lunch
  - meal-prep
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Chinese
role: main
vibe: comfort
prepTime: 15 min
cookTime: 20–35 min
totalTime: '35–55 min, plus any tofu pressing and rice preparation'
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: excellent
equipment:
  - large-skillet
pairsWith:
  - basmati-rice
  - steamed-broccoli
  - garlic-sesame-spinach
ingredients:
  - '--- Tofu and coating ---'
  - '1 lb extra-firm tofu, pressed dry and cut into 1-inch squares'
  - 1 1/2 tbsp honey
  - 2 tsp thin vinegar-based red-pepper hot sauce
  - 1 1/2 tbsp sesame seeds
  - 3 tbsp cornstarch
  - '1/3 cup peanut oil, for shallow frying; part is reused for aromatics'
  - '--- Sauce and vegetables ---'
  - '1 tbsp fresh ginger, minced'
  - '2 garlic cloves, minced'
  - 7 dried Chinese red chilies
  - '1/2 red bell pepper, sliced'
  - '1/2 tbsp Shaoxing wine, optional'
  - 1 cup vegetable stock
  - 2 cups broccoli florets
  - 1 1/2 tbsp light soy sauce
  - 1 tsp dark soy sauce
  - 2 tsp rice vinegar
  - 1/4 tsp salt
  - 1 tbsp granulated sugar
  - 1/2 tsp toasted sesame oil
  - '--- Separate slurry ---'
  - 1 1/2 tbsp cornstarch
  - 1 tbsp cold water
source: Adapted from thewoksoflife.com
sourceUrl: 'https://thewoksoflife.com/general-tsos-tofu/'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: tofu
      name: Tofu and coating
      ingredients:
        - id: tofu
          key: tofu
          name: extra-firm tofu
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: coat
              share: 1
          preparation: pressed dry and cut into 1-inch squares
        - id: honey
          key: honey
          name: honey
          quantity:
            amount: 3/2
            unit: tbsp
          uses:
            - step: coat
              share: 1
        - id: hot-sauce
          key: hot-sauce
          name: thin vinegar-based red-pepper hot sauce
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: coat
              share: 1
        - id: sesame-seeds
          key: sesame-seeds
          name: sesame seeds
          quantity:
            amount: 3/2
            unit: tbsp
          uses:
            - step: coat
              share: 1
        - id: coating-starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: coat
              share: 1
        - id: frying-oil
          key: frying-oil
          name: peanut oil
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: fry
              share: 1
          preparation: for shallow frying; part is reused for aromatics
    - id: sauce
      name: Sauce and vegetables
      ingredients:
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: minced
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: chilies
          key: chilies
          name: dried Chinese red chili
          quantity:
            amount: 7
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: dried Chinese red chilies
        - id: pepper
          key: pepper
          name: red bell pepper
          quantity:
            amount: 1/2
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: red bell peppers
          preparation: sliced
        - id: wine
          key: wine
          name: Shaoxing wine
          quantity:
            amount: 1/2
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          optional: true
        - id: stock
          key: stock
          name: vegetable stock
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: broccoli
          key: broccoli
          name: broccoli florets
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: light-soy
          key: light-soy
          name: light soy sauce
          quantity:
            amount: 3/2
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: dark-soy
          key: dark-soy
          name: dark soy sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: salt
          key: salt
          name: salt
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: sugar
          key: sugar
          name: granulated sugar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: sesame-oil
          key: sesame-oil
          name: toasted sesame oil
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: season
              share: 1
    - id: slurry
      name: Separate slurry
      ingredients:
        - id: starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 3/2
            unit: tbsp
          uses:
            - step: slurry
              share: 1
        - id: water
          key: water
          name: cold water
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: slurry
              share: 1
          role: cooking-water
  steps:
    - id: slurry
      title: Mix the slurry
      text: >-
        Mix {{ingredients}} in a small bowl. Keep this separate from the tofu coating; re-stir just
        before adding it to the sauce.
    - id: coat
      title: Coat the tofu
      text: >-
        For the coating, use {{ingredients}}. Wash and drain the vegetables before cutting. Mix the
        honey and hot sauce, gently toss in the dry tofu, then add all the sesame seeds and coating
        cornstarch. Lift and turn rather than crushing the pieces; aim for a light coating, not a
        pool of wet batter.
    - id: fry
      title: Fry in batches
      text: >-
        Heat {{ingredients}} in a shallow-frying skillet to about 350°F. Carefully add coated tofu
        in a single layer with space between pieces. Fry about 4–5 minutes per original-size round,
        turning once, until golden with a formed crust; lower heat if the coating darkens too
        quickly. Lift to a sheet pan with a slotted spoon. Repeat without crowding, allowing the oil
        to recover its heat.
    - id: aromatics
      title: Cook the aromatics
      text: >-
        Have {{ingredients}} ready. Transfer a portion of the used frying oil to a wok or saucepan:
        3/16 of the listed frying-oil amount, which is 1 tbsp for the original batch. This comes
        from the frying supply, not an additional dose; do not add the remaining frying oil to the
        sauce. Heat over medium and stir the ginger, garlic and chilies about 30 seconds until
        fragrant, without scorching. Add all the bell pepper and optional wine.
    - id: simmer
      title: Cook the broccoli
      text: >-
        Use {{ingredients}} in sequence: bring all the stock to a boil first, then add all the
        broccoli. Keep enough room to turn the vegetables; use additional vessels with the complete
        ingredients divided proportionally for larger batches.
    - id: season
      title: Season and thicken
      text: >-
        Add {{ingredients}} and return the sauce to a boil. Re-stir the separate slurry, then pour
        it in gradually while stirring. Simmer 30–60 seconds after each addition before deciding
        whether more is needed; stop when it coats a spoon and leave any unused slurry out of the
        dish. Continue until a broccoli stem yields with slight resistance.
    - id: finish
      title: Glaze and serve
      text: >-
        Return all the fried tofu to the ready sauce and fold gently about 30 seconds to coat
        without breaking the pieces. Serve promptly over separately prepared rice. Holding glazed
        tofu softens its coating.
learning:
  focus: Keep coating starch separate from sauce slurry
  outcome: >-
    Golden tofu pieces coated just before serving, with tender-crisp broccoli and a spoon-coating
    sauce.
  techniques:
    - starch
    - temperature
  before:
    - >-
      Press tofu ahead if the product needs it; draining, pressing and rice cooking may extend the
      clock. Keep the two starch measures separate.
    - >-
      Choose a pan suitable for shallow frying the listed oil; oil depth depends on pan geometry.
      Work in uncrowded rounds, with all sauce ingredients ready.
  checkpoints:
    - step: 3
      cue: Tofu pieces are separated and the coating is golden rather than blackening.
      why: >-
        Crowding cools the oil and extends the fry; honey-coated pieces can burn before their
        neighbors are ready.
    - step: 6
      cue: >-
        The re-stirred slurry thickens the bubbling sauce before another addition; broccoli stems
        yield with slight resistance.
      why: >-
        Cornstarch settles and needs heat and time to thicken. The full prepared slurry is a maximum
        supply, not a requirement to add all of it.
  troubleshooting:
    - problem: Coating turns dark before a crust forms.
      cause: Oil is too hot or the pieces were left against the pan too long.
      fix: Lower the heat and turn pieces promptly; blackened coating cannot be restored by glazing.
    - problem: Sauce becomes pasty.
      cause: All slurry was added without pausing for thickening.
      fix: >-
        Stop adding slurry. Next time add it gradually; do not force the entire prepared supply into
        the sauce.
  substitutions:
    - ingredient: Extra-firm tofu and coating
      alternative: Regular or firm tofu; 2–3 tbsp coating starch for the original batch
      effect: >-
        Drain and pat dry, then handle gently. The same honey, hot sauce and sesame coating remains;
        start with the lower coating-starch amount and add only until lightly coated, scaling that
        range proportionally. This is separate from the measured slurry.
    - ingredient: Ginger
      alternative: '1/2 tsp minced ginger for the original batch, scaled proportionally'
      effect: >-
        This gives a milder ginger base than the listed tablespoon; all remaining sauce quantities
        and the short aromatic stage stay the same.
    - ingredient: Peanut oil and vegetable stock
      alternative: Same-volume canola oil and water
      effect: >-
        Use oil suitable for frying; retain the same frying supply and its reused aromatic portion.
        Water changes the stock flavor but does not alter the liquid amount.
    - ingredient: Dried chilies
      alternative: Omit the chilies if wanted
      effect: >-
        The original source makes them optional. Keep the rest of the sauce intact; honey-containing
        tofu is not vegan unless a separately chosen sweetener is used.
    - ingredient: Shallow-frying oil supply
      alternative: More-oil deep-frying option
      effect: >-
        For the deep-frying option, use additional suitable frying oil as needed in a vessel
        intended for deep frying, following its fill and operating limits; no volume or universal
        depth is specified here. Keep the coating, about 350°F oil temperature and uncrowded rounds,
        cooking until the pieces are golden with a formed crust. For the aromatics, still take 3/16
        of the listed main frying-oil amount from the used oil, which is 1 tbsp for the original
        batch. Do not calculate this reuse from the larger deep-frying volume or add the remaining
        frying oil to the sauce. Keep the stock, seasonings, slurry and finishing steps unchanged.
  timing: >-
    Allow about 35–55 minutes with dry ready-to-coat tofu: 15–20 minutes preparation and about 20–35
    minutes frying and finishing, depending on the number of pan rounds. Pressing tofu and cooking
    rice are additional; more vessels and oil recovery can extend elapsed time.
  storage: >-
    Refrigerate promptly in shallow containers at 40°F or below, within 2 hours, or 1 hour above
    90°F. Use cooked leftovers within 3–4 days and reheat to 165°F throughout. Bring stored sauce or
    stew to a boil when reheating, stirring so the center heats too; this is separate from the
    first-cook instructions.
  sources:
    - title: Kaitlin Leung — General Tso’s Tofu
      url: 'https://thewoksoflife.com/general-tsos-tofu/'
    - title: FDA — Safe food handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: FDA — Produce preparation
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely'
    - title: USDA FSIS — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

This tofu adaptation brings a Chinese-American takeout sauce to plant-based protein. Coat the dry tofu gently with honey, thin red-pepper hot sauce, sesame seeds and cornstarch, then fry uncrowded pieces before making the glaze. The coating softens once it meets sauce, so finish the broccoli first and return the tofu only when ready to eat. Keep the frying oil separate from the finished dish except for the portion reused for the aromatics.
For kids, serve the heat on the side or reduce or omit the spicy elements.

## Directions

1. **Mix the slurry:** Mix cornstarch and cold water in a small bowl. Keep this separate from the tofu coating; re-stir just before adding it to the sauce.
2. **Coat the tofu:** For the coating, use extra-firm tofu, honey, thin vinegar-based red-pepper hot sauce, sesame seeds, and cornstarch. Wash and drain the vegetables before cutting. Mix the honey and hot sauce, gently toss in the dry tofu, then add all the sesame seeds and coating cornstarch. Lift and turn rather than crushing the pieces; aim for a light coating, not a pool of wet batter.
3. **Fry in batches:** Heat peanut oil in a shallow-frying skillet to about 350°F. Carefully add coated tofu in a single layer with space between pieces. Fry about 4–5 minutes per original-size round, turning once, until golden with a formed crust; lower heat if the coating darkens too quickly. Lift to a sheet pan with a slotted spoon. Repeat without crowding, allowing the oil to recover its heat.
4. **Cook the aromatics:** Have fresh ginger, garlic cloves, dried Chinese red chilies, red bell pepper, and Shaoxing wine (if using) ready. Transfer a portion of the used frying oil to a wok or saucepan: 3/16 of the listed frying-oil amount, which is 1 tbsp for the original batch. This comes from the frying supply, not an additional dose; do not add the remaining frying oil to the sauce. Heat over medium and stir the ginger, garlic and chilies about 30 seconds until fragrant, without scorching. Add all the bell pepper and optional wine.
5. **Cook the broccoli:** Use vegetable stock and broccoli florets in sequence: bring all the stock to a boil first, then add all the broccoli. Keep enough room to turn the vegetables; use additional vessels with the complete ingredients divided proportionally for larger batches.
6. **Season and thicken:** Add light soy sauce, dark soy sauce, rice vinegar, salt, granulated sugar, and toasted sesame oil and return the sauce to a boil. Re-stir the separate slurry, then pour it in gradually while stirring. Simmer 30–60 seconds after each addition before deciding whether more is needed; stop when it coats a spoon and leave any unused slurry out of the dish. Continue until a broccoli stem yields with slight resistance.
7. **Glaze and serve:** Return all the fried tofu to the ready sauce and fold gently about 30 seconds to coat without breaking the pieces. Serve promptly over separately prepared rice. Holding glazed tofu softens its coating.
