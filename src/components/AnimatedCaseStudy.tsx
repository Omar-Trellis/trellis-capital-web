import React, { useEffect, useRef, useMemo, Component, ErrorInfo, ReactNode, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence, Easing } from 'framer-motion';
import { CaseStudy } from '@/data/caseStudies';

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

class AnimationErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Animation error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 md:p-10 max-w-2xl mx-auto shadow-2xl border border-white/10">
          <div className="text-white">
            <p className="text-sm text-gray-400 mb-2">Loading case study...</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Optimized Counter Component with RAF-based animation
const OptimizedCounter = React.memo(({ 
  value, 
  delay = 0, 
  isVisible,
  format = 'currency'
}: { 
  value: number; 
  delay?: number; 
  isVisible: boolean;
  format?: 'currency' | 'percentage' | 'number';
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const formatValue = useCallback((val: number) => {
    switch (format) {
      case 'currency':
        return `$${Math.round(val).toLocaleString()}`;
      case 'percentage':
        return `${Math.round(val)}%`;
      default:
        return Math.round(val).toLocaleString();
    }
  }, [format]);

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp + delay;
    }

    const elapsed = timestamp - startTimeRef.current;
    const duration = 1000; // 1 second
    
    if (elapsed < 0) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.round(value * easeOutQuart);
    
    setDisplayValue(currentValue);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [value, delay]);

  useEffect(() => {
    if (isVisible && !animationRef.current) {
      startTimeRef.current = undefined;
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    };
  }, [isVisible, animate]);

  // Reset when visibility changes to false
  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      startTimeRef.current = undefined;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    }
  }, [isVisible]);

  return <span>{formatValue(displayValue)}</span>;
});

OptimizedCounter.displayName = 'OptimizedCounter';

// Main Component with performance optimizations
const AnimatedCaseStudyInner: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    once: false, 
    amount: 0.2,
    margin: "0px 0px -100px 0px" // Start animation before fully visible
  });

  // Pre-calculate all values to avoid recalculation
  const calculatedValues = useMemo(() => {
    const profit = data.salePrice - data.purchasePrice - data.renovationCost;
    const totalInvestment = data.purchasePrice + data.renovationCost;
    const roi = Math.round((profit / totalInvestment) * 100);
    
    return {
      roi,
      profit,
      totalInvestment
    };
  }, [data]);

  // Optimized animation variants with GPU-accelerated transforms
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 40,
      rotateX: 5
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as Easing,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { 
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1] as Easing
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as Easing
      }
    }
  };

  const highlightVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as Easing,
        delay: 0.4
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 md:p-10 max-w-2xl mx-auto shadow-2xl border border-white/10 overflow-hidden will-change-transform"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      whileHover={{ 
        scale: 1.02, 
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
      }}
      style={{
        backfaceVisibility: 'hidden',
        perspective: 1000
      }}
    >
      {/* Optimized background with CSS-only animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-green-400/5 pointer-events-none"
        style={{
          willChange: 'opacity',
          animation: isInView ? 'pulse 4s ease-in-out infinite' : 'none'
        }}
      />
      
      <div className="relative z-10">
        <motion.div variants={itemVariants}>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            {data.title}
          </h3>
          <p className="text-yellow-400 text-base mb-8">{data.location}</p>
        </motion.div>

        <div className="space-y-4 mb-8">
          <motion.div variants={itemVariants} className="flex justify-between items-center py-3 border-b border-white/10">
            <span className="text-slate-300 font-medium">Purchase Price:</span>
            <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
              <OptimizedCounter 
                value={data.purchasePrice} 
                delay={300} 
                isVisible={isInView}
                format="currency"
              />
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-between items-center py-3 border-b border-white/10">
            <span className="text-slate-300 font-medium">Renovation Cost:</span>
            <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
              <OptimizedCounter 
                value={data.renovationCost} 
                delay={600} 
                isVisible={isInView}
                format="currency"
              />
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-between items-center py-3 border-b border-white/10">
            <span className="text-slate-300 font-medium">Sale Price:</span>
            <span className="text-green-400 text-xl md:text-2xl font-bold tracking-tight">
              <OptimizedCounter 
                value={data.salePrice} 
                delay={900} 
                isVisible={isInView}
                format="currency"
              />
            </span>
          </motion.div>
        </div>

        <motion.div variants={highlightVariants}>
          <div className="flex items-center justify-between mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex-1">
              <div className="text-slate-300 text-base mb-2">Net ROI:</div>
              <div className="text-green-400 text-3xl md:text-4xl font-bold tracking-tight">
                <OptimizedCounter 
                  value={calculatedValues.roi} 
                  delay={1200} 
                  isVisible={isInView}
                  format="percentage"
                />
              </div>
              <div className="text-slate-400 text-sm mt-3">
                Completed in {data.timelineMonths} months
              </div>
            </div>
            
            {/* Optimized SVG with CSS animation */}
            <div className="relative w-20 h-20">
              <svg width="80" height="80" className="transform -rotate-90 will-change-transform">
                <circle 
                  cx="40" 
                  cy="40" 
                  r="36" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="4" 
                  fill="none" 
                />
                <circle
                  cx="40" 
                  cy="40" 
                  r="36" 
                  stroke="#4ade80" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 36}`,
                    strokeDashoffset: isInView 
                      ? `${2 * Math.PI * 36 * (1 - calculatedValues.roi / 100)}` 
                      : `${2 * Math.PI * 36}`,
                    transition: 'stroke-dashoffset 1.5s ease-out 1.2s'
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-green-400">
                <OptimizedCounter 
                  value={calculatedValues.roi} 
                  delay={1200} 
                  isVisible={isInView}
                  format="percentage"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Wrapped component with error boundary
const AnimatedCaseStudy: React.FC<{ data: CaseStudy }> = ({ data }) => {
  return (
    <AnimationErrorBoundary>
      <AnimatedCaseStudyInner data={data} />
    </AnimationErrorBoundary>
  );
};

export default React.memo(AnimatedCaseStudy); 