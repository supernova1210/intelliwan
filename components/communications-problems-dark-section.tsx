"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Layers, Eye, BarChart3, Wrench, AlertTriangle } from "lucide-react"

// Icon node component rendered in HTML overlay
function IconNode({
  icon: Icon,
  x,
  y,
  isAlert,
  index,
}: {
  icon: React.ElementType
  x: number
  y: number
  isAlert: boolean
  index: number
}) {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Outer glow ring */}
      <motion.div
        className={`absolute w-16 h-16 rounded-full ${isAlert ? "bg-red-500/10" : "bg-emerald-500/10"}`}
        animate={{
          scale: isAlert ? [1, 1.3, 1] : 1,
          opacity: isAlert ? [0.3, 0.6, 0.3] : 0.3,
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Alert pulse ring */}
      {isAlert && (
        <motion.div
          className="absolute w-12 h-12 rounded-full border-2 border-red-500"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: [0.8, 0],
            scale: [1, 2],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.3,
          }}
        />
      )}

      {/* Icon container */}
      <motion.div
        className={`relative w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-sm transition-all duration-1000 ${
          isAlert
            ? "bg-red-500/20 border-red-500/50 text-red-400"
            : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
        }`}
        animate={{
          backgroundColor: isAlert ? "rgba(239, 68, 68, 0.2)" : "rgba(16, 185, 129, 0.1)",
          borderColor: isAlert ? "rgba(239, 68, 68, 0.5)" : "rgba(16, 185, 129, 0.3)",
        }}
        transition={{ duration: 1.5 }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
    </motion.div>
  )
}

// Network visualization showing problems spreading
function ProblemsNetworkVisualization({ problemsVisible }: { problemsVisible: number }) {
  // Position icons in a circular pattern
  const iconNodes = [
    { icon: Building2, x: 25, y: 20, index: 0 },
    { icon: Layers, x: 75, y: 20, index: 1 },
    { icon: Eye, x: 88, y: 50, index: 2 },
    { icon: BarChart3, x: 75, y: 80, index: 3 },
    { icon: Wrench, x: 25, y: 80, index: 4 },
    { icon: AlertTriangle, x: 12, y: 50, index: 5 },
  ]

  // Connection pairs between icons
  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 0 },
    { from: 0, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
  ]

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Background glow based on alert state */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          background:
            problemsVisible > 0
              ? `radial-gradient(circle at 50% 50%, rgba(239, 68, 68, ${Math.min(0.12, problemsVisible * 0.02)}) 0%, transparent 70%)`
              : "transparent",
        }}
        transition={{ duration: 2 }}
      />

      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Glow filter */}
        <defs>
          <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {connections.map((conn, index) => {
          const fromNode = iconNodes[conn.from]
          const toNode = iconNodes[conn.to]

          // A connection is affected if either node is in alert state
          const isFromAlert = conn.from < problemsVisible
          const isToAlert = conn.to < problemsVisible
          const isAffected = isFromAlert || isToAlert

          return (
            <g key={`conn-${conn.from}-${conn.to}`}>
              {/* Base line */}
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                strokeWidth="0.4"
                strokeDasharray={isAffected ? "3 3" : "0"}
                filter="url(#lineGlow)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.4,
                  stroke: isAffected ? "#ef4444" : "#10b981",
                }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              />

              {/* Animated pulse traveling along affected connections */}
              {isAffected && (
                <motion.circle
                  r="1.2"
                  fill="#ef4444"
                  filter="url(#lineGlow)"
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [fromNode.x, toNode.x],
                    cy: [fromNode.y, toNode.y],
                    opacity: [0, 0.8, 0.8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Icon nodes rendered as HTML for better quality */}
      {iconNodes.map((node) => (
        <IconNode
          key={node.index}
          icon={node.icon}
          x={node.x}
          y={node.y}
          isAlert={node.index < problemsVisible}
          index={node.index}
        />
      ))}

      {/* Alert counter */}
      <motion.div
        className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <AlertTriangle className={`w-4 h-4 ${problemsVisible > 0 ? "text-red-400" : "text-emerald-400"}`} />
        <span className={`text-sm font-mono ${problemsVisible > 0 ? "text-red-400" : "text-emerald-400"}`}>
          {problemsVisible > 0 ? `${problemsVisible} alertes` : "Stable"}
        </span>
      </motion.div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-white/40 font-mono">Normal</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] text-white/40 font-mono">Alerte</span>
        </div>
      </div>
    </div>
  )
}

// Problem item component
function ProblemItem({
  icon: Icon,
  text,
  index,
  onVisible,
}: {
  icon: React.ElementType
  text: string
  index: number
  onVisible: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      onVisible()
    }
  }, [isInView, onVisible])

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20">
        {/* Red alert dot with pulse */}
        <motion.div
          className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.3 }}
        >
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-60" />
        </motion.div>

        <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 text-white/50 group-hover:text-white/70 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <p className="text-white/70 group-hover:text-white/90 font-medium leading-relaxed transition-colors">
          {text}
        </p>
      </div>
    </motion.div>
  )
}

export function CommunicationsProblemsDarkSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [problemsVisible, setProblemsVisible] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  // Text to highlight progressively
  const highlightText = "Quand les communications deviennent un point de fragilité"
  const words = highlightText.split(" ")

  const problems = [
    { icon: Building2, text: "Multiplication des sites et des équipements" },
    { icon: Layers, text: "Outils de communication hétérogènes" },
    { icon: Eye, text: "Manque de visibilité sur les usages" },
    { icon: BarChart3, text: "Qualité de service inégale selon les sites" },
    { icon: Wrench, text: "Difficulté d'intervention en cas d'incident" },
    { icon: AlertTriangle, text: "Risque de coupure sur des environnements critiques" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        const sectionTop = sectionRect.top
        const startOffset = windowHeight * 0.6
        const endOffset = windowHeight * 0.1

        const progress = Math.max(0, Math.min(1, (startOffset - sectionTop) / (startOffset - endOffset)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleProblemVisible = (index: number) => {
    setProblemsVisible((prev) => Math.max(prev, index + 1))
  }

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-[#0a1628] overflow-hidden">
      {/* Blurred Intelliwan color shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large teal/cyan blob - top right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
        />

        {/* Blue blob - center left */}
        <div
          className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-25 blur-[100px]"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
        />

        {/* Green/emerald blob - bottom center */}
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #10b981 0%, transparent 70%)" }}
        />

        {/* Small accent blob - top left */}
        <div
          className="absolute top-20 left-1/4 w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
        />

        {/* Red/orange warning accent blob - grows with problems */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #ef4444 0%, transparent 70%)" }}
          animate={{ opacity: 0.05 + problemsVisible * 0.02 }}
          transition={{ duration: 1 }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Progressive text highlight title */}
        <div
          ref={textRef}
          className={`max-w-4xl mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left">
            {words.map((word, index) => {
              const wordProgress = index / words.length
              const isHighlighted = scrollProgress > wordProgress

              return (
                <span
                  key={index}
                  className={`inline-block transition-all duration-300 mr-[0.3em] ${
                    isHighlighted ? "text-white" : "text-white/20"
                  }`}
                  style={{
                    transitionDelay: `${index * 10}ms`,
                  }}
                >
                  {word}
                </span>
              )
            })}
          </h2>
        </div>

        {/* Two-column layout: Problems list + Network visualization */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Problems list sliding from left */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <ProblemItem
                key={problem.text}
                icon={problem.icon}
                text={problem.text}
                index={index}
                onVisible={() => handleProblemVisible(index)}
              />
            ))}

            {/* Transition phrase */}
            <motion.div
              className="mt-8 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="relative pl-6 border-l-2 border-red-500/50">
                <p className="text-lg md:text-xl text-white/50 italic font-light">
                  Sans vision globale, chaque incident devient un risque opérationnel.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Network visualization */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              className="relative rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm p-6 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ProblemsNetworkVisualization problemsVisible={problemsVisible} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
