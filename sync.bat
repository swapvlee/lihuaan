@echo off
echo ========================================
echo    项目同步到 GitHub
echo ========================================
echo.

echo [1/4] 检查 git 状态...
git status
if %errorlevel% neq 0 (
    echo 错误：当前目录不是 git 仓库
    pause
    exit /b 1
)

echo.
echo [2/4] 添加所有更改...
git add .

echo.
echo [3/4] 提交更改...
git commit -m "Auto sync - %date% %time%"

echo.
echo [4/4] 推送到远程仓库...
git push origin master

echo.
echo ========================================
echo    同步完成！
echo ========================================
pause