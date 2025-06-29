
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export const useCountUp = ({ end, duration = 2000, prefix = '', suffix = '' }: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const { elementRef, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  useEffect(() => {
    if (!isIntersecting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isIntersecting, end, duration]);

  return {
    elementRef,
    displayValue: `${prefix}${count.toLocaleString()}${suffix}`
  };
};
