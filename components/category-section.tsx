import { ChevronRight } from "lucide-react"

interface CategoryItem {
  id: number
  title: string
  tag: string
}

interface CategorySectionProps {
  title: string
  icon: string
  items: CategoryItem[]
}

export function CategorySection({ title, icon, items }: CategorySectionProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* 标题栏 */}
      <div className="flex items-center justify-between px-3 h-9 border-b border-border bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{icon}</span>
          <span className="font-medium text-primary text-sm">{title}</span>
        </div>
        <button className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
          更多
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 单列15行布局 */}
      <div className="divide-y divide-border/30">
        {items.slice(0, 15).map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-2 px-3 h-7 hover:bg-muted/30 transition-colors cursor-pointer group"
          >
            <span className="text-muted-foreground text-xs w-4 tabular-nums shrink-0">
              {index + 1}
            </span>
            <span className="text-foreground text-sm truncate flex-1 group-hover:text-primary transition-colors">
              {item.title}
            </span>
            <span className="text-muted-foreground text-xs shrink-0">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
