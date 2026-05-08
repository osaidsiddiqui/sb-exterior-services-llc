"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Building2, Zap, Hammer, ArrowRight } from "lucide-react"


export function ServicesSection() {
  const services = [
    {
      icon: Trash2,
      title: "Junk Removal in RedOak",
      desc: "Fast, affordable junk removal services for homes & businesses across RedOak, TX.",
    },
    {
      icon: Building2,
      title: "Dumpster Rental in RedOak",
      desc: "Convenient dumpster drop-off & pickup services for residential & commercial projects.",
    },
    {
      icon: Zap,
      title: "Skid Steer Work in RedOak",
      desc: "Heavy-duty skid steer services for land clearing, debris removal & construction support.",
    },
    {
      icon: Hammer,
      title: "Demolition in RedOak",
      desc: "Safe & efficient interior/exterior demolition services in RedOak & nearby areas.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            RedOak <span className="text-neon">Junk Removal & Services</span>
          </h2>
          <p className="text-xl text-gray-300">
            Same-day junk hauling, dumpster rental, demolition & skid steer services in RedOak, TX.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-card p-6 rounded-2xl hover:neon-glow transition-all duration-300 group"
            >
              <CardContent className="p-0 text-center flex flex-col h-full">
                <service.icon className="w-12 h-12 text-neon mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-2 text-lg">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{service.desc}</p>
                <Button
                  asChild
                  size="sm"
                  className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-semibold px-4 py-2 rounded-full transition-all duration-300"
                >
                  <a href="#contact">Get a Free Quote</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300"
          >
            <a href="#contact" className="flex items-center">
              Request Junk Removal Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
