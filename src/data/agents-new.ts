export const agents = [
  {
    name: "IGOR",
    emoji: "🤖",
    description: "Main orchestrator agent. Coordinates all other agents and manages system-wide operations.",
    category: "Orchestration",
    status: "active",
    color: "blue"
  },
  {
    name: "Tabby",
    emoji: "🐱",
    description: "Etsy SEO and trend research specialist. Focuses on cat-themed apparel trending analysis.",
    category: "E-commerce",
    status: "active",
    color: "purple"
  },
  {
    name: "Twatter",
    emoji: "🐦",
    description: "Twitter/X social media agent. Handles engagement, content creation, and social growth.",
    category: "Social Media",
    status: "active",
    color: "sky"
  },
  {
    name: "Newsletter",
    emoji: "✉️",
    description: "Email newsletter management agent. Sends Mission Freedom Daily updates to subscribers.",
    category: "Content",
    status: "active",
    color: "amber"
  },
  {
    name: "DSocial",
    emoji: "📱",
    description: "Instagram and Pinterest visual content agent. Creates carousels and optimizes for visual platforms.",
    category: "Social Media",
    status: "active",
    color: "rose"
  },
  {
    name: "Affiliate",
    emoji: "💰",
    description: "Niche research and brand strategy specialist. Currently learning 14+ categories.",
    category: "Strategy",
    status: "learning",
    color: "yellow"
  },
  {
    name: "Website Builder",
    emoji: "🌐",
    description: "Multi-site development agent. Handles Astro, Shopify, and WordPress sites.",
    category: "Development",
    status: "active",
    color: "purple"
  },
  {
    name: "Librarian",
    emoji: "📚",
    description: "Obsidian vault maintainer. Manages documentation and knowledge organization.",
    category: "Knowledge",
    status: "active",
    color: "emerald"
  },
  {
    name: "Branding",
    emoji: "🎨",
    description: "Logo design and brand identity specialist. Currently in planning phase.",
    category: "Design",
    status: "planning",
    color: "pink"
  }
];

export const agentDetails = [
  {
    name: "IGOR",
    emoji: "🤖",
    role: "Universal Command Router",
    description: "IGOR coordinates all Mission Freedom operations. Every request flows through IGOR first, which routes tasks to specialist agents, validates outputs, and manages tool access. Think of IGOR as the mission control center.",
    category: "Orchestration",
    status: "active",
    color: "cyan",
    skills: ["Task Routing", "Output Validation", "Tool Management", "Learning Coordination"]
  },
  {
    name: "Newsletter",
    emoji: "📧",
    role: "Daily Dispatch",
    description: "Generates The Hermes Dispatch daily at 06:00 MST. Handles SEO optimization, monetization strategy, and Buttondown API integration.",
    category: "Content",
    status: "active",
    color: "orange",
    skills: ["Daily Dispatch", "SEO", "Monetization"]
  },
  {
    name: "Tabby",
    emoji: "🐱",
    role: "Etsy SEO Master",
    description: "Manages TheTrendingTabby Etsy shop. Trend analysis, design generation, listing optimization, and Printful integration.",
    category: "E-commerce",
    status: "active",
    color: "pink",
    skills: ["Etsy SEO", "Design Gen", "Trends"]
  },
  {
    name: "Twatter",
    emoji: "🐦",
    role: "Twitter/X Content",
    description: "Social media engagement specialist. Hourly like/RT/reply automation, thread writing, and viral content optimization.",
    category: "Social Media",
    status: "active",
    color: "blue",
    skills: ["Engagement", "Threads", "Viral"]
  },
  {
    name: "DSocial",
    emoji: "📱",
    role: "Instagram & Pinterest",
    description: "Visual content creation for @Dare__404 and @TheTrendingTabby. Instagram carousels, Pinterest SEO, and voice-matched copy.",
    category: "Social Media",
    status: "active",
    color: "rose",
    skills: ["Instagram", "Pinterest", "Visual"]
  },
  {
    name: "Affiliate",
    emoji: "💰",
    role: "Marketing Strategist",
    description: "Niche research and brand strategy. Currently learning 14 categories across Disney, Photography, Tech, Finance, and more niches.",
    category: "Strategy",
    status: "learning",
    color: "amber",
    skills: ["Niche Research", "Strategy", "Learning"]
  },
  {
    name: "Website Builder",
    emoji: "🌐",
    role: "Web Developer",
    description: "Multi-site development. This site (Astro), Shopify stores, and WordPress. Handles deployment, SEO, and performance optimization.",
    category: "Development",
    status: "active",
    color: "purple",
    skills: ["Astro", "Shopify", "Performance"]
  },
  {
    name: "Librarian",
    emoji: "📚",
    role: "Vault Maintainer",
    description: "Obsidian vault organization. Documentation standards, navigation design, and knowledge management across all Mission Freedom data.",
    category: "Knowledge",
    status: "active",
    color: "emerald",
    skills: ["Organization", "Docs", "Knowledge"]
  },
  {
    name: "Branding",
    emoji: "🎨",
    role: "Brand Identity",
    description: "Logo design, color psychology, typography systems. Currently in planning phase for Mission Freedom, dare404, and TheTrendingTabby identities.",
    category: "Design",
    status: "planning",
    color: "pink",
    skills: ["Logo Design", "Color Theory", "Planning"]
  }
];

