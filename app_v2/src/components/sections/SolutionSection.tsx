"use client"

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function SolutionSection() {
  const steps = [
    { 
      title: "Detect", 
      detail: "Customer app detects nearby SPAROO device using secure BLE broadcast.", 
      icon: "01" 
    },
    { 
      title: "Fetch", 
      detail: "App fetches merchant identity and payment route from backend instantly.", 
      icon: "02" 
    },
    { 
      title: "Pay", 
      detail: "Customer completes UPI payment and funds reach the intended merchant.", 
      icon: "03" 
    }
  ]

  return (
    <section id="how-it-works" className="min-h-screen flex flex-col justify-center bg-bg-black px-6 py-32 snap-start relative overflow-hidden">
      {/* Brutalist Background Text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-brutal opacity-5 rotate-90 origin-right -translate-x-12 tracking-[0.1em]">PROTOCOL_FLOW</h2>
      </div>

      {/* metadata */}
      <div className="absolute top-12 left-12 hidden lg:block opacity-40 z-20">
        <div className="metadata-label">PROCESS // SEQUENCE_MAPPING</div>
      </div>
      <div className="absolute top-12 right-12 hidden lg:block opacity-40 z-20">
        <div className="metadata-label">NODE_LATENCY // &lt;50MS</div>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <header className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-black font-grotesk tracking-tighter mb-4 uppercase leading-none"
          >
            How <span className="text-accent">SPAROO</span> Works
          </motion.h2>
        </header>

        <div className="space-y-32 relative">
           {/* Vertical Line with Aggressive Pulse */}
           <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-white/5 hidden md:block overflow-hidden">
              <motion.div 
                animate={{ translateY: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_15px_rgba(0,255,136,0.5)]"
              />
           </div>

           {steps.map((step, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               viewport={{ once: true, margin: "-100px" }}
               className="relative flex flex-col md:flex-row gap-8 md:gap-24 items-start group"
             >
                <div className="relative z-10 w-20 h-20 hud-card bg-white/[0.02] flex items-center justify-center text-[24px] font-black font-mono text-accent shrink-0 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                   <span />
                   {step.icon}
                </div>
                
                <div className="max-w-2xl">
                   <div className="flex items-center gap-4 mb-4">
                      <p className="text-[10px] text-accent font-mono uppercase tracking-[0.3em] font-black">Segment // 0{i+1}</p>
                      <div className="h-[1px] w-12 bg-accent/20" />
                   </div>
                   <h3 className="text-[40px] font-black mb-4 uppercase tracking-tighter group-hover:text-accent transition-colors leading-none">{step.title}</h3>
                   <p className="text-[18px] text-text-muted leading-relaxed font-medium max-w-xl">
                      {step.detail}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
