import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Gallery | SB Exterior Services LLC | Pressure Washing Results",
  description:
    "Before and after pressure washing and exterior cleaning results from SB Exterior Services in Central Florida.",
  keywords: ["gallery", "before and after", "pressure washing results"],
  alternates: { canonical: "https://sbexteriorservices.com/gallery" },
}

export default function GalleryPage() {
  const galleryItems = [
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F6cd5cfd77e224857ae1fa098d97fd3b3", alt: "House washing result", service: "House Washing", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F745fbb27e9854147841446cb65c8087c", alt: "Driveway cleaning before and after", service: "Driveway Cleaning", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F3dae89eb1c824d909d919dfd35a31918", alt: "Roof cleaning", service: "Roof Cleaning", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F4fdd4bc5e5f04e97803490947a5a7f15", alt: "Gutter cleaning completed", service: "Gutter Cleaning", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2Fa2405d87a8f54b5bb9a74eec1e72f3c7", alt: "Soft washing results", service: "Soft Washing", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F45f7794ff9d844bd81b80a1037b1064b", alt: "Commercial cleaning", service: "Commercial Cleaning", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2Feb0ae111560046b5a76f2cef5d2703f3", alt: "Soft washing on delicate surfaces", service: "Soft Washing", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F41cfca8972e5494abe11ae8b24b12c50", alt: "Professional driveway cleaning", service: "Driveway Cleaning", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F202dce9022694b159732a38d0b831c21", alt: "Exterior washing", service: "House Washing", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2Fa2c2e0046e054d829011b335b13dca95", alt: "Pressure washing service", service: "Pressure Washing", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F8bfe573606fe4d9f8359a92cd2941832", alt: "Cleaning completed", service: "Professional Cleaning", location: "Central Florida" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2Ff7b4d849dae549f5a57cb3889fb0d799", alt: "Transformation", service: "Complete Cleaning", location: "Central Florida" },
  ]

  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#111827] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white mb-4 tracking-tight">
              Our Work
            </h1>
            <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
              Before & after results from real SB Exterior Services jobs across Central Florida
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="bg-[#1A2235] border-[#3AAA35]/15 overflow-hidden rounded-lg group cursor-pointer hover:border-[#3AAA35]/40 transition-all hover:-translate-y-1"
              >
                <div className="aspect-square relative bg-[#111827] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-end justify-end p-4">
                    <div className="text-right">
                      <p className="text-white font-['Barlow'] font-600 text-sm">
                        {item.service}
                      </p>
                      <p className="text-[#B0BAC9] font-['Barlow'] text-xs">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <CTASection />
      <Footer />
    </div>
  )
}
