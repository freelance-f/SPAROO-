"use client"

import { motion } from 'framer-motion'
import { User, ShieldCheck, TrendingUp } from 'lucide-react'

export default function TwoAppEcosystem() {
  const customerFlow = [
    { name: "BLE detection", detail: "Background discovery of nearby merchants" },
    { name: "Merchant identity fetch", detail: "Instant data retrieval via API" },
    { name: "Payment initiation", detail: "Automated intent passing to UPI" },
    { name: "Transaction confirmation", detail: "Real-time receipt generation" }
  ]

  const partnerFlow = [
    { name: "Merchant onboarding", detail: "Frictionless KYC and shop registration" },
    { name: "Device linking", detail: "Assigning BLE identifiers to accounts" },
    { name: "Payment settlement", detail: "Automated payouts via Razorpay" },
    { name: "Transaction history", detail: "Complete fiscal ledger and analytics" }
  ]

  return (
    <section id="architecture" className="min-h-screen flex flex-col justify-center bg-bg-black px-6 py-32 snap-start relative overflow-hidden">
      {/* Brutalist Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-brutal opacity-[0.03] tracking-[0.4em] scale-150">SYSTEM_ARCH</h2>
      </div>

      {/* metadata */}
      <div className="absolute top-12 left-12 hidden lg:block opacity-40 z-20">
         <div className="metadata-label">INFRA // ECOSYSTEM_SYNC</div>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <header className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-black font-grotesk tracking-tighter mb-4 uppercase leading-none"
          >
            System <br />
            <span className="text-accent">Architecture</span>
          </motion.h2>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
           {/* Customer App Card */}
           <div className="hud-card p-12 bg-white/[0.01] border-white/5 relative overflow-hidden group h-full">
              <span />
              <User className="absolute -right-8 -top-8 w-48 h-48 text-white/[0.02] group-hover:text-accent/[0.03] transition-colors" />
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-12">
                     <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                     <p className="text-[10px] text-accent font-mono uppercase tracking-[0.4em] font-black">Module: Customer_App</p>
                 </div>
                 <h3 className="text-[32px] font-black mb-12 flex items-center gap-3 uppercase tracking-tighter text-white">
                    Customer App
                 </h3>
                 <div className="space-y-10">
                    {customerFlow.map((step, i) => (
                      <div key={i} className="flex gap-8 items-center">
                         <div className="relative">
                            <div className="w-12 h-12 hud-card bg-white/5 flex items-center justify-center text-[18px] font-black font-mono text-accent">
                               <span className="opacity-20" />
                               {i+1}
                            </div>
                         </div>
                         <div>
                            <p className="text-[18px] font-black text-text-primary uppercase tracking-tight leading-none mb-2">{step.name}</p>
                            <p className="text-[11px] text-text-muted uppercase tracking-[0.3em] font-bold">{step.detail}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Partner App Card */}
           <div className="hud-card p-12 bg-white/[0.01] border-white/5 relative overflow-hidden group h-full">
              <span />
              <TrendingUp className="absolute -right-8 -top-8 w-48 h-48 text-white/[0.02] group-hover:text-accent/[0.03] transition-colors" />
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-12">
                     <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                     <p className="text-[10px] text-accent font-mono uppercase tracking-[0.4em] font-black">Module: Partner_App</p>
                 </div>
                 <h3 className="text-[32px] font-black mb-12 flex items-center gap-3 uppercase tracking-tighter text-white">
                    Partner App
                 </h3>
                 <div className="space-y-10">
                    {partnerFlow.map((step, i) => (
                      <div key={i} className="flex gap-8 items-center">
                         <div className="relative">
                            <div className="w-12 h-12 hud-card bg-accent/10 flex items-center justify-center text-[18px] font-black font-mono text-accent">
                               <span className="opacity-20" />
                               {i+1}
                            </div>
                         </div>
                         <div>
                            <p className="text-[18px] font-black text-text-primary uppercase tracking-tight leading-none mb-2">{step.name}</p>
                            <p className="text-[11px] text-text-muted uppercase tracking-[0.3em] font-bold">{step.detail}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 hud-card p-12 bg-white/[0.01] border-white/5 flex flex-col md:flex-row items-center justify-between gap-10"
        >
           <span />
           <div className="flex items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                 <ShieldCheck className="text-accent w-10 h-10" />
              </div>
              <div>
                 <p className="text-[20px] font-black uppercase tracking-tight text-white mb-1">Razorpay KYC Verified</p>
                 <p className="text-[11px] text-text-muted uppercase tracking-[0.2em] font-bold">Direct to bank. T+2 settlements. Tier-1 security.</p>
              </div>
           </div>
           <button className="btn-primary hud-card px-10 py-5 text-xs font-black uppercase tracking-[0.3em] glitch-hover">
              <span>Join Pilot</span>
           </button>
        </motion.div>
      </div>
    </section>
  )
}
