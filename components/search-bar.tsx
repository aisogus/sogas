import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void
  isLoading?: boolean
  placeholder?: string
}

export function SearchBar({ onSearch, isLoading = false, placeholder = "搜索网盘资源..." }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-10 py-6 text-lg rounded-full border-2 focus:border-primary shadow-lg"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      {query && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          onClick={handleClear}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      <Button 
        type="submit" 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
        disabled={isLoading || !query.trim()}
      >
        {isLoading ? "搜索中..." : "搜索"}
      </Button>
    </form>
  )
}
