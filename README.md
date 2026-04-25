# Portfolio — Next.js + Tailwind CSS

A modern, minimal portfolio website with dark mode, scroll animations, and all the sections you need.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization Checklist

### Personal info
- [ ] `app/layout.tsx` — Update `<title>` and `<description>`
- [ ] `components/Hero.tsx` — Your tagline and intro
- [ ] `components/About.tsx` — Your name, bio, and quick facts
- [ ] `components/Skills.tsx` — Your actual tech stack
- [ ] `components/Projects.tsx` — Replace placeholder projects with your real work
- [ ] `components/Contact.tsx` — Your email, GitHub, LinkedIn, Twitter

### Resume
- Drop your `resume.pdf` into the `/public` folder. The download button in the Contact section links to `/resume.pdf` automatically.

### Fonts
Currently using **Instrument Serif** (display) + **Geist Mono** (body). To change:
1. Update the import in `app/globals.css`
2. Update `--font-display` / `--font-mono` CSS variables

### Colors
Edit the accent palette in `tailwind.config.ts` and the base surface colors in `app/globals.css`.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Base styles + font imports
│   ├── layout.tsx        # Root layout + ThemeProvider
│   └── page.tsx          # Main page
├── components/
│   ├── ThemeProvider.tsx  # Dark mode context
│   ├── Navbar.tsx         # Sticky nav + mobile menu + theme toggle
│   ├── Hero.tsx           # Landing hero section
│   ├── About.tsx          # About + quick facts table
│   ├── Skills.tsx         # Skills grouped by category
│   ├── Projects.tsx       # Project list with hover effects
│   ├── Contact.tsx        # Contact CTA + social links + resume download
│   └── useScrollReveal.ts # IntersectionObserver hook for scroll animations
└── public/
    └── resume.pdf         # ← Drop your resume here
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Done in ~30 seconds.
```
