"use client"

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

const metrics = [
  { label: 'Transactions', value: 640, suffix: '+' },
  { label: 'Active Devices', value: 6, suffix: '' },
  { label: 'Avg Payment', value: 98, prefix: '₹' },
  { label: 'Payment Time', value: 10, suffix: 's', prefix: '<' },
]

export default function LiveMetricsBar() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    metrics.forEach((_, i) => {
      animate(`#metric-val-${i}`, {
        innerHTML: [0, metrics[i].value],
        round: 1,
        easing: 'out-expo',
        duration: 2000,
        delay: 500 + (i * 100)
      })
    })
  }, [])

  return (
    <div className="w-full bg-bg-black border-y border-border-subtle py-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="light-streak top-1/2 left-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {[
            "BLE Hardware Ready",
            "Razorpay Integrated",
            "Partner App Live",
            "College Pilot Next"
          ].map((status, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
              <span className="text-sm md:text-base font-black font-mono text-white uppercase tracking-widest whitespace-nowrap">
                {status}
              </span>
              {i < 3 && <div className="hidden md:block h-1 w-8 bg-white/10" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
