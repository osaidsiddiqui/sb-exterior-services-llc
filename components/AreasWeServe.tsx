"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { Card } from "./ui/card";

export const AreasWeServe = () => {
  const areas = [
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
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <Card className="glass-card p-12 rounded-3xl">
          {/* Heading Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Areas We <span className="text-neon">Serve</span>
            </h2>
            <p className="text-xl text-gray-300">
              Proudly serving the entire DFW metroplex
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {areas.map((area, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl border border-neon/20 hover:border-neon transition-colors"
              >
                <MapPin className="w-5 h-5 text-neon mx-auto mb-2" />
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
