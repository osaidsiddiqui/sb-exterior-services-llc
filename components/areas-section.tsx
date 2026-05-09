import { MapPin } from "lucide-react"

export function AreasSection() {
  const areas = [
    "Orlando, FL",
    "Kissimmee, FL",
    "Sanford, FL",
    "Apopka, FL",
    "Clermont, FL",
    "Oviedo, FL",
    "Winter Park, FL",
    "All of Central Florida",
  ]

  return (
    <section className="py-20 bg-[#111827] border-t border-[#3AAA35]/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Bebas_Neue'] text-5xl text-white mb-4 tracking-tight">
            Areas We Serve
          </h2>
          <p className="font-['Barlow'] text-lg text-[#B0BAC9] max-w-2xl mx-auto">
            Proudly serving the entire Central Florida region
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-[#0A0F1C] border border-[#3AAA35]/20 hover:border-[#3AAA35]/60 rounded-lg p-4 text-center transition-all hover:bg-[#1A2235]"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#3AAA35]" />
                <span className="text-white font-['Barlow'] font-500">{area}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
