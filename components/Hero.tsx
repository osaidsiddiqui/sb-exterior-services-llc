"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, Trash2, Hammer, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button"; // Make sure this exists
import { Card, CardContent } from "./ui/card";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-auto lg:h-screen py-10 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight text-white">
                Junk Removal in{" "}
                <span className="text-neon">Dallas, Red Oak & DFW</span>
              </h1>
              <div className="text-lg sm:text-2xl lg:text-4xl font-bold text-neon">
                Same-Day, Affordable Junk Removal Services
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed">
                Jay's EZ Junk Removal offers fast, eco-friendly junk removal
                and demolition services across Dallas, Red Oak & the entire DFW
                area. Reliable, affordable, and licensed professionals for
                residential and commercial cleanouts.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              {/* Call Button */}
              <Button
                onClick={() => (window.location.href = "tel:2142583511")}
                className="hidden md:flex neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300 w-full sm:w-auto items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Junk Removal Dallas, TX
              </Button>

              {/* Free Estimate Button */}
              <Link href="#contact" passHref>
                <Button className="w-full sm:w-auto glass-card text-white hover:neon-gradient hover:text-black border border-neon font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Free Estimate in Red Oak & DFW
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Services Cards */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Trash2,
                  title: "Junk Removal Dallas, TX",
                  desc: "Complete cleanouts",
                  delay: "0s",
                },
                {
                  icon: Hammer,
                  title: "Demolition Services DFW",
                  desc: "Professional demo",
                  delay: "1s",
                },
                {
                  icon: Truck,
                  title: "Dumpster Rental Red Oak",
                  desc: "Drop-off & pickup",
                  delay: "2s",
                },
                {
                  icon: Zap,
                  title: "Skid Steer Services Dallas",
                  desc: "Heavy-duty work",
                  delay: "3s",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card p-4 sm:p-6 floating-animation"
                    style={{ animationDelay: item.delay }}
                  >
                    <CardContent className="p-0 text-center">
                      <Icon className="w-10 sm:w-12 h-10 sm:h-12 text-neon mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
