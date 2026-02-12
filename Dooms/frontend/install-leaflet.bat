@echo off
REM Install Leaflet dependencies for the V-Forge dashboard
REM Run this file from the frontend directory

echo Installing Leaflet and react-leaflet...
npm install leaflet@1.9.4 react-leaflet@4.2.1

echo.
echo Installation complete!
echo You can now run: npm run dev
