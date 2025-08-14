"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, FlameKindlingIcon } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/survival-essentials", label: "Survival Essentials" },
    { href: "/edc-gadgets", label: "EDC Gadgets" },
    { href: "/tips", label: "Tips & Guides" },
    { href: "/catalog", label: "Catalog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1110]/95 backdrop-blur-sm border-b border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-[#E6ECEA] hover:text-[#24A27B] transition-colors">
            <FlameKindlingIcon className="h-8 w-8 text-[#24A27B]" />
            <span className="text-xl font-bold">Tactival</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#9FB3A8] hover:text-[#E6ECEA] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E6ECEA] hover:text-[#24A27B] hover:bg-[#1B2630]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>

  )
}
