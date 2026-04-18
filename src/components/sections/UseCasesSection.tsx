"use client"

import { motion } from 'framer-motion'

export default function UseCasesSection() {
  const points = [
    { title: "Transaction commissions", detail: "Variable revenue from every hardware-triggered UPI event.", code: "TXN_FEE" },
    { title: "B2B SaaS subscriptions", detail: "Recurring monthly revenue for advanced analytics and device management.", code: "SAAS_SUB" },
    { title: "Hardware margins", detail: "Direct revenue from device sales and terminal maintenance.", code: "HW_REV" },
    { title: "Settlement services", detail: "Optional value-added financial services and instant settlement layers.", code: "SETTLE_MOD" }
  ]

  return (
    <section id="economics" className="min-h-screen flex flex-col justify-center bg-bg-black px-6 py-32 snap-start relative overflow-hidden">
      {/* Brutalist Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-brutal opacity-5 rotate-90 origin-left translate-x-12 tracking-[0.4em]">UNIT_ECONOMICS</h2>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <header className="mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-mono text-xs uppercase tracking-[0.5em] mb-6"
          >
            Data // Fiscal_Projection_V1
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-black font-grotesk tracking-tighter mb-4 uppercase leading-none"
          >
            Unit Economics
          </motion.h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
           <div className="hud-card p-12 bg-accent/[0.02] border-accent/20">
              <span />
              <p className="text-[10px] text-accent font-mono mb-4 uppercase tracking-[0.4em]">Primary_Metric</p>
              <h3 className="text-[60px] md:text-[80px] font-black text-white leading-none tracking-tighter mb-4">
                 ₹350 <span className="text-accent text-[20px] tracking-widest block md:inline font-mono">Revenue Potential</span>
              </h3>
              <p className="text-[18px] text-text-muted font-medium uppercase tracking-tight">Per Active Merchant / Month</p>
           </div>

           <div className="grid grid-cols-1 gap-4">
              {points.map((point, i) => (
                <div key={i} className="hud-card p-8 flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                   <span />
                   <div>
                      <h4 className="text-xl font-black text-white uppercase tracking-tighter group-hover:text-accent transition-colors">{point.title}</h4>
                      <p className="text-sm text-text-muted">{point.detail}</p>
                   </div>
                   <div className="text-[10px] font-mono text-accent opacity-40">
                      [{point.code}]
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}
