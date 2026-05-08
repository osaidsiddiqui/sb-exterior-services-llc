import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Hammer, Building2, Zap, Home, Truck, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { StaggeredAnimation } from "@/components/staggered-animation"

export function ServicesGridSection() {
  const services = [
    {
      icon: Trash2,
      title: "Junk Removal Services in Dallas & DFW",
      description:
        "Affordable junk removal services in Dallas, Red Oak & all of DFW. We handle furniture, appliances, yard waste & complete property cleanouts. Same-day junk removal available!",
      features: [
        "Furniture & appliance removal",
        "Yard waste & debris cleanup",
        "Residential & commercial cleanouts",
        "Eco-friendly junk hauling Dallas",
      ],
    },
    {
      icon: Hammer,
      title: "Professional Demolition Services",
      description:
        "Interior teardown, shed removal, and light demolition work across Dallas & Red Oak. Fast, reliable & insured demolition services.",
      features: [
        "Interior & exterior demolition",
        "Shed & deck removal",
        "Light structural work",
        "Post-demo cleanup included",
      ],
    },
    {
      icon: Building2,
      title: "Dumpster Rental Services",
      description:
        "Easy dumpster rentals in Dallas & DFW for home projects, renovations & cleanouts. Flexible rental periods with delivery & pickup included.",
      features: [
        "Multiple dumpster sizes",
        "Drop-off & pickup service",
        "Flexible rental terms",
        "Disposal & recycling options",
      ],
    },
    {
      icon: Zap,
      title: "Skid Steer & Heavy Equipment Work",
      description:
        "Heavy-duty skid steer work for land clearing, grading & debris removal. Serving Dallas, Red Oak & all DFW areas.",
      features: ["Land clearing & grading", "Debris pushing & removal", "Material moving", "Professional operators"],
    },
    {
      icon: Home,
      title: "Property Cleanout Services",
      description:
        "Full property cleanouts for real estate, rental turnovers & eviction situations. Complete cleanout service in Dallas & Red Oak.",
      features: [
        "Estate & foreclosure cleanouts",
        "Rental property turnovers",
        "Eviction junk removal",
        "Move-out cleanup services",
      ],
    },
    {
      icon: Building2,
      title: "Construction Debris Removal",
      description: "Post-construction cleanup & debris hauling services for residential & commercial projects in DFW.",
      features: [
        "Site cleanup after construction",
        "Material hauling & disposal",
        "Bulk debris removal",
        "Same-day service available",
      ],
    },
    {
      icon: Truck,
      title: "Material Transport Services",
      description:
        "Reliable material delivery & transport services for gravel, mulch, and building materials across Dallas & Red Oak.",
      features: ["Material delivery & pickup", "Bulk transport options", "Equipment hauling", "Flexible scheduling"],
    },
    {
      icon: Truck,
      title: "Trailer Rentals in Dallas & DFW",
      description:
        "Affordable trailer rentals for hauling, cleanup & moving projects. Various sizes & flexible rental terms available.",
      features: [
        "Multiple trailer sizes",
        "Flexible rental options",
        "Delivery & pickup service",
        "Professional-grade equipment",
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <StaggeredAnimation staggerDelay={200} animation="fadeInUp" className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <service.icon className="w-12 h-12 text-neon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-neon mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="mt-6 neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-semibold px-6 py-2 rounded-full transition-all duration-300"
                    >
                      <Link href="/#contact">
                        Request Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  )
}
