"use client"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MobileNav } from "./mobile-nav"

export const Header = () => {
  return (
    <header className="glass-card sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image
              src="/images/jay's.png"
              alt="Jay's EZ Junk Removal Logo"
              width={130}
              height={100}
              className="w-[130px] h-[100px]"
              priority
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/#about" },
              { name: "Services", href: "/services" },
              { name: "Contact Us", href: "/#contact" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white hover:text-neon transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
            ))}

       <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button
      variant="ghost"
      className="text-white font-medium relative group px-4 py-2 rounded-xl h-auto 
                 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_10px_rgba(0,255,200,0.6)]"
    >
      Locations
      <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
      {/* underline hover effect */}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full"></span>
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent
    className="bg-black/80 backdrop-blur-lg border border-neon/40 shadow-xl rounded-xl mt-2 p-2 
               w-48 animate-in fade-in-0 zoom-in-95"
  >
    {[
      { href: "/dallas", label: "Dallas" },
      { href: "/red-oak", label: "Red Oak" },
      { href: "/waxahachie", label: "Waxahachie" },
    ].map((item, i) => (
      <DropdownMenuItem asChild key={i}>
        <Link
          href={item.href}
          className="flex items-center gap-2 text-white px-3 py-2 rounded-lg 
                     transition-all duration-300 hover:bg-neon/20 hover:text-neon hover:translate-x-1"
        >
          <span className="w-2 h-2 rounded-full bg-neon/80"></span>
          {item.label}
        </Link>
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>

          </nav>

          {/* Desktop Contact Button */}
          <Button
            asChild
            className="hidden md:flex neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300"
          >
            <a
              href="tel:2142583511"
              className="flex items-center text-lg"
              style={{ position: "relative", padding: "20px" }}
            >
              <Phone className="w-5 h-5 mr-2" />
              214-258-3511
            </a>
          </Button>

          {/* Mobile Navigation */}
          <div className="relative md:hidden z-50">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
