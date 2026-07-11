# sogas 部署指南

## 本地部署

### 1. 安装依赖
```bash
cd sogas
npm install
```

### 2. 配置环境变量
```bash
cp .env.example .env.local
# 编辑 .env.local 配置盘搜API地址
```

### 3. 开发模式运行
```bash
npm run dev
# 访问 http://localhost:3000
```

### 4. 生产构建
```bash
npm run build
npm start
# 访问 http://localhost:3000
```

## Vercel 部署（推荐）

### 前置条件
- GitHub/GitLab 账号
- Vercel 账号

### 步骤

1. **推送代码到Git仓库**
   ```bash
   git init
   git add .
   git commit -m "feat: 集成盘搜API"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **在Vercel中导入项目**
   - 访问 https://vercel.com/new
   - 选择你的Git仓库
   - 配置环境变量：
     - `PAN_SOU_API_URL`: http://124.220.76.89:8080/api
     - `CACHE_DURATION`: 300
   - 点击Deploy

3. **部署完成**
   - 访问自动分配的域名
   - 配置自定义域名（可选）

## Docker 部署

### 1. 创建Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]
```

### 2. 创建docker-compose.yml
```yaml
version: '3.8'
services:
  sogas:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PAN_SOU_API_URL=http://124.220.76.89:8080/api
      - CACHE_DURATION=300
    restart: unless-stopped
```

### 3. 启动服务
```bash
docker-compose up -d
```

## Nginx 反向代理配置

```nginx
server {
    listen 80;
    server_name sogas.example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 故障排除

### 常见问题

1. **API连接失败**
   - 检查PAN_SOU_API_URL配置是否正确
   - 确认盘搜API服务是否可用

2. **构建错误**
   - 清除node_modules重新安装
   - 检查Node.js版本（推荐18+）

3. **端口占用**
   - 修改.env中的PORT配置
   - 或停止占用端口的进程

### 性能优化建议

1. 使用Redis替代内存缓存
2. 启用CDN加速静态资源
3. 配置数据库存储搜索历史
4. 添加负载均衡支持高并发
