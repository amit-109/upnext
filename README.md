# UpNext.AI — Company Site (React + Vite)

A polished, single‑page company site for a services company offering web development, mobile apps, automation, AI/ML, cloud/devops, and data engineering.

## ✨ Features
- Modern aesthetic with gradient accents (no CSS frameworks required)
- Sections: Hero, Services, Tech Stack, Projects, Contact
- Contact form wired for Formspree (replace `yourFormId`)
- Smooth scrolling navigation
- Responsive layout

## 🔧 Quick Start
```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

## 🔁 Branding
Search & replace **UpNext.AI** with your company name (e.g., `UPNOVA`, `RaiTech.AI`, etc.).
Update favicon at `src/assets/logo.svg` and the email in `App.jsx`.

## ✉️ Contact Form (Formspree)
1. Create a Formspree project: https://formspree.io
2. Replace `yourFormId` in `App.jsx` with your actual Form ID (e.g., `xayzbqjd`).
3. Optionally configure reCAPTCHA or spam filters in Formspree.

## 📦 Stack
- React 18 + Vite 5
- Plain CSS (no Tailwind required)

## 🧩 Notes
- This is front‑end only. If you want a Node/FastAPI backend for the contact form or a blog/CMS, tell me and I’ll add a server template.
- Tested on Node 18+.
