# Handoff: IBG Property — Landing Page with Motion Graphics

> **IMPORTANT:** The HTML files in this package are **design references** — high-fidelity interactive prototypes showing the intended look, animation and behavior. The task for the developer is to **recreate this design in a production codebase** (recommended: Next.js 14 + Framer Motion + Tailwind CSS). Do not ship the HTML directly.

---

## Overview

Лендинг для закрытой партнёрской программы **IBG Property** (зарубежная недвижимость, Таиланд). Целевая аудитория — риелторы и брокеры из России/СНГ.

**Психологическая воронка:**
Зеркало → Диагноз → Как это работает → Квиз (самоубеждение) → Калькулятор → Ноль потерь → Кейсы → Кинематографический Timeline → Вход

**Два языка:** RU / EN — мгновенное переключение без перезагрузки.
**Два брейкпойнта:** Desktop ≥ 769px, Mobile ≤ 768px.

---

## Fidelity

**HIGH-FIDELITY.** Все цвета, шрифты, отступы, анимации, интерактивные состояния — финальные. Воссоздавай pixel-perfect.

---

## Recommended Tech Stack

```
Framework:    Next.js 14+ (App Router)
Animations:   Framer Motion 11 (scroll reveal, count-up, stagger)
Styling:      Tailwind CSS + CSS Modules для @keyframes
Font:         next/font → Montserrat (Google Fonts), weights 200–900
State:        useState / useReducer (quiz + calculator)
i18n:         собственный context или next-intl
Canvas:       Vanilla Canvas API (requestAnimationFrame loop)
Currency API: https://open.er-api.com/v6/latest/USD (free, no key)
```

---

## Design Tokens

### Colors
```
--bg-base:        #0d1c38
--bg-mid:         #152d52
--bg-accent:      #1C355E
--gold:           #E6DCA0
--gold-dim:       rgba(230,220,160,0.45)
--gold-glow:      rgba(230,220,160,0.55)
--white:          #ffffff
--white-70:       rgba(255,255,255,0.70)
--white-55:       rgba(255,255,255,0.55)
--white-38:       rgba(255,255,255,0.38)
--card-bg:        rgba(28,53,94,0.22)
--card-border:    rgba(230,220,160,0.10)
--card-border-hi: rgba(230,220,160,0.22)
--green-accent:   rgba(100,220,130,0.72)
--red-accent:     rgba(210,70,70,0.65)
--nav-blur:       rgba(8,14,28,0.95) + backdrop-filter: blur(22px)
```

### Typography — Montserrat only
```
Hero H1:      800, 58px / 32px mob,  line-height 1.08,  letter-spacing -0.022em
Section H2:   700, 40-42px / 26px mob, line-height 1.1, letter-spacing -0.015em
Hero subtitle:300, 24px / 18px mob,  letter-spacing 0.04em,  color gold
Body large:   300, 17px,  line-height 1.78, color white-70
Body:         300, 15-16px, line-height 1.72, color white-55
Numbers XL:   900, 52px,   letter-spacing -0.025em, color gold
Numbers card: 800, 26px,   letter-spacing -0.01em,  color gold
Labels/caps:  700, 10px,   letter-spacing 0.18-0.28em, text-transform uppercase
Section index:700, 10px,   letter-spacing 0.24em, color rgba(230,220,160,0.58)
```

### Spacing
```
Section padding desktop: 80px 40px
Section padding mobile:  60px 20px
Max-width sections:      1080px
Max-width quiz/calc:     700-720px
Nav height:              68px
Card border-radius:      14px
Button border-radius:    8px
Card padding:            24-28px desktop / 18-20px mobile
Grid gap cards:          14px
```

### Shadows & Effects
```
Gold glow dot:   box-shadow: 0 0 14px rgba(230,220,160,0.9), 0 0 28px rgba(230,220,160,0.35)
Green glow node: box-shadow: 0 0 22px rgba(80,200,100,0.2)
Card hover:      border-color → rgba(230,220,160,0.32)
Nav frosted:     background rgba(8,14,28,0.95), backdrop-filter blur(22px)
Scrollbar:       3px, color rgba(230,220,160,0.32)
```

---

## Animated Background (Canvas — PRIORITY)

`<canvas>` fixed, z-index 0, full viewport. `requestAnimationFrame` loop.

