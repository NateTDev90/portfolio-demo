# Artist Portfolio Template - Demo

## Project Overview
Demo version of the portfolio for LinkedIn showcase. Generic branding with placeholder artwork - no client-specific content.

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + custom CSS
- **Deployment**: Vercel

## Project Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout with nav/footer
│   ├── page.tsx         # Redirects to /gallery
│   ├── globals.css      # All styling
│   ├── gallery/         # Portfolio grid with lightbox
│   ├── about/           # Template description
│   └── contact/         # Contact form
├── components/
│   ├── Navigation.tsx   # Header with responsive menu
│   ├── GeometricLogo.tsx # SVG logo component
│   └── Footer.tsx       # Footer
├── hooks/
│   └── useLightbox.ts   # Lightbox state management
├── lib/
│   └── artworks.ts      # Placeholder artwork data
└── types/
    └── index.ts         # Shared TypeScript interfaces
public/
└── artworks/            # SVG placeholder images
```

## Development
```bash
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Production build
```

## Key Features
- Responsive design (mobile hamburger menu, desktop nav)
- Gallery grid with lightbox
- Neon/cyberpunk color scheme
- No password protection (public demo)

## Coding Principles

**Code is the comment.** Write code so clear it doesn't need comments.

- **Self-documenting names**: `parseHexColor()` not `hexToRgb()`, `isMenuOpen` not `open`
- **Single responsibility**: Each file/function does one thing. Extract when mixing concerns.
- **Named constants over magic values**: Use descriptive constant names
- **Semantic grouping**: Group related functionality together
- **Types as documentation**: Interfaces describe shape, not comments
- **No commented-out code**: Delete it. Git remembers.
- **Comments only for "why"**: Never explain *what* code does—make the code explain itself
