# HermesDispatch Tool Pruning Rationale — 2026-07-26

## Principle
Keep only tools directly relevant to the three newsletter topics:
- **The Rig** — AI hardware, local LLMs, GPU/mini-PC efficiency
- **The Mine** — crypto/mining, inference-yield, hardware pivoting
- **The Ledger** — cost/pricing intelligence for AI builders

## Removed: 103 tools → kept 18

### Removed categories
1. Generic SaaS/business finance (CAC, gross margin, runway, build-vs-buy, vs-hire)
2. Customer-support/outage/SLA cost calculators
3. Newsletter business calculators (HermesDispatch is the newsletter, not a newsletter SaaS)
4. Creative/media generation (image, video, translation)
5. Ecommerce, account setup, compliance tangents
6. Overlapping agent-cost micro-calculators
7. Security scanners, audit tools, RAG/vector DB dev tools (not newsletter topics)
8. Form pages (request)
9. Reference/cheat-sheet pages with no affiliate or transaction path
10. API pricing / pure cost calculators with no clear affiliate CTA

### Kept 18 tools (newsletter topics + affiliate path)
- **The Rig (AI hardware / local LLM)** — local-llm-roi-calculator, gpu-cloud-vs-buy-calculator, mini-pc-recommender, gpu-power-cooling-sizer, vram-calculator, tokens-per-watt-calculator, hashrate-to-inference-converter, hardware-resale-estimator, ai-hardware-deal-tracker, agent-hardware-sizer
- **The Mine (crypto / mining)** — crypto-staking-vs-inference-yield, crypto-tax-loss-harvester, miner-pivot-calculator
- **The Ledger (AI builder cost decisions)** — agent-hosting-cost-comparator, inference-engine-selector, open-source-llm-selector, quantization-advisor, no-code-agent-builder-selector

### Affiliate fit
Each remaining tool can naturally link to:
- GPUs, mini-PCs, and AI hardware (Amazon Associates)
- Crypto hardware wallets / exchanges (Ledger, exchange referral programs)
- Cloud GPU / hosting providers (referral/affiliate programs)
- No-code agent platforms and open-source LLM services

## Next step
After 30 days of Cloudflare KV usage data, review bottom-used tools and either improve CTAs or archive them.
