"use client"

import { Users, ShieldCheck, Server, Lock, KeyRound, Target } from "lucide-react"

export function DataSecurityDetailSection() {
  return (
    <section id="securite-donnees" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Sécurité des données</h2>
        </div>

        {/* Mini-schema simple */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Block 1 - Utilisateurs */}
            <div className="w-64 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-sm">UTILISATEURS</h4>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3">
                  <Users className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-sm text-center">Collaborateurs & accès</p>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center w-16">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path
                  d="M0 12H40M40 12L32 4M40 12L32 20"
                  stroke="#004467"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="md:hidden flex items-center justify-center h-8">
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                <path
                  d="M12 0V24M12 24L4 16M12 24L20 16"
                  stroke="#004467"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Block 2 - Firewall */}
            <div className="w-64 bg-white rounded-2xl shadow-lg border-2 border-[#004467] overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-sm">FIREWALL FORTINET</h4>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-sm text-center">Protection certifiée</p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center w-16">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path
                  d="M0 12H40M40 12L32 4M40 12L32 20"
                  stroke="#004467"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="md:hidden flex items-center justify-center h-8">
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                <path
                  d="M12 0V24M12 24L4 16M12 24L20 16"
                  stroke="#004467"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Block 3 - Serveurs */}
            <div className="w-64 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-sm">SERVEURS / CLOUD</h4>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3">
                  <Server className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-sm text-center">Accès distant sécurisé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            La protection des données est un enjeu majeur. Intelliwan déploie des solutions de sécurité basées sur des
            firewalls certifiés Fortinet, garantissant la confidentialité, la disponibilité et l'accès sécurisé à vos
            ressources, même à distance.
          </p>
        </div>

        {/* 3 Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Lock className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Protection des données critiques</h3>
            <p className="text-gray-600">Sécurisez vos informations sensibles contre les menaces.</p>
          </div>

          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <KeyRound className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Accès distant sécurisé</h3>
            <p className="text-gray-600">VPN et connexions chiffrées pour le télétravail.</p>
          </div>

          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Target className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Solutions adaptées</h3>
            <p className="text-gray-600">Une sécurité dimensionnée selon votre niveau de risque.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
