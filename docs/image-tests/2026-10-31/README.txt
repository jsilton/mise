MISE: THREE RECIPES, FOUR IMAGE APPROACHES
31 October 2026

12 generated PNG originals, each 1536 x 1024 (3:2). Generated with the built-in image tool, not an external API. These are synthetic recipe illustrations/photos for review, not photographs of food actually cooked. Nothing was deployed or changed in the recipe repository. The 20-recipe pilot and remaining collection have not begun.

ORDER
01 Cookbook; 02 Overhead; 03 Close-up moment; 04 Painted.
The images/ directory contains exactly the 12 selected images. prompts/ preserves exact initial and corrective prompts. Rejected attempts are not in this package.

RECOMMENDATION
Use 01, bright cookbook photography, as the default. It shows recognizable food, vessel and texture without the overhead ingredient spread or selective-focus tradeoff. 03 is particularly effective for the margarita, but the full-vessel square-safe requirement limits how close a close-up can be. 02 is useful for bowls and flat dishes, but raw ingredients create clutter and vanish at square crops; it also conceals the height and condensation of a drink. 04 is coherent editorial illustration, but signals an illustration rather than the real finished food you prioritized.

WHAT THE TEST EXPOSED
The '70% of frame height' target conflicts with full central-square containment for broad bowls and platters. Several images needed targeted framing revisions. Exact camera angles and hex backgrounds are prompt targets, not guaranteed output properties. Main vessel silhouettes were visually checked against the central square; secondary props can crop. Several final close-up/painted dishes are smaller in the wide frame after correction. The overhead margarita remains slightly elliptical rather than perfectly orthographic. Salt can look coarse/pinkish rather than delicate smoked flakes, especially in the painted version. The painted drink is warmer/yellower than the corrected photographic versions. Dal close-up angle reads higher than the specified 25 degrees. These are test outputs, not a claim that every detail is production-perfect.

PROMPT NORMALIZATIONS
The full-vessel crop constraint took precedence over 'fills most of frame' and 70%-height language. Beef chopsticks were changed from apricot to white because the slate-rimmed platter already consumes the single decorative accent. Overhead direct sun and painted brush texture were retained deliberately to test the supplied alternatives; they are exceptions to the general soft-light/plain-background goal.

RECOMMENDED MASTER PROMPT FOR NEXT PILOT
Bright, true-to-life editorial cookbook photograph of {dish}, prepared exactly as described by {ingredients_and_method}. Finished appearance: {finished_look}. Show {hero}; texture: {texture}; natural food colours: {colours}. Serve in {vessel}, garnished only with {verified_garnish}. Calm, everyday home cooking. Camera approximately 40-45 degrees, natural 50mm perspective. Entire main dish and vessel clearly readable and sharply focused, with gentle background separation. Soft neutral daylight from upper left; one soft short shadow to lower right. Smooth matte seamless {background_name} backdrop, base colour {background_hex}, no horizon line, no patterned surface, no wood or marble. Natural shading is permitted, but avoid warm colour casts. One optional small decorative slate-blue or apricot accent, never both. At most one or two small recipe-relevant props, subordinate to the dish. {optional_physically_plausible_moment}. Landscape 3:2, 1536 x 1024. Main vessel centred, approximately 50-55% of total image width for wide dishes; whole silhouette including garnish inside x=280..1256 and y=60..964, with comfortable space. For tall glasses use height rather than width to fit this same safe area. Do not draw the safe-area guides. No text, branding, hands, people, extra food, invented garnish, plastic sheen, excessive steam, decorative splashes or exaggerated saturation.

RECIPE-SPECIFIC GUARDRAILS
Dal: creamy and loose, not a pile of firm beans; modest real tempering and fried aromatics.
Beef: thin seared sirloin strips, bright lightly charred broccoli, sauce lightly coating rather than pooling like gravy.
Margarita: pale cloudy straw with a faint lime-green/amber tint, not orange juice; clean unsalted rim; one attached lime wedge; realistic clear ice and fine froth. Smoked salt is an optional peripheral prop, never a rim coating.

BEFORE SCALING
Choose the approach first. In the 20-recipe pilot include all three background colours, soup/stew, baked goods, pale foods, dark foods, salads, flat dishes and drinks. Define the exact time field and treatment of missing times before colour assignment: <=30 minutes blue, >30 to60 yellow, >60 peach. Do not infer a time from the dish name. Verify visual ingredients and garnish against the actual recipe. Compare both small square cards and wide headers. Keep one approved style reference for lighting, scale, backdrop and white balance. Review crop safety, recipe identity, invented ingredients, textures, colour drift and anatomy of vessels before accepting each batch. The three-dish test does not establish consistency across650 recipes, and no peach-background recipe was tested here.
