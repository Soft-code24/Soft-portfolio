# Guide: Building, Editing, and Deploying Your Portfolio

Companion to `PRD.md`. This guide explains how to run the site, change its content, add your photo, set up the contact form, and publish it.

---

## 1. Quick Start

**Requirements:** Node.js 18 or newer, npm, and Git.

```bash
# install dependencies
npm install

# start the dev server (usually http://localhost:5173)
npm run dev

# create a production build
npm run build

# preview the production build locally
npm run preview
```

If you are starting from scratch, let Kilo Code scaffold the project from the build prompt. If you are scaffolding it yourself:

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```

Then add Tailwind CSS using the current official Vite instructions at tailwindcss.com.

## 2. Recommended Workflow

1. **Design:** generate or sketch the look in Stitch and export it (HTML/CSS or screenshots) into a `/design` folder.
2. **Build:** paste the build prompt into Kilo Code in VS Code. Let it inspect the workspace and build the site.
3. **Fill in content:** replace every placeholder (see section 4).
4. **Test:** work through the checklist in section 8.
5. **Deploy:** publish on Vercel (section 7).
6. **Update:** add your live URL to your CV, GitHub, and LinkedIn.

## 3. Project Structure

```
portfolio/
├─ public/
│  ├─ images/
│  │  ├─ profile.jpg          your photo
│  │  └─ projects/            project screenshots
│  └─ cv.pdf                  optional downloadable CV
├─ src/
│  ├─ components/             Navbar, Hero, GlassCard, ProjectCard, ...
│  ├─ data/content.js         ALL your text, links, and project data
│  ├─ styles/                 theme tokens and global styles
│  ├─ App.jsx
│  └─ main.jsx
├─ .env.example               names of environment variables (no secrets)
├─ index.html
└─ package.json
```

## 4. Editing Your Content

Almost everything you will want to change lives in **`src/data/content.js`**. You should not need to touch the components for text changes.

Fill in these placeholders first:

| Placeholder | Where |
|---|---|
| Surname | `profile.name` |
| Phone number | `contact.phone` |
| Professional email | `contact.email` |
| GitHub URL | `contact.github` |
| LinkedIn URL | `contact.linkedin` |
| Portfolio URL | `contact.portfolio` |
| Live demo and GitHub links per project | `projects[i].demo`, `projects[i].repo` |

**Rules for good content**

- Only state what is true and in your CV. No invented numbers, employers, awards, or testimonials.
- Lead each project with what it does, then what you built, then the tech.
- Keep project descriptions to two or three sentences, with three or four highlights.
- Leave a link empty if you do not have one yet; the button will hide automatically.

**Project name check:** your CV says "NOVA City Life 3D", while you may also call it "EMPIRE CITY". Pick one public name and change it in one place (`projects[1].title`).

## 5. Your Photo and Images

### Profile photo

- Save as `public/images/profile.jpg` (or `.webp`).
- Recommended size: about 1000 × 1250 px (4:5), under 300 KB. Compress with Squoosh or TinyPNG.
- Because you are wearing a **yellow sweatshirt**, the page uses a deep blue background with a soft gold ring so the colours work together.

**For the best result**

1. Remove the photo background (remove.bg or similar) and save as a transparent PNG or WebP, **or** use a photo with a plain dark background.
2. Keep the lighting even on your face. Avoid heavy shadows.
3. Crop from mid-chest up with a little space above your head.
4. If the yellow looks too strong, lower the photo's saturation by about 5 to 10 percent rather than changing the page colours.

### Project screenshots

- Save as `public/images/projects/<project-name>.jpg`, about 1280 × 720 px (16:9).
- Take screenshots of the real interface: the SavorBite menu and checkout, the 3D city view with the minimap, and your portfolio's hero.
- Until you have them, gradient placeholders are used.

## 6. Contact Form

The form works out of the box with a **mailto fallback**: it opens the visitor's email app addressed to you. That is reliable but basic. To receive messages directly, upgrade to one of these:

| Option | Effort | Notes |
|---|---|---|
| **Formspree** | Lowest | Create a form, then paste its endpoint into `.env` |
| **EmailJS** | Low | Sends from the browser using a template; add service, template, and public key |
| **Supabase edge function** | Medium | Fits your stack; store messages in a table and email yourself |

**Steps (Formspree example)**

1. Create a form at formspree.io and copy the endpoint URL.
2. Create `.env` from `.env.example` and set `VITE_FORM_ENDPOINT=your-endpoint`.
3. Restart the dev server.
4. Add the same variable in your Vercel project settings (section 7).

Never put secret keys in the code or commit `.env` to GitHub. Anything starting with `VITE_` is visible in the browser, so use it only for public values.

## 7. Deploying to Vercel

1. Push the project to a GitHub repository.
2. Sign in at vercel.com and choose **Add New, then Project**, and import the repo.
3. Vercel should detect Vite automatically (build command `npm run build`, output directory `dist`).
4. Add any environment variables (for example `VITE_FORM_ENDPOINT`).
5. Click **Deploy**.
6. Open the live URL and test on your phone.
7. Optional: add a custom domain under **Settings, then Domains**.

Every push to your main branch redeploys the site automatically.

## 8. Testing Checklist

**Visual and responsive**
- [ ] Looks right at 360, 768, 1024, and 1440px; no horizontal scroll
- [ ] Dark and light themes both look good, and the choice persists after refresh
- [ ] Photo is sharp, well cropped, and blends with the background

**Function**
- [ ] Every nav link scrolls to the right section
- [ ] Mobile menu opens and closes
- [ ] Contact form shows validation errors and a success state
- [ ] All project and social links open correctly (and empty ones are hidden)
- [ ] No errors in the browser console

**Accessibility**
- [ ] You can use the whole site with the Tab key; the focus outline is visible
- [ ] Images have `alt` text; form fields have labels
- [ ] Text has enough contrast in both themes
- [ ] Animations calm down with "reduce motion" turned on in the system settings

**Performance and SEO**
- [ ] Lighthouse 90+ in Performance, Accessibility, Best Practices, and SEO
- [ ] Page title, meta description, favicon, and social preview are set

## 9. Common Problems

| Problem | Likely cause and fix |
|---|---|
| Blank page after deploy | Check the browser console; often a wrong asset path. Use paths starting with `/images/...` for files in `public/` |
| Tailwind classes not applying | Check the Tailwind setup and that `content` paths include `./index.html` and `./src/**/*.{js,jsx}` |
| Environment variable is `undefined` | It must start with `VITE_`, and you must restart the dev server or redeploy after changing it |
| Photo looks stretched | Use `object-fit: cover` and a 4:5 container |
| Page is slow | Compress images, convert to WebP, and lazy-load images below the fold |
| Blur effects lag on old phones | Reduce `backdrop-filter` blur or turn it off below a certain width |
| Theme flashes on load | Set the theme class in a small inline script in `index.html` before React loads |

## 10. After Launch

- Add the live URL to your CV, GitHub profile, and LinkedIn.
- Pin your best repositories on GitHub and make sure each has a clear README.
- Replace placeholder images with real screenshots or a short screen recording.
- Review the site every few months: add new projects, remove outdated skills, and keep the wording accurate.
- Consider adding case-study pages for your strongest projects (the problem, your approach, the tech, and the result).

## 11. Using This Guide with Kilo Code

Place `PRD.md` and `Guide.md` in the project root. Kilo Code can read them and make decisions that match your goals. If you get stuck mid-build, start a new session and say:

> Read PRD.md and Guide.md, inspect the current state of the project, and continue the build from where it stopped. Do not rewrite working parts.
