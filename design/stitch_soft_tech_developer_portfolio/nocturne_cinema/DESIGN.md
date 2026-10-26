---
name: Nocturne Cinema
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#171c25'
  surface-container: '#1b2029'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2f0'
  on-surface-variant: '#d1c6ab'
  inverse-surface: '#dfe2f0'
  inverse-on-surface: '#2c303b'
  outline: '#9a9078'
  outline-variant: '#4d4632'
  surface-tint: '#eec200'
  primary: '#ffecb9'
  on-primary: '#3c2f00'
  primary-container: '#facc15'
  on-primary-container: '#6c5700'
  inverse-primary: '#735c00'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#c7f5ff'
  on-tertiary: '#00363e'
  tertiary-container: '#33e4ff'
  on-tertiary-container: '#006270'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe083'
  primary-fixed-dim: '#eec200'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#a0efff'
  tertiary-fixed-dim: '#15daf4'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e59'
  background: '#0f131d'
  on-background: '#dfe2f0'
  surface-variant: '#31353f'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the atmospheric gravity, dramatic pacing, and visual poise of modern film title sequences and high-end cinematic editorial posters. Targeted at directors, cinematographers, creative technologists, and visual storytellers, the interface commands undivided focus through deep atmospheric staging, wide structural typography, and precise lighting accents.

The aesthetic leans on **Cinematic Minimalism** interwoven with subtle **Glassmorphism and Low-Contrast Outlines**. Deep, obsidian-tinted navy negative space lets creative media exist as luminous centerpieces. High-voltage golden flares cut through the shadow floor to denote immediate calls to action, while electric blues signal precision telemetry, states, and metadata tags. The overall emotional resonance is immersive, authoritative, and unapologetically dramatic.

## Colors

The palette simulates a darkened screening room: ink-deep navy voids, layered charcoal-blue planes, and focused projection beams.

- **Canvas & Backing Void (`#070B14`)**: Deepest midnight obsidian. Used for universal page backdrops, full-viewport canvases, and letterboxed framing.
- **Surfaces & Cards (`#0F1626`)**: Low-saturation navy charcoal. Provides subtle tonal separation from the background canvas while preserving cinematic darkness.
- **Elevated Surfaces (`#162035`)**: Hover planes, modals, and floating inspector panels.
- **Key Accent / Cinema Gold (`#FACC15`)**: A high-impact golden yellow drawn from warm tungsten spotlights and gold-leaf typography. Reserved strictly for primary action drivers, active timeline scrapers, focus rings, and hero impact moments.
- **Secondary Accent / Electric Royal Blue (`#3B82F6`)**: Cold, lens-flare blue used for technical metadata chips, status indicators, dynamic glows, and progress trackers.
- **Text Layers**:
  - Primary Text: `#F1F5F9` (slate 100) — High-contrast projection white.
  - Secondary Text: `#94A3B8` (slate 400) — Receded technical readouts, metadata labels, and timecodes.
  - Muted / Inactive Text: `#475569` (slate 600) — Subtle guidelines and disabled states.
- **Structural Borders**: `rgba(255, 255, 255, 0.08)` hairline dividers that capture light like precision matte-box framing.

## Typography

The typographic hierarchy establishes clear dramatic scale:
- **Display & Section Titles (Syne)**: Unconventional, expansive, and high-impact. Used for opening title cards, major hero headers, and project case study titles. High contrast weights (700-800) bring editorial prestige.
- **Labels, Telemetry & Technical Headers (Space Grotesk)**: Geometric, structural, and wide. Applied to micro-headings, timecodes, metadata tags, button labels, and film credits.
- **Body & Editorial Copy (Inter)**: Clean, neutral, and readable against dark backdrops. Balances the strong personality of Syne and Space Grotesk to ensure effortless long-form readability.

Always render small labels and status markers in uppercase with relaxed letter-spacing (`0.06em` to `0.1em`) to mimic film slate notation and production credits.

## Layout & Spacing

The layout philosophy mirrors cinematic widescreen framing: structured horizontal sequences, generous margins, and panoramic breathing room.

- **Grid Framework**: 12-column responsive fluid grid across desktop (max-width `1600px`), collapsing to 8 columns on tablet and 4 columns on mobile.
- **Margin & Gutter Rhythm**: Desktop viewports use a wide `3rem` canvas margin to create an intentional theater-matte border around content. Mobile collapses to `1.25rem` to preserve screen real estate.
- **Reflow & Aspect Ratios**: Media modules prioritize cinematic aspect ratios (`16:9`, `2.39:1`, and `4:5`). Cards align tightly to grid increments, maintaining consistent vertical rhythm driven by `space-md` (`1rem`) and `space-xl` (`2.5rem`) component intervals.

## Elevation & Depth

Visual depth is achieved through layered navy luminance, backdrop transparency, and soft directional light bleeds rather than muddy drop shadows.

