"use client"

import { useRef } from "react"
import { Award, Settings, Users, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Expertise technique reconnue",
    description:
      "Une expertise spécialisée sur les systèmes de téléphonie d'entreprise à grande échelle, avec une maîtrise éprouvée des environnements complexes et des infrastructures critiques.",
  },
  {
    icon: Settings,
    title: "Solutions sur mesure",
    description:
      "Des architectures télécom conçues et dimensionnées selon vos usages réels, vos contraintes techniques et les exigences de continuité de service propres à votre organisation.",
  },
  {
    icon: Users,
    title: "Accompagnement complet",
    description:
      "Audit, conseil, intégration, migration et suivi : un pilotage de bout en bout adapté aux projets télécoms complexes et structurants.",
  },
  {
    icon: HeartHandshake,
    title: "Proximité & réactivité",
    description:
      "Une structure experte et disponible, capable d'intervenir avec réactivité et souplesse, en appui de vos équipes techniques et métiers.",
  },
]

export function WhyIntelliwanSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="relative bg-[#fafafa] py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main gradient container inspired by Liftoff */}
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] p-12 lg:p-16"
          style={{
            background: `
              linear-gradient(135deg, 
                #003d5c 0%, 
                #004467 20%, 
                #005a7a 40%, 
                #1a6080 60%, 
                #2d7a8a 80%, 
                #4a9a7a 100%
              )
            `,
          }}
        >
          {/* Subtle gradient overlay for depth */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `
                radial-gradient(ellipse at 20% 20%, rgba(0, 68, 103, 0.8) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 80%, rgba(74, 154, 122, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, rgba(26, 96, 128, 0.4) 0%, transparent 70%)
              `,
            }}
          />

          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-6 font-serif text-4xl font-medium tracking-tight text-white lg:text-5xl">
                Pourquoi choisir Intelliwan ?
              </h2>

              {/* Icon row */}
              <div className="mb-6 flex items-center justify-center gap-3">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-lg"
                  >
                    <reason.icon className="h-5 w-5 text-[#004467]" strokeWidth={2} />
                  </div>
                ))}
              </div>

              <p className="text-lg text-white/80">
                L&apos;expertise télécom au service de votre transformation digitale
              </p>
            </div>

            {/* Reasons grid - subtle presentation without cards */}
            <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-10 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div key={index} className="group relative flex gap-5">
                  {/* Number indicator with gradient border */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <span className="text-lg font-semibold text-white">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-white">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-14 text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-[#004467] shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                Découvrir notre approche
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
