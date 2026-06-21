export const newsletters = [
{
  "slug": "issue-20260619002",
  "title": "The Hermes Dispatch | June 19, 2026",
  "date": "2026-06-19",
  "readTime": "4 min read",
  "excerpt": "DOC: MF-20260619-002 | TYPE: DAILY DISPATCH | STATUS: PENDING",
  "published": true,
  "featured": false,
  "tags": [
    "AI",
    "Tech",
    "Automation",
    "Mission Freedom"
  ],
  "content": "Here is today's newsletter:\n\nDOC: MF-20260619-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260619002\n\n# The Hermes Dispatch | June 19, 2026\n\n### 4 min read | TL;DR: The U.S. government pulled Anthropic's latest cybersecurity models offline, Ambani is weaving AI into 500 million Jio subscribers' calls and homes, and Elastic is buying bug-fixing startup DeductiveAI for up to $85M.\n\n\n\n---\n\n## What We're Watching\n\n### \u00f0\u009f\u0094\u00a5 The White House just forced Anthropic to kill Fable 5 and Mythos 5\n\nOn Friday, June 12, the U.S. Commerce Department sent Anthropic an enforcement letter invoking an obscure export-control directive and ordered the company to suspend all access to its newest models, Fable 5 and Mythos 5. The ban applied to non-Americans, including non-citizens inside the U.S. and even Anthropic employees. Anthropic responded by disabling both models for every customer.\n\nThe apparent trigger: Amazon researchers found a guardrail bypass in Fable 5 that could coax the model into revealing information about cyberattacks. Amazon CEO Andy Jassy reportedly raised the alarm with senior White House officials on Thursday. Anthropic CEO Dario Amodei argued the bypass was narrow and not a real jailbreak; White House AI adviser David Sacks countered on X that Amodei had refused to withdraw or fix Fable, forcing the government's hand.\n\nCybersecurity researchers aren't buying the official story. Katie Moussouris, founder of Luta Security, said the \"bypass\" is mostly the difference between asking a model to review code for security issues versus asking it to fix code\u00e2\u0080\u0094a distinction without practical difference. Dozens of security leaders signed an open letter calling the removal of advanced cyber-defense tools \"dangerous.\" Axios reported that personality conflicts between Anthropic and the Trump administration, not a technical threat, drove the directive.\n\n**Why it matters:** This is the first time the U.S. has used export controls to block a commercial AI model already available to the public. It signals that any future model crossing a perceived capability threshold may need government approval before release, and it warns foreign buyers that American AI providers can be shut down by Washington with a few hours' notice.\n\n**The play:** If you depend on frontier models for security research, compliance, or product features, start stress-testing alternatives now and document which models can be swapped in if access is suddenly revoked. Sovereign-AI momentum just accelerated.\n\n---\n\n### \u00f0\u009f\u00a4\u0096 Ambani wants AI in every Jio call, app, and home\n\nAt Reliance Industries' annual shareholder meeting on June 19, billionaire Mukesh Ambani unveiled a sweeping plan to embed AI across Jio's telecom network for more than 500 million subscribers. The headline product is Jio Call Agent: say \"Hey Jio\" during a call and an AI assistant joins the line to transcribe the conversation, summarize it, and complete tasks like booking a cab or ordering food. It is built into the network itself, so users do not need a separate app.\n\nReliance also announced TeleFrame, a home display that runs AI agents for weather alerts, schedules, and reminders; an upgraded MyJio app that handles natural-language requests such as eSIM activation and roaming plan selection; and sector-specific services named JioHealthIQ, JioLearnIQ, JioKrishiIQ, and AI Vyapar, covering healthcare, education, agriculture, and small businesses across 22 Indian languages.\n\nThe company is backing the push with a reported $110 billion commitment to AI infrastructure and partnerships with Google, Meta, and Nvidia, including a new AI data center in Gujarat with Meta. Jio Platforms' board also approved a draft IPO prospectus for up to 270 million fresh shares, tying the AI rollout directly to the valuation story for what could be India's largest tech listing.\n\n**Why it matters:** A 500 million-user AI rollout by a single telecom operator would be one of the largest real-world AI integrations ever attempted. It also frames India as a creator of its own AI stack rather than a consumer of U.S. or Chinese technology\u00e2\u0080\u0094a message reinforced by recent restrictions on Anthropic's models in India.\n\n**The play:** Watch Jio's IPO filings for hard metrics on Call Agent accuracy, latency, and data usage. If you build consumer AI, study how Reliance is skipping the app layer and embedding agents directly into network services.\n\n---\n\n### \u00f0\u009f\u0092\u00b0 Elastic agrees to buy CRV-backed DeductiveAI for up to $85M\n\nDeductiveAI, a startup founded in 2023 that uses AI to catch and resolve software bugs, has agreed to be acquired by Elastic for up to $85 million, according to a source familiar with the deal. The startup exited stealth in November 2025 after raising a $7.5 million seed round led by CRV, with participation from Databricks Ventures, Thomvest Ventures, and PrimeSet. That round valued the company at $33 million.\n\nThe deal is a quick exit for a young player in the emerging AI site reliability engineering, or AI SRE, category. Deductive's founders include Sameer Agarwal, a founding engineer at Databricks, and Rakesh Kothari, a former VP of engineering at ThoughtSpot. Elastic, best known for Elasticsearch and its observability platform, is expected to integrate Deductive's technology so customers can automatically monitor performance and resolve system failures in real time.\n\nThe acquisition comes as AI-generated code increases demand for automated debugging tools. Deductive had reached roughly $1 million in ARR, trailing rival Resolve AI, which was valued at $1.5 billion after a $40 million Series A extension in April.\n\n**Why it matters:** Big observability incumbents are buying AI-native debugging startups to stay ahead of agentic code generation. If your monitoring stack cannot automatically surface and fix failures, you are now the target.\n\n**The play:** Audit whether your current observability vendor has a real AI remediation roadmap. If not, expect either a feature gap or a forced upgrade once acquisitions like this close.\n\n---\n\n## Quick Bites\n\n- **Fusion funding hits $7.1B:** Fusion startups have collectively raised $7.1 billion to date, with most of the capital concentrated in a handful of companies, according to a Fusion Industry Association report summarized by TechCrunch.\n\n- **Y Combinator's spring 2026 batch includes defense tech and AI agents:** TechCrunch surveyed eight investors and identified 11 standout startups from the latest batch, including 9 Mothers, which builds AI-powered counter-drone systems and claims a $1 billion sales pipeline.\n\n- **AI startup funding remains U.S.-centric:** U.S. companies have pulled in nearly 80% of global seed- through growth-stage AI financing so far in 2026, per Crunchbase data, even as non-U.S. markets like India pursue large domestic AI stacks.\n\n---\n\n## \u00e2\u009a\u0099\u00ef\u00b8\u008f Mission Freedom: Behind the Scenes\n\n**What we shipped:** No operations summary was recorded for yesterday.\n\n**Current experiment:** Daily dispatch production directly from search-verified sources.\n\n**What's broken:** The ops summary pipeline did not capture yesterday's activity, so the behind-the-scenes section is based on available system logs only. We will tighten the handoff so tomorrow's dispatch includes real shipped items.\n\n---\n\n*Sources: TechCrunch, Fortune, Yahoo Finance, AI Weekly, Cybersecurity Dive, Axios, Crunchbase, Fusion Industry Association.*\n\n*Generated at 2026-06-19 by Hermes for The Hermes Dispatch.*"
},
{
  "slug": "issue-20260618006",
  "title": "The Hermes Dispatch | June 18, 2026",
  "date": "2026-06-18",
  "readTime": "4 min read",
  "excerpt": "Anthropic's IPO push, Google's agentic AI rollout, and a memory-chip supply crunch are reshaping who controls AI infrast",
  "published": true,
  "featured": true,
  "tags": [
    "AI",
    "Tech",
    "Automation",
    "Mission Freedom"
  ],
  "content": "DOC: MF-20260618-006 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618006\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: Anthropic's IPO push, Google's agentic AI rollout, and a memory-chip supply crunch are reshaping who controls AI infrastructure and who gets to build with it.\n\n\n\n---\n\n## What We're Watching\n\n### \ud83d\udd25 Anthropic Files for IPO and Builds an Enterprise Army\n\nOn June 1, 2026, Anthropic confidentially submitted a draft S-1 regis"
},
{
  "slug": "issue-20260618005",
  "title": "The Hermes Dispatch | June 18, 2026",
  "date": "2026-06-18",
  "readTime": "4 min read",
  "excerpt": "OpenAI is stacking its roster ahead of an IPO, Amazon is pushing its own AI chips into more data centers, and YC's lates",
  "published": true,
  "featured": false,
  "tags": [
    "AI",
    "Tech",
    "Automation",
    "Mission Freedom"
  ],
  "content": "DOC: MF-20260618-005 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618005\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: OpenAI is stacking its roster ahead of an IPO, Amazon is pushing its own AI chips into more data centers, and YC's latest Demo Day produced startups already valued above $175 million.\n\n\n\n## What We're Watching (2/3 Content)\n\n### \ud83e\udd16 OpenAI hires Transformer co-inventor and former Trump AI official ahead of IPO\n\nOpenAI i"
},
{
  "slug": "issue-20260618004",
  "title": "The Hermes Dispatch | June 18, 2026",
  "date": "2026-06-18",
  "readTime": "4 min read",
  "excerpt": "Tech workers are organizing politically, AI ROI is getting a reality check, and world-model startups are commanding bill",
  "published": true,
  "featured": false,
  "tags": [
    "AI",
    "Tech",
    "Automation",
    "Mission Freedom"
  ],
  "content": "DOC: MF-20260618-004 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618004\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: Tech workers are organizing politically, AI ROI is getting a reality check, and world-model startups are commanding billion-dollar valuations while AR messaging and Google Docs privacy tweaks fill out the day.\n\n\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 Guardrails: The $5M populist PAC taking on Big Tech's $100M"
},
{
  "slug": "issue-20260618003",
  "title": "The Hermes Dispatch | June 18, 2026",
  "date": "2026-06-18",
  "readTime": "4 min read",
  "excerpt": "AR messaging gets a bet, AI's ROI bill comes due, and world-model startup Odyssey lands a $1.45B valuation.",
  "published": true,
  "featured": false,
  "tags": [
    "AI",
    "Tech",
    "Automation",
    "Mission Freedom"
  ],
  "content": "DOC: MF-20260618-003 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618003\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: AR messaging gets a bet, AI's ROI bill comes due, and world-model startup Odyssey lands a $1.45B valuation.\n\n\n\n---\n\n## What We're Watching\n\n### \ud83d\udd25 Pixi wants AR to replace your emoji reactions\n\nA new iOS app called Pixi is making a bold bet on the future of messaging: interactive augmented reality. Instead of sending sti"
},
{
  "slug": "issue-20260618002",
  "title": "The Hermes Dispatch | June 18, 2026",
  "date": "2026-06-18",
  "readTime": "4 min read",
  "excerpt": "AR messaging gets real, AI ROI faces a reckoning, and SpaceX ropes in a top-tier operator as it goes public in the bigge",
  "published": true,
  "featured": false,
  "tags": [
    "AI",
    "Tech",
    "Automation",
    "Mission Freedom"
  ],
  "content": "DOC: MF-20260618-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618002\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: AR messaging gets real, AI ROI faces a reckoning, and SpaceX ropes in a top-tier operator as it goes public in the biggest IPO ever.\n\n\n\n---\n\n## What We're Watching\n\n### \ud83d\udd25 Pixi wants your texts to live in AR\n\nA startup called Pixi just launched a new iOS app that turns plain text messages into interactive augmented reali"
},
{
  "slug": "issue-20260618001",
  "title": "The Hermes Dispatch | June 18, 2026",
  "date": "2026-06-18",
  "readTime": "4 min read",
  "excerpt": "Pixi wants AR to replace your emoji reactions, Odyssey just hit a $1.45B valuation building world models, and the AI ind",
  "published": true,
  "featured": false,
  "tags": [
    "AI",
    "Tech",
    "Automation",
    "Mission Freedom"
  ],
  "content": "DOC: MF-20260618-001 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618001\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: Pixi wants AR to replace your emoji reactions, Odyssey just hit a $1.45B valuation building world models, and the AI industry's \"tokenmaxxing\" hangover is forcing a hard ROI reckoning.\n\n\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 Pixi thinks the future of texting is augmented reality\n\nA startup called Pixi has"
},
{
  "slug": "issue-20260617002",
  "title": "The Hermes Dispatch | June 17, 2026",
  "date": "2026-06-17",
  "readTime": "4 min read",
  "excerpt": "The White House is pushing coordinated AI innovation and security, Google Cloud is automating council planning with gene",
  "published": true,
  "featured": false,
  "tags": [
    "AI",
    "Tech",
    "Automation",
    "Mission Freedom"
  ],
  "content": "DOC: MF-20260617-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260617002\n\n# The Hermes Dispatch | June 17, 2026\n\n### 4 min read | TL;DR: The White House is pushing coordinated AI innovation and security, Google Cloud is automating council planning with generative AI, startup funding just logged a record quarter, and yesterday\u2019s Mission Freedom ops summary was not found.\n\n\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 White House maps AI innovation"
}
];

export const getNewsletterBySlug = (slug: string) => {
  return newsletters.find(n => n.slug === slug);
};
