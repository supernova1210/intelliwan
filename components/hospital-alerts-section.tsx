"use client"

import { Activity, Radio, Bell } from "lucide-react"

export function HospitalAlertsSection() {
  return (
    <section id="alertes-hospitalier" className="py-20 lg:py-28" style={{ backgroundColor: "#F2F7FB" }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Alertes internes en milieu hospitalier
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Intelliwan accompagne les établissements de santé dans la gestion des alertes internes : appels malade,
            alarmes techniques (oxygène, incendie, pression, frigos), rondes, levée de doute, workflow d'escalade et
            mobilité DECT connectée aux systèmes d'alerte.
          </p>
        </div>

        {/* Schéma dynamique */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Grid avec 3 colonnes pour les 3 blocs principaux */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Bloc 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div
                  className="h-12 flex items-center justify-center text-white font-bold text-xs uppercase"
                  style={{ backgroundColor: "#004467" }}
                >
                  DÉTECTION / APPEL
                </div>
                <div className="p-4 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: "#E8FFF6" }}
                  >
                    <Bell className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                  </div>
                  <p className="text-xs font-medium" style={{ color: "#004467" }}>
                    Appel malade / Alarme
                  </p>
                </div>
              </div>

              {/* Bloc 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div
                  className="h-12 flex items-center justify-center text-white font-bold text-xs uppercase"
                  style={{ backgroundColor: "#004467" }}
                >
                  SERVEUR ALERTES
                </div>
                <div className="p-4 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: "#E8FFF6" }}
                  >
                    <Activity className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                  </div>
                  <p className="text-xs font-medium" style={{ color: "#004467" }}>
                    Routage intelligent
                  </p>
                </div>
              </div>

              {/* Bloc 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div
                  className="h-12 flex items-center justify-center text-white font-bold text-xs uppercase"
                  style={{ backgroundColor: "#004467" }}
                >
                  ÉQUIPES SOIGNANTES
                </div>
                <div className="p-4 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: "#E8FFF6" }}
                  >
                    <Radio className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                  </div>
                  <p className="text-xs font-medium" style={{ color: "#004467" }}>
                    Postes IP / DECT / Mobiles
                  </p>
                </div>
              </div>
            </div>

            {/* Flèches en position absolue entre les blocs - desktop seulement */}
            <div className="hidden md:block">
              {/* Flèche 1: Détection → Serveur */}
              <svg
                className="absolute top-1/2 left-1/3"
                style={{ transform: "translate(-50%, -50%)", width: "60px", height: "30px" }}
                viewBox="0 0 60 30"
              >
                <defs>
                  <marker id="arrow-hospital-1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#004467" />
                  </marker>
                </defs>
                <line
                  x1="5"
                  y1="15"
                  x2="55"
                  y2="15"
                  stroke="#004467"
                  strokeWidth="2"
                  markerEnd="url(#arrow-hospital-1)"
                />
              </svg>

              {/* Flèche 2: Serveur → Équipes */}
              <svg
                className="absolute top-1/2 left-2/3"
                style={{ transform: "translate(-50%, -50%)", width: "60px", height: "30px" }}
                viewBox="0 0 60 30"
              >
                <defs>
                  <marker id="arrow-hospital-2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#004467" />
                  </marker>
                </defs>
                <line
                  x1="5"
                  y1="15"
                  x2="55"
                  y2="15"
                  stroke="#004467"
                  strokeWidth="2"
                  markerEnd="url(#arrow-hospital-2)"
                />
              </svg>
            </div>
          </div>

          {/* Flèche vers supervision */}
          <div className="flex justify-center mt-6">
            <svg width="2" height="50" className="hidden md:block">
              <defs>
                <marker id="arrowhead-down" markerWidth="10" markerHeight="10" refX="3" refY="9" orient="auto">
                  <polygon points="0 0, 6 0, 3 10" fill="#004467" />
                </marker>
              </defs>
              <line x1="1" y1="0" x2="1" y2="40" stroke="#004467" strokeWidth="2" markerEnd="url(#arrowhead-down)" />
            </svg>
          </div>

          {/* Bloc supervision */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-3">
            <div className="md:col-start-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div
                  className="h-12 flex items-center justify-center text-white font-bold text-xs uppercase"
                  style={{ backgroundColor: "#004467" }}
                >
                  SUPERVISION & HISTORIQUE
                </div>
                <div className="p-4 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: "#E8FFF6" }}
                  >
                    <Activity className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                  </div>
                  <p className="text-xs font-medium" style={{ color: "#004467" }}>
                    Traçabilité complète
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
              Intégrations Ascom / Mitel
            </h3>
            <p className="text-gray-600">
              Compatibilité avec les principales solutions de téléphonie hospitalière et systèmes d'alerte.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
              Escalade automatique si non-réponse
            </h3>
            <p className="text-gray-600">
              Notification d'un second niveau d'astreinte si le premier ne répond pas dans le délai imparti.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
              Signalisation lumineuse & audio
            </h3>
            <p className="text-gray-600">
              Voyants LED, sonneries différenciées et affichage sur écrans pour une identification rapide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
