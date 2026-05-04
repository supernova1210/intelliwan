"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, animate } from "framer-motion"
import { Clock, CheckCircle2, Eye, Heart, TrendingUp } from "lucide-react"

/* Animated counter */
function AnimatedCounter({ value, suffix = "", delay = 0, inView }: { value: number; suffix?: string; delay?: number; inView: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, delay])

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

const metrics = [
  {
    icon: Clock,
    value: 45,
    suffix: "%",
    label: "Réduction des temps d'attente",
    color: "#004467",
  },
  {
    icon: CheckCircle2,
    value: 72,
    suffix: "%",
    label: "Résolution au premier contact",
    color: "#00a86b",
  },
  {
    icon: Eye,
    value: 360,
    suffix: "°",
    label: "Visibilité sur les interactions",
    color: "#0891b2",
  },
  {
    icon: Heart,
    value: 89,
    suffix: "%",
    label: "Satisfaction client renforcée",
    color: "#e97316",
  },
  {
    icon: TrendingUp,
    value: 35,
    suffix: "%",
    label: "Productivité agent accrue",
    color: "#004467",
  },
]

export function ContactCenterBenefices() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden bg-slate-950">
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
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#004467]/10 rounded-full blur-[120px] animate-blob-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00a86b]/8 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Title */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight text-white max-w-3xl">
            Résultats concrets pour vos équipes
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-16">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {/* Icon with glow */}
                <div className="relative mb-4">
                  <motion.div
                    className="absolute -inset-3 rounded-2xl blur-xl"
                    style={{ backgroundColor: `${metric.color}20` }}
                    animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${metric.color}20`,
                      borderColor: `${metric.color}30`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: metric.color }} />
                  </div>
                </div>

                {/* Counter */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-sans">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} delay={0.3 + i * 0.1} inView={isInView} />
                </div>

                {/* Label */}
                <p className="text-sm text-slate-400 leading-relaxed font-sans max-w-[160px]">{metric.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Key phrase */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative pl-6 border-l-2 border-[#00a86b]/40 max-w-2xl">
            <p className="text-lg md:text-xl text-white/60 font-sans leading-relaxed">
              {"Une stratégie contact center qui améliore l'efficacité et l'expérience — "}
              <span className="text-[#00a86b] font-semibold">{"côté client comme côté équipes."}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
