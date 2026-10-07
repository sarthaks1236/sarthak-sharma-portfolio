export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ResponsibilityItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  tag: string;
  iconName: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  visualMetaphor: string;
  deliverables: string[];
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export interface CaseStudyData {
  title: string;
  subtitle: string;
  client: string;
  location: string;
  objective: string;
  contribution: string;
  outcome: string;
  tags: string[];
}

export interface ClientRelationshipData {
  clientName: string;
  headline: string;
  description: string;
  quote: string;
  principles: string[];
}

export interface StrategyNode {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  position: [number, number, number];
  color: string;
}

export interface ContactInfoData {
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  instagram: string;
  linkedin: string;
}

/**
 * Website portfolio project.
 * To add a new website to the portfolio, add ONE object of this shape to
 * WEBSITE_PROJECTS in src/data/portfolioData.ts — no UI changes needed.
 */
export type ProjectType = 'Featured' | 'Client Project' | 'Client Concept' | 'Demo Project' | 'Template';

export interface WebsiteProject {
  id: string;
  title: string;
  category: string;
  /** Short professional description shown on the card */
  description: string;
  /** One-line positioning statement (optional) */
  positioning?: string;
  /** Key sections / features the website demonstrates */
  highlights: string[];
  /** Optional imported screenshot. If omitted, a live scaled preview of liveUrl is shown. */
  image?: string;
  /** Exact live URL — opened in a new tab */
  liveUrl: string;
  type: ProjectType;
  /** Featured projects get the large case-study treatment instead of a grid card */
  featured?: boolean;
  /** Short location / market note (optional) */
  location?: string;
  /** Accent colour for the preview frame */
  accent?: string;
}
