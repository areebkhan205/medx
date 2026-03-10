import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, RefreshCcw, ShieldCheck } from 'lucide-react'

export function PaymentModal({ isOpen, onClose, onPaid, serviceName }) {
  const [loading, setLoading] = useState(false)

  const handlePayment = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onPaid()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-[oklch(0.16_0.02_260)]/80 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 10 }}
            className="relative w-full max-w-sm bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            {/* Header */}
            <div className="bg-[oklch(0.16_0.02_260)] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-3 block relative z-10">
                Secure Checkout
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-6 relative z-10">Session Access</h3>
              <div className="flex justify-between items-end border-t border-white/10 pt-5 relative z-10">
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">Service</p>
                  <p className="text-sm font-semibold text-white/80">{serviceName}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">Total</p>
                  <p className="text-2xl font-bold text-white tabular-nums">
                    $4<span className="text-sm font-medium text-white/50">.00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 space-y-4">
              <div className="relative group">
                <CreditCard
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full pl-10 pr-4 py-3.5 bg-muted border border-border rounded-xl text-sm font-mono text-foreground tracking-wider placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-full px-4 py-3.5 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
                <input
                  type="password"
                  placeholder="CVC"
                  className="w-full px-4 py-3.5 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 active:scale-[0.98]"
              >
                {loading ? (
                  <RefreshCcw className="animate-spin" size={18} />
                ) : (
                  <>
                    <ShieldCheck size={16} />
                    Authorize Payment
                  </>
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Encrypted with AES-256. Your card data is never stored.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
