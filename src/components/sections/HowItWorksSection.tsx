"use client"

import { motion } from 'framer-motion'
import { UserPlus, Radar, Smartphone, CheckCircle } from 'lucide-react'

const steps = [
  { icon: UserPlus, text: 'Enter vehicle' },
  { icon: Radar, text: 'Detected via BLE' },
  { icon: Smartphone, text: 'App opens' },
  { icon: CheckCircle, text: 'Pay instantly' },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden bg-bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="neon-badge mb-6">Process</div>
          <h2 className="text-5xl md:text-7xl font-black font-grotesk tracking-tighter mb-6">
            Payments that <span className="text-neon glow-text">find you.</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl font-inter">
            A seamless bridge between the physical and digital world.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center flex-1 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-bg-card border border-border-subtle flex items-center justify-center text-neon mb-6 transition-all duration-300 group-hover:border-neon group-hover:shadow-neon group-hover:scale-110">
                  <step.icon size={32} />
                </div>
                <p className="text-sm font-mono text-text-muted mb-2 uppercase tracking-widest">Step 0{i+1}</p>
                <h3 className="text-xl font-bold font-grotesk text-white">{step.text}</h3>
              </motion.div>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block step-line mx-4 mb-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
