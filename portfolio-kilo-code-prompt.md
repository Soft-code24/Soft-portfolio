# Portfolio Website: Build Prompt for Kilo Code

> Copy everything below the line into Kilo Code in VS Code. If you have a Stitch export (HTML/CSS or screenshots), put it in a `/design` folder first so Kilo Code can follow it.

---

## ROLE

Act as a senior front-end engineer and UI designer. Build a polished, production-ready **personal portfolio website** for **Hephzibah [SURNAME]**, a Full-Stack Developer based in Nigeria and a Computer Science student at the Federal University of Technology, Owerri (FUTO).

Build it in the current workspace. If the workspace already contains project files, inspect them first and work with what exists. Do not delete working code without a reason.

## DESIGN DIRECTION: "SOFT TECH"

A calm, modern, approachable tech look: soft glows, glass-like surfaces, rounded shapes, and gentle motion. It should feel premium and cinematic without being harsh or cluttered. Think a quiet night sky with warm golden light, not a loud neon cyberpunk scene.

**Colour system (define as CSS variables or Tailwind theme tokens)**

| Token | Dark mode (default) | Light mode |
|---|---|---|
| `--bg` | `#0B1220` | `#F7F8FC` |
| `--surface` | `#121A2B` | `#FFFFFF` |
| `--surface-glass` | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.7)` |
| `--border` | `rgba(255,255,255,0.09)` | `rgba(15,23,42,0.08)` |
| `--text` | `#F1F5F9` | `#0F172A` |
| `--text-muted` | `#94A3B8` | `#64748B` |
| `--accent` (soft gold) | `#F5C542` | `#D9A400` |
| `--accent-2` (soft blue) | `#7AA2FF` | `#3B6BE0` |

**Why these colours:** the owner's profile photo shows a **yellow sweatshirt**. The soft gold accent should echo the sweatshirt, and the deep blue background should make it stand out. Keep gold use restrained (buttons, key highlights, small details).

**Style rules**

- Rounded corners: 20px on cards, 999px on buttons and tags.
- Glass cards: translucent surface, 1px soft border, `backdrop-filter: blur`, a very soft shadow.
- Soft blurred gradient glows (blue and gold, low opacity) behind the hero and section headings. A faint grain or noise overlay is optional.
- Typography: a rounded or geometric display font (for example **Plus Jakarta Sans**, **Sora**, or **Outfit**) for headings and **Inter** for body text. Large headings, tight letter spacing, comfortable line height. Load fonts efficiently.
- Spacing on an 8px grid with generous whitespace.
- Motion: gentle fade-and-rise on scroll, soft hover lifts, smooth transitions (200 to 400 ms). Respect `prefers-reduced-motion`.
- Both dark and light themes with a toggle. Remember the choice and default to the user's system preference.

## TECH STACK

- **React + Vite + Tailwind CSS** (JavaScript). Match the stack in the CV.
- Optional light animation with **Framer Motion** if it is already installed or clearly worth adding. Avoid heavy dependencies.
- Icons: **lucide-react** or similar.
- Keep the project deployable to **Vercel** with no extra configuration.
- Keep all content in a single data file (for example `src/data/content.js`) so I can edit text and projects without touching components.

## SITE STRUCTURE (single page with smooth-scroll sections)

1. **Navbar:** sticky and translucent with a blur. Name or logo on the left; links to About, Skills, Projects, Education, Contact; theme toggle; a "Hire me" button. Mobile hamburger menu.
2. **Hero:** the name "Hephzibah", the title "Full-Stack Developer", a headline such as "I build fast, clean, and interactive web experiences.", a short summary, and two buttons ("View my work" and "Contact me"). On the right, a **portrait image** area for my photo (see Photo section) with a soft blue glow behind it. Add small floating tech chips (React, Node.js, Three.js, Supabase) for atmosphere.
3. **About:** use the Professional Summary below, shown as two short paragraphs, next to a small stats row (for example "3 projects", "Full-stack", "3D web"). Do not invent numbers that are not supported by the CV.
4. **Skills:** grouped glass cards for Frontend, Backend, Database and Authentication, Payments and Deployment, and Tools, using the lists below.
5. **Projects:** a responsive grid of project cards with image placeholders, descriptions, tech tags, and "Live demo" and "GitHub" link buttons (hide a button if its link is empty). Use the three projects below.
6. **Education:** a clean card for FUTO with the relevant academic areas.
7. **Core competencies and interests:** a compact, tasteful section using the lists below.
8. **Contact:** a form (name, email, message) with validation, plus email, GitHub, and LinkedIn links.
9. **Footer:** name, quick links, social icons, copyright.

## CONTENT (use this text; polish the wording lightly but do not add false claims)

**Name:** Hephzibah [SURNAME]
**Title:** Full-Stack Developer
**Location:** Nigeria
**Contact placeholders:** [Phone Number], [Professional Email], GitHub: [GitHub Profile URL], LinkedIn: [LinkedIn Profile URL], Portfolio: [Portfolio Website URL]. Keep these in the content data file as clearly marked placeholders for me to fill in.

**Professional summary:**
Full-Stack Developer focused on designing and developing modern, responsive, and interactive web applications. Experienced in JavaScript-based web development, frontend implementation, application architecture, version control, and integrating backend services and database solutions. Familiar with building e-commerce experiences, interactive web applications, and 3D browser-based projects.

Proficient in working with development tools and frameworks to transform product requirements into functional digital experiences. Committed to writing maintainable code, solving technical problems, improving user experience, and developing scalable web solutions.

**Skills**

