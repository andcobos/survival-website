import { SectionHeading } from "@/components/section-heading"
import { FeaturedProducts } from "@/components/featured-products"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Shovel, PocketKnifeIcon as Knife, Heart, Target } from "lucide-react"
import { getProductsByCategory } from "@/lib/products"
import Image from "next/image";

export default function SurvivalEssentialsPage() {
  const fireProducts = getProductsByCategory("fire")
  const shovelProducts = getProductsByCategory("shovels")
  const knifeProducts = getProductsByCategory("knives")
  const firstAidProducts = getProductsByCategory("first-aid")
  const rifleProducts = getProductsByCategory("rifles")

  return (
    <div className="min-h-screen bg-[#0F1517]">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Imagen optimizada */}
        <Image
          src="/survivalessentials.jpg"
          alt="Survival background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay oscuro general */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Patrón */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%227%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%227%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        {/* Contenido con rectángulo */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/40 p-8 rounded-lg inline-block">
            <h1 className="text-4xl md:text-6xl font-bold text-[#E6ECEA] mb-6">
              Survival Essentials
            </h1>
            <p className="text-xl text-[#9FB3A8] max-w-3xl mx-auto leading-relaxed">
              Master the fundamentals of wilderness survival with essential gear and knowledge.
              From fire-making to first aid, these are the tools that can save your life.
            </p>
          </div>
        </div>
      </section>


      {/* Core Categories Overview */}
      <section className="py-16 bg-[#0F1517]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Five Pillars of Survival"
            description="Essential categories every survivalist must master"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#1F6F4A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#24A27B] transition-colors">
                  <Flame className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Fire</h3>
                <p className="text-[#9FB3A8] text-sm">Warmth, cooking, signaling, and morale</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#5B6E3A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#A49B73] transition-colors">
                  <Shovel className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Shelter</h3>
                <p className="text-[#9FB3A8] text-sm">Protection from elements</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#A49B73] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5B6E3A] transition-colors">
                  <Knife className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Tools</h3>
                <p className="text-[#9FB3A8] text-sm">Cutting, crafting, and utility</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#1F6F4A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#24A27B] transition-colors">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">First Aid</h3>
                <p className="text-[#9FB3A8] text-sm">Medical care and emergency response</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#5B6E3A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#A49B73] transition-colors">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Hunting</h3>
                <p className="text-[#9FB3A8] text-sm">Food procurement and defense</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products by Category */}
      <div className="bg-[#0B1110]">
        <FeaturedProducts
          title="Fire Starters"
          description="Master fire-making with reliable tools that work in any weather condition. Fire is your lifeline in survival situations."
          products={fireProducts}
          categorySlug="fire"
        />
      </div>

      <div className="bg-[#0F1517]">
        <FeaturedProducts
          title="Knives & Cutting Tools"
          description="Essential cutting tools for food prep, shelter building, and countless survival tasks. A good knife is your most versatile tool."
          products={knifeProducts}
          categorySlug="knives"
        />
      </div>

      <div className="bg-[#0B1110]">
        <FeaturedProducts
          title="Shovels & Digging Tools"
          description="Versatile tools for shelter construction, fire pits, waste management, and emergency situations."
          products={shovelProducts}
          categorySlug="shovels"
        />
      </div>

      <div className="bg-[#0F1517]">
        <FeaturedProducts
          title="First Aid & Medical"
          description="Life-saving medical supplies for treating injuries and illnesses in remote locations where help is far away."
          products={firstAidProducts}
          categorySlug="first-aid"
        />
      </div>

      <div className="bg-[#0B1110]">
        <FeaturedProducts
          title="Hunting & Defense"
          description="Overview of hunting rifles and defensive tools for food procurement and personal protection in the wilderness."
          products={rifleProducts}
          categorySlug="rifles"
        />
      </div>
    </div>
  )
}
