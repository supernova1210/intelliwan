import { Layers, Shield, Users } from "lucide-react"

const approaches = [
  {
    icon: Layers,
    title: "Rationaliser vos outils",
    description: "Nous analysons votre environnement pour déployer des solutions simples, cohérentes et durables.",
  },
  {
    icon: Shield,
    title: "Garantir la fiabilité",
    description: "Nos infrastructures sont dimensionnées pour assurer continuité de service, qualité et performance.",
  },
  {
    icon: Users,
    title: "Vous accompagner de bout en bout",
    description: "Audit, installation, migration, formation et support : nous restons présents à chaque étape.",
  },
]

export function CommunicationsApproach() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Titre section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004467" }}>
            Notre approche
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour garantir le succès de vos projets
          </p>
        </div>

        {/* Grille 3 colonnes */}
        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <div
                key={index}
                className="rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#E8FFF6" }}
              >
                {/* Icône */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "white" }}
                >
                  <Icon className="w-8 h-8" strokeWidth={2} style={{ color: "#004467" }} />
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004467" }}>
                  {approach.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
