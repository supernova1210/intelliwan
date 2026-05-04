"use client"

import { useState } from "react"
import { Bell, Megaphone, ShieldAlert, Building2, Activity, Check } from "lucide-react"

const categories = [
  {
    id: "alerte",
    title: "Alerte multicanale",
    icon: Bell,
    description:
      "Diffusez rapidement vos messages d'alerte via plusieurs canaux simultanément pour garantir une réception optimale.",
    features: [
      "Appels téléphoniques automatisés",
      "SMS et messages audio",
      "Écrans et panneaux d'affichage",
      "Notifications mobiles",
      "Journalisation complète",
    ],
  },
  {
    id: "diffusion",
    title: "Diffusion prioritaire & gestion de crise",
    icon: Megaphone,
    description:
      "Déclenchez des scénarios de crise préétablis et coordonnez efficacement vos équipes en situation d'urgence.",
    features: [
      "Scénarios de crise préenregistrés",
      "Messages prioritaires (bypass)",
      "Accusés de réception",
      "Plans d'appel par rôle",
      "Déclenchement manuel ou automatisé",
    ],
  },
  {
    id: "securisation",
    title: "Sécurisation des sites sensibles",
    icon: ShieldAlert,
    description:
      "Protégez vos sites à risque avec des systèmes d'alerte et de protection adaptés aux environnements sensibles.",
    features: [
      "Détection d'intrusion",
      "Alarmes techniques",
      "Gestion évacuation/confinement",
      "Couverture radio interne",
      "Haute disponibilité",
    ],
  },
  {
    id: "hospitalier",
    title: "Alertes internes en milieu hospitalier",
    icon: Building2,
    description:
      "Accompagnez les établissements de santé dans la gestion des alertes internes et des workflows d'escalade.",
    features: [
      "Appels malade",
      "Alarmes techniques (O2, incendie, etc.)",
      "Rondes et levée de doute",
      "Escalade automatique",
      "Mobilité DECT connectée",
    ],
  },
  {
    id: "continuite",
    title: "Continuité & supervision",
    icon: Activity,
    description:
      "Garantissez une disponibilité maximale avec supervision en temps réel et redondance des systèmes critiques.",
    features: [
      "Redondance serveur",
      "Supervision temps réel",
      "Tests réguliers des scénarios",
      "Rapports automatisés",
      "Historisation complète",
    ],
  },
]

export function CrisisOverview() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const activeItem = categories.find((c) => c.id === activeCategory)

  return (
    <section id="vue-ensemble-crise" className="py-20 lg:py-28" style={{ backgroundColor: "#F2F7FB" }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Vue d'ensemble
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les 5 piliers de notre offre de gestion de crise et d'alertes
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
                    Fonctionnalités clés
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
