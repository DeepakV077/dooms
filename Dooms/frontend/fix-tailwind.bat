@echo off
cd /d %~dp0
echo Uninstalling Tailwind CSS v4...
npm uninstall tailwindcss
echo Installing Tailwind CSS v3 (stable)...
npm install -D tailwindcss@^3.4.0 --legacy-peer-deps
echo Done! You can now run npm run dev
pause
