import React from 'react';
import { PERSONAL_INFO, CONTACT_INFO } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playWhoosh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 select-none">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <div className="text-lg font-display font-black text-white tracking-wider">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-xs font-mono text-gray-400">
            {PERSONAL_INFO.role} — {PERSONAL_INFO.company}
          </div>
          <div className="text-[11px] font-mono text-brand-cyan">
            {PERSONAL_INFO.positioning}
          </div>
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover(900)}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-brand-blue/20 border border-white/10 hover:border-brand-cyan/40 text-xs font-mono text-gray-300 hover:text-white transition-all"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 text-brand-cyan" />
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
        <div>
          © {new Date().getFullYear()} SARTHAK SHARMA. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center space-x-2 text-brand-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
          <span>ATTENTION → STRATEGY → EXECUTION → GROWTH</span>
        </div>
      </div>
    </footer>
  );
};
