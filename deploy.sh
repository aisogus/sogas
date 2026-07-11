#!/bin/bash

# sogas 一键部署脚本

echo "=== sogas 网盘资源搜索平台部署脚本 ==="

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js 18+"
    exit 1
fi

echo "✅ Node.js 版本: $(node -v)"

# 检查npm是否安装
if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装"
    exit 1
fi

echo "✅ npm 版本: $(npm -v)"

# 安装依赖
echo ""
echo "📦 正在安装依赖..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo "✅ 依赖安装完成"

# 检查.env.local是否存在
if [ ! -f .env.local ]; then
    echo ""
    echo "⚙️  正在创建环境配置文件..."
    cp .env.example .env.local
    echo "✅ 环境配置文件创建完成"
    echo "💡 请编辑 .env.local 文件配置您的环境变量"
fi

# 构建项目
echo ""
echo "🔨 正在构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 项目构建失败"
    exit 1
fi

echo "✅ 项目构建完成"

# 启动服务
echo ""
echo "🚀 正在启动服务..."
echo "💡 访问 http://localhost:3000 查看网站"
echo "💡 按 Ctrl+C 停止服务"
echo ""

npm start
