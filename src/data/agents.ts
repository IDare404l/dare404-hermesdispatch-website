// Mission Freedom Agent-Skill Relationship Data
// LAST UPDATED: May 21, 2026 - Archived agents removed

export interface Agent {
  id: string;
  name: string;
  emoji: string;
  role: string;
  category: 'core' | 'marketing' | 'creative' | 'analytics' | 'infrastructure';
  description: string;
  status: 'active' | 'learning' | 'planning';
  skills: string[];
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'automation' | 'content' | 'seo' | 'design' | 'data' | 'integration' | 'ecommerce';
  description: string;
  agents: string[];
  frequency: string;
  color: string;
}

export interface Connection {
  source: string;
  target: string;
  type: 'uses' | 'depends' | 'outputs-to' | 'learns-from' | 'orchestrates' | 'cross-promotes' | 'inputs-to';
}

// NOTE: After May 2026 consolidation, only these active agents remain:
// - IGOR: Unified orchestrator (absorbed Librarian)
// - Tabby: Etsy Helper (absorbed previous Etsy agents)
// - X-Helper: Twitter/X specialist (replaces Twatter)
// - Newsletter: Daily newsletter writing (by dare404)
// - Website-Builder: Multi-site management
// - Affiliate: Marketing strategist
// - Branding: Brand identity (learning)
// - YT-Teacher: YouTube learning distribution

export const agents: Agent[] = [
  {
    id: 'igor',
    name: 'IGOR',
    emoji: '',
    role: 'Unified Orchestrator',
    category: 'core',
    description: 'Solo orchestrator + modular skill blocks + background learners. Replaces multi-agent architecture with unified execution context. ~60-70% token savings.',
    status: 'active',
    skills: ['orchestration', 'task-routing', 'validation', 'error-handling', 'auto-fix-monitor', 'dual-sync', 'obsidian-logger'],
    color: '#00d4ff'
  },
  {
    id: 'tabby',
    name: 'Tabby',
    emoji: '>',
    role: 'Etsy Helper',
    category: 'marketing',
    description: 'Unified Etsy SEO and Print-on-Demand assistant. Design generation, SEO optimization, competitor intelligence, listing audits.',
    status: 'active',
    skills: ['etsy-seo', 'design-generation', 'competitor-analysis', 'trend-analysis', 'midjourney-prompts', 'comfyui'],
    color: '#ff69b4'
  },
  {
    id: 'x-helper',
    name: 'X-Helper',
    emoji: '',
    role: 'X/Twitter Specialist',
    category: 'marketing',
    description: 'Twitter/X SEO specialist. Masters X algorithm, viral hooks, engagement strategies. Replaces Twatter agent (archived May 2026).',
    status: 'active',
    skills: ['x-seo', 'viral-hooks', 'engagement-strategy', 'x-drafting', 'affiliate-optimization'],
    color: '#1da1f2'
  },
  {
    id: 'newsletter',
    name: 'Newsletter',
    emoji: '<?',
    role: 'Newsletter Writer',
    category: 'marketing',
    description: 'Creates daily newsletter content in Rycen Beans voice. Writes by dare404, 3pm EST.',
    status: 'active',
    skills: ['newsletter-writing', 'seo-optimization', 'resend-api', 'analytics-tracking'],
    color: '#ff6b35'
  },
  {
    id: 'website-builder',
    name: 'Website Builder',
    emoji: '<?',
    role: 'Web Developer',
    category: 'infrastructure',
    description: 'Astro sites, Cloudflare Pages, KV, Functions. Multi-site management, SEO.',
    status: 'active',
    skills: ['astro-development', 'cloudflare-pages', 'kv-storage', 'functions', 'seo-optimization', 'deployment'],
    color: '#7c3aed'
  },
  {
    id: 'affiliate',
    name: 'Affiliate',
    emoji: '',
    role: 'Marketing Strategist',
    category: 'marketing',
    description: 'Niche research, brand strategy, affiliate platforms, revenue optimization.',
    status: 'learning',
    skills: ['niche-research', 'brand-strategy', 'affiliate-platforms', 'content-marketing', 'revenue-tracking'],
    color: '#ffd700'
  },
  {
    id: 'branding',
    name: 'Branding',
    emoji: '<?',
    role: 'Brand Identity Specialist',
    category: 'creative',
    description: 'Logo design, color psychology, typography, brand guidelines, visual identity systems.',
    status: 'active',
    skills: ['logo-design', 'color-theory', 'typography', 'brand-guidelines', 'visual-identity', 'design-generation'],
    color: '#ec4899'
  },
  {
    id: 'yt-teacher',
    name: 'YT-Teacher',
    emoji: '',
    role: 'Learning Distributor',
    category: 'analytics',
    description: 'YouTube learning for ALL Mission Freedom agents. Feeds safe, high-quality material. Security overseen by IGOR.',
    status: 'active',
    skills: ['youtube-extraction', 'learning-distribution', 'content-curation', 'knowledge-sharing'],
    color: '#ff0000'
  },
  {
    id: 'learning-manager',
    name: 'Learning Manager',
    emoji: '<?',
    role: 'Learning System Controller',
    category: 'analytics',
    description: 'Central controller for Mission Freedom learning ecosystem. Assigns priorities, suggests gaps, implements curriculum updates.',
    status: 'active',
    skills: ['skill-trainer', 'unified-learning', 'curriculum-management', 'knowledge-gap-analysis', 'performance-tracking'],
    color: '#10b981'
  }
];

