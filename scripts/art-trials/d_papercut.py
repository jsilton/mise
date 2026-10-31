"""Approach D: cut paper. Each part is a flat sheet with a hand-cut edge and a soft shadow underneath, so the dish has real depth."""
import math
import random
from common import *

DEFS = '''
<filter id="cut" x="-10%" y="-10%" width="130%" height="140%">
  <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="3" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" result="d"/>
  <feGaussianBlur in="d" stdDeviation="3" result="b"/>
  <feOffset in="b" dx="5" dy="9" result="o"/>
  <feFlood flood-color="#3A2A10" flood-opacity="0.38"/><feComposite in2="o" operator="in" result="s"/>
  <feMerge><feMergeNode in="s"/><feMergeNode in="d"/></feMerge>
</filter>
<filter id="paper" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.5 0.5" numOctaves="3" seed="8"/>
  <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 -0.15"/>
</filter>
'''
PAPER = f'<rect width="{W}" height="{H}" filter="url(#paper)"/>'


def L(inner):
    return f'<g filter="url(#cut)">{inner}</g>'


def dal(bg=BUTTER):
    rng = random.Random(13)
    cx, cy = 470, 300
    b = L(f'<path d="M{cx-300},{cy} C{cx-290},{cy+130} {cx-170},{cy+178} {cx},{cy+178} C{cx+170},{cy+178} {cx+290},{cy+130} {cx+300},{cy} Z" fill="{SLATE}"/>')
    b += L(f'<path d="M{cx-292},{cy+30} C{cx-260},{cy+110} {cx-160},{cy+140} {cx},{cy+142} C{cx+160},{cy+140} {cx+260},{cy+110} {cx+292},{cy+30} L{cx+300},{cy} L{cx-300},{cy} Z" fill="#F7F1E4"/>')
    b += L(f'<ellipse cx="{cx}" cy="{cy}" rx="300" ry="102" fill="#FFFDF8"/>')
    b += L(f'<ellipse cx="{cx}" cy="{cy+6}" rx="268" ry="84" fill="#F2B43A"/>')
    b += L(f'<path d="{blob(cx-20, cy+4, 170, n=11, jitter=0.18, rng=rng, squash=0.36)}" fill="#FFCF5C"/>')
    b += L(''.join(f'<path d="{blob(cx+rng.uniform(-170,170), cy+rng.uniform(-30,40), rng.uniform(22,34), n=7, jitter=0.35, rng=rng, squash=0.45)}" fill="#E06A2A"/>' for _ in range(6)))
    b += L(''.join(f'<path d="{leaf(cx+x, cy+y, 66, 16, a)}" fill="#2F6F34"/>' for (x, y, a) in ((-130, -16, -20), (40, -38, 15), (160, 28, -35))))
    b += L(''.join(f'<path d="M{cx+x},{cy+y} c30,-14 60,-12 82,-2 c-20,12 -52,14 -82,2Z" fill="#B8281A" transform="rotate({a} {cx+x} {cy+y})"/>' for (x, y, a) in ((-60, 30, -14), (70, 0, 160), (-200, 10, 20))))
    b += L('<g fill="#4F9A3A">' + ''.join(cilantro(cx + rng.uniform(-170, 190), cy + rng.uniform(-30, 40), 17, rng.uniform(0, 360), rng) for _ in range(7)) + '</g>')
    b += ''.join(f'<circle cx="{cx+rng.uniform(-220,220):.0f}" cy="{cy+6+rng.uniform(-55,55):.0f}" r="3" fill="#3A2614"/>' for _ in range(40))
    b += L('<g transform="translate(800,520) rotate(10)"><path d="M-66,0 A66,50 0 0 0 66,0 Z" fill="#F2C81D"/><path d="M-56,0 A56,40 0 0 0 56,0 Z" fill="#FFE97A"/></g>')
    b += L('<path d="M120,540 c40,-18 80,-16 110,-2 c-26,16 -70,18 -110,2Z" fill="#B8281A"/>')
    return svg(b + PAPER, DEFS, bg)


