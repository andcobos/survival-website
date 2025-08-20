export interface TipGuide {
  slug: string
  title: string
  category: "shelter" | "fire" | "water" | "knots" | "first-aid" | "food" | "gear"
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
    slug: "rappel-knot-escape",
    title: "Rappel Escape Knot (Barrel Knot) with 10 mm Static Rope",
    category: "knots",
    summary: "Learn to tie the barrel knot on a 10 mm low-stretch rope for safe rappel escape setups.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    image: "/tips/knot.jpg",  
    content: {
      introduction:
        "In emergency or solo rappel scenarios, being able to escape your rappel safely is vital. A **barrel knot** (also known as a triple overhand stopper) tied on a **10 mm static or low-elongation rope** acts as a friction knot, self-tightening around an anchor and making escape safer and more manageable.",
      sections: [
        {
          title: "Rope Specifications",
          content:
            "A 10 mm static or low-stretch rope is ideal for rappel escape setups. It offers excellent strength—around **27 kN** of breaking strength—and minimal stretch, making it predictable under load and stable for knots :contentReference[oaicite:2]{index=2}.",
        },
        {
          title: "Barrel Knot Overview",
          content:
            "The barrel knot (triple overhand stopper) is preferred over loops like bowlines because it tightens under load and resists slipping—perfect for anchoring in rappelling scenarios :contentReference[oaicite:3]{index=3}.",
          tips: [
            "1. Place the rope around your anchor (tree, ring, rappel station).",
            "2. Wrap the working end around the standing part to form an X over your palm or anchor point.",
            "3. Make multiple wraps—at least two loops around the line.",
            "4. Feed the working end under all the loops to complete the knot.",
            "5. Pull tight ('dress the knot') and leave a tail of ~18 inches (≈ 45 cm) to prevent slippage :contentReference[oaicite:4]{index=4}.",
            "6. (Optional) Backup with a simple overhand or figure-eight stopper knot for added safety.",
          ],
        },
        {
          title: "When to Use It",
          content:
            "Use this knot when setting up a single-line rappel and you need to escape from the anchor later—especially in self-rescue or when rappelling alone from fixed anchors :contentReference[oaicite:5]{index=5}.",
          tips: [
            "Ensure your anchor (tree, bolt, ring) is solid and of adequate diameter—static ropes should be wrapped around anchors at least 8× the rope diameter if using a friction hitch :contentReference[oaicite:6]{index=6}.",
            "Practice tying and escaping the knot on the ground before using it in a real scenario.",
            "Inspect the tail length before committing to any rappel."
          ]
        }
      ]
    }
  },
  {
    slug: "water-survival",
    title: "Water Survival Essentials",
    category: "water",
    summary: "Techniques to locate, collect, and purify water in survival situations",
    readTime: "4 min read",
    difficulty: "Intermediate",
    image: "/tips/water.jpeg",
    content: {
      introduction:
        "In nature, water is the number one survival priority. The human body can only survive 2–4 days without water, depending on temperature, physical activity, and overall health. However, many natural water sources are contaminated with bacteria, viruses, or parasites, making it essential to know how to locate and purify water safely.",
      sections: [
        {
          title: "Locating Water",
          content:
            "Water can be found in rivers, streams, lakes, or even from soil moisture and plants. Observing your environment is key.",
          tips: [
            "Follow green vegetation and animal tracks: they often lead to water sources",
            "Look for ground depressions after rainfall: they can temporarily store water",
            "In coastal areas, dig a small well a few meters from the shore to get less salty water",
            "Collect rainwater using tarps, large leaves, or improvised containers",
          ],
        },
        {
          title: "Purification Methods",
          content:
            "Drinking untreated water can cause diseases such as giardiasis, dysentery, or cholera. Always purify water before drinking.",
          checklist: [
            "Boiling: at least 1 minute, or 3 minutes at altitudes above 2000 m",
            "Filtration: use commercial filters or improvise with sand, charcoal, and cloth",
            "Chemical: iodine or chlorine tablets, following dosage instructions",
            "UV: portable UV devices or solar disinfection (SODIS method using clear plastic bottles for 6 hours in direct sunlight)",
          ],
        },
        {
          title: "Water Conservation",
          content:
            "In extreme conditions, every drop counts. Efficient water management can make the difference between life and death.",
          tips: [
            "Avoid direct sunlight exposure and reduce physical activity during peak heat hours",
            "Drink in small, frequent sips instead of large amounts all at once",
            "Do not wait until you are thirsty: thirst is already a sign of dehydration",
            "Keep your mouth closed and breathe through your nose to minimize moisture loss",
          ],
        },
      ],
    },
  },
  {
    slug: "wilderness-first-aid-essentials",
    title: "Wilderness First Aid Essentials",
    category: "first-aid",
    summary: "Critical medical skills for remote locations",
    readTime: "4 min read",
    difficulty: "Intermediate",
    image: "/tips/firstaid.jpg", 
    content: {
      introduction:
        "Medical emergencies in remote locations require different approaches than urban first aid. Constraints like distance from care, limited supplies, environmental hazards, and delayed rescue make wilderness protocols essential.",
      sections: [
        {
          title: "Assessment and Priorities",
          content:
            "Initial evaluation in the wilderness follows a structured protocol to quickly identify life threats and guide treatment decisions.",
          checklist: [
            "Ensure scene safety before approaching the patient (e.g. unstable terrain, hazards)",
            "Follow the ABC mnemonic: Airway, Breathing, Circulation to identify immediate threats :contentReference[oaicite:0]{index=0}",
            "Control severe bleeding using direct pressure or pressure dressings :contentReference[oaicite:1]{index=1}",
            "Assess for shock and treat by keeping the patient warm and elevating legs if needed",
            "Evaluate potential spinal injuries; move patient only if life-threatening risk is present",
            "Regularly monitor vital signs and plan evacuation strategy early",
          ],
        },
        {
          title: "Wound Care",
          content:
            "Proper wound cleaning and dressing are critical to preventing infection—especially when evacuation and professional care may be delayed.",
          tips: [
            "Wash or sanitize hands before treating wound (use gloves if available)",
            "Irrigate wound thoroughly with clean water and remove visible debris :contentReference[oaicite:2]{index=2}",
            "Apply antibiotic ointment if available",
            "Cover wounds with clean, dry dressings and change regularly",
            "Watch for infection signs: redness, swelling, increased pain, fever",
          ],
        },
        {
          title: "Environmental Injuries",
          content:
            "Wilderness settings can produce injuries uncommon in urban environments. Awareness and early recognition are key.",
          checklist: [
            "Hypothermia: monitor core temperature and insulate patient",
            "Heat exhaustion/stroke: cool the patient and rehydrate",
            "Altitude sickness: descend if symptoms worsen",
            "Snake bites: immobilize, keep calm, evacuate promptly",
            "Severe allergic or insect sting reactions requiring epinephrine",
            "Plant poisoning: identify, rinse skin/wash mouth, and consult medical sources",
          ],
        },
      ],
    },
  },
  {
    slug: "field-gear-maintenance",
    title: "Field Gear Maintenance",
    category: "gear",
    summary: "Keep your equipment functional in harsh conditions",
    readTime: "5 min read",
    difficulty: "Intermediate",
    image: "/tips/gearmaintenance.jpg", 
    content: {
      introduction:
        "Maintaining your gear in the field helps avoid tool failure when you need it most. Regular cleaning, lubrication, and basic repairs extend equipment life—even under tough outdoor conditions.",
      sections: [
        {
          title: "Knife Care",
          content:
            "A sharp, well-maintained knife is one of your most vital tools in the wilderness. Proper care ensures performance and safety over time.",
          tips: [
            "Clean your blade by hand after each use and dry it immediately—never soak it or use a dishwasher :contentReference[oaicite:1]{index=1}.",
            "Use a whetstone or guided system to sharpen the edge. Use coarse grit (200-800) for repairing, medium (1000-3000) for sharpening, and fine (4000+) for finishing :contentReference[oaicite:2]{index=2}.",
            "Oil carbon steel blades after cleaning to protect against rust; stainless steel blades still benefit from a light protective oil :contentReference[oaicite:3]{index=3}.",
            "Check the handle and pivot; tighten loose parts and lubricate folding mechanisms as needed :contentReference[oaicite:4]{index=4}."
          ]
        },
        {
          title: "Fire-Starting Equipment",
          content:
            "Reliability of fire tools can make the difference between a safe camp and a dangerous one. Keep them ready for action.",
          checklist: [
            "Wipe down and dry ferro rods or fire steels after use, especially if exposed to moisture.",
            "Check striker edges and replace them if worn or deformed.",
            "Carry waterproof matches or store lighter in a sealed case to keep them dry.",
            "Regularly replenish your tinder materials like waxed cotton balls or natural fibers.",
            "Test your fire-starting gear before heading into the field to ensure functionality."
          ]
        },
        {
          title: "Clothing & Fabric Gear",
          content:
            "Proper care of clothing and fabric gear preserves their protective qualities and structural integrity.",
          tips: [
            "Repair tears or seams immediately to prevent further damage.",
            "Clean your gear regularly—dirt and oils degrade waterproofing and breathability.",
            "Reapply waterproof treatments (like DWR coatings) when water no longer beads on the surface.",
            "Dry and store fabrics properly to prevent mold or mildew on long trips."
          ]
        }
      ]
    }
  },
]

export function getTipBySlug(slug: string): TipGuide | undefined {
  return tipGuides.find((tip) => tip.slug === slug)
}

export function getTipsByCategory(category: TipGuide["category"]): TipGuide[] {
  return tipGuides.filter((tip) => tip.category === category)
}
