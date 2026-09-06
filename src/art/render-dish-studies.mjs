// Original vector studies. Control points describe dishes; no raster image is embedded or traced.
// Run from the repository root: node src/art/render-dish-studies.mjs
import fs from 'node:fs';
import { photoFilterDefs } from '../lib/photo-treatment.mjs';
fs.writeFileSync(
  'public/brand/mise-photo-treatment.svg',
  '<svg xmlns="http://www.w3.org/2000/svg">' + photoFilterDefs + '</svg>\n'
);
const out = 'public/images/dishes';
const n = (x) => Number(x.toFixed(2));
let seed = 17;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};
const between = (a, b) => a + rand() * (b - a);
function curve(points, close = false) {
  let d = `M${points[0].map(n).join(' ')}`;
  for (let i = 0; i < (close ? points.length : points.length - 1); i++) {
    const p = points[i],
      q = points[(i + 1) % points.length],
      a = points[(i - 1 + points.length) % points.length],
      b = points[(i + 2) % points.length];
    const prev = !close && i === 0 ? p : a,
      next = !close && i === points.length - 2 ? q : b;
    d += `C${[p[0] + (q[0] - prev[0]) / 6, p[1] + (q[1] - prev[1]) / 6, q[0] - (next[0] - p[0]) / 6, q[1] - (next[1] - p[1]) / 6, ...q].map(n).join(' ')}`;
  }
  return d + (close ? 'Z' : '');
}
const path = (d, fill, extra = '') => `<path d="${d}" fill="${fill}" ${extra}/>`;
function blob(x, y, rx, ry, color, opacity = 1, count = 14) {
  const points = Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2,
      r = between(0.87, 1.12);
    return [x + Math.cos(a) * rx * r, y + Math.sin(a) * ry * r];
  });
  return path(curve(points, true), color, `opacity="${opacity}"`);
}
function layer(id, label, contents) {
  return `<g id="${id}" inkscape:groupmode="layer" inkscape:label="${label}">${contents}</g>`;
}
const defs = `<defs>
<filter id="wash" x="-6%" y="-10%" width="112%" height="120%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency=".065" numOctaves="3" seed="8" result="paper"/><feDisplacementMap in="SourceGraphic" in2="paper" scale="1.6" xChannelSelector="R" yChannelSelector="G" result="edge"/><feColorMatrix in="paper" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 .65 0 0 0 .53" result="grain"/><feComposite in="edge" in2="grain" operator="in"/></filter>
<filter id="soft"><feGaussianBlur stdDeviation="2.5"/></filter>
<linearGradient id="porcelain" x1="0" y1="0" x2=".4" y2="1"><stop stop-color="#dee4e2" stop-opacity=".12"/><stop offset=".52" stop-color="#fffdf6" stop-opacity=".35"/><stop offset="1" stop-color="#b3c2c4" stop-opacity=".4"/></linearGradient>
<linearGradient id="ribbon" x1="0" y1="0" x2=".25" y2="1"><stop stop-color="#eee1ba"/><stop offset=".45" stop-color="#e2cd96"/><stop offset="1" stop-color="#c8af77"/></linearGradient>
<linearGradient id="stem" x1="0" y1="0" x2="1" y2=".15"><stop stop-color="#cbd29f"/><stop offset=".45" stop-color="#a6b47d"/><stop offset="1" stop-color="#61785d"/></linearGradient>
</defs>`;
function vessel() {
  return layer(
    'vessel',
    '02 · Porcelain and broken contours',
    `<g filter="url(#wash)">${path('M194 302 C198 221 315 164 474 162 C628 160 765 228 776 320 C785 421 660 492 494 499 C335 505 204 430 194 302Z', 'url(#porcelain)')}${path('M205 319 C222 422 350 484 501 482 C646 481 754 414 767 333 C770 407 676 495 502 510 C343 513 218 439 205 319Z', '#899b9c', 'opacity=".17"')}${path('M210 266 C252 196 362 160 472 163 M514 166 C637 179 735 227 763 289 M771 338 C747 433 631 493 498 500 M451 499 C318 487 231 428 208 365', 'none', 'stroke="#687a7e" stroke-opacity=".44" stroke-width=".9" stroke-linecap="round"')}${path('M246 298 C250 237 354 196 475 197 C600 194 710 247 726 318 M714 372 C672 438 582 462 486 461 C376 461 285 417 253 367', 'none', 'stroke="#91a09c" stroke-opacity=".38" stroke-width=".75"')}${path('M225 363 C260 435 377 483 497 482 C603 481 679 449 723 406', 'none', 'stroke="#fffef7" stroke-opacity=".85" stroke-width="3"')}</g>`
  );
}
function shadow() {
  return layer(
    'shadow',
    '01 · Cool shadow and lost edges',
    `<g filter="url(#wash)">${blob(501, 447, 287, 70, '#8b9ca0', 0.1)}${blob(530, 465, 215, 49, '#6c8289', 0.1)}${path('M239 432 C339 514 588 548 739 435 C705 480 608 520 506 519 C399 524 287 487 239 432Z', '#7d939a', 'opacity=".17"')}</g>`
  );
}
function svg(slug, title, desc, layers) {
  const text = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="960" height="640" viewBox="0 0 960 640" role="img" aria-labelledby="title desc"><title id="title">${title}</title><desc id="desc">${desc} Original editable Mise illustration; not a photograph or kitchen-test record.</desc>${defs}${layers}</svg>`;
  fs.writeFileSync(`${out}/${slug}-study.svg`, text + '\n');
}
function pasta() {
  seed = 25;
  const noodles = [
    [
      [334, 305],
      [306, 272],
      [345, 237],
      [420, 235],
      [457, 267],
      [415, 295],
      [372, 281],
    ],
    [
      [399, 235],
      [439, 209],
      [500, 211],
      [527, 240],
      [493, 269],
      [457, 249],
    ],
    [
      [516, 252],
      [555, 220],
      [600, 240],
      [635, 276],
      [605, 303],
      [575, 289],
    ],
    [
      [293, 332],
      [296, 293],
      [345, 271],
      [408, 301],
      [443, 327],
      [419, 364],
      [357, 353],
    ],
    [
      [566, 293],
      [618, 271],
      [665, 301],
      [680, 336],
      [646, 367],
      [612, 350],
    ],
    [
      [324, 345],
      [365, 304],
      [417, 293],
      [481, 320],
      [522, 355],
      [479, 383],
      [436, 364],
    ],
    [
      [430, 261],
      [464, 286],
      [500, 293],
      [541, 273],
      [552, 241],
      [523, 233],
    ],
    [
      [378, 286],
      [391, 317],
      [435, 341],
      [500, 334],
      [560, 304],
      [588, 276],
      [568, 254],
    ],
    [
      [300, 353],
      [318, 389],
      [373, 408],
      [423, 392],
      [449, 359],
      [428, 335],
    ],
    [
      [495, 279],
      [477, 311],
      [495, 342],
      [551, 356],
      [606, 335],
      [627, 310],
      [603, 288],
    ],
    [
      [389, 256],
      [357, 284],
      [341, 326],
      [364, 362],
      [418, 377],
      [465, 364],
    ],
    [
      [610, 301],
      [655, 330],
      [652, 374],
      [616, 403],
      [563, 403],
      [520, 379],
    ],
    [
      [437, 311],
      [408, 294],
      [412, 265],
      [446, 255],
      [477, 275],
      [473, 304],
      [453, 321],
    ],
    [
      [276, 341],
      [285, 384],
      [334, 421],
      [394, 432],
      [454, 423],
      [495, 402],
    ],
    [
      [364, 342],
      [383, 378],
      [451, 393],
      [529, 378],
      [577, 348],
      [590, 317],
    ],
    [
      [497, 246],
      [526, 274],
      [529, 319],
      [510, 353],
      [464, 383],
      [398, 399],
      [350, 385],
    ],
    [
      [582, 325],
      [600, 359],
      [571, 400],
      [525, 424],
      [468, 439],
      [416, 438],
    ],
    [
      [334, 390],
      [356, 417],
      [407, 430],
      [459, 416],
      [499, 389],
      [516, 353],
    ],
    [
      [663, 341],
      [684, 374],
      [664, 406],
      [625, 421],
      [588, 412],
      [581, 392],
    ],
    [
      [409, 355],
      [435, 336],
      [477, 347],
      [502, 374],
      [489, 402],
      [457, 420],
    ],
    [
      [315, 401],
      [351, 438],
      [414, 456],
      [476, 451],
      [524, 435],
      [551, 408],
    ],
    [
      [533, 310],
      [551, 342],
      [588, 364],
      [637, 366],
      [664, 352],
    ],
    [
      [365, 304],
      [345, 331],
      [351, 365],
      [375, 385],
      [418, 390],
    ],
  ];
  let food = path(
    'M279 343 C277 311 302 281 327 274 C331 245 362 232 392 239 C416 211 455 205 484 215 C519 208 549 222 563 237 C601 228 626 255 633 281 C664 288 684 314 677 342 C700 374 673 410 641 420 C612 447 576 439 551 442 C515 463 478 463 446 455 C402 466 363 443 340 437 C301 423 276 388 279 343Z',
    '#d6c39b',
    'opacity=".75"'
  );
  for (let i = 0; i < 45; i++) {
    const x = between(312, 650),
      y = between(261, 431);
    if (((x - 480) / 170) ** 2 + ((y - 348) / 94) ** 2 > 1) continue;
    food += blob(
      x,
      y,
      between(10, 32),
      between(4, 12),
      i % 3 ? '#b5a07b' : '#f1e6c9',
      between(0.12, 0.35),
      9
    );
  }
  noodles.forEach((points, i) => {
    // Sample an interpolating curve and expand its normal to form a flat ribbon.
    const pts = [];
    for (let j = 0; j < points.length - 1; j++) {
      const p0 = points[Math.max(0, j - 1)],
        p1 = points[j],
        p2 = points[j + 1],
        p3 = points[Math.min(points.length - 1, j + 2)];
      for (let k = 0; k < 3; k++) {
        const t = k / 3;
        pts.push(
          [0, 1].map(
            (a) =>
              0.5 *
              (2 * p1[a] +
                (-p0[a] + p2[a]) * t +
                (2 * p0[a] - 5 * p1[a] + 4 * p2[a] - p3[a]) * t * t +
                (-p0[a] + 3 * p1[a] - 3 * p2[a] + p3[a]) * t * t * t)
          )
        );
      }
    }
    pts.push(points.at(-1));
    const top = [],
      bottom = [];
    pts.forEach((p, j) => {
      const prev = pts[Math.max(0, j - 1)],
        next = pts[Math.min(pts.length - 1, j + 1)];
      const dx = next[0] - prev[0],
        dy = next[1] - prev[1],
        len = Math.hypot(dx, dy) || 1;
      const w =
        (5.7 + Math.sin(j * 0.19 + i) * 1.3) *
        (0.65 + 0.35 * Math.sin((Math.PI * j) / (pts.length - 1)));
      top.push([p[0] - (dy / len) * w, p[1] + (dx / len) * w]);
      bottom.push([p[0] + (dy / len) * w, p[1] - (dx / len) * w]);
    });
    food += `<g id="ribbon-${i + 1}">${path(curve([...top, ...bottom.toReversed()], true), 'url(#ribbon)', 'opacity=".97"')}${path(curve(top), 'none', 'stroke="#9f875f" stroke-width=".65" stroke-opacity=".42"')}${path(curve(bottom.slice(3, -3)), 'none', 'stroke="#fff9df" stroke-width="2.3" stroke-opacity=".8"')}</g>`;
  });
  let finish = '';
  for (let i = 0; i < 100; i++) {
    const x = between(320, 663),
      y = between(245, 440);
    if (((x - 480) / 180) ** 2 + ((y - 345) / 106) ** 2 > 1) continue;
    finish += path(
      `M${n(x)} ${n(y)}l${n(between(1, 4))} ${n(between(-1, 2))}`,
      'none',
      `stroke="${i % 4 ? '#fffdf1' : '#584c3c'}" stroke-width="${n(i % 4 ? between(0.8, 1.8) : between(0.45, 1.1))}" stroke-linecap="round" opacity=".75"`
    );
  }
  svg(
    'authentic-roman-alfredo',
    'Fettuccine al burro — ribbon study',
    'Flat fettuccine ribbons with a light butter-Parmesan coating, fine grated cheese and sparse optional pepper on a pale plate.',
    shadow() +
      vessel() +
      layer('pasta', '03 · Individual fettuccine ribbons', `<g filter="url(#wash)">${food}</g>`) +
      layer('finish', '04 · Fine Parmesan and optional pepper', finish)
  );
}
pasta();
function broccoli() {
  seed = 208;
  let food = '';
  const placements = [
    [361, 283, -32, 1.05],
    [474, 277, 17, 1.12],
    [604, 311, 40, 1.1],
    [354, 360, -68, 0.92],
    [457, 360, -13, 1.03],
    [563, 396, 131, 0.96],
    [431, 420, 79, 0.8],
  ];
  for (const [index, [x, y, angle, size]] of placements.entries()) {
    let f = blob(0, 4, 54, 23, '#69806a', 0.27);
    f += path(
      'M-7 65 C-12 44 -17 19 -30 6 L-36 -11 L-25 -15 C-19 8 -9 20 -2 26 C3 2 11 -14 20 -24 L29 -18 C17 0 11 20 10 39 L14 59Z',
      'url(#stem)'
    );
    f += path(
      'M-1 59 C-4 32 -9 12 -24 -7 M4 31 C10 12 18 -2 22 -15',
      'none',
      'stroke="#edf0cb" stroke-opacity=".65" stroke-width="3"'
    );
    const crowns = [
      [-34, -16, 18, 15],
      [-23, -36, 23, 18],
      [-3, -42, 24, 20],
      [21, -30, 25, 20],
      [40, -13, 19, 17],
      [-13, -13, 23, 17],
      [14, -8, 23, 16],
    ];
    for (const [cx, cy, rx, ry] of crowns) {
      f += blob(
        cx,
        cy,
        rx,
        ry,
        ['#526b55', '#6e7e51', '#8a965d', '#405d50'][Math.floor(rand() * 4)],
        between(0.68, 0.9),
        13
      );
      f += blob(cx - 4, cy - 6, rx * 0.7, ry * 0.6, '#bac28b', 0.3, 10);
      for (let j = 0; j < 9; j++) {
        const bx = cx + between(-rx * 0.8, rx * 0.8),
          by = cy + between(-ry * 0.8, ry * 0.8);
        f += blob(
          bx,
          by,
          between(1.2, 3.4),
          between(1, 2.6),
          ['#354e44', '#c1c993', '#7b8447', '#74633f'][Math.floor(rand() * 4)],
          between(0.3, 0.7),
          7
        );
      }
    }
    f += path(
      'M-6 50 C-13 30 -22 20 -29 15 M3 35 C13 20 23 13 30 4',
      'none',
      'stroke="#dce0b1" stroke-opacity=".72" stroke-width="2"'
    );
    food += `<g id="floret-${index + 1}" transform="translate(${x} ${y}) rotate(${angle}) scale(${size})">${f}</g>`;
  }
  let cheese = '';
  for (let i = 0; i < 100; i++) {
    const x = between(303, 651),
      y = between(235, 440);
    if (((x - 475) / 185) ** 2 + ((y - 346) / 112) ** 2 > 1) continue;
    cheese += path(
      `M${n(x)} ${n(y)}l${n(between(1, 4))} ${n(between(-3, 2))}`,
      'none',
      `stroke="#fffced" stroke-width="${n(between(0.7, 1.6))}" stroke-linecap="round" opacity=".8"`
    );
  }
  svg(
    'crispy-parmesan-roasted-broccoli',
    'Roasted broccoli — branching study',
    'Branching roasted broccoli florets with fine Parmesan and restrained brown edges. No unlisted lemon-wedge garnish.',
    shadow() +
      vessel() +
      layer(
        'broccoli',
        '03 · Seven individual branching florets',
        `<g filter="url(#wash)">${food}</g>`
      ) +
      layer('parmesan', '04 · Grated Parmesan', cheese)
  );
}
function dal() {
  seed = 902;
  let bowl = path(
    'M228 310 C224 232 340 185 479 185 C620 181 744 231 748 309 L727 408 C691 462 590 494 481 490 C365 487 270 447 245 389Z',
    'url(#porcelain)'
  );
  bowl += path(
    'M241 352 C310 440 638 460 738 344 L727 409 C678 471 566 503 452 483 C325 474 259 431 241 352Z',
    '#a7b3ad',
    'opacity=".25"'
  );
  bowl += path(
    'M231 306 C231 231 343 181 480 184 C616 181 737 230 748 307 M742 345 C732 411 623 455 485 455 C352 455 254 405 239 353 M261 397 C313 462 573 526 707 433',
    'none',
    'stroke="#728084" stroke-width=".9" stroke-opacity=".5"'
  );
  bowl += path(
    'M251 309 C251 246 349 204 481 203 C608 203 719 246 725 310 C723 382 617 429 481 429 C350 429 255 380 251 309Z',
    '#d5c394',
    'opacity=".91"'
  );
  let lentils = '';
  for (let i = 0; i < 210; i++) {
    const x = between(260, 714),
      y = between(215, 423);
    if (((x - 485) / 226) ** 2 + ((y - 317) / 109) ** 2 > 1) continue;
    lentils += blob(
      x,
      y,
      between(3, 13),
      between(2, 6),
      ['#c6ac6c', '#e9d69f', '#f2e5bb', '#bca471'][Math.floor(rand() * 4)],
      between(0.2, 0.55),
      9
    );
  }
  lentils += path(
    'M254 313 C267 378 363 427 481 431 C606 434 708 381 724 323',
    'none',
    'stroke="#fff9e0" stroke-opacity=".72" stroke-width="2.5"'
  );
  let temper =
    path(
      'M339 287 C370 269 419 276 442 288 C414 280 385 283 364 295 C350 302 341 298 339 287Z',
      '#b4723b',
      'opacity=".43"'
    ) +
    path(
      'M555 263 C584 262 618 279 614 299 C595 282 576 278 560 282Z',
      '#b9733e',
      'opacity=".48"'
    ) +
    path('M407 371 C442 388 487 391 524 378 C517 395 459 410 424 394Z', '#b66c36', 'opacity=".36"');
  for (let i = 0; i < 55; i++) {
    const x = between(286, 691),
      y = between(234, 405);
    if (((x - 485) / 204) ** 2 + ((y - 317) / 91) ** 2 > 1) continue;
    temper += `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${i % 3 ? 2.1 : 1.1}" ry="${i % 3 ? 0.72 : 1.05}" fill="#665433" opacity=".8" transform="rotate(${n(between(-80, 80))} ${n(x)} ${n(y)})"/>`;
  }
  // Four broken pieces depict the recipe's two dried chiles, each broken in half.
  let garnish = '';
  [
    [384, 315, -13, 1],
    [428, 332, 18, 0.8],
    [561, 310, 35, 1],
    [591, 332, 23, 0.68],
  ].forEach(([x, y, a, sc], i) => {
    garnish += `<g id="dried-chile-piece-${i + 1}" transform="translate(${x} ${y}) rotate(${a}) scale(${sc})">${path('M-31 -8 C-15 -15 11 -7 27 7 L19 14 C1 9 -16 6 -35 1Z', '#844c3d')}${path('M-29 -6 C-12 -11 7 -5 20 5', 'none', 'stroke="#c08b6f" stroke-width="2" stroke-opacity=".7"')}${path('M-18 -2 L-11 4 M-3 -3 L3 6 M13 2 L18 10', 'none', 'stroke="#512f2e" stroke-width=".9" stroke-opacity=".65"')}</g>`;
  });
  [
    [376, 264, 12],
    [524, 371, -28],
    [617, 287, 44],
    [457, 279, 22],
    [337, 354, -20],
  ].forEach(([x, y, a], i) => {
    garnish += `<g id="cilantro-${i + 1}" transform="translate(${x} ${y}) rotate(${a})">${path('M0 13 C-6 7 -19 8 -17 0 C-22 -8 -14 -11 -9 -6 C-13 -19 -3 -22 1 -11 C7 -21 15 -15 12 -7 C22 -10 25 -1 16 3 C22 8 11 12 5 8 L3 17Z', '#718651', 'opacity=".84"')}${path('M2 14 L1 -10 M1 3 L-12 -2 M2 3 L14 -3', 'none', 'stroke="#c2cca1" stroke-width=".8" stroke-opacity=".6"')}</g>`;
  });
  svg(
    'dal-tadka',
    'Dal tadka — lentil and tempering study',
    'Soft split mung lentils in a shallow bowl with small seeds, four dried-chile pieces, spiced fat and cilantro.',
    shadow() +
      layer('bowl', '02 · Shallow porcelain bowl', `<g filter="url(#wash)">${bowl}</g>`) +
      layer(
        'lentils',
        '03 · Soft lentils and translucent washes',
        `<g filter="url(#wash)">${lentils}</g>`
      ) +
      layer('tempering', '04 · Spiced fat, cumin and mustard', temper) +
      layer(
        'garnish',
        '05 · Broken dried chiles and cilantro',
        `<g filter="url(#wash)">${garnish}</g>`
      )
  );
}
broccoli();
dal();
