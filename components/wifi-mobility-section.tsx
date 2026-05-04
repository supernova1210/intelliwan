"use client"

import { Wifi, Shield, Building } from "lucide-react"

export function WifiMobilitySection() {
  return (
    <section id="wifi-mobilite" className="py-20 bg-[#F2F7FB]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Wi-Fi & mobilité</h2>
        </div>

        {/* Texte descriptif */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous déployons des réseaux Wi-Fi fiables et sécurisés, adaptés aux usages intensifs et aux environnements
            professionnels exigeants. Intelliwan définit avec vous le cahier des charges, sélectionne les technologies
            certifiées (Ruckus) et réalise l'installation clé en main.
          </p>
        </div>

        {/* 3 Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Wifi className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Couverture optimale</h3>
            <p className="text-gray-600">Une connexion stable dans tous les espaces de votre entreprise.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Shield className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Sécurité renforcée</h3>
            <p className="text-gray-600">Protocoles avancés pour protéger vos communications sans fil.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Building className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Environnements complexes</h3>
            <p className="text-gray-600">Solutions adaptées aux bâtiments difficiles et haute densité.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
