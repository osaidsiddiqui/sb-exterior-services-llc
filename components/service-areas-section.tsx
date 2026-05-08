import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredAnimation } from "@/components/staggered-animation"

export function ServiceAreasSection() {
  const serviceAreas = [
    "Red Oak, TX",
    "Lancaster, TX",
    "Ennis, TX",
    "Waxahachie, TX",
    "Dallas, TX",
    "Cedar Hill, TX",
    "Duncanville, TX",
    "Wilmer, TX",
    "Arlington, TX",
    "Grand Prairie, TX",
    "All of DFW",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fadeInUp">
          <Card className="glass-card p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Service <span className="text-neon">Areas</span>
              </h2>
              <p className="text-xl text-gray-300">Proudly serving the entire Dallas-Fort Worth metroplex</p>
            </div>

            <StaggeredAnimation
              staggerDelay={80}
              animation="scaleIn"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl border border-neon/20 hover:border-neon transition-colors text-center"
                >
                  <MapPin className="w-5 h-5 text-neon mx-auto mb-2" />
                  <span className="text-white font-medium">{area}</span>
                </div>
              ))}
            </StaggeredAnimation>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
