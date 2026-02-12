#!/bin/bash
cd "$(dirname "$0")"

echo "=== Fixing Tailwind CSS Setup ==="
echo ""

# Uninstall current Tailwind
echo "Step 1: Removing Tailwind CSS v4..."
npm uninstall tailwindcss

# Install Tailwind v3
echo ""
echo "Step 2: Installing Tailwind CSS v3.4.0..."
npm install -D tailwindcss@^3.4.0 --legacy-peer-deps

echo ""
echo "✅ Tailwind CSS fixed!"
echo ""
echo "You can now run: npm run dev"
echo ""
read -p "Press Enter to close..."
