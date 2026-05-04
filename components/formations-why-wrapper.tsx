"use client"

import { Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Settings, Users, HeartHandshake } from "lucide-react"

const keyPoints = [
  {
    number: "01",
    title: "Contenu 100% personnalisé",
    description: "Chaque session est adaptée à vos équipes, vos usages et votre environnement télécom spécifique.",
  },
  {
    number: "02",
    title: "Financement OPCO",
    description: "Notre certification Qualiopi vous permet de bénéficier d'une prise en charge par votre OPCO.",
  },
  {
    number: "03",
    title: "Sessions sous 20 jours",
    description: "Démarrage rapide avec des sessions accessibles en présentiel ou en visioconférence.",
  },
]

const reasons = [
  {
    icon: Award,
    title: "Expertise technique reconnue",
    description:
      "Une expertise spécialisée sur les systèmes de téléphonie d'entreprise à grande échelle, avec une maîtrise éprouvée des environnements complexes et des infrastructures critiques.",
  },
  {
    icon: Settings,
    title: "Solutions sur mesure",
    description:
      "Des architectures télécom conçues et dimensionnées selon vos usages réels, vos contraintes techniques et les exigences de continuité de service propres à votre organisation.",
  },
  {
    icon: Users,
    title: "Accompagnement complet",
    description:
      "Audit, conseil, intégration, migration et suivi : un pilotage de bout en bout adapté aux projets télécoms complexes et structurants.",
  },
  {
    icon: HeartHandshake,
    title: "Proximité & réactivité",
    description:
      "Une structure experte et disponible, capable d'intervenir avec réactivité et souplesse, en appui de vos équipes techniques et métiers.",
  },
]

export function FormationsWhyWrapper() {
  return (
    <div className="relative overflow-hidden bg-[#fdfcfa]">
      {/* Shared background blobs */}
      {/* Teal/cyan blob - top left */}
      <div
        className="absolute top-[-5%] left-[-5%] w-[45%] h-[40%] animate-blob-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 180, 180, 0.35) 0%, rgba(0, 200, 180, 0.2) 30%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Blue blob - center right */}
      <div
        className="absolute top-[15%] right-[-10%] w-[40%] h-[35%] animate-blob-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 68, 103, 0.3) 0%, rgba(0, 100, 150, 0.15) 35%, transparent 65%)",
          filter: "blur(70px)",
          animationDelay: "-5s",
        }}
      />

      {/* Green/emerald blob - middle left */}
      <div
        className="absolute top-[40%] left-[5%] w-[35%] h-[30%] animate-blob-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 168, 107, 0.25) 0%, rgba(0, 200, 120, 0.12) 35%, transparent 65%)",
          filter: "blur(75px)",
          animationDelay: "-10s",
        }}
      />

      {/* Warm accent blob - top right */}
      <div
        className="absolute top-[5%] right-[20%] w-[25%] h-[25%] animate-blob-drift pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 180, 100, 0.2) 0%, rgba(255, 200, 120, 0.1) 40%, transparent 60%)",
          filter: "blur(55px)",
        }}
      />

      {/* Blue blob - bottom center */}
      <div
        className="absolute bottom-[10%] left-[30%] w-[40%] h-[35%] animate-blob-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 68, 103, 0.25) 0%, rgba(0, 100, 150, 0.12) 35%, transparent 65%)",
          filter: "blur(80px)",
          animationDelay: "-7s",
        }}
      />

      {/* Teal blob - bottom right */}
      <div
        className="absolute bottom-[-5%] right-[0%] w-[35%] h-[30%] animate-blob-drift pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 180, 180, 0.3) 0%, rgba(0, 200, 180, 0.15) 30%, transparent 65%)",
          filter: "blur(70px)",
          animationDelay: "-3s",
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ============ FORMATIONS SECTION ============ */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
            {/* Left side - Image with dark overlay */}
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-[2rem]">
                {/* Dark overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

                {/* Main image */}
                <img
                  src="/professional-telecom-training-session-with-headset.jpg"
                  alt="Formation téléphonie professionnelle"
                  className="h-auto min-h-[400px] w-full object-cover lg:min-h-[500px]"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 lg:max-w-xl">
              {/* Header */}
              <div className="mb-10">
                <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl xl:text-5xl">
                  Formations certifiées Qualiopi
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  Des formations 100% sur-mesure, conçues pour vos équipes, vos usages et vos outils. Aucun module
                  standard.
                </p>
              </div>

              {/* Key points */}
              <div className="mb-10 space-y-8">
                {keyPoints.map((point, index) => (
                  <div key={index} className="group flex gap-5">
                    {/* Number indicator with gradient ring */}
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] via-[#0284c7] to-[#10b981] opacity-20" />
                      <div className="absolute inset-[2px] rounded-full bg-[#fdfcfa]" />
                      <span className="relative z-10 text-sm font-semibold text-[#0891b2]">{point.number}</span>
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="mb-1 font-sans text-lg font-semibold text-gray-900">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/formations">
                  <Button className="group rounded-full bg-[#0c1c2c] px-6 py-6 text-base font-medium text-white transition-all hover:bg-[#1a2d40]">
                    Découvrir nos formations
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a
                  href="/documents/intelliwan-certificat-qualiopi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-[#0891b2] hover:text-[#0891b2]"
                >
                  <Download className="h-4 w-4" strokeWidth={2} />
                  Certificat Qualiopi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY INTELLIWAN SECTION ============ */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl xl:text-5xl">
              Pourquoi choisir Intelliwan ?
            </h2>

            {/* Icon row */}
            <div className="mb-6 flex items-center justify-center gap-3">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md border border-gray-100"
                >
                  <reason.icon className="h-5 w-5 text-[#0891b2]" strokeWidth={2} />
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600">
              L&apos;expertise télécom au service de votre transformation digitale
            </p>
          </div>

          {/* Reasons grid */}
          <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-10 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={index} className="group relative flex gap-5">
                {/* Number indicator with gradient ring */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] via-[#0284c7] to-[#10b981] opacity-20" />
                  <div className="absolute inset-[2px] rounded-full bg-[#fdfcfa]" />
                  <span className="relative z-10 text-sm font-semibold text-[#0891b2]">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0c1c2c] px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-[#1a2d40] hover:shadow-xl"
            >
              Découvrir notre approche
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
