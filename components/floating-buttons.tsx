"use client"

import { useState } from "react"
import { MessageCircle, Mail, Moon, Sun, Phone } from "lucide-react"

export function FloatingButtons() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-40">
      {/* 微信 */}
      <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-md hover:shadow-lg">
        <MessageCircle className="w-5 h-5" />
      </button>
      
      {/* 邮箱 */}
      <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
        <Mail className="w-5 h-5" />
      </button>
      
      {/* 暗色模式切换 */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="w-10 h-10 rounded-full bg-card border border-border text-muted-foreground flex items-center justify-center hover:bg-muted hover:text-foreground transition-colors shadow-md hover:shadow-lg"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* 回到顶部 */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 h-10 rounded-full bg-card border border-border text-muted-foreground flex items-center justify-center hover:bg-muted hover:text-foreground transition-colors shadow-md hover:shadow-lg"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}
