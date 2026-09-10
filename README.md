# Shivakumar C — Developer Portfolio

A sleek, high-contrast, responsive developer portfolio built with React 18, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo & Projects
- **Airbnb Clone Full-Stack Web Application**
- **Risk Assessment Engine**
- **Weather Application**

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Customize

- **Your info**: edit the name, tagline, and copy in `src/components/Hero.jsx` and `src/components/About.jsx`.
- **Skills**: edit the `SKILLS` array in `src/components/Skills.jsx`.
- **Projects**: edit the `PROJECTS` array in `src/components/Projects.jsx` and drop matching images into `public/`.
- **Photo & resume**: replace `public/profile.png` and `public/resume.pdf` (currently placeholders).
- **Contact form**: create a free account at [emailjs.com](https://www.emailjs.com/), then set `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` at the top of `src/components/Contact.jsx`.
- **Colors**: the palette lives as CSS variables at the top of `src/index.css` (`--bg`, `--cyan`, `--violet`, etc.).

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

## Deploy (Vercel)

```bash
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/yourname/portfolio.git
git push -u origin main
```

Then import the repo at [vercel.com](https://vercel.com) and click Deploy.
