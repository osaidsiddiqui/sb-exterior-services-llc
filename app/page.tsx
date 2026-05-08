import { ContactForm } from "@/components/ContactForm"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AreasSection } from "@/components/areas-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"
import Head from "next/head"
export const metadata: Metadata = {
  title: "Jay's EZ Junk Removal | Junk Removal in Dallas, Red Oak & DFW | Same-Day Service",

  description:
    "Affordable junk removal in Dallas, Red Oak & all of DFW. Same-day service, licensed & insured, eco-friendly disposal. Call 214-258-3511 for a free quote!",
  keywords: [
    "junk removal Dallas TX",
    "junk removal Red Oak TX",
    "junk removal DFW",
    "same day junk removal Dallas",
    "affordable junk removal Red Oak",
    "best junk removal Dallas",
    "junk hauling DFW",
    "eco-friendly junk removal Dallas",
    "furniture removal Dallas",
    "appliance removal Red Oak",
    "Jay's EZ Junk Removal",
    "cheap junk removal Dallas",
    "licensed junk removal Red Oak",
    "insured junk removal Dallas",
  ],

  openGraph: {
    title: "Jay's EZ Junk Removal | Dallas, Red Oak & DFW",
    description:
      "Top-rated junk removal in Dallas, Red Oak & DFW. Same-day service, affordable prices, eco-friendly disposal. Call 214-258-3511 now!",
    url: "https://jaysezjunkremoval.com",
    images: [
      {
        url: "/images/favicon.png",
        width: 1200,
        height: 630,
        alt: "Jay's EZ Junk Removal Dallas Red Oak DFW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay's EZ Junk Removal | Dallas, Red Oak & DFW",
    description: "Affordable same-day junk removal in Dallas, Red Oak & DFW. Call now for free estimates!",
  },
  alternates: {
    canonical: "https://jaysezjunkremoval.com",
  },
}
;<Head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Jay's EZ Junk Removal",
        image: "https://jaysezjunkremoval.com/images/logowithblack.png",
        "@id": "https://jaysezjunkremoval.com/#business",
        url: "https://jaysezjunkremoval.com",
        telephone: "+1-214-258-3511",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dallas, TX",
          addressLocality: "Dallas",
          addressRegion: "TX",
          postalCode: "75201",
          addressCountry: "US",
        },
        priceRange: "$$",
        openingHours: "Mo-Fr 07:00-19:00, Sa 08:00-18:00, Su 09:00-17:00",
        sameAs: [
          "https://www.facebook.com/jaysezjunk",
          "https://www.instagram.com/jaysezjunk",
          "https://www.google.com/maps/place/JAY'S+EZ+JUNK+REMOVAL",
        ],
        areaServed: [
          { "@type": "Place", name: "Dallas, TX" },
          { "@type": "Place", name: "Red Oak, TX" },
          { "@type": "Place", name: "DFW, TX" },
        ],
      }),
    }}
  />
</Head>
export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg text-white">
      <Header />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <AreasSection />
      <ContactForm />
      <CTASection />

      <Footer />
    </div>
  )
}
