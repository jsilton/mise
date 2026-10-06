---
miseId: 0e836106-b66e-41e1-a992-259a924914cf
title: Whiskey Sour
prepTime: About 5 min
cookTime: 0 min
totalTime: About 5 min
servings: 1 portion
role: drink
vibe: technical
difficulty: easy
cuisines:
  - American
occasions:
  - entertaining
  - light-and-fresh
seasons:
  - year-round
  - summer
flavorProfile:
  - sweet
  - acidic
  - rich
nutritionalDensity: light
leftovers: poor
equipment:
  - cocktail-shaker
  - strainer
  - rocks-glass-or-coupe
  - jigger
cookingMethods:
  - no-cook
pairsWith:
  - apple-cider-cream-pie
  - apple-pie
  - avocado-kale-caesar-salad
  - blackout-chocolate-cake
ingredients:
  - '--- Whiskey sour ---'
  - 2 oz bourbon or rye whiskey
  - 3/4 oz fresh lemon juice
  - 1/2 oz simple syrup
  - '1/2 oz pasteurized egg white, optional'
  - 'ice cubes, as needed for shaking'
  - '--- Serving ---'
  - >-
    fresh ice cubes, as needed for a rocks serving; omit for serving up,
    optional
  - 'aromatic bitters, a few drops for garnish, optional'
  - 'maraschino cherry, one per full serving, optional'
  - 'orange slice, one per full serving, optional'
  - '1/2 oz red wine, optional'
origin: United States
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: sour
      name: Whiskey sour
      ingredients:
        - id: whiskey
          key: whiskey
          name: bourbon or rye whiskey
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: lemon
          key: lemon
          name: fresh lemon juice
          quantity:
            amount: 3/4
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: syrup
          key: syrup
          name: simple syrup
          quantity:
            amount: 1/2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: white
          key: white
          name: pasteurized egg white
          quantity:
            amount: 1/2
            unit: oz
          optional: true
          uses:
            - step: mix
              share: 1
        - id: mix-ice
          key: mix-ice
          name: ice cubes
          allowance: as needed for shaking
          role: discarded
          uses:
            - step: shake
              share: 1
    - id: serve
      name: Serving
      ingredients:
        - id: serve-ice
          key: serve-ice
          name: fresh ice cubes
          allowance: as needed for a rocks serving; omit for serving up
          optional: true
          uses:
            - step: strain
              share: 1
        - id: bitters
          key: bitters
          name: aromatic bitters
          allowance: a few drops for garnish
          optional: true
          uses:
            - step: garnish
              share: 1
        - id: cherry
          key: cherry
          name: maraschino cherry
          allowance: one per full serving
          optional: true
          uses:
            - step: garnish
              share: 1
        - id: orange
          key: orange
          name: orange slice
          allowance: one per full serving
          optional: true
          uses:
            - step: garnish
              share: 1
        - id: wine
          key: wine
          name: red wine
          quantity:
            amount: 1/2
            unit: oz
          optional: true
          uses:
            - step: wine
              share: 1
  steps:
    - id: prep
      title: Prepare safely
      text: >-
        Chill a rocks glass or coupe while measuring. Use pasteurized egg white
        if including it, or omit it; shaking, lemon juice and whiskey do not
        make untreated raw egg safe. Keep the egg product refrigerated and
        follow its opened-package instructions.
    - id: mix
      title: Combine the still ingredients
      text: >-
        Add {{ingredients}} to a shaker without ice. If using white, close
        securely and dry-shake about 10–15 seconds as a first check to
        incorporate it and form foam. If omitting white, skip this dry shake.
    - id: shake
      title: Chill with ice
      text: >-
        Add {{ingredients}} and shake about 10–15 seconds as a first check,
        until well chilled. Leave room for ice to move; starting temperature and
        ice change the duration. Use separate small loads when scaling rather
        than pack the shaker.
    - id: strain
      title: Choose rocks or up
      text: >-
        Use {{ingredients}} only for a rocks serving. Strain the drink into the
        chilled glass over fresh ice, or into a chilled coupe without serving
        ice. The original single-portion still base is 3¼ fluid ounces without
        white, or 3¾ with it, before dilution; choose a glass with room for the
        resulting drink and foam.
    - id: garnish
      title: Finish
      text: >-
        Use {{ingredients}} if wanted. If white formed a foam cap, put the
        optional bitters drops on top and draw a clean cocktail pick through
        them. The optional cherry and orange slice can finish either version.
        Serve promptly unless adding the separate wine-float variation.
    - id: wine
      title: Optional New York Sour finish
      text: >-
        For the New York Sour variation, use {{ingredients}}: gently pour the
        measured red wine over the back of a spoon onto the finished sour as a
        float. Omit it for the main Whiskey Sour. Do not add this wine to the
        shaker.
