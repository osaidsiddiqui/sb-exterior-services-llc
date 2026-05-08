"use client";

import React from "react";
import { MapPin, CheckCircle, Clock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Correct Button component
import Link from "next/link"; // Next.js Link for internal navigation
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl">
          {/* Content Wrapper */}
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              About <span className="text-neon">Jay's EZ Junk Removal</span>
            </h2>

            {/* Sub-heading */}
            <h3 className="text-base sm:text-lg md:text-xl text-gray-300">
              Serving Dallas, Red Oak & DFW
            </h3>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-2 sm:px-0">
              Based in Red Oak, TX, we're your trusted local junk removal
              experts serving the entire DFW area. Our professional team
              provides fast, reliable, and affordable solutions for both
              residential and commercial clients.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {/* Feature 1 */}
              <div className="text-center">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-neon mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                  Local Experts
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Based in Red Oak, TX
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-neon mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                  Bilingual Support
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  English & Spanish
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-neon mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                  Fast Service
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Same-day available
                </p>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {/* Call Button */}
            <Button
              className="w-full sm:w-auto neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full neon-glow-hover transition-all duration-300"
              onClick={() => (window.location.href = 'tel:2142583511')}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call for Junk Removal Dallas, TX
            </Button>

            {/* Estimate Button */}
            <Link href="#contact" passHref>
              <Button className="w-full sm:w-auto glass-card text-white hover:neon-gradient hover:text-black border border-neon font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Free Estimate in Red Oak & DFW
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};
