@echo off
chcp 65001 >nul
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
set /p commit_msg="请输入提交备注（默认：自动同步）: "
if "%commit_msg%"=="" set commit_msg=自动同步

echo.
echo [3/4] 提交更改...
git commit -m "%commit_msg%"

echo.
echo [4/4] 推送到远程仓库...
git push origin master

echo.
echo ========================================
echo    同步完成！
echo ========================================
pause