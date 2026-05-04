"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"

const clientLogos = [
  { name: "CHR Reunion", logo: "/images/clients/logo-chr-reunion.png" },
  { name: "Hopital de Tournon", logo: "/images/clients/logo-hopital-tournon.png" },
  { name: "GHT Bresse Haut Bugey", logo: "/images/clients/logoGHT.png" },
  { name: "Medipole Lyon-Villeurbanne", logo: "/images/clients/logo-medipole-lyon-villeurbanne.png" },
  { name: "Reseau OMERIS", logo: "/images/clients/logo-reseau-omeris.webp" },
  { name: "Groupe Hospitalier Les Portes du Sud", logo: "/images/clients/logo-groupe-hospitalier-portes-du-sud-v2.png" },
  { name: "Groupe ACPPA", logo: "/images/clients/groupe-acppa.png" },
  { name: "Region academique Martinique", logo: "/images/clients/Region_academique_Martinique.png" },
  { name: "Region academique Guyane", logo: "/images/clients/Region_academique_Guyane.png" },
  { name: "Collectivite Territoriale de Guyane", logo: "/images/clients/Collectivite_territoriale_de_Guyane.png" },
  { name: "Ville de Saint-Pierre", logo: "/images/clients/logo-ville-saint-pierre-reunion.png" },
  { name: "Ville de Venissieux", logo: "/images/clients/Logo_Ville_Venissieux.png" },
  { name: "Ville de Seyssinet-Pariset", logo: "/images/clients/LOGO_SEYSSINET-PARISET_COUL.png" },
  { name: "Grand Bourg Agglomeration", logo: "/images/clients/logo-grand-bourg-agglomeration.png" },
  { name: "Region Auvergne-Rhone-Alpes", logo: "/images/clients/auvergne-rhone-alpes-region.svg" },
]

const row1 = clientLogos.slice(0, 8)
const row2 = clientLogos.slice(8)

function MarqueeRow({
  logos,
  direction = "left",
  speed = 30,
}: {
  logos: typeof clientLogos
  direction?: "left" | "right"
  speed?: number
}) {
  // Duplicate logos enough times for seamless loop
  const items = [...logos, ...logos, ...logos, ...logos]
  const animDir = direction === "left" ? "-" : ""

  return (
    <div className="relative overflow-hidden group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#fdfcfa] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#fdfcfa] to-transparent pointer-events-none" />

      <div
        className="flex gap-6 w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {items.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 h-20 w-44 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center px-6 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:scale-105 hover:border-gray-200"
          >
            <img
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              className="h-auto max-h-10 w-auto max-w-full object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 grayscale hover:grayscale-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ClientsSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.9", "start 0.4"],
  })

  const titleWords = ["Ils", "nous", "font", "confiance"]

  return (
    <section className="relative bg-[#fdfcfa] py-24 lg:py-32 overflow-hidden">
      {/* Subtle background blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[35%] h-[40%] animate-blob-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 180, 180, 0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[35%] animate-blob-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.06) 0%, transparent 65%)",
          filter: "blur(50px)",
          animationDelay: "-7s",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="mb-16 lg:mb-20">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] font-sans">
            {titleWords.map((word, i) => {
              const start = i / titleWords.length
              const end = (i + 1) / titleWords.length
              return (
                <WordReveal key={word} progress={scrollYProgress} start={start} end={end}>
                  {word}
                </WordReveal>
              )
            })}
          </h2>
          <div className="flex items-center gap-3 mt-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#0891b2]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/50" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#0891b2]/30" />
          </div>
          <p className="mt-6 text-lg text-gray-500 max-w-xl font-sans">
            {"Intelliwan accompagne des PME, ETI, etablissements de sante, collectivites et industriels dans leurs projets telecom et reseau."}
          </p>
        </div>
      </div>

      {/* Marquee rows - full width */}
      <div className="flex flex-col gap-5">
        <MarqueeRow logos={row1} direction="left" speed={35} />
        <MarqueeRow logos={row2} direction="right" speed={40} />
      </div>

    </section>
  )
}

function WordReveal({
  children,
  progress,
  start,
  end,
}: {
  children: string
  progress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  const y = useTransform(progress, [start, end], [8, 0])
  const blur = useTransform(progress, [start, end], [4, 0])
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`)

  return (
    <motion.span
      className="inline-block mr-[0.3em] text-gray-900"
      style={{ opacity, y, filter: filterBlur }}
    >
      {children}
    </motion.span>
  )
}
