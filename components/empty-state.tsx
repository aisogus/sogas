import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({ 
  title = "未找到结果", 
  description = "试试其他关键词或浏览分类",
  actionLabel = "清空搜索",
  onAction 
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <Search className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {onAction && (
        <Button variant="outline" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
