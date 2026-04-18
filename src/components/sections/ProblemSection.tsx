"use client"

import { motion } from 'framer-motion'

export default function ProblemSection() {
  const differentiators = [
    { 
      title: "QR-less Payments", 
      detail: "Payments work through proximity, not printed codes. Eliminates scanning friction and environmental wear.",
      tag: "CORE_PROTO"
    },
    { 
      title: "Identity-routed Transactions", 
      detail: "Payments route to the detected merchant, not manually entered IDs. Error-free merchant identification.",
      tag: "ID_ROUTING"
    },
    { 
      title: "Hardware-triggered Commerce", 
      detail: "Each payment begins from verified hardware. Secure-element verification for every tap-free event.",
      tag: "HARDWARE_AUTH"
    }
  ]

  return (
    <section id="why-different" className="min-h-screen flex flex-col justify-center bg-bg-black px-6 py-32 snap-start relative overflow-hidden">
      {/* Brutalist Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-brutal opacity-[0.03] tracking-[0.2em] scale-110">DIFFERENTIATOR</h2>
      </div>

      {/* metadata */}
      <div className="absolute top-12 left-12 hidden lg:block opacity-40 z-20">
         <div className="metadata-label">ANALYSIS // WHY_SPAROO_UNIQUE</div>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <header className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-black font-grotesk tracking-tighter mb-4 uppercase leading-none"
          >
            Why <span className="text-accent">SPAROO</span> is Different
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {differentiators.map((item, i) => (
             <div key={i} className="hud-card p-12 text-left group hover:bg-accent/5 transition-all">
                <span />
                <p className="text-[10px] text-accent font-mono mb-6 uppercase tracking-[0.4em]">LOG_{item.tag}</p>
                <h3 className="text-[32px] font-black mb-6 uppercase tracking-tighter group-hover:text-accent transition-colors leading-[0.9]">
                  {item.title}
                </h3>
                <p className="text-[16px] text-text-muted leading-relaxed font-medium">
                  {item.detail}
                </p>
             </div>
           ))}
        </div>

        <footer className="mt-20 flex justify-center items-center gap-6 text-text-muted text-[12px] font-mono font-bold uppercase tracking-widest opacity-40">
           <div className="w-12 h-[1px] bg-accent/30" />
           Audit // Technical comparison only. Zero bias.
        </footer>
      </div>
    </section>
  )
}
