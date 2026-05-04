"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Building2, Landmark, ShieldAlert } from "lucide-react"

export function CommunicationsAdaptedSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.4"],
  })

  const titleWords = "Des communications adaptées à chaque organisation".split(" ")

  const profiles = [
    {
      icon: Building2,
      title: "PME multi-sites",
      description:
        "Garantir une communication homogène entre tous les sites, sans complexifier l'exploitation.",
      color: "#004AAD",
      bgColor: "rgba(0, 74, 173, 0.15)",
    },
    {
      icon: Landmark,
      title: "Collectivités",
      description:
        "Assurer la continuité de service et la fiabilité des échanges entre services.",
      color: "#00D084",
      bgColor: "rgba(0, 208, 132, 0.15)",
    },
    {
      icon: ShieldAlert,
      title: "Environnements critiques",
      description:
        "Maintenir une disponibilité maximale et une capacité de réaction immédiate.",
      color: "#0891b2",
      bgColor: "rgba(8, 145, 178, 0.15)",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background - same as positioning section */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        {/* Large teal/cyan blob - top area */}
        <div
          className="absolute top-[-20%] left-[-5%] w-[50%] h-[60%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.4) 0%, rgba(0, 200, 180, 0.25) 30%, rgba(0, 180, 160, 0.1) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Blue blob - left side */}
        <div
          className="absolute top-[10%] left-[15%] w-[35%] h-[45%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 68, 103, 0.35) 0%, rgba(0, 100, 150, 0.2) 35%, transparent 65%)",
            filter: "blur(50px)",
            animationDelay: "-3s",
          }}
        />

        {/* Green/emerald blob - right side */}
        <div
          className="absolute top-[20%] right-[5%] w-[45%] h-[55%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 168, 107, 0.35) 0%, rgba(0, 200, 120, 0.2) 35%, transparent 65%)",
            filter: "blur(55px)",
            animationDelay: "-7s",
          }}
        />

        {/* Warm accent blob - center */}
        <div
          className="absolute top-[40%] left-[35%] w-[25%] h-[30%] animate-blob-drift"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 180, 100, 0.2) 0%, rgba(255, 200, 120, 0.1) 40%, transparent 60%)",
            filter: "blur(45px)",
          }}
        />

        {/* Very subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title - left aligned, full width, scroll-revealed word by word */}
        <div ref={titleRef} className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight leading-tight">
            {titleWords.map((word, i) => {
              const wordStart = i / titleWords.length
              const wordEnd = (i + 1) / titleWords.length
              return (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  start={wordStart}
                  end={wordEnd}
                />
              )
            })}
          </h2>
        </div>

        {/* Cards grid - 3 columns */}
        <div className="grid gap-12 md:gap-16 grid-cols-1 md:grid-cols-3">
          {profiles.map((profile, index) => {
            const Icon = profile.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group text-center"
              >
                {/* Icon on blurred color blob */}
                <div className="relative mx-auto mb-6 w-28 h-28 flex items-center justify-center">
                  {/* Blurred background blob */}
                  <motion.div
                    className="absolute inset-0 rounded-full transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle, ${profile.bgColor} 0%, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                  {/* Outer glow on hover */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${profile.color}20 0%, transparent 60%)`,
                      filter: "blur(25px)",
                      transform: "scale(1.3)",
                    }}
                  />
                  {/* Icon */}
                  <Icon
                    className="relative z-10 w-10 h-10 transition-all duration-300 group-hover:scale-110"
                    style={{ color: profile.color }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#004AAD]">
                  {profile.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-[260px] mx-auto">
                  {profile.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Synthesis quote */}
        <motion.div
          className="mt-20 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg md:text-xl text-gray-500 italic font-sans text-center max-w-2xl">
            {"Chaque environnement a ses contraintes. Notre rôle est de les anticiper."}
          </p>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-10 flex justify-center items-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#004AAD]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00D084]/50" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#004AAD]/30" />
        </motion.div>
      </div>
    </section>
  )
}

/* Animated word component - reveals as user scrolls */
function Word({
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
  const color = useTransform(
    progress,
    [start, end],
    ["rgba(17,24,39,0.15)", "rgba(17,24,39,1)"]
  )

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  )
}
