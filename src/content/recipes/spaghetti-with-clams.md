---
miseId: 64f3dd7c-8158-421f-b952-d1e416f62833
title: Spaghetti with Clams
difficulty: intermediate
cookingMethods:
  - saute
  - boil
occasions:
  - date-night
  - entertaining
  - weekend-project
seasons:
  - spring
  - summer
  - year-round
nutritionalDensity: moderate
leftovers: poor
equipment:
  - large-skillet
flavorProfile:
  - acidic
  - rich
  - herbaceous
cuisines:
  - Italian
role: main
vibe: quick
prepTime: 10 min
cookTime: 15 min
totalTime: About 30–40 min; purging can add time
servings: 4 portions
pairsWith:
  - garlic-bread
  - avocado-kale-caesar-salad
ingredients:
  - '--- Main recipe ---'
  - 1 lb spaghetti
  - '2 lb live in-shell littleneck clams, scrubbed and rinsed'
  - 1/2 cup dry vermouth
  - 4 tbsp extra-virgin olive oil
  - '4 garlic cloves, minced'
  - 1/2 tsp red pepper flakes
  - '1/4 cup fresh parsley, chopped'
  - 1 tbsp fresh lemon juice
  - 'water, enough to boil the measured pasta'
  - 'salt, to taste in the pasta water'
  - 'salt, to taste after the clams are cooked'
  - 'black pepper, to taste'
  - 'extra-virgin olive oil, as desired for the final drizzle, optional'
  - >-
    extra-virgin olive oil, a small amount if drained pasta must wait for the
    clams, optional
source: Adapted from cooking.nytimes.com
sourceUrl: 'https://cooking.nytimes.com/recipes/11952-spaghetti-with-clams'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: main
      name: Main recipe
      ingredients:
        - id: pasta
          key: spaghetti
          name: spaghetti
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: boil
              share: 1
        - id: clams
          key: littleneck-clams
          name: live in-shell littleneck clams
          quantity:
            amount: 2
            unit: lb
          uses:
            - step: steam
              share: 1
          preparation: scrubbed and rinsed
        - id: vermouth
          key: dry-vermouth
          name: dry vermouth
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: steam
              share: 1
        - id: oil
          key: olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 4
            unit: tbsp
          uses:
            - step: foundation
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 4
            unit: count
          uses:
            - step: foundation
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: flakes
          key: red-pepper-flakes
          name: red pepper flakes
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: foundation
              share: 1
        - id: parsley
          key: parsley
          name: fresh parsley
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: finish
              share: 1/2
            - step: serve
              share: 1/2
          preparation: chopped
        - id: lemon
          key: lemon-juice
          name: fresh lemon juice
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: water
          key: water
          name: water
          uses:
            - step: boil
              share: 1
          allowance: enough to boil the measured pasta
          role: cooking-water
        - id: pasta-salt
          key: salt
          name: salt
          uses:
            - step: boil
              share: 1
          allowance: to taste in the pasta water
          role: cooking-water
        - id: finishing-salt
          key: salt
          name: salt
          uses:
            - step: finish
              share: 1
          allowance: to taste after the clams are cooked
        - id: pepper
          key: black-pepper
          name: black pepper
          uses:
            - step: finish
              share: 1
          allowance: to taste
        - id: drizzle
          key: olive-oil
          name: extra-virgin olive oil
          uses:
            - step: serve
              share: 1
          allowance: as desired for the final drizzle
          optional: true
          role: garnish
        - id: holding-oil
          key: olive-oil
          name: extra-virgin olive oil
          uses:
            - step: hold
              share: 1
          allowance: a small amount if drained pasta must wait for the clams
          optional: true
  steps:
    - id: prep
      title: Clams
      text: >-
        Use live, in-shell clams from a tagged or labeled supplier. Discard
        cracked shells and clams that remain open after tapping. Scrub and rinse
        before cooking; keep them cold. Follow the supplier’s purging advice
        rather than assuming every batch needs a soak. If using the current
        20-minute cold salted-water soak, keep it refrigerated and use the
        supplier’s salt concentration and soaking advice, then drain and rinse.
        The original plain-cold-water soak while the pasta water heats is a
        separate option; neither soak is a cooking or safety endpoint.
    - id: boil
      title: Pasta
      text: >-
        Use {{ingredients}} for this stage. Bring the water, salted to taste, to
        a boil; add the spaghetti and cook until slightly underdone, about 2
        minutes before its package time as a first check. It finishes in the
        clam liquid.
    - id: foundation
      title: Garlic oil
      text: >-
        In a wide skillet or saucepan with a lid and room for the measured
        shells, heat {{ingredients}} over medium-low to medium heat. Cook about
        1 minute until fragrant, keeping the garlic pale. Split the full
        supplies proportionally among enough pans or complete batches if the
        shells or pasta cannot fit.
    - id: steam
      title: Clams
      text: >-
        Add {{ingredients}}. Cover and bring to a brisk simmer, shaking the pan
        gently. Start checking at 2–3 minutes; transfer clams to a clean dish as
        their shells open and continue cooking the remaining clams. Discard any
        that do not open during cooking. Keep the cooking liquid in the pan.
    - id: hold
      title: If pasta finishes first
      text: >-
        Drain the slightly underdone pasta. If it must wait briefly for the
        clams, toss it with {{ingredients}} to limit sticking.
    - id: bind
      title: Finish pasta
      text: >-
        Add the hot drained pasta to the clam liquid. Toss over medium-high
        heat, starting to check after about 1 minute, until the pasta is done to
        taste and coated in the sauce. Return all opened clams and their
        collected liquid to warm through.
    - id: finish
      title: Season
      text: >-
        Off the heat, stir in {{ingredients}}. Taste before adding salt; clam
        liquor is already salty.
    - id: serve
      title: Serve
      text: 'Garnish with {{ingredients}} and serve promptly.'
