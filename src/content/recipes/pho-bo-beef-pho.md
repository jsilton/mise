---
miseId: 35709b6b-c399-4edf-8eee-48b08b4f64f0
title: Pho Bo (Beef Pho)
difficulty: intermediate
cookingMethods:
  - simmer
  - boil
  - no-cook
dietary:
  - dairy-free
occasions:
  - comfort-food
  - entertaining
flavorProfile:
  - savory
  - herbaceous
  - umami
  - spicy
cuisines:
  - Vietnamese
role: main
vibe: comfort
seasons:
  - fall
  - winter
nutritionalDensity: hearty
leftovers: good
advancePrep:
  - make-ahead
  - components-ahead
  - freeze-ahead
equipment:
  - stockpot
  - sheet-pan
  - fine-mesh-strainer
prepTime: 30 min
cookTime: 4 hr 30 min
totalTime: 5 hr
servings: 6 portions
pairsWith:
  - vietnamese-spring-rolls
pairingNotes:
  vietnamese-spring-rolls: 'Fresh shrimp rolls, the classic pho shop starter.'
ingredients:
  - '5 lb beef marrow and knuckle bones, cut into 3-inch pieces, with oxtail if you have it'
  - '2 lb beef brisket, in one piece'
  - 'cold water, for parboiling'
  - '2 large yellow onions, unpeeled and halved'
  - '1 4-inch piece of fresh ginger, halved lengthwise'
  - 4 whole star anise
  - 1 3-inch Vietnamese cinnamon stick
  - 6 whole cloves
  - 1 tbsp coriander seeds
  - 1 cardamom pod
  - 5 quarts cold water
  - '3 tbsp fish sauce, plus more to taste'
  - 1 tbsp sugar
  - 1 tbsp kosher salt
  - '1 lb dried rice noodles (banh pho), medium width'
  - '1/2 lb eye of round, sliced paper-thin against the grain'
  - 'bean sprouts, for serving'
  - 'fresh Thai basil, for serving'
  - 'fresh cilantro, for serving'
  - 'lime wedges, for serving'
  - 'thinly sliced jalapeños, for serving'
  - 'hoisin sauce, for serving'
  - 'Sriracha, for serving'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: main
      name: Main recipe
      ingredients:
        - id: bones
          key: beef-marrow-bones
          name: beef marrow and knuckle bones
          quantity:
            amount: 5
            unit: lb
          preparation: 'cut into 3-inch pieces, with oxtail if you have it'
          uses:
            - step: parboil
              share: 1
        - id: brisket
          key: beef-brisket
          name: beef brisket
          quantity:
            amount: 2
            unit: lb
          preparation: in one piece
          uses:
            - step: parboil
              share: 1
        - id: parboil-water
          key: water
          name: cold water
          allowance: for parboiling
          role: cooking-water
          uses:
            - step: parboil
              share: 1
        - id: onions
          key: yellow-onion
          name: large yellow onion
          plural: large yellow onions
          quantity:
            amount: 2
            unit: count
          preparation: unpeeled and halved
          uses:
            - step: char
              share: 1
        - id: ginger
          key: ginger
          name: 4-inch piece of fresh ginger
          plural: 4-inch pieces of fresh ginger
          quantity:
            amount: 1
            unit: count
          preparation: halved lengthwise
          uses:
            - step: char
              share: 1
        - id: star-anise
          key: star-anise
          name: whole star anise
          plural: whole star anise
          quantity:
            amount: 4
            unit: count
          uses:
            - step: toast
              share: 1
        - id: cinnamon
          key: cinnamon-stick
          name: 3-inch Vietnamese cinnamon stick
          plural: 3-inch Vietnamese cinnamon sticks
          quantity:
            amount: 1
            unit: count
          uses:
            - step: toast
              share: 1
        - id: cloves
          key: cloves
          name: whole clove
          plural: whole cloves
          quantity:
            amount: 6
            unit: count
          uses:
            - step: toast
              share: 1
        - id: coriander
          key: coriander-seeds
          name: coriander seeds
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: toast
              share: 1
        - id: cardamom
          key: cardamom-pod
          name: cardamom pod
          plural: cardamom pods
          quantity:
            amount: 1
            unit: count
          uses:
            - step: toast
              share: 1
        - id: water
          key: water
          name: cold water
          quantity:
            amount: 5
            unit: quart
          role: cooking-water
          uses:
            - step: broth
              share: 1
        - id: fish-sauce
          key: fish-sauce
          name: fish sauce
          quantity:
            amount: 3
            unit: tbsp
          preparation: plus more to taste
          uses:
            - step: season
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: noodles
          key: banh-pho
          name: dried rice noodles (banh pho)
          quantity:
            amount: 1
            unit: lb
          preparation: medium width
          uses:
            - step: noodles
              share: 1
        - id: eye
          key: beef-eye-round
          name: eye of round
          quantity:
            amount: 1/2
            unit: lb
          preparation: sliced paper-thin against the grain
          uses:
            - step: slice
              share: 1
        - id: sprouts
          key: bean-sprouts
          name: bean sprouts
          allowance: for serving
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: basil
          key: thai-basil
          name: fresh Thai basil
          allowance: for serving
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          allowance: for serving
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: lime
          key: lime
          name: lime wedges
          allowance: for serving
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: jalapeno
          key: jalapeno
          name: thinly sliced jalapeños
          allowance: for serving
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: hoisin
          key: hoisin
          name: hoisin sauce
          allowance: for serving
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: sriracha
          key: sriracha
          name: Sriracha
          allowance: for serving
          role: garnish
          uses:
            - step: serve
              share: 1
  steps:
    - id: parboil
      title: Parboil the bones
      text: >-
        Put {{ingredients}} in a large stockpot. Bring to a hard boil for 10 minutes, then drain.
        Rinse the bones and brisket under cold water and scrub the pot clean. This keeps the broth
        clear.
    - id: char
      title: Char the aromatics
      text: >-
        While the bones boil, set {{ingredients}} cut side up on a sheet pan. Broil on high until
        blackened in spots and softened, 12 to 15 minutes, turning once.
    - id: toast
      title: Toast the spices
      text: >-
        Toast {{ingredients}} in a dry skillet over medium heat, stirring, until fragrant, 2 to 3
        minutes. Tie them in a cheesecloth bundle.
    - id: broth
      title: Simmer the broth
      text: >-
        Return the bones and brisket to the clean pot with {{ingredients}}, the charred onion and
        ginger and the spice bundle. Bring to a boil, then lower the heat to the gentlest simmer,
        with just a few lazy bubbles. Skim the foam for the first 30 minutes. A hard boil makes the
        broth cloudy.
    - id: brisket
      title: Pull the brisket
      text: >-
        After 1 1/2 to 2 hours, when a chopstick slides through the brisket easily, lift it out.
        Plunge it into ice water for 10 minutes to firm it up, then refrigerate it. Keep the bones
        simmering for 2 hours more.
    - id: season
      title: Strain and season
      text: >-
        Strain the broth through a cheesecloth-lined sieve and discard the solids. Stir in
        {{ingredients}}. Taste and add more fish sauce until the broth tastes slightly salty on its
        own, since the noodles and garnishes will dilute it.
    - id: noodles
      title: Soak the noodles
      text: 'Soak {{ingredients}} in warm water until pliable, 20 to 25 minutes, then drain.'
    - id: slice
      title: Slice the beef
      text: >-
        While the noodles soak, slice the cold brisket thinly across the grain. Lay the brisket and
        {{ingredients}} out on a plate, keeping the raw slices apart. Bring the broth to a rolling
        boil.
    - id: cook-noodles
      title: Cook the noodles
      text: >-
        Bring a pot of water to a boil. Cook the soaked noodles until tender, 30 to 60 seconds, then
        drain and divide them among deep bowls.
    - id: serve
      title: Assemble the bowls
      text: >-
        Top the noodles with the brisket and the raw eye of round. Ladle the boiling broth over the
        beef, which cooks the thin slices in seconds. Serve right away with {{ingredients}} on the
        side.
