# Coverage reconciliation — October 5, 2026

Input: `e24cf89a0a55eb0f67861e0897f0e05b94205a56`, fetched from fresh main. This reconciliation changes review accounting only; no recipe or meal is edited, and no new culinary approval is granted.

The [per-recipe matrix](coverage-matrix.json) has 643 canonical source rows. Stable `miseId` values were checked for presence and uniqueness and retained only in the ignored private matrix at `.mise/quality-handoff-2026-10-05/coverage-matrix.json`. The public matrix uses current paths and explicit legacy aliases. Ten considered consolidations map to their canonical rows rather than adding ten recipes. The two existing craft sources remain included in source/export accounting, without certifying them as food.

| Dimension                                              | Current count |
| ------------------------------------------------------ | ------------: |
| Canonical sources                                      |           643 |
| Recorded complete editorial status                     |           234 |
| Sources pending complete editorial review              |           409 |
| Original baseline                                      |           612 |
| Reviewed originals                                     |           228 |
| Considered original consolidations                     |            10 |
| Pending originals                                      |           374 |
| Additional canonical sources outside original baseline |            41 |
| Recorded complete reviews among additions              |             6 |
| Pending additions (recent Paprika imports)             |            35 |
| Recorded kitchen tests                                 |             0 |

The 41 additions are six earlier additions plus 35 recent imports. The original baseline remains immutable. The refreshed automated audit covers 643 sources, reports zero integrity errors and 752 review flags. Flags are investigation prompts, not confirmed defects or evidence of cooking quality. The earlier 608-source audit did not cover the additions.

The October 5 accelerated pass remains 37 implemented targeted repairs, five validated dessert candidates pending publication, four narrow no-change decisions and two holds. These are separate from complete editorial status. The retained private handoff supplies the exact 48-path dispositions and dessert checkpoint. Fresh main contains the three implementation waves `ee9c7078`, `858ff2c5` and `5741495b`, but no dessert release. No patch was applied while outgoing publication ownership remains unresolved.

The six specified repair commits (`a2c9e280`, `493885bb`, `9bdabb91` and the three waves) touch 105 unique current recipe paths. That is a deduplicated file-impact count, **not** 105 targeted cooking reviews: some changes only remove nutrition metadata or repair scaling. Exact recipe diffs are retained privately. Matrix rows distinguish these touches from accepted accelerated repairs, preserve recorded full-review status, and identify latest recipe/review-record commits without treating those commits as culinary certification.

Historical audits, repairs and recipe review records are linked by exact path/slug/alias where possible. `REVIEW_PROGRESS.md` is retained as collection-level evidence because many entries use titles and relative report links rather than exact slugs. Historical findings and remaining questions require contextual recheck; a linked report does not make an old defect current. Previously accepted work is retained rather than re-reviewed wholesale. An independent bounded editor checked counts, alias deduplication and privacy, and challenged file-touch inference and generated-matrix self-citation; both were corrected.

Production evidence remains qualified. The retained handoff establishes successful exact-commit deployments for the three repair waves. Current main's run [37346406123](https://github.com/jsilton/mise/actions/runs/37346406123) built successfully but failed deployment because the preceding Pages deployment was still in progress (HTTP 400). The preceding documentation successor `ba7d01d7` deployed successfully in [37346376561](https://github.com/jsilton/mise/actions/runs/37346376561). This reconciliation did not perform fresh live browser checks and does not report fresh main or the five desserts as published.

Both holds remain unchanged: pressure-cooker Bolognese needs actual electric-model/pressure/minimum-liquid/burn evidence; fresh kimchi needs reproducible salt density, drained yield and supported preservation guidance. Its original drains and squeezes without rinsing. Narrow no-change decisions do not certify entire recipes; the tenderloin-dog mustard-seed discrepancy remains open.

Validation on the unchanged recipe source: 245/245 Node tests, 10 structured formulas, 30/30 aggregate QA including build and recipe validation, 643 private identity bindings, 643-recipe three-export parity, published-asset privacy, and 758 built HTML pages / 11,769 internal anchors / zero missing destinations. No affected recipe pages exist for this accounting-only change, so no new recipe lint or interactive cooking/scaling/mobile/print check is claimed. No physical cooking or native-app sync occurred.

Next priorities: resolve single-publisher ownership and verify/recover the retained five-dessert release; then inspect a bounded group of still-current consequential formula findings rather than restarting the old campaign. Candidate old findings include General Tso's cauliflower's unlisted sesame oil/salt and ambiguous sauce grouping, yellow cake's leavener destination, skillet biscuits' required leavener, carrot cake's vanilla allocation and blackout cake's leavener destination. These are candidate questions, not accepted changes; current full source and saved originals must be reconciled before editing.
