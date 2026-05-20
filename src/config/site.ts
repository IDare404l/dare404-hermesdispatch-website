// Centralized site configuration
// Update these values when skills/agents/stats change

export const SITE_CONFIG = {
  // Skills/Agents Stats - UPDATE THESE WHEN ADDING NEW SKILLS
  stats: {
    skillsCount: 70,           // Total number of skills
    skillsDisplay: '70+',      // Display format
    categoriesCount: 15,       // Number of skill categories
    categoriesDisplay: '15',   // Display format
    agentsCount: 1,            // Number of orchestrator agents (IGOR)
    agentsDisplay: '1',        // Display format
    since: '2024',             // Year started
  },
  
  // Newsletter/Brand
  brand: {
    name: 'Hermes Dispatch',
    tagline: 'Build at Velocity',
    description: 'AI agent automation for digital entrepreneurship',
    mission: 'Mission Freedom',
  },
  
  // URLs
  urls: {
    newsletter: 'https://buttondown.com/HermesDispatch',
    github: 'https://github.com/IDare404l/dare404-hermesdispatch-website',
    domain: 'https://hermesdispatch.dev',
  },
  
  // SEO Keywords
  seo: {
    keywords: [
      'AI agent automation',
      'multi-agent orchestration',
      'autonomous entrepreneurship',
      'AI agent systems',
      'automation playbooks',
    ],
  },
};

// Helper to get current stats for display
export const getStats = () => SITE_CONFIG.stats;

// Helper to get brand info
export const getBrand = () => SITE_CONFIG.brand;
