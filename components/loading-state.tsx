import { Skeleton } from "@/components/ui/skeleton"

interface LoadingStateProps {
  itemCount?: number
}

export function LoadingState({ itemCount = 6 }: LoadingStateProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: itemCount }).map((_, index) => (
        <div key={index} className="space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </div>
  )
}
