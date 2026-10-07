import {
  ResponsibilityItem,
  CapabilityItem,
  PillarItem,
  CaseStudyData,
  ClientRelationshipData,
  StrategyNode,
  ContactInfoData,
  WebsiteProject
} from '../types';

export const PERSONAL_INFO = {
  name: "SARTHAK SHARMA",
  role: "Chief Marketing Officer",
  company: "Arvinex Venture Private Limited",
  disciplines: "Marketing Strategist • Digital + Offline Marketing • Website Designer",
  positioning: "MARKETING THAT MOVES BUSINESS.",
  subPositioning: "CMO / MARKETING / WEB / GROWTH",
  experienceTag: "S S / PORTFOLIO",
  manifestoSummary: "Turning attention into strategy, strategy into execution, and execution into measurable business growth.",
  mindset: "Curious about business. Obsessed with better execution. Focused on turning ideas into professional, market-ready experiences.",
  profileText: "Sarthak Sharma is a marketing professional focused on helping businesses build visibility, communicate their value and create meaningful customer connections. His work combines online and offline marketing, professional website design, lead generation and practical business-focused strategy. As Chief Marketing Officer at Arvinex Venture Private Limited, he works at the intersection of marketing, creativity and business growth.",
  visionText: "My goal is to build brands and marketing systems that do more than look professional — they create trust, attract customers and contribute to real business growth.",
  philosophyQuote: "Good marketing is not noise. IT IS CLARITY, POSITIONING AND ACTION.",
  philosophyBody: "I believe effective marketing starts with understanding the business, identifying the right audience and communicating the right value — clearly and consistently.",
  pdfDeckUrl: "/Sarthak_Sharma_CMO_Portfolio.pdf"
};

export const NAVIGATION_LINKS = [
  { id: "work", label: "WORK", href: "#work" },
  { id: "projects", label: "PROJECTS", href: "#projects" },
  { id: "strategy", label: "STRATEGY", href: "#strategy" },
  { id: "responsibilities", label: "EXPERIENCE", href: "#responsibilities" },
  { id: "capabilities", label: "CAPABILITIES", href: "#capabilities" },
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "contact", label: "CONTACT", href: "#contact" }
];

export const STRATEGY_NODES: StrategyNode[] = [
  {
    id: "marketing",
    label: "MARKETING",
    subtitle: "Omni-Channel Visibility",
    description: "Combining high-impact digital campaigns with targeted offline marketing to establish commanding brand presence across all customer touchpoints.",
    position: [2.8, 1.2, 0],
    color: "#00F0FF"
  },
  {
    id: "branding",
    label: "BRANDING",
    subtitle: "Market Positioning & Trust",
    description: "Engineering sharp, differentiated market positioning that communicates uncompromising value and earns deep customer credibility.",
    position: [2.8, -1.2, 0],
    color: "#0066FF"
  },
  {
    id: "web",
    label: "WEB DESIGN",
    subtitle: "High-Conversion Digital Assets",
    description: "Architecting bespoke, modern digital interfaces engineered for friction-free credibility, fast engagement, and qualified lead conversion.",
    position: [0, -3.0, 0],
    color: "#38BDF8"
  },
  {
    id: "growth",
    label: "GROWTH",
    subtitle: "Commercial Expansion",
    description: "Aligning creative direction with concrete commercial mechanics to drive repeatable and compounding business growth.",
    position: [-2.8, -1.2, 0],
    color: "#60A5FA"
  },
  {
    id: "lead_gen",
    label: "LEAD GENERATION",
    subtitle: "Quality Business Inquiries",
    description: "Precision-targeted acquisition funnels focused on capturing qualified decision-makers rather than vanity metrics.",
    position: [-2.8, 1.2, 0],
    color: "#00E5FF"
  },
  {
    id: "customer_acq",
    label: "CUSTOMER ACQUISITION",
    subtitle: "Full-Funnel Conversion",
    description: "End-to-end customer journey optimization from initial market awareness to committed, long-term commercial relationships.",
    position: [0, 3.0, 0],
    color: "#2563EB"
  }
];

