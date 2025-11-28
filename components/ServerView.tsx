import React, { useState } from 'react';
import { Copy, Check, Wifi, Users, Shield, ArrowLeft, Terminal, Gamepad2, Award } from 'lucide-react';

interface ServerViewProps {
  onBackHome: () => void;
}

export const ServerView: React.FC<ServerViewProps> = ({ onBackHome }) => {
  const [copied, setCopied] = useState(false);
  const SERVER_IP = "yar1k.duckdns.org";

  const handleCopy = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative pb-32 flex flex-col items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-veil-primary/5 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      </div>

      <div className="max-w-4xl w-full mx-auto px-6 relative z-10 pt-12">
        <button 
          onClick={onBackHome}
          className="flex items-center gap-2 text-veil-silver hover:text-veil-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Entrance
        </button>

        <div className="text-center mb-16 animate-float">
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight uppercase">
            Join The <span className="text-veil-primary">Forge</span>
          </h1>
          <p className="text-veil-silver text-lg max-w-2xl mx-auto">
            Connect to VeilForge. A community-based survival experience. Pure skill, no pay-to-win.
          </p>
        </div>

        {/* IP Card */}
        <div className="bg-veil-dark/80 backdrop-blur-md border border-veil-primary/30 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(220,20,60,0.1)] mb-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-veil-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-veil-bg rounded-lg border border-slate-700 flex items-center justify-center relative flex-shrink-0">
                <div className="absolute inset-0 bg-veil-primary/10 animate-pulse"></div>
                <Terminal className="w-8 h-8 text-veil-primary relative z-10" />
              </div>
              <div className="text-center md:text-left overflow-hidden">
                <p className="text-sm font-mono text-slate-500 mb-1 uppercase tracking-widest">Server Address</p>
                <div className="text-xl md:text-3xl font-display font-bold text-white tracking-wider font-mono break-all">
                  {SERVER_IP}
                </div>
              </div>
            </div>

            <button 
              onClick={handleCopy}
              className="relative overflow-hidden px-8 py-4 bg-veil-primary hover:bg-veil-accent text-white font-display font-bold text-lg uppercase tracking-wider rounded transition-all active:scale-95 min-w-[160px] flex items-center justify-center gap-2 flex-shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" /> Copy IP
                </>
              )}
            </button>
          </div>
        </div>

        {/* Server Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ServerStatCard 
            icon={<Wifi className="w-6 h-6 text-green-500" />}
            label="Status"
            value="ONLINE"
            subtext="Low Latency"
            active
          />
          <ServerStatCard 
            icon={<Gamepad2 className="w-6 h-6 text-veil-silver" />}
            label="Type"
            value="SMP"
            subtext="Community Survival"
          />
          <ServerStatCard 
            icon={<Shield className="w-6 h-6 text-veil-primary" />}
            label="Version"
            value="1.21.10+"
            subtext="Java Edition"
          />
        </div>

        {/* Features List */}
        <div className="bg-veil-bg border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-wider text-center">Server Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
                <FeatureItem text="VeilForge-themed custom survival world" />
                <FeatureItem text="BDXI Supported & Optimized Performance" />
                <FeatureItem text="Friendly & active community" />
                <FeatureItem text="Events, challenges & weekly updates" />
                <FeatureItem text="No pay-to-win — pure skill & adventure" />
                <FeatureItem text="Self-hosted security" />
            </div>
        </div>

      </div>
    </div>
  );
};

const ServerStatCard = ({ icon, label, value, subtext, active = false }: { icon: React.ReactNode, label: string, value: string, subtext: string, active?: boolean }) => (
  <div className="bg-veil-bg border border-slate-800 p-6 rounded-xl hover:border-veil-primary/40 transition-colors group">
    <div className="flex items-start justify-between mb-4">
      <div className="p-2 bg-veil-dark rounded-lg group-hover:scale-110 transition-transform text-slate-300 group-hover:text-white">
        {icon}
      </div>
      {active && (
        <span className="flex items-center gap-2 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Live
        </span>
      )}
    </div>
    <p className="text-slate-500 font-display text-sm uppercase tracking-widest mb-1">{label}</p>
    <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-veil-primary transition-colors">{value}</h3>
    <p className="text-xs text-slate-600 font-mono">{subtext}</p>
  </div>
);

const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 text-veil-silver">
        <Award className="w-5 h-5 text-veil-accent flex-shrink-0" />
        <span>{text}</span>
    </div>
);