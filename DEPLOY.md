# Deployment Instructions for Mission Freedom Website

## Option 1: GitHub Actions (Recommended)

### Setup:
1. Go to https://github.com/settings/tokens
   - Create a Personal Access Token with `repo` scope
   - Save it as `GITHUB_TOKEN`

2. Go to https://dash.cloudflare.com/profile/api-tokens
   - Create token with these permissions:
     - `Cloudflare Pages:Edit`
     - `Zone:Read`
     - `Account:Read`
   - Save token as `CLOUDFLARE_API_TOKEN`

3. In your GitHub repo:
   - Settings → Secrets and variables → Actions
   - Add: `CLOUDFLARE_API_TOKEN`
   - Add: `CLOUDFLARE_ACCOUNT_ID` (find in Cloudflare sidebar)

4. Push code to GitHub, deployment happens automatically

## Option 2: Manual Wrangler Deploy

```bash
export CLOUDFLARE_API_TOKEN="your-token-here"
cd /mnt/c/Users/derek/hermesmissionfreedom.ai
npx wrangler pages deploy dist --project-name=hermesmissionfreedom --branch=main
```

## Option 3: Cloudflare Dashboard (Simplest)

1. Go to https://dash.cloudflare.com/
2. Navigate to Pages → hermesmissionfreedom
3. Click "Create deployment"
4. Upload the `/mnt/c/Users/derek/hermesmissionfreedom.ai/dist/` folder

## Post-Deployment Checklist

- [ ] Verify site loads at https://hermesmissionfreedom.ai
- [ ] Test all pages (/agents, /skills, /about, /newsletter)
- [ ] Check newsletter subscription form works
- [ ] Verify SEO meta tags in page source
- [ ] Test mobile responsiveness

## Build Status

**Last Build**: 2026-05-18 23:01:41
**Status**: ✅ Success
**Output**: 7 pages, 220KB total
**Location**: `/mnt/c/Users/derek/hermesmissionfreedom.ai/dist/`
