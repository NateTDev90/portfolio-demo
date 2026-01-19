'use client'

import Image from 'next/image'
import { artworks, type Artwork } from '@/lib/artworks'
import { useLightbox } from '@/hooks/useLightbox'

export default function Gallery() {
  const { selectedItem, open, close, isOpen } = useLightbox<Artwork>()

  return (
    <section className="page-section">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">
            <span className="text-[var(--pink)]">/</span> Portfolio
          </h1>
        </header>

        <div className="gallery-grid">
          {artworks.map((artwork) => (
            <article
              key={artwork.id}
              onClick={() => open(artwork)}
              className="gallery-item"
            >
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="gallery-item-info">
                <h2 className="gallery-item-title">{artwork.title}</h2>
                <span className="gallery-item-year">{artwork.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {isOpen && selectedItem && (
        <div className="lightbox animate-fade-in" onClick={close}>
          <button onClick={close} className="lightbox-close" aria-label="Close">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ maxHeight: '75vh' }}>
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                width={1200}
                height={900}
                className="lightbox-image"
                priority
              />
            </div>

            <div className="lightbox-info">
              <h2 className="lightbox-title">{selectedItem.title}</h2>
              <span className="lightbox-year">{selectedItem.year}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
