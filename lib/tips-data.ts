export interface TipGuide {
  slug: string
  title: string
  category: "shelter" | "fire" | "water" | "navigation" | "first-aid" | "food" | "gear"
  summary: string
  readTime: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  image: string
  content: {
    introduction: string
    sections: {
      title: string
      content: string
      checklist?: string[]
      tips?: string[]
    }[]
  }
}

export const tipGuides: TipGuide[] = [
  {
    slug: "fire-starting-basics",
    title: "Fire Starting Basics: From Spark to Flame",
    category: "fire",
    summary: "Master the fundamentals of fire starting with various methods and materials",
    readTime: "8 min read",
    difficulty: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    content: {
      introduction:
        "Fire is one of the most critical survival skills. It provides warmth, light, cooking capability, water purification, and psychological comfort. This guide covers the essential methods and materials for starting fires in various conditions.",
      sections: [
        {
          title: "The Fire Triangle",
          content:
            "Every fire needs three elements: heat, fuel, and oxygen. Understanding this triangle is crucial for both starting and maintaining fires. Remove any one element, and the fire dies.",
          tips: [
            "Heat sources include matches, lighters, ferro rods, and friction methods",
            "Fuel progresses from tinder to kindling to larger wood",
            "Oxygen flow is controlled by fire lay structure and wind direction",
          ],
        },
        {
          title: "Tinder Materials",
          content:
            "Tinder is the finest, most combustible material that catches the initial spark. Good tinder should ignite easily and burn long enough to light kindling.",
          checklist: [
            "Dry grass and leaves",
            "Birch bark",
            "Cedar bark fibers",
            "Pine needles",
            "Paper or cardboard",
            "Petroleum jelly cotton balls",
            "Char cloth",
            "Steel wool",
          ],
        },
        {
          title: "Fire Lay Structures",
          content:
            "The arrangement of your fuel determines how well your fire burns. Different structures serve different purposes.",
          tips: [
            "Teepee: Good for getting fires started quickly",
            "Log cabin: Burns steadily and creates good coals",
            "Lean-to: Works well in windy conditions",
            "Star fire: Efficient for long-term burning",
          ],
        },
      ],
    },
  },
  {
    slug: "shelter-building-guide",
    title: "Emergency Shelter Construction",
    category: "shelter",
    summary: "Build life-saving shelters using natural materials and basic tools",
    readTime: "12 min read",
    difficulty: "Intermediate",
    image: "/placeholder.svg?height=400&width=600",
    content: {
      introduction:
        "Shelter protects you from the elements and can mean the difference between life and death in survival situations. This guide covers various shelter types you can build with minimal tools.",
      sections: [
        {
          title: "Site Selection",
          content:
            "Choosing the right location is crucial for an effective shelter. Consider protection from wind, water drainage, material availability, and safety factors.",
          checklist: [
            "Avoid low areas that collect water",
            "Look for natural windbreaks",
            "Check for overhead hazards (dead branches)",
            "Ensure good drainage",
            "Consider sun exposure for warmth",
            "Stay away from game trails",
          ],
        },
        {
          title: "Debris Hut Construction",
          content:
            "The debris hut is one of the most effective emergency shelters. It uses natural insulation to trap body heat and shed water.",
          tips: [
            "Make the interior just large enough for your body",
            "Use a strong ridgepole supported at both ends",
            "Layer debris 2-3 feet thick for insulation",
            "Create a door plug to seal the entrance",
          ],
        },
        {
          title: "Lean-To Shelter",
          content:
            "A lean-to is quick to build and effective when combined with a reflector fire. It's ideal for short-term survival situations.",
          checklist: [
            "Find or create a horizontal support beam",
            "Lean poles against the beam at 45-degree angle",
            "Layer bark, branches, or debris for roofing",
            "Build a reflector wall opposite the opening",
            "Position fire between shelter and reflector",
          ],
        },
      ],
    },
  },
  {
    slug: "water-purification-methods",
    title: "Water Purification in the Wild",
    category: "water",
    summary: "Safe methods to purify water from natural sources",
    readTime: "10 min read",
    difficulty: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    content: {
      introduction:
        "Clean water is essential for survival, but natural water sources often contain harmful bacteria, viruses, and parasites. This guide covers multiple purification methods to ensure safe drinking water.",
      sections: [
        {
          title: "Boiling Water",
          content:
            "Boiling is the most reliable method to kill pathogens in water. It requires only a heat source and container.",
          tips: [
            "Bring water to a rolling boil for at least 1 minute",
            "At altitudes above 6,500 feet, boil for 3 minutes",
            "Let water cool before drinking",
            "Improve taste by pouring between containers to add oxygen",
          ],
        },
        {
          title: "Filtration Methods",
          content:
            "Filtration removes particles and some pathogens but should be combined with purification for safety.",
          checklist: [
            "Cloth or bandana for basic filtering",
            "Sand and charcoal filter system",
            "Commercial water filters",
            "Improvised bottle filter with layers",
            "Solar disinfection (SODIS) method",
          ],
        },
        {
          title: "Chemical Purification",
          content:
            "Water purification tablets and drops are lightweight options for treating water when boiling isn't possible.",
          tips: [
            "Follow manufacturer's instructions for dosage",
            "Wait the full treatment time before drinking",
            "Pre-filter cloudy water for better effectiveness",
            "Consider taste and potential side effects",
          ],
        },
      ],
    },
  },
  {
    slug: "navigation-without-compass",
    title: "Natural Navigation Techniques",
    category: "navigation",
    summary: "Find your way using natural signs and celestial navigation",
    readTime: "15 min read",
    difficulty: "Advanced",
    image: "/placeholder.svg?height=400&width=600",
    content: {
      introduction:
        "When GPS fails and compasses break, natural navigation becomes essential. Learn to read the signs that nature provides to find your direction and location.",
      sections: [
        {
          title: "Solar Navigation",
          content:
            "The sun is your most reliable directional indicator during the day. Understanding its movement helps determine cardinal directions.",
          tips: [
            "Sun rises in the east, sets in the west",
            "At solar noon, sun is due south (Northern Hemisphere)",
            "Use shadow stick method for accurate direction",
            "Watch for sun's arc across the sky",
          ],
        },
        {
          title: "Star Navigation",
          content:
            "Stars provide excellent navigation references at night, with Polaris being the most important for northern navigation.",
          checklist: [
            "Locate the Big Dipper constellation",
            "Use pointer stars to find Polaris (North Star)",
            "Polaris indicates true north",
            "Learn major constellations for your region",
            "Use star movement to track time",
          ],
        },
        {
          title: "Natural Indicators",
          content: "Nature provides many subtle clues about direction if you know what to look for.",
          tips: [
            "Moss often grows on north side of trees (not always reliable)",
            "Snow melts faster on south-facing slopes",
            "Tree branches are fuller on south side",
            "Ant hills often have gentler slopes facing south",
          ],
        },
      ],
    },
  },
  {
    slug: "wilderness-first-aid",
    title: "Wilderness First Aid Essentials",
    category: "first-aid",
    summary: "Critical medical skills for remote locations",
    readTime: "20 min read",
    difficulty: "Intermediate",
    image: "/placeholder.svg?height=400&width=600",
    content: {
      introduction:
        "Medical emergencies in remote locations require different approaches than urban first aid. Distance from help, limited supplies, and environmental factors all affect treatment decisions.",
      sections: [
        {
          title: "Assessment and Priorities",
          content:
            "In wilderness settings, proper assessment and prioritization can mean the difference between life and death.",
          checklist: [
            "Check for immediate life threats (ABC: Airway, Breathing, Circulation)",
            "Control severe bleeding",
            "Treat for shock",
            "Assess spinal injuries carefully",
            "Monitor vital signs regularly",
            "Plan for evacuation if needed",
          ],
        },
        {
          title: "Wound Care",
          content:
            "Proper wound cleaning and dressing prevents infection, which can be life-threatening in remote areas.",
          tips: [
            "Clean hands before treating wounds",
            "Irrigate wounds with clean water",
            "Remove visible debris carefully",
            "Apply antibiotic ointment if available",
            "Dress wounds to keep clean and dry",
            "Monitor for signs of infection",
          ],
        },
        {
          title: "Environmental Injuries",
          content:
            "Wilderness environments present unique injury risks that require specific knowledge to treat effectively.",
          checklist: [
            "Hypothermia recognition and treatment",
            "Heat exhaustion and heat stroke",
            "Altitude sickness symptoms",
            "Snake bite protocols",
            "Insect sting reactions",
            "Plant poisoning identification",
          ],
        },
      ],
    },
  },
  {
    slug: "gear-maintenance-field",
    title: "Field Gear Maintenance",
    category: "gear",
    summary: "Keep your equipment functional in harsh conditions",
    readTime: "12 min read",
    difficulty: "Intermediate",
    image: "/placeholder.svg?height=400&width=600",
    content: {
      introduction:
        "Proper gear maintenance in the field can extend equipment life and prevent failures when you need your tools most. This guide covers essential maintenance techniques for survival gear.",
      sections: [
        {
          title: "Knife Care",
          content:
            "A sharp, well-maintained knife is crucial for survival tasks. Proper care ensures reliability and safety.",
          tips: [
            "Keep blades clean and dry to prevent rust",
            "Sharpen regularly using stones or field sharpeners",
            "Oil carbon steel blades to prevent corrosion",
            "Check handle tightness and repair loose parts",
          ],
        },
        {
          title: "Fire Starting Equipment",
          content: "Fire starting tools require regular maintenance to ensure they work when needed most.",
          checklist: [
            "Keep ferro rods clean and dry",
            "Replace worn strikers",
            "Waterproof matches and lighters",
            "Maintain tinder supplies",
            "Test equipment regularly",
          ],
        },
        {
          title: "Clothing and Fabric Gear",
          content:
            "Proper care of clothing and fabric items maintains their protective properties and extends their life.",
          tips: [
            "Repair tears immediately to prevent spreading",
            "Clean gear regularly to maintain breathability",
            "Re-waterproof items as needed",
            "Store properly to prevent mold and mildew",
          ],
        },
      ],
    },
  },
]

export function getTipBySlug(slug: string): TipGuide | undefined {
  return tipGuides.find((tip) => tip.slug === slug)
}

export function getTipsByCategory(category: TipGuide["category"]): TipGuide[] {
  return tipGuides.filter((tip) => tip.category === category)
}
