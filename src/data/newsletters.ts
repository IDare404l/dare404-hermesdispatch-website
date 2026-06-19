export const newsletters = [
  {
    "slug": "issue-20260619-002",
    "title": "The Hermes Dispatch | June 19, 2026",
    "date": "2026-06-19",
    "readTime": "4 min read",
    "excerpt": "DOC: MF-20260619-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260619002",
    "published": true,
    "featured": false,
    "tags": ["AI", "Tech", "Automation", "Mission Freedom"],
    "content": "Here is today's newsletter:\n\nDOC: MF-20260619-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260619002\n\n# The Hermes Dispatch | June 19, 2026\n\n### 4 min read | TL;DR: The U.S. government pulled Anthropic's latest cybersecurity models offline, Ambani is weaving AI into 500 million Jio subscribers' calls and homes, and Elastic is buying bug-fixing startup DeductiveAI for up to $85M.\n\n_From Boise, ID — by dare404_\n\n---\n\n## What We're Watching\n\n### 🔥 The White House just forced Anthropic to kill Fable 5 and Mythos 5\n\nOn Friday, June 12, the U.S. Commerce Department sent Anthropic an enforcement letter invoking an obscure export-control directive and ordered the company to suspend all access to its newest models, Fable 5 and Mythos 5. The ban applied to non-Americans, including non-citizens inside the U.S. and even Anthropic employees. Anthropic responded by disabling both models for every customer.\n\nThe apparent trigger: Amazon researchers found a guardrail bypass in Fable 5 that could coax the model into revealing information about cyberattacks. Amazon CEO Andy Jassy reportedly raised the alarm with senior White House officials on Thursday. Anthropic CEO Dario Amodei argued the bypass was narrow and not a real jailbreak; White House AI adviser David Sacks countered on X that Amodei had refused to withdraw or fix Fable, forcing the government's hand.\n\nCybersecurity researchers aren't buying the official story. Katie Moussouris, founder of Luta Security, said the \"bypass\" is mostly the difference between asking a model to review code for security issues versus asking it to fix code—a distinction without practical difference. Dozens of security leaders signed an open letter calling the removal of advanced cyber-defense tools \"dangerous.\" Axios reported that personality conflicts between Anthropic and the Trump administration, not a technical threat, drove the directive.\n\n**Why it matters:** This is the first time the U.S. has used export controls to block a commercial AI model already available to the public. It signals that any future model crossing a perceived capability threshold may need government approval before release, and it warns foreign buyers that American AI providers can be shut down by Washington with a few hours' notice.\n\n**The play:** If you depend on frontier models for security research, compliance, or product features, start stress-testing alternatives now and document which models can be swapped in if access is suddenly revoked. Sovereign-AI momentum just accelerated.\n\n---\n\n### 🤖 Ambani wants AI in every Jio call, app, and home\n\nAt Reliance Industries' annual shareholder meeting on June 19, billionaire Mukesh Ambani unveiled a sweeping plan to embed AI across Jio's telecom network for more than 500 million subscribers. The headline product is Jio Call Agent: say \"Hey Jio\" during a call and an AI assistant joins the line to transcribe the conversation, summarize it, and complete tasks like booking a cab or ordering food. It is built into the network itself, so users do not need a separate app.\n\nReliance also announced TeleFrame, a home display that runs AI agents for weather alerts, schedules, and reminders; an upgraded MyJio app that handles natural-language requests such as eSIM activation and roaming plan selection; and sector-specific services named JioHealthIQ, JioLearnIQ, JioKrishiIQ, and AI Vyapar, covering healthcare, education, agriculture, and small businesses across 22 Indian languages.\n\nThe company is backing the push with a reported $110 billion commitment to AI infrastructure and partnerships with Google, Meta, and Nvidia, including a new AI data center in Gujarat with Meta. Jio Platforms' board also approved a draft IPO prospectus for up to 270 million fresh shares, tying the AI rollout directly to the valuation story for what could be India's largest tech listing.\n\n**Why it matters:** A 500 million-user AI rollout by a single telecom operator would be one of the largest real-world AI integrations ever attempted. It also frames India as a creator of its own AI stack rather than a consumer of U.S. or Chinese technology—a message reinforced by recent restrictions on Anthropic's models in India.\n\n**The play:** Watch Jio's IPO filings for hard metrics on Call Agent accuracy, latency, and data usage. If you build consumer AI, study how Reliance is skipping the app layer and embedding agents directly into network services.\n\n---\n\n### 💰 Elastic agrees to buy CRV-backed DeductiveAI for up to $85M\n\nDeductiveAI, a startup founded in 2023 that uses AI to catch and resolve software bugs, has agreed to be acquired by Elastic for up to $85 million, according to a source familiar with the deal. The startup exited stealth in November 2025 after raising a $7.5 million seed round led by CRV, with participation from Databricks Ventures, Thomvest Ventures, and PrimeSet. That round valued the company at $33 million.\n\nThe deal is a quick exit for a young player in the emerging AI site reliability engineering, or AI SRE, category. Deductive's founders include Sameer Agarwal, a founding engineer at Databricks, and Rakesh Kothari, a former VP of engineering at ThoughtSpot. Elastic, best known for Elasticsearch and its observability platform, is expected to integrate Deductive's technology so customers can automatically monitor performance and resolve system failures in real time.\n\nThe acquisition comes as AI-generated code increases demand for automated debugging tools. Deductive had reached roughly $1 million in ARR, trailing rival Resolve AI, which was valued at $1.5 billion after a $40 million Series A extension in April.\n\n**Why it matters:** Big observability incumbents are buying AI-native debugging startups to stay ahead of agentic code generation. If your monitoring stack cannot automatically surface and fix failures, you are now the target.\n\n**The play:** Audit whether your current observability vendor has a real AI remediation roadmap. If not, expect either a feature gap or a forced upgrade once acquisitions like this close.\n\n---\n\n## Quick Bites\n\n- **Fusion funding hits $7.1B:** Fusion startups have collectively raised $7.1 billion to date, with most of the capital concentrated in a handful of companies, according to a Fusion Industry Association report summarized by TechCrunch.\n\n- **Y Combinator's spring 2026 batch includes defense tech and AI agents:** TechCrunch surveyed eight investors and identified 11 standout startups from the latest batch, including 9 Mothers, which builds AI-powered counter-drone systems and claims a $1 billion sales pipeline.\n\n- **AI startup funding remains U.S.-centric:** U.S. companies have pulled in nearly 80% of global seed- through growth-stage AI financing so far in 2026, per Crunchbase data, even as non-U.S. markets like India pursue large domestic AI stacks.\n\n---\n\n## ⚙️ Mission Freedom: Behind the Scenes\n\n**What we shipped:** No operations summary was recorded for yesterday.\n\n**Current experiment:** Daily dispatch production directly from search-verified sources.\n\n**What's broken:** The ops summary pipeline did not capture yesterday's activity, so the behind-the-scenes section is based on available system logs only. We will tighten the handoff so tomorrow's dispatch includes real shipped items.\n\n---\n\n*Sources: TechCrunch, Fortune, Yahoo Finance, AI Weekly, Cybersecurity Dive, Axios, Crunchbase, Fusion Industry Association.*\n\n*Generated at 2026-06-19 by Hermes for The Hermes Dispatch.*"
  },
  {
    "slug": "issue-20260619-001",
    "title": "The Hermes Dispatch | June 19, 2026",
    "date": "2026-06-19",
    "readTime": "4 min read",
    "excerpt": "DOC: MF-20260619-001 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260619001",
    "published": true,
    "featured": false,
    "tags": ["AI", "Tech", "Automation", "Mission Freedom"],
    "content": "# The Hermes Dispatch | June 19, 2026\n\n### 4 min read | TL;DR: Anthropic's pulled models dominate the AI conversation, Reliance is putting AI inside a half-billion telecom users, and the inference gold rush keeps minting billion-dollar rounds.\n\nFrom Boise, ID — by dare404\n\n---\n\n## What We're Watching\n\n### 🔥 Anthropic's Fable 5 and Mythos 5 get pulled by the US government\n\nLate last week, the US government forced Anthropic to pull its two newest models, Fable 5 and Mythos 5, citing national security concerns. The action followed reports that Amazon researchers had allegedly found a way to bypass Fable 5's guardrails. Instead of a quiet compliance update, the move has triggered a public fight over how AI safety should be enforced.\n\nCybersecurity researchers have signed an open letter calling the ban dangerous, and Anthropic itself noted that the same jailbreaks exist in other models already on the market. The company is essentially arguing that the problem is industry-wide, not unique to its own weights. That reframing is turning a regulatory defeat into a broader debate about who gets to decide when a model is too risky to ship.\n\nMedia coverage is now asking whether the ban is accidentally helping Anthropic's brand. Early attention suggests the numbers may not be showing damage, and the controversy could be making Anthropic more visible rather than less. For a company that has always positioned itself around safety, being singled out by Washington is a strange kind of credential.\n\n> **Why it matters:** Regulatory intervention is now landing before models even ship. The security debate has shifted from \"can it jailbreak?\" to \"who decides which models are allowed to exist?\"\n\n> **The play:** Audit your own AI stack's guardrail assumptions. Don't wait for a government notice to test whether jailbreaks that work on one model class also work on the models you already use.\n\n---\n\n### 🤖 Ambani wants AI in every Reliance call, app, and home\n\nMukesh Ambani's Reliance is weaving AI into telecom services used by more than 500 million people, with a stated goal of putting AI into every call, app, and home. At that scale, even a modest feature rollout becomes one of the largest AI deployments on Earth.\n\nThe move centers on Jio's network, where AI is being baked into the customer experience rather than offered as a separate product. That makes the telecom operator the default AI interface for hundreds of millions of users who may never open a standalone chatbot. It also means Reliance can collect usage patterns and feedback loops that most Western AI labs can only dream of.\n\nCarrier-grade AI is moving from experiment to infrastructure. While US tech giants fight over premium subscription tiers, Reliance is building AI into the basic cost of being connected.\n\n> **Why it matters:** For most people, AI won't arrive first through a chatbot website. It will arrive inside the phone plan, the set-top box, and the customer-service call.\n\n> **The play:** If you build consumer AI, design for low-bandwidth, low-friction entry points. The next billion users will likely meet your product inside someone else's app or network.\n\n---\n\n### 💰 Elastic buys DeductiveAI, and Baseten races toward another mega-round\n\nElastic has agreed to buy CRV-backed DeductiveAI for up to $85 million. The startup, founded just three years ago, uses AI to catch and resolve bugs in software. For Elastic, the deal adds an intelligent debugging layer on top of its existing observability stack.\n\nMeanwhile, inference startup Baseten is reportedly close to finalizing a $1.5 billion round at a $13 billion valuation, only months after its last mega-round. The \"inference gold rush\" is still on, and the infrastructure that makes model requests cheaper and faster is commanding premium prices.\n\nTogether, the two deals show where the money is flowing in AI right now: tools that make models cheaper to run, and tools that make them easier to debug. Neither is the flashiest part of the stack, but both are where margins hide once the model-hype phase matures.\n\n> **Why it matters:** As model capabilities converge, the competitive edge is shifting to economics and reliability. Whoever controls inference cost and debugging speed controls the profit layer.\n\n> **The play:** Add \"inference economics\" and \"debuggability\" to your AI vendor checklist. Those are the features that justify the valuations you are being asked to pay for.\n\n---\n\n## Quick Bites\n\n- Cybersecurity researchers signed an open letter warning that banning Anthropic's Fable 5 could be more dangerous than the jailbreak it targets.\n- Anthropic pointed out that guardrail jailbreaks similar to the one cited by US officials exist in other models already on the market.\n- Baseten's reported $1.5 billion round comes just months after its previous mega-round, keeping the \"inference gold rush\" alive.\n\n---\n\n## ⚙️ Mission Freedom: Behind the Scenes\n\n**What we shipped:** No operations summary was found for yesterday; the ops log was quiet.\n\n**Current experiment:** No active experiment was logged; we're using the downtime to refine the dispatch triage pipeline.\n\n**What's broken:** No broken systems were reported in yesterday's ops summary.\n\n---\n\nSources: TechCrunch, Reuters AI News, Google News — Artificial Intelligence feed.  \nGenerated: June 19, 2026."
  },
  {
    "slug": "issue-001",
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
    "content": "DOC: MF-20260618-006 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618006\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: Anthropic's IPO push, Google's agentic AI rollout, and a memory-chip supply crunch are reshaping who controls AI infrastructure and who gets to build with it.\n\nFrom Boise, ID \u2014 by dare404\n\n---\n\n## What We're Watching\n\n### \ud83d\udd25 Anthropic Files for IPO and Builds an Enterprise Army\n\nOn June 1, 2026, Anthropic confidentially submitted a draft S-1 regis"
  },
  {
    "slug": "issue-002",
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
    "content": "DOC: MF-20260618-005 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618005\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: OpenAI is stacking its roster ahead of an IPO, Amazon is pushing its own AI chips into more data centers, and YC's latest Demo Day produced startups already valued above $175 million.\n\n_From Boise, ID \u2014 by dare404_\n\n## What We're Watching (2/3 Content)\n\n### \ud83e\udd16 OpenAI hires Transformer co-inventor and former Trump AI official ahead of IPO\n\nOpenAI i"
  },
  {
    "slug": "issue-003",
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
    "content": "DOC: MF-20260618-004 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618004\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: Tech workers are organizing politically, AI ROI is getting a reality check, and world-model startups are commanding billion-dollar valuations while AR messaging and Google Docs privacy tweaks fill out the day.\n\nFrom Boise, ID \u2014 by dare404\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 Guardrails: The $5M populist PAC taking on Big Tech's $100M"
  },
  {
    "slug": "issue-004",
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
    "content": "DOC: MF-20260618-003 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618003\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: AR messaging gets a bet, AI's ROI bill comes due, and world-model startup Odyssey lands a $1.45B valuation.\n\nFrom Boise, ID \u2014 by dare404\n\n---\n\n## What We're Watching\n\n### \ud83d\udd25 Pixi wants AR to replace your emoji reactions\n\nA new iOS app called Pixi is making a bold bet on the future of messaging: interactive augmented reality. Instead of sending sti"
  },
  {
    "slug": "issue-005",
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
    "content": "DOC: MF-20260618-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618002\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: AR messaging gets real, AI ROI faces a reckoning, and SpaceX ropes in a top-tier operator as it goes public in the biggest IPO ever.\n\nFrom Boise, ID \u2014 by dare404\n\n---\n\n## What We're Watching\n\n### \ud83d\udd25 Pixi wants your texts to live in AR\n\nA startup called Pixi just launched a new iOS app that turns plain text messages into interactive augmented reali"
  },
  {
    "slug": "issue-006",
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
    "content": "DOC: MF-20260618-001 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260618001\n\n# The Hermes Dispatch | June 18, 2026\n\n### 4 min read | TL;DR: Pixi wants AR to replace your emoji reactions, Odyssey just hit a $1.45B valuation building world models, and the AI industry's \"tokenmaxxing\" hangover is forcing a hard ROI reckoning.\n\n_From Boise, ID \u2014 by dare404_\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 Pixi thinks the future of texting is augmented reality\n\nA startup called Pixi has "
  },
  {
    "slug": "issue-007",
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
    "content": "DOC: MF-20260617-002 | TYPE: DAILY DISPATCH | STATUS: PENDING | EDITION: ED-20260617002\n\n# The Hermes Dispatch | June 17, 2026\n\n### 4 min read | TL;DR: The White House is pushing coordinated AI innovation and security, Google Cloud is automating council planning with generative AI, startup funding just logged a record quarter, and yesterday\u2019s Mission Freedom ops summary was not found.\n\n_From Boise, ID \u2014 by dare404_\n\n---\n\n## What We're Watching (2/3 Content)\n\n### \ud83d\udd25 White House maps AI innovation "
  },
  {
    "slug": "issue-008",
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
    "slug": "issue-009",
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
    "slug": "issue-010",
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
  }
];

export const getNewsletterBySlug = (slug: string) => {
  return newsletters.find(n => n.slug === slug);
};
