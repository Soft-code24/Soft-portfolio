# Kilo Task: Upgrade My Existing CV and Add Project Images to My Portfolio

## Important instructions

Work with my **existing CV and existing portfolio project**. Do not
create a separate replacement website or redesign unrelated sections.
First inspect the repository and identify:

-   The existing CV/resume file and how it is displayed or downloaded.
-   The portfolio Projects section and its current project
    data/components.
-   Existing image assets, project links, and styling conventions.
-   The current Git status before editing.

Before making changes, briefly report which files you plan to edit. Then
implement the changes carefully.

## Part 1 --- Upgrade the existing CV

Improve the current CV rather than replacing it from scratch. Keep
accurate existing personal details, education, contact links, and
skills. Do not invent employers, job titles, dates, qualifications,
certifications, achievements, metrics, or project features. Preserve the
existing CV format and visual identity where practical, while improving
clarity, structure, spelling, and professional presentation.

Add a section titled **PROJECT EXPERIENCE** or **SELECTED PROJECTS**
featuring the projects below. Describe them as personal projects, not
paid employment.

### 1. Soft Portfolio --- Full-Stack Developer Portfolio

-   Built and deployed a responsive developer portfolio using React,
    JavaScript, and Tailwind CSS.
-   Integrated an Express.js backend for the contact form.
-   Integrated Brevo transactional email for contact notifications and
    visitor confirmations.
-   Deployed the frontend to Vercel and the backend to Render.
-   Keep only details that are confirmed by the existing code and
    current implementation.

### 2. SavorBite --- Food Ordering Website

-   Developed a food-focused website using React and Tailwind CSS.
-   Project stack/planned integrations include Node.js, Express.js,
    Supabase/PostgreSQL, Supabase Auth and Storage, and Paystack.
-   Inspect the repository and describe only the features that are
    actually implemented. Do not present planned integrations as
    completed features.

### 3. NOVA City Life 3D --- 3D City Simulation

-   Built an interactive 3D city/game prototype using JavaScript and
    Three.js.
-   Work has included a 3D environment, player movement, character
    model/animation work, and city simulation features.
-   Inspect the current project before describing its state. Do not
    claim unfinished features such as fully working traffic,
    pedestrians, or polished gameplay unless they actually work.

For each project, add a concise description, relevant technologies, and
a clickable live-demo or source-code link only if a real URL is already
present in the project/repository. Do not invent URLs. If a link is
missing, leave it out or clearly mark it for me to fill in.

Keep the CV readable, ATS-friendly, and preferably concise. Do not add
decorative project screenshots inside a traditional CV unless the
current format already uses them and they improve readability. The
portfolio website should carry the richer project imagery.

## Part 2 --- Add relevant project images to the portfolio

Upgrade the existing Projects section so each project card has a
relevant, polished image/thumbnail:

-   **SavorBite:** use an actual screenshot from the project if
    available; otherwise use a relevant, properly licensed
    food-ordering/restaurant website image.
-   **NOVA City Life 3D:** prefer an actual screenshot of my own running
    game. Do not use a generic city-game image as if it were a
    screenshot of my implementation.
-   **Soft Portfolio:** use a screenshot of my own portfolio, or a
    relevant project preview generated from the actual website.

First search the existing repository for suitable screenshots/assets.
Reuse real project images when available. If suitable images are
missing, use reputable image sources with appropriate usage rights, or
create a polished local preview/placeholder that clearly represents the
project. Do not hotlink unreliable image URLs. Prefer
downloading/licensing assets properly or storing optimized images in the
project's public/assets folder.

For every image: - Add meaningful `alt` text. - Keep consistent aspect
ratios and use `object-fit: cover` or the existing equivalent. - Ensure
responsive layout, good loading performance, and graceful fallback if an
image fails. - Preserve the portfolio's current cinematic, premium
visual direction and existing colour system. - Make the image clickable
only if that matches the existing card design and the destination is
valid. - Do not introduce broken links, broken images, or unnecessary
dependencies.

## Part 3 --- Safety and preservation requirements

-   Do not overwrite files without inspecting them first.
-   Preserve the existing design and working functionality; avoid a full
    redesign.
-   Do not change the working contact form, API route, CORS
    configuration, Brevo integration, environment-variable names,
    deployment settings, or secrets.
-   Never print or commit `.env` values, API keys, passwords, or other
    secrets.
-   Do not fabricate work experience or claim that unfinished features
    are complete.
-   Do not deploy, commit, or push changes automatically.

## Part 4 --- Verify and report

After implementing: 1. Run the available build/lint checks. 2. Fix
issues caused by your changes. 3. Check the CV download/view flow if the
project has one. 4. Check the Projects section at desktop and mobile
widths. 5. Confirm that image paths and links resolve. 6. Report the
exact files changed, what was improved, what I still need to provide (if
anything), and the test results.

If the actual CV is not present in the repository, do not fabricate its
existing content. Create a clearly named Markdown CV draft using only
confirmed information and tell me what personal/contact details or links
I need to fill in.
