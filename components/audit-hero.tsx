"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AuditHero() {
  const scrollToSolutions = () => {
    const element = document.getElementById("nos-solutions")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-2 pb-6 lg:pt-3 lg:pb-8 overflow-hidden bg-white">
      <div className="container mx-auto px-2 lg:px-3">
        <div className="relative rounded-[48px] lg:rounded-[64px] px-8 py-20 md:px-12 md:py-24 lg:px-16 lg:py-40 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004467] via-[#00597a] to-[#003d5c]" />

          <div className="absolute top-10 left-10 w-80 h-80 bg-[#E8FFF6] rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8FFF6] rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#E8FFF6] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#E8FFF6] rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E8FFF6]/15 rounded-full filter blur-2xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="relative max-w-5xl mx-auto space-y-8 text-center z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] text-white">
              Audit & Accompagnement stratégique
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto font-light">
              Comprendre vos infrastructures, analyser vos usages et définir une stratégie télécom claire et durable, alignée avec vos enjeux métiers.
            </p>

            <div className="pt-4">
              <Button
                onClick={scrollToSolutions}
                className="bg-white text-[#004467] px-8 py-6 text-base md:text-lg font-semibold rounded-full hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                Découvrir
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
