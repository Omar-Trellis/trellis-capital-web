import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ArrowRight, TrendingUp, Shield, Users, Target, Award, ChevronRight, Clock, DollarSign, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Slide data for navigation
  const slides = [{
    id: 'hero',
    title: 'The $3.5M Question'
  }, {
    id: 'problem',
    title: 'The Problem'
  }, {
    id: 'solution',
    title: 'The Solution'
  }, {
    id: 'market',
    title: 'Market Opportunity'
  }, {
    id: 'numbers',
    title: 'The Numbers'
  }, {
    id: 'traction',
    title: 'Traction'
  }, {
    id: 'edge',
    title: 'Competitive Edge'
  }, {
    id: 'team',
    title: 'The Team'
  }, {
    id: 'growth',
    title: 'Growth Strategy'
  }, {
    id: 'projections',
    title: 'Financial Projections'
  }, {
    id: 'ask',
    title: 'The Ask'
  }, {
    id: 'timeline',
    title: 'Timeline'
  }, {
    id: 'cta',
    title: 'Final CTA'
  }];

  // Handle slide navigation
  const scrollToSlide = (index: number) => {
    if (slideRefs.current[index]) {
      slideRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Track current slide based on scroll position
  useEffect(() => {
    const slideViewTimes = new Map<number, number>();
    let lastSlide = 0;
    let slideStartTime = Date.now();
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      slideRefs.current.forEach((ref, index) => {
        if (ref) {
          const {
            offsetTop,
            offsetHeight
          } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Track slide change
            if (index !== lastSlide) {
              // Record time spent on previous slide
              const timeSpent = Date.now() - slideStartTime;
              const previousTime = slideViewTimes.get(lastSlide) || 0;
              slideViewTimes.set(lastSlide, previousTime + timeSpent);

              // Log analytics (in production, send to analytics service)
              console.log(`Slide ${slides[lastSlide].title}: ${Math.round(timeSpent / 1000)}s`);

              // Update current slide
              lastSlide = index;
              slideStartTime = Date.now();

              // Track slide view
              console.log(`Viewing slide: ${slides[index].title}`);
            }
            setCurrentSlide(index);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial position

    // Clean up and log final analytics on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);

      // Log total time on current slide
      const timeSpent = Date.now() - slideStartTime;
      const previousTime = slideViewTimes.get(lastSlide) || 0;
      slideViewTimes.set(lastSlide, previousTime + timeSpent);

      // Log session summary
      console.log('Pitch Deck Session Summary:');
      slideViewTimes.forEach((time, slideIndex) => {
        if (time > 0) {
          console.log(`- ${slides[slideIndex].title}: ${Math.round(time / 1000)}s`);
        }
      });
    };
  }, [slides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (currentSlide < slides.length - 1) {
            scrollToSlide(currentSlide + 1);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentSlide > 0) {
            scrollToSlide(currentSlide - 1);
          }
          break;
        case 'Home':
          e.preventDefault();
          scrollToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSlide(slides.length - 1);
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  // Touch gesture support for mobile
  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipeGesture();
    };
    const handleSwipeGesture = () => {
      const swipeThreshold = 50;
      if (touchStartY - touchEndY > swipeThreshold) {
        // Swipe up - go to next slide
        if (currentSlide < slides.length - 1) {
          scrollToSlide(currentSlide + 1);
        }
      }
      if (touchEndY - touchStartY > swipeThreshold) {
        // Swipe down - go to previous slide
        if (currentSlide > 0) {
          scrollToSlide(currentSlide - 1);
        }
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, {
        passive: true
      });
      container.addEventListener('touchend', handleTouchEnd, {
        passive: true
      });
    }
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentSlide, slides.length, scrollToSlide]);

  // Handle PDF download
  const handleDownloadPDF = () => {
    // For now, we'll just show an alert. In a real implementation,
    // you would use a library like jsPDF or react-to-pdf
    window.print();
  };

  // Metric data
  const heroMetrics = [{
    value: '72%',
    label: 'Cleveland ROI'
  }, {
    value: '$80K',
    label: 'Avg Profit/Flip'
  }, {
    value: '3X',
    label: 'Tax Multiplier'
  }];
  const companyMetrics = [{
    value: '$3.5M',
    label: 'ARV Achieved',
    subtext: 'From $900K invested'
  }, {
    value: '100+',
    label: 'Properties Managed',
    subtext: 'Institutional experience'
  }, {
    value: '20+',
    label: 'Years Combined',
    subtext: 'Market cycles mastered'
  }, {
    value: '5',
    label: 'Active Projects',
    subtext: 'Currently executing'
  }];
  const teamMembers = [{
    role: 'The Visionary',
    name: 'President | Pro Athlete',
    bio: ['NFL & NHL professional career', 'Direct athlete investor network', 'Strategic capital partnerships', 'Opens doors others can\'t']
  }, {
    role: 'The Builder',
    name: 'Juan Del Sol | CREO',
    bio: ['Licensed Florida contractor', 'Deep subcontractor network', 'Cost control expertise', 'Quality & speed guaranteed']
  }, {
    role: 'The Brain',
    name: 'Jon Paz | Underwriting',
    bio: ['20+ years underwriting', '100+ property portfolio', 'AI-enhanced analysis', 'Spots winners others miss']
  }, {
    role: 'The Executor',
    name: 'Rob | COO',
    bio: ['6 personal properties', '$900K → $3.5M ARV achieved', 'Operations optimization', 'Makes it happen daily']
  }];
  return <div ref={containerRef} className="min-h-screen bg-gray-900 relative">
      {/* Slide Navigation Dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <ul className="space-y-3">
          {slides.map((slide, index) => <li key={slide.id}>
              <button onClick={() => scrollToSlide(index)} className={cn("group relative flex items-center justify-end", "transition-all duration-300")} aria-label={`Go to ${slide.title}`}>
                <span className={cn("absolute right-8 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap", "opacity-0 group-hover:opacity-100 transition-opacity duration-200", "bg-gray-800 text-white shadow-lg", currentSlide === index && "opacity-100")}>
                  {slide.title}
                </span>
                <span className={cn("block w-3 h-3 rounded-full transition-all duration-300", currentSlide === index ? "bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50" : "bg-gray-600 hover:bg-gray-400")} />
              </button>
            </li>)}
        </ul>
      </nav>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800">
        <div className="h-full bg-gradient-to-r from-yellow-400 to-green-400 transition-all duration-300" style={{
        width: `${(currentSlide + 1) / slides.length * 100}%`
      }} />
      </div>

      {/* Mobile Slide Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <div className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm text-gray-400">Slide</span>
          <span className="text-sm font-bold text-yellow-400">{currentSlide + 1}</span>
          <span className="text-sm text-gray-400">of {slides.length}</span>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button onClick={handleDownloadPDF} className="group relative bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" aria-label="Download PDF">
          <Download className="w-6 h-6" />
          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Download PDF
          </span>
        </button>
      </div>
      {/* Slide 1: Hero */}
      <section ref={el => slideRefs.current[0] = el} className="min-h-screen relative flex items-center justify-center px-8 md:px-16 overflow-hidden snap-start">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-green-400/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        <AnimatedSection animation="fade-up" className="relative z-10 text-center max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
            The $3.5M Question
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12">
            How do you turn $500K into $3.5M in 36 months?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {heroMetrics.map((metric, index) => <AnimatedSection key={index} delay={100 * (index + 1)} animation="fade-up-scale">
                <Card className="bg-gradient-to-br from-yellow-400/10 to-green-400/10 border-yellow-400/20 p-8 hover:scale-105 transition-transform bg-slate-900">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-300 text-lg">{metric.label}</div>
                </Card>
              </AnimatedSection>)}
          </div>

          <AnimatedSection delay={400}>
            <a href="#problem" className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25 group">
              Discover The Hybrid Model
              <ChevronRight className="w-5 h-5 rotate-90 group-hover:translate-y-1 transition-transform" />
            </a>
          </AnimatedSection>
        </AnimatedSection>
      </section>

      {/* Slide 2: The Problem */}
      <section id="problem" ref={el => slideRefs.current[1] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center">
              Every Investor Faces The Same Dilemma
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={100} animation="slide-right">
              <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/30 p-8 h-full hover:border-red-400/50 transition-colors bg-slate-800">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">The Cash Flow Hunter</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Wants money NOW, not in 5 years</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Needs quarterly distributions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Seeks 10%+ returns but pays full taxes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Misses massive depreciation benefits</span>
                  </li>
                </ul>
                <p className="mt-8 text-xl text-red-400 font-semibold">
                  Result: 37% goes to Uncle Sam
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="slide-left">
              <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/30 p-8 h-full hover:border-red-400/50 transition-colors bg-slate-800">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">The Tax Strategist</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>High W-2 income bleeding to taxes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Wants depreciation write-offs</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Willing to wait for returns</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Cash tied up for years</span>
                  </li>
                </ul>
                <p className="mt-8 text-xl text-red-400 font-semibold">
                  Result: Great on paper, poor liquidity
                </p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center">
              <h2 className="text-3xl font-bold text-red-400 mb-4">Traditional Funds Force You To Choose</h2>
              <p className="text-xl text-gray-300">What if you didn't have to?</p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 3: The Solution */}
      <section ref={el => slideRefs.current[2] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-center">
              Introducing The Hybrid Advantage
            </h1>
            <p className="text-2xl text-gray-300 mb-12 text-center">
              One fund. Two strategies. Unlimited possibilities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection delay={100} animation="slide-right">
              <Card className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border-yellow-400/30 p-8 h-full hover:border-yellow-400/50 transition-colors bg-slate-600">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                  Lightning Strategy
                </h2>
                <h3 className="text-xl text-gray-200 mb-6">Fix & Flip for Cash Flow</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>90-day turnarounds</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>$100K target profit per project</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Quarterly cash distributions</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>50/50 profit split</span>
                  </li>
                </ul>
                <div className="mt-8 text-center p-6 bg-yellow-400/10 rounded-lg">
                  <div className="text-4xl font-bold text-yellow-400">31%</div>
                  <div className="text-gray-300">Annualized Returns</div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="slide-left">
              <Card className="bg-gradient-to-br from-green-400/10 to-green-500/10 border-green-400/30 p-8 h-full hover:border-green-400/50 transition-colors bg-slate-600">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-2">
                  Fortress Strategy
                </h2>
                <h3 className="text-xl text-gray-200 mb-6">Buy & Hold for Tax Benefits</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>8% preferred return</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>40% bonus depreciation (2025)</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>3X tax benefit multiplier</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Long-term appreciation</span>
                  </li>
                </ul>
                <div className="mt-8 text-center p-6 bg-green-400/10 rounded-lg">
                  <div className="text-4xl font-bold text-green-400">26%+</div>
                  <div className="text-gray-300">After-Tax Returns</div>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <Card className="mt-12 bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-white/20 p-12 text-center bg-slate-900">
              <h2 className="text-3xl font-bold text-white mb-4">Deploy Capital Based on YOUR Goals</h2>
              <p className="text-xl text-gray-300">Not what the market dictates</p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 4: Market Opportunity */}
      <section ref={el => slideRefs.current[3] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-center">
              The Perfect Storm Is Brewing
            </h1>
            <p className="text-2xl text-gray-300 mb-12 text-center">
              Smart money is moving. Here's why.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={100} animation="slide-right">
              <Card className="bg-gradient-to-br from-red-500/20 to-red-600/10 border-red-500/50 p-8 h-full bg-slate-600">
                <h2 className="text-2xl font-bold text-white mb-6">South Florida Reality Check</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Inventory Explosion</span>
                    <span className="text-xl font-bold text-red-400">+46% YoY</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Days on Market</span>
                    <span className="text-xl font-bold text-red-400">85 days</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Price Direction</span>
                    <span className="text-xl font-bold text-red-400">-7% falling</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Median Price</span>
                    <span className="text-xl font-bold text-red-400">$413,000</span>
                  </div>
                </div>
                <p className="mt-8 text-center text-xl text-red-400 font-semibold">
                  ⚠️ Cooling Fast
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="slide-left">
              <Card className="bg-gradient-to-br from-green-400/20 to-green-500/10 border-green-400/50 p-8 h-full bg-slate-600">
                <h2 className="text-2xl font-bold text-white mb-6">Cleveland Gold Rush</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">2024 Flip ROI</span>
                    <span className="text-xl font-bold text-green-400">72% returns</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Entry Point</span>
                    <span className="text-xl font-bold text-green-400">$127,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Cash Buyers</span>
                    <span className="text-xl font-bold text-green-400">77.4%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Rent Growth</span>
                    <span className="text-xl font-bold text-green-400">3% annual</span>
                  </div>
                </div>
                <p className="mt-8 text-center text-xl text-green-400 font-semibold">
                  🚀 Prime Time
                </p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                3X Lower Entry + 2X Higher Returns = Your Advantage
              </h2>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 5: The Numbers */}
      <section ref={el => slideRefs.current[4] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center">
              Real Deals. Real Returns.
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection delay={100} animation="slide-right">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">Lightning Deal Example</h2>
                <h3 className="text-lg text-gray-200 mb-6">Cleveland Fix & Flip</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-200">Purchase</span>
                    <span className="text-lg font-semibold text-white">$120,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-200">Renovation</span>
                    <span className="text-lg font-semibold text-white">$40,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-gray-200">Total In</span>
                    <span className="text-lg font-bold text-yellow-400">$160,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-200">Sale Price</span>
                    <span className="text-lg font-bold text-green-400">$260,000</span>
                  </div>
                </div>
                <div className="bg-yellow-400/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400">$50K</div>
                  <div className="text-gray-200">Your Profit Share in 4 Months</div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="slide-left">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-2">Fortress Deal Example</h2>
                <h3 className="text-lg text-gray-200 mb-6">Buy & Hold Tax Play</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-200">Purchase + Reno</span>
                    <span className="text-lg font-semibold text-white">$180,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-200">Monthly Rent</span>
                    <span className="text-lg font-semibold text-white">$1,800</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-200">Cash Flow</span>
                    <span className="text-lg font-bold text-green-400">$600/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-200">Year 1 Depreciation</span>
                    <span className="text-lg font-bold text-green-400">$72,000</span>
                  </div>
                </div>
                <div className="bg-green-400/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-400">$26K+</div>
                  <div className="text-gray-200">Tax Savings @ 37% Bracket</div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Slide 6: Traction */}
      <section ref={el => slideRefs.current[5] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center">
              We Don't Just Talk. We Execute.
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {companyMetrics.map((metric, index) => <AnimatedSection key={index} delay={100 * (index + 1)} animation="fade-up-scale">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center hover:border-yellow-400/50 transition-colors">
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-300 font-medium mb-2">{metric.label}</div>
                  <p className="text-sm text-gray-400">{metric.subtext}</p>
                </Card>
              </AnimatedSection>)}
          </div>

          <AnimatedSection delay={500}>
            <Card className="bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-white/20 p-12 text-center bg-slate-800">
              <h2 className="text-3xl font-bold text-white mb-4">Starting Fresh To Scale Fast</h2>
              <p className="text-xl text-gray-400">New entity. Proven team. Institutional approach.</p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 7: Competitive Edge */}
      <section ref={el => slideRefs.current[6] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center">
              Why We Win When Others Struggle
            </h1>
          </AnimatedSection>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection delay={100} animation="fade-up">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🤖</div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">AI-Powered Edge</h3>
                    <p className="text-gray-200">
                      Our underwriter leverages cutting-edge AI to analyze deals 10x faster with 3x more accuracy than traditional methods.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} animation="fade-up">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">Athlete Network</h3>
                    <p className="text-gray-200">
                      Direct access to NFL/NHL player capital and their trusted advisor networks. Money and deals flow to us.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300} animation="fade-up">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔨</div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">In-House Execution</h3>
                    <p className="text-gray-200">
                      Licensed contractor on the team means controlled costs, faster timelines, and quality guarantees.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400} animation="fade-up">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">Market Agility</h3>
                    <p className="text-gray-200">
                      While others are stuck in one market, we pivot between strategies and geographies for maximum returns.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </Card>

          <AnimatedSection delay={500}>
            <h2 className="text-3xl font-bold text-center mt-12 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Traditional Funds Pick One Lane. We Own The Highway.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 8: Team */}
      <section ref={el => slideRefs.current[7] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-center">
              The A-Team Behind Your Returns
            </h1>
            <p className="text-2xl text-gray-300 mb-12 text-center">
              Experience meets innovation. Results follow.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => <AnimatedSection key={index} delay={100 * (index + 1)} animation="fade-up-scale">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="text-lg font-bold text-yellow-400 mb-1">{member.role}</div>
                  <div className="text-sm text-green-400 mb-4">{member.name}</div>
                  <ul className="space-y-2">
                    {member.bio.map((item, i) => <li key={i} className="text-gray-200 text-sm flex items-start">
                        <ArrowRight className="w-3 h-3 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Card>
              </AnimatedSection>)}
          </div>

          <AnimatedSection delay={500}>
            <Card className="mt-12 bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-white/20 p-8 text-center bg-slate-600">
              <p className="text-xl mb-4">Combined, we've seen every market cycle, every deal type, every challenge.</p>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Now We're Building Something Bigger.
              </h2>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 9: Growth Strategy */}
      <section ref={el => slideRefs.current[8] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center">
              From $500K to $5M: The Roadmap
            </h1>
          </AnimatedSection>

          {/* Growth Chart */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-white mb-8">36-Month Growth Trajectory</h2>
            <div className="flex items-end justify-around h-64 px-4">
              {[{
              label: 'Start',
              value: '$500K',
              height: '30%'
            }, {
              label: 'Year 1',
              value: '$1.2M',
              height: '50%'
            }, {
              label: 'Year 2',
              value: '$2.8M',
              height: '75%'
            }, {
              label: 'Year 3',
              value: '$5M+',
              height: '100%'
            }].map((bar, index) => <AnimatedSection key={index} delay={100 * (index + 1)} animation="fade-up">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <div className="text-lg font-bold text-yellow-400 mb-2">{bar.value}</div>
                      <div className="w-20 bg-gradient-to-t from-yellow-400 to-green-400 rounded-t-lg" style={{
                    height: `${parseInt(bar.height) * 2}px`
                  }}></div>
                    </div>
                    <div className="text-gray-200 text-sm">{bar.label}</div>
                  </div>
                </AnimatedSection>)}
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection delay={500} animation="slide-right">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">Phase 1: Launch</h2>
                <h3 className="text-lg text-gray-200 mb-4">Months 1-6</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Deploy initial $500K</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Complete 3-5 flips</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Acquire 2-3 rentals</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>First investor distributions</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Prove the model</span>
                  </li>
                </ul>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={600} animation="slide-left">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-2">Phase 2: Scale</h2>
                <h3 className="text-lg text-gray-200 mb-4">Months 7-18</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Raise additional $500K-$1M</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>10+ simultaneous projects</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>8-10 unit rental portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Launch investor portal</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Expand team</span>
                  </li>
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Slide 10: Financial Projections */}
      <section ref={el => slideRefs.current[9] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-center">
              The Numbers Don't Lie
            </h1>
            <p className="text-2xl text-gray-300 mb-12 text-center">
              Conservative projections. Explosive potential.
            </p>
          </AnimatedSection>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Year 1 Projections ($500K Capital)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedSection delay={100} animation="slide-right">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">Lightning Returns (Fix & Flip)</h3>
                  <Card className="bg-yellow-400/10 border-yellow-400/30 p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200">Projects Completed</span>
                        <span className="text-xl font-semibold text-white">5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200">Avg Profit/Project</span>
                        <span className="text-xl font-semibold text-white">$100K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200">Total Profits</span>
                        <span className="text-xl font-bold text-green-400">$500K</span>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <span className="text-gray-200">Investor Share (50%)</span>
                        <span className="text-2xl font-bold text-yellow-400">$250K</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} animation="slide-left">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Fortress Returns (Buy & Hold)</h3>
                  <Card className="bg-green-400/10 border-green-400/30 p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200">Properties Acquired</span>
                        <span className="text-xl font-semibold text-white">3</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200">Annual Cash Flow</span>
                        <span className="text-xl font-semibold text-white">$21,600</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200">Depreciation Benefits</span>
                        <span className="text-xl font-bold text-green-400">$216K</span>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <span className="text-gray-200">Tax Savings (37%)</span>
                        <span className="text-2xl font-bold text-green-400">$79,920</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={300}>
              <Card className="mt-12 bg-gradient-to-r from-yellow-400/20 to-green-400/20 border-white/30 p-8 text-center bg-slate-900">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-2">
                  Year 1 Total Investor Value: $351,520
                </h2>
                <p className="text-2xl text-yellow-400 font-semibold">
                  70% Return on $500K Investment
                </p>
              </Card>
            </AnimatedSection>
          </Card>
        </div>
      </section>

      {/* Slide 11: The Ask */}
      <section ref={el => slideRefs.current[10] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center">
              Your Invitation to Build Wealth
            </h1>
          </AnimatedSection>

          <Card className="bg-gradient-to-br from-yellow-400/20 to-green-400/20 border-white/30 p-12 bg-slate-600">
            <h2 className="text-4xl font-bold text-center text-white mb-8">
              Seeking Strategic Partners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection delay={100} animation="fade-up-scale">
                <Card className="bg-white/10 border-white/20 p-8 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$100K</div>
                  <div className="text-gray-200">Minimum Investment</div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={200} animation="fade-up-scale">
                <Card className="bg-white/10 border-white/20 p-8 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$500K</div>
                  <div className="text-gray-200">Sweet Spot</div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={300} animation="fade-up-scale">
                <Card className="bg-white/10 border-white/20 p-8 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$1M</div>
                  <div className="text-gray-200">Maximum Round</div>
                </Card>
              </AnimatedSection>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                What Your Investment Unlocks
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AnimatedSection delay={400} animation="slide-right">
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Immediate Benefits</h3>
                    <ul className="space-y-3 text-gray-200">
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Quarterly distributions available</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Tax optimization strategies</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Professional management</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Full transparency reporting</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={500} animation="slide-left">
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">Long-Term Value</h3>
                    <ul className="space-y-3 text-gray-200">
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Portfolio appreciation</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Compound growth potential</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span>First access to future deals</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Co-investment opportunities</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </Card>

            <AnimatedSection delay={600}>
              <div className="text-center mt-12">
                <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-black font-bold px-12 py-5 rounded-full text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25 group">
                  Schedule Your Private Discussion
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </Card>
        </div>
      </section>

      {/* Slide 12: Timeline */}
      <section ref={el => slideRefs.current[11] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center">
              Time Is Money. Let's Make Both.
            </h1>
          </AnimatedSection>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Your Journey to Returns
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-green-400"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                <AnimatedSection delay={100} animation="fade-up">
                  <div className="flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <h3 className="text-xl font-bold text-yellow-400">Day 1</h3>
                      <p className="text-gray-200">Capital deployed, first acquisition</p>
                    </div>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full relative z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200} animation="fade-up">
                  <div className="flex items-center">
                    <div className="flex-1"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full relative z-10"></div>
                    <div className="flex-1 pl-8">
                      <h3 className="text-xl font-bold text-yellow-500">Day 30</h3>
                      <p className="text-gray-200">Renovations underway on 2-3 properties</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={300} animation="fade-up">
                  <div className="flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <h3 className="text-xl font-bold text-green-400">Day 90</h3>
                      <p className="text-gray-200">First flip hits market</p>
                    </div>
                    <div className="w-8 h-8 bg-green-400 rounded-full relative z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={400} animation="fade-up">
                  <div className="flex items-center">
                    <div className="flex-1"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full relative z-10"></div>
                    <div className="flex-1 pl-8">
                      <h3 className="text-2xl font-bold text-green-400">Day 120</h3>
                      <p className="text-yellow-400 text-lg font-semibold">First investor distributions</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </Card>

          <AnimatedSection delay={500}>
            <h2 className="text-3xl font-bold text-center mt-12 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Every Day We Wait Is Money Left on the Table
            </h2>
            <p className="text-xl text-center text-gray-300 mt-4">
              The market is moving. Are you?
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Slide 13: Final CTA */}
      <section ref={el => slideRefs.current[12] = el} className="min-h-screen flex items-center justify-center px-8 md:px-16 snap-start">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2">
              One Decision.
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Unlimited Potential.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="my-16">
              <p className="text-2xl text-gray-300 mb-8">While others choose between:</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xl">
                <span className="text-gray-200">Cash Flow <span className="text-red-400 font-bold">OR</span> Tax Benefits</span>
                <span className="text-gray-200">Florida <span className="text-red-400 font-bold">OR</span> Cleveland</span>
                <span className="text-gray-200">Quick Returns <span className="text-red-400 font-bold">OR</span> Long-Term Growth</span>
              </div>
              <h2 className="text-4xl font-bold mt-12 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                You Get It All.
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border-yellow-400/30 p-8 text-center hover:border-yellow-400/50 transition-colors">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Real Cash Flow</h3>
                <p className="text-gray-300">Not paper profits</p>
              </Card>
              <Card className="bg-gradient-to-br from-green-400/10 to-green-500/10 border-green-400/30 p-8 text-center hover:border-green-400/50 transition-colors">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Tax Protection</h3>
                <p className="text-gray-300">Keep what you earn</p>
              </Card>
              <Card className="bg-gradient-to-br from-purple-400/10 to-purple-500/10 border-purple-400/30 p-8 text-center hover:border-purple-400/50 transition-colors">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Growth Engine</h3>
                <p className="text-gray-300">Scale exponentially</p>
              </Card>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Limited Partners. Unlimited Returns.
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                This isn't just an investment. It's your entry into a new way of building wealth.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-black font-bold px-16 py-6 rounded-full text-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25 group">
                Claim Your Position
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-400 text-sm mt-12 max-w-3xl mx-auto">
              Investment opportunities involve risk. Past performance does not guarantee future results.
              Available to accredited investors only. Securities offered through [Broker-Dealer].
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>;
};
export default PitchDeck;