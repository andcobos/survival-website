import { SectionHeading } from "@/components/section-heading"
import { FeaturedProducts } from "@/components/featured-products"
import { EDCChecklist } from "@/components/edc-checklist"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Clock } from "lucide-react"
import { getProductsByCategory } from "@/lib/products"

export default function EDCGadgetsPage() {
  const flashlightProducts = getProductsByCategory("flashlights")
  const multitoolProducts = getProductsByCategory("multitools")
  const knifeProducts = getProductsByCategory("knives")
  const edcProducts = getProductsByCategory("edc")

  return (
    <div className="min-h-screen bg-[#0F1517]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B1110] via-[#0F1517] to-[#1B2630]">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%227%22 cy%3D%227%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2227%22 cy%3D%227%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2247%22 cy%3D%227%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%227%22 cy%3D%2227%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2227%22 cy%3D%2227%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2247%22 cy%3D%2227%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%227%22 cy%3D%2247%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2227%22 cy%3D%2247%22 r%3D%221%22%2F%3E%3Ccircle cx%3D%2247%22 cy%3D%2247%22 r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#E6ECEA] mb-6">EDC Gadgets</h1>
          <p className="text-xl text-[#9FB3A8] max-w-3xl mx-auto leading-relaxed">
            Everyday Carry essentials for the prepared individual. Quality tools and gadgets that enhance your daily
            readiness and problem-solving capabilities.
          </p>
        </div>
      </section>

      {/* EDC Philosophy */}
      <section className="py-16 bg-[#0F1517]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The EDC Mindset"
            description="Preparedness through thoughtful selection of everyday tools"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#1F6F4A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#24A27B] transition-colors">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Always Ready</h3>
                <p className="text-[#9FB3A8] text-sm">
                  Carry tools that prepare you for unexpected situations and daily challenges
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#5B6E3A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#A49B73] transition-colors">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Self-Reliant</h3>
                <p className="text-[#9FB3A8] text-sm">Reduce dependence on others by carrying your own solutions</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#A49B73] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5B6E3A] transition-colors">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Efficient</h3>
                <p className="text-[#9FB3A8] text-sm">
                  Choose quality tools that serve multiple purposes without excess weight
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Featured Products by Category */}
      <div className="bg-[#0F1517]">
        <FeaturedProducts
          title="Tactical Flashlights"
          description="Reliable illumination for any situation. From everyday tasks to emergency situations, a quality flashlight is indispensable."
          products={flashlightProducts}
          categorySlug="flashlights"
        />
      </div>

      <div className="bg-[#0B1110]">
        <FeaturedProducts
          title="Multi-Tools"
          description="Versatile tools that combine multiple functions in a compact package. The ultimate space-saving EDC solution."
          products={multitoolProducts}
          categorySlug="multitools"
        />
      </div>

      <div className="bg-[#0B1110]">
        <FeaturedProducts
          title="EDC Knives"
          description="Compact folding knives designed for everyday tasks. Legal, practical, and always within reach."
          products={knifeProducts.filter((p) => p.name.includes("Tactical"))}
          categorySlug="knives"
        />
      </div>

      <div className="bg-[#0B1110]">
        <FeaturedProducts
          title="EDC Accessories"
          description="Essential accessories that enhance your preparedness: paracord, lights, and emergency tools."
          products={edcProducts}
          categorySlug="edc"
        />
      </div>

      {/* EDC Checklist */}
      <section className="py-16 bg-[#0B1110]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Build Your EDC Kit"
            description="Use this checklist to evaluate and improve your everyday carry setup"
          />
          <EDCChecklist />
        </div>
      </section>
      
    </div>
  )
}
