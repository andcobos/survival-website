import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Compass, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F1517] flex items-center justify-center px-4">
      <Card className="bg-[#1B2630] border-white/10 max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-[#1F6F4A] rounded-full flex items-center justify-center mx-auto mb-6">
            <Compass className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-[#E6ECEA] mb-4">Lost in the Wilderness</h1>
          <p className="text-[#9FB3A8] mb-6 leading-relaxed">
            The page you're looking for has wandered off the trail. Let's get you back to safety.
          </p>

          <div className="space-y-3">
            <Button asChild className="w-full bg-[#1F6F4A] hover:bg-[#24A27B] text-white">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Return to Base Camp
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full border-[#5B6E3A] text-[#9FB3A8] hover:bg-[#5B6E3A] hover:text-white bg-transparent"
            >
              <Link href="/catalog">Browse Gear Catalog</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
