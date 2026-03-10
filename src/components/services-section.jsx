import { motion } from 'framer-motion'
import { Search, Bot, FileText, Dna, ShieldCheck, BarChart3, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Bio-Predictive Analysis',
    description:
      'AI diagnostic engines that identify complex metabolic patterns and predict health outcomes with unparalleled precision.',
    accent: 'bg-primary/10 text-primary',
    accentBorder: 'group-hover:border-primary/20',
    span: 'md:col-span-2',
    tag: 'Core Engine',
  },
  {
    icon: Bot,
    title: 'Neural AI Grid',
    description:
      'Advanced conversational AI consultants trained on millions of clinical cases for instant diagnostic support.',
    accent: 'bg-emerald-500/10 text-emerald-500',
    accentBorder: 'group-hover:border-emerald-500/20',
    span: '',
    tag: 'AI Powered',
  },
  {
    icon: FileText,
    title: 'Clinical Synthesis',
    description:
      'Automated medical report generation and cross-referencing against global research databases in real-time.',
    accent: 'bg-amber-500/10 text-amber-500',
    accentBorder: 'group-hover:border-amber-500/20',
    span: '',
    tag: 'Automation',
  },
  {
    icon: Dna,
    title: 'Genomic Mapping',
    description:
      'Comprehensive genetic profiling and personalized treatment pathways based on individual DNA signatures.',
    accent: 'bg-primary/10 text-primary',
    accentBorder: 'group-hover:border-primary/20',
    span: 'md:col-span-2',
    tag: 'Genomics',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Health Vault',
    description:
      'Military-grade encrypted storage for all medical records, accessible only through biometric verification.',
    accent: 'bg-rose-500/10 text-rose-500',
    accentBorder: 'group-hover:border-rose-500/20',
    span: '',
    tag: 'Security',
  },
  {
    icon: BarChart3,
    title: 'Health Analytics',
    description:
      'Real-time dashboards tracking vitals, medication efficacy, and predictive health trend modeling.',
    accent: 'bg-cyan-500/10 text-cyan-500',
    accentBorder: 'group-hover:border-cyan-500/20',
    span: '',
    tag: 'Analytics',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-28 md:py-40 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.52_0.18_260_/_0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.52_0.18_260_/_0.02)_0%,transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-semibold tracking-widest text-xs uppercase mb-5 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Intelligence for
            <br />
            Modern Medicine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hyper-personal clinical pathways powered by neural predictive logic and world-class medical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`${service.span} bg-card p-8 md:p-9 rounded-3xl border border-border group cursor-pointer hover:shadow-2xl ${service.accentBorder} transition-all duration-500 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-primary/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-7">
                  <div className={`w-14 h-14 ${service.accent} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/40 hidden md:block">
                      {service.tag}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground/0 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3 tracking-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
