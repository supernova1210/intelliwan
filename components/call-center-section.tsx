"use client"

import { useState, useEffect } from "react"
import {
  Phone,
  GitBranch,
  Users,
  BarChart3,
  HeadphonesIcon,
  Building2,
  Hospital,
  GraduationCap,
  UserCheck,
  Activity,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

export function CallCenterSection() {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 5)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24" style={{ backgroundColor: "#F2F7FB" }}>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: "#E8FFF6", color: "#004467" }}
          >
            Solution phare
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#004467" }}>
            Centre d'appels / Contacts
          </h2>
        </div>

        {/* A. Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xl text-gray-600 leading-relaxed">
            Optimisez la gestion de vos flux d'appels entrants et sortants grâce à une solution complète de centre de
            contacts. Offrez une expérience utilisateur fluide, pilotez vos équipes en temps réel et mesurez la qualité
            de service avec des indicateurs précis.
          </p>
        </div>

        {/* B. Schema dynamique - Vrai flux avec animation */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-12" style={{ color: "#004467" }}>
            Architecture du flux d'appels
          </h3>

          <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden" style={{ backgroundColor: "#F2F7FB" }}>
            {/* Background decorative circles */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
              style={{ backgroundColor: "#E8FFF6", opacity: 0.5 }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full"
              style={{ backgroundColor: "#E8FFF6", opacity: 0.5 }}
            />

            {/* Clean HTML cards */}
            <div className="relative z-10 hidden lg:block" style={{ height: "400px" }}>
              {/* SVG for flow lines only */}
              <svg viewBox="0 0 1200 400" className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#004467" />
                  </marker>
                </defs>

                {/* Cards are at positions: 120, 360, 600, 840, 1080 (center of each card) */}
                {[120, 360, 600, 840, 1080].map((cx, step) => (
                  <circle
                    key={step}
                    cx={cx}
                    cy="50"
                    r="8"
                    fill={animationStep === step ? "#004467" : "#E8FFF6"}
                    stroke="#004467"
                    strokeWidth="2"
                    style={{ transition: "all 0.3s ease" }}
                  />
                ))}

                {/* Arrow 1: between card 1 (center 120) and card 2 (center 360) -> midpoint 240 */}
                <path
                  d="M 200 200 L 280 200"
                  fill="none"
                  stroke={animationStep >= 0 ? "#004467" : "#ccc"}
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                  style={{ transition: "all 0.5s ease" }}
                />
                {animationStep === 0 && (
                  <circle r="6" fill="#E8FFF6" stroke="#004467" strokeWidth="2">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M 200 200 L 280 200" />
                  </circle>
                )}

                {/* Arrow 2: between card 2 (center 360) and card 3 (center 600) -> midpoint 480 */}
                <path
                  d="M 440 200 L 520 200"
                  fill="none"
                  stroke={animationStep >= 1 ? "#004467" : "#ccc"}
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                  style={{ transition: "all 0.5s ease" }}
                />
                {animationStep === 1 && (
                  <circle r="6" fill="#E8FFF6" stroke="#004467" strokeWidth="2">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M 440 200 L 520 200" />
                  </circle>
                )}

                {/* Arrow 3: between card 3 (center 600) and card 4 (center 840) -> midpoint 720 */}
                <path
                  d="M 680 200 L 760 200"
                  fill="none"
                  stroke={animationStep >= 2 ? "#004467" : "#ccc"}
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                  style={{ transition: "all 0.5s ease" }}
                />
                {animationStep === 2 && (
                  <circle r="6" fill="#E8FFF6" stroke="#004467" strokeWidth="2">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M 680 200 L 760 200" />
                  </circle>
                )}

                {/* Arrow 4: between card 4 (center 840) and card 5 (center 1080) -> midpoint 960 */}
                <path
                  d="M 920 200 L 1000 200"
                  fill="none"
                  stroke={animationStep >= 3 ? "#004467" : "#ccc"}
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                  style={{ transition: "all 0.5s ease" }}
                />
                {animationStep === 3 && (
                  <circle r="6" fill="#E8FFF6" stroke="#004467" strokeWidth="2">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M 920 200 L 1000 200" />
                  </circle>
                )}
              </svg>

              <div className="absolute grid grid-cols-5 gap-8 w-full px-8" style={{ top: "100px", zIndex: 2 }}>
                {[
                  { icon: Phone, title: "Appels entrants", label: "ENTREE" },
                  { icon: GitBranch, title: "Routage", label: "TRAITEMENT" },
                  { icon: Users, title: "Équipes", label: "AGENTS" },
                  { icon: UserCheck, title: "Superviseur", label: "SUPERVISION" },
                  { icon: BarChart3, title: "Dashboard", label: "SORTIE" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all duration-300 mx-auto"
                    style={{
                      width: "140px",
                      borderColor: animationStep === index ? "#004467" : "transparent",
                      transform: animationStep === index ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    {/* Header clean rectangle */}
                    <div
                      className="py-2 px-3 text-center"
                      style={{ backgroundColor: index === 0 || index === 4 ? "#004467" : "#1A6080" }}
                    >
                      <span className="text-white text-xs font-semibold tracking-wide">{item.label}</span>
                    </div>
                    {/* Body */}
                    <div className="p-4 flex flex-col items-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                        style={{ backgroundColor: "#E8FFF6" }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: "#004467" }} />
                      </div>
                      <span className="text-sm font-semibold text-center" style={{ color: "#004467" }}>
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile version */}
            <div className="lg:hidden mt-8 space-y-6">
              {[
                { icon: Phone, title: "Appels entrants", desc: "Réception multicanal", step: "ENTREE" },
                { icon: GitBranch, title: "Routage intelligent", desc: "Distribution automatique", step: "TRAITEMENT" },
                { icon: Users, title: "Agents / Groupes", desc: "Équipes par compétences", step: "AGENTS" },
                { icon: UserCheck, title: "Superviseur", desc: "Pilotage temps réel", step: "SUPERVISION" },
                { icon: BarChart3, title: "Dashboard & Stats", desc: "KPIs et rapports", step: "SORTIE" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className="bg-white rounded-2xl overflow-hidden shadow-md border-2 transition-all"
                    style={{ borderColor: index === animationStep ? "#004467" : "transparent" }}
                  >
                    <div
                      className="py-2 px-4"
                      style={{ backgroundColor: index === 0 || index === 4 ? "#004467" : "#1A6080" }}
                    >
                      <span className="text-white text-xs font-semibold">{item.step}</span>
                    </div>
                    <div className="p-4 flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#E8FFF6" }}
                      >
                        <item.icon className="w-7 h-7" style={{ color: "#004467" }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold" style={{ color: "#004467" }}>
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="flex justify-center py-2">
                      <div
                        className="w-0.5 h-6"
                        style={{ backgroundColor: index < animationStep ? "#004467" : "#E8FFF6" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* C. Explications fonctionnelles - 3 sous-blocs de meme taille */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center mb-12" style={{ color: "#004467" }}>
            Fonctionnalités clés
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GitBranch,
                title: "Routage intelligent",
                items: [
                  "Files d'attente prioritaires",
                  "Règles horaires avancées",
                  "Scénarios personnalisés",
                  "Distribution par compétences",
                ],
              },
              {
                icon: Activity,
                title: "Supervision en temps réel",
                items: [
                  "Visualisation des agents",
                  "Temps d'attente en direct",
                  "Taux d'occupation",
                  "Écoute et intervention",
                ],
              },
              {
                icon: TrendingUp,
                title: "Reporting & qualité",
                items: [
                  "Analyse des flux d'appels",
                  "Mesure de la satisfaction",
                  "Indicateurs clés (SLA)",
                  "Rapports personnalisables",
                ],
              },
            ].map((bloc, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 transition-all hover:shadow-xl h-full flex flex-col border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#004467" }}
                >
                  <bloc.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4" style={{ color: "#004467" }}>
                  {bloc.title}
                </h4>
                <ul className="space-y-3 flex-1">
                  {bloc.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#004467" }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* D. Cas d'usage concrets */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-4" style={{ color: "#004467" }}>
            Cas d'usage concrets
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Notre solution s'adapte à tous les environnements nécessitant une gestion professionnelle des appels
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Mairies & collectivités",
                desc: "Accueil téléphonique centralisé pour les services publics",
              },
              {
                icon: Hospital,
                title: "Hôpitaux & cliniques",
                desc: "Gestion des appels patients et urgences médicales",
              },
              {
                icon: GraduationCap,
                title: "Rectorats & universités",
                desc: "Standard unifié pour l'ensemble des établissements",
              },
              {
                icon: HeadphonesIcon,
                title: "Centres d'accueil",
                desc: "Hotline et support client multicanal",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 transition-all hover:border-[#004467] hover:shadow-lg"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: "#E8FFF6" }}
                >
                  <useCase.icon className="w-6 h-6" style={{ color: "#004467" }} />
                </div>
                <h4 className="font-bold mb-2" style={{ color: "#004467" }}>
                  {useCase.title}
                </h4>
                <p className="text-sm text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
