import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "I'm almost always disappointed when we hire people to do things because my husband and I have high expectations and I will say he exceeded our expectations! This guy is legit!! Saeed did an amazing job!! 10/10 recommend him for any pressure washing needs.",
      author: "Clara Otto",
      rating: 5,
    },
    {
      text: "I couldn't be happier with the results from the pressure washing and soft house cleaning services! From start to finish, Saeed was professional, punctual, and incredibly thorough. Outstanding work and excellent customer service — worth every penny!",
      author: "Nicole Warner",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-[#0A0F1C]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-8 bg-[#3AAA35]"></div>
            <span className="font-['Barlow'] text-[#3AAA35] text-xs uppercase tracking-[0.2em] font-600">TESTIMONIALS</span>
            <div className="h-1 w-8 bg-[#3AAA35]"></div>
          </div>
          <h2 className="font-['Bebas_Neue'] text-5xl text-white mb-6 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
            Don't take our word for it — here's what Central Florida homeowners are saying
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#1A2235] border-[#3AAA35]/20 hover:border-[#3AAA35]/40 transition-all rounded-lg group"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#3AAA35] fill-[#3AAA35]"
                    />
                  ))}
                </div>
                <div className="h-px bg-[#3AAA35]/20 mb-6"></div>
                <p className="text-white mb-6 leading-relaxed font-['Barlow']">
                  "{testimonial.text}"
                </p>
                <p className="font-['Bebas_Neue'] text-[#3AAA35] font-600">
                  {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
          >
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
