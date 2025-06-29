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
- `/src/pages/` - Route components (Investors, Sellers, Contact, NotFound)
- `/src/components/` - Reusable components and UI library
- `/src/hooks/` - Custom React hooks (useParallax, useIntersectionObserver, etc.)
- `/src/lib/` - Utility functions
- Default route redirects to `/investors`

### Key Patterns
1. **Component Architecture**: Modular components with shadcn/ui as the base UI library
2. **Path Aliases**: Use `@/` for imports (maps to `./src/`)
3. **TypeScript**: Relaxed type checking enabled (noImplicitAny: false)
4. **Styling**: Tailwind with CSS variables for theming, Montserrat as primary font
5. **Animations**: Custom Tailwind animations (fade-in, fade-up, slide-left, slide-right, scale-in, glow)

### Development Notes
- Hot Module Replacement (HMR) enabled via Vite
- Lovable tagger active in development mode for component tracking
- No test framework currently configured
- Originally created with Lovable.dev visual development platform