export const RESPONSIBILITIES: ResponsibilityItem[] = [
  {
    id: "resp-1",
    number: "01",
    title: "Marketing Strategy",
    shortDesc: "Formulating comprehensive market positioning frameworks that bridge business goals with actionable campaigns.",
    tag: "STRATEGY",
    iconName: "Compass"
  },
  {
    id: "resp-2",
    number: "02",
    title: "Online Marketing",
    shortDesc: "Executing performance-driven digital initiatives across search, social, performance ads, and organic channels.",
    tag: "DIGITAL",
    iconName: "Globe"
  },
  {
    id: "resp-3",
    number: "03",
    title: "Offline Marketing",
    shortDesc: "Deploying high-impact physical activations, retail collateral, and localized visibility campaigns.",
    tag: "PHYSICAL",
    iconName: "Building2"
  },
  {
    id: "resp-4",
    number: "04",
    title: "Lead Generation",
    shortDesc: "Architecting multi-stage acquisition funnels designed specifically to generate high-intent business enquiries.",
    tag: "CONVERSION",
    iconName: "Filter"
  },
  {
    id: "resp-5",
    number: "05",
    title: "Customer Acquisition",
    shortDesc: "Optimizing the entire conversion lifecycle from first impression to closed deal and retention.",
    tag: "GROWTH",
    iconName: "UserCheck"
  },
  {
    id: "resp-6",
    number: "06",
    title: "Brand Positioning",
    shortDesc: "Defining distinct market identity, value propositions, and core messaging that cut through industry noise.",
    tag: "IDENTITY",
    iconName: "Award"
  },
  {
    id: "resp-7",
    number: "07",
    title: "Website Planning + Design",
    shortDesc: "Designing and engineering modern, credible, and conversion-optimized web experiences.",
    tag: "EXPERIENCE",
    iconName: "Layout"
  },
  {
    id: "resp-8",
    number: "08",
    title: "Marketing Communication",
    shortDesc: "Crafting precise, value-driven messaging that speaks directly to customer needs and aspirations.",
    tag: "MESSAGING",
    iconName: "MessageSquare"
  },
  {
    id: "resp-9",
    number: "09",
    title: "Creative Direction",
    shortDesc: "Leading cohesive visual, aesthetic, and conceptual standards across all brand and campaign touchpoints.",
    tag: "CREATIVE",
    iconName: "Sparkles"
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "cap-1",
    number: "01",
    title: "MARKETING STRATEGY",
    tagline: "Turning business objectives into practical marketing direction.",
    description: "Every engagement begins with deep commercial alignment. I analyze market dynamics, competitor positioning, and customer psychology to map out clear, actionable execution paths that drive real business outcomes.",
    visualMetaphor: "Structured Geometric Grid + Shifting Strategic Nodes",
    deliverables: ["Market Research & Competitor Audits", "Core Value Proposition Definition", "Multi-Channel Go-To-Market Plans", "Quarterly Growth Roadmaps"]
  },
  {
    id: "cap-2",
    number: "02",
    title: "DIGITAL MARKETING",
    tagline: "Building visibility and customer reach across digital channels.",
    description: "Deploying integrated digital ecosystems that capture demand where it lives. Through coordinated organic presence, targeted paid campaigns, and engaging content systems, I build lasting digital authority.",
    visualMetaphor: "Connected Neural Network of Particles & Data Pulses",
    deliverables: ["Performance Ad Campaigns", "Social Media Architecture", "Search & Content Strategy", "Audience Retargeting Frameworks"]
  },
  {
    id: "cap-3",
    number: "03",
    title: "OFFLINE MARKETING",
    tagline: "Using local and physical marketing to create real-world visibility.",
    description: "Digital alone is not enough for true market dominance. I craft physical brand moments—from striking billboard displays to retail activations and print collateral—that establish unmissable physical credibility.",
    visualMetaphor: "Spatial 3D Billboard Planes & Perspective Environment",
    deliverables: ["Retail Signage & Point-of-Sale Collateral", "Large-Format Print & Billboards", "Local Business Activations", "Print & Brand Collateral"]
  },
  {
    id: "cap-4",
    number: "04",
    title: "WEBSITE DESIGN",
    tagline: "Professional sites that communicate clearly and credibly.",
    description: "A website is often the first serious interaction between a business and a potential customer. I engineer clean, modern, and business-oriented websites that establish instant trust and guide visitors toward decisive action.",
    visualMetaphor: "Floating Glass 3D Browser Viewports with Interactive UI",
    deliverables: ["Full Website Architecture & Design", "High-Converting Landing Pages", "Mobile-First UX & UI Systems", "Speed & Conversion Optimization"]
  },
  {
    id: "cap-5",
    number: "05",
    title: "LEAD GENERATION",
    tagline: "Approaches focused on quality business enquiries.",
    description: "Forget vanity traffic. I build high-intent acquisition pipelines that filter for genuine commercial prospects, turning fleeting digital attention into high-value inquiries and predictable sales conversations.",
    visualMetaphor: "Converging Multi-Stream Funnel Funnels with High-Value Targets",
    deliverables: ["Inquiry Capture Systems", "Lead Magnets & Value Drivers", "CRM & Pipeline Integration", "Conversion Funnel Diagnostics"]
  }
];

