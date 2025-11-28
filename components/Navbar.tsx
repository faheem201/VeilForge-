import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, Flame, Disc } from 'lucide-react';
import { VeilLogo } from './VeilLogo';

interface NavbarProps {
  currentView: ViewState;
  onNavClick: (view: ViewState) => void;
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavClick, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
    isScrolled 
      ? 'bg-veil-dark/95 backdrop-blur-md border-veil-primary/20 py-4 shadow-lg shadow-veil-primary/5' 
      : 'bg-transparent border-transparent py-6'
  }`;

  const linkClasses = (isActive: boolean) => `
    relative text-sm font-display font-bold tracking-widest uppercase transition-colors duration-300
    ${isActive ? 'text-veil-primary' : 'text-veil-muted hover:text-white'}
    hover:before:w-full before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-veil-primary before:transition-all before:duration-300
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavClick('HOME')}
        >
          <div className="relative w-10 h-10">
            {/* Red Glow behind logo */}
            <div className="absolute inset-0 bg-veil-primary/20 blur-md rounded-full group-hover:bg-veil-primary/40 transition-colors"></div>
            <div className="relative z-10">
               <VeilLogo />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-display font-bold text-white tracking-widest">
              VEIL<span className="text-veil-primary">FORGE</span>
            </span>
            <div className="h-0.5 w-full bg-gradient-to-r from-veil-primary via-veil-accent to-transparent"></div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavClick('HOME')}
            className={linkClasses(currentView === 'HOME')}
          >
            Home
          </button>
          <button 
            onClick={() => onNavClick('SERVER')}
            className={linkClasses(currentView === 'SERVER')}
          >
            Server IP
          </button>
          <button 
            onClick={() => onNavClick('LORE')}
            className={linkClasses(currentView === 'LORE')}
          >
            The Veil
          </button>
          
          <div className="h-6 w-px bg-slate-800 mx-2"></div>

          <a 
            href="https://discord.gg/3EH9DRqZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-veil-muted hover:text-[#5865F2] transition-colors font-display font-bold text-sm uppercase tracking-wide"
          >
            <Disc className="w-5 h-5" />
            Discord
          </a>

          <button className="px-6 py-2 bg-gradient-to-r from-veil-primary/20 to-transparent border-l-2 border-veil-primary text-white font-display font-bold uppercase tracking-wider hover:bg-veil-primary/30 transition-all duration-300">
            Join The Forge
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-veil-dark border-b border-veil-primary/20 p-6 flex flex-col gap-6 shadow-xl z-50">
           <button 
            onClick={() => { onNavClick('HOME'); setMobileMenuOpen(false); }}
            className={`text-left ${linkClasses(currentView === 'HOME')}`}
          >
            Home
          </button>
          <button 
            onClick={() => { onNavClick('SERVER'); setMobileMenuOpen(false); }}
            className={`text-left ${linkClasses(currentView === 'SERVER')}`}
          >
            Server IP
          </button>
          <button 
            onClick={() => { onNavClick('LORE'); setMobileMenuOpen(false); }}
            className={`text-left ${linkClasses(currentView === 'LORE')}`}
          >
            The Veil
          </button>
          <a 
            href="https://discord.gg/3EH9DRqZ" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-veil-muted hover:text-[#5865F2]"
          >
            <Disc className="w-5 h-5" /> Discord
          </a>
          <button className="w-full py-3 bg-veil-primary text-white font-display font-bold uppercase">
            Join The Forge
          </button>
        </div>
      )}
    </nav>
  );
};