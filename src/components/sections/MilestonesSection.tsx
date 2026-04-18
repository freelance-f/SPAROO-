"use client"

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function MilestonesSection() {
  const statusItems = [
    { label: "Hardware", status: "Hardware Prototype Built", detail: "Industrial BLE beacons optimized for production-ready reliability.", done: true },
    { label: "Integration", status: "Razorpay Integration Complete", detail: "End-to-end automated payment routing and reconciliation.", done: true },
    { label: "Software", status: "Partner App In Progress", detail: "Merchant-side onboarding and settlement engine UI development.", done: false },
    { label: "Deployment", status: "College Pilot Deployment", detail: "Scheduled rollout for campus ecosystem beta test.", done: false }
  ]

  return (
    <section id="pilot-status" className="min-h-screen flex flex-col justify-center bg-bg-black px-6 py-32 snap-start relative overflow-hidden">
      {/* Brutalist Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-brutal opacity-[0.04] tracking-[0.6em] scale-125">PHASE_PILOT</h2>
      </div>

      {/* Industrial Tape Decorations */}
      <div className="absolute top-0 left-0 industrial-tape opacity-30 shadow-[0_0_20px_rgba(232,245,90,0.1)]" />
      <div className="absolute bottom-0 left-0 industrial-tape opacity-30 shadow-[0_0_20px_rgba(232,245,90,0.1)]" />

      {/* metadata */}
      <div className="absolute top-12 left-12 hidden lg:block opacity-40 z-20">
         <div className="metadata-label">LOGS // BATCH_EXE_002</div>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <header className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-black font-grotesk tracking-tighter mb-4 uppercase leading-none"
          >
            Pilot Progress
          </motion.h2>
        </header>

        <div className="grid gap-6">
           {statusItems.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               viewport={{ once: true }}
               className="hud-card p-12 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-10 group glitch-hover"
             >
                <span />
                <div className="flex items-center gap-10 w-full relative z-10">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${item.done ? 'bg-accent text-bg-black shadow-[0_0_30px_rgba(0,255,136,0.3)]' : 'bg-white/5 text-white/20 border border-white/10'}`}>
                      {item.done ? <CheckCircle2 className="w-8 h-8" /> : <div className="w-3 h-3 rounded-full bg-current animate-pulse" />}
                   </div>
                   <div className="flex-1">
                      <div className="status-sticker mb-6 scale-110">{item.label}</div>
                      <h3 className="text-[32px] font-black uppercase tracking-tight group-hover:text-accent transition-colors leading-none">
                        {item.status}
                      </h3>
                      <p className="text-[16px] text-text-muted mt-4 font-medium uppercase tracking-tight">
                        {item.detail}
                      </p>
                   </div>
                   <div className="hidden lg:flex flex-col items-end text-[10px] font-mono text-text-muted uppercase tracking-widest gap-2">
                      <p>TOKEN: {i * 777 + 101}</p>
                      <p>STAT: {item.done ? 'COMP' : 'ACTIVE'}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
