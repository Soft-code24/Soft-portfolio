---
name: Soft Tech Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  code-inline:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
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
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
The design system embodies a calm, precise, and highly focused developer aesthetic. It targets technical recruiters, engineering leaders, and enterprise clients seeking seasoned architectural craft. The emotional response is clarity, competence, and friction-free focus. 

The aesthetic is clean minimalism paired with modern utility: generous whitespace, razor-sharp typographic hierarchy, crisp 1px borders, and tactile card surfaces over a calm slate canvas. Visual distraction is eliminated, allowing code samples, case studies, and engineering achievements to lead.

## Colors
The palette relies on high-contrast functionality anchored by an electric blue primary accent.

- **Primary Canvas**: `#F8FAFC` (Slate 50) establishes a clean, glare-free foundation.
- **Surface**: `#FFFFFF` pure white surfaces define elevated card containers and inputs.
- **Primary Accent (`#2563EB`)**: Electric Blue is reserved for focal interactions: primary call-to-action buttons, active navigation states, interactive text links, selected tags, and critical metrics.
- **Primary Text (`#0F172A`)**: Deep slate delivers optimal contrast ratios (WCAG AAA) for body copy, titles, and icons.
- **Secondary Text (`#64748B`)**: Mid-tone slate provides clear visual separation for metadata, captions, timestamps, and secondary descriptions.
- **Border Default (`#E2E8F0`)**: Subtle slate-200 stroke defining card perimeters, input edges, and horizontal dividers.

## Typography
Headings utilize **Space Grotesk** to introduce technical character, structural geometry, and contemporary engineering flavor without compromising readability. Tight negative letter spacing is applied to large sizes for a cohesive editorial structure.

Body text, form inputs, button labels, and metadata rely on **Inter** for neutral legibility and consistent baseline alignment across all viewport widths.

## Layout & Spacing
The layout adheres strictly to an **8px base rhythm**. All margins, gutters, gap distances, and internal padding scale along multiples of 8px (with 4px and 12px steps serving micro-adjustments).

- **Grid Model**: A centered 12-column layout capped at a maximum width of `1200px`.
  - Desktop (`>= 1024px`): 12 columns, `1.5rem` (24px) gutters, and `2rem` (32px) page margin.
  - Tablet (`768px – 1023px`): 8 columns, `1.5rem` (24px) gutters, and `1.5rem` (24px) page margin.
  - Mobile (`< 768px`): 4 columns, `1rem` (16px) gutters, and `1rem` (16px) page margin.
- **Vertical Flow**: Section blocks span `5rem` (80px) to `7rem` (112px) desktop gaps to maintain an uncluttered portfolio presentation.

## Elevation & Depth
Depth is created through physical surface separation rather than heavy tonal shadows:

- **Flat Canvas**: Background relies on `#F8FAFC` flat canvas rendering.
- **Card Surfaces**: Pure `#FFFFFF` surfaces layered with a continuous `1px solid #E2E8F0` stroke.
- **Shadow Profile**: Extremely soft ambient diffusion:
  - Default card shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`
  - Card interactive hover: `0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.03)` with a subtle vertical lift (`transform: translateY(-2px)`).
- **Overlays / Menus**: Popovers and navigation drawers utilize `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.03)`.

## Shapes
The shape system balances soft, modern hardware-like card contours with slightly tighter control radii:

- **Cards & Containers**: Standardized at `16px` (`rounded-2xl`).
- **Interactive Controls (Buttons & Inputs)**: Standardized at `12px` (`rounded-xl`).
- **Chips, Badges & Tags**: Fully rounded pill shapes (`9999px` or `rounded-full`) or `8px` (`rounded-lg`) depending on density.

## Components

### Buttons
- **Primary Button**: Solid `#2563EB` background, `#FFFFFF` text (`label-md`), `12px` corner radius (`rounded-xl`), `12px 24px` padding. Hover: `#1D4ED8`. Focus: `2px` ring `#2563EB` with `2px` offset.
- **Secondary Button**: Transparent background, `1px solid #E2E8F0` border, `#0F172A` text, `12px` corner radius (`rounded-xl`), `12px 24px` padding. Hover: `#F1F5F9` background with `#CBD5E1` border.
- **Ghost / Link Button**: Transparent background, `#2563EB` text, zero horizontal padding for inline links; hover: `#1D4ED8` with underline.

### Cards
- **Project & Experience Cards**: `#FFFFFF` background, `16px` border radius (`rounded-2xl`), `1px solid #E2E8F0` border, ambient shadow. Padding is `24px` on mobile and `32px` on desktop. Interactive cards transition `border-color` to `#CBD5E1` and translate `-2px` on hover.

### Chips & Tags (Tech Stack)
- **Default Tag**: `#F1F5F9` background, `#0F172A` text, `6px 12px` padding, `8px` corner radius (`rounded-lg`), font size `12px` (`label-sm`).
- **Accent / Active Tag**: `#EFF6FF` background, `1px solid #BFDBFE`, `#2563EB` text.

### Form Inputs
- **Text Field / Textarea**: `#FFFFFF` background, `1px solid #E2E8F0`, `12px` corner radius (`rounded-xl`), `12px 16px` padding, text `#0F172A`, placeholder `#94A3B8`.
- **Focus State**: `1px solid #2563EB`, paired with a `0 0 0 3px rgba(37, 99, 235, 0.12)` halo ring.

### Checkboxes & Radios
- **Checkbox / Radio**: `16px` diameter/square, `1px solid #CBD5E1`, `4px` radius for checkbox, circle for radio. Checked: `#2563EB` fill with white checkmark/dot indicator.

### Code Snippets & Metric Displays
- **Code Block**: `#0F172A` dark container, `12px` radius, monospace font with syntax highlighting, subtle copy-to-clipboard button in top right.
- **Metric Stat Callout**: Space Grotesk `headline-lg` bold accent number (`#2563EB`) accompanied by an Inter `body-sm` secondary text descriptor (`#64748B`).