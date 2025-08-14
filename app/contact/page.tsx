"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission - in real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For now, create a mailto link as fallback
      const subject = encodeURIComponent("Contact from Survival Ready Website")
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:contact@survivalready.com?subject=${subject}&body=${body}`

      // Open mailto link
      window.location.href = mailtoLink

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0F1517] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E6ECEA] mb-4">Contact Us</h1>
          <p className="text-xl text-[#9FB3A8] max-w-2xl mx-auto">
            Have questions about survival gear or need expert advice? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-[#1B2630] border-white/10">
            <CardHeader>
              <CardTitle className="text-[#E6ECEA] text-2xl">Send us a Message</CardTitle>
              <p className="text-[#9FB3A8]">Fill out the form below and we'll get back to you as soon as possible.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#E6ECEA] mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-[#0F1517] border-white/10 text-[#E6ECEA] placeholder:text-[#9FB3A8]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E6ECEA] mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-[#0F1517] border-white/10 text-[#E6ECEA] placeholder:text-[#9FB3A8]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E6ECEA] mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-[#0F1517] border-white/10 text-[#E6ECEA] placeholder:text-[#9FB3A8] resize-none"
                    placeholder="Tell us about your question, feedback, or how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1F6F4A] hover:bg-[#24A27B] text-white"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-[#1B2630] border-white/10">
              <CardHeader>
                <CardTitle className="text-[#E6ECEA] text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex space-x-4 items-center">
                  <div className="w-10 h-10 bg-[#1F6F4A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#E6ECEA] font-semibold mb-1">Email</h3>
                    <p className="text-[#9FB3A8]">andcobos@gmail.com</p>
                    
                  </div>
                </div>

                <div className="flex space-x-4 items-center">
                  <div className="w-10 h-10 bg-[#5B6E3A] rounded-lg flex justify-center flex-shrink-0 items-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#E6ECEA] font-semibold mb-1">Phone</h3>
                    <p className="text-[#9FB3A8]">+503 70472443 </p>
                    
                  </div>
                </div>

                <div className="flex space-x-4 items-center">
                  <div className="w-10 h-10 bg-[#A49B73] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#E6ECEA] font-semibold mb-1">Location</h3>
                    <p className="text-[#9FB3A8]">San Salvador, El Salvador   </p>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1B2630] border-white/10">
              <CardContent className="p-6">
                <h3 className="text-[#E6ECEA] font-semibold mb-3">Expert Consultation</h3>
                <p className="text-[#9FB3A8] text-sm mb-4">
                  Need personalized gear recommendations or survival training advice? Our experts are here to help you
                  prepare for any situation.
                </p>
                <div className="space-y-2 text-sm text-[#9FB3A8]">
                  <p>• Gear selection guidance</p>
                  <p>• Training recommendations</p>
                  <p>• Custom kit building</p>
                  <p>• Survival planning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
