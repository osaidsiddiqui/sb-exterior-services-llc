"use client";

import React from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Correct button import
import { Card, CardContent } from "./ui/card";

export const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <Card className="glass-card p-8 sm:p-12 rounded-3xl text-center pulse-glow">
          <CardContent className="p-0">
            {/* SEO Optimized Heading */}
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Fast & Affordable Junk Removal{" "}
              <span className="text-neon">Dallas, TX</span>
            </h2>

            {/* SEO Optimized Paragraph */}
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Get your junk removed We provide{" "}
              <span className="text-neon">same-day junk removal services</span>{" "}
              across Dallas and the DFW area. From old furniture and appliances
              to full property cleanouts, our team makes junk hauling easy,
              reliable, and affordable.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Request Estimate Button */}
              <Button
                asChild
                className="w-full sm:w-auto neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full neon-glow-hover transition-all duration-300"
              >
                <Link href="#contact">Request a Free Estimate</Link>
              </Button>

              {/* Call Button */}
              <Button
                asChild
                className="w-full sm:w-auto neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full neon-glow-hover transition-all duration-300"
              >
                <a
                  href="tel:2142583511"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (214) 258-3511
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
