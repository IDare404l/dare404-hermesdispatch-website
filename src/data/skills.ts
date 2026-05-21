// Mission Freedom Skills Catalog
// Complete skill inventory for /skills directory
// LAST UPDATED: May 21, 2026 - Archived skills removed

export interface SkillCatalog {
  id: string;
  name: string;
  description: string;
  category: 'automation' | 'content' | 'seo' | 'design' | 'data' | 'infrastructure' | 'marketing' | 'integration' | 'ecommerce' | 'email';
  tier: 'core' | 'pro' | 'enterprise';
  status: 'stable' | 'beta' | 'coming-soon';
  agents: string[];
  usage: string;
  features: string[];
  price?: string;
}

export const skillCatalog: SkillCatalog[] = [
  // NEWSLETTER & WEBSITE
  {
    id: 'newsletter-website-setup',
    name: 'Newsletter Website Setup',
    description: 'Astro + Resend newsletter website with landing page, archive, subscription API, and skill directory.',
    category: 'automation',
    tier: 'pro',
    status: 'stable',
    agents: ['website-builder', 'newsletter'],
    usage: 'hermes agent skill_view newsletter-website-setup',
    features: [
      'Astro SSG with Cloudflare Pages',
      'Resend subscription API',
      'Archive timeline component',
      'Team/agent showcase',
      'Responsive navigation',
      'OG meta tags'
    ],
    price: 'Free (Open Source)'
  },
  {
    id: 'cloudflare-pages-newsletter',
    name: 'Newsletter Subscription API',
    description: 'Cloudflare Pages Function for newsletter subscription with Resend integration and KV-based subscriber storage.',
    category: 'automation',
    tier: 'pro',
    status: 'stable',
    agents: ['website-builder'],
    usage: 'Deploy via wrangler pages deploy',
    features: [
      'Edge-based subscription API',
      'CORS-enabled fetch',
      'Resend audience sync',
      'KV subscriber storage',
      'Welcome email automation',
      'Duplicate prevention'
    ],
    price: 'Free (Cloudflare)'
  },

  // ORCHESTRATION
  {
    id: 'igor-unified-orchestrator',
    name: 'IGOR Unified Orchestrator',
    description: 'Solo orchestrator (dare404) + modular skill blocks + background learners. Replaces multi-agent architecture with unified execution context. ~60-70% token savings.',
    category: 'infrastructure',
    tier: 'core',
    status: 'stable',
    agents: ['igor'],
    usage: 'Load skill block → Execute → Log → Done',
    features: [
      'Intelligent agent routing',
      'Modular skill block orchestration',
      'Output validation pipeline',
      'Error recovery patterns',
      'Tool access control',
      'Unified execution context'
    ],
    price: 'Core (Free)'
  },
  {
    id: 'autofix-monitor',
    name: 'Auto-Fix Monitor',
    description: 'Autonomous error detection and fix skill for Mission Freedom. Consolidated from Igor Auto-Fix Monitor and IGOR Monitor agents.',
    category: 'infrastructure',
    tier: 'core',
    status: 'stable',
    agents: ['igor'],
    usage: 'Monitors all operations, auto-resolves errors',
    features: [
      'Error pattern detection',
      'Auto-resolution attempts',
      'HALT+RERUN protocol',
      'Cross-agent dependency checking',
      'Self-healing capability',
      'Pattern recognition'
    ],
    price: 'Core (Free)'
  },
  {
    id: 'cron-auto-fix',
    name: 'Cron Auto-Fix',
    description: 'IGOR auto-fix patterns for cron job detection and repair - provider/model issues, tool hallucinations, execution failures.',
    category: 'infrastructure',
    tier: 'core',
    status: 'stable',
    agents: ['igor'],
    usage: 'Auto-repairs broken cron schedules',
    features: [
      'Cron job monitoring',
      'Provider/model issue detection',
      'Tool hallucination repair',
      'Execution failure recovery',
      'Auto-retry with backoff',
      'Status monitoring'
    ],
    price: 'Core (Free)'
  },

  // ETSY & ECOMMERCE
  {
    id: 'etsy-helper',
    name: 'Etsy Helper',
    description: 'Unified Etsy SEO and Print-on-Demand assistant for TheTrendingTabby. Combines daily design generation with comprehensive SEO optimization, competitor intelligence, and listing audits.',
    category: 'ecommerce',
    tier: 'pro',
    status: 'stable',
    agents: ['tabby'],
    usage: 'hermes agent skill_view etsy-helper',
    features: [
      'Daily design generation',
      'SEO optimization (title + 13 tags + description)',
      'Competitor intelligence',
      'Trend analysis',
      'Listing audits',
      'Complete SEO packages'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'etsy-competitor-intelligence',
    name: 'Etsy Competitor Intelligence',
    description: 'Complete Etsy competitor research and SEO intelligence system. Analyzes top-performing cat-themed human clothing, extracts winning strategies, and generates ready-to-use SEO packages.',
    category: 'ecommerce',
    tier: 'pro',
    status: 'stable',
    agents: ['tabby'],
    usage: 'Daily competitive research for cat-themed apparel',
    features: [
      'Top seller analysis',
      'SEO strategy extraction',
      'Tag pattern identification',
      'Pricing analysis',
      'Shop comparison',
      'Ready-to-use SEO packages'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'sunday-design-intelligence',
    name: 'Sunday Design Intelligence',
    description: 'Automated Sunday night Etsy trend aggregation and weekly design generation. Researches publicly available trend data, analyzes patterns, and creates 10 complete design concepts + SEO packages by Monday morning.',
    category: 'ecommerce',
    tier: 'pro',
    status: 'stable',
    agents: ['tabby'],
    usage: 'Runs Sunday nights, Monday morning delivery',
    features: [
      'Weekly trend aggregation',
      '10 design concepts',
      'Complete SEO packages',
      'Midjourney-ready prompts',
      'POD-optimized',
      'Monday morning delivery'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'midjourney-prompt-engineer',
    name: 'Midjourney Prompt Engineer',
    description: 'Specialized Midjourney prompt engineer. Generates optimized prompts for print-on-demand t-shirt designs. Masters graphic-only descriptions, style control, and conversion-optimized imagery.',
    category: 'ecommerce',
    tier: 'pro',
    status: 'stable',
    agents: ['tabby', 'branding'],
    usage: 'Create POD-ready Midjourney prompts for Etsy',
    features: [
      'Graphic-only descriptions',
      'Style control mastery',
      'Conversion-optimized imagery',
      'T-shirt design patterns',
      'Cat-themed expertise',
      'POD platform sizing'
    ],
    price: 'Pro (Free)'
  },

  // NEWSLETTER SYSTEM
  {
    id: 'daily-report',
    name: 'Daily Report Generator',
    description: 'Mission Freedom daily report generator. Combines Twitter daily report into unified daily reporting.',
    category: 'content',
    tier: 'pro',
    status: 'stable',
    agents: ['igor'],
    usage: 'Runs daily, compiles all agent activity',
    features: [
      'Multi-agent activity compilation',
      'Twitter/X engagement summary',
      'Obsidian vault updates',
      'Category breakdown',
      'Document numbering (MF-YYYYMMDD-###)',
      'Email delivery via Himalaya'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'weekly-newsletter-generator',
    name: 'Weekly Newsletter Generator',
    description: 'Generate weekly newsletter from activity logs with automatic sanitization.',
    category: 'content',
    tier: 'pro',
    status: 'stable',
    agents: ['newsletter'],
    usage: 'hermes agent skill_view weekly-newsletter-generator',
    features: [
      'Activity log analysis',
      'Auto-sanitization',
      'SEO optimization',
      'Resend API integration',
      'Audience management',
      'Analytics tracking'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'newsletter-writer',
    name: 'Newsletter Writer',
    description: 'Create daily newsletter content in Rycen Beans voice: Boise-based AI automation insights, block-style skill breakdowns, workflow deep-dives, and practical Hermes agent tutorials. Action-first, no fluff.',
    category: 'content',
    tier: 'pro',
    status: 'stable',
    agents: ['newsletter'],
    usage: 'Daily at 3pm EST, written by dare404',
    features: [
      'Voice-matched content',
      'Boise-based insights',
      'Skill breakdowns',
      'Workflow deep-dives',
      'Hermes tutorials',
      'Action-first format'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'resend-transactional-email',
    name: 'Resend Email System',
    description: 'Complete setup guide for Resend transactional email with Cloudflare DNS. Includes Mission Freedom routing rules and newsletter formatting standards.',
    category: 'email',
    tier: 'pro',
    status: 'stable',
    agents: ['newsletter'],
    usage: 'hermes agent skill_view resend-transactional-email',
    features: [
      'Resend API integration',
      'Cloudflare DNS setup',
      'Audience management',
      'Welcome email automation',
      'Routing rules',
      'Document numbering (DOC#)'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'unified-email-system',
    name: 'Unified Email System',
    description: 'Unified email system for ALL Mission Freedom communications. Consolidates Himalaya CLI, Gmail SMTP, and transactional patterns into one reliable skill.',
    category: 'email',
    tier: 'pro',
    status: 'stable',
    agents: ['emailer'],
    usage: 'Send reports: hermes agent skill_view unified-email-system',
    features: [
      'Himalaya CLI backend',
      'Gmail SMTP fallback',
      'Document numbering',
      'Dark theme templates',
      'Credential management',
      'Automatic retry'
    ],
    price: 'Pro (Free)'
  },

  // SOCIAL MEDIA
  {
    id: 'x-helper',
    name: 'X Helper',
    description: 'Twitter/X SEO specialist for @Dare__404. Masters X algorithm, viral hooks, engagement strategies, and affiliate optimization.',
    category: 'marketing',
    tier: 'pro',
    status: 'stable',
    agents: ['x-helper'],
    usage: 'hermes agent skill_view X-helper',
    features: [
      'X algorithm mastery',
      'Viral hook creation',
      'Engagement strategies',
      'Affiliate optimization',
      'Hashtag research',
      'Thread drafting'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'x-drafter',
    name: 'X Drafter',
    description: 'Draft Twitter/X content for manual posting to @Dare__404 account. Generates tweets, threads, and hooks in your voice - writes it, humanizes it, saves to Obsidian drafts folder.',
    category: 'marketing',
    tier: 'pro',
    status: 'stable',
    agents: ['x-helper'],
    usage: 'Draft content → Humanize → Save → Manual post',
    features: [
      'Voice-matched content',
      'Thread structure',
      'Hook optimization',
      'Humanization pass',
      'Obsidian draft sync',
      'Manual approval workflow'
    ],
    price: 'Pro (Free)'
  },

  // KNOWLEDGE MANAGEMENT
  {
    id: 'obsidian-logger',
    name: 'Obsidian Logger',
    description: 'Agents log their OWN successes to Obsidian. IGOR handles failure logging. Post-execution summary format for all Mission Freedom agents.',
    category: 'integration',
    tier: 'core',
    status: 'stable',
    agents: ['igor'],
    usage: 'Auto-log all execution output to vault',
    features: [
      'Success/failure categorization',
      'Document numbering',
      'Category formatting (02-Operations/)',
      'Auto-TOC updates',
      'Hierarchical structure',
      'IGOR approval integration'
    ],
    price: 'Core (Free)'
  },
  {
    id: 'obsidian-vault-category-management',
    name: 'Vault Category Management',
    description: 'Manage Obsidian vaults with hierarchical numerical categories (00-05 pattern) for multi-agent systems. Handles folder creation, index maintenance, agent path enforcement.',
    category: 'integration',
    tier: 'core',
    status: 'stable',
    agents: ['igor'],
    usage: 'Auto-maintain vault category structure',
    features: [
      '00-05 hierarchical pattern',
      'Folder auto-creation',
      'Index.md maintenance',
      'Agent path enforcement',
      'Link validation',
      'Navigation generation'
    ],
    price: 'Core (Free)'
  },
  {
    id: 'dual-sync-workflow',
    name: 'Dual Sync Workflow',
    description: 'IGOR-absorbed function. Automatically keeps website + Obsidian in sync after any system change. Triggered on every significant edit.',
    category: 'integration',
    tier: 'pro',
    status: 'stable',
    agents: ['igor'],
    usage: 'Auto-sync on every edit',
    features: [
      'Website-Obsidian sync',
      'Auto-trigger on edits',
      'Skill count updates',
      'Timeline sync',
      'Stats synchronization',
      'Category management'
    ],
    price: 'Pro (Free)'
  },

  // LEARNING SYSTEMS
  {
    id: 'skill-trainer',
    name: 'Skill Trainer',
    description: 'Meta-learning specialist that analyzes, optimizes, and accelerates skill acquisition across all Mission Freedom agents. Sole responsibility: improving how agents learn and the quality of their knowledge.',
    category: 'automation',
    tier: 'pro',
    status: 'stable',
    agents: ['learning-system-manager'],
    usage: 'hermes agent skill_view skill-trainer',
    features: [
      'Learning analysis',
      'Skill optimization',
      'Knowledge quality control',
      'Learning acceleration',
      'Performance tracking',
      'Curriculum development'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'learning-system-manager',
    name: 'Learning System Manager',
    description: 'Central controller for Mission Freedom learning ecosystem. Assigns priorities, suggests knowledge gaps, implements curriculum updates.',
    category: 'automation',
    tier: 'pro',
    status: 'stable',
    agents: ['learning-system-manager'],
    usage: 'hermes agent skill_view learning-system-manager',
    features: [
      'Learning priority assignment',
      'Knowledge gap analysis',
      'Curriculum updates',
      'Agent learning orchestration',
      'Progress tracking',
      'Continuous improvement'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'unified-learning-agent',
    name: 'Unified Learning Agent',
    description: 'Unified learning agent for ALL Mission Freedom agents. Replaces 6 individual learner agents with single parameterized skill.',
    category: 'automation',
    tier: 'pro',
    status: 'stable',
    agents: ['learning-system-manager'],
    usage: 'Parameter-based learning for all agents',
    features: [
      '6-agent replacement',
      'Parameter-based dispatch',
      'Web research integration',
      'Knowledge extraction',
      'Progress tracking',
      'Consolidated reporting'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'youtube-transcriber-agent',
    name: 'YouTube Transcriber',
    description: 'Centralized YouTube research and content distribution agent. Feeds ALL Mission Freedom agents with safe, high-quality learning material. Security overseen by Igor.',
    category: 'data',
    tier: 'pro',
    status: 'stable',
    agents: ['yt-teacher-agent'],
    usage: 'Daily transcript extraction, agent distribution',
    features: [
      'Multi-agent feeding',
      'Security overseen by Igor',
      'Safe content curation',
      'Knowledge distribution',
      'Learning material quality',
      'Agent-safe extraction'
    ],
    price: 'Pro (Free)'
  },

  // RESEARCH
  {
    id: 'trend-hunter',
    name: 'Trend Hunter',
    description: 'Multi-platform trend research agent. Finds Google Trends, Twitter viral content, and Etsy cat-related trends. Runs autonomously and reports to IGOR.',
    category: 'data',
    tier: 'pro',
    status: 'stable',
    agents: ['trend-hunter'],
    usage: 'Runs autonomously, reports to IGOR',
    features: [
      'Google Trends analysis',
      'Twitter viral tracking',
      'Etsy trend identification',
      'Cross-platform aggregation',
      'Autonomous execution',
      'IGOR reporting'
    ],
    price: 'Pro (Free)'
  },

  // DEVOPS & DEPLOYMENT
  {
    id: 'cloudflare-pages-deployment',
    name: 'Cloudflare Pages Deployment',
    description: 'Deploy static sites to Cloudflare Pages. Covers GitHub Actions CI/CD and Cloudflare direct git integration. Includes troubleshooting for errors.',
    category: 'infrastructure',
    tier: 'pro',
    status: 'stable',
    agents: ['website-builder'],
    usage: 'hermes agent skill_view cloudflare-pages-deployment',
    features: [
      'GitHub Actions CI/CD',
      'Cloudflare git integration',
      'Error troubleshooting',
      'wrangler CLI deployment',
      'KV namespace setup',
      'Function deployment'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'hermesdispatch-deployment',
    name: 'HermesDispatch Deployment',
    description: 'Direct wrangler deployment for hermesdispatch.dev website. Method that succeeded after GitHub auto-deploy failures.',
    category: 'infrastructure',
    tier: 'core',
    status: 'stable',
    agents: ['website-builder'],
    usage: 'npx wrangler pages deploy dist --project-name=hermesdispatch',
    features: [
      'Direct wrangler deployment',
      'Project configuration',
      'Branch management',
      'KV integration',
      'Functions deployment',
      'DNS troubleshooting'
    ],
    price: 'Core (Free)'
  },
  {
    id: 'mission-freedom-infrastructure',
    name: 'Mission Freedom Infrastructure',
    description: 'Complete Mission Freedom automation infrastructure - health monitoring, auto-fix, and dashboard systems.',
    category: 'infrastructure',
    tier: 'enterprise',
    status: 'stable',
    agents: ['igor'],
    usage: 'hermes agent skill_view mission-freedom-infrastructure',
    features: [
      'Health monitoring',
      'Auto-fix patterns',
      'Dashboard systems',
      'Error recovery',
      'Multi-agent orchestration',
      'Centralized logging'
    ],
    price: 'Enterprise'
  },

  // CREATIVE
  {
    id: 'comfyui',
    name: 'ComfyUI Image Generation',
    description: 'Generate images, video, and audio with ComfyUI — install, launch, manage nodes/models, run workflows.',
    category: 'design',
    tier: 'pro',
    status: 'stable',
    agents: ['tabby', 'branding'],
    usage: 'hermes agent skill_view comfyui',
    features: [
      'Node installation',
      'Model management',
      'Workflow execution',
      'Parameter injection',
      'POD-optimized outputs',
      'Batch generation'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'visualization-agent',
    name: 'Visualization Agent',
    description: 'Creates diagrams, flowcharts, and visual representations of Mission Freedom skills, agents, workflows, and tasks.',
    category: 'design',
    tier: 'pro',
    status: 'stable',
    agents: ['branding'],
    usage: 'hermes agent skill_view visualization-agent',
    features: [
      'System diagrams',
      'Flowcharts',
      'Architecture maps',
      'Workflow visualizations',
      'Agent relationships',
      'SVG exports'
    ],
    price: 'Pro (Free)'
  },
  {
    id: 'branding-agent',
    name: 'Branding Agent',
    description: 'Professional brand identity creator. Learns logo design, color theory, typography, brand voice, and visual identity systems.',
    category: 'design',
    tier: 'pro',
    status: 'stable',
    agents: ['branding'],
    usage: 'hermes agent skill_view branding-agent',
    features: [
      'Logo design',
      'Color theory application',
      'Typography selection',
      'Visual identity systems',
      'Brand voice creation',
      'Style guidelines'
    ],
    price: 'Pro (Free)'
  }
];

export const categories = [...new Set(skillCatalog.map(s => s.category))];
export const tiers = ['core', 'pro', 'enterprise'] as const;
export const statuses = ['stable', 'beta', 'coming-soon'] as const;

// Helper functions
export function getSkillsByCategory(category: string): SkillCatalog[] {
  return skillCatalog.filter(s => s.category === category);
}

export function getSkillsByTier(tier: string): SkillCatalog[] {
  return skillCatalog.filter(s => s.tier === tier);
}

export function getSkillsByStatus(status: string): SkillCatalog[] {
  return skillCatalog.filter(s => s.status === status);
}

export function getSkillById(id: string): SkillCatalog | undefined {
  return skillCatalog.find(s => s.id === id);
}

export function getActiveSkills(): SkillCatalog[] {
  return skillCatalog.filter(s => s.status !== 'archived');
}

// Category labels
export const categoryLabels: Record<string, string> = {
  'automation': 'Automation',
  'content': 'Content',
  'seo': 'SEO',
  'design': 'Design',
  'data': 'Data',
  'infrastructure': 'Infrastructure',
  'marketing': 'Marketing',
  'integration': 'Integration',
  'ecommerce': 'E-Commerce',
  'email': 'Email'
};

// Category icons
export const categoryIcons: Record<string, string> = {
  'automation': '⚙️',
  'content': '✍️',
  'seo': '🔍',
  'design': '🎨',
  'data': '📊',
  'infrastructure': '🏗️',
  'marketing': '📢',
  'integration': '🔗',
  'ecommerce': '🛒',
  'email': '✉️'
};
