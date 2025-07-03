import React, { useState, useEffect, useRef, useMemo, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Building, CheckCircle, ChevronRight, DollarSign, Clock, Award, Briefcase, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { OptimizedCounter } from '@/components/OptimizedCounter';
import { useParallax } from '@/hooks/useParallax';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import { useIsMobile } from '@/hooks/use-mobile';
import { teamTestimonials } from '@/data/teamData';

// Lazy load heavy components
const CircularTestimonials = React.lazy(() => 
  import('@/components/ui/circular-testimonials').then(module => ({
    default: module.CircularTestimonials
  }))
);

const InteractiveDataEcosystem = React.lazy(() => 
  import('@/components/InteractiveDataEcosystem').then(module => ({
    default: module.default
  }))
);

// Optimized loading skeleton for lazy components
const ComponentSkeleton = ({ height = "400px", className = "" }: { height?: string; className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} style={{ height }}>
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
    </div>
  </div>
);

// Memoized counter stats to prevent unnecessary re-calculations
const COUNTER_STATS = [
  { value: 500, suffix: '+', label: 'Properties Purchased', format: 'number' as const },
  { value: 120, prefix: '$', suffix: 'M+', label: 'Total Invested', format: 'number' as const },
  { value: 45, suffix: '%', label: 'Average ROI', format: 'number' as const },
  { value: 15, suffix: '+', label: 'Years Experience', format: 'number' as const }
];

const Home = () => {
  const { offset } = useParallax(0.5);
  const heroSectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  
  // Mobile detection for responsive behavior
  const isMobile = useIsMobile();
  
  // Performance monitoring
  const { startRenderTracking, endRenderTracking } = usePerformanceMonitor({
    componentName: 'HomePage',
    enableLogging: process.env.NODE_ENV === 'development',
    sampleRate: 5
  });

  // Intersection observers for performance optimization with responsive thresholds
  const { elementRef: statsElementRef, isIntersecting: statsVisible } = useIntersectionObserver({
    threshold: isMobile ? 0.2 : 0.3,
    triggerOnce: true,
    rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
  });

  const { elementRef: testimonialElementRef, isIntersecting: testimonialVisible } = useIntersectionObserver({
    threshold: isMobile ? 0.05 : 0.1,
    triggerOnce: true,
    rootMargin: isMobile ? '0px 0px -100px 0px' : '0px 0px -200px 0px' 
  });



  // Performance monitoring effect - only track on mount and unmount
  useEffect(() => {
    startRenderTracking();
    return () => {
      endRenderTracking();
    };
  }, [startRenderTracking, endRenderTracking]);

  // Optimized scroll handler with throttling
  const scrollToNextSection = useMemo(() => {
    let isScrolling = false;
    
    return () => {
      if (isScrolling) return;
      
      isScrolling = true;
      window.scrollTo({ 
        top: window.innerHeight, 
        behavior: 'smooth' 
      });
      
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };
  }, []);

  // Responsive animation props
  const responsiveAnimationProps = useMemo(() => ({
    mobileDuration: 400,
    desktopDuration: 700,
    mobileThreshold: 0.1,
    desktopThreshold: 0.2,
    mobileRootMargin: '0px 0px -30px 0px',
    desktopRootMargin: '0px 0px -50px 0px'
  }), []);



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroSectionRef}
        className="relative min-h-[100vh] min-h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        {/* Background with optimized parallax effect */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            transform: `translateY(${offset * (isMobile ? 0.2 : 0.5)}px)`,
            willChange: 'transform'
          }}
        >
          {/* Background image - always visible */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Florida luxury real estate property"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          
          {/* Subtle gradient overlays to blend with navy theme while showing property image */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/30 to-navy-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/15 via-transparent to-navy-900/15"></div>
        </div>

        {/* Hero Content with responsive animations */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection 
            animation="fade-up" 
            mobileAnimation="fade-in"
            delay={isMobile ? 100 : 200}
            mobileDuration={responsiveAnimationProps.mobileDuration}
            desktopDuration={responsiveAnimationProps.desktopDuration}
            threshold={isMobile ? 0.1 : 0.2}
            rootMargin={isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'}
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-4 h-4 text-yellow-500 mr-2" aria-hidden="true" />
              <span className="text-sm font-medium text-yellow-500">Florida's Most Trusted Investment Partner</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Florida's Premier<br />
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Real Estate Investment
              </span><br />
              Partner
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto">
              Whether you're seeking profitable investment opportunities or need to sell your property fast, 
              we deliver exceptional results with integrity and expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/investors"
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 w-full sm:w-auto"
              >
                I'm an Investor
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link 
                to="/sellers"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 w-full sm:w-auto"
              >
                I Want to Sell
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

            {/* Optimized scroll indicator with responsive animations */}
            <AnimatedSection 
              delay={isMobile ? 400 : 800} 
              animation="fade-in"
              mobileDuration={300}
              desktopDuration={500}
            >
              <button
                onClick={scrollToNextSection}
                className="animate-bounce hover:animate-none cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Scroll down for more content"
              >
                <ChevronRight className="w-6 h-6 text-white rotate-90" aria-hidden="true" />
              </button>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Lazy-loaded Interactive 3D Data Ecosystem Section */}
      <Suspense fallback={<ComponentSkeleton height="600px" className="my-8" />}>
        <InteractiveDataEcosystem />
      </Suspense>

      {/* Services Overview with responsive animations */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection 
            className="text-center mb-12 sm:mb-16" 
            animation="fade-up" 
            mobileAnimation="fade-in"
            threshold={isMobile ? 0.1 : 0.2}
            mobileDuration={responsiveAnimationProps.mobileDuration}
            desktopDuration={responsiveAnimationProps.desktopDuration}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored strategies for investors and homeowners alike
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Investors */}
            <AnimatedSection 
              delay={isMobile ? 50 : 100} 
              animation="slide-right" 
              mobileAnimation="fade-up"
              threshold={isMobile ? 0.15 : 0.3}
              mobileDuration={responsiveAnimationProps.mobileDuration}
              desktopDuration={responsiveAnimationProps.desktopDuration}
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group h-full hover:-translate-y-1">
                <Card className="border-0 overflow-hidden h-full">
                  <CardContent className="bg-white p-8 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">For Investors</h3>
                      <TrendingUp className="w-8 h-8 text-yellow-600" aria-hidden="true" />
                    </div>
                    <p className="text-gray-600 mb-6">
                      Access exclusive fix & flip opportunities with projected ROIs of 35-50%. 
                      Our AI-powered platform identifies undervalued properties before they hit the market.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">Pre-vetted investment opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">Comprehensive market analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">Full renovation management</span>
                      </li>
                    </ul>
                    <Link 
                      to="/investors"
                      className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-2.5 px-4 rounded-md transition-all duration-200 group text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                    >
                      Explore Investment Opportunities
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* For Sellers */}
            <AnimatedSection 
              delay={isMobile ? 100 : 200} 
              animation="slide-left" 
              mobileAnimation="fade-up"
              threshold={isMobile ? 0.15 : 0.3}
              mobileDuration={responsiveAnimationProps.mobileDuration}
              desktopDuration={responsiveAnimationProps.desktopDuration}
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-1 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group h-full hover:-translate-y-1">
                <Card className="border-0 overflow-hidden h-full">
                  <CardContent className="bg-white p-8 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">For Sellers</h3>
                      <Building className="w-8 h-8 text-green-600" aria-hidden="true" />
                    </div>
                    <p className="text-gray-600 mb-6">
                      Get a fair cash offer in 24 hours and close in as little as 7 days. 
                      No repairs, no fees, no hassles - we buy properties in any condition.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">Fast, all-cash offers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">No repairs or staging needed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">Flexible closing dates</span>
                      </li>
                    </ul>
                    <Link 
                      to="/sellers"
                      className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2.5 px-4 rounded-md transition-all duration-200 group text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Get Your Cash Offer
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Optimized Credibility Section with Counters and responsive animations */}
      <section 
        ref={statsRef}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection 
            className="text-center mb-12 sm:mb-16" 
            animation="fade-up" 
            mobileAnimation="fade-in"
            threshold={isMobile ? 0.1 : 0.2}
            mobileDuration={responsiveAnimationProps.mobileDuration}
            desktopDuration={responsiveAnimationProps.desktopDuration}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Proven Track Record of Success
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Our numbers speak for themselves
            </p>
          </AnimatedSection>

          <div ref={statsElementRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {COUNTER_STATS.map((stat, index) => (
              <AnimatedSection 
                key={stat.label} 
                delay={isMobile ? 50 * (index + 1) : 100 * (index + 1)} 
                animation="fade-up-scale"
                mobileAnimation="fade-up"
                threshold={isMobile ? 0.15 : 0.3}
                mobileDuration={responsiveAnimationProps.mobileDuration}
                desktopDuration={responsiveAnimationProps.desktopDuration}
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-1 sm:mb-2">
                    <OptimizedCounter 
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      format={stat.format}
                      duration={isMobile ? 1500 : 2000}
                      delay={isMobile ? 50 * (index + 1) : 100 * (index + 1)}
                      isVisible={statsVisible}
                      enablePerformanceMonitoring={process.env.NODE_ENV === 'development'}
                    />
                  </div>
                  <div className="text-sm sm:text-base text-gray-200">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lazy-loaded Team Leadership Section with responsive animations */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection 
            className="text-center mb-12 sm:mb-16" 
            animation="fade-up" 
            mobileAnimation="fade-in"
            threshold={isMobile ? 0.1 : 0.2}
            mobileDuration={responsiveAnimationProps.mobileDuration}
            desktopDuration={responsiveAnimationProps.desktopDuration}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans committed to your success
            </p>
          </AnimatedSection>

          <div ref={testimonialElementRef}>
            {testimonialVisible && (
              <AnimatedSection 
                className="flex justify-center" 
                animation="fade-up" 
                mobileAnimation="fade-in"
                threshold={isMobile ? 0.05 : 0.1}
                mobileDuration={responsiveAnimationProps.mobileDuration}
                desktopDuration={responsiveAnimationProps.desktopDuration}
              >
                <Suspense fallback={<ComponentSkeleton height="500px" className="w-full max-w-4xl" />}>
                  <CircularTestimonials
                    testimonials={teamTestimonials}
                    autoplay={!isMobile} // Disable autoplay on mobile for better UX
                    colors={{
                      name: "#0a0a0a",
                      designation: "#454545",
                      testimony: "#171717",
                      arrowBackground: "#141414",
                      arrowForeground: "#f1f1f7",
                      arrowHoverBackground: "#eab308",
                    }}
                    fontSizes={{
                      name: isMobile ? "24px" : "28px",
                      designation: isMobile ? "16px" : "18px",
                      quote: isMobile ? "16px" : "18px",
                    }}
                  />
                </Suspense>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA Section with responsive animations */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection 
            animation="fade-up" 
            mobileAnimation="fade-in"
            threshold={isMobile ? 0.1 : 0.2}
            mobileDuration={responsiveAnimationProps.mobileDuration}
            desktopDuration={responsiveAnimationProps.desktopDuration}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join hundreds of successful investors and satisfied sellers who trust Trellis Capital Group
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <AnimatedSection 
                delay={isMobile ? 50 : 100} 
                animation="slide-right" 
                mobileAnimation="fade-up"
                threshold={isMobile ? 0.15 : 0.3}
                mobileDuration={responsiveAnimationProps.mobileDuration}
                desktopDuration={responsiveAnimationProps.desktopDuration}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <CardContent className="p-8">
                    <Briefcase className="w-12 h-12 text-yellow-500 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-3 text-white">For Investors</h3>
                    <p className="text-gray-300 mb-4">
                      Get exclusive access to pre-vetted investment opportunities
                    </p>
                    <Link 
                      to="/investors"
                      className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2.5 px-4 rounded-md transition-colors duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                    >
                      Start Investing
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection 
                delay={isMobile ? 100 : 200} 
                animation="slide-left" 
                mobileAnimation="fade-up"
                threshold={isMobile ? 0.15 : 0.3}
                mobileDuration={responsiveAnimationProps.mobileDuration}
                desktopDuration={responsiveAnimationProps.desktopDuration}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <CardContent className="p-8">
                    <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-bold mb-3 text-white">For Sellers</h3>
                    <p className="text-gray-300 mb-4">
                      Get a fair cash offer for your property in 24 hours
                    </p>
                    <Link 
                      to="/sellers"
                      className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-md transition-colors duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                    >
                      Get Cash Offer
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <p className="text-gray-400">
              Questions? Call us at{' '}
              <a href="tel:1-305-894-6608" className="text-yellow-500 hover:text-yellow-400 font-bold" aria-label="Call us at 1-305-894-6608">
                +1-305-894-6608
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Home);