export const skills = [
  "Astro web development",
  "TypeScript programming",
  "Etsy SEO optimization",
  "Twitter/X engagement",
  "Instagram content creation",
  "Pinterest SEO",
  "Email newsletter automation",
  "Web research and analysis",
  "Cloudflare deployment",
  "GitHub workflows",
  "Multi-agent orchestration",
  "Print on demand design",
  "Obsidian vault management",
  "Niche research",
  "Brand strategy",
  "SEO strategy",
  "Content marketing",
  "Etsy print on demand"
];

export const skillCategories = [
  {
    name: "Automation & Orchestration",
    color: "cyan",
    skills: [
      {
        name: "Multi-Agent Orchestration",
        description: "Coordinate multiple AI agents working together on complex tasks",
        agents: ["IGOR"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />'
      },
      {
        name: "Task Routing",
        description: "Intelligent analysis and routing of tasks to best-fit specialist agents",
        agents: ["IGOR"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />'
      },
      {
        name: "Output Validation",
        description: "Quality checking and validation before delivery to users",
        agents: ["IGOR"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />'
      },
      {
        name: "Tool Management",
        description: "Control access to APIs, services, and platform integrations",
        agents: ["IGOR"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />'
      }
    ]
  },
  {
    name: "SEO & E-commerce",
    color: "emerald",
    skills: [
      {
        name: "Etsy SEO Optimization",
        description: "Keyword research, listing optimization, and search ranking improvement for Etsy",
        agents: ["Tabby"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />'
      },
      {
        name: "Trend Analysis",
        description: "Continuous monitoring and analysis of trending topics and designs",
        agents: ["Tabby", "Twatter"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />'
      },
      {
        name: "Print on Demand Design",
        description: "Automated design generation optimized for print on demand products",
        agents: ["Tabby"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />'
      },
      {
        name: "Pinterest SEO",
        description: "Pinterest-specific optimization for visual discovery and traffic",
        agents: ["DSocial"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />'
      }
    ]
  },
  {
    name: "Content & Social",
    color: "pink",
    skills: [
      {
        name: "Email Newsletter Automation",
        description: "Daily automated newsletter generation and delivery via Buttondown",
        agents: ["Newsletter"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />'
      },
      {
        name: "Twitter/X Engagement",
        description: "Hourly like/RT/reply automation and viral content optimization",
        agents: ["Twatter"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />'
      },
      {
        name: "Instagram Content",
        description: "Visual carousel creation and Instagram-specific optimization",
        agents: ["DSocial"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />'
      },
      {
        name: "Thread Creation",
        description: "Long-form thread writing and viral thread optimization",
        agents: ["Twatter", "Newsletter"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />'
      }
    ]
  },
  {
    name: "Development",
    color: "purple",
    skills: [
      {
        name: "Astro Development",
        description: "High-performance static site generation with Astro framework",
        agents: ["Website Builder"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />'
      },
      {
        name: "TypeScript Programming",
        description: "Type-safe development with TypeScript across all projects",
        agents: ["Website Builder", "IGOR"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />'
      },
      {
        name: "Cloudflare Deployment",
        description: "Edge deployment and hosting optimization",
        agents: ["Website Builder"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />'
      },
      {
        name: "GitHub Workflows",
        description: "Automated CI/CD pipelines and version control",
        agents: ["Website Builder", "Librarian"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />'
      }
    ]
  }
];

export const skillsList = [
  {
    title: 'Astro Web Development',
    category: 'Development',
    description: 'Building high-performance static sites with Astro framework'
  },
  {
    title: 'Etsy SEO',
    category: 'E-commerce',
    description: 'Optimizing listings and shop visibility on Etsy marketplace'
  },
  {
    title: 'Newsletter Automation',
    category: 'Content',
    description: 'Automated daily newsletter generation and delivery'
  },
  {
    title: 'Twitter/X Engagement',
    category: 'Social',
    description: 'Orchestrated social media engagement and content distribution'
  },
  {
    title: 'Multi-Agent Systems',
    category: 'Architecture',
    description: 'Designing and coordinating multiple AI agents working together'
  },
  {
    title: 'Trend Analysis',
    category: 'Research',
    description: 'Identifying and capitalizing on emerging market trends'
  }
];
