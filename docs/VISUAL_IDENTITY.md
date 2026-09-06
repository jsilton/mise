# Mise: paper and pigment

## Accepted direction, 6 September 2026

User rejected the separate bowl/m symbol, the dark geometric food artwork, and the abundance of yellow. Keep the existing **mise.** wordmark. Reference photographs show watercolor interpretations with generous paper margins, incomplete soft edges, restrained natural colors, and selective fine lines. There are five distinct user references (the cycling image was attached twice). They are style references, not site content or photographs of our recipes.

## Palette studies

The style guide offers three live, persistent site palettes: Porcelain & Ink (default), Sage & Graphite, and Rose & Slate. All use near-neutral light paper, dark readable body text, and limited pigment accents. No palette has been selected by the user yet. The blue-gray default is a working design decision, not claimed approval. Legacy CSS gold variable names now alias the selected accent for compatibility.

## Artwork and photo workflow

1. Photograph the actual dish, retaining the original and permission/source record. Do not infer kitchen-test evidence from generated media.
2. Use the reusable SVG photo filter for a mild desaturation, lifted shadows, subtle paper grain, and tiny irregularity. The shared preview and PNG export add soft vignette edges and the selected palette’s paper color. A maximum 1,600-pixel export keeps the original aspect ratio without enlarging small inputs. Uploads, processing and downloads stay in the browser; selecting another file clears stale previews and downloads. It is a photographic treatment, not vectorization or a replacement for drawing.
3. Draw SVG layers for vessel, primary ingredients, key accents, shadow, and restrained pigment detail. Preserve the dish's actual ingredient quantities and assembly. Prefer a handful of recognizable forms to indiscriminate tracing of every pixel. Keep flat plate ellipses from dominating the food.
4. Use selective fine contours, translucent overlapping washes, lost edges, and generous clear paper. Avoid dark rectangular backgrounds, ornamental frames, mandatory gold, or generic ingredient scatter.
5. Review the illustration against the actual recipe. Never add garnish or a side absent from the ingredients without first resolving the recipe.

The first three watercolor paintings are raster illustrations generated with the built-in image-generation tool. They must not be described as SVG drawings or photographs. The previous SVG studies remain as development assets, with paper-compatible translucent pigments, but are no longer shown on recipe pages: their art direction still needs substantial refinement against the watercolor references. WebP versions optimize loading; original PNGs remain available.

## Generation prompt record

Built-in tool, not CLI. User landscape images were supplied only as style references, specifically their lower watercolor sections.

### Fettuccine

Original watercolor vignette of fettuccine al burro for a refined cooking education website. Shallow white ceramic plate from a gentle overhead three-quarter angle; loose nest of flat fettuccine ribbons in thin butter-Parmesan sauce, fine Parmesan and sparse pepper. No cream pool, chicken, parsley, fork, or extraneous ingredients. Selective graphite/ink indications, translucent washes, subtle granulation, soft lost-and-found edges. Complete plate and faint cool gray-blue shadow in ample neutral off-white paper, near #f7f6f2. Landscape 3:2; no frame, caption, lettering, logo, dark background, or overall ochre/yellow cast. Illustration, not a claimed photograph of an actual tested recipe.

### Broccoli

Same watercolor medium and neutral paper constraints. Roasted branching broccoli florets, sage/deep green crowns with restrained brown edges, finely grated Parmesan, and one lemon wedge on a white plate. Visible varied stems and natural forms. No large cheese sheets or extra ingredients.

### Dal

Same watercolor medium and neutral paper constraints. Shallow off-white bowl, thick creamy pale golden split hulled mung lentils, small cumin/mustard seeds, two dried red chiles, a few cilantro leaves and light reddish oil streaks. Visible soft lentil texture. No bread, rice, spoon, or other sides.

Full generation requests are retained in the task tool history. Assets live in public/images/dishes; reusable filter and wordmark in public/brand.

## Editable vector studies

Three new `*-study.svg` files sit beside the watercolor paintings in the style guide. They are original vector drawings with no embedded raster images. Named layers and groups separate cool shadow, vessel, individual ribbons/florets or lentil surface, and finishing ingredients. The deterministic authoring source is `src/art/render-dish-studies.mjs`; running it regenerates these three assets and the shared downloadable photo-filter document. The existing older geometric SVGs are separate development artifacts, not these studies.

The new SVGs use transparent paper, interrupted vessel contours, restrained ingredient pigments, gentle edge displacement and pigment variation. They are intentionally exposed as working comparison studies, not declared a final match to the references. They remain more diagrammatic and less organically detailed than the generated watercolor paintings; recipe pages continue to use the paintings. Further art direction and a tested-photo-to-drawing workflow remain required before collection-wide rollout.

Recipe reconciliation is part of the drawing: the pasta has fine Parmesan flecks rather than large unlisted shavings; broccoli has no added lemon-wedge garnish when the recipe calls for juice; dal has four broken pieces from the two dried chiles, small spice seeds and cilantro. These improvements do not imply that an illustration measures portions precisely or proves a kitchen test.

`src/lib/photo-treatment.mjs` is the single definition for the photographic filter and edge mask. The local PhotoLab displays that same composed SVG through an image element and exports its rendered pixels as a PNG. It does not export a raster-containing SVG under an editable-drawing label. Changing palette rerenders the paper color. The standalone filter download is regenerated from the same definition.

Validation: all three vector assets rendered and were visually inspected through both the local SVG renderer and isolated headless Chrome. Chrome verified three working drawing previews, PNG download dimensions, exact Porcelain and Sage corner colors, invalid-image recovery, mobile overflow at 390 px, palette persistence into the recipe page, and absence of page errors. A generated painting was used only as an upload test fixture; that is not validation against an actual cooked-dish photograph. The Mac remained locked for CUA, but isolated browser testing succeeded with a separate temporary profile. No user browser profile or photo was uploaded to a service.

Two focused unit tests cover aspect/size limits and rejection of remote/active/injected image input, plus shared-filter parity. Existing recipe tests remain intact. Broader actual-photo samples, finer watercolor drawing character, remaining recipe images and print appearance are still pending.
