'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { artworks, Artwork } from '@/lib/artworks';

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedArtwork(null);
    }
  }, []);

  useEffect(() => {
    if (selectedArtwork) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedArtwork, handleKeyDown]);

  return (
    <section className="page-section">
      <div className="container">
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-title">
            <span className="text-[var(--pink)]">/</span> Portfolio
          </h1>
        </header>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {artworks.map((artwork) => (
            <article
              key={artwork.id}
              onClick={() => setSelectedArtwork(artwork)}
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

      {/* Lightbox */}
      {selectedArtwork && (
        <div
          className="lightbox animate-fade-in"
          onClick={() => setSelectedArtwork(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedArtwork(null)}
            className="lightbox-close"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ maxHeight: '75vh' }}>
              <Image
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                width={1200}
                height={900}
                className="lightbox-image"
                priority
              />
            </div>

            {/* Title and year */}
            <div className="lightbox-info">
              <h2 className="lightbox-title">{selectedArtwork.title}</h2>
              <span className="lightbox-year">{selectedArtwork.year}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
