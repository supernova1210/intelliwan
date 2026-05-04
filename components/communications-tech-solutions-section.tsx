"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageSquare,
  Server,
  Network,
  Headphones,
  Video,
  Shield,
  Globe,
} from "lucide-react"

const solutions = [
  {
    id: "telephonie",
    number: "01",
    title: "Téléphonie hébergée & IPBX",
    description:
      "Téléphonie IP et hébergée permettant de centraliser l'ensemble des communications voix, avec des architectures sécurisées et évolutives.",
    features: [
      "IPBX centralisé ou hybride",
      "Gestion multi-sites",
      "Numérotation professionnelle",
      "Redondance et haute disponibilité",
      "Supervision des flux voix",
    ],
    phrase:
      "Une téléphonie professionnelle pensée pour la continuité de service.",
    icon: Phone,
    color: "#004467",
    useMitel: false,
  },
  {
    id: "communications",
    number: "02",
    title: "Communications unifiées",
    description:
      "Regroupement des outils de communication au sein d'un même environnement pour une collaboration optimale.",
    features: [
      "Softphone PC & mobile",
      "Présence utilisateurs",
      "Messagerie unifiée",
      "Visioconférence",
      "Mobilité totale",
    ],
    phrase:
      "Une expérience de communication fluide, où que soient vos équipes.",
    icon: MessageSquare,
    color: "#00a86b",
    useMitel: false,
  },
  {
    id: "mitel",
    number: "03",
    title: "Expertise Mitel 5000",
    description:
      "Intelliwan dispose d'une expertise avancée sur la solution Mitel 5000, reconnue pour sa robustesse et sa capacité à répondre aux environnements multi-sites et critiques.",
    features: [
      "Gestion de fortes volumétries",
      "Haute disponibilité",
      "Personnalisation avancée",
      "Interconnexion de sites",
      "Intégration avec les outils métiers",
    ],
    phrase:
      "Une solution éprouvée, maîtrisée en profondeur par les équipes Intelliwan.",
    icon: Server,
    color: "#e31837",
    useMitel: true,
  },
  {
    id: "infrastructure",
    number: "04",
    title: "Interconnexion & infrastructures",
    description:
      "Les performances des communications reposent sur la qualité des infrastructures réseau sous-jacentes.",
    features: [
      "VPN inter-sites",
      "Sécurisation des flux",
      "Qualité de service (QoS)",
      "Intégration à l'existant",
    ],
    phrase: "La communication ne tolère aucune faiblesse réseau.",
    icon: Network,
    color: "#0891b2",
    useMitel: false,
  },
]

/* ─── Mini dashboard visual ─── */
function SolutionVisual({ solution }: { solution: (typeof solutions)[0] }) {
  const Icon = solution.icon
  const orbitIcons = [Headphones, Video, Shield, Globe]

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900/95">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[11px] text-gray-500 font-mono ml-2">
          intelliwan.dashboard.local
        </span>
      </div>

      {/* Body */}
      <div className="relative flex items-center justify-center h-[calc(100%-44px)] p-6">
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(${solution.color} 1px, transparent 1px), linear-gradient(90deg, ${solution.color} 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Animated rings */}
        {[1, 1.6, 2.2].map((scale, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: `${scale * 80}px`,
              height: `${scale * 80}px`,
              borderColor: solution.color,
              opacity: 0.15 - i * 0.04,
            }}
            animate={{ scale: [1, 1 + 0.08 * (i + 1), 1] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Central icon */}
        <motion.div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${solution.color}25` }}
        >
          {solution.useMitel ? (
            <Image
              src="/images/mitel-logo.svg"
              alt="Mitel"
              width={48}
              height={32}
              className="object-contain"
            />
          ) : (
            <Icon className="w-8 h-8" style={{ color: solution.color }} />
          )}
        </motion.div>

        {/* Orbiting nodes */}
        {orbitIcons.map((NodeIcon, i) => {
          const angle = (i * 90 + 45) * (Math.PI / 180)
          const r = 72
          return (
            <motion.div
              key={i}
              className="absolute w-9 h-9 rounded-full flex items-center justify-center bg-slate-800 border border-white/15"
              style={{
                left: `calc(50% + ${Math.cos(angle) * r}px - 18px)`,
                top: `calc(50% + ${Math.sin(angle) * r}px - 18px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.08 }}
            >
              <NodeIcon className="w-4 h-4 text-white/50" />
            </motion.div>
          )
        })}

        {/* Feature badges */}
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-1.5 justify-center">
          {solution.features.slice(0, 3).map((f, i) => (
            <motion.span
              key={f}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/10 text-white/70 border border-white/10"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.07 }}
            >
              {f}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Number badge */}
      <div
        className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ backgroundColor: solution.color }}
      >
        {solution.number}
      </div>
    </div>
  )
}

