# First ten complete editorial reviews — October 5, 2026

Input: `95b37f8b` (origin/main `e922e95e`). Whole-recipe reviewer, independent editor and integration owner inspected each accepted version. Status: implemented as `760579089f83c71eb5e5ebe8f484b282b679ac3d`, local release checks passed, production verification pending. No physical kitchen testing.

The five poultry recipes preserve both Garlic Parmesan potato methods and its source-documented seven tablespoons of butter, keep raw-contact sauce and vegetables at measured endpoints, and explain portion and batch capacity. The five desserts retain the earlier safety repairs, measured quantities, proportional allocations and cold machine-batch handling. Source disagreements and physical yield/texture questions remain in individual records.

| Recipe                                       | Review record                                                           | Accepted source SHA-256                                            |
| -------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------ |
| air-fryer-chicken-tenders                    | [record](../../reviews/air-fryer-chicken-tenders.md)                    | `4b6bb7b2dac09439a618c88805135713f0297f25c5af10fff5dbeef5aec5c3a2` |
| chicken-fingers                              | [record](../../reviews/chicken-fingers.md)                              | `22a11c78c7b8dd7f603c2a2edf21e265bcc2bc017e98fbba4cad7c8fa13c9f46` |
| crispy-baked-chicken-sliders                 | [record](../../reviews/crispy-baked-chicken-sliders.md)                 | `912741de603e561e82688c03df0662fcc44a46e80e40258861cf03f73f63fd07` |
| garlic-parmesan-chicken-potatoes             | [record](../../reviews/garlic-parmesan-chicken-potatoes.md)             | `d7b1f162ec0795839b79d9598b3483008616fca5da76a336d03377412675b9e9` |
| glazed-chicken-and-broccoli-sheet-pan-dinner | [record](../../reviews/glazed-chicken-and-broccoli-sheet-pan-dinner.md) | `f21b4074c11c013db6a8b1f3d34b0e9663aab54bfbecd4c83bae7202846f4c13` |
| chocolate-pie                                | [record](../../reviews/chocolate-pie.md)                                | `e8cca9801a7a6081e6d0df9e206aa843c874b69da048a2425e16d03e34f1e478` |
| custard-peach-ice-cream                      | [record](../../reviews/custard-peach-ice-cream.md)                      | `1a718f9c36c3a77255116e7b052fdab30e685a4dbae2aee1c00ff6ad4059ca7d` |
| key-lime-pie                                 | [record](../../reviews/key-lime-pie.md)                                 | `1e0ef712c72ff5e4ed9fb3f7c27eae65043a691fa8c5ba0dd1cbcb33ddef1965` |
| old-fashioned-vanilla-ice-cream              | [record](../../reviews/old-fashioned-vanilla-ice-cream.md)              | `fc58b826d21d263c4c5336a72e1c48caba7ed6bad82e9cc1f3949d47f40c876d` |
| strawberry-summer-cake                       | [record](../../reviews/strawberry-summer-cake.md)                       | `a1fb990915e7a55af9ab1f5f02bc90fecd04d96a82c4c9c849aa0e876fed19de` |

## Integration corrections

The independent challenges requested final method and metadata corrections. Exact consequential reviewer changes appear in the individual records. Root made these additional changes after inspecting complete diffs:

### crispy-baked-chicken-sliders — learning

Before:

```json
{
  "focus": "Keep a brined cutlet’s breading attached",
  "outcome": "Tangy chicken with a crisp panko coating, a measured 165°F / 74°C center, and pieces sized to fit twelve buns.",
  "techniques": ["browning", "temperature"],
  "before": [
    "Allow 1–4 hours for the refrigerated brine. Salt and acidity vary between pickle jars, so use the stated soak window rather than extending it overnight.",
    "Check pan and rack capacity before breading two pounds of cutlets. An oven-safe rack and gaps between pieces matter more than a promised single pan."
  ],
  "checkpoints": [
    {
      "step": 3,
      "cue": "The cutlet surface is dry enough for flour to cling without becoming paste.",
      "why": "Pickle juice left on the surface can loosen the coating."
    },
    {
      "step": 4,
      "cue": "The thickest part of each cutlet reaches 165°F / 74°C while the crumbs are golden.",
      "why": "Brining and crumb color do not prove the chicken has reached a safe endpoint."
    },
    {
      "step": 6,
      "cue": "Chicken is added just before the sliders are eaten.",
      "why": "Mayonnaise and meat moisture soften the crumbs once the sandwiches are assembled."
    }
  ],
  "troubleshooting": [
    {
      "problem": "The breading slips",
      "cause": "Wet cutlets or excess flour and egg created a thick layer.",
      "fix": "Pat the brined chicken dry, shake off flour and let egg drip off before pressing on panko."
    },
    {
      "problem": "Cutlets taste too salty or sour",
      "cause": "The pickle brine and the fixed salt in the flour vary in their combined effect.",
      "fix": "Keep this batch’s soak within 1–4 hours. For a future batch, try the shorter end first and record the pickle juice used; do not assume every jar gives the same result."
    }
  ],
  "substitutions": [
    {
      "ingredient": "Cayenne pepper",
      "alternative": "Omit or reduce it",
      "effect": "Less heat without changing the pickle-brined chicken identity; the recorded half-teaspoon remains the standard amount."
    },
    {
      "ingredient": "Sweet slider rolls",
      "alternative": "Plain slider buns",
      "effect": "Less sweetness; fit the cooked chicken to the bun rather than using a fixed square dimension."
    }
  ],
  "timing": "About 25 minutes hands-on prep, 1–4 hours refrigerated brining, 18–20 minutes baking and a 5-minute rest. The 1 hr 50 min–4 hr 50 min elapsed estimate includes brining and assembly with oven preheating during setup; multiple batches or crowded two-pan cooking can add time. Twelve sliders describes the assembly count, not twelve dinner portions.",
  "storage": "Refrigerate in shallow containers within 2 hours (1 hour above 90°F / 32°C), at 40°F / 4°C or below. Use cooked chicken within 3–4 days and reheat leftovers to 165°F / 74°C. Store chicken separately from buns, pickles and mayonnaise. Reheat chicken on a rack in the oven to the endpoint and assemble fresh sliders; assembled leftovers become soft.",
  "sources": [
    {
      "title": "Betty Crocker — Oven-Fried Chicken Tenders",
      "url": "https://www.bettycrocker.com/recipes/oven-fried-chicken-tenders/46a69e4d-4c31-485b-9d43-67d40b353f2e"
    },
    {
      "title": "USDA FSIS — Smoking meat and poultry: marinating safely",
      "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/smoking-meat-and-poultry"
    },
    {
      "title": "FoodSafety.gov — Safe minimum internal temperatures",
      "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
    },
    {
      "title": "FoodSafety.gov — Cold food storage chart",
      "url": "https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts"
    },
    {
      "title": "FoodSafety.gov — Four steps to food safety",
      "url": "https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety"
    }
  ],
  "review": {
    "status": "editorial-review",
    "date": "2026-10-05"
  }
}
```

