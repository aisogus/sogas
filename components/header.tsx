"use client"

import { useState } from "react"
import { Search, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("全部")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - 企鹅图标 */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" className="w-8 h-8">
                <circle cx="16" cy="16" r="14" fill="#FF6B6B" />
                <ellipse cx="16" cy="18" rx="8" ry="9" fill="white" />
                <circle cx="12" cy="14" r="2" fill="#333" />
                <circle cx="20" cy="14" r="2" fill="#333" />
                <ellipse cx="16" cy="18" rx="3" ry="2" fill="#FF9F43" />
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">搜源盘</span>
          </div>

          {/* Search Bar - 桌面端 */}
          <div className="hidden md:flex flex-1 max-w-xl items-center">
            <div className="relative flex items-center w-full border border-border rounded-lg overflow-hidden">
              <button className="flex items-center gap-1 px-4 py-2.5 bg-card border-r border-border text-sm text-muted-foreground hover:bg-accent">
                {searchType}
                <ChevronDown className="w-4 h-4" />
              </button>
              <Input
                type="text"
                placeholder="搜源盘"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
              />
              <button className="px-4 py-2.5 text-primary hover:text-primary/80">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 右侧按钮 - 桌面端 */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs gap-1.5 border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
              流量卡
            </Button>
            <Button variant="outline" size="sm" className="text-xs gap-1.5 border-yellow-200 bg-yellow-50 text-yellow-600 hover:bg-yellow-100 hover:text-yellow-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10">$</text>
              </svg>
              副业圈
            </Button>
            <Button variant="outline" size="sm" className="text-xs gap-1.5 border-red-200 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              工具箱
            </Button>
            <Button variant="ghost" size="sm" className="text-xs gap-1">
              中文
              <ChevronDown className="w-3 h-3" />
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs px-4">
              登录
            </Button>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Search Bar - 移动端 */}
        <div className="md:hidden mt-3">
          <div className="relative flex items-center w-full border border-border rounded-lg overflow-hidden">
            <button className="flex items-center gap-1 px-3 py-2 bg-card border-r border-border text-xs text-muted-foreground">
              {searchType}
              <ChevronDown className="w-3 h-3" />
            </button>
            <Input
              type="text"
              placeholder="搜源盘"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-sm"
            />
            <button className="px-3 py-2 text-primary">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-2 border-t border-border pt-3">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="text-xs gap-1 border-blue-200 bg-blue-50 text-blue-600">
                流量卡
              </Button>
              <Button variant="outline" size="sm" className="text-xs gap-1 border-yellow-200 bg-yellow-50 text-yellow-600">
                副业圈
              </Button>
              <Button variant="outline" size="sm" className="text-xs gap-1 border-red-200 bg-red-50 text-red-600">
                工具箱
              </Button>
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                中文
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs">
                登录
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
