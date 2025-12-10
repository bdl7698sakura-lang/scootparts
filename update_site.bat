@echo off
chcp 65001 >nul
color 0A
cls
echo.
echo ========================================================
echo   MISE A JOUR DU SITE SCOOTPARTS 🚀
echo ========================================================
echo.
echo [1/3] Détection des changements...
git add .

echo.
echo [2/3] Validation...
set /p message="Écrivez ce que vous avez changé (ex: nouveau prix) : "
if "%message%"=="" set message="Mise a jour site"
git commit -m "%message%"

echo.
echo ========================================================
echo [3/3] Envoi vers le serveur (Vercel)...
echo.
git push
echo.
echo ========================================================
echo   ✅ TERMINÉ ! 
echo   Vercel va mettre à jour le site automatiquement.
echo   Cela prend environ 1 minute.
echo ========================================================
echo.
pause
