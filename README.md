# 🌌 Infinity Open — Event Landing Page

> Immersive multi-city tech & culture event landing page with cyberpunk aesthetics, countdown timer, schedule viewer, and speaker showcase.

![Preview](https://img.shields.io/badge/status-completed-brightgreen?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

---

## 🖥️ Live Preview

> Sections: Hero · Special Guest · Atrações · Event Schedule

| Hero | Guest | Schedule |
|------|-------|----------|
| Countdown + CTA | DJ showcase section | Timetable with categories |

---

## ✨ Features

- **Countdown Timer** — Real-time JS countdown to event date (Jan 31, 2026), with DIAS / HORAS / MIN / SEG display
- **Hero Section** — Full-viewport cinematic background with glassmorphism date badge and animated CTA button
- **Special Guest Showcase** — Split-layout section with dynamic speaker bio and social links
- **Atrações Grid** — 2×2 feature cards (Palestras Temáticas, Tattoo Station, Networking Zone, Cenários Replicados) with icon and description
- **Event Schedule** — Structured timetable with time ranges, speaker names, rooms, and category tags
- **RPG Table Section** — Bespoke immersive experience highlight with image + feature bullets + CTA
- **Multi-city Support** — BH · SP · Salvador · Fortaleza
- **Responsive Layout** — Mobile-first via Bootstrap 5 grid

---

## 🗂️ Project Structure

```
infinity-open/
├── index.html          # Main entry point
├── css/
│   └── style.css       # Custom styles, animations, neon effects
├── js/
│   └── main.js         # Countdown logic, interactivity
└── assets/
    └── images/         # Hero backgrounds, guest photos, section art
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup, section structure |
| **CSS3** | Custom neon glow effects, glassmorphism, keyframe animations |
| **JavaScript (ES6)** | Live countdown timer, DOM manipulation |
| **Bootstrap 5** | Responsive grid, utility classes, navbar |

No frameworks, no build tools — pure vanilla front-end with zero dependencies beyond Bootstrap CDN.

---

## 🎨 Design System

The UI follows a **dark cyberpunk / Stranger Things** aesthetic:

| Token | Value |
|---|---|
| Primary Accent | `#00E5FF` (cyan neon) |
| Secondary Accent | `#C850C0` (magenta/purple) |
| CTA Color | `#FF4B4B` (coral red) |
| Background | `#0A0A0A` (near black) |
| Typography | Uppercase geometric sans-serif |

Effects used: glow `text-shadow`, `backdrop-filter: blur()` glassmorphism panels, lightning particle overlays via CSS + AI-generated imagery.

---

## ⚙️ How to Run

No build step required.

```bash
# Clone the repo
git clone https://github.com/your-username/infinity-open.git

# Open directly in browser
open index.html
# or serve locally
npx serve .
```

---

## 📅 Event Info

| Detail | Info |
|---|---|
| Date | January 31, 2026 |
| Cities | Belo Horizonte · São Paulo · Salvador · Fortaleza |
| Entry | 100% Free — Open Bar included |
| Theme | Stranger Things × Tech × Culture |

---

## 📋 Sections Overview

### Hero
Full-screen cinematic landing with split AI-art background, event title, live countdown, and "Inscreva-se Grátis" CTA.

### Special Guest — Felipe Maskatti
Showcase section for the headlining DJ (`@omaskatti`), featuring bio, Instagram link, and schedule anchor.

### Principais Atrações
Four-card grid highlighting the event's main experiences: thematic talks on AI & innovation, a tattoo station, networking zone, and immersive Stranger Things-inspired replicated sets.

### Mesa de RPG
D&D session led by professor Vander — limited slots, immersive live theming, guided from start to finish.

### Event Schedule
Structured timetable:
- `13:30–15:00` Marketing Andromeda — Prof. Anderson Luis · Sala Paris · `MARKETING`
- `15:00–17:00` Stranger Things: Do roteiro à cena — Samuel Moura · Estúdio · `EXPERIÊNCIA`
- `17:00–18:30` Vibe Code 2026 — Marcos Paulo Simões · Sala Zion · `TECH`

---

## 🧠 Key Technical Decisions

**Why vanilla JS for the countdown?**
Keeps the bundle zero-dependency. A simple `setInterval` with `Date` math covers all requirements without pulling in a library.

**Why Bootstrap 5 instead of Tailwind?**
Faster prototyping for event pages with a fixed design life. Bootstrap's grid and utility classes handle responsive layout with minimal custom CSS overhead.

**Why no JS framework?**
The page is content-static — no state management needed. Pure HTML/CSS/JS delivers maximum performance and simplest deployment (just open `index.html`).

---

## 🚀 Possible Improvements

- [ ] Add form submission with backend or Formspree for registration
- [ ] Animate countdown digits with CSS flip transitions
- [ ] Add scroll-triggered reveal animations (Intersection Observer)
- [ ] Implement i18n (PT-BR / EN) toggle
- [ ] Convert to Next.js for multi-city dynamic routing

---

## 👨‍💻 Author

Built by **DevWizardMarcos** — all rights reserved.

> *"Todos os direitos reservados a DevWizardMarcos"*
