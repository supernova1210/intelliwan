"use client"

import { Globe, Lightbulb, Settings } from "lucide-react"

const reasons = [
  {
    icon: Globe,
    title: "Expertise multisectorielle",
    description: "Santé, collectivités, industrie, DOM/TOM : une connaissance terrain éprouvée.",
  },
  {
    icon: Lightbulb,
    title: "Vision stratégique + maîtrise technique",
    description: "Un accompagnement qui combine analyse, conseil et déploiement maîtrisé.",
  },
  {
    icon: Settings,
    title: "Approche sur-mesure",
    description: "Des solutions adaptées à vos enjeux métiers et à vos contraintes opérationnelles.",
  },
]

export function AuditWhyIntelliwan() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Pourquoi Intelliwan ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ce qui nous différencie dans l'accompagnement de vos projets
          </p>
        </div>

        {/* 3 cartes */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: "#E8FFF6" }}
              >
                {/* Icône */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "white" }}
                >
                  <Icon className="w-7 h-7" strokeWidth={2} style={{ color: "#004467" }} />
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
