import { useState, useMemo } from 'react'
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Stethoscope, Globe, X } from 'lucide-react'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const networkNodes = [
  { id: 'd1', name: 'Dr. Julian Vane', type: 'doctor', coordinates: [-73.97, 40.78], label: 'New York', detail: 'Oncologist - Mount Sinai Research' },
  { id: 'd2', name: 'Dr. Sarah Al-Fayed', type: 'doctor', coordinates: [-1.26, 51.75], label: 'Oxford', detail: 'Neuro-Radiologist - Oxford Royal Medical' },
  { id: 'd3', name: 'Dr. Kenji Tanaka', type: 'doctor', coordinates: [139.69, 35.69], label: 'Tokyo', detail: 'Cardiologist - Tokyo Bio-Hospital' },
  { id: 'd4', name: 'Dr. Robert Stern', type: 'doctor', coordinates: [13.4, 52.52], label: 'Berlin', detail: 'Neurosurgeon - Berlin Charite' },
  { id: 'd5', name: 'Dr. Alice Monroe', type: 'doctor', coordinates: [-118.24, 34.05], label: 'Los Angeles', detail: 'Dermatologist - Beverly Hills Elite' },
  { id: 'p1', name: 'Patient A', type: 'patient', coordinates: [77.21, 28.61], label: 'New Delhi', detail: 'Cardiac Consultation - Active' },
  { id: 'p2', name: 'Patient B', type: 'patient', coordinates: [-43.17, -22.91], label: 'Rio de Janeiro', detail: 'Oncology Follow-Up - Active' },
  { id: 'p3', name: 'Patient C', type: 'patient', coordinates: [28.98, 41.01], label: 'Istanbul', detail: 'Neurology Assessment - Pending' },
  { id: 'p4', name: 'Patient D', type: 'patient', coordinates: [151.21, -33.87], label: 'Sydney', detail: 'Dermatology Review - Active' },
  { id: 'p5', name: 'Patient E', type: 'patient', coordinates: [37.62, 55.75], label: 'Moscow', detail: 'Diagnostic Screening - Scheduled' },
  { id: 'p6', name: 'Patient F', type: 'patient', coordinates: [-99.13, 19.43], label: 'Mexico City', detail: 'Neuro-Radiology Consult - Active' },
  { id: 'p7', name: 'Patient G', type: 'patient', coordinates: [103.85, 1.35], label: 'Singapore', detail: 'Cardiology Screening - Pending' },
]

const connections = [
  { from: 'd1', to: 'p2' }, { from: 'd1', to: 'p6' },
  { from: 'd2', to: 'p3' }, { from: 'd2', to: 'p5' },
  { from: 'd3', to: 'p1' }, { from: 'd3', to: 'p7' },
  { from: 'd4', to: 'p3' }, { from: 'd4', to: 'p5' },
  { from: 'd5', to: 'p4' }, { from: 'd5', to: 'p6' },
]

