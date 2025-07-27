"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Download, Palette, Type, User } from "lucide-react"

interface BusinessCardData {
  name: string
  title: string
  company: string
  phone: string
  email: string
  website: string
  backgroundColor: string
  textColor: string
  accentColor: string
  fontFamily: string
}

const colorOptions = [
  { name: "Classic Blue", bg: "#1e40af", text: "#ffffff", accent: "#3b82f6" },
  { name: "Professional Gray", bg: "#374151", text: "#ffffff", accent: "#9ca3af" },
  { name: "Modern Black", bg: "#000000", text: "#ffffff", accent: "#fbbf24" },
  { name: "Clean White", bg: "#ffffff", text: "#1f2937", accent: "#3b82f6" },
  { name: "Elegant Navy", bg: "#1e3a8a", text: "#ffffff", accent: "#60a5fa" },
  { name: "Creative Purple", bg: "#7c3aed", text: "#ffffff", accent: "#a78bfa" },
]

const fontOptions = [
  { name: "Inter", value: "font-sans" },
  { name: "Serif", value: "font-serif" },
  { name: "Mono", value: "font-mono" },
]

export default function BusinessCardDesigner() {
  const [cardData, setCardData] = useState<BusinessCardData>({
    name: "John Doe",
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    phone: "+1 (555) 123-4567",
    email: "john.doe@techsolutions.com",
    website: "www.techsolutions.com",
    backgroundColor: "#1e40af",
    textColor: "#ffffff",
    accentColor: "#3b82f6",
    fontFamily: "font-sans",
  })

  const updateCardData = (field: keyof BusinessCardData, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }))
  }

  const applyColorScheme = (scheme: (typeof colorOptions)[0]) => {
    setCardData((prev) => ({
      ...prev,
      backgroundColor: scheme.bg,
      textColor: scheme.text,
      accentColor: scheme.accent,
    }))
  }

  const downloadCard = () => {
    // In a real app, this would generate and download a PDF or image
    alert(
      "Download functionality would be implemented here. This would generate a high-quality PDF or image file of your business card.",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Taruca -  Business Card Designer</h1>
          <p className="text-gray-600">Create professional business cards in minutes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Design Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={cardData.name}
                      onChange={(e) => updateCardData("name", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      value={cardData.title}
                      onChange={(e) => updateCardData("title", e.target.value)}
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={cardData.company}
                    onChange={(e) => updateCardData("company", e.target.value)}
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={cardData.phone}
                      onChange={(e) => updateCardData("phone", e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={cardData.email}
                      onChange={(e) => updateCardData("email", e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={cardData.website}
                    onChange={(e) => updateCardData("website", e.target.value)}
                    placeholder="Enter your website"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Color Schemes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {colorOptions.map((scheme, index) => (
                    <button
                      key={index}
                      onClick={() => applyColorScheme(scheme)}
                      className="p-3 rounded-lg border-2 border-transparent hover:border-gray-300 transition-colors"
                      style={{ backgroundColor: scheme.bg }}
                    >
                      <div className="text-xs font-medium mb-1" style={{ color: scheme.text }}>
                        {scheme.name}
                      </div>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: scheme.bg }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: scheme.accent }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: scheme.text }}></div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Typography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="font">Font Family</Label>
                  <Select value={cardData.fontFamily} onValueChange={(value) => updateCardData("fontFamily", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fontOptions.map((font) => (
                        <SelectItem key={font.value} value={font.value}>
                          <span className={font.value}>{font.name}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div
                    className={`w-96 h-56 rounded-lg shadow-lg p-6 ${cardData.fontFamily} relative overflow-hidden`}
                    style={{
                      backgroundColor: cardData.backgroundColor,
                      color: cardData.textColor,
                    }}
                  >
                    {/* Decorative accent */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-20"
                      style={{ backgroundColor: cardData.accentColor }}
                    ></div>

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold mb-1">{cardData.name}</h2>
                        <p className="text-sm opacity-90 mb-2">{cardData.title}</p>
                        <p className="text-sm font-medium" style={{ color: cardData.accentColor }}>
                          {cardData.company}
                        </p>
                      </div>

                      <div className="space-y-1 text-xs">
                        <p>{cardData.phone}</p>
                        <p>{cardData.email}</p>
                        <p>{cardData.website}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <Button onClick={downloadCard} className="w-full md:w-auto">
                    <Download className="h-4 w-4 mr-2" />
                    Download Business Card
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">Standard business card size: 3.5" × 2" (89mm × 51mm)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tips for Great Business Cards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <p>Keep it simple and readable - avoid cluttering with too much information</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <p>Use high contrast colors for better readability</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <p>Include only essential contact information</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <p>Choose fonts that reflect your professional image</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
