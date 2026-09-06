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

## Mint tzatziki vector study

A fourth editable study, generated by `src/art/render-mint-study.mjs`, is available only in the style-guide drawing gallery. The shared painting map is unchanged so this study does not enable missing recipe artwork or pretend to be a generated painting. Its seven named layers separate optional paper, shadow, pale vessel, yogurt, fine cucumber dice, chopped mint and a restrained suggestion of mixed olive oil. Paper is hidden by default to take the selected site palette. No embedded bitmap, script, photo or extra garnish is included.

Root visually reviewed two versions against the user's airy-watercolor direction. The revision strengthens selected cucumber/mint marks and breaks the yogurt's perimeter and folds. The bowl still reads as a constructed oval and the white food remains subtle at small sizes; this is a working study rather than an approved final watercolor match. The sauce contains no whole mint sprig, lemon, dill, pepper, honey drizzle or separate oil pool, and neither the illustration nor its portions imply a kitchen test. A browser screenshot was used to inspect the SVG; it is not a separate authored raster image.

Mint-study verification: all 29 QA checks pass. Chrome confirmed four SVG studies alongside three paintings, a working download and recipe link, seven named layers, hidden paper and no embedded images/scripts. The study renders in all three palettes and at 390 px with no overflow or page errors, remains visible in print, and does not enable artwork on the mint recipe page. Root visually inspected gallery-sized Porcelain, Sage, Rose and mobile screenshots. The initial image check ran before lazy loading began; waiting for the actual image resolved it, with no SVG decoding defect found.

## Photo framing prototype: hold for further art direction

Root and an independent reviewer evaluated the isolated subject-protection prototype in `/tmp/mise-photo-framing`. It preserves chosen subject bounds and paper margins, with validated geometry, input escaping and latest-render guards. It remains outside the repository: the mobile controls dominate small previews, and the output still reads as a rectangular photograph with softened edges. It does not achieve the reference images’ selective watercolor forms or an editable dish drawing. Keep current artwork unchanged until a better actual-dish study demonstrates the desired visual character. This is a recorded design decision, not completed recipe imagery.

## Broccoli painting: recipe fidelity and selective edges

Replaced the active broccoli painting with a versioned second site asset, preserving the previous PNG/WebP. Built-in image generation edited the original site painting, with two further targeted passes to reduce an exaggerated cheese pattern. No user reference photograph was uploaded. The selected final PNG is unchanged tool output; its WebP companion is an optimized format conversion, not a further color or drawing edit. Exact prompts are stored in `docs/art-prompts/broccoli-watercolor-v2-{initial,cheese,final}.txt`.

The unlisted lemon wedge is removed. Foreground cut stems and browned crowns remain clear, while peripheral florets and most of the plate rim dissolve into lighter washes. Root read the complete recipe and visually compared the candidate with the original at full and card sizes. The revised image better represents finely grated Parmesan, lemon juice and roasted broccoli; absorbed seasoning does not need invented visible garnish. Updated alt text describes an illustration, not a dish photograph.

The image still has slightly warm baked-in paper and a visible rectangular boundary under multiply blending, especially on Sage. This publication improves recipe fidelity and selective rendering; it does not complete seamless paper compositing, the editable SVG direction, or the actual-photo workflow. The mint SVG refinement remains experimental because its larger, clearer subject still looks digitally sculpted.

Selected source: `public/images/dishes/crispy-parmesan-roasted-broccoli-watercolor-v2.png`, 1536 × 1024. Original built-in output SHA-256: `5d80a889beaf05511da4dceeab1ab74d4792cb8ecb1d5a98f140d67826627ef7`. The shared dish map selects the matching WebP for both recipe pages and the style guide; the original SVG study is unchanged.

## Three paintings: neutral margins and food texture

The shared recipe/gallery map now selects Alfredo v2, broccoli v3 and dal v2. Each PNG is unchanged output from the built-in image tool; WebP companions are format conversions. Previous versions remain available. Exact edit prompts are recorded in `docs/art-prompts/*-watercolor-white-matte.txt` and `dal-watercolor-texture.txt`.

Near-white outer margins replace the warm rectangular paper field. Existing multiply compositing lets these margins blend more closely with all three site palettes. These are RGB images, not transparent cutouts or mathematically exact paper-color matches. Root compared before/after pairs on Porcelain, Sage and Rose: the cream rectangle is substantially reduced. Dal retains a little shadow variation near the lower margin. No new yellow UI surface is introduced.

Alfredo loses the large cheese shavings in favor of a thin coating on flat pasta ribbons. Dal now shows creamy softened split mung, small spice marks and four broken chile pieces, instead of large intact grain discs and two whole chiles. Broccoli retains the previously accepted finely grated Parmesan, branching stems and selective edges. The illustrations express ingredients and texture, not measured portions or kitchen-test evidence.

Two intermediate outputs were held: an attempted transparent broccoli output painted a checkerboard into an RGB file, and the first revised dal had oversized rounded grain clumps. Neither is installed. The transparent request is retained as a failed prompt record. The final selected files were visually inspected and decoded at 1536 × 1024 in the actual gallery and recipe pages. Browser checks cover three persistent palettes, mobile width, print titles and page errors. The complete 29-check QA and 731-page internal link check pass.

Selected Alfredo PNG SHA-256: `9cf0eba8992efc6bcf9b3baab2d07de0c5db52715f9336f44a65789d57cacac2`. Selected dal PNG SHA-256: `698751f281b05aa481d3f37b30b6b8bee3edfd9d5a45ea002dfdf5056898f124`. This improves the existing raster paintings; the editable SVG direction and actual-dish-photo workflow remain unfinished.
