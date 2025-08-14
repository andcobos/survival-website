import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PocketKnifeIcon as Knife, Flashlight, Package, BookOpen, Grid3X3 } from "lucide-react"
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/hero-bg.jpg"
          alt="Survival background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay de degradado (más transparente en móvil) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1110]/20 via-[#0F1517]/35 to-[#1B2630]/15" />

        {/* Overlay de patrón */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%227%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%227%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%227%22 cy%3D%2247%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%2247%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%2247%22 r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        {/* Contenido */}
          <div className="relative z-10 text-center max-w-4xl mx-4 sm:mx-auto px-6 border-0 bg-[#0B1110]/90 my-6 py-6 rounded-md opacity-100 shadow-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] md:leading-tight font-bold text-[#E6ECEA] mb-6 tracking-tight">
            Survival Ready
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#9FB3A8] mb-8 max-w-2xl mx-auto leading-relaxed">
            Essential gear and knowledge for the modern survivalist. From wilderness adventures to everyday preparedness.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#1F6F4A] hover:bg-[#24A27B] text-white border-0 px-6 md:px-8 py-3 text-base md:text-lg"
            >
              <Link href="/survival-essentials">
                <Knife className="mr-2 h-5 w-5" />
                Survival Essentials
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-[#5B6E3A] text-[#E6ECEA] hover:bg-[#5B6E3A] hover:text-white px-6 md:px-8 py-3 text-base md:text-lg bg-transparent"
            >
              <Link href="/edc-gadgets">
                <Flashlight className="mr-2 h-5 w-5" />
                EDC Gadgets
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6 bg-[#0F1517]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E6ECEA] text-center mb-12">Explore Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] hover:ring-1 hover:ring-[#24A27B]/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#1F6F4A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#24A27B] transition-colors">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Survival Essentials</h3>
                <p className="text-[#9FB3A8] text-sm mb-4">Fire starters, tools, first aid, and core survival gear</p>
                <Button asChild variant="ghost" className="text-[#24A27B] hover:text-white hover:bg-[#1F6F4A]">
                  <Link href="/survival-essentials">Explore</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] hover:ring-1 hover:ring-[#24A27B]/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#5B6E3A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#A49B73] transition-colors">
                  <Flashlight className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">EDC Gadgets</h3>
                <p className="text-[#9FB3A8] text-sm mb-4">Everyday carry essentials for preparedness</p>
                <Button asChild variant="ghost" className="text-[#24A27B] hover:text-white hover:bg-[#1F6F4A]">
                  <Link href="/edc-gadgets">Explore</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] hover:ring-1 hover:ring-[#24A27B]/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#A49B73] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5B6E3A] transition-colors">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Tips & Guides</h3>
                <p className="text-[#9FB3A8] text-sm mb-4">Expert knowledge and survival techniques</p>
                <Button asChild variant="ghost" className="text-[#24A27B] hover:text-white hover:bg-[#1F6F4A]">
                  <Link href="/tips">Explore</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] hover:ring-1 hover:ring-[#24A27B]/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#1F6F4A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#24A27B] transition-colors">
                  <Grid3X3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#E6ECEA] mb-2">Full Catalog</h3>
                <p className="text-[#9FB3A8] text-sm mb-4">Browse all products with advanced filters</p>
                <Button asChild variant="ghost" className="text-[#24A27B] hover:text-white hover:bg-[#1F6F4A]">
                  <Link href="/catalog">Explore</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
