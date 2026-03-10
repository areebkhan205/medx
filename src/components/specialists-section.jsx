import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, MapPin, Star } from "lucide-react"
import { useRef } from "react"

const gradients = [
  "from-[oklch(0.14_0.06_260)] to-[oklch(0.20_0.10_260)]",
  "from-[oklch(0.14_0.04_180)] to-[oklch(0.20_0.06_180)]",
  "from-[oklch(0.14_0.04_30)] to-[oklch(0.20_0.06_30)]",
  "from-[oklch(0.14_0.04_320)] to-[oklch(0.20_0.06_320)]",
  "from-[oklch(0.14_0.04_200)] to-[oklch(0.20_0.06_200)]",
]

function SpecialistCard({ data, index, onInitiate }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="min-w-[310px] max-w-[310px] bg-card rounded-3xl border border-border overflow-hidden hover:shadow-[0_24px_64px_oklch(0.52_0.18_260_/_0.08)] hover:border-primary/15 transition-all duration-500 group snap-center flex flex-col"
    >
      {/* Gradient header */}
      <div
        className={`h-28 bg-gradient-to-br ${
          gradients[index % gradients.length]
        } relative overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.99 0 0) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        <div className="absolute -bottom-11 left-7">
          <div className="w-[88px] h-[88px] rounded-2xl bg-card border-4 border-card overflow-hidden shadow-xl">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`}
              alt={`${data.name} avatar`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5">
          <Star size={11} className="text-amber-400 fill-amber-400" />
          {data.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 pt-16 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-lg text-card-foreground tracking-tight">
            {data.name}
          </h4>
          <CheckCircle2 size={16} className="text-primary shrink-0" />
        </div>

        <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-5">
          {data.role}
        </span>

        <div className="flex flex-col gap-2.5 mb-7">
          <p className="text-muted-foreground text-xs flex items-center gap-2.5 font-medium">
            <MapPin size={13} className="text-primary/50 shrink-0" />
            {data.hospital}
          </p>

          <p className="text-muted-foreground text-xs flex items-center gap-2.5 font-medium">
            <Clock size={13} className="text-emerald-500/50 shrink-0" />
            <span className="text-emerald-600 font-semibold">
              Available Now
            </span>
          </p>
        </div>

        <button
          onClick={() => onInitiate(data)}
          className="mt-auto w-full py-4 bg-foreground text-background rounded-2xl font-semibold text-sm hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300 shadow-sm"
        >
          Book Consultation
        </button>
      </div>
    </motion.div>
  )
}

export function SpecialistsSection({ specialists, onInitiate }) {
  const sliderRef = useRef(null)

  const handleScroll = (dir) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: dir === "next" ? 330 : -330,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="specialists"
      className="py-28 md:py-40 px-6 bg-card relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.52_0.18_260_/_0.02)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl text-center lg:text-left"
          >
            <span className="inline-block text-primary font-semibold tracking-widest text-xs uppercase mb-5 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
              Specialist Network
            </span>

            <h3 className="text-4xl md:text-5xl font-bold text-card-foreground mb-5 tracking-tight">
              Elite Medical Minds
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Direct access to the top 1% of clinical specialists worldwide,
              available for private AI-assisted consultations.
            </p>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={() => handleScroll("prev")}
              className="w-12 h-12 rounded-xl bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center active:scale-95"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => handleScroll("next")}
              className="w-12 h-12 rounded-xl bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center active:scale-95"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory"
        >
          {specialists.map((doc, i) => (
            <SpecialistCard
              key={doc.name}
              data={doc}
              index={i}
              onInitiate={onInitiate}
            />
          ))}
        </div>
      </div>
    </section>
  )
}