After:

```json
{
  "focus": "Keep a brined cutlet’s breading attached",
  "outcome": "Tangy chicken with a crisp panko coating, a measured 165°F / 74°C center, and pieces sized to fit the buns being used.",
  "techniques": ["browning", "temperature"],
  "before": [
    "Allow 1–4 hours for the refrigerated brine. Salt and acidity vary between pickle jars, so use the stated soak window rather than extending it overnight.",
    "Check pan and rack capacity before breading the measured cutlets. An oven-safe rack and gaps between pieces matter more than a promised single pan."
  ],
  "checkpoints": [
    {
      "step": 3,
      "cue": "The cutlet surface is dry enough for flour to cling without becoming paste.",
      "why": "Pickle juice left on the surface can loosen the coating."
    },
    {
      "step": 4,
      "cue": "The thickest part of each cutlet reaches 165°F / 74°C while the crumbs are golden.",
      "why": "Brining and crumb color do not prove the chicken has reached a safe endpoint."
    },
    {
      "step": 6,
      "cue": "Chicken is added just before the sliders are eaten.",
      "why": "Mayonnaise and meat moisture soften the crumbs once the sandwiches are assembled."
    }
  ],
  "troubleshooting": [
    {
      "problem": "The breading slips",
      "cause": "Wet cutlets or excess flour and egg created a thick layer.",
      "fix": "Pat the brined chicken dry, shake off flour and let egg drip off before pressing on panko."
    },
    {
      "problem": "Cutlets taste too salty or sour",
      "cause": "The pickle brine and the fixed salt in the flour vary in their combined effect.",
      "fix": "Keep this batch’s soak within 1–4 hours. For a future batch, try the shorter end first and record the pickle juice used; do not assume every jar gives the same result."
    }
  ],
  "substitutions": [
    {
      "ingredient": "Cayenne pepper",
      "alternative": "Omit or reduce it",
      "effect": "Less heat without changing the pickle-brined chicken identity; the recorded half-teaspoon remains the standard amount."
    },
    {
      "ingredient": "Sweet slider rolls",
      "alternative": "Plain slider buns",
      "effect": "Less sweetness; fit the cooked chicken to the bun rather than using a fixed square dimension."
    }
  ],
  "timing": "For the original twelve-slider batch, about 25 minutes hands-on prep, 1–4 hours refrigerated brining, 18–20 minutes baking and a 5-minute rest. The 1 hr 50 min–4 hr 50 min elapsed estimate includes brining and assembly with oven preheating during setup; multiple batches or crowded two-pan cooking can add time. Twelve sliders describes the assembly count, not twelve dinner portions.",
  "storage": "Refrigerate in shallow containers within 2 hours (1 hour above 90°F / 32°C), at 40°F / 4°C or below. Use cooked chicken within 3–4 days and reheat leftovers to 165°F / 74°C. Store chicken separately from buns, pickles and mayonnaise. Reheat chicken on a rack in the oven to the endpoint and assemble fresh sliders; assembled leftovers become soft.",
  "sources": [
    {
      "title": "Betty Crocker — Oven-Fried Chicken Tenders",
      "url": "https://www.bettycrocker.com/recipes/oven-fried-chicken-tenders/46a69e4d-4c31-485b-9d43-67d40b353f2e"
    },
    {
      "title": "USDA FSIS — Smoking meat and poultry: marinating safely",
      "url": "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/smoking-meat-and-poultry"
    },
    {
      "title": "FoodSafety.gov — Safe minimum internal temperatures",
      "url": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures"
    },
    {
      "title": "FoodSafety.gov — Cold food storage chart",
      "url": "https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts"
    },
    {
      "title": "FoodSafety.gov — Four steps to food safety",
      "url": "https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety"
    }
  ],
  "review": {
    "status": "editorial-review",
    "date": "2026-10-05"
  }
}
```

### crispy-baked-chicken-sliders — body

Before:

```json
"\n## Chef's Note\n\nPickle juice seasons these cutlets with salt and tang before they are breaded. Pat the chicken dry after the refrigerated soak so the flour can form a thin, attached coating. Keep the cooked pieces on the rack through their short rest, then assemble just before serving to preserve the crunch.\n\n## Directions\n\n1. **Brine in the refrigerator:** Use boneless skinless chicken breasts and dill pickle juice: slice the breasts horizontally into cutlets about 1/2 inch thick. Put chicken and pickle juice in a food-safe bag or covered container and refrigerate for 1–4 hours. Turn the bag or pieces during the soak so the measured juice reaches all surfaces; do not leave it on the counter.\n2. **Prepare the baking station:** Preheat the oven to 425°F. Set an oven-safe wire rack over a rimmed sheet pan and coat it with cooking spray. Have a second rack and pan ready if the cutlets will not fit in one layer with gaps.\n3. **Dredge and bread:** Set out all-purpose flour, paprika, garlic powder, onion powder, cayenne pepper, kosher salt, black pepper, eggs, and panko breadcrumbs. Mix the flour with paprika, garlic powder, onion powder, cayenne, salt and pepper in one dish; beat eggs in a second; put panko in a third. Remove chicken from the brine and pat dry with paper towels. Discard the used brine. Dredge in seasoned flour, shake off excess, dip in egg and let excess drip off, then press into panko. Discard leftover coating ingredients after raw-chicken contact and wash hands and utensils.\n4. **Bake and measure:** Arrange cutlets on the rack in one layer with gaps. Apply cooking spray evenly to the tops. Bake about 18–20 minutes, until the coating is golden and the thickest part of each cutlet reaches 165°F / 74°C, probing from the side. Continue baking as needed. If using two pans, rotate their positions as needed for even browning; allow more time if the oven is crowded.\n5. **Rest and portion:** Rest cooked chicken on the rack for 5 minutes. On a clean board, divide the cooked chicken into one bun-sized portion for each roll in the ingredient list, trimming pieces to fit.\n6. **Assemble:** Use sweet slider rolls or slider buns, dill pickle chips, and mayonnaise: split the rolls, spread mayonnaise on the cut sides and add chicken and pickle chips. Serve immediately while the coating is crisp.\n"
```

