"use client"

import { Activity, ShieldCheck, ClipboardList } from "lucide-react"

export function ContinuitySupervisionSection() {
  return (
    <section id="continuite-supervision" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Continuité & supervision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos solutions garantissent une disponibilité maximale : redondance serveur, supervision en temps réel, tests
            réguliers des scénarios et rapports automatisés.
          </p>
        </div>

        {/* Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <ShieldCheck className="w-10 h-10" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#004467" }}>
              Haute disponibilité
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Architecture redondante garantissant la continuité de service même en cas de défaillance matérielle.
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <Activity className="w-10 h-10" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#004467" }}>
              Suivi complet des alertes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Supervision en temps réel des systèmes d'alerte avec tableaux de bord dédiés et notifications proactives.
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#E8FFF6" }}
            >
              <ClipboardList className="w-10 h-10" strokeWidth={2} style={{ color: "#004467" }} />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#004467" }}>
              Historisation & conformité
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Journalisation complète de toutes les alertes avec rapports automatisés pour audits et conformité
              réglementaire.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
