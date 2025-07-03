import React from 'react';

interface TrellisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  variant?: 'dark' | 'light'; // dark uses Dark BG.png, light uses White BG.png
}

export const TrellisLogo = ({ className = '', size = 'md', variant = 'dark' }: TrellisLogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24',
    '3xl': 'w-32 h-32',
    '4xl': 'w-40 h-40',
    '5xl': 'w-48 h-48',
    '6xl': 'w-56 h-56'
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
