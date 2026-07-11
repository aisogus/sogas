# sogas 快速开始指南

## 最简单的方式：Vercel 部署

1. ** Fork 这个仓库到 GitHub**
2. **登录 Vercel** https://vercel.com
3. **导入项目**，选择你的 GitHub 仓库
4. **配置环境变量**：
   - `PAN_SOU_API_URL`: `http://124.220.76.89:8080/api`
5. **点击 Deploy**，等待部署完成
6. **访问你的网站**！

## 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 配置环境（复制示例文件）
cp .env.example .env.local

# 3. 启动开发服务器
npm run dev

# 4. 访问 http://localhost:3000
```

## 生产部署

```bash
# 1. 构建项目
npm run build

# 2. 启动服务
npm start

# 3. 访问 http://localhost:3000
```

## 一键部署脚本

### Linux/Mac
```bash
chmod +x deploy.sh
./deploy.sh
```

### Windows
```cmd
deploy.bat
```

## 常见问题

**Q: 搜索不到资源？**
A: 检查盘搜API地址是否正确，确认API服务可用

**Q: 页面加载慢？**
A: 首次加载可能较慢，后续会有缓存加速

**Q: 如何自定义域名？**
A: Vercel 支持在设置中配置自定义域名
