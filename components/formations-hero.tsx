"use client"

import React from "react"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Star, GraduationCap, Users, BookOpen, type LucideIcon } from "lucide-react"

function FloatingIcon({
  x,
  y,
  icon: Icon,
  delay = 0,
  color = "#004467",
}: {
  x: number
  y: number
  icon: LucideIcon
  delay?: number
  color?: string
}) {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: 56,
        height: 56,
        boxShadow: `0 0 30px ${color}20`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.5, 0.8, 0.5],
        y: [0, -8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.5} />
    </motion.div>
  )
}

export function FormationsHero() {
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
          className="absolute top-[20%] left-[25%] w-[30%] h-[35%] animate-blob-drift"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 180, 100, 0.15) 0%, rgba(255, 200, 120, 0.08) 40%, transparent 60%)",
            filter: "blur(55px)",
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

      {/* Floating icons - right side */}
      <div
        className="absolute right-0 top-1/2 w-[55%] h-[80%] opacity-50 pointer-events-none hidden lg:block"
        style={{
          transform: `translateY(calc(-50% + ${scrollY * 0.06}px))`,
        }}
      >
        <FloatingIcon x={20} y={15} icon={GraduationCap} delay={0} color="#00a86b" />
        <FloatingIcon x={55} y={10} icon={BookOpen} delay={0.8} color="#0891b2" />
        <FloatingIcon x={75} y={30} icon={Users} delay={1.6} color="#004467" />
        <FloatingIcon x={35} y={45} icon={Star} delay={2.4} color="#00D084" />
        <FloatingIcon x={65} y={60} icon={Building2} delay={3.2} color="#004AAD" />
        <FloatingIcon x={25} y={70} icon={GraduationCap} delay={4.0} color="#10b981" />

        {/* Central glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 168, 107, 0.2) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl font-sans">
              Des formations personnalisées, certifiées{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#00a86b] via-[#00c77a] to-[#00a86b] bg-clip-text text-transparent">
                  Qualiopi
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
            INTELLIWAN met à votre disposition son savoir-faire pour accompagner vos
            équipes dans la prise en main, l'utilisation et la maintenance de vos
            solutions de téléphonie et de collaboration.
          </motion.p>

          <motion.p
            className="mt-4 text-lg leading-relaxed text-gray-600 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Toutes nos formations sont{" "}
            <span className="font-semibold text-gray-900">100 % adaptées</span> à vos
            besoins, à vos outils et à vos usages.
          </motion.p>

          {/* Stat badges */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200/80 px-5 py-3 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8FFF6]">
                <Building2 className="h-4 w-4 text-[#004467]" strokeWidth={2} />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">9</span>
                <span className="text-sm text-gray-500 ml-1.5">entreprises formées en 2024</span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200/80 px-5 py-3 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8FFF6]">
                <Star className="h-4 w-4 text-[#004467]" strokeWidth={2} />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">100 %</span>
                <span className="text-sm text-gray-500 ml-1.5">de satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="relative group bg-gray-900 px-8 py-6 text-base font-bold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 border-0 rounded-full"
            >
              <Link href="#formations">
                <span className="relative z-10 flex items-center">
                  Découvrir nos formations
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="relative group border-gray-300 px-8 py-6 text-base font-semibold text-gray-700 hover:text-gray-900 bg-white/60 bg-transparent backdrop-blur-sm hover:bg-white hover:border-gray-400 transition-all duration-300 rounded-full"
            >
              <a href="/documents/intelliwan-certificat-qualiopi.pdf" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Voir le certificat Qualiopi</span>
              </a>
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
              <span className="text-sm text-gray-500 font-sans">Certifié Qualiopi</span>
            </div>
            <span className="h-px w-8 bg-gradient-to-r from-gray-300 to-transparent" />
            <span className="text-sm text-gray-400 font-sans">Financement OPCO possible</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
