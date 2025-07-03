import React from 'react';

interface TrellisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  variant?: 'dark' | 'light'; // dark uses Dark BG.png, light uses White BG.png
}

export const TrellisLogo = ({ className = '', size = 'md', variant = 'dark' }: TrellisLogoProps) => {
  // Use height-based sizing to maintain aspect ratio
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
    '2xl': 'h-24',
    '3xl': 'h-32',
    '4xl': 'h-40',
    '5xl': 'h-48',
    '6xl': 'h-56'
  };

  const logoSrc = variant === 'dark' ? '/logos/Dark BG.png' : '/logos/White BG.png';

  return (
    <img 
      src={logoSrc}
      alt="Trellis Capital Group Logo"
      className={`${sizeClasses[size]} ${className} object-contain filter drop-shadow-sm`}
      style={{ 
        imageRendering: 'crisp-edges',
        WebkitFontSmoothing: 'antialiased'
      }}
    />
  );
};
