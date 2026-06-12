export const agents = [
  {
    name: "IGOR",
    emoji: "🤖",
    description: "Universal Command Router / Orchestrator. Coordinates all other agents and manages system-wide operations.",
    category: "Orchestration",
    status: "active",
    color: "cyan"
  },
  {
    name: "Newsletter Writer",
    emoji: "✉️",
    description: "Daily dispatch generation, auto-send workflow, and subscriber management via self-hosted API.",
    category: "Content",
    status: "active",
    color: "amber"
  },
  {
    name: "Social Media Writer",
    emoji: "📱",
    description: "X/Twitter content creation, engagement automation, and cross-promotion across social platforms.",
    category: "Social Media",
    status: "active",
    color: "sky"
  },
  {
    name: "Web Developer",
    emoji: "🌐",
    description: "Website deployment, Cloudflare Pages hosting, landing pages, and multi-site development.",
    category: "Development",
    status: "active",
    color: "purple"
  },
  {
    name: "POD Manager",
    emoji: "🎨",
    description: "Print-on-demand operations, Etsy shop management, design generation, and Printful integration.",
    category: "E-commerce",
    status: "active",
    color: "rose"
  },
  {
    name: "SENTINEL",
    emoji: "🛡️",
    description: "Security audit, credential management, permission monitoring, and system hardening.",
    category: "Security",
    status: "active",
    color: "slate"
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
    skills: ["Task Routing", "Output Validation", "Tool Management"]
  },
  {
    name: "Newsletter Writer",
    emoji: "✉️",
    role: "Daily Dispatch",
    description: "Generates The Hermes Dispatch daily at 15:00 MST. Auto-send workflow with security scan, self-hosted subscriber API.",
    category: "Content",
    status: "active",
    color: "amber",
    skills: ["Daily Dispatch", "SEO", "Security Scan", "Subscriber Management"]
  },
  {
    name: "Social Media Writer",
    emoji: "📱",
    role: "X/Twitter Content",
    description: "Social media engagement specialist. Hourly like/RT/reply automation, thread writing, viral content optimization, and cross-promotion of newsletter and shop content.",
    category: "Social Media",
    status: "active",
    color: "sky",
    skills: ["Engagement", "Threads", "Viral", "Cross-promotion"]
  },
  {
    name: "Web Developer",
    emoji: "🌐",
    role: "Web Developer",
    description: "Multi-site development and deployment. This site (Astro), landing pages, and Cloudflare Pages hosting. Handles deployment, SEO, and performance optimization.",
    category: "Development",
    status: "active",
    color: "purple",
    skills: ["Astro", "Cloudflare", "Performance", "Landing Pages"]
  },
  {
    name: "POD Manager",
    emoji: "🎨",
    role: "Print-on-Demand Operations",
    description: "Manages TheTrendingTabby Etsy shop. Trend analysis, design generation, listing optimization, and Printful integration for print-on-demand products.",
    category: "E-commerce",
    status: "active",
    color: "rose",
    skills: ["Etsy SEO", "Design Gen", "Trends", "Shop Management"]
  },
  {
    name: "SENTINEL",
    emoji: "🛡️",
    role: "Security Monitor",
    description: "Security audit, credential management, permission monitoring, and system hardening. SENTINEL ensures all agents and systems operate within secure boundaries.",
    category: "Security",
    status: "active",
    color: "slate",
    skills: ["Security Audits", "Credentials", "Permissions", "Hardening"]
  }
];

export const skills = [
  "Astro web development",
  "TypeScript programming",
  "Etsy SEO optimization",
  "Twitter/X engagement",
  "Email newsletter automation",
  "Cloudflare deployment",
  "GitHub workflows",
  "Multi-agent orchestration",
  "Print on demand design",
  "Obsidian vault management",
  "Security auditing",
  "Credential management",
  "SEO strategy",
  "Content marketing",
  "Landing page design"
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
    name: "Security & Audit",
    color: "slate",
    skills: [
      {
        name: "Security Auditing",
        description: "Regular security audits of agents, tools, and system configurations",
        agents: ["SENTINEL"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />'
      },
      {
        name: "Credential Management",
        description: "Secure storage, rotation, and monitoring of API keys and credentials",
        agents: ["SENTINEL"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />'
      },
      {
        name: "System Audits",
        description: "Continuous system health checks, documentation audits, and knowledge reviews",
        agents: ["SENTINEL"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />'
      },
      {
        name: "Knowledge Curation",
        description: "Obsidian vault organization, documentation standards, and learning resource management",
        agents: ["IGOR"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />'
      }
    ]
  },
  {
    name: "Content & Social",
    color: "amber",
    skills: [
      {
        name: "Email Newsletter Automation",
        description: "Daily automated newsletter generation and delivery via Buttondown",
        agents: ["Newsletter Writer"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />'
      },
      {
        name: "Twitter/X Engagement",
        description: "Hourly like/RT/reply automation and viral content optimization",
        agents: ["Social Media Writer"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />'
      },
      {
        name: "Cross-promotion",
        description: "Strategic cross-promotion of newsletter, shop, and social content across platforms",
        agents: ["Social Media Writer", "Newsletter Writer"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />'
      },
      {
        name: "Thread Creation",
        description: "Long-form thread writing and viral thread optimization",
        agents: ["Social Media Writer", "Newsletter Writer"],
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
        agents: ["Web Developer"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />'
      },
      {
        name: "TypeScript Programming",
        description: "Type-safe development with TypeScript across all projects",
        agents: ["Web Developer", "IGOR"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />'
      },
      {
        name: "Cloudflare Deployment",
        description: "Edge deployment and hosting optimization on Cloudflare Pages",
        agents: ["Web Developer"],
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />'
      },
      {
        name: "GitHub Workflows",
        description: "Automated CI/CD pipelines and version control",
        agents: ["Web Developer"],
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
    title: 'Security Auditing',
    category: 'Security',
    description: 'Regular audits of agents, credentials, and system configurations'
  }
];
