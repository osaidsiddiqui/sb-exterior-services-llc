import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact SB Exterior Services LLC | Free Estimate",
  description:
    "Contact SB Exterior Services for a free pressure washing estimate. Call (407) 502-9795 or fill out our contact form. Available 7 days a week.",
  keywords: ["contact us", "free estimate", "get a quote"],
  alternates: { canonical: "https://sbexteriorservices.com/contact" },
}

export default function ContactPage() {
  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#111827] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white mb-4 tracking-tight">
              Get Your Free Estimate
            </h1>
            <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
              Fill out the form below or call us directly — we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="py-8">
        <ContactForm />
      </div>

      <CTASection />
      <Footer />
    </div>
  )
}
