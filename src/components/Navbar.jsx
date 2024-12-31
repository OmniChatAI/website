import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/features', label: 'Features' },
    { path: '/models', label: 'Models' },
    { path: '/setup', label: 'Setup' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
  ];

  const NavButton = ({ path, label }) => (
    <button
      onClick={() => {
        navigate(path);
        setIsMenuOpen(false);
      }}
      className={`${
        isActive(path) ? 'text-white font-semibold' : 'text-white/70'
      } hover:text-white transition-colors`}
    >
      {label}
    </button>
  );

  return (
    <nav className="z-50 w-full fixed top-0 left-0 bg-[#0B1120] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Zap className="w-8 h-8 mr-2 text-yellow-400" />
            <h1 className="text-2xl font-bold text-white">OmniChat</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-16">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <NavButton key={item.path} {...item} />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavButton key={item.path} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 