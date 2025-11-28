import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LoreViewProps {
  onBackHome: () => void;
}

export const LoreView: React.FC<LoreViewProps> = ({ onBackHome }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const paragraphs = containerRef.current?.querySelectorAll('.lore-reveal');
    paragraphs?.forEach(p => observer.observe(p));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative pb-32">
       {/* Background noise/texture */}
       <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <svg className="w-full h-full filter contrast-150 brightness-50">
           <filter id="noise">
             <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
           </filter>
           <rect width="100%" height="100%" filter="url(#noise)" />
         </svg>
       </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 pt-12">
        <button 
          onClick={onBackHome}
          className="flex items-center gap-2 text-veil-silver hover:text-veil-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Entrance
        </button>

        <div ref={containerRef} className="space-y-16">
          
          <div className="lore-reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out border-l-2 border-veil-primary pl-6 py-2">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 uppercase tracking-widest">
              The Legend
            </h1>
            <p className="text-veil-primary font-mono text-sm tracking-widest">ORIGIN_FILE_01 // THE_VEIL</p>
          </div>

          <div className="lore-reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100 text-lg md:text-xl text-veil-silver leading-relaxed font-light">
            <p>
              In the vast digital realms where worlds rise and fall, there existed a boundary known only as <span className="text-white font-semibold">The Veil</span> — a shimmering divide between the ordinary and the extraordinary.
            </p>
          </div>

          <div className="lore-reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out text-lg md:text-xl text-veil-silver leading-relaxed font-light">
             <p className="mb-6">
              From the fires beneath that Veil emerged the Forge, a place where warriors, creators, and adventurers shaped their destiny. It was not built by hands, but by will.
             </p>
             <p className="italic text-slate-500 border-l border-slate-700 pl-4">
              VeilForge was born from this legend: A sanctuary for gamers who believe power comes not just from skill, but from unity.
             </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-veil-primary/50 to-transparent lore-reveal opacity-0"></div>

          <div className="lore-reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-veil-silver leading-relaxed">
              <h3 className="text-2xl font-display font-bold text-white mb-4">The Transformation</h3>
              <p>
                Here, every player can take raw potential and forge it into greatness. VeilForge represents a journey from player to <span className="text-veil-accent font-bold">Champion</span>. The mystery of the Veil calls to you.
              </p>
            </div>
            <div className="bg-slate-900/50 p-6 border border-slate-800 rounded-lg relative overflow-hidden group">
               <div className="absolute inset-0 bg-veil-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               <p className="relative z-10 font-mono text-sm text-veil-primary">
                 > SYNCING...<br/>
                 > STATUS: CHAMPION RISING<br/>
                 > WELCOME TO THE FORGE
               </p>
            </div>
          </div>

          <div className="lore-reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out bg-veil-dark border border-slate-800 p-8 md:p-12 text-center rounded-xl shadow-2xl shadow-black">
             <h3 className="text-xl font-display font-bold text-veil-accent mb-6 uppercase tracking-widest flex items-center justify-center gap-3">
               <span className="w-2 h-2 bg-veil-accent rounded-full animate-pulse"></span>
               Join The Order
               <span className="w-2 h-2 bg-veil-accent rounded-full animate-pulse"></span>
             </h3>
             <p className="text-white text-lg font-semibold mb-8">
               Mystery. Strength. Creation.
             </p>
             <div className="inline-block px-6 py-3 border border-veil-primary text-veil-primary font-display font-bold uppercase tracking-widest">
               You are the Spark
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};