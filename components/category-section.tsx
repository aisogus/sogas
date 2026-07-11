"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface CategoryItem {
  id: number
  title: string
  tag: string
}

interface CategorySectionProps {
  title: string
  icon: string
  items: CategoryItem[]
  category?: string
}

export function CategorySection({ title, icon, items, category }: CategorySectionProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
      {/* 标题栏 */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border/50">
        <div className="flex items-center gap-1.5">
          <span className="text-base">{icon}</span>
          <span className="font-medium text-primary text-[13px]">{title}</span>
        </div>
        {category && (
          <Link
            href={`/search?category=${encodeURIComponent(category)}`}
            className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            更多
            <ChevronRight className="w-3 h-3" />
          </Link>
        )}
      </div>

      {/* 单列15行布局 */}
      <div className="px-3 py-1.5">
        {items.slice(0, 15).map((item, index) => (
          <Link
            key={item.id}
            href={`/search?q=${encodeURIComponent(item.title)}${category ? `&category=${encodeURIComponent(category)}` : ''}`}
            className="flex items-center gap-2 py-[5px] hover:bg-muted/40 rounded transition-colors cursor-pointer group -mx-1.5 px-1.5"
          >
            <span className="text-muted-foreground/70 text-xs w-4 text-right tabular-nums shrink-0">
              {index + 1}
            </span>
            <span className="text-foreground/90 text-[13px] truncate flex-1 group-hover:text-primary transition-colors leading-snug">
              {item.title}
            </span>
            <span className="text-muted-foreground/60 text-xs shrink-0">
              {item.tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
