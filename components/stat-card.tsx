"use client"

import { useCounter } from "@/hooks/use-counter"

interface StatCardProps {
  end: number
  label: string
  suffix?: string
}

export function StatCard({ end, label, suffix = "+" }: StatCardProps) {
  const count = useCounter(end, 2000)

  return (
    <div>
      <div className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#3AAA35] tracking-wide mb-2">
        {count}{suffix}
      </div>
      <p className="text-[#B0BAC9] font-['Barlow'] text-sm sm:text-base">{label}</p>
    </div>
  )
}
