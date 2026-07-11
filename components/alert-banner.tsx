import { Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
      <div className="container mx-auto px-4 py-3">
        <Alert className="border-0 bg-transparent">
          <Info className="h-4 w-4 text-primary" />
          <AlertTitle className="text-sm font-medium">欢迎来到盘搜</AlertTitle>
          <AlertDescription className="text-xs text-muted-foreground">
            全网资源一站式搜索平台，快速找到您需要的电影、音乐、软件、教程等资源
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