learning:
  focus: Keep live-shell checks separate from pasta doneness
  outcome: >-
    Opened clams and pasta finished in their cooking liquid, with the full oil
    retained.
  techniques:
    - temperature
  before:
    - >-
      Use live, in-shell clams from a tagged or labeled supplier. Discard
      cracked shells and clams that remain open after tapping. Scrub and rinse
      before cooking; keep them cold. Follow the supplier’s purging advice
      rather than assuming every batch needs a soak.
    - >-
      Choose vessels large enough for the measured shells and for tossing the
      pasta without spilling. For larger batches, divide all supplies
      proportionally among enough pots or complete batches; additional loads
      change elapsed time.
    - >-
      The four portions are the current planning yield. Shell-on pounds do not
      establish edible clam weight, and the original small-batch clam count is
      not a pounds-to-count conversion.
  checkpoints:
    - step: 4
      cue: Clam shells open during cooking; unopened clams are discarded.
      why: >-
        The clock depends on shell size and the pan load. A soak cannot
        establish that clams are cooked.
    - step: 6
      cue: The spaghetti is done to taste and coated in clam liquid.
      why: >-
        It finishes cooking in the pan; fixed tossing minutes cannot replace
        checking the pasta.
  troubleshooting:
    - problem: The pasta is ready before the clams
      cause: 'Pasta shape, clam size and pan loading change the relative clocks.'
      fix: >-
        Drain the pasta slightly underdone and keep it briefly while the clams
        finish. Use the optional holding oil if needed, then finish in the
        cooking liquid; discard unopened clams.
  storage: >-
    Serve promptly. Refrigerate leftovers in shallow containers within 2 hours,
    or 1 hour above 90°F / 32°C, at 40°F / 4°C or below; use within 3–4 days.
    Reheat to 165°F / 74°C throughout, stirring and checking more than one
    place. Further heating can toughen clams and soften pasta.
  timing: >-
    The listed clock is a planning estimate for the original batch, including
    cleaning and bringing pasta water to a boil; supplier-directed purging or
    extra pan loads take additional time. Cook the pasta alongside the shellfish
    preparation.
  sources:
    - title: Spaghetti with clams
      url: 'https://cooking.nytimes.com/recipes/11952-spaghetti-with-clams'
    - title: FDA seafood handling
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely
    - title: USDA leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

