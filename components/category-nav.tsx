import { Film, Music, Code, BookOpen, Gamepad2, Database, Cloud, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryNavProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: "all", label: "全部", icon: Cloud },
  { id: "movie", label: "电影", icon: Film },
  { id: "music", label: "音乐", icon: Music },
  { id: "software", label: "软件", icon: Code },
  { id: "tutorial", label: "教程", icon: BookOpen },
  { id: "game", label: "游戏", icon: Gamepad2 },
  { id: "data", label: "数据", icon: Database },
  { id: "other", label: "其他", icon: Settings },
]

export function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          size="sm"
          className={cn(
            "gap-2 transition-all duration-200",
            activeCategory === category.id && "shadow-md"
          )}
          onClick={() => onCategoryChange(category.id)}
        >
          <category.icon className="h-4 w-4" />
          {category.label}
        </Button>
      ))}
    </div>
  )
}
