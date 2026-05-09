import { About } from "@/components/About"
import { ServicesSection } from "./Wservices"
import { Header } from "@/components/Header"
import { HeroSectionWaxahachie } from "./Wherosection"
import Footer from "@/components/Footer"
import type { Metadata } from "next"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/ContactForm"
export const metadata: Metadata = {
  title: "Junk Removal Waxahachie TX | Same-Day Service | Jay's EZ Junk Removal",
  description:
    "Professional junk removal services in Waxahachie, TX. Same-day pickup, affordable rates, eco-friendly disposal. Serving all Waxahachie neighborhoods. Call 214-258-3511 for free quote!",
  keywords: [
    "junk removal Waxahachie TX",
    "junk removal Waxahachie Texas",
    "Waxahachie junk removal service",
    "same day junk removal Waxahachie",
    "affordable junk removal Waxahachie",
    "best junk removal Waxahachie",
    "Waxahachie junk hauling",
    "furniture removal Waxahachie",
    "appliance removal Waxahachie",
    "construction debris removal Waxahachie",
    "estate cleanout Waxahachie",
    "Waxahachie TX junk pickup",
    "residential junk removal Waxahachie",
    "commercial junk removal Waxahachie",
    "eco-friendly junk removal Waxahachie",
    "licensed junk removal Waxahachie",
    "insured junk removal Waxahachie",
    "Waxahachie area junk removal",
    "Ellis County junk removal",
    "Waxahachie Texas junk haulers",
    "Waxahachie debris removal",
    "Waxahachie cleanout services",
    "Waxahachie waste removal",
  ],
  openGraph: {
    title: "Professional Junk Removal Waxahachie TX | Jay's EZ Junk Removal",
    description:
      "Top-rated junk removal service in Waxahachie, Texas. Same-day pickup, fair pricing, eco-friendly disposal. Serving Waxahachie and Ellis County since 2020.",
    url: "https://jaysezjunkremoval.com/waxahachie",
    siteName: "Jay's EZ Junk Removal",
    images: [
      {
        url: "/images/logowithblack.png",
        width: 1200,
        height: 630,
        alt: "Jay's EZ Junk Removal Waxahachie Texas Professional Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Waxahachie TX | Same-Day Service | Jay's EZ Junk Removal",
    description:
      "Professional junk removal in Waxahachie, Texas. Same-day service, affordable rates. Call 214-258-3511 for free quote!",
    images: ["/images/logowithblack.png"],
  },
  alternates: {
    canonical: "https://jaysezjunkremoval.com/waxahachie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

const waxahachieJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jay's EZ Junk Removal - Waxahachie",
  image: "https://jaysezjunkremoval.com/images/logowithblack.png",
  "@id": "https://jaysezjunkremoval.com/waxahachie#business",
  url: "https://jaysezjunkremoval.com/waxahachie",
  telephone: "+1-214-258-3511",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Waxahachie",
    addressRegion: "TX",
    postalCode: "75165",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.3865,
    longitude: -96.8489,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Waxahachie",
      "@id": "https://en.wikipedia.org/wiki/Waxahachie,_Texas",
    },
    {
      "@type": "Place",
      name: "Ellis County, TX",
    },
    {
      "@type": "Place",
      name: "Midlothian, TX",
    },
    {
      "@type": "Place",
      name: "Ennis, TX",
    },
    {
      "@type": "Place",
      name: "Italy, TX",
    },
    {
      "@type": "Place",
      name: "Ferris, TX",
    },
    {
      "@type": "Place",
      name: "Palmer, TX",
    },
  ],
  serviceType: [
    "Junk Removal",
    "Furniture Removal",
    "Appliance Removal",
    "Construction Debris Removal",
    "Estate Cleanout",
    "Commercial Junk Removal",
    "Residential Junk Removal",
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 07:00-19:00, Sa 08:00-18:00, Su 09:00-17:00",
  sameAs: [
    "https://www.facebook.com/jaysezjunk",
    "https://www.instagram.com/jaysezjunk",
    "https://www.google.com/maps/place/JAY'S+EZ+JUNK+REMOVAL",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Junk Removal Services Waxahachie",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Same-Day Junk Removal Waxahachie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Removal Waxahachie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Appliance Removal Waxahachie",
        },
      },
    ],
  },
}

export const revalidate = 0

const Waxahachie = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waxahachieJsonLd) }} />

      <div className="min-h-screen gradient-bg text-white">
        <Header />

        <main>
          <HeroSectionWaxahachie />
          <About />
          <ServicesSection />
          <ContactForm />
            <section className="py-16">
      <div className="container mx-auto px-6">
        <Card className="glass-card p-8 sm:p-12 rounded-3xl text-center pulse-glow">
          <CardContent className="p-0">
            {/* SEO Optimized Heading */}
    <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
  Fast & Affordable Junk Removal{" "}
  <span className="text-neon">Waxahachie, TX</span>
</h2>

{/* SEO Optimized Paragraph */}
<p className="text-base sm:text-xl text-gray-300 mb-8">
  Get your junk removed in <span className="text-neon">Waxahachie, TX</span>! 
  We provide <span className="text-neon">same-day junk removal services</span> for both 
  residential and commercial needs. Whether it’s old furniture, appliances, yard debris, 
  or a full property cleanout, our local team makes junk hauling in Waxahachie fast, 
  affordable, and stress-free.
</p>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Request Estimate Button */}
              <Button
                asChild
                className="w-full sm:w-auto neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full neon-glow-hover transition-all duration-300"
              >
                <Link href="#contact">Request a Free Estimate</Link>
              </Button>

              {/* Call Button */}
              <Button
                asChild
                className="w-full sm:w-auto neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full neon-glow-hover transition-all duration-300"
              >
                <a
                  href="tel:2142583511"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (214) 258-3511
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
          
          <TestimonialsSection />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Waxahachie