After:

```json
"\n## Chef's Note\n\nPickle juice seasons these cutlets with salt and tang before they are breaded. Pat the chicken dry after the refrigerated soak so the flour can form a thin, attached coating. Keep the cooked pieces on the rack through their short rest, then assemble just before serving to preserve the crunch.\n\n## Directions\n\n1. **Brine in the refrigerator:** Use boneless skinless chicken breasts and dill pickle juice: slice the breasts horizontally into cutlets about 1/2 inch thick. Put chicken and pickle juice in a food-safe bag or covered container and refrigerate for 1–4 hours. Turn the bag or pieces during the soak so the measured juice reaches all surfaces; do not leave it on the counter.\n2. **Prepare the baking station:** Preheat the oven to 425°F. Set an oven-safe wire rack over a rimmed sheet pan and coat it with cooking spray. Have a second rack and pan ready if the cutlets will not fit in one layer with gaps.\n3. **Dredge and bread:** Set out all-purpose flour, paprika, garlic powder, onion powder, cayenne pepper, kosher salt, black pepper, eggs, and panko breadcrumbs. Mix the flour with paprika, garlic powder, onion powder, cayenne, salt and pepper in one dish; beat eggs in a second; put panko in a third. Remove chicken from the brine and pat dry with paper towels. Discard the used brine. Dredge in seasoned flour, shake off excess, dip in egg and let excess drip off, then press into panko. Discard leftover coating ingredients after raw-chicken contact and wash hands and utensils.\n4. **Bake and measure:** Arrange cutlets on the rack in one layer with gaps. Apply cooking spray evenly to the tops. Bake about 18–20 minutes, until the coating is golden and the thickest part of each cutlet reaches 165°F / 74°C, probing from the side. Continue baking as needed. If using two pans, rotate their positions as needed for even browning; allow more time if the oven is crowded.\n5. **Rest and portion:** Rest cooked chicken on the rack for 5 minutes. On a clean board, divide the cooked chicken into one bun-sized portion for each roll in the ingredient list, trimming pieces to fit.\n6. **Assemble:** Use sweet slider rolls or slider buns, dill pickle chips, and mayonnaise: split the rolls, spread mayonnaise on the cut sides and add chicken and pickle chips. Serve immediately while the coating is crisp.\n\n"
```

### garlic-parmesan-chicken-potatoes — ingredients

Before:

```json
[
  "--- Chicken and vegetables ---",
  "cooking spray, as needed for the baking-dish variation, optional",
  "olive oil, as needed to coat the potatoes for roasting",
  "6 bone-in skin-on chicken thighs",
  "1 tbsp Italian seasoning",
  "salt, to taste",
  "black pepper, to taste",
  "2 tbsp unsalted butter",
  "1 tbsp unsalted butter",
  "3 cups baby spinach, roughly chopped",
  "1 lb baby potatoes, quartered",
  "--- Garlic-Parmesan cream sauce ---",
  "4 tbsp unsalted butter",
  "4 garlic cloves, minced",
  "2 tbsp all-purpose flour",
  "1 1/2 cups chicken broth",
  "1 tsp dried thyme",
  "1/2 tsp dried basil",
  "1/2 cup heavy cream or half-and-half",
  "1/2 cup freshly grated Parmesan",
  "salt, to taste after the completed bake",
  "black pepper, to taste after the completed bake",
  "--- Finish ---",
  "2 tbsp fresh parsley, chopped, optional"
]
```

After:

```json
[
  "--- Chicken and vegetables ---",
  "cooking spray, as needed for the baking-dish variation, optional",
  "olive oil, as needed to coat the potatoes for roasting",
  "6 bone-in skin-on chicken thighs",
  "1 tbsp Italian seasoning",
  "salt, to taste",
  "black pepper, to taste",
  "2 tbsp unsalted butter, for searing",
  "1 tbsp unsalted butter, for the spinach",
  "3 cups baby spinach, roughly chopped",
  "1 lb baby potatoes, quartered",
  "salt, to taste for roasted potatoes",
  "--- Garlic-Parmesan cream sauce ---",
  "4 tbsp unsalted butter, for the sauce",
  "4 garlic cloves, minced",
  "2 tbsp all-purpose flour",
  "1 1/2 cups chicken broth",
  "1 tsp dried thyme",
  "1/2 tsp dried basil",
  "1/2 cup heavy cream or half-and-half",
  "1/2 cup freshly grated Parmesan",
  "salt, to taste after the completed bake",
  "black pepper, to taste after the completed bake",
  "--- Finish ---",
  "2 tbsp fresh parsley, chopped, optional"
]
```

### garlic-parmesan-chicken-potatoes — formula

Before:

