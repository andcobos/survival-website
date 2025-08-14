import type { Product, ProductCategory } from "./types"

export const categories: ProductCategory[] = [
  { id: "fire", name: "Fire Starters", description: "Essential fire-making tools and equipment" },
  { id: "shovels", name: "Shovels & Tools", description: "Digging and utility tools for survival" },
  { id: "knives", name: "Knives", description: "Fixed blade and folding knives for all purposes" },
  { id: "first-aid", name: "First Aid", description: "Medical supplies and emergency care" },
  { id: "rifles", name: "Rifles", description: "Hunting and tactical rifles overview" },
  { id: "flashlights", name: "Flashlights", description: "Tactical and everyday lighting solutions" },
  { id: "multitools", name: "Multitools", description: "Versatile tools for any situation" },
  { id: "edc", name: "EDC Essentials", description: "Everyday carry items and accessories" },
  { id: "backpacks", name: "Backpacks", description: "Tactical and hiking backpacks" },
  { id: "apparel", name: "Apparel", description: "Tactical and outdoor clothing" },
]

export const products: Product[] = [
  // Fire Starters
  {
    slug: "fire-starter",
    name: "Fire Starter",
    category: "fire",
    summary: "Reliable ferrocerium rod with steel striker for all-weather fire starting",
    features: ["Indoor & Outdoor Flames", "60 firestarters", "Up to 10 minutes", "Compact design"],
    badges: ["Organic", "Natural", "Non Toxic"],
    image: "/products/fire/firestarters.jpg",
    specs: {
      Length: "2 inches",
      Width: "0.8 inches",
      Brand: "GEROSSI",
      Material: "Wood",
    },
    externalUrl: "https://a.co/d/alWNp3z",
  },
  {
    slug: "waterproof-matches",
    name: "Waterproof Storm Matches",
    category: "fire",
    summary: "NATO-approved waterproof matches that burn in extreme conditions",
    features: ["Burns underwater", "15-second burn time", "Windproof flame", "Strike-anywhere tip"],
    badges: ["Waterproof", "NATO-Spec"],
    image: "/products/fire/sotrmproof_matches.jpg",
    specs: {
      Count: "25 matches",
      "Burn Time": "15 seconds",
      Temperature: "1400°F",
      Container: "Waterproof case",
    },
    externalUrl: "https://a.co/d/bmsBR6R",
  },
  {
    slug: "fire-steel-magnesium",
    name: "Traditional Fire Steel Magensium",
    category: "fire",
    summary: "Classic flint and steel fire starting method with char cloth",
    features: ["Traditional method", "Includes ruler and map scale", "Easy to use", "Bottle opener", "Waterproof"],
    badges: ["Traditional", "Firestarter"],
    image: "/products/fire/fire-steel.jpg",
    specs: {
      "Length": "11 inches",
      "Flint Size": "7.5 inches",
    },
    externalUrl: "https://a.co/d/3coHIcd",
  },

  // Knives
  {
    slug: "buck-knives-285-bantam",
    name: "Buck Knives 285 Bantam Folding Knife",
    category: "knives",
    summary: "Razor sharp & lightweight - 3-1/8 drop point 420HC steel blade delivers excellent strength, edge retention, and corrosion resistance.",
    features: ["Buck Knives", "Locking Blades", "Everyday Carry"],
    badges: ["Pocket Knife", "Forever Warranty", "Lightweight"],
    image: "/products/knives/buck-knife2.jpg",
    gallery: ["/products/knives/buck-knife.jpg"],
    specs: {
      "Blade Length": "3.1 inches",
      "Overall Length": "8 inches",
      Steel: "420 HC Stainless",
      Handle: "Removable",
      Weight: "2.4 oz",
    },
    externalUrl: "https://a.co/d/3C04toW",
  },
  {
    slug: "cat-tactical-knife",
    name: "Cat Folding Knife",
    category: "knives",
    summary: "Caterpillar - 6-1/4 Folding Pocket Knife W/Bottle Open, Hand Tools, Knives/Blades - No Utility, Knives - Folding (980298)",
    features: ["Drop Point", "Stainless Steel", "Pocket clip", "Bottle Opener"],
    badges: ["Tactical", "Stainless Steel"],
    image: "/products/knives/catknife.jpg",
    specs: {
      "Blade Length": "2-5/8 inches",
      "Closed Length": "43-1/2 inches",
      Brand: "Cat",
      Handle: "G10",
      Weight: "	0.17 Pounds",
    },
    externalUrl: "https://a.co/d/fftPy6T",
  },

  // Flashlights
  {
    slug: "lhknl-rechargeable-headlamp",
    name: "LHKNL Rechargeable LED Headlamp",
    category: "flashlights",
    summary: "Ultra-light rechargeable LED headlamp with motion sensor, 8 lighting modes, and 60° adjustable pivot, perfect for outdoor and indoor use.",
    features: [
      "Long press",
      "Motion sensor",
      "8 lighting modes",
      "IPX4 water resistance"
    ],
    badges: ["Rechargeable", "Ultra-Light", "Water-Resistant"],
    image: "/products/flashlights/headlamp-flashlight.jpg",
    specs: {
      Output: "2X brighter lumens",
      Battery: "1500mAh Lithium-Ion rechargeable",
      Runtime: "4 to 10 hours",
      Length: "Adjustable elastic headband, 60° pivot head",
      Weight: "1.87 oz",
      Material: "Anodized shell"
    },
    externalUrl: "https://a.co/d/8iy8BBz"
  },
{
  slug: "ultrafire-keychain-flashlight",
  name: "ULTRAFIRE Keychain Flashlight",
  category: "flashlights",
  summary: "Ultra-compact 1000 lumen rechargeable flashlight with adjustable focus, magnetic tail, and clip for versatile everyday carry.",
  features: [
    "1000 lumen",
    "Adjustable focus",
    "4 lighting modes ",
    "Magnetic tail and clip"
  ],
  badges: ["Rechargeable", "Adjustable Focus", "Water-Resistant"],
  image: "/products/flashlights/ultrafire-flashlight.jpg",
  specs: {
    Output: "1000 lumens",
    Battery: "Built-in rechargeable Li-ion",
    Runtime: "Varies by mode",
    Weight: "1 oz",
    Material: "Aluminum",
    "Water Rating": "Water-resistant with USB cover"
  },
  externalUrl: "https://a.co/d/8n058dc"
}
,

  // Multitools
  {
    slug: "premium-multitool",
    name: "Premium Multi-Tool",
    category: "multitools",
    summary: "17-function multi-tool with pliers, knife, and essential tools",
    features: ["17 functions", "Needle-nose pliers", "Locking blade", "Nylon sheath"],
    badges: ["17 Tools", "Locking"],
    image: "/products/premium-multitool.png",
    gallery: ["/products/premium-multitool.png"],
    specs: {
      Tools: "17 functions",
      "Blade Length": "2.9 inches",
      "Closed Length": "4.25 inches",
      Weight: "8.5 oz",
      Material: "Stainless steel",
    },
    externalUrl: "https://example.com/premium-multitool",
  },
  {
    slug: "compact-edc-tool",
    name: "Compact EDC Multi-Tool",
    category: "multitools",
    summary: "Lightweight 12-function tool perfect for everyday carry",
    features: ["12 functions", "Lightweight design", "Key ring attachment", "Compact size"],
    badges: ["Compact", "Lightweight"],
    image: "/products/compact-edc-tool.png",
    specs: {
      Tools: "12 functions",
      Length: "3.5 inches",
      Weight: "3.2 oz",
      Attachment: "Key ring",
    },
    externalUrl: "https://example.com/compact-multitool",
  },

  // First Aid
  {
    slug: "trauma-first-aid-kit",
    name: "Trauma First Aid Kit",
    category: "first-aid",
    summary: "Comprehensive trauma kit with tourniquets and emergency supplies",
    features: ["CAT tourniquet", "Israeli bandages", "Chest seals", "Emergency blanket"],
    badges: ["Trauma", "Professional"],
    image: "/products/trauma-first-aid-kit.png",
    specs: {
      Items: "45 pieces",
      Case: "MOLLE compatible",
      Weight: "2.1 lbs",
      Dimensions: "8x6x3 inches",
    },
    externalUrl: "https://example.com/trauma-kit",
  },
  {
    slug: "wilderness-first-aid",
    name: "Wilderness First Aid Kit",
    category: "first-aid",
    summary: "Backcountry medical kit for extended outdoor adventures",
    features: ["Wilderness medications", "Splinting materials", "Water purification", "Instruction guide"],
    badges: ["Wilderness", "Extended"],
    image: "/products/wilderness-first-aid.png",
    specs: {
      Items: "78 pieces",
      Case: "Waterproof",
      Weight: "1.8 lbs",
      Coverage: "4 people, 14 days",
    },
    externalUrl: "https://example.com/wilderness-kit",
  },

  // EDC
  {
    slug: "paracord-bracelet",
    name: "Tactical Paracord Bracelet",
    category: "edc",
    summary: "550 paracord bracelet with fire starter and whistle",
    features: ["550 paracord", "Built-in fire starter", "Emergency whistle", "Quick release"],
    badges: ["550 Cord", "Multi-Function"],
    image: "/products/paracord-bracelet.png",
    specs: {
      "Cord Length": "12 feet",
      Strength: "550 lbs",
      Size: "Adjustable",
      Color: "OD Green",
    },
    externalUrl: "https://example.com/paracord-bracelet",
  },
  {
    slug: "edc-pen-light",
    name: "EDC Pen Light",
    category: "edc",
    summary: "Compact pen-style flashlight for everyday carry",
    features: ["Pen clip design", "LED bulb", "AAA battery", "Pocket sized"],
    badges: ["Compact", "EDC"],
    image: "/products/edc-pen-light.png",
    specs: {
      Output: "120 lumens",
      Battery: "AAA",
      Length: "5.5 inches",
      Weight: "1.2 oz",
    },
    externalUrl: "https://example.com/edc-pen-light",
  },

  // Backpacks
  {
    slug: "tactical-backpack-72h",
    name: "72-Hour Tactical Backpack",
    category: "backpacks",
    summary: "MOLLE-compatible tactical pack designed for 72-hour operations",
    features: ["MOLLE webbing", "Hydration compatible", "Multiple compartments", "Reinforced construction"],
    badges: ["MOLLE", "72-Hour", "Tactical"],
    image: "/products/tactical-backpack-72h.png",
    gallery: ["/products/tactical-backpack-72h.png"],
    specs: {
      Capacity: "40 liters",
      Material: "1000D Cordura",
      Weight: "3.2 lbs",
      Dimensions: "20x12x8 inches",
    },
    externalUrl: "https://example.com/tactical-backpack",
  },
  {
    slug: "hiking-daypack",
    name: "Hiking Day Pack",
    category: "backpacks",
    summary: "Lightweight daypack for hiking and outdoor adventures",
    features: ["Lightweight design", "Hydration sleeve", "Rain cover", "Ventilated back panel"],
    badges: ["Lightweight", "Hiking"],
    image: "/products/hiking-daypack.png",
    specs: {
      Capacity: "25 liters",
      Weight: "1.8 lbs",
      Material: "Ripstop nylon",
      Features: "Rain cover included",
    },
    externalUrl: "https://example.com/hiking-daypack",
  },

  // Shovels
  {
    slug: "folding-shovel",
    name: "Military Folding Shovel",
    category: "shovels",
    summary: "Compact folding shovel with pick and saw edge",
    features: ["Tri-fold design", "Pick attachment", "Saw edge", "Carrying case"],
    badges: ["Military", "Multi-Function"],
    image: "/products/folding-shovel.png",
    specs: {
      Length: "23 inches extended",
      Folded: "9 inches",
      Weight: "2.2 lbs",
      Material: "Carbon steel",
    },
    externalUrl: "https://example.com/folding-shovel",
  },

  // Rifles (Overview only)
  {
    slug: "hunting-rifle-overview",
    name: "Hunting Rifle Guide",
    category: "rifles",
    summary: "Comprehensive guide to selecting hunting rifles for different game",
    features: ["Caliber selection", "Action types", "Scope mounting", "Maintenance tips"],
    badges: ["Educational", "Guide"],
    image: "/products/hunting-rifle-overview.png",
    specs: {
      Content: "Educational guide",
      Topics: "Rifle selection",
      Format: "Digital guide",
    },
    externalUrl: "https://example.com/rifle-guide",
  },

  // Apparel
  {
    slug: "tactical-pants",
    name: "Tactical Cargo Pants",
    category: "apparel",
    summary: "Ripstop tactical pants with reinforced knees and multiple pockets",
    features: ["Ripstop fabric", "Reinforced knees", "Cargo pockets", "Belt loops"],
    badges: ["Ripstop", "Reinforced"],
    image: "/products/tactical-pants.png",
    specs: {
      Material: "65/35 Poly-Cotton",
      Pockets: "8 total",
      Colors: "OD Green, Khaki, Black",
      Sizes: "28-44 waist",
    },
    externalUrl: "https://example.com/tactical-pants",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((product) => product.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.summary.toLowerCase().includes(lowercaseQuery) ||
      product.features.some((feature) => feature.toLowerCase().includes(lowercaseQuery)) ||
      (product.badges && product.badges.some((badge) => badge.toLowerCase().includes(lowercaseQuery))),
  )
}
