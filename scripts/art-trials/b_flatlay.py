"""Approach B: overhead flat-lay. The finished dish from above, with what goes in it laid out around it."""
import math
import random
from common import *

DEFS = PAINT_DEFS + '''
<filter id="drop" x="-20%" y="-20%" width="150%" height="150%">
  <feGaussianBlur in="SourceAlpha" stdDeviation="6"/><feOffset dx="9" dy="11" result="o"/>
  <feFlood flood-color="#5A3A10" flood-opacity="0.22"/><feComposite in2="o" operator="in"/>
  <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>'''


def g(inner):
    return f'<g filter="url(#drop)">{inner}</g>'


def bowl_top(cx, cy, r, food, band=SLATE):
    return g(
        f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#FFFDF7"/>'
        f'<circle cx="{cx}" cy="{cy}" r="{r-10}" fill="none" stroke="{band}" stroke-width="9"/>'
        f'<circle cx="{cx}" cy="{cy}" r="{r-24}" fill="#EFE6D4"/>' + food
    )


def citrus_half(cx, cy, r, rind, flesh, seg):
    out = f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{rind}"/><circle cx="{cx}" cy="{cy}" r="{r*0.88}" fill="#FBF7E2"/><circle cx="{cx}" cy="{cy}" r="{r*0.82}" fill="{flesh}"/>'
    for k in range(9):
        a1, a2 = 2 * math.pi * k / 9 + 0.06, 2 * math.pi * (k + 1) / 9 - 0.06
        rr = r * 0.76
        out += f'<path d="M{f(cx+r*0.08*math.cos((a1+a2)/2))},{f(cy+r*0.08*math.sin((a1+a2)/2))} L{f(cx+rr*math.cos(a1))},{f(cy+rr*math.sin(a1))} A{f(rr)},{f(rr)} 0 0 1 {f(cx+rr*math.cos(a2))},{f(cy+rr*math.sin(a2))} Z" fill="{seg}"/>'
    return out


def dried_chile(x, y, length, rot):
    return (
        f'<g transform="translate({x},{y}) rotate({rot})">'
        f'<path d="M0,-9 C{length*0.4},-13 {length*0.85},-7 {length},0 C{length*0.85},7 {length*0.4},11 0,9 Z" fill="#A82A1A"/>'
        f'<path d="M8,-4 C{length*0.4},-7 {length*0.7},-5 {length*0.86},-1" stroke="#D9543A" stroke-width="3" fill="none" stroke-linecap="round"/>'
        '<path d="M0,0 l-12,-2" stroke="#6E7B2E" stroke-width="5" stroke-linecap="round"/></g>'
    )


def garlic_clove(x, y, s, rot):
    return (
        f'<g transform="translate({x},{y}) rotate({rot}) scale({s})">'
        '<path d="M-24,4 C-22,-14 4,-20 24,-2 C10,12 -12,16 -24,4 Z" fill="#F4E6CB"/>'
        '<path d="M-16,2 C-8,-8 6,-10 16,-2" stroke="#D9C39A" stroke-width="2" fill="none"/></g>'
    )


def seeds(cx, cy, spread, n, rng, col='#6B4A23', rx=5, ry=2):
    out = ''
    for _ in range(n):
        a, r = rng.uniform(0, 2 * math.pi), spread * math.sqrt(rng.random())
        x, y = cx + r * math.cos(a), cy + r * math.sin(a) * 0.8
        out += f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="{rx}" ry="{ry}" fill="{col}" transform="rotate({rng.randint(0,180)} {f(x)} {f(y)})"/>'
    return out


def sprig(x, y, rot, rng, col='#4F9A3A', n=5):
    out = f'<g transform="translate({x},{y}) rotate({rot})"><path d="M0,0 C20,-4 50,-2 90,4" stroke="#6E9E46" stroke-width="3" fill="none"/>'
    for k in range(n):
        px = 18 + k * 17
        out += f'<g fill="{col}">{cilantro(px, -10 if k % 2 else 10, 13, rng.uniform(0, 360), rng)}</g>'
    return out + '</g>'