```json
{
  "version": 1,
  "yield": {
    "amount": 6,
    "unit": "portion"
  },
  "components": [
    {
      "id": "chicken",
      "name": "Chicken and vegetables",
      "ingredients": [
        {
          "id": "pan-spray",
          "key": "cooking-spray",
          "name": "cooking spray",
          "allowance": "as needed for the baking-dish variation",
          "optional": true,
          "uses": [
            {
              "step": "prep",
              "share": 1
            }
          ]
        },
        {
          "id": "roasting-oil",
          "key": "roasting-oil",
          "name": "olive oil",
          "allowance": "as needed to coat the potatoes for roasting",
          "uses": [
            {
              "step": "prep",
              "share": 1
            }
          ]
        },
        {
          "id": "chicken",
          "key": "chicken",
          "name": "bone-in skin-on chicken thigh",
          "plural": "bone-in skin-on chicken thighs",
          "quantity": {
            "amount": 6,
            "unit": "count"
          },
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "italian-seasoning",
          "key": "italian-seasoning",
          "name": "Italian seasoning",
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "salt",
          "key": "salt",
          "name": "salt",
          "allowance": "to taste",
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "pepper",
          "key": "pepper",
          "name": "black pepper",
          "allowance": "to taste",
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "sear-butter",
          "key": "unsalted-butter",
          "name": "unsalted butter",
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "spinach-butter",
          "key": "unsalted-butter",
          "name": "unsalted butter",
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "spinach",
              "share": 1
            }
          ]
        },
        {
          "id": "spinach",
          "key": "spinach",
          "name": "baby spinach",
          "quantity": {
            "amount": 3,
            "unit": "cup"
          },
          "preparation": "roughly chopped",
          "uses": [
            {
              "step": "spinach",
              "share": 1
            }
          ]
        },
        {
          "id": "potatoes",
          "key": "potatoes",
          "name": "baby potatoes",
          "quantity": {
            "amount": 1,
            "unit": "lb"
          },
          "preparation": "quartered",
          "uses": [
            {
              "step": "prep",
              "share": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sauce",
      "name": "Garlic-Parmesan cream sauce",
      "ingredients": [
        {
          "id": "butter",
          "key": "unsalted-butter",
          "name": "unsalted butter",
          "quantity": {
            "amount": 4,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "roux",
              "share": 1
            }
          ]
        },
        {
          "id": "garlic",
          "key": "garlic",
          "name": "garlic clove",
          "plural": "garlic cloves",
          "quantity": {
            "amount": 4,
            "unit": "count"
          },
          "preparation": "minced",
          "uses": [
            {
              "step": "roux",
              "share": 1
            }
          ]
        },
        {
          "id": "flour",
          "key": "flour",
          "name": "all-purpose flour",
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "roux",
              "share": 1
            }
          ]
        },
        {
          "id": "broth",
          "key": "broth",
          "name": "chicken broth",
          "quantity": {
            "amount": "1 1/2",
            "unit": "cup"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "thyme",
          "key": "thyme",
          "name": "dried thyme",
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "basil",
          "key": "basil",
          "name": "dried basil",
          "quantity": {
            "amount": "1/2",
            "unit": "tsp"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "cream",
          "key": "cream",
          "name": "heavy cream or half-and-half",
          "quantity": {
            "amount": "1/2",
            "unit": "cup"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "parmesan",
          "key": "parmesan",
          "name": "freshly grated Parmesan",
          "quantity": {
            "amount": "1/2",
            "unit": "cup"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "salt",
          "key": "salt",
          "name": "salt",
          "allowance": "to taste after the completed bake",
          "uses": [
            {
              "step": "serve",
              "share": 1
            }
          ]
        },
        {
          "id": "pepper",
          "key": "pepper",
          "name": "black pepper",
          "allowance": "to taste after the completed bake",
          "uses": [
            {
              "step": "serve",
              "share": 1
            }
          ]
        }
      ]
    },
    {
      "id": "finish",
      "name": "Finish",
      "ingredients": [
        {
          "id": "parsley",
          "key": "parsley",
          "name": "fresh parsley",
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          },
          "preparation": "chopped",
          "optional": true,
          "role": "garnish",
          "uses": [
            {
              "step": "serve",
              "share": 1
            }
          ]
        }
      ]
    }
  ],
  "steps": [
    {
      "id": "prep",
      "title": "Start the potatoes",
      "text": "Preheat the oven to 425°F. Set out {{ingredients}}. Quarter the baby potatoes into similar pieces, toss with enough olive oil to coat, and spread in one layer on a rimmed sheet pan. Roast about 20–25 minutes, checking for browned edges and a center that yields easily to a knife; continue as needed. Check that all the measured thighs fit without overlap in your oven-safe skillet; use a baking dish for the chicken finish if needed. Prepare the chicken and sauce while the potatoes roast. The optional cooking spray is for the baking-dish variation below, which uses a different oven temperature and omits the separate potato roast."
    },
    {
      "id": "sear",
      "title": "Brown the chicken",
      "text": "Use {{ingredients}}: pat chicken dry with paper towels, then season with Italian seasoning, salt and pepper. Melt the butter in a large skillet over medium-high heat. Sear chicken skin-side down until deep golden, about 5–7 minutes, then brown the other side for about 2 minutes. Work in batches if needed, reducing heat if the butter or fond begins to burn. Transfer to a plate reserved for partly cooked chicken; continue directly with the recipe."
    },
    {
      "id": "spinach",
      "title": "Wilt the spinach",
      "text": "Use {{ingredients}}: melt the butter for this step in the skillet, add spinach and stir until it begins to wilt, about 2 minutes. Transfer spinach to a bowl. Pour off excessive rendered chicken fat, keeping the browned fond and leaving no burned bits."
    },
    {
      "id": "roux",
      "title": "Make the roux",
      "text": "Use {{ingredients}}: melt the sauce butter over medium heat. Add garlic and stir until fragrant, about 1–2 minutes, without browning it. Whisk in flour and cook about 1 minute, stirring until smooth and lightly colored."
    },
    {
      "id": "sauce",
      "title": "Finish the sauce",
      "text": "Use {{ingredients}}: gradually whisk broth into the roux with thyme and basil, loosening the browned fond. Simmer gently, whisking, until smooth and lightly thickened, about 1–2 minutes. Lower the heat and stir in cream and Parmesan, about 1–2 minutes, until the cheese melts. Do not boil hard after adding cheese. The sauce has contacted partly cooked chicken fond; wait until the final bake is complete before tasting it."
    },
    {
      "id": "assemble",
      "title": "Finish the chicken in sauce",
      "text": "Stir the wilted spinach into the sauce and return the seared chicken skin-side up. Keep as much skin above the sauce as possible. If your oven-safe skillet cannot hold the thighs in one layer, transfer chicken, spinach and sauce to a baking dish large enough to fit them without overlap. Keep the roasted potatoes separate for crispness; adding them to the sauce will soften their surface."
    },
    {
      "id": "bake",
      "title": "Bake and measure",
      "text": "Transfer the skillet or chicken baking dish to the 425°F oven. Begin checking after about 10 minutes; the thickest part of every thigh, away from bone, and the sauce at the center must reach 165°F / 74°C. Continue baking as needed; ten minutes is a first check, not a guarantee of completion. If the skin darkens early, shield it loosely with foil while the meat finishes. Check the separately roasted potatoes for tenderness as well. Rest safely cooked chicken 5 minutes before serving."
    },
    {
      "id": "serve",
      "title": "Serve",
      "text": "After the bake meets the temperature checks, taste the sauce with a clean spoon. Use {{ingredients}}: adjust salt and pepper, then add parsley if using. Serve one thigh per portion with potatoes, spinach and sauce."
    }
  ]
}
```

