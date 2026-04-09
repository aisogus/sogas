import { Bell, X } from "lucide-react"

export function AlertBanner() {
  return (
    <div className="bg-amber-50/80 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-amber-700 text-sm flex-1 min-w-0">
          <Bell className="w-4 h-4 shrink-0 text-amber-500" />
          <p className="truncate">
            搜源盘坚持免费分享，欢迎右下角扫码进群，本地搜全网搜检索不到资源，添加微信(tmi300)帮找
          </p>
        </div>
        <button className="ml-2 p-1 text-amber-400 hover:text-amber-600 transition-colors shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
