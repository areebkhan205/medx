import { motion } from 'framer-motion'

const partners = [
  'Mount Sinai',
  'Mayo Clinic',
  'Johns Hopkins',
  'Cleveland Clinic',
  'Oxford Medical',
  'Tokyo Bio-Hospital',
  'Charite Berlin',
  'Stanford Health',
  'Massachusetts General',
  'Cedars-Sinai',
]

export function TrustBar() {
  return (
    <section className="py-16 bg-card border-b border-border overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/60 mb-10">
          Trusted by Leading Institutions Worldwide
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee w-max">
            {[...partners, ...partners].map((name, i) => (
              <div key={`${name}-${i}`} className="flex items-center justify-center px-8 md:px-12">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-sm font-bold text-muted-foreground/50">{name.charAt(0)}</span>
                  </div>
                  <span className="text-sm md:text-base font-semibold text-muted-foreground/35 whitespace-nowrap tracking-tight">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
