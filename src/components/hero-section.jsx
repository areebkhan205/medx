import { motion } from "framer-motion"
import { Activity, ShieldCheck, Zap } from "lucide-react"
import LightPillar from "../components/LightPillar"

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
})

export function HeroSection({ onAccessClick }) {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">

        {/* Light Pillar */}
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[oklch(0.08_0.02_260)]/75" />

        {/* Radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,oklch(0.30_0.14_260_/_0.4)_0%,transparent_55%)]" />

        {/* Subtle grid */}
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
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-36 pb-24">

      

        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.9] mb-8 tracking-tight"
        >
          The Future of
          <br />
          <span className="bg-gradient-to-r from-primary via-[oklch(0.6_0.15_240)] to-primary bg-clip-text text-transparent">
            Clinical
          </span>{" "}
          Intelligence
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Next-generation AI diagnostics paired with elite medical specialists.
          Experience healthcare at the frontier of technology.
        </motion.p>

        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onAccessClick}
            className="bg-primary text-primary-foreground px-12 py-4 rounded-2xl font-semibold text-base hover:brightness-110 transition-all"
          >
            Get Started
          </button>

          <a
            href="#services"
            className="px-12 py-4 rounded-2xl font-semibold text-base text-white/60 border border-white/10 hover:bg-white/[0.06]"
          >
            Explore Platform
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-24 inline-flex flex-wrap justify-center gap-px bg-white/[0.06] backdrop-blur-2xl border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          {[
            { icon: Activity, value: "99.4%", label: "Accuracy" },
            { icon: ShieldCheck, value: "AES-256", label: "Encryption" },
            { icon: Zap, value: "<2s", label: "Response" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-3 px-8 py-5 ${
                i > 0 ? "border-l border-white/[0.06]" : ""
              }`}
            >
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                <stat.icon size={18} className="text-primary" />
              </div>

              <div className="text-left">
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[10px] font-semibold text-white/25 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}