@echo off
cd /d %~dp0
echo Installing Tailwind CSS v4 PostCSS plugin...
npm install -D @tailwindcss/postcss --legacy-peer-deps
echo Updating postcss config...
copy /y postcss.config.v4.js postcss.config.js
echo Done! You can now run npm run dev
pause
