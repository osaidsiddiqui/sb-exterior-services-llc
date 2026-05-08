import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Jayson was wonderful to work with! He was responsive, timely, and very professional. He arrived when he said he would and had the tools to get the job done right. I will definitely use him again for future projects!",
      author: "Jennifer Kirkley",
    },
    {
      text: "Wonderful customer service and professional! We called him and he was able to be at our location in 20 minutes! Super quick and easy!",
      author: "Chloe Insley",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-neon">Customers</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-neon fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4 text-lg italic">{testimonial.text}</p>
                <p className="font-bold text-neon">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