After:

```json
{
  "version": 1,
  "yield": {
    "amount": 6,
    "unit": "portion"
  },
  "components": [
    {
      "id": "chicken",
      "name": "Chicken and vegetables",
      "ingredients": [
        {
          "id": "pan-spray",
          "key": "cooking-spray",
          "name": "cooking spray",
          "allowance": "as needed for the baking-dish variation",
          "optional": true,
          "uses": [
            {
              "step": "prep",
              "share": 1
            }
          ]
        },
        {
          "id": "roasting-oil",
          "key": "roasting-oil",
          "name": "olive oil",
          "allowance": "as needed to coat the potatoes for roasting",
          "uses": [
            {
              "step": "prep",
              "share": 1
            }
          ]
        },
        {
          "id": "chicken",
          "key": "chicken",
          "name": "bone-in skin-on chicken thigh",
          "plural": "bone-in skin-on chicken thighs",
          "quantity": {
            "amount": 6,
            "unit": "count"
          },
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "italian-seasoning",
          "key": "italian-seasoning",
          "name": "Italian seasoning",
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "salt",
          "key": "salt",
          "name": "salt",
          "allowance": "to taste",
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "pepper",
          "key": "pepper",
          "name": "black pepper",
          "allowance": "to taste",
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ]
        },
        {
          "id": "sear-butter",
          "key": "unsalted-butter",
          "name": "unsalted butter",
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "sear",
              "share": 1
            }
          ],
          "preparation": "for searing"
        },
        {
          "id": "spinach-butter",
          "key": "unsalted-butter",
          "name": "unsalted butter",
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "spinach",
              "share": 1
            }
          ],
          "preparation": "for the spinach"
        },
        {
          "id": "spinach",
          "key": "spinach",
          "name": "baby spinach",
          "quantity": {
            "amount": 3,
            "unit": "cup"
          },
          "preparation": "roughly chopped",
          "uses": [
            {
              "step": "spinach",
              "share": 1
            }
          ]
        },
        {
          "id": "potatoes",
          "key": "potatoes",
          "name": "baby potatoes",
          "quantity": {
            "amount": 1,
            "unit": "lb"
          },
          "preparation": "quartered",
          "uses": [
            {
              "step": "prep",
              "share": 1
            }
          ]
        },
        {
          "id": "potato-salt",
          "key": "salt",
          "name": "salt",
          "allowance": "to taste for roasted potatoes",
          "uses": [
            {
              "step": "prep",
              "share": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sauce",
      "name": "Garlic-Parmesan cream sauce",
      "ingredients": [
        {
          "id": "butter",
          "key": "unsalted-butter",
          "name": "unsalted butter",
          "quantity": {
            "amount": 4,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "roux",
              "share": 1
            }
          ],
          "preparation": "for the sauce"
        },
        {
          "id": "garlic",
          "key": "garlic",
          "name": "garlic clove",
          "plural": "garlic cloves",
          "quantity": {
            "amount": 4,
            "unit": "count"
          },
          "preparation": "minced",
          "uses": [
            {
              "step": "roux",
              "share": 1
            }
          ]
        },
        {
          "id": "flour",
          "key": "flour",
          "name": "all-purpose flour",
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          },
          "uses": [
            {
              "step": "roux",
              "share": 1
            }
          ]
        },
        {
          "id": "broth",
          "key": "broth",
          "name": "chicken broth",
          "quantity": {
            "amount": "1 1/2",
            "unit": "cup"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "thyme",
          "key": "thyme",
          "name": "dried thyme",
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "basil",
          "key": "basil",
          "name": "dried basil",
          "quantity": {
            "amount": "1/2",
            "unit": "tsp"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "cream",
          "key": "cream",
          "name": "heavy cream or half-and-half",
          "quantity": {
            "amount": "1/2",
            "unit": "cup"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "parmesan",
          "key": "parmesan",
          "name": "freshly grated Parmesan",
          "quantity": {
            "amount": "1/2",
            "unit": "cup"
          },
          "uses": [
            {
              "step": "sauce",
              "share": 1
            }
          ]
        },
        {
          "id": "salt",
          "key": "salt",
          "name": "salt",
          "allowance": "to taste after the completed bake",
          "uses": [
            {
              "step": "serve",
              "share": 1
            }
          ]
        },
        {
          "id": "pepper",
          "key": "pepper",
          "name": "black pepper",
          "allowance": "to taste after the completed bake",
          "uses": [
            {
              "step": "serve",
              "share": 1
            }
          ]
        }
      ]
    },
    {
      "id": "finish",
      "name": "Finish",
      "ingredients": [
        {
          "id": "parsley",
          "key": "parsley",
          "name": "fresh parsley",
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          },
          "preparation": "chopped",
          "optional": true,
          "role": "garnish",
          "uses": [
            {
              "step": "serve",
              "share": 1
            }
          ]
        }
      ]
    }
  ],
  "steps": [
    {
      "id": "prep",
      "title": "Start the potatoes",
      "text": "Preheat the oven to 425°F. Set out {{ingredients}}. Quarter the baby potatoes into similar pieces, toss with enough olive oil to coat and salt to taste, and spread in one layer on a rimmed sheet pan. Roast about 20–25 minutes, checking for browned edges and a center that yields easily to a knife; continue as needed. Check that all the measured thighs fit without overlap in your oven-safe skillet; use a baking dish for the chicken finish if needed. Prepare the chicken and sauce while the potatoes roast. The optional cooking spray is for the baking-dish variation below, which uses a different oven temperature and omits the separate potato roast."
    },
    {
      "id": "sear",
      "title": "Brown the chicken",
      "text": "Use {{ingredients}}: pat chicken dry with paper towels, then season with Italian seasoning, salt and pepper. Melt the butter in a large skillet over medium-high heat. Sear chicken skin-side down until deep golden, about 5–7 minutes, then brown the other side for about 2 minutes. Work in batches if needed, reducing heat if the butter or fond begins to burn. Transfer to a plate reserved for partly cooked chicken; continue directly with the recipe."
    },
    {
      "id": "spinach",
      "title": "Wilt the spinach",
      "text": "Use {{ingredients}}: melt the butter for this step in the skillet, add spinach and stir until it begins to wilt, about 2 minutes. Transfer spinach to a bowl. Pour off excessive rendered chicken fat, keeping the browned fond and leaving no burned bits."
    },
    {
      "id": "roux",
      "title": "Make the roux",
      "text": "Use {{ingredients}}: melt the sauce butter over medium heat. Add garlic and stir until fragrant, about 1–2 minutes, without browning it. Whisk in flour and cook about 1 minute, stirring until smooth and lightly colored."
    },
    {
      "id": "sauce",
      "title": "Finish the sauce",
      "text": "Use {{ingredients}}: gradually whisk broth into the roux with thyme and basil, loosening the browned fond. Simmer gently, whisking, until smooth and lightly thickened, about 1–2 minutes. Lower the heat and stir in cream and Parmesan, about 1–2 minutes, until the cheese melts. Do not boil hard after adding cheese. The sauce has contacted partly cooked chicken fond; wait until the final bake is complete before tasting it."
    },
    {
      "id": "assemble",
      "title": "Finish the chicken in sauce",
      "text": "Stir the wilted spinach into the sauce and return the seared chicken skin-side up. Keep as much skin above the sauce as possible. If your oven-safe skillet cannot hold the thighs in one layer, transfer chicken, spinach and sauce to a baking dish large enough to fit them without overlap. Keep the roasted potatoes separate for crispness; adding them to the sauce will soften their surface."
    },
    {
      "id": "bake",
      "title": "Bake and measure",
      "text": "Transfer the skillet or chicken baking dish to the 425°F oven. Begin checking after about 10 minutes; the thickest part of every thigh, away from bone, and the sauce at the center must reach 165°F / 74°C. Continue baking as needed; ten minutes is a first check, not a guarantee of completion. If the skin darkens early, shield it loosely with foil while the meat finishes. Check the separately roasted potatoes for tenderness as well. Rest safely cooked chicken 5 minutes before serving."
    },
    {
      "id": "serve",
      "title": "Serve",
      "text": "After the bake meets the temperature checks, taste the sauce with a clean spoon. Use {{ingredients}}: adjust salt and pepper, then add parsley if using. Serve one thigh per portion with potatoes, spinach and sauce."
    }
  ]
}
```

