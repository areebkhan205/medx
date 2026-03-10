import { HeartPulse } from 'lucide-react'

const footerLinks = {
  Platform: ['AI Diagnostics', 'Health Analytics', 'Genomic Mapping', 'Secure Vault'],
  Network: ['Find Specialists', 'Institutions', 'Research', 'Partnerships'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Compliance', 'Security'],
}

export function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.02_260)] relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="pt-20 pb-10 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="bg-primary p-2 rounded-xl">
                  <HeartPulse size={18} className="text-primary-foreground" />
                </div>

                <span className="text-lg font-bold tracking-tight text-white">
                  ECOMED<span className="text-primary">x</span>
                </span>
              </div>

              <p className="text-sm text-white/25 leading-relaxed max-w-[220px]">
                Next-generation AI clinical intelligence for the modern world.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-6">
                  {category}
                </h4>

                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/25 hover:text-white/70 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-medium text-white/15">
              © 2026 ECOMEDx. All rights reserved.
            </p>

            <div className="flex gap-8">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-semibold text-white/15 hover:text-white/50 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}