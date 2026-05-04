"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Network,
  Shield,
  Zap,
  Building2,
  ArrowUpDown,
  Layers,
  Eye,
  BarChart3,
  Wrench,
  AlertTriangle,
  Lock,
  CheckCircle2,
} from "lucide-react"

/* Problem state: scattered, disorganized positions */
const problemNodes = [
  { icon: Building2, x: 18, y: 12, label: "Sites" },
  { icon: Layers, x: 82, y: 25, label: "Outils" },
  { icon: Eye, x: 68, y: 62, label: "Visibilité" },
  { icon: BarChart3, x: 85, y: 88, label: "QoS" },
  { icon: Wrench, x: 22, y: 78, label: "Support" },
  { icon: AlertTriangle, x: 8, y: 48, label: "Sécurité" },
]

/* Solution state: organized hub-and-spoke positions */
const solutionNodes = [
  { icon: Building2, x: 25, y: 15, label: "Sites" },
  { icon: Layers, x: 75, y: 15, label: "Outils" },
  { icon: Eye, x: 85, y: 50, label: "Visibilité" },
  { icon: BarChart3, x: 75, y: 85, label: "QoS" },
  { icon: Wrench, x: 25, y: 85, label: "Support" },
  { icon: AlertTriangle, x: 15, y: 50, label: "Sécurité" },
]

/* Problem state: sparse, broken connections (only a few weak links) */
const problemConnections = [
  { from: 0, to: 1, broken: true },
  { from: 2, to: 3, broken: true },
  { from: 4, to: 5, broken: true },
]

/* Solution state: organized ring + spokes */
const solutionConnections = [
  { from: 0, to: 1, broken: false },
  { from: 1, to: 2, broken: false },
  { from: 2, to: 3, broken: false },
  { from: 3, to: 4, broken: false },
  { from: 4, to: 5, broken: false },
  { from: 5, to: 0, broken: false },
]

const problems = [
  { icon: Building2, text: "Multiplication des sites et des équipements" },
  { icon: Layers, text: "Outils de communication hétérogènes" },
  { icon: Eye, text: "Manque de visibilité sur les usages" },
  { icon: BarChart3, text: "Qualité de service inégale selon les sites" },
  { icon: Wrench, text: "Difficulté d'intervention en cas d'incident" },
  { icon: AlertTriangle, text: "Risque de coupure sur des environnements critiques" },
]

const solutions = [
  { icon: Layers, text: "Centralisation des communications" },
  { icon: Network, text: "Interconnexion des sites" },
  { icon: Zap, text: "Haute disponibilité" },
  { icon: Lock, text: "Sécurité des flux" },
  { icon: ArrowUpDown, text: "Architecture évolutive" },
]

const iconNodes = [
  { icon: Building2, x: 25, y: 15, label: "Sites" },
  { icon: Layers, x: 75, y: 15, label: "Outils" },
  { icon: Eye, x: 85, y: 50, label: "Visibilité" },
  { icon: BarChart3, x: 75, y: 85, label: "QoS" },
  { icon: Wrench, x: 25, y: 85, label: "Support" },
  { icon: AlertTriangle, x: 15, y: 50, label: "Sécurité" },
]

