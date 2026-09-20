# 🌿 Grow My Therapy

> A modern, responsive marketing website for a therapy practice — built as a frontend assignment project.

---

## ✨ Overview

**Grow My Therapy** is a fully responsive, single-page landing website for a mental health therapy practice. It showcases the practice's mission, specialties, therapist profile, and provides an easy path for potential clients to get in touch or book a session.

The project focuses on clean UI design, smooth animations, and a premium user experience — all without any external UI libraries.

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| [Next.js](https://nextjs.org/) (App Router) | 16.x |
| [React](https://react.dev/) | 19.x |
| [TypeScript](https://www.typescriptlang.org/) | 5.x |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| [ESLint](https://eslint.org/) | 9.x |

---

## 📄 Pages & Sections

### `/` — Home
The main landing page is composed of the following sections, in order:

| # | Section | Description |
|---|---|---|
| 1 | **Navbar** | Responsive navbar with animated mobile drawer and smooth-scroll links |
| 2 | **Hero** | Full-width hero image with headline and CTA |
| 3 | **Mission** | Practice philosophy and intro copy with supporting image |
| 4 | **Who We Help** | Three audience cards describing who the practice serves |
| 5 | **Quote Banner** | Full-width inspirational quote with background image |
| 6 | **Areas of Expertise** | Numbered list of therapeutic specialties |
| 7 | **How We Work** | Overview of therapy modalities and approach |
| 8 | **About** | Therapist bio, portrait, credentials, and background |
| 9 | **Specialties Detail** | In-depth service breakdown with imagery |
| 10 | **Our Office** | Office environment showcase |
| 11 | **FAQ** | Accordion-style frequently asked questions |
| 12 | **CTA** | Dual-image call-to-action with booking buttons |
| 13 | **Footer** | Navigation links, contact info, and social links |

### `/contact` — Contact Page
A dedicated contact page for prospective clients to reach out or book a session.

---

## 📁 Project Structure

```
grow-my-therapy/
├── app/
│   ├── components/         # All reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Mission.tsx
│   │   ├── WhoWeHelp.tsx
│   │   ├── QuoteBanner.tsx
│   │   ├── Expertise.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SpecialtiesDetail.tsx
│   │   ├── Office.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── contact/            # Contact page route
│   ├── globals.css         # Global styles & CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page
├── public/                 # Static assets (images, icons)
├── data/                   # Static data / content files
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or later
- **npm** (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/grow-my-therapy.git

# 2. Navigate into the project
cd grow-my-therapy

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Design Highlights

- **Dark-themed** premium aesthetic with a muted green/earth palette
- **Glassmorphism** effects on overlay elements
- **Micro-animations** — staggered entry transitions, hover effects, and mobile drawer animations
- **Fully responsive** — mobile-first layout that works across all screen sizes
- **No external UI library** — all components are hand-crafted with Tailwind CSS and vanilla CSS

---

## 📝 License

This project was created as a frontend assignment. All design and content is for demonstration purposes only.
