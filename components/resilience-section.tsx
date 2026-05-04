"use client"

import { Globe, Signal, Router, Cloud, ShieldCheck, RefreshCw, Activity } from "lucide-react"

export function ResilienceSection() {
  return (
    <section id="resilience-continuite" className="py-20 bg-[#F2F7FB]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Résilience & continuité des services</h2>
        </div>

        {/* Schéma dynamique de redondance */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* Container du schéma */}
            <div className="grid grid-cols-5 gap-4 items-center">
              {/* Colonne 1 : Liens entrants */}
              <div className="col-span-1 flex flex-col gap-6">
                {/* Fibre principale */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-[#004467] py-2 px-3">
                    <h4 className="text-white font-semibold text-center text-[10px] uppercase tracking-wide">
                      Fibre principale
                    </h4>
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#E8FFF6] flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* 4G/5G secours */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-[#E8FFF6] py-2 px-3">
                    <h4 className="text-[#004467] font-semibold text-center text-[10px] uppercase tracking-wide">
                      4G/5G secours
                    </h4>
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#F2F7FB] flex items-center justify-center">
                      <Signal className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne 2 : Lignes de connexion vers routeur */}
              <div className="col-span-1 relative h-48">
                <svg className="w-full h-full" viewBox="0 0 100 200" preserveAspectRatio="none">
                  {/* Ligne fibre principale vers routeur */}
                  <path d="M0 50 Q50 50 100 100" stroke="#004467" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Ligne 4G/5G vers routeur */}
                  <path
                    d="M0 150 Q50 150 100 100"
                    stroke="#004467"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Point animé sur fibre */}
                  <circle r="4" fill="#004467">
                    <animateMotion dur="2s" repeatCount="indefinite">
                      <mpath href="#pathFibre" />
                    </animateMotion>
                  </circle>
                  <path id="pathFibre" d="M0 50 Q50 50 100 100" fill="none" />
                </svg>
                {/* Labels */}
                <div className="absolute top-6 left-0 text-[10px] text-[#004467] font-medium bg-white px-2 py-1 rounded">
                  Principal
                </div>
                <div className="absolute bottom-6 left-0 text-[10px] text-gray-500 font-medium bg-white px-2 py-1 rounded">
                  Secours
                </div>
              </div>

              {/* Colonne 3 : Routeur intelligent */}
              <div className="col-span-1 flex justify-center">
                <div className="w-full bg-white rounded-2xl shadow-xl border-2 border-[#004467] overflow-hidden">
                  <div className="bg-[#004467] py-3 px-3">
                    <h4 className="text-white font-bold text-center text-xs uppercase tracking-wide">
                      Routeur intelligent
                    </h4>
                  </div>
                  <div className="p-5 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3 relative">
                      <Router className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                      {/* Indicateur actif */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white animate-pulse"></div>
                    </div>
                    <p className="text-gray-600 text-[10px] text-center font-medium">Bascule automatique</p>
                  </div>
                </div>
              </div>

              {/* Colonne 4 : Ligne vers services */}
              <div className="col-span-1 relative h-48 flex items-center">
                <svg className="w-full h-12" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <line x1="0" y1="25" x2="85" y2="25" stroke="#004467" strokeWidth="2" strokeLinecap="round" />
                  <polygon points="100,25 85,18 85,32" fill="#004467" />
                  {/* Point animé */}
                  <circle r="4" fill="#E8FFF6" stroke="#004467" strokeWidth="2">
                    <animate attributeName="cx" values="0;80;0" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="25;25;25" dur="3s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Colonne 5 : Services télécom */}
              <div className="col-span-1 flex justify-center">
                <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-[#004467] py-3 px-3">
                    <h4 className="text-white font-semibold text-center text-xs uppercase tracking-wide">
                      Services Télécom
                    </h4>
                  </div>
                  <div className="p-5 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-2">
                      <Cloud className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-600 text-[10px] text-center">Voix, données, cloud</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Labels sous le schéma */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <RefreshCw className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                <span className="text-sm font-medium text-[#004467]">Bascule automatique</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Activity className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                <span className="text-sm font-medium text-[#004467]">Supervision immédiate</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                <span className="text-sm font-medium text-[#004467]">Disponibilité renforcée</span>
              </div>
            </div>
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Pour garantir la disponibilité de vos communications, nous déployons des architectures résilientes : liens
            multiples, bascule automatique, multi-opérateur si nécessaire, supervision proactive des liens et alertes en
            cas d'incident.
          </p>
        </div>

        {/* 3 Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <RefreshCw className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Continuité de service</h3>
            <p className="text-gray-600">Vos communications restent opérationnelles en toutes circonstances.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <ShieldCheck className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Résilience en cas d'incident</h3>
            <p className="text-gray-600">Bascule automatique sur le lien de secours sans interruption.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Activity className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Haute disponibilité</h3>
            <p className="text-gray-600">Architecture dimensionnée pour les environnements critiques.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
