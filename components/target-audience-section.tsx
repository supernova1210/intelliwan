"use client"

import { useEffect, useRef, useState } from "react"

export function TargetAudienceSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const targetGroups = [
    {
      title: "ETI & grandes organisations",
      points: ["Téléphonie multi-sites", "Forte volumétrie d'utilisateurs", "Systèmes de communication structurants"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      accentColor: "#0ea5e9",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-400",
      number: "01",
    },
    {
      title: "Collectivités & établissements publics",
      points: [
        "Continuité de service",
        "Fiabilité des infrastructures",
        "Téléphonie institutionnelle et opérationnelle",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
      accentColor: "#10b981",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-teal-400",
      number: "02",
    },
    {
      title: "Sites industriels & environnements critiques",
      points: ["Contraintes techniques élevées", "Robustesse des systèmes", "Intégration télécom sur mesure"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      accentColor: "#f59e0b",
      gradientFrom: "from-orange-500",
      gradientTo: "to-amber-400",
      number: "03",
    },
  ]

  // Text to highlight progressively
  const highlightText =
    "Intelliwan est une structure spécialisée dans les systèmes de téléphonie d'entreprise à grande échelle. Nous intervenons auprès d'organisations pour lesquelles la téléphonie est un outil critique : environnements multi-sites, fortes volumétries d'utilisateurs, architectures complexes."
  const words = highlightText.split(" ")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Calculate progress based on section position
        const sectionTop = sectionRect.top

        // This delays the start and makes the effect visible as user scrolls
        const startOffset = windowHeight * 0.6 // Start when top of section is at 60% of viewport
        const endOffset = windowHeight * 0.1 // Complete when top of section is at 10% of viewport

        const progress = Math.max(0, Math.min(1, (startOffset - sectionTop) / (startOffset - endOffset)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-[#0a1628] overflow-hidden">
      {/* Blurred Intelliwan color shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large teal/cyan blob - top right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
        />

        {/* Blue blob - center left */}
        <div
          className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-25 blur-[100px]"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
        />

        {/* Green/emerald blob - bottom center */}
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #10b981 0%, transparent 70%)" }}
        />

        {/* Small accent blob - top left */}
        <div
          className="absolute top-20 left-1/4 w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Progressive text highlight section */}
        <div
          ref={textRef}
          className={`max-w-5xl mb-24 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium font-sans leading-relaxed text-left">
            {words.map((word, index) => {
              const wordProgress = index / words.length
              const isHighlighted = scrollProgress > wordProgress

              return (
                <span
                  key={index}
                  className={`inline-block transition-all duration-300 mr-[0.3em] ${
                    isHighlighted ? "text-white" : "text-white/20"
                  }`}
                  style={{
                    transitionDelay: `${index * 10}ms`,
                  }}
                >
                  {word}
                </span>
              )
            })}
          </p>
        </div>

        {/* Cards grid - all visible at once */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {targetGroups.map((group, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02] hover:-translate-y-2">
                {/* Top accent line with gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${group.gradientFrom} ${group.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${group.accentColor}15 0%, transparent 60%)`,
                  }}
                />

                <div className="relative p-8 lg:p-10">
                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${group.gradientFrom} ${group.gradientTo} text-white font-bold text-lg shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      style={{
                        boxShadow: `0 10px 40px ${group.accentColor}30`,
                      }}
                    >
                      {group.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="p-3 rounded-xl bg-white/5 text-white/40 transition-all duration-500 group-hover:bg-white/10 group-hover:scale-110"
                      style={{
                        color: group.accentColor,
                      }}
                    >
                      {group.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6 group-hover:text-white transition-colors duration-300">
                    {group.title}
                  </h3>

                  {/* Divider line */}
                  <div className="relative h-px bg-white/10 mb-6 overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 w-0 bg-gradient-to-r ${group.gradientFrom} ${group.gradientTo} group-hover:w-full transition-all duration-700`}
                    />
                  </div>

                  {/* Points */}
                  <ul className="space-y-4">
                    {group.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-3 text-white/50 group-hover:text-white/70 transition-all duration-300"
                        style={{ transitionDelay: `${pointIndex * 50}ms` }}
                      >
                        <span
                          className={`flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r ${group.gradientFrom} ${group.gradientTo} opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150`}
                        />
                        <span className="text-sm lg:text-base leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom arrow indicator */}
                  <div className="mt-8 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-all duration-500">
                    <span className="text-sm font-medium">En savoir plus</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Corner decorative elements */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 100% 100%, ${group.accentColor} 0%, transparent 70%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
