import React from 'react';
import { WebsiteProject } from '../../types';
import { sound } from '../../audio/soundSystem';
import { MapPin, Play, Building2 } from 'lucide-react';
import { ProjectPreview } from '../ui/ProjectPreview';
import { ProjectBadge } from '../ui/ProjectBadge';

interface FeaturedProjectShowcaseProps {
  project: WebsiteProject;
  parentCompany?: string;
  onOpenLivePreview?: (title: string, url: string, client: string) => void;
  onHoverStateChange?: (text: string) => void;
}

/** Large case-study block for a featured brand/project (e.g. ARVINEX LOCAL). */
export const FeaturedProjectShowcase: React.FC<FeaturedProjectShowcaseProps> = ({
  project,
  parentCompany,
  onOpenLivePreview,
  onHoverStateChange
}) => {
  const ctaLabel = project.id === 'arvinex-local' ? `Visit ${project.title}` : 'View Live Website';

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="p-6 sm:p-10 lg:p-12 rounded-3xl glass-panel-active border-2 border-brand-cyan/50 shadow-[0_0_60px_rgba(0,102,255,0.3)] mb-12"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <ProjectBadge type={project.type} />
            <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">
              {project.category}
            </span>
          </div>
          <h3
            id={`${project.id}-title`}
            className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight break-words"
          >
            {project.title}
          </h3>
          {parentCompany && (
            <div className="mt-2 flex items-center gap-2 text-xs font-mono text-gray-400 tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
              <span>A brand of {parentCompany}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Copy */}
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
          {project.positioning && (
            <p className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
              {project.positioning}
            </p>
          )}

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans font-light">
            {project.description}
          </p>

          {project.location && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase mb-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Serving</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">{project.location}</div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playEnergySurge()}
              onMouseEnter={() => {
                sound.playHover(950);
                onHoverStateChange?.('VISIT');
              }}
              onMouseLeave={() => onHoverStateChange?.('')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-mono font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all group"
            >
              <span>{ctaLabel} →</span>
            </a>

            {onOpenLivePreview && (
              <button
                type="button"
                onClick={() => {
                  sound.playEnergySurge();
                  onOpenLivePreview(project.title, project.liveUrl, project.category);
                }}
                onMouseEnter={() => sound.playHover(900)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-xs font-mono text-gray-200 hover:text-white transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-brand-cyan text-brand-cyan" />
                <span>QUICK PREVIEW</span>
              </button>
            )}
          </div>
        </div>

        {/* Preview + services */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${ctaLabel} (opens in a new tab)`}
            onClick={() => sound.playClick()}
            onMouseEnter={() => onHoverStateChange?.('VISIT')}
            onMouseLeave={() => onHoverStateChange?.('')}
            className="block group shadow-[0_0_50px_rgba(0,240,255,0.18)] rounded-2xl transition-transform duration-500 hover:-translate-y-1"
          >
            <ProjectPreview
              title={project.title}
              url={project.liveUrl}
              image={project.image}
              accent={project.accent}
              className="group-hover:border-brand-cyan/50 transition-colors"
            />
          </a>

          <div>
            <div className="text-xs font-mono text-gray-400 tracking-wider uppercase mb-3">
              Services
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};
