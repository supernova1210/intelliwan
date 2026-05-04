"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  RefreshCw,
  Shield,
  Users,
  Zap,
} from "lucide-react"

const points = [
  { icon: RefreshCw, title: "Reprise et sécurisation de l'existant", description: "Stabiliser, documenter et fiabiliser les systèmes déjà en place." },
  { icon: Users, title: "Accompagnement au changement", description: "Former, communiquer et faciliter l'adoption de nouvelles pratiques." },
  { icon: Zap, title: "Anticipation des évolutions futures", description: "Identifier les tendances technologiques et préparer les transitions." },
  { icon: Shield, title: "Pérennité des choix techniques", description: "S'assurer que chaque décision reste pertinente dans la durée." },
]

/* Network schema with blocks being added progressively */
function EvolvingNetwork({ isInView }: { isInView: boolean }) {
  const baseNodes = [
    { x: 30, y: 25, label: "PBX", opacity: 1 },
    { x: 50, y: 25, label: "SIP", opacity: 1 },
    { x: 70, y: 25, label: "WAN", opacity: 1 },
    { x: 40, y: 50, label: "Core", opacity: 1 },
    { x: 60, y: 50, label: "UC", opacity: 1 },
    { x: 30, y: 75, label: "Site A", opacity: 1 },
    { x: 50, y: 75, label: "Site B", opacity: 1 },
  ]

  const newNodes = [
    { x: 80, y: 40, label: "Cloud", opacity: 1 },
    { x: 70, y: 70, label: "IoT", opacity: 1 },
    { x: 90, y: 55, label: "AI", opacity: 1 },
  ]

  const baseConnections: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [3, 5], [3, 6], [4, 6],
  ]

  /* Each entry: [baseNodeIndex, newNodeIndex] */
  const newConnections: [number, number][] = [
    [2, 0],   /* WAN -> Cloud */
    [4, 0],   /* UC -> Cloud */
    [4, 1],   /* UC -> IoT */
    [6, 1],   /* Site B -> IoT */
  ]

  /* Connections between new nodes */
  const newToNewConnections: [number, number][] = [
    [0, 2],   /* Cloud -> AI */
  ]

  return (
    <div className="relative w-full h-[350px]">
      <svg className="absolute inset-0 w-full h-full">
        {/* Base connections */}
        {baseConnections.map(([from, to], i) => (
          <motion.line
            key={`base-${i}`}
            x1={`${baseNodes[from].x}%`} y1={`${baseNodes[from].y}%`}
            x2={`${baseNodes[to].x}%`} y2={`${baseNodes[to].y}%`}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}

        {/* New connections: base node -> new node */}
        {newConnections.map(([baseIdx, newIdx], i) => (
          <motion.line
            key={`new-${i}`}
            x1={`${baseNodes[baseIdx].x}%`} y1={`${baseNodes[baseIdx].y}%`}
            x2={`${newNodes[newIdx].x}%`} y2={`${newNodes[newIdx].y}%`}
            stroke="rgba(8, 145, 178, 0.3)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 + i * 0.2 }}
          />
        ))}

        {/* New-to-new connections */}
        {newToNewConnections.map(([fromNew, toNew], i) => (
          <motion.line
            key={`nn-${i}`}
            x1={`${newNodes[fromNew].x}%`} y1={`${newNodes[fromNew].y}%`}
            x2={`${newNodes[toNew].x}%`} y2={`${newNodes[toNew].y}%`}
            stroke="rgba(8, 145, 178, 0.3)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.3 + i * 0.2 }}
          />
        ))}
      </svg>

      {/* Base nodes */}
      {baseNodes.map((node, i) => (
        <motion.div
          key={`base-node-${i}`}
          className="absolute rounded-lg bg-white/5 border border-white/15 flex items-center justify-center"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)", width: 44, height: 44 }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
        >
          <span className="text-[9px] font-mono text-white/50 font-semibold">{node.label}</span>
        </motion.div>
      ))}

      {/* New nodes (appear later with accent) */}
      {newNodes.map((node, i) => (
        <motion.div
          key={`new-node-${i}`}
          className="absolute rounded-lg border flex items-center justify-center"
          style={{
            left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)",
            width: 48, height: 48,
            backgroundColor: "rgba(8, 145, 178, 0.12)",
            borderColor: "rgba(8, 145, 178, 0.3)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.8 + i * 0.2, type: "spring", stiffness: 200 }}
        >
          <span className="text-[9px] font-mono text-[#0891b2] font-bold">{node.label}</span>
          {/* Glow */}
          <motion.div
            className="absolute -inset-2 rounded-xl bg-[#0891b2]/10 blur-md -z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: [0, 0.6, 0.3] } : {}}
            transition={{ duration: 1.5, delay: 2 + i * 0.2 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

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

export function AuditStratEvolutivite() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Des systèmes conçus pour évoluer".split(" ")

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-950">
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
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/8 rounded-full blur-[100px]" />
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

        <motion.p
          className="text-lg text-white/50 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Au-delà du déploiement, Intelliwan assure le suivi, l'optimisation et l'évolution des infrastructures de communication afin de les adapter aux changements organisationnels, technologiques et réglementaires."}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left -- evolving network visualization */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-white/30 font-mono">architecture.evolution</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[10px] font-mono text-white/30 uppercase">existant</span>
                <span className="w-2 h-2 rounded-full bg-[#0891b2]/60 ml-2" />
                <span className="text-[10px] font-mono text-[#0891b2]/60 uppercase">nouveau</span>
              </div>
            </div>
            <EvolvingNetwork isInView={isInView} />
          </motion.div>

          {/* Right -- key points */}
          <div className="space-y-5">
            {points.map((point, i) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#004467]/15 border border-[#004467]/25 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0891b2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-[15px] mb-1 font-sans">{point.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed font-sans">{point.description}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Key phrase */}
            <motion.div
              className="relative pl-6 border-l-2 border-[#0891b2]/40 mt-8"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="text-sm italic text-white/50 font-sans leading-relaxed">
                {"\"Une infrastructure performante aujourd'hui doit "}
                <span className="text-[#0891b2] font-semibold not-italic">le rester demain.</span>
                {"\""}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
