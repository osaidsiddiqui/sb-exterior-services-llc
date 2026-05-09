import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import SmoothScroll from "@/components/smooth-scroll"

export const metadata: Metadata = {
  metadataBase: new URL("https://sbexteriorservices.com"),
  title: {
    default: "SB Exterior Services LLC | Pressure Washing & Soft Washing Central Florida",
    template: "%s | SB Exterior Services LLC",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  description:
    "Professional pressure washing, soft washing, roof cleaning & driveway cleaning in Central Florida. Fully insured. Call (407) 502-9795 for a free estimate.",
  keywords: [
    "pressure washing Central Florida",
    "soft washing Orlando",
    "roof cleaning Florida",
    "driveway cleaning",
    "house washing services",
    "pressure washing services",
    "exterior cleaning Central Florida",
    "gutter cleaning",
    "commercial pressure washing",
    "residential cleaning Florida",
    "SB Exterior Services",
    "pressure washing Orlando",
    "soft wash roof cleaning",
    "fully insured pressure washing",
    "professional exterior cleaning",
  ],
  authors: [{ name: "SB Exterior Services LLC" }],
  creator: "SB Exterior Services LLC",
  publisher: "SB Exterior Services LLC",
  category: "Local Business Services",
  classification: "Exterior Cleaning Service",
  openGraph: {
    title: "SB Exterior Services LLC | Pressure Washing & Soft Washing",
    description:
      "Professional pressure washing and soft washing in Central Florida. Fully insured, same-day quotes. Call (407) 502-9795 for your free estimate!",
    url: "https://sbexteriorservices.com",
    siteName: "SB Exterior Services LLC",
    images: [
      {
        url: "/sb-logo.png",
        width: 1200,
        height: 630,
        alt: "SB Exterior Services LLC - Pressure Washing Central Florida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SB Exterior Services LLC | Pressure Washing & Soft Washing",
    description: "Professional exterior cleaning services in Central Florida. Fully insured, same-day quotes available!",
    images: ["/sb-logo.png"],
    creator: "@washthis_",
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
    canonical: "https://sbexteriorservices.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SB Exterior Services LLC",
  image: "https://sbexteriorservices.com/sb-logo.png",
  "@id": "https://sbexteriorservices.com/#business",
  url: "https://sbexteriorservices.com",
  telephone: "+1-407-502-9795",
  email: "sbexteriorservicesllc@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Central Florida",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5421,
    longitude: -81.369,
  },
  priceRange: "$$",
  openingHours: "Mo-Su 07:00-18:00",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61573931007454",
    "https://www.tiktok.com/@washthis_",
  ],
  areaServed: [
    { "@type": "Place", name: "Orlando, FL" },
    { "@type": "Place", name: "Kissimmee, FL" },
    { "@type": "Place", name: "Sanford, FL" },
    { "@type": "Place", name: "Apopka, FL" },
    { "@type": "Place", name: "Clermont, FL" },
    { "@type": "Place", name: "Oviedo, FL" },
    { "@type": "Place", name: "Winter Park, FL" },
  ],
  serviceType: [
    "Pressure Washing",
    "Soft Washing",
    "Roof Cleaning",
    "Driveway Cleaning",
    "Gutter Cleaning",
    "House Washing",
    "Commercial Cleaning",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pressure Washing",
          description: "Professional high-pressure cleaning for driveways and concrete",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soft Washing",
          description: "Gentle low-pressure cleaning for delicate surfaces",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Cleaning",
          description: "Safe roof cleaning using soft wash techniques",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "8",
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
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="theme-color" content="#3AAA35" />
        <meta name="msapplication-TileColor" content="#3AAA35" />

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
