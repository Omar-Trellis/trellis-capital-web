
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { TrellisLogo } from './TrellisLogo';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/investors', label: 'For Investors' },
    { path: '/sellers', label: 'For Sellers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-green-400/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/investors" className="flex items-center space-x-3 text-xl font-bold text-gray-900 hover:text-yellow-600 transition-colors duration-300 group">
            <TrellisLogo className="group-hover:scale-110 transition-transform duration-300" />
            <span>Trellis Capital Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.path) 
                    ? 'text-yellow-600 bg-yellow-400/10 shadow-lg shadow-yellow-400/20' 
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Gold glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm scale-110"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Active indicator */}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg shadow-yellow-400/50"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-white/10 transition-all duration-300 hover:text-yellow-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with backdrop */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-40">
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <div className={`absolute top-0 right-0 w-64 h-full bg-white/15 backdrop-blur-xl border-l border-white/20 shadow-2xl transition-all duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5"></div>
              <div className="relative px-6 py-8 space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`block px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 min-h-[44px] ${
                      isActive(item.path)
                        ? 'text-yellow-600 bg-yellow-400/20 border border-yellow-400/30 shadow-lg'
                        : 'text-gray-700 hover:text-yellow-600 hover:bg-white/10'
                    }`}
                    style={{ 
                      transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                      transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
