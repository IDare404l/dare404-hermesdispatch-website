---
name: "TradingView"
category: data-stack
subcategory: charting
price: 0
price_range: "Free / Paid"
referral_link: "https://www.tradingview.com/partner-program/"
tags:
- charting
- analysis
- pinescript
- backtesting
- bot-building
- free-tier
why_use: "Prototype strategies visually before automating them. Feed your bot data from what you see on the chart."
whats_new: "AI-powered pattern recognition added to premium. Still the best free charting tool."
stack_position: "Visual layer — feeds into execution APIs"
---

## What It Is

The largest trading community + browser charting platform. 50M+ users. Free tier gets 3 indicators, 1 chart, limited alerts. Premium unlocks:

- **20+ indicators per chart** — full technical stack
- **Pine Script** — our strategy language; backtest → deploy
- **Strategy tester** — walk-forward before you wire real money
- **Alerts → Webhooks** — trigger bot trades from chart signals

## How We Use It

Every bot we write starts on TradingView:

1. **Visual strategy** — draw levels, mark structure
2. **Pine Script prototype** — 50 lines to test logic
3. **Backtest** — 2 years history, see if it works
4. **Webhook → Alpaca/IBKR** — automated execution

## Why You Should Too

Free tier is enough for 90% of retail traders. Premium is $14.95-179.95/mo — worth it when you're running live capital.

## The Stack Position

```
Strategy design → Backtesting → Optimization
        ↓
Pine Script export → Python wrapper → Broker API
        ↓
        Live execution
```

## CTA

[Try TradingView free →](https://www.tradingview.com/partner-program/)
<br><small>When you upgrade, we earn. Price to you is unchanged.</small>
