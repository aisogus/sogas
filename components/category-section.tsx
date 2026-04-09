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
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-secondary/30">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="font-medium text-primary text-sm">{title}</span>
        </div>
        <button className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
          更多
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 列表 */}
      <div className="divide-y divide-border">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-muted/50 transition-colors cursor-pointer group"
          >
            <span className="text-muted-foreground text-xs w-5 shrink-0">
              {item.id}
            </span>
            <span className="text-foreground text-xs truncate flex-1 group-hover:text-primary transition-colors">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
