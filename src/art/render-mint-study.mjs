import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const out = fileURLToPath(new URL('../../public/images/dishes/', import.meta.url));
let seed = 691;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};
const r = (a, b) => a + rand() * (b - a),
  n = (x) => +x.toFixed(2);
const p = (d, fill, extra = '') => `<path d="${d}" fill="${fill}" ${extra}/>`;
const layer = (id, label, body) =>
  `<g id="${id}" inkscape:groupmode="layer" inkscape:label="${label}">${body}</g>`;
const defs = `<defs>
<filter id="pigment" x="-8%" y="-14%" width="116%" height="128%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency=".071" numOctaves="3" seed="31" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="1.7" xChannelSelector="R" yChannelSelector="G" result="edge"/><feColorMatrix in="grain" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 .8 0 0 0 .4" result="density"/><feComposite in="edge" in2="density" operator="in"/></filter>
<filter id="bleed" x="-15%" y="-20%" width="130%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".025" numOctaves="3" seed="81" result="wet"/><feDisplacementMap in="SourceGraphic" in2="wet" scale="4" xChannelSelector="R" yChannelSelector="G"/><feGaussianBlur stdDeviation=".8"/></filter>
<radialGradient id="lost-left"><stop stop-color="black"/><stop offset=".42" stop-color="#777"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient>
<mask id="lost-edges"><rect width="960" height="640" fill="white"/><ellipse cx="277" cy="338" rx="53" ry="58" fill="url(#lost-left)"/><ellipse cx="657" cy="434" rx="63" ry="25" fill="url(#lost-left)"/></mask>
<filter id="paper-grain"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed="92"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".032"/></feComponentTransfer></filter>
<linearGradient id="body-wash" x1="0" y1="0" x2=".2" y2="1"><stop stop-color="#fbfaf5" stop-opacity=".35"/><stop offset=".48" stop-color="#d3dad5" stop-opacity=".24"/><stop offset="1" stop-color="#8fa3a5" stop-opacity=".48"/></linearGradient>
<radialGradient id="fade-shadow"><stop stop-color="#8a9999" stop-opacity=".24"/><stop offset=".5" stop-color="#9ea7a3" stop-opacity=".12"/><stop offset="1" stop-color="#b1bab3" stop-opacity="0"/></radialGradient>
<linearGradient id="fold" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#acbeb8" stop-opacity=".04"/><stop offset="1" stop-color="#839a94" stop-opacity=".26"/></linearGradient>
<clipPath id="food-clip"><path d="M291 305 C285 281 325 246 385 233 C437 220 489 229 533 228 C589 229 651 247 678 282 C704 316 668 355 616 375 C559 396 442 398 375 375 C324 359 298 339 291 305Z"/></clipPath>
</defs>`;
let art = layer(
  'paper',
  '00 · Neutral paper — hide for transparent placement',
  `<rect width="960" height="640" fill="#f7f6f2"/><rect width="960" height="640" fill="#8e8b80" filter="url(#paper-grain)"/>`
);
art += layer(
  'shadow',
  '01 · Dilute cool contact shadow',
  `<g filter="url(#bleed)">${p('M257 415 C318 390 528 391 639 405 C702 413 745 445 708 464 C669 487 526 484 449 477 C369 473 245 446 257 415Z', 'url(#fade-shadow)')}${p('M341 435 C389 455 525 466 610 442 C596 461 530 477 455 465 C405 461 363 447 341 435Z', '#849b9b', 'opacity=".16"')}</g>`
);
art += layer(
  'bowl',
  '02 · Pale-bowl washes and interrupted edge',
  `<g mask="url(#lost-edges)" filter="url(#pigment)">${p('M271 295 C273 258 331 223 408 213 C510 194 625 217 682 255 C709 274 719 291 709 323 C702 359 690 386 654 410 C595 449 503 462 425 447 C345 437 296 399 283 357Z', 'url(#body-wash)')}${p('M279 327 C311 371 395 397 489 402 C585 406 671 373 707 319 C699 369 677 398 640 414 C565 451 477 451 414 435 C341 423 299 391 279 327Z', '#aebebb', 'opacity=".2"')}${p('M289 358 C311 387 345 404 382 413 C435 428 465 429 498 430 C454 438 397 425 363 414 C320 400 297 379 289 358Z', '#91a3a4', 'opacity=".17"')}${p('M312 392 C342 424 397 438 453 443 M495 448 C545 447 586 438 611 431 M280 328 C277 315 273 304 277 290 M284 273 C307 246 343 227 389 218 M483 209 C513 209 539 212 556 215 M655 246 C689 263 706 282 708 304', 'none', 'stroke="#657b7f" stroke-width=".85" stroke-opacity=".48" stroke-linecap="round"')}${p('M309 360 C337 372 339 380 370 384 C398 389 414 388 444 397 L439 420 C412 424 390 410 369 410 C340 397 329 402 315 382Z', '#fffefa', 'opacity=".38" filter="url(#bleed)"')}${p('M529 414 C553 405 579 411 605 399 C622 392 640 388 654 376 C644 400 624 412 601 416 C579 424 545 427 529 414Z', '#fffefa', 'opacity=".31" filter="url(#bleed)"')}</g>`
);
art += layer(
  'yogurt',
  '03 · Thick yogurt — paper highlights and soft folds',
  `<g filter="url(#pigment)">${p('M289 304 C288 285 308 270 331 259 C340 243 358 243 377 239 C391 226 413 232 431 228 C453 217 472 232 491 231 C514 223 531 228 545 231 C568 230 591 240 614 252 C641 253 663 268 676 285 C691 306 671 321 662 334 C642 353 634 362 612 369 C583 371 566 385 535 383 C502 393 478 384 454 389 C426 385 408 375 382 374 C356 369 344 357 326 350 C304 336 300 322 289 304Z', '#fffefa', 'opacity=".86"')}${p('M298 314 C322 334 365 354 412 358 C458 362 488 350 502 336 C481 362 443 372 400 366 C350 361 310 343 298 314Z', 'url(#fold)')}${p('M347 280 C375 250 427 252 461 255 C496 261 514 281 528 291 C548 305 584 303 599 292 C591 309 559 316 531 306 C502 296 486 275 460 270 C421 259 379 262 347 280Z', '#a8bab1', 'opacity=".10"')}${p('M359 283 C388 267 421 267 447 270 C485 272 492 289 519 302', 'none', 'stroke="#ffffff" stroke-width="6" stroke-opacity=".7" stroke-linecap="round"')}${p('M458 376 C517 372 553 350 589 338 C618 328 644 329 666 312 C651 342 625 345 599 351 C552 367 511 381 458 376Z', '#90aaa0', 'opacity=".10"')}${p('M322 302 C341 288 374 289 402 298 C425 305 442 317 466 316 C443 332 418 321 398 313 C365 301 349 302 322 302Z', '#b3c1b4', 'opacity=".16"')}${p('M392 336 C429 338 454 348 479 339 C507 326 521 314 542 318 C532 324 521 336 503 346 C477 360 433 346 392 336Z', '#d3dbc9', 'opacity=".23"')}${p('M545 259 C575 250 613 265 634 284 C611 275 586 267 545 259Z', '#c6cdae', 'opacity=".16"')}${p('M291 307 C300 339 340 364 384 376 M430 386 C492 398 566 391 609 379 M652 358 C673 341 686 326 686 308', 'none', 'stroke="#7e9690" stroke-width=".75" stroke-opacity=".2"')}${p('M351 259 C367 239 400 235 422 244 C437 251 438 256 454 258 C427 262 415 250 402 249 C381 246 362 251 351 259Z', '#8fa396', 'opacity=".16"')}${p('M487 299 C512 285 536 292 552 304 C563 312 575 315 590 310 C573 328 550 314 538 307 C521 297 503 298 487 299Z', '#8d9d8a', 'opacity=".15"')}${p('M342 346 C361 349 374 360 391 361 C407 362 414 359 426 356 C414 372 393 371 381 366 C361 358 352 351 342 346Z', '#98aaa3', 'opacity=".17"')}</g>`
);
let cucumber = '',
  mint = '',
  oil = '';
