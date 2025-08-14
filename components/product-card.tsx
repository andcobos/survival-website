import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] hover:ring-1 hover:ring-[#24A27B]/30 transition-all duration-300 group overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.badges.slice(0, 2).map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="bg-[#1F6F4A]/90 text-white text-xs px-2 py-1 backdrop-blur-sm"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-[#9FB3A8] text-sm mb-3 line-clamp-2">{product.summary}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs border-[#5B6E3A] text-[#9FB3A8] bg-transparent">
              {feature}
            </Badge>
          ))}
        </div>

        <Button asChild className="w-full bg-[#1F6F4A] hover:bg-[#24A27B] text-white">
          <Link href={`/catalog/${product.slug}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
