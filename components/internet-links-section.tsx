"use client"

import { Globe, Router, Cloud, Wifi, Signal, Zap, TrendingUp, ShieldCheck } from "lucide-react"

export function InternetLinksSection() {
  return (
    <section id="liens-internet" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Liens Internet professionnels</h2>
        </div>

        {/* Schéma minimaliste */}
        <div className="mb-16">
          {/* Ligne 1 : 4 types de liens */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-[#F2F7FB] rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-[#004467]">Fibre dédiée</p>
            </div>
            <div className="bg-[#F2F7FB] rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-3">
                <Wifi className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-[#004467]">Fibre mutualisée</p>
            </div>
            <div className="bg-[#F2F7FB] rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-3">
                <Router className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-[#004467]">SDSL / VDSL</p>
            </div>
            <div className="bg-[#F2F7FB] rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-3">
                <Signal className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-[#004467]">4G / 5G secours</p>
            </div>
          </div>

          {/* Flèches vers le bas */}
          <div className="flex justify-center mb-6">
            <svg width="200" height="60" viewBox="0 0 200 60" fill="none" className="mx-auto">
              <path d="M30 0 L30 30 L100 30" stroke="#004467" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M70 0 L70 30 L100 30" stroke="#004467" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M130 0 L130 30 L100 30" stroke="#004467" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M170 0 L170 30 L100 30" stroke="#004467" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M100 30 L100 55" stroke="#004467" strokeWidth="2" strokeLinecap="round" fill="none" />
              <polygon points="100,60 95,50 105,50" fill="#004467" />
            </svg>
          </div>

          {/* Routeur entreprise */}
          <div className="flex justify-center mb-6">
            <div className="w-72 bg-white rounded-2xl shadow-lg border-2 border-[#004467] overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-sm">ROUTEUR ENTREPRISE</h4>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3">
                  <Router className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-sm text-center">Agrégation & routage intelligent</p>
              </div>
            </div>
          </div>

          {/* Flèche vers le bas */}
          <div className="flex justify-center mb-6">
            <svg width="48" height="40" viewBox="0 0 48 40" fill="none">
              <path
                d="M24 0V30M24 30L16 22M24 30L32 22"
                stroke="#004467"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Destination finale */}
          <div className="flex justify-center">
            <div className="w-80 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-sm">INTERNET / CLOUD / TÉLÉPHONIE</h4>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3">
                  <Cloud className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-sm text-center">Applications SaaS & services cloud</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous proposons des accès Internet adaptés aux environnements critiques : fibre dédiée, fibre mutualisée,
            SDSL, VDSL et solutions 4G/5G de secours. Nos liens garantissent des débits stables, une latence maîtrisée
            et une disponibilité optimale.
          </p>
        </div>

        {/* 3 Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Zap className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Débits fiables et garantis</h3>
            <p className="text-gray-600">Une connectivité stable pour vos applications critiques.</p>
          </div>

          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <TrendingUp className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Architecture adaptée</h3>
            <p className="text-gray-600">Des solutions dimensionnées selon votre site et vos usages.</p>
          </div>

          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <ShieldCheck className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Solutions de secours</h3>
            <p className="text-gray-600">Basculement automatique en cas de défaillance du lien principal.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
