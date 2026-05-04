"use client"

import React from "react"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle, Mail, Share2, Video, Headphones, type LucideIcon } from "lucide-react"

/* Channel node floating in the hero */
function ChannelNode({
  x,
  y,
  icon: Icon,
  label,
  delay = 0,
  color,
}: {
  x: number
  y: number
  icon: LucideIcon
  label: string
  delay?: number
  color: string
}) {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1.5"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <motion.div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-sm"
        style={{
          backgroundColor: `${color}12`,
          borderColor: `${color}30`,
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </motion.div>
      <span className="text-[11px] font-medium text-gray-500 font-sans">{label}</span>
    </motion.div>
  )
}

/* Animated line between channel and center */
function ChannelConnection({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  color,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  delay?: number
  color: string
}) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <filter id="cc-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.line
        x1={`${x1}%`}
        y1={`${y1}%`}
        x2={`${x2}%`}
        y2={`${y2}%`}
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      />
      <motion.circle
        r="2.5"
        fill={color}
        filter="url(#cc-glow)"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.8, 0.8, 0],
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
    </svg>
  )
}

/* Central hub + orbiting channels */
function OmnichannelVisualization({ scrollY }: { scrollY: number }) {
  const center = { x: 50, y: 50 }
  const channels = [
    { icon: Phone, label: "Voix", x: 50, y: 15, color: "#004467", delay: 0.3 },
    { icon: MessageCircle, label: "Chat", x: 80, y: 30, color: "#00a86b", delay: 0.5 },
    { icon: Mail, label: "Email", x: 85, y: 65, color: "#0891b2", delay: 0.7 },
    { icon: Share2, label: "Social", x: 50, y: 85, color: "#e97316", delay: 0.9 },
    { icon: Video, label: "Vidéo", x: 15, y: 65, color: "#004467", delay: 1.1 },
    { icon: Headphones, label: "Support", x: 20, y: 30, color: "#0891b2", delay: 1.3 },
  ]

  return (
    <div
      className="absolute right-0 top-1/2 w-[55%] h-[80%] opacity-60 pointer-events-none hidden lg:block"
      style={{ transform: `translateY(calc(-50% + ${scrollY * 0.06}px))` }}
    >
      {/* Connections to center */}
      {channels.map((ch, i) => (
        <ChannelConnection
          key={`conn-${i}`}
          x1={ch.x}
          y1={ch.y}
          x2={center.x}
          y2={center.y}
          delay={ch.delay + 0.5}
          color={ch.color}
        />
      ))}

      {/* Cross connections for network effect */}
      {[
        { from: 0, to: 1, color: "#004467" },
        { from: 1, to: 2, color: "#00a86b" },
        { from: 2, to: 3, color: "#0891b2" },
        { from: 3, to: 4, color: "#e97316" },
        { from: 4, to: 5, color: "#004467" },
        { from: 5, to: 0, color: "#0891b2" },
      ].map((conn, i) => (
        <ChannelConnection
          key={`cross-${i}`}
          x1={channels[conn.from].x}
          y1={channels[conn.from].y}
          x2={channels[conn.to].x}
          y2={channels[conn.to].y}
          delay={2 + i * 0.3}
          color={conn.color}
        />
      ))}

      {/* Channel nodes */}
      {channels.map((ch, i) => (
        <ChannelNode key={i} {...ch} />
      ))}

      {/* Central hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="relative">
          <motion.div
            className="w-20 h-20 rounded-2xl bg-[#004467] flex items-center justify-center shadow-xl shadow-[#004467]/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Headphones className="w-9 h-9 text-white" />
          </motion.div>
          <motion.div
            className="absolute -inset-6 rounded-3xl"
            style={{
              background: "radial-gradient(circle, rgba(0, 68, 103, 0.2) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Secondary glows */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 168, 107, 0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  )
}

export function ContactCenterHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with blobs */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[80%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.35) 0%, rgba(0, 200, 180, 0.2) 30%, rgba(0, 180, 160, 0.08) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[10%] left-[5%] w-[45%] h-[55%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 68, 103, 0.3) 0%, rgba(0, 100, 150, 0.15) 35%, transparent 65%)",
            filter: "blur(70px)",
            animationDelay: "-3s",
          }}
        />
        <div
          className="absolute top-[5%] right-[-10%] w-[55%] h-[70%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 168, 107, 0.3) 0%, rgba(0, 200, 120, 0.15) 35%, transparent 65%)",
            filter: "blur(75px)",
            animationDelay: "-7s",
          }}
        />
        <div
          className="absolute top-[50%] right-[10%] w-[35%] h-[45%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(233, 115, 22, 0.12) 0%, rgba(255, 160, 60, 0.06) 40%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "-12s",
          }}
        />
        <div
          className="absolute bottom-[-5%] left-[10%] w-[45%] h-[45%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.25) 0%, rgba(0, 200, 180, 0.12) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-15s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <OmnichannelVisualization scrollY={scrollY} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl font-sans">
              Centre de contact &{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#004467] via-[#0891b2] to-[#00a86b] bg-clip-text text-transparent">
                  expérience client
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {"Transformez chaque interaction en avantage concurrentiel grâce à une plateforme de centre de contact omnicanal intelligente, capable de gérer voix, digital et assistance avec efficacité et personnalisation."}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="relative group bg-gray-900 px-8 py-6 text-base font-bold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 border-0 rounded-full font-sans"
            >
              <Link href="#solutions">
                <span className="relative z-10 flex items-center">
                  Voir les solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-bold rounded-full border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white/50 transition-all duration-300 font-sans bg-transparent"
            >
              <Link href="/contact">Demander une démo</Link>
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
              <span className="text-sm text-gray-500 font-sans">Omnicanal</span>
            </div>
            <span className="h-px w-8 bg-gradient-to-r from-gray-300 to-transparent" />
            <span className="text-sm text-gray-400 font-sans">Voix, chat, email, social, vidéo</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
