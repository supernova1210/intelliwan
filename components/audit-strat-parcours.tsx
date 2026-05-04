"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Search,
  Compass,
  FileText,
  Rocket,
  TrendingUp,
} from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Audit & analyse",
    description: "Compréhension précise de vos usages, contraintes et enjeux techniques.",
  },
  {
    icon: Compass,
    title: "Architecture cible",
    description: "Définition d'une architecture cohérente, alignée sur vos objectifs.",
  },
  {
    icon: FileText,
    title: "Recommandations & scénarios",
    description: "Comparatif objectif, chiffré et argumenté des options possibles.",
  },
  {
    icon: Rocket,
    title: "Mise en oeuvre",
    description: "Accompagnement au déploiement, coordination des parties prenantes.",
  },
  {
    icon: TrendingUp,
    title: "Suivi & évolutivité",
    description: "Optimisation continue, adaptation aux évolutions métiers et technologiques.",
  },
]

function TitleWord({
  word,
  progress,
  start,
  end,
}: {
  word: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  const color = useTransform(progress, [start, end], ["rgba(17,24,39,0.15)", "rgba(17,24,39,1)"])

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  )
}

export function AuditStratParcours() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-80px" })

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const { scrollYProgress: lineProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineWidth = useTransform(lineProgress, [0.15, 0.65], ["0%", "100%"])
  const dotLeft = useTransform(lineProgress, [0.15, 0.65], ["0%", "100%"])
  const dotOpacity = useTransform(lineProgress, [0.12, 0.18, 0.6, 0.67], [0, 1, 1, 0])

  const titleWords = "Un accompagnement structuré, pensé pour l'efficacité".split(" ")

  return (
    <section ref={containerRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-15%] left-[-5%] w-[45%] h-[50%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.12) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[45%] animate-blob-slow pointer-events-none"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight max-w-4xl">
            {titleWords.map((word, i) => {
              const start = i / titleWords.length
              const end = (i + 1) / titleWords.length
              return <TitleWord key={i} word={word} progress={scrollYProgress} start={start} end={end} />
            })}
          </h2>
        </div>

        {/* Key phrase */}
        <motion.div
          className="relative pl-6 border-l-2 border-[#004467]/30 mb-20 md:mb-28"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm italic text-gray-500 font-sans leading-relaxed">
            {"\"Chaque étape prépare la suivante, "}
            <span className="text-[#004467] font-semibold not-italic">sans rupture.</span>
            {"\""}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line track */}
          <div className="absolute top-[52px] left-[40px] right-[40px] h-[3px] bg-gray-200 rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#004467] to-[#0891b2] rounded-full"
              style={{ width: lineWidth }}
            />
            {/* Traveling glow dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: dotLeft, opacity: dotOpacity }}
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#004467] shadow-lg shadow-[#004467]/40" />
                <div className="absolute -inset-3 rounded-full bg-[#004467]/30 blur-md animate-pulse" />
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
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                >
                  {/* Step number */}
                  <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#004467]/40 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon node */}
                  <motion.div
                    className="relative mb-5"
                    whileInView={{ scale: [0.8, 1.08, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute -inset-3 rounded-2xl bg-[#004467]/10 blur-xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    />
                    <div className="relative w-[72px] h-[72px] rounded-2xl bg-[#004467] flex items-center justify-center shadow-lg shadow-[#004467]/20 border border-[#004467]/30">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-[15px] text-gray-900 mb-2 leading-snug">{step.title}</h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
