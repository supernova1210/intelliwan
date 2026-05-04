"use client"

import { useState } from "react"
import { Phone, Search, AlertTriangle, GraduationCap, Headphones, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

const solutions = [
  {
    icon: Phone,
    title: "Communications & collaborations",
    description:
      "Téléphonie d'entreprise et communications unifiées pour environnements complexes : systèmes multi-sites, forte volumétrie d'utilisateurs et infrastructures critiques.",
    href: "/solutions/communications-collaborations",
    color: "bg-blue-500",
    gradientBg: "from-blue-600 via-indigo-600 to-violet-700",
    image: "/enterprise-phone-system-unified-communications-das.jpg",
  },
  {
    icon: Headphones,
    title: "Centres de contact",
    description:
      "Centres de contact multicanal intégrés à des systèmes de téléphonie complexes, adaptés aux collectivités, établissements de santé et organisations à forte exigence opérationnelle.",
    href: "/solutions/contact-center",
    color: "bg-emerald-500",
    gradientBg: "from-emerald-600 via-teal-600 to-cyan-700",
    image: "/contact-center-multichannel-dashboard-customer-ser.jpg",
  },
  {
    icon: Search,
    title: "Audit & accompagnement",
    description:
      "Audit d'infrastructure télécom, conseil, reprise d'existant et accompagnement stratégique pour sécuriser et faire évoluer des systèmes de communication à grande échelle.",
    href: "/solutions/audit-accompagnement",
    color: "bg-amber-500",
    gradientBg: "from-amber-500 via-orange-600 to-rose-600",
    image: "/telecom-infrastructure-audit-analytics-dashboard.jpg",
  },
  {
    icon: AlertTriangle,
    title: "Gestion de crise & alertes",
    description:
      "Dispositifs de continuité d'activité, solutions d'alerte et de redondance pour sites sensibles : collectivités, santé, industrie et environnements critiques.",
    href: "/solutions/gestion-de-crise",
    color: "bg-rose-500",
    gradientBg: "from-rose-600 via-pink-600 to-fuchsia-700",
    image: "/crisis-management-alert-system-emergency-dashboard.jpg",
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description:
      "Formations techniques adaptées aux environnements télécom complexes, destinées aux équipes IT et métiers, en lien avec les systèmes déployés.",
    href: "/formations",
    color: "bg-violet-500",
    gradientBg: "from-violet-600 via-purple-600 to-indigo-700",
    image: "/technical-training-telecom-it-learning-platform.jpg",
  },
]

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
            <span className="text-sm font-medium text-slate-600">Expertise télécom & réseau</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Nos solutions</h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Selectable Items */}
          <div className="space-y-1">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="group cursor-pointer"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Item Container */}
                <div
                  className={cn(
                    "relative border-l-2 py-5 pl-8 transition-all duration-300",
                    activeIndex === index ? "border-l-slate-900" : "border-l-slate-200 hover:border-l-slate-300",
                  )}
                >
                  {/* Bullet Point */}
                  <div
                    className={cn(
                      "absolute -left-[7px] top-6 h-3 w-3 rounded-full border-2 transition-all duration-300",
                      activeIndex === index
                        ? "border-slate-900 bg-slate-900"
                        : "border-slate-300 bg-white group-hover:border-slate-400",
                    )}
                  />

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-xl font-semibold transition-colors duration-300",
                      activeIndex === index ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600",
                    )}
                  >
                    {solution.title}
                  </h3>

                  {/* Expandable Content */}
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      activeIndex === index ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate-600 leading-relaxed mb-4">{solution.description}</p>
                      <Link
                        href={solution.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                      >
                        <span>Voir les détails</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Dynamic Preview */}
          <div className="relative lg:sticky lg:top-32">
            <div
              className={cn(
                "relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 ease-out",
                "aspect-[4/3] bg-gradient-to-br",
                solutions[activeIndex].gradientBg,
              )}
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                {/* Floating shapes */}
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

                {/* Animated lines */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 500">
                  <path
                    d="M 50 400 Q 200 350 300 200 T 550 100"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    strokeDasharray="8 8"
                    className="animate-[dash_20s_linear_infinite]"
                  />
                  <path
                    d="M 0 300 Q 150 200 300 250 T 600 150"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="animate-[dash_15s_linear_infinite]"
                  />
                </svg>
              </div>

              {/* Preview Image with transition */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {solutions.map((solution, index) => (
                  <div
                    key={solution.title}
                    className={cn(
                      "absolute inset-8 transition-all duration-700 ease-out",
                      activeIndex === index
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4 pointer-events-none",
                    )}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl ring-1 ring-white/20">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        fill
                        className="object-cover opacity-90"
                      />

                      {/* Floating UI elements for visual interest */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                          <div
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-lg text-white",
                              solution.color,
                            )}
                          >
                            <solution.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{solution.title}</p>
                            <p className="text-xs text-slate-500">Solution Intelliwan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Index indicator */}
              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-lg font-bold text-white">{String(activeIndex + 1).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="mt-6 flex justify-center gap-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    activeIndex === index ? "w-8 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400",
                  )}
                  aria-label={`View solution ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
