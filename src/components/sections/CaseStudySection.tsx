import React from 'react';
import { ADHYAYAN_CASE_STUDY, ARVINEX_CASE_STUDY } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { Laptop, ExternalLink, ShieldCheck, Play, ArrowUpRight } from 'lucide-react';
import deviceImg from '../../assets/images/adhyayan_academy_device_1229x820.png';
import caseStudyImg from '../../assets/images/adhyayan_academy_casestudy_1600x912.png';

interface CaseStudySectionProps {
  onOpenLivePreview?: (title: string, url: string, client: string) => void;
  onHoverStateChange?: (text: string) => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  onOpenLivePreview,
  onHoverStateChange
}) => {
  const handleLaunchPreview = (title: string, url: string, client: string) => {
    sound.playEnergySurge();
    if (onOpenLivePreview) {
      onOpenLivePreview(title, url, client);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="work" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Part 1: Websites Should Work Harder */}
      <div className="mb-24">
        <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
          <Laptop className="w-4 h-4" />
          <span>DIGITAL EXPERIENCE / 06</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
              WEBSITES SHOULD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
                WORK HARDER.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-sans font-light">
              A website is often the first serious interaction between a business and a potential customer. Sarthak focuses on creating professional, modern and business-oriented websites that communicate value, build credibility and support customer acquisition.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Professional Website Design",
                "Business Websites",
                "Landing Pages",
                "Conversion-Focused Structure",
                "Brand-Aligned Digital Presence"
              ].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-cyan">
                  {tag}
                </span>
              ))}
            </div>

            {/* Live Interactive Preview Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() =>
                  handleLaunchPreview(
                    ADHYAYAN_CASE_STUDY.title,
                    ADHYAYAN_CASE_STUDY.liveUrl,
                    ADHYAYAN_CASE_STUDY.client
                  )
                }
                onMouseEnter={() => {
                  sound.playHover(900);
                  onHoverStateChange?.('PREVIEW');
                }}
                onMouseLeave={() => onHoverStateChange?.('')}
                className="flex items-center space-x-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-mono font-bold text-xs tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all group"
              >
                <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                <span>INTERACTIVE LIVE PREVIEW</span>
              </button>

              <a
                href={ADHYAYAN_CASE_STUDY.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover(950)}
                className="flex items-center space-x-1.5 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-xs font-mono text-gray-200 hover:text-white transition-all group"
              >
                <span>VISIT LIVE HOSTED SITE</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-5 relative group cursor-pointer"
            onClick={() =>
              handleLaunchPreview(
                ADHYAYAN_CASE_STUDY.title,
                ADHYAYAN_CASE_STUDY.liveUrl,
                ADHYAYAN_CASE_STUDY.client
              )
            }
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-brand-cyan/40 p-2 shadow-[0_0_50px_rgba(0,240,255,0.25)]">
              <img
                src={deviceImg}
                alt="Adhyayan Academy Device View"
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                <div className="px-5 py-2.5 rounded-full bg-brand-cyan text-black font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_#00F0FF] flex items-center space-x-2">
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>CLICK TO LAUNCH PREVIEW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Primary Case Study: Adhyayan Academy */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel-active border-2 border-brand-cyan/50 shadow-[0_0_60px_rgba(0,102,255,0.3)] mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="text-xs font-mono text-brand-cyan tracking-widest uppercase mb-1">
              PRIMARY CASE STUDY
            </div>
            <h3 className="text-3xl sm:text-5xl font-display font-black text-white">
              {ADHYAYAN_CASE_STUDY.title}
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() =>
                handleLaunchPreview(
                  ADHYAYAN_CASE_STUDY.title,
                  ADHYAYAN_CASE_STUDY.liveUrl,
                  ADHYAYAN_CASE_STUDY.client
                )
              }
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-brand-cyan/15 hover:bg-brand-cyan/30 border border-brand-cyan/50 text-xs font-mono text-brand-cyan font-bold transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-brand-cyan" />
              <span>TEST LIVE INTERACTION</span>
            </button>

            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-blue/20 border border-brand-cyan/40 text-xs font-mono text-brand-cyan">
              <ShieldCheck className="w-4 h-4" />
              <span>VERIFIED PORTFOLIO CASE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-brand-cyan uppercase mb-1">THE CLIENT</div>
                <div className="text-base font-bold text-white">{ADHYAYAN_CASE_STUDY.client}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-brand-cyan uppercase mb-1">THE OBJECTIVE</div>
                <div className="text-base text-gray-200">{ADHYAYAN_CASE_STUDY.objective}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-brand-cyan uppercase mb-1">THE CONTRIBUTION</div>
                <div className="text-base text-gray-200">{ADHYAYAN_CASE_STUDY.contribution}</div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-blue/20 border border-brand-cyan/40">
                <div className="text-xs font-mono text-brand-cyan uppercase mb-1">THE OUTCOME</div>
                <div className="text-base font-bold text-white">{ADHYAYAN_CASE_STUDY.outcome}</div>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-6 relative rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer group"
            onClick={() =>
              handleLaunchPreview(
                ADHYAYAN_CASE_STUDY.title,
                ADHYAYAN_CASE_STUDY.liveUrl,
                ADHYAYAN_CASE_STUDY.client
              )
            }
          >
            <img
              src={caseStudyImg}
              alt="Adhyayan Academy Case Study Visual"
              className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-obsidian/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="px-4 py-2 rounded-full bg-brand-cyan text-black font-mono font-bold text-xs tracking-wider uppercase">
                CLICK TO LAUNCH LIVE PREVIEW
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Secondary Case Highlight: Arvinex Venture Platform */}
      <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-mono text-brand-cyan uppercase">ENTERPRISE DIGITAL ASSET</div>
          <h4 className="text-2xl font-display font-bold text-white">
            {ARVINEX_CASE_STUDY.title}
          </h4>
          <p className="text-sm text-gray-400 font-sans max-w-xl">
            {ARVINEX_CASE_STUDY.objective}
          </p>
        </div>

        <div className="flex items-center space-x-3 w-full md:w-auto">
          <button
            onClick={() =>
              handleLaunchPreview(
                ARVINEX_CASE_STUDY.title,
                ARVINEX_CASE_STUDY.liveUrl,
                ARVINEX_CASE_STUDY.client
              )
            }
            className="flex-1 md:flex-initial flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-brand-cyan/15 hover:bg-brand-cyan/30 border border-brand-cyan/40 text-brand-cyan font-mono font-bold text-xs tracking-wider transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-brand-cyan" />
            <span>LIVE PREVIEW</span>
          </button>

          <a
            href={ARVINEX_CASE_STUDY.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
            title="Open Arvinex Platform in New Tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
