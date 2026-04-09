"use client"

import { cn } from "@/lib/utils"
import { Flame } from "lucide-react"

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
  pink: "bg-pink-100 text-pink-600",
  orange: "bg-orange-100 text-orange-600",
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  yellow: "bg-yellow-100 text-yellow-700",
  cyan: "bg-cyan-100 text-cyan-600",
  red: "bg-red-100 text-red-600",
}

function getNumberColor(index: number): string {
  if (index === 1) return "text-red-500 font-bold"
  if (index === 2) return "text-orange-500 font-bold"
  if (index === 3) return "text-yellow-500 font-bold"
  return "text-muted-foreground"
}

export function HotResources({ items }: HotResourcesProps) {
  return (
    <div className="mt-4 bg-card border border-border rounded-lg p-4">
      {/* 头部 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full text-sm font-medium">
            <Flame className="w-4 h-4" />
            热门搜索
          </button>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-foreground cursor-pointer hover:text-primary">热门资源</span>
            <span className="text-muted-foreground cursor-pointer hover:text-primary">最新资源</span>
            <span className="text-muted-foreground cursor-pointer hover:text-primary">豆瓣热门</span>
          </div>
        </div>
        <a href="#" className="text-primary text-sm hover:underline">
          更多 {">"}
        </a>
      </div>

      {/* 3列网格布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 py-1.5 group cursor-pointer"
          >
            <span className={cn("w-5 text-sm shrink-0", getNumberColor(item.id))}>
              {item.id}
            </span>
            <span className="text-foreground text-sm truncate flex-1 group-hover:text-primary transition-colors">
              {item.title}
            </span>
            {item.badge === "hot" && (
              <span className="text-[10px] px-1 py-0.5 bg-red-500 text-white rounded shrink-0">
                热
              </span>
            )}
            {item.badge === "recommend" && (
              <span className="text-[10px] px-1 py-0.5 bg-blue-500 text-white rounded shrink-0">
                荐
              </span>
            )}
            <span
              className={cn(
                "text-xs px-1.5 py-0.5 rounded shrink-0",
                colorMap[item.color] || "bg-gray-100 text-gray-600"
              )}
            >
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
