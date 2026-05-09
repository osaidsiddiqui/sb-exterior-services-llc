import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Zap, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About SB Exterior Services LLC | Saeed's Exterior Cleaning",
  description:
    "Learn about SB Exterior Services LLC, founded by Saeed. Fully insured, 5-star rated pressure washing and soft washing in Central Florida.",
  keywords: ["about us", "exterior cleaning company", "SB Exterior Services"],
  alternates: { canonical: "https://sbexteriorservices.com/about" },
}

export const revalidate = 0

export default function AboutPage() {
  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#111827] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white mb-4 tracking-tight">
              About SB Exterior Services
            </h1>
            <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
              Local, trusted, and fully insured — serving Central Florida homeowners since day one.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Bebas_Neue'] text-4xl text-white mb-8 tracking-tight">
              Who We Are
            </h2>
            <p className="font-['Barlow'] text-lg text-[#B0BAC9] leading-relaxed mb-6">
              SB Exterior Services LLC is a locally owned and operated exterior cleaning company based in Central Florida. Founded by Saeed, a passionate and detail-driven professional, SB Exterior Services was built on one simple belief: every home deserves to look its best.
            </p>
            <p className="font-['Barlow'] text-lg text-[#B0BAC9] leading-relaxed">
              Saeed brings hands-on expertise in soft washing, pressure washing, and specialized roof and stucco cleaning — combined with a commitment to treating every customer's property with the same care he'd give his own. From small residential jobs to larger commercial projects, Saeed shows up on time, communicates clearly, and gets the job done right the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-['Bebas_Neue'] text-4xl text-white mb-12 text-center tracking-tight">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-[#3AAA35] mb-4" />
                <h3 className="font-['Bebas_Neue'] text-xl text-white mb-3 tracking-wide">
                  Local & Trustworthy
                </h3>
                <p className="font-['Barlow'] text-[#B0BAC9]">
                  We're your neighbors. We show up when we say we will and stand behind our work 100%.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-[#3AAA35] mb-4" />
                <h3 className="font-['Bebas_Neue'] text-xl text-white mb-3 tracking-wide">
                  Detail-Oriented
                </h3>
                <p className="font-['Barlow'] text-[#B0BAC9]">
                  Saeed doesn't cut corners. Every job gets the same meticulous attention to detail regardless of size.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-[#3AAA35] mb-4" />
                <h3 className="font-['Bebas_Neue'] text-xl text-white mb-3 tracking-wide">
                  Customer-First
                </h3>
                <p className="font-['Barlow'] text-[#B0BAC9]">
                  We listen, we're flexible with budgets, and we don't leave until you're completely satisfied.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1A2235] border border-[#3AAA35]/20 rounded-lg p-12 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-[#111827] rounded-full mx-auto flex items-center justify-center border-4 border-[#3AAA35]">
                  <span className="font-['Bebas_Neue'] text-4xl text-[#3AAA35]">S</span>
                </div>
              </div>

              <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-2 tracking-tight">
                Saeed
              </h3>
              <p className="text-[#3AAA35] font-['Barlow'] font-600 mb-6">
                Founder & Owner
              </p>

              <p className="font-['Barlow'] text-[#B0BAC9] leading-relaxed mb-6">
                Fully insured, highly rated, and passionate about exterior cleaning. Saeed personally handles every job to ensure consistent quality.
              </p>

              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#3AAA35] text-[#3AAA35]" />
                ))}
                <span className="font-['Barlow'] font-600 text-[#3AAA35] ml-2">5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-6">
                <div className="text-3xl font-['Bebas_Neue'] text-[#3AAA35] mb-2">✓</div>
                <p className="font-['Barlow'] text-sm text-[#B0BAC9]">Fully Insured</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-6">
                <div className="text-3xl font-['Bebas_Neue'] text-[#3AAA35] mb-2">5★</div>
                <p className="font-['Barlow'] text-sm text-[#B0BAC9]">5-Star Rated</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-6">
                <div className="text-3xl font-['Bebas_Neue'] text-[#3AAA35] mb-2">FL</div>
                <p className="font-['Barlow'] text-sm text-[#B0BAC9]">Central Florida Based</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1A2235] border-[#3AAA35]/20">
              <CardContent className="p-6">
                <div className="text-3xl font-['Bebas_Neue'] text-[#3AAA35] mb-2">⚙️</div>
                <p className="font-['Barlow'] text-sm text-[#B0BAC9]">Residential & Commercial</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />
      <CTASection />
      <Footer />
    </div>
  )
}
