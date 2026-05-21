══════════════════════════════════════════════════════════════════
        CLOUDFLARE PAGES DEPLOYMENT GUIDE
        The Hermes Dispatch - Newsletter Website
══════════════════════════════════════════════════════════════════

## STEP 1: CREATE CLOUDFLARE ACCOUNT

1. Go to: https://dash.cloudflare.com/sign-up
2. Enter email + password
3. Verify email (check inbox)
4. Choose "Free" plan when prompted

══════════════════════════════════════════════════════════════════

## STEP 2: CREATE NEW PAGES PROJECT

1. In Cloudflare Dashboard, click "Pages" in left sidebar
2. Click "Create a project"
3. Choose "Upload assets" (not Git)
4. Project name: "hermesdispatch" (or your choice)
5. Click "Create project"

══════════════════════════════════════════════════════════════════

## STEP 3: UPLOAD YOUR WEBSITE

Option A - Drag & Drop:
1. Open file manager on Windows
2. Navigate to: \\wsl$\Ubuntu\home\derek\hermesmissionfreedom.ai\dist\
3. Select all files in dist/ folder
4. Drag to Cloudflare upload area in browser

Option B - Upload the archive:
1. In Cloudflare dashboard, click "Upload"
2. Select: /home/derek/hermesmissionfreedom.ai/dist-deploy.tar.gz
3. Extract/upload the contents

══════════════════════════════════════════════════════════════════

## STEP 4: VERIFY DEPLOYMENT

1. Cloudflare will show you a preview URL:
   https://hermesdispatch.pages.dev (or your custom name)

2. Click the URL to verify all pages work:
   ✓ Home page loads
   ✓ Archive page shows launch newsletter
   ✓ Team page shows agents
   ✓ Timeline shows milestones
   ✓ Skills page loads

══════════════════════════════════════════════════════════════════

## STEP 5: ADD CUSTOM DOMAIN (Optional)

If you want hermesmissionfreedom.ai instead of .pages.dev:

1. In Pages project, go to "Custom domains" tab
2. Click "Set up a custom domain"
3. Enter: hermesmissionfreedom.ai
4. Follow Cloudflare's DNS instructions
5. Wait for SSL certificate (usually <5 minutes)

══════════════════════════════════════════════════════════════════

## FILES READY FOR UPLOAD

Location: /home/derek/hermesmissionfreedom.ai/dist/
Package: /home/derek/hermesmissionfreedom.ai/dist-deploy.tar.gz

Contents:
├── index.html          (13KB - landing page)
├── favicon.ico
├── favicon.svg
├── _astro/             (bundled CSS/JS assets)
├── archive/            (newsletter archive page)
├── skills/             (skills directory page)
├── team/               (agent showcase page)
└── timeline/           (mission timeline page)

══════════════════════════════════════════════════════════════════

## POST-DEPLOYMENT

Once deployed, test these:
- [ ] Homepage loads with "The Hermes Dispatch" title
- [ ] Email signup form works (submits to Buttondown)
- [ ] Navigation links work: Home → Archive → Team → Timeline → Skills
- [ ] Mobile responsive (check on phone or resize browser)

══════════════════════════════════════════════════════════════════

## UPDATING THE SITE LATER

When you make changes:
1. Rebuild: npm run build
2. Re-upload dist/ folder to Cloudflare
3. Changes live in ~30 seconds

══════════════════════════════════════════════════════════════════
