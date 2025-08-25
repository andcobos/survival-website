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
    image: "/products/fire/stormproofmatches.png",
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
    image: "/products/fire/fire-steel.png",
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
    summary: "Caterpillar Folding Pocket Knife W/Bottle Open, Hand Tools, Knives/Blades ",
    features: ["Drop Point", "Stainless Steel", "Pocket clip", "Bottle Opener"],
    badges: ["Tactical", "Stainless Steel"],
    image: "/products/knives/catknife.png",
    specs: {
      "Blade Length": "2-5/8 inches",
      "Closed Length": "43-1/2 inches",
      Brand: "Cat",
      Handle: "G10",
      Weight: "	0.17 Pounds",
    },
    externalUrl: "https://a.co/d/fftPy6T",
  },
  {
    slug: "tactical-camping-axe",
    name: "Hitdudu Tactical Camping Axe",
    category: "knives",
    summary: "15.3-inch survival hatchet with spike and sheath for outdoor camping, hiking, and tactical use.",
    features: [
      "Axe edge",
      "Fiberglass-reinforced nylon handle ",
      "Stainless steel head",
      "Durable nylon sheath for blade protection"
    ],
    badges: ["Tactical", "Survival", "Multi-Function"],
    image: "/products/knives/axe.jpg",
    specs: {
      "Blade Length": "4.7 inches",
      "Overall Length": "15.3 inches",
      Weight: "1.59 lbs",
      Material: "Stainless steel head, fiberglass-reinforced handle",
      Brand: "Hitdudu"
    },
    externalUrl: "https://a.co/d/dtcfM3h"
  },
  {
    slug: "dispatch-fixed-blade-knife",
    name: "Dispatch Fixed Blade Hunting Knife",
    category: "knives",
    summary: "12-inch tactical hunting knife.",
    features: [
      "Stainless steel blade",
      "Ergonomic non-slip rubber handle",
      "Heavy-duty sheath with belt clip"
    ],
    badges: ["Tactical", "Survival", "Fixed Blade"],
    image: "/products/knives/blade-knife.jpg",
    specs: {
      "Blade Length": "7.1 inches",
      "Overall Length": "12 inches",
      "Blade Thickness": "0.12 inches",
      Weight: "14.4 oz",
      Material: "High carbon stainless steel blade",
      Brand: "Dispatch"
    },
    externalUrl: "https://a.co/d/adMwYl8"
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
},

