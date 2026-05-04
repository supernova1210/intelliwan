"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Radio, Network, Server, Wifi } from "lucide-react"

/* Slow scanning line sweeping across */
function ScanLine() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-px h-full pointer-events-none z-[1]"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(8,145,178,0.15) 30%, rgba(8,145,178,0.3) 50%, rgba(8,145,178,0.15) 70%, transparent 100%)",
        boxShadow: "0 0 30px 10px rgba(8,145,178,0.08)",
      }}
      animate={{ left: ["0%", "100%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
    />
  )
}

/* Audit dashboard -- a structured report showing analysis progress */
function AuditDashboard({ scrollY }: { scrollY: number }) {
  const axes = [
    { label: "Telephonie", icon: Radio, score: 78, status: "Optimisable" },
    { label: "Reseau LAN", icon: Network, score: 92, status: "Conforme" },
    { label: "Securite", icon: Shield, score: 54, status: "A risque" },
    { label: "Infrastructure", icon: Server, score: 85, status: "Conforme" },
    { label: "Connectivite", icon: Wifi, score: 67, status: "Optimisable" },
  ]

  return (
    <div
      className="absolute right-6 top-1/2 w-[42%] pointer-events-none hidden lg:block"
      style={{ transform: `translateY(calc(-50% + ${scrollY * 0.03}px))` }}
    >
      <motion.div
        className="rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-xl shadow-2xl shadow-gray-200/30 overflow-hidden"
        initial={{ opacity: 0, x: 40, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/* Dashboard header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-xs font-mono text-gray-400">intelliwan.audit</span>
          </div>
          <motion.div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0891b2]/10"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0891b2]" />
            <span className="text-[10px] font-mono text-[#0891b2] font-medium">Analyse en cours</span>
          </motion.div>
        </div>

        {/* Audit results */}
        <div className="p-6 space-y-4">
          {/* Global score */}
          <motion.div
            className="flex items-center justify-between mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Score global</span>
            <motion.span
              className="text-2xl font-bold text-gray-900 font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              75<span className="text-sm text-gray-400 font-normal">/100</span>
            </motion.span>
          </motion.div>

          {/* Global bar */}
          <motion.div
            className="w-full h-2 rounded-full bg-gray-100 overflow-hidden mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #0891b2, #10b981)" }}
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            />
          </motion.div>

          {/* Per-axis results */}
          <div className="space-y-3">
            {axes.map((axis, i) => {
              const Icon = axis.icon
              const barColor =
                axis.score >= 85
                  ? "#10b981"
                  : axis.score >= 65
                    ? "#0891b2"
                    : "#f59e0b"

              return (
                <motion.div
                  key={axis.label}
                  className="group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="relative flex h-7 w-7 shrink-0 items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-lg opacity-15"
                        style={{ backgroundColor: barColor }}
                      />
                      <Icon className="relative z-10 w-3.5 h-3.5" style={{ color: barColor }} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 font-sans flex-1">{axis.label}</span>
                    <span className="text-[10px] font-mono text-gray-400">{axis.score}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden ml-10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: barColor }}
                      initial={{ width: 0 }}
                      animate={{ width: `${axis.score}%` }}
                      transition={{ duration: 1, delay: 1.3 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom status badges */}
          <motion.div
            className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
              2 conformes
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100">
              2 optimisables
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
              1 a risque
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export function AuditStratHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-15%] left-[-5%] w-[50%] h-[60%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.12) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[50%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(8, 145, 178, 0.1) 0%, transparent 65%)",
            filter: "blur(70px)",
            animationDelay: "-7s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Scan line */}
      <ScanLine />

      {/* Audit Dashboard */}
      <AuditDashboard scrollY={scrollY} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Status */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="h-px w-8 bg-[#004467]/30" />
            <span className="text-sm text-[#004467]/60 font-sans tracking-wider uppercase font-medium">
              Expertise & conseil
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl font-sans">
              {"Audit & accompagnement stratégique des "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#004467]">infrastructures de communication</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#0891b2]/10 -z-0 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {"Audit d'infrastructure télécom, conseil, reprise d'existant et accompagnement stratégique pour sécuriser, structurer et faire évoluer des systèmes de communication à grande échelle."}
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
              className="relative group bg-[#004467] px-8 py-6 text-base font-bold text-white shadow-lg hover:bg-[#003552] hover:shadow-xl transition-all duration-300 border-0 rounded-full font-sans"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  {"Échanger avec un expert Intelliwan"}
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
