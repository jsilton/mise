# Poke batch: considered retention and integration decision

Proposal only, 6 September 2026. Repository unchanged. All four complete originals were read and copied under `originals/`. Four complete proposed recipes are under `recipes/`, each with a separate original-slug record under `reviews/`. No recipe alias is proposed or executed. No whole meal receives an editorial review label.

## Compare all three poke originals before deciding

| Original slug          | Defining original behavior                                                                                                         | Considered decision                                                                                                                                                                                         |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `shoyu-tuna-poke-bowl` | Three larger bowls; mild sugar/shoyu dressing, fresh cucumber, a full cup edamame and lightly seasoned rice prepared inline.       | Retain at original slug. Own mild sauce and fresh-cucumber composition remain, with a measured plain-rice dependency and its original light finishing seasoning.                                            |
| `tuna-poke-bowls`      | Four bowls; chile dressing, prepared Korean cucumber salad, half cup edamame and dry nori over four cooked cups rice.              | Retain as **Tuna Poke Bowls with Chile and Cucumber Salad**. Its second seasoned cucumber component, heat and garnish balance distinguish it from the mild fresh-cucumber bowl beyond merely serving count. |
| `poke-bowl-bar`        | Hosting format with one or two seafood choices, one or two rice types, multiple fresh and seasoned vegetables, separate garnishes. | Retain as **Poke Bowl Bar**. A measured total, proportional dressing and cold self-service are a real separate workflow. Do not collapse the salmon/scallop choices into tuna silently.                     |

The fish dressings overlap substantially and could ultimately be tested as variations under one canonical recipe. Written overlap alone does not demonstrate that losing the separate composed recipes improves the user's collection. This review preserves recognizable food choices rather than manufacturing an alias merely to increase completion. If a future deliberate consolidation is chosen, preserve the exact mild/chile compositions and the meal variant selection, write each original's decision and follow the standard's aliases/redirects/reference requirements. Do not call an original considered merely because it was content-searched.

Master shari is retained as distinct from plain gohan, with a complete individual rewrite. Improvements to it do not certify every sushi roll that links it.

## Recipe integration

- Apply the four full recipe drafts and their individual review records after root evaluation and independent challenge.
- The shoyu recipe now declares `usesBase: steamed-white-rice`, which matches its default lightly seasoned inline rice preparation. Its optional prepared shari replacement is measured at four cooked cups and omits only the three ingredients under Rice, preserving dressing vinegar/sugar.
- The chile tuna recipe and bar declare shari and oi muchim dependencies. Both use one half recipe of oi muchim (300 g starting cucumber); their cooked rice amounts are measured independently of the larger shari batch yield.
- Remove automatic pairsWith entries for rice/cucumber/edamame already included, so extra component cards do not imply doubling the meal. The misleading jasmine-rice link to rice pilaf is corrected to genuine plain rice.
- No current meal directly references poke-bowl-bar. Do not repoint the existing fixed bowls to the bar automatically.
- Current other master-shari incoming recipe slugs are `philly-tuna-roll`, `spicy-tuna-roll`, `new-york-crunch-roll`, `rice-bowl-station-buddha-bowls`, and `japanese-style-trout-with-dashi`. Their links remain valid; their portions and source claims remain separately pending. Shortening the master display title requires no new slug or alias.

## Direct meals: targeted defects, no new meal certification

### `src/content/meals/shoyu-tuna-poke-bowl-night.md`

Read full original. Its main already includes rice, so remove redundant `base: master-sushi-rice` when integrating the revised main. Replace its overview with this scope-accurate text:

> Three generous shoyu tuna bowls with lightly seasoned rice, fresh cucumber, edamame and avocado. Prepare one complete batch of the main recipe; it already includes four cooked cups of rice, so do not add a second rice base. This is a raw-seafood meal for diners who deliberately choose it; follow the main recipe's sourcing guidance. FDA advises children and other vulnerable groups to avoid raw seafood.

Remove `kid-friendly` and the two-adults-and-one-child assertion. Preserve servings three unless a separate cooked-child plate is actually developed; do not silently change the main into cooked fish. Replace 40-minute total implied workflow with the main's approximately 85-minute elapsed / approximately 30-minute active estimate, noting active workload still needs a meal-level timing check. The present meal has no `totalTime`; add it only as a clearly estimated instruction, not a review certificate. It must not claim universal 20-minute rice cooking or indefinite damp-cloth warm holding.

For Cooking Strategy, follow the main's complete plain-rice process; season only once; prepare/chill edamame according to its package; cut vegetables before fish; make dressing and keep it clean until fish is added; dress cold fish about 5–10 minutes near service; assemble only when ready. Remove exact-curing timer claims. No new whole-meal status is assigned in this batch.

### `src/content/meals/poke-bowl-night.md`

Read full original. It names `tuna-poke-bowls` as main but repeats master rice and adds whole smashed cucumber salad plus steamed edamame. The revised main already includes measured rice, oi muchim, beans and avocado. These are real duplicate role/portion problems. Do not keep calling the standalone ingredients “great additions” when they are already included.

A coherent simplest future composition is one complete four-bowl chile tuna recipe with no extra rice/cucumber/bean side. That would require removing `base` and `sides`, correcting Japanese-only cuisine to the actual Hawaiian-inspired/Korean composition, and rewriting the schedule around approximately 90 minutes with parallel rice/cucumber/bean work. This is a recommendation for root's separate meal evaluation, not an automatic deletion of the original sides in these drafts. If retaining the original smashed cucumber and steamed edamame sides, explicitly omit/replace the main's oi muchim/bean toppings and choose weighed side quantities first; the two cucumber styles should not silently become interchangeable. Read and individually review steamed-edamame before certifying that version.

Regardless of later composition choice, remove label-only “sushi-quality/sushi-grade” guarantees now, point the sourcing instruction to the reviewed main, and remove unsupported 25-active/40-elapsed implication. The main's four cups prepared rice already specify the rice requirement. No calendar or salmon cooked-bowl meal is rewritten or considered reviewed here.

## Evidence and tests

See sources.md and each individual record for the official raw seafood/parasite/histamine boundaries and primary rice/cultural sources. All portion estimates, poke flavor choices, staged shari salt, base yields and timings are editorial work, not kitchen tests. The household's mint tzatziki and herb-rich Southern dressing preferences are outside this batch and unchanged.
