"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, FlameKindlingIcon } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/survival-essentials", label: "Survival Essentials" },
    { href: "/edc-gadgets", label: "EDC Gadgets" },
    { href: "/tips", label: "Tips & Guides" },
    { href: "/catalog", label: "Catalog" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => document.body.classList.remove("overflow-hidden")
  }, [isOpen])

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1110]/95 backdrop-blur-sm border-b border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-[#E6ECEA] hover:text-[#24A27B] transition-colors"
          >
            <FlameKindlingIcon className="h-8 w-8 text-[#24A27B]" />
            <span className="text-xl font-bold">Tactival</span>
          </Link>

          {/* Desktop nav */}
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
              onClick={() => setIsOpen((v) => !v)}
              className="text-[#E6ECEA] hover:text-[#24A27B] hover:bg-[#1B2630]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Side menu panel */}
      <aside
        id="mobile-menu"
        className={`md:hidden fixed right-0 top-0 z-50 h-dvh w-72 max-w-[85vw] 
        bg-[#0F1517] border-l border-white/10 shadow-xl
        transition-transform duration-300 will-change-transform
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <div className="flex items-center space-x-2 text-[#E6ECEA]">
            <FlameKindlingIcon className="h-6 w-6 text-[#24A27B]" />
            <span className="text-lg font-semibold">Tactival</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-[#E6ECEA] hover:text-[#24A27B] hover:bg-[#1B2630]"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="px-4 py-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-[#E6ECEA] hover:bg-[#1B2630] hover:text-[#24A27B] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </nav>
  )
}