function NetworkVisualization({ progress }: { progress: number }) {
  const isGreen = progress > 0.5
  const showHub = progress > 0.6
  const transitionProgress = Math.max(0, Math.min(1, (progress - 0.4) / 0.3))

  /* Interpolate between problem and solution positions */
  const currentNodes = problemNodes.map((pNode, i) => {
    const sNode = solutionNodes[i]
    return {
      ...pNode,
      x: pNode.x + (sNode.x - pNode.x) * transitionProgress,
      y: pNode.y + (sNode.y - pNode.y) * transitionProgress,
    }
  })

  const currentConnections = isGreen ? solutionConnections : problemConnections

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-3xl transition-all duration-1000"
        style={{
          background: isGreen
            ? "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Central hub (only in solution state) */}
      <div
        className="absolute left-1/2 top-1/2 z-10 transition-all duration-700"
        style={{
          opacity: showHub ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${showHub ? 1 : 0})`,
        }}
      >
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/40">
          <Network className="w-6 h-6 text-white" />
          <div className="absolute -inset-2 rounded-full border-2 border-emerald-400/30 animate-ping" />
        </div>
      </div>

      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Peer-to-peer connections */}
        {currentConnections.map((conn, i) => {
          const from = currentNodes[conn.from]
          const to = currentNodes[conn.to]
          if (!from || !to) return null
          return (
            <line
              key={`${conn.from}-${conn.to}-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isGreen ? "#10b981" : "#ef4444"}
              strokeWidth={isGreen ? 0.5 : 0.3}
              strokeDasharray={isGreen ? "0" : "4 4"}
              opacity={isGreen ? 0.7 : 0.3}
              filter="url(#glow)"
            />
          )
        })}

        {/* Hub connections (only in solution state) */}
        {showHub &&
          currentNodes.map((node, i) => (
            <line
              key={`hub-${i}`}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="#10b981"
              strokeWidth={0.4}
              opacity={showHub ? 0.6 : 0}
              filter="url(#glow)"
            />
          ))}
      </svg>

      {/* Icon nodes */}
      {currentNodes.map((node, i) => {
        const Icon = node.icon
        const hasError = !isGreen && i % 2 === 0 /* Some nodes show errors in problem state */
        const xPos = typeof node.x === 'number' ? node.x : 50
        const yPos = typeof node.y === 'number' ? node.y : 50
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center transition-all duration-700"
            style={{
              left: `${xPos}%`,
              top: `${yPos}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Outer glow */}
            <div
              className="absolute w-16 h-16 rounded-full transition-all duration-1000"
              style={{
                backgroundColor: isGreen ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.12)",
              }}
            />
            {/* Error pulse (problem state only) */}
            {hasError && (
              <div className="absolute w-12 h-12 rounded-xl border-2 border-red-500/40 animate-ping" />
            )}
            {/* Node card */}
            <div
              className="relative w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-sm transition-all duration-700"
              style={{
                backgroundColor: isGreen ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.15)",
                borderColor: isGreen
                  ? "rgba(16, 185, 129, 0.5)"
                  : hasError
                    ? "rgba(239, 68, 68, 0.7)"
                    : "rgba(239, 68, 68, 0.3)",
                color: isGreen ? "rgb(52, 211, 153)" : "rgb(248, 113, 113)",
              }}
            >
              <Icon className="w-5 h-5" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function ProblemsSolutionsTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Convert motion value to state for easier use
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setProgress(v))
    return () => unsubscribe()
  }, [scrollYProgress])

  // Slide position for solutions panel (0% = hidden below, 100% = fully visible)
  const slideProgress = Math.max(0, Math.min(1, (progress - 0.3) / 0.4))
  const showSolutions = progress > 0.5

  return (
    <div ref={containerRef} className="relative" style={{ height: "250vh" }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0 bg-[#0a1628]">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
              style={{ 
                background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
                filter: "blur(120px)"
              }}
            />
            <div
              className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-25"
              style={{ 
                background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
                filter: "blur(100px)"
              }}
            />
            <div
              className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full transition-opacity duration-1000"
              style={{
                background: "radial-gradient(ellipse, #10b981 0%, transparent 70%)",
                filter: "blur(120px)",
                opacity: showSolutions ? 0.4 : 0.2,
              }}
            />
            <div
              className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full transition-opacity duration-1000"
              style={{
                background: "radial-gradient(circle, #ef4444 0%, transparent 70%)",
                filter: "blur(100px)",
                opacity: showSolutions ? 0 : 0.08,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Sliding panels */}
              <div className="relative h-[600px] overflow-hidden">
                {/* Problems panel */}
                <div
                  className="absolute inset-0 flex flex-col transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${-slideProgress * 100}%)`,
                    opacity: 1 - slideProgress,
                  }}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                    Quand les communications deviennent un point de fragilité
                  </h2>

                  <div className="space-y-3 flex-1">
                    {problems.map((problem, i) => {
                      const Icon = problem.icon
                      return (
                        <div
                          key={i}
                          className="relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
                        >
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500">
                            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-60" />
                          </div>
                          <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 text-white/50">
                            <Icon className="w-5 h-5" />
                          </div>
                          <p className="text-white/70 font-medium leading-relaxed">{problem.text}</p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6 pt-4">
                    <div className="relative pl-5 border-l-2 border-red-500/50">
                      <p className="text-base text-white/50 italic font-light">
                        Sans vision globale, chaque incident devient un risque opérationnel.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solutions panel - slides up from below */}
                <div
                  className="absolute inset-0 flex flex-col transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${(1 - slideProgress) * 100}%)`,
                    opacity: slideProgress,
                  }}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    Une architecture pensée pour durer
                  </h2>

                  <p className="text-base text-white/50 leading-relaxed mb-8">
                    Intelliwan conçoit et déploie des solutions de communications unifiées adaptées à la
                    complexité de votre organisation.
                  </p>

                  <div className="space-y-3 flex-1">
                    {solutions.map((solution, i) => {
                      const Icon = solution.icon
                      return (
                        <div
                          key={i}
                          className="relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm"
                        >
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500">
                            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
                          </div>
                          <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                            <Icon className="w-5 h-5" />
                          </div>
                          <p className="text-white/80 font-medium leading-relaxed">{solution.text}</p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6 pt-4">
                    <div className="relative pl-5 border-l-2 border-emerald-500/50">
                      <p className="text-base text-white/60 font-light">
                        Une seule vision. Une seule architecture.{" "}
                        <span className="text-emerald-400 font-medium">Une maîtrise totale.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${progress * 100}%`,
                      backgroundColor: showSolutions ? "rgb(16, 185, 129)" : "rgb(239, 68, 68)",
                    }}
                  />
                </div>
              </div>

              {/* Right side - Network visualization */}
              <div className="relative">
                <div
                  className="relative rounded-3xl bg-white/[0.02] border backdrop-blur-sm p-6 overflow-hidden transition-colors duration-1000"
                  style={{
                    borderColor: showSolutions ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <NetworkVisualization progress={progress} />
                </div>

                {/* Status badge */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full backdrop-blur-md border transition-all duration-700"
                  style={{
                    backgroundColor: showSolutions ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                    borderColor: showSolutions ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    {showSolutions ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    )}
                    <span
                      className="text-sm font-medium transition-colors duration-700"
                      style={{ color: showSolutions ? "rgb(52, 211, 153)" : "rgb(248, 113, 113)" }}
                    >
                      {showSolutions ? "Infrastructure optimisée" : "Problèmes détectés"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300"
          style={{ opacity: progress < 0.9 ? 1 : 0 }}
        >
          <span className="text-xs text-white/40 uppercase tracking-wider">Scroll</span>
          <div
            className="w-6 h-10 rounded-full border flex justify-center pt-2 transition-colors duration-700"
            style={{ borderColor: showSolutions ? "rgba(16, 185, 129, 0.3)" : "rgba(255, 255, 255, 0.2)" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-bounce transition-colors duration-700"
              style={{ backgroundColor: showSolutions ? "rgb(16, 185, 129)" : "rgb(255, 255, 255)" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