export const skills: Skill[] = [
  {
    id: 'orchestration',
    name: 'Orchestration',
    category: 'automation',
    description: 'Unified skill block execution with unified context',
    agents: ['igor'],
    frequency: 'realtime',
    color: '#00d4ff'
  },
  {
    id: 'auto-fix-monitor',
    name: 'Auto-Fix Monitor',
    category: 'automation',
    description: 'Autonomous error detection and repair',
    agents: ['igor'],
    frequency: 'continuous',
    color: '#00d4ff'
  },
  {
    id: 'etsy-seo',
    name: 'Etsy SEO',
    category: 'ecommerce',
    description: 'Complete SEO packages (title + 13 tags + description)',
    agents: ['tabby'],
    frequency: 'daily',
    color: '#ff69b4'
  },
  {
    id: 'design-generation',
    name: 'Design Generation',
    category: 'design',
    description: 'AI-powered design concepts with Midjourney',
    agents: ['tabby', 'branding'],
    frequency: 'weekly',
    color: '#ec4899'
  },
  {
    id: 'midjourney-prompts',
    name: 'Midjourney Prompts',
    category: 'ecommerce',
    description: 'POD-optimized graphic-only prompts',
    agents: ['tabby'],
    frequency: 'per-design',
    color: '#ff69b4'
  },
  {
    id: 'comfyui',
    name: 'ComfyUI',
    category: 'design',
    description: 'Image generation for products',
    agents: ['tabby', 'branding'],
    frequency: 'weekly',
    color: '#ec4899'
  },
  {
    id: 'competitor-analysis',
    name: 'Competitor Intelligence',
    category: 'ecommerce',
    description: 'Top seller research and SEO extraction',
    agents: ['tabby'],
    frequency: 'daily',
    color: '#ff69b4'
  },
  {
    id: 'x-seo',
    name: 'X Algorithm Mastery',
    category: 'content',
    description: 'Twitter/X viral optimization',
    agents: ['x-helper'],
    frequency: 'daily',
    color: '#1da1f2'
  },
  {
    id: 'x-drafting',
    name: 'X Drafting',
    category: 'content',
    description: 'Voice-matched content for manual posting',
    agents: ['x-helper'],
    frequency: 'per-post',
    color: '#1da1f2'
  },
  {
    id: 'newsletter-writing',
    name: 'Newsletter Writing',
    category: 'content',
    description: 'Daily at 3pm EST in Rycen Beans voice',
    agents: ['newsletter'],
    frequency: 'daily 15:00 EST',
    color: '#ff6b35'
  },
  {
    id: 'resend-api',
    name: 'Resend Integration',
    category: 'integration',
    description: 'Newsletter subscription and delivery via Resend',
    agents: ['newsletter', 'website-builder'],
    frequency: 'per-subscription',
    color: '#ff6b35'
  },
  {
    id: 'astro-development',
    name: 'Astro Development',
    category: 'automation',
    description: 'SSG with Cloudflare Pages',
    agents: ['website-builder'],
    frequency: 'per-project',
    color: '#7c3aed'
  },
  {
    id: 'cloudflare-pages',
    name: 'Cloudflare Pages',
    category: 'automation',
    description: 'Edge hosting with KV and Functions',
    agents: ['website-builder'],
    frequency: 'per-deployment',
    color: '#7c3aed'
  },
  {
    id: 'dual-sync',
    name: 'Dual Sync',
    category: 'integration',
    description: 'Auto-sync website + Obsidian on every edit',
    agents: ['igor'],
    frequency: 'event-driven',
    color: '#00d4ff'
  },
  {
    id: 'obsidian-logger',
    name: 'Obsidian Logger',
    category: 'integration',
    description: 'Agents log successes, IGOR logs failures',
    agents: ['igor'],
    frequency: 'per-execution',
    color: '#00d4ff'
  },
  {
    id: 'skill-trainer',
    name: 'Skill Trainer',
    category: 'data',
    description: 'Meta-learning specialist for skill optimization',
    agents: ['learning-manager'],
    frequency: 'continuous',
    color: '#10b981'
  },
  {
    id: 'unified-learning',
    name: 'Unified Learning',
    category: 'automation',
    description: 'Replaced 6 individual learner agents',
    agents: ['learning-manager', 'yt-teacher'],
    frequency: 'continuous',
    color: '#10b981'
  },
  {
    id: 'youtube-extraction',
    name: 'YT Extraction',
    category: 'data',
    description: 'Safe transcript extraction for agent learning',
    agents: ['yt-teacher'],
    frequency: 'daily',
    color: '#ff0000'
  },
  {
    id: 'trend-analysis',
    name: 'Trend Analysis',
    category: 'data',
    description: 'Multi-platform trend research',
    agents: ['tabby', 'x-helper', 'affiliate'],
    frequency: 'daily',
    color: '#f59e0b'
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    category: 'seo',
    description: 'Search optimization across all platforms',
    agents: ['tabby', 'website-builder', 'newsletter', 'x-helper'],
    frequency: 'ongoing',
    color: '#22c55e'
  },
  {
    id: 'visualization',
    name: 'System Visualization',
    category: 'design',
    description: 'Diagrams, flowcharts, architecture maps',
    agents: ['branding'],
    frequency: 'as-needed',
    color: '#ec4899'
  },
  {
    id: 'branding',
    name: 'Brand Identity',
    category: 'design',
    description: 'Logo, colors, typography, guidelines',
    agents: ['branding'],
    frequency: 'per-project',
    color: '#ec4899'
  }
];

