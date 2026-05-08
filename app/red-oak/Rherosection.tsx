"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function HeroSectionRedOak() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative overflow-hidden h-auto lg:h-screen py-8 md:py-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Side - Tagline */}
          <div className="space-y-4 relative z-10">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Affordable <span className="text-neon">Junk Removal Services</span> in RedOak, TX
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-md leading-relaxed">
             Same-day junk removal in RedOak, TX with affordable demolition, dumpster rental, and skid steer services. We provide fast, eco-friendly cleanouts for RedOak homes and businesses. Call 214-258-3511 for a free quote!
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative z-10 glass-card rounded-xl p-5 sm:p-6 shadow-lg">
            <form
              action="https://formsubmit.co/Jayson@jaysezjunkremoval.com"
              method="POST"
              className="space-y-4"
              onSubmit={() => setSubmitted(true)}
            >
              {/* Hidden inputs */}
              <input type="hidden" name="_next" value="https://jaysezjunkremoval.com/thank-you" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-white font-semibold mb-1 text-sm">Name *</label>
                  <Input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="glass-card border-white/20 text-white text-sm placeholder:text-gray-400 focus:border-neon rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-1 text-sm">Phone *</label>
                  <Input
                    required
                    type="tel"
                    name="phone"
                    placeholder="(214) 555-0123"
                    className="glass-card border-white/20 text-white text-sm placeholder:text-gray-400 focus:border-neon rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-1 text-sm">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="glass-card border-white/20 text-white text-sm placeholder:text-gray-400 focus:border-neon rounded-lg"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1 text-sm">Service Needed</label>
                <Select name="service">
                  <SelectTrigger className="glass-card border-white/20 text-white text-sm focus:border-neon rounded-lg">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/20">
                    <SelectItem value="junk-removal">Junk Removal</SelectItem>
                    <SelectItem value="demolition">Demolition</SelectItem>
                    <SelectItem value="dumpster-rental">Dumpster Rental</SelectItem>
                    <SelectItem value="skid-steer">Skid Steer Work</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-1 text-sm">Message</label>
                <Textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="glass-card border-white/20 text-white text-sm placeholder:text-gray-400 focus:border-neon rounded-lg"
                />
              </div>

              <Button
                type="submit"
                className="w-full neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-semibold text-base py-3 rounded-lg neon-glow-hover transition-all duration-300"
              >
                {submitted ? "Sending..." : "Submit Request"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Center CTA */}
        <div className="flex justify-center mt-8 relative z-10">
          <Button
            asChild
            className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-semibold text-base px-6 py-3 rounded-full neon-glow-hover transition-all duration-300"
          >
            <a href="tel:2142583511">Urgent Junk Removal Service in RedOak, TX</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
