/**
 * OpenGraph Image Configuration for hermesdispatch.dev
 * 
 * This file configures automatic OpenGraph image generation
 * for all pages and content types on the site.
 * 
 * Images are automatically generated using @vercel/og or similar
 * based on these templates and configurations.
 */

export const ogImageConfig = {
  // Default settings for all pages
  default: {
    // Image dimensions (OpenGraph standard)
    width: 1200,
    height: 630,
    
    // Background and styling
    background: {
      type: 'gradient',
      colors: ['#1a1a2e', '#16213e', '#0f3460'],
      angle: 135,
    },
    
    // Font settings
    font: {
      family: 'Inter, system-ui, sans-serif',
      titleSize: 64,
      descriptionSize: 32,
      color: '#ffffff',
    },
    
    // Logo and branding
    logo: {
      path: '/logo/hero-logo.png',
      width: 120,
      position: 'top-left',
    },
    
    // Hermes brand accent
    accent: {
      color: '#e94560',
      shape: 'circle', // or 'line', 'none'
    },
  },

  // Page-specific configurations
  pages: {
    // Home page
    home: {
      title: 'Hermes Mission Freedom',
      description: 'Build Powerful AI Agents for Automation',
      template: 'hero',
      background: {
        type: 'gradient',
        colors: ['#1a1a2e', '#16213e', '#0f3460', '#e94560'],
      },
      showLogo: true,
      showPattern: true,
      pattern: 'network', // Agent network visualization
    },

    // Features page
    features: {
      title: 'AI Agent Features',
      description: 'Multi-Agent Orchestration & Automation',
      template: 'feature-grid',
      background: {
        type: 'gradient',
        colors: ['#16213e', '#1a1a2e'],
      },
      showIcons: true,
      icons: ['robot', 'workflow', 'zap', 'shield'],
    },

    // Pricing page
    pricing: {
      title: 'Flexible Pricing',
      description: 'Plans for Every Automation Need',
      template: 'pricing',
      background: {
        type: 'gradient',
        colors: ['#0f3460', '#1a1a2e'],
      },
      showPrice: true,
      price: 'From $49/mo',
    },

    // About page
    about: {
      title: 'About Hermes',
      description: 'Building the Future of AI Agents',
      template: 'team',
      background: {
        type: 'image',
        image: '/images/about-bg.jpg',
      },
      showLocation: true,
      location: 'United States',
    },

    // Blog index
    blog: {
      title: 'Hermes Blog',
      description: 'AI Agents, SEO & Automation',
      template: 'blog-hub',
      background: {
        type: 'gradient',
        colors: ['#1a1a2e', '#16213e'],
      },
      showPostCount: true,
      icon: 'book-open',
    },

    // Contact page
    contact: {
      title: 'Get in Touch',
      description: 'Start Your AI Automation Journey',
      template: 'contact',
      background: {
        type: 'gradient',
        colors: ['#16213e', '#0f3460'],
      },
      showEmail: true,
      email: 'hello@hermesdispatch.dev',
    },
  },

  // Blog post configurations (dynamic)
  blog: {
    // Default for all blog posts
    default: {
      template: 'blog-post',
      authorImage: '/team/author-placeholder.png',
      showDate: true,
      showReadTime: true,
      showAuthor: true,
      background: {
        type: 'gradient',
        colors: ['#1a1a2e', '#16213e'],
      },
    },

    // Specific blog posts
    posts: {
      'ai-agent-skills': {
        title: 'Building Powerful AI Agent Skills',
        description: 'Complete Guide to Multi-Agent Development',
        category: 'AI Development',
        categoryColor: '#e94560',
        icon: 'code',
        image: '/images/blog/ai-agent-skills-og.jpg',
      },

      'multi-agent-orchestration': {
        title: 'Multi-Agent Orchestration',
        description: 'Architecting Scalable AI Systems',
        category: 'AI Architecture',
        categoryColor: '#4361ee',
        icon: 'git-branch',
        image: '/images/blog/multi-agent-og.jpg',
      },

      'etsy-seo-automation': {
        title: 'Etsy SEO Automation',
        description: 'Scale Your Print-on-Demand Business',
        category: 'E-commerce',
        categoryColor: '#f72585',
        icon: 'shopping-bag',
        image: '/images/blog/etsy-seo-og.jpg',
      },

      'affiliate-marketing-automation': {
        title: 'Affiliate Marketing Automation',
        description: 'Complete 2024 Guide with AI Agents',
        category: 'Digital Marketing',
        categoryColor: '#7209b7',
        icon: 'trending-up',
        image: '/images/blog/affiliate-og.jpg',
      },

      'pod-automation': {
        title: 'Print-on-Demand Automation',
        description: 'AI-Powered Scaling for 2025',
        category: 'E-commerce',
        categoryColor: '#4cc9f0',
        icon: 'package',
        image: '/images/blog/pod-automation-og.jpg',
      },
    },
  },

  // Product/feature pages
  products: {
    seoAgent: {
      title: 'SEO Agent',
      description: 'Automated SEO & Rank Optimization',
      template: 'product',
      icon: 'search',
      color: '#00d9ff',
      features: ['Keyword Research', 'Content Optimization', 'Rank Tracking'],
    },

    contentAgent: {
      title: 'Content Agent',
      description: 'AI-Powered Content Creation',
      template: 'product',
      icon: 'file-text',
      color: '#ff006e',
      features: ['Blog Posts', 'Social Media', 'Email Sequences'],
    },

    ecommerceAgent: {
      title: 'E-commerce Agent',
      description: 'Automated Store Management',
      template: 'product',
      icon: 'store',
      color: '#3a86ff',
      features: ['Listing Automation', 'Pricing Optimization', 'Inventory Sync'],
    },

    affiliateAgent: {
      title: 'Affiliate Agent',
      description: 'Passive Income Automation',
      template: 'product',
      icon: 'dollar-sign',
      color: '#8338ec',
      features: ['Content Creation', 'Link Optimization', 'Revenue Tracking'],
    },
  },

  // Integration pages
  integrations: {
    default: {
      template: 'integration',
      background: {
        type: 'gradient',
        colors: ['#1a1a2e', '#16213e'],
      },
      showPartnerLogo: true,
      poweredBy: 'Hermes AI',
    },

    etsy: {
      title: 'Hermes + Etsy',
      description: 'AI-Powered Store Automation',
      partnerLogo: '/logos/etsy.svg',
      partnerColor: '#f45800',
    },

    shopify: {
      title: 'Hermes + Shopify',
      description: 'Scale Your Shopify Store with AI',
      partnerLogo: '/logos/shopify.svg',
      partnerColor: '#95bf47',
    },

    amazon: {
      title: 'Hermes + Amazon',
      description: 'Listing Optimization & Automation',
      partnerLogo: '/logos/amazon.svg',
      partnerColor: '#ff9900',
    },

    wordpress: {
      title: 'Hermes + WordPress',
      description: 'AI Content Automation',
      partnerLogo: '/logos/wordpress.svg',
      partnerColor: '#21759b',
    },

    printful: {
      title: 'Hermes + Printful',
      description: 'Automated Print-on-Demand',
      partnerLogo: '/logos/printful.svg',
      partnerColor: '#0c8ce0',
    },
  },

  // Local SEO pages
  local: {
    boise: {
      title: 'AI Agent Services',
      description: 'United States',
      template: 'local',
      location: 'US',
      state: '',
      background: {
        type: 'gradient',
        colors: ['#1a1a2e', '#0f3460'],
      },
      showMapPin: true,
      highlight: 'Local AI Solutions',
    },
  },

  // Template definitions
  templates: {
    hero: {
      layout: 'centered',
      elements: ['title', 'description', 'logo', 'cta'],
      style: 'gradient-background',
    },

    blogPost: {
      layout: 'card',
      elements: ['title', 'description', 'category', 'author', 'date'],
      style: 'card-overlay',
    },

    product: {
      layout: 'feature',
      elements: ['title', 'description', 'icon', 'features-list'],
      style: 'feature-showcase',
    },

    integration: {
      layout: 'split',
      elements: ['hermes-logo', 'plus', 'partner-logo', 'title'],
      style: 'partnership',
    },

    pricing: {
      layout: 'cards',
      elements: ['title', 'price', 'features'],
      style: 'pricing-table',
    },

    local: {
      layout: 'location',
      elements: ['title', 'location', 'map-pin', 'services'],
      style: 'local-service',
    },
  },

  // Utility functions
  utils: {
    // Generate image URL for a page
    generateUrl: (pageType: string, identifier?: string): string => {
      if (identifier) {
        return `/api/og/${pageType}/${identifier}`;
      }
      return `/api/og/${pageType}`;
    },

    // Get configuration for a specific page
    getConfig: (pageType: string, identifier?: string): object => {
      const config = ogImageConfig.default;
      const pageConfig = identifier 
        ? ogImageConfig[pageType]?.posts?.[identifier] 
        : ogImageConfig.pages?.[pageType];
      
      return { ...config, ...pageConfig };
    },

    // Fallback image
    fallback: '/images/og/og-fallback.jpg',
  },
};

// Export individual configs for direct import
export const blogPostOgConfig = ogImageConfig.blog.posts;
export const productOgConfig = ogImageConfig.products;
export const integrationOgConfig = ogImageConfig.integrations;

export default ogImageConfig;