"""Approach A: a painted plate. Gouache-like shapes at a 45 degree view, daylight from the upper left."""
import math
import random
from common import *


def shadow(cx, cy, rx, ry, bg):
    return (f'<ellipse cx="{cx+rx*0.12}" cy="{cy}" rx="{rx}" ry="{ry}" fill="{SHADOW[bg]}" filter="url(#soft)" opacity="0.9"/>'
            f'<ellipse cx="{cx-rx*0.08}" cy="{cy-ry*0.3}" rx="{rx*0.78}" ry="{ry*0.45}" fill="{SHADOW[bg]}" filter="url(#soft4)"/>')


def lime_wedge(x, y, s, rot):
    return (
        f'<g transform="translate({x},{y}) rotate({rot}) scale({s})">'
        '<path d="M-60,0 A60,60 0 0 0 60,0 Z" fill="#5E9B2E"/>'
        '<path d="M-52,0 A52,52 0 0 0 52,0 Z" fill="#DDEB8C"/>'
        + ''.join(
            f'<path d="M0,2 L{f(48*math.cos(math.radians(a)))},{f(48*math.sin(math.radians(a)))} '
            f'A48,48 0 0 1 {f(48*math.cos(math.radians(a+30)))},{f(48*math.sin(math.radians(a+30)))} Z" '
            f'fill="#C6DB5E" opacity="0.8" transform="scale(0.92)"/>'
            for a in (5, 40, 75, 110, 145)
        )
        + '<path d="M-60,0 L60,0" stroke="#F4F7D8" stroke-width="5"/></g>'
    )


def lemon_wedge(x, y, s, rot):
    return (
        f'<g transform="translate({x},{y}) rotate({rot}) scale({s})">'
        '<path d="M-62,0 A62,48 0 0 0 62,0 Z" fill="#F2C81D"/>'
        '<path d="M-54,0 A54,40 0 0 0 54,0 Z" fill="#FBEA8A"/>'
        '<path d="M-62,0 L62,0" stroke="#FFF6CF" stroke-width="5"/></g>'
    )


def chile(x, y, length, rot, color='#B8321F'):
    return (
        f'<g transform="translate({x},{y}) rotate({rot})">'
        f'<path d="M0,-6 C{length*0.4},-10 {length*0.85},-6 {length},0 C{length*0.85},6 {length*0.4},8 0,6 Z" fill="{color}"/>'
        f'<path d="M{length*0.15},-3 C{length*0.4},-6 {length*0.7},-4 {length*0.85},-1" stroke="#E2683F" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
        f'<path d="M0,0 l-9,-3" stroke="#6B7A2A" stroke-width="4" stroke-linecap="round"/></g>'
    )


