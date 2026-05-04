"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, HeartPulse, Factory } from "lucide-react"

const contexts = [
  {
    icon: Building2,
    title: "Collectivités",
    description: "Continuité des services publics et capacité d'alerte rapide.",
    color: "#004467",
  },
  {
    icon: HeartPulse,
    title: "Santé",
    description: "Sécurisation des communications internes et coordination des équipes.",
    color: "#dc2626",
  },
  {
    icon: Factory,
    title: "Industrie & sites critiques",
    description: "Gestion des incidents, protection des personnes et des installations.",
    color: "#0891b2",
  },
]

export function CrisisMgmtContextes() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-12 blur-[120px]"
            style={{ background: "radial-gradient(circle, #004467 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
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
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight text-white max-w-3xl mb-6">
            {"Des solutions adaptées aux "}
            <span className="text-[#0891b2]">sites sensibles</span>
          </h2>
        </motion.div>

        {/* Context cards -- 3 column */}
        <div className="grid md:grid-cols-3 gap-6">
          {contexts.map((ctx, i) => {
            const Icon = ctx.icon
            return (
              <motion.div
                key={i}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: `${ctx.color}15`,
                    borderColor: `${ctx.color}25`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: ctx.color }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-sans">{ctx.title}</h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed font-sans">{ctx.description}</p>

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ backgroundColor: ctx.color }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Synthesis phrase */}
        <motion.div
          className="mt-14 relative pl-6 border-l-2 border-[#0891b2]/30"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-white/50 font-sans leading-relaxed">
            {"Chaque environnement critique impose des exigences spécifiques. "}
            <span className="text-[#0891b2] font-semibold">{"Intelliwan les intègre dès la conception."}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
