"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F022f181167c044d5929b1a16f44e2c53?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F0fa35f12504748d8a1ab979e905ac122?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2Ffa511db8b16b4b31a71653bdb75b9ada?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2Fb0062be4037948a49ab74ad496c952f9?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F63defebf55fb481681b92eb20617ab70?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F5dab30da66074737876dd121a8295f8c?format=webp&width=1200",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <section className="relative overflow-hidden min-h-screen bg-[#0A0F1C] flex items-center py-20">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Pressure washing service"
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-[#3AAA35]"></div>
              <span className="font-['Barlow'] text-[#3AAA35] text-xs uppercase tracking-[0.2em] font-600">
                Central Florida's Trusted Exterior Cleaning
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
              Pressure Washing & Soft Washing That Lasts
            </h1>

            {/* Subheadline */}
            <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-lg leading-relaxed">
              Professional exterior cleaning services for homes and businesses across Central Florida. Fully insured. Same-day quotes available.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center gap-2 text-[#B0BAC9]">
                <CheckCircle2 className="w-5 h-5 text-[#3AAA35]" />
                <span className="font-['Barlow'] text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-[#B0BAC9]">
                <CheckCircle2 className="w-5 h-5 text-[#3AAA35]" />
                <span className="font-['Barlow'] text-sm">Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2 text-[#B0BAC9]">
                <CheckCircle2 className="w-5 h-5 text-[#3AAA35]" />
                <span className="font-['Barlow'] text-sm">5-Star Rated</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                asChild
                className="bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
              >
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border border-[#3AAA35] text-[#3AAA35] hover:bg-[#3AAA35] hover:text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
              >
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>

            {/* Rating Card */}
            <div className="bg-[#1A2235] border border-[#3AAA35]/20 rounded-lg p-4 w-fit mt-8">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#3AAA35] text-[#3AAA35]" />
                  ))}
                </div>
                <span className="font-['Barlow'] font-600 text-white">4.9★</span>
                <span className="text-[#6B7A90] text-sm">30+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Large stats card */}
              <Card className="bg-[#1A2235] border-[#3AAA35]/30 shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="font-['Bebas_Neue'] text-5xl text-[#3AAA35] tracking-wide">100+</div>
                      <p className="text-[#B0BAC9] font-['Barlow'] text-sm mt-2">Jobs Completed</p>
                    </div>
                    <div className="h-px bg-[#3AAA35]/30"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-['Bebas_Neue'] text-5xl text-[#3AAA35] tracking-wide">5★</div>
                      </div>
                      <p className="text-[#B0BAC9] font-['Barlow'] text-sm mt-2">Average Rating</p>
                    </div>
                    <div className="h-px bg-[#3AAA35]/30"></div>
                    <div>
                      <div className="font-['Bebas_Neue'] text-5xl text-[#3AAA35] tracking-wide">3+</div>
                      <p className="text-[#B0BAC9] font-['Barlow'] text-sm mt-2">Years Experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
