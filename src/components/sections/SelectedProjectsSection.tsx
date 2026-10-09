import React from 'react';
import { WEBSITE_PROJECTS, isDemoProject } from '../../data/portfolioData';
import { WebsiteProject } from '../../types';
import { sound } from '../../audio/soundSystem';
import { LayoutGrid, Play, Info } from 'lucide-react';
import { ProjectPreview } from '../ui/ProjectPreview';
import { ProjectBadge } from '../ui/ProjectBadge';

interface SelectedProjectsSectionProps {
  onOpenLivePreview?: (title: string, url: string, client: string) => void;
  onHoverStateChange?: (text: string) => void;
}

const ProjectCard: React.FC<{
  project: WebsiteProject;
  index: number;
  onOpenLivePreview?: SelectedProjectsSectionProps['onOpenLivePreview'];
  onHoverStateChange?: SelectedProjectsSectionProps['onHoverStateChange'];
}> = ({ project, index, onOpenLivePreview, onHoverStateChange }) => {
  const demo = isDemoProject(project);
  const ctaLabel = demo ? 'View Live Demo' : 'View Live Website';

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="group h-full flex flex-col p-3 sm:p-4 rounded-3xl glass-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,102,255,0.25)]"
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${ctaLabel}: ${project.title} (opens in a new tab)`}
        onClick={() => sound.playClick()}
        onMouseEnter={() => {
          sound.playHover(880);
          onHoverStateChange?.('VISIT');
        }}
        onMouseLeave={() => onHoverStateChange?.('')}
        className="block"
      >
        <ProjectPreview
          title={project.title}
          url={project.liveUrl}
          image={project.image}
          accent={project.accent}
          className="group-hover:border-brand-cyan/40 transition-colors"
        />
      </a>

      <div className="flex-1 flex flex-col px-2 sm:px-3 pt-5 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono text-brand-cyan tracking-widest uppercase">
            {String(index + 1).padStart(2, '0')} — {project.category}
          </span>
          <ProjectBadge type={project.type} />
        </div>

        <h3
          id={`${project.id}-title`}
          className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mb-3"
        >
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans mb-4">
          {project.description}
        </p>

        {project.positioning && (
          <p className="text-sm font-sans font-medium text-white/90 border-l-2 pl-3 mb-5" style={{ borderColor: project.accent || '#00F0FF' }}>
            {project.positioning}
          </p>
        )}

        <ul className="flex flex-wrap gap-1.5 mb-6" aria-label="Website highlights">
          {project.highlights.slice(0, 6).map((h) => (
            <li
              key={h}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono text-gray-300"
            >
              {h}
            </li>
          ))}
          {project.highlights.length > 6 && (
            <li className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-gray-500">
              +{project.highlights.length - 6} more
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playEnergySurge()}
            onMouseEnter={() => sound.playHover(950)}
            className="w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-mono font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all group/btn"
          >
            <span>{ctaLabel} →</span>
          </a>

          {onOpenLivePreview && (
            <button
              type="button"
              onClick={() => {
                sound.playEnergySurge();
                onOpenLivePreview(project.title, project.liveUrl, `${project.category} • ${project.type}`);
              }}
              onMouseEnter={() => sound.playHover(900)}
              className="w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/40 text-xs font-mono text-gray-200 hover:text-white transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-brand-cyan text-brand-cyan" />
              <span>View Project</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export const SelectedProjectsSection: React.FC<SelectedProjectsSectionProps> = ({
  onOpenLivePreview,
  onHoverStateChange
}) => {
  const projects = WEBSITE_PROJECTS.filter((p) => !p.featured);
  const hasDemos = projects.some(isDemoProject);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <LayoutGrid className="w-4 h-4" />
        <span>WEBSITE PORTFOLIO / 06.B</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-8">
          <h2
            id="projects-heading"
            className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]"
          >
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
              WEBSITE PROJECTS.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-sans font-light mt-6 max-w-3xl">
            Industry-specific websites designed to demonstrate how ARVINEX transforms different business ideas into modern digital experiences.
          </p>
        </div>

        {hasDemos && (
          <div className="lg:col-span-4 p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-3">
            <Info className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
            <p className="text-xs font-mono text-gray-400 leading-relaxed">
              Projects marked <span className="text-amber-300">Demo Project</span> or{' '}
              <span className="text-sky-300">Demo / Template</span> are fictional concepts built by ARVINEX to show what we can create for each industry. They are not client businesses.
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onOpenLivePreview={onOpenLivePreview}
            onHoverStateChange={onHoverStateChange}
          />
        ))}
      </div>
    </section>
  );
};
