import React, { useState } from 'react';
import { CAPABILITIES } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface CapabilitiesSectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onHoverStateChange }) => {
  const [activeTab, setActiveTab] = useState<string>(CAPABILITIES[0].id);
  const activeCap = CAPABILITIES.find((c) => c.id === activeTab) || CAPABILITIES[0];

  return (
    <section id="capabilities" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <Zap className="w-4 h-4" />
        <span>CAPABILITIES / 05</span>
      </div>

      <div className="mb-14">
        <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
          WHAT I BRING <br />
          <span className="text-brand-cyan text-glow-cyan">TO THE TABLE.</span>
        </h2>
        <p className="text-sm font-mono text-gray-400 mt-3 max-w-xl">
          Five specialized marketing disciplines unified into one comprehensive commercial engine.
        </p>
      </div>

      {/* Tabs & Capability Worlds */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Tabs */}
        <div className="lg:col-span-5 space-y-3">
          {CAPABILITIES.map((cap) => {
            const isCurrent = cap.id === activeTab;
            return (
              <button
                key={cap.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(cap.id);
                }}
                onMouseEnter={() => {
                  sound.playHover(860);
                  onHoverStateChange?.('EXPLORE');
                }}
                onMouseLeave={() => onHoverStateChange?.('')}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                  isCurrent
                    ? 'bg-brand-blue/20 border-brand-cyan shadow-[0_0_25px_rgba(0,240,255,0.25)] translate-x-2'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="text-xs font-mono text-brand-cyan font-bold mb-1">
                    {cap.number} — CAPABILITY
                  </div>
                  <div className="text-lg font-display font-bold text-white">
                    {cap.title}
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 ${isCurrent ? 'text-brand-cyan' : 'text-gray-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Capability Detail World */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl glass-panel-active border-2 border-brand-cyan/40 shadow-[0_0_40px_rgba(0,102,255,0.3)] space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-brand-cyan font-bold tracking-widest">
                DISCIPLINE: {activeCap.number}
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-[11px] font-mono text-brand-cyan">
                {activeCap.visualMetaphor}
              </span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
                {activeCap.title}
              </h3>
              <p className="text-base sm:text-lg font-sans text-brand-cyan font-medium">
                "{activeCap.tagline}"
              </p>
            </div>

            <p className="text-base text-gray-200 leading-relaxed font-sans">
              {activeCap.description}
            </p>

            <div className="border-t border-white/10 pt-6">
              <div className="text-xs font-mono text-gray-400 tracking-wider uppercase mb-4">
                CORE DELIVERABLES & ARTIFACTS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCap.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs font-mono text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
