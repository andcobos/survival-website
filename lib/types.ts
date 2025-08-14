export type Product = {
  slug: string
  name: string
  category:
    | "fire"
    | "shovels"
    | "knives"
    | "first-aid"
    | "rifles"
    | "flashlights"
    | "multitools"
    | "edc"
    | "backpacks"
    | "apparel"
  summary: string
  features: string[]
  badges?: string[]
  image: string
  gallery?: string[]
  specs?: Record<string, string | number>
  externalUrl?: string
}

export type ProductCategory = {
  id: Product["category"]
  name: string
  description: string
}