export const connections: Connection[] = [
  // IGOR orchestrates all
  { source: 'igor', target: 'tabby', type: 'orchestrates' },
  { source: 'igor', target: 'x-helper', type: 'orchestrates' },
  { source: 'igor', target: 'newsletter', type: 'orchestrates' },
  { source: 'igor', target: 'website-builder', type: 'orchestrates' },
  { source: 'igor', target: 'affiliate', type: 'orchestrates' },
  { source: 'igor', target: 'branding', type: 'orchestrates' },
  { source: 'igor', target: 'yt-teacher', type: 'orchestrates' },
  { source: 'igor', target: 'learning-manager', type: 'orchestrates' },

  // Learning distribution
  { source: 'yt-teacher', target: 'tabby', type: 'learns-from' },
  { source: 'yt-teacher', target: 'affiliate', type: 'learns-from' },
  { source: 'yt-teacher', target: 'x-helper', type: 'learns-from' },
  { source: 'yt-teacher', target: 'branding', type: 'learns-from' },
  { source: 'yt-teacher', target: 'newsletter', type: 'learns-from' },
  { source: 'learning-manager', target: 'all', type: 'orchestrates' },

  // Website sync
  { source: 'website-builder', target: 'igor', type: 'outputs-to' },
  { source: 'newsletter', target: 'website-builder', type: 'outputs-to' },

  // Cross-platform
  { source: 'tabby', target: 'x-helper', type: 'cross-promotes' },
  { source: 'x-helper', target: 'tabby', type: 'cross-promotes' },
];

// Helper functions
export function getAgentById(id: string): Agent | undefined {
  return agents.find(a => a.id === id);
}

export function getSkillsForAgent(agentId: string): Skill[] {
  return skills.filter(s => s.agents.includes(agentId));
}

export function getAgentsForSkill(skillId: string): Agent[] {
  return agents.filter(a => skills.some(s => s.id === skillId && s.agents.includes(a.id)));
}

export function getActiveAgents(): Agent[] {
  return agents.filter(a => a.status === 'active');
}

export function getLearningAgents(): Agent[] {
  return agents.filter(a => a.status === 'learning');
}
