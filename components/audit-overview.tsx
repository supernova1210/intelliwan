"use client"

import { useState } from "react"
import { Search, Users, Target, Rocket, Check } from "lucide-react"

const categories = [
  {
    id: "audit",
    title: "Audit des infrastructures",
    icon: Search,
    description:
      "Analyse complète de votre réseau, téléphonie, Wi-Fi, sécurité et flux d'appels pour identifier les points de fragilité et les leviers d'amélioration.",
    features: [
      "Audit réseau et téléphonie",
      "Analyse des flux d'appels",
      "Évaluation de la sécurité",
      "Diagnostic Wi-Fi",
      "Rapport détaillé avec recommandations",
    ],
  },
  {
    id: "analyse",
    title: "Analyse des usages & besoins métiers",
    icon: Users,
    description:
      "Cartographie des usages, entretiens terrain et compréhension des enjeux pour aligner les solutions sur les besoins réels des équipes.",
    features: [
      "Cartographie des usages existants",
      "Entretiens avec les équipes",
      "Analyse des besoins métiers",
      "Identification des pain points",
      "Alignement solutions/besoins",
    ],
  },
  {
    id: "strategie",
    title: "Stratégie & recommandations",
    icon: Target,
    description:
      "Définition d'une architecture cible, choix technologiques, dimensionnement, priorités et roadmap opérationnelle et budgétaire.",
    features: [
      "Architecture cible sur-mesure",
      "Choix technologiques adaptés",
      "Dimensionnement optimisé",
      "Roadmap opérationnelle",
      "Estimation budgétaire",
    ],
  },
  {
    id: "amo",
    title: "AMO & déploiement",
    icon: Rocket,
    description:
      "Cadrage des besoins, rédaction des exigences techniques, pilotage du déploiement et coordination jusqu'à la mise en service.",
    features: [
      "Cadrage et exigences techniques",
      "Aide au choix des solutions",
      "Pilotage du déploiement",
      "Coordination des équipes",
      "Suivi qualité & conformité",
    ],
  },
]

export function AuditOverview() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const activeItem = categories.find((c) => c.id === activeCategory)

  return (
    <section id="vue-ensemble-audit" className="py-20 lg:py-28" style={{ backgroundColor: "#F2F7FB" }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Vue d'ensemble
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les 4 piliers de notre accompagnement stratégique
          </p>
        </div>

        {/* Container 2 colonnes */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Colonne gauche - Navigation */}
          <div className="lg:col-span-4">
            <nav className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = activeCategory === category.id

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                      isActive ? "bg-white shadow-lg" : "bg-transparent hover:bg-white/50"
                    }`}
                    style={{
                      borderLeft: isActive ? "4px solid #004467" : "4px solid transparent",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: isActive ? "#E8FFF6" : "#F2F7FB",
                      }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                    </div>
                    <span
                      className={`font-medium text-base ${isActive ? "font-semibold" : ""}`}
                      style={{ color: "#004467" }}
                    >
                      {category.title}
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Colonne droite - Contenu */}
          <div className="lg:col-span-8">
            {activeItem && (
              <div
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm transition-all duration-500"
                key={activeItem.id}
              >
                {/* Header du bloc */}
                <div className="flex items-start gap-5 mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#E8FFF6" }}
                  >
                    <activeItem.icon className="w-8 h-8" strokeWidth={2} style={{ color: "#004467" }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "#004467" }}>
                      {activeItem.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{activeItem.description}</p>
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: "#F2F7FB" }}>
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: "#004467" }}>
                    Points clés
                  </h4>
                  <ul className="space-y-3">
                    {activeItem.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: "#E8FFF6" }}
                        >
                          <Check className="w-4 h-4" strokeWidth={2.5} style={{ color: "#004467" }} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
