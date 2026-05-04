"use client"

import { Building2, Cloud, Globe, Zap, Shield, Settings } from "lucide-react"

export function SdwanSection() {
  return (
    <section id="sdwan" className="py-20 bg-[#F2F7FB]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">SD-WAN intelligent</h2>
        </div>

        {/* Schema dynamique SD-WAN */}
        <div className="mb-16 overflow-x-auto">
          <div className="relative min-w-[900px] mx-auto">
            {/* Grille pour aligner les cartes */}
            <div className="grid grid-cols-[180px_1fr_200px_1fr_180px] items-center gap-0 h-[350px]">
              {/* Colonne 1: Sites A et B empilés */}
              <div className="flex flex-col gap-8 h-full justify-center">
                {/* Site A */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-[#004467] py-2 px-4">
                    <h4 className="text-white font-semibold text-center text-xs">SITE A</h4>
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-2">
                      <Building2 className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-600 text-xs text-center">Siège social</p>
                  </div>
                </div>

                {/* Site B */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-[#004467] py-2 px-4">
                    <h4 className="text-white font-semibold text-center text-xs">SITE B</h4>
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-2">
                      <Building2 className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-600 text-xs text-center">Agence régionale</p>
                  </div>
                </div>
              </div>

              {/* Colonne 2: Lignes Sites vers Hub */}
              <div className="relative h-full flex items-center">
                <svg className="w-full h-full" viewBox="0 0 120 350" preserveAspectRatio="none">
                  {/* Ligne Site A vers Hub */}
                  <path
                    d="M0 90 C60 90 60 175 120 175"
                    stroke="#004467"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                  />
                  {/* Ligne Site B vers Hub */}
                  <path
                    d="M0 260 C60 260 60 175 120 175"
                    stroke="#004467"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                  />
                  {/* Points animés */}
                  <circle r="5" fill="#E8FFF6" stroke="#004467" strokeWidth="2">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M0 90 C60 90 60 175 120 175" />
                  </circle>
                  <circle r="5" fill="#E8FFF6" stroke="#004467" strokeWidth="2">
                    <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M0 260 C60 260 60 175 120 175" />
                  </circle>
                </svg>
                {/* Labels */}
                <span className="absolute top-[60px] left-1/2 -translate-x-1/2 text-[11px] text-[#004467] font-medium whitespace-nowrap">
                  MPLS / Internet
                </span>
                <span className="absolute bottom-[60px] left-1/2 -translate-x-1/2 text-[11px] text-[#004467] font-medium whitespace-nowrap">
                  LTE / Fibre
                </span>
              </div>

              {/* Colonne 3: Hub SD-WAN central */}
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl shadow-xl border-2 border-[#004467] overflow-hidden w-full">
                  <div className="bg-[#004467] py-3 px-4">
                    <h4 className="text-white font-semibold text-center text-sm">SD-WAN HUB</h4>
                  </div>
                  <div className="p-5 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3 relative">
                      <Globe className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <p className="text-gray-600 text-sm text-center font-medium">Control Center</p>
                    <p className="text-gray-400 text-xs text-center mt-1">Supervision intelligente</p>
                  </div>
                </div>
              </div>

              {/* Colonne 4: Ligne Hub vers Cloud */}
              <div className="relative h-full flex items-center">
                <svg className="w-full h-[50px]" viewBox="0 0 120 50" preserveAspectRatio="none">
                  {/* Ligne droite */}
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#004467" strokeWidth="3" />
                  {/* Flèche */}
                  <polygon points="100,25 85,15 85,35" fill="#004467" />
                  {/* Point animé */}
                  <circle r="5" fill="#E8FFF6" stroke="#004467" strokeWidth="2">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M0 25 L100 25" />
                  </circle>
                </svg>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[11px] text-[#004467] font-medium">
                  Priorisation
                </span>
              </div>

              {/* Colonne 5: Internet / Cloud */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-[#004467] py-2 px-4">
                  <h4 className="text-white font-semibold text-center text-xs">INTERNET / CLOUD</h4>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-2">
                    <Cloud className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-600 text-xs text-center">Applications SaaS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Le SD-WAN permet d'interconnecter plusieurs sites via un réseau virtualisé sécurisé, en combinant différents
            liens (Internet, LTE, MPLS). Cette technologie garantit une performance constante, une haute disponibilité
            et une gestion centralisée des applications critiques.
          </p>
        </div>

        {/* 3 Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Zap className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Optimisation performance</h3>
            <p className="text-gray-600">Priorisation intelligente du trafic selon vos applications critiques.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Shield className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Résilience multisite</h3>
            <p className="text-gray-600">Basculement automatique entre liens pour une continuité garantie.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Settings className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Gestion centralisée</h3>
            <p className="text-gray-600">Pilotage unifié de tous vos sites depuis une console unique.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
