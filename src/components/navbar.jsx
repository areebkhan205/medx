import { HeartPulse, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Navbar({ onOpenChat, onAuthClick, isScrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-[70] transition-all duration-500',
        isScrolled
          ? 'bg-card/95 backdrop-blur-2xl py-3 shadow-[0_1px_3px_oklch(0_0_0_/_0.04)] border-b border-border'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div
            className={cn(
              'p-2 rounded-xl transition-all group-hover:rotate-12 group-hover:scale-110',
              isScrolled
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-white/10 text-white'
            )}
          >
            <HeartPulse size={18} strokeWidth={2.5} />
          </div>
          <span
            className={cn(
              'text-lg font-bold tracking-tight transition-colors',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
          >
            ECOMED
            <span className="text-primary">x</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {[
              { href: '#services', label: 'Services' },
              { href: '#specialists', label: 'Network' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-xl transition-colors',
                  isScrolled
                    ? 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    : 'text-white/40 hover:text-white hover:bg-white/[0.06]'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <button
              onClick={onAuthClick}
              className={cn(
                'text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors',
                isScrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-white/50 hover:bg-white/[0.06]'
              )}
            >
              Sign In
            </button>
            <button
              onClick={() => onOpenChat()}
              className="bg-primary text-primary-foreground px-7 py-2.5 rounded-xl font-semibold text-xs shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors',
            isScrolled ? 'text-foreground' : 'text-white'
          )}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-2xl border-b border-border p-6 space-y-2 shadow-xl">
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold text-foreground py-3 px-4 rounded-xl hover:bg-muted transition-colors"
          >
            Services
          </a>
          <a
            href="#specialists"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold text-foreground py-3 px-4 rounded-xl hover:bg-muted transition-colors"
          >
            Network
          </a>
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileOpen(false)
                onAuthClick()
              }}
              className="text-sm font-semibold text-foreground py-3 px-4 rounded-xl hover:bg-muted transition-colors text-left"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileOpen(false)
                onOpenChat()
              }}
              className="bg-primary text-primary-foreground px-5 py-3.5 rounded-xl font-semibold text-sm shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
