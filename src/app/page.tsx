"use client"

import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LiveMetricsBar from "@/components/sections/LiveMetricsBar";
import SolutionSection from "@/components/sections/SolutionSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HardwareSection from "@/components/sections/HardwareSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TwoAppEcosystem from "@/components/sections/TwoAppEcosystem";
import MilestonesSection from "@/components/sections/MilestonesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory bg-bg-black selection:bg-accent/30 selection:text-accent scroll-smooth">
      <CustomCursor />
      <Navbar />
      
      {/* 1. Hero */}
      <div className="snap-start min-h-screen">
        <HeroSection />
      </div>

      {/* 2. Traction Strip */}
      <div className="snap-start mb-[-1px]">
        <LiveMetricsBar />
      </div>

      {/* 3. How It Works */}
      <div className="snap-start min-h-screen">
        <SolutionSection />
      </div>

      {/* 4. Why Different */}
      <div className="snap-start min-h-screen">
        <ProblemSection />
      </div>

      {/* 5. Value Prop (Built for offline economy) */}
      <div className="snap-start min-h-screen">
        <HardwareSection />
      </div>

      {/* 6. Unit Economics */}
      <div className="snap-start min-h-screen">
        <UseCasesSection />
      </div>

      {/* 7. Architecture */}
      <div className="snap-start min-h-screen">
        <TwoAppEcosystem />
      </div>

      {/* 8. Pilot Progress */}
      <div className="snap-start min-h-screen">
        <MilestonesSection />
      </div>

      {/* 9. Final CTA */}
      <div className="snap-start min-h-screen">
        <FinalCTASection />
      </div>
    </main>
  );
}
