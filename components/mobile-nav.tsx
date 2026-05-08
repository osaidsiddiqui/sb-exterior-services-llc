"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { Menu, X, ChevronDown } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const toggleLocations = () => setLocationsOpen(!locationsOpen)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent both vertical and horizontal scroll
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = "0"
      document.body.style.left = "0"
      document.body.style.right = "0"
      document.body.style.width = "100vw"
    } else {
      // Revert styles
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <Button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-[60] glass-card text-white hover:neon-gradient border border-neon/30 p-7"
        size="sm"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Fullscreen Background Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden" onClick={closeMenu} />}

      {/* Mobile Sliding Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-full z-50 bg-green-600 border-l border-black/100 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col  border-l border-black/100">
          {/* Header */}
          <div className="flex items-center justify-between mb-8  border-black/100">
            <div className="text-lg font-bold text-white">
              JAY'S <span className="text-neon">EZ</span> JUNK REMOVAL
            </div>
            <Button
              onClick={closeMenu}
              className="glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-2"
              size="sm"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-3 flex-1 hover:hover-neon bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-inner">
            {[
              { href: "/", label: "Home" },
              { href: "/#about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/#contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                className="block w-full text-white font-medium text-lg px-5 py-3 rounded-lg bg-green-800 hover:bg-neon hover:text-black transition-all duration-200 shadow hover:shadow-md"
              >
                {label}
              </Link>
            ))}

            <div className="space-y-2">
              <Button
                onClick={toggleLocations}
                className="w-full text-white font-medium text-lg px-5 py-3 rounded-lg bg-green-800 hover:bg-neon hover:text-black transition-all duration-200 shadow hover:shadow-md flex items-center justify-between"
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
              </Button>

              {locationsOpen && (
                <div className="ml-4 space-y-2">
                  <Link
                    href="/dallas"
                    onClick={closeMenu}
                    className="block w-full text-white font-medium text-base px-4 py-2 rounded-lg bg-green-700 hover:bg-neon hover:text-black transition-all duration-200"
                  >
                    Dallas
                  </Link>
                  <Link
                    href="/red-oak"
                    onClick={closeMenu}
                    className="block w-full text-white font-medium text-base px-4 py-2 rounded-lg bg-green-700 hover:bg-neon hover:text-black transition-all duration-200"
                  >
                    Red Oak
                  </Link>
                  <Link
                    href="/waxahachie"
                    onClick={closeMenu}
                    className="block w-full text-white font-medium text-base px-4 py-2 rounded-lg bg-green-700 hover:bg-neon hover:text-black transition-all duration-200"
                  >
                    Waxahachie
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
