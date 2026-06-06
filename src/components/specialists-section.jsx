import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Users
} from "lucide-react";
import { useEffect, useRef } from "react";

const gradients = [
  "from-violet-950 via-indigo-950 to-purple-900",
  "from-cyan-950 via-sky-950 to-blue-900",
  "from-emerald-950 via-teal-950 to-green-900",
  "from-rose-950 via-pink-950 to-fuchsia-900",
  "from-slate-950 via-gray-900 to-zinc-900",
];

function SpecialistCard({ data, index, onInitiate }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group min-w-[340px] max-w-[340px] bg-card rounded-[32px] border border-border overflow-hidden snap-center flex flex-col shadow-lg hover:shadow-[0_40px_100px_rgba(99,102,241,0.15)] hover:border-primary/20 transition-all duration-500"
    >
      {/* Header */}
      <div
        className={`h-32 bg-gradient-to-br ${
          gradients[index % gradients.length]
        } relative overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-xl text-xs font-semibold text-white flex items-center gap-1">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          {data.rating}
        </div>

        {/* Avatar */}
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-12 left-7"
        >
          <div className="w-24 h-24 rounded-3xl bg-card border-4 border-card overflow-hidden shadow-2xl">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-7 pt-16 flex-1 flex flex-col">
        {/* Name */}
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-xl text-card-foreground">
            {data.name}
          </h4>

          <CheckCircle2
            size={18}
            className="text-primary shrink-0"
          />
        </div>

        <span className="text-primary text-xs font-semibold uppercase tracking-widest mt-1 mb-4">
          {data.role}
        </span>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {(data.specialties || [
            "Expert",
            "AI Assisted",
            "Verified",
          ]).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Experience + Fee */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <p className="text-xs text-muted-foreground">
              Experience
            </p>
            <p className="font-bold">
              {data.experience || "12+"} Years
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground">
              Consultation
            </p>
            <p className="font-bold text-primary">
              ₹{data.fee || 799}
            </p>
          </div>
        </div>

        {/* Hospital */}
        <div className="space-y-3 mb-6">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} />
            {data.hospital}
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-green-600 font-semibold text-sm">
              Available Now
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-7 p-4 rounded-2xl bg-muted/30 border border-border">
          <div className="text-center">
            <p className="font-bold text-base">
              {data.rating}
            </p>
            <p className="text-[10px] text-muted-foreground">
              Rating
            </p>
          </div>

          <div className="text-center">
            <p className="font-bold text-base">
              {data.patients || "2.1k+"}
            </p>
            <p className="text-[10px] text-muted-foreground">
              Patients
            </p>
          </div>

          <div className="text-center">
            <p className="font-bold text-base">
              {data.successRate || "98%"}
            </p>
            <p className="text-[10px] text-muted-foreground">
              Success
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onInitiate(data)}
          className="mt-auto w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-violet-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          Book Consultation →
        </button>
      </div>
    </motion.div>
  );
}

export function SpecialistsSection({
  specialists,
  onInitiate,
}) {
  const sliderRef = useRef(null);

  const handleScroll = (dir) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: dir === "next" ? 360 : -360,
      behavior: "smooth",
    });
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 360,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="specialists"
      className="relative py-28 md:py-40 px-6 overflow-hidden bg-card"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
              <Users size={14} />
              Specialist Network
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-card-foreground mb-5">
              Elite Medical Minds
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Connect instantly with top healthcare specialists,
              AI-assisted diagnostics, and verified experts
              from leading medical institutions worldwide.
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => handleScroll("prev")}
              className="w-12 h-12 rounded-xl border border-border bg-background hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => handleScroll("next")}
              className="w-12 h-12 rounded-xl border border-border bg-background hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-7 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
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
  );
}