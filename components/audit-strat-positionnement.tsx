"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Layers, Database, Activity } from "lucide-react"

const analysisLayers = [
  {
    id: "infra",
    icon: Database,
    title: "Infrastructure",
    description: "Architecture physique et logique, topologie, interconnexions, capacités.",
    ringSize: 280,
    color: "#004467",
  },
  {
    id: "usages",
    icon: Layers,
    title: "Usages",
    description: "Flux de communication, comportements utilisateurs, volumétries, criticité.",
    ringSize: 200,
    color: "#0891b2",
  },
  {
    id: "flux",
    icon: Activity,
    title: "Flux & enjeux",
    description: "Performance, disponibilité, qualité de service, contraintes métiers.",
    ringSize: 120,
    color: "#10b981",
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

export function AuditStratPositionnement() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Comprendre avant d'agir".split(" ")

  /* Layer reveal progress */
  const { scrollYProgress: layerProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const layer1Opacity = useTransform(layerProgress, [0.15, 0.3], [0.1, 1])
  const layer2Opacity = useTransform(layerProgress, [0.25, 0.4], [0.1, 1])
  const layer3Opacity = useTransform(layerProgress, [0.35, 0.5], [0.1, 1])
  const layerOpacities = [layer1Opacity, layer2Opacity, layer3Opacity]

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
            style={{ background: "radial-gradient(circle, #0891b2 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(circle, #004467 0%, transparent 70%)" }}
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

        {/* Intro text */}
        <motion.p
          className="text-lg text-white/50 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Les infrastructures de communication complexes ne se traitent pas par empilement de solutions. Elles nécessitent une compréhension fine des usages, des contraintes techniques, des enjeux métiers et des perspectives d'évolution."}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left -- concentric layers visualization */}
          <motion.div
            className="relative flex items-center justify-center min-h-[400px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Concentric rings revealing from outside to inside */}
            {analysisLayers.map((layer, i) => (
              <motion.div
                key={layer.id}
                className="absolute rounded-full border flex items-center justify-center"
                style={{
                  width: layer.ringSize,
                  height: layer.ringSize,
                  borderColor: `${layer.color}30`,
                  opacity: layerOpacities[i],
                }}
              >
                {/* Dashed orbit */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `1px dashed ${layer.color}20`,
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Glow behind ring */}
                <div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{ background: `radial-gradient(circle, ${layer.color}10 0%, transparent 70%)` }}
                />

                {/* Small orbiting dot */}
                <motion.div
                  className="absolute w-2 h-2 rounded-full"
                  style={{ backgroundColor: `${layer.color}80`, top: 0, left: "50%", marginLeft: -4, marginTop: -4 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}

            {/* Center icon */}
            <motion.div
              className="relative z-10 w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
              style={{ opacity: layerOpacities[2] }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Activity className="w-6 h-6 text-[#10b981]" />
            </motion.div>

            {/* Layer labels on the side */}
            {analysisLayers.map((layer, i) => (
              <motion.div
                key={`label-${layer.id}`}
                className="absolute text-right"
                style={{
                  right: `calc(50% + ${layer.ringSize / 2 + 20}px)`,
                  top: `calc(50% + ${(i - 1) * 45}px)`,
                  opacity: layerOpacities[i],
                }}
              >
                <span className="text-xs font-mono tracking-wider uppercase font-semibold" style={{ color: `${layer.color}80` }}>
                  {layer.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right -- layer descriptions */}
          <div className="space-y-8">
            {analysisLayers.map((layer, i) => {
              const Icon = layer.icon
              return (
                <motion.div
                  key={layer.id}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                >
                  <div
                    className="flex-shrink-0 p-3 rounded-xl border"
                    style={{
                      backgroundColor: `${layer.color}15`,
                      borderColor: `${layer.color}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: layer.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1.5 font-sans">{layer.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-sans">{layer.description}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Key phrase */}
            <motion.div
              className="relative pl-6 border-l-2 border-[#0891b2]/40 mt-10"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-sm italic text-white/50 font-sans leading-relaxed">
                {"\"Une décision pertinente commence toujours par "}
                <span className="text-[#0891b2] font-semibold not-italic">un diagnostic précis.</span>
                {"\""}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
