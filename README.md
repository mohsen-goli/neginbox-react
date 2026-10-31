# NeginBox — نگین‌باکس

A responsive, RTL Persian website for **NeginBox**, a local under-bed storage (تخت‌باکس) business. Rebuilt with React and TypeScript from an earlier vanilla JS version.

🔗 **Live Demo:** <LIVE_URL>

## Features

- Persian RTL interface with the Estedad font
- Hero section with an image carousel
- Product showcase driven by a typed data file
- "Why us" and customer testimonials sections
- Floating contact buttons and social links in the header
- Contact section for reaching the business directly
- Responsive layout for mobile, tablet and desktop
- Smooth animations with Framer Motion

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Linting | Oxlint |

## Project Structure

```
src/
├── components/   # Header, Hero, HeroCarousel, About, Products,
│                 # WhyUs, Testimonials, Contact, FloatingContacts, Footer
├── data/         # products.ts
├── assets/
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
git clone https://github.com/mohsen-goli/neginbox-react.git
cd neginbox-react
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm run preview`.

## Project Purpose

A real-world website for a local business. This version replaces the original HTML/CSS/JS site with a component-based React architecture.

## Author

**Mohsen Golzad** — Frontend Developer
[GitHub](https://github.com/mohsen-goli) · [LinkedIn](<LINKEDIN_URL>)
