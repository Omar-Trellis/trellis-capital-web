import { ReactNode, useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'fade-up-scale';
  mobileAnimation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'fade-up-scale';
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  mobileDuration?: number;
  desktopDuration?: number;
}

// Simple animation classes that are always available in Tailwind
const animationClasses = {
  'fade-up': {
    initial: 'translate-y-8 opacity-0',
    animate: 'translate-y-0 opacity-100'
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100'
  },
  'slide-left': {
    initial: 'translate-x-8 opacity-0',
    animate: 'translate-x-0 opacity-100'
  },
  'slide-right': {
    initial: '-translate-x-8 opacity-0',
    animate: 'translate-x-0 opacity-100'
  },
  'scale-up': {
    initial: 'scale-95 opacity-0',
    animate: 'scale-100 opacity-100'
  },
  'fade-up-scale': {
    initial: 'translate-y-4 scale-95 opacity-0',
    animate: 'translate-y-0 scale-100 opacity-100'
  }
} as const;

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  mobileAnimation,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  mobileDuration,
  desktopDuration
}: AnimatedSectionProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const isMobile = useIsMobile();

  // Use the existing intersection observer hook
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: once
  });

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Determine if animation should be active
  const shouldAnimate = once ? (hasAnimated || isIntersecting) : isIntersecting;

  // Update hasAnimated when intersecting for the first time
  useEffect(() => {
    if (isIntersecting && once && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, once, hasAnimated]);

  // If user prefers reduced motion, just show content without animation
  if (prefersReducedMotion) {
    return (
      <div ref={elementRef} className={className}>
        {children}
      </div>
    );
  }

  // Use mobile-specific animation if provided and on mobile
  const activeAnimation = isMobile && mobileAnimation ? mobileAnimation : animation;
  const classes = animationClasses[activeAnimation];
  const animationClass = shouldAnimate ? classes.animate : classes.initial;
  
  // Use responsive duration if provided
  const duration = isMobile && mobileDuration ? mobileDuration : (desktopDuration || 700);
  
  const computedClassName = `
    transition-all ease-out will-change-transform
    ${animationClass}
    ${className}
  `.trim();

  const computedStyle = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={elementRef}
      className={computedClassName}
      style={computedStyle}
    >
      {children}
    </div>
  );
};
