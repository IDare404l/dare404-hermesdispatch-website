#!/bin/bash
# deploy-to-vercel.sh

# Step 1: Login (if not already authenticated)
npx vercel login

# Step 2: Deploy to production
echo "Deploying Newsletter to Vercel..."
npx vercel --prod

echo ""
echo "✅ Deployment complete! Your newsletter will be at:"
echo "   https://hermesmissionfreedom.vercel.app/newsletter/"
