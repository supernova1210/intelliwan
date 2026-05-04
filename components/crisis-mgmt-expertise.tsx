"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Phone,
  ShieldCheck,
  Clock,
  Zap,
  Radio,
  Layers,
  Settings,
  Puzzle,
  Wrench,
} from "lucide-react"

const blocks = [
  {
    id: "critical-comms",
    title: "Communications critiques",
    color: "#004467",
    items: [
      { icon: Phone, label: "Priorisation des appels" },
      { icon: ShieldCheck, label: "Communications sécurisées" },
      { icon: Clock, label: "Disponibilité permanente" },
    ],
  },
  {
    id: "alert-systems",
    title: "Systèmes d'alerte",
    color: "#dc2626",
    items: [
      { icon: Zap, label: "Déclenchement rapide" },
      { icon: Radio, label: "Multi-canal" },
      { icon: Layers, label: "Scénarios personnalisés" },
    ],
  },
  {
    id: "interop",
    title: "Interopérabilité",
    color: "#0891b2",
    items: [
      { icon: Puzzle, label: "Intégration aux infrastructures existantes" },
      { icon: Settings, label: "Compatibilité systèmes métiers" },
      { icon: Wrench, label: "Adaptation aux contraintes terrain" },
    ],
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

export function CrisisMgmtExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeBlock, setActiveBlock] = useState<string>("critical-comms")

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Des solutions éprouvées pour les environnements critiques".split(" ")

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-15%] right-[-5%] w-[50%] h-[55%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 180, 180, 0.22) 0%, rgba(0, 200, 180, 0.1) 30%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute top-[40%] left-[-5%] w-[40%] h-[45%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(220, 38, 38, 0.08) 0%, rgba(220, 38, 38, 0.04) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[45%] h-[40%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.15) 0%, rgba(0, 100, 150, 0.07) 35%, transparent 65%)",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight max-w-4xl">
            {titleWords.map((word, i) => {
              const start = i / titleWords.length
              const end = (i + 1) / titleWords.length
              return <TitleWord key={i} word={word} progress={scrollYProgress} start={start} end={end} />
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
          {"Intelliwan s'appuie sur des solutions de communication critique reconnues du marché, notamment au sein de l'écosystème Mitel, pour concevoir des dispositifs fiables, sécurisés et adaptés aux contextes sensibles."}
        </motion.p>

        {/* 3 blocks */}
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
                  className="text-xl font-bold mb-4 font-sans transition-colors duration-300"
                  style={{ color: isActive ? block.color : "#1f2937" }}
                >
                  {block.title}
                </h3>

                {/* Sub-items */}
                <div className="space-y-4">
                  {block.items.map((item, j) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={j}
                        className="flex items-center gap-3"
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 0 }}
                        transition={{ duration: 0.3, delay: j * 0.05 }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0"
                          style={{
                            backgroundColor: isActive ? `${block.color}10` : "#f9fafb",
                            borderColor: isActive ? `${block.color}25` : "#e5e7eb",
                          }}
                        >
                          <Icon
                            className="w-4.5 h-4.5 transition-colors duration-300"
                            style={{ color: isActive ? block.color : "#9ca3af" }}
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className="text-sm text-gray-600 font-sans leading-snug">{item.label}</span>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Active indicator */}
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

        {/* Bottom connector + key phrase */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#004467]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#0891b2]/30" />
          </div>
          <p className="text-center text-sm italic text-gray-500 font-sans max-w-lg">
            {"\"Des technologies conçues pour fonctionner "}
            <span className="text-[#004467] font-semibold not-italic">{"quand tout le reste s'arrête.\""}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
