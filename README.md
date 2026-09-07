# Frontend Intern Assessment

Next.js implementation of the Tobams Frontend Intern Assessment design.

## Links

- GitHub repository: https://github.com/holydev001/tobams-fe
- Live deployment: To be added after Vercel deployment
- Figma design: https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment

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
- The page is being implemented as reusable components under `/components`, with semantic HTML and Tailwind responsive prefixes for the 425px, 768px, and desktop layouts.
- The design is treated as the source of truth. Any intentional deviation or technical assumption will be recorded here as implementation continues.

## AI disclosure

AI tools were used as a development assistant for project scaffolding, code review, and implementation support. The final code is reviewed and maintained for this assessment.

## Known issues

- The live URL will be updated once the Vercel deployment is created.
