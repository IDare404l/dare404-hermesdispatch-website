# Hermes Mission Freedom Website

Self-hosted website for The Hermes Dispatch newsletter.

## Structure

```
hermes-mission-freedom-website/
├── src/
│   ├── pages/          # All page routes
│   ├── layouts/        # Base layout
│   ├── components/     # Reusable components
│   ├── content/        # Skills, tools, blog data
│   └── styles/         # Global CSS
├── scripts/            # Automation scripts
├── config/             # Config files
└── public/             # Static assets
```

## Local Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Self-Hosting

### Option 1: Local + Cloudflare Tunnel (Recommended)

1. Install site:
```bash
npm run build
```

2. Serve locally:
```bash
npx serve dist -p 3000
```

3. Tunnel via Cloudflare:
```bash
cloudflared tunnel --url http://localhost:3000
```

Then point A record `hermesmissionfreedom.ai` to the tunnel.

### Option 2: Local Only (No External Access)

```bash
npm run dev
# Access at http://localhost:4321
```

## Newsletter Automation

The `scripts/buttondown_api.py` creates drafts for manual review.

Set API key:
```bash
export BUTTONDOWN_API_KEY="your-key-here"
```

Create draft:
```bash
python3 scripts/buttondown_api.py
```

## Security

- Static site (no database, no server-side code)
- CSP headers configured
- No analytics or tracking by default
- HTTPS via Cloudflare

## Contributing

Submit skills or corrections via GitHub issues.
# Deploy Test Tue May 19 22:13:32 MDT 2026
