// Mission Freedom Journey Timeline
// Milestones, phases, and progress tracking

export interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'foundation' | 'launch' | 'growth' | 'optimization' | 'expansion';
  status: 'completed' | 'in-progress' | 'planned' | 'paused';
  deliverables: string[];
  metrics?: Record<string, string>;
}

export const milestones: TimelineMilestone[] = [
  // FOUNDATION PHASE
  {
    id: 'mf-001',
    date: '2026-05-01',
    title: 'Mission Freedom Inception',
    description: 'Initial concept of multi-agent automation system. IGOR as orchestrator, specialized agents for each business function.',
    category: 'foundation',
    status: 'completed',
    deliverables: ['Agent architecture', 'Hermes Agent setup', 'Initial skill library'],
    metrics: { 'agents': '1 (IGOR)', 'skills': '3' }
  },
  {
    id: 'mf-002',
    date: '2026-05-05',
    title: 'The Trending Tabby Launch',
    description: 'Etsy shop for cat-themed apparel. Tabby agent created with SEO, design generation, and trend analysis capabilities.',
    category: 'foundation',
    status: 'completed',
    deliverables: ['Etsy shop setup', 'Tabby agent', 'Printful integration'],
    metrics: { 'products': '10+', 'agent': 'Tabby v1.0' }
  },
  {
    id: 'mf-003',
    date: '2026-05-08',
    title: 'Twatter Social Automation',
    description: 'Twitter/X content automation with hourly engagement. Daily progress blog reporting.',
    category: 'foundation',
    status: 'completed',
    deliverables: ['Twatter agent', 'Hourly engagement', 'Progress blog system'],
    metrics: { 'posts_per_day': '1', 'engagement_slots': 'hourly' }
  },
  {
    id: 'mf-004',
    date: '2026-05-10',
    title: 'Obsidian Vault Structure',
    description: 'Central knowledge management with hierarchical categories. Librarian agent manages documentation.',
    category: 'foundation',
    status: 'completed',
    deliverables: ['Vault at /HERMES/', 'Category system (01-09)', 'Agent folders'],
    metrics: { 'categories': '9', 'structure': 'hierarchical' }
  },
  
  // LAUNCH PHASE
  {
    id: 'mf-005',
    date: '2026-05-12',
    title: 'The Hermes Dispatch Newsletter',
    description: 'Daily AI automation newsletter launched. Newsletter agent for content generation + Buttondown integration.',
    category: 'launch',
    status: 'completed',
    deliverables: ['Newsletter agent', 'Buttondown setup', 'Daily dispatch at 06:00'],
    metrics: { 'frequency': 'daily', 'platform': 'Buttondown' }
  },
  {
    id: 'mf-006',
    date: '2026-05-13',
    title: 'XEngagement Report System',
    description: 'Daily research reports with 10 curated engagement opportunities. Email delivery via Himalaya CLI.',
    category: 'launch',
    status: 'completed',
    deliverables: ['Twatter research cron', 'Himalaya email integration', 'Document numbering'],
    metrics: { 'sends_per_day': '1', 'time': '14:00 MST', 'format': 'MF-YYYYMMDD-###' }
  },
  {
    id: 'mf-007',
    date: '2026-05-15',
    title: 'Website Hub Launch',
    description: 'hermesmissionfreedom.ai goes live. Team page, archive, full navigation panel system.',
    category: 'launch',
    status: 'in-progress',
    deliverables: ['Astro site', 'Team visualization', 'Skill directory', 'Timeline'],
    metrics: { 'pages': '5', 'domain': 'hermesmissionfreedom.ai' }
  },
  
  // GROWTH PHASE
  {
    id: 'mf-008',
    date: '2026-05-20',
    title: 'Affiliate Framework Deploy',
    description: 'Affiliate marketing system alongside direct sales. Niche research, content marketing automation.',
    category: 'growth',
    status: 'planned',
    deliverables: ['Affiliate agent launch', 'Niche research system', 'Content workflows'],
    metrics: { 'target': '3 niches', 'platforms': 'multiple' }
  },
  {
    id: 'mf-009',
    date: '2026-06-01',
    title: 'DSocial Instagram + Pinterest',
    description: 'Full social media management with Instagram content and Pinterest SEO. Cross-platform promotion.',
    category: 'growth',
    status: 'planned',
    deliverables: ['DSocial agent', 'Instagram automation', 'Pinterest SEO'],
    metrics: { 'platforms': '2', 'posting': 'daily' }
  },
  {
    id: 'mf-010',
    date: '2026-06-15',
    title: 'Website Builder Multi-Site',
    description: 'Astro/Wordpress/Shopify management for all brand websites. Centralized hosting and updates.',
    category: 'growth',
    status: 'planned',
    deliverables: ['Website Builder agent', 'Multi-site dashboard', 'Brand consistency'],
    metrics: { 'sites': '3+', 'platforms': '4' }
  },
  
  // OPTIMIZATION PHASE
  {
    id: 'mf-011',
    date: '2026-07-01',
    title: 'Token Conservation v2.0',
    description: 'Intelligent resource management. Learning agents pause automatically. Resume scheduling.',
    category: 'optimization',
    status: 'in-progress',
    deliverables: ['Auto-pause system', 'Resume scheduling', 'Budget tracking'],
    metrics: { 'saved_tokens': 'TBD', 'efficiency': 'improved' }
  },
  {
    id: 'mf-012',
    date: '2026-07-15',
    title: 'Self-Improving Skills',
    description: 'Skills that auto-update based on error patterns. Pattern recognition and auto-patching.',
    category: 'optimization',
    status: 'paused',
    deliverables: ['Pattern recognition', 'Auto-patch system', 'Performance tracking'],
    metrics: { 'skills': 'self-updating', 'validation': 'automated' }
  },
  {
    id: 'mf-013',
    date: '2026-07-20',
    title: 'HALT + RERUN Protocol',
    description: 'Full error recovery. Agents halt on failures, IGOR investigates/fixes, resume without user action.',
    category: 'optimization',
    status: 'completed',
    deliverables: ['Halt detection', 'Auto-repair', 'Resume logic'],
    metrics: { 'downtime': 'minimal', 'intervention': 'automated' }
  },
  
  // EXPANSION PHASE
  {
    id: 'mf-014',
    date: '2026-08-01',
    title: 'Skill Block Marketplace',
    description: 'Documented skills packaged for distribution. Core/Pro/Enterprise tiers. Public directory + commercial.',
    category: 'expansion',
    status: 'planned',
    deliverables: ['Skill packaging', 'Pricing tiers', 'Distribution API', 'Directory site'],
    metrics: { 'tiers': '3', 'availability': 'public + commercial' }
  },
  {
    id: 'mf-015',
    date: '2026-08-15',
    title: 'Newsletter Monetization',
    description: 'Sponsor integrations, paid subscriptions, affiliate placements in The Hermes Dispatch.',
    category: 'expansion',
    status: 'planned',
    deliverables: ['Sponsor pipeline', 'Paid tier', 'Affiliate integration'],
    metrics: { 'revenue_streams': '3+', 'audience_size': 'goal: 1000+' }
  },
  {
    id: 'mf-016',
    date: '2026-09-01',
    title: 'Mission Freedom Brand Launch',
    description: 'Public brand identity. Complete documentation, case studies, community building.',
    category: 'expansion',
    status: 'planned',
    deliverables: ['Brand guidelines', 'Case studies', 'Community forum'],
    metrics: { 'visibility': 'public', 'status': 'authoritative' }
  }
];