### Layer order (bottom → top):

**1. Gradient base**
```
linear-gradient(to bottom):
  0%:   #091524
  30%:  #1C355E
  65%:  #152d52
  100%: #091524
```

**2. Tactical grid** (subtle)
```
strokeStyle: rgba(28,53,94,0.2), lineWidth: 0.5
Cell size: 90×90px
```

**3. Light beams from below**
```
Origin: (W*0.5, H*1.08)
Count: 5 beams, angles: -32°, -16°, 0°, +16°, +32°
Width: 75px, gradient rgba(28,53,94,0.08) → transparent
```

**4. Animated orbs** (4 pieces)
```
Each: radial gradient rgba(28,53,94,0.58) → transparent
Motion: cx + sin(t*speed+phase)*rx, cy + cos(t*speed*0.68+phase)*ry
Speeds: 0.00029 – 0.00052 rad/frame
```

**5. Scan lines** (6 horizontal)
```
Move downward: yf = ((t*0.018 + i/6) % 1)
Opacity: sin(yf*π)*0.02, color: rgba(230,220,160,alpha)
```

**6. Constellation particles** (80 pts)
```
14% gold rgba(230,220,160,alpha), 86% white rgba(255,255,255,alpha*0.55)
Size: 0.3–1.8px, velocity: ±0.00013/frame, wrap around
Connection lines: if distance < 130px → opacity (1-d/130)*0.07, strokeStyle rgba(230,220,160,a)
Only check every 3rd particle for performance
```

---

## Orbital Ring (Hero, Desktop only)

Position: `absolute`, right: 2%, vertically centered. Size: 420×420px, opacity: 0.42.

```
Ring 1 (420px): border 1px dashed rgba(230,220,160,0.13), animation: spinCW 42s
Ring 2 (356px): border 1px solid rgba(28,53,94,0.85), bg radial-gradient, animation: spinCCW 26s
Ring 3 (292px): border 1px solid rgba(230,220,160,0.09), animation: spinCW 18s
Ring 4 (212px): border 1px dashed rgba(230,220,160,0.06), animation: spinCCW 11s

Dot outer (r=9px, gold, glow): orbit radius 196px, 9s
Dot mid   (r=6px, white 72%):  orbit radius 148px, 14s, phase +120°
Dot inner (r=4px, gold 65%):   orbit radius 106px, 6s, phase +240°

Center: 18px gold dot, glow, animation: pulse 3s infinite
Cross SVG: 2 lines, opacity 0.05
```

---

## Warm Lead Animation (Hero, inline)

Three nodes in a row (desktop) / column (mobile):

```
Node 1 "Ты":         52px circle, border rgba(255,255,255,0.28), person icon white
Arrow 1:              flowLine animation (gold), 36px connector + arrowhead
Node 2 "Тёплый лид": 52px circle, border #E6DCA0, gold glow
                      TWO ping rings: animation ping 2.6s infinite (0s, 0.9s delay)
                      people icon gold
Arrow 2:              flowLine animation (green), 36px + arrowhead
Node 3 "+ $3000+":   52px circle, border rgba(100,220,130,0.65), green glow
                      checkmark icon green

@keyframes flowLine {
  0%   { transform: translateX(-100%) }
  100% { transform: translateX(200%) }
}
@keyframes ping {
  0%   { transform: scale(1); opacity: 0.55 }
  100% { transform: scale(2.4); opacity: 0 }
}
```

---

## Floating Money Badges (Hero, Desktop only)

Multiple badges floating up from different positions, `@keyframes floatUp`:
```
@keyframes floatUp {
  0%   { transform: translateY(0);    opacity: 0   }
  15%  { opacity: 0.75 }
  90%  { opacity: 0.55 }
  100% { transform: translateY(-55px); opacity: 0 }
}

Badge style: padding 10px 16px, bg rgba(28,53,94,0.52),
             border 1px solid rgba(230,220,160,0.22), border-radius 8px,
             backdrop-filter blur(12px)

Badges (positions, delays, durations):
  "$4 200"  — left:3%,  bottom:26%, delay:0s,    dur:6s
  "$3 600"  — left:7%,  bottom:52%, delay:1.8s,  dur:7s
  "$5 600"  — left:1%,  bottom:68%, delay:3.5s,  dur:8s
  "× 2"     — left:5%,  bottom:40%, delay:2.5s,  dur:7.5s
  "$8 700"  — left:9%,  bottom:34%, delay:5s,    dur:6.5s
  "$3 000+" — right:6%, bottom:42%, delay:1s,    dur:7s  (mobile: hide right-side)
```