def dal(bg=BUTTER):
    rng = random.Random(21)
    cx, cy = 480, 320
    food = f'<circle cx="{cx}" cy="{cy}" r="144" fill="#F2B83A"/>'
    food += f'<circle cx="{cx-30}" cy="{cy-30}" r="90" fill="#FFD25E" opacity="0.6" filter="url(#soft)"/>'
    for i in range(10):
        a, r = rng.uniform(0, 6.28), rng.uniform(10, 100)
        food += f'<path d="{blob(cx+r*math.cos(a), cy+r*math.sin(a), rng.uniform(10,20), n=8, jitter=0.4, rng=rng)}" fill="#D9541E" opacity="{rng.uniform(0.25,0.45):.2f}"/>'
    food += seeds(cx, cy, 120, 60, rng) + seeds(cx, cy, 120, 40, rng, '#2A1C14', 2.6, 2.6)
    for i in range(14):
        a, r = rng.uniform(0, 6.28), rng.uniform(0, 115)
        food += f'<path d="{blob(cx+r*math.cos(a), cy+r*math.sin(a), rng.uniform(5,9), n=6, jitter=0.4, rng=rng)}" fill="{rng.choice(["#9A4E1C", "#C47A2C"])}"/>'
    food += dried_chile(cx - 60, cy + 20, 70, -20) + dried_chile(cx + 20, cy - 50, 64, 30)
    for (x, y, a) in ((cx - 70, cy - 50, 40), (cx + 60, cy + 40, -30), (cx + 80, cy - 10, 80)):
        food += f'<path d="{leaf(x, y, 56, 14, a)}" fill="#2F5E2A"/>'
    food += '<g fill="#4F9A3A">' + ''.join(cilantro(cx + rng.uniform(-100, 100), cy + rng.uniform(-100, 100), 14, rng.uniform(0, 360), rng) for _ in range(10)) + '</g>'
    b = bowl_top(cx, cy, 185, food)
    # ingredients around it
    b += g(f'<path d="{blob(150, 140, 62, n=10, jitter=0.12, rng=rng)}" fill="#F0A818"/><path d="{blob(140, 128, 36, n=8, jitter=0.2, rng=rng)}" fill="#FFC23A"/>')
    b += g(''.join(garlic_clove(130 + dx, 330 + dy, 1.2, r) for (dx, dy, r) in ((-20, -20, -20), (30, 10, 40), (-10, 40, 160))))
    b += g(citrus_half(150, 520, 70, '#C9A15A', '#F3E8C6', '#EBDDB2'))  # onion half
    b += g(citrus_half(812, 150, 72, '#D2402A', '#E7604A', '#F28C6E'))  # tomato half
    b += g(dried_chile(760, 320, 110, -15) + dried_chile(790, 360, 100, 10))
    b += g(citrus_half(815, 525, 62, '#E9C21C', '#FBE77E', '#F6DB55'))  # lemon half
    b += g(seeds(300, 560, 40, 30, rng) + seeds(660, 80, 40, 30, rng, '#2A1C14', 3, 3))
    b += g(sprig(600, 560, -10, rng) + sprig(270, 80, 15, rng))
    return svg(b + GRAIN, DEFS, bg)


def beef(bg=BUTTER):
    rng = random.Random(31)
    cx, cy = 480, 320
    food = f'<path d="{blob(cx, cy, 150, n=12, jitter=0.08, rng=rng)}" fill="#6A3517"/>'
    for i in range(16):
        a, r = rng.uniform(0, 6.28), rng.uniform(0, 110)
        x, y = cx + r * math.cos(a), cy + r * math.sin(a)
        food += f'<g transform="translate({f(x)},{f(y)}) rotate({rng.randint(0,180)})"><path d="M-42,-10 C-20,-18 20,-16 44,-8 C46,4 22,14 -2,12 C-24,12 -46,6 -42,-10 Z" fill="{rng.choice(["#8A4A28", "#9A5730", "#7A3E20"])}"/><path d="M-30,-8 C-10,-12 14,-12 34,-6" stroke="#D08A55" stroke-width="4" fill="none" stroke-linecap="round"/></g>'
    for i in range(12):
        a, r = rng.uniform(0, 6.28), rng.uniform(10, 120)
        x, y = cx + r * math.cos(a), cy + r * math.sin(a)
        food += ''.join(f'<circle cx="{f(x+dx)}" cy="{f(y+dy)}" r="15" fill="#4FA23B"/>' for (dx, dy) in ((-12, -6), (10, -10), (0, 10), (14, 8)))
        food += ''.join(f'<circle cx="{f(x+dx)}" cy="{f(y+dy)}" r="7" fill="#8CD05C"/>' for (dx, dy) in ((-14, -10), (6, -14)))
    food += seeds(cx, cy, 130, 50, rng, '#FFF1D2', 3.5, 1.8)
    b = bowl_top(cx, cy, 190, food)
    # raw florets
    fl = ''
    for (x, y) in ((140, 130), (200, 175), (120, 210)):
        fl += f'<path d="M{x},{y} l40,40" stroke="#A8CF6E" stroke-width="16" stroke-linecap="round"/>'
        fl += ''.join(f'<circle cx="{x+dx}" cy="{y+dy}" r="20" fill="#3E8A33"/>' for (dx, dy) in ((-14, -8), (12, -14), (0, 12)))
        fl += ''.join(f'<circle cx="{x+dx}" cy="{y+dy}" r="9" fill="#73B84E"/>' for (dx, dy) in ((-16, -12), (8, -18)))
    b += g(fl)
    b += g(f'<path d="{blob(150, 380, 46, n=9, jitter=0.25, rng=rng, squash=0.6)}" fill="#D8A86A"/><path d="{blob(195, 360, 26, n=7, jitter=0.25, rng=rng, squash=0.8)}" fill="#E2B67A"/>')  # ginger
    b += g(''.join(garlic_clove(130 + dx, 520 + dy, 1.1, r) for (dx, dy, r) in ((-10, -20, -10), (40, 10, 30))))
    b += g(f'<circle cx="815" cy="150" r="66" fill="{SLATE}"/><circle cx="815" cy="150" r="52" fill="#2B1A10"/><ellipse cx="795" cy="132" rx="18" ry="8" fill="#6D4A32" opacity="0.6"/>')  # soy
    b += g(''.join(f'<rect x="{730+k*18}" y="{300+rng.randint(-10,10)}" width="14" height="{rng.randint(70,100)}" rx="7" fill="#7DBE55" transform="rotate(20 800 340)"/>' for k in range(6)))  # scallions
    b += g(seeds(810, 520, 50, 50, rng, '#FFF1D2', 4, 2))
    b += g(f'<path d="M560,580 L900,592" stroke="{APRICOT}" stroke-width="10" stroke-linecap="round"/><path d="M560,605 L900,612" stroke="{APRICOT}" stroke-width="10" stroke-linecap="round"/>')
    return svg(b + GRAIN, DEFS, bg)


