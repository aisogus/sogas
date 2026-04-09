import { AlertTriangle } from "lucide-react"

export function AlertBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-2 text-amber-800 text-sm">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <p className="line-clamp-1">
            搜源盘坚持免费分享，欢迎右下角打扰机器。本地整全问验权初案不到资源，添加链接后W300将有回
          </p>
        </div>
      </div>
    </div>
  )
}