def beef(bg=BUTTER):
    rng = random.Random(17)
    cx, cy = 470, 320
    b = L(f'<ellipse cx="{cx}" cy="{cy+18}" rx="332" ry="122" fill="{SLATE}"/>')
    b += L(f'<ellipse cx="{cx}" cy="{cy+8}" rx="318" ry="112" fill="#FFFDF8"/>')
    b += L(f'<path d="{blob(cx, cy+12, 215, n=11, jitter=0.12, rng=rng, squash=0.36)}" fill="#5E2F16"/>')
    items = []
    for i in range(24):
        a, r = rng.uniform(0, 2 * math.pi), math.sqrt(rng.random())
        items.append((cy + 4 + 50 * r * math.sin(a) - 40 * (1 - r), cx + 170 * r * math.cos(a), i % 2))
    for (y, x, k) in sorted(items):
        if k:
            b += L(f'<path d="M{f(x-44)},{f(y)} c20,-14 64,-14 88,-4 c-14,14 -66,16 -88,4Z" fill="{rng.choice(["#8A4A28", "#9A5730", "#7A3E20"])}" transform="rotate({rng.randint(-25,25)} {f(x)} {f(y)})"/>')
        else:
            b += L(f'<rect x="{f(x-7)}" y="{f(y)}" width="14" height="26" rx="5" fill="#A8D46E"/><path d="{blob(x, y-4, 38, n=8, jitter=0.25, rng=rng, squash=0.8)}" fill="#3F9A3C"/><path d="{blob(x-10, y-16, 17, n=6, jitter=0.25, rng=rng)}" fill="#7CC556"/>')
    b += ''.join(f'<ellipse cx="{cx+rng.uniform(-170,170):.0f}" cy="{cy+rng.uniform(-60,40):.0f}" rx="3.5" ry="1.8" fill="#FFF4DA"/>' for _ in range(30))
    b += L(f'<rect x="560" y="440" width="350" height="12" rx="6" fill="{APRICOT}" transform="rotate(14 560 440)"/>')
    b += L(f'<rect x="574" y="466" width="350" height="12" rx="6" fill="#E9782A" transform="rotate(14 574 466)"/>')
    return svg(b + PAPER, DEFS, bg)


def margarita(bg=SKY):
    rng = random.Random(19)
    cx, top, bot = 470, 170, 500
    b = L(f'<path d="M{cx-160},{top} L{cx-132},{bot} Q{cx},{bot+24} {cx+132},{bot} L{cx+160},{top} Z" fill="#EEF6F8"/>')
    b += L(f'<path d="M{cx-150},{top+70} L{cx-130},{bot-40} Q{cx},{bot-16} {cx+130},{bot-40} L{cx+150},{top+70} Z" fill="#E2E888"/>')
    b += L(f'<ellipse cx="{cx}" cy="{top+70}" rx="150" ry="34" fill="#F1F3A6"/>')
    b += L(''.join(f'<rect x="{x-s/2}" y="{y-s/2}" width="{s}" height="{s*0.85}" rx="10" fill="#FBFDEC" transform="rotate({r} {x} {y})"/>' for (x, y, s, r) in ((cx - 60, top + 62, 60, -8), (cx + 30, top + 54, 64, 12))))
    b += f'<rect x="{cx-146}" y="{top+30}" width="16" height="{bot-top-70}" rx="8" fill="#FFFFFF" opacity="0.8" transform="rotate(-4 {cx-138} {top+30})"/>'
    b += f'<ellipse cx="{cx}" cy="{top}" rx="160" ry="36" fill="none" stroke="#FFFFFF" stroke-width="6"/>'
    b += L(f'<g transform="translate({cx+150},{top+6}) rotate(-30)"><path d="M-62,0 A62,62 0 0 0 62,0 Z" fill="#3E9A3A"/><path d="M-52,0 A52,52 0 0 0 52,0 Z" fill="#C9E25A"/></g>')
    b += L('<ellipse cx="190" cy="530" rx="64" ry="40" fill="#3E9A3A"/><ellipse cx="190" cy="525" rx="54" ry="32" fill="#C9E25A"/>')
    b += L(f'<ellipse cx="790" cy="535" rx="72" ry="24" fill="{SLATE}"/><ellipse cx="790" cy="528" rx="54" ry="14" fill="#EDE6DA"/>')
    return svg(b + PAPER, DEFS, bg)


if __name__ == '__main__':
    import sys
    out = sys.argv[1]
    for name, fn in (('dal', dal), ('beef', beef), ('marg', margarita)):
        open(f'{out}/d-{name}.svg', 'w').write(fn())
