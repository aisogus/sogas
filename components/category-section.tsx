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
      <div className="flex items-center justify-between px-3 h-10 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="font-medium text-primary text-sm">{title}</span>
        </div>
        <button className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
          更多
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 列表 */}
      <div className="divide-y divide-border/50">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 px-3 h-8 hover:bg-muted/30 transition-colors cursor-pointer group"
          >
            <span className="text-muted-foreground text-xs w-4 tabular-nums shrink-0">
              {item.id}
            </span>
            <span className="text-foreground text-sm truncate flex-1 group-hover:text-primary transition-colors leading-none">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
