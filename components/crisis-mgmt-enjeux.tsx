"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Zap, HeartPulse, ShieldAlert, WifiOff, Siren } from "lucide-react"

const scenarios = [
  {
    icon: Zap,
    title: "Incident technique majeur",
    color: "#e97316",
    delay: 0,
  },
  {
    icon: HeartPulse,
    title: "Crise sanitaire",
    color: "#dc2626",
    delay: 0.15,
  },
  {
    icon: ShieldAlert,
    title: "Événement de sécurité",
    color: "#0891b2",
    delay: 0.3,
  },
  {
    icon: WifiOff,
    title: "Panne réseau ou électrique",
    color: "#004467",
    delay: 0.45,
  },
  {
    icon: Siren,
    title: "Situation d'urgence nécessitant une alerte rapide",
    color: "#dc2626",
    delay: 0.6,
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
  const color = useTransform(progress, [start, end], ["rgba(255,255,255,0.15)", "rgba(255,255,255,1)"])

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  )
}

export function CrisisMgmtEnjeux() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Quand la communication devient un enjeu vital".split(" ")

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
            style={{ background: "radial-gradient(circle, #dc2626 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(circle, #004467 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-[120px]"
            style={{ background: "radial-gradient(ellipse, #e97316 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight">
            {titleWords.map((word, i) => {
              const start = i / titleWords.length
              const end = (i + 1) / titleWords.length
              return <TitleWord key={i} word={word} progress={scrollYProgress} start={start} end={end} />
            })}
          </h2>
        </div>

        {/* Intro */}
        <motion.p
          className="text-lg text-white/50 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Dans certains environnements, une interruption de communication n'est pas une simple panne. Elle peut avoir des impacts humains, opérationnels ou réglementaires majeurs."}
        </motion.p>

        {/* Scenario cards -- staggered grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenarios.map((scenario, i) => {
            const Icon = scenario.icon
            return (
              <motion.div
                key={i}
                className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {/* Pulse dot */}
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: scenario.color }}
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: scenario.delay * 3 }}
                  />
                </div>

                {/* Icon */}
                <div
                  className="flex-shrink-0 p-3 rounded-xl border transition-all duration-300"
                  style={{
                    backgroundColor: `${scenario.color}15`,
                    borderColor: `${scenario.color}25`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: scenario.color }} />
                </div>

                {/* Text */}
                <p className="font-medium text-white/80 text-sm font-sans leading-snug">{scenario.title}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Key phrase */}
        <motion.div
          className="mt-14 relative pl-6 border-l-2 border-red-500/40"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-xl text-white/60 font-sans leading-relaxed">
            {"En situation de crise, "}
            <span className="text-red-400 font-semibold">chaque seconde compte.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
