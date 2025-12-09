@echo off
echo Lancement de votre boutique DropStore...
cd /d "%~dp0"

:: Ouvre le navigateur par defaut
start "" "http://localhost:3000"

:: Lance le serveur de developpement
echo Demarrage du serveur... (Ne fermez pas cette fenetre)
npm run dev
pause
