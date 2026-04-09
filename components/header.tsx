"use client"

import { useState } from "react"
import { Search, CreditCard, Briefcase, Wrench, Globe, ChevronDown, Menu, X } from "lucide-react"
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
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">搜源盘</span>
          </div>

          {/* Search Bar - 桌面端 */}
          <div className="hidden md:flex flex-1 max-w-xl items-center">
            <div className="relative flex items-center w-full">
              <button className="flex items-center gap-1 px-3 py-2 bg-muted rounded-l-lg border border-r-0 border-border text-sm text-muted-foreground hover:bg-accent">
                {searchType}
                <ChevronDown className="w-4 h-4" />
              </button>
              <Input
                type="text"
                placeholder="搜源盘"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-l-none bg-primary hover:bg-primary/90">
                <Search className="w-4 h-4" />
                <span className="ml-1">搜索</span>
              </Button>
            </div>
          </div>

          {/* 右侧按钮 - 桌面端 */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs gap-1">
              <CreditCard className="w-3.5 h-3.5" />
              网盘卡
            </Button>
            <Button variant="outline" size="sm" className="text-xs gap-1">
              <Briefcase className="w-3.5 h-3.5" />
              副业卡
            </Button>
            <Button variant="outline" size="sm" className="text-xs gap-1">
              <Wrench className="w-3.5 h-3.5" />
              工具箱
            </Button>
            <Button variant="outline" size="sm" className="text-xs gap-1">
              <Globe className="w-3.5 h-3.5" />
              中文
              <ChevronDown className="w-3 h-3" />
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs">
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
          <div className="relative flex items-center w-full">
            <button className="flex items-center gap-1 px-2 py-2 bg-muted rounded-l-lg border border-r-0 border-border text-xs text-muted-foreground">
              {searchType}
              <ChevronDown className="w-3 h-3" />
            </button>
            <Input
              type="text"
              placeholder="搜源盘"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
            />
            <Button size="sm" className="rounded-l-none bg-primary hover:bg-primary/90">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-2 border-t border-border pt-3">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="text-xs gap-1">
                <CreditCard className="w-3.5 h-3.5" />
                网盘卡
              </Button>
              <Button variant="outline" size="sm" className="text-xs gap-1">
                <Briefcase className="w-3.5 h-3.5" />
                副业卡
              </Button>
              <Button variant="outline" size="sm" className="text-xs gap-1">
                <Wrench className="w-3.5 h-3.5" />
                工具箱
              </Button>
              <Button variant="outline" size="sm" className="text-xs gap-1">
                <Globe className="w-3.5 h-3.5" />
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
