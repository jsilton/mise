#!/usr/bin/env python3
"""Even out the backdrop colour of generated recipe images.

Image AIs get close to the cook-time colours but not exact, and the pale blue drifts from
image to image. This shifts only the backdrop (and its soft shadows) to the exact hex for
the recipe's time band, leaving the food, plate and glass alone.

How it works: the backdrop colour is read from the four corners. Every pixel that is the
same hue as the backdrop at some brightness (the backdrop itself, or a shadow on it) is
moved to the target colour at that same brightness. Pixels that differ in hue, like food,
plates and glass, are left as they are, with a soft blend in between.

    python3 scripts/image-prompts/even_backdrop.py IN_DIR OUT_DIR

Needs Pillow and numpy. The band comes from the recipe's totalTime, the same way the site
picks the card colour, so file names must be recipe slugs (dal-tadka.png).
"""
import json
import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).resolve().parent
TARGET = {'quick': '#D4E9F2', 'hour': '#F9D27E', 'long': '#FFB07E', 'none': '#F9D27E'}
TOLERANCE = 28.0  # how far from "backdrop hue" a pixel can be and still count as backdrop
SOFTNESS = 14.0  # width of the blend between backdrop and dish


def bands(slugs):
    """Ask the site's own time-band code which band each recipe is in."""
    js = (
        "import fs from 'node:fs'; import matter from 'gray-matter';"
        "import { timeBand } from './src/lib/time-band.mjs';"
        "const out = {}; for (const s of process.argv.slice(1)) {"
        " const { data } = matter(fs.readFileSync(`src/content/recipes/${s}.md`, 'utf8'));"
        " out[s] = timeBand(data.totalTime).band; }"
        "console.log(JSON.stringify(out));"
    )
    res = subprocess.run(
        ['node', '--input-type=module', '-e', js, *slugs],
        cwd=HERE.parent.parent, check=True, capture_output=True, text=True,
    )
    return json.loads(res.stdout)


def hex_rgb(h):
    return np.array([int(h[i:i + 2], 16) for i in (1, 3, 5)], dtype=np.float64)


def corners(a, size=80):
    h, w, _ = a.shape
    patches = [a[:size, :size], a[:size, w - size:], a[h - size:, :size], a[h - size:, w - size:]]
    return np.median(np.concatenate([p.reshape(-1, 3) for p in patches]), axis=0)


def even(path, target_hex):
    im = Image.open(path).convert('RGB')
    a = np.asarray(im, dtype=np.float64)
    bg = corners(a)
    target = hex_rgb(target_hex)
    # Brightness of each pixel relative to the backdrop, along the backdrop's own colour.
    k = (a @ bg) / (bg @ bg)
    k3 = k[..., None]
    off_hue = np.linalg.norm(a - k3 * bg, axis=-1)
    w = np.clip((TOLERANCE + SOFTNESS - off_hue) / SOFTNESS, 0, 1)[..., None]
    out = a * (1 - w) + np.clip(k3 * target, 0, 255) * w
    return Image.fromarray(np.clip(out + 0.5, 0, 255).astype(np.uint8)), bg


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src, dst = Path(sys.argv[1]), Path(sys.argv[2])
    dst.mkdir(parents=True, exist_ok=True)
    files = sorted(src.glob('*.png'))
    band = bands([f.stem for f in files])
    for f in files:
        img, bg = even(f, TARGET[band[f.stem]])
        img.save(dst / f.name, optimize=True)
        print(f'{f.stem}: backdrop #{"".join(f"{int(round(c)):02X}" for c in bg)} -> {TARGET[band[f.stem]]}')


if __name__ == '__main__':
    main()
