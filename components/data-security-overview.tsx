"use client"

import { useState } from "react"
import { Network, Wifi, ShieldCheck, Globe, Check } from "lucide-react"

const categories = [
  {
    id: "lan",
    title: "Infrastructure réseau (LAN)",
    icon: Network,
    description:
      "Concevez et déployez une infrastructure réseau performante, fiable et évolutive pour connecter l'ensemble de vos équipements.",
    features: [
      "Architecture réseau sur-mesure",
      "Switches managés haute performance",
      "Segmentation et VLANs",
      "Qualité de service (QoS)",
      "Supervision et monitoring",
    ],
  },
  {
    id: "wifi",
    title: "Wi-Fi & mobilité",
    icon: Wifi,
    description:
      "Offrez une couverture Wi-Fi optimale à vos collaborateurs et visiteurs, avec une gestion centralisée et sécurisée.",
    features: [
      "Couverture Wi-Fi professionnelle",
      "Bornes haute densité",
      "Portail captif personnalisé",
      "Gestion centralisée cloud",
      "Roaming transparent",
    ],
  },
  {
    id: "securite",
    title: "Sécurité des données",
    icon: ShieldCheck,
    description:
      "Protégez vos données sensibles et votre infrastructure contre les cybermenaces grâce à des solutions de sécurité avancées.",
    features: [
      "Firewall nouvelle génération (NGFW)",
      "Protection anti-intrusion (IPS/IDS)",
      "VPN sécurisé site-à-site et nomade",
      "Filtrage web et applicatif",
      "Sauvegarde et PRA",
    ],
  },
  {
    id: "sdwan",
    title: "SD-WAN intelligent",
    icon: Globe,
    description:
      "Optimisez et sécurisez vos connexions multi-sites avec une solution SD-WAN intelligente et centralisée.",
    features: [
      "Agrégation de liens (fibre, 4G/5G, MPLS)",
      "Routage dynamique intelligent",
      "Priorisation des flux critiques",
      "Visibilité et contrôle centralisé",
      "Réduction des coûts WAN",
    ],
  },
]

export function DataSecurityOverview() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const activeItem = categories.find((c) => c.id === activeCategory)

  return (
    <section id="vue-ensemble-data" className="py-20 lg:py-28" style={{ backgroundColor: "#F2F7FB" }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Vue d'ensemble
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les 4 piliers de notre offre Data & Sécurité
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