const spots = [
  [333, 283],
  [365, 266],
  [413, 245],
  [464, 255],
  [516, 247],
  [582, 260],
  [619, 285],
  [660, 302],
  [629, 325],
  [592, 357],
  [542, 373],
  [494, 368],
  [451, 379],
  [399, 356],
  [358, 334],
  [316, 316],
  [400, 311],
  [439, 296],
  [477, 326],
  [522, 304],
  [565, 285],
  [573, 333],
  [377, 294],
  [543, 345],
  [479, 282],
  [614, 307],
  [432, 342],
];
for (const [i, [x, y]] of spots.entries()) {
  const w = r(7, 11),
    h = r(4.5, 7),
    rot = n(r(-35, 35));
  cucumber += `<g id="cucumber-${i + 1}" transform="translate(${x} ${y}) rotate(${rot})">${p(`M${n(-w / 2)} ${n(-h / 2)} Q-1 ${n(-h / 2 - 1)} ${n(w / 2)} ${n(-h / 2 + 0.4)} L${n(w / 2 + 0.4)} ${n(h / 2)} Q0 ${n(h / 2 + 1)} ${n(-w / 2 - 0.4)} ${n(h / 2 - 0.5)}Z`, i % 4 === 0 ? '#9bb377' : '#bbcba0', `opacity="${n(r(0.63, 0.9))}"`)}${i % 3 === 0 ? p(`M${n(-w / 2)} ${n(-h / 2)}L${n(-w / 2 - 0.4)} ${n(h / 2 - 0.5)}L${n(w / 2)} ${n(h / 2)}`, 'none', 'stroke="#5f804d" stroke-width="1.6" stroke-opacity=".72"') : ''}${p(`M-2 -1 L${n(w / 2 - 1)} -1`, 'none', 'stroke="#fffef4" stroke-width="1.3" stroke-opacity=".7"')}</g>`;
}
for (let i = 0; i < 76; i++) {
  const x = r(316, 667),
    y = r(247, 375);
  if (((x - 485) / 185) ** 2 + ((y - 310) / 76) ** 2 > 1) continue;
  const a = r(-180, 180),
    w = r(1.8, 4.3),
    h = r(0.8, 2.6);
  mint += `<g id="chopped-mint-${i + 1}" transform="translate(${n(x)} ${n(y)}) rotate(${n(a)})">${p(`M${n(-w)} 0 L${n(-w * 0.35)} ${n(-h)} L${n(w * 0.3)} ${n(-h * 0.7)} L${n(w)} ${n(h * 0.25)} L${n(w * 0.15)} ${n(h)}Z`, ['#587546', '#738d58', '#3f6247', '#97ad7c'][i % 4], `opacity="${n(r(0.63, 0.96))}"`)}${i % 5 === 0 ? p(`M${n(-w * 0.6)} 0 L${n(w * 0.6)} 0`, 'none', 'stroke="#becbac" stroke-width=".55"') : ''}</g>`;
}
// Olive oil is mixed into the recipe: small warm translucent sheens, no garnish drizzle or puddle.
for (const [x, y, w] of [
  [351, 310, 13],
  [467, 267, 10],
  [579, 345, 12],
  [523, 357, 8],
  [630, 288, 8],
])
  oil += p(`M${x} ${y}q${w * 0.7} -3 ${w} 1q${-w * 0.4} 3 ${-w} -1Z`, '#c2bc7a', 'opacity=".18"');
art += layer(
  'cucumber',
  '04 · Fine diced cucumber folded through yogurt',
  `<g clip-path="url(#food-clip)" filter="url(#pigment)">${cucumber}</g>`
);
art += layer(
  'mint',
  '05 · Chopped mint fragments — no whole-leaf garnish',
  `<g clip-path="url(#food-clip)" filter="url(#pigment)">${mint}</g>`
);
art += layer('oil', '06 · Mixed olive-oil warmth', `<g filter="url(#bleed)">${oil}</g>`);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="960" height="640" viewBox="0 0 960 640" role="img" aria-labelledby="title description"><title id="title">Mint tzatziki — editable watercolor study</title><desc id="description">An original vector illustration of a pale bowl holding thick white Greek yogurt with fine cucumber dice, chopped mint and a little olive-oil warmth. Honey, garlic and salt are mixed in and not separately pictured. A drawing study, not a kitchen photograph or a measured portion.</desc>${defs}${art}</svg>`;
const transparentSvg = svg.replace('<g id="paper"', '<g style="display:none" id="paper"');
fs.writeFileSync(path.join(out, 'mint-tzatziki-study.svg'), transparentSvg + '\n');
console.log('Wrote editable mint tzatziki SVG to ' + out);
