"""Approach C: bold graphic. Few flat colours, big simple shapes, a print-like overlap, an apricot sun behind every dish."""
import math
import random
from common import *

DEFS = '''
<pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="2.2" fill="#1F3440" opacity="0.18"/></pattern>
<pattern id="dotsw" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="6" cy="6" r="2.4" fill="#FFFFFF" opacity="0.35"/></pattern>
<filter id="grain" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.10  0 0 0 0 0.08  0 0 0 0.9 -0.42"/>
</filter>
'''
GR = f'<rect width="{W}" height="{H}" filter="url(#grain)" opacity="0.5"/>'
MUL = 'style="mix-blend-mode:multiply"'


def sun(cx, cy, r, col=APRICOT):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{col}"/><circle cx="{cx}" cy="{cy}" r="{r}" fill="url(#dotsw)"/>'


def dal(bg=BUTTER):
    rng = random.Random(7)
    cx, cy = 470, 330
    b = sun(600, 250, 230)
    b += f'<ellipse cx="{cx+20}" cy="{cy+168}" rx="250" ry="22" fill="{SLATE_D}" opacity="0.25"/>'
    b += f'<path d="M{cx-290},{cy} C{cx-280},{cy+130} {cx-160},{cy+170} {cx},{cy+170} C{cx+160},{cy+170} {cx+280},{cy+130} {cx+290},{cy} Z" fill="{SLATE}"/>'
    b += f'<path d="M{cx-290},{cy} C{cx-280},{cy+130} {cx-160},{cy+170} {cx},{cy+170} L{cx},{cy} Z" fill="#5F8394"/>'
    b += f'<ellipse cx="{cx}" cy="{cy}" rx="290" ry="96" fill="#FFFDF7"/>'
    b += f'<ellipse cx="{cx}" cy="{cy+6}" rx="262" ry="80" fill="#F5B731"/>'
    b += f'<ellipse cx="{cx}" cy="{cy+6}" rx="262" ry="80" fill="url(#dots)"/>'
    # a bold swirl of red tadka
    b += f'<path d="M{cx-170},{cy+10} C{cx-90},{cy-50} {cx+40},{cy-40} {cx+60},{cy} C{cx+80},{cy+40} {cx-20},{cy+50} {cx-40},{cy+20} C{cx-60},{cy-6} {cx+10},{cy-14} {cx+20},{cy+4}" stroke="#E0451F" stroke-width="18" fill="none" stroke-linecap="round" {MUL} opacity="0.85"/>'
    # chiles, leaves and seeds as simple marks
    for (x, y, r) in ((cx + 120, cy - 20, -20), (cx - 140, cy + 30, 25), (cx + 150, cy + 40, 160)):
        b += f'<rect x="{x-38}" y="{y-8}" width="76" height="16" rx="8" fill="#B8241A" transform="rotate({r} {x} {y})"/>'
    for (x, y, r) in ((cx - 60, cy - 40, -25), (cx + 200, cy - 10, 30), (cx - 210, cy - 6, 10), (cx + 40, cy + 50, -50)):
        b += f'<path d="{leaf(x, y, 60, 15, r)}" fill="#2E7D3A"/>'
    for i in range(36):
        x, y = cx + rng.uniform(-220, 220), cy + 6 + rng.uniform(-60, 60)
        if ((x - cx) / 250) ** 2 + ((y - cy - 6) / 74) ** 2 < 1:
            b += f'<circle cx="{f(x)}" cy="{f(y)}" r="4" fill="{INK}"/>'
    b += f'<g transform="translate(190,545) rotate(-12)"><path d="M-62,0 A62,48 0 0 0 62,0 Z" fill="#F2C81D"/><path d="M-52,0 A52,38 0 0 0 52,0 Z" fill="#FFE97A"/></g>'
    return svg(b + GR, DEFS, bg)


def beef(bg=BUTTER):
    rng = random.Random(9)
    cx, cy = 470, 330
    b = sun(620, 240, 230)
    b += f'<ellipse cx="{cx+20}" cy="{cy+132}" rx="300" ry="22" fill="{SLATE_D}" opacity="0.25"/>'
    b += f'<ellipse cx="{cx}" cy="{cy+18}" rx="330" ry="118" fill="{SLATE}"/>'
    b += f'<ellipse cx="{cx}" cy="{cy+8}" rx="322" ry="110" fill="#FFFDF7"/>'
    b += f'<path d="{blob(cx, cy+10, 220, n=10, jitter=0.1, rng=rng, squash=0.36)}" fill="#6A3517"/>'
    items = []
    for i in range(26):
        a, r = rng.uniform(0, 2 * math.pi), math.sqrt(rng.random())
        x, y = cx + 175 * r * math.cos(a), cy + 2 + 52 * r * math.sin(a) - 40 * (1 - r)
        items.append((y, x, i % 2))
    for (y, x, k) in sorted(items):
        if k:
            b += f'<g transform="translate({f(x)},{f(y)}) rotate({rng.randint(-30,30)})"><rect x="-44" y="-11" width="88" height="22" rx="11" fill="#8A4A28"/><rect x="-34" y="-8" width="60" height="5" rx="2.5" fill="#E09A62"/></g>'
        else:
            b += f'<path d="{blob(x, y-6, 30, n=7, jitter=0.22, rng=rng, squash=0.8)}" fill="#3FA046"/><path d="{blob(x, y-6, 30, n=7, jitter=0.22, rng=rng, squash=0.8)}" fill="url(#dots)"/><rect x="{f(x-7)}" y="{f(y+12)}" width="14" height="22" rx="6" fill="#A8D46E"/>'
    for i in range(30):
        x, y = cx + rng.uniform(-170, 170), cy + rng.uniform(-60, 40)
        b += f'<rect x="{f(x)}" y="{f(y)}" width="7" height="3.5" rx="1.7" fill="#FFF4DA" transform="rotate({rng.randint(0,180)} {f(x)} {f(y)})"/>'
    b += f'<rect x="560" y="455" width="360" height="13" rx="6.5" fill="{APRICOT}" transform="rotate(14 560 455)" {MUL}/>'
    b += f'<rect x="572" y="482" width="360" height="13" rx="6.5" fill="#E26E1E" transform="rotate(14 572 482)" {MUL}/>'
    return svg(b + GR, DEFS, bg)


def margarita(bg=SKY):
    rng = random.Random(3)
    cx, top, bot = 470, 170, 500
    b = sun(560, 270, 230)
    b += f'<ellipse cx="{cx+20}" cy="{bot+16}" rx="170" ry="20" fill="{SLATE_D}" opacity="0.25"/>'
    b += f'<path d="M{cx-150},{top+70} L{cx-130},{bot-40} L{cx+130},{bot-40} L{cx+150},{top+70} Z" fill="#E4EA78"/>'
    b += f'<ellipse cx="{cx}" cy="{top+70}" rx="150" ry="34" fill="#F1F3A6"/>'
    for (x, y, s, r) in ((cx - 60, top + 62, 60, -8), (cx + 30, top + 54, 64, 12), (cx - 10, top + 140, 56, 4), (cx + 60, top + 190, 50, -12)):
        b += f'<rect x="{x-s/2}" y="{y-s/2}" width="{s}" height="{s*0.85}" rx="10" fill="#FFFFFF" opacity="0.75" transform="rotate({r} {x} {y})"/>'
    b += f'<path d="M{cx-160},{top} L{cx-150},{top+70} L{cx+150},{top+70} L{cx+160},{top} Z" fill="#FFFFFF" opacity="0.4"/>'
    b += f'<rect x="{cx-132}" y="{bot-40}" width="264" height="40" fill="#FFFFFF" opacity="0.55"/>'
    b += f'<ellipse cx="{cx}" cy="{top}" rx="160" ry="36" fill="none" stroke="#FFFFFF" stroke-width="7"/>'
    b += f'<rect x="{cx-146}" y="{top+30}" width="16" height="{bot-top-70}" rx="8" fill="#FFFFFF" opacity="0.7" transform="rotate(-4 {cx-138} {top+30})"/>'
    # lime wedge as two half circles
    b += f'<g transform="translate({cx+150},{top+6}) rotate(-30)"><path d="M-62,0 A62,62 0 0 0 62,0 Z" fill="#3E9A3A"/><path d="M-52,0 A52,52 0 0 0 52,0 Z" fill="#C9E25A"/></g>'
    b += f'<circle cx="190" cy="530" r="58" fill="#3E9A3A" {MUL}/><circle cx="190" cy="530" r="46" fill="#C9E25A"/>'
    b += f'<rect x="720" y="510" width="140" height="42" rx="21" fill="{SLATE}"/>'
    for i in range(18):
        b += f'<rect x="{740+rng.uniform(0,100):.0f}" y="{512+rng.uniform(0,10):.0f}" width="7" height="5" fill="#EDE6DA" transform="rotate({rng.randint(0,60)} 790 520)"/>'
    return svg(b + GR, DEFS, bg)


if __name__ == '__main__':
    import sys
    out = sys.argv[1]
    for name, fn in (('dal', dal), ('beef', beef), ('marg', margarita)):
        open(f'{out}/c-{name}.svg', 'w').write(fn())
