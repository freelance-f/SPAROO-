"use client"

import { motion } from 'framer-motion'
import { QrCode, MapPin, ShieldCheck, ShoppingBag } from 'lucide-react'

export default function HardwareSection() {
  const valueProps = [
    { 
      title: "No QR Dependency", 
      detail: "Payments work through proximity, not printed codes. Eliminates scanning lag and environmental damage.", 
      icon: <QrCode className="w-10 h-10" />,
      tag: "INFRA_ZERO"
    },
    { 
      title: "Automatic Merchant Mapping", 
      detail: "Payments route to the detected merchant, not manually entered IDs. Zero-input identification.", 
      icon: <MapPin className="w-10 h-10" />,
      tag: "AUTO_ROUTE"
    },
    { 
      title: "Fraud Resistant Identity", 
      detail: "Each payment begins from verified hardware. Secure-element validation for every transaction.", 
      icon: <ShieldCheck className="w-10 h-10" />,
      tag: "HARDWARE_AUTH"
    },
    { 
      title: "Micro-Merchant Ready", 
      detail: "Designed for autos, vendors, kiranas and small businesses. Industrial resilience.", 
      icon: <ShoppingBag className="w-10 h-10" />,
      tag: "SCALE_READY"
    }
  ]

  return (
    <section id="value-prop" className="min-h-screen flex flex-col justify-center bg-bg-black px-6 py-32 snap-start relative overflow-hidden">
      {/* Brutalist Background Text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-brutal opacity-5 rotate-90 origin-right -translate-x-12 tracking-[0.4em]">OFFLINE_ECONOMY</h2>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <header className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-black font-grotesk tracking-tighter mb-4 uppercase leading-none"
          >
            Built for the <br /> <span className="text-secondary">offline economy.</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {valueProps.map((item, i) => (
             <div key={i} className="hud-card p-10 bg-white/[0.01] hover:bg-white/[0.05] transition-all group">
                <span />
                <div className="text-accent mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                   {item.icon}
                </div>
                <p className="text-[10px] text-accent font-mono mb-4 uppercase tracking-[0.3em]">REF_{item.tag}</p>
                <h3 className="text-[28px] font-black mb-4 uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-[16px] text-text-muted leading-relaxed font-medium">
                  {item.detail}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
