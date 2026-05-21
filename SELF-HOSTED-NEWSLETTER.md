# Self-Hosted Newsletter Setup Guide

**Status:** Built and ready for deployment  
**Location:** `/home/derek/hermesmissionfreedom.ai/dist/`  
**Package:** `dist-self-hosted.zip` (35.0 KB)

---

## What's Built

### 1. Newsletter Content System
- **Data:** `src/data/newsletters.ts` — newsletter archive with Markdown content
- **Issue #1:** Welcome to The Hermes Dispatch (published)
- **Issue #2:** IGOR Absorbs the Librarian (draft)

### 2. Pages
| Route | Content |
|-------|---------|
| `/newsletter/` | Newsletter landing with subscribe form + archive |
| `/newsletter/{slug}/` | Individual issue pages (static generation) |
| `/api/subscribe` | Email subscription endpoint (API route) |

### 3. Subscription System
- **Current:** In-memory storage (API route in server mode)
- **Production:** Will need AWS SES integration for actual email delivery
- **Next:** Add JSON file persistence or database

---

## Deployment Options

### Option A: Cloudflare Pages (Current Pattern)
Good for static hosting, but API routes need server functions.

```bash
# Deploy ZIP to Cloudflare Pages
cp dist-self-hosted.zip /mnt/c/Users/$USER/Desktop/
# Upload via dashboard → Functions for API routes
```

**Note:** `/api/subscribe` won't work as static. Options:
1. Use Cloudflare Pages Functions (serverless)
2. Hybrid: Static site + separate API server
3. Full server hosting (VPS, AWS, etc.)

### Option B: Self-Hosted VPS
Full control, works with API routes.

```bash
# On server
npm install
npm run build
npm start  # or pm2
```

### Option C: Static-Only (No API)
Use external service for subscriptions:
- Formspree
- Basin
- Custom webhook elsewhere

Simply change the form action in `newsletter/index.astro`.

---

## Next Steps for Production

### 1. Email Delivery (AWS SES)
```typescript
// Add to api/subscribe.ts
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: 'us-west-2' });

await ses.send(new SendEmailCommand({
  Source: 'newsletter@hermesmissionfreedom.ai',
  Destination: { ToAddresses: [email] },
  Message: {
    Subject: { Data: 'Welcome to The Hermes Dispatch' },
    Body: { Text: { Data: welcomeTemplate } }
  }
}));
```

### 2. Subscriber Persistence
- SQLite database (simple, file-based)
- JSON file (works on static hosts with functions)
- Proper database (PostgreSQL, etc.)

### 3. Sending Newsletters
Create admin endpoint or CLI:
```bash
# Send newsletter to all subscribers
npm run newsletter:send -- --issue=welcome-to-hermes-dispatch
```

---

## Current File Locations

```
src/
├── data/
│   └── newsletters.ts          # Newsletter archive data
├── pages/
│   ├── newsletter/
│   │   ├── index.astro        # Landing + subscribe form
│   │   └── [slug].astro       # Individual issue template
│   └── api/
│       └── subscribe.ts       # Subscription endpoint
└── layouts/
    └── Layout.astro           # Base layout
```

---

## Deployment Package

**File:** `dist-self-hosted.zip` (35.0 KB)  
**Ready for:** Cloudflare Pages, Vercel, Netlify, VPS, etc.

**Build command:**
```bash
cd /home/derek/hermesmissionfreedom.ai
npm run build
# Creates dist/ folder
```

---

*Built: May 15, 2026 • Self-hosted newsletter for Mission Freedom*