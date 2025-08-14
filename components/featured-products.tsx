import Link from "next/link"
import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Product } from "@/lib/types"

interface FeaturedProductsProps {
  title: string
  description: string
  products: Product[]
  categorySlug?: string
}

export function FeaturedProducts({ title, description, products, categorySlug }: FeaturedProductsProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#E6ECEA] mb-4">{title}</h3>
          <p className="text-[#9FB3A8] max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {categorySlug && (
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-[#5B6E3A] text-[#24A27B] hover:bg-[#5B6E3A] hover:text-white bg-transparent"
            >
              <Link href={`/catalog?category=${categorySlug}`}>
                View All {title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
