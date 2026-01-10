import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import SubLogo from './SubLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'CONTROL', path: '/' },
    { name: "SHIP'S LOG", path: '/about' },
    { name: 'SYSTEMS', path: '/services' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'COMMS', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative w-14 h-14 flex items-center justify-center transition-all duration-300">
                <SubLogo className="w-full h-full drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-cyan-50 text-xl font-bold tracking-wider tech-font">ONE PING</span>
                <span className="text-cyan-400 text-xs tracking-[0.2em] uppercase">Consulting</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`sonar-link px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-all duration-300 border border-transparent hover:border-cyan-500/50 hover:bg-cyan-900/20 hover:text-cyan-300 ${
                    isActive(link.path) ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/50' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition text-sm font-bold shadow-lg shadow-cyan-500/20 sonar-link">
                <Phone className="w-4 h-4" />
                <span>1MC</span>
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-cyan-900/50 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path) ? 'text-cyan-400 bg-cyan-950/50' : 'text-slate-300 hover:text-white hover:bg-cyan-900/20'
                  }`}
              >
                {link.name}
              </Link>
            ))}
             <a href={`tel:${PHONE_NUMBER}`} className="block w-full text-center mt-4 px-4 py-3 bg-cyan-600 text-white font-bold uppercase tracking-wider">
                Call 1MC: {PHONE_NUMBER}
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;