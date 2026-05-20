# GitHub Actions Auto-Deployment Setup

hermesdispatch.dev uses **Git-based auto-deployment** via Cloudflare Pages Git integration. The site automatically deploys when you push to `master`.

## Step 1: Create GitHub Repository

Go to https://github.com/new and create a new repository:
- **Name:** `hermesdispatch-website` (or your choice)
- **Visibility:** Public or Private
- **Do NOT initialize with README** (we have one locally)

## Step 2: Link Local Repository

```bash
cd /mnt/c/Users/derek/OneDrive/Documents/HERMES/hermes-mission-freedom-website
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hermesdispatch-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Get Cloudflare Credentials

### Get Account ID:
1. Go to https://dash.cloudflare.com
2. Look at the right sidebar - your Account ID is displayed there
3. Copy it (it's a hex string like `1a2b3c4d5e6f...`)

### Create API Token:
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use "Custom token" template
4. Settings:
   - **Token name:** `GitHub Actions Deploy`
   - **Permissions:**
     - `Cloudflare Pages` → `Edit`
     - `Account` → `Cloudflare Pages` → `Read`
   - **Account Resources:** Include your account
   - **Zone Resources:** All zones (or select your domain)
5. Click "Continue" then "Create Token"
6. **COPY THE TOKEN NOW** (you won't see it again)

## Step 4: Add Secrets to GitHub

1. Go to your GitHub repo → Settings → Secrets and Variables → Actions
2. Click "New repository secret"
3. Add these two secrets:

   | Name | Value |
   |------|-------|
   | `CLOUDFLARE_API_TOKEN` | Your copied API token |
   | `CLOUDFLARE_ACCOUNT_ID` | Your account ID |

## Step 5: Verify Project Exists in Cloudflare

1. Go to https://dash.cloudflare.com → Pages
2. Make sure a project named `hermesdispatch` exists
   - If not, create it with "Upload assets" option
   - You can use placeholder files, they'll be overwritten

## Step 6: Test Auto-Deployment

1. Make any change locally (e.g., edit README.md)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push
   ```
3. Go to GitHub → Actions tab
4. Watch the workflow run - should complete in ~2 minutes
5. Your site will be live at: `https://hermesdispatch.pages.dev`

## Troubleshooting

### Deployment fails with "project not found"
- Cloudflare Pages project name must be exactly `hermesdispatch` (as configured in .github/workflows/deploy.yml)
- Or edit the workflow: change `--project-name=hermesdispatch` to match your project

### "Unauthorized" error
- Verify API token has Cloudflare Pages Edit permission
- Verify account ID is correct (check Cloudflare dashboard right sidebar)

### Site works but agent network doesn't load
- Check that `public/agent-network/interactive-agent-map.html` exists in the repo
- The build step in the workflow should copy it to `dist/agent-network/`

## Domain Setup (Optional)

To use custom domain `hermesdispatch.dev`:
1. In Cloudflare Pages dashboard → your project → Custom domains
2. Add domain: `hermesdispatch.dev`
3. Follow DNS instructions
4. SSL certificate auto-issues in ~5 minutes

## Notes

- Deployments trigger on any push to `main` or `master`
- You can also trigger manually via GitHub Actions tab → "Run workflow"
- Build logs are visible in GitHub Actions for debugging
