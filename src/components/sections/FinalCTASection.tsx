"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <section id="cta" className="min-h-screen flex flex-col items-center justify-center bg-bg-black px-6 py-32 snap-start relative overflow-hidden text-center">
      {/* Brutalist Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-brutal opacity-[0.04] tracking-[0.2em] scale-[2.5]">START_TERMINAL</h2>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />

      {/* metadata */}
      <div className="absolute top-12 left-12 hidden lg:block opacity-40 z-20">
         <div className="metadata-label">EOF // TRANSMISSION_COMPLETE</div>
      </div>
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-40 text-right z-20">
         <div className="metadata-label justify-end">SPAROO_INFRA // 2026_GEN</div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-[1200px] relative z-10"
      >
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="hud-card inline-block px-8 py-2 bg-white/[0.02] border-white/10 text-[10px] font-mono tracking-[0.4em] mb-12 uppercase text-accent font-black transition-all hover:bg-accent hover:text-black cursor-default"
          >
            <span />
            Terminal_Output // STATUS: READY
          </motion.div>
          <h2 className="text-[48px] md:text-[80px] font-black font-grotesk tracking-tighter mb-8 uppercase text-white leading-tight">
            Building the payment layer <br />
            <span className="text-accent">for offline commerce.</span>
          </h2>
          <p className="text-[18px] md:text-[24px] text-text-muted max-w-3xl mx-auto leading-tight uppercase font-bold tracking-tight mb-12 opacity-60">
            Join the pilot or partner with us <br className="hidden md:block" />
            to shape the next generation of merchant payments.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-8 mb-32">
           <button className="btn-primary hud-card px-14 py-6 text-sm font-black uppercase tracking-[0.4em] glitch-hover">
              <span />
              Join Pilot
           </button>
           <button className="btn-ghost hud-card px-14 py-6 text-sm font-black uppercase tracking-[0.4em] glitch-hover">
              <span />
              Partner With Us
           </button>
        </div>

        <footer className="mt-40 pt-16 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-end gap-10 opacity-40 group hover:opacity-100 transition-opacity duration-1000">
           <div className="text-left font-mono">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-accent">SPAROO Protocol // SYS_039</p>
              <div className="space-y-1">
                 <p className="text-[9px] text-text-muted uppercase tracking-widest">Digital Assets & Infrastructure © 2026</p>
                 <p className="text-[9px] text-accent/40 uppercase tracking-widest">Hash: 8f9a2c3d1e0b5f7g9h8i</p>
              </div>
           </div>
           
           <div className="flex gap-12 font-mono">
              {["Docs", "Security", "Industrial", "Legal"].map((link, i) => (
                <div key={i} className="group cursor-pointer">
                   <p className="text-[8px] text-accent/30 group-hover:text-accent font-black mb-1">0{i+1}</p>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                     {link}
                   </span>
                </div>
              ))}
           </div>
        </footer>
      </motion.div>
    </section>
  )
}