{
    slug: "vtiger-t2a-compact-edc-flashlight",
    name: "VTIGER T2A Compact EDC Flashlight",
    category: "flashlights",
    summary: "Pen light USB-C compatible with AA, water resistant.",
    features: [
      "Rechargeable battery USB-C 1800mAh",
      "Comptatible with AA batteries"
    ],
    badges: ["Rechargeable", "Tactic", "Magnetic"],
    image: "/products/flashlights/penlight.jpg",
    specs: {
      Output: "1500 lumen",
      Alcance: "200 m / 656 ft",
      Battery: "Recargable USB-C 1800mAh",
      Runtime: "Up to 60 hours",
      Peso: "Lightweight"
    },
    externalUrl: "https://a.co/d/5tkz7Eq"
  },

  // Multitools
  {
    slug: "gerber-suspension-nxt",
    name: "Gerber Gear Suspension-NXT 15-in-1 Multi-Tool",
    category: "multitools",
    summary: "Compact stainless steel 15-in-1 multi-tool.",
    features: [
      "15 functions",
      "Durable stainless steel",
      "Butterfly opening",
      "Pocket clip and lanyard point for easy carry"
    ],
    badges: ["15 Tools", "Locking", "Stainless Steel", "Pocket Clip"],
    image: "/products/multitools/gerber.jpg",
    specs: {
      Tools: "15 functions",
      "Blade Length": "2.25 inches",
      "Closed Length": "4.25 inches",
      "Open Length": "6.5 inches",
      Weight: "6.4 oz",
      Material: "Stainless steel",
      Brand: "Gerber"
    },
    externalUrl: "https://a.co/d/3KOmfx6"
  },
  {
    slug: "funbro-carabiner-multitool",
    name: "FUNBRO Carabiner Multitool with Pocket Knife",
    category: "multitools",
    summary: "6-in-1 stainless steel EDC carabiner for camping, hiking, and everyday carry.",
    features: [
      "6-in-1 functionality",
      "Durable stainless steel",
      "Compact and portable design",
      "Ideal for outdoor activities and as a gift for men"
    ],
    badges: ["6-in-1", "EDC", "Stainless Steel"],
    image: "/products/multitools/carabiner.png",
    specs: {
      Dimensions: "4.5 x 2.2 inches",
      Weight: "3.8 oz",
      Material: "Stainless steel",
      Color: "Black",
      Brand: "FUNBRO"
    },
    externalUrl: "https://a.co/d/8raOzPI"
  },

  // First Aid
  {
    slug: "430pc-first-aid-kit",
    name: "430 Piece First Aid Kit",
    category: "first-aid",
    summary: "Premium waterproof trauma medical kit with 430 pieces for home, office, car, travel, and outdoor emergencies.",
    features: [
      "430 professional-grade medical items",
      "Waterproof",
      "Well-organized interior",
      "Reflective stripst",
      "MOLLE system",
    ],
    badges: ["Waterproof", "Trauma Ready", "Portable"],
    image: "/products/firstaid/firstaidkit.jpg",
    specs: {
      Pieces: "430",
      Brand: "THRIAID",
      Color: "Red",
      Special_Feature: "Waterproof",
      Material: "Premium polyester fiber fabric",
      Recommended_Uses: "Trauma, emergency, outdoor activities"
    },
    externalUrl: "https://a.co/d/0aVP9H0"
  },
  {
    slug: "everlit-250pc-survival-kit",
    name: "EVERLIT 250 Piece Survival First Aid Kit",
    category: "first-aid",
    summary: "Compact and portable IFAK EMT molle pouch with 250 first aid and survival items, designed for camping, hunting, hiking, and emergency preparedness.",
    features: [
      "Designed by army veterans",
      "Durable 1000D water-resistant",
      "Survival tools",
      "Three large compartments",
      "Molle System"
    ],
    badges: ["Survival Ready", "Portable", "MOLLE Compatible"],
    image: "/products/firstaid/survival-kit.jpg",
    specs: {
      Pieces: "250",
      Brand: "EVERLIT",
      Color: "Red",
      Special_Feature: "Compact, Mountable, Portable",
      Material: "1000D water-resistant nylon",
      Dimensions: "8 x 6.5 x 5 inches",
      Weight: "2 lbs",
      Recommended_Uses: "Camping, hunting, hiking"
    },
    externalUrl: "https://a.co/d/0cs6GlN"
  },

  // EDC
  {
    slug: "paracord-bracelet-survival-kit",
    name: "Paracord Bracelet Survival Kit",
    category: "edc",
    summary: "5-in-1 paracord bracelet",
    features: [
      "Compass",
      "Whistle",
      "Fire Starter",
      "10 feet of paracord"
    ],
    badges: ["5-en-1", "Paracord 550", "Supervivencia"],
    image: "/products/edc/paracord-bracelet.jpg",
    specs: {
      Material: "Paracord 550",
      Longitud_Paracord: "10 feet",
      Ajuste_Muñeca: "7.5\" - 9.5\"",
      Herramientas: "Compass, whistle, firestarter, paracord",
      Peso: "Lightweight",
      Color: "Black",
      Uso: "Survival, Hiking, Fishing, Hunting, Camping"
    },
    externalUrl: "https://a.co/d/a5wF2iI"
  },
  {
    slug: "sabre-advanced-pepper-spray",
    name: "SABRE Advanced 3-in-1 Pepper Spray",
    category: "edc",
    summary: "Compact maximum-strength pepper spray.",
    features: [
      "Maximum strength pepper spray",
      "Compact design",
      "Up to 35 bursts with 13-second",
      "Effective range of 10 feet"
    ],
    badges: ["3-in-1 Formula", "Law Enforcement Trusted", "Belt Clip"],
    image: "/products/edc/pepper-spray.jpg",
    specs: {
      Formula: "Pepper spray",
      Spray_Bursts: "35",
      Spray_Time: "13 seconds",
      Range: "10 feet",
      Capacity: "0.67 fl oz",
      Dimensions: "1 x 4 inches",
      Weight: "35 grams",
      Brand: "SABRE",
      Origin: "Made in USA"
    },
    externalUrl: "https://a.co/d/dhOC7ig"
  },
  {
    slug: "sodaride-window-breaker-keychain",
    name: "SodaRide 2-in-1 Window Breaker & Seatbelt Cutter with Flashlight",
    category: "edc",
    summary: "Durable tungsten steel car escape tool with seatbelt cutter, dual-mode LED flashlight, and keychain portability.",
    features: [
      "Tungsten steel drill",
      "Built-in seatbelt cutter",
      "Dual flashlight modes",
      "USB Type-C rechargeable battery",
      "Compact, portable, and ergonomic",
      "Durable and drop-proof"
    ],
    badges: ["2-in-1 Tool", "Tungsten Steel", "USB-C Rechargeable", "Keychain Ready"],
    image: "/products/edc/windowbreaker.jpg",
    specs: {
      Material: "Alloy steel, glass",
      Light_Modes: "Strobe & Full Light",
      Strobe_Runtime: "6 hours",
      FullLight_Runtime: "4 hours",
      Charging_Port: "USB Type-C",
      Resistance: "Up to 1000°C / 1832°F",
      Weight: "Lightweight keychain",
      Color: "Green",
      Brand: "SodaRide",
      Special_Feature: "Durable, portable, underwater capable"
    },
    externalUrl: "https://a.co/d/eYSoKdhk"
  },


  // Backpacks
  {
    slug: "military-tactical-backpack-50l",
    name: "50L Military Tactical Backpack",
    category: "backpacks",
    summary: "Heavy-duty MOLLE-compatible tactical backpack with 50L capacity",
    features: [
      "50L capacity",
      "Durable water-resistant material",
      "MOLLE webbing",
      "Comfortable"
    ],
    badges: ["MOLLE", "Heavy-Duty", "50L Capacity"],
    image: "/products/backpacks/backpack50l.jpg",
    specs: {
      Capacity: "50 liters",
      Material: "Water-resistant",
      Weight: "Approx. 3.5 lbs",
      Dimensions: "21.6 x 12.9 x 12.6 inches",
      Color: "Black",
      Includes: "US flag patch"
    },
    externalUrl: "https://a.co/d/5tzXzxy"
  },
  {
    slug: "haomuk-tactical-sling-bag",
    name: "HAOMUK Tactical Sling Bag",
    category: "backpacks",
    summary: "Compact MOLLE-compatible sling backpack ideal for EDC.",
    features: [
      "Water-resistant and high-density",
      "Compact size ",
      "Adjustable single shoulder",
      "Multiple carrying options",
      "MOLLE webbing "
    ],
    badges: ["MOLLE", "Compact", "EDC"],
    image: "/products/backpacks/slingbag.jpg",
    specs: {
      Capacity: "15 liters",
      Material: "900D polyester",
      Weight: "Lightweight",
      Dimensions: "9.5 x 6.3 x 13.8 inches",
      Color: "Black",
      Care: "Hand wash only"
    },
    externalUrl: "https://a.co/d/gGC0k1B"
  },

  // Shovels
  {
    slug: "apidgrowth-folding-shovel",
    name: "Apidgrowth Folding Shovel",
    category: "shovels",
    summary: "Portable high carbon steel folding shovel with ergonomic handle and multi-tool functionality for camping, hiking, and emergencies.",
    features: [
      "Compact folding design for easy storage",
      "Ergonomic non-slip handle for comfort",
      "Multi-tool capabilities: dig, saw, cut",
      "Durable high carbon steel construction"
    ],
    badges: ["Portable", "Multi-Function", "Ergonomic"],
    image: "/products/shovel/folding-shovel.png",
    specs: {
      Length: "18.5 inches extended",
      Folded: "10 inches",
      Weight: "Approx. 2 lbs",
      Material: "High carbon steel"
    },
    externalUrl: "https://a.co/d/7oUboPN"
  },
  {
    slug: "fiskars-isocore-mattock",
    name: "Fiskars IsoCore Pickaxe Mattock",
    category: "shovels",
    summary: "Durable dual-head mattock for breaking hardened ground, cutting roots, and prying rocks.",
    features: [
      "Dual-head",
      "Textured, non-slip insulated handle",
      "Slip-reducing flare"
    ],
    badges: ["Shock-Absorbing", "Dual-Head", "Durable Construction"],
    image: "/products/shovel/mattock.jpg",
    specs: {
      Length: "14.13 inches",
      Width: "9.81 inches",
      Weight: "1.5 lbs",
      Material: "Forged steel head, fiberglass + steel handle",
      Color: "Orange/Black",
      Brand: "Fiskars",
      Head_Type: "Mattock"
    },
    externalUrl: "https://a.co/d/ca60tF2"
  },

  // Rifles
  {
    slug: "gamo-varmint-air-rifle",
    name: "Gamo Varmint .177 Cal Air Rifle",
    category: "rifles",
    summary: "Lightweight .177 caliber spring-piston air rifle with 4x32 scope, delivering up to 1,250 fps velocity.",
    features: [
      ".177 caliber single-shot air rifle",
      "4x32 scope",
      "Steel barrel with fluted polymer jacket",
    ],
    badges: ["High Velocity", "Spring-Piston", "Scoped"],
    image: "/products/guns/varmint.jpg",
    specs: {
      Caliber: ".177",
      Velocity: "1,250 fps",
      Magazine_Capacity: "1 round",
      Barrel_Material: "Alloy steel",
      Frame_Material: "Plastic",
      Scope: "4x32 with mounts",
      Dimensions: "43.3 x 3 x 6.2 inches",
      Weight: "5.5 lbs",
    },
    externalUrl: "https://a.co/d/7vezW2N"
  },


  // Apparel
  {
    slug: "cqr-tactical-pants",
    name: "CQR Men's Tactical Pants",
    category: "apparel",
    summary: "Lightweight, water-resistant cargo pants ",
    features: [
      "Durable water",
      "Lightweight",
      "Elastic side waistband",
      "Multiple cargo pockets"
    ],
    badges: ["Ripstop", "Water-Resistant", "Cargo Pockets"],
    image: "/products/apparel/cargo.jpg",
    specs: {
      Material: "65% Polyester, 35% Cotton",
      Waist: "Elastic side waistband",
      Pockets: "Multi-purpose cargo pockets",
    },
    externalUrl: "https://a.co/d/0wl1JZ1"
  },
  {
  slug: "achiou-cooling-neck-gaiter",
  name: "Achiou Cooling Neck Gaiter",
  category: "apparel",
  summary: "Neck gaiter with UV protection",
  features: [
    "Soft",
    "UV protection",
    "Quick-drying",
    "One size fits most",
    "Multiple uses"
  ],
  badges: ["UV Protection", "Breathable", "Versatile"],
  image: "/products/apparel/gaiter.jpg",
  specs: {
    Material: "Elastic soft breathable fabric",
    Size: "9.4 x 15.3 inches",
    Gender: "Unisex"
  },
  externalUrl: "https://a.co/d/gvihN4T"
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
