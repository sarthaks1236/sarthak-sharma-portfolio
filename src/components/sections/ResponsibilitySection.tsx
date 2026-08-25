import React from 'react';
import { RESPONSIBILITIES } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { Layers, Compass, Globe, Building2, Filter, UserCheck, Award, Layout, MessageSquare, Sparkles } from 'lucide-react';
import roleBgImg from '../../assets/images/role_strategy_bg_1600x912.png';

interface ResponsibilitySectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const ResponsibilitySection: React.FC<ResponsibilitySectionProps> = ({ onHoverStateChange }) => {
  return (
    <section id="responsibilities" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <Layers className="w-4 h-4" />
        <span>ROLE & RESPONSIBILITY / 04</span>
      </div>

      <div className="mb-14">
        <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
          WHERE STRATEGY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
            MEETS EXECUTION.
          </span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-3 max-w-2xl">
          CHIEF MARKETING OFFICER — ARVINEX VENTURE PRIVATE LIMITED.
          The 9 strategic pillars executed across online, offline, and brand channels.
        </p>
      </div>

      {/* 9 Responsibilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESPONSIBILITIES.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => {
              sound.playHover(820);
              onHoverStateChange?.(item.number);
            }}
            onMouseLeave={() => onHoverStateChange?.('')}
            className="p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 group border border-white/10 hover:border-brand-cyan/50 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-display font-black text-brand-cyan group-hover:scale-110 transition-transform">
                {item.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-[10px] font-mono text-brand-cyan uppercase">
                {item.tag}
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed font-sans font-light">
              {item.shortDesc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
