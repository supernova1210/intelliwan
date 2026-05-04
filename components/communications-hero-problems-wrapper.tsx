"use client"

import React from "react"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Layers, Eye, Signal, Wrench, AlertTriangle } from "lucide-react"

// ===== NETWORK VISUALIZATION COMPONENTS =====

function NetworkNode({
  x,
  y,
  size = 6,
  delay = 0,
  color = "#00a86b",
}: {
  x: number
  y: number
  size?: number
  delay?: number
  color?: string
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}80, 0 0 ${size * 4}px ${color}40`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  )
}

function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  color = "#00a86b",
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  delay?: number
  color?: string
}) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <motion.line
        x1={`${x1}%`}
        y1={`${y1}%`}
        x2={`${x2}%`}
        y2={`${y2}%`}
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay, ease: "easeInOut" }}
      />
      <motion.circle
        r="3"
        fill={color}
        filter="url(#glow)"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          cx: [`${x1}%`, `${x2}%`],
          cy: [`${y1}%`, `${y2}%`],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: delay + 1,
          ease: "easeInOut",
        }}
      />
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

function NetworkVisualization({ scrollY }: { scrollY: number }) {
  const nodes = [
    { x: 50, y: 50, size: 14, color: "#004467", delay: 0 },
    { x: 32, y: 32, size: 9, color: "#00a86b", delay: 0.2 },
    { x: 68, y: 32, size: 9, color: "#0891b2", delay: 0.4 },
    { x: 32, y: 68, size: 9, color: "#0891b2", delay: 0.6 },
    { x: 68, y: 68, size: 9, color: "#00a86b", delay: 0.8 },
    { x: 18, y: 22, size: 6, color: "#00a86b", delay: 1.0 },
    { x: 50, y: 12, size: 7, color: "#004467", delay: 1.2 },
    { x: 82, y: 22, size: 6, color: "#0891b2", delay: 1.4 },
    { x: 88, y: 50, size: 7, color: "#00a86b", delay: 1.6 },
    { x: 82, y: 78, size: 6, color: "#004467", delay: 1.8 },
    { x: 50, y: 88, size: 7, color: "#0891b2", delay: 2.0 },
    { x: 18, y: 78, size: 6, color: "#00a86b", delay: 2.2 },
    { x: 12, y: 50, size: 7, color: "#004467", delay: 2.4 },
  ]

  const connections = [
    { x1: 50, y1: 50, x2: 32, y2: 32, color: "#00a86b", delay: 0.5 },
    { x1: 50, y1: 50, x2: 68, y2: 32, color: "#0891b2", delay: 0.7 },
    { x1: 50, y1: 50, x2: 32, y2: 68, color: "#0891b2", delay: 0.9 },
    { x1: 50, y1: 50, x2: 68, y2: 68, color: "#00a86b", delay: 1.1 },
    { x1: 32, y1: 32, x2: 18, y2: 22, color: "#00a86b", delay: 1.3 },
    { x1: 32, y1: 32, x2: 50, y2: 12, color: "#004467", delay: 1.5 },
    { x1: 68, y1: 32, x2: 50, y2: 12, color: "#004467", delay: 1.7 },
    { x1: 68, y1: 32, x2: 82, y2: 22, color: "#0891b2", delay: 1.9 },
    { x1: 68, y1: 32, x2: 88, y2: 50, color: "#00a86b", delay: 2.1 },
    { x1: 68, y1: 68, x2: 88, y2: 50, color: "#00a86b", delay: 2.3 },
    { x1: 68, y1: 68, x2: 82, y2: 78, color: "#004467", delay: 2.5 },
    { x1: 32, y1: 68, x2: 50, y2: 88, color: "#0891b2", delay: 2.7 },
    { x1: 32, y1: 68, x2: 18, y2: 78, color: "#00a86b", delay: 2.9 },
    { x1: 32, y1: 32, x2: 12, y2: 50, color: "#004467", delay: 3.1 },
    { x1: 32, y1: 32, x2: 68, y2: 68, color: "#00a86b", delay: 3.3 },
    { x1: 68, y1: 32, x2: 32, y2: 68, color: "#0891b2", delay: 3.5 },
    { x1: 12, y1: 50, x2: 18, y2: 22, color: "#004467", delay: 3.7 },
    { x1: 12, y1: 50, x2: 18, y2: 78, color: "#00a86b", delay: 3.9 },
    { x1: 88, y1: 50, x2: 82, y2: 22, color: "#0891b2", delay: 4.1 },
    { x1: 88, y1: 50, x2: 82, y2: 78, color: "#004467", delay: 4.3 },
  ]

  return (
    <div
      className="absolute right-0 top-[15%] w-[55%] h-[70%] opacity-50 pointer-events-none hidden lg:block"
      style={{
        transform: `translateY(${scrollY * 0.06}px)`,
      }}
    >
      {connections.map((conn, i) => (
        <ConnectionLine key={`conn-${i}`} {...conn} />
      ))}
      {nodes.map((node, i) => (
        <NetworkNode key={`node-${i}`} {...node} />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 168, 107, 0.25) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 68, 103, 0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}

// ===== PROBLEMS SECTION COMPONENTS =====

function ProblemItem({
  icon: Icon,
  text,
  index,
}: {
  icon: React.ElementType
  text: string
  index: number
}) {
  return (
    <motion.div
      className="relative flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <motion.div
        className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: [0, 1.2, 1],
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-red-500"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>

      <p className="text-gray-700 font-medium leading-relaxed pt-2">{text}</p>
    </motion.div>
  )
}

function SupervisionDashboard({ progress }: { progress: number }) {
  // Slower progression - alerts appear more gradually
  const alertCount = Math.min(6, Math.floor(progress * 4))

  const sites = [
    { name: "Site Lyon", status: alertCount >= 1 ? "alert" : "ok", x: 25, y: 30 },
    { name: "Site Paris", status: alertCount >= 2 ? "alert" : "ok", x: 65, y: 25 },
    { name: "Site Marseille", status: alertCount >= 3 ? "alert" : "ok", x: 45, y: 70 },
    { name: "Site Bordeaux", status: alertCount >= 4 ? "alert" : "ok", x: 15, y: 60 },
    { name: "Site Lille", status: alertCount >= 5 ? "alert" : "ok", x: 75, y: 55 },
    { name: "Site Nantes", status: alertCount >= 6 ? "alert" : "ok", x: 85, y: 75 },
  ]

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-2xl bg-[#0a1628] border border-gray-700/50 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-10 bg-[#0d1d33] border-b border-gray-700/50 flex items-center px-4 gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-gray-400 font-mono">supervision.intelliwan.local</span>
        </div>

        <div className="absolute top-10 inset-x-0 bottom-0 p-4">
          <div className="absolute inset-4 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-gray-500" style={{ top: `${(i + 1) * 12.5}%` }} />
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-gray-500" style={{ left: `${(i + 1) * 12.5}%` }} />
            ))}
          </div>

          <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]">
            {sites.map((site, i) =>
              sites.slice(i + 1).map((otherSite, j) => (
                <line
                  key={`line-${i}-${j}`}
                  x1={`${site.x}%`}
                  y1={`${site.y}%`}
                  x2={`${otherSite.x}%`}
                  y2={`${otherSite.y}%`}
                  stroke={site.status === "alert" || otherSite.status === "alert" ? "#ef4444" : "#00a86b"}
                  strokeWidth="1"
                  strokeOpacity={site.status === "alert" || otherSite.status === "alert" ? "0.4" : "0.2"}
                  strokeDasharray={site.status === "alert" || otherSite.status === "alert" ? "4,4" : "none"}
                />
              ))
            )}
          </svg>

          {sites.map((site, i) => (
            <motion.div
              key={site.name}
              className="absolute"
              style={{ left: `calc(${site.x}% - 20px)`, top: `calc(${site.y}% - 20px)` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
                  site.status === "alert" ? "bg-red-500/20 border-2 border-red-500" : "bg-emerald-500/20 border-2 border-emerald-500"
                }`}
              >
                <Building2 className={`w-4 h-4 ${site.status === "alert" ? "text-red-400" : "text-emerald-400"}`} />
                {site.status === "alert" && (
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-red-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                )}
              </div>
              <span
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] font-mono whitespace-nowrap ${
                  site.status === "alert" ? "text-red-400" : "text-gray-500"
                }`}
              >
                {site.name}
              </span>
            </motion.div>
          ))}

          <motion.div
            className="absolute bottom-4 right-4 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2"
            animate={{
              borderColor: alertCount > 0 ? ["rgba(239,68,68,0.3)", "rgba(239,68,68,0.6)", "rgba(239,68,68,0.3)"] : "rgba(239,68,68,0.3)",
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-red-400 font-mono text-sm">{alertCount} alertes</span>
            </div>
          </motion.div>

          <div className="absolute bottom-4 left-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-gray-500 font-mono">Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-[10px] text-gray-500 font-mono">Alerte</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ===== MAIN WRAPPER COMPONENT =====

export function CommunicationsHeroProblemsWrapper() {
  const containerRef = useRef<HTMLDivElement>(null)
  const problemsRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const isProblemsInView = useInView(problemsRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      if (problemsRef.current) {
        const rect = problemsRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionTop = rect.top
        const sectionHeight = rect.height
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)))
        setScrollProgress(progress)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const problems = [
    { icon: Building2, text: "Multiplication des sites et des équipements" },
    { icon: Layers, text: "Outils de communication hétérogènes" },
    { icon: Eye, text: "Manque de visibilité sur les usages" },
    { icon: Signal, text: "Qualité de service inégale selon les sites" },
    { icon: Wrench, text: "Difficulté d'intervention en cas d'incident" },
    { icon: AlertTriangle, text: "Risque de coupure sur des environnements critiques" },
  ]

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* SHARED BACKGROUND - spans both hero and problems sections */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        {/* Large teal/cyan blob - top left */}
        <div
          className="absolute top-[-5%] left-[-10%] w-[55%] h-[60%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.4) 0%, rgba(0, 200, 180, 0.22) 30%, rgba(0, 180, 160, 0.08) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Blue blob - mid left */}
        <div
          className="absolute top-[10%] left-[5%] w-[42%] h-[50%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 68, 103, 0.32) 0%, rgba(0, 100, 150, 0.16) 35%, transparent 65%)",
            filter: "blur(70px)",
            animationDelay: "-3s",
          }}
        />

        {/* Green/emerald blob - top right */}
        <div
          className="absolute top-[0%] right-[-8%] w-[52%] h-[55%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 168, 107, 0.32) 0%, rgba(0, 200, 120, 0.16) 35%, transparent 65%)",
            filter: "blur(75px)",
            animationDelay: "-7s",
          }}
        />

        {/* Warm accent blob */}
        <div
          className="absolute top-[18%] left-[28%] w-[28%] h-[32%] animate-blob-drift"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 180, 100, 0.18) 0%, rgba(255, 200, 120, 0.08) 40%, transparent 60%)",
            filter: "blur(55px)",
          }}
        />

        {/* Mid-section teal blob - bridge between hero and problems */}
        <div
          className="absolute top-[45%] right-[-5%] w-[48%] h-[50%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.28) 0%, rgba(0, 200, 180, 0.14) 35%, transparent 65%)",
            filter: "blur(70px)",
            animationDelay: "-10s",
          }}
        />

        {/* Blue accent for problems section */}
        <div
          className="absolute bottom-[5%] left-[-8%] w-[45%] h-[45%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 68, 103, 0.26) 0%, rgba(0, 100, 150, 0.12) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-5s",
          }}
        />

        {/* Green accent for problems section */}
        <div
          className="absolute top-[55%] left-[8%] w-[38%] h-[42%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 168, 107, 0.22) 0%, rgba(0, 200, 120, 0.1) 35%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "-12s",
          }}
        />

        {/* Subtle warm/red accent - transitioning to alert theme */}
        <div
          className="absolute top-[60%] right-[15%] w-[28%] h-[32%] animate-blob-drift"
          style={{
            background:
              "radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, rgba(251, 146, 60, 0.06) 40%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Network Visualization - spans hero area */}
      <NetworkVisualization scrollY={scrollY} />

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Communications unifiées pour{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#00a86b] via-[#00c77a] to-[#00a86b] bg-clip-text text-transparent">
                    environnements complexes
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Téléphonie d'entreprise et outils collaboratifs conçus pour les organisations multi-sites, à forte
              volumétrie d'utilisateurs et aux exigences élevées de disponibilité.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="relative group bg-gray-900 px-8 py-6 text-base font-bold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 border-0 rounded-full"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Échanger avec un expert Intelliwan
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00a86b] animate-pulse" />
                <span className="text-sm text-gray-500">Système actif</span>
              </div>
              <span className="h-px w-8 bg-gradient-to-r from-gray-300 to-transparent" />
              <span className="text-sm text-gray-400">Communications en temps réel</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== PROBLEMS CONTENT ===== */}
      <div ref={problemsRef} className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProblemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Quand les communications deviennent{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600">un point de fragilité</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-red-100 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={isProblemsInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Problems list */}
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <ProblemItem key={problem.text} icon={problem.icon} text={problem.text} index={index} />
              ))}

              {/* Transition phrase */}
              <motion.p
                className="mt-8 text-lg text-gray-600 italic border-l-4 border-red-300 pl-4"
                initial={{ opacity: 0 }}
                animate={isProblemsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Sans vision globale, chaque incident devient un risque opérationnel.
              </motion.p>
            </div>

            {/* Right - Supervision Dashboard */}
            <div className="relative h-[400px] lg:h-[500px]">
              <SupervisionDashboard progress={scrollProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
