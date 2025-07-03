import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface UseCountUpAnimationProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  onUpdate?: (latest: number) => void;
  onComplete?: () => void;
}

// Track which animations have completed globally
const completedAnimations = new WeakMap<any, boolean>();

export const useCountUpAnimation = ({
  from = 0,
  to,
  duration = 1.5,
  delay = 0,
  onUpdate,
  onComplete,
}: UseCountUpAnimationProps) => {
  const nodeRef = useRef<HTMLElement>(null);
  const instanceRef = useRef({});
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    // Check if this instance has already animated
    if (hasAnimatedRef.current || completedAnimations.get(instanceRef.current)) {
      node.textContent = Math.round(to).toLocaleString('en-US');
      return;
    }

    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.33, 1, 0.68, 1], // EaseOutCubic
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString('en-US');
        if (onUpdate) onUpdate(value);
      },
      onComplete() {
        hasAnimatedRef.current = true;
        completedAnimations.set(instanceRef.current, true);
        if (onComplete) onComplete();
      },
    });

    return () => controls.stop();
  }, [from, to, duration, delay, onUpdate, onComplete]);

  return nodeRef;
}; 