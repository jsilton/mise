# Soups and broths: independent whole-recipe challenge

Four candidates pass for root inspection at the exact hashes below. Dashi requires one bounded preservation/record correction; its formula and two cooking routes pass. Minestrone stays wholly held and is excluded from acceptance. No candidate, main source, Git state or export was edited. This is a written editorial challenge, not kitchen certification.

Input commit: `afc39e07c49baed6924053ac34023a104d93c93a`. Batch results SHA-256: `9c8ec9bcaea1a0d691587c2573ad8487f89cf22b14d01761fbdf6e7b81ac0ee0`. Frozen input and exact earliest saved extracts independently byte-match Git for all six. No native UID lineage or inaccessible current Epicurious formula certification is asserted.

| Recipe                        | Decision                      | Candidate SHA-256                                                  |
| ----------------------------- | ----------------------------- | ------------------------------------------------------------------ |
| avgolemono-soup               | accepted-for-root-inspection  | `041f48f2c9a3352291f886b2e37a853fd61746683297aa8049277718343d64c7` |
| cantonese-wonton-broth        | accepted-for-root-inspection  | `a6021169691d9cd8f3760760b4f9f0baf823470a534f62fb84185473d9b7b749` |
| cream-of-mushroom-soup        | accepted-for-root-inspection  | `4827350aa6f877d5e03f4cce4438cc504c7028c3a8417b460ac034f5866143c2` |
| curried-carrot-and-apple-soup | accepted-for-root-inspection  | `1a0f7206960e3e3580446cc80ec2bce21214e79cfa24cd81ae711c28e1254772` |
| dashi-japanese-sea-stock      | correction-required           | `0573ac91479f461688e2e4d620e3ce7b8b1f60383425ec19af928fda10b6b818` |
| vegetable-minestrone          | held-excluded-from-acceptance | No candidate                                                       |

## avgolemono-soup

- All 1 lb cooked chicken, 6 cups prepared broth, 1/2 cup dry rice OR orzo, 2 eggs and juice of 2 lemons/about 1/3 cup total remain. Rice and orzo are distinct package-dependent branches.
- Tempering temporarily transfers about one-third of the listed broth (about 2 cups original), returns it all and adds no new broth. Heating cooked chicken/soup before tempering and the completed chicken-and-egg soup to 165°F is within CDC meat-containing egg-dish guidance; the low-heat/no-boil texture advice makes no guarantee against curdling.
- Header includes grain cooking, warming and egg finishing; four portions are planning yield, not measured volume. Properly refrigerated leftover chicken is explicit; its earlier storage clock is not reset. Final seasoning follows safe cooking; cold shallow storage and soup reheating are complete.

Confidence: High ingredient/allocation and safety applicability; planning times, bowl yield and smoothness remain untested.

Evidence and applicability:

