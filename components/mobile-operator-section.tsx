"use client"

import { Smartphone, User, BarChart3, Settings } from "lucide-react"

export function MobileOperatorSection() {
  return (
    <section id="operateur-mobile" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Opérateur mobile</h2>
        </div>

        {/* Texte descriptif */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous proposons des forfaits mobiles professionnels adaptés aux besoins de vos équipes : data illimitée,
            suivi des consommations, gestion du parc et support unique fixe + mobile. Une solution simple, efficace et
            centralisée.
          </p>
        </div>

        {/* Icône centrale décorative */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-[#E8FFF6] flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-[#004467]" strokeWidth={1.5} />
            </div>
            {/* Cercles décoratifs */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#F2F7FB] border-2 border-[#004467]/20"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-[#004467]/10"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-[#E8FFF6]"></div>
          </div>
        </div>

        {/* 3 Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <User className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Un interlocuteur unique</h3>
            <p className="text-gray-600">Fixe et mobile gérés par un seul partenaire de confiance.</p>
          </div>

          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <BarChart3 className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Suivi des usages</h3>
            <p className="text-gray-600">Visualisez les consommations et optimisez vos coûts.</p>
          </div>

          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Settings className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Parc mobile optimisé</h3>
            <p className="text-gray-600">Gestion centralisée de l'ensemble de vos lignes mobiles.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
