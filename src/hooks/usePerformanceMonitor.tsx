import { useEffect, useRef, useState, useCallback } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  animationFrameTime: number;
  intersectionTime: number;
}

interface UsePerformanceMonitorOptions {
  componentName: string;
  enableLogging?: boolean;
  sampleRate?: number; // Log every nth render
}

export const usePerformanceMonitor = ({
  componentName,
  enableLogging = process.env.NODE_ENV === 'development',
  sampleRate = 10
}: UsePerformanceMonitorOptions) => {
  const renderStartRef = useRef<number>();
  const renderCountRef = useRef(0);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    animationFrameTime: 0,
    intersectionTime: 0
  });

  // Track render performance
  const startRenderTracking = useCallback(() => {
    renderStartRef.current = performance.now();
  }, []);

  const endRenderTracking = useCallback(() => {
    if (renderStartRef.current) {
      const renderTime = performance.now() - renderStartRef.current;
      renderCountRef.current++;
      
      // Only update metrics if logging is enabled to prevent unnecessary re-renders
      if (enableLogging) {
        setMetrics(prev => ({ ...prev, renderTime }));
        
        if (renderCountRef.current % sampleRate === 0) {
          console.log(`[${componentName}] Render #${renderCountRef.current}: ${renderTime.toFixed(2)}ms`);
        }
      }
    }
  }, [componentName, enableLogging, sampleRate]);

  // Track animation frame performance
  const trackAnimationFrame = useCallback((callback: () => void) => {
    const start = performance.now();
    
    requestAnimationFrame(() => {
      callback();
      const animationFrameTime = performance.now() - start;
      
      if (enableLogging) {
        setMetrics(prev => ({ ...prev, animationFrameTime }));
        
        if (animationFrameTime > 16.67) { // > 60fps threshold
          console.warn(`[${componentName}] Slow animation frame: ${animationFrameTime.toFixed(2)}ms`);
        }
      }
    });
  }, [componentName, enableLogging]);

  // Track intersection observer performance
  const trackIntersection = useCallback((callback: () => void) => {
    const start = performance.now();
    callback();
    const intersectionTime = performance.now() - start;
    
    if (enableLogging) {
      setMetrics(prev => ({ ...prev, intersectionTime }));
      
      if (intersectionTime > 5) { // > 5ms threshold
        console.warn(`[${componentName}] Slow intersection: ${intersectionTime.toFixed(2)}ms`);
      }
    }
  }, [componentName, enableLogging]);

  // Memory usage tracking (optional)
  const getMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      return {
        usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
        totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
        jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
      };
    }
    return null;
  }, []);

  // Log summary on unmount
  useEffect(() => {
    return () => {
      if (enableLogging && renderCountRef.current > 0) {
        console.log(`[${componentName}] Performance Summary:`, {
          totalRenders: renderCountRef.current,
          avgRenderTime: metrics.renderTime,
          lastAnimationFrameTime: metrics.animationFrameTime,
          lastIntersectionTime: metrics.intersectionTime,
          memoryUsage: getMemoryUsage()
        });
      }
    };
  }, [componentName, enableLogging, metrics, getMemoryUsage]);

  return {
    startRenderTracking,
    endRenderTracking,
    trackAnimationFrame,
    trackIntersection,
    metrics,
    getMemoryUsage
  };
}; 