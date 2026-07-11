"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HotResources } from "@/components/hot-resources"
import { CategorySection } from "@/components/category-section"
import { Footer } from "@/components/footer"
import { AlertBanner } from "@/components/alert-banner"
import { FloatingButtons } from "@/components/floating-buttons"
import { Search, TrendingUp, Film, Music, Code, BookOpen, Zap, Shield, Globe, Star } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { ResourceCard } from "@/components/resource-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    setIsSearching(true)
    
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&type=all&page=1&size=20`)
      const data = await response.json()
      
      if (data.code === 200) {
        setSearchResults(data.data)
      } else {
        console.error("Search failed:", data.message)
      }
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsSearching(false)
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
            
            {searchResults.items && searchResults.items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.items.map((item: any, index: number) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{item.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {item.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.size}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {item.description || "暂无描述"}
                      </p>
                      <Button className="w-full" variant="outline" size="sm">
                        查看详情
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">未找到相关资源</p>
              </div>
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
          
          <HotResources />
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
          
          <CategorySection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
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
                onClick={() => document.querySelector('input[type="search"]')?.focus()}
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
