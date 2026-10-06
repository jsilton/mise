---
miseId: ce45f7eb-1de2-4a74-8d73-47abe5de6632
title: Beef Pad See Ew
role: main
vibe: technical
difficulty: easy
prepTime: About 15–25 min preparation
cookTime: 'About 15–30 min cooking, depending on batches'
totalTime: 'About 35–60 min with prepared noodles, plus any separate noodle preparation'
servings: 3 portions
cookingMethods:
  - stir-fry
categories: []
source: thewoksoflife.com
ingredients:
  - '--- Steak and marinade ---'
  - '8 oz Flank steak, thinly sliced against the grain'
  - 1 tsp Thai black soy sauce or regular light soy sauce
  - 1 tsp Vegetable oil for the marinade
  - 1 tsp Cornstarch or tapioca starch
  - '--- Sauce ---'
  - 1 tbsp Oyster sauce
  - 1/2 tsp Sugar
  - 2 tsp Thai soy sauce or regular light soy sauce
  - 1 tbsp Thai black soy sauce
  - 1 tsp Fish sauce
  - 'Freshly ground white pepper, to taste'
  - '--- Fresh-noodle pan route ---'
  - 1 lb Fresh wide rice noodles
  - 4 tbsp Vegetable cooking oil
  - '3 Garlic cloves, thinly sliced'
  - >-
    3 cups Chinese broccoli, cut into roughly 2-inch pieces; thick stems sliced
    to cook evenly
  - 'Water, a small splash for steaming broccoli only if needed'
  - '2 Large eggs, lightly beaten'
  - '--- Optional finish ---'
  - 'Chili oil or Chiu Chow sauce, for serving, if desired, optional'
sourceUrl: 'https://thewoksoflife.com/pad-see-ew/'
cuisines:
  - Thai
formula:
  version: 1
  yield:
    amount: 3
    unit: portion
  components:
    - id: marinade
      name: Steak and marinade
      ingredients:
        - id: beef
          key: beef
          name: Flank steak
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: marinate
              share: 1
          preparation: thinly sliced against the grain
        - id: soy
          key: soy
          name: Thai black soy sauce or regular light soy sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: oil
          key: oil
          name: Vegetable oil for the marinade
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: starch
          key: starch
          name: Cornstarch or tapioca starch
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
    - id: sauce
      name: Sauce
      ingredients:
        - id: oyster
          key: oyster
          name: Oyster sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: sugar
          name: Sugar
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: thin-soy
          key: thin-soy
          name: Thai soy sauce or regular light soy sauce
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: dark-soy
          key: dark-soy
          name: Thai black soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: fish
          key: fish
          name: Fish sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: pepper
          key: pepper
          name: Freshly ground white pepper
          allowance: to taste
          uses:
            - step: sauce
              share: 1
    - id: pan
      name: Fresh-noodle pan route
      ingredients:
        - id: noodles
          key: noodles
          name: Fresh wide rice noodles
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: noodles
              share: 1
        - id: oil
          key: oil
          name: Vegetable cooking oil
          quantity:
            amount: 4
            unit: tbsp
          uses:
            - step: beef
              share: 0.25
            - step: vegetables
              share: 0.25
            - step: egg
              share: 0.5
        - id: garlic
          key: garlic
          name: Garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: Garlic cloves
          preparation: thinly sliced
        - id: broccoli
          key: broccoli
          name: Chinese broccoli
          quantity:
            amount: 3
            unit: cup
          uses:
            - step: vegetables
              share: 1
          preparation: cut into roughly 2-inch pieces; thick stems sliced to cook evenly
        - id: water
          key: water
          name: Water
          allowance: a small splash for steaming broccoli only if needed
          uses:
            - step: vegetables
              share: 1
          role: cooking-water
        - id: egg
          key: egg
          name: Large egg
          quantity:
            amount: 2
            unit: count
          uses:
            - step: egg
              share: 1
          plural: Large eggs
          preparation: lightly beaten
    - id: finish
      name: Optional finish
      ingredients:
        - id: chili
          key: chili
          name: Chili oil or Chiu Chow sauce
          allowance: 'for serving, if desired'
          uses:
            - step: serve
              share: 1
          optional: true
  steps:
    - id: marinate
      title: Marinate the beef
      text: >-
        Toss {{ingredients}} until evenly coated. Keep refrigerated while
        preparing the remaining ingredients.
    - id: sauce
      title: Prepare the sauce
      text: 'Mix {{ingredients}} in a separate bowl until the sugar dissolves.'
    - id: noodles
      title: Loosen fresh noodles
      text: >-
        Prepare {{ingredients}} following their package guidance immediately
        before stir-frying. If chilled noodles are stiff, briefly rinse with hot
        water to loosen, then drain thoroughly. Keep hands away from the hot
        pan.
    - id: beef
      title: Cook the beef
      text: >-
        Heat {{ingredients}} in a wok or large skillet over medium-high heat
        until shimmering. Add marinated beef in a thin layer, cooking manageable
        batches. Turn and check the thickest pieces for 145°F /63°C. Transfer to
        a clean plate and rest at least 3 minutes while cooking the vegetables;
        keep raw-contact dishes and utensils separate.
    - id: vegetables
      title: Cook vegetables and noodles
      text: >-
        Use {{ingredients}}. Add this step’s cooking oil, garlic and broccoli to
        the wok. Stir until stems begin to soften, starting checks after about 2
        minutes; add the small steaming-water allowance and briefly cover only
        if the stems remain tough. Add loosened noodles and all the prepared
        sauce. Fold gently until coated, then add the cooked, rested beef.
    - id: egg
      title: Cook and fold the eggs
      text: >-
        Have {{ingredients}} ready. Push noodles aside, add this step’s cooking
        oil and the beaten eggs, and scramble until fully set. Fold through the
        noodles and continue cooking until evenly hot and the mixed egg-and-beef
        dish measures 165°F /74°C. Cook longer if needed rather than relying on
        a brief timer.
    - id: serve
      title: Serve
      text: 'Serve hot and offer {{ingredients}} separately.'
