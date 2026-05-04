"use client"

import { Search, Users, Target, Rocket } from "lucide-react"

const steps = [
  { id: 1, title: "AUDIT", subtitle: "Infrastructures", icon: Search },
  { id: 2, title: "ANALYSE", subtitle: "Usages & besoins", icon: Users },
  { id: 3, title: "STRATÉGIE", subtitle: "Recommandations", icon: Target },
  { id: 4, title: "AMO", subtitle: "Déploiement", icon: Rocket },
]

export function AuditDemarche() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Notre démarche
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une approche structurée pour garantir la réussite de votre projet
          </p>
        </div>

        {/* Schéma dynamique */}
        <div className="relative max-w-5xl mx-auto">
          {/* Grille des cartes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="relative">
                  {/* Indicateur de progression */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-4 h-4 rounded-full ${index === 0 ? "bg-[#004467]" : "bg-[#004467]/30"}`} />
                  </div>

                  {/* Carte */}
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{ border: "1px solid #E8FFF6" }}
                  >
                    {/* Header */}
                    <div className="py-3 px-4 text-center" style={{ backgroundColor: "#004467" }}>
                      <span className="text-white font-bold text-sm tracking-wide">{step.title}</span>
                    </div>

                    {/* Body */}
                    <div className="p-6 text-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: "#E8FFF6" }}
                      >
                        <Icon className="w-7 h-7" strokeWidth={2} style={{ color: "#004467" }} />
                      </div>
                      <p className="text-gray-600 text-sm font-medium">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Flèche entre les cartes (sauf la dernière) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 md:-right-6 transform translate-x-1/2 z-10">
                      <div className="flex items-center">
                        <div className="w-6 md:w-8 h-0.5 bg-[#004467]/30" />
                        <svg className="w-3 h-3 -ml-1" fill="#004467" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Ligne de connexion en arrière-plan (desktop) */}
          <div
            className="hidden md:block absolute top-[42px] left-[12.5%] right-[12.5%] h-0.5"
            style={{ backgroundColor: "#E8FFF6" }}
          />
        </div>

        {/* Texte sous le schéma */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            Notre démarche s'appuie sur une approche structurée : audit des infrastructures, analyse des usages,
            définition d'une stratégie adaptée, puis assistance à maîtrise d'ouvrage pour garantir la réussite du
            déploiement.
          </p>
        </div>
      </div>
    </section>
  )
}
