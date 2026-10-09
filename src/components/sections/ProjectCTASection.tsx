import React from 'react';
import { PROJECT_ENQUIRY_WHATSAPP_URL } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface ProjectCTASectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const ProjectCTASection: React.FC<ProjectCTASectionProps> = ({ onHoverStateChange }) => {
  const scrollToContact = () => {
    sound.playWhoosh();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="project-cta-heading" className="pb-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16 rounded-3xl glass-panel-active border-2 border-brand-cyan/50 shadow-[0_0_60px_rgba(0,102,255,0.3)]">
        <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="text-xs font-mono text-brand-cyan tracking-widest uppercase">
              Let's build your website
            </div>
            <h2
              id="project-cta-heading"
              className="text-3xl sm:text-5xl font-display font-black text-white leading-tight"
            >
              Have a business that needs a better digital presence?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-sans font-light max-w-2xl">
              Let's build a website that makes your business look as professional online as it is offline.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={PROJECT_ENQUIRY_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playEnergySurge()}
              onMouseEnter={() => {
                sound.playHover(1100);
                onHoverStateChange?.('START');
              }}
              onMouseLeave={() => onHoverStateChange?.('')}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-mono font-bold text-sm tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_40px_rgba(0,240,255,0.75)] transition-all group"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Your Project →</span>
            </a>
            <button
              type="button"
              onClick={scrollToContact}
              onMouseEnter={() => sound.playHover(950)}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-xs font-mono text-gray-200 hover:text-white transition-all group"
            >
              <span>OTHER WAYS TO CONTACT</span>
              <ArrowUpRight className="w-4 h-4 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
