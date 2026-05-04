"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Network node component
function NetworkNode({ 
  x, 
  y, 
  size = 6, 
  delay = 0,
  color = "#00a86b"
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

// Animated connection line between nodes
function ConnectionLine({ 
  x1, 
  y1, 
  x2, 
  y2, 
  delay = 0,
  color = "#00a86b"
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
      {/* Flowing light particle */}
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
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

// Network Visualization Component
function NetworkVisualization({ scrollY }: { scrollY: number }) {
  const nodes = [
    // Central hub
    { x: 50, y: 50, size: 14, color: "#004467", delay: 0 },
    // Inner ring
    { x: 32, y: 32, size: 9, color: "#00a86b", delay: 0.2 },
    { x: 68, y: 32, size: 9, color: "#0891b2", delay: 0.4 },
    { x: 32, y: 68, size: 9, color: "#0891b2", delay: 0.6 },
    { x: 68, y: 68, size: 9, color: "#00a86b", delay: 0.8 },
    // Outer ring
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
    // Central to inner ring
    { x1: 50, y1: 50, x2: 32, y2: 32, color: "#00a86b", delay: 0.5 },
    { x1: 50, y1: 50, x2: 68, y2: 32, color: "#0891b2", delay: 0.7 },
    { x1: 50, y1: 50, x2: 32, y2: 68, color: "#0891b2", delay: 0.9 },
    { x1: 50, y1: 50, x2: 68, y2: 68, color: "#00a86b", delay: 1.1 },
    // Inner to outer ring
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
    // Cross connections
    { x1: 32, y1: 32, x2: 68, y2: 68, color: "#00a86b", delay: 3.3 },
    { x1: 68, y1: 32, x2: 32, y2: 68, color: "#0891b2", delay: 3.5 },
    // Additional outer connections
    { x1: 12, y1: 50, x2: 18, y2: 22, color: "#004467", delay: 3.7 },
    { x1: 12, y1: 50, x2: 18, y2: 78, color: "#00a86b", delay: 3.9 },
    { x1: 88, y1: 50, x2: 82, y2: 22, color: "#0891b2", delay: 4.1 },
    { x1: 88, y1: 50, x2: 82, y2: 78, color: "#004467", delay: 4.3 },
  ]

  return (
    <div 
      className="absolute right-0 top-1/2 w-[60%] h-[85%] opacity-60 pointer-events-none hidden lg:block"
      style={{
        transform: `translateY(calc(-50% + ${scrollY * 0.08}px))`,
      }}
    >
      {/* Connections */}
      {connections.map((conn, i) => (
        <ConnectionLine key={`conn-${i}`} {...conn} />
      ))}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <NetworkNode key={`node-${i}`} {...node} />
      ))}

      {/* Central glow */}
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

      {/* Secondary glow */}
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

export function CommunicationsHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with Intelliwan blobs */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        {/* Large teal/cyan blob */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[80%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.35) 0%, rgba(0, 200, 180, 0.2) 30%, rgba(0, 180, 160, 0.08) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Blue blob */}
        <div
          className="absolute top-[10%] left-[5%] w-[45%] h-[55%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 68, 103, 0.3) 0%, rgba(0, 100, 150, 0.15) 35%, transparent 65%)",
            filter: "blur(70px)",
            animationDelay: "-3s",
          }}
        />

        {/* Green/emerald blob - right side */}
        <div
          className="absolute top-[5%] right-[-10%] w-[55%] h-[70%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 168, 107, 0.3) 0%, rgba(0, 200, 120, 0.15) 35%, transparent 65%)",
            filter: "blur(75px)",
            animationDelay: "-7s",
          }}
        />

        {/* Soft purple accent */}
        <div
          className="absolute top-[50%] right-[10%] w-[35%] h-[45%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(120, 100, 180, 0.2) 0%, rgba(150, 120, 200, 0.1) 40%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "-12s",
          }}
        />

        {/* Warm accent */}
        <div
          className="absolute top-[20%] left-[25%] w-[30%] h-[35%] animate-blob-drift"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 180, 100, 0.15) 0%, rgba(255, 200, 120, 0.08) 40%, transparent 60%)",
            filter: "blur(55px)",
          }}
        />

        {/* Bottom teal blob */}
        <div
          className="absolute bottom-[-5%] left-[10%] w-[45%] h-[45%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.25) 0%, rgba(0, 200, 180, 0.12) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-15s",
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

      {/* Network Visualization - right side */}
      <NetworkVisualization scrollY={scrollY} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
            Téléphonie d'entreprise et outils collaboratifs conçus pour les organisations multi-sites, 
            à forte volumétrie d'utilisateurs et aux exigences élevées de disponibilité.
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

          {/* Subtle decorative element */}
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
    </section>
  )
}
