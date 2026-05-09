import { ContactForm } from "@/components/ContactForm"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AreasSection } from "@/components/areas-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SB Exterior Services LLC | Pressure Washing & Soft Washing Central Florida",
  description:
    "Professional pressure washing, soft washing, roof cleaning & driveway cleaning in Central Florida. Fully insured. Call (407) 502-9795 for a free estimate.",
  keywords: [
    "pressure washing Central Florida",
    "soft washing Orlando",
    "roof cleaning Florida",
    "driveway cleaning",
    "house washing",
    "pressure washing services",
    "exterior cleaning",
    "SB Exterior Services",
  ],
  openGraph: {
    title: "SB Exterior Services LLC | Pressure Washing & Soft Washing",
    description:
      "Professional pressure washing and soft washing in Central Florida. Fully insured, same-day quotes. Call (407) 502-9795!",
    url: "https://sbexteriorservices.com",
    images: [
      {
        url: "/sb-logo.png",
        width: 1200,
        height: 630,
        alt: "SB Exterior Services LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SB Exterior Services LLC | Pressure Washing & Soft Washing",
    description: "Professional exterior cleaning services in Central Florida. Call (407) 502-9795!",
  },
  alternates: {
    canonical: "https://sbexteriorservices.com",
  },
}
export default function HomePage() {
  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <AreasSection />
      <ContactForm />
      <CTASection />
      <Footer />
    </div>
  )
}

function StatsSection() {
  return (
    <section className="bg-[#111827] py-12 border-b border-[#3AAA35]/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatCard value="100+" label="Jobs Completed" />
          <StatCard value="5★" label="Average Rating" />
          <StatCard value="3+" label="Years Experience" />
          <StatCard value="100%" label="Insured & Licensed" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#3AAA35] tracking-wide mb-2">
        {value}
      </div>
      <p className="text-[#B0BAC9] font-['Barlow'] text-sm sm:text-base">{label}</p>
    </div>
  )
}

function WhyChooseSection() {
  const features = [
    {
      icon: "🛡️",
      title: "Fully Insured",
      desc: "Every job is fully insured so you're protected from start to finish."
    },
    {
      icon: "⚡",
      title: "Fast & Reliable",
      desc: "We show up on time, work efficiently, and leave your property spotless."
    },
    {
      icon: "💰",
      title: "Affordable Rates",
      desc: "Transparent pricing, no hidden fees. We work around your budget."
    }
  ]

  return (
    <section className="bg-[#0A0F1C] py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Bebas_Neue'] text-5xl text-white mb-4 tracking-tight">
            Why Homeowners Trust SB Exterior
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-[#3AAA35]/15 p-8 rounded-lg hover:border-[#3AAA35]/40 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-['Bebas_Neue'] text-xl text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[#B0BAC9] font-['Barlow'] text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
