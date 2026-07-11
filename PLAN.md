# sogas 网盘资源搜索平台改造计划

## 任务概述
将现有的静态资源展示平台改造为实时对接盘搜API的动态资源搜索平台

## 盘搜API接口分析
- 基础URL: http://124.220.76.89:8080/
- 搜索接口: /api/search?q=关键词&page=页码&size=每页数量
- 响应格式:
  ```json
  {
    "code": 0,
    "message": "success",
    "data": {
      "total": 搜索结果总数,
      "merged_by_type": {
        "115": [...],
        "baidu": [...],
        "quark": [...],
        "aliyun": [...],
        "pikpak": [...],
        "tianyi": [...],
        ...
      }
    }
  }
  ```

## 网盘资源类型
- 115网盘: https://115cdn.com/s/xxx
- 百度网盘: pan.baidu.com
- 夸克网盘: pan.quark.cn
- 阿里云盘: www.alipan.com
- 天翼云盘: cloud.189.cn
- PikPak: pikpak.com
- 其他网盘类型

## 改造方案

### 1. 后端API层 (Next.js API Routes)
- 创建 `/app/api/search/route.ts` 处理搜索请求
- 创建 `/app/api/resources/[id]/route.ts` 处理资源详情
- 实现代理转发盘搜API，解决跨域问题

### 2. 前端组件改造
- 修改搜索框组件对接真实API
- 改造分类展示为动态加载
- 实现分页加载功能
- 添加资源类型筛选

### 3. 数据存储优化
- 使用缓存机制减少API调用
- 实现热门搜索推荐
- 添加用户收藏功能

### 4. 用户体验改进
- 添加加载状态提示
- 实现搜索历史记录
- 添加资源预览功能
- 优化移动端体验

## 实施步骤
1. 创建API路由层
2. 改造搜索功能
3. 重构资源展示组件
4. 添加缓存机制
5. 测试和优化
6. 部署上线
