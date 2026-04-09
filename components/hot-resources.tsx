"use client"

import { cn } from "@/lib/utils"

interface HotResourceItem {
  id: number
  title: string
  tag: string
  color: string
}

interface HotResourcesProps {
  items: HotResourceItem[]
}

const colorMap: Record<string, string> = {
  pink: "bg-pink-100 text-pink-700",
  orange: "bg-orange-100 text-orange-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  cyan: "bg-cyan-100 text-cyan-700",
}

export function HotResources({ items }: HotResourcesProps) {
  return (
    <div className="mt-4 overflow-x-auto pb-2">
      <div className="flex gap-3 min-w-max">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer group min-w-0"
          >
            <span className="text-muted-foreground text-sm font-medium w-5 shrink-0">
              {item.id}
            </span>
            <span className="text-foreground text-sm truncate max-w-40 group-hover:text-primary transition-colors">
              {item.title}
            </span>
            <span
              className={cn(
                "text-xs px-1.5 py-0.5 rounded shrink-0",
                colorMap[item.color] || "bg-gray-100 text-gray-700"
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
