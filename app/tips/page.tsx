import { SectionHeading } from "@/components/section-heading"
import { TipCard } from "@/components/tip-card"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Home, Droplets, Compass, Heart, Utensils, Settings } from "lucide-react"
import { tipGuides } from "@/lib/tips-data"

export default function TipsPage() {
  const categories = [
    { id: "fire", name: "Fire", icon: Flame, color: "bg-orange-500" },
    { id: "shelter", name: "Shelter", icon: Home, color: "bg-blue-500" },
    { id: "water", name: "Water", icon: Droplets, color: "bg-cyan-500" },
    { id: "navigation", name: "Navigation", icon: Compass, color: "bg-purple-500" },
    { id: "first-aid", name: "First Aid", icon: Heart, color: "bg-red-500" },
    { id: "food", name: "Food", icon: Utensils, color: "bg-green-500" },
    { id: "gear", name: "Gear", icon: Settings, color: "bg-yellow-500" },
  ]

  return (
    <div className="min-h-screen bg-[#0F1517]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B1110] via-[#0F1517] to-[#1B2630]">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%227%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%227%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#E6ECEA] mb-6">Tips & Guides</h1>
          <p className="text-xl text-[#9FB3A8] max-w-3xl mx-auto leading-relaxed">
            Master essential survival skills with our comprehensive guides. From basic techniques to advanced
            strategies, build the knowledge that could save your life.
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-[#0F1517]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Survival Categories" description="Essential skills organized by survival priorities" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              const categoryGuides = tipGuides.filter((tip) => tip.category === category.id)

              return (
                <Card
                  key={category.id}
                  className="bg-[#1B2630] border-white/10 hover:scale-[1.03] transition-all duration-300 group"
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#E6ECEA] mb-1">{category.name}</h3>
                    <p className="text-xs text-[#9FB3A8]">{categoryGuides.length} guides</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-[#0B1110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Survival Guides"
            description="Comprehensive collection of survival knowledge and techniques"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tipGuides.map((tip) => (
              <TipCard key={tip.slug} tip={tip} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
