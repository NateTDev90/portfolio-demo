interface GeometricLogoProps {
  className?: string
}

export function GeometricLogo({ className = 'w-8 h-8' }: GeometricLogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className}>
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF10F0" />
          <stop offset="100%" stopColor="#B026FF" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow)">
        <polygon
          points="16,2 28,9 28,23 16,30 4,23 4,9"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="2"
        />
        <polygon points="16,8 24,20 8,20" fill="url(#logoGrad)" opacity="0.6" />
        <circle cx="16" cy="16" r="2" fill="#00D4FF" />
      </g>
    </svg>
  )
}
