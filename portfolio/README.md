# AI/ML Student Portfolio

A professional portfolio website for a B.Tech CSE (AI & ML) student.

**Design system:** Glacial Intelligence — light frosted glass, Space Grotesk + Geist + JetBrains Mono typography, ice-cyan/blue palette.

## Quick Start

### Frontend

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Backend (Contact Form)

```bash
cd portfolio/backend
npm install
cp .env.example .env
# Edit .env with your email credentials
npm run dev
```

## Personalizing

All personal data lives in `src/data/`:

| File | What to edit |
|------|-------------|
| [`src/data/profile.js`](src/data/profile.js) | Name, email, GitHub, LinkedIn, bio, stats |
| [`src/data/projects.js`](src/data/projects.js) | Projects, descriptions, GitHub links, demos |
| [`src/data/skills.js`](src/data/skills.js) | Skill categories and items |
| [`src/data/experience.js`](src/data/experience.js) | Work experience, education, achievements |

### Profile Photo

Add your photo at `public/profile.jpg`. The site shows a styled placeholder if no image is found.

### Resume

Add your resume PDF at `public/resume.pdf`.

## Tech Stack

**Frontend:**
- React 19 + Vite 8
- Motion (`motion/react`) — animations
- Tailwind CSS v4 — styling
- Material Symbols Outlined — icons
- Google Fonts: Space Grotesk, Geist, JetBrains Mono

**Backend:**
- Node.js + Express
- Nodemailer — email delivery
- express-rate-limit — rate limiting
- CORS configured for local + production

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar/        # Floating glass nav
│   │   ├── Hero/          # Profile + CTAs
│   │   ├── About/         # Bio + stats
│   │   ├── Skills/        # Tech stack grid
│   │   ├── Projects/      # Project cards
│   │   ├── Experience/    # Timeline + education + achievements
│   │   ├── Contact/       # Glass contact form
│   │   ├── Footer/        # Minimal footer
│   │   └── ui/            # GlassCard, SectionHeading
│   ├── data/              # All personal data (edit here)
│   └── index.css          # Global styles + design tokens
├── backend/
│   ├── server.js          # Express app
│   ├── routes/contact.js  # POST /api/contact
│   ├── controllers/contact.js
│   └── .env.example       # Copy to .env
└── public/
    ├── profile.jpg        # Add your photo
    ├── resume.pdf         # Add your resume
    └── favicon.svg
```

## Email Setup (Contact Form)

1. Copy `backend/.env.example` to `backend/.env`
2. For Gmail: enable 2FA → [create an App Password](https://myaccount.google.com/apppasswords)
3. Set `EMAIL_USER`, `EMAIL_PASSWORD`, `EMAIL_RECIPIENT` in `.env`

Without email config, form submissions are logged to the console (development fallback).

## Build for Production

```bash
cd portfolio
npm run build   # outputs to dist/
```

Serve `dist/` with any static host (Vercel, Netlify, Firebase Hosting, etc.).

Deploy backend to Railway, Render, or any Node.js host.

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels on all interactive elements
- Keyboard navigable
- Visible focus states
- Reduced-motion support (`prefers-reduced-motion`)
- Skip-to-content link
