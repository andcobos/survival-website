import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { getProductBySlug } from "@/lib/products"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0F1517] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Catalog */}
        <Button asChild variant="ghost" className="mb-8 text-[#9FB3A8] hover:text-[#E6ECEA] hover:bg-[#1B2630]">
          <Link href="/catalog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#1B2630]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Gallery */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {product.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-[#1B2630]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#E6ECEA] mb-4">{product.name}</h1>
              <p className="text-lg text-[#9FB3A8] leading-relaxed">{product.summary}</p>
            </div>

            {/* Badges */}
            {product.badges && product.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <Badge key={badge} className="bg-[#1F6F4A] text-white px-3 py-1">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}

            {/* Features */}
            <Card className="bg-[#1B2630] border-white/10">
              <CardHeader>
                <CardTitle className="text-[#E6ECEA]">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[#24A27B] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-[#9FB3A8]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <Card className="bg-[#1B2630] border-white/10">
                <CardHeader>
                  <CardTitle className="text-[#E6ECEA]">Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                      >
                        <span className="text-[#9FB3A8] font-medium">{key}</span>
                        <span className="text-[#E6ECEA]">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* External Link */}
            {product.externalUrl && (
              <Button asChild size="lg" className="w-full bg-[#1F6F4A] hover:bg-[#24A27B] text-white">
                <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Learn More / Buy
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
