"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Radio, Bell, Users, Phone, MessageSquare, Smartphone, Mail, CheckCircle2 } from "lucide-react"

const timelineSteps = [
  {
    id: "detection",
    icon: Radio,
    label: "Détection",
    description: "Le système identifie un événement critique et déclenche le protocole.",
    color: "#e97316",
  },
  {
    id: "alert",
    icon: Bell,
    label: "Alerte",
    description: "Diffusion multi-canale instantanée aux personnes concernées.",
    color: "#dc2626",
  },
  {
    id: "coordination",
    icon: Users,
    label: "Coordination",
    description: "Suivi des accusés de réception et coordination des équipes.",
    color: "#00a86b",
  },
]

const channels = [
  { icon: Phone, label: "Appels vocaux", delay: 0 },
  { icon: MessageSquare, label: "SMS", delay: 0.15 },
  { icon: Smartphone, label: "Notifications", delay: 0.3 },
  { icon: Mail, label: "Email", delay: 0.45 },
]

const features = [
  "Diffusion d'alertes multi-canales",
  "Messages vocaux, SMS, notifications",
  "Déclenchement manuel ou automatisé",
  "Scénarios d'alerte prédéfinis",
  "Accusés de réception et suivi",
]

export function CrisisMgmtAlert() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)
  const [waveActive, setWaveActive] = useState(false)

  // Auto-cycle through timeline steps
  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % timelineSteps.length
        if (next === 1) setWaveActive(true)
        if (next === 0) setWaveActive(false)
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-12 blur-[120px]"
            style={{ background: "radial-gradient(circle, #dc2626 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
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
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight text-white max-w-3xl">
            {"Alerter, informer et "}
            <span className="text-red-400">coordonner</span>
            {" rapidement"}
          </h2>
        </motion.div>

        <motion.p
          className="text-lg text-white/50 max-w-3xl leading-relaxed mb-16 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"En situation de crise, la capacité à diffuser une information claire et immédiate est essentielle pour coordonner les équipes et sécuriser les personnes."}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Timeline + features */}
          <div>
            {/* Timeline */}
            <div className="relative mb-12">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

              <div className="space-y-8">
                {timelineSteps.map((step, i) => {
                  const Icon = step.icon
                  const isActive = i <= activeStep
                  return (
                    <motion.div
                      key={step.id}
                      className="relative flex items-start gap-5 pl-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    >
                      {/* Circle on the line */}
                      <div className="relative z-10 shrink-0">
                        <motion.div
                          className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500"
                          style={{
                            backgroundColor: isActive ? `${step.color}20` : "transparent",
                            borderColor: isActive ? step.color : "rgba(255,255,255,0.15)",
                          }}
                          animate={isActive && i === activeStep ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Icon
                            className="w-4 h-4 transition-colors duration-300"
                            style={{ color: isActive ? step.color : "rgba(255,255,255,0.3)" }}
                          />
                        </motion.div>
                      </div>

                      <div>
                        <h3
                          className="font-bold text-lg mb-1 font-sans transition-colors duration-300"
                          style={{ color: isActive ? step.color : "rgba(255,255,255,0.3)" }}
                        >
                          {step.label}
                        </h3>
                        <p className={`text-sm font-sans leading-relaxed transition-colors duration-300 ${isActive ? "text-white/60" : "text-white/20"}`}>
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00a86b]/70 shrink-0" />
                  <span className="text-sm text-white/50 font-sans">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Key phrase */}
            <motion.div
              className="mt-10 relative pl-6 border-l-2 border-red-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-sm italic text-white/40 font-sans leading-relaxed">
                {"\"Une information claire, au bon moment, "}
                <span className="text-red-400 font-semibold not-italic">aux bonnes personnes.{"\"" }</span>
              </p>
            </motion.div>
          </div>

          {/* Right - Propagation wave visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden p-6 lg:p-8">
              {/* Wave visualization */}
              <div className="relative h-64 mb-8 flex items-center justify-center">
                {/* Central alert source */}
                <motion.div
                  className="relative z-10 w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center"
                  animate={waveActive ? { scale: [1, 1.08, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Bell className="w-6 h-6 text-red-400" />
                </motion.div>

                {/* Propagation rings */}
                {waveActive && [0, 0.4, 0.8, 1.2].map((delay, i) => (
                  <motion.div
                    key={`wave-${i}`}
                    className="absolute rounded-full border border-red-500/20"
                    initial={{ width: 60, height: 60, opacity: 0 }}
                    animate={{
                      width: [60, 60 + (i + 1) * 70],
                      height: [60, 60 + (i + 1) * 70],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Channel nodes positioned around the center */}
                {channels.map((ch, i) => {
                  const angle = (i * 90 - 45) * (Math.PI / 180)
                  const r = 90
                  const Icon = ch.icon
                  return (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center gap-1"
                      style={{
                        left: `calc(50% + ${Math.cos(angle) * r}px - 20px)`,
                        top: `calc(50% + ${Math.sin(angle) * r}px - 20px)`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        waveActive
                          ? { scale: [0.8, 1.1, 1], opacity: 1 }
                          : { scale: 0.8, opacity: 0.3 }
                      }
                      transition={{ duration: 0.5, delay: ch.delay + 0.3 }}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                          waveActive ? "bg-[#00a86b]/15 border-[#00a86b]/30" : "bg-white/5 border-white/10"
                        }`}
                      >
                        <Icon className={`w-4 h-4 transition-colors duration-300 ${waveActive ? "text-[#00a86b]" : "text-white/30"}`} />
                      </div>
                      <span className="text-[10px] text-white/40 font-sans">{ch.label}</span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-2">
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: waveActive ? "#00a86b" : "#dc2626" }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                    {waveActive ? "Diffusion en cours" : "En veille"}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-white/30">
                  {waveActive ? "4 canaux actifs" : "--"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