### garlic-parmesan-chicken-potatoes — body

Before:

```json
"\n## Chef's Note\n\nThese chicken thighs finish in a garlic-Parmesan cream sauce with spinach, while the potatoes roast separately. Keep the potatoes beside the sauce at serving if you want their browned edges to remain crisp; sauce contact softens them. Brown the chicken first, then use temperature rather than skin color to judge the oven finish.\n\n## Directions\n\n1. **Start the potatoes:** Preheat the oven to 425°F. Set out cooking spray (if using), olive oil, and baby potatoes. Quarter the baby potatoes into similar pieces, toss with enough olive oil to coat, and spread in one layer on a rimmed sheet pan. Roast about 20–25 minutes, checking for browned edges and a center that yields easily to a knife; continue as needed. Check that all the measured thighs fit without overlap in your oven-safe skillet; use a baking dish for the chicken finish if needed. Prepare the chicken and sauce while the potatoes roast. The optional cooking spray is for the baking-dish variation below, which uses a different oven temperature and omits the separate potato roast.\n2. **Brown the chicken:** Use bone-in skin-on chicken thighs, Italian seasoning, salt, black pepper, and unsalted butter: pat chicken dry with paper towels, then season with Italian seasoning, salt and pepper. Melt the butter in a large skillet over medium-high heat. Sear chicken skin-side down until deep golden, about 5–7 minutes, then brown the other side for about 2 minutes. Work in batches if needed, reducing heat if the butter or fond begins to burn. Transfer to a plate reserved for partly cooked chicken; continue directly with the recipe.\n3. **Wilt the spinach:** Use unsalted butter and baby spinach: melt the butter for this step in the skillet, add spinach and stir until it begins to wilt, about 2 minutes. Transfer spinach to a bowl. Pour off excessive rendered chicken fat, keeping the browned fond and leaving no burned bits.\n4. **Make the roux:** Use unsalted butter, garlic cloves, and all-purpose flour: melt the sauce butter over medium heat. Add garlic and stir until fragrant, about 1–2 minutes, without browning it. Whisk in flour and cook about 1 minute, stirring until smooth and lightly colored.\n5. **Finish the sauce:** Use chicken broth, dried thyme, dried basil, heavy cream or half-and-half, and freshly grated Parmesan: gradually whisk broth into the roux with thyme and basil, loosening the browned fond. Simmer gently, whisking, until smooth and lightly thickened, about 1–2 minutes. Lower the heat and stir in cream and Parmesan, about 1–2 minutes, until the cheese melts. Do not boil hard after adding cheese. The sauce has contacted partly cooked chicken fond; wait until the final bake is complete before tasting it.\n6. **Finish the chicken in sauce:** Stir the wilted spinach into the sauce and return the seared chicken skin-side up. Keep as much skin above the sauce as possible. If your oven-safe skillet cannot hold the thighs in one layer, transfer chicken, spinach and sauce to a baking dish large enough to fit them without overlap. Keep the roasted potatoes separate for crispness; adding them to the sauce will soften their surface.\n7. **Bake and measure:** Transfer the skillet or chicken baking dish to the 425°F oven. Begin checking after about 10 minutes; the thickest part of every thigh, away from bone, and the sauce at the center must reach 165°F / 74°C. Continue baking as needed; ten minutes is a first check, not a guarantee of completion. If the skin darkens early, shield it loosely with foil while the meat finishes. Check the separately roasted potatoes for tenderness as well. Rest safely cooked chicken 5 minutes before serving.\n8. **Serve:** After the bake meets the temperature checks, taste the sauce with a clean spoon. Use salt, black pepper, and fresh parsley (if using): adjust salt and pepper, then add parsley if using. Serve one thigh per portion with potatoes, spinach and sauce.\n\n## Potatoes Baked in the Sauce\n\nFor the baking-dish variation, omit the separate potato roast and its oil. Preheat to 400°F and lightly coat a 9-by-13-inch baking dish with the optional cooking spray. Sear the chicken and make the spinach and sauce as directed. Put chicken skin-side up in the dish, arrange the raw quartered potatoes and spinach around it and pour in the sauce. Bake about 25–30 minutes as a first check, then continue until every thigh and the sauce center reach 165°F / 74°C and potatoes are easily pierced. If safely cooked chicken finishes first, move it to a clean plate while the potatoes finish. Rest cooked chicken five minutes, then taste and season the safe sauce. Potatoes baked this way are soft and sauced. Add dishes as needed to keep the scaled chicken in one layer.\n"
```

