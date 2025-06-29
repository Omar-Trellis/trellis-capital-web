import React from 'react';

interface TrellisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  variant?: 'dark' | 'light'; // dark uses Dark BG.png, light uses White BG.png
}

export const TrellisLogo = ({ className = '', size = 'md', variant = 'dark' }: TrellisLogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24',
    '3xl': 'w-32 h-32'
  };

  const logoSrc = variant === 'dark' ? '/logos/Dark BG.png' : '/logos/White BG.png';

  return (
    <img 
      src={logoSrc}
      alt="Trellis Capital Group Logo"
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  );
};