- **Baseline Void (Level 0)**: `#070B14` flat background.
- **Framed Canvas (Level 1)**: `#0F1626` with a crisp `1px solid rgba(255, 255, 255, 0.08)` border. Surfaces do not rely on drop shadows at rest; they rely on outline definition.
- **Focus Floating (Level 2)**: `#162035` overlay surfaces, preview drawers, and hover states. Features a very diffused shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.7)`.
- **Anamorphic Blue Glow**: Used selectively behind key project cards or active media players: `0 0 50px -10px rgba(59, 130, 246, 0.15)`.
- **Tungsten Gold Radiance**: Applied to focused primary buttons and selected timeline points: `0 0 25px -4px rgba(250, 204, 21, 0.35)`.
- **Glassmorphic Paneling**: Navigation headers, overlays, and floating control bars employ `background: rgba(15, 22, 38, 0.75)` with `backdrop-filter: blur(16px)` and the signature `1px` translucent edge.

## Shapes

The design system uses a calibrated `14px` border radius (`rounded-lg`) for primary cards and media viewports, giving containers modern sleekness without leaning overly pill-shaped.

- **Base Radius (`0.5rem` / 8px)**: Inputs, small chips, metadata badges, and icon buttons.
- **Signature Radius (`0.875rem` / 14px)**: Standard project cards, hero stills, interactive canvas modules, modal overlays, and dialogs.
- **Pill Radius (`9999px`)**: Interactive play buttons, pill filter controls, and status pills.

## Components

### Buttons
- **Primary (Tungsten Gold)**: Solid `#FACC15` background, `#070B14` bold text (`Space Grotesk`, `label-lg`). Border radius `8px` or `9999px` (for play CTA). On hover: scale 1.02 with an ambient gold flare (`box-shadow: 0 0 25px rgba(250, 204, 21, 0.35)`). Active: scale 0.98.
- **Secondary (Lens Blue Ghost)**: Transparent navy backing, `1px solid rgba(59, 130, 246, 0.35)`, text `#F1F5F9`. Hover: background `rgba(59, 130, 246, 0.12)`, border color `#3B82F6`.
- **Tertiary / Subdued**: Transparent background, text `#94A3B8`, `1px solid rgba(255, 255, 255, 0.08)`. Hover: text `#F1F5F9`, border `rgba(255, 255, 255, 0.2)`.

### Cards & Media Frames
- Base fill `#0F1626`, rounded `14px`, bounded by `1px solid rgba(255, 255, 255, 0.08)`.
- Image/video wrappers inside cards feature overflow hidden and subtle gradient scPlatform scrims (`linear-gradient(180deg, transparent 60%, rgba(7, 11, 20, 0.9) 100%)`) allowing title typography to overlay bottom edges cleanly.
- Hover transition smoothly brightens the border to `rgba(250, 204, 21, 0.3)` or `rgba(59, 130, 246, 0.4)` and lifts the surface 4px.

### Chips & Metadata Badges
- Background `rgba(59, 130, 246, 0.08)` with text `#3B82F6` and a hairline border `rgba(59, 130, 246, 0.2)`.
- Typography: `Space Grotesk` uppercase (`label-mono`), tracking `0.08em`.
- For golden milestone chips (e.g., "DIRECTOR'S CUT", "AWARD WINNER"): background `rgba(250, 204, 21, 0.1)`, text `#FACC15`, border `rgba(250, 204, 21, 0.25)`.

### Input Fields
- Dark canvas fill `#090E1A`, 1px border `rgba(255, 255, 255, 0.12)`, text `#F1F5F9`, placeholder `#475569`.
- Height 48px, rounded `8px`, typography `Inter body-md`.
- Focus state: outline none, border `#FACC15`, subtle glow `0 0 0 3px rgba(250, 204, 21, 0.15)`.

### Checkboxes & Radios
- Size 18x18px, border `1px solid rgba(255, 255, 255, 0.2)`, background `#0F1626`.
- Checked state: `#FACC15` fill with obsidian `#070B14` icon checkmark.
- Radio indicators follow identical states with a centered circular dot.

### Video Scrubbers & Timeline Sliders
- Track height 3px, background `rgba(255, 255, 255, 0.1)`.
- Buffered bar `rgba(59, 130, 246, 0.4)`, active playhead progress `#FACC15`.
- Playhead thumb: 12px circular `#FACC15` beacon, expanding to 16px on hover with yellow tungsten bloom.

### Lists & Credits Slate
- Divided with `1px solid rgba(255, 255, 255, 0.05)` rows.
- Left column (role/meta) rendered in `Space Grotesk label-md` in `#94A3B8`.
- Right column (talent/detail) rendered in `Inter body-md` in `#F1F5F9`. Hovering shifts row background to `rgba(255, 255, 255, 0.02)`.