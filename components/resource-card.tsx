import { ExternalLink, Clock, HardDrive } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ResourceItem {
  id: string
  name: string
  type: string
  size: string
  uploadDate: string
  link: string
  description?: string
  source?: string
}

interface ResourceCardProps {
  item: ResourceItem
}

export function ResourceCard({ item }: ResourceCardProps) {
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return dateString
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {item.name}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
            {item.type}
          </span>
          {item.source && (
            <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
              {item.source}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {item.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {item.description}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <HardDrive className="h-3 w-3" />
            <span>{item.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{formatDate(item.uploadDate)}</span>
          </div>
        </div>
        <Button className="w-full" variant="outline" size="sm" asChild>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            查看详情
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
