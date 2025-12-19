'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Geometric Logo SVG Component
const GeometricLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className}>
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF10F0" />
        <stop offset="100%" stopColor="#B026FF" />
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
      {/* Hexagon */}
      <polygon
        points="16,2 28,9 28,23 16,30 4,23 4,9"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="2"
      />
      {/* Inner triangle */}
      <polygon
        points="16,8 24,20 8,20"
        fill="url(#logoGrad)"
        opacity="0.6"
      />
      {/* Center dot */}
      <circle cx="16" cy="16" r="2" fill="#00D4FF"/>
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
          <GeometricLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
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