export const phases = [
  { name: 'Foundation', start: '2026-05-01', end: '2026-05-10', color: '#3b82f6' },
  { name: 'Launch', start: '2026-05-11', end: '2026-05-31', color: '#22c55e' },
  { name: 'Growth', start: '2026-06-01', end: '2026-06-30', color: '#f59e0b' },
  { name: 'Optimization', start: '2026-07-01', end: '2026-07-31', color: '#8b5cf6' },
  { name: 'Expansion', start: '2026-08-01', end: '2026-12-31', color: '#ec4899' }
];

export const categoryLabels: Record<string, string> = {
  'foundation': '🏗️ Foundation',
  'launch': '🚀 Launch',
  'growth': '📈 Growth',
  'optimization': '⚡ Optimization',
  'expansion': '🌐 Expansion'
};

export const statusLabels: Record<string, { icon: string; color: string }> = {
  'completed': { icon: '✅', color: '#22c55e' },
  'in-progress': { icon: '🔨', color: '#3b82f6' },
  'planned': { icon: '📋', color: '#9ca3af' },
  'paused': { icon: '⏸️', color: '#f59e0b' }
};

// Helper functions
export function getMilestonesByCategory(category: string): TimelineMilestone[] {
  return milestones.filter(m => m.category === category);
}

export function getMilestonesByStatus(status: string): TimelineMilestone[] {
  return milestones.filter(m => m.status === status);
}

export function getMilestonesByPhase(phaseName: string): TimelineMilestone[] {
  const phase = phases.find(p => p.name.toLowerCase() === phaseName.toLowerCase());
  if (!phase) return [];
  return milestones.filter(m => {
    const mDate = new Date(m.date);
    return mDate >= new Date(phase.start) && mDate <= new Date(phase.end);
  });
}

export function getMilestoneById(id: string): TimelineMilestone | undefined {
  return milestones.find(m => m.id === id);
}
