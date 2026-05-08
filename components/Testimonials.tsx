"use client";

import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const ReviewsSection = () => {
  const reviews = [
    {
      stars: 5,
      text: `Jayson was wonderful to work with! He was responsive, timely, and very professional. He arrived when he said he would and had the tools to get the job done right. I will definitely use him again for future projects!`,
      author: "Jennifer Kirkley",
    },
    {
      stars: 5,
      text: `Wonderful customer service and professional! We called him and he was able to be at our location in 20 minutes! Super quick and easy!`,
      author: "Chloe Insley",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-neon">Customers</span> Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="glass-card p-8 rounded-2xl">
              <CardContent className="p-0">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-neon fill-current"
                    />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-white mb-4 text-lg italic">{review.text}</p>
                {/* Author */}
                <p className="font-bold text-neon">{review.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
