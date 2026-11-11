# elb-web-page

A bilingual (English/Spanish) single-page website for a psychologist. Built with SvelteKit 2, Svelte 5 (runes), TypeScript, Tailwind CSS 4, and deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run check` - Type-check with svelte-check
- `npm run lint` - Lint with Prettier and ESLint
- `npm run format` - Format with Prettier

## Content and styling

- **Text content**: Lives in `src/lib/i18n/` (English in `en.ts`, Spanish in `es.ts`, types in `types.ts`). All strings are clearly marked with placeholders and `// TODO(content):` comments for easy replacement.
- **Palette/theme**: Defined in `src/lib/theme.css` using CSS custom properties mapped into Tailwind 4 via `@theme inline`.
- **Fonts**: Self-hosted variable fonts are imported in `src/routes/+layout.svelte` (`@fontsource-variable/inter` for body, `@fontsource-variable/newsreader` for headings).

## Adding images

Place images in `static/images/`. The Hero section includes a portrait placeholder (aspect `[4/5]`) with a TODO note - replace it by updating `Hero.svelte` when adding your image.

## Deployment

This project uses `@sveltejs/adapter-vercel`. To deploy:

1. Import the repository in Vercel
2. Use build command: `npm run build`
3. No extra configuration needed
