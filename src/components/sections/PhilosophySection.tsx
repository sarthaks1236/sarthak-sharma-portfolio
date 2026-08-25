import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { Flame, Sparkles } from 'lucide-react';

interface PhilosophySectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onHoverStateChange }) => {
  return (
    <section id="about" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 select-none">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <Flame className="w-4 h-4 text-brand-cyan animate-pulse" />
        <span>PHILOSOPHY / 09</span>
      </div>

      <div className="space-y-4 mb-12">
        <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-gray-400 uppercase">
          GOOD MARKETING IS NOT NOISE.
        </div>

        {/* Cinematic Typographic Sequence */}
        <div className="space-y-1">
          <h2
            className="kinetic-title text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-white uppercase"
            onMouseEnter={() => onHoverStateChange?.('CLARITY')}
            onMouseLeave={() => onHoverStateChange?.('')}
          >
            CLARITY.
          </h2>
          <h2
            className="kinetic-title text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-white uppercase"
            onMouseEnter={() => onHoverStateChange?.('POSITIONING')}
            onMouseLeave={() => onHoverStateChange?.('')}
          >
            POSITIONING.
          </h2>
          <h2
            className="kinetic-title text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-brand-cyan uppercase text-glow-cyan"
            onMouseEnter={() => onHoverStateChange?.('ACTION')}
            onMouseLeave={() => onHoverStateChange?.('')}
          >
            ACTION.
          </h2>
        </div>
      </div>

      {/* Manifesto Paragraph */}
      <div className="max-w-4xl p-8 sm:p-12 rounded-3xl glass-panel-active border-2 border-brand-cyan/40 shadow-[0_0_50px_rgba(0,102,255,0.3)]">
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 font-display font-light leading-relaxed">
          "{PERSONAL_INFO.philosophyBody}"
        </p>
        <div className="mt-6 flex items-center space-x-3 text-xs font-mono text-brand-cyan">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span>SARTHAK SHARMA — MARKETING MANIFESTO</span>
        </div>
      </div>
    </section>
  );
};