---

## Hero Visual Hook ("Сейчас я покажу...")

This body text MUST have a visual hook — not plain text:

```
Display as: typed/revealed text OR animated word-by-word fade-in with Framer Motion stagger
Each word appears with: initial {opacity:0, y:8} → animate {opacity:1, y:0}
Stagger: 0.06s per word
Duration per word: 0.5s, easing: [0.22, 1, 0.36, 1]
Color: rgba(255,255,255,0.68) base, key phrases ("то же самое") in white font-weight:500
```

**Hero subtitle "Дважды. За 14 месяцев."** — styled as a badge/pill:
```
NOT plain text. Render as:
  display: inline-flex, align-items: center, gap: 10px
  padding: 8px 20px
  background: rgba(230,220,160,0.06)
  border: 1px solid rgba(230,220,160,0.28)
  border-radius: 24px
  font-size: 15px, font-weight: 500, color: #E6DCA0
  + small gold dot (6px) pulsing on the left
  + decorative line/slash between "Дважды" and "За 14 месяцев"
```

---

## Screens / Views

### Screen 0 — Hero
**Purpose:** First impression. No CTA. Intrigue. User scrolls themselves.

**Layout:** min-height 100svh, flex center. Content max-width 800px, text-align center.

**Elements (top → bottom):**
1. Insider badge: `"ЗАКРЫТАЯ ПАРТНЁРСКАЯ ПРОГРАММА"` — pill with pulsing dot
2. H1: "Ты только что увидел как риелтор / получил [gold]$10 500[/gold] с одного клиента"
3. Subtitle pill: "Дважды — За 14 месяцев" (see badge style above)
4. Thin gold gradient divider 1px × 36px
5. Body text with animated word-by-word reveal (visual hook)
6. Warm Lead Animation (3 nodes)
7. Scroll indicator: label + bouncing line

**Orbital Ring** — absolute right side (desktop only)
**Floating Money Badges** — 5 chaotic positions (desktop only, some left/some right)

---

### Screen 1 — Зеркало (Block 01)
2-column grid (desktop), 1-column (mobile).

Left: H2 "Ты хороший специалист" + gold underline 48px
Right: 2 body paragraphs + blockquote (border-left 2px gold, bg rgba(28,53,94,0.2))

---

### Screen 2 — Диагноз (Block 02)
2-column grid: table | bar chart (chart hidden mobile)

Table: 5 rows. Last row (Риелтор): border-left 2px #E6DCA0, bg rgba(230,220,160,0.06)
Bar chart: 4 bars, Застройщик 40% / Инвестор 30% / Банк 25% / Риелтор 5% (gold)

---

### Screen 3 — Как это работает (Block 03)
Tactical grid overlay (SVG pattern, opacity 0.03) + corner markers + classified label.

**Flow:** 4 nodes, horizontal desktop / vertical mobile:
```
Node 1 "Тёплый лид":   86px rounded square, border red rgba(210,70,70,0.65), doc icon
  → animated flowLine arrow (red)
Node 2 "Один контакт": 86px circle, border gold rgba(230,220,160,0.52), hand icon
  → animated flowLine arrow (green)
Node 3 "Эксперты":     86px circle, border rgba(255,255,255,0.26), group icon
  → animated flowLine arrow (green)
Node 4 "Сделка":       86px circle, border rgba(100,220,130,0.72), green glow, checkmark
```
Subtitle: "Один контакт с командой IBG Property" for node 2.
Note under: "Ты не тратишь ни часа на сделку."

**Mobile:** `flex-direction: column`. Arrows become vertical (rotate 90° or use vertical version).

---

### Screen 4 — Квиз (Block 04)
Max-width 700px, single column.

Progress bar: 2px height, animated width 0→33→66→100%, fill #E6DCA0.

**Q1 — 4 options (IMPORTANT: was updated to include "Нет, таких ещё не было")**
```
Option 0: "Нет, таких ещё не было"
Option 1: "1–5 человек"
Option 2: "5–15 человек"
Option 3: "15 и больше"
```

