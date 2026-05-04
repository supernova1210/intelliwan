"use client"

import { Phone, MessageSquare, MonitorPlay, Smartphone, Zap, Check, CheckCircle } from "lucide-react"

export function MultichannelAlertSection() {
  return (
    <section id="alerte-multicanale" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Alerte multicanale
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Déclenchez rapidement des alertes via plusieurs canaux : appels téléphoniques, SMS, messages audio, écrans,
            panneaux d'affichage et notifications mobiles. Les messages peuvent être préenregistrés ou dynamiques, et
            leur diffusion est entièrement journalisée.
          </p>
        </div>

        {/* Schéma en étoile */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Centre - Système d'alerte */}
            <div
              className="absolute z-10 w-48 h-48 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center"
              style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: "#E8FFF6" }}
              >
                <Zap className="w-8 h-8" strokeWidth={2} style={{ color: "#004467" }} />
              </div>
              <span className="font-bold text-center px-4" style={{ color: "#004467" }}>
                Système d'alerte
              </span>
            </div>

            {/* SMS - Haut */}
            <div className="absolute" style={{ left: "50%", top: "10%", transform: "translateX(-50%)" }}>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-xl bg-white shadow-lg flex flex-col items-center justify-center">
                  <MessageSquare className="w-8 h-8 mb-2" strokeWidth={2} style={{ color: "#004467" }} />
                  <span className="text-sm font-medium" style={{ color: "#004467" }}>
                    SMS
                  </span>
                </div>
                {/* Ligne vers le centre */}
                <svg className="absolute" width="2" height="80" style={{ top: "128px" }}>
                  <line x1="1" y1="0" x2="1" y2="80" stroke="#004467" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>

            {/* Téléphonie - Gauche */}
            <div className="absolute" style={{ left: "10%", top: "50%", transform: "translateY(-50%)" }}>
              <div className="flex items-center">
                <div className="w-32 h-32 rounded-xl bg-white shadow-lg flex flex-col items-center justify-center">
                  <Phone className="w-8 h-8 mb-2" strokeWidth={2} style={{ color: "#004467" }} />
                  <span className="text-sm font-medium text-center px-2" style={{ color: "#004467" }}>
                    Téléphonie
                  </span>
                </div>
                {/* Ligne vers le centre */}
                <svg className="absolute" width="150" height="2" style={{ left: "128px" }}>
                  <line x1="0" y1="1" x2="150" y2="1" stroke="#004467" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>

            {/* Écrans / Panneaux - Droite */}
            <div className="absolute" style={{ right: "10%", top: "50%", transform: "translateY(-50%)" }}>
              <div className="flex items-center">
                {/* Ligne vers le centre */}
                <svg className="absolute" width="150" height="2" style={{ right: "128px" }}>
                  <line x1="0" y1="1" x2="150" y2="1" stroke="#004467" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
                <div className="w-32 h-32 rounded-xl bg-white shadow-lg flex flex-col items-center justify-center">
                  <MonitorPlay className="w-8 h-8 mb-2" strokeWidth={2} style={{ color: "#004467" }} />
                  <span className="text-sm font-medium text-center px-2" style={{ color: "#004467" }}>
                    Écrans / Panneaux
                  </span>
                </div>
              </div>
            </div>

            {/* Email / App mobile - Bas */}
            <div className="absolute" style={{ left: "50%", bottom: "10%", transform: "translateX(-50%)" }}>
              <div className="flex flex-col items-center">
                {/* Ligne vers le centre */}
                <svg className="absolute" width="2" height="80" style={{ bottom: "128px" }}>
                  <line x1="1" y1="0" x2="1" y2="80" stroke="#004467" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
                <div className="w-32 h-32 rounded-xl bg-white shadow-lg flex flex-col items-center justify-center">
                  <Smartphone className="w-8 h-8 mb-2" strokeWidth={2} style={{ color: "#004467" }} />
                  <span className="text-sm font-medium text-center px-2" style={{ color: "#004467" }}>
                    Email / App mobile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bénéfices */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <Zap className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#004467" }}>
              Rapidité de diffusion
            </h3>
            <p className="text-gray-600">Alertez vos équipes en quelques secondes sur tous les canaux simultanément.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <Check className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#004467" }}>
              Coordination efficace
            </h3>
            <p className="text-gray-600">Organisez la réponse collective avec des messages ciblés par groupe.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <CheckCircle className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#004467" }}>
              Accusés de réception disponibles
            </h3>
            <p className="text-gray-600">Suivez en temps réel qui a reçu et consulté vos messages d'alerte.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
