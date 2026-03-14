# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SkyEvent — a French-language event catering business website built as a React SPA. All UI text is in French.

## Commands

- `npm start` — Dev server on port 3000 (HOST=0.0.0.0)
- `npm run build` — Production build to `/build`
- `npm test` — Jest test runner (watch mode)

## Tech Stack

- **React 19** with React Router DOM 7 (client-side routing)
- **Styled-components** for all component styling (CSS-in-JS, no CSS modules)
- **Framer Motion** for animations (scroll-triggered, stagger, hover effects)
- **React Helmet Async** for SEO meta tags and JSON-LD structured data
- **FontAwesome** for icons
- **Create React App** (not ejected)

## Architecture

**Routing:** `App.js` defines 11 routes via BrowserRouter. Occasion-specific pages (`/realisations/{occasion}`) each use `OccasionTemplate.js` as a base template with per-page data.

**Layout pattern:** All pages wrap in `Layout.js` which provides Header (sticky, hides on scroll on desktop), MainContent (120px top padding desktop / 60px mobile), EventBanner (CTA), and Footer.

**Styling conventions:**
- Fonts: Playfair Display (headings), Poppins (body)
- Colors: white backgrounds, dark text, gold accents (`#d4af37`)
- Breakpoints: 768px (desktop/mobile), 480px (small mobile)
- Mobile detection: `window.innerWidth <= 768`

**SEO:** `SEO.js` component sets meta tags per page. `SEOSchema.js` provides JSON-LD. Both are used in page components.

**Contact:** Separate `ContactSection.js` (desktop) and `MobileContactSection.js` (mobile) components.

## iOS Scroll Fixes

Extensive iOS-specific horizontal scroll prevention is spread across multiple files: `index.html` (inline script), `App.js` (useEffect), `Layout.js`, and `styles/iosfix.css`. These work together with a CSS variable `--vw` to handle viewport width without breaking sticky positioning. Be cautious when modifying scroll or overflow behavior.

## setupProxy.js

Dev middleware that sets `Content-Language: fr`, security headers (X-Frame-Options, X-Content-Type-Options), and browser translation prevention headers.

## Static Assets

- `public/images/` — ~69 event photos
- `public/videos/` — ~34 MP4 branded videos used in hero sections
