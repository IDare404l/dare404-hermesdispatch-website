export const newsletters = [
  {
    "slug": "issue-20260622-004",
    "title": "The Hermes Dispatch | June 22, 2026",
    "date": "2026-06-22",
    "readTime": "4 min read",
    "excerpt": "Groq raised $650 million and re-staffed its leadership to push its neocloud inference chip business after Nvidia's $20 billion not-acqui-hire deal.",
    "published": true,
    "featured": false,
    "tags": ["AI", "Tech", "Automation", "Mission Freedom", "AEO"],
    "content": "# The Hermes Dispatch | June 22, 2026\n\n### 4 min read | TL;DR: OpenAI is going after open-source bugs, agentic AI is moving to always-on swarms, Groq is reloading with $650M after Nvidia's $20B non-deal, and Meta is reshaping WhatsApp leadership with a $900M bet on Kunal Shah.\n\n## The Rig\n\n**Agent TL;DR:** Groq raised $650 million and re-staffed its leadership to push its neocloud inference chip business after Nvidia's $20 billion not-acqui-hire deal.\n\nGroq, the AI chipmaker known for ultra-low-latency inference, has confirmed a $650 million funding round and is rebuilding its executive bench. The raise comes after Nvidia's $20 billion \"not-acqui-hire\" deal pulled talent and attention away from Groq's orbit, leaving the company to prove it can compete on its own. Instead of shrinking, Groq is leaning harder into its neocloud business, pitching a chip stack that serves AI models fast and cheap without locking customers into the CUDA ecosystem.\n\nThe company is hiring new executives across engineering and go-to-market, a sign it wants to operate as a full-stack inference provider rather than a novelty silicon shop. For developers running local or edge models, that matters because inference cost is quietly becoming the biggest line item in any AI budget.\n\n**Why it matters:** Groq is one of the few hardware startups still trying to break Nvidia's grip on AI inference. A funded, re-staffed Groq means more competition, lower latency options, and a real alternative for running models outside the hyperscalers.\n\n**The play:** If you're running local LLMs or edge workloads, benchmark Groq's neocloud throughput and pricing against your current GPU setup. Watch the new exec hires for clues about which markets they plan to attack first.\n\n[Browse local LLM hardware →](https://hermesdispatch.dev/hardware/compare)\n\n## The Mine\n\n**Agent TL;DR:** OpenAI is launching a program to find and patch open-source security bugs, which matters directly to miners and node operators who depend on open-source wallet, pool, and node software.\n\nOpenAI is starting a new initiative to help find and patch security flaws in open-source software. The program targets the long tail of volunteer-maintained libraries and tools that power much of the internet but rarely get the security review they deserve. For crypto miners and node operators, that is not an abstract problem: open-source firmware, wallet software, pool clients, and node implementations are the actual foundation of most operations.\n\nA single unpatched bug in any of those layers can turn a profitable rig into a drained wallet. OpenAI's move does not replace your own audits, but it adds automated scrutiny to projects that are too small to fund full-time security teams. The safer the open-source stack, the less likely a payout gets intercepted before it reaches cold storage.\n\n**Why it matters:** Miners run on open-source code. More eyes on that code, especially automated ones backed by serious AI, shrinks the window for exploits and raises the baseline for wallet and node security.\n\n**The play:** Audit your open-source dependencies this week, turn on automatic security alerts where available, and route mining payouts through a hardware wallet with a verified firmware chain.\n\n[Secure your mining payouts →](https://shop.ledger.com/?r=ca1b30139f19)\n\n## The Ledger\n\n**Agent TL;DR:** Meta named CRED founder Kunal Shah as WhatsApp's new chief and invested $900 million in his startup while Will Cathcart moves to a new role at Meta.\n\nWhatsApp is getting a new boss. Meta has tapped Kunal Shah, founder of Indian fintech giant CRED, to lead WhatsApp, while outgoing chief Will Cathcart moves to a new role inside the company. As part of the move, Meta is investing $900 million in Shah's startup, giving the messaging app both a seasoned payments operator and a fresh capital injection.\n\nThe reshuffle points to a longer-term bet on WhatsApp as a financial-services and commerce platform, especially in India where CRED has built a trusted consumer brand around credit and payments. For traders and investors, it is a clear signal that Meta is willing to spend heavily to turn messaging into a payments and small-business hub, not just a chat app.\n\n**Why it matters:** WhatsApp's leadership change plus a $900 million check shows Meta is serious about monetizing messaging through fintech and commerce. That could reshape payment flows, ad targeting, and competition with other super-apps.\n\n**The play:** Watch how quickly Shah integrates payments features into WhatsApp Commerce and Meta Ads. If you're exposed to fintech, ad-tech, or emerging-market consumer stocks, treat this as a catalyst to revisit your thesis.\n\n[Compare trading tools →](https://hermesdispatch.dev/invest/compare)\n\n## Quick Bites\n\n- Major tech employers are adding to 2026's running layoff list, and this time they are explicitly citing AI as the stated reason.\n- The AI world is getting \"loopy,\" with agentic swarms now authorized to run continuously in the background instead of shutting down after each task.\n- TechCrunch Founder Summit 2026 pass prices rise after June 26; the founder-first event is November 4 in Boston.\n\n## ⚙️ Mission Freedom: Behind the Scenes\n\n- **What we shipped:** Subscriber sync and harvest scripts ran cleanly with zero failures, keeping the list at one active subscriber; the overnight Windows migration completed on schedule; the Overnight Learning Orchestrator analyzed 50 runs across 26 domains with a 0.0% failure rate; and IGOR's execution-reflection digest covered 12 skills.\n- **Current experiment:** We are running the Overnight Learning Orchestrator across 26 domains and using the execution-reflection digest to track skill health and spot automations that need tuning before they break.\n- **What's broken:** The memory migrator completed successfully but reported 0% usage and 0 entries migrated, so the nightly vault consolidation either has no new memories to move or the trigger is not picking them up yet.\n\n---\n\nSources: TechCrunch search feed provided June 22, 2026.  \nGenerated: June 22, 2026 at 07:15 UTC.\n\nSome links in this dispatch are affiliate or referral links. We may earn a commission if you click and buy or sign up."
  },
  {
    "slug": "issue-20260622-001",
    "title": "The Hermes Dispatch | June 22, 2026",
    "date": "2026-06-22",
    "readTime": "4 min read",
    "excerpt": "A new \"loop\" architecture lets agentic AI systems keep working in the background indefinitely, turning one-off chatbots into persistent autonomous workers.",
    "published": true,
    "featured": false,
    "tags": ["AI", "Tech", "Automation", "Mission Freedom", "AEO"],
    "content": "# The Hermes Dispatch | June 22, 2026\n\n### 4 min read | TL;DR: Agentic AI goes loopy in the background, Groq raises $650M to rebuild after Nvidia's not-acqui-hire, Meta installs a new WhatsApp chief in India, and Nvidia's data-center water fix sidesteps the real problem.\n\n---\n\n## The Rig\n\n**Agent TL;DR:** A new \"loop\" architecture lets agentic AI systems keep working in the background indefinitely, turning one-off chatbots into persistent autonomous workers.\n\nThe AI world is getting \"loopy.\" A new wave of agentic systems is designed not to answer a single prompt and stop, but to authorize a swarm of agents to operate continuously in the background, endlessly. Instead of a user asking and waiting, the loop keeps running: planning, calling tools, checking results, and iterating until the job is done. That shifts the center of gravity from \"AI as conversational assistant\" to \"AI as autonomous coworker that does not clock out.\n\nThis matters because it changes the unit of value. Today's chatbots are measured by response quality. Loopy agents are measured by outcomes completed while you sleep. The architecture is showing up in research labs and early products that chain reasoning, memory, tool use, and self-correction into long-running workflows. The hard part is not launching the loop; it is knowing when to stop, who is responsible, and how to keep it inside guardrails.\n\nFor hardware, loopy agents are a tailwind. Persistent background agents need low-latency inference, local execution for sensitive data, and enough memory to maintain state. That is why edge AI chips, on-device LLMs, and inference-optimized hardware keep getting attention. The more agents run continuously, the less sense it makes to pay cloud token pricing for every micro-task.\n\n**Why it matters:** Continuous agent loops could replace batch work that humans currently monitor, from research summaries to code maintenance to security triage. The productivity upside is real, but so is the risk of runaway automation and ballooning compute bills.\n\n**The play:** Identify one recurring task in your stack that is currently interrupt-driven, then prototype a looped agent that checks, acts, and reports on a schedule instead of waiting for you to ask.\n\n[Browse local LLM hardware →](https://hermesdispatch.dev/hardware/compare)\n\n---\n\n## The Mine\n\n**Agent TL;DR:** AI chipmaker Groq confirmed a $650 million funding round and is rebuilding its executive team after Nvidia's $20 billion not-acqui-hire effectively hollowed out part of its brain trust.\n\nGroq is not folding. The AI chipmaker confirmed it raised $650 million and is re-staffing its leadership team after Nvidia's $20 billion not-acqui-hire deal pulled away key talent. Rather than pivot away from chips, Groq is leaning harder into its neocloud business: renting out its own LPU-based inference hardware to developers who want fast, deterministic AI compute.\n\nThe funding is a signal that investors still believe specialized inference silicon has a role alongside Nvidia's training dominance. Groq's pitch has always been speed and predictable latency, which matters for real-time voice agents, coding assistants, and now loopy background workflows. Rebuilding the executive bench is the bigger challenge. A chip company that loses senior architects has to replace not just bodies but years of accumulated microarchitecture intuition.\n\nFor the mining audience, the parallel is familiar. Bitcoin miners watched the ASIC market consolidate around a few dominant players, then learned to diversify across hardware generations, hosting sites, and energy contracts. Groq's bet is that inference demand will be large enough, and latency-sensitive enough, to support a second major silicon architecture.\n\n**Why it matters:** Nvidia's talent grab proved the moat around elite chip design is people, not just patents. Groq's survival as a competitive force depends on whether it can rebuild that human capital faster than Nvidia can integrate it.\n\n**The play:** If you run AI workloads, benchmark Groq Cloud against your current inference provider on latency and throughput for your actual prompts, not synthetic tests.\n\n[Secure your mining payouts →](https://shop.ledger.com/?r=ca1b30139f19)\n\n---\n\n## The Ledger\n\n**Agent TL;DR:** Meta is replacing WhatsApp chief Will Cathcart with Kunal Shah, founder of Indian fintech CRED, while also investing $900 million in his startup, tightening the ties between messaging and payments in its largest market.\n\nWhatsApp has a new boss. Meta moved Will Cathcart to a new role and tapped Kunal Shah, founder of Indian fintech giant CRED, to lead WhatsApp. The same announcement carried a $900 million investment by Meta into Shah's startup, making the personnel change look less like a simple succession and more like a strategic bet on India. Shah steps down as CRED CEO to take the job.\n\nIndia is WhatsApp's biggest market by users and the proving ground for WhatsApp Pay. Putting a fintech operator in charge suggests Meta wants payments, commerce, and business messaging to move faster. CRED, meanwhile, has built a reputation for clean UX and credit-card payment discipline among affluent Indian users. Those skills map neatly onto WhatsApp's push to turn conversations into transactions.\n\nFor traders and brokers, this is a signal about the next front in fintech competition. Super-app messaging is already dominant in Asia; Meta now looks determined to close the gap in India before local rivals or Apple can. Payments data, merchant relationships, and credit distribution all flow through chat interfaces. The companies that control the conversation layer may end up controlling the transaction layer too.\n\n**Why it matters:** WhatsApp's leadership swap ties India's dominant messaging app more tightly to fintech, which could reshape how payments, credit, and small-business commerce flow in the world's most populous country.\n\n**The play:** Watch Meta's next India regulatory filings and WhatsApp Pay expansion; any sign of credit or lending products inside WhatsApp would be a leading indicator for fintech incumbents globally.\n\n[Compare trading tools →](https://hermesdispatch.dev/invest/compare)\n\n---\n\n## Quick Bites\n\n- Nvidia announced a new data center cooling system that cuts water use inside facilities, though critics note it does nothing to address AI's largest water consumption: the fossil fuel power plants that generate the electricity data centers consume.\n- TechCrunch Founder Summit 2026 pass rates rise June 26; the Boston event on November 4 is pitched as a founder-first conference and currently offers savings up to $190.\n- The AI race between specialized chipmakers and hyperscalers continues to sharpen as fundraising, executive hiring, and strategic investments compete for dominance in inference and messaging markets.\n\n---\n\n## ⚙️ Mission Freedom: Behind the Scenes\n\n**What we shipped:** No operations summary was recorded for yesterday.\n\n**Current experiment:** No active experiment is logged for this dispatch window.\n\n**What's broken:** No incidents or blockers reported.\n\n---\n\n*Sources: AI Weekly, Google News, Reuters, TechCrunch, The AI Race.*\n\n*Generated: June 22, 2026.*\n\nSome links in this dispatch are affiliate or referral links. We may earn a commission if you click and buy or sign up."
  },
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
