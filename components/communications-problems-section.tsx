"use client"

import React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Building2, 
  Layers, 
  Eye, 
  Signal, 
  Wrench, 
  AlertTriangle 
} from "lucide-react"

// Problem item with alert indicator
function ProblemItem({ 
  icon: Icon, 
  text, 
  index, 
  isVisible 
}: { 
  icon: React.ElementType
  text: string
  index: number
  isVisible: boolean
}) {
  return (
    <motion.div
      className="relative flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm"
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Alert indicator */}
      <motion.div
        className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500"
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { 
          scale: [0, 1.2, 1],
          opacity: 1,
        } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
      >
        {/* Slow pulse effect */}
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

// Stylized IT Supervision Dashboard
function SupervisionDashboard({ progress }: { progress: number }) {
  const alertCount = Math.min(6, Math.floor(progress * 7))
  
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
      {/* Dashboard frame */}
      <div className="absolute inset-0 rounded-2xl bg-[#0a1628] border border-gray-700/50 shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-[#0d1d33] border-b border-gray-700/50 flex items-center px-4 gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-gray-400 font-mono">supervision.intelliwan.local</span>
        </div>

        {/* Main dashboard area */}
        <div className="absolute top-10 inset-x-0 bottom-0 p-4">
          {/* Grid lines */}
          <div className="absolute inset-4 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-gray-500"
                style={{ top: `${(i + 1) * 12.5}%` }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-gray-500"
                style={{ left: `${(i + 1) * 12.5}%` }}
              />
            ))}
          </div>

          {/* Connection lines between sites */}
          <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]">
            {sites.map((site, i) => 
              sites.slice(i + 1).map((otherSite, j) => (
                <line
                  key={`line-${i}-${j}`}
                  x1={`${site.x}%`}
                  y1={`${site.y}%`}
                  x2={`${otherSite.x}%`}
                  y2={`${otherSite.y}%`}
                  stroke={site.status === "alert" || otherSite.status === "alert" ? "#ef4444" : "#0891b2"}
                  strokeWidth="1"
                  strokeOpacity={site.status === "alert" || otherSite.status === "alert" ? "0.4" : "0.2"}
                  strokeDasharray={site.status === "alert" || otherSite.status === "alert" ? "4,4" : "none"}
                />
              ))
            )}
          </svg>

          {/* Site nodes */}
          {sites.map((site, i) => (
            <motion.div
              key={site.name}
              className="absolute"
              style={{ left: `calc(${site.x}% - 20px)`, top: `calc(${site.y}% - 20px)` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Node */}
              <div className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
                site.status === "alert" 
                  ? "bg-red-500/20 border-2 border-red-500" 
                  : "bg-cyan-500/20 border-2 border-cyan-500"
              }`}>
                <Building2 className={`w-4 h-4 ${
                  site.status === "alert" ? "text-red-400" : "text-cyan-400"
                }`} />
                
                {/* Alert pulse */}
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
              
              {/* Label */}
              <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] font-mono whitespace-nowrap ${
                site.status === "alert" ? "text-red-400" : "text-gray-500"
              }`}>
                {site.name}
              </span>
            </motion.div>
          ))}

          {/* Alert counter */}
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

          {/* Status bar */}
          <div className="absolute bottom-4 left-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
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

export function CommunicationsProblemsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-20%" })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height
      
      // Calculate progress from when section enters view to when it's fully visible
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)))
      setScrollProgress(progress)
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Continuous background from hero */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        {/* Teal/cyan blob - continuing from hero */}
        <div
          className="absolute top-[-20%] right-[-15%] w-[55%] h-[70%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.3) 0%, rgba(0, 200, 180, 0.15) 30%, transparent 65%)",
            filter: "blur(75px)",
          }}
        />

        {/* Blue blob */}
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 68, 103, 0.25) 0%, rgba(0, 100, 150, 0.12) 35%, transparent 65%)",
            filter: "blur(70px)",
            animationDelay: "-5s",
          }}
        />

        {/* Green accent */}
        <div
          className="absolute top-[30%] left-[5%] w-[40%] h-[50%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 168, 107, 0.2) 0%, rgba(0, 200, 120, 0.1) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-10s",
          }}
        />

        {/* Subtle warm accent - transitioning to alert theme */}
        <div
          className="absolute top-[10%] right-[20%] w-[30%] h-[35%] animate-blob-drift"
          style={{
            background:
              "radial-gradient(circle at center, rgba(239, 68, 68, 0.08) 0%, rgba(251, 146, 60, 0.05) 40%, transparent 60%)",
            filter: "blur(55px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Quand les communications deviennent{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-red-600">un point de fragilité</span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-3 bg-red-100 -z-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
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
              <ProblemItem
                key={problem.text}
                icon={problem.icon}
                text={problem.text}
                index={index}
                isVisible={isInView}
              />
            ))}

            {/* Transition phrase */}
            <motion.p
              className="mt-8 text-lg text-gray-600 italic border-l-4 border-red-300 pl-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Sans vision globale, chaque incident devient un risque opérationnel.
            </motion.p>
          </div>

          {/* Right - Supervision Dashboard */}
          <div ref={dashboardRef} className="relative h-[400px] lg:h-[500px]">
            <SupervisionDashboard progress={scrollProgress} />
          </div>
        </div>
      </div>
    </section>
  )
}
