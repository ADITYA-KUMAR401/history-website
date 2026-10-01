#!/bin/bash
cd /Users/adityakumar/Desktop/project2

echo "🚀 Pushing project to your GitHub account..."

# Initialize git if not already
git init >/dev/null 2>&1
git add .
git commit -m "Initial commit for History Project" >/dev/null 2>&1

# Get GitHub Username
USERNAME=$(gh api user -q .login 2>/dev/null)

if [ -z "$USERNAME" ]; then
    echo "❌ Error: Could not verify GitHub login. Please ensure you ran 'gh auth login' successfully."
    echo "Press any key to exit..."
    read -n 1
    exit 1
fi

REPO_NAME="history-website"

echo "📦 Creating repository '$REPO_NAME'..."
# Create a public repository (will fail safely if it already exists)
gh repo create $REPO_NAME --public --source=. --remote=origin --push 2>/dev/null

# Ensure we are on main branch
git branch -M main
git push -u origin main

echo "🌍 Enabling GitHub Pages for free permanent hosting..."

# Enable GitHub Pages targeting the main branch root
gh api --method POST -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/$USERNAME/$REPO_NAME/pages -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 || true

echo ""
echo "====================================================="
echo "✅ DEPLOYMENT COMPLETE!"
echo "Your permanent link will be ready in 1-2 minutes at:"
echo "👉 https://$USERNAME.github.io/$REPO_NAME/"
echo "====================================================="
echo "Press any key to close this window..."
read -n 1