export const ADHYAYAN_CASE_STUDY: CaseStudyData & { liveUrl: string; description: string; programs: string[] } = {
  title: "Adhyayan Academy — Shahpur",
  subtitle: "From Attention to Opportunity",
  client: "Adhyayan Academy — Shahpur",
  location: "Shahpur, Kangra, Himachal Pradesh",
  objective: "Increase visibility and generate relevant enquiries.",
  contribution: "Website design & development, marketing strategy and lead-generation focused execution.",
  outcome: "Quality leads generated through the marketing efforts.",
  description: "A professional education/coaching website designed for Adhyayan Academy, presenting its NEET, JEE, HP Government Exam, Defence, Teaching Exam and school tuition programs with course information, enquiry CTAs and contact functionality.",
  programs: [
    "NEET / JEE",
    "HP Government Exams",
    "Defence & SSC",
    "Teaching Exams",
    "School Tuition"
  ],
  liveUrl: "https://adhyayan-academy.vercel.app",
  tags: [
    "Website Design & Development",
    "Strategic Positioning",
    "Digital Marketing",
    "Lead Generation",
    "Local Visibility"
  ]
};

export const ARVINEX_CASE_STUDY = {
  title: "Arvinex Venture — Digital Platform",
  subtitle: "Commerce & Brand Architecture",
  client: "Arvinex Venture Private Limited",
  location: "Enterprise Ecosystem",
  objective: "Build high-throughput commercial and wholesale customer experience.",
  contribution: "Full CMO architecture, product design, and customer journey engineering.",
  outcome: "Scaled enterprise customer acquisition and brand visibility.",
  liveUrl: "https://www.arvinex.store/",
  tags: ["Enterprise UI", "E-Commerce", "Growth Funnel", "Brand System"]
};

export const SARLA_CLIENT_STORY: ClientRelationshipData = {
  clientName: "Sarla's Food & Fashion",
  headline: "Trust is built through consistency.",
  description: "Developed a repeat-customer relationship through consistent service, professional communication and dedicated business support.",
  quote: "Long-term client relationships are built through reliability — not just one successful project.",
  principles: [
    "Uncompromising communication rhythm",
    "Continuous commercial & marketing advisory",
    "Reliable execution on every campaign milestone",
    "Proactive problem-solving for sustainable growth"
  ]
};

export const IMPACT_PILLARS: PillarItem[] = [
  {
    id: "marketing-pillar",
    title: "MARKETING",
    subtitle: "Online + Offline",
    description: "Harmonizing digital performance with tangible real-world market presence for 360-degree brand visibility.",
    highlight: "Full-Spectrum Reach"
  },
  {
    id: "web-pillar",
    title: "WEB",
    subtitle: "Professional Website Design",
    description: "Designing credibility-anchored digital platforms tailored for modern businesses and decisive conversions.",
    highlight: "Digital Headquarters"
  },
  {
    id: "growth-pillar",
    title: "GROWTH",
    subtitle: "Lead Generation + Acquisition",
    description: "Constructing predictable, high-intent lead pipelines that translate directly into top-line revenue expansion.",
    highlight: "Commercial Engine"
  },
  {
    id: "creative-pillar",
    title: "CREATIVE",
    subtitle: "Branding + Communication",
    description: "Shaping memorable visual identities and razor-sharp messaging that cuts through competitive market noise.",
    highlight: "Unmissable Identity"
  }
];