learning:
  focus: 'Separate optional white, chilling ice and a wine-float variation'
  outcome: >-
    A chilled whiskey sour with balanced citrus and sweetness, with white foam
    only when the optional white is used.
  techniques:
    - temperature
  before:
    - >-
      Use pasteurized egg white if including it, or omit it; shaking, lemon
      juice and whiskey do not make untreated raw egg safe.
    - >-
      Use one consistent simple-syrup concentration at the listed amount; a
      stronger or weaker syrup changes sweetness.
    - >-
      Use shaker loads with room for ice and foam, keeping the listed whiskey,
      lemon, syrup and optional white in proportion. Extra loads need more
      active time. Divide the chilled sour among enough glasses, and add
      optional garnishes and wine after straining.
  checkpoints:
    - step: 2
      cue: 'White, if selected, is incorporated before ice is added.'
      why: >-
        The no-ice stage is for foaming the optional white; it is not a
        sanitizing step.
    - step: 4
      cue: The full drink fits with room for foam and any serving ice.
      why: Predilution arithmetic is not a measured final volume.
    - step: 6
      cue: Wine remains a separate optional float rather than entering the shake.
      why: >-
        Adding wine after straining preserves a separate layer on the finished
        sour.
  troubleshooting:
    - problem: Little foam forms
      cause: 'White was omitted, its product foams poorly or shaker room was limited.'
      fix: >-
        Check the pasteurized product and shaker load; do not replace it with
        untreated raw white to chase foam.
  substitutions:
    - ingredient: Optional pasteurized egg white
      alternative: Omit it
      effect: >-
        Keeps the whiskey, lemon and syrup amounts, with a lighter texture and
        no white foam.
    - ingredient: Bourbon
      alternative: The listed rye option
      effect: Changes whiskey character while retaining the same measure.
  timing: >-
    About five minutes with syrup and cold ingredients ready. Glass chilling
    overlaps measuring; separate loads take longer. The two shaking ranges are
    first checks, not exact dilution or temperature guarantees.
  storage: >-
    Prepare near serving and keep pasteurized egg product refrigerated according
    to its label. Serve the foamed drink promptly and use clean utensils around
    egg-containing liquid.
  sources:
    - title: Dave Arnold — instrumented ice and dilution experiments
      url: 'https://www.cookingissues.com/index.html%3Fp=4585.html'
    - title: FDA — What You Need to Know About Egg Safety
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety
    - title: 'IBA — Whiskey Sour method, different formula'
      url: 'https://iba-world.com/iba-cocktail/whiskey-sour/'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Whiskey, fresh lemon and simple syrup are the core of this sour. Optional pasteurized white gives foam and a softer texture; it does not change the whiskey-to-citrus ratio. Dry-shake only when using white, then shake with ice and choose a fresh-ice rocks glass or an up serving. The separate wine float makes the New York Sour variation.

## Directions

1. **Prepare safely:** Chill a rocks glass or coupe while measuring. Use pasteurized egg white if including it, or omit it; shaking, lemon juice and whiskey do not make untreated raw egg safe. Keep the egg product refrigerated and follow its opened-package instructions.
2. **Combine the still ingredients:** Add bourbon or rye whiskey, fresh lemon juice, simple syrup, and pasteurized egg white (if using) to a shaker without ice. If using white, close securely and dry-shake about 10–15 seconds as a first check to incorporate it and form foam. If omitting white, skip this dry shake.
3. **Chill with ice:** Add ice cubes and shake about 10–15 seconds as a first check, until well chilled. Leave room for ice to move; starting temperature and ice change the duration. Use separate small loads when scaling rather than pack the shaker.
4. **Choose rocks or up:** Use fresh ice cubes (if using) only for a rocks serving. Strain the drink into the chilled glass over fresh ice, or into a chilled coupe without serving ice. The original single-portion still base is 3¼ fluid ounces without white, or 3¾ with it, before dilution; choose a glass with room for the resulting drink and foam.
5. **Finish:** Use aromatic bitters (if using), maraschino cherry (if using), and orange slice (if using) if wanted. If white formed a foam cap, put the optional bitters drops on top and draw a clean cocktail pick through them. The optional cherry and orange slice can finish either version. Serve promptly unless adding the separate wine-float variation.
6. **Optional New York Sour finish:** For the New York Sour variation, use red wine (if using): gently pour the measured red wine over the back of a spoon onto the finished sour as a float. Omit it for the main Whiskey Sour. Do not add this wine to the shaker.
