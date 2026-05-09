"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const SBLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
    className="w-10 h-10"
  >
    <defs>
      <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3AAA35" />
        <stop offset="100%" stopColor="#3AAA35" />
      </linearGradient>
    </defs>
    {/* Outer green chevron */}
    <path
      d="M 15 60 L 50 25 L 85 60"
      stroke="#3AAA35"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner navy chevron */}
    <path
      d="M 30 60 L 50 40 L 70 60"
      stroke="#1B3A6B"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0A0F1C]/95 backdrop-blur border-b border-[#3AAA35]/20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <SBLogo />
            <div className="hidden sm:block">
              <div className="font-['Bebas_Neue'] text-lg font-bold text-[#3AAA35] tracking-widest">SB</div>
              <div className="font-['Bebas_Neue'] text-xs text-[#3AAA35] tracking-wider leading-none">
                EXTERIOR SERVICES
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors font-['Barlow'] font-500 text-sm ${
                  isActive(link.href)
                    ? "text-[#3AAA35]"
                    : "text-white hover:text-[#3AAA35]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:4075029795"
              className="flex items-center gap-2 text-white hover:text-[#3AAA35] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-['Barlow'] font-500">(407) 502-9795</span>
            </a>
            <Button
              asChild
              className="bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 px-6 py-2 rounded text-sm uppercase tracking-wider"
            >
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#3AAA35] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#3AAA35]/20">
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors font-['Barlow'] text-sm py-2 ${
                    isActive(link.href)
                      ? "text-[#3AAA35]"
                      : "text-white hover:text-[#3AAA35]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:4075029795"
                className="flex items-center gap-2 text-white hover:text-[#3AAA35] transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-['Barlow'] text-sm">(407) 502-9795</span>
              </a>
              <Button
                asChild
                className="bg-[#3AAA35] hover:bg-[#4DC447] text-white font-['Barlow'] font-600 w-full py-2 rounded text-sm uppercase tracking-wider"
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
