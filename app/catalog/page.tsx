"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { FilterBar } from "@/components/filter-bar"
import { products } from "@/lib/products"

export default function CatalogPage() {
  const [filters, setFilters] = useState({
    category: "all",
    search: "",
    badges: [] as string[],
  })

  // Get all unique badges for filter options
  const availableBadges = useMemo(() => {
    const badges = new Set<string>()
    products.forEach((product) => {
      product.badges?.forEach((badge) => badges.add(badge))
    })
    return Array.from(badges).sort()
  }, [])

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (filters.category !== "all" && product.category !== filters.category) {
        return false
      }

      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch =
          product.name.toLowerCase().includes(searchLower) ||
          product.summary.toLowerCase().includes(searchLower) ||
          product.features.some((feature) => feature.toLowerCase().includes(searchLower)) ||
          product.badges?.some((badge) => badge.toLowerCase().includes(searchLower))

        if (!matchesSearch) return false
      }

      // Badge filter
      if (filters.badges.length > 0) {
        const hasMatchingBadge = filters.badges.some((badge) => product.badges?.includes(badge))
        if (!hasMatchingBadge) return false
      }

      return true
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-[#0F1517] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E6ECEA] mb-4">Product Catalog</h1>
          <p className="text-xl text-[#9FB3A8] max-w-2xl mx-auto">
            Browse our complete collection of survival gear, EDC essentials, and outdoor equipment
          </p>
        </div>

        {/* Filters */}
        <FilterBar onFilterChange={setFilters} availableBadges={availableBadges} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-[#9FB3A8]">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-[#9FB3A8] mb-4">No products found</p>
            <p className="text-[#9FB3A8]">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  )
}
