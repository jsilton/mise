import math
import random

W, H = 960, 640
SKY, BUTTER, PEACH = '#D4E9F2', '#F9D27E', '#FFB07E'
SLATE, SLATE_D, APRICOT, INK = '#486B7B', '#304F60', '#F59443', '#1F3440'
SHADOW = {SKY: '#AFCBD8', BUTTER: '#E2AF55', PEACH: '#E8905E'}


def svg(body, defs='', bg=BUTTER):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">'
        f'<defs>{defs}</defs><rect width="{W}" height="{H}" fill="{bg}"/>{body}</svg>'
    )


def f(x):
    return f'{x:.1f}'.rstrip('0').rstrip('.')


def blob(cx, cy, r, n=9, jitter=0.18, rng=None, squash=1.0, rot=0):
    """Smooth irregular closed shape (Catmull-Rom through jittered polar points)."""
    rng = rng or random
    pts = []
    for i in range(n):
        a = 2 * math.pi * i / n + rot
        rr = r * (1 + rng.uniform(-jitter, jitter))
        pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a) * squash))
    return closed_curve(pts)


def closed_curve(pts, t=1 / 6):
    n = len(pts)
    d = f'M{f(pts[0][0])},{f(pts[0][1])}'
    for i in range(n):
        p0, p1, p2, p3 = pts[(i - 1) % n], pts[i], pts[(i + 1) % n], pts[(i + 2) % n]
        c1 = (p1[0] + (p2[0] - p0[0]) * t, p1[1] + (p2[1] - p0[1]) * t)
        c2 = (p2[0] - (p3[0] - p1[0]) * t, p2[1] - (p3[1] - p1[1]) * t)
        d += f' C{f(c1[0])},{f(c1[1])} {f(c2[0])},{f(c2[1])} {f(p2[0])},{f(p2[1])}'
    return d + 'Z'


def leaf(cx, cy, length, width, angle):
    """Pointed leaf path centred on (cx, cy)."""
    a = math.radians(angle)
    ux, uy = math.cos(a), math.sin(a)
    vx, vy = -uy, ux
    tip = (cx + ux * length / 2, cy + uy * length / 2)
    base = (cx - ux * length / 2, cy - uy * length / 2)
    c1 = (cx + vx * width, cy + vy * width)
    c2 = (cx - vx * width, cy - vy * width)
    return (
        f'M{f(base[0])},{f(base[1])} Q{f(c1[0])},{f(c1[1])} {f(tip[0])},{f(tip[1])} '
        f'Q{f(c2[0])},{f(c2[1])} {f(base[0])},{f(base[1])}Z'
    )


def cilantro(cx, cy, s, angle, rng):
    """A cilantro leaf: three rounded lobes."""
    out = ''
    for k, da in enumerate((-50, 0, 50)):
        a = math.radians(angle + da)
        x, y = cx + math.cos(a) * s * 0.55, cy + math.sin(a) * s * 0.55
        out += f'<path d="{blob(x, y, s * 0.42, n=7, jitter=0.25, rng=rng)}"/>'
    return out


PAINT_DEFS = '''
<filter id="paint" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" result="d"/>
  <feTurbulence type="fractalNoise" baseFrequency="0.9 0.25" numOctaves="2" seed="9" result="streak"/>
  <feColorMatrix in="streak" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.1 1.05" result="sa"/>
  <feComposite in="d" in2="sa" operator="arithmetic" k1="0" k2="1" k3="-0.10" k4="0"/>
</filter>
<filter id="paintsoft" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="7" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G"/>
</filter>
<filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14"/></filter>
<filter id="soft4"><feGaussianBlur stdDeviation="4"/></filter>
<filter id="grain" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="2"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.10  0 0 0 0 0.08  0 0 0 0.9 -0.38"/>
</filter>
'''

GRAIN = f'<rect width="{W}" height="{H}" filter="url(#grain)" opacity="0.55"/>'
