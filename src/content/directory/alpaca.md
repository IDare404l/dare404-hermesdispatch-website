---
name: "Alpaca"
category: data-stack
subcategory: broker
price: 0
price_range: "Free"
referral_link: "https://alpaca.markets/"
tags:
- brokerage
- api
- trading-bot
- commission-free
- python
- paper-trading
why_use: "The only commission-free brokerage with a real API. Build bots that execute real trades without paying $6.95 per trade."
whats_new: "Just added Options API beta. Build multi-leg strategies programmatically."
stack_position: "Execution layer — takes signals from TradingView and executes trades"
commission_note: "Alpaca does not have a self-serve affiliate program. Contact partners@alpaca.markets for referral opportunities."
source: "Based on official documentation and community use"
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
faq_schema:
  - question: "Is Alpaca trading good for algorithmic agents?"
    answer: "Alpaca offers commission-free API trading, making it popular for automated strategies and agent-based trading experiments in the U.S."
review:
  rating: "4.5"
  review_count: "1"
  author: "The Hermes Dispatch"
  publisher: "The Hermes Dispatch"
  review_body: "Community-researched tool entry for agent-citable comparison."
---

## What It Is

A commission-free brokerage built for developers. No per-trade fees. No minimum balance. API-first.

**Key Features:**
- **Paper trading** — Test strategies with fake money before going live
- **Real-time data** — WebSocket streaming for live quotes
- **Python SDK** — pip install and go
- **Fractional shares** — Buy $1 of Apple, not whole shares
- **Business accounts** — Perfect for trading entities

## How We Use It

Every bot we build runs through Alpaca:

```
TradingView alert → Webhook → Python bot → Alpaca order
                              ↓
                        MongoDB log → P/L tracker
```

**Paper → Live transition:** One config flag changes everything. No code rewrite.

## Referral Information

Alpaca's partner program is **not self-serve** (unlike TradingView). Here's how it works:

| Program | Type | Availability |
|---------|------|--------------|
| **Broker API** | White-label brokerage | Contact sales |
| **Enablement Partners** | Tech integrators | Contact partners@alpaca.markets |
| **Referral Rewards** | Individual referrals | Invite-only |

**Typical commission:** $10-50 per funded account (industry standard for brokerage referrals)

**How to apply:**
1. Create an Alpaca account at `https://alpaca.markets/`
2. Join their Slack community (`community → Slack`)
3. Ask in `#partnerships` channel about referral opportunities
4. Or email `partners@alpaca.markets`
5. Mention your website (hermesdispatch.dev) and audience size

## Why You Should Too

- $0 commissions (yes, really)
- Real API (not screen scraping)
- Instant approval for most accounts
- Business entity support

## CTA

[Get Alpaca API access →](https://alpaca.markets/)
<br><small>Commission-free. When you sign up, we may earn.</small>
