
# Itzfizz | Scroll-Driven Hero Section Animation

A scroll-driven hero section built as part of the Itzfizz Web Development Internship assignment. The headline reveals letter by letter on load, stats count up one by one, and the main visual (a neon sports car) zooms and moves smoothly as the user scrolls.

## Features

- Hero section that fills the first screen (above the fold)
- Letter-spaced headline "WELCOMEITZFIZZ" with a staggered reveal on page load (fade + slight movement)
- Impact stats below the headline that animate in one by one with a subtle delay and count up from 0
- Scroll-based animation tied to scroll progress (not time-based autoplay) using GSAP ScrollTrigger `scrub`
- Main visual zooms and moves on scroll, headline scales down and fades, and a neon light streak sweeps across
- Easing and interpolation for smooth, premium motion
- Responsive layout for mobile and desktop

## Tech Stack

- HTML, CSS, JavaScript (JSX)
- React (Vite)
- Tailwind CSS
- GSAP + ScrollTrigger

## Project Structure

```
itzfizz-assignment/
├── public/
│   └── car.png
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Load + scroll animations
│   │   ├── ScrollObject.jsx  # Car image and neon streak
│   │   ├── Stats.jsx         # Stats cards
│   │   └── Showcase.jsx      # Section after the hero
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Run Locally

```bash
cd itzfizz-assignment
npm install
npm run dev
```
## Author

**Ayush Kumar Yadav**
Frontend Developer | React,