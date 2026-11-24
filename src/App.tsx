import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Award,
  Check,
  CheckCircle2,
  Cloud,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Printer,
  Search,
  Share2,
  Sun,
  Terminal,
  X,
} from 'lucide-react';

/**
 * Clean inline brand icons for X, Facebook, and Instagram so every social link has
 * unmistakable, crisp vector iconography alongside Lucide icons.
 */
function XBrandIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookBrandIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramBrandIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Structured Portfolio Data — Strictly populated from Preetham Gowda G N's resume & links.
 */
const PORTFOLIO_DATA = {
  personal: {
    name: 'Preetham Gowda G N',
    shortName: 'Preetham Gowda G N',
    domain: 'preethamgowdagn.me',
    portraitSrc: 'https://i.postimg.cc/26hjqxsV/Whats-App-Image-2026-11-24-at-16-46-18.jpg',
    role: 'AI & Full-Stack Engineer · LLM Agents, RAG & Cloud Systems',
    statusBadge: 'Open to internships & research collaborations',
    tagline:
      'B.Tech CSE undergraduate at RV University, Bengaluru (CGPA 8.0/10), building LLM agents, RAG pipelines, serverless AWS data pipelines, and full-stack web apps.',
    affiliation: 'B.Tech CSE, RV University, Bengaluru · CGPA 8.0/10',
    currentlyRole: 'Software Development Intern · SmartRise AI · Bengaluru, India',
    location: 'Bengaluru, Karnataka, India',
    email: 'preethamjavalign@gmail.com',
    phone: '+91-7411157063',
    github: 'https://github.com/PreethamGowdaGN/PreethamJavali',
    githubHandle: 'PreethamGowdaGN/PreethamJavali',
    linkedin:
      'https://www.linkedin.com/in/preetham-gowda-g-n-4561a2323?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    linkedinHandle: '/in/preetham-gowda-g-n-4561a2323',
    x: 'https://x.com/preethamjavali',
    xHandle: '@preethamjavali',
    facebook: 'https://www.facebook.com/share/1FBJBdkZCZ/',
    facebookHandle: 'Preetham Gowda G N',
    instagram: 'https://www.instagram.com/preetham_javali?psln=bDY3NDFuNHAxdDVn',
    instagramHandle: '@preetham_javali',
    leetcode: 'https://leetcode.com/u/Preethamjavali',
    leetcodeHandle: '@Preethamjavali',
  },

  heroMetrics: [
    { value: '8.0 / 10', label: 'CGPA at RVU' },
    { value: '10,000+', label: 'AWS events/sec' },
    { value: '90.32%', label: 'Kannada-English NMT accuracy' },
    { value: '1,000+', label: 'Monthly virtual tour interactions' },
  ],

  about: {
    heading: 'Turning complex data & LLMs into production systems',
    paragraphs: [
      'I am a B.Tech Computer Science & Engineering student at RV University, Bengaluru (2024–2028, CGPA 8.0/10), focused on building LLM agents, RAG pipelines, serverless AWS data pipelines, and full-stack web apps.',
      'From schema-validated agentic workflows and semantic retrieval on FastAPI/Supabase to real-time serverless analytics and deep learning NLP research, I build software designed for measurable reliability.',
    ],
    education: [
      {
        degree: 'B.Tech in Computer Science and Engineering',
        institution: 'RV University, Bengaluru',
        score: 'CGPA: 8.0 / 10',
        period: '2024 – 2028',
      },
      {
        degree: 'Class XII (PUE)',
        institution: 'Vishwa Chetana PU College',
        score: '87.5%',
        period: '2024',
      },
      {
        degree: 'Class X (ICSE)',
        institution: "St Mary's Intl. School",
        score: '86%',
        period: '2022',
      },
    ],
    pillars: [
      {
        title: 'LLMs & Agentic Systems',
        icon: Cpu,
        description:
          'Tool/function calling LLM agents with session context, JSON Schema structured outputs, MCP, Claude API, embeddings, and semantic RAG.',
      },
      {
        title: 'Machine Learning & NLP',
        icon: Search,
        description:
          'Seq2Seq/LSTM neural machine translation, CNN image forensics, classification & regression models using TensorFlow, Keras, and Scikit-learn.',
      },
      {
        title: 'Cloud & Data Pipelines',
        icon: Cloud,
        description:
          'High-throughput serverless event streaming on AWS (Kinesis, Lambda, S3, Athena SQL, QuickSight) and Dockerized backend deployments.',
      },
      {
        title: 'Full-Stack Engineering',
        icon: Layers,
        description:
          'Production web applications with Next.js, React.js, TypeScript, Python FastAPI, Node.js/Express, OAuth, PostgreSQL/Supabase, and MongoDB.',
      },
    ],
  },

  experience: [
    {
      role: 'Software Development Intern — SmartRise AI',
      organization: 'RV University (under Prof. Suresh N)',
      location: 'Bengaluru, India',
      period: 'Jun 2026 – Jul 2026',
      bullets: [
        'Built SmartRise AI, a live platform helping startups get investor-ready (Next.js, TypeScript, Supabase).',
        'Developed an LLM agent using tool / function calling to fetch startup data from the DB, keeping session context.',
        'Generated personalised recommendations as structured JSON outputs, validated against a schema.',
        'Built an embeddings + RAG pipeline with semantic search (similarity ranking) to ground answers in startup data.',
        'Served AI features from a Python FastAPI backend in Docker; deployed the app to production on Vercel.',
        'Designed PostgreSQL tables and SQL queries on Supabase for profiles, BMC and pitch decks, with auth.',
        'Tested LLM output on sample profiles to refine prompts; ran functional and integration tests before release.',
      ],
      tags: [
        'Next.js',
        'TypeScript',
        'Python',
        'FastAPI',
        'Supabase',
        'PostgreSQL',
        'Docker',
        'RAG',
        'Vercel',
      ],
    },
    {
      role: 'Machine Learning Intern',
      organization: 'YHills Edutech Pvt Ltd',
      location: 'Remote',
      period: 'Jan 2026 – Feb 2026',
      bullets: [
        'Compared Logistic Regression, Random Forest and ANN models for loan eligibility in Python (best: 92% accuracy).',
        'Built a CNN in TensorFlow that flags forged or edited images with 94% precision.',
      ],
      tags: ['Python', 'TensorFlow', 'Scikit-learn', 'CNN', 'Random Forest', 'ANN'],
    },
  ],

  projects: [
    {
      title: 'Game Analytics Pipeline on AWS',
      subtitle: 'Real-Time Serverless Telemetry & BI Pipeline',
      period: 'Feb 2025 – Apr 2025',
      badge: '2025 · Cloud & Data',
      categories: ['Cloud & Data'],
      featured: true,
      summary:
        'Built a serverless pipeline streaming game events via Kinesis and Lambda into S3 with tuned Athena SQL queries and QuickSight dashboards that automated manual reporting.',
      metrics: [
        { value: '10,000+', label: 'Events / sec' },
        { value: '< 2s', label: 'Latency' },
        { value: '30% / ~90%', label: 'Lower Cost / Less Reporting' },
      ],
      tags: ['Kinesis', 'Lambda', 'S3', 'Athena SQL', 'QuickSight'],
    },
    {
      title: 'Heritage Hub',
      subtitle: 'Live Virtual Heritage Tour Platform',
      period: 'Jan 2025 – May 2025',
      badge: '2025 · Full-Stack',
      categories: ['Full-Stack'],
      featured: true,
      summary:
        'Live full-stack app for virtual tours of heritage sites, used by real visitors with OAuth login, community forums, an admin dashboard, and optimized MongoDB queries.',
      metrics: [
        { value: '1,000+', label: 'Monthly Tour Interactions' },
        { value: '+40%', label: 'Engagement (OAuth & Forums)' },
        { value: '-25%', label: 'Faster Load Time' },
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Energy Efficiency Analytics',
      subtitle: 'Building Heating & Cooling Load Prediction',
      period: 'Sep 2024 – Oct 2024',
      badge: '2024 · AI & ML',
      categories: ['AI & ML', 'Cloud & Data'],
      featured: true,
      summary:
        'Regression models on 768 UCI building samples predict heating and cooling loads with Power BI analytics; showcased at RVU Tech Expo 2025.',
      metrics: [
        { value: '96%', label: 'Prediction Accuracy' },
        { value: '768', label: 'UCI Building Samples' },
        { value: '2025', label: 'RVU Tech Expo Showcase' },
      ],
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Power BI'],
    },
    {
      title: 'SmartRise AI Agent & RAG Platform',
      subtitle: 'Investor-Readiness Agentic Workflow & Vector Retrieval',
      period: 'Jun 2026 – Jul 2026',
      badge: '2026 · AI & ML · Full-Stack',
      categories: ['AI & ML', 'Full-Stack'],
      featured: false,
      summary:
        'Developed a tool-calling LLM agent with session context, JSON Schema structured recommendations, and semantic RAG over startup profiles, BMC, and pitch decks.',
      metrics: [
        { value: 'JSON Schema', label: 'Validated Outputs' },
        { value: 'RAG + Tools', label: 'Semantic DB Grounding' },
        { value: 'Docker/Vercel', label: 'FastAPI + Next.js Prod' },
      ],
      tags: ['Next.js', 'TypeScript', 'FastAPI', 'Supabase', 'Claude API'],
    },
  ],

  research: {
    index: '01',
    date: 'Jun 2025',
    venue: 'International Journal for Multidisciplinary Research (IJFMR)',
    doi: '10.36948/ijfmr:2025.v07i03.46787',
    doiHref: 'https://doi.org/10.36948/ijfmr.2025.v07103.46787',
    title: 'Kannada to English Machine Translation Using Deep Neural Network',
    description:
      'Seq2Seq LSTM NLP model in TensorFlow achieving 90.32% translation accuracy; architecture & training refinement cut error rate from 20% to under 10%.',
    badges: [
      '90.32% Translation Accuracy',
      'Error Rate: 20% → <10%',
      'Seq2Seq LSTM · TensorFlow',
    ],
  },

  certifications: [
    {
      issuer: 'Anthropic',
      badge: 'Claude & MCP',
      items: [
        'Building with the Claude API',
        'Introduction to Model Context Protocol (MCP)',
        'AI Fluency: Framework & Foundations',
      ],
    },
    {
      issuer: 'Google Cloud',
      badge: 'Generative AI',
      items: [
        'Introduction to Generative AI Studio',
        'Innovating with Google Cloud AI',
      ],
    },
    {
      issuer: 'Microsoft / Azure',
      badge: 'Cloud & ML',
      items: [
        'Machine Learning using Python',
        'Azure Fundamentals',
      ],
    },
  ],

  skills: [
    {
      category: 'LLMs & Generative AI',
      items: [
        'LLM APIs (Claude API)',
        'Model Context Protocol (MCP)',
        'Prompt Engineering',
        'Tool / Function Calling',
        'AI Agents',
        'Agentic Workflows',
        'Structured Outputs (JSON Schema)',
        'Embeddings',
        'Semantic Search',
        'RAG',
        'Vector Search',
        'Recommendation Systems',
        'Prompt Evaluation',
        'Session / Context Management',
      ],
    },
    {
      category: 'Machine Learning & NLP',
      items: [
        'NLP',
        'Seq2Seq/ LSTM',
        'CNN',
        'TensorFlow',
        'Keras',
        'Scikit-learn',
        'Pandas',
        'NumPy',
      ],
    },
    {
      category: 'Backend & APIs',
      items: [
        'Python',
        'FastAPI',
        'Flask',
        'REST APIs',
        'Node.js',
        'Express.js',
        'Java',
        'C++',
        'Authentication (OAuth)',
      ],
    },
    {
      category: 'Databases & SQL',
      items: [
        'PostgreSQL',
        'SQL',
        'Supabase',
        'MongoDB',
        'Schema Design',
        'Query Optimisation',
        'AWS Athena',
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'Docker',
        'AWS (Lambda, Kinesis, S3, QuickSight)',
        'Serverless',
        'Vercel',
        'Git',
        'GitHub',
        'Production Deployment',
      ],
    },
    {
      category: 'Frontend, Data & Testing',
      items: [
        'Next.js',
        'React.js',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Power BI',
        'Functional & Integration Testing',
      ],
    },
  ],

  activity: {
    topLanguages: [
      { name: 'Python', share: '40%', color: 'bg-emerald-500' },
      { name: 'TypeScript', share: '22%', color: 'bg-sky-500' },
      { name: 'JavaScript', share: '16%', color: 'bg-yellow-500' },
      { name: 'Java', share: '12%', color: 'bg-amber-500' },
      { name: 'C++', share: '10%', color: 'bg-violet-500' },
    ],
    // Deterministic 26-week x 7-day activity intensity matrix (0..4)
    heatmapWeeks: [
      [0, 1, 2, 1, 0, 2, 1],
      [1, 2, 3, 2, 1, 1, 0],
      [0, 2, 2, 3, 2, 1, 1],
      [1, 1, 3, 4, 2, 2, 0],
      [2, 3, 2, 2, 3, 1, 1],
      [1, 2, 4, 3, 2, 1, 0],
      [0, 1, 2, 3, 3, 2, 1],
      [2, 2, 3, 4, 3, 1, 1],
      [1, 3, 3, 2, 2, 2, 0],
      [1, 2, 2, 3, 4, 2, 1],
      [2, 3, 4, 3, 2, 1, 1],
      [0, 2, 3, 3, 2, 2, 0],
      [1, 2, 3, 4, 3, 2, 1],
      [2, 3, 3, 2, 3, 1, 1],
      [1, 1, 2, 3, 4, 3, 1],
      [2, 3, 4, 3, 2, 2, 0],
      [1, 2, 3, 3, 4, 2, 1],
      [2, 4, 3, 3, 2, 1, 1],
      [1, 2, 3, 4, 3, 2, 1],
      [2, 3, 2, 3, 4, 2, 0],
      [1, 3, 4, 3, 3, 2, 1],
      [2, 2, 3, 4, 3, 2, 1],
      [1, 3, 3, 4, 4, 2, 1],
      [2, 3, 4, 3, 3, 2, 1],
      [2, 4, 3, 4, 3, 2, 1],
      [3, 3, 4, 4, 3, 2, 2],
    ],
  },
};

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const PROJECT_FILTERS = ['All', 'AI & ML', 'Cloud & Data', 'Full-Stack'];

/**
 * Subtle scroll-reveal wrapper replicating Framer Motion's `whileInView` reveal.
 */
function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  // Default to crisp editorial light mode (matches harshith-kt.me aesthetic) with toggle to dark mode
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [portraitError, setPortraitError] = useState(false);

  // Set page title matching harshith-kt.me convention
  useEffect(() => {
    document.title = `${PORTFOLIO_DATA.personal.name} · ${PORTFOLIO_DATA.personal.domain}`;
  }, []);

  // Load Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono)
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  // Track active navigation link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollY = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll & handle Escape key when Résumé modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && resumeOpen) {
        setResumeOpen(false);
      }
    };
    document.body.style.overflow = resumeOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [resumeOpen]);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    }
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2600);
  };

  const scrollToSection = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.getElementById(href.slice(1));
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  const matchingProjects =
    activeFilter === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((project) =>
          project.categories.includes(activeFilter)
        );

  const visibleProjects =
    activeFilter === 'All' && !showAllProjects
      ? matchingProjects.filter((project) => project.featured)
      : matchingProjects;

  const extraProjectsCount = PORTFOLIO_DATA.projects.filter(
    (project) => !project.featured
  ).length;

  // Editorial theme palette tokens (Crisp Light Default + Refined Dark Mode)
  const theme = darkMode
    ? {
        bg: 'bg-[#0B0B0D]',
        surface: 'bg-[#121215]',
        surfaceSubtle: 'bg-[#17171B]',
        surfaceHover: 'hover:border-zinc-700 hover:bg-[#16161A]',
        border: 'border-zinc-800/90',
        borderDivider: 'border-zinc-800/60',
        textPrimary: 'text-zinc-100',
        textSecondary: 'text-zinc-400',
        textMuted: 'text-zinc-500',
        accentText: 'text-emerald-400',
        accentBg: 'bg-emerald-500/10',
        accentBorder: 'border-emerald-500/25',
        pillBg: 'bg-zinc-900',
        pillText: 'text-zinc-300',
        pillBorder: 'border-zinc-800',
        navBg: 'bg-[#0B0B0D]/85',
        primaryBtn: 'bg-zinc-100 text-zinc-950 hover:bg-white shadow-sm',
        secondaryBtn:
          'bg-[#121215] text-zinc-200 border-zinc-800 hover:bg-zinc-800/80',
      }
    : {
        bg: 'bg-[#FAFAFA]',
        surface: 'bg-white',
        surfaceSubtle: 'bg-zinc-50/90',
        surfaceHover: 'hover:border-zinc-300 hover:shadow-[0_6px_24px_-8px_rgba(0,0,0,0.06)]',
        border: 'border-zinc-200/90',
        borderDivider: 'border-zinc-200/70',
        textPrimary: 'text-zinc-900',
        textSecondary: 'text-zinc-600',
        textMuted: 'text-zinc-500',
        accentText: 'text-emerald-700',
        accentBg: 'bg-emerald-50',
        accentBorder: 'border-emerald-200/90',
        pillBg: 'bg-zinc-100/90',
        pillText: 'text-zinc-700',
        pillBorder: 'border-zinc-200/80',
        navBg: 'bg-[#FAFAFA]/85',
        primaryBtn: 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm',
        secondaryBtn:
          'bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-100/80',
      };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme.bg} ${theme.textPrimary} selection:bg-emerald-500/20 selection:text-emerald-700`}
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* Global Typography & Print Styles */}
      <style>{`
        .font-heading { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; }
        .font-mono-code { font-family: 'JetBrains Mono', monospace; }
        html { scroll-behavior: smooth; }
        @media print {
          body * { visibility: hidden; }
          #printable-resume-sheet, #printable-resume-sheet * { visibility: visible; }
          #printable-resume-sheet {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: #ffffff !important;
            color: #111827 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      {/* Copied Email Floating Toast */}
      {copiedToast && (
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white shadow-lg">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>Copied {PORTFOLIO_DATA.personal.email} to clipboard!</span>
        </div>
      )}

      {/* =====================================================================
          1. STICKY FROSTED-GLASS TOP NAVIGATION BAR (#top)
      ===================================================================== */}
      <header
        className={`sticky top-0 z-40 border-b ${theme.border} ${theme.navBg} backdrop-blur-md`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Brand Mark matching harshith-kt.me style */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-heading text-sm font-bold tracking-tight sm:text-base">
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <span
              className={`font-mono-code hidden rounded-md border ${theme.pillBorder} ${theme.pillBg} px-2 py-0.5 text-[11px] font-medium ${theme.textMuted} sm:inline-block`}
            >
              {PORTFOLIO_DATA.personal.domain}
            </span>
          </a>

          {/* Desktop Section Links */}
          <nav aria-label="Primary Navigation" className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? `${theme.textPrimary} ${
                          darkMode ? 'bg-zinc-800/90' : 'bg-zinc-200/80'
                        }`
                      : `${theme.textSecondary} hover:${theme.textPrimary}`
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle + Résumé Modal Trigger */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border ${theme.border} ${theme.surface} ${theme.textSecondary} transition hover:${theme.textPrimary}`}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition ${theme.primaryBtn}`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Résumé</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`flex h-9 w-9 items-center justify-center rounded-lg border ${theme.border} ${theme.surface} lg:hidden`}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`border-t ${theme.border} ${theme.surface} px-4 py-3 lg:hidden`}>
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${theme.textSecondary} hover:${theme.textPrimary}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================================
            2. HERO SECTION (SPLIT EDITORIAL LAYOUT + PORTRAIT & BENTO METRIC CARD)
        ===================================================================== */}
        <section className="py-12 sm:py-18 lg:py-20">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Editorial Intro & CTAs */}
            <div className="lg:col-span-7 lg:pt-2">
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border ${theme.accentBorder} ${theme.accentBg} px-3.5 py-1.5`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className={`font-mono-code text-xs font-medium ${theme.accentText}`}>
                  {PORTFOLIO_DATA.personal.statusBadge}
                </span>
              </div>

              <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                {PORTFOLIO_DATA.personal.name}
              </h1>

              <p
                className={`font-heading mt-3 text-base font-semibold sm:text-xl ${theme.textSecondary}`}
              >
                {PORTFOLIO_DATA.personal.role}
              </p>

              <p
                className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${theme.textSecondary}`}
              >
                {PORTFOLIO_DATA.personal.tagline}
              </p>

              <div className={`mt-5 flex items-center gap-2 text-xs sm:text-sm ${theme.textMuted}`}>
                <GraduationCap className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>{PORTFOLIO_DATA.personal.affiliation}</span>
              </div>

              {/* Action Buttons & Social Icons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${theme.primaryBtn}`}
                >
                  <span>View my work</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${theme.secondaryBtn}`}
                >
                  <FileText className="h-4 w-4" />
                  <span>View résumé</span>
                </button>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repository"
                    title="GitHub (github.com/PreethamGowdaGN/PreethamJavali)"
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.surface} ${theme.textSecondary} transition hover:${theme.textPrimary}`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    title="LinkedIn (Preetham Gowda G N)"
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.surface} ${theme.textSecondary} transition hover:${theme.textPrimary}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.x}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X profile"
                    title="X (@preethamjavali)"
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.surface} ${theme.textSecondary} transition hover:${theme.textPrimary}`}
                  >
                    <XBrandIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook profile"
                    title="Facebook (Preetham Gowda G N)"
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.surface} ${theme.textSecondary} transition hover:${theme.textPrimary}`}
                  >
                    <FacebookBrandIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram profile"
                    title="Instagram (@preetham_javali)"
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.surface} ${theme.textSecondary} transition hover:${theme.textPrimary}`}
                  >
                    <InstagramBrandIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    aria-label="Email Preetham Gowda G N"
                    title={PORTFOLIO_DATA.personal.email}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.surface} ${theme.textSecondary} transition hover:${theme.textPrimary}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Studio Portrait Card + "Currently" Strip + 2x2 Metric Grid */}
            <div className="lg:col-span-5">
              <div
                className={`overflow-hidden rounded-2xl border ${theme.border} ${theme.surface} shadow-[0_6px_28px_-8px_rgba(0,0,0,0.08)]`}
              >
                {/* Framed Studio Portrait Container (Matches Harshith KT's portrait frame) */}
                <div className="relative aspect-[4/3.6] w-full overflow-hidden bg-white">
                  {!portraitError ? (
                    <img
                      src={PORTFOLIO_DATA.personal.portraitSrc}
                      alt="Preetham Gowda G N — Studio Portrait"
                      onError={() => setPortraitError(true)}
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-zinc-100 text-zinc-500">
                      <div className="font-heading flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-900 text-2xl font-extrabold text-white">
                        PG
                      </div>
                      <span className="mt-3 text-xs font-medium text-zinc-600">
                        Preetham Gowda G N
                      </span>
                    </div>
                  )}

                  {/* Subtle Domain Pill Overlay at Top-Right of Portrait */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="font-mono-code inline-flex items-center gap-1.5 rounded-full border border-zinc-200/90 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-zinc-700 shadow-xs backdrop-blur-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {PORTFOLIO_DATA.personal.domain}
                    </span>
                  </div>
                </div>

                {/* "Currently" Role Strip Directly Underneath Portrait */}
                <div
                  className={`border-t ${theme.border} px-5 py-3.5 ${theme.surface}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`font-mono-code text-[11px] font-semibold uppercase ${theme.accentText}`}>
                      Currently
                    </span>
                    <span className={`font-mono-code text-[11px] ${theme.textMuted}`}>
                      RV University
                    </span>
                  </div>
                  <div className="mt-1 text-xs font-semibold leading-snug sm:text-sm">
                    {PORTFOLIO_DATA.personal.currentlyRole}
                  </div>
                </div>

                {/* 2x2 Metric Callouts Grid */}
                <div
                  className={`grid grid-cols-2 border-t ${theme.border} ${theme.surfaceSubtle}`}
                >
                  {PORTFOLIO_DATA.heroMetrics.map((metric, idx) => (
                    <div
                      key={metric.label}
                      className={`p-4 sm:p-5 ${
                        idx % 2 === 0 ? `border-r ${theme.borderDivider}` : ''
                      } ${idx < 2 ? `border-b ${theme.borderDivider}` : ''}`}
                    >
                      <div className="font-mono-code text-lg font-bold tracking-tight sm:text-2xl">
                        {metric.value}
                      </div>
                      <div className={`mt-0.5 text-xs ${theme.textSecondary}`}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. ABOUT & 4 PILLAR CARDS SECTION (#about)
        ===================================================================== */}
        <section id="about" className={`border-t ${theme.border} py-16 sm:py-20`}>
          <RevealSection>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Narrative Bio & Academic Credentials */}
              <div className="lg:col-span-5">
                <p
                  className={`font-mono-code text-xs font-semibold tracking-widest uppercase ${theme.accentText}`}
                >
                  ABOUT
                </p>
                <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  {PORTFOLIO_DATA.about.heading}
                </h2>

                <div
                  className={`mt-4 space-y-4 text-sm leading-relaxed sm:text-base ${theme.textSecondary}`}
                >
                  {PORTFOLIO_DATA.about.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Academic Background Card */}
                <div className={`mt-7 rounded-2xl border ${theme.border} ${theme.surface} p-5`}>
                  <div className="font-mono-code mb-3.5 flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-emerald-600">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>Education</span>
                  </div>
                  <div className={`space-y-3 divide-y ${theme.borderDivider}`}>
                    {PORTFOLIO_DATA.about.education.map((edu, idx) => (
                      <div key={edu.degree} className={idx > 0 ? 'pt-3' : ''}>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs font-semibold">{edu.degree}</span>
                          <span className={`font-mono-code text-[11px] ${theme.textMuted}`}>
                            {edu.period}
                          </span>
                        </div>
                        <div
                          className={`mt-0.5 flex items-center justify-between text-xs ${theme.textSecondary}`}
                        >
                          <span>{edu.institution}</span>
                          <span className={`font-mono-code font-semibold ${theme.accentText}`}>
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Core Engineering Pillars */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                {PORTFOLIO_DATA.about.pillars.map((pillar) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className={`flex flex-col justify-between rounded-2xl border ${theme.border} ${theme.surface} p-6 transition-all duration-200 ${theme.surfaceHover}`}
                    >
                      <div>
                        <div
                          className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${theme.accentBorder} ${theme.accentBg}`}
                        >
                          <IconComponent className={`h-5 w-5 ${theme.accentText}`} />
                        </div>
                        <h3 className="font-heading text-base font-bold">{pillar.title}</h3>
                        <p className={`mt-2 text-sm leading-relaxed ${theme.textSecondary}`}>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealSection>
        </section>

        {/* =====================================================================
            4. EXPERIENCE SECTION (#experience)
        ===================================================================== */}
        <section id="experience" className={`border-t ${theme.border} py-16 sm:py-20`}>
          <RevealSection>
            <div className="mb-10">
              <p
                className={`font-mono-code text-xs font-semibold tracking-widest uppercase ${theme.accentText}`}
              >
                EXPERIENCE
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Where I&apos;ve worked
              </h2>
            </div>

            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <article
                  key={exp.role}
                  className={`rounded-2xl border ${theme.border} ${theme.surface} p-6 sm:p-8 transition-all duration-200 ${theme.surfaceHover}`}
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-heading text-lg font-bold sm:text-xl">
                        {exp.role}
                      </h3>
                      <div
                        className={`mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${theme.textSecondary}`}
                      >
                        <span className="font-medium">{exp.organization}</span>
                        <span className={theme.textMuted}>•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`font-mono-code inline-flex w-fit shrink-0 items-center rounded-lg border ${theme.pillBorder} ${theme.pillBg} px-3 py-1 text-xs font-medium ${theme.pillText}`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className={`mt-5 space-y-2.5 text-sm leading-relaxed ${theme.textSecondary}`}>
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono-code rounded-md border ${theme.pillBorder} ${theme.pillBg} px-2.5 py-1 text-[11px] font-medium ${theme.pillText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* =====================================================================
            5. PROJECTS SECTION (#projects) WITH CATEGORY FILTER TABS
        ===================================================================== */}
        <section id="projects" className={`border-t ${theme.border} py-16 sm:py-20`}>
          <RevealSection>
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p
                  className={`font-mono-code text-xs font-semibold tracking-widest uppercase ${theme.accentText}`}
                >
                  PROJECTS
                </p>
                <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Things I&apos;ve built
                </h2>
              </div>

              {/* Filter Tabs */}
              <div
                role="tablist"
                aria-label="Project categories"
                className={`inline-flex w-fit flex-wrap items-center gap-1 rounded-xl border ${theme.border} ${theme.surface} p-1`}
              >
                {PROJECT_FILTERS.map((filter) => {
                  const isSelected = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => {
                        setActiveFilter(filter);
                        setShowAllProjects(false);
                      }}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                        isSelected
                          ? theme.primaryBtn
                          : `${theme.textSecondary} hover:${theme.textPrimary}`
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Metric-First Project Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project) => (
                <article
                  key={project.title}
                  className={`flex flex-col justify-between rounded-2xl border ${theme.border} ${theme.surface} p-6 transition-all duration-200 ${theme.surfaceHover}`}
                >
                  <div>
                    {/* Top Metadata Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`font-mono-code rounded-md border ${theme.accentBorder} ${theme.accentBg} px-2.5 py-0.5 text-[11px] font-medium ${theme.accentText}`}
                      >
                        {project.badge}
                      </span>
                      <span className={`font-mono-code text-[11px] ${theme.textMuted}`}>
                        {project.period}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-heading mt-4 text-lg font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className={`mt-0.5 text-xs font-medium ${theme.accentText}`}>
                      {project.subtitle}
                    </p>

                    {/* Summary */}
                    <p className={`mt-3 text-sm leading-relaxed ${theme.textSecondary}`}>
                      {project.summary}
                    </p>

                    {/* 3-Column Metric Callout Strip */}
                    <div
                      className={`mt-5 grid grid-cols-3 divide-x ${theme.borderDivider} rounded-xl border ${theme.border} ${theme.surfaceSubtle}`}
                    >
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="p-2.5">
                          <div className="font-mono-code text-xs font-bold">
                            {metric.value}
                          </div>
                          <div className={`mt-0.5 text-[10px] leading-tight ${theme.textMuted}`}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono-code rounded-md border ${theme.pillBorder} ${theme.pillBg} px-2.5 py-1 text-[11px] font-medium ${theme.pillText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {activeFilter === 'All' && extraProjectsCount > 0 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllProjects((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${theme.secondaryBtn}`}
                >
                  <span>
                    {showAllProjects
                      ? 'Show featured projects'
                      : `Show ${extraProjectsCount} more project${extraProjectsCount > 1 ? 's' : ''}`}
                  </span>
                </button>
              </div>
            )}
          </RevealSection>
        </section>

        {/* =====================================================================
            6. RESEARCH & PUBLICATIONS SECTION (#research)
        ===================================================================== */}
        <section id="research" className={`border-t ${theme.border} py-16 sm:py-20`}>
          <RevealSection>
            <div className="mb-10">
              <p
                className={`font-mono-code text-xs font-semibold tracking-widest uppercase ${theme.accentText}`}
              >
                RESEARCH
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Publications &amp; presentations
              </h2>
            </div>

            <article
              className={`rounded-2xl border ${theme.border} ${theme.surface} p-6 sm:p-8 transition-all duration-200 ${theme.surfaceHover}`}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4 sm:gap-5">
                  <span
                    className={`font-mono-code flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${theme.accentBorder} ${theme.accentBg} text-sm font-bold ${theme.accentText}`}
                  >
                    {PORTFOLIO_DATA.research.index}
                  </span>

                  <div>
                    <div
                      className={`font-mono-code flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs ${theme.textMuted}`}
                    >
                      <span className="font-semibold text-emerald-600">
                        {PORTFOLIO_DATA.research.date}
                      </span>
                      <span>|</span>
                      <span>{PORTFOLIO_DATA.research.venue}</span>
                      <span>|</span>
                      <a
                        href={PORTFOLIO_DATA.research.doiHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 underline decoration-zinc-400/50 underline-offset-4 hover:text-emerald-600"
                      >
                        <span>DOI: {PORTFOLIO_DATA.research.doi}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <h3 className="font-heading mt-2.5 text-lg font-bold sm:text-xl">
                      {PORTFOLIO_DATA.research.title}
                    </h3>

                    <p
                      className={`mt-3 max-w-3xl text-sm leading-relaxed ${theme.textSecondary}`}
                    >
                      {PORTFOLIO_DATA.research.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {PORTFOLIO_DATA.research.badges.map((badge) => (
                        <span
                          key={badge}
                          className={`font-mono-code rounded-lg border ${theme.accentBorder} ${theme.accentBg} px-3 py-1 text-xs font-medium ${theme.accentText}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </RevealSection>
        </section>

        {/* =====================================================================
            7. CERTIFICATIONS & CREDENTIALS SECTION (#certifications)
        ===================================================================== */}
        <section id="certifications" className={`border-t ${theme.border} py-16 sm:py-20`}>
          <RevealSection>
            <div className="mb-10">
              <p
                className={`font-mono-code text-xs font-semibold tracking-widest uppercase ${theme.accentText}`}
              >
                CERTIFICATIONS
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Verified learning &amp; certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PORTFOLIO_DATA.certifications.map((group) => (
                <div
                  key={group.issuer}
                  className={`rounded-2xl border ${theme.border} ${theme.surface} p-6 transition-all duration-200 ${theme.surfaceHover}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-emerald-600" />
                      <h3 className="font-heading text-base font-bold">{group.issuer}</h3>
                    </div>
                    <span
                      className={`font-mono-code rounded-md border ${theme.pillBorder} ${theme.pillBg} px-2 py-0.5 text-[10px] font-medium ${theme.textMuted}`}
                    >
                      {group.badge}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {group.items.map((cert) => (
                      <li key={cert} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span className={theme.textSecondary}>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* =====================================================================
            8. TECHNICAL SKILLS & CODING ACTIVITY SECTION (#skills)
        ===================================================================== */}
        <section id="skills" className={`border-t ${theme.border} py-16 sm:py-20`}>
          <RevealSection>
            <div className="mb-10">
              <p
                className={`font-mono-code text-xs font-semibold tracking-widest uppercase ${theme.accentText}`}
              >
                SKILLS &amp; CODING ACTIVITY
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Tools, technologies &amp; activity
              </h2>
            </div>

            {/* 6 Categorized Skill Groups */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO_DATA.skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className={`rounded-2xl border ${theme.border} ${theme.surface} p-6 transition-all duration-200 ${theme.surfaceHover}`}
                >
                  <h3 className="font-heading text-sm font-bold tracking-tight">
                    {skillGroup.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className={`font-mono-code rounded-md border ${theme.pillBorder} ${theme.pillBg} px-2.5 py-1 text-[11px] font-medium ${theme.pillText} transition hover:border-emerald-500/40`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Coding Activity: GitHub Heatmap + Top Languages + LeetCode */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div
                className={`flex flex-col justify-between rounded-2xl border ${theme.border} ${theme.surface} p-6 sm:p-7 lg:col-span-8`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Github className="h-5 w-5" />
                      <div>
                        <h3 className="font-heading text-base font-bold">GitHub Contribution Activity</h3>
                        <p className={`font-mono-code text-xs ${theme.textMuted}`}>
                          {PORTFOLIO_DATA.personal.githubHandle}
                        </p>
                      </div>
                    </div>

                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-lg border ${theme.border} ${theme.surfaceSubtle} px-3 py-1.5 text-xs font-medium transition hover:border-emerald-500/40`}
                    >
                      <span>View GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
                    </a>
                  </div>

                  {/* Contribution Heatmap Grid */}
                  <div className="mt-6 overflow-x-auto pb-1">
                    <div className="inline-flex gap-1.5">
                      {PORTFOLIO_DATA.activity.heatmapWeeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-1.5">
                          {week.map((level, dIdx) => {
                            const cellColors = darkMode
                              ? [
                                  'bg-zinc-800/80',
                                  'bg-emerald-950',
                                  'bg-emerald-800',
                                  'bg-emerald-600',
                                  'bg-emerald-400',
                                ]
                              : [
                                  'bg-zinc-100',
                                  'bg-emerald-100',
                                  'bg-emerald-300',
                                  'bg-emerald-500',
                                  'bg-emerald-600',
                                ];
                            return (
                              <span
                                key={dIdx}
                                className={`h-3 w-3 rounded-[3px] ${cellColors[level]}`}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Languages Breakdown */}
                <div className={`mt-6 border-t ${theme.borderDivider} pt-5`}>
                  <div className="mb-2.5 flex items-center justify-between text-xs">
                    <span className={`font-mono-code font-semibold uppercase ${theme.textMuted}`}>
                      Top Languages
                    </span>
                    <span className={`font-mono-code text-[11px] ${theme.textMuted}`}>
                      Python · TypeScript · JavaScript · Java · C++
                    </span>
                  </div>

                  <div className="flex h-2 w-full overflow-hidden rounded-full bg-zinc-200/70 dark:bg-zinc-800">
                    {PORTFOLIO_DATA.activity.topLanguages.map((lang) => (
                      <div
                        key={lang.name}
                        style={{ width: lang.share }}
                        className={lang.color}
                        title={`${lang.name}: ${lang.share}`}
                      />
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
                    {PORTFOLIO_DATA.activity.topLanguages.map((lang) => (
                      <div key={lang.name} className="flex items-center gap-1.5">
                        <span className={`h-2.5 w-2.5 rounded-full ${lang.color}`} />
                        <span className="font-medium">{lang.name}</span>
                        <span className={`font-mono-code ${theme.textMuted}`}>{lang.share}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LeetCode & Developer Profiles Card */}
              <div
                className={`flex flex-col justify-between rounded-2xl border ${theme.border} ${theme.surface} p-6 sm:p-7 lg:col-span-4`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <Code2 className="h-5 w-5 text-amber-500" />
                      <div>
                        <h3 className="font-heading text-base font-bold">LeetCode</h3>
                        <p className={`font-mono-code text-xs ${theme.textMuted}`}>
                          {PORTFOLIO_DATA.personal.leetcodeHandle}
                        </p>
                      </div>
                    </div>

                    <a
                      href={PORTFOLIO_DATA.personal.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1 rounded-lg border ${theme.border} ${theme.surfaceSubtle} px-2.5 py-1.5 text-xs font-medium transition hover:border-emerald-500/40`}
                    >
                      <span>Profile</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
                    </a>
                  </div>

                  <p className={`mt-4 text-sm leading-relaxed ${theme.textSecondary}`}>
                    Regular DSA &amp; algorithmic problem-solving across arrays, trees, graphs, and dynamic programming in Python, TypeScript/JavaScript, Java, and C++.
                  </p>
                </div>

                <div className={`mt-6 space-y-2.5 border-t ${theme.borderDivider} pt-5`}>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className={theme.textMuted}>GitHub</span>
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code truncate font-semibold text-emerald-600 hover:underline"
                    >
                      {PORTFOLIO_DATA.personal.githubHandle}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className={theme.textMuted}>LinkedIn</span>
                    <a
                      href={PORTFOLIO_DATA.personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code truncate font-semibold text-emerald-600 hover:underline"
                    >
                      {PORTFOLIO_DATA.personal.linkedinHandle}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className={theme.textMuted}>X</span>
                    <a
                      href={PORTFOLIO_DATA.personal.x}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code truncate font-semibold text-emerald-600 hover:underline"
                    >
                      {PORTFOLIO_DATA.personal.xHandle}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className={theme.textMuted}>Instagram</span>
                    <a
                      href={PORTFOLIO_DATA.personal.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code truncate font-semibold text-emerald-600 hover:underline"
                    >
                      {PORTFOLIO_DATA.personal.instagramHandle}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className={theme.textMuted}>Facebook</span>
                    <a
                      href={PORTFOLIO_DATA.personal.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code truncate font-semibold text-emerald-600 hover:underline"
                    >
                      {PORTFOLIO_DATA.personal.facebookHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </section>

        {/* =====================================================================
            9. CONTACT SECTION (#contact)
        ===================================================================== */}
        <section id="contact" className={`border-t ${theme.border} py-16 sm:py-20`}>
          <RevealSection>
            <div
              className={`rounded-3xl border ${theme.border} ${theme.surface} p-8 sm:p-12`}
            >
              <div className="max-w-2xl">
                <p
                  className={`font-mono-code text-xs font-semibold tracking-widest uppercase ${theme.accentText}`}
                >
                  CONTACT
                </p>
                <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight sm:text-4xl">
                  Let&apos;s build something together
                </h2>
                <p className={`mt-3 text-sm leading-relaxed sm:text-base ${theme.textSecondary}`}>
                  Reach out for internships, research collaborations, LLM &amp; RAG systems, or full-stack engineering roles.
                </p>

                {/* Primary Email Actions */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${theme.primaryBtn}`}
                  >
                    {copiedToast ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${theme.secondaryBtn}`}
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send an email</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setResumeOpen(true)}
                    className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${theme.secondaryBtn}`}
                  >
                    <FileText className="h-4 w-4" />
                    <span>View résumé</span>
                  </button>
                </div>

                {/* Direct Social Links Row */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg border ${theme.border} ${theme.surfaceSubtle} px-3 py-1.5 text-xs font-medium ${theme.textSecondary} transition hover:border-emerald-500/40 hover:${theme.textPrimary}`}
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg border ${theme.border} ${theme.surfaceSubtle} px-3 py-1.5 text-xs font-medium ${theme.textSecondary} transition hover:border-emerald-500/40 hover:${theme.textPrimary}`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.x}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg border ${theme.border} ${theme.surfaceSubtle} px-3 py-1.5 text-xs font-medium ${theme.textSecondary} transition hover:border-emerald-500/40 hover:${theme.textPrimary}`}
                  >
                    <XBrandIcon className="h-3.5 w-3.5" />
                    <span>X</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg border ${theme.border} ${theme.surfaceSubtle} px-3 py-1.5 text-xs font-medium ${theme.textSecondary} transition hover:border-emerald-500/40 hover:${theme.textPrimary}`}
                  >
                    <InstagramBrandIcon className="h-3.5 w-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg border ${theme.border} ${theme.surfaceSubtle} px-3 py-1.5 text-xs font-medium ${theme.textSecondary} transition hover:border-emerald-500/40 hover:${theme.textPrimary}`}
                  >
                    <FacebookBrandIcon className="h-3.5 w-3.5" />
                    <span>Facebook</span>
                  </a>
                </div>

                {/* Direct Contact Details */}
                <div
                  className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t ${theme.borderDivider} pt-6 text-xs sm:text-sm ${theme.textSecondary}`}
                >
                  <span className="font-mono-code font-medium">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                  <span className={theme.textMuted}>•</span>
                  <a
                    href="tel:+917411157063"
                    className="inline-flex items-center gap-1.5 hover:text-emerald-600"
                  >
                    <Phone className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="font-mono-code">{PORTFOLIO_DATA.personal.phone}</span>
                  </a>
                  <span className={theme.textMuted}>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{PORTFOLIO_DATA.personal.location}</span>
                  </span>
                </div>
              </div>
            </div>
          </RevealSection>
        </section>
      </main>

      {/* =====================================================================
          10. FOOTER
      ===================================================================== */}
      <footer className={`border-t ${theme.border} py-8`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p className={theme.textMuted}>
            {PORTFOLIO_DATA.personal.domain} &middot; &copy; 2026 {PORTFOLIO_DATA.personal.name}
          </p>
          <div className={`flex flex-wrap items-center gap-4 ${theme.textSecondary}`}>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-600"
            >
              Back to top ↑
            </a>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.personal.x}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600"
            >
              X
            </a>
            <a
              href={PORTFOLIO_DATA.personal.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600"
            >
              Instagram
            </a>
            <a
              href={PORTFOLIO_DATA.personal.facebook}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600"
            >
              Facebook
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="hover:text-emerald-600"
            >
              Résumé
            </button>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          INTERACTIVE RÉSUMÉ PREVIEW & PRINT/DOWNLOAD MODAL
      ===================================================================== */}
      {resumeOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Preetham Gowda G N Résumé Preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white text-zinc-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Toolbar */}
            <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-emerald-600" />
                <span className="font-heading text-sm font-bold">
                  Preetham Gowda G N — Curriculum Vitae
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-zinc-800"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setResumeOpen(false)}
                  aria-label="Close résumé modal"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Formatted Printable Résumé Sheet */}
            <div
              id="printable-resume-sheet"
              className="overflow-y-auto bg-white p-6 text-zinc-900 sm:p-10"
            >
              {/* Resume Header */}
              <div className="border-b-2 border-zinc-900 pb-4">
                <h2 className="font-heading text-2xl font-extrabold tracking-tight uppercase sm:text-3xl">
                  PREETHAM GOWDA G N
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-600">
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                  <span>•</span>
                  <span>{PORTFOLIO_DATA.personal.phone}</span>
                  <span>•</span>
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-zinc-900"
                  >
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-zinc-900"
                  >
                    GitHub
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.personal.x}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-zinc-900"
                  >
                    X (@preethamjavali)
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.personal.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-zinc-900"
                  >
                    Instagram
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.personal.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-zinc-900"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mt-5">
                <h3 className="font-heading border-b border-zinc-200 pb-1 text-xs font-bold tracking-wider uppercase text-zinc-900">
                  Technical Skills
                </h3>
                <div className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-zinc-700">
                  {PORTFOLIO_DATA.skills.map((group) => (
                    <div key={group.category}>
                      <span className="font-semibold text-zinc-900">{group.category}: </span>
                      <span>{group.items.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mt-5">
                <h3 className="font-heading border-b border-zinc-200 pb-1 text-xs font-bold tracking-wider uppercase text-zinc-900">
                  Education
                </h3>
                <div className="mt-2.5 space-y-1.5 text-xs text-zinc-700">
                  <div className="flex flex-wrap justify-between gap-2">
                    <span>
                      <strong className="text-zinc-900">RV University, Bengaluru</strong> — B.Tech
                      in Computer Science and Engineering (CGPA: 8.0/10)
                    </span>
                    <span className="font-mono-code font-medium">2024 – 2028</span>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <span>
                      <strong className="text-zinc-900">Class XII (PUE)</strong>, Vishwa Chetana PU
                      College — 87.5% (2024) |{' '}
                      <strong className="text-zinc-900">Class X (ICSE)</strong>, St Mary&apos;s Intl.
                      School — 86% (2022)
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mt-5">
                <h3 className="font-heading border-b border-zinc-200 pb-1 text-xs font-bold tracking-wider uppercase text-zinc-900">
                  Experience
                </h3>
                <div className="mt-2.5 space-y-4">
                  {PORTFOLIO_DATA.experience.map((exp) => (
                    <div key={exp.role} className="text-xs">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <strong className="text-zinc-900">{exp.role}</strong>
                        <span className="font-mono-code text-zinc-600">{exp.period}</span>
                      </div>
                      <div className="flex flex-wrap justify-between text-zinc-600">
                        <span>{exp.organization}</span>
                        <span>{exp.location}</span>
                      </div>
                      <ul className="mt-1.5 list-disc space-y-1 pl-4 text-zinc-700">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mt-5">
                <h3 className="font-heading border-b border-zinc-200 pb-1 text-xs font-bold tracking-wider uppercase text-zinc-900">
                  Projects
                </h3>
                <div className="mt-2.5 space-y-3 text-xs">
                  {PORTFOLIO_DATA.projects.map((proj) => (
                    <div key={proj.title}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span>
                          <strong className="text-zinc-900">{proj.title}</strong> |{' '}
                          <span className="text-zinc-600">{proj.tags.join(', ')}</span>
                        </span>
                        <span className="font-mono-code text-zinc-600">{proj.period}</span>
                      </div>
                      <p className="mt-1 text-zinc-700">{proj.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publication */}
              <div className="mt-5">
                <h3 className="font-heading border-b border-zinc-200 pb-1 text-xs font-bold tracking-wider uppercase text-zinc-900">
                  Publication
                </h3>
                <div className="mt-2.5 text-xs text-zinc-700">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <strong className="text-zinc-900">{PORTFOLIO_DATA.research.title}</strong>
                    <span className="font-mono-code text-zinc-600">Jun 2025</span>
                  </div>
                  <div className="text-zinc-600">
                    {PORTFOLIO_DATA.research.venue} | DOI: {PORTFOLIO_DATA.research.doi}
                  </div>
                  <p className="mt-1">{PORTFOLIO_DATA.research.description}</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-5">
                <h3 className="font-heading border-b border-zinc-200 pb-1 text-xs font-bold tracking-wider uppercase text-zinc-900">
                  Certifications
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-zinc-700">
                  <li>Building with the Claude API, Anthropic</li>
                  <li>Introduction to Model Context Protocol (MCP), Anthropic</li>
                  <li>AI Fluency: Framework &amp; Foundations, Anthropic</li>
                  <li>
                    Introduction to Generative AI Studio | Innovating with Google Cloud AI, Google
                    Cloud
                  </li>
                  <li>Machine Learning using Python | Azure Fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
