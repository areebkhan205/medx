import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, LockKeyhole, Mail, User } from 'lucide-react'

export function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-[oklch(0.16_0.02_260)]/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 10 }}
            className="relative w-full max-w-sm bg-card rounded-2xl shadow-2xl border border-border p-8 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <header className="mb-8 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LockKeyhole size={24} />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground tracking-tight">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {isLogin ? 'Sign in to your account' : 'Register for a new account'}
              </p>
            </header>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="relative">
                <LockKeyhole className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:opacity-90 active:scale-[0.98] transition-all"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary font-semibold hover:underline"
              >
                {isLogin ? 'Need an account? Register' : 'Already have an account? Sign In'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
