"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Target,
  Compass,
  Scale,
  ShieldCheck,
  Building2,
  Cpu,
  ArrowRight,
} from "lucide-react"

const amoPoints = [
  { icon: Target, text: "Clarifier vos besoins réels" },
  { icon: Compass, text: "Définir une architecture cible cohérente" },
  { icon: Scale, text: "Comparer objectivement les solutions" },
  { icon: ShieldCheck, text: "Sécuriser les choix techniques et budgétaires" },
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

export function AuditStratAmo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Assistance à Maîtrise d'Ouvrage (AMO)".split(" ")

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
            style={{ background: "radial-gradient(circle, #004467 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-12 blur-[100px]"
            style={{ background: "radial-gradient(circle, #0891b2 0%, transparent 70%)" }}
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

        <motion.p
          className="text-lg text-white/50 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Intelliwan intervient en tant qu'assistant à maîtrise d'ouvrage pour accompagner ses clients dans la définition, la structuration et le pilotage de leurs projets de communication."}
        </motion.p>

        {/* Decisional flow: Besoins Métier -> Intelliwan -> Solutions */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            {/* Left -- Besoins Métier */}
            <motion.div
              className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              initial={{ x: -40, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#0891b2]/15 border border-[#0891b2]/25">
                  <Building2 className="w-5 h-5 text-[#0891b2]" />
                </div>
                <h3 className="font-bold text-white font-sans">Besoins Métier</h3>
              </div>
              <div className="space-y-2">
                {["Contraintes opérationnelles", "Enjeux organisationnels", "Budget & planning", "Attentes utilisateurs"].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/40 font-sans"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0891b2]/50" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Arrow left */}
            <motion.div
              className="hidden lg:flex items-center px-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-[#0891b2]/40 to-[#004467]/40" />
              <ArrowRight className="w-4 h-4 text-white/30" />
            </motion.div>

            {/* Center -- Intelliwan as trusted third party */}
            <motion.div
              className="flex-1 rounded-2xl border-2 border-[#004467]/40 bg-[#004467]/10 p-6 backdrop-blur-sm relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Subtle glow */}
              <div
                className="absolute -inset-4 rounded-3xl -z-10"
                style={{
                  background: "radial-gradient(ellipse, rgba(0,68,103,0.2) 0%, transparent 70%)",
                  filter: "blur(25px)",
                }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#004467]/20 border border-[#004467]/30">
                  <ShieldCheck className="w-5 h-5 text-[#0891b2]" />
                </div>
                <div>
                  <h3 className="font-bold text-white font-sans">Intelliwan</h3>
                  <span className="text-[11px] text-[#0891b2]/70 font-mono uppercase tracking-wider">Tiers de confiance</span>
                </div>
              </div>
              <div className="space-y-2">
                {["Expertise indépendante", "Regard objectif", "Cohérence globale", "Vision court/moyen/long terme"].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/50 font-sans"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.08 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004467]" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Arrow right */}
            <motion.div
              className="hidden lg:flex items-center px-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-[#004467]/40 to-[#10b981]/40" />
              <ArrowRight className="w-4 h-4 text-white/30" />
            </motion.div>

            {/* Right -- Solutions */}
            <motion.div
              className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              initial={{ x: 40, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#10b981]/15 border border-[#10b981]/25">
                  <Cpu className="w-5 h-5 text-[#10b981]" />
                </div>
                <h3 className="font-bold text-white font-sans">Solutions</h3>
              </div>
              <div className="space-y-2">
                {["Architecture validée", "Technologies choisies", "Intégrations prévues", "Déploiement sécurisé"].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/40 font-sans"
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#10b981]/50" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* AMO action points */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {amoPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={i}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-400"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              >
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-[#004467]/15 border border-[#004467]/25 group-hover:bg-[#004467]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#0891b2]" />
                </div>
                <span className="text-white/70 font-sans font-medium text-[15px]">{point.text}</span>
              </motion.div>
            )
          })}
        </div>

        {/* Complementary text */}
        <motion.p
          className="text-sm text-white/40 max-w-3xl leading-relaxed mb-10 font-sans"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {"Notre rôle est de défendre vos intérêts, d'apporter un regard expert et indépendant, et de garantir la cohérence globale du projet sur le court, moyen et long terme."}
        </motion.p>

        {/* Key phrase */}
        <motion.div
          className="relative pl-6 border-l-2 border-[#0891b2]/40"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-lg text-white/60 font-sans leading-relaxed">
            {"Décider avec méthode, plutôt que "}
            <span className="text-[#0891b2] font-semibold">subir des contraintes techniques.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
