import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import SmoothScroll from "@/components/smooth-scroll"

export const metadata: Metadata = {
  metadataBase: new URL("https://jaysezjunkremoval.com"),
  title: {
    default: "Jay's EZ Junk Removal | Junk Removal in Dallas, Red Oak & DFW",
    template: "%s | Jay's EZ Junk Removal",
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  description:
    "Same-day, affordable junk removal in Dallas, Red Oak & all of DFW. Eco-friendly, licensed & insured junk removal service. Call 214-258-3511 for FREE quote!",
  keywords: [
    "junk removal Dallas TX",
    "junk removal Red Oak TX",
    "junk removal DFW",
    "same-day junk removal Dallas",
    "affordable junk removal Dallas",
    "best junk removal Dallas",
    "best junk removal Red Oak",
    "junk hauling Dallas TX",
    "junk hauling Red Oak TX",
    "eco-friendly junk removal Dallas",
    "yard waste removal Dallas",
    "construction debris removal DFW",
    "furniture removal Dallas",
    "appliance removal Red Oak",
    "Jay's EZ Junk Removal",
    "jaysezjunkremoval",
    "junk removal near me",
    "cheap junk removal Dallas",
    "professional junk haulers DFW",
    "licensed junk removal Red Oak",
    "insured junk removal Dallas",
  ],
  authors: [{ name: "Jay's EZ Junk Removal Team" }],
  creator: "Jay's EZ Junk Removal",
  publisher: "Jay's EZ Junk Removal",
  category: "Local Business Services",
  classification: "Junk Removal Service",
  openGraph: {
    title: "Jay's EZ Junk Removal | Dallas, Red Oak & DFW",
    description:
      "Top-rated junk removal in Dallas, Red Oak & DFW. Same-day service, affordable prices, eco-friendly disposal. Call 214-258-3511 now!",
    url: "https://jaysezjunkremoval.com",
    siteName: "Jay's EZ Junk Removal",
    images: [
      {
        url: "/images/logowithblack.png",
        width: 1200,
        height: 630,
        alt: "Jay's EZ Junk Removal Dallas Red Oak DFW",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay's EZ Junk Removal | Dallas, Red Oak & DFW",
    description: "Same-day, affordable junk removal services in Dallas, Red Oak & DFW. Call for FREE quote today!",
    images: ["/images/logowithblack.png"],
    creator: "@jaysezjunk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://jaysezjunkremoval.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jay's EZ Junk Removal",
  image: "https://jaysezjunkremoval.com/images/logowithblack.png",
  "@id": "https://jaysezjunkremoval.com/#business",
  url: "https://jaysezjunkremoval.com",
  telephone: "+1-214-258-3511",
  email: "Jayson@jaysezjunkremoval.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dallas, TX",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7767,
    longitude: -96.797,
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 07:00-19:00, Sa 08:00-18:00, Su 09:00-17:00",
  sameAs: [
    "https://www.facebook.com/jaysezjunk",
    "https://www.instagram.com/jaysezjunk",
    "https://www.google.com/maps/place/JAY'S+EZ+JUNK+REMOVAL",
  ],
  areaServed: [
    { "@type": "Place", name: "Dallas, TX" },
    { "@type": "Place", name: "Red Oak, TX" },
    { "@type": "Place", name: "DFW, TX" },
    { "@type": "Place", name: "Lancaster, TX" },
    { "@type": "Place", name: "Ennis, TX" },
    { "@type": "Place", name: "Waxahachie, TX" },
    { "@type": "Place", name: "Cedar Hill, TX" },
    { "@type": "Place", name: "Duncanville, TX" },
    { "@type": "Place", name: "Arlington, TX" },
    { "@type": "Place", name: "Grand Prairie, TX" },
  ],
  serviceType: [
    "Junk Removal",
    "Furniture Removal",
    "Appliance Removal",
    "Construction Debris Removal",
    "Demolition Services",
    "Dumpster Rental",
    "Skid Steer Services",
    "Property Cleanouts",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Junk Removal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Same-Day Junk Removal",
          description: "Fast same-day junk removal service across DFW",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Removal",
          description: "Professional furniture removal and disposal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Appliance Removal",
          description: "Safe appliance removal and eco-friendly disposal",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="theme-color" content="#00ff88" />
        <meta name="msapplication-TileColor" content="#00ff88" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
