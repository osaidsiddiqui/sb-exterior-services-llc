import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Trash2, Hammer, Truck, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden h-auto py-10 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              {/* Headline smaller */}
              <h1 className="text-[20px] sm:text-[35px] lg:text-[50px] font-black leading-tight">
                Junk Removal in <span className="text-neon">Dallas, Red Oak & DFW</span>
              </h1>
              <div className="text-[16px] sm:text-[20px] lg:text-[32px] font-bold text-neon">
                Same-Day, Affordable Junk Removal Services
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg leading-relaxed">
                Jay's EZ Junk Removal offers fast, eco-friendly junk removal and demolition services across Dallas, Red
                Oak & the entire DFW area. Reliable, affordable, and licensed professionals for residential and
                commercial cleanouts.
              </p>
            </div>

            {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
  {/* Urgent Call Button */}
  <Button
    asChild
    className="w-full sm:w-auto neon-gradient text-black border-2 border-transparent 
               hover:border-neon font-bold text-base  py-3 sm:py-4 
               rounded-full neon-glow-hover transition-all duration-300 
               shadow-md hover:shadow-lg hover:scale-105"
  >
    <a
      href="tel:2142583511"
      className="flex items-center justify-center text-base"
      style={{ position: "relative", padding: "4px 10px" }}
    >
      <Phone className="w-5 h-5 mr-2" />
      Urgent Call for Junk Removal
    </a>
  </Button>

  {/* Free Estimate Button */}
  <Button
    asChild
    className="w-full sm:w-auto glass-card text-white border border-neon 
               font-bold text-base px-6 py-3 sm:px-8 sm:py-4 rounded-full 
               transition-all duration-300 shadow-md hover:shadow-lg 
               hover:scale-105 hover:neon-gradient hover:text-black"
  >
    <Link href="#contact" className="flex items-center justify-center">
      <ArrowRight className="w-5 h-5 mr-2" />
      Get Free Estimate
    </Link>
  </Button>
</div>

          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              <Card className="glass-card p-4 sm:p-5 animate-float">
                <CardContent className="p-0 text-center">
                  <Trash2 className="w-8 sm:w-10 h-8 sm:h-10 text-neon mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-1 text-[14px] sm:text-[16px]">Junk Removal Dallas, TX</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Complete cleanouts</p>
                </CardContent>
              </Card>
              <Card className="glass-card p-4 sm:p-5 animate-float delay-200">
                <CardContent className="p-0 text-center">
                  <Hammer className="w-8 sm:w-10 h-8 sm:h-10 text-neon mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-1 text-[14px] sm:text-[16px]">Demolition Services DFW</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Professional demo</p>
                </CardContent>
              </Card>
              <Card className="glass-card p-4 sm:p-5 animate-float delay-400">
                <CardContent className="p-0 text-center">
                  <Truck className="w-8 sm:w-10 h-8 sm:h-10 text-neon mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-1 text-[14px] sm:text-[16px]">Dumpster Rental Red Oak</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Drop-off & pickup</p>
                </CardContent>
              </Card>
              <Card className="glass-card p-4 sm:p-5 animate-float delay-600">
                <CardContent className="p-0 text-center">
                  <Zap className="w-8 sm:w-10 h-8 sm:h-10 text-neon mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-1 text-[14px] sm:text-[16px]">Skid Steer Services Dallas</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Heavy-duty work</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
