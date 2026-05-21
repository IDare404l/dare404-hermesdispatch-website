# The Hermes Dispatch - Newsletter Website

**Domain:** hermesmissionfreedom.ai
**Platform:** Astro + Tailwind CSS
**Hosting:** Self-hosted with Cloudflare Tunnel
**Newsletter:** Buttondown

---

## Quick Start

```bash
cd ~/hermesmissionfreedom.ai
npm install
npm run dev
# Open http://localhost:4321
```

---

## Local Development

### Start Dev Server
```bash
npm run dev
```
Site available at `http://localhost:4321`

### Build for Production
```bash
npm run build
```
Output in `/dist` folder

### Preview Production Build
```bash
npm run build
npx serve dist -p 3000
```

---

## Cloudflare Tunnel (Free External Access)

### One-Time Setup
```bash
# Install cloudflared
sudo apt install cloudflared

# Or download directly
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
sudo mv cloudflared-linux-amd64 /usr/local/bin/cloudflared
sudo chmod +x /usr/local/bin/cloudflared
```

### Start Tunnel
```bash
# Terminal 1: Start website
npm run serve

# Terminal 2: Create tunnel
cloudflared tunnel --url http://localhost:3000
```

You'll get a URL like `https://something.trycloudflare.com`

### Connect Custom Domain (Phase 2)
1. Once you register hermesmissionfreedom.ai
2. Point A record to Cloudflare Tunnel
3. See: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/

---

## Project Structure

```
hermesmissionfreedom.ai/
├── astro.config.mjs          # Site config
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Base layout (dark theme)
│   ├── pages/
│   │   ├── index.astro       # Newsletter landing page
│   │   └── archive.astro       # Past issues (WIP)
│   └── styles/
│       └── global.css        # Tailwind + custom styles
├── dist/                      # Build output
└── README.md                  # This file
```

---

## Buttondown Integration

### Newsletter Signup Form
The landing page uses Buttondown's embed subscribe form:
- Action: `https://buttondown.email/api/emails/embed-subscribe/hermesdispatch`
- Opens popup window to Buttondown
- No backend required

### Managing Newsletter
- **Dashboard:** https://buttondown.email/hermesdispatch
- **API Key:** Stored in `~/.hermes/config/secrets/buttondown.api`
- **Drafts:** Created via API, reviewed in Obsidian
- **Send:** Manual approval required

---

## Sync with Obsidian

Published newsletters are archived in:
```
/mnt/c/Users/derek/OneDrive/Documents/HERMES/03-Documents/✅ Published/
```

Future enhancement: Auto-sync archive page from published newsletters.

---

## Deployment Checklist

### Phase 1 - Test Locally
- [ ] Build successful (`npm run build`)
- [ ] No console errors in browser
- [ ] Newsletter signup form works
- [ ] Mobile responsive (check phone)
- [ ] Cloudflare tunnel works

### Phase 2 - Live Domain
- [ ] Register hermesmissionfreedom.ai
- [ ] Point DNS to Cloudflare
- [ ] Configure Cloudflare Tunnel
- [ ] HTTPS enabled
- [ ] Test production build on live domain

---

## Styling

**Colors:**
- Background: `#0f172a` (slate-950)
- Cards: `#1e293b` (slate-800)
- Text: `#f1f5f9` (slate-100)
- Muted: `#94a3b8` (slate-400)
- Primary: `#3b82f6` (blue-500)
- Secondary: `#8b5cf6` (purple-500)

**Typography:**
- System font stack via Tailwind
- Responsive sizing

---

## Contact

**Email:** derekkosakura@gmail.com
**Twitter:** @Dare__404
**Newsletter:** The Hermes Dispatch

---

*Built with Astro. Hosted anywhere. Controlled by you.*
