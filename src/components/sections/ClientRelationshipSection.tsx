import React from 'react';
import { SARLA_CLIENT_STORY } from '../../data/portfolioData';
import { Handshake, HeartHandshake, CheckCircle2, Quote } from 'lucide-react';
import sarlaImg from '../../assets/images/sarla_food_fashion_vision_1600x912.png';

interface ClientRelationshipSectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const ClientRelationshipSection: React.FC<ClientRelationshipSectionProps> = ({ onHoverStateChange }) => {
  return (
    <section className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <HeartHandshake className="w-4 h-4" />
        <span>CLIENT RELATIONSHIPS / 07</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
            TRUST IS BUILT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
              THROUGH CONSISTENCY.
            </span>
          </h2>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-xs font-mono text-brand-cyan tracking-wider uppercase">
              CLIENT PARTNERSHIP: {SARLA_CLIENT_STORY.clientName}
            </div>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans">
              {SARLA_CLIENT_STORY.description}
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-active border-l-4 border-brand-cyan relative">
            <Quote className="w-8 h-8 text-brand-cyan/30 absolute top-4 right-4" />
            <p className="text-lg sm:text-xl font-display font-medium text-white italic">
              "{SARLA_CLIENT_STORY.quote}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {SARLA_CLIENT_STORY.principles.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="text-xs font-mono text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_40px_rgba(0,102,255,0.2)]">
          <img
            src={sarlaImg}
            alt="Sarla's Food & Fashion Client Story"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
