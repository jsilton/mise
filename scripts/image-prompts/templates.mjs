// Four prompt templates for an outside image AI. Each {variable} is filled per recipe
// by fill.mjs, from the recipe's own data plus any hand-tuned brief in briefs.json.

const ACCENT =
  'Keep any accent colour to slate blue (#486B7B) or apricot (#F59443), used on one small thing only.';
const FRAME =
  'Dish centred, filling about 70% of the frame height, with everything important inside the centre square so it can crop to a square. Landscape 3:2.';

export const templates = {
  photo: {
    name: 'Bright cookbook photo',
    fits: 'The default for mains, sides and desserts; it sells the food.',
    text: [
      'Bright, modern cookbook photograph of {dish}.',
      'The dish: {finished_look}. Show {hero}. Texture: {texture}.',
      'Colours: {colours}. Serving dish: {vessel}. Garnish: {garnish}. Setting: {setting}.',
      'Camera at about 45 degrees, 50mm lens, the whole dish in sharp focus.',
      'Soft daylight from the upper left, with one short warm shadow to the lower right.',
      'Background: a smooth, seamless {background} surface and wall, one flat colour edge to edge.',
      'Small props near the dish: {props}. {accent}',
      'Moment: {moment}.',
      '{frame}',
      'Fresh, lively and appetizing, true-to-life colour, bright and airy.',
      'Avoid: text, logos, hands, people, dark or moody light, wooden tables, marble, cluttered props, garnishes not listed here, cartoon or illustration style, plastic-looking food.',
    ],
  },
  overhead: {
    name: 'Overhead table',
    fits: 'Bowls, salads, pizzas and spreads; shows what goes in.',
    text: [
      'Overhead food photograph, shot straight down, of {dish}.',
      'The dish: {finished_look}. Serving dish: {vessel}. It sits in the centre at about 55% of the frame width, showing {hero}. Texture: {texture}. Garnish: {garnish}.',
      'Around it, a loose, uncluttered arrangement of the raw ingredients that go into it: {raw_ingredients}.',
      'Bright direct sunlight from the upper left with crisp, short shadows; summery and lively.',
      'Background: one flat {background} surface, no texture. {accent}',
      'Colours: {colours}. Setting: {setting}.',
      'Landscape 3:2, with the dish fully inside the centre square.',
      'Avoid: text, hands, people, wooden boards, marble, crowded clutter, ingredients not in the recipe, cartoon or illustration style.',
    ],
  },
  closeup: {
    name: 'Close-up moment',
    fits: 'Recipe headers, drinks, glazes, and anything with steam, a pour or a crumb.',
    text: [
      'Close-up food photograph of {dish}, low angle of about 25 degrees, 85mm lens, shallow depth of field.',
      'Focus on {hero}, showing {texture}.',
      'Capture the moment: {moment}.',
      'Serving dish: {vessel}. Garnish: {garnish}. Colours: {colours}.',
      'Warm daylight from the upper left with a soft rim light that makes the surface glisten.',
      'Background softly out of focus, a flat {background}, with {props} blurred behind. {accent}',
      'The dish fills most of the frame; keep the key detail inside the centre square. Landscape 3:2.',
      'Vivid, mouthwatering, fresh.',
      'Avoid: text, hands, people, dark backgrounds, fake-looking steam or smoke that hides the food, cartoon or illustration style.',
    ],
  },
  painted: {
    name: 'Painted illustration',
    fits: 'One consistent look across all 650 recipes, even when photos would vary.',
    text: [
      'Hand-painted editorial food illustration of {dish} in gouache with fine coloured-pencil detail: realistic proportions, textures and light, like a modern food magazine illustration.',
      'The dish: {finished_look}. Show {hero}. Texture: {texture}. Serving dish: {vessel}. Garnish: {garnish}.',
      'Seen at about 45 degrees, light from the upper left, one short warm shadow.',
      'Colours, bright and saturated but natural: {colours}.',
      'Background: flat {background}, painted edge to edge with visible brush texture.',
      'Small painted props: {props}. {accent} No outlines.',
      '{frame}',
      'Avoid: cartoon style, thick outlines, flat vector shapes, clip art, text, hands, people.',
    ],
  },
};

export const fixed = { accent: ACCENT, frame: FRAME };
