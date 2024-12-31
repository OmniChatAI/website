import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => navigate('/features')}
                className={`${isActive('/features') ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}
              >
                Features
              </button>
              <button
                onClick={() => navigate('/models')}
                className={`${isActive('/models') ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}
              >
                Models
              </button>
              <button
                onClick={() => navigate('/setup')}
                className={`${isActive('/setup') ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}
              >
                Setup
              </button>
              <button
                onClick={() => navigate('/pricing')}
                className={`${isActive('/pricing') ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}
              >
                Pricing
              </button>
              <button
                onClick={() => navigate('/blog')}
                className={`${isActive('/blog') ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}
              >
                Blog
              </button>
              <button
                onClick={() => navigate('/team')}
                className={`${isActive('/team') ? 'text-white font-semibold' : 'text-white/70'} hover:text-white transition-colors`}
              >
                Team
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => navigate('/signin')}
              className="border border-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-full transition-colors text-blue-400"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 