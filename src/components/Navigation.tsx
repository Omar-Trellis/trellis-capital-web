import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { TrellisLogo } from './TrellisLogo';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/investors', label: 'For Investors' },
    { path: '/sellers', label: 'For Sellers' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background effect
      setIsScrolled(currentScrollY > 20);
      
      // Mobile collapsible behavior
      if (window.innerWidth < 768) { // Only on mobile (md breakpoint)
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
          setIsOpen(false); // Close mobile menu when hiding
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        }
        
        // Always show at the very top
        if (currentScrollY < 10) {
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      // Always show navigation when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white'
      } ${
        isVisible 
          ? 'translate-y-0' 
          : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
          >
            <TrellisLogo 
              variant="light" 
              size="xl" 
              className="mr-3" 
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-tight">
                Trellis Capital
              </span>
              <span className="text-sm font-medium text-gray-600 -mt-1">
                Investment Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 relative py-2 ${
                  isActive(item.path) 
                    ? 'text-yellow-600' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