/* ─── Main section ─── */
export function CommunicationsTechSolutionsSection() {
  const [active, setActive] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)
  const dragStartX = useRef(0)
  const isDragging = useRef(false)
  const [cardWidth, setCardWidth] = useState(0)
  const gap = 24

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const containerWidth = trackRef.current.offsetWidth
        setCardWidth(containerWidth - 80)
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const go = useCallback(
    (dir: 1 | -1) => {
      setActive((prev) => {
        const next = prev + dir
        if (next < 0) return 0
        if (next >= solutions.length) return solutions.length - 1
        return next
      })
    },
    [],
  )

  /* keyboard */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [go])

  const canPrev = active > 0
  const canNext = active < solutions.length - 1
  const current = solutions[active]
  const Icon = current.icon

  return (
    <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-sans">
              Des solutions éprouvées, intégrées dans une{" "}
              <span className="text-[#004467]">architecture maîtrisée</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Intelliwan sélectionne, déploie et interconnecte des solutions
              reconnues du marché, adaptées aux environnements professionnels
              exigeants.
            </p>
          </motion.div>

          {/* Arrow nav */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={!canPrev}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#004467] hover:text-[#004467] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous solution"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={!canNext}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#004467] hover:text-[#004467] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next solution"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="ml-3 text-sm text-gray-400 font-mono tabular-nums">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(solutions.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ─── Carousel track ─── */}
        <div
          ref={trackRef}
          className="relative overflow-visible"
          onPointerDown={(e) => {
            isDragging.current = true
            dragStartX.current = e.clientX
            dragX.set(0)
            ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
          }}
          onPointerMove={(e) => {
            if (!isDragging.current) return
            dragX.set(e.clientX - dragStartX.current)
          }}
          onPointerUp={() => {
            if (!isDragging.current) return
            isDragging.current = false
            const dx = dragX.get()
            if (dx < -60) go(1)
            else if (dx > 60) go(-1)
            animate(dragX, 0, { type: "spring", stiffness: 400, damping: 30 })
          }}
          style={{ cursor: "grab", touchAction: "pan-y" }}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: -(active * (cardWidth + gap)) }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          >
            {solutions.map((sol, index) => {
              const SolIcon = sol.icon
              const isActive = index === active

              return (
                <motion.div
                  key={sol.id}
                  className="shrink-0"
                  style={{ width: cardWidth || "calc(100% - 80px)" }}
                  animate={{
                    scale: isActive ? 1 : 0.96,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="rounded-3xl border transition-colors duration-500 overflow-hidden h-full"
                    style={{
                      borderColor: isActive
                        ? `${sol.color}30`
                        : "rgb(226 232 240)",
                      backgroundColor: "white",
                    }}
                  >
                    <div className="grid lg:grid-cols-2 h-full">
                      {/* Left text side */}
                      <div className="p-6 lg:p-8 flex flex-col justify-center">
                        {/* Number + title */}
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="text-xs font-bold px-3 py-1 rounded-full text-white"
                            style={{ backgroundColor: sol.color }}
                          >
                            {sol.number}
                          </span>
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              backgroundColor: `${sol.color}12`,
                            }}
                          >
                            <SolIcon
                              className="w-5 h-5"
                              style={{ color: sol.color }}
                            />
                          </div>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-sans">
                          {sol.title}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {sol.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-1.5 mb-4">
                          {sol.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-3 text-sm text-gray-700"
                            >
                              <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: sol.color }}
                              />
                              {f}
                            </li>
                          ))}
                        </ul>

                        {/* Quote */}
                        <p
                          className="text-sm italic font-medium mb-4"
                          style={{ color: sol.color }}
                        >
                          &ldquo;{sol.phrase}&rdquo;
                        </p>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-[#004467] font-semibold text-sm hover:gap-3 transition-all w-fit"
                        >
                          Voir les détails
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right visual side */}
                      <div className="hidden lg:block p-4">
                        <div className="h-full min-h-[340px] rounded-2xl overflow-hidden">
                          <AnimatePresence mode="wait">
                            {isActive && (
                              <motion.div
                                key={sol.id}
                                className="h-full"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35 }}
                              >
                                <SolutionVisual solution={sol} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {solutions.map((sol, index) => (
            <button
              key={sol.id}
              type="button"
              onClick={() => setActive(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: index === active ? 32 : 10,
                height: 10,
                backgroundColor:
                  index === active ? sol.color : "rgb(209 213 219)",
              }}
              aria-label={`Go to ${sol.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
