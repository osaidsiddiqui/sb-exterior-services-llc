import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-[#111827] border-y border-[#3AAA35]/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-[#0A0F1C] border-l-4 border-[#3AAA35] p-12 rounded-lg text-center md:text-left">
          <h2 className="font-['Bebas_Neue'] text-5xl text-white mb-4 tracking-tight">
            Ready for a Cleaner Home?
          </h2>

          <p className="font-['Barlow'] text-lg text-[#B0BAC9] mb-8 max-w-2xl">
            Get your free estimate today — fast, affordable, and fully insured.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
            >
              <Link href="/contact">Request Free Estimate</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border border-[#3AAA35] text-[#3AAA35] hover:bg-[#3AAA35] hover:text-white font-['Barlow'] font-600 px-8 py-3 rounded text-base uppercase tracking-wider transition-all"
            >
              <a href="tel:4075029795" className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call (407) 502-9795
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
