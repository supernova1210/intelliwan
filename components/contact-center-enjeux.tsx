"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Layers, Clock, BarChart3, Brain, ArrowRight } from "lucide-react"

const challenges = [
  {
    icon: Layers,
    title: "Multiplicité des canaux",
    description: "Complexité d'orchestration entre voix, chat, email, réseaux sociaux et vidéo.",
    color: "#e97316",
  },
  {
    icon: Clock,
    title: "Attentes de réponse instantanée",
    description: "Les clients exigent des temps de réponse toujours plus courts, sur tous les canaux.",
    color: "#ef4444",
  },
  {
    icon: BarChart3,
    title: "Indicateurs SLA à respecter",
    description: "Des engagements de qualité de service de plus en plus stricts à tenir.",
    color: "#0891b2",
  },
  {
    icon: Brain,
    title: "Analyse temps réel",
    description: "Besoin d'analyse en temps réel des interactions pour piloter la performance.",
    color: "#004467",
  },
]

export function ContactCenterEnjeux() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Les défis des centres de contact modernes".split(" ")

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{ background: "radial-gradient(circle, #0891b2 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(circle, #004467 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-15 blur-[120px]"
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
        {/* Title - scroll reveal word by word */}
        <div ref={titleRef} className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight">
            {titleWords.map((word, i) => {
              const wordStart = i / titleWords.length
              const wordEnd = (i + 1) / titleWords.length
              return <EnjeuxWord key={i} word={word} progress={scrollYProgress} start={wordStart} end={wordEnd} />
            })}
          </h2>
        </div>

        {/* Intro text */}
        <motion.p
          className="text-lg text-white/50 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Les attentes des clients n'ont jamais été aussi élevées : rapidité, personnalisation, cohérence multicanale. Les systèmes obsolètes fragmentent l'expérience, ralentissent les équipes et augmentent les coûts."}
        </motion.p>

        {/* Challenge cards - 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {challenges.map((challenge, i) => {
            const Icon = challenge.icon
            return (
              <motion.div
                key={i}
                className="group relative flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              >
                {/* Pulse dot */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: challenge.color }}>
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: challenge.color }}
                      animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    />
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="flex-shrink-0 p-3 rounded-xl border transition-all duration-300"
                  style={{
                    backgroundColor: `${challenge.color}15`,
                    borderColor: `${challenge.color}30`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: challenge.color }} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1.5 font-sans">{challenge.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed font-sans">{challenge.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Transition phrase */}
        <motion.div
          className="mt-14 relative pl-6 border-l-2 border-[#0891b2]/40"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-xl text-white/60 font-sans leading-relaxed">
            {"Il ne s'agit plus d'un centre d'appel — mais d'une "}
            <span className="text-[#0891b2] font-semibold">{"plateforme d'expérience client complète."}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function EnjeuxWord({
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
