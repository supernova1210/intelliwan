"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Search,
  PenTool,
  Rocket,
  Headphones,
  TrendingUp,
} from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Audit & analyse",
    description:
      "Compréhension précise de vos usages, contraintes et enjeux.",
  },
  {
    icon: PenTool,
    title: "Conception",
    description:
      "Définition d'une architecture sur mesure, adaptée à votre organisation.",
  },
  {
    icon: Rocket,
    title: "Déploiement",
    description: "Mise en œuvre progressive, sécurisée et maîtrisée.",
  },
  {
    icon: Headphones,
    title: "Supervision & support",
    description:
      "Suivi des performances, assistance et optimisation continue.",
  },
  {
    icon: TrendingUp,
    title: "Évolution",
    description:
      "Adaptation de la solution à la croissance de vos besoins.",
  },
]

export function CommunicationsTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // The horizontal line progressively fills
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.7], ["0%", "100%"])

  // Traveling glow dot position
  const dotLeft = useTransform(scrollYProgress, [0.15, 0.7], ["0%", "100%"])
  const dotOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.18, 0.65, 0.72],
    [0, 1, 1, 0]
  )

  return (
    <section
      ref={containerRef}
      className="relative py-28 md:py-36 overflow-hidden bg-slate-950"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#004467]/10 rounded-full blur-[120px] animate-blob-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#004467]/8 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Title */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight text-white max-w-4xl">
            Un accompagnement sur toute la durée de vie de votre solution
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line track */}
          <div className="absolute top-[52px] left-[40px] right-[40px] h-[3px] bg-slate-800 rounded-full">
            {/* Animated fill */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#004467] to-[#0077b6] rounded-full"
              style={{ width: lineWidth }}
            />
            {/* Traveling glow dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: dotLeft, opacity: dotOpacity }}
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-white shadow-lg shadow-[#004467]/60" />
                <div className="absolute -inset-3 rounded-full bg-[#004467]/40 blur-md animate-pulse" />
              </div>
            </motion.div>
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  className="flex flex-col items-center text-center w-[180px]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                >
                  {/* Step number */}
                  <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#0077b6]/50 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon node */}
                  <motion.div
                    className="relative mb-5"
                    whileInView={{
                      scale: [0.8, 1.08, 1],
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.2,
                      ease: "easeOut",
                    }}
                  >
                    {/* Glow behind icon */}
                    <motion.div
                      className="absolute -inset-3 rounded-2xl bg-[#004467]/30 blur-xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15 + 0.3,
                      }}
                    />
                    <div className="relative w-[72px] h-[72px] rounded-2xl bg-[#004467] flex items-center justify-center shadow-lg shadow-[#004467]/30 border border-[#0077b6]/20">
                      <Icon
                        className="w-8 h-8 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-[15px] text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