learning:
  techniques:
    - temperature
  substitutions:
    - ingredient: Vietnamese cinnamon stick
      alternative: Regular cinnamon stick
      effect: Milder and less sweet. Use the same size.
    - ingredient: Fresh Thai basil
      alternative: Italian basil
      effect: 'Sweeter and missing the licorice note, but still fresh and fragrant.'
  storage: >-
    The broth keeps 4 days in the fridge and freezes for 3 months. Store the broth, meat and noodles
    separately, and bring the broth to a boil before serving.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Pho bo is Vietnam's beef noodle soup, built on a clear broth scented with charred onion, ginger and toasted star anise. Parboil the bones first and keep the simmer gentle, and the broth stays clear and clean. The raw eye of round goes into the bowl last and cooks in the boiling broth.

## Directions

1. **Parboil the bones:** Put the beef marrow and knuckle bones, beef brisket, and cold water in a large stockpot. Bring to a hard boil for 10 minutes, then drain. Rinse the bones and brisket under cold water and scrub the pot clean. This keeps the broth clear.
2. **Char the aromatics:** While the bones boil, set the yellow onions and ginger cut side up on a sheet pan. Broil on high until blackened in spots and softened, 12 to 15 minutes, turning once.
3. **Toast the spices:** Toast the star anise, 3-inch Vietnamese cinnamon stick, whole cloves, coriander seeds, and cardamom pod in a dry skillet over medium heat, stirring, until fragrant, 2 to 3 minutes. Tie them in a cheesecloth bundle.
4. **Simmer the broth:** Return the bones and brisket to the clean pot with 5 quarts of the cold water, the charred onion and ginger and the spice bundle. Bring to a boil, then lower the heat to the gentlest simmer, with just a few lazy bubbles. Skim the foam for the first 30 minutes. A hard boil makes the broth cloudy.
5. **Pull the brisket:** After 1 1/2 to 2 hours, when a chopstick slides through the brisket easily, lift it out. Plunge it into ice water for 10 minutes to firm it up, then refrigerate it. Keep the bones simmering for 2 hours more.
6. **Strain and season:** Strain the broth through a cheesecloth-lined sieve and discard the solids. Stir in the fish sauce, sugar, and salt. Taste and add more fish sauce until the broth tastes slightly salty on its own, since the noodles and garnishes will dilute it.
7. **Soak the noodles:** Soak the dried rice noodles in warm water until pliable, 20 to 25 minutes, then drain.
8. **Slice the beef:** While the noodles soak, slice the cold brisket thinly across the grain. Lay the brisket and the eye of round out on a plate, keeping the raw slices apart. Bring the broth to a rolling boil.
9. **Cook the noodles:** Bring a pot of water to a boil. Cook the soaked noodles until tender, 30 to 60 seconds, then drain and divide them among deep bowls.
10. **Assemble the bowls:** Top the noodles with the brisket and the raw eye of round. Ladle the boiling broth over the beef, which cooks the thin slices in seconds. Serve right away with the bean sprouts, Thai basil, cilantro, lime wedges, jalapeños, hoisin sauce, and Sriracha on the side.
