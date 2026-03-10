import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

export function CTASection({ onAccessClick }) {
  return (
    <section className="py-28 md:py-40 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.52_0.18_260_/_0.04)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.52_0.18_260_/_0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-[oklch(0.16_0.02_260)] rounded-[2rem] p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.30_0.14_260_/_0.3)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.22_0.06_200_/_0.2)_0%,transparent_45%)]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'linear-gradient(oklch(0.99 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.99 0 0) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/[0.06] text-primary px-4 py-2 rounded-full text-xs font-semibold tracking-wide mb-8 border border-white/[0.08]">
                <Sparkles size={14} />
                Start Your Journey
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[0.95] text-balance">
                Ready to Experience{' '}
                <span className="text-primary">Intelligent</span> Healthcare?
              </h2>

              <p className="text-base text-white/40 max-w-lg mb-10 leading-relaxed">
                Join thousands of patients and practitioners already using ECOMEDx to transform clinical outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onAccessClick}
                  className="bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-semibold text-base hover:brightness-110 transition-all shadow-[0_16px_48px_oklch(0.52_0.18_260_/_0.3)] active:scale-[0.98] group flex items-center justify-center gap-3"
                >
                  Get Started Free
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} strokeWidth={2.5} />
                </button>
                <button className="px-10 py-4 rounded-2xl font-semibold text-base text-white/60 border border-white/10 hover:bg-white/[0.04] transition-all text-center">
                  Schedule a Demo
                </button>
              </div>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[300px]">
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-7">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-5">What you get</p>
                <div className="flex flex-col gap-4 mb-7">
                  {[
                    'Unlimited AI consultations',
                    'Access to 500+ specialists',
                    'AES-256 encrypted records',
                    'Real-time health analytics',
                    '24/7 priority support',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="text-sm font-medium text-white/70">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2.5">
                      {['Alex', 'Maria', 'Chen', 'Sara'].map((name) => (
                        <div key={name} className="w-9 h-9 rounded-full border-2 border-[oklch(0.16_0.02_260)] overflow-hidden bg-muted">
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                            alt={`${name} avatar`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white tabular-nums">12,000+</p>
                      <p className="text-[11px] text-white/30">Active Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
