# Mise batch 09 — review images

49 exact-named PNGs at 1536 × 1024, review assets only. No merge, deployment or recipe mapping.

## QA result

All 49 food arrangements fit the central-half crop (x384–1152). Complete vessels pass in 46; three retain rim-only caveats after actual framing corrections. Full-frame and crop checks covered recipe counts, ingredients, steam, props/cutlery, centering and backdrop consistency. **45 candidates without material flags and four flagged review candidates:**

- **mediterranean-pinwheels-vegetarian-appetizer-vegan-and-low-carb-options.png**: seven pinwheels appear in two staggered rows rather than one loose row.
- **new-york-crunch-roll.png**: approximately 12 pixels of left rim and 8 pixels of right rim fall outside the middle-half crop after four framing corrections. All eight sushi pieces remain intact.
- **one-pan-lemon-herb-chicken-thighs.png** and **one-pot-chicken-meatballs-with-greens.png**: possible 1–2 pixels of outer white left rim loss after corrections; all food remains inside.

Minor notes: tzatziki, brisket, misir wot and miso soup are around 42–43% frame width after correction. Overnight-oats jar and toppings total about 68% frame height rather than nominal 75%. Several complete rims have narrow margins. Backdrop colors are generated approximations; some cast shadows are longer than ideal.

Source-specific interpretations: skewers in the melon cocktail and chicken kabobs are expressly listed food components, not extra props. Onigiri's malformed garnish field was interpreted as sesame seeds, with no text added. The playdough item is craft dough, not an edible recipe; its five specified colors override the general accent restriction.

## Source and provenance

[Source batch-09.md](https://github.com/jsilton/mise/blob/fbb3932ccb841da76ecca869cdbe9dca7ab5e49c/docs/image-prompts/batch-09.md), blob `29c9f74df36ced71813a8911cd6aac24879260a2`. Boundary found no new redo: the unchanged batch 07 rice redo had just been delivered and verified. Stale README status did not duplicate it or batch 08. Earlier files and historical QA remain untouched.

The original [margarita reference](https://github.com/jsilton/mise/blob/images/mise-style-tests-2026-10-31/docs/image-tests/2026-10-31/images/margarita-01-cookbook.png) was attached to every built-in generation call. Final PNGs are copied unchanged from selected generated outputs; only review crops and contact sheets are derived.

133 calls for 49 selected finals (84 remakes), across three concurrent groups of 40, 49 and 44 calls. Production and coordinator review ran approximately 12:58–13:45 UTC on 2026-11-02: about 47 wall minutes including tool waits, no intentional pause. A transient worker-capacity notification was resumed without duplicate work. Packaging, Library and remote Git saving are separate stages, not implementation or publication.

Exact prompts, source and generation provenance, hashes and QA are included. Six `review/` sheets show full frames and actual middle-half crops for entries 1–17, 18–33 and 34–49. Root independently reviewed all six sheets at approximately 13:50 UTC and approved saving these review candidates with all four flags retained. This is not user acceptance or a strict all-pass result. Final packaging and independent review added approximately five minutes after production; Library and Git persistence follow separately.
