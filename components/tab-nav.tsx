"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "hot", label: "热门", active: true },
  { id: "group", label: "团购" },
  { id: "latest", label: "最新资源" },
  { id: "douban", label: "豆瓣热门" },
]

export function TabNav() {
  const [activeTab, setActiveTab] = useState("hot")

  return (
    <div className="flex items-center gap-1 border-b border-border pb-2 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "px-4 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors",
            activeTab === tab.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
