import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import type { TipGuide } from "@/lib/tips-data"

interface TipCardProps {
  tip: TipGuide
}

export function TipCard({ tip }: TipCardProps) {
  const getDifficultyColor = (difficulty: TipGuide["difficulty"]) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-[#1F6F4A] text-white"
      case "Intermediate":
        return "bg-[#5B6E3A] text-white"
      case "Advanced":
        return "bg-[#A49B73] text-white"
    }
  }

  const getCategoryColor = (category: TipGuide["category"]) => {
    const colors = {
      fire: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      shelter: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      water: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      knots: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "first-aid": "bg-red-500/20 text-red-300 border-red-500/30",
      food: "bg-green-500/20 text-green-300 border-green-500/30",
      gear: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    }
    return colors[category] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }

  return (
    <Card className="bg-[#1B2630] border-white/10 hover:scale-[1.03] hover:ring-1 hover:ring-[#24A27B]/30 transition-all duration-300 group overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={tip.image || "/placeholder.svg"}
          alt={tip.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={getDifficultyColor(tip.difficulty)}>{tip.difficulty}</Badge>
          <Badge variant="outline" className={getCategoryColor(tip.category)}>
            {tip.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-[#E6ECEA] mb-3 line-clamp-2">{tip.title}</h3>
        <p className="text-[#9FB3A8] text-sm mb-4 line-clamp-3">{tip.summary}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-[#9FB3A8] text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {tip.readTime}
          </div>
        </div>

        <Button asChild className="w-full bg-[#1F6F4A] hover:bg-[#24A27B] text-white">
          <Link href={`/tips/${tip.slug}`}>
            Read Guide
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
