# PRD: Hephzibah's Personal Portfolio Website

**Version:** 1.0
**Owner:** Hephzibah [SURNAME]
**Status:** Ready to build
**Companion document:** `Guide.md` (setup, editing, and deployment)

---

## 1. Overview

A single-page personal portfolio website that presents Hephzibah, a Full-Stack Developer based in Nigeria and a Computer Science student at the Federal University of Technology, Owerri (FUTO). The site showcases skills and projects in a calm, modern **"soft tech"** style and makes it easy for recruiters, clients, and collaborators to get in touch.

## 2. Goals

| # | Goal | How we know it worked |
|---|---|---|
| G1 | Present a credible professional identity | A visitor understands who I am and what I do within 10 seconds of landing |
| G2 | Showcase real projects | Three projects shown with descriptions, tech tags, and links |
| G3 | Make contact easy | Contact form and direct links reachable within one click from every section |
| G4 | Look polished on any device | Works cleanly from 360px phones to 1440px+ desktops |
| G5 | Be fast and accessible | Lighthouse 90+ in Performance, Accessibility, Best Practices, and SEO |

**Non-goals (version 1):** blog, CMS, user accounts, e-commerce, multi-language support, analytics dashboard.

## 3. Target Audience

- **Recruiters and hiring managers** looking for junior or intern full-stack developers.
- **Freelance clients** who need a website or web application built.
- **Collaborators and peers** in the developer community.

What they want: quick proof of skill, clear project outcomes, an easy way to reach me.

## 4. Design Direction ("Soft Tech")

Calm, premium, and approachable: glass-style cards, rounded corners, soft glows, gentle motion. Cinematic mood without harsh neon.

**Colour tokens**

| Token | Dark (default) | Light |
|---|---|---|
| Background | `#0B1220` | `#F7F8FC` |
| Surface | `#121A2B` | `#FFFFFF` |
| Glass surface | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.7)` |
| Border | `rgba(255,255,255,0.09)` | `rgba(15,23,42,0.08)` |
| Text | `#F1F5F9` | `#0F172A` |
| Muted text | `#94A3B8` | `#64748B` |
| Accent (soft gold) | `#F5C542` | `#D9A400` |
| Accent 2 (soft blue) | `#7AA2FF` | `#3B6BE0` |

**Rationale:** the profile photo shows a yellow sweatshirt. The gold accent echoes it and the deep blue background makes it stand out. Use gold sparingly (primary buttons, highlights, portrait ring).

**Style rules**

- Corner radius: 20px for cards, fully rounded for buttons and tags.
- Typography: Plus Jakarta Sans, Sora, or Outfit for headings; Inter for body.
- Spacing on an 8px grid; generous whitespace.
- Motion: fade-and-rise on scroll, soft hover lifts, 200 to 400 ms transitions; honour `prefers-reduced-motion`.
- Dark and light modes with a toggle; default to the visitor's system setting and remember their choice.

## 5. Scope and Features

### 5.1 Must have (MVP)

| ID | Feature | Requirements |
|---|---|---|
| F1 | **Navbar** | Sticky, translucent with blur; links to About, Skills, Projects, Education, Contact; theme toggle; "Hire me" button; mobile hamburger menu |
| F2 | **Hero** | Name, title, headline, short summary, two CTAs ("View my work", "Contact me"), portrait with soft blue glow and gold ring, floating tech chips |
| F3 | **About** | Two-paragraph professional summary; small stats row using only facts from the CV |
| F4 | **Skills** | Grouped cards: Frontend, Backend, Database and Authentication, Payments and Deployment, Tools |
| F5 | **Projects** | Responsive card grid with image, title, description, highlights, tech tags, and "Live demo" and "GitHub" buttons (hidden if the link is empty) |
| F6 | **Education** | FUTO card with degree, status, and relevant academic areas |
| F7 | **Competencies and interests** | Compact, tasteful lists |
| F8 | **Contact** | Form (name, email, message) with validation and clear success and error states, plus email, GitHub, and LinkedIn links |
| F9 | **Footer** | Name, quick links, social icons, copyright |
| F10 | **Theme toggle** | Dark and light, persisted in `localStorage` |
| F11 | **Single content file** | All text, links, and project data editable in `src/data/content.js` |

### 5.2 Should have

- Smooth-scroll navigation with active-section highlighting.
- Scroll-reveal animations.
- Downloadable CV button (PDF placed in `public/`).
- Open Graph image for link previews.

### 5.3 Could have (later)

- Project case-study pages.
- Blog or notes section.
- Visitor analytics (privacy-friendly).
- Live 3D preview or short video of the city simulation project.

## 6. Content

