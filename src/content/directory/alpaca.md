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

## Why You Should Too

- $0 commissions (yes, really)
- Real API (not screen scraping)
- Instant approval for most accounts
- Business entity support

## CTA

[Get Alpaca API access →](https://alpaca.markets/)
<br><small>Commission-free. When you sign up, we may earn.</small>