- [Primary/attributed source](https://www.cdc.gov/food-safety/foods/safer-food-choices.html): Egg dishes containing meat or poultry: 165°F; meat-free 160°F does not replace this mixed-soup endpoint.
- Git `cf53871c99aa9edff6b426756165214524649f97`: Exact first committed formula and tempering sequence. No attributed external publisher or native UID lineage is established.
- Git `a2c9e28069faa57c7bb7fe4ac5e7ca02b6462861`: About 1/3 cup total lemon-juice wording remains.

Exact consequential before/after excerpts:

Before:

> 4.  **Temper (Critical):** While whisking the egg-lemon mixture constantly, slowly ladle in 2 cups of the hot broth, one ladle at a time. This "warms up" the eggs so they don't scramble when they hit the pot.

After:

> 4. **Temper:** Reduce the pot to low heat. While whisking the egg-lemon mixture constantly, gradually ladle in about one-third of the measured broth from the soup, one ladle at a time: about 2 cups in the original 6-cup broth batch. This is a transfer from the pot, not additional broth. Use a bowl large enough for the expanded mixture.

Before:

> 5.  **Combine:** Pour the tempered egg mixture back into the large pot. Stir constantly over **low heat** for 2 minutes. The soup will instantly turn creamy and opaque.

After:

> 5. **Combine and heat:** Pour the tempered mixture back into the soup slowly while stirring. Continue stirring over low heat until the soup reaches 165°F / 74°C throughout, checking after stirring and away from the pot bottom. Take it off the heat once the endpoint is reached. Aim for a creamy, opaque broth without a vigorous boil; a fixed 2-minute clock or opacity alone does not establish doneness.

Kitchen questions retained:

- Record rice/orzo package and actual dry-grain weight without treating the two choices as equivalent.
- Measure active/elapsed time, pot capacity and four actual bowl portions.
- Record safe heating and smoothness through tempering, final 165°F and leftover reheating.

## cantonese-wonton-broth

- Prepared 6 cups broth; 1 tbsp dried shrimp OR 1 tsp fallback fish sauce; 2 smashed ginger slices; 2 scallion stalks; 1 tsp light soy sauce in BOTH branches; unmeasured salt/white pepper all have destinations. Infused solids are strained; evaporation/straining losses are not replaced by an invented finished-volume guarantee.
- The first committed recipe already calls fish sauce a fallback while cumulatively adding it in the method. Full later culinary history provides no explicit decision to make both seafood doses cumulative. Candidate resolves that contradiction by honoring the ingredient fallback wording, without averaging doses or importing a traditional flounder formula.
- Linked wontons are cooked in separate water according to their own complete recipe. That current dependency was read and retains refrigerated raw filling/waiting wontons, cooked test filling before tasting, and 165°F larger-center endpoints rather than floating alone. Broth timing excludes filling/wrapping/cooking the separate recipe; six portions remain planning yield.

Confidence: High saved fallback/allocation evidence; broth strength, strained yield, stock salt and dependency quantities remain kitchen/meal questions.

Evidence and applicability:

- Git `6565bfe1fef37b87d40199b95526c00f929d2eaa`: First complete committed recipe establishes exact amounts and contradictory fallback/method wording.
- Git `493885bb`: Earlier removal of unsaved black-vinegar addition remains; no vinegar restored.
- `src/content/recipes/cantonese-shrimp-and-pork-wontons.md`: Current separately cooked dependency and targeted raw-filling/165°F repairs; dependency is not certified by this broth acceptance.

Exact consequential before/after excerpts:

Before:

> 1.  **Infuse:** In a large pot, combine the chicken broth, smashed ginger, green onion pieces, and dried shrimp.

After:

> 1. **Choose and infuse:** Choose dried shrimp or the fish sauce fallback. Put the measured chicken broth, smashed ginger and green onion pieces in a pot. Add the dried shrimp only if using that branch; keep fallback fish sauce for step 4.

Before:

> 4.  **Season:** Stir in the light soy sauce and fish sauce. Add salt and a pinch of white pepper to taste.

After:

> 4. **Season:** Stir in all the measured light soy sauce. Add all the measured fish sauce only for the branch that omitted dried shrimp. Taste, then use the listed salt and white pepper allowance as needed.

Before:

> 5.  **Serve:** Keep hot while you boil the wontons in a **separate** pot of plain water. This ensures your broth stays clear and doesn't get thickened by the starch on the wonton skins.

After:

> 5. **Serve:** Use with [separately prepared Cantonese shrimp and pork wontons](/recipes/cantonese-shrimp-and-pork-wontons), cooking those according to their own method in a separate pot of water. Broth preparation excludes wonton mixing, wrapping and cooking. Serve the broth hot; its finished volume depends on simmering and straining losses.

Kitchen questions retained:

- Record stock salt, shrimp form/size and fish-sauce product strength without inferring their equivalence.
- Measure finished strained broth, six serving portions and actual heating/simmer losses.
- Check separately prepared wonton dependency timing and quantity in its own recipe/meal review.

## cream-of-mushroom-soup

- All 16 oz cremini plus 2/3 cup sliced shiitake, 1/4 cup butter, shallot, 2 garlic cloves, 4 cups vegetable stock, 1/3 cup heavy cream, 1 tsp dried thyme, seasoning and current 1 tbsp sherry remain. Entire butter allocation is shared across browning batches, not repeated.
- Prior 5741495b moisture-loss/color browning endpoint, 10–20 minute planning stage and hot-blender repair are retained. The complete hot-blender step is byte-identical to frozen input: actual model/manual governs allowed temperature/fill/lid/vent, no hot sealed personal cup; immersion instructions retain submerged/off-heat operation and stopping before lifting. Manufacturer applicability is conditional on the actual machine, not presumed from brand.
- About 1 cup browned garnish belongs to original 16 oz-plus-2/3 cup batch and scales proportionally (1/2 cup half; 2 cups double). The rest is puréed and all mushrooms are served. Current top-garnish presentation and later sherry remain alongside a private disclosure that original stirred the reserve in. Delish current mushroom weights, fresh thyme, four portions and time header are not imported.

Confidence: High preservation/allocation/manual-scope evidence; actual browned volume, machine, loads, heating and six-bowl yield remain unmeasured.

Evidence and applicability:

- Git `045e5ba276b560e4f7d3d485b4860f610d295bac`: Exact older ingredient formula and one-cup reserve; old reserve was stirred into soup.
- Git `e5567b7c0b6785b04d3b95c513eae8b4ce52239a`: Later explicit one-tablespoon finishing sherry and garnish presentation; history of change, not a claimed kitchen test.
- Git `5741495b479d1891066e004ed07aa4b5f830db66`: Accepted current browning/time and hot-blender repairs.
- [Primary/attributed source](https://www.delish.com/cooking/recipe-ideas/recipes/a55765/cream-of-mushroom-soup-recipe/): Attributed Lena Abraham publisher method; modern amounts/yield differ from saved formula.
- [Primary/attributed source](https://www.vitamix.com/us/en_us/owners-resources/product-support/faqs): Applicable manufacturer hot-liquid restrictions, including sealed 20-ounce container prohibition; actual manual overrides generic assumption.
- [Primary/attributed source](https://www.nutribullet.com/blog/getting-started-how-to-use-nutribullet/): Hot liquids prohibited in sealed cup design; not a blanket claim about every blender model.

Exact consequential before/after excerpts:

Before:

> 1.  **The Sear:** In a large heavy-bottomed pot, melt butter over medium-high heat. Add all mushrooms. Cook, stirring occasionally, until the released liquid has evaporated and the mushrooms are golden, about 10-20 minutes depending on the pot and moisture. Reduce the heat if the butter begins to scorch; browning, not an eight-minute timer, is the endpoint.

After:

> 1. **The Sear:** In a large heavy-bottomed pot, melt butter over medium-high heat. Add all mushrooms. Cook, stirring occasionally, until the released liquid has evaporated and the mushrooms are golden, about 10-20 minutes depending on the pot and moisture. Reduce the heat if the butter begins to scorch; browning, not an eight-minute timer, is the endpoint. If the mushrooms crowd the pot too deeply, work in batches, dividing the total measured butter among them and recombining the cooked mushrooms; extra batches add time.

Before:

> 2.  **Reserve:** Remove 1 cup of the seared mushrooms and set aside for the garnish.

After:

> 2. **Reserve:** Set aside a proportional portion of the browned mushrooms for the garnish: 1 cup in the original batch with 16 oz cremini and 2/3 cup sliced shiitake. Increase or decrease that garnish portion with the measured mushroom quantity when scaling; keep the rest in the soup pot.

Before:

> 5.  **The Emulsion:** Take the pot off the heat. Use an immersion blender according to its hot-liquid instructions, starting on low with the blade guard submerged; stop the motor before lifting it out. For a countertop blender, use only a container approved for hot liquids, let the soup cool to the manufacturer’s permitted temperature, and follow its fill and venting instructions in small batches. Never blend hot soup in a sealed personal-blender cup. Return the puree to the pot.

After:

> 5. **The Emulsion:** Take the pot off the heat. Use an immersion blender according to its hot-liquid instructions, starting on low with the blade guard submerged; stop the motor before lifting it out. For a countertop blender, use only a container approved for hot liquids, let the soup cool to the manufacturer’s permitted temperature, and follow its fill and venting instructions in small batches. Never blend hot soup in a sealed personal-blender cup. Return the puree to the pot.

Kitchen questions retained:

- Measure raw/prepared/browned mushroom yield and the original garnish share.
- Record pot surface, number of browning batches, butter behavior and actual 10–20 minute stage.
- Record actual blender model/cooling, six portions, smoothness and cream/sherry finish/reheat texture.

## curried-carrot-and-apple-soup

- All full 2 lb carrots, 1 1/4 lb celery root, apple, 4 tbsp butter, onion, leek, fennel, 1 tbsp curry, 7 gingersnap cookies, 2 garlic cloves, 1 tsp ginger, 2 thyme sprigs, salt/pepper, 2 quarts stock, 1 cup sour cream and 1 tsp vinegar remain. Cookie size/weight and curry strength are unknown; no guessed grams or starch equivalence.
- Both roots have independent tenderness checks; leek is washed; thyme stems leave before purée. Sour cream and vinegar are TOTAL batch quantities divided across blender loads and recombined, not repeated per load. Actual manufacturer temperature/load/lid/vent restrictions control handling; cooling/extra loads extend the estimate.
- Pumpkin seeds, mint and cilantro are retained as three separate unmeasured garnish allowances with serving destinations. Vegetarian-stock option uses the same stock amount and retains cookie/dairy suitability caveat. Current 90-minute planning allowance stays distinct from Food & Wine shorter source total; 12 portions are not kitchen-certified. Unsupported national-origin assertion is removed without inventing a replacement cuisine.

Confidence: High full-formula/garnish and total-load allocation evidence; cookie mass, prepared root weights, machine/loads, portion yield and timing require kitchen observation.

Evidence and applicability:

- Git `045e5ba276b560e4f7d3d485b4860f610d295bac`: Full original formula, 7-cookie identity, total dairy/acid and all three garnishes.
- Git `706ae14e10b46d2844d96831398faca6a27e9fed`: Current thyme/salt ingredient restoration after ae5f0d29 omitted their lines while still using them.
- [Primary/attributed source](https://www.foodandwine.com/recipes/curried-carrot-and-apple-soup): Food & Wine Editors formula corroborates saved amounts; current source active/total times differ and do not establish this kitchen timing.

Exact consequential before/after excerpts:

Before:

> 4.  **The Emulsion:** Working in batches, puree the soup in a blender with the sour cream and apple cider vinegar until completely smooth.

After:

> 4. **Blend:** Take the pot off the heat. Check the actual blender and vessel manual before starting. Never put hot soup in a sealed personal cup. For countertop blending, use a vessel approved for the mixture’s temperature and follow its fill, lid, venting and speed limits; cool first as the manual requires. Cooling and subsequent reheating add time. Purée in permitted loads with all the measured sour cream and vinegar divided among those loads. The entire listed dairy/vinegar amount is for the total batch, not each blender fill. Recombine all the purée; check for firm root pieces and blend further within the machine’s limits if needed.

Before:

> 6.  **Serve:** Ladle into bowls and top with toasted pumpkin seeds and fresh herbs for **Textural Balance**.

After:

> 6. **Serve:** Ladle into bowls and add the toasted pumpkin seeds, chopped fresh mint and chopped fresh cilantro to taste. These are garnish allowances, not measured additions to each blender batch.

Kitchen questions retained:

- Record cookie size/weight/spice and Madras curry strength for the saved count-based formula.
- Record purchased versus prepared celery-root/carrot weights and how both roots soften in the actual pot.
- Measure blender loads/model/cooling and finished twelve-portion yield, richness and garnish balance.

## dashi-japanese-sea-stock

- All 6 cups COLD starting water, 1 oz/about 30 g kombu and 2 packages x 5 g plain bonito/about 1 cup TOTAL remain. Starting water is not measured strained yield. Original 20-square-inch descriptive context is explicit, not an unscaled mass-equivalent claim. Half/double change pack count to 1/4 while each stays 5 g. Prior a2c9e280 total-volume wording is retained.
- Two complete routes stay separate: current ae5f0d29 ten-minute soak, remove kombu near boil, brief bonito boil, off-heat three-minute steep; original 045e no-soak, water/kombu just boil then off heat, remove kombu, add bonito and steep off heat, no second boil. Neither silently adopts Just One Cookbook’s different doses, soak or steep. No guarantee all flakes sink; both strain without squeezing.
- Fish-based classification is corrected to pescatarian. Cold shallow storage and separate spent-solids cooling are present; stock output is measured before linked dishes demand a fixed volume. Main formula and cooking routes pass. Exact named original reuse references are absent while record incorrectly says they were retained; bounded correction below is required.

Confidence: High exact Git formula/routes/reference evidence; direct current Epicurious corroboration, product area/weight, comparative taste and strained yield remain unresolved.

Evidence and applicability:

- Git `045e5ba276b560e4f7d3d485b4860f610d295bac`: Exact committed Epicurious-attributed no-soak/off-heat formula and named spent-ingredient reuse references; no native UID certification.
- Git `ae5f0d2982f9ff643f0bda41486259cf4ffd8b3e`: Later soak/bonito-boil adaptation exists and remains, rather than declaring its persistence household approval.
- Git `a2c9e28069faa57c7bb7fe4ac5e7ca02b6462861`: Bonito approximate one-cup TOTAL clarification retained.
- [Primary/attributed source](https://www.justonecookbook.com/how-to-make-dashi/): Namiko Hirasawa Chen supports kombu/bonito extraction mechanism and fish identity; her different amounts/timings do not certify saved formula.
- [Primary/attributed source](http://www.epicurious.com/recipes/food/views/dashi-japanese-sea-stock-103413): Attributed saved-source URL preserved; direct current-page retrieval failed, so no current publisher formula certification.

Exact consequential before/after excerpts:

Before:

> 2.  **Boil:** Bring to a simmer over medium-high heat. **Just before it reaches a boil**, remove and discard the kombu (or save for pickling).

After:

> 2. **Heat and remove kombu:** Heat over medium-high until bubbles begin forming and the liquid is close to boiling. Remove the kombu before a sustained boil. This is a short extraction, not a prolonged kombu simmer.

Before:

> 3.  **Bloom:** Sprinkle the katsuo bushi (bonito flakes) over the liquid. Let it come to a full boil, then immediately remove from heat.

After:

> 3. **Add bonito:** Open the measured packages of plain dried bonito flakes and sprinkle all the flakes over the liquid. Let the liquid just reach a boil, then immediately take the pan off the heat.

Before:

> 5.  **Strain:** Pour through a fine-mesh sieve or coffee filter into a clean bowl. Do not squeeze the flakes, as this will cloud the stock.

After:

> 5. **Strain:** Pour carefully through a fine-mesh sieve, or a coffee-filter-lined sieve, into the waiting vessel. Let it drain without squeezing the flakes. Discard spent kombu/flakes, or cool them promptly if keeping them for a separately specified reuse recipe.

Kitchen questions retained:

- Record kombu product, actual weight/thickness/area and bonito package labels/packing.
- Measure strained stock yield, heating/steep time and flavor for each preserved route.
- Check each linked recipe’s required measured stock volume and scaling separately.

## Required bounded Dashi correction

The verified exact original names both uses. The current candidate retains only a generic reuse instruction, so the record claim of retained source suggestions is inaccurate. No later explicit accepted removal is established; restore names without inventing the missing recipes.

Candidate step 5 before:

> 5. **Strain:** Pour carefully through a fine-mesh sieve, or a coffee-filter-lined sieve, into the waiting vessel. Let it drain without squeezing the flakes. Discard spent kombu/flakes, or cool them promptly if keeping them for a separately specified reuse recipe.

Candidate step 5 after:

> 5. **Strain:** Pour carefully through a fine-mesh sieve, or a coffee-filter-lined sieve, into the waiting vessel. Let it drain without squeezing the flakes. Discard spent kombu/flakes, or cool and refrigerate them promptly and separately if saving them for another recipe. Possible separate uses are kombu for pickled Napa cabbage and bonito flakes for rice with soy-glazed bonito flakes and sesame seeds; this stock method does not supply their pickling or seasoning instructions.

Private rationale before:

> ae5f0d29 rewrote the source method, later commits retained it. Preserve both complete routes with their own sequence; do not silently normalize the current formula to Just One Cookbook’s different ratio/soak/steep times. Original reuse suggestions are retained as separately specified uses, with prompt storage rather than invented pickling instructions.

Private rationale after:

> ae5f0d29 rewrote the source method, later commits retained it. Preserve both complete routes with their own sequence; do not silently normalize the current formula to Just One Cookbook’s different ratio/soak/steep times. The exact original names kombu for pickled Napa cabbage and bonito flakes for rice with soy-glazed bonito flakes and sesame seeds. These are preserved as named separate-recipe references only; no complete preparation, seasoning quantities, links, yield or pickling/preservation method is supplied.

- Apply corrected claim to records JSON findings[3].rationale and changes[body].rationale, and matching Markdown record.
- Record the two exact named reuse references as unresolved separate recipes: no measured ingredients added to the dashi formula, no invented recipe links/IDs, no implied preservation safety.
- Refresh exact body before/after, candidate hash, record/results hash and validation evidence after author correction.

Evidence: exact `045e5ba276b560e4f7d3d485b4860f610d295bac` at `src/content/recipes/dashi-japanese-sea-stock.md`, saved SHA-256 `901cb9f2c4baaf2a86fb5b3ead223c00fec34c88a08e2d401e0f6401591c3d86`. Exact saved prose establishes names/references, not complete reuse recipes or native lineage. Confidence: High exact-byte preservation and record mismatch; full reuse recipes remain unresolved.

## Minestrone hold

Primary stage uses 2 tbsp tomato paste; tomato-free-diced branch says add 2 tbsp at finish. Verified first/current history does not establish whether this replaces or adds to primary dose. Both 2/4 tbsp interpretations remain explicitly unaccepted. Whole recipe remains held, with all quantities/variants and prior targeted cooling/reheating repairs unchanged. The frozen source hash is `27de53faf8aee042cf57b423c3b49d75ce12dbe4063219919f31dfe03572f722`. No proposed source exists. Its two explicitly unaccepted allocation options remain private; no editorial choice between them is approved here.

## Checks and limits

All candidate identity, source credit, rating and linked-meal fields match frozen inputs. Every recorded before/after field matches the actual candidate/frozen field (null represents absent metadata); ingredient ledgers contain every candidate ingredient, and all destinations were read. The independently re-run focused lint reports 0 errors and the one disclosed missing-cuisine warning; readonly editorial checks find no issues. Half/original/double/reset scaling preserves all measured amounts, fixed package size and cut dimensions; proportions for tempering and mushroom reserve follow the listed batch. Manufacturer-specific hot-blender handling remains conditional on the actual machine.

[USDA leftovers guidance](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety) and [FoodSafety.gov temperature guidance](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures) scope cooling/reheating to cooked soup/leftovers: shallow prompt refrigeration within 2 hours, or 1 hour above 90°F, at 40°F or below; 3–4 days refrigerated; 165°F throughout and rolling boil for reheated soup. Source safety guidance does not certify actual cooling, texture, machine capacity or shelf life in a particular kitchen. The full independent JSON records the exact ingredient ledgers, scaling, hashes, questions and source applicability. The direct USDA page was unavailable in the author source packet; official indexed guidance and existing accepted repairs corroborate its scope. Root owns final integrated validation and acceptance after any author correction.

---

# Curried Carrot and Apple Soup: root metadata reconsideration

Retain `cuisines: [Indian]`; keep the proposed removal of `origin: India`. The original proposal overreached by removing both. This is a narrow root-requested reconsideration by the proposal’s author, not independent self-acceptance or a new whole-recipe acceptance.

The exact saved `045e5ba2` recipe includes Madras curry powder but does not establish a national origin. The actual `cfebbcb4` diff assigned `Indian-Fusion`; the later explicit `47b46d5a` taxonomy policy changed that tag to `Indian`. Its examples include adaptations. `CLAUDE.md` distinguishes single-country `origin` from cultural-style `cuisines`, while the current recipe standard requires preservation of cultural context without invented origins or authenticity. Older CONTRIBUTING wording calls cuisines “cultural origin,” but its examples and standardization encompass style/influence. That policy history supports retaining the existing filter tag, not inventing national recipe provenance.

The QA commit `2a7f3853` added `origin: India` without recipe-specific historical evidence. Removing that country remains supported. No French or other replacement is inferred.

Exact required metadata delta from the inspected proposal: absent `cuisines` → `cuisines: [Indian]`; absent `origin` stays absent. Correct the record sentence “India/Indian classification was not established by the actual publisher or recipe history, so no replacement national origin is invented.” to: “The publisher and exact saved formula do not establish India as this dish’s national origin, so origin is omitted. Preserve cuisines: [Indian] as the existing style/influence classification: the explicit taxonomy policy standardized this recipe’s Indian-Fusion tag to Indian. This is not a claim of authenticity or national invention.” Withdraw the record’s cuisine-removal rationale; retain the separate origin-removal rationale.

Confidence is high for the exact metadata lineage and current policy, moderate for the style interpretation. A future household decision to narrow cuisine-filter semantics could reconsider this tag; it does not need a new imagined origin now.

Do not restore duplicate Serving Suggestions/Pairs With body sections: their removal in `306e8136` was an explicit metadata policy. Retain Food & Wine attribution, the named Madras curry powder and existing pairing metadata.

Inspected hashes (SHA-256): frozen `aa6d0358eb65c933b9700b7f82c6d03f03b44c789e72b8ff9958e3036bd42a17`; proposal `1a0f7206960e3e3580446cc80ec2bce21214e79cfa24cd81ae711c28e1254772`; exact saved Git original `18417f64d70caae0b060c39d08309177ddd772b433d9adbcd3b37f9899b71bdf`. Actual metadata commit diffs and these bytes were checked. No candidate/main changes made; root final whole acceptance remains pending.

## Root final disposition

The full independent report is retained at its original checkpoint. Root inspected all five complete final sources, exact saved Git bytes, whole field/body diffs, prior cooking repairs and source disagreements. Dashi’s exact named reuse references and separate off-heat method remain; no unprovided reuse formula is invented. Carrot’s existing Indian style tag is preserved while unsupported country origin is omitted. Both bounded corrections are accepted after their exact prior-byte reconstructions and complete final inspection. All five are accepted for implementation; Minestrone remains held. Dependency recipes and physical kitchen behavior are not certified.

---

# Soups — independent root built-link check

Accepted the single Wonton href correction: `/recipes/cantonese-shrimp-and-pork-wontons` → `/mise/recipes/cantonese-shrimp-and-pork-wontons`. Reversing it recovers the prior accepted `a6021169691d9cd8f3760760b4f9f0baf823470a534f62fb84185473d9b7b749` source byte-for-byte. Final hash: `a640a7f22e4c0b3a1c794484fdd99fb59dcbf9e7db11d1ae6986126f1aed6e2c`.

Current main and private proposal agree. All frontmatter, quantities, variants and culinary text beyond the href are unchanged. All other four sources match the prior accepted integration-packet bytes and hashes. Public JSON full after fields and ingredient/process evidence agree with actual sources.

The public Wonton JSON also contains root-added dependency assessment and appended kitchen questions compared with the prior packet. These advisory differences are recorded explicitly; this href-only check does not renew acceptance of those annotations.

Deployment base is `/mise/`; the intended built target exists. Root supplied the prior missing root-link result; no rebuild or source/public mutation was performed. No kitchen claim is made. Minestrone remains excluded held.

The exact independent evidence is retained privately.

Root inspected this complete bounded correction and accepted it. Advisory dependency annotations were previously supported by root’s separate whole linked-recipe inspection; they change no recipe or dependent review status. The rebuilt 758 pages now have zero missing internal destinations.