learning:
  focus: >-
    This beef version keeps Thai black soy sauce, oyster sauce and fish sauce
    distinct
  outcome: >-
    Wide rice noodles, fully set egg and beef evenly coated in a savory
    soy-sauce mixture.
  techniques:
    - stir-frying
    - temperature
  before:
    - >-
      At the original batch, plan three portions. Keep the noodle widths and
      beef slices similar when scaling; cook more batches rather than crowding
      the pan or multiplying brief stir-fry clocks.
    - >-
      For the original batch, the marinade teaspoon of oil is separate from the
      four tablespoons cooking oil. The fresh-noodle route uses one-quarter
      cooking oil for beef, one-quarter for vegetables and one-half for eggs;
      the dried route uses one-quarter each for noodle coating, beef, vegetables
      and eggs.
    - >-
      Keep marinated raw beef refrigerated while preparing other ingredients. Do
      not return cooked beef to the raw marinade bowl.
  checkpoints:
    - step: 4
      cue: Beef reaches 145°F and rests at least 3 minutes on a clean plate.
      why: >-
        Use a clean plate and utensils for the cooked beef so raw-contact
        marinade and tools do not touch it.
    - step: 6
      cue: Egg is fully set and the mixed dish reaches 165°F.
      why: >-
        An egg-and-meat dish needs its own endpoint; beef color or 145°F alone
        does not check it.
  troubleshooting:
    - problem: Rice noodles stick together or break
      cause: 'Noodles are stiff, poorly drained or the pan is crowded'
      fix: >-
        Loosen fresh noodles just before cooking using their package guidance.
        Drain dried noodles thoroughly and use their oil-coating allocation.
        Lift and fold manageable pan batches instead of stirring hard.
  substitutions:
    - ingredient: Fresh wide rice noodles
      alternative: >-
        For the original batch, use 8 oz dried wide rice noodles instead of 1 lb
        fresh. Prepare to a just-tender bite per package, drain well and coat
        with 1 tbsp from the 4 tbsp cooking-oil total.
      effect: >-
        Complete dried route: use 1 tbsp cooking oil each for noodles, beef,
        vegetables and eggs; marinade 1 tsp oil remains separate. Scale chosen
        allocations together, and do not add the fresh-route 2 tbsp egg dose on
        top.
  storage: >-
    Refrigerate promptly in shallow containers at 40°F or below, within 2 hours
    (1 hour above 90°F). Use within 3–4 days. Reheat leftovers to 165°F
    throughout; noodles soften in storage.
  timing: >-
    Plan about 15–25 min preparation with noodles ready; about 15–30 min
    cooking, depending on batches; about 35–60 min overall, plus any separate
    noodle preparation. Pan heating, beef checks and the 3-minute rest affect
    elapsed time; product preparation and extra pan batches can extend it.
  sources:
    - title: The Woks of Life — Pad See Ew
      url: 'https://thewoksoflife.com/pad-see-ew/'
    - title: FoodSafety.gov — state-specific minimum cooking temperatures
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: USDA — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: CDC — meat-containing egg dishes
      url: 'https://www.cdc.gov/food-safety/foods/safer-food-choices.html'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

This beef version keeps Thai black soy sauce, oyster sauce and fish sauce distinct. Prepare the sauce and loosen the noodles before heating the wok. Fresh and dried noodles use the same total cooking oil but need different allocations; cook in batches that leave room to turn the noodles without breaking them.

## Directions

1. **Marinate the beef:** Toss Flank steak, Thai black soy sauce or regular light soy sauce, Vegetable oil for the marinade, and Cornstarch or tapioca starch until evenly coated. Keep refrigerated while preparing the remaining ingredients.
2. **Prepare the sauce:** Mix Oyster sauce, Sugar, Thai soy sauce or regular light soy sauce, Thai black soy sauce, Fish sauce, and Freshly ground white pepper in a separate bowl until the sugar dissolves.
3. **Loosen fresh noodles:** Prepare Fresh wide rice noodles following their package guidance immediately before stir-frying. If chilled noodles are stiff, briefly rinse with hot water to loosen, then drain thoroughly. Keep hands away from the hot pan.
4. **Cook the beef:** Heat 1/4 of the Vegetable cooking oil in a wok or large skillet over medium-high heat until shimmering. Add marinated beef in a thin layer, cooking manageable batches. Turn and check the thickest pieces for 145°F /63°C. Transfer to a clean plate and rest at least 3 minutes while cooking the vegetables; keep raw-contact dishes and utensils separate.
5. **Cook vegetables and noodles:** Use 1/4 of the Vegetable cooking oil, Garlic cloves, Chinese broccoli, and Water. Add this step’s cooking oil, garlic and broccoli to the wok. Stir until stems begin to soften, starting checks after about 2 minutes; add the small steaming-water allowance and briefly cover only if the stems remain tough. Add loosened noodles and all the prepared sauce. Fold gently until coated, then add the cooked, rested beef.
6. **Cook and fold the eggs:** Have 1/2 of the Vegetable cooking oil and Large eggs ready. Push noodles aside, add this step’s cooking oil and the beaten eggs, and scramble until fully set. Fold through the noodles and continue cooking until evenly hot and the mixed egg-and-beef dish measures 165°F /74°C. Cook longer if needed rather than relying on a brief timer.
7. **Serve:** Serve hot and offer Chili oil or Chiu Chow sauce (if using) separately.
