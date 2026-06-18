export const newsletters = [
  {
    "slug": "issue-001",
    "title": "The Hermes Dispatch | June 17, 2026",
    "date": "2026-06-17",
    "readTime": "4 min read",
    "excerpt": "The White House is pushing coordinated AI innovation and security, Google Cloud is automating council planning with gene",
    "published": true,
    "featured": true,
    "tags": [
      "AI",
      "Tech",
      "Automation",
      "Mission Freedom"
    ],
    "content": "DOC: MF-20260617-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260617002\n\n# The Hermes Dispatch | June 17, 2026\n\n### 4 min read | TL;DR: The White House is pushing coordinated AI innovation and security, Google Cloud is automating council planning with generative AI, startup funding just logged a record quarter, and yesterday\u2019s Mission Freedom ops summary was not found.\n\n_From Boise, ID \u2014 by dare404_\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 White House maps AI innovation "
  },
  {
    "slug": "issue-002",
    "title": "The Hermes Dispatch | June 18, 2026",
    "date": "2026-06-17",
    "readTime": "4 min read",
    "excerpt": "[One-line summary of today's top story]",
    "published": true,
    "featured": false,
    "tags": [
      "AI",
      "Tech",
      "Automation",
      "Mission Freedom"
    ],
    "content": "DOC: MF-20260617-001 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: SYS-0008\n\n# The Hermes Dispatch | June 18, 2026\n### 4 min read | TL;DR: [One-line summary of today's top story]\n\n*From Boise, ID \u2014 by dare404*\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 [AI/Tech Headline 1]\n[3-4 paragraphs on the most important external story today]\n\n**Why it matters:**\n[Explain why this impacts builders, operators, or the AI ecosystem]\n\n**The play:**\n[What action to take or what this means practical"
  },
  {
    "slug": "issue-003",
    "title": "The Hermes Dispatch | June 12, 2026",
    "date": "2026-06-11",
    "readTime": "4 min read",
    "excerpt": "[One-line summary of today's top story]",
    "published": true,
    "featured": false,
    "tags": [
      "AI",
      "Tech",
      "Automation",
      "Mission Freedom"
    ],
    "content": "DOC: MF-20260611-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: SYS-0006\n\n# The Hermes Dispatch | June 12, 2026\n### 4 min read | TL;DR: [One-line summary of today's top story]\n\n*From Boise, ID \u2014 by dare404*\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 [AI/Tech Headline 1]\n[3-4 paragraphs on the most important external story today]\n\n**Why it matters:**\n[Explain why this impacts builders, operators, or the AI ecosystem]\n\n**The play:**\n[What action to take or what this means practical"
  },
  {
    "slug": "issue-004",
    "title": "The Hermes Dispatch | June 12, 2026",
    "date": "2026-06-11",
    "readTime": "4 min read",
    "excerpt": "[One-line summary of today's top story]",
    "published": true,
    "featured": false,
    "tags": [
      "AI",
      "Tech",
      "Automation",
      "Mission Freedom"
    ],
    "content": "DOC: MF-20260611-001 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: SYS-0005\n\n# The Hermes Dispatch | June 12, 2026\n### 4 min read | TL;DR: [One-line summary of today's top story]\n\n*From Boise, ID \u2014 by dare404*\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 [AI/Tech Headline 1]\n[3-4 paragraphs on the most important external story today]\n\n**Why it matters:**\n[Explain why this impacts builders, operators, or the AI ecosystem]\n\n**The play:**\n[What action to take or what this means practical"
  },
  {
    "slug": "issue-005",
    "title": "The Hermes Dispatch | June 11, 2026",
    "date": "2026-06-10",
    "readTime": "4 min read",
    "excerpt": "AI\u2022ON: Artificial Intelligence Open Network",
    "published": true,
    "featured": false,
    "tags": [
      "AI",
      "Tech",
      "Automation",
      "Mission Freedom"
    ],
    "content": "DOC: MF-20260610-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260610002\n\n# The Hermes Dispatch | June 11, 2026\n### 4 min read | TL;DR: AI\u2022ON: Artificial Intelligence Open Network\n\n*From Boise, ID \u2014 by dare404*\n\n---\n\n## What We're Watching\n\n\n### \ud83d\udd25 AI\u2022ON: Artificial Intelligence Open Network\nThis development signals continued maturation of the AI infrastructure stack. Builders should track tooling velocity and cost curves rather than model releases alone.\n\n**Why it matters:**\nCover"
  }
];

export const getNewsletterBySlug = (slug: string) => {
  return newsletters.find(n => n.slug === slug);
};
