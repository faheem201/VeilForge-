import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { LoreView } from './components/LoreView';
import { ServerView } from './components/ServerView';
import { Footer } from './components/Footer';
import { ViewState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'SERVER':
        return <ServerView onBackHome={() => handleNavClick('HOME')} />;
      case 'LORE':
        return <LoreView onBackHome={() => handleNavClick('HOME')} />;
      case 'HOME':
      default:
        return <HomeView onReadLore={() => handleNavClick('LORE')} />;
    }
  };

  return (
    <div className="min-h-screen bg-veil-bg text-veil-text selection:bg-veil-primary selection:text-white overflow-x-hidden font-sans">
      <Navbar 
        currentView={currentView} 
        onNavClick={handleNavClick} 
        isScrolled={isScrolled}
      />
      
      <main className="pt-20 min-h-[calc(100vh-80px)]">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}