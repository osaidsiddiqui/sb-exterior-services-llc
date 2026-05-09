import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function GallerySection() {
  const galleryItems = [
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F6cd5cfd77e224857ae1fa098d97fd3b3", alt: "Before and after pressure washing", service: "House Washing" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F745fbb27e9854147841446cb65c8087c", alt: "Driveway cleaning results", service: "Driveway Cleaning" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F3dae89eb1c824d909d919dfd35a31918", alt: "Roof cleaning", service: "Roof Cleaning" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F4fdd4bc5e5f04e97803490947a5a7f15", alt: "Gutter cleaning", service: "Gutter Cleaning" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2Fa2405d87a8f54b5bb9a74eec1e72f3c7", alt: "Soft washing results", service: "Soft Washing" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F45f7794ff9d844bd81b80a1037b1064b", alt: "Commercial pressure washing", service: "Commercial Cleaning" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2Feb0ae111560046b5a76f2cef5d2703f3", alt: "Patio cleaning", service: "Soft Washing" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F41cfca8972e5494abe11ae8b24b12c50", alt: "Driveway transformation", service: "Driveway Cleaning" },
  ]

  return (
    <section className="py-20 bg-[#0A0F1C]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-8 bg-[#3AAA35]"></div>
            <span className="font-['Barlow'] text-[#3AAA35] text-xs uppercase tracking-[0.2em] font-600">GALLERY</span>
            <div className="h-1 w-8 bg-[#3AAA35]"></div>
          </div>
          <h2 className="font-['Bebas_Neue'] text-5xl text-white mb-6 tracking-tight">
            Our Work
          </h2>
          <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
            Before & after results from real SB Exterior Services jobs across Central Florida
          </p>
        </div>

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="text-white font-['Barlow'] font-600 text-sm text-center">
                    {item.service}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
