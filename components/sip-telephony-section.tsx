"use client"

import { Phone, Server, Headphones, ArrowRight, CreditCard, Activity, PhoneCall } from "lucide-react"

export function SipTelephonySection() {
  return (
    <section id="telephonie-operateur" className="py-20 bg-[#F2F7FB]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Téléphonie opérateur (SIP / VoIP)</h2>
        </div>

        {/* Petit schéma SIP - horizontal */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Trunk SIP */}
            <div className="w-48 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-xs uppercase tracking-wide">Trunk SIP</h4>
              </div>
              <div className="p-5 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-xs text-center">Connexion opérateur</p>
              </div>
            </div>

            {/* Flèche */}
            <div className="hidden md:flex items-center px-4">
              <div className="w-16 h-0.5 bg-[#004467]"></div>
              <ArrowRight className="w-5 h-5 text-[#004467] -ml-1" />
            </div>
            <div className="md:hidden py-2">
              <svg width="24" height="32" viewBox="0 0 24 32">
                <path
                  d="M12 0 L12 24 M12 24 L6 18 M12 24 L18 18"
                  stroke="#004467"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* PBX / Cloud télécom */}
            <div className="w-56 bg-white rounded-2xl shadow-lg border-2 border-[#004467] overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-xs uppercase tracking-wide">
                  PBX / Cloud Télécom
                </h4>
              </div>
              <div className="p-5 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-2">
                  <Server className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-xs text-center">Routage & gestion des appels</p>
              </div>
            </div>

            {/* Flèche */}
            <div className="hidden md:flex items-center px-4">
              <div className="w-16 h-0.5 bg-[#004467]"></div>
              <ArrowRight className="w-5 h-5 text-[#004467] -ml-1" />
            </div>
            <div className="md:hidden py-2">
              <svg width="24" height="32" viewBox="0 0 24 32">
                <path
                  d="M12 0 L12 24 M12 24 L6 18 M12 24 L18 18"
                  stroke="#004467"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Téléphones */}
            <div className="w-56 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-xs uppercase tracking-wide">
                  Téléphones & Softphones
                </h4>
              </div>
              <div className="p-5 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-2">
                  <Headphones className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-xs text-center">Postes fixes & applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous assurons la gestion complète de vos services voix : trunks SIP, portabilité, numéros géographiques et
            spéciaux, routage, supervision et optimisation des flux d'appels. La téléphonie via Internet offre
            flexibilité, performance et coûts maîtrisés.
          </p>
        </div>

        {/* 3 Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <PhoneCall className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Portabilité simple</h3>
            <p className="text-gray-600">Conservez vos numéros existants lors de la migration.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <CreditCard className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Paiement à l'usage</h3>
            <p className="text-gray-600">Des coûts maîtrisés et transparents, sans surprise.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Activity className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Supervision temps réel</h3>
            <p className="text-gray-600">Suivi en direct de vos flux d'appels et indicateurs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
