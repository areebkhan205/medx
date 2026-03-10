import { useState, useEffect, lazy, Suspense } from 'react'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { TrustBar } from '@/components/trust-bar'
import { ServicesSection } from '@/components/services-section'
import { SpecialistsSection } from '@/components/specialists-section'
import { CTASection } from '@/components/cta-section'
import { AuthModal } from '@/components/auth-modal'
import { PaymentModal } from '@/components/payment-modal'
import { ChatWorkstation } from '@/components/chat-workstation'
import { Footer } from '@/components/footer'

// Lazy load the heavy map section
const NetworkMapSection = lazy(() =>
  import('@/components/network-map-section').then((mod) => ({ default: mod.NetworkMapSection }))
)

function NetworkMapPlaceholder() {
  return (
    <section className="py-28 md:py-40 px-6 bg-[oklch(0.16_0.02_260)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 block">Global Reach</span>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight text-balance">Connected Worldwide</h3>
        <div className="mt-12 bg-white/[0.02] border border-white/[0.06] rounded-3xl h-[400px] md:h-[560px] animate-pulse" />
      </div>
    </section>
  )
}

const specialists = [
  { name: 'Dr. Julian Vane', role: 'Oncologist', hospital: 'Mount Sinai Research', rating: '5.0' },
  { name: 'Dr. Sarah Al-Fayed', role: 'Neuro-Radiologist', hospital: 'Oxford Royal Medical', rating: '4.9' },
  { name: 'Dr. Kenji Tanaka', role: 'Cardiologist', hospital: 'Tokyo Bio-Hospital', rating: '5.0' },
  { name: 'Dr. Alice Monroe', role: 'Dermatologist', hospital: 'Beverly Hills Elite', rating: '4.8' },
  { name: 'Dr. Robert Stern', role: 'Neurosurgeon', hospital: 'Berlin Charite', rating: '4.9' },
]

export default function App() {
  const [activeDoctor, setActiveDoctor] = useState(null)
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const initiateConsult = (doctor = null) => {
    setActiveDoctor(doctor)
    setPaymentOpen(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-x-hidden">
      <Navbar
        onOpenChat={() => initiateConsult()}
        onAuthClick={() => setAuthOpen(true)}
        isScrolled={isScrolled}
      />

      <main>
        <HeroSection onAccessClick={() => initiateConsult()} />
        <TrustBar />
        <ServicesSection />
        <SpecialistsSection specialists={specialists} onInitiate={initiateConsult} />
        <Suspense fallback={<NetworkMapPlaceholder />}>
          <NetworkMapSection />
        </Suspense>
        <CTASection onAccessClick={() => initiateConsult()} />
      </main>

      <Footer />

      {/* Modals */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <PaymentModal
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        onPaid={() => {
          setPaymentOpen(false)
          setChatOpen(true)
        }}
        serviceName={activeDoctor ? activeDoctor.name : 'MediBot AI Core'}
      />
      <ChatWorkstation
        isOpen={chatOpen}
        onClose={() => {
          setChatOpen(false)
          setActiveDoctor(null)
        }}
        doctor={activeDoctor}
      />
    </div>
  )
}
