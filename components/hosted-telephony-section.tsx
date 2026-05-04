"use client"

import { Cloud, Smartphone, Building2, Zap, Shield, Globe, BookUser, Video, Hash, Users, Voicemail } from "lucide-react"

export function HostedTelephonySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Téléphonie hébergée</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des communications fiables, sécurisées et évolutives, accessibles depuis n'importe quel appareil.
          </p>
        </div>

        {/* Mini-schema simple */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Block 1 - Appareils */}
            <div className="w-64 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-sm">APPAREILS IP & SOFTPHONES</h4>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3">
                  <Smartphone className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-sm text-center">Téléphones, PC, mobiles</p>
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

            {/* Block 2 - Cloud */}
            <div className="w-64 bg-white rounded-2xl shadow-lg border-2 border-[#004467] overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-sm">CLOUD TÉLÉCOM SÉCURISÉ</h4>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3">
                  <Cloud className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-sm text-center">Infrastructure redondante</p>
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

            {/* Block 3 - Utilisateurs */}
            <div className="w-64 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[#004467] py-3 px-4">
                <h4 className="text-white font-semibold text-center text-sm">UTILISATEURS & SITES</h4>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-3">
                  <Building2 className="w-7 h-7 text-[#004467]" strokeWidth={1.5} />
                </div>
                <p className="text-gray-600 text-sm text-center">Bureaux, sites distants</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Bénéfices clés */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Zap className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Flexibilité totale</h3>
            <p className="text-gray-600">
              Numéros, postes, utilisateurs : tout s'adapte en un clic, sans lourdeur technique.
            </p>
          </div>

          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Shield className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Haute disponibilité</h3>
            <p className="text-gray-600">
              Fonctionnement garanti, même en cas d'incident local — le cloud prend le relais.
            </p>
          </div>

          <div className="bg-[#F2F7FB] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E8FFF6] flex items-center justify-center mx-auto mb-5">
              <Globe className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#004467] mb-3">Mobilité intégrée</h3>
            <p className="text-gray-600">
              Accès à la téléphonie depuis un fixe, un PC, ou un smartphone professionnel.
            </p>
          </div>
        </div>

        {/* Fonctionnalités essentielles */}
        <div className="bg-[#E8FFF6] rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-bold text-[#004467] mb-6 text-center">Fonctionnalités essentielles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: BookUser, label: "Annuaire partagé" },
              { icon: Video, label: "Audio/vidéo unifiées" },
              { icon: Hash, label: "Numéros spéciaux" },
              { icon: Users, label: "Conférence téléphonique" },
              { icon: Voicemail, label: "Messagerie vocale moderne" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm">
                <item.icon className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />
                <span className="text-[#004467] font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
