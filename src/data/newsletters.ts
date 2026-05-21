// Newsletter configuration
// In production, newsletter deployed separately with API support

export const NEWSLETTER_CONFIG = {
  // Set to your Vercel deployment URL when ready
  // Example: 'https://newsletter-hermes.vercel.app'
  apiBaseUrl: import.meta.env.PUBLIC_NEWSLETTER_API_URL || '',
};

export interface NewsletterIssue {
  slug: string;
  date: string;
  title: string;
  subject: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

const newsletters: NewsletterIssue[] = [
  // Issue 3: May 21, 2026
  {
    slug: 'may-21-anduril-funding-agent-updates',
    date: 'May 21, 2026',
    title: 'Anduril Raises $5 Billion',
    subject: "This week in AI: Defense funding hits 61B, and IGOR's getting faster at fixing himself",
    excerpt: "Oscar-winning AI is now fighting wars. Anduril just closed $5B at a $61B valuation. Plus: IGOR hits 62% mastery and the newsletter gets a template upgrade.",
    content: `
      <p class="lead">The biggest funding round in defense AI just happened. Here's what it means.</p>
      
      <h2>🔥 Must Read: Anduril Raises $5 Billion</h2>
      <p>Palmer Luckey's defense startup <strong>Anduril</strong> closed a <strong>$5 billion Series H</strong> at a <strong>$61 billion valuation</strong> — doubling its price from last year. Their Ghost drones and Fury autonomous jets are already deployed. Revenue hit $2.2 billion in 2025.</p>
      <p>This isn't future speculation. AI-driven defense systems are <em>deployed now</em>. The hardware + AI stack is becoming a real category.</p>
      
      <h2>💰 The Numbers</h2>
      <table>
        <tr><td>Anduril</td><td>$5.0B</td></tr>
        <tr><td>Sierra AI</td><td>$950M</td></tr>
        <tr><td>True Anomaly</td><td>$600M</td></tr>
        <tr><td>Ineffable Intelligence</td><td>$1.1B</td></tr>
      </table>
      <p><strong>Total:</strong> $13B+ across 45+ deals this week.</p>
      
      <h2>🔨 Mission Freedom Update</h2>
      <p>The Operator (IGOR) hit <strong>62% mastery</strong> yesterday. Key insight from five newsletter reviews: structure was solid, but our voice was inconsistent. Template rewritten with single-table Numbers section and added 4-min read badge.</p>
      <p><strong>Target:</strong> 95% by June 30.</p>
      
      <hr />
      <p><em>— Insights from IGOR - Edited by dare404</em></p>
    `,
    tags: ['funding', 'defense-ai', 'anduril', 'mission-freedom'],
    readTime: '4 min',
    featured: true
  },
  // Issue 1: Welcome
  {
    slug: 'welcome-to-hermes-dispatch',
    date: 'May 15, 2026',
    title: 'Welcome to The Hermes Dispatch',
    subject: 'Building workflows that build themselves',
    excerpt: "You're in. Here's what to expect from Mission Freedom's newsletter on AI agents, automation, and self-improving systems.",
    content: `
      <p>Welcome to The Hermes Dispatch.</p>
      
      <p>I'm dare404, and this newsletter documents one thing: <strong>building workflows that build themselves</strong>.</p>
      
      <p>Mission Freedom isn't theory. It's a working system of AI agents that handle my newsletter, e-commerce, social media, and research — all running autonomously with minimal intervention.</p>
      
      <h3>What you'll get</h3>
      <ul>
        <li><strong>Working patterns</strong> — Skills, blocks, and architectures that actually run in production</li>
        <li><strong>Failures documented</strong> — When things break, why, and how they were fixed</li>
        <li><strong>No fluff</strong> — No AI hype, no "future of work" speculation. Just working code.</li>
      </ul>
      
      <p>New issues arrive when there's something worth sharing.</p>
      
      <p><em>— IGOR - Edited by dare404</em></p>
    `,
    tags: ['welcome', 'mission-freedom', 'ai-agents'],
    readTime: '2 min',
    featured: false
  },
  // Issue 2: IGOR Absorbs Librarian (draft)
  {
    slug: 'igor-absorbs-librarian',
    date: 'May 15, 2026',
    title: 'How IGOR Absorbed the Librarian',
    subject: 'A consolidation case study: when one agent handles failure logging',
    excerpt: "The Librarian agent is gone. Here's how IGOR took over logging, what broke, and why fewer moving parts means more reliable systems.",
    content: `
      <p>Today, the Librarian agent ceased to exist.</p>
      
      <p>Well, not existed — it got <strong>absorbed by IGOR</strong>. The orchestrator now handles centralized failure logging. Other agents log their own successes. The result: simpler architecture, fewer sync points, one source of truth.</p>
      
      <p>Here's why we did it and what changed:</p>
      
      <h3>The problem with separate logging</h3>
      <ul>
        <li>Two agents coordinating "who logs what" — unnecessary</li>
        <li>Sync issues between system changes and documentation</li>
        <li>Manual trigger for syncs (missed updates)</li>
      </ul>
      
      <h3>New architecture</h3>
      <ul>
        <li><strong>Agents:</strong> Log their own successes to Obsidian (<code>obsidian-logger</code>)</li>
        <li><strong>IGOR:</strong> Handles failures + automatic dual-sync (website + Obsidian)</li>
        <li><strong>No manual triggers:</strong> Sync runs automatically after edits</li>
      </ul>
      
      <p>The <code>dual-sync-workflow</code> skill now runs automatically. Less overhead. Same documentation. Better consistency.</p>
      
      <p><em>— IGOR - Edited by dare404</em></p>
    `,
    tags: ['architecture', 'consolidation', 'obsidian', 'skills'],
    readTime: '3 min',
    featured: false
  }
];

export function getPublishedNewsletters(): NewsletterIssue[] {
  return newsletters.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestNewsletter(): NewsletterIssue | undefined {
  return getPublishedNewsletters()[0];
}

export function getNewsletterBySlug(slug: string): NewsletterIssue | undefined {
  return newsletters.find(n => n.slug === slug);
}
