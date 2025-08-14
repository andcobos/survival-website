import Link from "next/link"
import { FlameKindlingIcon, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0B1110] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 text-[#E6ECEA] mb-4">
              <FlameKindlingIcon className="h-8 w-8 text-[#24A27B]" />
              <span className="text-xl font-bold">Tactival</span>
            </Link>
            <p className="text-[#9FB3A8] max-w-md leading-relaxed">
              Your trusted source for survival gear, EDC essentials, and wilderness knowledge. Prepare for anything with
              quality equipment and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#E6ECEA] font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/survival-essentials" className="text-[#9FB3A8] hover:text-[#24A27B] transition-colors">
                  Survival Essentials
                </Link>
              </li>
              <li>
                <Link href="/edc-gadgets" className="text-[#9FB3A8] hover:text-[#24A27B] transition-colors">
                  EDC Gadgets
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-[#9FB3A8] hover:text-[#24A27B] transition-colors">
                  Full Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#E6ECEA] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tips" className="text-[#9FB3A8] hover:text-[#24A27B] transition-colors">
                  Tips & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#9FB3A8] hover:text-[#24A27B] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#9FB3A8] text-sm">© 2025 Tactival. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-[#9FB3A8] hover:text-[#24A27B] transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-[#9FB3A8] hover:text-[#24A27B] transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
