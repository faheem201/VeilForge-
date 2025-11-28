import React from 'react';
import { Github, Twitter, Disc, Mail, Crown } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-veil-bg border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="font-display font-bold text-2xl text-white tracking-widest mb-4">
              VEIL<span className="text-veil-primary">FORGE</span>
            </h4>
            <p className="text-veil-muted text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Where players become champions. The Forge awaits those who seek to shape their destiny.
            </p>
          </div>

          {/* Server Owner Section */}
          <div className="text-center md:text-left">
            <h5 className="font-display font-bold text-white uppercase tracking-wider mb-6 flex items-center justify-center md:justify-start gap-2">
              <Crown className="w-4 h-4 text-veil-primary" />
              Server Owner
            </h5>
            <div className="space-y-2">
              <p className="text-veil-silver font-bold text-lg">Yar1k</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest">Head of Operations</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h5 className="font-display font-bold text-white uppercase tracking-wider mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://discord.gg/3EH9DRqZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-veil-muted hover:text-white group transition-colors"
                >
                  <div className="p-2 bg-veil-dark rounded-lg group-hover:bg-[#5865F2] transition-colors">
                    <Disc className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Discord Support</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@yar1k.duckdns.org" 
                  className="flex items-center justify-center md:justify-start gap-3 text-veil-muted hover:text-white group transition-colors"
                >
                  <div className="p-2 bg-veil-dark rounded-lg group-hover:bg-veil-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Email Inquiries</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} VeilForge Network. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-600 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};