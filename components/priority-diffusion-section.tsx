"use client"

import { Bell, Users, CheckCircle, ClipboardList, BarChart3, ArrowRight } from "lucide-react"

export function PriorityDiffusionSection() {
  return (
    <section id="diffusion-prioritaire" className="py-20 lg:py-28" style={{ backgroundColor: "#F2F7FB" }}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Diffusion prioritaire & gestion de crise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Déclenchez des scénarios de crise préétablis, adressez les bons messages aux bons groupes, suivez les
            accusés de réception et coordonnez les actions, même en cas de perturbation réseau.
          </p>
        </div>

        {/* Schéma processus */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-5 gap-4 items-center">
            {/* Étape 1 */}
            <div className="flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl p-6 shadow-sm text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#E8FFF6" }}
                >
                  <Bell className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: "#004467" }}>
                  Déclenchement
                </span>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 mx-auto" style={{ color: "#004467" }} />

            {/* Étape 2 */}
            <div className="flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl p-6 shadow-sm text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#E8FFF6" }}
                >
                  <Users className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: "#004467" }}>
                  Notification
                </span>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 mx-auto" style={{ color: "#004467" }} />

            {/* Étape 3 */}
            <div className="flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl p-6 shadow-sm text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#E8FFF6" }}
                >
                  <CheckCircle className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: "#004467" }}>
                  Accusés réception
                </span>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 mx-auto" style={{ color: "#004467" }} />

            {/* Étape 4 */}
            <div className="flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl p-6 shadow-sm text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#E8FFF6" }}
                >
                  <ClipboardList className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: "#004467" }}>
                  Coordination
                </span>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 mx-auto" style={{ color: "#004467" }} />

            {/* Étape 5 */}
            <div className="flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl p-6 shadow-sm text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#E8FFF6" }}
                >
                  <BarChart3 className="w-6 h-6" strokeWidth={2} style={{ color: "#004467" }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: "#004467" }}>
                  Rapport
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
              Messages prioritaires (bypass)
            </h3>
            <p className="text-gray-600">
              Contournez les files d'attente et garantissez la diffusion immédiate des messages critiques.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
              Plans d'appel par rôle
            </h3>
            <p className="text-gray-600">
              Ciblez automatiquement les bonnes personnes selon leur fonction et leur niveau de responsabilité.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
              Déclenchement manuel ou automatisé
            </h3>
            <p className="text-gray-600">
              Activez vos scénarios de crise manuellement ou via des déclencheurs automatiques (capteurs, API).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
