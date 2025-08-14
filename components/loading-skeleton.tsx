export function ProductCardSkeleton() {
  return (
    <div className="bg-[#1B2630] border border-white/10 rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-[#0F1517]" />
      <div className="p-4 space-y-3">
        <div className="h-6 bg-[#0F1517] rounded" />
        <div className="h-4 bg-[#0F1517] rounded w-3/4" />
        <div className="h-4 bg-[#0F1517] rounded w-1/2" />
        <div className="flex gap-2">
          <div className="h-6 bg-[#0F1517] rounded w-16" />
          <div className="h-6 bg-[#0F1517] rounded w-20" />
        </div>
        <div className="h-10 bg-[#0F1517] rounded" />
      </div>
    </div>
  )
}

export function TipCardSkeleton() {
  return (
    <div className="bg-[#1B2630] border border-white/10 rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-[3/2] bg-[#0F1517]" />
      <div className="p-6 space-y-4">
        <div className="flex gap-2">
          <div className="h-6 bg-[#0F1517] rounded w-20" />
          <div className="h-6 bg-[#0F1517] rounded w-16" />
        </div>
        <div className="h-6 bg-[#0F1517] rounded" />
        <div className="h-4 bg-[#0F1517] rounded w-3/4" />
        <div className="h-4 bg-[#0F1517] rounded w-1/2" />
        <div className="h-10 bg-[#0F1517] rounded" />
      </div>
    </div>
  )
}
