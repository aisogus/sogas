"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AlertBanner } from "@/components/alert-banner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Loader2, ExternalLink, Copy, Check, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchResult {
  url: string
  password?: string
  note?: string
  size?: string
  drive_type?: string
  files?: any[]
  [key: string]: any
}

interface SearchResultsByType {
  [key: string]: SearchResult[]
}

interface SearchApiResponse {
  code: number
  message: string
  data: {
    total: number
    merged_by_type: SearchResultsByType
  }
}

interface HotResourceItem {
  id: number
  title: string
  tag: string
  color: string
  badge?: "hot" | "recommend"
}

const driveIcons: Record<string, string> = {
  baidu: "🔵",
  quark: "🟣",
  aliyun: "🟠",
  "115": "🟢",
  pikpak: "🔴",
  ed2k: "⚪",
  magnet: "🧲",
  tianyi: "🟡",
}

const colorMap: Record<string, string> = {
  pink: "bg-pink-50 text-pink-600",
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-600",
  purple: "bg-purple-50 text-purple-600",
  cyan: "bg-cyan-50 text-cyan-600",
}

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchApiResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("all")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  // Hot search keywords
  const [hotKeywords] = useState([
    "音乐", "电影", "电视剧", "小说", "软件", "游戏",
    "纪录片", "书籍", "学科", "设计", "标准"
  ])

  // Fetch search results
  const searchResources = async (searchQuery: string, pageNum: number = 1) => {
    if (!searchQuery.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&page=${pageNum}&size=20&type=all`)
      const data = await response.json()

      if (data.code === 0) {
        setResults(data)
        setTotalPages(Math.ceil(data.data.total / 20))
      } else {
        setError(data.message || "搜索失败")
      }
    } catch (err) {
      setError("网络错误，请稍后重试")
      console.error("Search error:", err)
    } finally {
      setLoading(false)
    }
  }

  // Initial search when component mounts with query
  useEffect(() => {
    if (query) {
      searchResources(query, page)
    }
  }, [query, page])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    searchResources(query, 1)
  }

  const copyToClipboard = async (text: string, url: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedUrl(url)
      setTimeout(() => setCopiedUrl(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const getAvailableTypes = () => {
    if (!results?.data?.merged_by_type) return []
    return Object.keys(results.data.merged_by_type).filter(type => 
      results.data.merged_by_type[type]?.length > 0
    )
  }

  const getCurrentResults = (): SearchResult[] => {
    if (!results?.data?.merged_by_type) return []
    if (activeTab === "all") {
      // Flatten all results
      return Object.values(results.data.merged_by_type).flat()
    }
    return results.data.merged_by_type[activeTab] || []
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AlertBanner />
      <FloatingButtons />
      <main className="max-w-7xl mx-auto px-4 py-5">
        {/* Search Section */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="输入关键词搜索网盘资源..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    搜索中...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    搜索
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Hot Keywords */}
        {!results && !loading && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Flame className="h-5 w-5 text-orange-500" />
                热门搜索
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {hotKeywords.map((keyword) => (
                  <Button
                    key={keyword}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQuery(keyword)
                      setPage(1)
                      searchResources(keyword, 1)
                    }}
                  >
                    {keyword}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error Display */}
        {error && (
          <Card className="border-destructive mb-6">
            <CardContent className="pt-6">
              <div className="text-destructive">{error}</div>
            </CardContent>
          </Card>
        )}

        {/* Results Summary */}
        {results && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">
                搜索结果 ({results.data.total} 条资源)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Drive Type Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Button
                  variant={activeTab === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("all")}
                >
                  全部
                </Button>
                {getAvailableTypes().map((type) => (
                  <Button
                    key={type}
                    variant={activeTab === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab(type)}
                  >
                    {driveIcons[type] || "📁"} {type}
                  </Button>
                ))}
              </div>

              {/* Results List */}
              <div className="space-y-3">
                {getCurrentResults().map((result, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{result.note || result.title || "未知资源"}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {(result.drive_type || "unknown").toLowerCase()}
                          </Badge>
                          {result.size && (
                            <Badge variant="outline" className="text-xs">
                              {result.size}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(result.password || "", result.url)}
                        >
                          {copiedUrl === result.url ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={result.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    {result.password && (
                      <div className="text-xs text-muted-foreground">
                        提取码: {result.password}
                      </div>
                    )}
                    
                    {result.files && (
                      <div className="text-xs text-muted-foreground">
                        文件数: {result.files.length}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    上一页
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    第 {page} / {totalPages} 页
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                  >
                    下一页
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
