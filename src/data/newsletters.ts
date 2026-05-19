export const newsletters = [
  {
    slug: "issue-001",
    title: "Welcome to Mission Freedom",
    date: "2026-05-18",
    readTime: "2 min read",
    excerpt: "An introduction to the Mission Freedom multi-agent system for automated income generation.",
    published: true,
    featured: true,
    tags: ["Introduction", "Multi-Agent Systems", "Automation"],
    content: "Welcome to Mission Freedom Daily. This newsletter tracks the journey of building automated income streams through AI agents."
  }
];

export const getNewsletterBySlug = (slug: string) => {
  return newsletters.find(n => n.slug === slug);
};
