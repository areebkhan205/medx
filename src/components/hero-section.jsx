import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import LightPillar from "../components/LightPillar";
import { ChatWorkstation } from "./chat-workstation";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

export function HeroSection() {
  const [isChatActive, setIsChatActive] = useState(false);

  if (isChatActive) {
    return <ChatWorkstation isOpen={true} onClose={() => setIsChatActive(false)} />;
  }

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>
        <div className="absolute inset-0 bg-[oklch(0.08_0.02_260)]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,oklch(0.30_0.14_260_/_0.4)_0%,transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.99 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.99 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-32 pb-24 flex flex-col items-center">
        
        {/* Top Announcement Pill */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8 shadow-2xl"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-white/70 tracking-wide uppercase">
            MediBot Core v5.2 is live
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[0.9] mb-8 tracking-tighter"
        >
          The Future of
          <br />
          <span className="bg-gradient-to-r from-primary via-[oklch(0.7_0.15_250)] to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">
            Clinical
          </span>{" "}
          Intelligence
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.25)}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Next-generation AI diagnostics paired with elite medical specialists.
          Experience healthcare at the frontier of technology.
        </motion.p>

        {/* Actions */}
        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
        >
          <button
            onClick={() => setIsChatActive(true)}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-base transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(82,39,255,0.6)]"
          >
            Get Started
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full font-medium text-base text-white/80 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.08] hover:text-white transition-all"
          >
            Explore Platform
          </a>
        </motion.div>

      </div>
    </section>
  );
}