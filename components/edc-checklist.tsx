"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

interface ChecklistItem {
  id: string
  name: string
  category: "essential" | "recommended" | "situational"
  description: string
}

const edcItems: ChecklistItem[] = [
  {
    id: "knife",
    name: "Folding Knife",
    category: "essential",
    description: "Primary cutting tool for daily tasks",
  },
  {
    id: "flashlight",
    name: "Compact Flashlight",
    category: "essential",
    description: "Reliable illumination when needed",
  },
  {
    id: "multitool",
    name: "Multi-tool",
    category: "essential",
    description: "Versatile tool for various situations",
  },
  {
    id: "pen",
    name: "Tactical Pen",
    category: "essential",
    description: "Writing instrument and emergency tool",
  },
  {
    id: "wallet",
    name: "Minimalist Wallet",
    category: "essential",
    description: "Secure storage for cards and cash",
  },
  {
    id: "phone",
    name: "Smartphone",
    category: "essential",
    description: "Communication and emergency device",
  },
  {
    id: "keys",
    name: "Keys with Keychain Tools",
    category: "essential",
    description: "Access tools and mini utilities",
  },
  {
    id: "paracord",
    name: "Paracord Bracelet",
    category: "recommended",
    description: "Emergency cordage always on hand",
  },
  {
    id: "lighter",
    name: "Compact Lighter",
    category: "recommended",
    description: "Fire starting capability",
  },
  {
    id: "first-aid",
    name: "Mini First Aid Kit",
    category: "recommended",
    description: "Basic medical supplies",
  },
  {
    id: "power-bank",
    name: "Portable Power Bank",
    category: "recommended",
    description: "Keep devices charged",
  },
  {
    id: "cash",
    name: "Emergency Cash",
    category: "recommended",
    description: "Backup payment method",
  },
  {
    id: "whistle",
    name: "Emergency Whistle",
    category: "situational",
    description: "Signaling device for emergencies",
  },
  {
    id: "duct-tape",
    name: "Duct Tape (wrapped on pen)",
    category: "situational",
    description: "Quick repairs and fixes",
  },
  {
    id: "bandana",
    name: "Bandana",
    category: "situational",
    description: "Multi-purpose cloth",
  },
]

export function EDCChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const handleItemCheck = (itemId: string, checked: boolean) => {
    const newCheckedItems = new Set(checkedItems)
    if (checked) {
      newCheckedItems.add(itemId)
    } else {
      newCheckedItems.delete(itemId)
    }
    setCheckedItems(newCheckedItems)
  }

  const getCategoryColor = (category: ChecklistItem["category"]) => {
    switch (category) {
      case "essential":
        return "bg-[#1F6F4A] text-white"
      case "recommended":
        return "bg-[#5B6E3A] text-white"
      case "situational":
        return "bg-[#A49B73] text-white"
    }
  }

  const groupedItems = {
    essential: edcItems.filter((item) => item.category === "essential"),
    recommended: edcItems.filter((item) => item.category === "recommended"),
    situational: edcItems.filter((item) => item.category === "situational"),
  }

  return (
    <Card className="bg-[#1B2630] border-white/10">
      <CardHeader>
        <CardTitle className="text-[#E6ECEA] text-xl">EDC Checklist</CardTitle>
        <p className="text-[#9FB3A8]">Track your everyday carry items. Check off what you currently carry.</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-[#E6ECEA] font-semibold mb-3 capitalize flex items-center gap-2">
              {category}
              <Badge className={getCategoryColor(category as ChecklistItem["category"])}>{items.length} items</Badge>
            </h4>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-[#0F1517] border border-white/5"
                >
                  <Checkbox
                    id={item.id}
                    checked={checkedItems.has(item.id)}
                    onCheckedChange={(checked) => handleItemCheck(item.id, checked as boolean)}
                    className="mt-1 border-[#5B6E3A] data-[state=checked]:bg-[#1F6F4A] data-[state=checked]:border-[#1F6F4A]"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={item.id}
                      className={`font-medium cursor-pointer transition-colors ${
                        checkedItems.has(item.id) ? "text-[#24A27B]" : "text-[#E6ECEA]"
                      }`}
                    >
                      {item.name}
                    </label>
                    <p className="text-sm text-[#9FB3A8] mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-[#9FB3A8] text-center">
            Checked: {checkedItems.size} of {edcItems.length} items
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
