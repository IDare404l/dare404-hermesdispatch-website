#!/usr/bin/env python3
"""
Local LLM Tokens-per-Watt Efficiency Calculator
Hermes Agent-compatible script.
Compare GPU/mini-PC efficiency for local LLM inference.
"""
import argparse
from dataclasses import dataclass


@dataclass
class Hardware:
    name: str
    tdp_w: int
    tok_s_8b: float
    tok_s_70b_q4: float
    price_usd: float
    note: str = ""


HARDWARE_DB = [
    Hardware("RTX 4090", 450, 140, 28, 1600, "Fastest consumer local inference"),
    Hardware("RTX 3090", 350, 110, 22, 900, "High VRAM budget option"),
    Hardware("RTX 4080 Super", 320, 120, 24, 1000, "Efficient high-end"),
    Hardware("RTX 4070 Ti Super", 285, 95, 19, 800, "Strong price/performance"),
    Hardware("Mac Mini M4 Pro 24GB", 65, 75, 14, 1600, "Quiet, low power, unified memory"),
    Hardware("Mac Studio M2 Ultra 192GB", 185, 130, 30, 4500, "Workstation-grade unified memory"),
    Hardware("RX 7900 XTX", 355, 100, 18, 900, "ROCm / Linux native"),
]


def compute(h: Hardware, model: str, rate_usd_per_kwh: float, monthly_m_tokens: float, amortize_years: float):
    tok_s = h.tok_s_8b if model == "8b" else h.tok_s_70b_q4
    seconds_per_hour = 3600
    kw = h.tdp_w / 1000.0
    tokens_per_kwh = tok_s * seconds_per_hour / kw if kw else 0.0
    kwh_per_m = 1_000_000 / tokens_per_kwh if tokens_per_kwh else float('inf')
    power_cost_per_m = kwh_per_m * rate_usd_per_kwh
    months = amortize_years * 12
    hardware_cost_per_m = h.price_usd / (monthly_m_tokens * months)
    total_per_m = power_cost_per_m + hardware_cost_per_m
    return {
        "name": h.name,
        "tdp_w": h.tdp_w,
        "tok_s": tok_s,
        "tokens_per_kwh": tokens_per_kwh,
        "power_cost_per_m": power_cost_per_m,
        "hardware_cost_per_m": hardware_cost_per_m,
        "total_cost_per_m": total_per_m,
        "note": h.note,
    }


def main():
    parser = argparse.ArgumentParser(description="Local LLM tokens-per-watt calculator")
    parser.add_argument("--model", choices=["8b", "70b_q4"], default="70b_q4")
    parser.add_argument("--rate", type=float, default=0.13, help="Electricity cost USD/kWh")
    parser.add_argument("--monthly-m", type=float, default=10, help="Tokens per month in millions")
    parser.add_argument("--years", type=float, default=3, help="Hardware amortization years")
    parser.add_argument("--json", action="store_true", help="Output JSON")
    args = parser.parse_args()

    results = [compute(h, args.model, args.rate, args.monthly_m, args.years) for h in HARDWARE_DB]
    results.sort(key=lambda r: r["total_cost_per_m"])

    if args.json:
        import json
        print(json.dumps(results, indent=2))
        return

    print(f"Model: {args.model} | rate=${args.rate}/kWh | {args.monthly_m}M tokens/month | amortized {args.years} years")
    print(f"{'Hardware':<30} {'TDP':>6} {'tok/s':>8} {'tok/kWh':>12} {'power/M':>10} {'total/M':>10}  Note")
    for r in results:
        print(f"{r['name']:<30} {r['tdp_w']:>6} {r['tok_s']:>8} {r['tokens_per_kwh']:>12,.0f} ${r['power_cost_per_m']:>9.3f} ${r['total_cost_per_m']:>9.3f}  {r['note']}")


if __name__ == "__main__":
    main()
