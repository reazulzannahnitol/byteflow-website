# ByteFlow Global IT — Frontend starter

A responsive, single-page company website built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## 1. What you need

- Node.js LTS installed: https://nodejs.org/
- VS Code (recommended): https://code.visualstudio.com/

## 2. Run the website locally

1. Extract this folder.
2. Open the `byteflow-website` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run these commands:

```bash
npm install
npm run dev
```

5. Open http://localhost:3000 in your browser.
6. Keep the terminal running while you work. Press `Ctrl + C` to stop the development server.

## 3. Learn the main files

- `app/page.tsx` — the actual homepage. The page is made from React components and data arrays.
- `app/layout.tsx` — shared page wrapper, fonts, browser title, and SEO description.
- `app/globals.css` — global CSS and reusable visual effects.
- `tailwind.config.ts` — brand colors, font names, and Tailwind extensions.
- `public/byteflow-logo.png` — your supplied logo. Files in `public` are served from the site root, so this image is used as `/byteflow-logo.png`.
- `package.json` — project dependencies and commands.

## 4. Beginner code concepts

### JSX / TSX

`page.tsx` uses TSX: TypeScript mixed with JSX, which lets you describe the page using HTML-like tags. For example:

```tsx
<h1 className="font-heading text-5xl">
  Ideas into code.
</h1>
```

`className` is used instead of HTML's `class` because this is JSX.

### Components

The homepage is a React component:

```tsx
export default function Home() {
  return <main>...</main>;
}
```

React components are reusable pieces of UI. `Home` is the component Next.js displays for the homepage route `/`.

### Data arrays and `.map()`

Services are stored in an array near the top of `app/page.tsx`. `.map()` loops through that array and renders one card for each service. To add or edit a service, change the `services` array rather than duplicating all the card markup.

### Tailwind CSS

Classes like `mt-7`, `grid`, `rounded-2xl`, and `text-muted` style elements. Tailwind utility classes make it possible to change spacing, layout, and colors directly in the markup. Custom brand colors are configured in `tailwind.config.ts`.

### TypeScript

TypeScript adds type checking to JavaScript. For example, `service.number` and `service.title` are inferred from the services array, helping catch mistakes while coding.

### Links and sections

Navigation links like `href="#services"` scroll to the element with `id="services"`. The contact CTA uses a `mailto:` link as a starter; it opens the visitor's email application rather than storing messages on a server.

## 5. Before publishing

- Replace the sample contact email `hello@byteflowglobal.com` with your real company email.
- Confirm the services and company description accurately represent ByteFlow.
- Add real contact and social links.
- Test the page on mobile and desktop.
- If you later need a working contact form, CMS, login, or database, add a backend/service then. This starter is frontend-first.

## 6. Useful commands

```bash
npm run dev    # start local development server
npm run build  # create a production build
npm run start  # serve the production build after building
```
