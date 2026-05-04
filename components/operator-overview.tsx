"use client"

import { useState } from "react"
import { Globe, Phone, Smartphone, ShieldCheck, Check } from "lucide-react"

const categories = [
  {
    id: "liens-internet",
    title: "Liens Internet professionnels",
    icon: Globe,
    description:
      "Des accès Internet fiables et performants adaptés aux environnements critiques : fibre dédiée, mutualisée, SDSL, VDSL et solutions 4G/5G de secours.",
    features: ["Fibre dédiée", "Fibre mutualisée", "SDSL / VDSL", "4G / 5G de secours", "Débits garantis"],
  },
  {
    id: "telephonie-operateur",
    title: "Téléphonie opérateur (SIP / VoIP)",
    icon: Phone,
    description:
      "Des trunks SIP fiables et sécurisés pour raccorder votre téléphonie d'entreprise au réseau public, avec une qualité de service optimale.",
    features: [
      "Trunk SIP multi-canaux",
      "Portabilité des numéros",
      "Numéros géographiques",
      "Numéros spéciaux",
      "Qualité HD",
    ],
  },
  {
    id: "operateur-mobile",
    title: "Opérateur mobile",
    icon: Smartphone,
    description:
      "Des forfaits mobiles professionnels adaptés à vos usages, avec une gestion centralisée de votre flotte et des options de sécurité avancées.",
    features: [
      "Forfaits entreprise",
      "Gestion de flotte",
      "MDM intégré",
      "Couverture nationale et internationale",
      "Support dédié",
    ],
  },
  {
    id: "resilience-continuite",
    title: "Résilience & continuité",
    icon: ShieldCheck,
    description:
      "Des solutions de redondance et de secours pour garantir la continuité de vos communications, même en cas de défaillance de votre lien principal.",
    features: [
      "Liens de secours automatiques",
      "Basculement transparent",
      "Supervision 24/7",
      "SLA garantis",
      "PRA télécom",
    ],
  },
]

export function OperatorOverview() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section id="vue-ensemble-operator" className="py-20 bg-[#F2F7FB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Vue d'ensemble</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos services opérateurs pour une connectivité professionnelle complète.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Navigation latérale */}
          <div className="lg:col-span-4">
            <nav className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = activeCategory.id === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 ${
                      isActive ? "bg-white shadow-lg border-l-4 border-[#004467]" : "hover:bg-white/50"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive ? "bg-[#E8FFF6]" : "bg-gray-100"
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? "text-[#004467]" : "text-gray-500"}`} strokeWidth={1.5} />
                    </div>
                    <span className={`font-medium ${isActive ? "text-[#004467]" : "text-gray-600"}`}>
                      {category.title}
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Contenu dynamique */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#E8FFF6] flex items-center justify-center">
                  <activeCategory.icon className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#004467]">{activeCategory.title}</h3>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{activeCategory.description}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#004467] mb-4">Fonctionnalités clés :</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {activeCategory.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#E8FFF6] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
