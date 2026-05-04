"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Phone,
  MessageCircle,
  Mail,
  Share2,
  Users,
  Sparkles,
  BrainCircuit,
  Repeat2,
  FileSearch2,
  BarChart3,
  Activity,
  AudioLines,
} from "lucide-react"

const blocks = [
  {
    id: "omnicanal",
    title: "Omnicanal & routage intelligent",
    description:
      "Solution omnicanale : voix, chat, SMS, email, réseaux sociaux. Routage basé sur les compétences et les préférences clients, avec intégration CRM.",
    color: "#004467",
    icons: [
      { icon: Phone, label: "Voix" },
      { icon: MessageCircle, label: "Chat" },
      { icon: Mail, label: "Email" },
      { icon: Share2, label: "Social" },
      { icon: Users, label: "CRM" },
    ],
  },
  {
    id: "ia",
    title: "Intelligence & automatisation",
    description:
      "IA intégrée pour analyser, transcrire et suggérer des réponses, réduire le travail répétitif des agents et améliorer la résolution au premier contact.",
    color: "#00a86b",
    icons: [
      { icon: BrainCircuit, label: "IA" },
      { icon: Sparkles, label: "Suggestions" },
      { icon: Repeat2, label: "Workflows" },
      { icon: FileSearch2, label: "Transcription" },
    ],
  },
  {
    id: "insights",
    title: "Insights & supervision",
    description:
      "Dashboards temps réel, reporting SLA, analyse vocale pour mesurer efficacité, satisfaction et performance agent.",
    color: "#0891b2",
    icons: [
      { icon: BarChart3, label: "Dashboards" },
      { icon: Activity, label: "SLA" },
      { icon: AudioLines, label: "Analyse vocale" },
    ],
  },
]

export function ContactCenterArchitecture() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeBlock, setActiveBlock] = useState<string>("omnicanal")

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Architecture omnicanale & intelligence intégrée".split(" ")

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-15%] right-[-5%] w-[50%] h-[55%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 180, 180, 0.3) 0%, rgba(0, 200, 180, 0.15) 30%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute top-[25%] left-[-5%] w-[40%] h-[45%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.25) 0%, rgba(0, 100, 150, 0.12) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[45%] h-[40%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 168, 107, 0.25) 0%, rgba(0, 200, 120, 0.12) 35%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "-10s",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight">
            {titleWords.map((word, i) => {
              const wordStart = i / titleWords.length
              const wordEnd = (i + 1) / titleWords.length
              return <ArchWord key={i} word={word} progress={scrollYProgress} start={wordStart} end={wordEnd} />
            })}
          </h2>
        </div>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-500 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Les solutions de centre de contact Mitel permettent d'unifier tous les points de contact client et d'optimiser les interactions grâce à l'IA, aux workflows dynamiques et aux outils d'analyse avancés."}
        </motion.p>

        {/* 3 interactive blocks */}
        <div className="grid lg:grid-cols-3 gap-6">
          {blocks.map((block, index) => {
            const isActive = activeBlock === block.id
            return (
              <motion.div
                key={block.id}
                className={`group relative rounded-3xl border p-8 cursor-pointer transition-all duration-500 ${
                  isActive
                    ? "bg-white shadow-xl shadow-gray-200/50 border-gray-200"
                    : "bg-white/50 border-gray-100 hover:bg-white/80 hover:border-gray-200"
                }`}
                onMouseEnter={() => setActiveBlock(block.id)}
                onClick={() => setActiveBlock(block.id)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              >
                {/* Step number */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-sans mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? `${block.color}15` : "transparent",
                    color: isActive ? block.color : "#9ca3af",
                    border: `1px solid ${isActive ? `${block.color}30` : "#e5e7eb"}`,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3 font-sans transition-colors duration-300"
                  style={{ color: isActive ? block.color : "#1f2937" }}
                >
                  {block.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-8 font-sans">{block.description}</p>

                {/* Icon grid - micro illustration */}
                <div
                  className="flex flex-wrap gap-3 transition-all duration-500"
                  style={{ opacity: isActive ? 1 : 0.4 }}
                >
                  {block.icons.map((item, j) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={j}
                        className="flex flex-col items-center gap-1.5"
                        animate={isActive ? { scale: [0.9, 1], opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
                        transition={{ duration: 0.3, delay: j * 0.05 }}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? `${block.color}10` : "#f9fafb",
                            borderColor: isActive ? `${block.color}25` : "#e5e7eb",
                          }}
                        >
                          <Icon
                            className="w-5 h-5 transition-colors duration-300"
                            style={{ color: isActive ? block.color : "#9ca3af" }}
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-gray-400 font-sans">{item.label}</span>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Active indicator line at bottom */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: isActive ? block.color : "transparent",
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom connector dots */}
        <motion.div
          className="mt-12 flex justify-center items-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#004467]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00a86b]/50" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#0891b2]/30" />
        </motion.div>
      </div>
    </section>
  )
}

function ArchWord({
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
