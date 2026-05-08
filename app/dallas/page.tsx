import { ContactForm } from "@/components/ContactForm"
import { About } from "@/components/About"
import { CallToAction } from "@/components/CTAsection"
import { ServicesSection } from "./Dservices"
import { Header } from "@/components/Header"
// import { ReviewsSection } from "@/components/Testimonials"
import { HeroSectionDallas } from "./Dherosection"
import Footer from "@/components/Footer"
import type { Metadata } from "next"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Junk Removal Services in Dallas TX | Jay's EZ Junk Removal",
  description:
    "Best junk removal services in Dallas, TX. Same-day pickup, affordable rates, eco-friendly disposal. Serving all Dallas neighborhoods. Call 214-258-3511 for free quote!",
  keywords: [
    "junk removal Dallas TX",
    "junk removal Dallas Texas",
    "Dallas junk removal service",
    "same day junk removal Dallas",
    "affordable junk removal Dallas",
    "best junk removal Dallas",
    "Dallas junk hauling",
    "furniture removal Dallas",
    "appliance removal Dallas",
    "construction debris removal Dallas",
    "estate cleanout Dallas",
    "Dallas TX junk pickup",
    "residential junk removal Dallas",
    "commercial junk removal Dallas",
    "eco-friendly junk removal Dallas",
    "licensed junk removal Dallas",
    "insured junk removal Dallas",
    "Dallas area junk removal",
    "North Dallas junk removal",
    "South Dallas junk removal",
    "East Dallas junk removal",
    "West Dallas junk removal",
    "Downtown Dallas junk removal",
    "Dallas County junk removal",
  ],
  openGraph: {
    title: "Affordable Junk Removal Services in Dallas TX | Jay's EZ Junk Removal",
    description:
      "Top-rated junk removal service in Dallas, Texas. Same-day pickup, fair pricing, eco-friendly disposal. Serving all Dallas neighborhoods since 2020.",
    url: "https://jaysezjunkremoval.com/dallas",
    siteName: "Jay's EZ Junk Removal",
    images: [
      {
        url: "/images/logowithblack.png",
        width: 1200,
        height: 630,
        alt: "Jay's EZ Junk Removal Dallas Texas Professional Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Dallas TX | Same-Day Service | Jay's EZ Junk Removal",
    description:
      "Professional junk removal in Dallas, Texas. Same-day service, affordable rates. Call 214-258-3511 for free quote!",
    images: ["/images/logowithblack.png"],
  },
  alternates: {
    canonical: "https://jaysezjunkremoval.com/dallas",
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

const dallasJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jay's EZ Junk Removal - Dallas",
  image: "https://jaysezjunkremoval.com/images/logowithblack.png",
  "@id": "https://jaysezjunkremoval.com/dallas#business",
  url: "https://jaysezjunkremoval.com/dallas",
  telephone: "+1-214-258-3511",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7767,
    longitude: -96.797,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Dallas",
      "@id": "https://en.wikipedia.org/wiki/Dallas",
    },
    {
      "@type": "Place",
      name: "North Dallas, TX",
    },
    {
      "@type": "Place",
      name: "South Dallas, TX",
    },
    {
      "@type": "Place",
      name: "East Dallas, TX",
    },
    {
      "@type": "Place",
      name: "West Dallas, TX",
    },
    {
      "@type": "Place",
      name: "Downtown Dallas, TX",
    },
    {
      "@type": "Place",
      name: "Dallas County, TX",
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
    name: "Junk Removal Services Dallas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Same-Day Junk Removal Dallas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Removal Dallas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Appliance Removal Dallas",
        },
      },
    ],
  },
}

const Dallas = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dallasJsonLd) }} />

      <div className="min-h-screen gradient-bg text-white">
        <Header />

        <main>
          <HeroSectionDallas />
          <About />
          <ServicesSection />
          <ContactForm />
          <CallToAction />
          
          <TestimonialsSection />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Dallas
