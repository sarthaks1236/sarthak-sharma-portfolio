import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Sparkles, CheckCircle2, TrendingUp, Target, Globe, Layers } from 'lucide-react';
import profileImg from '../../assets/images/profile_sarthak_978x1304.png';

interface ProfileSectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onHoverStateChange }) => {
  return (
    <section id="profile" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <Sparkles className="w-4 h-4" />
        <span>PROFILE / 02</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Headline */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
            MORE THAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-white">
              MARKETING.
            </span>
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl glass-panel-active border-l-4 border-brand-cyan space-y-4">
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-sans font-light">
              {PERSONAL_INFO.profileText}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Target className="w-5 h-5 text-brand-cyan mb-2" />
              <div className="text-xs font-mono text-gray-400">FOCUS</div>
              <div className="text-sm font-bold text-white">Business Visibility</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <TrendingUp className="w-5 h-5 text-brand-blue mb-2" />
              <div className="text-xs font-mono text-gray-400">OUTCOME</div>
              <div className="text-sm font-bold text-white">Lead Generation</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
              <Globe className="w-5 h-5 text-cyan-400 mb-2" />
              <div className="text-xs font-mono text-gray-400">EXECUTION</div>
              <div className="text-sm font-bold text-white">Online + Offline</div>
            </div>
          </div>
        </div>

        {/* Right Authentic Visual Card */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-brand-blue/30 shadow-[0_0_50px_rgba(0,102,255,0.2)] p-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-obsidian">
              <img
                src={profileImg}
                alt="Sarthak Sharma Marketing Profile"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-obsidian/80 backdrop-blur-md border border-white/10">
                <div className="text-xs font-mono text-brand-cyan tracking-wider uppercase mb-1">
                  LEADERSHIP
                </div>
                <div className="text-base font-bold text-white">
                  Chief Marketing Officer
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  Arvinex Venture Private Limited
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
