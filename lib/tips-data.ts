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
    slug: "magnesium-fire-starting",
    title: "How to Start a Fire with Magnesium: Step-by-Step Guide",
    category: "fire",
    summary: "Learn to reliably start a fire using a magnesium fire starter, even in harsh survival conditions.",
    readTime: "4 min read",
    difficulty: "Beginner",
    image: "/tips/magnesium-firestarter.jpg",
    content: {
      introduction:
        "A magnesium fire starter is a reliable tool for survival situations because it works even when wet, unlike matches or lighters. The process involves shaving magnesium for a hot, sustained flame and striking sparks with a ferrocerium rod. Follow these steps to go from sparks to flame.",
      sections: [
        {
          title: "Tools You Need",
          content:
            "Before you begin, gather all the essentials so you don’t waste time once you strike sparks.",
          checklist: [
            "Magnesium block with attached ferro rod",
            "Sharp knife or scraper",
            "Dry tinder (cotton balls, dry grass, bark shavings, or char cloth)",
            "Kindling (small twigs, pencil-thin sticks)",
            "Fuel wood (larger branches or logs)",
          ],
        },
        {
          title: "Pro Tips",
          content:
            "Small adjustments can make the difference between frustration and success:",
          tips: [
            "Create a base of bark or flat wood if the ground is damp.",
            "Magnesium burns very hot (around 5,400°F / 3,000°C) but fast — so have tinder and kindling ready before striking.",
            "Shave fine magnesium curls, not big chunks, for easier ignition.",
            "Block the wind with your body or a rock to keep sparks directed at the tinder pile.",
            "Practice before you need it — magnesium fire starting takes a bit of technique.",
          ],
        },
        {
          title: "Safety Reminder",
          content:
            "Magnesium burns extremely hot and bright. Avoid inhaling fumes, and never ignite magnesium near flammable liquids or inside shelters.",
        },
      ],
    },
  },
    {
    slug: "shelter-building-guide",
    title: "Emergency Shelter Construction",
    category: "shelter",
    summary: "Build life-saving shelters using natural materials and basic tools",
    readTime: "5 min read",
    difficulty: "Intermediate",
    image: "/tips/emergencyshelter.png",
    content: {
      introduction:
        "Shelter is one of the top survival priorities — protecting you from cold, wind, rain, and sun can make the difference between life and death. Even with minimal tools, you can construct effective shelters using natural materials. This guide introduces proven shelter types adapted from survival experts and field manuals.",
      sections: [
        {
          title: "Site Selection",
          content:
            "A well-chosen site is often more important than the shelter itself. Good placement reduces exposure and risk while making construction easier.",
          checklist: [
            "Avoid depressions or gullies where water collects",
            "Choose ground with natural drainage (slight slope is best)",
            "Look for natural windbreaks like boulders or thick brush",
            "Check overhead for hazards such as dead branches ('widowmakers')",
            "Consider sun exposure — south-facing slopes are warmer in cold climates",
            "Stay clear of insect nests, animal burrows, and game trails",
          ],
        },
        {
          title: "Debris Hut Construction",
          content:
            "The debris hut is considered one of the best all-around emergency shelters because it provides insulation and weather resistance with only natural materials.",
          tips: [
            "Start with a sturdy ridgepole (a long branch or log) supported on one end by a forked stick or stump",
            "Lean strong sticks along both sides of the ridgepole to form a frame",
            "Pile leaves, grass, pine needles, or bark 2–3 feet thick to create insulation that traps body heat",
            "Make the inside only large enough for you to crawl in — smaller space means less heat loss",
            "Build a thick door plug of debris to block the entrance and retain warmth",
          ],
        },
        {
          title: "Lean-To Shelter",
          content:
            "A lean-to is one of the quickest shelters to construct and works well with fire. When paired with a reflector wall, it provides both wind protection and radiant heat.",
          checklist: [
            "Secure a horizontal support beam between two trees or with forked uprights",
            "Lean poles or large branches against the beam at roughly a 45° angle",
            "Cover the roof with bark slabs, evergreen boughs, or layered debris to shed rain",
            "Stack logs or build a wall of rocks opposite the open side to reflect heat",
            "Position a fire between the lean-to opening and the reflector wall for maximum warmth",
          ],
        },
        {
          title: "Insulation and Comfort",
          content:
            "No shelter is complete without ground insulation. Contact with cold, wet soil will drain body heat quickly.",
          tips: [
            "Gather pine boughs, dry grass, or leaves to create a mattress 6–8 inches thick",
            "Use bark or branches as a moisture barrier beneath your bedding",
            "Keep your sleeping area slightly elevated if possible",
            "Always replenish insulation daily — it compresses overnight",
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
