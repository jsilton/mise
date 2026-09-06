# Four-recipe internal-consistency baseline

Root compared the complete frozen pasta recipes, worker output and sealed reference B on 2026-09-06. This is the deliberately limited internal-only trial, not the source-backed pipeline result.

The worker reported 198 seconds elapsed (23:25:52–23:29:10 UTC). Billing tokens, dollars and measured active expert time are unavailable; no savings claim is supported. Reading and adjudication were not instrumented, so elapsed message spacing must not substitute for active time.

Of seven confirmed reference material issues, the worker detected three and missed four: the ricotta pasta tenderness checkpoint, carbonara egg endpoint assurance, carbonara split-egg scaling, and Alfredo make-ahead guidance. Three other reference findings remain conditional rather than confirmed defects. The reference itself is not infallible. The worker also correctly found an ambiguous finishing-oil allocation and two incorrect method labels. Zero exact edits were proposed, so routine-edit acceptance is undefined, not 100%.

The scaling miss was reproduced against the actual scaler: doubling `4 large Eggs (2 whole, 2 yolks)` displays `8 large Eggs (2 whole, 2 yolks)`. The egg endpoint concern was checked against the [FDA egg guidance](https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/assuring-safety-eggs-and-menu-and-deli-items-made-raw-shell-eggs): pasteurized eggs are the supported option for sauces not thoroughly cooked. This does not validate any particular carbonara batch or temperature.

Output quality also needs correction: some process equipment was inferred rather than explicitly stated, and the carbonara process summary compresses seven source steps into six stages without an explicit source-step mapping. No proposed replacement text means no published unsupported additions, but it does not prove the findings are error-free. Defining ingredients remained unchanged.

## Decision

Do not expand this baseline unchanged. Supply the family evidence packets, demand explicit whole-recipe coverage including frontmatter and exact routine replacements, and separate stated equipment from inferred tools. Run the remaining families under this revision, retaining this baseline as a separate cohort. Re-evaluate pasta using the complete protocol without overwriting these results. No recipe is newly marked reviewed by this evaluation.
