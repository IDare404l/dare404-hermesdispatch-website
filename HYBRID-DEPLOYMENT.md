# Hybrid Deployment Strategy

**Status:** ✅ Configured  
**Approach:** B) Hybrid — Main site on Cloudflare, Newsletter on Vercel

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLOUDFLARE PAGES                     │
│                    hermesmissionfreedom.ai                  │
├─────────────────────────────────────────────────────────────┤
│  Static content:                                            │
│  ├── / (homepage)                                            │
│  ├── /newsletter/  ← DISPLAY ONLY (links to archive)        │
│  ├── /skills/                                                │
│  ├── /team/                                                │
│  ├── /timeline/                                            │
│  └── /archive/                                               │
└─────────────────────────────────────────────────────────────┘
                               │
                               │ Subscribe form
                               │ POST → API_URL
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                          VERCEL                             │
│              newsletter-hermes.vercel.app                   │
├─────────────────────────────────────────────────────────────┤
│  API + Static:                                               │
│  ├── /api/subscribe  ← Handles email subscriptions            │
│  │   • Stores subscriber data                              │
│  │   • Integrates with AWS SES (email sending)             │
│  │   • Returns success/error responses                      │
│  │                                                          │
│  ├── /newsletter/  ← Full newsletter portal                 │
│  │   • Landing page with working subscribe form              │
│  │   • Archive of all issues                                │
│  │   ├── /welcome-to-hermes-dispatch                       │
│  │   └── /igor-absorbs-librarian                           │
│  │                                                          │
│  └── (Optional) Full site mirror                            │
└─────────────────────────────────────────────────────────────┘
```

---

## Deployment Options

### Option 1: **Minimal** (Recommended)
**Cloudflare:** Keep existing static site  
**Vercel:** Deploy ONLY `/api/subscribe` as a serverless function

```
Cloudflare: hermesmissionfreedom.ai/newsletter/ (static display)
Vercel:     newsletter-vercel.vercel.app/api/subscribe
```

Pros:
- Clean URL on main site
- API handled separately
- No cross-domain CORS issues (form can use fetch)

---

### Option 2: **Full Newsletter Portal on Vercel**
**Cloudflare:** Main site (team, skills, home)  
**Vercel:** Complete `/newsletter/*` path + API

```
Cloudflare: hermesmissionfreedom.ai/ (everything except newsletter)
Vercel:     newsletter-vercel.vercel.app/newsletter/* (full portal)
```

Pros:
- Working subscribe forms everywhere
- SEO benefits on newsletter subdomain
- Clean separation of concerns

---

### Option 3: **Everything on Vercel**
Move entire site from Cloudflare → Vercel

Pros:
- Single platform
- API routes work everywhere
- Edge functions

Cons:
- Changes existing workflow
- Need to migrate domain settings

---

## Current Configuration

**In `src/pages/newsletter/index.astro`:**
```javascript
const API_URL = 'https://newsletter-hermes.vercel.app/api/subscribe';
```

**Update this** when you know your actual Vercel deployment URL.

---

## Deployment Steps

### 1. Deploy Newsletter to Vercel

```bash
cd /home/derek/hermesmissionfreedom.ai

# Option A: Full site to Vercel
npx vercel --prod

# Option B: Only specific directory (use vercel.json or CLI flags)
# (Requires separate vercel.json config)
```

**You will get:** `https://your-project.vercel.app`

---

### 2. Update API URL

Edit `src/pages/newsletter/index.astro`:
```javascript
const API_URL = 'https://your-project.vercel.app/api/subscribe';
```

---

### 3. Rebuild & Deploy Main Site

```bash
npm run build
# Upload dist/cloudflare.zip to Cloudflare Pages
```

---

## Subscriber Data Storage

**Current (dev):** In-memory Map()  
**Production options:**

1. **Vercel KV** — Redis-based, edge-distributed, ~$0.25/GB
2. **Cloudflare Workers KV** — Free tier, same infra
3. **Neon/Supabase** — Serverless Postgres
4. **SQLite** — File-based (Vercel limitation: ephemeral, loses on redeploy)

For newsletter subscribers, **Vercel KV** is simplest.

---

## Cost Estimate

| Component | Option | Estimated Monthly |
|-----------|--------|-------------------|
| Cloudflare Pages | Free tier | $0 |
| Vercel | Hobby (free) | $0 |
| Vercel KV | Up to 1GB stored | $0.25 |
| AWS SES | 1K emails/month | $0 (62K free tier) |
| **Total** | | **$0.25** |

---

## Files Created

```
├── deploy-newsletter-hybrid.sh     # Deployment script
├── vercel.json                     # Vercel routing config
├── dist-full-vercel.zip            # Full site package
└── docs/
    └── HYBRID-DEPLOYMENT.md        # This file
```

---

## Next Steps

1. ✅ **Configure complete** — Ready for deploy
2. ⏳ **Run `npx vercel --prod`** — Deploy newsletter
3. ⏳ **Update API_URL** — Point to Vercel deployment
4. ⏳ **Add KV storage** — Persist subscribers
5. ⏳ **AWS SES** — Send welcome emails

---

*Created: 2026-05-15*  
*Strategy: Hybrid Cloudflare + Vercel*
