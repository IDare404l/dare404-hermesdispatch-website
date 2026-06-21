---
name: "Geekom A8"
name_full: "Geekom A8 (AMD Ryzen 9 8945HS, 32GB DDR5, 2TB SSD)"
category: hardware-grid
subcategory: mini-pc
price: 899
price_range: "800-1000"
amazon_link: "https://www.amazon.com/s?k=Geekom+A8+Ryzen+9+8945HS&ref=nb_sb_noss&tag=dare404-20"
affiliate_tags: ["mini-pc", "ollama-compatible", "high-end", "amd", "ryzen-9", "local-inference"]
ihardware_tags: [ryzen-9-8945hs, 32gb-ram, 2tb-ssd, rdna3-igpu]
ollama_score: 52
tokens_per_second: 52
benchmark_model: "llama3.2 3B Q4_K_M"
featured: false
sponsored: false
source: "Based on community benchmarks"
image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80"
brand: Geekom
---
## Overview

The Geekom A8 is a higher-end AMD mini PC built around the Ryzen 9 8945HS with Radeon 780M integrated graphics. It ships with 32GB DDR5 and a 2TB SSD, making it a strong step up from entry-level mini PCs for local LLM inference.

## Benchmarks (Community Reports)

| Model | Quantization | Tokens/sec | Notes |
|---|---|---|---|
| llama3.2 3B | Q4_K_M | ~52 | Very smooth |
| qwen2.5 7B | Q4_K_M | ~22 | Good for coding agents |
| phi3 3.8B | Q4_K_M | ~34 | Strong instruction following |

## What Makes It Interesting

- Higher CPU clock than Ryzen 7 7840HS models
- 2TB SSD out of the box — plenty of room for model weights
- RDNA 3 iGPU accelerates Ollama via ROCm path

## Limitations

- Premium price vs. SER7-class machines
- 32GB may still need upgrade for 13B+ models

## General Notes

**Good fit for:** Power users running multiple local models, coding agents, heavier summarization.
**Less ideal for:** Budget-first builds or users who only run small models.

## FAQ

**Is Geekom A8 better than Beelink SER7?**
Yes for raw performance, but it costs ~40% more. Choose SER7 for value, A8 for headroom.

**Can it run 13B models?**
With 32GB it will run, but slowly. Upgrading to 64GB RAM is recommended for 13B+ models.

**Does it need a dedicated GPU?**
No. The integrated Radeon 780M handles inference acceleration for most small-to-medium models.
