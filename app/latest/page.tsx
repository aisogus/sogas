"use client"

import { Header } from "@/components/header"
import { AlertBanner } from "@/components/alert-banner"
import { FloatingButtons } from "@/components/floating-buttons"
import { Footer } from "@/components/footer"
import { Cloud } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categories = [
  { id: "all", name: "全部" },
  { id: "music", name: "音乐" },
  { id: "shortdrama", name: "短剧" },
  { id: "movie", name: "电影" },
  { id: "anime", name: "动漫" },
  { id: "variety", name: "综艺" },
  { id: "tv", name: "电视剧" },
]

const latestResources = [
  { id: 7, title: "让你摆地摊，没让你城管局门口摆", tag: "最新资源" },
  { id: 8, title: "汤山老王内部资讯严选", tag: "最新资源" },
  { id: 9, title: "全网封杀系列！价值6998的【李一舟全套课程合集】", tag: "最新资源", highlight: true },
  { id: 10, title: "2025高考最后十课", tag: "最新资源", highlight: true },
  { id: 11, title: "天下无双", tag: "最新资源" },
  { id: 12, title: "家父关云长", tag: "最新资源" },
  { id: 13, title: "峡谷", tag: "最新资源" },
  { id: 14, title: "晋江顶流32位作者小说合集", tag: "最新资源" },
  { id: 15, title: "2025年5月5日合集总链", tag: "最新资源" },
  { id: 16, title: "被污蔑当天，反手编辑大帝背景", tag: "最新资源" },
  { id: 17, title: "把爱全都收回", tag: "最新资源" },
  { id: 18, title: "摇啊摇，摇到外婆桥", tag: "最新资源" },
  { id: 19, title: "无情何必怨相逢", tag: "最新资源" },
  { id: 20, title: "华灯初上", tag: "最新资源" },
  { id: 21, title: "绝世芳华", tag: "最新资源" },
  { id: 22, title: "八零如梦情笺", tag: "最新资源" },
  { id: 23, title: "还剩三个月寿命，请让我从容赴死", tag: "最新资源", highlight: true },
  { id: 24, title: "破解软件更新", tag: "最新资源" },
  { id: 25, title: "2025年4月26日合集目录1", tag: "最新资源" },
  { id: 26, title: "漫长驯鹿", tag: "最新资源" },
]

const searchRankings = [
  { id: 1, title: "ArtPepperEverythingHappen...", count: 87 },
  { id: 2, title: "Gorillaz-DemonDays 音乐", count: 85 },
  { id: 3, title: "小城大事", count: 83 },
  { id: 4, title: "DamianoDavid-FUNNYlittleF...", count: 81 },
  { id: 5, title: "Fugees-GreatestHits 音乐", count: 80 },
  { id: 6, title: "ToriAmos-StrangeLittleGirls ...", count: 77 },
]

const latestResourcesSidebar = [
  { id: 1, title: "罗小黑战记2 有声", tag: "有声" },
  { id: 2, title: "天堂岛之外第一季BeyondParadiseS...", tag: "" },
  { id: 3, title: "天空之城SKY가슬", tag: "电视剧" },
  { id: 4, title: "钢琴家", tag: "电影" },
  { id: 5, title: "荒野猎人", tag: "电影" },
  { id: 6, title: "机智医生生活", tag: "电视剧" },
]

export default function LatestPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AlertBanner />
      <FloatingButtons />

      <main className="max-w-7xl mx-auto px-4 py-5">
        {/* 分类标签栏 */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <button className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded">
            最新资源
          </button>
        </div>

        {/* 主内容区 */}
        <div className="flex gap-5">
          {/* 左侧资源列表 */}
          <div className="flex-1 min-w-0">
            <div className="bg-card rounded-lg border border-border">
              {latestResources.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4 px-4 py-3 hover:bg-accent/50 transition-colors ${
                    index !== latestResources.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  <span className="w-8 text-sm text-muted-foreground text-center flex-shrink-0">
                    {item.id}
                  </span>
                  <Link
                    href="#"
                    className={`flex-1 text-sm truncate hover:underline ${
                      item.highlight ? "text-primary" : "text-blue-600"
                    }`}
                  >
                    {item.title}
                  </Link>
                  <span className="text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded flex-shrink-0">
                    {item.tag}
                  </span>
                  <Cloud className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* 右侧边栏 */}
          <div className="w-64 flex-shrink-0 space-y-4">
            {/* 微信二维码卡片 */}
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex gap-3">
                <div className="w-20 h-20 bg-muted rounded flex items-center justify-center">
                  <div className="w-16 h-16 bg-muted-foreground/20 rounded" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground">添加微信，帮找资源</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    免费机器人自动找剧，进群每人都是SVIP
                  </p>
                </div>
              </div>
            </div>

            {/* 搜索榜单 */}
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-primary">🔥</span>
                  <h4 className="text-sm font-medium text-foreground">搜索榜单</h4>
                </div>
                <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                  更多 &gt;
                </Link>
              </div>
              <div className="space-y-2.5">
                {searchRankings.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <span
                      className={`w-4 text-xs text-center font-medium ${
                        item.id === 1
                          ? "text-red-500"
                          : item.id === 2
                          ? "text-orange-500"
                          : item.id === 3
                          ? "text-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.id}
                    </span>
                    <Link
                      href="#"
                      className="flex-1 text-xs text-foreground hover:text-primary truncate"
                    >
                      {item.title}
                    </Link>
                    <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                      <span className="text-orange-400">🔥</span>
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 最新资源 */}
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-primary">📄</span>
                  <h4 className="text-sm font-medium text-foreground">最新资源</h4>
                </div>
                <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                  更多 &gt;
                </Link>
              </div>
              <div className="space-y-2.5">
                {latestResourcesSidebar.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <span
                      className={`w-4 text-xs text-center font-medium ${
                        item.id === 1
                          ? "text-red-500"
                          : item.id === 2
                          ? "text-orange-500"
                          : item.id === 3
                          ? "text-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.id}
                    </span>
                    <Link
                      href="#"
                      className="flex-1 text-xs text-foreground hover:text-primary truncate"
                    >
                      {item.title}
                    </Link>
                    {item.tag && (
                      <span className="text-xs text-muted-foreground">{item.tag}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
