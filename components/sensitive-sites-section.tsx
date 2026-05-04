"use client"

import { ShieldAlert, Radio, AlertTriangle, Building2 } from "lucide-react"

export function SensitiveSitesSection() {
  return (
    <section id="securisation-sites" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Sécurisation des sites sensibles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pour les environnements à risque ou recevant du public, nous déployons des systèmes d'alerte et de
            protection adaptés : détection d'intrusion, alarmes techniques, gestion de l'évacuation ou du confinement,
            couverture radio interne, solutions redondantes haute disponibilité.
          </p>
        </div>

        {/* Icône centrale décorative */}
        <div className="flex justify-center mb-12">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: "#E8FFF6" }}
          >
            <ShieldAlert className="w-12 h-12" strokeWidth={2} style={{ color: "#004467" }} />
          </div>
        </div>

        {/* Points clés */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <AlertTriangle className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#004467" }}>
              Détection & alertes techniques
            </h3>
            <p className="text-gray-600 text-sm">
              Surveillance continue avec remontée d'alertes en cas d'intrusion ou d'anomalie technique.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <Radio className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#004467" }}>
              Mobilité DECT / radios internes
            </h3>
            <p className="text-gray-600 text-sm">
              Couverture radio professionnelle pour maintenir la communication des équipes sur site.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <Building2 className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#004467" }}>
              Plans de confinement & évacuation
            </h3>
            <p className="text-gray-600 text-sm">
              Scénarios prédéfinis pour guider rapidement le personnel et les usagers en cas d'urgence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <ShieldAlert className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#004467" }}>
              Haute disponibilité des systèmes
            </h3>
            <p className="text-gray-600 text-sm">
              Architecture redondante garantissant le fonctionnement continu même en cas de panne.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
