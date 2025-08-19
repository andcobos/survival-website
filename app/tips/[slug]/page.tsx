import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, CheckCircle, Lightbulb } from "lucide-react"
import { getTipBySlug } from "@/lib/tips-data"

interface TipPageProps {
  params: Promise<{ slug: string }>
}

export default async function TipPage({ params }: TipPageProps) {
  const { slug } = await params
  const tip = getTipBySlug(slug)

  if (!tip) {
    notFound()
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-[#1F6F4A] text-white"
      case "Intermediate":
        return "bg-[#5B6E3A] text-white"
      case "Advanced":
        return "bg-[#A49B73] text-white"
    }
  }

  return (
    <div className="min-h-screen bg-[#0F1517] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 text-[#9FB3A8] hover:text-[#E6ECEA] hover:bg-[#1B2630]">
          <Link href="/tips">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tips
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl mb-6">
            <Image 
              src={tip.image || "/placeholder.svg"}  
              alt={tip.title}                        
              fill                                   
              className="object-cover"               
              priority                             
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className={getDifficultyColor(tip.difficulty)}>{tip.difficulty}</Badge>
            <Badge variant="outline" className="border-[#5B6E3A] text-[#9FB3A8] bg-transparent capitalize">
              {tip.category}
            </Badge>
            <div className="flex items-center text-[#9FB3A8] text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {tip.readTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#E6ECEA] mb-4">{tip.title}</h1>
          <p className="text-lg text-[#9FB3A8] leading-relaxed">{tip.summary}</p>
        </div>

        {/* Introduction */}
        <Card className="bg-[#1B2630] border-white/10 mb-8">
          <CardContent className="p-6">
            <p className="text-[#E6ECEA] leading-relaxed">{tip.content.introduction}</p>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-8">
          {tip.content.sections.map((section, index) => (
            <Card key={index} className="bg-[#1B2630] border-white/10">
              <CardHeader>
                <CardTitle className="text-[#E6ECEA] text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-[#9FB3A8] leading-relaxed">{section.content}</p>

                {/* Checklist */}
                {section.checklist && (
                  <div className="bg-[#0F1517] rounded-lg p-4 border border-white/5">
                    <h4 className="text-[#E6ECEA] font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-[#24A27B]" />
                      Checklist
                    </h4>
                    <ul className="space-y-2">
                      {section.checklist.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-[#24A27B] rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-[#9FB3A8]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tips */}
                {section.tips && (
                  <div className="bg-[#0F1517] rounded-lg p-4 border border-white/5">
                    <h4 className="text-[#E6ECEA] font-semibold mb-3 flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2 text-[#A49B73]" />
                      Pro Tips
                    </h4>
                    <ul className="space-y-2">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-[#A49B73] rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-[#9FB3A8]">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Tips */}
        <div className="text-center mt-12">
          <Button asChild className="bg-[#1F6F4A] hover:bg-[#24A27B] text-white">
            <Link href="/tips">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Tips
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
