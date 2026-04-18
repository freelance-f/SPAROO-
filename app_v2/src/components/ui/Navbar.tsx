"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '@/assets/20260401_180716_0000.png'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 flex flex-col items-center"
    >
      {/* Top Technical Banner */}
      <div className="w-full bg-accent py-1 text-black text-[10px] font-black uppercase tracking-[0.5em] text-center overflow-hidden whitespace-nowrap">
        <div className="flex justify-center gap-12 animate-marquee">
          <span>Proximity-based payments for the real world</span>
          <span className="opacity-40">SYSTEM_STATUS: OPERATIONAL</span>
          <span>Proximity-based payments for the real world</span>
          <span className="opacity-40">SYSTEM_STATUS: OPERATIONAL</span>
        </div>
      </div>

      <div className="w-full px-12 py-6 flex justify-between items-center mix-blend-difference">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-8 h-8">
          <Image 
            src={Logo} 
            alt="Sparoo Logo" 
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xl font-black font-grotesk tracking-tighter text-white">SPAROO</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-12">
        {[
          { name: "How it works", href: "#how-it-works" },
          { name: "Why Different", href: "#why-different" },
          { name: "Economics", href: "#economics" },
          { name: "Architecture", href: "#architecture" },
          { name: "Pilot", href: "#pilot-status" }
        ].map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="bg-accent text-bg-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
          Join Pilot
        </button>
        </div>
      </div>
    </motion.nav>
  )
}