def dal(bg=BUTTER):
    rng = random.Random(3)
    cx, cy = 470, 292
    b = shadow(490, 468, 250, 30, bg)
    # bowl body with a slate glaze band, lit from the upper left
    b += (
        '<linearGradient id="bowl" x1="0" x2="1"><stop offset="0" stop-color="#FFFCF4"/>'
        '<stop offset="0.65" stop-color="#F3EBDA"/><stop offset="1" stop-color="#DCCDB2"/></linearGradient>'
    )
    b += f'<path d="M{cx-300},{cy} C{cx-290},{cy+120} {cx-170},{cy+178} {cx},{cy+178} C{cx+170},{cy+178} {cx+290},{cy+120} {cx+300},{cy} Z" fill="url(#bowl)" filter="url(#paintsoft)"/>'
    b += f'<path d="M{cx-292},{cy+40} C{cx-250},{cy+110} {cx-150},{cy+140} {cx},{cy+142} C{cx+150},{cy+140} {cx+250},{cy+110} {cx+292},{cy+40} L{cx+284},{cy+66} C{cx+240},{cy+128} {cx+140},{cy+158} {cx},{cy+160} C{cx-140},{cy+158} {cx-240},{cy+128} {cx-284},{cy+66} Z" fill="{SLATE}" opacity="0.92" filter="url(#paintsoft)"/>'
    b += f'<ellipse cx="{cx}" cy="{cy}" rx="300" ry="104" fill="#FFFDF7" filter="url(#paintsoft)"/>'
    b += f'<ellipse cx="{cx+6}" cy="{cy+4}" rx="276" ry="90" fill="#EADFC9"/>'
    # dal surface
    b += (
        '<radialGradient id="dal" cx="0.38" cy="0.35" r="0.75"><stop offset="0" stop-color="#FFD764"/>'
        '<stop offset="0.6" stop-color="#F0B532"/><stop offset="1" stop-color="#D6901E"/></radialGradient>'
    )
    b += f'<ellipse cx="{cx+6}" cy="{cy+8}" rx="266" ry="84" fill="url(#dal)" filter="url(#paint)"/>'
    # creamy swirls
    for i in range(7):
        x = cx + rng.uniform(-200, 200)
        y = cy + 8 + rng.uniform(-50, 50)
        b += f'<path d="M{f(x-50)},{f(y)} q50,-{rng.uniform(10,20):.0f} 100,0" stroke="#FFE69A" stroke-width="5" fill="none" opacity="0.7" stroke-linecap="round"/>'
    # tadka: red chile oil pooled and streaked
    for i in range(9):
        x = cx + rng.uniform(-170, 190)
        y = cy + rng.uniform(-40, 50)
        b += f'<path d="{blob(x, y, rng.uniform(18, 40), n=8, jitter=0.35, rng=rng, squash=0.42)}" fill="#D9541E" opacity="{rng.uniform(0.45,0.75):.2f}" filter="url(#paint)"/>'
    # fried onion and garlic
    for i in range(26):
        x = cx + rng.uniform(-200, 210)
        y = cy + 6 + rng.uniform(-55, 60) * 0.95
        if ((x - cx) / 255) ** 2 + ((y - cy - 8) / 78) ** 2 > 1:
            continue
        col = rng.choice(['#9A4E1C', '#C47A2C', '#F6E2B0'])
        b += f'<path d="{blob(x, y, rng.uniform(5, 9), n=6, jitter=0.4, rng=rng, squash=0.55)}" fill="{col}"/>'
    # seeds
    for i in range(70):
        x = cx + rng.uniform(-230, 230)
        y = cy + 8 + rng.uniform(-70, 70)
        if ((x - cx) / 258) ** 2 + ((y - cy - 8) / 80) ** 2 > 1:
            continue
        if rng.random() < 0.5:
            b += f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="4.5" ry="1.8" fill="#6B4A23" transform="rotate({rng.randint(0,180)} {f(x)} {f(y)})"/>'
        else:
            b += f'<circle cx="{f(x)}" cy="{f(y)}" r="2.6" fill="#2A1C14"/>'
    # curry leaves, chiles, cilantro
    for (x, y, a) in ((cx - 120, cy - 10, -20), (cx + 40, cy - 34, 15), (cx + 150, cy + 30, -35)):
        b += f'<path d="{leaf(x, y, 62, 13, a)}" fill="#2F5E2A"/><path d="M{x-28},{y} L{x+28},{y}" stroke="#4E7F3D" stroke-width="2" transform="rotate({a} {x} {y})"/>'
    b += chile(cx - 40, cy + 30, 78, -18) + chile(cx + 70, cy + 4, 70, 160) + chile(cx - 190, cy + 10, 60, 25)
    b += '<g fill="#4F9A3A">' + ''.join(cilantro(cx + rng.uniform(-170, 190), cy + rng.uniform(-30, 45), rng.uniform(13, 17), rng.uniform(0, 360), rng) for _ in range(9)) + '</g>'
    b += '<g fill="#7DBE55" opacity="0.8">' + ''.join(cilantro(cx + rng.uniform(-170, 190), cy + rng.uniform(-30, 45), rng.uniform(8, 11), rng.uniform(0, 360), rng) for _ in range(6)) + '</g>'
    # glossy light on the surface
    b += f'<ellipse cx="{cx-90}" cy="{cy-28}" rx="90" ry="16" fill="#FFF6D2" opacity="0.45" filter="url(#soft4)"/>'
    # props: lemon wedge and a dried chile on the table
    b += shadow(812, 548, 70, 14, bg) + lemon_wedge(790, 520, 0.95, 12)
    b += shadow(170, 548, 50, 10, bg) + chile(130, 530, 82, -8)
    for i in range(10):
        x, y = 230 + rng.uniform(-40, 60), 560 + rng.uniform(-12, 20)
        b += f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="4.5" ry="1.8" fill="#6B4A23" transform="rotate({rng.randint(0,180)} {f(x)} {f(y)})"/>'
    return svg(b + GRAIN, PAINT_DEFS, bg)


