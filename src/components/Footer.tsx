const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex flex-col items-center gap-4">
        {/* Small rose icon */}
        <svg viewBox="0 0 32 32" className="w-6 h-6 opacity-60">
          <defs>
            <linearGradient id="footerRose" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF10F0" />
              <stop offset="100%" stopColor="#FF1493" />
            </linearGradient>
          </defs>
          <ellipse cx="16" cy="12" rx="4" ry="5" fill="url(#footerRose)" opacity="0.9"/>
          <ellipse cx="12" cy="14" rx="4" ry="4" fill="url(#footerRose)" opacity="0.8" transform="rotate(-30 12 14)"/>
          <ellipse cx="20" cy="14" rx="4" ry="4" fill="url(#footerRose)" opacity="0.8" transform="rotate(30 20 14)"/>
          <circle cx="16" cy="14" r="2" fill="#FF6AD5"/>
        </svg>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Neon Rose Collective
        </p>
      </div>
    </footer>
  );
};

export default Footer;