export const STATS = {
  clientsServed: "100+",
  clientsDetail: "Clients served with a focus on trust, quality and professional delivery.",
  experiencePillars: 4,
  coreDisciplines: 9,
  satisfactionFocus: "Reliability & Quality"
};

export const CONTACT_INFO: ContactInfoData & { whatsapp: string; whatsappUrl: string } = {
  name: "Sarthak Sharma",
  role: "Chief Marketing Officer",
  company: "Arvinex Venture Private Limited",
  email: "ssarthak558@gmail.com",
  phone: "+91 78763 37056",
  whatsapp: "+91 78763 37056",
  whatsappUrl: "https://wa.me/917876337056?text=" + encodeURIComponent("Hi Sarthak, I explored your 3D digital experience and would like to discuss a marketing project for my business."),
  instagram: "@arvinex.sarthak",
  linkedin: "/in/sarthaksharma"
};

export const VISION_STOPS = [
  { label: "TRUST", desc: "The bedrock of every enduring commercial relationship." },
  { label: "VALUE", desc: "Communicating undeniable clarity and competitive advantage." },
  { label: "CUSTOMERS", desc: "Connecting businesses with their ideal, high-lifetime-value audience." },
  { label: "GROWTH", desc: "The ultimate convergence where strategic marketing moves business." }
];

/* ------------------------------------------------------------------ */
/*  WEBSITE PORTFOLIO — single source of truth for all project cards   */
/* ------------------------------------------------------------------ */
/*
 * To add a new website (e.g. a plumber site later), append ONE object here.
 *  - featured: true      → large featured case-study block (Work section)
 *  - featured: false     → card in "Selected Website Projects"
 *  - type                → badge: 'Featured' | 'Client Project' | 'Client Concept' | 'Demo Project' | 'Template'
 *  - image (optional)    → import a screenshot and set it here; otherwise a live preview of liveUrl is shown
 * Demo / Template projects automatically get "View Live Demo →"; others get "View Live Website →".
 */