def floret(x, y, s, rng, light='#8CD05C', mid='#4FA23B', dark='#2C6E2C'):
    out = f'<path d="M{f(x-8*s)},{f(y)} L{f(x-5*s)},{f(y+30*s)} Q{f(x)},{f(y+36*s)} {f(x+5*s)},{f(y+30*s)} L{f(x+8*s)},{f(y)} Z" fill="#A8CF6E"/>'
    pts = [(-16, -6), (0, -16), (16, -6), (-8, 4), (10, 4), (0, -2)]
    for (dx, dy) in pts:
        out += f'<circle cx="{f(x+dx*s)}" cy="{f(y+dy*s)}" r="{f(13*s)}" fill="{mid}"/>'
    for (dx, dy) in pts[:3]:
        out += f'<circle cx="{f(x+dx*s-4*s)}" cy="{f(y+dy*s-4*s)}" r="{f(7*s)}" fill="{light}"/>'
    for _ in range(8):
        out += f'<circle cx="{f(x+rng.uniform(-22,22)*s)}" cy="{f(y+rng.uniform(-22,10)*s)}" r="{f(2*s)}" fill="{dark}"/>'
    return out


def beef_slice(x, y, s, rot, col='#6B3820'):
    return (
        f'<g transform="translate({f(x)},{f(y)}) rotate({rot}) scale({s})">'
        f'<path d="M-46,-2 C-38,-12 -20,-9 -6,-12 C10,-15 30,-10 46,-4 C50,2 40,8 26,7 C10,10 -10,6 -24,9 C-38,10 -50,6 -46,-2 Z" fill="{col}"/>'
        '<path d="M-38,-5 C-24,-9 -8,-8 6,-11 C20,-12 34,-8 42,-4" stroke="#B87443" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.9"/>'
        '<path d="M-14,-9 C-2,-11 10,-12 20,-10" stroke="#F7CF98" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.85"/>'
        '</g>'
    )


