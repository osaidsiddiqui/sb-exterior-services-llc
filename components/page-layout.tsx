import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen gradient-bg text-white ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
