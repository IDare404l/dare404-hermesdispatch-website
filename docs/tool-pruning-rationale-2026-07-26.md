# HermesDispatch Tool Pruning Rationale — 2026-07-26

## Principle
Keep only tools directly relevant to the three newsletter topics:
- **The Rig** — AI hardware, local LLMs, GPU/mini-PC efficiency
- **The Mine** — crypto/mining, inference-yield, hardware pivoting
- **The Ledger** — cost/pricing intelligence for AI builders

## Removed: 89 tools → kept 32

### Removed categories
1. Generic SaaS/business finance (CAC, gross margin, runway, build-vs-buy, vs-hire)
2. Customer-support/outage/SLA cost calculators
3. Newsletter business calculators (HermesDispatch is the newsletter, not a newsletter SaaS)
4. Creative/media generation (image, video, translation)
5. Ecommerce, account setup, compliance tangents
6. Overlapping agent-cost micro-calculators
7. Security scanners, audit tools, RAG/vector DB dev tools (not newsletter topics)
8. Form pages (request)

### Kept 32 tools
- Local LLM / GPU / mini-PC: local-llm-roi-calculator, gpu-cloud-vs-buy-calculator, mini-pc-recommender, gpu-power-cooling-sizer, vram-calculator, tokens-per-watt-calculator, hashrate-to-inference-converter, hardware-resale-estimator, ai-hardware-deal-tracker
- Model selection / sizing: open-source-llm-selector, inference-engine-selector, quantization-advisor, context-window-budgeter, context-window-cheat-sheet
- Cost / pricing: llm-cost-calculator, llm-fine-tuning-cost-calculator, prompt-tokenizer-pricing-estimator, prompt-cache-savings-calculator, agent-api-pricing-comparator
- Agent infrastructure: agent-hardware-sizer, agent-hosting-cost-comparator, agent-concurrency-cost-calculator, agent-latency-budget-calculator, agent-llm-router-benchmarker, agent-observability-cost-calculator, agent-stack-builder, agent-system-prompt-generator, agent-toolkit
- Crypto / mining: crypto-staking-vs-inference-yield, crypto-tax-loss-harvester, miner-pivot-calculator
- Agent builders: no-code-agent-builder-selector

## Next step
After 30 days of Cloudflare KV usage data, review bottom-used tools and either improve or archive them.
