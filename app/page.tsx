"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HotResources } from "@/components/hot-resources"
import { CategorySection } from "@/components/category-section"
import { Footer } from "@/components/footer"
import { AlertBanner } from "@/components/alert-banner"
import { FloatingButtons } from "@/components/floating-buttons"
import { SearchBar } from "@/components/search-bar"
import { ResourceCard } from "@/components/resource-card"
import { CategoryNav } from "@/components/category-nav"
import { Pagination } from "@/components/pagination"
import { EmptyState } from "@/components/empty-state"
import { LoadingState } from "@/components/loading-state"
import { Search, TrendingUp, Film, Music, Code, BookOpen, Zap, Shield, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for hot resources
const hotResources = [
  { id: 1, title: "复仇者联盟4：终局之战", tag: "科幻", color: "red", badge: "hot" },
  { id: 2, title: "流浪地球2", tag: "科幻", color: "orange", badge: "recommend" },
  { id: 3, title: "满江红", tag: "喜剧", color: "yellow" },
  { id: 4, title: "无名", tag: "剧情", color: "blue" },
  { id: 5, title: "新神榜：杨戬", tag: "动画", color: "green" },
  { id: 6, title: "深海", tag: "动画", color: "purple" },
  { id: 7, title: "熊出没·伴我熊芯", tag: "动画", color: "cyan" },
  { id: 8, title: "交换人生", tag: "喜剧", color: "pink" },
  { id: 9, title: "红海行动2", tag: "动作", color: "red" },
  { id: 10, title: "飞驰人生2", tag: "喜剧", color: "orange" },
  { id: 11, title: "第二十条", tag: "剧情", color: "yellow" },
  { id: 12, title: "周处除三害", tag: "犯罪", color: "blue" },
  { id: 13, title: "沙丘2", tag: "科幻", color: "green" },
  { id: 14, title: "奥本海默", tag: "传记", color: "purple" },
  { id: 15, title: "芭比", tag: "喜剧", color: "pink" },
  { id: 16, title: "蜘蛛侠：纵横宇宙", tag: "动画", color: "cyan" },
  { id: 17, title: "灌篮高手", tag: "运动", color: "red" },
  { id: 18, title: "铃芽之旅", tag: "动画", color: "orange" },
  { id: 19, title: "长安三万里", tag: "动画", color: "yellow" },
  { id: 20, title: "封神第一部", tag: "奇幻", color: "blue" },
]

// Mock data for categories
const categoryData = {
  movie: {
    title: "电影",
    icon: "🎬",
    items: [
      { id: 1, title: "流浪地球2", tag: "科幻" },
      { id: 2, title: "满江红", tag: "喜剧" },
      { id: 3, title: "无名", tag: "剧情" },
      { id: 4, title: "新神榜：杨戬", tag: "动画" },
      { id: 5, title: "深海", tag: "动画" },
      { id: 6, title: "熊出没·伴我熊芯", tag: "动画" },
      { id: 7, title: "交换人生", tag: "喜剧" },
      { id: 8, title: "红海行动2", tag: "动作" },
    ]
  },
  music: {
    title: "音乐",
    icon: "🎵",
    items: [
      { id: 1, title: "周杰伦全集", tag: "华语" },
      { id: 2, title: "陈奕迅精选", tag: "华语" },
      { id: 3, title: "Taylor Swift", tag: "欧美" },
      { id: 4, title: "BTS防弹少年团", tag: "韩流" },
      { id: 5, title: "古典音乐精选", tag: "古典" },
      { id: 6, title: "摇滚经典合集", tag: "摇滚" },
      { id: 7, title: "电子音乐合集", tag: "电子" },
      { id: 8, title: "民谣小清新", tag: "民谣" },
    ]
  },
  software: {
    title: "软件",
    icon: "💻",
    items: [
      { id: 1, title: "Adobe Creative Suite", tag: "设计" },
      { id: 2, title: "Microsoft Office", tag: "办公" },
      { id: 3, title: "Visual Studio Code", tag: "开发" },
      { id: 4, title: "Python编程教程", tag: "学习" },
      { id: 5, title: "Photoshop教程", tag: "设计" },
      { id: 6, title: "PR剪辑教程", tag: "视频" },
      { id: 7, title: "C4D建模教程", tag: "3D" },
      { id: 8, title: "After Effects教程", tag: "特效" },
    ]
  },
  documentary: {
    title: "纪录片",
    icon: "📹",
    items: [
      { id: 1, title: "地球脉动", tag: "自然" },
      { id: 2, title: "人类星球", tag: "人文" },
      { id: 3, title: "蓝色星球2", tag: "海洋" },
      { id: 4, title: "王朝", tag: "动物" },
      { id: 5, title: "影响世界的中国植物", tag: "植物" },
      { id: 6, title: "手术两百年", tag: "医学" },
      { id: 7, title: "辉煌中国", tag: "国家" },
      { id: 8, title: "大国重器", tag: "工业" },
    ]
  },
  tutorial: {
    title: "教程",
    icon: "📚",
    items: [
      { id: 1, title: "Python入门教程", tag: "编程" },
      { id: 2, title: "JavaScript高级", tag: "编程" },
      { id: 3, title: "React从零到一", tag: "前端" },
      { id: 4, title: "Vue3实战教程", tag: "前端" },
      { id: 5, title: "Node.js后端开发", tag: "后端" },
      { id: 6, title: "Docker容器技术", tag: "运维" },
      { id: 7, title: "机器学习入门", tag: "AI" },
      { id: 8, title: "数据分析实战", tag: "数据" },
    ]
  },
  game: {
    title: "游戏",
    icon: "🎮",
    items: [
      { id: 1, title: "赛博朋克2077", tag: "RPG" },
      { id: 2, title: "艾尔登法环", tag: "动作" },
      { id: 3, title: "战神4", tag: "动作" },
      { id: 4, title: "塞尔达传说", tag: "冒险" },
      { id: 5, title: "怪物猎人世界", tag: "动作" },
      { id: 6, title: "巫师3", tag: "RPG" },
      { id: 7, title: "GTA5", tag: "开放世界" },
      { id: 8, title: "只狼", tag: "动作" },
    ]
  },
  other: {
    title: "其他",
    icon: "📦",
    items: [
      { id: 1, title: "电子书合集", tag: "文学" },
      { id: 2, title: "有声书精选", tag: "听书" },
      { id: 3, title: "播客合集", tag: "音频" },
      { id: 4, title: "素材资源", tag: "设计" },
      { id: 5, title: "字体大全", tag: "设计" },
      { id: 6, title: "图片素材库", tag: "设计" },
      { id: 7, title: "模板资源", tag: "办公" },
      { id: 8, title: "课程资料", tag: "学习" },
    ]
  }
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    setIsSearching(true)
    setCurrentPage(1)
    
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&type=all&page=${currentPage}&size=20`)
      const data = await response.json()
      
      if (data.code === 200) {
        setSearchResults(data.data)
        setTotalPages(Math.ceil((data.data?.total || 0) / 20))
      } else {
        console.error("Search failed:", data.message)
      }
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsSearching(false)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (searchQuery) {
      handleSearch(searchQuery)
    }
  }

  // Hero section stats
  const stats = [
    { label: "资源总数", value: "10M+", icon: Zap },
    { label: "支持网盘", value: "5+", icon: Globe },
    { label: "日均搜索", value: "100K+", icon: Search },
    { label: "用户满意度", value: "99%", icon: Star },
  ]

  // Feature cards
  const features = [
    {
      title: "全网搜索",
      description: "支持百度网盘、阿里云盘、夸克网盘等主流网盘资源搜索",
      icon: Search,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "极速体验",
      description: "毫秒级响应速度，快速获取您需要的资源信息",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "安全可靠",
      description: "严格的资源审核机制，确保搜索内容安全可靠",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "分类浏览",
      description: "电影、音乐、软件、教程等丰富分类，轻松找到所需资源",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Alert Banner */}
      <AlertBanner />
      
      {/* Header */}
      <Header onSearch={handleSearch} isLoading={isSearching} />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">盘搜</span>
              <br />
              <span className="text-3xl md:text-5xl font-normal text-muted-foreground">
                全网资源一站式搜索平台
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              快速搜索百度网盘、阿里云盘、夸克网盘等主流网盘资源
              <br />
              电影、音乐、软件、教程应有尽有
            </p>

            {/* Search Bar */}
            <div className="mb-12">
              <SearchBar onSearch={handleSearch} isLoading={isSearching} />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {searchResults && (
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                搜索结果
                <span className="text-primary ml-2">"{searchQuery}"</span>
              </h2>
              <div className="text-muted-foreground">
                共找到 {searchResults.total || 0} 条结果
              </div>
            </div>

            {/* Category Navigation */}
            <CategoryNav 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />

            {isSearching ? (
              <LoadingState />
            ) : searchResults.items && searchResults.items.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.items.map((item: any, index: number) => (
                    <ResourceCard key={index} item={item} />
                  ))}
                </div>
                
                {/* Pagination */}
                <Pagination 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={handlePageChange} 
                />
              </>
            ) : (
              <EmptyState 
                title="未找到相关资源"
                description="试试其他关键词或浏览分类"
                onAction={() => {
                  setSearchQuery("")
                  setSearchResults(null)
                }}
              />
            )}
          </div>
        </section>
      )}

      {/* Hot Resources Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">热门资源</h2>
            <p className="text-muted-foreground text-lg">
              本周最受欢迎的网盘资源推荐
            </p>
          </div>
          
          <HotResources items={hotResources} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">资源分类</h2>
            <p className="text-muted-foreground text-lg">
              按类别浏览海量网盘资源
            </p>
          </div>
          
          <CategorySection 
            title="电影" 
            icon="🎬" 
            items={categoryData.movie.items} 
            category="movie"
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="py-16 text-center">
              <h2 className="text-4xl font-bold mb-4">开始搜索您的资源</h2>
              <p className="text-xl mb-8 opacity-90">
                输入关键词，快速找到您需要的网盘资源
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => {
                  const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement
                  searchInput?.focus()
                }}
              >
                <Search className="w-5 h-5 mr-2" />
                立即搜索
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  )
}
