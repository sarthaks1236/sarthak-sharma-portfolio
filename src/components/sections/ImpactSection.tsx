import React from 'react';
import { IMPACT_PILLARS, STATS } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { TrendingUp, Users, ArrowDown, Award } from 'lucide-react';

interface ImpactSectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onHoverStateChange }) => {
  return (
    <section className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <TrendingUp className="w-4 h-4" />
        <span>IMPACT / 08</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
            BUILT THROUGH <br />
            <span className="text-brand-cyan text-glow-cyan">REAL WORK.</span>
          </h2>
        </div>

        {/* 100+ Stat Badge */}
        <div className="p-6 rounded-3xl glass-panel-active border-2 border-brand-cyan/40 flex items-center space-x-6">
          <div>
            <div className="text-5xl sm:text-6xl font-display font-black text-brand-cyan">
              {STATS.clientsServed}
            </div>
            <div className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              CLIENTS SERVED
            </div>
          </div>
          <div className="h-12 w-px bg-white/20" />
          <p className="text-xs font-sans text-gray-300 max-w-xs leading-relaxed">
            {STATS.clientsDetail}
          </p>
        </div>
      </div>

      {/* 4 Pillars Converging into Business Growth */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {IMPACT_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            onMouseEnter={() => {
              sound.playHover(890);
              onHoverStateChange?.(pillar.title);
            }}
            onMouseLeave={() => onHoverStateChange?.('')}
            className="p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 group border border-white/10 hover:border-brand-cyan/50"
          >
            <div className="text-xs font-mono text-brand-cyan font-bold tracking-widest uppercase mb-2">
              {pillar.subtitle}
            </div>
            <h3 className="text-2xl font-display font-black text-white group-hover:text-brand-cyan transition-colors mb-3">
              {pillar.title}
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed font-sans font-light">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Central Convergence Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-blue/30 via-brand-cyan/20 to-brand-blue/30 border border-brand-cyan/40 text-center flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <ArrowDown className="w-5 h-5 text-brand-cyan animate-bounce" />
        <span className="text-sm font-mono font-bold tracking-widest text-white uppercase">
          ALL 4 PILLARS CONVERGE INTO ONE OUTCOME:
        </span>
        <span className="text-lg font-display font-black text-brand-cyan tracking-wider uppercase">
          BUSINESS GROWTH
        </span>
      </div>
    </section>
  );
};
