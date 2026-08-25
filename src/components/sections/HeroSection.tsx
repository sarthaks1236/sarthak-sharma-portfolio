import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { ArrowDown, Sparkles, FileDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onHoverStateChange }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 max-w-7xl mx-auto select-none"
    >
      {/* Top Credentials Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_10px_#00F0FF] animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">
            {PERSONAL_INFO.role}
          </span>
          <span className="text-xs text-gray-500 font-mono">/</span>
          <span className="text-xs font-mono text-gray-300 uppercase">
            {PERSONAL_INFO.company}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={PERSONAL_INFO.pdfDeckUrl}
            download="Sarthak_Sharma_CMO_Portfolio.pdf"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover(980)}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-xs font-mono transition-all group"
          >
            <FileDown className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span>EXECUTIVE PITCH DECK (PDF)</span>
          </a>
        </div>
      </div>

      {/* Centerpiece Kinetic Typography & Spatial Depth */}
      <div className="my-auto py-12 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan text-xs font-mono tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE 3D EXPERIENCE</span>
          </div>

          <h1
            className="kinetic-title text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter text-white uppercase leading-[0.85]"
            onMouseEnter={() => onHoverStateChange?.('GROWTH')}
            onMouseLeave={() => onHoverStateChange?.('')}
          >
            MARKETING
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <h2
              className="kinetic-title text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase leading-[0.85]"
              onMouseEnter={() => onHoverStateChange?.('THAT')}
              onMouseLeave={() => onHoverStateChange?.('')}
            >
              THAT MOVES
            </h2>

            <div className="hidden lg:block max-w-xs p-4 rounded-2xl glass-panel text-xs text-gray-300 font-sans border-l-2 border-brand-cyan">
              <span className="font-mono text-brand-cyan font-bold block mb-1">CORE POSITIONING</span>
              {PERSONAL_INFO.manifestoSummary}
            </div>
          </div>

          <h1
            className="kinetic-title text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter text-brand-cyan uppercase leading-[0.85] text-glow-cyan"
            onMouseEnter={() => onHoverStateChange?.('BUSINESS')}
            onMouseLeave={() => onHoverStateChange?.('')}
          >
            BUSINESS.
          </h1>
        </div>
      </div>

      {/* Bottom Floating Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-6">
        <div className="flex items-center space-x-6">
          <div className="text-left">
            <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">DISCIPLINE</div>
            <div className="text-sm font-display font-bold text-gray-200">Growth & Brand Systems</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-left">
            <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">CURRENT MANDATE</div>
            <div className="text-sm font-display font-bold text-brand-cyan">CMO @ Arvinex Venture</div>
          </div>
        </div>

        {/* 3D Drag Cursor Hint */}
        <div
          className="flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:border-brand-cyan/40 transition-all cursor-pointer group"
          onMouseEnter={() => onHoverStateChange?.('DRAG')}
          onMouseLeave={() => onHoverStateChange?.('')}
          onClick={() => {
            sound.playWhoosh();
            document.querySelector('#profile')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span>DRAG 3D CORE • SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 text-brand-cyan group-hover:translate-y-1 transition-transform" />
        </div>
      </div>
    </section>
  );
};