def beef(bg=BUTTER):
    rng = random.Random(11)
    cx, cy = 465, 318
    b = shadow(480, 452, 300, 34, bg)
    b += (
        '<linearGradient id="plate" x1="0" x2="1"><stop offset="0" stop-color="#FFFFFB"/>'
        '<stop offset="0.7" stop-color="#F1EEE6"/><stop offset="1" stop-color="#D9D4C8"/></linearGradient>'
    )
    b += f'<ellipse cx="{cx}" cy="{cy+18}" rx="330" ry="126" fill="url(#plate)" filter="url(#paintsoft)"/>'
    b += f'<ellipse cx="{cx}" cy="{cy+10}" rx="330" ry="122" fill="{SLATE}" filter="url(#paintsoft)"/>'
    b += f'<ellipse cx="{cx}" cy="{cy+8}" rx="312" ry="112" fill="#FFFEF9" filter="url(#paintsoft)"/>'
    b += f'<ellipse cx="{cx+8}" cy="{cy+14}" rx="232" ry="78" fill="#ECE7DC"/>'
    # glossy sauce pool
    b += f'<path d="{blob(cx+8, cy+18, 210, n=11, jitter=0.12, rng=rng, squash=0.34)}" fill="#6A3517" filter="url(#paint)"/>'
    b += f'<ellipse cx="{cx-70}" cy="{cy+4}" rx="80" ry="10" fill="#B9733F" opacity="0.5" filter="url(#soft4)"/>'
    items = []
    for i in range(34):
        a = rng.uniform(0, 2 * math.pi)
        r = math.sqrt(rng.random())
        x = cx + 175 * r * math.cos(a)
        y = cy + 4 + 52 * r * math.sin(a)
        # the mound rises in the middle
        y -= 46 * (1 - r) ** 1.2
        items.append((y, x, 'b' if i % 2 else 'f'))
    items.sort()
    for (y, x, kind) in items:
        if kind == 'f':
            b += floret(x, y, rng.uniform(1.0, 1.3), rng)
        else:
            b += beef_slice(x, y, rng.uniform(0.95, 1.25), rng.uniform(-30, 30), rng.choice(['#6B3820', '#7A4428', '#5A2E1A', '#84492B']))
    # sesame and scallion
    for i in range(40):
        x, y = cx + rng.uniform(-170, 180), cy + rng.uniform(-60, 40)
        b += f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="3.4" ry="1.7" fill="#FFF1D2" transform="rotate({rng.randint(0,180)} {f(x)} {f(y)})"/>'
    for i in range(10):
        x, y = cx + rng.uniform(-150, 150), cy + rng.uniform(-50, 30)
        b += f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="6" ry="4" fill="#9ACD5A" stroke="#4E8A33" stroke-width="2"/>'
    # apricot chopsticks resting on the rim
    b += shadow(720, 520, 160, 10, bg)
    b += '<path d="M560,420 L900,510" stroke="#E07F2E" stroke-width="13" stroke-linecap="round"/><path d="M560,420 L900,510" stroke="{0}" stroke-width="9" stroke-linecap="round"/>'.format(APRICOT)
    b += '<path d="M575,446 L905,536" stroke="#E07F2E" stroke-width="13" stroke-linecap="round"/><path d="M575,446 L905,536" stroke="{0}" stroke-width="9" stroke-linecap="round"/>'.format(APRICOT)
    b += '<path d="M600,428 L880,503" stroke="#FFC48F" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>'
    return svg(b + GRAIN, PAINT_DEFS, bg)


