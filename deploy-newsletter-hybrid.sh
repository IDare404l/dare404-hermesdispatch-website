#!/bin/bash
# Hybrid deployment script for Mission Freedom Newsletter
# Main site stays on Cloudflare Pages, newsletter API on Vercel

set -e

echo "=========================================="
echo "HYBRID DEPLOYMENT: Newsletter → Vercel"
echo "=========================================="

# Check if Vercel CLI is available
if ! command -v npx &> /dev/null; then
    echo "❌ npx not found. Install Node.js first."
    exit 1
fi

# Check if logged in
echo ""
echo "Checking Vercel authentication..."
if ! npx vercel whoami &> /dev/null; then
    echo "❌ Not logged in. Running: npx vercel login"
    npx vercel login
fi

echo "✅ Vercel authenticated"

# Build the site
echo ""
echo "Building newsletter..."
npm run build

# Deploy to Vercel
echo ""
echo "Deploying to Vercel..."
npx vercel --prod

echo ""
echo "=========================================="
echo "✅ Newsletter deployed to Vercel!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Note your Vercel URL (e.g., newsletter-hermes.vercel.app)"
echo "2. Update API_URL in src/pages/newsletter/index.astro"
echo "3. Rebuild and redeploy main site to Cloudflare"
echo ""
echo "Architecture:"
echo "  Main site:    hermesmissionfreedom.ai (Cloudflare Pages)"
echo "  Newsletter:   your-vercel-url.vercel.app"
echo "  Subscribe:    (Vercel)/api/subscribe"
echo ""
