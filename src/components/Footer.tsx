const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex flex-col items-center gap-4">
        {/* Geometric icon */}
        <svg viewBox="0 0 32 32" className="w-6 h-6 opacity-60">
          <defs>
            <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF10F0" />
              <stop offset="100%" stopColor="#B026FF" />
            </linearGradient>
          </defs>
          <polygon points="16,4 28,28 4,28" fill="none" stroke="url(#footerGrad)" strokeWidth="2"/>
          <circle cx="16" cy="18" r="4" fill="url(#footerGrad)" opacity="0.6"/>
        </svg>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Artist Portfolio Template
        </p>
      </div>
    </footer>
  );
};

export default Footer;
