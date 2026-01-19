# Artist Portfolio Template

A modern, minimalist portfolio template built with Next.js 16, TypeScript, and Tailwind CSS. Features a neon/cyberpunk aesthetic perfect for showcasing digital artwork.

## Features

- **Neon Design System**: Vibrant pink, purple, and cyan accents on dark backgrounds
- **Responsive Gallery**: Grid layout with lightbox for viewing artwork
- **Mobile-First**: Optimized for all device sizes
- **Fast Performance**: Built with Next.js App Router for optimal loading
- **Easy Customization**: Simple data file for adding artwork

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter, JetBrains Mono
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

## Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
```

## Customization

### Adding Artwork
1. Add images to `public/artworks/`
2. Update `src/lib/artworks.ts`:
```typescript
{
  id: 'unique-id',
  title: 'Artwork Title',
  imageUrl: '/artworks/filename.jpg',
  year: '2024',
}
```

### Updating Content
- Navigation: `src/components/Navigation.tsx`
- About page: `src/app/about/page.tsx`
- Contact page: `src/app/contact/page.tsx`
- Styles: `src/app/globals.css`

## Deployment

This template is optimized for Vercel:
1. Push to GitHub
2. Import to Vercel
3. Deploy

## License

MIT - Feel free to use this template for your own projects.
