"use client"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Home,
  Home as Roof,
  Zap,
  Droplets,
  Wind,
  Building2,
  ArrowRight
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "House Washing",
      desc: "Remove mold, mildew & algae from your home's exterior. Safe for siding, brick & stucco.",
    },
    {
      icon: Roof,
      title: "Roof Cleaning",
      desc: "Gentle soft washing extends your roof's life and restores curb appeal without damage.",
    },
    {
      icon: Zap,
      title: "Driveway & Concrete",
      desc: "High-pressure cleaning removes oil stains, dirt & grime from driveways and walkways.",
    },
    {
      icon: Droplets,
      title: "Gutter Cleaning",
      desc: "Clear out debris and blockages to protect your home from water damage.",
    },
    {
      icon: Wind,
      title: "Soft Washing",
      desc: "Low-pressure deep cleaning safe for delicate surfaces: screens, painted wood, EIFS.",
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      desc: "Storefronts, parking lots, and building exteriors — we handle commercial jobs too.",
    },
  ]

  return (
    <section className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-8 bg-[#3AAA35]"></div>
            <span className="font-['Barlow'] text-[#3AAA35] text-xs uppercase tracking-[0.2em] font-600">OUR SERVICES</span>
            <div className="h-1 w-8 bg-[#3AAA35]"></div>
          </div>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl text-white mb-6 tracking-tight">
            What We Clean
          </h2>
          <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
            Professional exterior cleaning solutions for residential and commercial properties
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-[#1A2235] border-[#3AAA35]/15 hover:border-[#3AAA35]/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <IconComponent className="w-12 h-12 text-[#3AAA35] group-hover:text-[#4DC447] transition-colors" />
                  </div>
                  <h3 className="font-['Bebas_Neue'] text-xl text-white mb-3 tracking-wide group-hover:text-[#3AAA35] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-['Barlow'] text-[#B0BAC9] text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#3AAA35] hover:text-[#4DC447] transition-colors font-['Barlow'] font-600 text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
