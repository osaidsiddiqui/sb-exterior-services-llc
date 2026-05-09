import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Exterior Cleaning Services | SB Exterior Services LLC",
  description:
    "Professional pressure washing, soft washing, roof cleaning, driveway cleaning & more in Central Florida. Fully insured. Call (407) 502-9795 for free quote!",
  keywords: [
    "pressure washing services",
    "soft washing Orlando",
    "roof cleaning Florida",
    "driveway cleaning",
    "house washing",
    "gutter cleaning",
    "exterior cleaning",
  ],
  alternates: { canonical: "https://sbexteriorservices.com/services" },
  openGraph: {
    title: "Exterior Cleaning Services | SB Exterior Services LLC",
    description: "Professional exterior cleaning across Central Florida.",
    url: "https://sbexteriorservices.com/services",
  },
}

export const revalidate = 0

export default function ServicesPage() {
  const services = [
    {
      id: "house-washing",
      image: "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F022f181167c044d5929b1a16f44e2c53?format=webp&width=600",
      title: "House Washing",
      description: "Your home's exterior takes a beating from Florida's heat, humidity, and storms. We use professional soft washing techniques to safely remove mold, mildew, algae, dirt, and stains from any surface type.",
      benefits: [
        "Removes mold, mildew & algae",
        "Safe for vinyl, brick & stucco",
        "Gentle cleaning safe for screens & frames",
        "Instantly boosts curb appeal",
        "Protects your home's paint and finish"
      ]
    },
    {
      id: "roof-cleaning",
      image: "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F0fa35f12504748d8a1ab979e905ac122?format=webp&width=600",
      title: "Roof Cleaning & Soft Washing",
      description: "Black streaks and algae growth (Gloeocapsa Magma) don't just look bad — they shorten your roof's lifespan. Our low-pressure soft washing safely removes organic growth without voiding your warranty.",
      benefits: [
        "Extends roof lifespan",
        "No high-pressure damage",
        "Removes black streaks & algae",
        "Safe for all roof types",
        "Florida-climate specialists"
      ]
    },
    {
      id: "driveway",
      image: "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2Ffa511db8b16b4b31a71653bdb75b9ada?format=webp&width=600",
      title: "Driveway & Concrete Cleaning",
      description: "Oil stains, tire marks, and years of grime don't stand a chance. Our high-pressure concrete cleaning restores your driveway, walkways, and pool decks to like-new condition.",
      benefits: [
        "Removes oil, rust & tire marks",
        "Restores original color",
        "Safe for pavers & stamped concrete",
        "Driveways, walkways & pool decks"
      ]
    },
    {
      id: "gutter",
      image: "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2Fb0062be4037948a49ab74ad496c952f9?format=webp&width=600",
      title: "Gutter Cleaning",
      description: "Clogged gutters can cause serious water damage to your home's foundation, fascia, and landscaping. We clear all debris and flush your gutters to ensure proper water flow.",
      benefits: [
        "Prevents water damage",
        "Clears leaves, twigs & buildup",
        "Protects fascia & soffits",
        "Recommended twice per year"
      ]
    },
    {
      id: "soft-wash",
      image: "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F63defebf55fb481681b92eb20617ab70?format=webp&width=600",
      title: "Soft Washing",
      description: "Some surfaces are too delicate for high-pressure washing. Our soft washing system uses a low-pressure spray combined with biodegradable cleaning solutions to safely clean and sanitize.",
      benefits: [
        "Safe for all delicate surfaces",
        "Kills mold, mildew & bacteria at the root",
        "Longer-lasting results than pressure alone",
        "Perfect for roofs, fences & painted wood"
      ]
    },
    {
      id: "commercial",
      image: "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F5dab30da66074737876dd121a8295f8c?format=webp&width=600",
      title: "Commercial Exterior Cleaning",
      description: "First impressions matter for your business. We provide professional cleaning services for storefronts, parking lots, building exteriors, and commercial properties across Central Florida.",
      benefits: [
        "Storefronts & retail facades",
        "Parking lots & concrete areas",
        "Building exterior washing",
        "Flexible scheduling for businesses"
      ]
    },
  ]

  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#111827] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white mb-4 tracking-tight">
              Exterior Cleaning Services
            </h1>
            <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
              Professional soft washing and pressure washing solutions for residential and commercial properties in Central Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0

              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                  {/* Image */}
                  <div className={`flex justify-center ${isEven ? "" : "lg:col-start-2"}`}>
                    <div className="bg-[#1A2235] border border-[#3AAA35]/20 rounded-lg overflow-hidden w-full max-w-sm aspect-square relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? "" : "lg:col-start-1"}>
                    <h2 className="font-['Bebas_Neue'] text-4xl text-white mb-4 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="font-['Barlow'] text-[#B0BAC9] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-[#3AAA35] font-bold flex-shrink-0">✓</span>
                          <span className="text-[#B0BAC9] font-['Barlow']">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="font-['Barlow'] text-lg text-[#B0BAC9] mb-8">
            Not sure which service you need? Contact us and we'll recommend the right solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
          >
            Get Free Estimate
          </Link>
        </div>
      </section>

      <ContactForm />
      <CTASection />
      <Footer />
    </div>
  )
}