def margarita(bg=SKY):
    rng = random.Random(41)
    cx, cy = 480, 320
    inner = f'<circle cx="{cx}" cy="{cy}" r="160" fill="#FFFFFF" opacity="0.55"/>'
    inner += f'<circle cx="{cx}" cy="{cy}" r="146" fill="#E9E99A"/>'
    for (x, y, s, r) in ((-60, -50, 70, 10), (40, -60, 66, -15), (-40, 40, 64, 25), (55, 30, 72, -5)):
        inner += f'<rect x="{cx+x-s/2}" y="{cy+y-s/2}" width="{s}" height="{s}" rx="12" fill="#FBFDE9" opacity="0.8" transform="rotate({r} {cx+x} {cy+y})"/>'
    inner += citrus_half(cx + 30, cy + 10, 52, '#5E9B2E', '#D7E87E', '#C2DA55')
    inner += seeds(cx, cy, 120, 20, rng, '#7C6B5A', 2, 2)
    inner += f'<circle cx="{cx}" cy="{cy}" r="160" fill="none" stroke="#FFFFFF" stroke-width="8"/>'
    inner += f'<path d="M{cx-120},{cy-90} A150,150 0 0 1 {cx+20},{cy-148}" stroke="#FFFFFF" stroke-width="10" fill="none" stroke-linecap="round" opacity="0.8"/>'
    b = g(inner)
    b += g(citrus_half(150, 150, 70, '#5E9B2E', '#D7E87E', '#C2DA55'))
    b += g(citrus_half(160, 500, 62, '#5E9B2E', '#D7E87E', '#C2DA55'))
    b += g('<path d="M760,120 C800,90 860,110 870,150 C860,170 830,150 800,160 C780,165 760,150 760,120 Z" fill="#F08A1C"/>')  # orange peel
    b += g(f'<circle cx="815" cy="330" r="52" fill="{SLATE}"/><circle cx="815" cy="330" r="40" fill="#5F8394"/><circle cx="815" cy="330" r="32" fill="#E9E99A" opacity="0.8"/>')  # jigger
    salt = f'<circle cx="815" cy="520" r="60" fill="{SLATE_D}"/>'
    for i in range(60):
        x, y = 815 + rng.uniform(-38, 38), 520 + rng.uniform(-38, 38)
        if (x - 815) ** 2 + (y - 520) ** 2 < 40 ** 2:
            salt += f'<rect x="{f(x)}" y="{f(y)}" width="{rng.uniform(4,8):.1f}" height="{rng.uniform(3,6):.1f}" fill="{rng.choice(["#EDE6DA", "#C9B8A2", "#8D7A66"])}" transform="rotate({rng.randint(0,90)} {f(x)} {f(y)})"/>'
    b += g(salt)
    return svg(b + GRAIN, DEFS, bg)


if __name__ == '__main__':
    import sys
    out = sys.argv[1]
    for name, fn in (('dal', dal), ('beef', beef), ('marg', margarita)):
        open(f'{out}/b-{name}.svg', 'w').write(fn())
