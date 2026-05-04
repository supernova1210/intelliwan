"use client"

import { useState } from "react"
import { Phone, MessageSquare, Headphones, Video, Smartphone, Check } from "lucide-react"

const categories = [
  {
    id: "telephonie",
    title: "Téléphonie hébergée",
    icon: Phone,
    description:
      "Une solution de téléphonie professionnelle hébergée dans le cloud, offrant une grande flexibilité et une gestion simplifiée.",
    features: [
      "Voix & vidéo unifiées",
      "Annuaire partagé",
      "Numéros spéciaux",
      "Conférences téléphoniques",
      "Permanence téléphonique",
    ],
  },
  {
    id: "communications",
    title: "Communications unifiées",
    icon: MessageSquare,
    description: "Unifiez vos outils pour fluidifier les échanges et gagner en efficacité.",
    features: [
      "Messagerie instantanée",
      "État de présence",
      "Softphone",
      "Répertoire partagé",
      "Collaboration en temps réel",
    ],
  },
  {
    id: "centre-appels",
    title: "Centre d'appels / Contacts",
    icon: Headphones,
    description:
      "Optimisez la gestion de vos flux d'appels et améliorez la qualité de service auprès de vos utilisateurs.",
    features: [
      "Routage intelligent des appels",
      "Supervision en temps réel",
      "Gestion des files d'attente",
      "Rapports de performance",
      "Intégration possible avec vos outils métiers",
    ],
  },
  {
    id: "visio",
    title: "Visioconférence",
    icon: Video,
    description:
      "Des solutions de visioconférence fiables et simples d'utilisation, adaptées à vos salles de réunion ou à vos équipes à distance.",
    features: [
      "Solutions cloud ou matérielles",
      "Partage de documents intégré",
      "Compatibilité avec les principaux outils du marché",
      "Installation et configuration clé en main",
    ],
  },
  {
    id: "mobilite",
    title: "Mobilité & DECT",
    icon: Smartphone,
    description: "Garantissez une communication continue pour vos collaborateurs mobiles.",
    features: [
      "Mobilité interne via téléphonie DECT (portée jusqu'à 40m)",
      "Qualité d'appel stable et sécurisée",
      "Appareils robustes et certifiés entreprise",
    ],
  },
]

export function CommunicationsOverview() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const activeItem = categories.find((c) => c.id === activeCategory)

  return (
    <section id="nos-solutions" className="py-20 lg:py-28" style={{ backgroundColor: "#F2F7FB" }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Nos solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les 5 briques de notre offre Communications & Collaborations
          </p>
        </div>

        {/* Container 2 colonnes */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Colonne gauche - Navigation */}
          <div className="lg:col-span-4">
            <nav className="space-y-2 bg-white rounded-3xl p-6">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = activeCategory === category.id

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                      isActive ? "bg-[#E8FFF6] shadow-md" : "bg-transparent hover:bg-gray-50"
                    }`}
                    style={{
                      borderLeft: isActive ? "4px solid #004467" : "4px solid transparent",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: isActive ? "#004467" : "#F2F7FB",
                      }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={2} style={{ color: isActive ? "#E8FFF6" : "#004467" }} />
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
