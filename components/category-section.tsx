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
  // 将items分成3列，每列5个
  const columns = [
    items.slice(0, 5),
    items.slice(5, 10),
    items.slice(10, 15),
  ]

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

      {/* 3列布局 */}
      <div className="grid grid-cols-3 divide-x divide-border/50">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="divide-y divide-border/30">
            {column.map((item, itemIndex) => (
              <div
                key={item.id}
                className="flex items-center gap-1 px-2 h-7 hover:bg-muted/30 transition-colors cursor-pointer group"
              >
                <span className="text-muted-foreground text-xs w-3 tabular-nums shrink-0">
                  {colIndex * 5 + itemIndex + 1}
                </span>
                <span className="text-foreground text-xs truncate flex-1 group-hover:text-primary transition-colors leading-none">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
