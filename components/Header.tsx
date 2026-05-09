"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

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
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2Ff74074879a9141cc8130ede8bd7e90e2?format=webp&width=800&height=1200"
              alt="SB Exterior Services Logo"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
              priority
            />
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
