"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Network,
  Phone,
  Gauge,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react"

const auditAxes = [
  {
    icon: Network,
    title: "Architecture réseau & télécom",
    description: "Topologie, segmentation, interconnexions, bande passante et points de congestion.",
    level: 82,
    color: "#004467",
  },
  {
    icon: Phone,
    title: "Infrastructures voix & data",
    description: "Systèmes PBX, trunks SIP, passerelles, serveurs de communication et de collaboration.",
    level: 68,
    color: "#0891b2",
  },
  {
    icon: Gauge,
    title: "Performances & disponibilité",
    description: "Latence, jitter, taux de paquets perdus, disponibilité mesurée et redondance active.",
    level: 91,
    color: "#10b981",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & résilience",
    description: "Politiques de sécurité, chiffrement des flux, redondance, plans de reprise d'activité.",
    level: 74,
    color: "#004467",
  },
  {
    icon: SlidersHorizontal,
    title: "Adéquation outils / usages",
    description: "Couverture fonctionnelle, taux d'adoption, écarts entre besoins métiers et capacités.",
    level: 56,
    color: "#0891b2",
  },
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

export function AuditStratAudit() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeAxis, setActiveAxis] = useState<number>(0)

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Audit technique et fonctionnel des infrastructures existantes".split(" ")

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

        <motion.p
          className="text-lg text-gray-500 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Nous analysons en profondeur votre système de communication afin d'en identifier les forces, les limites et les risques."}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left -- Audit axes list */}
          <div className="space-y-3">
            {auditAxes.map((axis, i) => {
              const Icon = axis.icon
              const isActive = i === activeAxis
              return (
                <motion.button
                  key={i}
                  type="button"
                  className={`w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-400 ${
                    isActive
                      ? "bg-white shadow-lg shadow-gray-200/50 border-gray-200"
                      : "bg-white/40 border-gray-100 hover:bg-white/70 hover:border-gray-200"
                  }`}
                  onClick={() => setActiveAxis(i)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div
                    className="flex-shrink-0 p-2.5 rounded-xl border transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? `${axis.color}10` : "transparent",
                      borderColor: isActive ? `${axis.color}25` : "#e5e7eb",
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: isActive ? axis.color : "#9ca3af" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold text-[15px] mb-1 font-sans transition-colors duration-300"
                      style={{ color: isActive ? axis.color : "#374151" }}
                    >
                      {axis.title}
                    </h3>
                    <p className={`text-sm leading-relaxed font-sans transition-all duration-300 ${isActive ? "text-gray-500 max-h-20 opacity-100" : "text-gray-400 max-h-0 opacity-0 overflow-hidden"}`}>
                      {axis.description}
                    </p>
                  </div>
                  {/* Number badge */}
                  <span
                    className="text-xs font-mono font-bold px-2 py-1 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? `${axis.color}12` : "#f3f4f6",
                      color: isActive ? axis.color : "#9ca3af",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              )
            })}
          </div>

          {/* Right -- Visual analysis dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/40 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-[11px] text-gray-400 font-mono ml-2">audit.analyse</span>
              </div>

              {/* Grid visualization */}
              <div className="p-6 space-y-5">
                {auditAxes.map((axis, i) => {
                  const isActive = i === activeAxis
                  return (
                    <motion.div
                      key={i}
                      className="space-y-2"
                      animate={{ opacity: isActive ? 1 : 0.4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-sans font-medium ${isActive ? "text-gray-700" : "text-gray-400"}`}>
                          {axis.title.split(" ")[0]}
                        </span>
                        <span
                          className="text-xs font-mono font-bold"
                          style={{ color: isActive ? axis.color : "#d1d5db" }}
                        >
                          {axis.level}%
                        </span>
                      </div>
                      {/* Bar */}
                      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: axis.color }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${axis.level}%` } : {}}
                          transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  )
                })}

                {/* Summary indicator */}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-sans">Score global</span>
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="w-2 h-2 rounded-full bg-[#10b981]"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm font-mono font-bold text-[#004467]">74.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key phrase below card */}
            <motion.div
              className="mt-8 relative pl-6 border-l-2 border-[#004467]/30"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="text-sm italic text-gray-500 font-sans leading-relaxed">
                {"\"Un audit fiable permet d'éviter "}
                <span className="text-[#004467] font-semibold not-italic">des choix techniques coûteux ou inadaptés.</span>
                {"\""}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
