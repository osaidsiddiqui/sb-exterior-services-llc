export function ServicesHeroSection() {
  return (
    <section className="relative py-16 sm:py-20 min-h-[60vh] flex items-center overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center w-full">
        <div className="animate-fadeInUp">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-snug mb-6">
            Affordable <span className="text-neon">Junk Removal & Hauling</span>
            <br className="hidden sm:block" />
            Services Across Dallas & DFW
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
            Same-day junk removal, demolition, and hauling services for homes and businesses throughout Dallas, Red Oak,
            and the entire DFW metroplex. Fast, reliable, and eco-friendly solutions at competitive prices.
          </p>
        </div>
      </div>

      {/* Background elements (static glow) */}
      <div className="absolute top-12 left-6 sm:left-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-neon/10 rounded-full blur-2xl" />
      <div className="absolute top-32 right-8 sm:right-16 w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 bg-blue-400/10 rounded-full blur-xl" />
      <div className="absolute bottom-12 left-1/4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-green-400/10 rounded-full blur-lg" />
    </section>
  )
}
