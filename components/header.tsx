"use client"

import { useState } from "react"
import { Search, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SO</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">sogas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            首页
          </Link>
          <Link href="/search" className="text-sm font-medium hover:text-primary transition-colors">
            搜索
          </Link>
          <div className="relative group">
            <Button variant="ghost" size="sm" className="gap-1">
              分类
              <ChevronDown className="h-4 w-4" />
            </Button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <Link href="/search?category=music" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                  🎵 音乐
                </Link>
                <Link href="/search?category=movie" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                  🎬 电影
                </Link>
                <Link href="/search?category=tvShow" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                  📺 电视剧
                </Link>
                <Link href="/search?category=book" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                  📚 书籍
                </Link>
                <Link href="/search?category=software" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                  💻 软件
                </Link>
                <Link href="/search?category=game" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                  🎮 游戏
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-4">
          <Input
            type="text"
            placeholder="搜索网盘资源..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
          />
          <Button type="submit" size="sm">
            <Search className="h-4 w-4" />
          </Button>
        </form>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 text-sm gap-1">
            工具箱
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-sm gap-1">
            中文
          </Button>
          <Button size="sm" className="h-8 bg-primary hover:bg-primary/90 text-sm">
            登录
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="搜索网盘资源..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <Link href="/" className="block text-sm font-medium hover:text-primary transition-colors">
              首页
            </Link>
            <Link href="/search" className="block text-sm font-medium hover:text-primary transition-colors">
              搜索
            </Link>
            <Link href="/about" className="block text-sm font-medium hover:text-primary transition-colors">
              关于
            </Link>
            <div className="pt-2 border-t">
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                登录
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
