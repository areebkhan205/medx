import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity, Cpu, HeartPulse, Send, ShieldCheck, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function ChatWorkstation({ isOpen, onClose, doctor }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          role: 'bot',
          text: doctor
            ? `Session active with ${doctor.name}, ${doctor.role}. How can I help you today?`
            : 'ECOMEDx Clinical AI is ready. Describe your symptoms or ask a health question to begin.',
        },
      ])
    }
  }, [isOpen, doctor])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const handleSend = () => {
    if (!input.trim() || loading) return

    const msg = input
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text: msg }])
    setLoading(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Thank you for your question. Based on the information provided, I recommend scheduling a consultation with one of our specialists for a thorough evaluation. In the meantime, please ensure you maintain regular health monitoring and stay hydrated. Would you like me to provide more details on any specific aspect?',
        },
      ])
      setLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-card flex flex-col md:flex-row overflow-hidden"
        >
          {/* Sidebar */}
          <div className="w-full md:w-72 lg:w-80 bg-[oklch(0.16_0.02_260)] text-white p-6 lg:p-8 flex flex-col shrink-0 border-r border-white/5 relative">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2.5">
                <div className="bg-primary p-2 rounded-lg">
                  <HeartPulse size={18} className="text-primary-foreground" />
                </div>
                <span className="text-lg font-bold tracking-tight">ECOMEDx</span>
              </div>

              <button
                onClick={onClose}
                className="md:hidden text-white/50 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 space-y-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-14 h-14 rounded-xl overflow-hidden mb-4 border-2 border-primary shadow-lg">
                  <img
                    src={
                      doctor
                        ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.name}`
                        : `https://api.dicebear.com/7.x/bottts/svg?seed=core`
                    }
                    className="w-full h-full object-cover"
                    alt={doctor ? doctor.name : 'AI Assistant'}
                  />
                </div>

                <h4 className="font-bold text-base mb-0.5">
                  {doctor ? doctor.name : 'MediBot Core'}
                </h4>

                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-4">
                  {doctor ? doctor.role : 'Clinical AI'}
                </p>

                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <ShieldCheck size={14} />
                  End-to-End Encrypted
                </div>
              </div>

              <div className="space-y-5 hidden md:block">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  System Status
                </p>

                {[
                  { label: 'AI Load', val: '14%', width: '14%', color: 'bg-primary' },
                  { label: 'Connection', val: '98%', width: '98%', color: 'bg-emerald-500' },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-white/40">
                      <span>{stat.label}</span>
                      <span className="text-white/80 tabular-nums">{stat.val}</span>
                    </div>

                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stat.width }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={cn('h-full rounded-full', stat.color)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onClose}
              className="hidden md:flex mt-8 items-center justify-center gap-2 py-3.5 bg-white/5 text-white/50 rounded-xl font-semibold text-xs uppercase tracking-wider hover:bg-red-600/20 hover:text-red-400 transition-all"
            >
              End Session
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-background flex flex-col relative overflow-hidden">
            <header className="bg-card border-b border-border px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="px-3 py-1.5 bg-[oklch(0.16_0.02_260)] rounded-lg flex items-center gap-2">
                  <Cpu size={14} className="text-primary" />
                  <span className="text-xs font-semibold text-white/80 font-mono">
                    ACTIVE
                  </span>
                </div>

                <span className="hidden lg:block text-xs text-muted-foreground font-medium">
                  Session v5.2.1
                </span>
              </div>

              <Activity size={20} className="text-primary animate-pulse-slow" />
            </header>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-6 custom-scrollbar"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex',
                    m.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      'max-w-[75%] lg:max-w-[60%] px-5 py-4 rounded-2xl',
                      m.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-md'
                        : 'bg-card text-card-foreground shadow-sm border border-border rounded-bl-md'
                    )}
                  >
                    <p className="text-sm leading-relaxed">{m.text}</p>
                  </motion.div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-card px-5 py-4 rounded-2xl shadow-sm border border-border rounded-bl-md flex gap-1.5">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.15s]" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 lg:p-6 bg-card border-t border-border">
              <div className="max-w-3xl mx-auto flex gap-3 bg-muted p-2 rounded-2xl border">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Describe your symptoms or ask a question..."
                  className="bg-transparent flex-1 px-4 py-3 outline-none text-sm"
                />

                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-primary text-primary-foreground p-3 rounded-xl"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}