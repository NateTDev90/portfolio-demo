'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Neon Rose SVG Component
const NeonRose = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className}>
    <defs>
      <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF10F0" />
        <stop offset="100%" stopColor="#FF1493" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow)">
      {/* Rose petals */}
      <ellipse cx="16" cy="12" rx="4" ry="5" fill="url(#roseGrad)" opacity="0.9"/>
      <ellipse cx="12" cy="14" rx="4" ry="4" fill="url(#roseGrad)" opacity="0.8" transform="rotate(-30 12 14)"/>
      <ellipse cx="20" cy="14" rx="4" ry="4" fill="url(#roseGrad)" opacity="0.8" transform="rotate(30 20 14)"/>
      <ellipse cx="14" cy="17" rx="3.5" ry="4" fill="url(#roseGrad)" opacity="0.7" transform="rotate(-15 14 17)"/>
      <ellipse cx="18" cy="17" rx="3.5" ry="4" fill="url(#roseGrad)" opacity="0.7" transform="rotate(15 18 17)"/>
      <circle cx="16" cy="14" r="2" fill="#FF6AD5"/>
      {/* Stem */}
      <path d="M16 20 L16 28" stroke="#22AA44" strokeWidth="2" strokeLinecap="round"/>
      {/* Leaves */}
      <ellipse cx="13" cy="24" rx="3" ry="1.5" fill="#22AA44" transform="rotate(-30 13 24)"/>
      <ellipse cx="19" cy="26" rx="3" ry="1.5" fill="#22AA44" transform="rotate(30 19 26)"/>
    </g>
  </svg>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/gallery', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: 'https://shop.example.com', label: 'Shop', external: true },
  ];

  const isActive = (href: string) => {
    if (href === '/gallery') {
      return pathname === '/gallery' || pathname === '/';
    }
    return pathname === href;
  };

  return (
    <nav className="nav">
      <div className="container nav-inner">
        {/* Brand */}
        <Link href="/gallery" className="nav-brand flex items-center gap-3 group">
          <NeonRose className="w-8 h-8 transition-transform group-hover:scale-110" />
          <span className="bg-gradient-to-r from-[#FF10F0] to-[#FF6AD5] bg-clip-text text-transparent">
            Artist Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex nav-links">
          {navItems.map((item) => (
            'external' in item && item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--pink)] transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              'external' in item && item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="nav-link"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
