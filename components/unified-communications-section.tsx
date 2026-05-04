"use client"

import {
  Phone,
  MessageSquare,
  Video,
  Users,
  BookUser,
  Circle,
  CheckCircle2,
  Layers,
  Clock,
  UsersRound,
} from "lucide-react"

export function UnifiedCommunicationsSection() {
  const hubItems = [
    { icon: Phone, label: "Appels", angle: 0 },
    { icon: MessageSquare, label: "Chat", angle: 60 },
    { icon: Video, label: "Visio", angle: 120 },
    { icon: Circle, label: "Présence", angle: 180 },
    { icon: BookUser, label: "Répertoire", angle: 240 },
    { icon: Users, label: "Équipes", angle: 300 },
  ]

  return (
    <section className="py-20 bg-[#F2F7FB]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004467] mb-4">Communications unifiées</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un outil unique pour regrouper vos appels, vos messages et vos réunions.
          </p>
        </div>

        {/* Schema circulaire + Fonctionnalités */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Fonctionnalités clés - Gauche */}
          <div>
            <h3 className="text-2xl font-bold text-[#004467] mb-8">Fonctionnalités clés</h3>
            <div className="space-y-5">
              {[
                "Appels et messages dans une interface unifiée",
                "État de présence (disponible, occupé, absent…)",
                "Chat interne et collaboration instantanée",
                "Répertoire partagé et synchronisé",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#E8FFF6] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schema circulaire - Droite */}
          <div className="flex items-center justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
              {/* Cercle extérieur avec animation */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
                {/* Cercle de fond */}
                <circle cx="190" cy="190" r="150" fill="none" stroke="#E8FFF6" strokeWidth="2" />
                {/* Cercle animé */}
                <circle
                  cx="190"
                  cy="190"
                  r="150"
                  fill="none"
                  stroke="#004467"
                  strokeWidth="2"
                  strokeDasharray="942"
                  strokeDashoffset="706"
                  strokeLinecap="round"
                  className="animate-[spin_20s_linear_infinite] origin-center"
                />
                {/* Lignes de connexion vers le centre */}
                {hubItems.map((item, index) => {
                  const angleRad = (item.angle - 90) * (Math.PI / 180)
                  const x = 190 + 150 * Math.cos(angleRad)
                  const y = 190 + 150 * Math.sin(angleRad)
                  return (
                    <line
                      key={index}
                      x1="190"
                      y1="190"
                      x2={x}
                      y2={y}
                      stroke="#E8FFF6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  )
                })}
              </svg>

              {/* Hub central */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#004467] shadow-xl flex items-center justify-center z-10">
                <div className="text-center">
                  <Layers className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-1" strokeWidth={1.5} />
                  <span className="text-white text-xs font-semibold">HUB UC</span>
                </div>
              </div>

              {/* Items autour du cercle */}
              {hubItems.map((item, index) => {
                const angleRad = (item.angle - 90) * (Math.PI / 180)
                const radius = 150
                const x = 50 + (radius / 190) * 50 * Math.cos(angleRad)
                const y = 50 + (radius / 190) * 50 * Math.sin(angleRad)

                return (
                  <div
                    key={index}
                    className="absolute w-16 h-16 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <div className="w-full h-full rounded-2xl bg-white shadow-lg flex flex-col items-center justify-center border border-gray-100 hover:border-[#004467] transition-colors cursor-default">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-[#004467] mb-1" strokeWidth={1.5} />
                      <span className="text-[10px] md:text-xs font-medium text-gray-600">{item.label}</span>
                    </div>
                  </div>
                )
              })}

              {/* Points animés sur le cercle */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#004467]"
                  style={{
                    top: "50%",
                    left: "50%",
                    animation: `orbit 8s linear infinite`,
                    animationDelay: `${i * 2.67}s`,
                  }}
                />
              ))}
              <style jsx>{`
                @keyframes orbit {
                  from {
                    transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg);
                  }
                  to {
                    transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Bénéfices utilisateurs */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-bold text-[#004467] mb-2">Moins d'outils dispersés</h4>
            <p className="text-gray-600 text-sm">Une seule application pour tout gérer.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-bold text-[#004467] mb-2">Gain de temps immédiat</h4>
            <p className="text-gray-600 text-sm">Moins de frictions, moins d'erreurs, plus de fluidité.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E8FFF6] flex items-center justify-center mb-4">
              <UsersRound className="w-6 h-6 text-[#004467]" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-bold text-[#004467] mb-2">Collaboration renforcée</h4>
            <p className="text-gray-600 text-sm">Idéal pour équipes multisites ou en télétravail.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
