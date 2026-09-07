# Tobams Frontend Intern Assessment

Production-ready Next.js implementation of the Tobams Group training and development landing page.

## Submission links

- **Public GitHub repository:** https://github.com/holydev001/tobams-fe
- **Live deployment:** `https://tobams-fe.vercel.app/`
- **Assessment Figma design:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment

## Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS v4
- ESLint with the Next.js configuration
- `next/font` for Nunito and Nunito Sans
- `next/image` for optimized local image assets
- pnpm for package management

## Getting started

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

Production checks:

```bash
pnpm lint
pnpm build
pnpm start
```

## Project structure

```text
app/
  globals.css       Global Tailwind entry and document styles
  layout.tsx        Metadata, fonts, and root layout
  page.tsx          Semantic page composition
components/
  Nav.tsx
  Hero.tsx
  HeroBackground.tsx
  LearningManagement.tsx
  CorporateTraining.tsx
  PersonalizedTraining.tsx
  CapacityDevelopment.tsx
  ManagementDevelopment.tsx
  TransformationHub.tsx
  ConsultantTraining.tsx
  ConsultationCta.tsx
  Testimonials.tsx
  FooterCta.tsx
  Footer.tsx
public/
  Supplied Figma SVG and logo assets
```

## Design and technical decisions

- TypeScript catches errors during development and makes component props and data contracts explicit.
- ESLint identifies common React and Next.js issues and keeps the final code consistent.
- The page is split into semantic, reusable components under `/components`; the composition uses `<nav>`, `<main>`, `<section>`, and `<footer>` landmarks.
- Nunito Sans is used for interface/body copy and Nunito is used for display headings where the Figma specification calls for it.
- The supplied Figma inspection files were used as the source of truth for dimensions, spacing, typography, colors, and responsive ordering.
- Standard Tailwind `sm:`, `md:`, and `lg:` breakpoints are used for responsive behavior. No custom media queries are used.
- The supplied hero artwork is rendered edge-to-edge with a viewport-width wrapper. Its SVG `preserveAspectRatio="none"` behavior is intentional: it keeps the exported artwork flush with the viewport at mobile and desktop widths.
- The desktop Figma reference is 1440px wide. Fluid sizing and wrapping are used at intermediate desktop widths to prevent content clipping.
- The footer includes the separate Figma CTA strip, responsive link groups, contact information, registered offices, legal links, and copyright areas.

## Accessibility

- Images use meaningful alt text.
- Navigation, links, buttons, email, and telephone actions are keyboard-focusable.
- Visible focus outlines are provided for interactive elements.
- Heading hierarchy and landmark elements follow the page structure.

## AI disclosure

AI tool were used as a development assistant for this project. The final code is reviewed and maintained for this assessment.