- *Frontend:* HTML5 and CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Responsive Web Design, Interactive User Interfaces
- *Backend:* Node.js, Express.js, REST API Integration, Server-side Application Development
- *Database and Authentication:* PostgreSQL, Supabase, Database Integration, Authentication and File Storage Integration
- *Payments and Deployment:* Paystack Integration, Flutterwave Integration, Vercel, Environment Variable Configuration
- *Tools:* Git and GitHub, Visual Studio Code, Vite, Three.js, AI-assisted Development Tools

**Projects**

1. **SavorBite: Food Ordering and Marketing Platform** (Full-Stack Developer, personal project)
   A food commerce web application that presents food products, supports online ordering workflows, and gives customers an intuitive experience. Highlights: responsive product browsing interface, JavaScript frontend functionality, backend and database design for products and orders, Supabase for database, authentication, and file storage, payment integration and deployment configuration, Git/GitHub workflow.
   *Tags:* JavaScript, React.js, Tailwind CSS, Node.js, Express.js, Supabase, PostgreSQL, Git.

2. **NOVA City Life 3D: Interactive Browser-Based City Simulation** (Web Developer, personal project)
   An immersive 3D city simulation in the browser with character movement and game-like features. Highlights: 3D environment built with web technologies, keyboard-based player movement and controls, character models and animation (FBX), minimap, in-game clock, and autosave, plus debugging and UX improvements.
   *Tags:* JavaScript, HTML5, CSS3, Three.js, FBX models.
   *Note for the owner:* the CV calls this project "NOVA City Life 3D". I also work on a related business-simulation game called **EMPIRE CITY**. Keep the project name in one variable in the content file so it is easy to change, and ask me which name to show if it is not obvious from the workspace.

3. **Personal Developer Portfolio** (Full-Stack Developer, personal project)
   This website. A modern digital presence to showcase web development capabilities and selected projects, with responsive layouts and interactive components.
   *Tags:* JavaScript, React.js, Tailwind CSS, Vite, Git.

**Education:** Federal University of Technology, Owerri (FUTO), Bachelor's Degree Programme in Computer Science, Nigeria, currently enrolled. Relevant areas: Computer Programming, Data Structures and Algorithms, Database Concepts, Software Development, Mathematics and Computational Problem-Solving.

**Core competencies:** Full-stack web application development; frontend implementation and responsive design; backend service and database integration; interactive application development; technical troubleshooting and debugging; version control and source code management; requirements analysis and feature implementation; independent project development; continuous technical learning and improvement.

**Interests:** Full-stack web applications; e-commerce and digital business solutions; software engineering and application architecture; interactive web experiences and 3D applications; API integration and database-driven systems; modern web technologies and scalable digital products.

## PHOTO HANDLING

- Create a `public/images/` folder and use a placeholder at `public/images/profile.jpg` until I add my real photo.
- My photo shows me in a **yellow sweatshirt**. Style the portrait so it blends in: rounded or arched frame, soft blue glow behind it, a subtle vignette on the edges, and a thin gold ring or border echoing the sweatshirt colour.
- Use `object-fit: cover`, sensible `object-position`, and `loading="eager"` for the hero image. Add meaningful `alt` text.
- Do not generate or fake a photo. Use a clean silhouette-style placeholder until I replace it.

## PROJECT IMAGES

Use tasteful gradient placeholder images (for example soft blue-to-gold gradients with the project name) at `public/images/projects/`, with a clear note on where to drop real screenshots. Do not hot-link external images.

## CONTACT FORM

- Build the UI with client-side validation and clear success and error states.
- Do not invent a backend. Make the submit handler easy to wire up and implement it with a **mailto fallback** by default. In the README, explain how to connect Formspree, EmailJS, or a Supabase edge function instead.
- Never commit secrets. Use environment variables for any keys and provide a `.env.example`.

## QUALITY REQUIREMENTS

- **Responsive:** looks great at 360px, 768px, 1024px, and 1440px. No horizontal scrolling.
- **Accessible:** semantic HTML, proper heading order, visible focus states, keyboard navigation, labels on form fields, WCAG AA colour contrast in both themes, `aria` attributes where needed.
- **Performance:** lazy-load below-the-fold images, avoid large dependencies, keep animations light, and aim for a Lighthouse score of 90+ in each category.
- **SEO:** a proper `<title>`, meta description, Open Graph tags, favicon, and `lang` attribute.
- **Code quality:** reusable components (`Navbar`, `Hero`, `SectionHeading`, `GlassCard`, `ProjectCard`, `SkillGroup`, `ContactForm`, `Footer`), clean folder structure, no dead code, and no unused dependencies.
- **Honesty:** only use facts from the CV and this prompt. Do not invent employers, awards, statistics, testimonials, or client names. Leave out any section that would need invented content.

## HOW TO WORK

1. Inspect the workspace and any `/design` folder or Stitch export. Follow the layout and style if present, adapting it to the tokens above.
2. If the project does not exist yet, scaffold it with Vite + React + Tailwind. If it exists, extend it.
3. Build the site section by section, then wire in the theme toggle, smooth scroll, and animations.
4. Run the build and fix all errors and warnings. Run the dev server and check each section at mobile and desktop widths. Check the browser console for errors.
5. Write a short `README.md` covering how to run it, how to edit the content file, how to add my photo and project screenshots, how to set up the contact form, and how to deploy to Vercel.
6. Finish with a short report: what you built, what you tested, what is placeholder, and the exact steps I must take next. Do not claim anything is tested if it was not.

Work autonomously through all steps without asking me about minor decisions. Ask only if you are blocked.

**Begin now by inspecting the workspace.**
