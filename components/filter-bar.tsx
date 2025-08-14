"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"
import { categories } from "@/lib/products"

interface FilterBarProps {
  onFilterChange: (filters: {
    category: string
    search: string
    badges: string[]
  }) => void
  availableBadges: string[]
}

export function FilterBar({ onFilterChange, availableBadges }: FilterBarProps) {
  const [category, setCategory] = useState<string>("all")
  const [search, setSearch] = useState<string>("")
  const [selectedBadges, setSelectedBadges] = useState<string[]>([])

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    onFilterChange({
      category: value,
      search,
      badges: selectedBadges,
    })
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    onFilterChange({
      category,
      search: value,
      badges: selectedBadges,
    })
  }

  const handleBadgeToggle = (badge: string) => {
    const newBadges = selectedBadges.includes(badge)
      ? selectedBadges.filter((b) => b !== badge)
      : [...selectedBadges, badge]

    setSelectedBadges(newBadges)
    onFilterChange({
      category,
      search,
      badges: newBadges,
    })
  }

  const clearFilters = () => {
    setCategory("all")
    setSearch("")
    setSelectedBadges([])
    onFilterChange({
      category: "all",
      search: "",
      badges: [],
    })
  }

  return (
    <div className="bg-[#1B2630] border border-white/10 rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9FB3A8] h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 bg-[#0F1517] border-white/10 text-[#E6ECEA] placeholder:text-[#9FB3A8]"
          />
        </div>

        {/* Category Filter */}
        <Select value={category} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full lg:w-48 bg-[#0F1517] border-white/10 text-[#E6ECEA]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="bg-[#1B2630] border-white/10">
            <SelectItem value="all" className="text-[#E6ECEA] focus:bg-[#0F1517]">
              All Categories
            </SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id} className="text-[#E6ECEA] focus:bg-[#0F1517]">
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {(category !== "all" || search || selectedBadges.length > 0) && (
          <Button
            variant="outline"
            onClick={clearFilters}
            className="border-[#5B6E3A] text-[#9FB3A8] hover:bg-[#5B6E3A] hover:text-white bg-transparent"
          >
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Badge Filters */}
      {availableBadges.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-[#E6ECEA] mb-2">Filter by Features:</h4>
          <div className="flex flex-wrap gap-2">
            {availableBadges.map((badge) => (
              <Badge
                key={badge}
                variant={selectedBadges.includes(badge) ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedBadges.includes(badge)
                    ? "bg-[#1F6F4A] text-white hover:bg-[#24A27B]"
                    : "border-[#5B6E3A] text-[#9FB3A8] hover:bg-[#5B6E3A] hover:text-white bg-transparent"
                }`}
                onClick={() => handleBadgeToggle(badge)}
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
