"use client"

import { cn } from "@/lib/utils"
import { Flame } from "lucide-react"
import Link from "next/link"

interface HotResourceItem {
  id: number
  title: string
  tag: string
  color: string
  badge?: "hot" | "recommend"
}

interface HotResourcesProps {
  items: HotResourceItem[]
}

const colorMap: Record<string, string> = {
  pink: "bg-pink-50 text-pink-500",
  orange: "bg-orange-50 text-orange-500",
  blue: "bg-blue-50 text-blue-500",
  purple: "bg-purple-50 text-purple-500",
  green: "bg-green-50 text-green-500",
  yellow: "bg-yellow-50 text-yellow-600",
  cyan: "bg-cyan-50 text-cyan-500",
  red: "bg-red-50 text-red-500",
}

function getNumberColor(index: number): string {
  if (index === 1) return "text-red-500 font-semibold"
  if (index === 2) return "text-orange-500 font-semibold"
  if (index === 3) return "text-yellow-500 font-semibold"
  return "text-muted-foreground"
}

export function HotResources({ items }: HotResourcesProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      {/* 头部 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full text-sm font-medium shadow-sm">
            <Flame className="w-4 h-4" />
            热门搜索
          </button>
          <div className="flex items-center gap-5 text-sm">
            <span className="text-foreground cursor-pointer hover:text-primary font-medium">热门资源</span>
            <span className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">最新资源</span>
            <span className="text-muted-foreground cursor-pointer hover:text-primary transition-colors">豆瓣热门</span>
          </div>
        </div>
        <Link href="/search" className="text-primary text-sm hover:underline">
          更多 {"›"}
        </Link>
      </div>

      {/* 3列网格布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/search?q=${encodeURIComponent(item.title)}`}
            className="flex items-center gap-3 py-2 group cursor-pointer hover:bg-muted/30 rounded px-1 -mx-1 transition-colors"
          >
            <span className={cn("w-5 text-sm tabular-nums", getNumberColor(item.id))}>
              {item.id}
            </span>
            <span className="text-foreground text-sm truncate flex-1 group-hover:text-primary transition-colors">
              {item.title}
            </span>
            {item.badge === "hot" && (
              <span className="text-[10px] leading-none px-1 py-0.5 bg-red-500 text-white rounded shrink-0">
                热
              </span>
            )}
            {item.badge === "recommend" && (
              <span className="text-[10px] leading-none px-1 py-0.5 bg-blue-500 text-white rounded shrink-0">
                荐
              </span>
            )}
            <span
              className={cn(
                "text-xs px-1.5 py-0.5 rounded shrink-0",
                colorMap[item.color] || "bg-gray-50 text-gray-500"
              )}
            >
              {item.tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
