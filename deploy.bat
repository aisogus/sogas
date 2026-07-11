@echo off
chcp 65001 >nul
echo === sogas 网盘资源搜索平台部署脚本 ===

echo 正在检查 Node.js...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js 未安装，请先安装 Node.js 18+
    pause
    exit /b 1
)

echo ✅ Node.js 已安装

echo.
echo 📦 正在安装依赖...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

echo ✅ 依赖安装完成

if not exist .env.local (
    echo.
    echo ⚙️  正在创建环境配置文件...
    copy .env.example .env.local >nul
    echo ✅ 环境配置文件创建完成
    echo 💡 请编辑 .env.local 文件配置您的环境变量
)

echo.
echo 🔨 正在构建项目...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 项目构建失败
    pause
    exit /b 1
)

echo ✅ 项目构建完成

echo.
echo 🚀 正在启动服务...
echo 💡 访问 http://localhost:3000 查看网站
echo 💡 按 Ctrl+C 停止服务
echo.

call npm start
