import { Card } from "@/components/ui/card"
import Image from "next/image"

export function GallerySection() {
  const images = [
    { src: "/images/junk-pile.jpg", alt: "Large junk removal project" },
    { src: "/images/skid-steer-dumpster.jpg", alt: "Skid steer in action" },
    { src: "/images/demolition-work.jpg", alt: "Professional demolition" },
    { src: "/images/material-transport.jpg", alt: "Material transport service" },
    { src: "/images/messy-room-before.jpg", alt: "Property cleanout before" },
    { src: "/images/truck-loaded-junk.jpg", alt: "Loaded removal truck" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-neon">Work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden rounded-2xl group cursor-pointer hover:neon-glow transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  // Sirf first image ko priority dena
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="/images/placeholder-blur.jpg" // ek choti blur placeholder image bana lena
                  sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