After:

```json
"\n## Chef's Note\n\nThese chicken thighs finish in a garlic-Parmesan cream sauce with spinach, while the potatoes roast separately. Keep the potatoes beside the sauce at serving if you want their browned edges to remain crisp; sauce contact softens them. Brown the chicken first, then use temperature rather than skin color to judge the oven finish.\n\n## Directions\n\n1. **Start the potatoes:** Preheat the oven to 425°F. Set out cooking spray (if using), olive oil, baby potatoes, and salt. Quarter the baby potatoes into similar pieces, toss with enough olive oil to coat and salt to taste, and spread in one layer on a rimmed sheet pan. Roast about 20–25 minutes, checking for browned edges and a center that yields easily to a knife; continue as needed. Check that all the measured thighs fit without overlap in your oven-safe skillet; use a baking dish for the chicken finish if needed. Prepare the chicken and sauce while the potatoes roast. The optional cooking spray is for the baking-dish variation below, which uses a different oven temperature and omits the separate potato roast.\n2. **Brown the chicken:** Use bone-in skin-on chicken thighs, Italian seasoning, salt, black pepper, and unsalted butter: pat chicken dry with paper towels, then season with Italian seasoning, salt and pepper. Melt the butter in a large skillet over medium-high heat. Sear chicken skin-side down until deep golden, about 5–7 minutes, then brown the other side for about 2 minutes. Work in batches if needed, reducing heat if the butter or fond begins to burn. Transfer to a plate reserved for partly cooked chicken; continue directly with the recipe.\n3. **Wilt the spinach:** Use unsalted butter and baby spinach: melt the butter for this step in the skillet, add spinach and stir until it begins to wilt, about 2 minutes. Transfer spinach to a bowl. Pour off excessive rendered chicken fat, keeping the browned fond and leaving no burned bits.\n4. **Make the roux:** Use unsalted butter, garlic cloves, and all-purpose flour: melt the sauce butter over medium heat. Add garlic and stir until fragrant, about 1–2 minutes, without browning it. Whisk in flour and cook about 1 minute, stirring until smooth and lightly colored.\n5. **Finish the sauce:** Use chicken broth, dried thyme, dried basil, heavy cream or half-and-half, and freshly grated Parmesan: gradually whisk broth into the roux with thyme and basil, loosening the browned fond. Simmer gently, whisking, until smooth and lightly thickened, about 1–2 minutes. Lower the heat and stir in cream and Parmesan, about 1–2 minutes, until the cheese melts. Do not boil hard after adding cheese. The sauce has contacted partly cooked chicken fond; wait until the final bake is complete before tasting it.\n6. **Finish the chicken in sauce:** Stir the wilted spinach into the sauce and return the seared chicken skin-side up. Keep as much skin above the sauce as possible. If your oven-safe skillet cannot hold the thighs in one layer, transfer chicken, spinach and sauce to a baking dish large enough to fit them without overlap. Keep the roasted potatoes separate for crispness; adding them to the sauce will soften their surface.\n7. **Bake and measure:** Transfer the skillet or chicken baking dish to the 425°F oven. Begin checking after about 10 minutes; the thickest part of every thigh, away from bone, and the sauce at the center must reach 165°F / 74°C. Continue baking as needed; ten minutes is a first check, not a guarantee of completion. If the skin darkens early, shield it loosely with foil while the meat finishes. Check the separately roasted potatoes for tenderness as well. Rest safely cooked chicken 5 minutes before serving.\n8. **Serve:** After the bake meets the temperature checks, taste the sauce with a clean spoon. Use salt, black pepper, and fresh parsley (if using): adjust salt and pepper, then add parsley if using. Serve one thigh per portion with potatoes, spinach and sauce.\n\n## Potatoes Baked in the Sauce\n\nFor the baking-dish variation, omit the separate potato roast and its oil. Preheat to 400°F and lightly coat a 9-by-13-inch baking dish with the optional cooking spray. Sear the chicken and make the spinach and sauce as directed. Put chicken skin-side up in the dish, arrange the raw quartered potatoes and spinach around it and pour in the sauce. Bake about 25–30 minutes as a first check, then continue until every thigh and the sauce center reach 165°F / 74°C and potatoes are easily pierced. If safely cooked chicken finishes first, move it to a clean plate while the potatoes finish. Rest cooked chicken five minutes, then taste and season the safe sauce. Potatoes baked this way are soft and sauced. Add dishes as needed to keep the scaled chicken in one layer.\n"
```

### custard-peach-ice-cream — cookingMethods

Before:

```json
["steam"]
```

After:

```json
["simmer"]
```

### key-lime-pie — body

Before:

```json
"\n## Chef's Note\n\nWhisk the yolks into condensed milk, then add lime juice for a smooth, tart filling. Acid thickens the mixture but does not replace cooking the eggs. Bake to the measured center temperature, then chill long enough for clean slices.\n\n## Directions\n\n1.  **The Crust:** Preheat oven to 350°F. Stir together crumbs, sugar, and melted butter until it looks like wet sand. Press firmly into the bottom and up the sides of a 9-inch glass pie plate with about 4 cups capacity. Bake for 10 minutes. Let cool.\n2.  **The Emulsion:** In a large bowl, whisk the condensed milk and egg yolks until pale and thick.\n3.  **The Bind:** Slowly whisk in the key lime juice - the mixture will noticeably thicken.\n4.  **Bake:** Pour the filling into the cooled crust. Begin checking after 15 minutes and continue until the center reaches 160°F / 71°C, with set edges and a slight central wobble.\n5.  **The Finish:** Cool on a rack, then refrigerate promptly, within 2 hours of baking (1 hour above 90°F). Cover once cool and chill for **at least 8 hours** before slicing.\n6.  **The Crown:** Just before serving, whip the heavy cream and powdered sugar until stiff peaks form.\n7.  **Serve:** Mound the cream over the pie. Garnish with lime zest.\n"
```

