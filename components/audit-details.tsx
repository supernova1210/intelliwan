"use client"

import { Search, Users, Target, Rocket, Network, Wifi, Shield, Phone, Check } from "lucide-react"

const details = [
  {
    id: "audit",
    title: "Audit des infrastructures",
    icon: Search,
    description:
      "Analyse du réseau, de la téléphonie, du Wi-Fi, de la sécurité, des flux d'appels. Identification des points de fragilité et des leviers d'amélioration.",
    subItems: [
      { icon: Network, text: "Réseau LAN/WAN" },
      { icon: Phone, text: "Téléphonie" },
      { icon: Wifi, text: "Wi-Fi" },
      { icon: Shield, text: "Sécurité" },
    ],
    bgColor: "#F2F7FB",
  },
  {
    id: "analyse",
    title: "Analyse des usages & besoins métiers",
    icon: Users,
    description:
      "Cartographie, entretiens, compréhension des enjeux terrain. Alignement des solutions sur les besoins réels des équipes.",
    points: [
      "Cartographie des usages existants",
      "Entretiens avec les équipes terrain",
      "Identification des pain points",
      "Alignement solutions/besoins",
    ],
    bgColor: "white",
  },
  {
    id: "strategie",
    title: "Stratégie & recommandations",
    icon: Target,
    description:
      "Définition d'une architecture cible, choix technologiques, dimensionnement, priorités, roadmap opérationnelle et budgétaire.",
    points: [
      "Architecture cible sur-mesure",
      "Choix technologiques adaptés",
      "Roadmap opérationnelle",
      "Estimation budgétaire",
    ],
    bgColor: "#F2F7FB",
  },
  {
    id: "amo",
    title: "Assistance à maîtrise d'ouvrage (AMO) & déploiement",
    icon: Rocket,
    description:
      "Cadrage des besoins, rédaction des exigences techniques, aide au choix des solutions, pilotage du déploiement, coordination des équipes, suivi qualité & conformité jusqu'à mise en service.",
    points: [
      "Cadrage des besoins et exigences techniques",
      "Aide au choix des solutions",
      "Pilotage du déploiement",
      "Coordination et suivi qualité",
    ],
    bgColor: "white",
  },
]

export function AuditDetails() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2F7FB" }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Détail de nos prestations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chaque étape de notre accompagnement est pensée pour maximiser la valeur de votre projet
          </p>
        </div>

        {/* Blocs détaillés */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <div
                key={detail.id}
                className="rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: detail.bgColor }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icône */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#E8FFF6" }}
                  >
                    <Icon className="w-8 h-8" strokeWidth={2} style={{ color: "#004467" }} />
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
                      {detail.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{detail.description}</p>

                    {/* Sous-éléments avec icônes (pour audit) */}
                    {detail.subItems && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {detail.subItems.map((item, i) => {
                          const SubIcon = item.icon
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 bg-white rounded-lg p-3"
                              style={{ border: "1px solid #E8FFF6" }}
                            >
                              <SubIcon className="w-5 h-5" strokeWidth={2} style={{ color: "#004467" }} />
                              <span className="text-sm text-gray-700">{item.text}</span>
                            </div>
                          )
                        })}
                      </div>
                    )}

                    {/* Points liste (pour les autres) */}
                    {detail.points && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {detail.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: "#E8FFF6" }}
                            >
                              <Check className="w-4 h-4" strokeWidth={2.5} style={{ color: "#004467" }} />
                            </div>
                            <span className="text-gray-700 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
