import React from 'react';
import { PERSONAL_INFO, VISION_STOPS } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { Eye, ArrowRight, Sparkles } from 'lucide-react';

interface VisionSectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ onHoverStateChange }) => {
  return (
    <section className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <Eye className="w-4 h-4" />
        <span>VISION / 11</span>
      </div>

      <div className="mb-14">
        <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
          WHERE I'M <br />
          <span className="text-brand-cyan text-glow-cyan">HEADING.</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mt-4 max-w-3xl leading-relaxed font-sans font-light">
          {PERSONAL_INFO.visionText}
        </p>
      </div>

      {/* 3D Corridor Milestones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {VISION_STOPS.map((stop, idx) => (
          <div
            key={idx}
            onMouseEnter={() => {
              sound.playHover(900 + idx * 50);
              onHoverStateChange?.(stop.label);
            }}
            onMouseLeave={() => onHoverStateChange?.('')}
            className="p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 group border border-white/10 hover:border-brand-cyan/50 relative overflow-hidden"
          >
            <div className="text-3xl font-display font-black text-brand-cyan mb-2 group-hover:scale-110 transition-transform">
              0{idx + 1}
            </div>
            <h3 className="text-2xl font-display font-black text-white mb-2">
              {stop.label}
            </h3>
            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              {stop.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