After:

```json
"\n## Chef's Note\n\nWhisk the yolks into condensed milk, then add lime juice for a smooth, tart filling. Lime juice thickens the mixture, but acidity does not replace cooking the eggs. Bake to the measured center temperature, then chill long enough for clean slices.\n\n## Directions\n\n1.  **The Crust:** Preheat oven to 350°F. Stir together crumbs, sugar, and melted butter until it looks like wet sand. Press firmly into the bottom and up the sides of a 9-inch glass pie plate with about 4 cups capacity. Bake for 10 minutes. Let cool.\n2.  **The Emulsion:** In a large bowl, whisk the condensed milk and egg yolks until pale and thick.\n3.  **The Bind:** Slowly whisk in the key lime juice - the mixture will noticeably thicken.\n4.  **Bake:** Pour the filling into the cooled crust. Begin checking after 15 minutes and continue until the center reaches 160°F / 71°C, with set edges and a slight central wobble.\n5.  **The Finish:** Cool on a rack, then refrigerate promptly, within 2 hours of baking (1 hour above 90°F). Cover once cool and chill for **at least 8 hours** before slicing.\n6.  **The Crown:** Just before serving, whip the heavy cream and powdered sugar until stiff peaks form.\n7.  **Serve:** Mound the cream over the pie. Garnish with lime zest.\n"
```

### old-fashioned-vanilla-ice-cream — cookingMethods

Before:

```json
["simmer", "boil"]
```

After:

```json
["simmer"]
```

### strawberry-summer-cake — body

Before:

```json
"\n## Chef's Note\n\nCream the softened butter and batter sugar until fluffy, then mix only until the flour disappears. Arrange the berries over the batter and add the reserved topping sugar. Lower the oven temperature after ten minutes; test cake crumb between the berries so fruit juice is not mistaken for raw batter.\n\n## Directions\n\n1.  **Cream:** Preheat oven to 350°F. Butter a 9-inch deep-dish pie pan with the extra greasing butter; a standard shallow 9-inch pie pan can overflow. Reserve one-ninth of the measured sugar for the topping. Beat butter and the remaining eight-ninths of the sugar (1 cup at the original batch size) for 3 minutes until pale and fluffy.\n2.  **Emulsify:** Add the egg, milk, and vanilla. Mix until just combined.\n3.  **Incorporate:** Whisk the flour, baking powder, and salt together, then gradually add this dry mixture. Mix until **just smooth** - do not over-mix.\n4.  **Layer:** Pour batter into the pan. Arrange strawberries on top, cut-side down, as closely as possible in a single layer; a little overlap is fine.\n5.  **The Crunch:** Sprinkle the reserved topping sugar (2 tbsp at the original batch size) over the berries.\n6.  **Bake:** Bake for 10 minutes at 350°F, then **reduce heat to 325°F**. Bake for another 50-60 minutes until golden and a tester inserted into cake crumb is free of wet batter; strawberry juice on the tester is expected.\n7.  **Serve:** Let cool completely in the pan. Serve with lightly whipped cream.\n"
```

After:

```json
"\n## Chef's Note\n\nCream the softened butter and batter sugar until fluffy, then mix only until the flour disappears. Arrange the berries over the batter and add the reserved topping sugar. Lower the oven temperature after ten minutes; test cake crumb between the berries so fruit juice is not mistaken for raw batter.\n\n## Directions\n\n1.  **Cream:** Preheat oven to 350°F. Butter a 9-inch deep-dish pie pan with the extra greasing butter; a standard shallow 9-inch pie pan can overflow. Reserve one-ninth of the measured sugar for the topping. Beat butter and the remaining eight-ninths of the sugar (1 cup at the original batch size) for 3 minutes until pale and fluffy.\n2.  **Emulsify:** Add the egg, milk, and vanilla. Mix until just combined.\n3.  **Incorporate:** Whisk the flour, baking powder, and salt together, then gradually add this dry mixture. Mix until **just smooth** - do not over-mix.\n4.  **Layer:** Pour batter into the pan. Arrange strawberries on top, cut-side down, as closely as possible in a single layer; a little overlap is fine.\n5.  **The Crunch:** Sprinkle the reserved topping sugar (2 tbsp at the original batch size) over the berries.\n6.  **Bake:** Bake for 10 minutes at 350°F, then **reduce heat to 325°F**. Bake for another 50-60 minutes until golden and a tester inserted into cake crumb is free of wet batter; strawberry juice on the tester is expected.\n7.  **Serve:** Let cool completely in the pan. Serve with the optional lightly whipped cream.\n"
```

## Boundaries and remaining work

Baked Chicken and Broccoli remains held over the saved split-breast cut/count and pan capacity; no replacement quantities or cooking schedule are guessed. The pressure-cooker Bolognase and fresh kimchi holds continue. Recipe-specific kitchen questions are retained. Targeted repair status does not certify a complete review.

Local validation: 252/252 tests; 30/30 aggregate QA; 643 recipes validated; 15 authored formulas consistent with generated fields; 643 JSON-LD, text and private Paprika exports match source;private identity checks and published-asset/public-evidence privacy checks pass. The build has 758 HTML pages and 11794 internal anchors with zero missing destinations.

All ten built pages were inspected for complete cooking prose and at 375px mobile width with no horizontal overflow. Eight recipes passed half/double/reset ingredient checks; Garlic Parmesan combined butter shopping totals were 7 tbsp original, 3.5 tbsp half and 14 tbsp double. Ingredient checklist and cook-mode entry/exit passed. Print invocation stalled in the in-app browser; a successful print preview is not claimed. No print styles or interaction code changed.

Exact remote commit and deployment evidence will be appended after publication. Public records omit native identity values and archives; exact original evidence and identity bindings remain privately retained.