This Italian-style spaghetti alle vongole in bianco uses the liquid released by the clams as its sauce. Keep the garlic pale, cook the shells until they open and finish the slightly underdone pasta in that liquid. The current lemon-and-black-pepper finish remains, alongside the vermouth-or-wine small-batch option below.

## Directions

1. **Clams:** Use live, in-shell clams from a tagged or labeled supplier. Discard cracked shells and clams that remain open after tapping. Scrub and rinse before cooking; keep them cold. Follow the supplier’s purging advice rather than assuming every batch needs a soak. If using the current 20-minute cold salted-water soak, keep it refrigerated and use the supplier’s salt concentration and soaking advice, then drain and rinse. The original plain-cold-water soak while the pasta water heats is a separate option; neither soak is a cooking or safety endpoint.
2. **Pasta:** Use spaghetti, water, and salt for this stage. Bring the water, salted to taste, to a boil; add the spaghetti and cook until slightly underdone, about 2 minutes before its package time as a first check. It finishes in the clam liquid.
3. **Garlic oil:** In a wide skillet or saucepan with a lid and room for the measured shells, heat extra-virgin olive oil, garlic cloves, and red pepper flakes over medium-low to medium heat. Cook about 1 minute until fragrant, keeping the garlic pale. Split the full supplies proportionally among enough pans or complete batches if the shells or pasta cannot fit.
4. **Clams:** Add live in-shell littleneck clams and dry vermouth. Cover and bring to a brisk simmer, shaking the pan gently. Start checking at 2–3 minutes; transfer clams to a clean dish as their shells open and continue cooking the remaining clams. Discard any that do not open during cooking. Keep the cooking liquid in the pan.
5. **If pasta finishes first:** Drain the slightly underdone pasta. If it must wait briefly for the clams, toss it with extra-virgin olive oil (if using) to limit sticking.
6. **Finish pasta:** Add the hot drained pasta to the clam liquid. Toss over medium-high heat, starting to check after about 1 minute, until the pasta is done to taste and coated in the sauce. Return all opened clams and their collected liquid to warm through.
7. **Season:** Off the heat, stir in 1/2 of the fresh parsley, fresh lemon juice, salt, and black pepper. Taste before adding salt; clam liquor is already salty.
8. **Serve:** Garnish with 1/2 of the fresh parsley and extra-virgin olive oil (if using) and serve promptly.

## Vermouth-or-wine small batch

For the original single-portion plan, use **¼ lb spaghetti, 8–12 scrubbed small in-shell clams, 2 tbsp extra-virgin olive oil, ½–1 minced garlic clove, ½ dried red chili pepper or ¼ tsp hot red pepper flakes, ⅓ cup Noilly Prat or other vermouth or white wine, and 1–2 tbsp chopped Italian parsley**, with salt as needed for the pasta water. This is a separate full formula; scale all of these supplies together and keep the same live-shell and pan-capacity checks. Its clam count is not an equivalent for the main recipe’s shell-on weight.

Use the plain-cold-water soaking option while bringing the pasta water to a boil. Cook the garlic and chosen chili gently in the full oil, add the wine or vermouth and clams, and collect opened clams as in step 4. If pasta finishes first, drain it slightly underdone and use a small amount of the separate holding oil. Finish the pasta in the clam liquid, covered and gently shaken, starting to check after 1–2 minutes; discard unopened clams. Return the opened clams, add half the parsley and garnish with the remainder. Omit the main recipe’s added lemon and black pepper for this branch. A final drizzle of oil remains an optional current garnish.