**Q2 — 3 options** (appears after Q1 answered)
**Q3 — 4 options** (appears after Q2 answered)

Quiz buttons `.q-opt`:
```
Default:  bg rgba(28,53,94,0.28), border rgba(230,220,160,0.18), color rgba(255,255,255,0.82)
Hover:    translateX(3px), border rgba(230,220,160,0.48), bg rgba(230,220,160,0.10)
Selected: bg rgba(230,220,160,0.13), border #E6DCA0, color #E6DCA0
Disabled: cursor default (after selection)
```

Each reveal: `animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1)`.

---

### Screen 5 — Калькулятор (Block 05)
Max-width 720px.

**Controls card:** budget segment ($80k/$120k/$180k/$250k+) + range slider 1–20 clients
**Result card:** big USD number (52px, 900, gold) + THB + RUB + live rate
**Breakdown (simplified — 2 rows only):**
```
Стоимость объекта:  $XXX,XXX
Твоя комиссия:      $X,XXX
```
Formula: `budget × 0.03 × clients` (3% — твоя доля)

Live rate: `fetch('https://open.er-api.com/v6/latest/USD')`, fallback THB:36.5, RUB:91.2

---

### Screen 6 — Ноль потерь (Block 06)
Table 2 columns: Страх | Реальность. 5 rows, alternating bg.

**Mobile:** Each row becomes flex-column:
```
Fear text (small, muted) → Reality text (white, normal size)
border-right removed, border-bottom added
```

---

### Screen 7 — Кейсы (Block 07)
3-column grid desktop / 1-column mobile. Cards min-height 250px.

Middle card: slightly brighter border rgba(230,220,160,0.20) vs 0.10.

---

### Screen 8 — Кинематографический Timeline (Block 08)
Animated flowing SVG lines background (opacity 0.055).

5 numbered statements in vertical timeline style:
```
01 "Ты продолжаешь работать как сейчас"
02 "Клиент говорит: думаю про Таиланд"
03 "Всё остальное происходит без тебя"
04 [HIGHLIGHT] label: "Через 5 дней после внесения платежа"
    big gold number: "От $3000+"
    subtext: "приходят на счёт. Без твоего участия."
    style: border-left 2px gold, bg gold-tinted, padding-left 18px
05 "Ты не вёл эту сделку — ты просто соединил"
```

Layout: flex row per item — numbered label (10px caps gold) + vertical line + content (H + subtitle).

---

### Screen 9 — Вход (Block 09)
Centered, max-width 560px.

```
CTA 1 "Войти в канал":
  href: https://t.me/+KRtzaV7lxOE5ZmQ1
  style: bg #E6DCA0, color #0d1c38, font-weight 700
  + Telegram SVG icon

CTA 2 "Узнать условия":
  href: https://perm-real-data.lovable.app/
  style: transparent bg, border rgba(230,220,160,0.38), color #E6DCA0
  + arrow icon →
```

**Mobile:** flex-column, both buttons full width, text-align center.

---

## Navigation

**Desktop:**
```
Logo | [Как это работает] [Калькулятор] [Кейсы] [Партнёрство] | [RU/EN] [TG icon]
```

**Mobile:** Logo + TG icon + hamburger → full-screen overlay (fadeIn 0.3s, bg rgba(8,14,28,0.97))

**Scroll behavior:**
```
scrollY ≤ 60: transparent, no border
scrollY > 60: bg rgba(8,14,28,0.95), backdrop-filter blur(22px),
              border-bottom 1px solid rgba(230,220,160,0.07)
```

**Anchor targets:**
```
"Как это работает" → #how-it-works
"Калькулятор"      → #calculator
"Кейсы"            → #cases
"Партнёрство"      → #entry
```

---

## Key Animations

