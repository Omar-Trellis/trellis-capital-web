import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  debounceMs?: number;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<number>();

  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    triggerOnce = true,
    debounceMs = 100
  } = options;

  const debouncedSetIntersecting = useCallback((value: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      setIsIntersecting(value);
    }, debounceMs);
  }, [debounceMs]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        
        if (triggerOnce) {
          // For triggerOnce mode, only set to true when first intersecting
          if (isVisible && !hasTriggered) {
            setHasTriggered(true);
            setIsIntersecting(true);
            // Disconnect observer after first trigger to prevent further changes
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        } else {
          // For continuous mode, use debounced setter
          debouncedSetIntersecting(isVisible);
        }
      },
      { 
        threshold, 
        rootMargin,
        // Use passive observation for better performance
        ...(typeof window !== 'undefined' && {
          root: null // Observe relative to viewport
        })
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered, debouncedSetIntersecting]);

  const shouldAnimate = triggerOnce ? (hasTriggered || isIntersecting) : isIntersecting;

  return { 
    elementRef, 
    isIntersecting: shouldAnimate,
    // Expose the raw intersection state for advanced usage
    isCurrentlyIntersecting: isIntersecting 
  };
};
