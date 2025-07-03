import React, { useEffect, useRef, useState, useCallback } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';

interface OptimizedCounterProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  format?: 'number' | 'currency' | 'percentage';
  precision?: number;
  isVisible?: boolean;
  onComplete?: () => void;
  enablePerformanceMonitoring?: boolean;
}

// Optimized easing function for smooth animation
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

// Number formatting utilities
const formatters = {
  number: (value: number, precision: number = 0) => {
    return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
  },
  currency: (value: number, precision: number = 0) => {
    const formatted = formatters.number(value, precision);
    return `$${formatted.toLocaleString('en-US')}`;
  },
  percentage: (value: number, precision: number = 0) => {
    const formatted = formatters.number(value, precision);
    return `${formatted}%`;
  }
};

export const OptimizedCounter = React.memo<OptimizedCounterProps>(({
  to,
  from = 0,
  duration = 1500,
  delay = 0,
  prefix = '',
  suffix = '',
  format = 'number',
  precision = 0,
  isVisible = true,
  onComplete,
  enablePerformanceMonitoring = false
}) => {
  const [currentValue, setCurrentValue] = useState(from);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const initialPropsRef = useRef({ to, from, duration });

  // Performance monitoring
  const { trackAnimationFrame } = usePerformanceMonitor({
    componentName: 'OptimizedCounter',
    enableLogging: enablePerformanceMonitoring,
    sampleRate: 10
  });

  // Animation function using RAF
  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    
    const newValue = from + (to - from) * easedProgress;
    setCurrentValue(newValue);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      setCurrentValue(to);
      setHasCompleted(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [from, to, duration, onComplete]);

  // Start animation when visible and not yet completed
  useEffect(() => {
    if (!isVisible || isAnimating || hasCompleted) {
      return;
    }

    const startAnimation = () => {
      trackAnimationFrame(() => {
        setIsAnimating(true);
        startTimeRef.current = null;
        animationRef.current = requestAnimationFrame(animate);
      });
    };

    if (delay > 0) {
      const timeoutId = setTimeout(startAnimation, delay);
      return () => clearTimeout(timeoutId);
    } else {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isVisible, delay, animate, isAnimating, hasCompleted, trackAnimationFrame]);

  // Only reset if the target value has actually changed significantly
  useEffect(() => {
    const propsChanged = 
      initialPropsRef.current.to !== to || 
      initialPropsRef.current.from !== from ||
      initialPropsRef.current.duration !== duration;
    
    if (propsChanged && hasCompleted) {
      // Only reset if there's a meaningful change in the target value
      initialPropsRef.current = { to, from, duration };
      setHasCompleted(false);
      setCurrentValue(from);
      setIsAnimating(false);
      startTimeRef.current = null;
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    }
  }, [from, to, duration, hasCompleted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Format the display value
  const formattedValue = React.useMemo(() => {
    let displayValue: string;
    
    switch (format) {
      case 'currency':
        displayValue = formatters.currency(currentValue, precision);
        break;
      case 'percentage':
        displayValue = formatters.percentage(currentValue, precision);
        break;
      default:
        displayValue = formatters.number(currentValue, precision).toLocaleString('en-US');
        break;
    }

    return `${prefix}${displayValue}${suffix}`;
  }, [currentValue, format, precision, prefix, suffix]);

  return (
    <span 
      className="inline-block tabular-nums"
      aria-live="polite" 
      aria-atomic="true"
      style={{
        // Prevent layout shifts during animation
        fontVariantNumeric: 'tabular-nums',
        // Optimize for animations
        willChange: isAnimating ? 'contents' : 'auto'
      }}
    >
      {formattedValue}
    </span>
  );
});

OptimizedCounter.displayName = 'OptimizedCounter'; 