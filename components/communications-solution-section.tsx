"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
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
  Lock
} from "lucide-react"

// Icon node component - same as problems section but transforms to green
function SolutionIconNode({
  icon: Icon,
  x,
  y,
  index,
  isTransformed,
}: {
  icon: React.ElementType
  x: number
  y: number
  index: number
  isTransformed: boolean
}) {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {/* Outer glow ring - transforms from red to green */}
      <motion.div
        className="absolute w-16 h-16 rounded-full"
        initial={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
        animate={{
          backgroundColor: isTransformed ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.1)",
          scale: isTransformed ? [1, 1.2, 1] : [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          backgroundColor: { duration: 1.5, delay: index * 0.15 },
          scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      />

      {/* Success pulse ring when transformed */}
      {isTransformed && (
        <motion.div
          className="absolute w-12 h-12 rounded-full border-2 border-emerald-500"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: [0.6, 0],
            scale: [1, 2],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.2,
          }}
        />
      )}

      {/* Icon container - transforms from red to green */}
      <motion.div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-sm"
        initial={{ 
          backgroundColor: "rgba(239, 68, 68, 0.2)",
          borderColor: "rgba(239, 68, 68, 0.5)",
        }}
        animate={{
          backgroundColor: isTransformed ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
          borderColor: isTransformed ? "rgba(16, 185, 129, 0.5)" : "rgba(239, 68, 68, 0.5)",
        }}
        transition={{ duration: 1.5, delay: index * 0.15 }}
      >
        <motion.div
          initial={{ color: "rgb(248, 113, 113)" }}
          animate={{ color: isTransformed ? "rgb(52, 211, 153)" : "rgb(248, 113, 113)" }}
          transition={{ duration: 1.5, delay: index * 0.15 }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Network visualization that transforms from alert to controlled
function TransformingNetworkVisualization({ isTransformed }: { isTransformed: boolean }) {
  // Same icon positions as problems section
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
      {/* Background glow - transforms from red to green */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        initial={{ background: "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)" }}
        animate={{
          background: isTransformed 
            ? "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
        }}
        transition={{ duration: 2 }}
      />

      {/* Central hub - appears when transformed */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isTransformed ? 1 : 0, opacity: isTransformed ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute -inset-10 rounded-full border border-emerald-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        {/* Inner rotating ring */}
        <motion.div
          className="absolute -inset-6 rounded-full border border-emerald-500/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        {/* Hub center */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/40">
          <Network className="w-6 h-6 text-white" />
        </div>
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500"
          animate={{ scale: [1, 2, 2], opacity: [0.4, 0, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
        />
      </motion.div>

      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Glow filter */}
        <defs>
          <filter id="solutionLineGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines - transform from red dashed to green solid */}
        {connections.map((conn, index) => {
          const fromNode = iconNodes[conn.from]
          const toNode = iconNodes[conn.to]

          return (
            <g key={`conn-${conn.from}-${conn.to}`}>
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                strokeWidth="0.4"
                filter="url(#solutionLineGlow)"
                initial={{ stroke: "#ef4444", strokeDasharray: "3 3", opacity: 0.4 }}
                animate={{
                  stroke: isTransformed ? "#10b981" : "#ef4444",
                  strokeDasharray: isTransformed ? "0" : "3 3",
                  opacity: isTransformed ? 0.6 : 0.4,
                }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              />

              {/* Data flow particles - green when transformed */}
              {isTransformed && (
                <motion.circle
                  r="1.2"
                  fill="#10b981"
                  filter="url(#solutionLineGlow)"
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [fromNode.x, toNode.x],
                    cy: [fromNode.y, toNode.y],
                    opacity: [0, 0.8, 0.8, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.4,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          )
        })}

        {/* Lines from hub to each icon node when transformed */}
        {isTransformed && iconNodes.map((node, index) => (
          <motion.line
            key={`hub-${node.index}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#10b981"
            strokeWidth="0.3"
            strokeOpacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
          />
        ))}
      </svg>

      {/* Icon nodes */}
      {iconNodes.map((node) => (
        <SolutionIconNode
          key={node.index}
          icon={node.icon}
          x={node.x}
          y={node.y}
          index={node.index}
          isTransformed={isTransformed}
        />
      ))}

      {/* Status indicator - transforms from alert to stable */}
      <motion.div
        className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border backdrop-blur-sm"
        initial={{ borderColor: "rgba(239, 68, 68, 0.3)" }}
        animate={{ borderColor: isTransformed ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ color: "rgb(248, 113, 113)" }}
          animate={{ color: isTransformed ? "rgb(52, 211, 153)" : "rgb(248, 113, 113)" }}
          transition={{ duration: 1 }}
        >
          {isTransformed ? <Shield className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
        </motion.div>
        <motion.span
          className="text-sm font-mono"
          initial={{ color: "rgb(248, 113, 113)" }}
          animate={{ color: isTransformed ? "rgb(52, 211, 153)" : "rgb(248, 113, 113)" }}
          transition={{ duration: 1 }}
        >
          {isTransformed ? "Système maîtrisé" : "6 alertes"}
        </motion.span>
      </motion.div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <motion.span 
            className="w-2 h-2 rounded-full"
            initial={{ backgroundColor: "rgb(239, 68, 68)" }}
            animate={{ backgroundColor: isTransformed ? "rgb(16, 185, 129)" : "rgb(239, 68, 68)" }}
            transition={{ duration: 1 }}
          />
          <span className="text-[10px] text-white/40 font-mono">
            {isTransformed ? "Connecté" : "Alerte"}
          </span>
        </div>
      </div>
    </div>
  )
}

// Key message item with slide from left
function KeyMessage({ 
  icon: Icon, 
  text, 
  index 
}: { 
  icon: React.ElementType
  text: string
  index: number 
}) {
  return (
    <motion.div
      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Green indicator dot */}
      <motion.div
        className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.4, duration: 0.3 }}
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
      </motion.div>

      <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-white/80 font-medium">{text}</span>
    </motion.div>
  )
}

export function CommunicationsSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isTransformed, setIsTransformed] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)
  
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 })

  // Text to highlight progressively
  const highlightText = "Une architecture de communication pensée pour durer"
  const words = highlightText.split(" ")

  const keyMessages = [
    { icon: Layers, text: "Centralisation des communications" },
    { icon: Network, text: "Interconnexion des sites" },
    { icon: Zap, text: "Haute disponibilité" },
    { icon: Lock, text: "Sécurité des flux" },
    { icon: ArrowUpDown, text: "Architecture évolutive" },
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
      if (sectionRef.current) {
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

  // Trigger transformation when content comes into view
  useEffect(() => {
    if (isContentInView) {
      const timer = setTimeout(() => {
        setIsTransformed(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isContentInView])

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-[#0a1628] overflow-hidden"
    >
      {/* Same dark background with blurred color shapes */}
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

        {/* Green/emerald blob - bottom center - stronger when transformed */}
        <motion.div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #10b981 0%, transparent 70%)" }}
          animate={{ opacity: isTransformed ? 0.35 : 0.2 }}
          transition={{ duration: 2 }}
        />

        {/* Small accent blob - top left */}
        <div
          className="absolute top-20 left-1/4 w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
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
        {/* Progressive text highlight title - aligned left */}
        <div
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
          <motion.p
            className="mt-6 text-lg text-white/50 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Intelliwan conçoit et déploie des solutions de communications unifiées capables de s'adapter 
            à la complexité de votre organisation.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Key messages sliding from left */}
          <div className="space-y-4 relative">
            {keyMessages.map((msg, i) => (
              <KeyMessage key={msg.text} icon={msg.icon} text={msg.text} index={i} />
            ))}

            {/* Strong phrase */}
            <motion.div
              className="mt-8 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative pl-6 border-l-2 border-emerald-500/50">
                <p className="text-lg md:text-xl text-white/60 font-light">
                  Une seule vision. Une seule architecture.{" "}
                  <span className="text-emerald-400 font-medium">Une maîtrise totale.</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Network visualization that transforms */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              className="relative rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm p-6 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TransformingNetworkVisualization isTransformed={isTransformed} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
