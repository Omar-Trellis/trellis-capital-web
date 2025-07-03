# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server on port 8080
npm run build        # Create production build
npm run build:dev    # Create development build  
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Setup
```bash
npm install          # Install all dependencies
```

## Architecture Overview

This is a React SPA for Trellis Capital Group built with Vite, TypeScript, and Tailwind CSS. The application serves real estate investors and sellers.

### Tech Stack
- **Build Tool**: Vite 5.4 with React SWC plugin
- **Framework**: React 18.3 with TypeScript
- **Routing**: React Router v6 (client-side)
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (50+ pre-built components in `src/components/ui/`)
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation

### Project Structure
- `/src/pages/` - Route components (Home, Investors, Sellers, Contact, NotFound)
- `/src/components/` - Reusable components and UI library
- `/src/hooks/` - Custom React hooks (useParallax, useIntersectionObserver, etc.)
- `/src/lib/` - Utility functions
- Default route now displays professional Home page

### Key Patterns
1. **Component Architecture**: Modular components with shadcn/ui as the base UI library
2. **Path Aliases**: Use `@/` for imports (maps to `./src/`)
3. **TypeScript**: Relaxed type checking enabled (noImplicitAny: false)
4. **Styling**: Tailwind with CSS variables for theming, Montserrat as primary font
5. **Animations**: Custom Tailwind animations (fade-in, fade-up, slide-left, slide-right, scale-in, glow)
6. **Professional Design**: Enhanced color scheme with navy blues and bronze accents inspired by premium financial sites

### Development Notes
- Hot Module Replacement (HMR) enabled via Vite
- Lovable tagger active in development mode for component tracking
- No test framework currently configured
- Originally created with Lovable.dev visual development platform

## Recent Updates

### Professional Home Page (2025-01-02)
- Created new Home.tsx as the main landing page with professional design
- Features include:
  - Full-screen hero with parallax background
  - Value proposition section with data-driven approach
  - Dual service overview (Investors & Sellers)
  - Credibility section with animated counters
  - Leadership team preview
  - Professional CTA section
- Updated routing to make Home the default route (/)
- Added Home link to navigation menu
- Enhanced Tailwind config with professional navy and bronze color scheme

### Homepage Polish & Accessibility (2025-01-02)
- **Accessibility Improvements:**
  - Fixed color contrast issues (yellow-400 → yellow-500/600)
  - Removed button/link nesting anti-patterns
  - Added comprehensive ARIA labels and aria-hidden attributes
  - Implemented skip navigation link
  - Added aria-live regions for counter animations
- **Performance Optimizations:**
  - Updated browserslist database
  - Implemented responsive image loading with srcset
  - Added loading state for hero image
  - Reduced motion preference support in AnimatedSection and useParallax
- **Mobile Experience Enhancements:**
  - Used dynamic viewport units (100dvh) for better mobile support
  - Optimized font sizes and spacing for mobile
  - Made CTAs full-width on mobile
  - Improved responsive grid layouts
- **Visual Polish:**
  - Added hover animations (translate-y) on cards
  - Enhanced focus states for keyboard navigation
  - Made scroll indicator interactive
  - Improved loading states and transitions

### Counter Animation Fix (2025-01-02)
- **Fixed looping counter animations** in "Proven Track Record of Success" section
- **OptimizedCounter Component Updates:**
  - Added global WeakMap to track completed animations per instance
  - Prevents re-animation when intersection observer triggers on scroll
  - Maintains final value after animation completes
- **useCountUpAnimation Hook Updates:**
  - Added similar completion tracking mechanism
  - Ensures counters only animate once per page load
- **Both implementations now:**
  - Animate only on first view
  - Display final values immediately if already animated
  - Don't reset when scrolling back to the section