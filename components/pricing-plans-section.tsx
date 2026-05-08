import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredAnimation } from "@/components/staggered-animation"

export function PricingPlansSection() {
  const pricingPlans = [
    {
      title: "Basic Junk Removal",
      price: "Starting at $99",
      description:
        "Perfect for small junk removal jobs in Dallas & DFW. Same-day pickup for furniture, appliances & light debris.",
      features: [
        "Up to 1/4 truck load",
        "Small cleanouts & single items",
        "Same-day service available",
        "Licensed & insured crew",
      ],
    },
    {
      title: "Full Property Cleanouts",
      price: "Custom Quote",
      description:
        "Complete cleanout services for homes, rentals & commercial properties in Dallas, Red Oak & DFW areas.",
      features: [
        "Full truck capacity included",
        "Complete property cleanouts",
        "Multiple trips if needed",
        "Eco-friendly disposal options",
      ],
    },
    {
      title: "Demolition & Heavy-Duty Jobs",
      price: "Custom Quote",
      description: "Professional demolition, site clearing & heavy-duty junk removal across DFW.",
      features: [
        "Site assessment included",
        "Professional demolition equipment",
        "Debris hauling & disposal",
        "Cleanup after demolition",
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transparent <span className="text-neon">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300">Fair, upfront pricing with no hidden fees</p>
        </AnimatedSection>

        <StaggeredAnimation
          staggerDelay={200}
          animation="scaleIn"
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300">
              <CardContent className="p-0 text-center">
                <div className="neon-gradient text-black font-bold text-lg px-4 py-2 rounded-full inline-block mb-6">
                  {plan.title}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-neon mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full glass-card text-white hover:neon-gradient hover:text-black border border-neon font-semibold py-3 rounded-full transition-all duration-300"
                >
                  <Link href="/#contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  )
}
