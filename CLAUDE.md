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
│   ├── Navigation.tsx   # Header with geometric logo + responsive menu
│   └── Footer.tsx       # Footer
└── lib/
    └── artworks.ts      # Placeholder artwork data
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
