"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertyType: "",
    preferredDate: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Client-side validation
      if (!formData.name || !formData.phone || !formData.email) {
        alert("Please fill in all required fields")
        return
      }

      // Here you would typically send the form data to your backend
      // For now, we'll just show a success message
      setSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        propertyType: "",
        preferredDate: "",
        message: "",
      })

      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0A0F1C]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-8 bg-[#3AAA35]"></div>
            <span className="font-['Barlow'] text-[#3AAA35] text-xs uppercase tracking-[0.2em] font-600">CONTACT US</span>
            <div className="h-1 w-8 bg-[#3AAA35]"></div>
          </div>
          <h2 className="font-['Bebas_Neue'] text-5xl text-white mb-6 tracking-tight">
            Get Your Free Estimate
          </h2>
          <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
            Fill out the form below or call us directly — we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-['Barlow'] font-600 mb-2 text-sm">
                          Full Name *
                        </label>
                        <Input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-[#0A0F1C] border-[#3AAA35]/30 text-white placeholder:text-[#6B7A90] focus:border-[#3AAA35] rounded text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-['Barlow'] font-600 mb-2 text-sm">
                          Phone Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-[#0A0F1C] border-[#3AAA35]/30 text-white placeholder:text-[#6B7A90] focus:border-[#3AAA35] rounded text-sm"
                          placeholder="(407) 555-0123"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white font-['Barlow'] font-600 mb-2 text-sm">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#0A0F1C] border-[#3AAA35]/30 text-white placeholder:text-[#6B7A90] focus:border-[#3AAA35] rounded text-sm w-full"
                        placeholder="you@example.com"
                      />
                    </div>

                    {/* Service & Property Type */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-['Barlow'] font-600 mb-2 text-sm">
                          Service Needed *
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                        >
                          <SelectTrigger className="bg-[#0A0F1C] border-[#3AAA35]/30 text-white rounded text-sm">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1A2235] border-[#3AAA35]/30">
                            <SelectItem value="house-washing" className="text-white">House Washing</SelectItem>
                            <SelectItem value="roof-cleaning" className="text-white">Roof Cleaning</SelectItem>
                            <SelectItem value="driveway" className="text-white">Driveway Cleaning</SelectItem>
                            <SelectItem value="gutter" className="text-white">Gutter Cleaning</SelectItem>
                            <SelectItem value="soft-wash" className="text-white">Soft Washing</SelectItem>
                            <SelectItem value="commercial" className="text-white">Commercial</SelectItem>
                            <SelectItem value="other" className="text-white">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-white font-['Barlow'] font-600 mb-2 text-sm">
                          Property Type *
                        </label>
                        <Select
                          value={formData.propertyType}
                          onValueChange={(value) => handleSelectChange("propertyType", value)}
                        >
                          <SelectTrigger className="bg-[#0A0F1C] border-[#3AAA35]/30 text-white rounded text-sm">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1A2235] border-[#3AAA35]/30">
                            <SelectItem value="residential" className="text-white">Residential</SelectItem>
                            <SelectItem value="commercial" className="text-white">Commercial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-white font-['Barlow'] font-600 mb-2 text-sm">
                        Preferred Date (Optional)
                      </label>
                      <Input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="bg-[#0A0F1C] border-[#3AAA35]/30 text-white placeholder:text-[#6B7A90] focus:border-[#3AAA35] rounded text-sm w-full"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white font-['Barlow'] font-600 mb-2 text-sm">
                        Message / Additional Details
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#0A0F1C] border-[#3AAA35]/30 text-white placeholder:text-[#6B7A90] focus:border-[#3AAA35] rounded text-sm min-h-[120px] resize-none"
                        placeholder="Tell us more about your cleaning needs..."
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 py-3 rounded uppercase tracking-wider transition-all"
                    >
                      Send My Request →
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-[#3AAA35] mx-auto mb-4" />
                    <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-2 tracking-wide">
                      Thank You!
                    </h3>
                    <p className="text-[#B0BAC9] font-['Barlow']">
                      We'll be in touch within 24 hours.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-8">
                <h3 className="font-['Bebas_Neue'] text-[#3AAA35] text-lg mb-6 tracking-wide">
                  Contact Info
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 text-[#3AAA35] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#6B7A90] font-['Barlow'] text-xs uppercase mb-1">Phone</p>
                      <a
                        href="tel:4075029795"
                        className="text-white hover:text-[#3AAA35] transition-colors font-['Barlow'] font-600"
                      >
                        (407) 502-9795
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-[#3AAA35] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#6B7A90] font-['Barlow'] text-xs uppercase mb-1">Email</p>
                      <a
                        href="mailto:sbexteriorservicesllc@gmail.com"
                        className="text-white hover:text-[#3AAA35] transition-colors font-['Barlow'] font-600 break-all"
                      >
                        sbexteriorservicesllc@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-[#3AAA35] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#6B7A90] font-['Barlow'] text-xs uppercase mb-1">Location</p>
                      <p className="text-white font-['Barlow']">Central Florida</p>
                    </div>
                  </div>

                  <div className="h-px bg-[#3AAA35]/20"></div>

                  {/* Hours */}
                  <div>
                    <p className="text-[#6B7A90] font-['Barlow'] text-xs uppercase mb-3">Hours</p>
                    <p className="text-white font-['Barlow'] text-sm">Available 7 days a week</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-[#1A2235] border-[#3AAA35]/20 overflow-hidden">
              <div className="aspect-square bg-[#111827] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.318261000747!2d-81.36900232345098!3d28.542212175699646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77bb6b4c4c4c4%3A0x0!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
