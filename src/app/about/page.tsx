import Link from 'next/link';

export default function About() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="content-centered">
          {/* Page Header */}
          <header className="page-header">
            <h1 className="page-title">
              <span className="text-[var(--pink)]">/</span> About
            </h1>
          </header>

          {/* Bio Content */}
          <div className="prose">
            <p>
              This is a demo portfolio template built with Next.js, TypeScript,
              and Tailwind CSS.
            </p>
            <p>
              Features include a responsive gallery with lightbox, neon-themed
              design system, and a clean minimalist aesthetic perfect for
              showcasing digital artwork.
            </p>
            <p>
              The template demonstrates modern web development practices including
              server-side rendering, optimized images, and accessible design patterns.
            </p>
          </div>

          {/* Links */}
          <div className="mt-12 flex gap-8">
            <Link href="/contact" className="nav-link">
              Get in Touch <span className="text-pink">→</span>
            </Link>
            <Link href="/gallery" className="nav-link">
              View Portfolio <span className="text-pink">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
