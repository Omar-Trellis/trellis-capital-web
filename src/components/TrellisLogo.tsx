
import React from 'react';

interface TrellisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TrellisLogo = ({ className = '', size = 'md' }: TrellisLogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden`}>
      {/* Trellis lattice pattern */}
      <svg 
        viewBox="0 0 32 32" 
        fill="none" 
        className="w-full h-full p-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main lattice pattern */}
        <path 
          d="M4 4L16 16M16 16L28 4M16 16L4 28M16 16L28 28M8 4L20 16M20 16L8 28M12 4L24 16M24 16L12 28" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-black/80"
        />
        <path 
          d="M4 8L12 16M12 16L4 24M20 8L28 16M28 16L20 24M8 12L16 20M16 20L24 12" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="text-green-600/60"
        />
      </svg>
    </div>
  );
};
