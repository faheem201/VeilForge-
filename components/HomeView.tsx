import React from 'react';
import { ChevronRight, Shield, Zap, Flame } from 'lucide-react';
import { VeilLogo } from './VeilLogo';

interface HomeViewProps {
  onReadLore: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onReadLore }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-veil-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-veil-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: 'linear-gradient(#DC143C 1px, transparent 1px), linear-gradient(90deg, #FF4500 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-veil-bg via-transparent to-veil-bg"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8 animate-float">
             <div className="w-24 h-24 md:w-32 md:h-32 text-white drop-shadow-[0_0_25px_rgba(220,20,60,0.5)]">
               <VeilLogo />
             </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-none">
            FROM THE <span className="text-veil-accent">FIRE</span> <br />
            RISES THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-veil-primary via-veil-silver to-veil-deep drop-shadow-sm">VEIL</span>
          </h1>
          
          <p className="text-lg md:text-xl text-veil-silver max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Welcome to <span className="text-white font-semibold">VeilForge</span>. A sanctuary for gamers who believe power comes not just from skill, but from unity.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onReadLore}
              className="group relative px-8 py-4 bg-veil-primary text-white font-display font-bold text-lg uppercase tracking-wider overflow-hidden transition-transform hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-veil-primary/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enter The Veil <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border border-slate-700 text-veil-silver font-display font-bold text-lg uppercase tracking-wider hover:border-veil-accent hover:text-veil-accent transition-colors bg-veil-dark/50 backdrop-blur-sm">
              View Features
            </button>
          </div>
        </div>
      </section>

      {/* Features / Introduction */}
      <section className="py-24 bg-veil-dark relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-veil-silver" />}
              title="Mystery"
              description="The Veil is a shimmering divide between the ordinary and the extraordinary. What lies beyond is yours to discover."
            />
            <FeatureCard 
              icon={<Flame className="w-10 h-10 text-veil-accent" />}
              title="Creation"
              description="From the fires beneath the Veil emerged the Forge. A place where warriors shape their destiny."
            />
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-veil-primary" />}
              title="Transformation"
              description="VeilForge represents a transformation from player to champion. Take raw potential and forge it into greatness."
            />
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            "Forge Your <span className="text-veil-primary">Destiny</span>"
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-veil-primary to-veil-accent mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 bg-veil-bg border border-slate-800 hover:border-veil-primary/30 transition-colors group">
    <div className="mb-6 p-4 bg-veil-dark inline-block rounded-lg group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-veil-primary/30">
      {icon}
    </div>
    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-veil-primary transition-colors">{title}</h3>
    <p className="text-veil-muted leading-relaxed">
      {description}
    </p>
  </div>
);