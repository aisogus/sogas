import { ArrowUp, MessageCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)

  // Show buttons when user scrolls down
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300)
  }

  useState(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-2">
      <Button
        size="icon"
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
      
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle className="h-4 w-4" />
      </Button>
      
      <Button
        size="icon"
        variant="outline"
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  )
}