Source: the owner's CV. **Only facts from the CV may be used.** No invented employers, awards, statistics, testimonials, or client names. Any section that would need invented content is left out.

**Projects**

1. **SavorBite: Food Ordering and Marketing Platform.** Full-stack food commerce app. Tech: JavaScript, React.js, Tailwind CSS, Node.js, Express.js, Supabase, PostgreSQL, Git.
2. **NOVA City Life 3D: Interactive Browser-Based City Simulation.** Three.js city simulation with character movement, minimap, in-game clock, and autosave. Tech: JavaScript, HTML5, CSS3, Three.js, FBX models. *(Project name to be confirmed by the owner; keep it in one variable.)*
3. **Personal Developer Portfolio.** This site. Tech: JavaScript, React.js, Tailwind CSS, Vite, Git.

**Placeholders the owner must fill:** surname, phone, professional email, GitHub URL, LinkedIn URL, portfolio URL, live-demo links, profile photo, project screenshots.

## 7. Technical Requirements

| Area | Requirement |
|---|---|
| Framework | React + Vite (JavaScript) |
| Styling | Tailwind CSS with theme tokens as CSS variables |
| Animation | CSS transitions; Framer Motion only if clearly worthwhile |
| Icons | lucide-react or similar |
| Hosting | Vercel, with no special configuration |
| Contact form | Client-side validation; `mailto:` fallback by default; documented upgrade to Formspree, EmailJS, or a Supabase edge function |
| Secrets | Environment variables only; provide `.env.example`; never commit keys |
| Images | Local files in `public/images/`; lazy-load below the fold; no hot-linking |
| Browser support | Latest two versions of Chrome, Edge, Firefox, Safari; iOS Safari and Android Chrome |

**Suggested structure**

```
src/
  components/   Navbar, Hero, SectionHeading, GlassCard, ProjectCard,
                SkillGroup, ContactForm, Footer
  data/         content.js
  styles/       tokens + global styles
  App.jsx
  main.jsx
public/
  images/       profile.jpg, projects/
  cv.pdf
```

## 8. Non-Functional Requirements

- **Performance:** Lighthouse 90+ in every category; Largest Contentful Paint under 2.5 s on a mid-range phone; no large unused dependencies.
- **Accessibility:** WCAG 2.1 AA contrast in both themes; semantic HTML and correct heading order; visible focus states; full keyboard navigation; labels on every form field; meaningful `alt` text.
- **Responsiveness:** no horizontal scroll at 360, 768, 1024, and 1440px.
- **SEO:** page title, meta description, Open Graph tags, favicon, `lang` attribute.
- **Privacy and security:** no secrets in the repo; the contact form does not expose personal data beyond what the visitor enters.
- **Maintainability:** reusable components, clean structure, no dead code.

## 9. Acceptance Criteria

The site is done when all of these are true:

- [ ] All sections F1 to F9 render with real CV content.
- [ ] Dark and light themes both work and the choice persists after refresh.
- [ ] The layout has no breakage or horizontal scroll at 360, 768, 1024, and 1440px.
- [ ] The mobile menu opens, closes, and navigates correctly.
- [ ] The contact form shows validation errors and a success state, and the mailto fallback opens correctly.
- [ ] Every link works (empty links are hidden, not broken).
- [ ] The whole site can be used with a keyboard alone.
- [ ] Lighthouse scores are 90+ in all four categories.
- [ ] The build passes with no errors and no console errors.
- [ ] The live site is deployed on Vercel and the URL is added to the CV.

## 10. Milestones

| Milestone | Deliverable |
|---|---|
| M1: Design | Stitch design or sketch approved; colour and type tokens set |
| M2: Foundation | Project scaffold, theme tokens, content file, navbar, footer |
| M3: Core sections | Hero, About, Skills, Projects, Education |
| M4: Contact and polish | Contact form, animations, theme toggle, responsive fixes |
| M5: Quality | Accessibility, performance, and SEO pass; testing |
| M6: Launch | Deploy to Vercel; add real photo, screenshots, and links |

## 11. Risks and Open Questions

| Risk or question | Mitigation or decision needed |
|---|---|
| Project name: CV says "NOVA City Life 3D"; the owner also uses "EMPIRE CITY" | Owner to confirm the public name; kept in one variable |
| Photo with a yellow sweatshirt may clash with a busy background | Use a clean cutout or dark gradient background, vignette, and gold ring |
| Contact form needs a backend to deliver messages | Start with mailto; upgrade to Formspree or EmailJS |
| Missing screenshots or live links | Use gradient placeholders; hide empty link buttons |
| Over-claiming skills in copy | Use CV wording only |

## 12. Out of Scope for Version 1

Blog or CMS, user login, payments, multi-language support, and backend APIs.
