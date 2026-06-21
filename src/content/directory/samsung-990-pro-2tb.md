---
name: "Samsung 990 Pro 2TB"
name_full: "Samsung 990 Pro 2TB NVMe Gen4 SSD"
category: hardware-grid
subcategory: storage
price: 149
price_range: "120-180"
amazon_link: "https://www.amazon.com/dp/B0BHJF2DPN?tag=dare404-20"
affiliate_tags: ["storage", "ssd", "nvme", "2tb", "fast-load", "ollama-compatible"]
ihardware_tags: [nvme-gen4, 2tb-ssd, samsung]
featured: false
sponsored: false
source: "Based on manufacturer specs"
faq_schema:
  - question: "Does SSD speed matter for LLM inference?"
    answer: "For model loading, yes. For token generation, RAM/VRAM speed matters far more."
  - question: "Is 2TB enough?"
    answer: "For most users, yes. Heavy experimenters with 70B+ models may want 4TB."
  - question: "Can I use this in a mini PC?"
    answer: "Yes, if the mini PC has an M.2 2280 slot that supports NVMe."
review:
verdict: Fast NVMe storage that reduces model load times for local inference.

last_verified: 2026-06-21
---
## Overview

Local LLMs load large model files from disk. A fast NVMe SSD reduces model load time and improves context-switching when running multiple models. The Samsung 990 Pro is one of the fastest consumer Gen4 drives.

## Capacity Planning

| Model Size | Quantization | Approximate File Size |
|---|---|---|
| 3B | Q4_K_M | ~2GB |
| 7B | Q4_K_M | ~4.5GB |
| 13B | Q4_K_M | ~8.5GB |
| 70B | Q4_K_M | ~44GB |

A 2TB drive comfortably holds dozens of smaller models or several large ones.

## What Makes It Interesting

- Very fast sequential and random reads
- Reliable NAND with good endurance rating
- Drop-in upgrade for most modern desktops and mini PCs

## Limitations

- More expensive per GB than budget Gen4 drives
- Not as impactful as RAM or GPU for actual inference speed

## General Notes

**Good fit for:** Anyone running Ollama with many model files or switching between models frequently.
**Less ideal for:** Users who run only one small model at a time.

## FAQ

**Does SSD speed matter for LLM inference?**
For model loading, yes. For token generation, RAM/VRAM speed matters far more.

**Is 2TB enough?**
For most users, yes. Heavy experimenters with 70B+ models may want 4TB.

**Can I use this in a mini PC?**
Yes, if the mini PC has an M.2 2280 slot that supports NVMe.
