import { ContactForm } from "@/components/ContactForm"
import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import { ServicesHeroSection } from "@/components/services-hero-section"
import { ServicesGridSection } from "@/components/services-grid-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { PricingPlansSection } from "@/components/pricing-plans-section"

export const metadata = {
  title: "Junk Removal Services in Dallas, Red Oak & DFW | Jay's EZ Junk Removal",
  description:
    "Same-day junk removal services in Dallas, Red Oak & all of DFW. Affordable & fast junk hauling by Jay's EZ Junk Removal. Call 214-258-3511 for free quote!",
  keywords: [
    "junk removal services in Dallas, TX",
    "junk removal service Red Oak, TX",
    "junk removal service DFW",
    "same-day junk removal",
    "emergency junk pickup",
    "best junk removal company near me",
    "affordable junk removal Dallas",
    "Jay's EZ Junk Removal",
  ],
  alternates: { canonical: "https://jaysezjunkremoval.com/services" },
  openGraph: {
    title: "Same-Day Junk Removal Services Dallas & Red Oak | Jay's EZ Junk Removal",
    description: "Fast, affordable junk removal services across DFW. Residential, commercial & emergency cleanouts.",
    url: "https://jaysezjunkremoval.com/services",
    images: [{ url: "/images/logowithblack.png", width: 1200, height: 630 }],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen gradient-bg text-white">
      <Header />

      <ServicesHeroSection />
      <ServicesGridSection />
      <ServiceAreasSection />
      <PricingPlansSection />
      <ContactForm />

      <Footer />
    </div>
  )
}
