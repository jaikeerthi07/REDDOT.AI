#!/bin/bash
echo "Deploying REDDOT-AI..."

# 1. Pull latest code (assuming git is set up)
# git pull origin main

# 2. Install dependencies
pnpm install

# 3. Build the application (Vite + esbuild)
pnpm run build

# 4. Run database migrations
pnpm run db:push

# 5. Restart application with PM2
pm2 reload ecosystem.config.cjs --env production

echo "Deployment complete!"