export const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    id: "arvinex-local",
    title: "ARVINEX LOCAL",
    category: "Local Growth & Digital Marketing",
    description: "ARVINEX LOCAL is a specialized local-growth division focused on helping businesses across Himachal Pradesh build their brand, improve their online presence and attract more customers through digital and offline marketing.",
    positioning: "Local Growth & Digital Marketing for Businesses in Himachal Pradesh",
    highlights: [
      "Website Design & Development",
      "Social Media Management",
      "Online Advertising",
      "WhatsApp Marketing",
      "Logo & Branding",
      "Flex & Banner Design",
      "Pamphlet Marketing",
      "Shop Board Design",
      "Visiting Card Design",
      "Business Counselling",
      "Local Business Growth"
    ],
    location: "Dharamshala • McLeod Ganj • Kangra • Palampur • Bir",
    liveUrl: "https://arvinexlocal.site",
    type: "Featured",
    featured: true,
    accent: "#00F0FF"
  },
  {
    id: "adhyayan-academy",
    title: "Adhyayan Academy",
    category: "Education / Coaching",
    description: ADHYAYAN_CASE_STUDY.description,
    highlights: ["About", "Courses", "Results", "Contact", "NEET / JEE", "HP Government Exams", "Defence & SSC", "Teaching Exams", "School Tuition"],
    location: "Shahpur, Kangra, Himachal Pradesh",
    liveUrl: "https://adhyayan-academy.vercel.app",
    type: "Client Project",
    featured: true,
    accent: "#0066FF"
  },
  {
    id: "arvinex-hotels",
    title: "Arvinex Hotels",
    category: "Hospitality / Hotel",
    description: "A premium Himalayan hotel website concept for a fictional property in McLeod Ganj, Dharamshala — built around rooms, experiences and a booking-focused journey.",
    positioning: "Premium hospitality website designed around Himalayan travel and hotel conversion.",
    highlights: ["Rooms & Suites", "Room Details", "Dining", "Facilities", "Experiences", "Events", "Location", "Availability Search", "Booking CTAs", "Guest Reviews", "FAQ", "Contact"],
    liveUrl: "https://arvinex-hotels-demo.vercel.app",
    type: "Demo Project",
    accent: "#C9A46A"
  },
  {
    id: "arvinex-wellness",
    title: "Arvinex Wellness",
    category: "Spa / Massage / Wellness",
    description: "A premium spa and wellness website concept designed for a McLeod Ganj / Dharamshala wellness business, guiding visitors from treatments to a booked appointment.",
    positioning: "A premium wellness website focused on experience, trust and appointment conversion.",
    highlights: ["Massage Treatments", "Spa Packages", "Couples Experiences", "Wellness Services", "Therapists", "Facilities", "Appointment Booking", "Treatment Availability", "Gift Cards", "Wellness Philosophy"],
    liveUrl: "https://arvinex-wellness-demo.vercel.app",
    type: "Demo Project",
    accent: "#8FB996"
  },
  {
    id: "arvinex-cabs",
    title: "Arvinex Cabs",
    category: "Taxi / Transportation",
    description: "A modern local taxi and cab service website concept designed for businesses serving Dharamshala, McLeod Ganj and Himachal Pradesh — built mobile-first for fast enquiries.",
    positioning: "A conversion-focused website concept for local taxi and transportation businesses.",
    highlights: ["Taxi Services", "Local Transportation", "Airport / Station Transfers", "Tour Packages", "Route Information", "Quick Enquiry", "Call / WhatsApp CTAs", "Mobile-First"],
    liveUrl: "https://arvinex-cabs-demo.vercel.app",
    type: "Demo Project",
    accent: "#FACC15"
  },
  {
    id: "arvinex-cafe",
    title: "ARVINEX CAFÉ",
    category: "Café / Food & Beverage",
    description: "A modern specialty café and mountain-dining website concept designed for a café business in McLeod Ganj / Dharamshala.",
    positioning: "A visually rich café website designed to sell the atmosphere and experience, not just the menu.",
    highlights: ["Café Identity", "Menu Presentation", "Specialty Coffee", "Food & Beverages", "Ambience", "Location", "Customer Experience", "Visit CTAs"],
    liveUrl: "https://arvinex-cafe-demo.vercel.app",
    type: "Demo Project",
    accent: "#D08C5B"
  },
  {
    id: "sarlas-food-fashion",
    title: "Sarla's Food & Fashion",
    category: "Beauty / Fashion / Retail",
    description: "A local retail/business website concept for Sarla's Food & Fashion, presenting beauty, fashion and everyday essentials in a clean, customer-friendly digital storefront.",
    positioning: "Built for fashion, beauty, retail and product-focused local stores.",
    highlights: ["Fashion", "Beauty", "Retail", "Local Store", "Product Showcase", "WhatsApp / Call Actions"],
    liveUrl: "https://demo-arvinex-cos.vercel.app",
    type: "Client Concept",
    accent: "#E879A6"
  },
  {
    id: "local-business-template",
    title: "Local Business Website",
    category: "Local Business / Service Business",
    description: "A flexible local-business website concept demonstrating how ARVINEX can create a professional online presence for service-based and local businesses.",
    positioning: "A ready foundation that adapts to almost any service-based local business.",
    highlights: ["Business Introduction", "Services", "Local Positioning", "Customer Conversion", "Contact / Enquiry", "Responsive Layout"],
    liveUrl: "https://startup-spark-template-87.lovable.app",
    type: "Template",
    accent: "#38BDF8"
  }
];

/** Whether a project should use the "demo" CTA wording */
export const isDemoProject = (p: WebsiteProject) => p.type === 'Demo Project' || p.type === 'Template';

/** WhatsApp link used by the "Start Your Project" CTA (same number as CONTACT_INFO) */
export const PROJECT_ENQUIRY_WHATSAPP_URL =
  "https://wa.me/917876337056?text=" +
  encodeURIComponent("Hi Sarthak, I saw the ARVINEX website portfolio and would like to discuss a website for my business.");
