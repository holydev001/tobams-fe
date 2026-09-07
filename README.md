# Frontend Intern Assessment

Next.js implementation of the Tobams Frontend Intern Assessment design.

## Links

- GitHub repository: https://github.com/holydev001/tobams-fe
- Live deployment: To be added after Vercel deployment
- Assessment Figma design: https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment
- Inspection Figma file: https://www.figma.com/design/H1JIcfxggEzTeAGt4cjFx9/Untitled?node-id=135-66

## Stack

- Next.js with the App Router
- TypeScript
- Tailwind CSS
- ESLint with the Next.js configuration
- `next/font` and `next/image` for optimized fonts and images

## Getting started

Install dependencies and start the development server with pnpm:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

Available checks:

```bash
pnpm lint
pnpm build
```

## Design and technical decisions

- TypeScript is used to catch type errors during development and make component props and data contracts explicit.
- ESLint is included to enforce consistent code quality and identify common Next.js and React issues before submission.
- The page is implemented as reusable components under `/components`, with semantic HTML and Tailwind responsive prefixes for the 425px, 768px, and desktop layouts.
- The supplied Figma clone is treated as the source of truth for section dimensions, spacing, colors, typography, and responsive structure.
- Standard Tailwind breakpoints are used; no custom media queries are required.
- The testimonial carousel keeps four cards in an accessible horizontal track while showing three cards in the desktop frame, matching the Figma layout.
- The footer social marks are implemented as accessible inline SVGs because no separate social icon assets were supplied.

## AI disclosure

AI tools were used as a development assistant for project scaffolding, code review, and implementation support. The final code is reviewed and maintained for this assessment.

## Known issues

- The live URL will be updated once the Vercel deployment is created.
- The fourth testimonial card is kept in the carousel track using the supplied fourth profile image; its copy is not fully visible in the supplied Figma viewport and should be replaced if an exact source copy is provided.
