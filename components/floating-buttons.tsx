"use client"

import { useState } from "react"
import { MessageCircle, Mail, Moon, Sun } from "lucide-react"

export function FloatingButtons() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
      {/* 微信 */}
      <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
        <MessageCircle className="w-5 h-5" />
      </button>
      
      {/* 邮箱 */}
      <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
        <Mail className="w-5 h-5" />
      </button>
      
      {/* 暗色模式切换 */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="w-10 h-10 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:bg-accent transition-colors shadow-lg"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  )
}
