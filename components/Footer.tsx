"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Description */}
          <div className="text-center lg:text-left">
            <Image
              src="/images/jay_slogo--removebg-preview.png"
              alt="Jay's EZ Junk Removal Logo"
              width={130}
              height={130}
              className="rounded-full object-cover mx-auto lg:mx-0"
              priority
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
            />
            <h3 className="text-lg font-bold text-white mt-3 mb-2">
              JAY'S <span className="text-neon">EZ</span> JUNK REMOVAL
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional junk removal services across Red Oak, Dallas, and the entire DFW area.
            </p>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-white mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Junk Removal</li>
              <li>Demolition</li>
              <li>Dumpster Rental</li>
              <li>Skid Steer Work</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-white mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>214-258-3511</li>
              <li>Jayson@jaysezjunkremoval.com</li>
              <li>Red Oak, TX</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-white mb-4 text-lg">Service Areas</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Red Oak, TX</li>
              <li>Dallas, TX</li>
              <li>All of DFW</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Jay's EZ Junk Removal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
