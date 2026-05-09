import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Reviews | SB Exterior Services LLC | 5-Star Rated",
  description:
    "Read verified reviews from happy SB Exterior Services customers in Central Florida. 5-star rated pressure washing and exterior cleaning.",
  keywords: ["reviews", "customer reviews", "5 star rated"],
  alternates: { canonical: "https://sbexteriorservices.com/reviews" },
}

export const revalidate = 0

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Clara Otto",
      text: "I'm almost always disappointed when we hire people to do things because my husband and I have high expectations and I will say he exceeded our expectations! This guy is legit!! Saeed did an amazing job!! 10/10 recommend him for any pressure washing needs.",
      rating: 5,
    },
    {
      name: "Jenna Chrisman",
      text: "Amazing job at an affordable cost. I am BEYOND IMPRESSED with the quality of work. I will be rehiring frequently!!!! Thank you!",
      rating: 5,
    },
    {
      name: "Nicole Warner",
      text: "I couldn't be happier with the results from the pressure washing and soft house cleaning services! From start to finish, Saeed was professional, punctual, and incredibly thorough. They brought my exterior back to life — siding, driveway, and even the gutters look brand new. Outstanding work and excellent customer service — worth every penny!",
      rating: 5,
    },
    {
      name: "Fuisher Simpson Richards",
      text: "Saeed did a great job with my house. He was very knowledgeable and experienced in order to maintain the stucco on the structure of the property. I appreciate his expertise and would recommend that he can be trusted with your prized possessions.",
      rating: 5,
    },
    {
      name: "Lizz Adames",
      text: "Great experience! He was friendly, understanding, and very negotiable. He worked around my budget and listened to my concerns when he arrived. Got the job done efficiently. Highly recommend — 10/10!",
      rating: 5,
    },
    {
      name: "Bryan Harricharan Singh",
      text: "Saeed did an amazing job pressure washing my house. He was professional and very reasonable in price. I would recommend his services and will be using him again.",
      rating: 5,
    },
    {
      name: "Joann Ortiz",
      text: "Yes I love the job that was done. I give him 5 stars.",
      rating: 5,
    },
    {
      name: "Matt Milholin",
      text: "Saeed came out to my house today. SUPER professional and showed up early. Did everything he said he would and it came out even better. He is the jack of all trades!",
      rating: 5,
    },
  ]

  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#111827] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white mb-4 tracking-tight">
              Customer Reviews
            </h1>
            <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
              Don't take our word for it — here's what Central Florida homeowners are saying.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8">
            <div className="font-['Bebas_Neue'] text-7xl text-[#3AAA35] tracking-wide">5.0★</div>
          </div>
          <p className="font-['Barlow'] text-[#B0BAC9] mb-2">Based on 8 verified reviews</p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#3AAA35] text-[#3AAA35]" />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-[#1A2235] border-[#3AAA35]/20 hover:border-[#3AAA35]/40 transition-all rounded-lg group"
              >
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#3AAA35] fill-[#3AAA35]"
                      />
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#3AAA35]/20 mb-6"></div>

                  {/* Quote */}
                  <p className="text-white mb-6 leading-relaxed font-['Barlow']">
                    "{review.text}"
                  </p>

                  {/* Author */}
                  <p className="font-['Bebas_Neue'] text-[#3AAA35] font-600 tracking-wide">
                    {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-['Bebas_Neue'] text-4xl text-white mb-6 tracking-tight">
            Ready to join our happy customers?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      <ContactForm />
      <CTASection />
      <Footer />
    </div>
  )
}