def margarita(bg=SKY):
    rng = random.Random(5)
    cx = 470
    top, bot = 168, 492
    b = shadow(520, bot + 8, 190, 30, bg)
    # liquid through the glass
    b += (
        '<linearGradient id="liq" x1="0" x2="1"><stop offset="0" stop-color="#F7F4B8"/>'
        '<stop offset="0.6" stop-color="#E6E58E"/><stop offset="1" stop-color="#C9CC62"/></linearGradient>'
        '<linearGradient id="glass" x1="0" x2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.75"/>'
        '<stop offset="0.25" stop-color="#FFFFFF" stop-opacity="0.15"/><stop offset="0.8" stop-color="#FFFFFF" stop-opacity="0.05"/>'
        '<stop offset="1" stop-color="#FFFFFF" stop-opacity="0.45"/></linearGradient>'
    )
    lt = 236
    b += f'<path d="M{cx-150},{lt} L{cx-128},{bot-40} Q{cx},{bot-10} {cx+128},{bot-40} L{cx+150},{lt} Z" fill="url(#liq)" filter="url(#paint)"/>'
    b += f'<ellipse cx="{cx}" cy="{lt}" rx="150" ry="36" fill="#F3F2B4" filter="url(#paint)"/>'
    # ice cubes above and below the surface
    for (x, y, s, r) in ((cx - 60, lt - 6, 54, -8), (cx + 40, lt - 14, 58, 10), (cx - 10, lt + 40, 52, 4), (cx + 70, lt + 60, 46, -12), (cx - 80, lt + 80, 44, 14)):
        op = 0.85 if y < lt + 10 else 0.4
        b += f'<rect x="{x-s/2}" y="{y-s/2}" width="{s}" height="{s*0.85}" rx="12" fill="#FDFFF2" opacity="{op}" transform="rotate({r} {x} {y})" filter="url(#paint)"/>'
        b += f'<rect x="{x-s/2+8}" y="{y-s/2+6}" width="{s*0.35}" height="{s*0.18}" rx="5" fill="#FFFFFF" opacity="{op}" transform="rotate({r} {x} {y})"/>'
    # smoked salt flecks in the drink
    for i in range(14):
        x, y = cx + rng.uniform(-120, 120), lt + rng.uniform(-20, 24)
        b += f'<circle cx="{f(x)}" cy="{f(y)}" r="{rng.uniform(1.4,2.6):.1f}" fill="#7C6B5A" opacity="0.7"/>'
    # glass body, rim and heavy base
    b += f'<path d="M{cx-160},{top} L{cx-132},{bot} Q{cx},{bot+30} {cx+132},{bot} L{cx+160},{top} Z" fill="url(#glass)"/>'
    b += f'<path d="M{cx-132},{bot-40} Q{cx},{bot-10} {cx+132},{bot-40} L{cx+132},{bot} Q{cx},{bot+30} {cx-132},{bot} Z" fill="#FFFFFF" opacity="0.5"/>'
    b += f'<ellipse cx="{cx}" cy="{top}" rx="160" ry="38" fill="none" stroke="#FFFFFF" stroke-width="6" opacity="0.9"/>'
    b += f'<path d="M{cx-142},{top+30} L{cx-122},{bot-20}" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round" opacity="0.7"/>'
    b += f'<path d="M{cx+132},{top+50} L{cx+118},{bot-30}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.5"/>'
    # lime wedge on the rim
    b += lime_wedge(cx + 140, top + 8, 1.1, -30)
    # props: lime half and a slate dish of smoked salt
    b += shadow(200, 556, 70, 14, bg)
    b += '<ellipse cx="190" cy="530" rx="66" ry="40" fill="#5E9B2E"/><ellipse cx="190" cy="524" rx="58" ry="33" fill="#DDEB8C"/>'
    for a in range(0, 360, 45):
        b += f'<path d="M190,524 L{f(190+52*math.cos(math.radians(a)))},{f(524+29*math.sin(math.radians(a)))} L{f(190+52*math.cos(math.radians(a+38)))},{f(524+29*math.sin(math.radians(a+38)))} Z" fill="#C6DB5E" opacity="0.75"/>'
    b += shadow(790, 562, 72, 12, bg)
    b += f'<ellipse cx="780" cy="540" rx="70" ry="24" fill="{SLATE}"/><ellipse cx="780" cy="534" rx="58" ry="17" fill="#36586A"/>'
    for i in range(40):
        x, y = 780 + rng.uniform(-44, 44), 532 + rng.uniform(-10, 8)
        b += f'<rect x="{f(x)}" y="{f(y)}" width="{rng.uniform(3,6):.1f}" height="{rng.uniform(2,4):.1f}" fill="{rng.choice(["#EDE6DA", "#C9B8A2", "#8D7A66"])}" transform="rotate({rng.randint(0,90)} {f(x)} {f(y)})"/>'
    return svg(b + GRAIN, PAINT_DEFS, bg)


if __name__ == '__main__':
    import sys
    out = sys.argv[1]
    for name, fn in (('dal', dal), ('beef', beef), ('marg', margarita)):
        open(f'{out}/a-{name}.svg', 'w').write(fn())
