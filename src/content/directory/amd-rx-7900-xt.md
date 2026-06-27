---
name: AMD RX 7900 XT
category: ai-hardware
subcategory: gpu
image: https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80
name_full: AMD Radeon RX 7900 XT 20GB
price: $899
source: https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7900-xt.html
referral_link: ''
why_use: 20GB of VRAM under $1,000, making it a strong budget alternative to NVIDIA
  for local LLM inference.
affiliate_tags:
- ai-hardware
- gpu
- llm
verdict: Best budget 20GB GPU for VRAM-hungry local models when CUDA lock-in is not
  required.
last_verified: '2026-06-21'
applicationCategory: Hardware
operatingSystem: ''
softwareVersion: ''
faq_schema:
  mainEntity:
  - question: How much VRAM does the RX 7900 XT have?
    answer: The RX 7900 XT has 20GB of GDDR6 VRAM.
  - question: Is ROCm good enough for LLMs?
    answer: ROCm support is improving for llama.cpp and PyTorch but still behind CUDA
      for some tools. Check model compatibility before buying.
  - question: Should I get the XT or XTX?
    answer: The XTX has 24GB and more compute, but the XT offers most of the VRAM
      at a lower price.
review:
  author: The Hermes Dispatch
  publisher: The Hermes Dispatch
  rating: '4.3'
  review_count: '1'
  review_body: Excellent VRAM per dollar. ROCm compatibility requires more setup than
    CUDA, but the savings are meaningful.
schema_type: Product
ollama_score: 55.0
---



## Overview

The RX 7900 XT sits between the XTX and NVIDIA's 16GB options. Its 20GB VRAM is enough for 13B models at high context and 70B models with very aggressive quantization.

## Specs

| Spec | Value |
|---|---|
| VRAM | 20GB GDDR6 |
| Stream processors | 5,376 |
| TDP | 300W |
| Launch price | $899 |

## When to choose

- You want 20GB VRAM under $1,000
- You are comfortable with ROCm/AMD tooling
- You prioritize VRAM over ecosystem maturity
