import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { User, Sparkles, Compass, Lightbulb } from 'lucide-react';
import portraitImg from '../../assets/images/sarthak_sharma_portrait_978x1304.png';

interface PersonalSectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const PersonalSection: React.FC<PersonalSectionProps> = ({ onHoverStateChange }) => {
  return (
    <section className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <User className="w-4 h-4" />
        <span>PERSON / 10</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Layered Portrait */}
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden glass-panel border-2 border-brand-cyan/40 shadow-[0_0_60px_rgba(0,240,255,0.25)] p-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-obsidian">
              <img
                src={portraitImg}
                alt="Sarthak Sharma Portrait"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Right Mindset & Personality */}
        <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
          <div>
            <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
              BEYOND <br />
              <span className="text-brand-cyan text-glow-cyan">THE TITLE.</span>
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-lg sm:text-xl font-display font-bold text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-xs font-mono text-brand-cyan">
                {PERSONAL_INFO.subPositioning}
              </span>
            </div>
          </div>

          <div className="p-8 rounded-3xl glass-panel-active border-l-4 border-brand-cyan space-y-4">
            <p className="text-xl sm:text-2xl text-gray-100 font-display font-light leading-relaxed">
              "{PERSONAL_INFO.mindset}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Compass className="w-5 h-5 text-brand-cyan mb-2" />
              <div className="text-xs font-mono text-gray-400">ORIENTATION</div>
              <div className="text-sm font-bold text-white">Business Mindset</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Sparkles className="w-5 h-5 text-brand-blue mb-2" />
              <div className="text-xs font-mono text-gray-400">DISCIPLINE</div>
              <div className="text-sm font-bold text-white">Obsessive Execution</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Lightbulb className="w-5 h-5 text-cyan-400 mb-2" />
              <div className="text-xs font-mono text-gray-400">DELIVERY</div>
              <div className="text-sm font-bold text-white">Market-Ready UI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
