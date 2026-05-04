"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { CheckCircle2, AlertTriangle, RotateCcw, Server, Phone, Shield, Wifi } from "lucide-react"

const phases = [
  {
    id: "normal",
    label: "Normal",
    icon: CheckCircle2,
    color: "#00a86b",
    title: "Fonctionnement nominal",
    description: "Tous les systèmes de communication sont actifs. Les flux principaux et secondaires fonctionnent normalement.",
    links: [
      { id: "primary-1", label: "Voix principale", active: true, type: "primary" },
      { id: "primary-2", label: "Data / SIP", active: true, type: "primary" },
      { id: "secondary-1", label: "Messagerie", active: true, type: "secondary" },
      { id: "secondary-2", label: "Visioconférence", active: true, type: "secondary" },
      { id: "backup", label: "Lien de secours", active: false, type: "backup" },
    ],
  },
  {
    id: "incident",
    label: "Incident",
    icon: AlertTriangle,
    color: "#dc2626",
    title: "Défaillance détectée",
    description: "Un incident provoque la perte de certains liens. Les communications secondaires sont interrompues.",
    links: [
      { id: "primary-1", label: "Voix principale", active: true, type: "primary" },
      { id: "primary-2", label: "Data / SIP", active: false, type: "primary" },
      { id: "secondary-1", label: "Messagerie", active: false, type: "secondary" },
      { id: "secondary-2", label: "Visioconférence", active: false, type: "secondary" },
      { id: "backup", label: "Lien de secours", active: false, type: "backup" },
    ],
  },
  {
    id: "failover",
    label: "Bascule",
    icon: RotateCcw,
    color: "#0891b2",
    title: "Bascule automatique",
    description: "Le système bascule automatiquement sur les liens de secours. Les communications essentielles sont maintenues.",
    links: [
      { id: "primary-1", label: "Voix principale", active: true, type: "primary" },
      { id: "primary-2", label: "Data / SIP", active: false, type: "primary" },
      { id: "secondary-1", label: "Messagerie", active: false, type: "secondary" },
      { id: "secondary-2", label: "Visioconférence", active: false, type: "secondary" },
      { id: "backup", label: "Lien de secours", active: true, type: "backup" },
    ],
  },
]

const principles = [
  { icon: Server, text: "Redondance des équipements et des liens" },
  { icon: Shield, text: "Architectures haute disponibilité" },
  { icon: RotateCcw, text: "Bascule automatique en cas de défaillance" },
  { icon: Phone, text: "Maintien des communications essentielles" },
]

function TitleWord({
  word,
  progress,
  start,
  end,
}: {
  word: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  const color = useTransform(progress, [start, end], ["rgba(17,24,39,0.15)", "rgba(17,24,39,1)"])

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  )
}

export function CrisisMgmtContinuity() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activePhase, setActivePhase] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Assurer la continuité des communications, même en situation dégradée".split(" ")

  // Auto-cycle through phases
  useEffect(() => {
    if (!autoPlay || !isInView) return
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [autoPlay, isInView])

  const currentPhase = phases[activePhase]

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-15%] right-[-5%] w-[50%] h-[55%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 180, 180, 0.25) 0%, rgba(0, 200, 180, 0.12) 30%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute top-[25%] left-[-5%] w-[40%] h-[45%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.2) 0%, rgba(0, 100, 150, 0.1) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[45%] h-[40%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 168, 107, 0.2) 0%, rgba(0, 200, 120, 0.1) 35%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "-10s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight max-w-4xl">
            {titleWords.map((word, i) => {
              const start = i / titleWords.length
              const end = (i + 1) / titleWords.length
              return <TitleWord key={i} word={word} progress={scrollYProgress} start={start} end={end} />
            })}
          </h2>
        </div>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-500 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Intelliwan conçoit des architectures de communication capables de résister aux incidents et de garantir la continuité des échanges, même lorsque les conditions sont fortement dégradées."}
        </motion.p>

        {/* Phase selector + visualization */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left -- phase selector & principles */}
          <div>
            {/* Phase buttons */}
            <div className="flex gap-3 mb-8">
              {phases.map((phase, i) => {
                const Icon = phase.icon
                const isActive = i === activePhase
                return (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => {
                      setActivePhase(i)
                      setAutoPlay(false)
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold font-sans transition-all duration-300 border ${
                      isActive
                        ? "bg-white shadow-lg shadow-gray-200/50 border-gray-200"
                        : "bg-white/50 border-gray-100 hover:bg-white/80"
                    }`}
                    style={{ color: isActive ? phase.color : "#9ca3af" }}
                  >
                    <Icon className="w-4 h-4" />
                    {phase.label}
                  </button>
                )
              })}
            </div>

            {/* Phase description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-10"
              >
                <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: currentPhase.color }}>
                  {currentPhase.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-sans text-sm">{currentPhase.description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Principles */}
            <div className="space-y-4">
              {principles.map((principle, i) => {
                const Icon = principle.icon
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#004467]/8 border border-[#004467]/15 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#004467]" />
                    </div>
                    <span className="text-sm text-gray-600 font-sans">{principle.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Key phrase */}
            <motion.div
              className="mt-10 relative pl-6 border-l-2 border-[#004467]/30"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-sm italic text-gray-500 font-sans leading-relaxed">
                {"\"La résilience n'est pas une option. "}
                <span className="text-[#004467] font-semibold not-italic">{"Elle se conçoit dès l'architecture.\""}</span>
              </p>
            </motion.div>
          </div>

          {/* Right -- link status visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/40 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-[11px] text-gray-400 font-mono ml-2">status.monitoring</span>
                <div className="ml-auto flex items-center gap-2">
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: currentPhase.color }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: currentPhase.color }}>
                    {currentPhase.label}
                  </span>
                </div>
              </div>

              {/* Links grid */}
              <div className="p-5 space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhase.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {currentPhase.links.map((link) => (
                      <motion.div
                        key={link.id}
                        className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-500 ${
                          link.active
                            ? "bg-white border-gray-200"
                            : "bg-gray-50 border-gray-100 opacity-40"
                        }`}
                        layout
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor: link.active
                                ? link.type === "backup" ? "#0891b2" : "#00a86b"
                                : "#d1d5db",
                            }}
                            animate={link.active ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className={`text-sm font-sans font-medium ${link.active ? "text-gray-700" : "text-gray-400 line-through"}`}>
                            {link.label}
                          </span>
                        </div>
                        <span className={`text-[11px] font-mono uppercase tracking-wider ${
                          link.active
                            ? link.type === "backup" ? "text-[#0891b2]" : "text-[#00a86b]"
                            : "text-gray-300"
                        }`}>
                          {link.active ? (link.type === "backup" ? "failover" : "actif") : "inactif"}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress bar */}
              <div className="px-5 pb-4">
                <div className="flex gap-1.5">
                  {phases.map((_, i) => (
                    <div key={i} className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: phases[i].color }}
                        animate={{
                          width: i === activePhase ? "100%" : i < activePhase ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
