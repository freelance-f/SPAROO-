"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { animate as anime } from 'animejs'

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char')
      anime(chars, {
        translateY: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 300 + 30 * i
      })
    }
  }, [])


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center snap-start bg-bg-black overflow-hidden">
      {/* Brutalist Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-brutal opacity-5 tracking-tighter">SPAROO_INFRA</h2>
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Aggressive Scanning Line */}
      <div className="aggro-scan" />

      {/* Corner Metadata with HUD Borders */}
      <div className="absolute top-12 left-12 hidden lg:block z-20">
         <div className="metadata-label">SYS_ID // SPAROO_V2.0.4</div>
      </div>
      <div className="absolute top-12 right-12 hidden lg:block z-20">
         <div className="metadata-label">NODE // ACTIVE_BLE_5</div>
      </div>
      <div className="absolute bottom-12 left-12 hidden lg:block z-20">
         <div className="metadata-label">RSA_2048 // ENCRYPTED_TUNNEL</div>
      </div>
      <div className="absolute bottom-12 right-12 hidden lg:block text-right z-20">
         <div className="metadata-label justify-end">UPTIME // 99.99%</div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 pt-48 pb-20 relative z-10 text-center max-w-[1200px]"
      >
        <header className="mb-12">
          <h1 
            ref={titleRef}
            className="text-[48px] md:text-[80px] font-black font-grotesk leading-[1.1] mb-8 tracking-tighter text-white uppercase max-w-5xl mx-auto"
          >
            { "Tap-free payments for offline merchants.".split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-4">
                {word.split('').map((char, j) => (
                  <span key={j} className="char inline-block">{char}</span>
                ))}
              </span>
            ))}
            <br />
            <span className="text-accent">Powered by BLE, routed by identity.</span>
          </h1>
          
          <p className="text-xl md:text-[24px] text-text-secondary font-grotesk font-medium tracking-tight mb-16 max-w-3xl mx-auto leading-tight">
            Customers detect nearby merchants automatically and pay instantly <br className="hidden md:block" />
            without QR scanning, cash handling, or manual payment entry.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 text-left border-y border-white/10 py-12 mb-16 bg-white/[0.01]">
             {[
               "Detect",
               "Fetch",
               "Pay"
             ].map((feature, i) => (
               <div key={i} className="group cursor-default">
                  <p className="text-[10px] text-accent font-mono mb-2">PHASE_0{i+1}</p>
                  <p className="text-[24px] text-white font-black tracking-tighter uppercase transition-colors group-hover:text-accent">
                    {feature}
                  </p>
               </div>
             ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
             <button className="btn-primary hud-card px-12 py-5 text-xs uppercase tracking-[0.3em] font-black glitch-hover">
                <span>Join Pilot</span>
             </button>
             <button className="btn-ghost hud-card px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold glitch-hover">
                <span>Request Demo</span>
             </button>
          </div>
        </header>

        <footer className="mt-24 flex justify-center gap-10 text-[10px] text-text-muted uppercase tracking-[0.4em] font-bold font-mono">
           <span className="text-secondary">#03912</span>
           <span>BLE-5.0_CORE</span>
           <span className="text-accent/40">{'//'}</span>
           <span>RAZORPAY_STABLE</span>
        </footer>
      </motion.div>
    </section>
  )
}
