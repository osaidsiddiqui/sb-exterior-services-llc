import { ContactForm } from "@/components/ContactForm"
import { About } from "@/components/About"
import { ServicesSection } from "./Rservices"
import { Header } from "@/components/Header"
import { HeroSectionRedOak } from "./Rherosection"
import Footer from "@/components/Footer"
import type { Metadata } from "next"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"
import Link from "next/link"
export const metadata: Metadata = {
  title: "Junk Removal Red Oak TX | Same-Day Service | Jay's EZ Junk Removal",
  description:
    "Professional junk removal services in Red Oak, TX. Same-day pickup, affordable rates, eco-friendly disposal. Serving all Red Oak neighborhoods. Call 214-258-3511 for free quote!",
  keywords: [
    "junk removal Red Oak TX",
    "junk removal Red Oak Texas",
    "Red Oak junk removal service",
    "same day junk removal Red Oak",
    "affordable junk removal Red Oak",
    "best junk removal Red Oak",
    "Red Oak junk hauling",
    "furniture removal Red Oak",
    "appliance removal Red Oak",
    "construction debris removal Red Oak",
    "estate cleanout Red Oak",
    "Red Oak TX junk pickup",
    "residential junk removal Red Oak",
    "commercial junk removal Red Oak",
    "eco-friendly junk removal Red Oak",
    "licensed junk removal Red Oak",
    "insured junk removal Red Oak",
    "Red Oak area junk removal",
    "Ellis County junk removal",
    "Red Oak Texas junk haulers",
    "Red Oak debris removal",
    "Red Oak cleanout services",
    "Red Oak waste removal",
  ],
  openGraph: {
    title: "Professional Junk Removal Red Oak TX | Jay's EZ Junk Removal",
    description:
      "Top-rated junk removal service in Red Oak, Texas. Same-day pickup, fair pricing, eco-friendly disposal. Serving Red Oak and Ellis County since 2020.",
    url: "https://jaysezjunkremoval.com/red-oak",
    siteName: "Jay's EZ Junk Removal",
    images: [
      {
        url: "/images/logowithblack.png",
        width: 1200,
        height: 630,
        alt: "Jay's EZ Junk Removal Red Oak Texas Professional Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Red Oak TX | Same-Day Service | Jay's EZ Junk Removal",
    description:
      "Professional junk removal in Red Oak, Texas. Same-day service, affordable rates. Call 214-258-3511 for free quote!",
    images: ["/images/logowithblack.png"],
  },
  alternates: {
    canonical: "https://jaysezjunkremoval.com/red-oak",
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

const redOakJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jay's EZ Junk Removal - Red Oak",
  image: "https://jaysezjunkremoval.com/images/logowithblack.png",
  "@id": "https://jaysezjunkremoval.com/red-oak#business",
  url: "https://jaysezjunkremoval.com/red-oak",
  telephone: "+1-214-258-3511",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Red Oak",
    addressRegion: "TX",
    postalCode: "75154",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.5218,
    longitude: -96.8003,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Red Oak",
      "@id": "https://en.wikipedia.org/wiki/Red_Oak,_Texas",
    },
    {
      "@type": "Place",
      name: "Ellis County, TX",
    },
    {
      "@type": "Place",
      name: "Ovilla, TX",
    },
    {
      "@type": "Place",
      name: "Glenn Heights, TX",
    },
    {
      "@type": "Place",
      name: "Oak Leaf, TX",
    },
    {
      "@type": "Place",
      name: "Pecan Hill, TX",
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
    name: "Junk Removal Services Red Oak",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Same-Day Junk Removal Red Oak",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Removal Red Oak",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Appliance Removal Red Oak",
        },
      },
    ],
  },
}

const RedOak = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(redOakJsonLd) }} />

       <div className="min-h-screen gradient-bg text-white">
        <Header />

        <main>
          <HeroSectionRedOak />
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

export default RedOak
