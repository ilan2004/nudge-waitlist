# NUDGE — UI/UX Design System
### Web Implementation Reference · Version 2.0 · March 2026
> Consolidated from app screenshots + official design system document

---

## Table of Contents
1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Shadow & Border System](#4-shadow--border-system)
5. [Card Components](#5-card-components)
6. [Buttons](#6-buttons)
7. [Bottom Navigation Bar](#7-bottom-navigation-bar)
8. [Screen-by-Screen Specs](#8-screen-by-screen-specs)
9. [Mascot & Mood System](#9-mascot--mood-system)
10. [Timer & Active Session](#10-timer--active-session)
11. [Progress Rings & Bars](#11-progress-rings--bars)
12. [Animations](#12-animations)
13. [Spacing & Layout](#13-spacing--layout)
14. [Quick-Copy CSS Snippets](#14-quick-copy-css-snippets)

---

## 1. Design Philosophy

Nudge uses a **retro-game aesthetic**: warm cream backgrounds, hard pixel-perfect shadows (zero blur), bold green borders, and playful cartoon mascots. Think Nintendo DS meets a productivity journal.

- **Hard shadows (0 blur)** cast in primary green — the signature visual trait
- Warm cream/off-white backgrounds — **never pure white**
- Bold 2px green borders on every interactive surface
- Each tab / feature area has its **own accent color**
- **Tanker-Regular** display font for all uppercase labels and titles
- **No gradients** — solid colors only throughout
- Cartoon mascot characters that react to the user's focus state
- Spacing follows a strict **4px base grid**

---

## 2. Color System

All values taken from the official design system document. `--primary-green` (`#03594D`) is the dominant color used for borders, shadows, text, and branding throughout.

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --background-primary:   #FCF8E3;  /* Warm cream — main screen bg */
  --background-secondary: #F5EDE0;  /* Light cream dark — recessed areas */
  --surface:              #FCF8F2;  /* Card & container backgrounds */

  /* Brand */
  --primary-green:        #03594D;  /* ALL borders, shadows, text, icons */
  --secondary-text:       rgba(3, 89, 77, 0.7);

  /* Accents */
  --accent-yellow:        #EAB308;  /* Break mode, paused state, active highlights */
  --accent-teal:          #2E8B57;  /* Home tab, focus state, play button */
  --accent-blue:          #0077BE;  /* Room tab */
  --accent-purple:        #9370DB;  /* Analytics tab */
  --accent-red:           #FF6363;  /* Screen time display, warnings */
  --accent-orange:        #FF6347;  /* Profile tab, coral accents */
  --accent-gold:          #DAA520;  /* Paused states, rank #1 */
  --mud-brown:            #70543E;  /* Stressed mood, specific accents */
  --destructive:          #CC331A;  /* Stop / delete actions */

  /* Tab-specific */
  --tab-home:             #2E8B57;
  --tab-room:             #0077BE;
  --tab-analytics:        #9370DB;
  --tab-profile:          #FF6347;

  /* Utility */
  --divider:              rgba(3, 89, 77, 0.2);
  --border:               #03594D;
  --shadow:               #03594D;
}
```

### Color Reference Table

| Token | Hex | Usage |
|---|---|---|
| `--background-primary` | `#FCF8E3` | Main screen background (Sentinel Female Yellow) |
| `--background-secondary` | `#F5EDE0` | Recessed areas, tab bar sections |
| `--surface` | `#FCF8F2` | Card & container backgrounds |
| `--primary-green` | `#03594D` | ALL borders, shadows, primary text, icons, branding |
| `--accent-teal` / `--tab-home` | `#2E8B57` | Home tab, focus state, play button border |
| `--accent-blue` / `--tab-room` | `#0077BE` | Room tab, room-related actions |
| `--accent-purple` / `--tab-analytics` | `#9370DB` | Analytics tab, analytics components |
| `--accent-orange` / `--tab-profile` | `#FF6347` | Profile tab, coral accents |
| `--accent-yellow` | `#EAB308` | Break mode, paused state, active highlights |
| `--accent-red` | `#FF6363` | Screen time display, warnings |
| `--accent-gold` | `#DAA520` | Goldenrod — paused states, rank #1 |
| `--mud-brown` | `#70543E` | Stressed mood state, specific button accents |
| `--destructive` | `#CC331A` | Stop / delete actions |

---

## 3. Typography

| Role | Spec |
|---|---|
| **Display Font** | `Tanker-Regular` — ALL uppercase section labels, mascot state labels, card titles, button text |
| **Body / UI Font** | `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui` |
| **Timer / Mono** | `'SF Mono', 'Monaco', monospace` — `font-variant-numeric: tabular-nums` |
| H1 — Main Titles | `32px`, Tanker-Regular, uppercase, `#03594D` |
| H2 — Section Headers | `28px`, bold, uppercase, `#03594D` |
| H3 — Card Titles | `20px`, bold, `#03594D` |
| H4 — Subsections | `18px`, bold, `#03594D` |
| Body Text | `14px`, regular, `#03594D` or 70% opacity |
| Small Labels | `12px`, regular or medium |
| Tiny / Badge | `10px`, bold, uppercase |
| Caption | `8px` — ultra-small (e.g. timer sub-label) |
| Timer Display | `26px`, Tanker-Regular or SF Mono, `#03594D` |
| Stat Numbers | `22px`, bold/heavy, `#03594D` |
| Button Labels | `11px`, weight `700`, uppercase, `letter-spacing: 1.2px` |

```css
/* Uppercase label pattern */
.label-uppercase {
  font-family: 'Tanker-Regular', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #03594D;
}

/* Timer / monospace */
.timer-text {
  font-family: 'SF Mono', 'Monaco', monospace;
  font-variant-numeric: tabular-nums;
}
```

---

## 4. Shadow & Border System

> **The defining visual signature:** ALL shadows have `0` blur radius. Hard, flat, retro-game look — shadow color matches the border color exactly.

### Shadow Variants

```css
--shadow-card:    0 4px 0 0 #03594D;   /* Standard card — most common */
--shadow-small:   0 3px 0 0 #03594D;   /* Small components */
--shadow-large:   0 6px 0 0 #03594D;   /* Large containers */
--shadow-tab-bar: 0 -4px 0 0 #03594D;  /* Tab bar — upward direction */
--shadow-yellow:  0 4px 0 0 #EAB308;   /* Break / continue buttons */
--shadow-red:     0 4px 0 0 #FF6363;   /* Stop button, screen-time */
--shadow-blue:    0 4px 0 0 #0077BE;   /* Room tab accent elements */
--shadow-purple:  0 4px 0 0 #9370DB;   /* Analytics accent elements */
```

> **Rule:** When a component uses an accent color border, its shadow matches that accent color exactly.

### Border Variants

```css
--border-standard: 2px solid #03594D;              /* Default — all cards */
--border-thin:     1.5px solid #03594D;            /* Smaller components */
--border-thick:    3px solid #03594D;              /* Play button circle */
--border-subtle:   1px solid rgba(3, 89, 77, 0.5); /* Tab selectors */
--border-dashed:   1.5px dashed rgba(3, 89, 77, 0.5); /* Decorative */
--border-divider:  rgba(3, 89, 77, 0.2);           /* Internal dividers */
```

### Border Radius Scale

```css
--radius-sm:   8px;    /* Small elements */
--radius-md:   12px;   /* Buttons */
--radius-lg:   16px;   /* Cards */
--radius-xl:   18px;   /* Large containers */
--radius-xxl:  20px;   /* Tab bar */
--radius-pill: 999px;  /* Pills, capsules */
--radius-full: 50%;    /* Circular elements */
```

---

## 5. Card Components

### 5.1 Standard Card

```css
.card {
  background: #FCF8F2;
  border: 2px solid #03594D;
  border-radius: 16px;
  box-shadow: 0 4px 0 0 #03594D;  /* ← HARD SHADOW, no blur */
  padding: 16px;
  margin-bottom: 16px;
}
```

| Property | Value |
|---|---|
| Background | `#FCF8F2` (--surface) |
| Border | `2px solid #03594D` |
| Border Radius | `16px` |
| Box Shadow | `0 4px 0 0 #03594D` |
| Padding | `16px` all sides |
| Margin Bottom | `16px` between stacked cards |

---

### 5.2 Analytics Tab Selector (inside card)

```css
.analytics-tab-selector {
  background: #FCF8F2;
  border: 1px solid rgba(3, 89, 77, 0.5);
  border-radius: 8px;
  padding: 4px;
}

.analytics-tab-button {
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.analytics-tab-button.active {
  background: #03594D;
  color: white;
}

.analytics-tab-button.inactive {
  background: transparent;
  color: #03594D;
}
```

---

### 5.3 Tug-of-War / Focus vs Screen Time Container

```css
.tug-of-war-container {
  background: #FCF8F2;
  border: 1.5px solid #03594D;
  border-radius: 18px;
  box-shadow: 0 3px 0 0 #03594D;
  padding: 12px 14px;
}

.tug-progress-bar {
  height: 12px;
  background: #F5EDE0;
  border: 1px solid rgba(3, 89, 77, 0.3);
  border-radius: 999px;
  overflow: hidden;
}

/* Stat cards inside */
.tug-stat-card {
  background: #FCF8F2;
  border: 2px solid currentColor;
  border-radius: 14px;
  box-shadow: 0 3px 0 0 currentColor;
  padding: 8px;
  text-align: center;
}

.tug-stat-screen { color: #FF6363; } /* red */
.tug-stat-focus  { color: #2E8B57; } /* teal */
```

---

### 5.4 Active Room Banner

```css
.room-banner {
  background: #FCF8F2;
  border: 1.5px solid rgba(255, 0, 0, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 0 0 rgba(255, 0, 0, 0.15);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Live red dot with pulsing ring */
.live-indicator {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  position: relative;
}

.live-indicator::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 0, 0, 0.4);
  border-radius: 50%;
  animation: pulse-ring 1.2s ease-out infinite;
}

@keyframes pulse-ring {
  0%   { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.6); opacity: 0; }
}
```

---

## 6. Buttons

### 6.1 Primary Play Button

```css
.button-play {
  width: 104px;
  height: 104px;
  background: #FCF8F2;
  border: 3px solid #2E8B57;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 #2E8B57;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.button-play:active {
  transform: scale(0.95);
}

.button-play-icon {
  font-size: 32px;
  color: #03594D;
}
```

---

### 6.2 Secondary Buttons (Block Apps, Timer)

```css
.button-secondary {
  min-width: 70px;
  max-width: 120px;
  height: 52px;
  background: #FCF8F2;
  border: 1.5px solid #03594D;
  border-radius: 16px;
  box-shadow: 0 4px 0 0 #03594D;
  font-family: 'Tanker-Regular', sans-serif;
  font-size: 16px;
  color: #03594D;
  transition: all 0.2s ease;
}

.button-secondary:hover {
  transform: translateY(2px);
  box-shadow: 0 2px 0 0 #03594D;
}
```

---

### 6.3 Action Buttons (Break / Stop / Continue)

```css
.button-action {
  width: 100px;
  height: 48px;
  background: #FCF8F2;
  border: 1.5px solid currentColor;
  border-radius: 12px;
  box-shadow: 0 4px 0 0 currentColor;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.button-break, .button-continue {
  color: #EAB308;
  border-color: #EAB308;
  box-shadow: 0 4px 0 0 #EAB308;
}

.button-stop {
  color: #CC331A;
  border-color: #CC331A;
  box-shadow: 0 4px 0 0 red;
}

.button-room {
  color: #03594D;
  border-color: #03594D;
  box-shadow: 0 4px 0 0 rgba(3, 89, 77, 0.3);
}
```

---

### 6.4 Pill / Segmented Toggle

```css
.pill-toggle {
  background: #FCF8F2;
  border: 1px solid rgba(3, 89, 77, 0.5);
  border-radius: 8px;
  padding: 4px;
  display: flex;
}

.pill-option {
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.2s ease;
  color: #03594D;
}

.pill-option.active {
  background: #03594D;
  color: white;
}
```

> Used for: `Both / Screen Time / Focus Time` and `Focus Points / Screen Time / Streak`

---

## 7. Bottom Navigation Bar

```css
.tab-bar {
  background: #FCF8F2;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -4px 0 0 #03594D;   /* Hard shadow upward */
  padding: 8px 8px 30px 8px;        /* Extra bottom = safe area */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tab-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
}

.tab-icon        { font-size: 24px; }
.tab-label       { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

.tab-button.active   .tab-icon,
.tab-button.active   .tab-label  { color: var(--tab-accent); }
.tab-button.inactive .tab-icon   { color: rgba(3, 89, 77, 0.4); }
.tab-button.inactive .tab-label  { color: rgba(3, 89, 77, 0.6); }

/* Center FAB placeholder */
.tab-center-space { width: 64px; }
```

### Tab Accent Colors

| Tab | Icon | Accent Color | Hex |
|---|---|---|---|
| NUDGE (Home) | House | `--tab-home` | `#2E8B57` |
| ROOM | Group/People | `--tab-room` | `#0077BE` |
| **FAB (Center)** | Context icon | Changes per tab | e.g. purple on Analytics |
| ANALYTICS | Line Chart | `--tab-analytics` | `#9370DB` |
| PROFILE | Person | `--tab-profile` | `#FF6347` |

### 7.1 Center FAB Button

```css
.fab {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid var(--tab-accent);
  box-shadow: 0 4px 0 0 var(--tab-accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -20px;               /* Floats above tab bar */
}
```

| Context | Background | Label |
|---|---|---|
| Home tab | `#9370DB` purple | SEE STATS |
| Room tab | `#0077BE` blue | CREATE |

---

## 8. Screen-by-Screen Specs

### 8.1 App Header / Top Bar

| Property | Value |
|---|---|
| Background | `#FCF8E3` — same as page, no separate bar |
| Logo | `NUDGE` — Tanker-Regular, uppercase, ~24–28px, `#03594D` |
| Level badge | `LVL 1` + thin green progress pill, right-aligned |
| Progress bar | 6px tall pill, `#2E8B57` fill on dark track |
| Border bottom | None — merges into page bg |

---

### 8.2 Weekly Overview / Analytics Card

| Property | Value |
|---|---|
| Card style | Standard card (§5.1) |
| Title | `WEEKLY OVERVIEW` — Tanker-Regular, uppercase, `#03594D` |
| Filter | Pill toggle: Both / Screen Time / Focus Time |
| Total stat | Extra bold 24–28px, `#03594D`. Format: `1H 34M` |
| Chart type | Area chart — filled line chart |
| Line color | `#03594D` |
| Area fill | `rgba(3, 89, 77, 0.15)` → transparent |
| Secondary line | Flat `#9370DB` purple at baseline = focus time |
| X-axis labels | Mon–Sun, bold; today = `#EAB308` yellow |
| Y-axis labels | `0h` right side, muted gray |
| Today marker | Yellow `●` dot + `Today` label |
| Stroke width | 2.5–3px |

---

### 8.3 Activity Levels Card

| Property | Value |
|---|---|
| Title | `ACTIVITY LEVELS` — Tanker-Regular, uppercase, `#03594D` |
| Activity row | Emoji mascot icon · Bold name · `LEVEL 1` right (muted) |
| Sub-label | `Focus Time: 0m` — 12px muted |
| Progress right label | `0/30 days` — `#FF6347` orange, bold |
| Progress bar height | `10px` |
| Progress fill color | `#FF6347` (orange) |
| Progress track | `#F5EDE0` cream |
| Progress radius | `999px` pill |

---

### 8.4 Nudge Focus Home Screen (Mascot Screen)

| Property | Value |
|---|---|
| Page bg | `#FCF8E3` |
| Mascot circle | 260px diameter, light gray ring border |
| Character label | `FOCUSED` — Tanker-Regular, 32px, letter-spacing 2px, `#03594D` |
| Chevron arrows | `<<` `>>` either side, 24px bold, `#03594D`, animated opacity |
| Focus ring SVG | bg stroke `rgba(3,89,77,0.1)`, progress `#2E8B57`, `stroke-width: 12px`, `stroke-linecap: round` |
| Screen time box | Red border+shadow `#FF6363`, red bold timer, phone icon |
| Focus hours box | Teal border+shadow `#2E8B57`, teal bold timer, brain icon |
| Timer font | SF Mono, 26–36px, weight 900, tabular-nums |
| Session scroll | Horizontal scroll row — Work Time, Class Time cards |
| Session toggle | Pill switch: ON = green, OFF = gray |
| Play button | 104px circle, `#2E8B57` border (§6.1) |
| Action buttons | Break `#EAB308` · Stop `#CC331A` · Continue `#EAB308` (§6.3) |

---

### 8.5 Room / Leaderboard Screen

| Property | Value |
|---|---|
| Title | `LEADERBOARD` — Tanker-Regular, uppercase, `#03594D` |
| Filter tabs | Focus Points / Screen Time / Streak — pill toggle |
| Rank badge #1 | `#DAA520` gold circle |
| Rank badge #2 | Light gray circle |
| Rank badge #3 | `#FF6347` orange circle |
| User row | Badge · Avatar (40px circle) · Name + meta · Points right |
| Meta row | Clock icon + hours, flame + streak — 12px muted |
| #1 row highlight | `#DAA520` border + golden glow shadow |
| Add Friends | Full-width outline btn, border `#03594D`, person+ icon |
| Active Room banner | See §5.4 |

---

## 9. Mascot & Mood System

The mascot expression and color changes based on screen time vs focus time ratio.

| Mood State | Color | Triggered When |
|---|---|---|
| HERO | `#03594D` Green | Excellent focus ratio |
| HAPPY | `#03594D` Green | Good focus, on track |
| FOCUSED | `#03594D` Green | Active focus session running |
| STRESSED | `#70543E` Mud Brown | Screen time rising |
| CRITICAL | `#CC331A` Destructive Red | Screen time far exceeds focus |

```css
.mood-critical { color: #CC331A; }
.mood-stressed { color: #70543E; }
.mood-focused  { color: #03594D; }
.mood-happy    { color: #03594D; }
.mood-hero     { color: #03594D; }

.character-label {
  font-family: 'Tanker-Regular', sans-serif;
  font-size: 32px;
  color: #03594D;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Chevron opacity animation */
.chevron-1 { opacity: 0.3; }
.chevron-2 { opacity: 0.3; }
.chevron-3 { opacity: 1.0; }

/* Idle mascot breathe */
@keyframes breathe {
  0%, 100% { transform: scale(0.98); }
  50%       { transform: scale(1.02); }
}
.mascot-idle { animation: breathe 3s ease-in-out infinite; }
```

---

## 10. Timer & Active Session

```css
.timer-active {
  width: 100px;
  height: 100px;
  background: #FCF8F2;
  border: 3px solid #03594D;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 #03594D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  animation: pulse 2s ease-in-out infinite;
}

.timer-value {
  font-family: 'SF Mono', monospace;
  font-size: 18px;
  font-weight: 900;
  color: #03594D;
  font-variant-numeric: tabular-nums;
}

.timer-label {
  font-size: 8px;
  font-weight: 500;
  color: rgba(3, 89, 77, 0.8);
}

@keyframes pulse {
  0%, 100% { transform: scale(1);    opacity: 1;   }
  50%       { transform: scale(1.05); opacity: 0.8; }
}
```

| Property | Value |
|---|---|
| Timer size | 100px × 100px |
| Border | `3px solid #03594D` |
| Shadow | `0 4px 0 0 #03594D` |
| Value font | SF Mono, 18px, weight 900, tabular-nums |
| Sub-label | 8px, `rgba(3,89,77,0.8)` |
| Screen time color | `#FF6363` |
| Focus time color | `#2E8B57` |

---

## 11. Progress Rings & Bars

### 11.1 SVG Focus Ring

```css
.focus-ring-background {
  stroke: rgba(3, 89, 77, 0.1);
  stroke-width: 12px;
  fill: none;
}

.focus-ring-progress {
  stroke: #2E8B57;
  stroke-width: 12px;
  fill: none;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
}
```

### 11.2 Linear Progress Bars

```css
/* Analytics / stats */
.progress-bar {
  height: 16px;
  background: rgba(46, 139, 87, 0.2);
  border: 1px solid rgba(46, 139, 87, 0.5);
  border-radius: 8px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #2E8B57;
  border-radius: 8px;
  transition: width 0.6s ease-out;  /* Animate on load */
}
```

| Context | Height | Fill Color | Track |
|---|---|---|---|
| Header level | `6px` | `#2E8B57` | Dark green track |
| Activity card | `10px` | `#FF6347` orange | `#F5EDE0` cream |
| Analytics bars | `16px` | `#2E8B57` | `rgba(46,139,87,0.2)` |
| Tug-of-war | `12px` | Red + Green segments | `#F5EDE0` |

---

## 12. Animations

### Keyframes

```css
/* Pulse — timers */
@keyframes pulse {
  0%, 100% { transform: scale(1);    opacity: 1;   }
  50%       { transform: scale(1.05); opacity: 0.8; }
}

/* Breathe — break mode / mascot idle */
@keyframes breathe {
  0%, 100% { transform: scale(0.98); }
  50%       { transform: scale(1.02); }
}

/* Shimmer — loading states */
@keyframes shimmer {
  0%, 100% { opacity: 0.08; }
  50%       { opacity: 0.15; }
}

/* Modal slide-up */
@keyframes slideUp {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

/* Live room pulse ring */
@keyframes pulse-ring {
  0%   { transform: scale(1);   opacity: 0.8; }
  100% { transform: scale(1.6); opacity: 0;   }
}
```

### Motion Reference

| Interaction | Spec |
|---|---|
| Button press | `transform: scale(0.95)`, `0.2s ease` on `:active` |
| Button hover (desktop) | `translateY(2px)`, shadow reduces by 2px |
| Card hover (desktop) | `translateY(-2px)`, shadow increases 2px |
| Timer | `pulse` — 2s ease-in-out infinite |
| Mascot idle | `breathe` — 3s ease-in-out infinite |
| Break mode | `breathe` — 3s ease-in-out infinite |
| Loading | `shimmer` — 0.8s ease-in-out infinite |
| Modal open | `slideUp` — 0.4s ease-out |
| Live room dot | `pulse-ring` — 1.2s ease-out infinite |
| Progress bar | Animate 0% → value on load, 600ms ease-out |
| Chart line | Left-to-right reveal, 800ms ease |
| Leaderboard rows | Stagger fade-in, 80ms delay between rows |
| Pill toggle | Active state slide, 200ms ease |

### Easing Tokens

```css
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-out:      cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-in-out:   cubic-bezier(0.4, 0.0, 0.6, 1);
--duration-fast:   0.2s;
--duration-normal: 0.3s;
--duration-slow:   0.5s;
--duration-slower: 0.8s;
```

---

## 13. Spacing & Layout

```css
/* 4px base grid */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
```

| Property | Value |
|---|---|
| Page background | `#FCF8E3` — NEVER pure white |
| Page horizontal padding | `16px` mobile; `24–40px` desktop |
| Card margin-bottom | `16px` |
| Card padding | `16px` (standard); `12px` (small) |
| Max content width (mobile) | `440px` |
| Max content width (desktop) | `900–1100px`, centered |
| Tab bar height | `62px` + `30px` bottom safe area |
| FAB offset above bar | `margin-top: -20px` to `-30px` |

---

## 14. Quick-Copy CSS Snippets

### Standard Card
```css
.card {
  background: #FCF8F2;
  border: 2px solid #03594D;
  border-radius: 16px;
  box-shadow: 0 4px 0 0 #03594D;
  padding: 16px;
  margin-bottom: 16px;
}
```

### Page Background
```css
body, .page {
  background: #FCF8E3;
  /* NEVER pure white — always warm cream */
}
```

### Uppercase Label
```css
.label {
  font-family: 'Tanker-Regular', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #03594D;
}
```

### Tab Bar
```css
.tab-bar {
  background: #FCF8F2;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -4px 0 0 #03594D;
  padding: 8px 8px 30px 8px;
}
```

### Play Button
```css
.button-play {
  width: 104px;
  height: 104px;
  background: #FCF8F2;
  border: 3px solid #2E8B57;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 #2E8B57;
}
```

### Accent Button (Break)
```css
.button-break {
  width: 100px;
  height: 48px;
  background: #FCF8F2;
  color: #EAB308;
  border: 1.5px solid #EAB308;
  border-radius: 12px;
  box-shadow: 0 4px 0 0 #EAB308;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}
```

### Pill Toggle
```css
.pill-toggle { background: #FCF8F2; border: 1px solid rgba(3,89,77,0.5); border-radius: 8px; padding: 4px; }
.pill-option { padding: 4px 8px; font-size: 11px; font-weight: 600; border-radius: 6px; color: #03594D; }
.pill-option.active { background: #03594D; color: white; }
```

### SVG Focus Ring
```css
.ring-bg       { stroke: rgba(3,89,77,0.1); stroke-width: 12px; fill: none; }
.ring-progress { stroke: #2E8B57; stroke-width: 12px; fill: none; stroke-linecap: round; transition: stroke-dashoffset 0.5s ease; }
```

---

*Last Updated: March 8, 2026 · Version 2.0 · Nudge Design Team*
