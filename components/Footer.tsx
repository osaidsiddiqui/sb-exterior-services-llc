"use client"

import React from "react"
import Link from "next/link"
import { Facebook, Tv } from "lucide-react"

const SBLogoSmall = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    className="w-8 h-8"
  >
    <path
      d="M 15 60 L 50 25 L 85 60"
      stroke="#3AAA35"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1C] border-t border-[#3AAA35]/20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SBLogoSmall />
              <div>
                <div className="font-['Bebas_Neue'] text-sm font-bold text-[#3AAA35] tracking-widest">SB EXTERIOR</div>
                <div className="font-['Bebas_Neue'] text-xs text-[#3AAA35] tracking-wider">SERVICES LLC</div>
              </div>
            </div>
            <p className="text-[#B0BAC9] text-sm">Fully Insured. Serving Central Florida.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-[#3AAA35] mb-4 tracking-wider text-sm">Services</h4>
            <ul className="space-y-2 text-[#B0BAC9] text-sm font-['Barlow']">
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/services#house-washing">House Washing</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/services#roof-cleaning">Roof Cleaning</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/services#driveway">Driveway Cleaning</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/services#gutter">Gutter Cleaning</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/services#soft-wash">Soft Washing</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/services#commercial">Commercial Cleaning</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-[#3AAA35] mb-4 tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-[#B0BAC9] text-sm font-['Barlow']">
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/">Home</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/about">About</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/gallery">Gallery</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/reviews">Reviews</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/contact">Contact</Link></li>
              <li className="hover:text-[#3AAA35] transition-colors"><Link href="/contact">Get Free Estimate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-[#3AAA35] mb-4 tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-[#B0BAC9] text-sm font-['Barlow']">
              <li><a href="tel:4075029795" className="hover:text-[#3AAA35] transition-colors">(407) 502-9795</a></li>
              <li><a href="mailto:sbexteriorservicesllc@gmail.com" className="hover:text-[#3AAA35] transition-colors">sbexteriorservicesllc@gmail.com</a></li>
              <li className="text-[#6B7A90]">Central Florida</li>
              <li className="text-[#6B7A90] text-xs">Available 7 days a week</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573931007454"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3AAA35] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@washthis_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3AAA35] hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <Tv className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3AAA35]/20 pt-6 text-center md:text-left">
          <p className="text-[#6B7A90] text-sm font-['Barlow']">
            © 2025 SB Exterior Services LLC. All rights reserved. Serving Central Florida.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