```
// CSS @keyframes
spinCW:    rotate 0→360deg, linear
spinCCW:   rotate 0→-360deg, linear
orb1:      rotate 0→360deg, 9s (outer dot)
orb2:      rotate 120→480deg, 14s (mid dot)
orb3:      rotate 240→-120deg, 6s (inner dot)
pulse:     scale 1→1.15 + opacity 0.65→1, 3s ease, infinite
ping:      scale 1→2.4 + opacity 0.55→0, 2.6s ease-out, infinite
bounce:    translateY 0→9px, 2.2s ease, infinite
floatUp:   translateY 0→-55px + opacity fade, 6-8s ease, infinite
flowLine:  translateX -100%→200%, 2s linear, infinite (money flow arrow fill)
lineDash:  stroke-dashoffset 300→0, 9-13s linear, infinite
shimmer:   opacity 0.42→0.90, 3s ease, infinite

// Framer Motion
scrollReveal:   initial {opacity:0, y:32} → whileInView {opacity:1, y:0}
                viewport: {once:true, margin:"60px 0px 0px 0px"}
                transition: {duration:0.8, ease:[0.22,1,0.36,1]}
staggered:      staggerChildren: 0.1s
heroWordReveal: each word staggered 0.06s, y:8→0, dur:0.5s
countUp:        useMotionValue → animate on budget/client change
parallax:       heroContent translateY(scrollY*0.18) + opacity fade
```

---

## Responsive Rules

```
Breakpoint: 768px

Mobile changes:
├── Nav: hamburger replaces links, show TG icon + RU/EN in overlay
├── Hero H1: 58px → 32px
├── Section H2: 40px → 26px
├── Section padding: 80px 40px → 60px 20px
├── Orbital ring: hidden
├── Floating badges: left-side only, right-side hidden
├── Warm lead: flex-row → flex-column (vertical)
├── How-it-works flow: horizontal → vertical (flex-column)
├── 2-col grids → 1-col
├── 3-col cards → 1-col
├── Fear/Reality table: 2-col grid → each row becomes flex-column
├── Budget buttons: wrap allowed
├── CTA pair: flex-column, full width buttons
└── Bar chart: hidden
```

---

## State Variables

```ts
interface AppState {
  lang: 'ru' | 'en'
  menuOpen: boolean
  q1: null | 0 | 1 | 2 | 3   // 4 options
  q2: null | 0 | 1 | 2        // 3 options
  q3: null | 0 | 1 | 2 | 3   // 4 options
  clients: number              // 1-20, default 5
  bIdx: 0 | 1 | 2 | 3        // $80k/$120k/$180k/$250k
  thb: number                  // live rate, default 36.5
  rub: number                  // live rate, default 91.2
  ratesOk: boolean
}
```

---

## Text Rules (CRITICAL)
- **IBG Property** everywhere — never just "IBG"
- **No dots at end of headings**
- **No em-dashes (—)** — use spaced en-dash ( – ) or just a space-hyphen-space
- **"Комиссия через 5 дней (после первоначального платежа)"** — Block 03 node 4
- **"Через 5 дней после внесения платежа"** — Block 08 timeline label
- **"От $3000+"** — both hero warm lead node 3 and Block 08 big number
- Casual Russian tone, no corporate language

---

## Assets

```
design_handoff_ibg_landing/assets/White.png  — white logo (use on dark bg)
design_handoff_ibg_landing/assets/Blue.png   — blue logo (for light surfaces, unused on landing)
```

Logo in nav: height 32px, object-fit contain.
Logo in footer: height 22px, opacity 0.48.

---

## Files in This Package

```
README.md                         — this document
IBG Property Landing.dc.html     — full interactive prototype (open in browser)
assets/White.png                  — white logo
assets/Blue.png                   — blue logo
```

---

## Developer Notes

1. **Canvas background** — single `requestAnimationFrame` loop, `resize` listener. Use `will-change: transform` on the canvas element.
2. **Orbital ring** — pure CSS `@keyframes`, no JS needed.
3. **Warm lead / flow arrows** — `overflow:hidden` container + animated gradient div inside.
4. **Hero word-by-word reveal** — Framer Motion `motion.span` per word, `staggerChildren`.
5. **Quiz sequential reveal** — conditional render per question, each wrapped in `AnimatePresence`.
6. **Calculator count-up** — Framer Motion `useMotionValue` + `animate()` on value change.
7. **Mobile flow section** — `flexDirection: column` at ≤768px, arrows rotate 90° or swap to vertical SVG.
8. **Live currency** — fetch on mount, store in state, fallback gracefully.
9. **z-index stack:** canvas (0) → content sections (1) → nav (100) → mobile overlay (200).
10. **Framer Motion `whileInView`** replaces the IntersectionObserver `.reveal` system used in the prototype.
