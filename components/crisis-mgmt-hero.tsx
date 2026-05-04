"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldAlert } from "lucide-react"

/* Slow heartbeat pulse rings emanating from center */
function PulseRing({ delay, size }: { delay: number; size: number }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
      style={{
        width: size,
        height: size,
        borderColor: "rgba(220, 38, 38, 0.12)",
      }}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{
        scale: [0.6, 1, 1.3],
        opacity: [0, 0.4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeOut",
      }}
    />
  )
}

/* Horizontal EKG-style line */
function HeartbeatLine() {
  return (
    <svg className="absolute bottom-[20%] left-0 w-full h-20 pointer-events-none opacity-[0.08]" preserveAspectRatio="none">
      <motion.path
        d="M0,40 L120,40 L140,40 L150,15 L160,65 L170,25 L180,55 L190,40 L300,40 L320,40 L330,15 L340,65 L350,25 L360,55 L370,40 L500,40 L520,40 L530,15 L540,65 L550,25 L560,55 L570,40 L700,40 L720,40 L730,15 L740,65 L750,25 L760,55 L770,40 L900,40 L1000,40 L1100,40 L1200,40 L1300,40 L1400,40"
        stroke="#dc2626"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  )
}

/* Network of monitoring nodes -- spread across the entire right half */
function MonitoringNodes({ scrollY }: { scrollY: number }) {
  const nodes = [
    /* Outer ring */
    { x: 12, y: 10, delay: 0 },
    { x: 55, y: 5,  delay: 0.2 },
    { x: 90, y: 15, delay: 0.4 },
    { x: 95, y: 50, delay: 0.6 },
    { x: 88, y: 85, delay: 0.8 },
    { x: 50, y: 92, delay: 1.0 },
    { x: 10, y: 85, delay: 1.2 },
    { x: 5,  y: 48, delay: 1.4 },
    /* Inner ring */
    { x: 30, y: 25, delay: 0.3 },
    { x: 70, y: 22, delay: 0.5 },
    { x: 78, y: 55, delay: 0.7 },
    { x: 68, y: 78, delay: 0.9 },
    { x: 32, y: 75, delay: 1.1 },
    { x: 22, y: 50, delay: 1.3 },
  ]

  /* Connections forming a visible web */
  const connections: [number, number][] = [
    /* Outer ring */
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    /* Inner ring */
    [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 8],
    /* Spokes outer -> inner */
    [0, 8], [1, 9], [2, 9], [3, 10], [4, 11], [5, 12], [6, 13], [7, 13],
  ]

  return (
    <div
      className="absolute inset-0 pointer-events-none hidden lg:block"
      style={{ transform: `translateY(${scrollY * 0.03}px)` }}
    >
      {/* Full-size network overlay positioned to the right */}
      <div className="absolute right-0 top-0 w-[65%] h-full">
        <svg className="absolute inset-0 w-full h-full">
          {/* Connection lines */}
          {connections.map(([from, to], i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${nodes[from].x}%`}
              y1={`${nodes[from].y}%`}
              x2={`${nodes[to].x}%`}
              y2={`${nodes[to].y}%`}
              stroke="rgba(220, 38, 38, 0.12)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.06 }}
            />
          ))}
        </svg>

        {/* Node dots with subtle glow */}
        {nodes.map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: node.delay + 0.3 }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -inset-3 rounded-full bg-red-500/10"
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: node.delay + 0.5 }}
            />
          </motion.div>
        ))}

        {/* Central pulse rings */}
        <PulseRing delay={0} size={140} />
        <PulseRing delay={1.2} size={240} />
        <PulseRing delay={2.4} size={380} />
        <PulseRing delay={3.6} size={540} />

        {/* Central shield icon */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="w-20 h-20 rounded-2xl bg-red-500/15 border border-red-500/20 flex items-center justify-center backdrop-blur-sm"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShieldAlert className="w-9 h-9 text-red-400/80" />
          </motion.div>
          <motion.div
            className="absolute -inset-12 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)",
              filter: "blur(25px)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export function CrisisMgmtHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen flex items-center">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <div
          className="absolute top-[-10%] left-[-5%] w-[45%] h-[60%]"
          style={{
            background: "radial-gradient(circle at center, rgba(220, 38, 38, 0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%]"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute top-[30%] left-[20%] w-[40%] h-[40%]"
          style={{
            background: "radial-gradient(circle at center, rgba(220, 38, 38, 0.04) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Heartbeat line */}
      <HeartbeatLine />

      {/* Monitoring network */}
      <MonitoringNodes scrollY={scrollY} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Status indicator */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              className="w-2.5 h-2.5 rounded-full bg-red-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm text-red-400/70 font-mono tracking-wider uppercase">Environnements critiques</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl font-sans">
              {"Gestion de crise & dispositifs d'alerte pour "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-400/90">environnements critiques</span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-white/50 md:text-xl font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {"Dispositifs de continuité d'activité, solutions d'alerte et de redondance pour sites sensibles : collectivités, établissements de santé, industrie et infrastructures critiques."}
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
              className="relative group bg-white px-8 py-6 text-base font-bold text-gray-900 shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 border-0 rounded-full font-sans"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Échanger avec un expert Intelliwan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