export function NetworkMapSection() {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [selectedNode, setSelectedNode] = useState(null)

  const nodeMap = useMemo(() => {
    const map = new Map()
    networkNodes.forEach((n) => map.set(n.id, n))
    return map
  }, [])

  const activeConnections = useMemo(() => {
    if (!selectedNode) return connections
    return connections.filter((c) => c.from === selectedNode.id || c.to === selectedNode.id)
  }, [selectedNode])

  const doctors = networkNodes.filter((n) => n.type === 'doctor')
  const patients = networkNodes.filter((n) => n.type === 'patient')

  return (
    <section className="py-28 md:py-40 px-6 bg-[oklch(0.16_0.02_260)] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.25_0.08_260)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 block">Global Reach</span>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight text-balance">Connected Worldwide</h3>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Our AI-powered network bridges the gap between elite specialists and patients across every continent in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
        >
          {[
            { icon: Stethoscope, label: 'Specialists', value: '5 Active', color: 'text-primary' },
            { icon: Users, label: 'Patients', value: '7 Connected', color: 'text-emerald-400' },
            { icon: Globe, label: 'Connections', value: '10 Live Links', color: 'text-amber-400' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-2xl px-5 py-3">
              <stat.icon size={18} className={stat.color} />
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">{stat.label}</p>
                <p className="text-sm font-bold text-white tabular-nums">{stat.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/[0.02] border border-white/[0.06] rounded-3xl overflow-hidden"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 130, center: [20, 20] }}
            className="w-full h-auto"
            style={{ maxHeight: '560px' }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="oklch(0.22 0.02 260)"
                    stroke="oklch(0.28 0.02 260)"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: 'oklch(0.26 0.03 260)' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {activeConnections.map((conn) => {
              const from = nodeMap.get(conn.from)
              const to = nodeMap.get(conn.to)
              if (!from || !to) return null
              return (
                <Line
                  key={`${conn.from}-${conn.to}`}
                  from={from.coordinates}
                  to={to.coordinates}
                  stroke="oklch(0.52 0.18 260 / 0.25)"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
              )
            })}

            {doctors.map((node) => (
              <Marker
                key={node.id}
                coordinates={node.coordinates}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(selectedNode?.id === node.id ? null : node)}
                style={{ cursor: 'pointer' }}
              >
                <circle r={7} fill="oklch(0.52 0.18 260)" stroke="oklch(0.52 0.18 260 / 0.3)" strokeWidth={4} className={selectedNode?.id === node.id ? 'animate-pulse' : ''} />
                <circle r={12} fill="oklch(0.52 0.18 260 / 0.1)" stroke="none" />
                <text textAnchor="middle" y={-18} style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 700, fill: 'oklch(0.52 0.18 260)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {node.label}
                </text>
              </Marker>
            ))}

            {patients.map((node) => (
              <Marker
                key={node.id}
                coordinates={node.coordinates}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(selectedNode?.id === node.id ? null : node)}
                style={{ cursor: 'pointer' }}
              >
                <circle r={5} fill="oklch(0.7 0.17 160)" stroke="oklch(0.7 0.17 160 / 0.3)" strokeWidth={3} className={selectedNode?.id === node.id ? 'animate-pulse' : ''} />
                <circle r={10} fill="oklch(0.7 0.17 160 / 0.08)" stroke="none" />
                <text textAnchor="middle" y={-14} style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600, fill: 'oklch(0.7 0.17 160)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {node.label}
                </text>
              </Marker>
            ))}
          </ComposableMap>

          <AnimatePresence>
            {hoveredNode && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute bottom-6 left-6 bg-[oklch(0.16_0.02_260)]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 pointer-events-none"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${hoveredNode.type === 'doctor' ? 'bg-primary' : 'bg-emerald-400'}`} />
                  <p className="text-sm font-bold text-white">{hoveredNode.name}</p>
                </div>
                <p className="text-xs text-white/50 ml-[22px]">{hoveredNode.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedNode && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute top-6 right-6 bg-[oklch(0.16_0.02_260)]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 max-w-[260px]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${selectedNode.type === 'doctor' ? 'bg-primary' : 'bg-emerald-400'}`} />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                      {selectedNode.type === 'doctor' ? 'Specialist' : 'Patient'}
                    </span>
                  </div>
                  <button onClick={() => setSelectedNode(null)} className="text-white/30 hover:text-white transition-colors" aria-label="Close details">
                    <X size={14} />
                  </button>
                </div>
                <p className="text-sm font-bold text-white mb-1">{selectedNode.name}</p>
                <p className="text-xs text-white/50 mb-3">{selectedNode.detail}</p>
                <p className="text-xs text-primary font-semibold">{selectedNode.label}</p>

                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">Active Connections</p>
                  <div className="flex flex-col gap-1.5">
                    {connections
                      .filter((c) => c.from === selectedNode.id || c.to === selectedNode.id)
                      .map((c) => {
                        const otherId = c.from === selectedNode.id ? c.to : c.from
                        const other = nodeMap.get(otherId)
                        if (!other) return null
                        return (
                          <button
                            key={otherId}
                            onClick={() => setSelectedNode(other)}
                            className="flex items-center gap-2 text-left hover:bg-white/[0.04] rounded-lg px-2 py-1 -mx-2 transition-colors"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${other.type === 'doctor' ? 'bg-primary' : 'bg-emerald-400'}`} />
                            <span className="text-xs text-white/70">{other.name}</span>
                          </button>
                        )
                      })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-6 right-6 flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Doctors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Patients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
