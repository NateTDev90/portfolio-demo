# Artist Portfolio Template - Demo

## Project Overview
A minimalist portfolio template demonstrating modern web development with Next.js. Features a neon/cyberpunk aesthetic with placeholder artwork for demonstration purposes.

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + custom CSS
- **Fonts**: Inter (body), JetBrains Mono (monospace)
- **Deployment**: Vercel-ready

## Project Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout with nav/footer
│   ├── page.tsx         # Redirects to /gallery
│   ├── globals.css      # All styling (CSS variables, components)
│   ├── gallery/         # Portfolio grid with lightbox
│   ├── about/           # About page
│   └── contact/         # Contact form
├── components/
│   ├── Navigation.tsx   # Header with NeonRose SVG logo
│   └── Footer.tsx       # Simple footer with rose icon
└── lib/
    └── artworks.ts      # Artwork data (id, title, imageUrl, year)
public/
└── artworks/            # SVG placeholder images
```

## Design System
### Colors (CSS Variables in globals.css)
- `--bg`: #0a0a0a (dark background)
- `--pink`: #FF10F0 (primary accent)
- `--pink-light`: #FF6AD5
- `--pink-dark`: #CC0DC0
- `--purple`: #B026FF
- `--cyan`: #00D4FF
- `--rose`: #FF1493

### Key Features
- Pink ambient glow background
- Gallery grid with hover effects and neon glow
- Lightbox for viewing artwork (ESC to close)
- Pink accents throughout (scrollbar, focus states, borders)
- Responsive design (mobile-first)

## Development
```bash
npm install   # Install dependencies
npm run dev   # Start dev server on localhost:3000
npm run build # Production build
npm run lint  # ESLint
```

## Deployment
Optimized for Vercel - just connect the GitHub repo and deploy.
