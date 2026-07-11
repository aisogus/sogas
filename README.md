# sogas - 网盘资源搜索平台

基于 Next.js 构建的网盘资源搜索平台，对接盘搜API提供实时搜索服务。

## 功能特性

- 🔍 实时搜索：对接盘搜API，支持多网盘资源搜索
- 📱 响应式设计：支持桌面和移动端访问
- ⚡ 高性能：Next.js SSR/SSG，快速加载
- 🎨 现代化UI：使用 Tailwind CSS 和 shadcn/ui 组件库
- 🌙 深色模式：支持明暗主题切换
- 📦 多网盘支持：百度、夸克、阿里云、115等

## 技术栈

- **前端**: Next.js 14+, React, TypeScript
- **样式**: Tailwind CSS, shadcn/ui
- **图标**: Lucide React
- **API**: 盘搜API接口代理

## 安装与运行

1. 安装依赖
```bash
npm install
```

2. 配置环境变量
```bash
cp .env.local.example .env.local
# 编辑 .env.local 配置盘搜API地址
```

3. 开发模式运行
```bash
npm run dev
```

4. 生产构建
```bash
npm run build
npm start
```

## 项目结构

```
sogas/
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   │   └── search/        # 搜索API
│   ├── search/            # 搜索页面
│   └── page.tsx           # 主页
├── components/            # 组件
│   ├── header.tsx         # 头部导航
│   ├── footer.tsx         # 底部信息
│   ├── floating-buttons.tsx  # 浮动按钮
│   └── ui/               # UI组件
├── lib/                   # 工具函数
└── public/               # 静态资源
```

## API接口

### 搜索接口
- **端点**: `/api/search`
- **方法**: GET
- **参数**:
  - `q`: 搜索关键词 (必填)
  - `page`: 页码 (可选，默认1)
  - `size`: 每页数量 (可选，默认20)
  - `type`: 网盘类型 (可选，all表示全部)

### 盘搜API
- **地址**: `http://124.220.76.89:8080/api`
- **搜索**: `/search?q=关键词&page=页码&size=数量`

## 部署

支持多种部署方式：
- Vercel (推荐)
- Docker
- 传统服务器

## 许可证

MIT

## Optimization Update
- Enhanced search functionality with caching
- Improved UI/UX design
- Optimized for global traffic
